(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kg-dy/kg-dynamic"],{319:function(n,e,o){"use strict";o.r(e);var t=o(320),i=o(322);for(var u in i)["default"].indexOf(u)<0&&function(n){o.d(e,n,(function(){return i[n]}))}(u);o(324);var r,c=o(50),s=Object(c["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],r);s.options.__file="components/kg-dy/kg-dynamic.vue",e["default"]=s.exports},320:function(n,e,o){"use strict";o.r(e);var t=o(321);o.d(e,"render",(function(){return t["render"]})),o.d(e,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(e,"components",(function(){return t["components"]}))},321:function(n,e,o){"use strict";var t;o.r(e),o.d(e,"render",(function(){return i})),o.d(e,"staticRenderFns",(function(){return r})),o.d(e,"recyclableRender",(function(){return u})),o.d(e,"components",(function(){return t}));try{t={cloudImage:function(){return o.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(o.bind(null,334))},uniDateformat:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(o.bind(null,572))},uReadMore:function(){return o.e("uview-ui/components/u-read-more/u-read-more").then(o.bind(null,578))},uniTag:function(){return o.e("uni_modules/uni-tag/components/uni-tag/uni-tag").then(o.bind(null,535))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement,o=(n._self._c,n.dyInfo.pictures.length),t=0!=o?n.dyInfo.pictures.length:null,i=0!=o?n.dyInfo.pictures.length:null,u=0!=o?n.dyInfo.pictures.length:null,r=0!=o?n.dyInfo.pictures.length>4||3==n.dyInfo.pictures.length:null;n._isMounted||(n.e0=function(e){e.stopPropagation(),!n.isInfo&&n.goInfo(n.dyInfo)},n.e1=function(e){n.isInfo&&n.comContent(n.dyInfo.id)},n.e2=function(e){n.isInfo&&n.comContent(n.dyInfo.user_id)},n.e3=function(e){n.isInfo&&n.comLike(n.dyInfo.user_id)},n.e4=function(e){n.isInfo&&n.comLike(n.dyInfo.user_id)}),n.$mp.data=Object.assign({},{$root:{g0:o,g1:t,g2:i,g3:u,g4:r}})},u=!1,r=[];i._withStripped=!0},322:function(n,e,o){"use strict";o.r(e);var t=o(323),i=o.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(u);e["default"]=i.a},323:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"dynamics",props:{dyInfo:{type:Object},isInfo:{type:Boolean}},data:function(){return{shadowStyle:{backgroundImage:"none",paddingTop:"0",marginTop:"20rpx"}}},onReady:function(){console.log("dyInfo信息",this.dyInfo),console.log("pictures信息",this.dyInfo.pictures),console.log("pictures长度",this.dyInfo.pictures.length),console.log("this.dyInfo.pictures[0].src",this.dyInfo.pictures[0].url),console.log("this.dyInfo.pictures.url",this.dyInfo.pictures.url)},methods:{previewImage:function(e,o){n.previewImage({current:e,urls:o})},goInfo:function(e){n.navigateTo({url:"../../subpages_dynamic/dynamicInfo?obj="+JSON.stringify(e),fail:function(n){console.log("跳转页面失败",n)},success:function(){console.log("跳转页面成功")}})},comContent:function(n){this.$emit("comContent",n)},comLike:function(n){console.log(n),this.$emit("comLikes",n)}}};e.default=o}).call(this,o(2)["default"])},324:function(n,e,o){"use strict";o.r(e);var t=o(325),i=o.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(u);e["default"]=i.a},325:function(n,e,o){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/kg-dy/kg-dynamic.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kg-dy/kg-dynamic-create-component',
    {
        'components/kg-dy/kg-dynamic-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(319))
        })
    },
    [['components/kg-dy/kg-dynamic-create-component']]
]);
