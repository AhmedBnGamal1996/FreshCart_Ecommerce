import{a as D}from"./chunk-GX3U6CNL.js";import{B as r,D as m,Ga as x,Ha as y,Na as C,V as d,X as s,ga as g,ia as p,ma as u,qa as c,ra as l,rb as h,sa as f,ya as v}from"./chunk-KIN36VHZ.js";function S(t,e){if(t&1&&(c(0,"section",0)(1,"div",1)(2,"div",2),f(3,"img",3),l(),c(4,"div",2)(5,"h2",4),x(6),l()()()()),t&2){let o=v();s(3),p("src",o.categoryDetails.image,d)("alt",o.categoryDetails.name),s(3),y(o.categoryDetails.name)}}var R=(()=>{let e=class e{constructor(){this._ActivatedRoute=r(h),this._CategorieService=r(D),this.categoryDetails=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:n=>{let i=n.get("id");this._CategorieService.getAllSepcificCategories(i).subscribe({next:a=>{this.categoryDetails=a.data},error:a=>{console.log(a)}})}})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-categories-details"]],standalone:!0,features:[C],decls:1,vars:1,consts:[[1,"w-75","mx-auto","rounded","shadow","bg-main-light","mb-5"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"],[1,"text-main"]],template:function(i,a){i&1&&g(0,S,7,3,"section",0),i&2&&u(0,a.categoryDetails?0:-1)},styles:["section[_ngcontent-%COMP%]{margin-top:100px}"]});let t=e;return t})();export{R as CategoriesDetailsComponent};
