// Runs every graded Python exercise's model solution, checks the spreadsheet project,
// and looks for console errors and horizontal overflow on desktop and phone.
//   node tests/lessons.test.js        (run `npm run build` first)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const ROOT=path.join(__dirname,'..');const OUT=path.join(__dirname,'out');fs.mkdirSync(OUT,{recursive:true});
const SK=path.join(ROOT,'node_modules','skulpt','dist');
(async()=>{
  const app=fs.readFileSync(path.join(ROOT,'dist','preview.html'),'utf8');
  const page=path.join(OUT,'preview-wrapped.html');
  fs.writeFileSync(page,'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}[hidden]{display:none!important}</style></head><body>'+app+'</body></html>');
    const b=await chromium.launch();let failed=0;
  const ctx=await b.newContext({viewport:{width:1280,height:900}});
  await ctx.route('**/cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/*',r=>r.fulfill({path:path.join(SK,r.request().url().split('/').pop()),contentType:'application/javascript'}));
  await ctx.route('**/fonts.g*/**',r=>r.abort());
  const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+page);await p.waitForTimeout(400);
  const ids=await p.evaluate(()=>Object.keys(window.WW_LESSONS||{}));
  for(const id of ids){await p.evaluate(i=>location.hash='l-'+i,id);await p.waitForTimeout(250);
    const wraps=await p.$$('#v-lesson .coder-wrap');let ok=0,graded=0;
    for(const w of wraps){const sol=await w.$('.sol');if(!sol)continue;await sol.click();await (await w.$('.run')).click();
      await p.waitForFunction(el=>!el.querySelector('.code-out').textContent.startsWith('Running'),w,{timeout:20000});
      const r=await w.$eval('.coder > p.msg',e=>e.hidden?null:e.className);if(r===null)continue;graded++;
      if(r.includes('ok'))ok++;else{failed++;console.log('FAIL',id,await w.$eval('.task',e=>e.textContent.slice(0,80)),'\n',await w.$eval('.code-out',e=>e.textContent))}}
    console.log(`${id.padEnd(5)} ${ok}/${graded} exercises pass`)}
  // Project 1 sheet
  if(ids.includes('p1')){await p.evaluate(()=>location.hash='l-p1');await p.waitForTimeout(250);
    const put=async(ref,f)=>{await p.click(`#v-lesson td[data-ref="${ref}"]`);await p.fill('#v-lesson #sh-f',f);await p.press('#v-lesson #sh-f','Enter')};
    for(const r of [2,3,4,5,6])await put('H'+r,`=G${r}/E${r}`);for(const c of 'CDEFG')await put(c+'7',`=SUM(${c}2:${c}6)`);
    await put('H7','=ROUND(G7/E7,2)');await put('B9','=ROUND(D7/C7*100,2)');await put('B10','=ROUND(E7/F7,0)');await put('B11','=SUMIF(B2:B6,"Facebook",G2:G6)');await put('B12','=COUNTIF(H2:H6,">=3")');
    const n=await p.$$eval('#v-lesson #sh-tasks input:checked',x=>x.length);console.log('p1 sheet',n,'/ 7 tasks');if(n!==7)failed++}
  await ctx.close();
  const ph=await b.newPage({viewport:{width:390,height:844},colorScheme:'dark'});ph.on('pageerror',e=>errs.push(e.message));
  await ph.goto('file://'+page);await ph.waitForTimeout(300);
  for(const v of ['roadmap','calendar','tracks','lessons',...ids.map(i=>'l-'+i)]){await ph.evaluate(x=>location.hash=x,v);await ph.waitForTimeout(200);
    const ov=await ph.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(ov>0){failed++;console.log('OVERFLOW',v,ov+'px')}}
  await ph.screenshot({path:path.join(OUT,'phone-last-lesson.png')});
  if(errs.length){failed++;console.log('PAGE ERRORS',errs)}
  await b.close();console.log(failed?`${failed} problem(s)`:'All lesson checks passed');process.exit(failed?1:0)})();
