(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-admin"],{"0add":function(n,e,t){"use strict";(function(n,e){var u=t("4ea4");t("0c57"),t("a9ff");u(t("66fd"));var i=u(t("1a7c"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"1a7c":function(n,e,t){"use strict";t.r(e);var u=t("b43b"),i=t("6c46");for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("c23c");var o=t("f0c5"),c=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=c.exports},"5da9":function(n,e,t){"use strict";(function(n,u){var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(t("87f0")),o=i(t("a844")),c=(i(t("ad01")),n.importObject("uni-id-co",{customUI:!0})),s={mixins:[o.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:a.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var n=this;this.$refs.form.validate().then((function(e){return 4!=n.formData.captcha.length?(n.$refs.captcha.focusCaptchaInput=!0,u.showToast({title:"请输入验证码",icon:"none",duration:3e3})):n.needAgreements&&!n.agree?n.$refs.agreements.popup((function(){n.submitForm(e)})):void n.submitForm(e)})).catch((function(e){var t=e[0].key;t=t.replace(t[0],t[0].toUpperCase()),n["focus"+t]=!0}))},submitForm:function(n){var e=this;c.registerAdmin(this.formData).then((function(n){u.navigateBack()})).catch((function(n){e.$refs.captcha.getImageCaptcha(),u.showModal({title:"提示",content:n.errMsg||"创建失败: ".concat(n.errCode),showCancel:!1})}))},navigateBack:function(){u.navigateBack()},toLogin:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=s}).call(this,t("a9ff")["default"],t("543d")["default"])},"6c46":function(n,e,t){"use strict";t.r(e);var u=t("5da9"),i=t.n(u);for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);e["default"]=i.a},"7c21":function(n,e,t){},b43b:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return u}));var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"9c48"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"d230"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"ccf0"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"8256"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"c45e"))}},i=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusUsername=!1},n.e1=function(e){n.focusNickname=!1},n.e2=function(e){n.focusPassword=!1},n.e3=function(e){n.focusPassword2=!1})},a=[]},c23c:function(n,e,t){"use strict";var u=t("7c21"),i=t.n(u);i.a}},[["0add","common/runtime","common/vendor"]]]);