import './polyfills.server.mjs';
import{a as N,d as _}from"./chunk-IQGCXADW.mjs";import{a as Y}from"./chunk-QSJJTECV.mjs";import{a as G,b as H,c as V}from"./chunk-QFNL2OTI.mjs";import{a as U}from"./chunk-EUACJOWM.mjs";import{a as z}from"./chunk-Y5VDPUZP.mjs";import{b as J}from"./chunk-PMCYWXXA.mjs";import{$ as v,B as m,Ba as L,G as S,Gb as F,Hb as T,I as k,Ib as D,J as y,Ka as a,La as O,Ma as A,Nb as R,Pb as I,Ra as s,Rb as u,Tb as h,Ub as f,Vb as C,Wb as j,Xb as W,Yb as B,fa as w,m as x,ma as E,mb as P,ua as n,va as o,wa as r,y as p,za as M}from"./chunk-XJ52H6M5.mjs";var b=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-footer"]],standalone:!0,features:[s],decls:24,vars:0,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"m-0","h4"],[1,"text-muted","small"],[1,"d-flex","align-items-center","gap-3","text-nowrap"],["type","text","placeholder","Email",1,"form-control"],[1,"btn-main"],[1,"pay-details","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center","gap-2"],[1,"h6","m-0"],["src","./assets/images/amazon-pay.png","width","30px","alt",""],["src","./assets/images/American-Express-Color.png","width","30px","alt",""],["src","./assets/images/paypal.png","width","30px","alt",""],["src","./assets/images/mastercard.webp","width","30px","alt",""],["src","./assets/images/get-google-play.png","width","75px","alt",""],["src","./assets/images/get-apple-store.png","width","75px","alt",""]],template:function(i,d){i&1&&(n(0,"footer",0)(1,"div",1)(2,"h2",2),a(3,"Get The FreshCart App"),o(),n(4,"p",3),a(5," We Will Send You a Link, Open it on Your Phone to download the app "),o(),n(6,"div",4),r(7,"input",5),n(8,"button",6),a(9,"Share App Link"),o()(),r(10,"hr"),n(11,"div",7)(12,"div",8)(13,"h3",9),a(14,"Payment partners"),o(),r(15,"img",10)(16,"img",11)(17,"img",12)(18,"img",13),o(),n(19,"div",8)(20,"h3",9),a(21,"Get Deliveries with FreshCart"),o(),r(22,"img",14)(23,"img",15),o()()()())}});let e=t;return e})();var K=(()=>{let t=class t{constructor(){this.title="E-Commerce"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:4,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","large","color","#aaaaaa","type","square-jelly-box",3,"fullScreen"],[1,"fw-bolder","fw-medium","fa-3x",2,"color","rgb(255, 255, 255)"]],template:function(i,d){i&1&&(r(0,"router-outlet"),n(1,"ngx-spinner",0)(2,"p",1),a(3," Loading... "),o()()),i&2&&(v(),E("fullScreen",!0))},dependencies:[u,H]});let e=t;return e})();var Q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-nav-auth"]],standalone:!0,features:[s],decls:26,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["routerLink","login",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],[1,"nav-link"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"],["routerLink","login","routerLinkActive","active-link",1,"nav-link"],["routerLink","register","routerLinkActive","active-link",1,"nav-link"]],template:function(i,d){i&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),r(3,"img",3),o(),n(4,"button",4),r(5,"span",5),o(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),r(10,"i",10),o()(),n(11,"li",8)(12,"a",9),r(13,"i",11),o()(),n(14,"li",8)(15,"a",9),r(16,"i",12),o()(),n(17,"li",8)(18,"a",9),r(19,"i",13),o()(),n(20,"li",8)(21,"a",14),a(22," Login "),o()(),n(23,"li",8)(24,"a",15),a(25," Register "),o()()()()()())},dependencies:[f,C]});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[s],decls:3,vars:0,template:function(i,d){i&1&&r(0,"app-nav-auth")(1,"router-outlet")(2,"app-footer")},dependencies:[Q,u,b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var Z=(()=>{let t=class t{constructor(){this._AuthService=p(Y),this._CartService=p(z),this._WishlistService=p(U),this._Renderer2=p(w),this.productCountInCart=0,this.wishlistCount=0}ngOnInit(){this._CartService.countProductsInCart.subscribe({next:l=>{this.productCountInCart=l}}),this._WishlistService.countOfProductsInWishlist.subscribe({next:l=>{this.wishlistCount=l}})}logOut(){this._AuthService.logOut()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-nav-blank"]],standalone:!0,features:[s],decls:41,vars:2,consts:[["nav",""],[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","home",1,"nav-link"],["routerLinkActive","active-link","routerLink","product",1,"nav-link"],["routerLinkActive","active-link","routerLink","categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","brands",1,"nav-link"],[1,"navbar-nav","ms-auto","gap-3"],[1,"nav-item-cart"],["routerLink","cart",1,"border","rounded","py-1","px-3","nav-link","d-flex","align-items-center","position-relative"],[1,"fas","fa-shopping-cart","fs-5","ms-3","m-1"],[1,"position-absolute","top-20","start-3","translate-middle","badge","back","rounded-pill","bg-success"],[1,"d-none","d-md-block","mb-2"],["routerLink","wishlist",1,"me-1","border","rounded","py-1","px-3","nav-link","d-flex","align-items-center","position-relative"],[1,"fas","fa-heart","m-1","ms-3","fs-5"],[1,"badge","bg-info","position-absolute","top-20","start-19","translate-middle","badge","back","rounded-pill"],[1,"d-none","d-md-block","mb-2","ms-1"],[1,"me-1","border","rounded","py-1","px-3","nav-link","d-flex","align-items-center",3,"click"],[1,"fas","fa-user-alt","m-1","me-md-2","fs-5"]],template:function(i,d){if(i&1){let le=M();n(0,"nav",1,0)(2,"div",2)(3,"a",3),r(4,"img",4),o(),n(5,"button",5),r(6,"span",6),o(),n(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),a(11,"home"),o()(),n(12,"li",9)(13,"a",11),a(14,"Products"),o()(),n(15,"li",9)(16,"a",12),a(17,"categories"),o()(),n(18,"li",9)(19,"a",13),a(20,"brands"),o()()(),n(21,"ul",14)(22,"li",15)(23,"a",16),r(24,"i",17),n(25,"span",18),a(26),o(),n(27,"p",19),a(28,"My cart"),o()()(),n(29,"li",15)(30,"a",20),r(31,"i",21),n(32,"span",22),a(33),o(),n(34,"p",23),a(35,"Wishlist"),o()()(),n(36,"li",15)(37,"a",24),L("click",function(){return k(le),y(d.logOut())}),r(38,"i",25),n(39,"p",19),a(40,"Sign out"),o()()()()()()()}i&2&&(v(26),A(" ",d.productCountInCart," "),v(7),O(d.wishlistCount))},dependencies:[f,C],styles:[".nav-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#0aad0a}.nav-item-cart[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#0aad0a;cursor:pointer}.nav-item[_ngcontent-%COMP%], .nav-item-cart[_ngcontent-%COMP%]{transition:.5s}.badge[_ngcontent-%COMP%]{font-size:16px}.navbar[_ngcontent-%COMP%]{padding-left:.4rem;padding-right:.4rem}.nav-item-cart[_ngcontent-%COMP%]{margin-left:.3rem;margin-right:.3rem}"]});let e=t;return e})();var $=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-blank-layout"]],standalone:!0,features:[s],decls:4,vars:0,consts:[[1,"container-fluid"]],template:function(i,d){i&1&&(r(0,"app-nav-blank"),n(1,"div",0),r(2,"router-outlet"),o(),r(3,"app-footer"))},dependencies:[Z,u,b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-notfound"]],standalone:!0,features:[s],decls:7,vars:0,consts:[[1,"text-center","p-5","d-flex","justify-content-center","align-items-center","vh-100"],[1,"text-uppercase"],["src","./assets/images/error.svg","alt","error"],["routerLink","/home",1,"btn-main","d-block","mt-3","mx-auto"]],template:function(i,d){i&1&&(n(0,"section",0)(1,"div")(2,"h2",1),a(3,"page not found"),o(),r(4,"img",2),n(5,"button",3),a(6," Back To Home "),o()()())},dependencies:[f],styles:["h2[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}"]});let e=t;return e})();var ee=(e,t)=>{let c=p(h);return typeof localStorage<"u"?localStorage.getItem("userToken")!==null:!1};var te=(e,t)=>{let c=p(h);return typeof localStorage<"u"?localStorage.getItem("userToken")===null:!1};var ne=[{path:"",component:X,canActivate:[te],children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",title:"Login",loadComponent:()=>import("./chunk-NWMCDXBO.mjs").then(e=>e.LoginComponent)},{path:"register",title:"Register",loadComponent:()=>import("./chunk-55WULIG2.mjs").then(e=>e.RegisterComponent)},{path:"forgot",title:"Forget Password",loadComponent:()=>import("./chunk-WH46TZFT.mjs").then(e=>e.ForgoPasswordComponent)}]},{path:"",component:$,canActivate:[ee],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",title:"Home",loadComponent:()=>import("./chunk-447CXOHC.mjs").then(e=>e.HomeComponent)},{path:"cart",title:"Cart",loadComponent:()=>import("./chunk-DNR2BXMQ.mjs").then(e=>e.CartComponent)},{path:"categories",title:"Categories",loadComponent:()=>import("./chunk-QFWX247X.mjs").then(e=>e.CategoriesComponent)},{path:"product",title:"Products",loadComponent:()=>import("./chunk-GMVEJVZF.mjs").then(e=>e.ProductComponent)},{path:"brands",title:"Brands",loadComponent:()=>import("./chunk-LDZYWO5Z.mjs").then(e=>e.BrandsComponent)},{path:"details/:id",title:"Details",loadComponent:()=>import("./chunk-BHJHB47M.mjs").then(e=>e.DetailsComponent)},{path:"wishlist",title:"Wishlist",loadComponent:()=>import("./chunk-GVO7AFNK.mjs").then(e=>e.WishlistComponent)},{path:"allorders",title:"All Orders",loadComponent:()=>import("./chunk-NQMCXMZ4.mjs").then(e=>e.AllOrderProductsComponent)},{path:"orders/:id",title:"Orders",loadComponent:()=>import("./chunk-KIOPNGN4.mjs").then(e=>e.OrdersComponent)},{path:"categoriesDetails/:id",title:"Categories Details",loadComponent:()=>import("./chunk-EX6SMC6S.mjs").then(e=>e.CategoriesDetailsComponent)},{path:"specificbrand/:id",title:"Specific Brand",loadComponent:()=>import("./chunk-EKZFVB6C.mjs").then(e=>e.SpecificbrandsComponent)}]},{path:"**",component:q}];var oe=(e,t)=>{let c=p(G);return c.show(),t(e).pipe(x(()=>{c.hide()}))};var ie=(e,t)=>(localStorage.getItem("userToken")!==null&&(e.url.includes("cart")||e.url.includes("wishlist")||e.url.includes("orders"))&&(e=e.clone({setHeaders:{token:localStorage.getItem("userToken")}})),t(e));var re={providers:[j(ne,B(),W({scrollPositionRestoration:"top"})),I(),F(D(),T([ie,oe])),N(),J(),S(V)]};var me={providers:[_()]},ae=P(re,me);var se=()=>R(K,ae),ht=se;export{ht as a};
