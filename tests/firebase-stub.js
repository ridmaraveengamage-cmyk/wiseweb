(()=>{if(window.firebase)return;const DB=JSON.parse(sessionStorage.getItem('stubdb')||'{}');const save=()=>sessionStorage.setItem('stubdb',JSON.stringify(DB));
let user=JSON.parse(sessionStorage.getItem('stubuser')||'null');const cbs=[];const fire=()=>cbs.forEach(c=>c(user));
const mk=u=>u&&Object.assign(u,{updateProfile:async p=>{Object.assign(u,p);sessionStorage.setItem('stubuser',JSON.stringify(u))},sendEmailVerification:async()=>{}});
const auth={setPersistence:async()=>{},onAuthStateChanged:c=>{cbs.push(c);setTimeout(()=>c(mk(user)),50)},getRedirectResult:async()=>null,
 signInWithEmailAndPassword:async(e,p)=>{if(p!=='goodpass1'){const x=new Error();x.code='auth/invalid-credential';throw x}user=mk({uid:'u1',email:e,displayName:'Test User',photoURL:null});sessionStorage.setItem('stubuser',JSON.stringify(user));fire();return{user}},
 createUserWithEmailAndPassword:async(e,p)=>{user=mk({uid:'u2',email:e,displayName:null,photoURL:null});sessionStorage.setItem('stubuser',JSON.stringify(user));fire();return{user}},
 signInWithPopup:async()=>{user=mk({uid:'g1',email:'g@example.com',displayName:'Google Person',photoURL:null});sessionStorage.setItem('stubuser',JSON.stringify(user));fire()},
 signOut:async()=>{user=null;sessionStorage.removeItem('stubuser');fire()},sendPasswordResetEmail:async()=>{}};
const fs={collection:c=>({doc:id=>({get:async()=>({exists:!!DB[id],data:()=>DB[id]}),set:async d=>{DB[id]=JSON.parse(JSON.stringify(d));save()}})})};
const f=()=>auth;f.Auth={Persistence:{LOCAL:'local'}};f.GoogleAuthProvider=function(){this.setCustomParameters=()=>{}};
window.firebase={initializeApp:()=>{},auth:f,firestore:()=>fs};window.__stubDB=DB})();
