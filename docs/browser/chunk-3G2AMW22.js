import{B as n,jb as p,x as o,zb as e}from"./chunk-KIN36VHZ.js";var u=(()=>{let t=class t{constructor(){this._HttpClient=n(p)}getAllproducts(){return this._HttpClient.get(`${e.baseUrl}/api/v1/products`)}getSpesificProduct(i){return this._HttpClient.get(`${e.baseUrl}/api/v1/products/${i}`)}};t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a};