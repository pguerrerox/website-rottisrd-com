(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{220:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("24df2808",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";var o=n(3),r=n(16),c=n(22),l=n(110),d=n(57),f=n(10),v=n(39).f,m=n(58).f,h=n(9).f,_=n(233).trim,x=o.Number,w=x,y=x.prototype,k="Number"==c(n(73)(y)),E="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(k?f((function(){y.valueOf.call(n)})):"Number"!=c(n))?l(new w(C(e)),n,x):C(e)};for(var N,j=n(8)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;j.length>I;I++)r(w,N=j[I])&&!r(x,N)&&h(x,N,m(w,N));x.prototype=y,y.constructor=x,n(11)(o,"Number",x)}},222:function(t,e,n){var map={"./s.png":223,"./slide1.png":224,"./slide2.png":225,"./slide3.png":226,"./slide4.png":227};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=222},223:function(t,e,n){t.exports=n.p+"img/faf577c.png"},224:function(t,e,n){t.exports=n.p+"img/18a0f6f.png"},225:function(t,e,n){t.exports=n.p+"img/a711a31.png"},226:function(t,e,n){t.exports=n.p+"img/dda055e.png"},227:function(t,e,n){t.exports=n.p+"img/06c4896.png"},228:function(t,e,n){var map={"./fija1.png":229,"./fija2.png":230,"./fija3.png":231,"./fija4.png":232};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=228},229:function(t,e,n){t.exports=n.p+"img/a50ba51.png"},230:function(t,e,n){t.exports=n.p+"img/0b8310b.png"},231:function(t,e,n){t.exports=n.p+"img/44a6801.png"},232:function(t,e,n){t.exports=n.p+"img/32135a8.png"},233:function(t,e,n){var o=n(7),r=n(21),c=n(10),l=n(234),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,n){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=r[t]=d?e(h):l[t];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},h=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},234:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},235:function(t,e,n){"use strict";var o=n(220);n.n(o).a},236:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".slideshow[data-v-b88ddd24]{width:100%;margin:0 auto;padding:0;overflow:hidden}.images[data-v-b88ddd24]{width:100%}.slides-imgs[data-v-b88ddd24]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.circles[data-v-b88ddd24]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-b88ddd24]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-b88ddd24]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.fade[data-v-b88ddd24]{-webkit-animation-name:fade-data-v-b88ddd24;-webkit-animation-duration:s;animation-name:fade-data-v-b88ddd24;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-b88ddd24{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-b88ddd24{0%{opacity:.6}to{opacity:1}}",""])},237:function(t,e,n){"use strict";n(221);var o={props:{slides:Array,marca:String,fijas:Object,nonSlides:Boolean,slideshowPos:Number},data:function(){return{imgs:this.slides}},mounted:function(){},methods:{}},r=(n(235),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"slideshow"},[t.nonSlides?t._e():o("div",{staticClass:"images"},t._l(t.imgs,(function(img){return o("img",{directives:[{name:"show",rawName:"v-show",value:t.slideshowPos===t.imgs.indexOf(img),expression:"slideshowPos === imgs.indexOf(img)"}],key:img.id,staticClass:"slides-imgs fade",attrs:{src:n(222)("./"+img+".png")}})})),0),t._v(" "),t.nonSlides?o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(228)("./"+t.fijas[t.marca]+".png")}})]):t._e()])}),[],!1,null,"b88ddd24",null);e.a=component.exports},240:function(t,e,n){var content=n(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("43ec322c",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0c90a8fa",content,!0,{sourceMap:!1})},242:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8932c668",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("068f0e54",content,!0,{sourceMap:!1})},244:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4be97e3b",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";var o=n(240);n.n(o).a},255:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".forma-contacto[data-v-58141788]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;width:100%;margin:25px auto}.forma-container[data-v-58141788]{width:100%}.forma-text[data-v-58141788]{align-self:center;text-align:justify}.forma-wrapper[data-v-58141788]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center}.formulario-contacto[data-v-58141788]{max-width:500px;margin:50px 25px;padding:35px;background-color:#e0e0e0}label[data-v-58141788]{font-weight:700;color:#c00000}input[type=email][data-v-58141788],input[type=text][data-v-58141788],select[data-v-58141788],textarea[data-v-58141788]{display:inline-block;width:100%;margin:5px 0 15px;padding:10px;border:2px solid #ccc;box-sizing:border-box;-webkit-transition:.3s;transition:.3s}input[type=email][data-v-58141788]:focus,input[type=text][data-v-58141788]:focus,select[data-v-58141788]:focus,textarea[data-v-58141788]:focus{border:2px solid #c00000}.button[data-v-58141788]{width:100%;margin:0 auto}.g-recaptcha[data-v-58141788]{text-align:-webkit-center;margin:5px auto 15px}",""])},256:function(t,e,n){"use strict";var o=n(241);n.n(o).a},257:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".info-informacion[data-v-687d4ee1]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;width:100%}h2[data-v-687d4ee1]{text-align:center;font-size:1.75em}.info-contacto[data-v-687d4ee1]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:25px 50px;text-align:center}.info-contacto a[data-v-687d4ee1]{text-decoration:none;color:inherit;font-style:normal}.info-contacto a[data-v-687d4ee1]:focus,.info-contacto a[data-v-687d4ee1]:hover,.info-contacto h3[data-v-687d4ee1]:hover,strong[data-v-687d4ee1]{color:#c00000}",""])},258:function(t,e,n){"use strict";var o=n(242);n.n(o).a},259:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".info-negocios[data-v-760e8858]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center;height:500px}.negocios-internacionales[data-v-760e8858],.negocios-locales[data-v-760e8858]{width:40%}.negocios-internacionales .negocios-locales[data-v-760e8858],h2[data-v-760e8858],p[data-v-760e8858]{text-align:center}.vertical-line[data-v-760e8858]{display:block;height:80%;border:1px solid #c00}",""])},260:function(t,e,n){"use strict";var o=n(243);n.n(o).a},261:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"h2[data-v-4a6baeb9]{text-align:center}.info[data-v-4a6baeb9]{background-color:#fff;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%}.header-wraper[data-v-4a6baeb9]{margin:50px 0}.normal[data-v-4a6baeb9]{font-family:gotham;color:#666;margin:0 0 30px}.normal span[data-v-4a6baeb9]{color:#c00000;font-weight:700}.info p[data-v-4a6baeb9],h1[data-v-4a6baeb9]{text-align:center}.info-container[data-v-4a6baeb9]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.info-contacto[data-v-4a6baeb9],.info-form[data-v-4a6baeb9]{width:45%}",""])},262:function(t,e,n){var map={"./empleo-bg.webp":115};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=262},263:function(t,e,n){"use strict";var o=n(244);n.n(o).a},264:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".forma-empleo[data-v-79a31206]{background:#fff;height:700px;padding:50px 0 0;-webkit-box-align:center;align-items:center}.forma-container[data-v-79a31206],.forma-empleo[data-v-79a31206]{width:100%;display:-webkit-box;display:flex}.forma-container[data-v-79a31206]{background-image:var(--background-Image);background-size:cover;background-repeat:no-repeat;background-position:bottom;margin:50px auto;height:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;align-content:center}.forma-text[data-v-79a31206]{width:500px;align-self:center;text-align:justify}.forma-text h2[data-v-79a31206],p[data-v-79a31206]{color:#fff}.forma-wrapper[data-v-79a31206]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;align-self:center}.formulario-empleo[data-v-79a31206]{max-width:500px;margin:50px 25px;padding:35px;background-color:#e0e0e0}label[data-v-79a31206]{font-weight:700;color:#c00000}input[type=email][data-v-79a31206],input[type=file][data-v-79a31206],input[type=text][data-v-79a31206],select[data-v-79a31206],textarea[data-v-79a31206]{display:inline-block;width:100%;margin:5px 0 15px;padding:10px;border:2px solid #ccc;box-sizing:border-box;-webkit-transition:.3s;transition:.3s}input[type=email][data-v-79a31206]:focus,input[type=file][data-v-79a31206]:focus,input[type=text][data-v-79a31206]:focus,select[data-v-79a31206]:focus,textarea[data-v-79a31206]:focus{border:2px solid #c00000}.button[data-v-79a31206]{width:100%;margin:0 auto}.g-recaptcha[data-v-79a31206]{text-align:-webkit-center;margin:5px auto 15px}",""])},293:function(t,e,n){"use strict";n.r(e);var o=n(74),r=n(237),c={data:function(){return{referrer:document.URL}}},l=(n(254),n(6)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"forma-contacto"},[n("div",{staticClass:"forma-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"forma-wrapper"},[n("div",{staticClass:"formulario-contacto"},[n("form",{staticClass:"form-contacto",attrs:{method:"POST",action:"https://static-email.herokuapp.com/contacto/rottis",enctype:"multipart/form-data"}},[n("input",{attrs:{type:"hidden",name:"referrer"},domProps:{value:t.referrer}}),t._v(" "),n("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),t._v(" "),t._m(2),t._v(" "),n("label",{attrs:{for:"e-mail"}},[t._v("Email")]),t._v(" "),t._m(3),t._v(" "),n("label",{attrs:{for:"ciudad"}},[t._v("Ciudad")]),t._v(" "),t._m(4),t._v(" "),n("label",{attrs:{for:"asunto"}},[t._v("Asunto")]),t._v(" "),t._m(5),t._v(" "),n("label",{attrs:{for:"tema"}},[t._v("Tema")]),t._v(" "),t._m(6),t._v(" "),n("label",{attrs:{for:"mensaje"}},[t._v("Mensaje")]),t._v(" "),n("br"),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"g-recaptcha",attrs:{id:"recaptcha","data-sitekey":"6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI"}}),t._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",name:"enviar",value:"ENVIAR"}})])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("\n      ¿En qué podemos\n      "),e("strong",[this._v("ayudarle")]),this._v("?\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"forma-text"},[e("p",[this._v("\n        En\n        "),e("strong",[this._v("Rottis estamos para servirle")]),this._v(", utilice el siguiente formulario, para ponerse en contacto con nuestro equipo de servicio, una vez recibido su mensaje le estaremos contactando para ofrecerle respuesta a su solicitud, inquietud o pregunta.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"name",type:"text",placeholder:"Jose Pérez",required:"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"email",type:"email",placeholder:"jose.perez@ejemplo.com",required:"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"ciudad",type:"text",placeholder:"Santiago"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"asunto",type:"text",placeholder:"Hola Rottis...",required:"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("select",{attrs:{name:"tema",type:"text",required:"true"}},[e("option",{attrs:{value:"Solicitud de información"}},[this._v("Solicitud de información")]),this._v(" "),e("option",{attrs:{value:"Sugerencias y/o Comentarios"}},[this._v("Sugerencias y/o Comentarios")]),this._v(" "),e("option",{attrs:{value:"Servicio al cliente"}},[this._v("Servicio al cliente")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("textarea",{attrs:{name:"mensaje",rows:"8",cols:"40",placeholder:"Escribe tu mensaje aqui...",required:"true"}})])}],!1,null,"58141788",null).exports,f={},v=(n(256),Object(l.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"info-informacion"},[n("h2",[n("strong",[t._v("Puedes contactarnos")]),t._v(", utilizando cualquiera de estos medios.\n  ")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"info-contacto"},[n("h2",{},[n("strong",[t._v("Vía telefónica")]),t._v(" al siguiente número:\n    ")]),t._v(" "),n("h3",[n("a",{attrs:{href:"tel:809-571-9821",target:"_blank",title:"Click para llamar"}},[t._v("(809) 571-9821")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"info-contacto"},[n("h2",{},[t._v("\n      En nuestras\n      "),n("strong",[t._v("redes sociales")]),t._v(":\n    ")]),t._v(" "),n("h3",[n("a",{attrs:{href:"#"}},[t._v("Facebook")]),t._v(" "),n("br")]),t._v(" "),n("h3",[n("a",{attrs:{href:"#"}},[t._v("Instagram")]),t._v(" "),n("br")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"info-contacto"},[n("h2",{},[t._v("\n      Nuestro\n      "),n("strong",[t._v("horario laboral")]),t._v(" es:\n    ")]),t._v(" "),n("h3",[n("strong",[t._v("Lunes a Viernes")]),t._v(" "),n("br"),t._v("8:00 am / 5:00 pm\n    ")]),t._v(" "),n("br"),t._v(" "),n("h3",[n("strong",[t._v("Sabados")]),t._v(" "),n("br"),t._v("8:00 am / 12:00 pm\n    ")])])])}],!1,null,"687d4ee1",null).exports),m={},h=(n(258),{components:{Form:d,InfoContacto:v,InfoNegocios:Object(l.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"info-negocios"},[n("div",{staticClass:"negocios-internacionales"},[n("h2",[t._v("Negocios Internacionales y Exportaciones")]),t._v(" "),n("p",[t._v("\n      Para informaciones de negocios internacionales y exportaciones, contacte nuestro departamento de exportaciones.\n      "),n("strong",[t._v("Tel. (809) 241-2285")])]),t._v(" "),n("p",[t._v("\n      También puedes contactarnos vía correo electrónico a la dirección:\n      "),n("strong",[n("a",{attrs:{mailto:"aperez@expi.com.do"}},[t._v("aperez@expi.com.do")])])])]),t._v(" "),n("div",{staticClass:"vertical-line"}),t._v(" "),n("div",{staticClass:"negocios-locales"},[n("h2",[t._v("Negocios Internacionales y Exportaciones")]),t._v(" "),n("p",[t._v("\n      Para informaciones de negocios en República Dominicana, contacte nuestro departamento de servicio al cliente.\n      "),n("strong",[t._v("Tel. (809) 571-9821")])]),t._v(" "),n("p",[t._v("\n      También puedes contactarnos vía correo electrónico a la dirección:\n      "),n("strong",[n("a",{attrs:{mailto:"info@rottisrd.com.do"}},[t._v("info@rottisrd.com.do")])])])])])}],!1,null,"760e8858",null).exports}}),_=(n(260),Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"info"},[this._m(0),this._v(" "),e("hr"),this._v(" "),e("div",{staticClass:"info-container"},[e("div",{staticClass:"info-form"},[e("Form")],1),this._v(" "),e("div",{staticClass:"info-contacto"},[e("InfoContacto")],1)]),this._v(" "),e("hr"),this._v(" "),e("div",{staticClass:"info-negocios"},[e("InfoNegocios")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-header"},[e("div",{staticClass:"header-wraper"},[e("h1",{staticClass:"normal"},[this._v("\n        Gracias por su interes en\n        "),e("span",[this._v("Fabrica Rottis")])]),this._v(" "),e("h2",[this._v("Sus comentarios o inquietudes son de gran importancia para nosotros.")])])])}],!1,null,"4a6baeb9",null).exports),x={data:function(){var t=o.banners.contacto.empleoBG;return{referrer:document.URL,bgPath:n(262)("./"+t+".webp")}},computed:{styleBG:function(){return{"--background-Image":"url("+this.bgPath+")"}}}},w=(n(263),{head:function(){return{script:[{src:"https://www.google.com/recaptcha/api.js"}]}},components:{Info:_,Form:d,Empleo:Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"forma-empleo"},[n("div",{staticClass:"forma-container",style:t.styleBG},[t._m(0),t._v(" "),n("div",{staticClass:"forma-wrapper"},[n("div",{staticClass:"formulario-empleo"},[n("form",{staticClass:"form-empleo",attrs:{id:"form-empleo",method:"POST",action:"https://static-email.herokuapp.com/empleo/rottis",enctype:"multipart/form-data"}},[n("input",{attrs:{type:"hidden",name:"referrer"},domProps:{value:t.referrer}}),t._v(" "),n("label",{attrs:{for:"nombre"}},[t._v("Nombre*")]),t._v(" "),t._m(1),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Email*")]),t._v(" "),t._m(2),t._v(" "),n("label",{attrs:{for:"attachFile"}},[t._v("Archivo*")]),n("br"),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"g-recaptcha",attrs:{id:"recaptcha","data-sitekey":"6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI"}}),t._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",name:"enviar",value:"ENVIAR"}})])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forma-text"},[n("h2",[t._v("¿Quieres "),n("strong",[t._v("trabajar")]),t._v(" con nosotros?")]),t._v(" "),n("p",[t._v("\n        Usando el siguiente formulario podras enviarnos tu "),n("strong",[t._v("curriculum vitae (CV)")]),t._v(", no olvides completar con informacion real, de otra forma no podremos evaluarte."),n("br"),t._v("\n        El formulario solo permite enviar archivos PDF y el tamaño máximo es de 2 megabytes (MB).\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"nombre",type:"text",placeholder:"Jose Pérez",required:"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"email",type:"email",placeholder:"jose.perez@ejemplo.com",required:"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("input",{attrs:{name:"attachFile",type:"file",accept:"application/pdf,.pdf"}})])}],!1,null,"79a31206",null).exports,Slideshow:r.a},data:function(){return{slides:o.slideshow,slideshowPos:0}},metaInfo:{title:"Contacto"}}),y=Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main"},[e("Empleo"),this._v(" "),e("Info"),this._v(" "),e("slideshow",{attrs:{slides:this.slides,slideshowPos:this.slideshowPos}})],1)}),[],!1,null,"66821092",null);e.default=y.exports}}]);