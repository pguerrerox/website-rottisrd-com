(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{291:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5a41e296",content,!0,{sourceMap:!1})},292:function(t,e,n){var map={"./slide1.webp":114,"./slide2.webp":115,"./slide3.webp":116,"./slide4.webp":117};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=292},293:function(t,e,n){var map={"./fija1.webp":110,"./fija2.webp":111,"./fija3.webp":112,"./fija4.webp":113};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=293},294:function(t,e,n){"use strict";var r=n(291);n.n(r).a},295:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".slideshow[data-v-b22aff80]{width:100%;margin:0 auto;padding:0;overflow:hidden}.images[data-v-b22aff80]{width:100%}.slides-imgs[data-v-b22aff80]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.circles[data-v-b22aff80]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-b22aff80]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-b22aff80]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.fade[data-v-b22aff80]{-webkit-animation-name:fade-data-v-b22aff80;-webkit-animation-duration:s;animation-name:fade-data-v-b22aff80;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-b22aff80{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-b22aff80{0%{opacity:.6}to{opacity:1}}",""])},296:function(t,e,n){"use strict";var r={props:{slides:Object,page:String,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{imgs:this.slides}},mounted:function(){},methods:{}},o=(n(294),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"slideshow"},[t.nonSlides?t._e():r("div",{staticClass:"images"},[r("img",{staticClass:"slides-imgs fade",attrs:{src:n(292)("./"+t.imgs[t.page]+".webp")}})]),t._v(" "),t.nonSlides?r("div",{staticClass:"images"},[r("img",{staticClass:"slides-imgs fade",attrs:{src:n(293)("./"+t.fijas[t.marca]+".webp")}})]):t._e()])}),[],!1,null,"b22aff80",null);e.a=component.exports},297:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("c5c0f27c",content,!0,{sourceMap:!1})},298:function(t,e,n){var map={"./baruk-logo.webp":118,"./costero-logo.webp":119,"./nauj-logo.webp":120,"./rottis-logo.webp":121};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=298},299:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(22),d=n(122),l=n(57),f=n(10),v=n(39).f,m=n(58).f,h=n(9).f,w=n(306).trim,x=r.Number,k=x,y=x.prototype,_="Number"==c(n(74)(y)),N="trim"in String.prototype,O=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=N?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(_?f((function(){y.valueOf.call(n)})):"Number"!=c(n))?d(new k(O(e)),n,x):O(e)};for(var j,E=n(8)?v(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)o(k,j=E[C])&&!o(x,j)&&h(x,j,m(k,j));x.prototype=y,y.constructor=x,n(11)(r,"Number",x)}},306:function(t,e,n){var r=n(7),o=n(21),c=n(10),d=n(307),l="["+d+"]",f=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),m=function(t,e,n){var o={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=o[t]=l?e(h):d[t];n&&(o[n]=f),r(r.P+r.F*l,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},307:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},308:function(t,e,n){"use strict";var r=n(297);n.n(r).a},309:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".sign[data-v-34fb38cc]{background-color:#fff;width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-34fb38cc]{width:100%;margin:75px auto}.sign-message[data-v-34fb38cc]{text-align:center}.sign-message h1[data-v-34fb38cc]{margin:0}.sign-message h2[data-v-34fb38cc]{margin-top:0}.sign-logos[data-v-34fb38cc]{width:100%;display:-webkit-box;display:flex;margin-top:50px;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-34fb38cc]{width:200px;height:auto;align-self:baseline}.noMargin[data-v-34fb38cc]{margin:0!important}",""])},312:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("528fdda8",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(299);var r={props:{id:Number,data:Object},data:function(){var t=this.data.signs[this.id-1];return{idx:t.id,h1:t.h1,h2:t.h2,imgs:t.imgs}}},o=(n(308),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sign"},[r("div",{staticClass:"sign-wraper"},[r("div",{staticClass:"sign-message"},[r("h1",[t._v(t._s(t.h1))]),t._v(" "),r("h2",[t._v(t._s(t.h2))])]),t._v(" "),r("div",{staticClass:"sign-logos",class:{noMargin:t.imgs.length<=0}},t._l(t.imgs,(function(img){return r("img",{key:img.id,attrs:{src:n(298)("./"+img+".webp"),alt:"Rottis Logo"}})})),0)])])}),[],!1,null,"34fb38cc",null);e.a=component.exports},345:function(t){t.exports=JSON.parse('{"es":{"signs":[{"id":1,"h1":"Un pedazo de mi tierra","h2":"Productos dominicanos de la más alta calidad","imgs":""}],"products":[{"button":"Linea Rottis"},{"button":"Linea Baruk"},{"button":"Linea Nauj"},{"button":"Linea Costero"}]}}')},346:function(t,e,n){var map={"./baruk-bg.webp":139,"./costero-bg.webp":140,"./nauj-bg.webp":141,"./rottis-bg.webp":142};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=346},347:function(t,e,n){"use strict";var r=n(312);n.n(r).a},348:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".banner-products[data-v-70ed4d22]{background-color:#fff;width:100%}.products-wraper[data-v-70ed4d22]{position:relative;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;margin:5px 0}.products-wraper>img[data-v-70ed4d22]{width:100%}section.banner-products>div[data-v-70ed4d22]:first-child{margin:0 0 5px}section.banner-products>div[data-v-70ed4d22]:last-child{margin:5px 0 0}.products-content[data-v-70ed4d22]{position:absolute;z-index:1;width:600px;height:275px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center;background-color:hsla(0,0%,100%,.75)}.content-logo[data-v-70ed4d22]{width:auto;height:125px}section.banner-products>div:nth-child(2)>div>img[data-v-70ed4d22]{height:150px}.products-content a[data-v-70ed4d22]{padding:10px 50px}",""])},363:function(t,e,n){"use strict";n.r(e);var r=n(345),o=n(73),c=n(296),d=n(316),l={props:{data:Object,media:Object},data:function(){return{marcas:["rottis","baruk","nauj","costero"],backgrounds:this.media.banners.productos,logos:this.media.marcasLogos}}},f=(n(347),n(6)),v=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"banner-products"},t._l(t.backgrounds,(function(img){return r("div",{key:img.id,staticClass:"products-wraper"},[r("img",{attrs:{src:n(346)("./"+img+".webp")}}),t._v(" "),r("div",{staticClass:"products-content"},[r("img",{staticClass:"content-logo",attrs:{src:n(298)("./"+t.logos[t.marcas[t.backgrounds.indexOf(img)]].file+".webp")}}),t._v(" "),r("a",{staticClass:"button",attrs:{href:"/marcas/"+t.marcas[t.backgrounds.indexOf(img)]}},[t._v(t._s(t.data.products[t.backgrounds.indexOf(img)].button))])])])})),0)}),[],!1,null,"70ed4d22",null).exports,m={components:{Slideshow:c.a,Sign:d.a,Products:v},data:function(){return{slides:o.slideshow,page:"productos",data:r.es,media:o}},metaInfo:{title:"Nuestros Productos"}},h=Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main"},[e("Slideshow",{attrs:{slides:this.slides,page:this.page}}),this._v(" "),e("Sign",{attrs:{id:1,data:this.data}}),this._v(" "),e("Products",{attrs:{data:this.data,media:this.media}})],1)}),[],!1,null,null,null);e.default=h.exports}}]);