webpackJsonp([3],{JTbl:function(t,e){},ak2Y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("KvKp"),i={name:"list",props:[],data:function(){return{userId:s.c.get("user_id")||"",pickerList:[],pickData:"",list:[],preventRepeat:!1,pageSize:5,pageNum:0}},components:{},created:function(){var t=this;t.$api.GetSelectList().then(function(e){1e4==Number(e.code)?t.pickerList=e.data.list:t.$Message.warning(e.msg)})},mounted:function(){this.initList()},computed:{},filters:{dateFmt:function(t){return Object(s.a)(new Date(t),"YYYY-MM-DD")}},methods:{selectChange:function(){this.initList()},initList:function(){var t=this;t.getlist(!0,function(e){t.$Message.success("加载成功"),t.list=e.data.list})},handleReachBottom:function(){var t=this;t.preventRepeat||t.getlist(!1,function(e){if(t.list=t.list.concat(e.data.list),e.data.list.length<t.pageSize)return t.preventRepeat=!0,void t.$Message.info("没有更多了");t.preventRepeat=!1,t.$Message.success("加载成功")})},gameResult:function(t,e,a){if(t.teamid&&t.gameDetails&&t.gameDetails.teamid1&&t.gameDetails.teamid2){var s=t.teamid==t.gameDetails.teamid1?t.gameDetails.teamname1:t.teamid==t.gameDetails.teamid2?t.gameDetails.teamname2:"",i=t.teamid==t.gameDetails.teamid1?t.gameDetails.teamname2:t.gameDetails.teamname1,l=t.teamid==t.gameDetails.teamid1?t.gameDetails.num1:t.teamid==t.gameDetails.teamid2?t.gameDetails.num2:"",n=t.teamid==t.gameDetails.teamid1?t.gameDetails.num2:t.gameDetails.num1,m=l>n?1:0,c=l>n?0:1,r=t.teamid==t.gameDetails.teamid1?t.gameDetails.rank1?t.gameDetails.rank1:"未上榜":t.teamid==t.gameDetails.teamid2?t.gameDetails.rank2?t.gameDetails.rank2:"未上榜":"",u=t.teamid==t.gameDetails.teamid1?t.gameDetails.rank2?t.gameDetails.rank2:"未上榜":t.gameDetails.rank1?t.gameDetails.rank1:"未上榜";if("team"==e)return 1==a?s:2==a?i:"";if("result"==e)return 1==a?m:2==a?c:"";if("points"==e)return 1==a?l:2==a?n:0;if("rank"==e)return 1==a?r:2==a?u:""}},getlist:function(t,e){var a=this;t&&(a.pageNum=0),a.$api.SelectGamesDetails(a.pageSize,a.pageNum,a.userId,a.pickData).then(function(t){a.pageNum++,"function"==typeof e&&e(t)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"list__picker"},[a("Select",{staticClass:"select",attrs:{placeholder:"请选择"},on:{"on-change":t.selectChange},model:{value:t.pickData,callback:function(e){t.pickData=e},expression:"pickData"}},t._l(t.pickerList,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.gamename))])}),1)],1),t._v(" "),a("div",{staticClass:"list__cont"},[0==t.list.length?a("div",{staticClass:"no__data"},[t._v("暂无比赛记录~")]):t._e(),t._v(" "),t.list.length>0?a("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,"distance-to-edge":[0,-20]}},[a("ul",t._l(t.list,function(e,s){return a("li",{staticClass:"item"},[a("div",{staticClass:"title"},[a("div",{staticClass:"lt"},[t._v("第"+t._s(parseInt(s)+1)+"场")]),t._v(" "),a("div",{staticClass:"rt"},[t._v(t._s(t._f("dateFmt")(e.gameDetails.isdate)))])]),t._v(" "),a("div",{staticClass:"cont"},[a("div",{staticClass:"vs vs__lt"},[a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.gameResult(e,"team",1)))]),t._v(" "),a("small",[t._v("所属战队")])]),t._v(" "),a("div",{staticClass:"result"},[a("div",{staticClass:"txt",class:{success:1==t.gameResult(e,"result",1),fail:0==t.gameResult(e,"result",1)}},[t._v(t._s(1==t.gameResult(e,"result",1)?"胜":"败"))]),t._v(" "),a("p",[t._v(t._s(t.gameResult(e,"rank",1)))])])]),t._v(" "),a("div",{staticClass:"point point__lt"},[t._v(t._s(t.gameResult(e,"points",1)))])]),t._v(" "),a("div",{staticClass:"vs vs__rt"},[a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.gameResult(e,"team",2)))]),t._v(" "),a("small")]),t._v(" "),a("div",{staticClass:"result"},[a("div",{staticClass:"txt",class:{success:1==t.gameResult(e,"result",2),fail:0==t.gameResult(e,"result",2)}},[t._v(t._s(1==t.gameResult(e,"result",2)?"胜":"败"))]),t._v(" "),a("p",[t._v(t._s(t.gameResult(e,"rank",2)))])])]),t._v(" "),a("div",{staticClass:"point point__rt"},[t._v(t._s(t.gameResult(e,"points",2)))])])])])}),0)]):t._e()],1)])},staticRenderFns:[]};var n=a("C7Lr")(i,l,!1,function(t){a("JTbl")},"data-v-d6910676",null);e.default=n.exports}});
//# sourceMappingURL=3.71bafab013137f0c4149.js.map