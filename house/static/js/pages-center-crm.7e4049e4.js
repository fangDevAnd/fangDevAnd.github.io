(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-crm"],{"16cc":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-519e4620]{background-color:#fff}body.?%PAGE?%[data-v-519e4620]{background-color:#fff}",""]),t.exports=e},4532:function(t,e,n){"use strict";n.r(e);var a=n("a804"),r=n("8076");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("8cb2"),n("c4eb");var i=n("f0c5"),u=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"519e4620",null,!1,a["a"],void 0);e["default"]=u.exports},8076:function(t,e,n){"use strict";n.r(e);var a=n("f72f"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},8323:function(t,e,n){var a=n("8996");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("42152bb6",a,!0,{sourceMap:!1,shadowMode:!1})},8727:function(t,e,n){var a=n("16cc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("19e9f723",a,!0,{sourceMap:!1,shadowMode:!1})},8996:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-content[data-v-519e4620]{line-height:1.8;padding:%?10?%;box-sizing:border-box;white-space:pre-wrap!important}',""]),t.exports=e},"8cb2":function(t,e,n){"use strict";var a=n("8727"),r=n.n(a);r.a},a804:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("89bd").default,uParse:n("7e40").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("u-navbar",{attrs:{"is-back":!0,title:this.title,"border-bottom":!1}}),e("v-uni-view",{staticClass:"u-content"},[e("u-parse",{attrs:{html:this.content,autosetTitle:!0,"show-with-animation":!0,selectable:!0}})],1)],1)},o=[]},c4eb:function(t,e,n){"use strict";var a=n("8323"),r=n.n(a);r.a},f72f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:{type:String,default:""},crmType:{type:String,default:""}},data:function(){return{content:""}},onLoad:function(){var t=this,e="/api/cmsApi/getServiceItemByAjax?type="+this.$props.crmType;this.$u.get(e).then((function(e){t.content=e.data.content}))},methods:{}};e.default=a}}]);