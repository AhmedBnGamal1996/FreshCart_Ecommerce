import './polyfills.server.mjs';
import{a as r}from"./chunk-WVUI6REW.mjs";import{Eb as a,b as o,u as s,x as n}from"./chunk-XJ52H6M5.mjs";var u=(()=>{let t=class t{constructor(i){this._HttpClient=i,this.countOfProductsInWishlist=new o(0)}addProductToWishlist(i){return this._HttpClient.post(`${r.baseUrl}/api/v1/wishlist`,{productId:i})}getUserWishlist(){return this._HttpClient.get(`${r.baseUrl}/api/v1/wishlist`)}removeProductFromWishlist(i){return this._HttpClient.delete(`${r.baseUrl}/api/v1/wishlist/${i}`)}};t.\u0275fac=function(l){return new(l||t)(n(a))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{u as a};
