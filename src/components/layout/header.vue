<template>
  <div class="container-head">
    <div class="head-top">
      <div class="head-left">
        <div class="title">
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
    <el-dialog title="创建项目" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :model="proForm" :rules="proFormRules">
        <el-form-item label="项目名称" :label-width="formLabelWidth" prop="proName">
          <el-input v-model="proForm.pro_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目描述" :label-width="formLabelWidth" prop="proDescribe">
          <el-input v-model="proForm.pro_describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目类型" :label-width="formLabelWidth" prop="proType">
          <el-select v-model="proForm.pro_type" placeholder="请选择项目类型">
            <el-option
              v-for="(item, key) in proTypeList"
              :key="key"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="团队名称" :label-width="formLabelWidth" prop="teamName">
          <el-input v-model="proForm.team_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="团队描述" :label-width="formLabelWidth" prop="teamDescribe">
          <el-input v-model="proForm.team_describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="团队人数" :label-width="formLabelWidth" prop="teamNumber">
          <el-input v-model="proForm.team_number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">完成并创建</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getProType } from "../../utils/teamManagement.url.js"; // 引入接口
export default {
  components: {},
  data() {
    return {
      activeIndex: "1",
      username: "曹荣武",
      inCampus: true,
      outCampus: false,
      centerDialogVisible: false, //新建团队弹框
      proTypeList: [],
      proForm: {
        pro_name: "",
        pro_describe: "",
        pro_type: "",
        team_name: "",
        team_describe: "",
        team_number: ""
      },
      proFormRules: {
        proName: {
          required: true,
          message: "请输入项目名称",
          trigger: "blur"
        },
        proDescribe: {
          required: false,
          message: "请输入项目描述",
          trigger: "blur"
        },
        proType: {
          required: true,
          message: "请输入项目类型",
          trigger: "blur"
        },
        teamName: {
          required: true,
          message: "请输入团队名称",
          trigger: "blur"
        },
        teamDescribe: {
          required: false,
          message: "请输入团队描述",
          trigger: "blur"
        },
        teamNumber: {
          required: true,
          message: "请输入团队人数",
          trigger: "blur"
        }
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    handleSelect(index) {
      //index 1-校内，2-校外
      this.$router.push({
        path: "/chooseTeam"
      });
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
    _getProType() {
      getProType({}, "get").then(res => {
        if (res.status == 200) {
          this.proTypeList = res.data;
        }
      });
    }
  },
  created() {
    this._getProType();
  }
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
