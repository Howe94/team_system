<template>
  <div class="container">
    <div class="search-box">
      <el-form ref="formdata"
               :model="formdata">
        <el-row>
          <el-col :span="7" v-if="this.$store.state.isCampus">
            <el-form-item label="按学校查找">
              <el-select v-model="formdata.university"
                         placeholder="请选择查找的学校">
                <el-option v-for="(item, key) in universityList"
                           :key="key"
                           :label="item.university"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="按类型查找">
              <el-select v-model="formdata.proType"
                         placeholder="请选择查找的类型">
                <el-option v-for="(item, key) in proTypeList"
                           :key="key"
                           :label="item.value"
                           :value="item.key"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-input v-model="formdata.searchKey"
                        placeholder="请选择查找的关键字"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item>
              <el-button type="primary"
                         @click="submitForm('formdata')">搜索</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item>
              <el-button @click="resetForm('formdata')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="team-list">
      <el-row>
        <el-col v-for="(item, index) in teamList"
                :key="index">
          <el-card :body-style="{ padding: '0px' }"
                   shadow="hover"
                   @click.native="getTeamInfo(item)">
            <h3>{{item.proName}}</h3>
            <p>
              <!-- <span v-if="item.university == '广东金融学院'">校内</span>
              <span v-else>校外</span> -->
             {{item.proNature}} | {{item.proType}} | {{item.proNum}}
            </p>
            <p>
              <span>掌握技能：</span>
              {{item.staffList}}
            </p>
            <span>{{item.university}}</span>
            <span>
              <i class="el-icon-view"></i>
              {{item.seeNum}}
            </span>
          </el-card>
        </el-col>
        <el-col v-if="teamList.length > 0">
          <span @click="onloadMore">加载更多
            <i class="el-icon-d-arrow-right"></i>
          </span>
        </el-col>

      </el-row>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import './index.scss';
</style>
