(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"083d":function(n,e,t){},"29c2":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var c=function(){var n=this,e=n.$createElement;n._self._c},a=[]},6922:function(n,e,t){"use strict";(function(n){t("aa0b");o(t("66fd"));var e=o(t("ae17"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"7b0f":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("component/indextable").then(function(){return resolve(t("5af1"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("component/price").then(function(){return resolve(t("230e"))}.bind(null,t)).catch(t.oe)},a=function(){t.e("component/line").then(function(){return resolve(t("5c1c"))}.bind(null,t)).catch(t.oe)},i=function(){t.e("component/image").then(function(){return resolve(t("3f3a"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("component/page").then(function(){return resolve(t("c5d9"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("component/indexswiper").then(function(){return resolve(t("a5f3"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("component/header").then(function(){return resolve(t("612d"))}.bind(null,t)).catch(t.oe)},f={data:function(){return{title:"魅族声乐",iphone:"智能手机",banner:[],recommend:[],active:[],icon:[],ad:[],page:[],father:[]}},components:{MyHeader:l,Myswiper:u,Mypage:r,Myimage:i,Myline:a,Myprice:c,Myindextable:o},onLoad:function(){this.getData()},methods:{getData:function(){var e=this;n.request({url:this.apiUrl+"/index/index",success:function(n){console.log(n.data);var t=n.data.data;e.recommend=t.recommend_cate,e.banner=t.banner,e.active=t.active,e.icon=t.icon,e.ad=t.floor,e.page=t.cate,console.log(e.page),console.log(e.ad=t.floor),console.log(e.apiUrl)}})}}};e.default=f}).call(this,t("543d")["default"])},"90bd":function(n,e,t){"use strict";t.r(e);var o=t("7b0f"),c=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=c.a},ae17:function(n,e,t){"use strict";t.r(e);var o=t("29c2"),c=t("90bd");for(var a in c)"default"!==a&&function(n){t.d(e,n,(function(){return c[n]}))}(a);t("e4a5");var i,r=t("f0c5"),u=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=u.exports},e4a5:function(n,e,t){"use strict";var o=t("083d"),c=t.n(o);c.a}},[["6922","common/runtime","common/vendor"]]]);