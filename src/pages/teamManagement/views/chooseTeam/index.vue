<template>
  <div class="container">
    <div class="search-box"></div>
    <div class="team-list">
      <el-row>
        <el-col :span="8" v-for="(item, index) in teamList" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <h3>{{item.pro_name}}</h3>
            <p>校内|{{item.pro_nature}}|{{item.pro_type}}</p>
            <span>掌握技能：{{item.staffList}}</span>
            <div>
              <span>广东金融学院</span>
              <span>{{item.see_num}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import "./index.scss";
</style>
