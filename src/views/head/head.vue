<template>
  <el-col :span="24" class="header">
    <el-col :span="1" :class="isCollapse ? 'head_logo' : 'big_logo'">
      <img
        src="../../assets/logo.png"
        alt=""
        :class="isCollapse ? 'logo_img' : 'big_logo_img'"
        class="logo_img"
      />
    </el-col>
    <!-- <el-col
      :span="14"
      :class="isCollapse ? 'nologo' : 'logo'"
      style=" font-size: 24px;"
      >{{ sysName }}</el-col
    > -->

    <el-col :span="2">
      <el-radio-group
        v-model="isCollapse"
        :class="isCollapse ? 'el-radio-group1' : 'el-radio-group gg'"
      >
        <i
          v-show="!isCollapse"
          class="el-icon-s-fold expandBtn"
          @click="Collapse"
        ></i>
        <i
          v-show="isCollapse"
          class="el-icon-s-fold shrinkBtn"
          @click="noCollapse"
        ></i>
      </el-radio-group>
    </el-col>

    <!-- <el-col :span="2" class="nav_head">
      <el-tooltip class="item" effect="dark" content="" placement="nav1">
        <p class="nav_head" multiBtn @click="$router.push('/page1')">
          nav1
        </p>
      </el-tooltip>
    </el-col>-->

    <!-- <el-col :span="2" style="float: right;">
      <el-dropdown trigger="hover" placement="bottom" @command="handleCommand">
        <p class="el-dropdown-link nav_head" multiBtn command="profile">
          nav4<i class="el-icon-arrow-down el-icon--right"></i>
        </p>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">个人信息</el-dropdown-item>
          <el-dropdown-item command="updatePass">修改信息</el-dropdown-item>
          <el-dropdown-item command="logout">删除信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col> -->

    <el-col :span="2" class="userinfo userinfo1">
      <el-dropdown trigger="hover">
        <div class="el-dropdown-link userinfo-inner">
          <img src="../../assets/user.png" />
          <div class="username">
            <span>用户，您好</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>

        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改头像</el-dropdown-item>
          <el-dropdown-item>项目仓库</el-dropdown-item> -->
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col :span="1" class="nav_head" style="float: right;">
      <el-tooltip class="item" effect="dark" content="" placement="nav3">
        <p class="nav_head" multiBtn>
          nav3
        </p>
      </el-tooltip>
    </el-col>
    <el-col :span="2" class="nav_head" style="float: right;">
      <el-tooltip class="item" effect="dark" content="" placement="nav2">
        <div class="nav_head" multiBtn>
          <i class=" fa-light fa-expand"></i>
          <!-- <div class="full-screen" @click="toFullOrExit">
            <img :src="fullImg" />
          </div> -->
        </div>
      </el-tooltip>
    </el-col>
  </el-col>
</template>

<script>
import { logout } from "../../api/api";
export default {
  data() {
    return {
      sysName: "核心管理系统",
      sysUserName: "",
      sysUserAvatar: "",
      isCollapse: false,
      fullImg: "",
    };
  },

  methods: {
    Collapse: function() {
      this.isCollapse = true;
      this.$store.commit("setCollapse", true);
    },
    noCollapse: function() {
      this.isCollapse = false;
      this.$store.commit("setCollapse", false);
    },
    logout: function() {
      var that = this;

      this.$confirm("确认退出吗?", "提示", {
        type: "warning",
      })
        .then(() => {
          sessionStorage.removeItem("userCode");
          that.$router.push("/login");
          var reporParams = {
            userToken: sessionStorage.getItem("token"),
          };
          logout(reporParams).then((res) => {
            sessionStorage.removeItem("rightList");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("username");
            that.$router.push("/login");
            // if (res.code == "0") {
            //   sessionStorage.removeItem("rightList");
            //   sessionStorage.removeItem("token");
            //   sessionStorage.removeItem("username");
            //   that.$router.push("/login");
            // } else {
            //   // that.$message({
            //   //   type: "error",
            //   //   duration: 3000,
            //   //   message: "退出登录失败",
            //   // });
            //   that.$router.push("/login");
            // }
          });
        })
        .catch(() => {});
    },

    requestFullScreen() {
      let de = document.documentElement;
      if (de.requestFullscreen) {
        de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
      }
    },
    exitFullscreen() {
      let de = document;
      if (de.exitFullscreen) {
        de.exitFullscreen();
      } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
      }
    },
    toFullOrExit() {
      this.isFull = !this.isFull;
      if (this.isFull) {
        // this.fullImg = require("@/assets/logo.png");
        this.requestFullScreen();
      } else {
        // this.fullImg = require("@/assets/logo.png");
        this.exitFullscreen();
      }
    },

    // nav1: function() {
    //   this.$router.push({
    //     path: "/from",
    //   });
    // },
    //个人信息路由跳转
    // handleCommand(command) {
    //   if (command === "profile") {
    //     this.$router.push({
    //       path: "/from",
    //     });
    //   } else if (command === "updatePass") {
    //     this.$router.push({
    //       path: "/list",
    //     });
    //   } else if (command == "logout") {
    //     this.$router.push({
    //       path: "/table",
    //     });
    //   }
    // },
  },
};
</script>
<style>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.header {
  width: 100%;
  height: 50px;
  /* background: url(../../assets/header.jpg) no-repeat center; */
  background-size: 100% 100%;
  /* border: 1px solid #eee;
  border-left: 0;
  border-bottom: 0; */
}

.menu-expanded {
  flex: 0 0 230px;
  width: 230px;
}
.logo_img {
  width: 50px;
  height: 50px;
}

.big_logo {
  width: 209.5px;
  background: #001529;
  height: 50px;
}
.big_logo_img {
  width: 150px;
  height: 50px;
}
.logo {
  width: 145.5px;
  color: #fff;
  text-align: center;
  background: #001529;
  height: 100%;
  line-height: 50px;
}
.nologo {
  display: none;
}

.nav_head {
  font-size: 14px;

  text-align: center;
  line-height: 50px;
  cursor: pointer;
  margin: 0 auto;
}

.tools {
  padding: 0px 23px;
  width: 40px;
  line-height: 50px;
  cursor: pointer;
}
.el-icon-s-fold {
  font-size: 34px;
  color: #999;
  line-height: 50px;
}
.userinfo-inner {
  display: inline-block;
}
.username {
  font-size: 15px;
  color: #999;
  display: inline-block;
}
.username span {
  margin-left: 10px;
  margin-right: 5px;
}

.userinfo-inner img {
  width: 40px;
  height: 40px;
  margin: 5px auto;
  vertical-align: middle;
  border-radius: 50%;
}
.huanfu {
  width: 35px;
  height: 35px;
  color: #fff;
  fill: currentColor;
  margin: 12.5px auto;
}
.fangda {
  width: 30px;
  height: 30px;
  color: #fff;
  fill: currentColor;
  margin: 15px auto;
}
.userinfo {
  width: 50px;
  float: right;
  cursor: pointer;
}
.userinfo1 {
  width: 200px;
}

.main {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}
.main aside {
  flex: 0 0 210px;
  width: 210px;
  /* overflow-y: scroll; */
}

::-webkit-scrollbar {
  width: 6px;
  height: 1px;
  margin-left: -6px;
}
/* 滑块部分 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /* background-color:red; */
  background-color: #9093994d;
}
/* 轨道部分 */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
  /* background: #001529; */
  border-radius: 5px;
}

.collapsed {
  width: 50px;
}
.item {
  position: relative;
}

.submenu {
  position: absolute;
  top: 0px;
  left: 50px;
  z-index: 99999;
  height: auto;
  display: none;
}

.menu-expanded {
  flex: 0 0 230px;
  width: 230px;
}

.content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 0 15px 20px;
  background: #e3e9ed;
}

.title {
  width: 200px;
  float: left;
  color: #475669;
}

.breadcrumb-inner {
  float: right;
}

.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 68px;
}

.head_logo {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001529;
}
</style>
