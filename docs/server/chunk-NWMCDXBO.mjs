import './polyfills.server.mjs';
import{a as y}from"./chunk-QSJJTECV.mjs";import{a as F,b as u,c as E,d as L,g as k,h as T,i as z,j as A,l as N}from"./chunk-GVTV3WQQ.mjs";import"./chunk-WVUI6REW.mjs";import{$ as d,B as h,Ba as O,Ca as C,I as v,J as x,Ka as s,Ra as b,Tb as S,Ub as w,ka as c,ma as M,qa as g,ua as t,va as n,wa as a,y as f,za as P}from"./chunk-XJ52H6M5.mjs";import"./chunk-VVCT4QZE.mjs";function j(e,i){e&1&&(t(0,"p",24),s(1,"email is required"),n())}function q(e,i){e&1&&(t(0,"p",24),s(1,"Enter valid email"),n())}function D(e,i){if(e&1&&(t(0,"div",14),c(1,j,2,0,"p",24)(2,q,2,0),n()),e&2){let r,o=C();d(),g(1,(r=o.loginForm.get("email"))!=null&&r.getError("required")?1:(r=o.loginForm.get("email"))!=null&&r.getError("email")?2:-1)}}function V(e,i){e&1&&(t(0,"p",24),s(1,"Password is requierd"),n())}function R(e,i){e&1&&(t(0,"p",24),s(1,"Must be six characters at least"),n())}function G(e,i){if(e&1&&(t(0,"div",14),c(1,V,2,0,"p",24)(2,R,2,0),n()),e&2){let r,o=C();d(),g(1,(r=o.loginForm.get("password"))!=null&&r.getError("required")?1:(r=o.loginForm.get("password"))!=null&&r.getError("pattern")?2:-1)}}function B(e,i){e&1&&(t(0,"div",22)(1,"p",24),s(2,'"Incorrect email or password" '),n()())}function I(e,i){e&1&&(t(0,"div",23)(1,"p",24),s(2,'"Login success"'),n()())}var X=(()=>{let i=class i{constructor(){this._FormBuilder=f(A),this._AuthService=f(y),this._Router=f(S),this.isSuccess=!1,this.isFailed=!1,this.msgErro="",this.loginForm=this._FormBuilder.group({email:[null,[u.required,u.email]],password:[null,[u.required,u.pattern(/^\w{6,}$/)]]})}loginSubmit(){this.loginForm.valid?this.loginSub=this._AuthService.setLoginForm(this.loginForm.value).subscribe({next:o=>{o.message=="success"&&(this.isSuccess=!0,this.isFailed=!1,setTimeout(()=>{localStorage.setItem("userToken",o.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])},1e3))},error:o=>{(o.message="Incorrect email or password")&&(this.isFailed=!0,this.msgErro=o.error.message),console.log(o)}}):this.loginForm.markAllAsTouched()}ngOnDestroy(){this.loginSub?.unsubscribe()}};i.\u0275fac=function(_){return new(_||i)},i.\u0275cmp=h({type:i,selectors:[["app-login"]],standalone:!0,features:[b],decls:28,vars:5,consts:[["input",""],["src","./assets/images/sign.webp",1,"sign"],[1,"container"],[1,"img"],["src","./assets/images/login.png"],[1,"login-content"],[3,"ngSubmit","formGroup"],["src","./assets/images/avatar.svg"],[1,"title"],[1,"input-div","one"],[1,"i","mt-3"],[1,"fa-solid","fa-envelope","email"],[1,"div","mt-3"],["type","email","formControlName","email","placeholder","email",1,"input","form-control"],[1,"alert","alert-danger","w-75","mt-2"],[1,"input-div","pass","mt-4"],[1,"i"],[1,"fas","fa-lock"],[1,"div"],["type","password","formControlName","password","placeholder","password",1,"input","form-control"],["routerLink","/forgot",1,"mt-5"],["type","submit","value","Login",1,"btn"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"m-1"]],template:function(_,l){if(_&1){let m=P();a(0,"img",1),t(1,"div",2)(2,"div",3),a(3,"img",4),n(),t(4,"div",5)(5,"form",6),O("ngSubmit",function(){return v(m),x(l.loginSubmit())}),a(6,"img",7),t(7,"h2",8),s(8,"Welcome"),n(),t(9,"div",9)(10,"div",10),a(11,"i",11),n(),t(12,"div",12),a(13,"input",13,0),c(15,D,3,1,"div",14),n()(),t(16,"div",15)(17,"div",16),a(18,"i",17),n(),t(19,"div",18),a(20,"input",19,0),c(22,G,3,1,"div",14),n()(),t(23,"a",20),s(24,"Forgot Password?"),n(),a(25,"input",21),c(26,B,3,0,"div",22)(27,I,3,0,"div",23),n()()()}if(_&2){let m,p;d(5),M("formGroup",l.loginForm),d(10),g(15,(m=l.loginForm.get("email"))!=null&&m.errors&&((m=l.loginForm.get("email"))!=null&&m.touched||(m=l.loginForm.get("email"))!=null&&m.dirty)?15:-1),d(7),g(22,(p=l.loginForm.get("password"))!=null&&p.errors&&((p=l.loginForm.get("password"))!=null&&p.touched)?22:-1),d(4),g(26,l.isFailed?26:-1),d(),g(27,l.isSuccess?27:-1)}},dependencies:[N,k,F,E,L,T,z,w],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;overflow:hidden}.sign[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;height:100%;z-index:-1;width:100%}.container[_ngcontent-%COMP%]{width:100vw;min-height:100vh;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:7rem;padding:0 2rem}.img[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.login-content[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;text-align:center}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px}form[_ngcontent-%COMP%]{width:360px}.login-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px}.login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:15px 0;color:#333;text-transform:uppercase;font-size:2.9rem}.login-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:7% 93%;margin:25px 0;padding:5px 0;border-bottom:2px solid #d9d9d9}.login-content[_ngcontent-%COMP%]   .input-div.one[_ngcontent-%COMP%]{margin-top:0}.i[_ngcontent-%COMP%]{color:#d9d9d9;display:flex;justify-content:center;align-items:center}.Alert[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.input-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;height:45px}.input-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{left:0;top:0;width:100%;height:100%;border:none;outline:none;background:none;padding:.5rem .7rem;font-size:1.2rem;color:#555;font-family:poppins,sans-serif}.input-div.pass[_ngcontent-%COMP%]{margin-bottom:4px}.email[_ngcontent-%COMP%]:hover, .fa-lock[_ngcontent-%COMP%]:hover{color:#0aad0a}a[_ngcontent-%COMP%]{display:block;text-align:right;text-decoration:none;color:#333232;font-size:1rem;transition:.3s}a[_ngcontent-%COMP%]:hover{color:#38d39f}.btn[_ngcontent-%COMP%]{display:block;width:100%;height:50px;border-radius:25px;outline:none;border:none;background-image:linear-gradient(to right,#47a183,#0aad0a,#47a183);background-size:200%;font-size:1.2rem;color:#fff;font-family:Poppins,sans-serif;text-transform:uppercase;margin:1rem 0;cursor:pointer;transition:.5s}.btn[_ngcontent-%COMP%]:hover{background-position:right}@media screen and (max-width: 1050px){.container[_ngcontent-%COMP%]{grid-gap:5rem}}@media screen and (max-width: 1000px){form[_ngcontent-%COMP%]{width:290px}.login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.4rem;margin:8px 0}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px}}@media screen and (max-width: 900px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr}.img[_ngcontent-%COMP%], .sign[_ngcontent-%COMP%]{display:none}.login-content[_ngcontent-%COMP%]{justify-content:center}}"]});let e=i;return e})();export{X as LoginComponent};