webpackJsonp([3],{"+c2f":function(e,t){},W2Q3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("IfhF"),s=o("KvKp"),i=/^1[3|4|5|7|8][0-9]{9}$/,a={name:"login",props:[],data:function(){return{bodyHeight:0,phoneErrTxt:"",codeErrTxt:"",show:!0,count:0,timer:null,phone:"",validCode:""}},mixins:[n.a],created:function(){var e=s.c.get("user_phone");e&&""!=e&&this.$router.push("/fillinfo")},mounted:function(){this.bodyHeight=document.documentElement.clientHeight},methods:{getCode:function(){var e=this;""!=e.phone?i.test(e.phone)?(e.phoneErrTxt="",e.$api.SendCodeByPhone(e.phone).then(function(t){1e4==t.code?(e.$toast("验证码发送成功，请注意查收"),e.timer||(e.count=60,e.show=!1,e.timer=setInterval(function(){e.count>0&&e.count<=60?e.count--:(clearInterval(e.timer),e.show=!0,e.timer=null)},1e3))):e.$toast(t.msg)})):e.phoneErrTxt="*手机号输入有误，请重新输入":e.phoneErrTxt="*手机号不能为空"},login:function(){var e=this;""!=e.phone?i.test(e.phone)?(e.phoneErrTxt="",""!=e.validCode?(e.codeErrTxt="",e.$api.Login(e.phone,e.validCode).then(function(t){1e4==Number(t.code)?(e.$Message.success("登录成功"),s.c.set("user_id",t.data.id),s.c.set("user_phone",t.data.phone),setTimeout(function(){e.$router.push("/fillinfo")},500)):e.$Message.warning(t.msg)})):e.codeErrTxt="*验证码输入不能为空"):e.phoneErrTxt="*手机号输入有误，请重新输入":e.phoneErrTxt="*手机号不能为空"}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login",style:{height:e.bodyHeight+"px"}},[o("div",{staticClass:"login__cont"},[o("div",{staticClass:"login__cont--row"},[o("div",{staticClass:"item"},[o("Input",{attrs:{type:"number",placeholder:"请输入手机号",autosize:"",size:"large",maxlength:11,clearable:"",autofocus:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),o("div",{staticClass:"err"},[e._v(e._s(e.phoneErrTxt))])]),e._v(" "),o("div",{staticClass:"login__cont--row"},[o("div",{staticClass:"item"},[o("Input",{attrs:{type:"number",placeholder:"请输入验证码",size:"large",clearable:""},model:{value:e.validCode,callback:function(t){e.validCode=t},expression:"validCode"}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"code__btn",on:{click:e.getCode}},[e._v("验证码")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"code__btn"},[e._v(e._s(e.count)+" s")])],1),e._v(" "),o("div",{staticClass:"err"},[e._v(e._s(e.codeErrTxt))])]),e._v(" "),o("div",{staticClass:"login__cont--btn",on:{click:e.login}})])])},staticRenderFns:[]};var c=o("C7Lr")(a,r,!1,function(e){o("+c2f")},"data-v-cbed2584",null);t.default=c.exports}});
//# sourceMappingURL=3.5b3204d1ffdf30ab4484.js.map