import './polyfills.server.mjs';
import{a as Z}from"./chunk-UPXUBHKL.mjs";import{a as K,b as Q,c as X}from"./chunk-ECWAFR75.mjs";import{a as J}from"./chunk-WOPYTPE6.mjs";import{a as q}from"./chunk-W7QXUELQ.mjs";import{a as Y}from"./chunk-DDKTOMMR.mjs";import{a as R}from"./chunk-QFNL2OTI.mjs";import{a as N}from"./chunk-EUACJOWM.mjs";import{a as B}from"./chunk-Y5VDPUZP.mjs";import{a as ee}from"./chunk-PMCYWXXA.mjs";import"./chunk-GTSSCL6B.mjs";import{a as $,c as z,f as U,k as G}from"./chunk-GVTV3WQQ.mjs";import"./chunk-WVUI6REW.mjs";import{$ as s,B as I,Ba as S,Ca as d,I as h,J as f,Ja as H,Ka as m,La as _,Ma as k,Na as M,Oa as O,Pa as A,Ra as D,Sa as L,Ta as V,Ub as j,Xa as y,Z as w,Za as F,fa as W,ka as g,ma as u,qa as T,ra as E,sa as v,ta as x,ua as n,va as l,wa as c,y as p,za as C}from"./chunk-XJ52H6M5.mjs";import"./chunk-VVCT4QZE.mjs";var te=(e,r)=>r._id,ie=(e,r)=>r.id,re=e=>["/details",e],ne=()=>[1,2,3,4,5];function oe(e,r){e&1&&c(0,"img",13)}function ae(e,r){e&1&&c(0,"img",14)}function se(e,r){e&1&&c(0,"img",15)}function le(e,r){e&1&&c(0,"img",16)}function ce(e,r){if(e&1&&(n(0,"div"),c(1,"img",17),n(2,"h3",18),m(3),l()()),e&2){let o=d().$implicit;s(),u("src",o.image,w)("alt",o.name),s(2),_(o.name)}}function me(e,r){e&1&&g(0,ce,4,3,"ng-template",5)}function pe(e,r){if(e&1){let o=C();n(0,"i",29),S("click",function(){h(o);let i=d().$implicit,a=d();return f(a.getWishlist(i._id))}),l()}}function de(e,r){if(e&1){let o=C();n(0,"i",29),S("click",function(){h(o);let i=d().$implicit,a=d();return f(a.removeProductFromFav(i._id))}),l()}}function ue(e,r){e&1&&(n(0,"span"),c(1,"i",30),l())}function ge(e,r){e&1&&c(0,"i",26)}function _e(e,r){if(e&1){let o=C();n(0,"div",6)(1,"div",19),g(2,pe,1,0,"i",20)(3,de,1,0),n(4,"div",21)(5,"div"),c(6,"img",22),n(7,"h3",23),m(8),l(),n(9,"h4",24),m(10),y(11,"text"),l()(),n(12,"div",25)(13,"span"),m(14),l(),n(15,"div"),v(16,ue,2,0,"span",null,E),g(18,ge,1,0,"i",26),n(19,"span",27),m(20),l()()()(),n(21,"button",28,0),S("click",function(){let i=h(o).$implicit,a=H(22),P=d();return f(P.getCart(i.id,a))}),m(23,"Add to cart"),l()()()}if(e&2){let o=r.$implicit,t=d();s(2),T(2,t.productsIdInFav.includes(o._id)?3:2),s(2),u("routerLink",V(12,re,o.id)),s(2),u("src",o.imageCover,w)("alt",o.title),s(2),_(o.category.name),s(2),_(F(11,9,o.title,2)),s(4),k("",o.price," EGP"),s(2),x(L(14,ne).slice(0,o.ratingsAverage)),s(2),T(18,o.ratingsAverage%1!==0?18:-1),s(2),_(o.ratingsAverage)}}var ke=(()=>{let r=class r{constructor(){this._ProductsService=p(q),this._CategorieService=p(J),this._CartService=p(B),this._ToastrService=p(ee),this._WishlistService=p(N),this._NgxSpinnerService=p(R),this._Renderer2=p(W),this.productList=[],this.categoryList=[],this.WhishList=[],this.productsIdInFav=[],this.date=new Date,this.text="",this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:['<i class="fa-solid fa-left "></i>','<i class="fa-solid fa-right"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:6}},nav:!0},this.customOptionsMain={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._CategorieService.getAllCategories().subscribe({next:t=>{this.categoryList=t.data},error:t=>{console.log(t)}}),this.allProductSub=this._ProductsService.getAllproducts().subscribe({next:t=>{this.productList=t.data},error:t=>{}}),this._WishlistService.getUserWishlist().subscribe({next:t=>{console.log(t),this._WishlistService.countOfProductsInWishlist.next(t.count),this.WhishList=t.data},error:t=>{console.log(t)}}),this._CartService.getProductsCart().subscribe({next:t=>{this._CartService.countProductsInCart.next(t.numOfCartItems)}})}getCart(t,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.goToCart(t).subscribe({next:a=>{console.log(a),this._CartService.countProductsInCart.next(a.numOfCartItems),this._Renderer2.removeAttribute(i,"disabled"),this._ToastrService.success(a.message,"Fresh cart",{progressBar:!0,progressAnimation:"increasing"})},error:a=>{console.log(a),this._Renderer2.removeAttribute(i,"disabled")}})}getWishlist(t){this._WishlistService.addProductToWishlist(t).subscribe({next:i=>{console.log(i),this.productsIdInFav=i.data,this._WishlistService.countOfProductsInWishlist.next(i.data.length),this._ToastrService.info(i.message,"Fresh cart",{progressBar:!0,progressAnimation:"increasing"})},error:i=>{console.log(i)}})}removeProductFromFav(t){this._WishlistService.removeProductFromWishlist(t).subscribe({next:i=>{this.productsIdInFav=i.data,this._WishlistService.countOfProductsInWishlist.next(i.data.length)},error:i=>{console.log(i)}})}ngOnDestroy(){this.allProductSub?.unsubscribe()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=I({type:r,selectors:[["app-home"]],standalone:!0,features:[D],decls:27,vars:6,consts:[["element",""],[1,"mt-3"],[1,"row","g-0","mt-3"],[1,"col-md-10"],[3,"options"],["carouselSlide",""],[1,"col-md-2"],["src","./assets/images/grocery-banner.png","alt","","height","200px",1,"w-100"],["src","./assets/images/grocery-banner-2.jpeg","alt","","height","200px",1,"w-100"],[1,"my-5"],["type","search","placeholder","Search by name.....","id","",1,"form-control","mx-auto","p-2","mb-4","w-50",3,"ngModelChange","ngModel"],[1,"mb-2"],[1,"row","g-3"],["src","./assets/images/slider-image-3.jpeg","alt","","height","400px",1,"w-100"],["src","./assets/images/slider-image-1.jpeg","alt","","height","400px",1,"w-100"],["src","./assets/images/slider-image-2.jpeg","alt","","height","400px",1,"w-100"],["src","./assets/images/slider-2.jpeg","alt","","height","400px",1,"w-100"],["height","250px",1,"w-100",3,"src","alt"],[1,"text-main"],[1,"product","position-relative","p-2","rounded"],[1,"fa-solid","fa-heart","heart","position-absolute"],[3,"routerLink"],[1,"w-100","rounded","object-fit-fill",3,"src","alt"],[1,"small","text-main","mt-3"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-regular","fa-star-half-stroke","rating-color","stars-landing"],[1,"text-muted"],[1,"btn-main","w-100",3,"click"],[1,"fa-solid","fa-heart","heart","position-absolute",3,"click"],[1,"fa","fa-star","rating-color"]],template:function(i,a){i&1&&(n(0,"section",1)(1,"div",2)(2,"div",3)(3,"div")(4,"owl-carousel-o",4),g(5,oe,1,0,"ng-template",5)(6,ae,1,0,"ng-template",5)(7,se,1,0,"ng-template",5)(8,le,1,0,"ng-template",5),l()()(),n(9,"div",6)(10,"div"),c(11,"img",7)(12,"img",8),l()()()(),n(13,"section",9)(14,"h2"),m(15,"Popular Categories:"),l(),n(16,"owl-carousel-o",4),v(17,me,1,0,null,5,te),l()(),n(19,"section")(20,"input",10),A("ngModelChange",function(b){return O(a.text,b)||(a.text=b),b}),l(),n(21,"h2",11),m(22,"Popular Products:"),l(),n(23,"div",12),v(24,_e,24,15,"div",6,ie),y(26,"search"),l()()),i&2&&(s(4),u("options",a.customOptionsMain),s(12),u("options",a.customOptions),s(),x(a.categoryList),s(3),M("ngModel",a.text),s(4),x(F(26,3,a.productList.slice(0,12),a.text)))},dependencies:[X,Q,K,j,G,$,z,U,Y,Z],styles:["h2[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,Times,serif}h3[_ngcontent-%COMP%]{font-size:1rem}.form-control[_ngcontent-%COMP%]{box-shadow:0 0 10px #11bd1168}"]});let e=r;return e})();export{ke as HomeComponent};
