(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-admin"],{244:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27);o(t(25));var i=o(t(245));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},245:function(n,e,t){"use strict";t.r(e);var o=t(246),i=t(248);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t(250);var r,s=t(50),a=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);a.options.__file="uni_modules/uni-id-pages/pages/register/register-admin.vue",e["default"]=a.exports},246:function(n,e,t){"use strict";t.r(e);var o=t(247);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},247:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return r})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return o}));try{o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,429))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,438))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,386))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,445))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,415))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusUsername=!1},n.e1=function(e){n.focusNickname=!1},n.e2=function(e){n.focusPassword=!1},n.e3=function(e){n.focusPassword2=!1})},u=!1,r=[];i._withStripped=!0},248:function(n,e,t){"use strict";t.r(e);var o=t(249),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},249:function(n,e,t){"use strict";(function(n,o){var i=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(t(202)),r=i(t(177)),s=(i(t(47)),n.importObject("uni-id-co",{customUI:!0})),a={mixins:[r.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:u.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var n=this;this.$refs.form.validate().then((function(e){return 4!=n.formData.captcha.length?(n.$refs.captcha.focusCaptchaInput=!0,o.showToast({title:"请输入验证码",icon:"none",duration:3e3})):n.needAgreements&&!n.agree?n.$refs.agreements.popup((function(){n.submitForm(e)})):void n.submitForm(e)})).catch((function(e){var t=e[0].key;t=t.replace(t[0],t[0].toUpperCase()),n["focus"+t]=!0}))},submitForm:function(n){var e=this;s.registerAdmin(this.formData).then((function(n){o.navigateBack()})).catch((function(n){e.$refs.captcha.getImageCaptcha(),o.showModal({title:"提示",content:n.errMsg||"创建失败: ".concat(n.errCode),showCancel:!1})}))},navigateBack:function(){o.navigateBack()},toLogin:function(){o.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){o.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=a}).call(this,t(27)["default"],t(2)["default"])},250:function(n,e,t){"use strict";t.r(e);var o=t(251),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},251:function(n,e,t){}},[[244,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/register/register-admin.js.map