"use strict";(self["webpackChunkwei"]=self["webpackChunkwei"]||[]).push([[849],{94849:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{padding:"30px 30px 10px"}},[t("div",{staticClass:"search"},[t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("机构名称")]),t("el-input",{attrs:{placeholder:"请输入机构名称",clearable:""},model:{value:e.organName,callback:function(t){e.organName=t},expression:"organName"}})],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("机构级别")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.organGrade,callback:function(t){e.organGrade=t},expression:"organGrade"}},e._l(e.organGradeList,(function(e){return t("el-option",{key:e.dd_key,attrs:{label:e.dd_value,value:e.dd_key}})})),1)],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("是否停止")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.isstop,callback:function(t){e.isstop=t},expression:"isstop"}},e._l(e.isstopList,(function(e){return t("el-option",{key:e.dd_key,attrs:{label:e.dd_value,value:e.dd_key}})})),1)],1),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getorganList(1)}}},[e._v("查询")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("新增")])],1),t("div",{staticClass:"table_list"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.organList,stripe:!0,border:"",height:"400","header-cell-style":{background:"#f3f6fd",color:"#555"},"highlight-current-row":""}},[t("el-table-column",{attrs:{type:"index",width:"50"}}),t("el-table-column",{attrs:{prop:"organCode",label:"机构编码",width:"110",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"organName",label:"机构名称",width:"180",align:"center"}}),t("el-table-column",{attrs:{prop:"organGradeName",label:"机构级别",width:"130",align:"center"}}),t("el-table-column",{attrs:{prop:"upOrganCodeName",label:"上级机构",width:"110",align:"center"}}),t("el-table-column",{attrs:{prop:"provinceName",label:"所在省",width:"110",align:"center"}}),t("el-table-column",{attrs:{prop:"cityName",label:"所在市",width:"110",align:"center"}}),t("el-table-column",{attrs:{prop:"countyName",label:"所在区",width:"110",align:"center"}}),t("el-table-column",{attrs:{prop:"isstopname",label:"是否停止",width:"110",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"auto"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("修改")]),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{staticClass:"indexPage",attrs:{background:"","page-size":e.pageSize,"current-page":e.pageNum,layout:"total, prev, pager, next",total:e.pageTotal},on:{"current-change":e.pageClick}}),t("el-dialog",{attrs:{title:e.dig_title,visible:e.dialogFormVisible,"before-close":e.handleClose,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("div",{staticClass:"dig"},[t("div",{staticClass:"dig_box"},[t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("机构编码")]),t("el-input",{attrs:{placeholder:"请输入机构编码",clearable:""},model:{value:e.editOrganCode,callback:function(t){e.editOrganCode=t},expression:"editOrganCode"}})],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("机构名称")]),t("el-input",{attrs:{placeholder:"请输入机构名称",clearable:""},model:{value:e.editOrganName,callback:function(t){e.editOrganName=t},expression:"editOrganName"}})],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("机构级别")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.editOrganGrade,callback:function(t){e.editOrganGrade=t},expression:"editOrganGrade"}},e._l(e.organGradeList,(function(e){return t("el-option",{key:e.dd_key,attrs:{label:e.dd_value,value:e.dd_key}})})),1)],1)]),t("div",{staticClass:"dig_box"},[t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("上级机构编码")]),t("el-input",{attrs:{placeholder:"请输入上级机构编码",clearable:""},model:{value:e.editupOrganCode,callback:function(t){e.editupOrganCode=t},expression:"editupOrganCode"}})],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("是否停止")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.editisstop,callback:function(t){e.editisstop=t},expression:"editisstop"}},e._l(e.isstopList,(function(e){return t("el-option",{key:e.dd_key,attrs:{label:e.dd_value,value:e.dd_key}})})),1)],1)]),t("div",{staticClass:"dig_box",staticStyle:{"margin-bottom":"0"}},[t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("所在省")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.getCity},model:{value:e.editprovinceName,callback:function(t){e.editprovinceName=t},expression:"editprovinceName"}},e._l(e.provinceNameList,(function(e){return t("el-option",{key:e.placecode,attrs:{label:e.placename,value:e.placecode}})})),1)],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("所在市")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.getcounty},model:{value:e.editcityName,callback:function(t){e.editcityName=t},expression:"editcityName"}},e._l(e.cityNameList,(function(e){return t("el-option",{key:e.placecode,attrs:{label:e.placename,value:e.placecode}})})),1)],1),t("div",{staticClass:"common_hang"},[t("div",{staticClass:"mech"},[e._v("所在区")]),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.editcountyName,callback:function(t){e.editcountyName=t},expression:"editcountyName"}},e._l(e.countyNameList,(function(e){return t("el-option",{key:e.placecode,attrs:{label:e.placename,value:e.placecode}})})),1)],1)])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.sureAdd}},[e._v("确 定")])],1)])],1)])},s=[],o=a(38898);const n={data:function(){return{organName:"",organGrade:"",organGradeList:[],isstop:"01",isstopList:[],organList:[],provinceNameList:[],cityNameList:[],countyNameList:[],editOrganCode:"",editOrganName:"",editOrganGrade:"",editupOrganCode:"",editisstop:"",editprovinceName:"",editcityName:"",editcountyName:"",dig_title:"新增",dialogFormVisible:!1,pageTotal:0,pageSize:20,pageNum:1}},created:function(){this.init()},methods:{init:function(){var e=this,t={comboxType:"organgrade"};(0,o.lm)(t).then((function(t){e.organGradeList=t}));var a={comboxType:"isstop"};(0,o.lm)(a).then((function(t){e.isstopList=t})),(0,o.cy)().then((function(t){console.log(t),e.provinceNameList=t}))},getCity:function(){var e=this;(0,o.Jx)({province:this.editprovinceName}).then((function(t){console.log(t),e.cityNameList=t}))},getcounty:function(){var e=this;(0,o.dg)({city:this.editcityName}).then((function(t){console.log(t),e.countyNameList=t}))},getorganList:function(e){var t=this;console.log(this.isstop);var a=this,i={organName:this.organName,organGrade:this.organGrade,isstop:this.isstop,pageNumber:e,pageSize:this.pageSize,page:1,rows:10};(0,o.mJ)(i).then((function(e){console.log(e),"1"==e.code?a.$message({type:"error",duration:3e3,message:e.msg}):(t.organList=e.rows,t.pageTotal=e.total)}))},sureAdd:function(){var e=this,t={organCode:this.editOrganCode,organName:this.editOrganName,organShortName:this.editOrganName,organGrade:this.editOrganGrade,upOrganCode:this.editupOrganCode,Province:this.editprovinceName,City:this.editcityName,County:this.editcountyName,isstop:this.editisstop};console.log(t),this.isinsert?(0,o.uI)(t).then((function(t){console.log(t),"0"==t.code?e.$message({type:"success",duration:3e3,message:"添加成功"}):e.$message({type:"error",duration:3e3,message:"添加失败"})})):(0,o.OH)(t).then((function(t){console.log(t),"0"==t.code?e.$message({type:"success",duration:3e3,message:"修改成功"}):e.$message({type:"error",duration:3e3,message:"修改失败"})}))},handleEdit:function(e){console.log(e),this.editOrganCode=e.organCode,this.editOrganName=e.organName,this.editOrganGrade=e.organGrade,this.editupOrganCode=e.upOrganCode,this.editisstop=e.isstop,this.editprovinceName=e.province,this.getCity(),this.editcityName=e.city,this.getcounty(),this.editcountyName=e.county,this.dialogFormVisible=!0,this.isinsert=!1,this.dig_title="编辑"},handleDel:function(e){var t=this;this.$confirm("确认删除吗?","提示",{type:"warning"}).then((function(){var a={userToken:sessionStorage.getItem("token"),userid:e.userserialno};deleteUser(a).then((function(e){"0"==e.code?(t.$message({type:"success",duration:3e3,message:"删除成功"}),t.getUserList(1)):t.$message({type:"error",duration:3e3,message:"删除失败"})}))}))},pageClick:function(e){this.pageNum=e,this.getorganList(e)},addUser:function(){this.dialogFormVisible=!0,this.isinsert=!0,this.dig_title="新增"},handleClose:function(){this.dialogFormVisible=!1,this.clearINput()},cancel:function(){this.dialogFormVisible=!1,this.clearINput()},clearINput:function(){this.editOrganCode="",this.editOrganName="",this.editOrganGrade="",this.editupOrganCode="",this.editisstop="",this.editprovinceName="",this.editcityName="",this.editcountyName=""}}},l=n;var r=a(1001),c=(0,r.Z)(l,i,s,!1,null,null,null);const d=c.exports}}]);
//# sourceMappingURL=849.31977795.js.map