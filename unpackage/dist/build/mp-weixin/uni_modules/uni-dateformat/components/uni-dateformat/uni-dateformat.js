(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat"],{"2f61":function(e,t,r){"use strict";r.r(t);var n=r("fe12"),a=r.n(n);for(var f in n)["default"].indexOf(f)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(f);t["default"]=a.a},"8d48":function(e,t,r){"use strict";r.r(t);var n=r("da0e"),a=r("2f61");for(var f in a)["default"].indexOf(f)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(f);var u=r("f0c5"),i=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=i.exports},da0e:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},a=[]},fe12:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("12e5"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,n.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat-create-component',
    {
        'uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8d48"))
        })
    },
    [['uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat-create-component']]
]);