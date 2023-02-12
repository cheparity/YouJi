(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/cloud-image/cloud-image"],{"05fc":function(t,e,n){"use strict";n.r(e);var i=n("e650"),u=n("b3c7");for(var c in u)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(c);var r=n("f0c5"),f=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=f.exports},b3c7:function(t,e,n){"use strict";n.r(e);var i=n("f1ee"),u=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=u.a},e650:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},f1ee:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(e){var n=this;e&&"cloud://"==e.substring(0,8)?t.getTempFileURL({fileList:[e]}).then((function(t){n.cSrc=t.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};e.default=n}).call(this,n("a9ff")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component',
    {
        'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("05fc"))
        })
    },
    [['uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component']]
]);
