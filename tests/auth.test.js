// Checks the login gate and progress sync with a fake Firebase (tests/firebase-stub.js),
// so it runs offline and never touches real accounts.
//   node tests/auth.test.js           (run `npm run build` first)
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
const ROOT=path.join(__dirname,'..');const OUT=path.join(__dirname,'out');fs.mkdirSync(OUT,{recursive:true});
(async()=>{const b=await chromium.launch();let failed=0;const check=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)failed++};
  for(const [nm,vp,sc] of [['desk',{width:1280,height:800},'light'],['phone',{width:390,height:844},'dark']]){
    const ctx=await b.newContext({viewport:vp,colorScheme:sc});
    await ctx.route('**/www.gstatic.com/firebasejs/**',r=>r.fulfill({path:path.join(__dirname,r.request().url().includes('app-compat')?'firebase-stub.js':'empty.js'),contentType:'application/javascript'}));
    await ctx.route('**/cdn.jsdelivr.net/**',r=>r.abort());await ctx.route('**/fonts.g*/**',r=>r.abort());
    const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
    await p.goto('file://'+path.join(ROOT,'index.html'));await p.waitForTimeout(600);
    check(!(await p.$eval('#ww-auth',e=>e.hidden)),nm+': login gate shows first');
    await p.screenshot({path:path.join(OUT,nm+'-login.png')});
    if(nm==='desk'){
      await p.fill('#au-email','a@b.com');await p.fill('#au-pw','bad');await p.click('#au-submit');await p.waitForTimeout(300);
      check((await p.textContent('#au-msg')).includes('don’t match'),'wrong password shows a friendly error');
      await p.fill('#au-pw','goodpass1');await p.click('#au-submit');await p.waitForTimeout(1500);
      check(await p.$eval('#ww-auth',e=>e.hidden),'gate opens after login');
      await p.evaluate(()=>{const g=JSON.parse(localStorage.getItem('rtl:game')||'{"ev":{}}');g.ev['bday:1']=1;g.start='2026-11-01';localStorage.setItem('rtl:game',JSON.stringify(g))});
      await p.waitForTimeout(5600);
      const db=await p.evaluate(()=>JSON.parse(sessionStorage.getItem('stubdb')||'{}'));
      check(db.u1&&db.u1.p&&db.u1.p.game&&db.u1.p.game.includes('bday:1'),'progress uploads to the account');
      await p.click('#ww-user > button');await p.click('#ww-out');await p.waitForTimeout(1500);
      check(await p.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('rtl:')).length)===0,'sign-out clears this device');
      await p.fill('#au-email','a@b.com');await p.fill('#au-pw','goodpass1');await p.click('#au-submit');await p.waitForTimeout(2000);
      check((await p.textContent('#wk-pill')).startsWith('Day'),'progress comes back after signing in again');
    } else {
      await p.click('#au-google');await p.waitForTimeout(1500);check(await p.$eval('#ww-auth',e=>e.hidden),'Google sign-in opens the app');
    }
    const ov=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth);check(ov<=0,nm+': no horizontal overflow');
    check(!errs.length,nm+': no page errors '+(errs.join(' | ')));await ctx.close()}
  await b.close();console.log(failed?`${failed} problem(s)`:'All auth checks passed');process.exit(failed?1:0)})();
