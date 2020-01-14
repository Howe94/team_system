<template>
  <div class="container">
    <div class="proInfoBox">
      <h3>{{teamInfo.pro_name}}</h3>
      <div class="proInfo">
        <p>{{teamInfo.university}} | {{teamInfo.pro_type}} | {{teamInfo.pro_num}} | {{teamInfo.pro_start_date}} - {{teamInfo.pro_end_date}}</p>
        <span>项目描述：</span>
        <p>{{teamInfo.pro_describe}}</p>
        <span>希望队员：</span>
        <p v-for="(item,index) in teamInfo.staff" :key="index">{{index+1}}、{{item.staffName}}</p>
      </div>
    </div>
    <div class="teamInfoBox">
      <h3>{{teamInfo.team_name}}</h3>
      <div class="teamInfo">
        <span>队长:</span>
        <p>{{teamInfo.leader_name}}</p>
        <span>团队描述：</span>
        <p>{{teamInfo.team_describe}}</p>
      </div>
    </div>
    <div class="subMit"><el-button type="primary" plain>申请加队</el-button></div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
