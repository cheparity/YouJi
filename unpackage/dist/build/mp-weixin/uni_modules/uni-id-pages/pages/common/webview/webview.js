(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/common/webview/webview"],{"0d4b":function(t,n,e){"use strict";(function(t,n){var u=e("4ea4");e("059f"),e("a9ff");u(e("66fd"));var a=u(e("9f08"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},5057:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLoad:function(n){var e=n.url,u=n.title;"http"!=e.substring(0,4)?(t.showModal({title:"错误",content:'不是一个有效的网站链接,"'+e+'"',showCancel:!1,confirmText:"知道了",complete:function(){t.navigateBack()}}),u="页面路径错误"):this.url=e,u&&t.setNavigationBarTitle({title:u})},data:function(){return{url:null}}};n.default=e}).call(this,e("543d")["default"])},"5f83":function(t,n,e){"use strict";e.r(n);var u=e("5057"),a=e.n(u);for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},"6c32":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},a=[]},"9f08":function(t,n,e){"use strict";e.r(n);var u=e("6c32"),a=e("5f83");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);var c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);n["default"]=o.exports}},[["0d4b","common/runtime","common/vendor"]]]);