(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kaoshiziliao/detail"],{"0635":function(t,e,n){"use strict";var a={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"eeaf"))},"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"a1d2"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},"0df8":function(t,e,n){"use strict";n.r(e);var a=n("0635"),i=n("45b7");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("6f21");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=o.exports},"45b7":function(t,e,n){"use strict";n.r(e);var a=n("deb5"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"6f21":function(t,e,n){"use strict";var a=n("8a0b"),i=n.n(a);i.a},"8a0b":function(t,e,n){},deb5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,r,s){try{var u=t[r](s),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var s=t.apply(e,n);function u(t){r(s,a,i,u,o,"next",t)}function o(t){r(s,a,i,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=s(a.default.mark((function e(n){var i,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),i=t.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup();case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","kaoshiziliao"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=s(a.default.mark((function t(){var e,n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"kaoshiziliao",userid:this.user.id},t.next=3,this.$api.list("storeup",e);case 3:n=t.sent,this.storeupFlag=n.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var e=s(a.default.mark((function e(){var n,i,r,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,i={page:1,limit:1,refid:n.detail.id,tablename:"kaoshiziliao",userid:n.user.id},e.next=4,n.$api.list("storeup",i);case 4:if(r=e.sent,1!=r.data.list.length){e.next=9;break}return u=r.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.del("storeup",JSON.stringify([u]));case 3:n.$utils.msg("取消成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.biaoti,picture:n.swiperList[0],refid:n.detail.id,tablename:"kaoshiziliao"});case 3:n.$utils.msg("收藏成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e){t.setStorageSync("crossTable","kaoshiziliao"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=s(a.default.mark((function t(){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("kaoshiziliao",this.id);case 2:e=t.sent,this.detail=e.data,this.detail.neirong=this.detail.neirong.replace(/img src/gi,'img style="width:100%;" src'),this.swiperList=this.detail.fengmian?this.detail.fengmian.split(","):[];case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discusskaoshiziliao/add-or-update?refid=".concat(this.id))},zan:function(){var e=s(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=4,n.$api.update("kaoshiziliao",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=s(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=4,n.$api.update("kaoshiziliao",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=s(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("kaoshiziliao",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},f41f:function(t,e,n){"use strict";(function(t){n("2ade"),n("921b");a(n("66fd"));var e=a(n("0df8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f41f","common/runtime","common/vendor"]]]);