(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kg-dy/kg-dynamic"],{2478:function(n,o,t){"use strict";t.r(o);var e=t("39f5"),i=t.n(e);for(var u in e)["default"].indexOf(u)<0&&function(n){t.d(o,n,(function(){return e[n]}))}(u);o["default"]=i.a},"2e0e":function(n,o,t){},"30c1":function(n,o,t){"use strict";t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return u})),t.d(o,"a",(function(){return e}));var e={cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,"05fc"))},uniDateformat:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(t.bind(null,"8d48"))},uniTag:function(){return t.e("uni_modules/uni-tag/components/uni-tag/uni-tag").then(t.bind(null,"7e36"))}},i=function(){var n=this,o=n.$createElement,t=(n._self._c,n.dyInfo.pictures.length),e=0!=t?n.dyInfo.pictures.length:null,i=0!=t?n.dyInfo.pictures.length:null,u=0!=t?n.dyInfo.pictures.length:null,c=0!=t?n.dyInfo.pictures.length>4||3==n.dyInfo.pictures.length:null;n._isMounted||(n.e0=function(o){o.stopPropagation(),!n.isInfo&&n.goInfo(n.dyInfo)},n.e1=function(o){n.isInfo&&n.comContent(n.dyInfo.id)},n.e2=function(o){n.isInfo&&n.comContent(n.dyInfo.user_id)},n.e3=function(o){n.isInfo&&n.comLike(n.dyInfo.user_id)},n.e4=function(o){n.isInfo&&n.comLike(n.dyInfo.user_id)}),n.$mp.data=Object.assign({},{$root:{g0:t,g1:e,g2:i,g3:u,g4:c}})},u=[]},3849:function(n,o,t){"use strict";var e=t("2e0e"),i=t.n(e);i.a},"39f5":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={name:"dynamics",props:{dyInfo:{type:Object},isInfo:{type:Boolean}},data:function(){return{shadowStyle:{backgroundImage:"none",paddingTop:"0",marginTop:"20rpx"}}},onReady:function(){console.log("dyInfo信息",this.dyInfo),console.log("pictures信息",this.dyInfo.pictures),console.log("pictures长度",this.dyInfo.pictures.length),console.log("this.dyInfo.pictures[0].src",this.dyInfo.pictures[0].url),console.log("this.dyInfo.pictures.url",this.dyInfo.pictures.url)},methods:{previewImage:function(o,t){n.previewImage({current:o,urls:t})},goInfo:function(o){n.navigateTo({url:"../../subpages_dynamic/dynamicInfo?obj="+JSON.stringify(o),fail:function(n){console.log("跳转页面失败",n)},success:function(){console.log("跳转页面成功")}})},comContent:function(n){this.$emit("comContent",n)},comLike:function(n){console.log(n),this.$emit("comLikes",n)}}};o.default=t}).call(this,t("543d")["default"])},cdbd:function(n,o,t){"use strict";t.r(o);var e=t("30c1"),i=t("2478");for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(o,n,(function(){return i[n]}))}(u);t("3849");var c=t("f0c5"),f=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);o["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kg-dy/kg-dynamic-create-component',
    {
        'components/kg-dy/kg-dynamic-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cdbd"))
        })
    },
    [['components/kg-dy/kg-dynamic-create-component']]
]);
