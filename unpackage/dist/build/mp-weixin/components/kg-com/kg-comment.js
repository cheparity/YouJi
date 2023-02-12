(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kg-com/kg-comment"],{1568:function(t,n,e){"use strict";var o=e("710a"),a=e.n(o);a.a},"15ea":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.commentList,(function(n,e){var o=t.__get_orig(n),a=t._f("timeago")(n.comTime),i=n.replyList.length;return{$orig:o,f0:a,g0:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},a=[]},"1a9f":function(t,n,e){"use strict";e.r(n);var o=e("15ea"),a=e("59df");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("1568");var r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"1404cf1a",null,!1,o["a"],void 0);n["default"]=c.exports},"275c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"commont",props:{commentList:{type:Array}},data:function(){return{background:"",baseUrl:""}},onLoad:function(){this.background=getApp().globalData.background},methods:{delCom:function(t){this.$emit("delCom",t)},replyContent:function(t){this.$emit("replyContent",t)},replyLike:function(t){this.$emit("replyLike",t)},previewImage:function(n,e){t.previewImage({current:n,urls:e})}}};n.default=e}).call(this,e("543d")["default"])},"59df":function(t,n,e){"use strict";e.r(n);var o=e("275c"),a=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=a.a},"710a":function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kg-com/kg-comment-create-component',
    {
        'components/kg-com/kg-comment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1a9f"))
        })
    },
    [['components/kg-com/kg-comment-create-component']]
]);
