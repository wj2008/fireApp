require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],[,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=n(i(1)),a=n(i(15));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(17),a=i.n(s),n=i(18);var r=function(t){i(16)},o=i(0)(a.a,n.a,r,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},n=i(3),r=(s=n)&&s.__esModule?s:{default:s},o=i(4);e.default={data:function(){return{baseurl:"",itemList:[],itemList1:[]}},computed:a({},(0,o.mapState)(["user"])),methods:{islogin:function(){null!==this.user.user||t.reLaunch({url:"../../pages/manage/login"})},articlelist:function(e){t.navigateTo({url:"articlelist?catid="+e})},msglist:function(){t.navigateTo({url:"../../pages/train/msglist"})},getflash:function(){var e=this;t.request({url:r.default.hosturl+"index/getflash.html",method:"POST",data:{token:this.user.user.token,flashcat:1},header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){0==i.data.code?(e.itemList=i.data.list,e.baseurl=i.data.baseurl):t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})},getpush:function(){var e=this;t.request({url:r.default.hosturl+"index/toppushlist.html",method:"POST",data:{token:this.user.user.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){0==i.data.code?e.itemList1=i.data.list:t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})}},onLoad:function(){this.islogin()},onShow:function(){this.getflash(),this.getpush()}}}).call(e,i(2).default)},function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[t._m(0),i("view",{staticClass:"banner",staticStyle:{"margin-top":"120px"}},[i("swiper",{staticStyle:{height:"390px"},attrs:{autoplay:"true",interval:"3000",duration:"1000","indicator-dots":"true"}},t._l(t.itemList,function(e,s){return i("swiper-item",{key:s,attrs:{mpcomid:"4Kx-0-"+s}},[i("image",{attrs:{src:t.baseurl+e.flashurl}})])}))],1),i("view",{staticClass:"notify",attrs:{eventid:"yO8-1"},on:{click:function(e){t.msglist()}}},[i("text",{staticClass:"icon notifyIcon mgl20 mgr20"},[t._v("")]),i("swiper",{staticStyle:{width:"700px",height:"100px","line-height":"100px"},attrs:{autoplay:"true",interval:"2000",duration:"1000",vertical:"true"}},t._l(t.itemList1,function(e,s){return i("swiper-item",{key:s,attrs:{eventid:"mip-0-"+s,mpcomid:"b0Y-1-"+s},on:{click:function(e){t.msglist()}}},[t._v("\n\t\t\t\t"+t._s(e.pushcontent)+"\n\t\t\t")])}))],1),i("view",{staticClass:"list"},[i("view",{staticClass:"item",attrs:{eventid:"NuR-2"},on:{tap:function(e){t.ways("jigoushezhi")}}},[i("image",{attrs:{src:"../../static/party1.png"}}),i("text",{staticClass:"item-name"},[t._v("机构设置")])]),i("view",{staticClass:"item",attrs:{eventid:"Eg1-3"},on:{tap:function(e){t.ways("zuzhishenghuo")}}},[i("image",{attrs:{src:"../../static/party2.png"}}),i("text",{staticClass:"item-name"},[t._v("组织生活")])]),i("view",{staticClass:"item",attrs:{eventid:"IjO-4"},on:{tap:function(e){t.articlelist(7)}}},[i("image",{attrs:{src:"../../static/party3.png"}}),i("text",{staticClass:"item-name"},[t._v("党建经验")])]),i("view",{staticClass:"item",attrs:{eventid:"H7Y-5"},on:{tap:function(e){t.articlelist(8)}}},[i("image",{attrs:{src:"../../static/party4.png"}}),i("text",{staticClass:"item-name"},[t._v("学习经验")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header",staticStyle:{position:"fixed","z-index":"10000"}},[e("view",{staticClass:"header-left"}),e("view",{staticClass:"header-content"},[this._v("\n\t\t\t党建工作\n\t\t")]),e("view",{staticClass:"header-right"})])}]};e.a=s}],[14]);