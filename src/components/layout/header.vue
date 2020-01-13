<template>
  <div class="container">
    <div class="head-top">
      <div class="head-left">
        <div class="title">
          <h3>找团队|找项目</h3>
        </div>
        <div class="tabMenu">
          <div class="el-menu-demo">
            <div class="tabMenuItem" @click="handleSelect(1)">校内</div>
            <div class="tabMenuItem" @click="handleSelect(2)">校外</div>
          </div>
        </div>
      </div>
      <div class="head-right">
        <div class="userInf">
          <span class="username">欢迎您 {{username}}</span>
        </div>
        <div class="getTeam">组队</div>
        <div class="setting">个人设置</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "1",
      username: "曹荣武"
    };
  },
  methods: {
    handleSelect(index) {//index 1-校内，2-校外
      console.log(index);
    }
  }
};
</script>
<style lang="scss">
.container {
  text-align: center;
  .head-top {
    display: inline-block;
    width: 1200px;
    height: 50px;
    color: rgb(110, 108, 108);
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
      }
    }
    .head-right {
      float: right;
      .userInf,
      .getTeam,
      .setting {
        display: inline-block;
        margin-right: 25px;
      }
    }
  }
}
</style>
