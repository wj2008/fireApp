require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([17],{134:function(t,e,s){"use strict";var a=n(s(0)),i=n(s(135));function n(t){return t&&t.__esModule?t:{default:t}}new a.default(i.default).$mount()},135:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(137),i=s.n(a),n=s(138);var c=function(t){s(136)},r=s(1)(i.a,n.a,c,null,null);e.default=r.exports},136:function(t,e){},137:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{array:["男","女"],textValue:0}},methods:{goback:function(){t.navigateBack({delta:1})},textChange:function(t){console.log(t.detail.value),this.textValue=t.detail.value}}}}).call(e,s(2).default)},138:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[s("view",{staticClass:"header"},[s("view",{staticClass:"header-left",attrs:{eventid:"vE6-0"},on:{click:function(e){t.goback()}}},[s("text",{staticClass:"icon"},[t._v("")])]),t._v(" "),s("view",{staticClass:"header-content"},[t._v("\n\t\t\t用户信息\n\t\t")]),t._v(" "),t._m(0)]),t._v(" "),s("view",{staticClass:"list"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("view",{staticClass:"item"},[s("view",{staticClass:"border"},[s("picker",{staticClass:"picker-item",attrs:{mode:"selector",range:t.array,eventid:"7fm-1"},on:{change:t.textChange}},[s("view",[s("text",{staticClass:"picker-name"},[t._v("性别")]),t._v(t._s(t.array[t.textValue]))])])],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header-right"},[e("text",{staticClass:"icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item-user"},[e("view",{staticClass:"item-user-border"},[e("text",{staticClass:"item-user-name"},[this._v("头像")]),this._v(" "),e("image",{staticClass:"item-user-img",attrs:{src:"../../static/user.jpeg"}}),this._v(" "),e("text",{staticClass:"gIcon"},[this._v("")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item"},[e("view",{staticClass:"border"},[e("text",{staticClass:"item-name"},[this._v("姓名")]),this._v(" "),e("input",{staticClass:"item-input",attrs:{type:"text",placeholder:"李志强"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item"},[e("view",{staticClass:"border"},[e("text",{staticClass:"item-name"},[this._v("职务")]),this._v(" "),e("input",{staticClass:"item-input",attrs:{type:"text",placeholder:"消防一队队长"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item"},[e("view",{staticClass:"border"},[e("text",{staticClass:"item-name"},[this._v("手机")]),this._v(" "),e("input",{staticClass:"item-input",attrs:{type:"text",placeholder:"15965845217"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"account"},[e("view",{staticClass:"btn mgt40"},[this._v("\n\t\t\t保存\n\t\t")])])}]};e.a=a}},[134]);