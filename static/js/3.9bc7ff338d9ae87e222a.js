webpackJsonp([3],{A7TC:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("IfhF"),n=t("KvKp"),i={name:"info",props:[],data:function(){return{userId:n.c.get("user_id")||"",userPhone:n.c.get("user_phone")||"",user:{username:""},showModal:0,teamName:"",errFlag:!1,errTxt:"名称应为中、英文，最长10个字符",asUserTeamRel:"",timer1:null}},mixins:[a.a],components:{},created:function(){var e=this;e.getUserInfo(),e.timer1||(e.timer1=setInterval(function(){e.getUserInfo()},5e3))},mounted:function(){},destroyed:function(){this.timer1&&clearInterval(this.timer1)},computed:{},methods:{closeModal:function(e){1==e||2==e&&(this.teamName="",this.errFlag=!1,this.errTxt="名称应为中、英文，最长10个字符"),this.showModal=0},getUserInfo:function(){var e=this,s=n.c.get("user_phone");s&&""!=s?e.$api.SelectUserInfo(s).then(function(s){if(1e4==Number(s.code)){var t=s.data;if(!t.userInfo.phone||""==t.userInfo.phone)return e.$Message.success("请先登录"),n.c.clear(),void setTimeout(function(){e.$router.push("/login")},500);if(""==t.userInfo.username||""==t.userInfo.schoolname||""==t.userInfo.major||""==t.userInfo.classname||""==t.userInfo.studentcode)return e.$Message.success("请先完善个人信息"),void setTimeout(function(){e.$router.push("/fillinfo")},500);t.isteam&&(0==Number(t.asUserTeamRel.status)?(e.showModal=1,e.asUserTeamRel=t.asUserTeamRel,clearInterval(e.timer1),e.timer1=null):1==Number(t.asUserTeamRel.status)&&(n.c.set("team_id",t.asUserTeamRel.teamid),e.$router.push("/match"))),e.user=t.userInfo}else e.$Message.warning(s.msg)}):(e.$Message.success("请先登录"),setTimeout(function(){e.$router.push("/login")},500))},create:function(){var e=this;return""==e.teamName?(e.errFlag=!0,void(e.errTxt="战队名称不能为空")):/^[\u4e00-\u9fa5|a-z|^\s]{1,10}$/.test(e.teamName)?(e.errFlag=!1,e.errTxt="",void e.$api.CreateTeam(e.userId,e.teamName).then(function(s){1e4==Number(s.code)?(e.$Message.success("操作成功"),n.c.set("team_id",s.data),setTimeout(function(){e.$router.push("/match")},500)):e.$Message.warning(s.msg)})):(e.errFlag=!0,void(e.errTxt="名称应为中、英文，最长10个字符"))},jumpToMatch:function(e){var s=this,t=s.asUserTeamRel.teamid,a=s.asUserTeamRel.id;s.$api.DoUserTeamRelInfo(a,e).then(function(a){1e4==Number(a.code)?1==e?(s.$Message.success("加入成功"),n.c.set("team_id",t),setTimeout(function(){s.$router.push("/match")},500)):(s.$Message.success("您拒绝了邀请"),setTimeout(function(){s.showModal=0},500)):s.$Message.warning(a.msg)})}}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"info"},[t("div",{staticClass:"info__cont"},[t("div",{staticClass:"info__cont--row"},[t("div",{staticClass:"item"},[t("div",{staticClass:"name"},[e._v(e._s(e.user.username))]),e._v(" "),t("div",{staticClass:"tel"},[e._v(e._s(e.userPhone))])]),e._v(" "),t("div",{staticClass:"item"},[t("div",{staticClass:"cord"},[e._v(e._s(e.user.winsnum)+"胜/"+e._s(e.user.failurenum)+"败")]),e._v(" "),t("router-link",{staticClass:"find__btn",attrs:{to:"/list"}})],1)]),e._v(" "),t("div",{staticClass:"info__cont--btn",on:{click:function(s){e.showModal=2}}})]),e._v(" "),t("transition-group",{attrs:{name:"cover"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.showModal,expression:"showModal==1"}],key:"a",staticClass:"mask invitation",on:{touchmove:function(e){e.preventDefault()}}},[t("div",{staticClass:"box"},[t("div",{staticClass:"title"},[e._v("蔡文姬邀请你加入战队")]),e._v(" "),t("div",{staticClass:"btns"},[t("div",{staticClass:"btn no",on:{click:function(s){return e.jumpToMatch(!1)}}}),e._v(" "),t("div",{staticClass:"btn yes",on:{click:function(s){return e.jumpToMatch(!0)}}})])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==e.showModal,expression:"showModal==2"}],key:"b",staticClass:"mask create",on:{touchmove:function(e){e.preventDefault()}}},[t("div",{staticClass:"box"},[t("div",{staticClass:"title"},[e._v("创建战队")]),e._v(" "),t("div",{staticClass:"cont"},[t("Input",{attrs:{type:"text",placeholder:"请输入战队名称",size:"large",clearable:"",maxlength:10},model:{value:e.teamName,callback:function(s){e.teamName=s},expression:"teamName"}}),e._v(" "),t("div",{staticClass:"tips",class:{err:e.errFlag}},[e._v(e._s(e.errTxt))])],1),e._v(" "),t("div",{staticClass:"btns"},[t("div",{staticClass:"btn cancel",on:{click:function(s){return e.closeModal(2)}}}),e._v(" "),t("div",{staticClass:"btn confirm",on:{click:e.create}})])])])])],1)},staticRenderFns:[]};var o=t("C7Lr")(i,r,!1,function(e){t("YV/1")},"data-v-af42a2ca",null);s.default=o.exports},"YV/1":function(e,s){}});
//# sourceMappingURL=3.9bc7ff338d9ae87e222a.js.map