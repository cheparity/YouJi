(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subPackage_dynamic/dynamicPublish"],{"024f":function(n,e,o){"use strict";o.r(e);var t=o("24ae"),i=o.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(u);e["default"]=i.a},"0d04":function(n,e,o){"use strict";var t=o("c4be"),i=o.n(t);i.a},"24ae":function(n,e,o){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{show:!1,list:[],commentSwitch:!0,text:"",imageValue:[],tagValue:"",tags:[],address:null}},methods:{select:function(n){console.log("选择文件：",n)},openTagInput:function(){this.$refs.inputDialog.open()},progress:function(n){console.log("上传进度：",n)},success:function(n){console.log("上传成功"),console.log(n.tempFilePaths),this.imageValue=n.tempFiles},fail:function(n){console.log("上传失败：",n)},open:function(){console.log("open执行")},back:function(){n.navigateBack()},onKeyInput:function(n){this.text=n.target.value},publishDynamic:function(){console.log("上传云图片数据,",this.imageValue),console.info("上传云图片总数:"+this.imageValue.length);var e=o.database().collection("dynamic-articles");null!=this.address?e.add({content:this.text,pictures:this.imageValue,comment_status:this.commentSwitch,tags:this.tags,publish_address:this.address.name}):e.add({content:this.text,pictures:this.imageValue,comment_status:this.commentSwitch,tags:this.tags}),console.log("动态上传成功"),n.showToast({title:"动态上传中",duration:2e3,success:function(){n.reLaunch({url:"/pages/dynamic/dynamic"})}})},openPostionInput:function(){var e=this;console.log("进入openPostionInput"),n.chooseLocation({success:function(n){e.address=n,console.log("uni.chooseLocation成果"),console.log("位置名称："+e.address.name),console.log("详细地址："+e.address.address),console.log("纬度："+e.address.latitude),console.log("经度："+e.address.longitude)},fail:function(n){console.log(n)}})},dialogInputConfirm:function(e){var o=this;n.showLoading({}),setTimeout((function(){n.hideLoading(),console.log("输入框输入内容",e),o.tagValue=e,o.tags=o.tagValue.replaceAll(" ","").split("#"),console.log("处理完成的tags内容(应该是数组)",o.tags),o.$refs.inputDialog.close()}),700)}}};e.default=t}).call(this,o("543d")["default"],o("a9ff")["default"])},9265:function(n,e,o){"use strict";(function(n,e){var t=o("4ea4");o("0c57"),o("a9ff");t(o("66fd"));var i=t(o("d6e2"));n.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},c4be:function(n,e,o){},d6e2:function(n,e,o){"use strict";o.r(e);var t=o("f340"),i=o("024f");for(var u in i)["default"].indexOf(u)<0&&function(n){o.d(e,n,(function(){return i[n]}))}(u);o("0d04");var a=o("f0c5"),s=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=s.exports},f340:function(n,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return t}));var t={uniNavBar:function(){return o.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"70ec"))},uniSection:function(){return o.e("uni_modules/uni-section/components/uni-section/uni-section").then(o.bind(null,"2f5f"))},uniFilePicker:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(o.bind(null,"cbc4"))},uniTag:function(){return o.e("uni_modules/uni-tag/components/uni-tag/uni-tag").then(o.bind(null,"7e36"))},uniPopup:function(){return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null,"e9aa"))},uniPopupDialog:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(o.bind(null,"3d97"))}},i=function(){var n=this.$createElement;this._self._c},u=[]}},[["9265","common/runtime","common/vendor"]]]);