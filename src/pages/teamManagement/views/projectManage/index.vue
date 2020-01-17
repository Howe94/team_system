<template>
  <div class="container">
    <div class="project-section">
      <!-- //面包屑 -->
      <bread-crumb :breadAction="breadAction" :isShow="false"></bread-crumb>
      <div class="head-navMenu">
        <div class="navleft">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="任务" name="first">任务</el-tab-pane>
            <el-tab-pane label="聊天" name="second">聊天</el-tab-pane>
            <el-tab-pane label="发布公告" name="third">发布公告</el-tab-pane>
          </el-tabs>
          <div class="teamMemberNotice">
            <span @click="drawer = true">
              <i class="el-icon-success"></i>
              {{member}}
            </span>
            <el-badge is-dot class="notice">通知</el-badge>
          </div>
        </div>
      </div>
      <div class="drawerBox">
        <el-drawer :visible.sync="drawer" :modal="false" direction="rtl">
          <div class="demo-drawer__content">就看撒比赛的精彩吧就吧阿森纳从西安开始筹备快递</div>
        </el-drawer>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>