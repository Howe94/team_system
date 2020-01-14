<template>
  <div class="container">
    <div class="search-box"></div>
    <div class="team-list">
      <el-row>
        <el-col v-for="(item, index) in teamList" :key="index">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="getTeamInfo(item)"
          >
            <h3>{{item.pro_name}}</h3>
            <p>
              <span v-if="item.university == '广东金融学院'">校内</span>
              <span v-else>校外</span>
              | {{item.pro_nature}} | {{item.pro_type}}
            </p>
            <p>
              <span>掌握技能：</span>
              {{item.staffList}}
            </p>
            <span>{{item.university}}</span>
            <span>
              <i class="el-icon-view"></i>
              {{item.see_num}}
            </span>
          </el-card>
        </el-col>
        <el-col>
          <span @click="onloadMore">加载更多<i class="el-icon-d-arrow-right"></i></span>
        </el-col>
        
      </el-row>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import "./index.scss";
</style>
