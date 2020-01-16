<template>
  <div class="task-container">
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
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
                  @click="getProInfo(item)"
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
                  @click="getProInfo(item)"
                >{{item.team_name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <!-- //面包屑 -->
          <bread-crumb :location="teamName"></bread-crumb>
        </el-header>
        <el-main>
          <div class="pro-task">
            <!-- 我的项目  -->
            <div class="proBox">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane
                  v-for="(item, index) in tabList"
                  :key="index"
                  :label="item.navName"
                  :name="item.key"
                >
                  <proTable
                    :allProData="controlProList"
                    :pageObj="pageObj"
                    @clickPages="changePages"
                  ></proTable>
                </el-tab-pane>
              </el-tabs>
              <div class="addNewPro" v-if="itemAttribute">
              <el-button type="primary">新增项目</el-button>
            </div>
            </div>
            
            <!-- 我的任务 -->
            <div class="taskBox">
              <h3 class="section-title">我的任务</h3>
              <div class="task-list">
                <taskTable
                    :allTaskData="taskList"
                    :pageObj="pageObj"
                    @clickPages="changePages"
                  ></taskTable>
              </div>
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