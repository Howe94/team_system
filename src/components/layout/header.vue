<template>
  <div class="container-head">
    <div class="head-top">
      <div class="head-left">
        <div class="title" @click="goHomePage">
          <h3>找团队|找项目</h3>
        </div>
        <div class="tabMenu">
          <div class="el-menu-demo">
            <div class="tabMenuItem" :class="inCampus? 'selectItem': ''" @click="handleSelect(1)">校内</div>
            <div
              class="tabMenuItem"
              :class="outCampus? 'selectItem': ''"
              @click="handleSelect(2)"
            >校外</div>
          </div>
        </div>
      </div>
      <div class="head-right">
        <div class="getTeam">
          <el-dropdown trigger="click" class="md-userinfo-drop" @command="selectCommand">
            <i class="el-icon-circle-plus-outline"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="newPro">新建项目</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="userInf">
          <span class="username">欢迎您 {{username}}</span>
          <!-- <el-avatar shape="circle" :size="20" fit="fill" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
        </div>
        <div class="setting">
          <el-dropdown trigger="click" class="md-userinfo-drop" @command="selectCommand">
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
              <el-dropdown-item command="myTeam">我的队伍</el-dropdown-item>
              <el-dropdown-item command="outLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <team-dialog
      :centerDialogVisible="centerDialogVisible"
      :titleTip="titleTip"
      :subTip="subTip"
      @closeDialog="closeDialog"
      @addTeam="addTeam"
    ></team-dialog>
  </div>
</template>
<script>
import teamDialog from "../teamDialog/index.vue";
export default {
  components: { teamDialog },
  data() {
    return {
      activeIndex: "1",
      username: "曹荣武",
      centerDialogVisible: false, //新建团队弹框
      titleTip: "新建团队项目",
      subTip:"完成并创建",
      inCampus: true,
      outCampus: false
    };
  },
  methods: {
    goHomePage() {
      this.$router.push({
        path: "/chooseTeam"
      });
    },
    handleSelect(index) {
      //index 1-校内，2-校外
      this.$store.commit("storeIsCampus", index == 1 ? false : true);
      // console.log(this.$store.state.isCampus)
      switch (index) {
        case 1:
          this.inCampus = true;
          this.outCampus = false;
          break;
        case 2:
          this.outCampus = true;
          this.inCampus = false;
          break;
      }
    },
    selectCommand(command) {
      if (command == "newPro") {
        this.centerDialogVisible = true;
      } else if (command == "userInfo") {
      } else if (command == "myTeam") {
        this.$router.push({
          path: "/taskSchedule"
        });
      } else {
        console.log("退出登录");
      }
    },
    closeDialog(value) {
      this.centerDialogVisible = value;
    },
    addTeam(teamInfo){
      console.log(teamInfo)
    }
  },
  created() {}
};
</script>
<style lang="scss">
.container-head {
  text-align: center;
  .head-top {
    display: inline-block;
    width: 1200px;
    height: 50px;
    color: rgb(110, 108, 108);
    border-bottom: 2px dotted #c5c4c5;
    //   background: rgba(238, 238, 238, 0.623);
    .head-left,
    .head-right {
      display: inline-block;
      font-size: 16px;
      margin-top: 15px;
    }
    .head-left {
      float: left;
      .title h3 {
        cursor: pointer;
        font-size: 18px;
        font-weight: 800;
      }
      .title,
      .tabMenu {
        display: inline-block;
        margin-left: 25px;
        font-size: 16px;
      }
      .tabMenu .el-menu-demo {
        .tabMenuItem {
          display: inline-block;
          &:nth-of-type(n) {
            margin-left: 20px;
            cursor: pointer;
          }
        }
        .selectItem {
          color: rgb(60, 167, 255);
        }
      }
    }
    .head-right {
      float: right;
      .userInf,
      .getTeam,
      .setting {
        i {
          font-size: 22px;
          color: rgb(62, 151, 253);
          cursor: pointer;
        }
        display: inline-block;
        margin-right: 25px;
      }
    }
  }
  .el-form {
    .el-form-item {
      label {
        text-align: left;
      }
      .el-form-item__content {
        .el-select {
          width: 100%;
        }
      }
    }
  }
}
</style>
