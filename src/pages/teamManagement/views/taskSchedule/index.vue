<template>
  <div class="container">
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="selectTeam"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的团队</span>
                </template>
                <el-menu-item
                  v-for="(item, key) in myTeamList"
                  :key="key"
                  :index="item.team_id"
                  :value="item.team_name"
                >{{item.team_name}}</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">参加的团队</span>
                </template>
                <el-menu-item
                  v-for="(item, key) in joinTeamList"
                  :key="key"
                  :index="item.team_id"
                  :value="item.team_name"
                  @click="getProInfo(item.team_id,item.team_name)"
                >{{item.team_name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <!-- //面包屑 -->
          <bread-crumb></bread-crumb>
        </el-header>
        <el-main>
          <div class="pro-task">
            <!-- 我的项目  -->
            <div class="proBox">
              <h3 class="section-title">我的项目</h3>
              <div class="pro-list">

              </div>
            </div>
            <!-- 我的任务 -->
            <div class="taskBox">

            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import "./index.scss";
</style>