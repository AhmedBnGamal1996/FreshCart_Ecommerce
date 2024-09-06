import './polyfills.server.mjs';
import{c as W,d as y,f as m,g as $,h as C}from"./chunk-GTSSCL6B.mjs";import{$ as c,B as P,C as k,Ca as h,Da as L,E as R,Ea as V,Ga as q,H as E,Ha as H,Ia as U,N as F,Ob as K,Ra as B,Xa as G,Y as A,Ya as Q,a as S,aa as p,b as _,i as D,ib as X,ka as d,ma as o,na as u,pa as T,q as z,tb as Z,u as N,ua as f,ub as Y,v as j,va as g,w as M,wa as v,yb as J}from"./chunk-XJ52H6M5.mjs";import{a as I,b as O}from"./chunk-VVCT4QZE.mjs";var te=["overlay"],ie=["*"];function ne(n,e){n&1&&v(0,"div")}function se(n,e){if(n&1&&(f(0,"div"),d(1,ne,1,0,"div",6),g()),n&2){let r=h(2);T(r.spinner.class),u("color",r.spinner.color),c(),o("ngForOf",r.spinner.divArray)}}function re(n,e){if(n&1&&(v(0,"div",7),G(1,"safeHtml")),n&2){let r=h(2);o("innerHTML",Q(1,1,r.template),A)}}function ae(n,e){if(n&1&&(f(0,"div",2,0),d(2,se,2,5,"div",3)(3,re,2,3,"div",4),f(4,"div",5),V(5),g()()),n&2){let r=h();u("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),o("@.disabled",r.disableAnimation)("@fadeIn","in"),c(2),o("ngIf",!r.template),c(),o("ngIf",r.template),c(),u("z-index",r.spinner.zIndex)}}var oe={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},w={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},x="primary",l=class n{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new n(e)}},le=(()=>{let e=class e{constructor(){this.spinnerObservable=new _(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(D(i=>i&&i.name===t))}show(t=x,i){return new Promise((s,a)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=t,this.spinnerObservable.next(new l(O(I({},i),{show:!0}))),s(!0)):(this.spinnerObservable.next(new l({name:t,show:!0})),s(!0))},10)})}hide(t=x,i=10){return new Promise((s,a)=>{setTimeout(()=>{this.spinnerObservable.next(new l({name:t,show:!1})),s(!0)},i)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ee=new M("NGX_SPINNER_CONFIG"),pe=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(i){return new(i||e)(p(K,16))},e.\u0275pipe=R({name:"safeHtml",type:e,pure:!0,standalone:!0});let n=e;return n})(),De=(()=>{let e=class e{constructor(t,i,s,a){this.spinnerService=t,this.changeDetector=i,this.elementRef=s,this.globalConfig=a,this.disableAnimation=!1,this.spinner=new l,this.ngUnsubscribe=new S,this.setDefaultOptions=()=>{let{type:b}=this.globalConfig??{};this.spinner=l.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??b,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=w.BD_COLOR,this.zIndex=w.Z_INDEX,this.color=w.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=x,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(z(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let i in t)if(i){let s=t[i];if(s.isFirstChange())return;typeof s.currentValue<"u"&&s.currentValue!==s.previousValue&&s.currentValue!==""&&(this.spinner[i]=s.currentValue,i==="showSpinner"&&(s.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),i==="name"&&this.initObservable())}}getClass(t,i){this.spinner.divCount=oe[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((a,b)=>b);let s="";switch(i.toLowerCase()){case"small":s="la-sm";break;case"medium":s="la-2x";break;case"large":s="la-3x";break;default:break}return"la-"+t+" "+s}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(i){return new(i||e)(p(le),p(X),p(F),p(ee,8))},e.\u0275cmp=P({type:e,selectors:[["ngx-spinner"]],viewQuery:function(i,s){if(i&1&&q(te,5),i&2){let a;H(a=U())&&(s.spinnerDOM=a.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[E,B],ngContentSelectors:ie,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(i,s){i&1&&(L(),d(0,ae,6,12,"div",1)),i&2&&o("ngIf",s.spinner.show)},dependencies:[pe,Y,Z],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[W("fadeIn",[$("in",m({opacity:1})),C(":enter",[m({opacity:0}),y(300)]),C(":leave",y(200,m({opacity:0})))])]},changeDetection:0});let n=e;return n})(),ze=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:ee,useValue:t}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=k({type:e}),e.\u0275inj=j({imports:[J]});let n=e;return n})();export{le as a,De as b,ze as c};
