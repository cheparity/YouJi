(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar"],{353:function(e,n,t){"use strict";t.r(n);var r=t(354),o=t(356);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(358);var a,i=t(50),c=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);c.options.__file="uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue",n["default"]=c.exports},354:function(e,n,t){"use strict";t.r(n);var r=t(355);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},355:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,334))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,542))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,a=[];o._withStripped=!0},356:function(e,n,t){"use strict";t.r(n);var r=t(357),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},357:function(e,n,t){"use strict";(function(e,r,o){var u=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(t(28)),i=u(t(30)),c=t(103),s={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){return(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{hasLogin:function(){return c.store.hasLogin},userInfo:function(){return c.store.userInfo},avatar_file:function(){return c.store.userInfo.avatar_file}},methods:{setAvatarFile:function(e){c.mutations.updateUserInfo({avatar_file:e})},bindchooseavatar:function(n){var t=this;return(0,i.default)(a.default.mark((function u(){var i,c,s,l,d,f;return a.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return i=n.detail.avatarUrl,c={extname:i.split(".")[i.split(".").length-1],name:"",url:i},u.next=4,new Promise((function(n){e.cropImage({src:i,cropScale:"1:1",success:function(e){n(e.tempFilePath)},fail:function(e){console.error(e),r.showModal({content:"wx.cropImage "+e.errMsg,showCancel:!1,confirmText:"跳过裁剪",complete:function(){n(i)}})}})}));case 4:return s=u.sent,l=t.userInfo._id+""+Date.now(),c.name=l,u.prev=7,r.showLoading({title:"更新中",mask:!0}),u.next=11,o.uploadFile({filePath:s,cloudPath:l,fileType:"image"});case 11:d=u.sent,f=d.fileID,c.url=f,r.hideLoading(),u.next=20;break;case 17:u.prev=17,u.t0=u["catch"](7),console.error(u.t0);case 20:t.setAvatarFile(c);case 21:case"end":return u.stop()}}),u,null,[[7,17]])})))()},uploadAvatarImg:function(e){return!1}}};n.default=s}).call(this,t(1)["default"],t(2)["default"],t(27)["default"])},358:function(e,n,t){"use strict";t.r(n);var r=t(359),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},359:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(353))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component']]
]);
