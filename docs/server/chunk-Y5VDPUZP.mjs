import './polyfills.server.mjs';
import{a as e}from"./chunk-WVUI6REW.mjs";import{Eb as p,b as o,u as n,x as c}from"./chunk-XJ52H6M5.mjs";var C=(()=>{let r=class r{constructor(t){this._HttpClient=t,this.countProductsInCart=new o(0)}goToCart(t){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:t})}getProductsCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`)}removeSpecificCartItem(t){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${t}`)}updateCartCount(t,a){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${t}`,{count:a})}clearCartItems(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/`)}};r.\u0275fac=function(a){return new(a||r)(c(p))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{C as a};