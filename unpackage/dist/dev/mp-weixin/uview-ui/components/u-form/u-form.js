(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-form/u-form"],{473:function(e,t,n){"use strict";n.r(t);var r=n(474),u=n(476);for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n(478);var o,f=n(50),c=Object(f["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"5dd1f800",null,!1,r["components"],o);c.options.__file="uview-ui/components/u-form/u-form.vue",t["default"]=c.exports},474:function(e,t,n){"use strict";n.r(t);var r=n(475);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},475:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return u})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},i=!1,o=[];u._withStripped=!0},476:function(e,t,n){"use strict";n.r(t);var r=n(477),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{uForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(e){this.rules=e},resetFields:function(){this.fields.map((function(e){e.resetField()}))},validate:function(e){var t=this;return new Promise((function(n){var r=!0,u=0,i=[];t.fields.map((function(o){o.validation("",(function(o){o&&(r=!1,i.push(o)),++u===t.fields.length&&(n(r),-1===t.errorType.indexOf("none")&&t.errorType.indexOf("toast")>=0&&i.length&&t.$u.toast(i[0]),"function"==typeof e&&e(r))}))}))}))}}};t.default=r},478:function(e,t,n){"use strict";n.r(t);var r=n(479),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},479:function(e,t,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-form/u-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-form/u-form-create-component',
    {
        'uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(473))
        })
    },
    [['uview-ui/components/u-form/u-form-create-component']]
]);
