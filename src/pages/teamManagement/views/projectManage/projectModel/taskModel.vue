<template>
  <div class="container">
    <div class="task-pool task-section">
      <div class="task-body">
        <h3 class="tast-title">
          任务池
          <span>{{poolNum}}</span>
          <i class="el-icon-plus"></i>
        </h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in poolList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <div class="task-priority"></div>
              <p>{{item.task_content}}</p>
              <span @click="assignTask"></span>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="tobe-completed task-section">
      <div class="task-body">
        <h3 class="tast-title">待完成</h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in toboCompletedList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <p>{{item.task_content}}</p>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="at-work task-section">
      <div class="task-body">
        <h3 class="tast-title">工作中</h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in atWorkList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <p>{{item.task_content}}</p>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="completed task-section">
      <div class="task-body">
        <h3 class="tast-title">已完成</h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in completedList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <p>{{item.task_content}}</p>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="titleTip"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :before-close="handleClose"
    >
      <el-form :model="seleteNumber" :rules="proFormRules" ref="proForm">
        <el-form-item label="成员" :label-width="formLabelWidth" prop="pro_type">
          <el-select
            v-model="value2"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择成员"
          >
            <el-option
              v-for="item in teamNumberList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitTeamInfo">确认分配</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["taskList"],
  data() {
    return {
      centerDialogVisible: false, //弹框可见
      titleTip: "选择任务分配的成员", //弹框标题
      teamNumberList: [], //队伍成员
      poolNum: 3, //任务池的任务个数
      poolList: [], //任务池的任务
      toboCompletedList: [],
      atWorkList: [],
      completedList: []
    };
  },
  methods: {
    assignTask() {
      this.centerDialogVisible = true;
      console.log("分配任务");
    }
  },
  watch: {
    taskList(val) {
      val.map((item, index) => {
        switch (item.task_status) {
          case "1":
            this.poolList.push(item);
            break;
          case "2":
            this.toboCompletedList.push(item);
            break;
          case "3":
            this.atWorkList.push(item);
            break;
          case "4":
            this.completedList.push(item);
            break;
        }
      });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.container {
  height: 450px;
  background: rgba(255, 255, 255, 0.671);
  border-radius: 4px;
  .task-section {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 100%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 4px;
    border: 1px dotted #d9d9df;
    box-shadow: 2px 0px 19px 0px rgba(241, 226, 226, 0.52);
    .task-body {
      margin: 10px;
      .tast-title {
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          flex-shrink: 0;
          font-size: 12px;
          color: #595959;
          margin-left: 12px;
        }
        i {
          float: right;
          cursor: pointer;
          color: rgb(116, 227, 255);
        }
      }
      .task-list {
        .poolList {
          margin-top: 10px;
          .el-card {
            position: relative;
            .el-card__body {
              margin: 12px;
              p,
              span {
                display: inline-block;
                :hover {
                  border: 2px solid #595959;
                }
              }
              p {
                font-size: 10px;
              }
              span {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                width: 0px;
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
                transition: width 400ms ease-in;
                -moz-transition: width 400ms ease-in;
                transition: width 400ms ease-in;
                -o-transition: width 400ms ease-in;
              }
            }
            :hover span {
              width: 12px;
              cursor: pointer;
              background-color: #1b9aee;
            }
          }
        }
      }
    }
  }
}
</style>