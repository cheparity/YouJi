(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/webview/webview"],{"108c":function(t,e,n){"use strict";n.r(e);var u=n("5ddd"),a=n.n(u);for(var c in u)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(c);e["default"]=a.a},"3e67":function(t,e,n){"use strict";(function(t,e){var u=n("4ea4");n("059f"),n("a9ff");u(n("66fd"));var a=u(n("f1de"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"5ddd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLoad:function(e){var n=e.url,u=e.title;"http"!=n.substring(0,4)?(t.showModal({title:"错误",content:'不是一个有效的网站链接,"'+n+'"',showCancel:!1,confirmText:"知道了",complete:function(){t.navigateBack()}}),u="页面路径错误"):(console.log(n,u),this.url=n),u&&t.setNavigationBarTitle({title:u})},data:function(){return{url:null}}};e.default=n}).call(this,n("543d")["default"])},c4d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},a=[]},f1de:function(t,e,n){"use strict";n.r(e);var u=n("c4d6"),a=n("108c");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);var i=n("f0c5"),o=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=o.exports}},[["3e67","common/runtime","common/vendor"]]]);