(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{308:function(e,t,n){var content=n(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("e5a44b86",content,!0,{sourceMap:!1})},309:function(e,t,n){var map={"./slide1.webp":115,"./slide2.webp":116,"./slide3.webp":117,"./slide4.webp":118};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=309},310:function(e,t,n){var map={"./fija1.webp":111,"./fija2.webp":112,"./fija3.webp":113,"./fija4.webp":114};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=310},311:function(e,t,n){"use strict";var o=n(308);n.n(o).a},312:function(e,t,n){(e.exports=n(19)(!1)).push([e.i,".slideshow[data-v-a030d7ac]{width:100%;margin:0 auto;padding:0;overflow:hidden}.images[data-v-a030d7ac]{width:100%}.slides-imgs[data-v-a030d7ac]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.circles[data-v-a030d7ac]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-a030d7ac]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-a030d7ac]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.fade[data-v-a030d7ac]{-webkit-animation-name:fade-data-v-a030d7ac;-webkit-animation-duration:s;animation-name:fade-data-v-a030d7ac;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-a030d7ac{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-a030d7ac{0%{opacity:.6}to{opacity:1}}@media screen and (max-width:425px){.images[data-v-a030d7ac]{width:100%;height:250px}}",""])},313:function(e,t,n){"use strict";var o={props:{slides:Object,page:String,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{imgs:this.slides}},mounted:function(){},methods:{}},r=(n(311),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"slideshow"},[e.nonSlides?e._e():o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(309)("./"+e.imgs[e.page]+".webp")}})]),e._v(" "),e.nonSlides?o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(310)("./"+e.fijas[e.marca]+".webp")}})]):e._e()])}),[],!1,null,"a030d7ac",null);t.a=component.exports},314:function(e,t,n){var content=n(326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("026eee82",content,!0,{sourceMap:!1})},315:function(e,t,n){var map={"./baruk-logo.webp":119,"./costero-logo.webp":120,"./nauj-logo.webp":121,"./rottis-logo.webp":122};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=315},316:function(e,t,n){"use strict";var o=n(3),r=n(16),d=n(22),c=n(123),l=n(57),f=n(10),v=n(39).f,h=n(58).f,m=n(9).f,w=n(323).trim,x=o.Number,k=x,_=x.prototype,y="Number"==d(n(74)(_)),j="trim"in String.prototype,N=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,d=(t=j?t.trim():w(t,3)).charCodeAt(0);if(43===d||45===d){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===d){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(y?f((function(){_.valueOf.call(n)})):"Number"!=d(n))?c(new k(N(t)),n,x):N(t)};for(var O,E=n(8)?v(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)r(k,O=E[C])&&!r(x,O)&&m(x,O,h(k,O));x.prototype=_,_.constructor=x,n(11)(o,"Number",x)}},323:function(e,t,n){var o=n(7),r=n(21),d=n(10),c=n(324),l="["+c+"]",f=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),h=function(e,t,n){var r={},l=d((function(){return!!c[e]()||"​"!="​"[e]()})),f=r[e]=l?t(m):c[e];n&&(r[n]=f),o(o.P+o.F*l,"String",r)},m=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=h},324:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},325:function(e,t,n){"use strict";var o=n(314);n.n(o).a},326:function(e,t,n){(e.exports=n(19)(!1)).push([e.i,".sign[data-v-d290c3ae]{background-color:#fff;width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-d290c3ae]{width:100%;margin:75px auto}.sign-message[data-v-d290c3ae]{text-align:center}.sign-message h1[data-v-d290c3ae]{margin:0}.sign-message h2[data-v-d290c3ae]{margin-top:0}.sign-logos[data-v-d290c3ae]{width:100%;display:-webkit-box;display:flex;margin-top:50px;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-d290c3ae]{width:200px;height:auto;align-self:baseline}.noMargin[data-v-d290c3ae]{margin:0!important}@media screen and (max-width:768px){.sign[data-v-d290c3ae]{max-height:100%}.sign-logos[data-v-d290c3ae]{flex-wrap:wrap}.sign-logos img[data-v-d290c3ae]{width:175px;height:auto;padding:10px 15px}}@media screen and (max-width:425px){.sign[data-v-d290c3ae]{max-height:100%}.sign-message h2[data-v-d290c3ae]{font-size:1.2em}.sign-logos[data-v-d290c3ae]{flex-wrap:wrap}.sign-logos img[data-v-d290c3ae]{width:150px;height:auto;padding:10px 5px}}",""])},327:function(e,t,n){var content=n(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("3b9fbea4",content,!0,{sourceMap:!1})},334:function(e,t,n){"use strict";n(316);var o={props:{id:Number,data:Object},data:function(){var e=this.data.signs[this.id-1];return{idx:e.id,h1:e.h1,h2:e.h2,imgs:e.imgs,marcas:["rottis","baruk","nauj","costero"]}}},r=(n(325),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"sign"},[o("div",{staticClass:"sign-wraper"},[o("div",{staticClass:"sign-message"},[o("h1",[e._v(e._s(e.h1))]),e._v(" "),o("h2",[e._v(e._s(e.h2))])]),e._v(" "),o("div",{staticClass:"sign-logos",class:{noMargin:e.imgs.length<=0}},e._l(e.imgs,(function(img,t){return o("a",{key:img.id,attrs:{href:"/marcas/"+e.marcas[t]}},[o("img",{attrs:{src:n(315)("./"+img+".webp"),alt:"Rottis Logo"}})])})),0)])])}),[],!1,null,"d290c3ae",null);t.a=component.exports},356:function(e){e.exports=JSON.parse('{"es":{"banners":[{"id":1,"h1":"¿Quienes somos?","p":"La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los Estados Unidos.","button":"Descubre más sobre nosotros","a":"/nosotros"},{"id":2,"h1":"Conoce nuestros productos","p":"Nuestros productos son elaborados con los mejores estándares de calidad del mercado, producidos de <strong>leche 100% dominicana.</strong>","button":"Descubre más de nuestros productos","a":"/productos"}],"signs":[{"id":1,"h1":"La calidad es tradicion","h2":"Conoce toda la calidad de nuestros productos","imgs":["rottis-logo","baruk-logo","nauj-logo","costero-logo"]},{"id":2,"h1":"Un pedazo de mi tierra","h2":"Productos dominicanos de la más alta calidad","imgs":""}]}}')},357:function(e,t,n){var map={"./banner1.webp":125,"./banner2.webp":126};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=357},358:function(e,t,n){"use strict";var o=n(327);n.n(o).a},359:function(e,t,n){(e.exports=n(19)(!1)).push([e.i,".banner[data-v-fae6f9fe]{background-size:cover;background-repeat:no-repeat;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;overflow:hidden}.banner img[data-v-fae6f9fe]{top:0;left:0;width:100%;height:100%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.banner-wraper[data-v-fae6f9fe]{position:absolute;left:7.5%}.banner-content[data-v-fae6f9fe]{background-color:hsla(0,0%,100%,.85);width:600px;height:350px;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.banner-content p[data-v-fae6f9fe]{width:75%;padding:0 30px;text-align:justify}.banner-content p[data-v-fae6f9fe] strong{color:#c00000}@media screen and (max-width:768px){.banner[data-v-fae6f9fe]{background-size:cover;background-repeat:no-repeat;width:100%;height:600px}.banner-wraper[data-v-fae6f9fe]{left:50%;margin-left:-300px}.banner-content p[data-v-fae6f9fe]{width:75%;padding:0 30px;text-align:justify;font-size:.9em}.banner-content p[data-v-fae6f9fe] strong{color:#c00000}}@media screen and (max-width:425px){.banner[data-v-fae6f9fe]{background-size:cover;background-repeat:no-repeat;width:100%;height:600px}.banner-wraper[data-v-fae6f9fe]{position:absolute;left:0;width:100%;margin-left:0}.banner-content[data-v-fae6f9fe]{background-color:hsla(0,0%,100%,.85);width:100%}.banner-content p[data-v-fae6f9fe]{width:75%;padding:0 30px;text-align:justify;font-size:.9em}.banner-content p[data-v-fae6f9fe] strong{color:#c00000}}",""])},383:function(e,t,n){"use strict";n.r(t);var o=n(356),r=n(73),d=n(313),c=n(334),l=(n(316),{props:{id:Number,data:Object,background:Array},data:function(){var e=this.data.banners[this.id-1];return{idx:e.id,h1:e.h1,p:e.p,button:e.button,aLink:e.a}}}),f=(n(358),n(6)),v=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"banner"},[o("img",{attrs:{src:n(357)("./"+e.background[e.id-1]+".webp")}}),e._v(" "),o("div",{staticClass:"banner-wraper"},[o("div",{staticClass:"banner-content"},[o("h1",[e._v(e._s(e.h1))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.p)}}),e._v(" "),o("a",{staticClass:"button",attrs:{href:e.aLink}},[e._v(e._s(e.button))])])])])}),[],!1,null,"fae6f9fe",null).exports,h={components:{Slideshow:d.a,Sign:c.a,Banner:v},data:function(){return{slides:r.slideshow,page:"index",data:o.es,banners:r.banners.index}}},m=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main"},[n("Slideshow",{attrs:{slides:e.slides,page:e.page}}),e._v(" "),n("Sign",{attrs:{id:1,data:e.data}}),e._v(" "),n("Banner",{attrs:{id:1,data:e.data,background:e.banners}}),e._v(" "),n("Sign",{attrs:{id:2,data:e.data}}),e._v(" "),n("Banner",{attrs:{id:2,data:e.data,background:e.banners}})],1)}),[],!1,null,null,null);t.default=m.exports}}]);