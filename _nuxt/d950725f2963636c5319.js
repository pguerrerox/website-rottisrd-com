(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("c3651ea6",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("bf00b430",content,!0,{sourceMap:!1})},190:function(t,e,o){t.exports=o.p+"img/9b4f8b7.png"},191:function(t,e,o){t.exports=o.p+"img/d006c6c.png"},192:function(t,e,o){t.exports=o.p+"img/147fa62.png"},193:function(t,e,o){t.exports=o.p+"img/2ccae12.png"},194:function(t){t.exports=JSON.parse('{"mainLogo":"main-logo","slideshow":["slide1","slide2","slide3","slide4"],"marcasLogos":{"rottis":{"file":"rottis-logo"},"baruk":{"file":"baruk-logo"},"nauj":{"file":"nauj-logo"},"costero":{"file":"costero-logo"}},"banners":{"index":["banner1","banner2"],"productos":["rottis-bg","baruk-bg","nauj-bg","costero-bg"],"marcas":{"rottis":["holandes-bg","gouda-bg"],"baruk":["mozzarella-bg","danes-bg"],"nauj":["blancofreir-bg","amarillofreir-bg","cheddar-bg","dehoja-bg"],"costero":[]}},"productShots":{"rottis":["shot-holandes","shot-gouda"],"baruk":["shot-mozzarella","shot-danes"],"nauj":["shot-blancofreir","shot-amarillofreir","shot-cheddar","shot-dehoja"],"costero":[]}}')},195:function(t,e,o){var map={"./slide1.png":196,"./slide2.png":197,"./slide3.png":198,"./slide4.png":199};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=195},196:function(t,e,o){t.exports=o.p+"img/6d8a687.png"},197:function(t,e,o){t.exports=o.p+"img/95816e1.png"},198:function(t,e,o){t.exports=o.p+"img/d3121c0.png"},199:function(t,e,o){t.exports=o.p+"img/9f0a939.png"},200:function(t,e,o){"use strict";var n=o(188);o.n(n).a},201:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".slideshow[data-v-63e3c9ec]{width:100vw;height:50vh;max-height:500px;overflow:hidden;position:relative}.circles[data-v-63e3c9ec]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;height:100%;position:absolute;left:95%;z-index:5}.dots[data-v-63e3c9ec]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-63e3c9ec]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.images[data-v-63e3c9ec]{width:inherit;height:100%}.slides-imgs[data-v-63e3c9ec]{width:100%;height:inherit;position:absolute;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.fade[data-v-63e3c9ec]{-webkit-animation-name:fade-data-v-63e3c9ec;-webkit-animation-duration:s;animation-name:fade-data-v-63e3c9ec;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-63e3c9ec{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-63e3c9ec{0%{opacity:.6}to{opacity:1}}",""])},202:function(t,e,o){"use strict";var n={props:{slides:Array},data:function(){return{slideshowPos:Math.floor(Math.random()*Math.floor(4)),imgs:this.slides}},mounted:function(){var t=this;setInterval((function(){t.counter()}),3500)},methods:{counter:function(){this.slideshowPos>=this.imgs.length-1?this.slideshowPos=0:this.slideshowPos++}}},r=(o(200),o(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"slideshow"},[n("div",{staticClass:"circles"},t._l(t.imgs,(function(img){return n("div",{key:img.id,staticClass:"dots",class:{active:t.slideshowPos===t.imgs.indexOf(img)},on:{click:function(e){t.slideshowPos=t.imgs.indexOf(img)}}})})),0),t._v(" "),n("div",{staticClass:"images"},t._l(t.imgs,(function(img){return n("img",{directives:[{name:"show",rawName:"v-show",value:t.slideshowPos===t.imgs.indexOf(img),expression:"slideshowPos === imgs.indexOf(img)"}],key:img.id,staticClass:"slides-imgs fade",attrs:{src:o(195)("./"+img+".png")}})})),0)])}),[],!1,null,"63e3c9ec",null);e.a=component.exports},203:function(t,e,o){"use strict";var n=o(3),r=o(16),c=o(22),d=o(109),l=o(57),f=o(10),h=o(39).f,m=o(58).f,v=o(8).f,x=o(208).trim,w=n.Number,k=w,y=w.prototype,_="Number"==c(o(73)(y)),N="trim"in String.prototype,j=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,c=(e=N?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(_?f((function(){y.valueOf.call(o)})):"Number"!=c(o))?d(new k(j(e)),o,w):j(e)};for(var O,E=o(7)?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)r(k,O=E[C])&&!r(w,O)&&v(w,O,m(k,O));w.prototype=y,y.constructor=w,o(11)(n,"Number",w)}},207:function(t,e,o){var map={"./baruk-logo.png":190,"./costero-logo.png":191,"./nauj-logo.png":192,"./rottis-logo.png":193};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=207},208:function(t,e,o){var n=o(6),r=o(21),c=o(10),d=o(209),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),m=function(t,e,o){var r={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=r[t]=l?e(v):d[t];o&&(r[o]=f),n(n.P+n.F*l,"String",r)},v=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},209:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},210:function(t,e,o){"use strict";var n=o(189);o.n(n).a},211:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".noMargin[data-v-38e98fbc]{margin:0!important}.sign[data-v-38e98fbc]{width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-38e98fbc]{width:1440px;margin:75px auto}.sign-message[data-v-38e98fbc]{text-align:center}.sign-message h1[data-v-38e98fbc]{margin:0}.sign-message h3[data-v-38e98fbc]{color:#999;margin-top:0}.sign-logos[data-v-38e98fbc]{width:100%;display:-webkit-box;display:flex;margin-top:50px;justify-content:space-around;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-38e98fbc]{width:150px;height:auto}",""])},212:function(t,e,o){var map={"./baruk-logo.png":190,"./costero-logo.png":191,"./nauj-logo.png":192,"./rottis-logo.png":193};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=212},213:function(t,e,o){var content=o(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("288eb352",content,!0,{sourceMap:!1})},217:function(t,e,o){"use strict";o(203);var n={props:{id:Number,data:Object},data:function(){var t=this.data.signs[this.id-1];return{idx:t.id,h1:t.h1,h3:t.h3,imgs:t.imgs}}},r=(o(210),o(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sign"},[n("div",{staticClass:"sign-wraper"},[n("div",{staticClass:"sign-message"},[n("h1",[t._v(t._s(t.h1))]),t._v(" "),n("h3",[t._v(t._s(t.h3))])]),t._v(" "),n("div",{staticClass:"sign-logos",class:{noMargin:t.imgs.length<=0}},t._l(t.imgs,(function(img){return n("img",{key:img.id,attrs:{src:o(207)("./"+img),alt:"Rottis Logo"}})})),0)])])}),[],!1,null,"38e98fbc",null);e.a=component.exports},224:function(t){t.exports=JSON.parse('{"es":{"signs":[{"id":1,"h1":"Un pedazo de mi tierra","h3":"Productos dominicanos de la más alta calidad","imgs":""}],"products":[{"button":"Linea Rottis"},{"button":"Linea Baruk"},{"button":"Linea Nauj"},{"button":"Linea Costero"}]}}')},225:function(t,e,o){var map={"./baruk-bg.png":226,"./costero-bg.png":227,"./nauj-bg.png":228,"./rottis-bg.png":229};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=225},226:function(t,e,o){t.exports=o.p+"img/e25d93e.png"},227:function(t,e,o){t.exports=o.p+"img/23188b9.png"},228:function(t,e,o){t.exports=o.p+"img/1bbb175.png"},229:function(t,e,o){t.exports=o.p+"img/0c23db6.png"},230:function(t,e,o){"use strict";var n=o(213);o.n(n).a},231:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".banner-products[data-v-623449a1]{width:100%}.products-wraper[data-v-623449a1]{position:relative;width:100%;height:500px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;margin:5px 0}.products-wraper>img[data-v-623449a1]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}section.banner-products>div[data-v-623449a1]:first-child{margin:0 0 5px}section.banner-products>div[data-v-623449a1]:last-child{margin:5px 0 0}.products-content[data-v-623449a1]{width:670px;height:300px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center;background-color:hsla(0,0%,100%,.5)}.content-logo[data-v-623449a1]{width:auto;height:125px}section.banner-products>div:nth-child(2)>div>img[data-v-623449a1]{height:150px}.products-content a[data-v-623449a1]{padding:10px 50px}",""])},264:function(t,e,o){"use strict";o.r(e);var n=o(224),r=o(194),c=o(202),d=o(217),l={props:{data:Object,media:Object},data:function(){return{marcas:["rottis","baruk","nauj","costero"],backgrounds:this.media.banners.productos,logos:this.media.marcasLogos}}},f=(o(230),o(9)),h=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner-products"},t._l(t.backgrounds,(function(img){return n("div",{key:img.id,staticClass:"products-wraper"},[n("img",{attrs:{src:o(225)("./"+img+".png")}}),t._v(" "),n("div",{staticClass:"products-content"},[n("img",{staticClass:"content-logo",attrs:{src:o(212)("./"+t.logos[t.marcas[t.backgrounds.indexOf(img)]].file+".png")}}),t._v(" "),n("a",{staticClass:"button",attrs:{href:"/marcas/"+t.marcas[t.backgrounds.indexOf(img)]}},[t._v(t._s(t.data.products[t.backgrounds.indexOf(img)].button))])])])})),0)}),[],!1,null,"623449a1",null).exports,m={components:{Slideshow:c.a,Sign:d.a,Products:h},data:function(){return{slides:r.slideshow,data:n.es,media:r}},metaInfo:{title:"Nuestros Productos"}},v=Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("Slideshow",{attrs:{slides:this.slides}}),this._v(" "),e("Sign",{attrs:{id:1,data:this.data}}),this._v(" "),e("Products",{attrs:{data:this.data,media:this.media}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);