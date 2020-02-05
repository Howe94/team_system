<template>
  <div class="container">
    <div class="proInfoBox">
      <h3>{{teamInfo.proName}}</h3>
      <div class="proInfo">
        <p>{{teamInfo.university}} | {{teamInfo.proType}} | {{teamInfo.proNum}} | {{teamInfo.proStartTime}} - {{teamInfo.proEndTime}}</p>
        <span>项目描述：</span>
        <p>{{teamInfo.proDescribe}}</p>
        <span>希望队员：</span>
        <p v-for="(item,index) in teamInfo.staff" :key="index">{{index+1}}、{{item.staffName}}</p>
      </div>
    </div>
    <div class="teamInfoBox">
      <h3>{{teamInfo.teamName}}</h3>
      <div class="teamInfo">
        <span>队长:</span>
        <p>{{teamInfo.leaderName}}</p>
        <span>团队描述：</span>
        <p>{{teamInfo.teamDescribe}}</p>
      </div>
    </div>
    <div class="subMit"><el-button type="primary" plain :disabled="teamInfo.proCurrentNum == teamInfo.proLimitedNum">申请加队</el-button></div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
