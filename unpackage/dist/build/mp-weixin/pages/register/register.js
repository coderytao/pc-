(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"27ed":function(e,t,n){"use strict";n.r(t);var o=n("e3da"),c=n("9f05");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("ef9c");var s,r=n("f0c5"),u=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=u.exports},"9b7c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{codetext:"获取验证码",codeflag:!0,telphone:"",password:"",code:""}},methods:{register:function(){e.request({url:"http://www.mall.com/api/index/register",method:"POST",data:{telphone:this.telphone,password:this.password,code:this.code},success:function(e){console.log(e)}})},senMessage:function(){e.request({url:"http://www.mall.com/api/index/getSmsCode",methods:"POST",data:{telphone:this.telphone},success:function(t){console.log(0!=t.data.result),e.showToast({title:"获取成功",icon:"none"})}})},timeout:function(){var e=this;if(this.check.telphone(this.telphone)&&0!=this.codeflag){this.senMessage(),this.codeflag=!1;var t=60;this.codetext="重新获取"+t;var n=setInterval((function(){0==t?(clearInterval(n),e.codetext="获取验证码",e.codeflag=!0):(t--,e.codetext=t+"s")}),1e3)}}}};t.default=n}).call(this,n("543d")["default"])},"9f05":function(e,t,n){"use strict";n.r(t);var o=n("9b7c"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=c.a},d568:function(e,t,n){"use strict";(function(e){n("aa0b");o(n("66fd"));var t=o(n("27ed"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e3da:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var c=function(){var e=this,t=e.$createElement;e._self._c},a=[]},e7b9:function(e,t,n){},ef9c:function(e,t,n){"use strict";var o=n("e7b9"),c=n.n(o);c.a}},[["d568","common/runtime","common/vendor"]]]);