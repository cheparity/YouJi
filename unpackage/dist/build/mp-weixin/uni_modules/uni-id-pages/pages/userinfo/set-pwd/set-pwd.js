(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd"],{"119a":function(n,e,t){"use strict";t.r(e);var o=t("357c"),u=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=u.a},"357c":function(n,e,t){"use strict";(function(n,o){var u=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(t("0fcd")),s=t("9e99"),a=u(t("9539")),c=n.importObject("uni-id-co",{customUI:!0}),r={name:"set-pwd.vue",data:function(){return{uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:i.default.getPwdRules("newPassword","newPassword2")}},computed:{userInfo:function(){return s.store.userInfo}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(n){var e;this.uniIdRedirectUrl=n.uniIdRedirectUrl,this.loginType=n.loginType,a.default.setPasswordAfterLogin&&null!==(e=a.default.setPasswordAfterLogin)&&void 0!==e&&e.allowSkip&&(this.allowSkip=!0)},methods:{submit:function(){var n=this;if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,o.showToast({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((function(e){c.setPwd({password:n.formData.newPassword,code:n.formData.code,captcha:n.formData.captcha}).then((function(e){o.showModal({content:"密码设置成功",showCancel:!1,success:function(){s.mutations.loginBack({uniIdRedirectUrl:n.uniIdRedirectUrl,loginType:n.loginType})}})})).catch((function(n){o.showModal({content:n.message,showCancel:!1})}))})).catch((function(e){"uni-id-captcha-required"==e.errCode?n.$refs.popup.open():console.log(e.errMsg)})).finally((function(e){n.formData.captcha=""}))},skip:function(){s.mutations.loginBack(this.uniIdRedirectUrl)}}};e.default=r}).call(this,t("a9ff")["default"],t("543d")["default"])},"662a":function(n,e,t){},c3e6:function(n,e,t){"use strict";(function(n,e){var o=t("4ea4");t("059f"),t("a9ff");o(t("66fd"));var u=o(t("e07d"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},cac7:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"dced"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"5716"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"94bf"))},uniIdPagesSmsForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form").then(t.bind(null,"40f4"))},uniPopupCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-popup-captcha/uni-popup-captcha").then(t.bind(null,"f0c5c"))}},u=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusNewPassword=!1},n.e1=function(e){n.focusNewPassword2=!1})},i=[]},e07d:function(n,e,t){"use strict";t.r(e);var o=t("cac7"),u=t("119a");for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("f100");var s=t("f0c5"),a=Object(s["a"])(u["default"],o["b"],o["c"],!1,null,"d98530b4",null,!1,o["a"],void 0);e["default"]=a.exports},f100:function(n,e,t){"use strict";var o=t("662a"),u=t.n(o);u.a}},[["c3e6","common/runtime","common/vendor"]]]);