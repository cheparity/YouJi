(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"],{139:function(n,e,t){"use strict";(function(n,e){var i=t(4);t(26),t(27);i(t(25));var r=i(t(140));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},140:function(n,e,t){"use strict";t.r(e);var i=t(141),r=t(143);for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t(145);var o,c=t(50),a=Object(c["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],o);a.options.__file="uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate.vue",e["default"]=a.exports},141:function(n,e,t){"use strict";t.r(e);var i=t(142);t.d(e,"render",(function(){return i["render"]})),t.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(e,"components",(function(){return i["components"]}))},142:function(n,e,t){"use strict";var i;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return o})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return i}));var r=function(){var n=this,e=n.$createElement;n._self._c},u=!1,o=[];r._withStripped=!0},143:function(n,e,t){"use strict";t.r(e);var i=t(144),r=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=r.a},144:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){n.navigateBack()},nextStep:function(){n.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(e){if(e.confirm){var i=t.importObject("uni-id-co");i.closeAccount().then((function(e){n.showToast({title:"注销成功",duration:3e3}),n.removeStorageSync("uni_id_token"),n.setStorageSync("uni_id_token_expired",0),n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else n.navigateBack()}})}}};e.default=i}).call(this,t(2)["default"],t(27)["default"])},145:function(n,e,t){"use strict";t.r(e);var i=t(146),r=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=r.a},146:function(n,e,t){}},[[139,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate.js.map