<template>
  <div class="container">
    <div class="task-pool task-section">
      <div class="task-body">
        <h3 class="tast-title">
          任务池
          <span>{{poolList.length}}</span>
          <i class="el-icon-plus"></i>
        </h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in poolList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <p>{{item.taskContent}}</p>
              <span @click="assignTask(item.taskId)"></span>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="tobe-completed task-section">
      <div class="task-body">
        <h3 class="tast-title">
          待完成
          <span>{{toboCompletedList.length}}</span>
        </h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in toboCompletedList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <div class="taskConChargeer">
                <p>{{item.taskContent}}</p>
                <p>{{item.taskCharger}}</p>
              </div>
              <p>{{item.taskStartTime}}~{{item.taskEndTime}}</p>
              <span @click="confirmTask(item)"></span>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="at-work task-section">
      <div class="task-body">
        <h3 class="tast-title">
          工作中
          <span>{{atWorkList.length}}</span>
        </h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in atWorkList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <div class="taskConChargeer">
                <p>{{item.taskContent}}</p>
                <p>{{item.taskCharger}}</p>
              </div>
              <p>{{item.taskStartTime}}~{{item.taskEndTime}}</p>
              <span @click="assignTask"></span>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="completed task-section">
      <div class="task-body">
        <h3 class="tast-title">
          已完成
          <span>{{completedList.length}}</span>
        </h3>
        <div class="task-list">
          <div class="poolList" v-for="(item,index) in completedList" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <div class="taskConChargeer">
                <p>{{item.taskContent}}</p>
                <p>{{item.taskCharger}}</p>
              </div>
              <p>{{item.taskStartTime}}~{{item.taskEndTime}}</p>
              <span @click="assignTask"></span>
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
      <el-form
        :model="assignForm"
        :rules="assignFormRules"
        ref="assignForm"
        :label-position="labelPosition"
      >
        <el-form-item label="任务待认领" :label-width="formLabelWidth" prop="selectMembers">
          <el-select v-model="assignForm.selectMembers" multiple collapse-tags placeholder="请选择成员">
            <el-option
              v-for="item in teamNumberList"
              :key="item.userId"
              :label="item.userName"
              :value="item.userId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务起止时间" :label-width="formLabelWidth" prop="startEndTime">
          <el-date-picker
            v-model="assignForm.startEndTime"
            type="daterange"
            size="mini"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="优先级" :label-width="formLabelWidth" prop="priority">
          <el-select v-model="assignForm.priority" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="assignTaskForm">确认分配</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMemberList } from "../../../../../utils/teamManagement.url.js"; // 引入接口
export default {
  props: ["taskList"],
  data() {
    return {
      centerDialogVisible: false, //弹框可见
      titleTip: "选择任务分配的成员", //弹框标题
      labelPosition: "left",
      assignForm: {
        taskId:'',
        selectMembers: [], //选择的队员
        startEndTime: [], //任务起止时间
        priority: "" //任务优先级 1-严重，2-一般， 3-缓慢
      },
      assignFormRules: {
        selectMembers: {
          required: true,
          message: "请选择任务分配的成员",
          trigger: "blur"
        },
        startEndTime: {
          required: true,
          message: "请输入任务起止时间",
          trigger: "blur"
        },
        priority:{
          required: true,
          message: "请选择任务优先级",
          trigger: "blur"
        },
      },
      options: [{
          value: '1',
          label: '严重'
        }, {
          value: '2',
          label: '一般'
        }, {
          value: '3',
          label: '缓慢'
        }
      ],
      formLabelWidth: "107px",
      teamNumberList: [], //队伍成员
      poolNum: 3, //任务池的任务个数
      poolList: [], //任务池的任务
      toboCompletedList: [],
      atWorkList: [],
      completedList: []
    };
  },
  methods: {
    assignTask(taskId) {
      this.assignForm.taskId = taskId;
      this.centerDialogVisible = true;
    },
    handleClose() {
      this.centerDialogVisible = false;
    },
    //分配任务
    assignTaskForm() {
      this.centerDialogVisible = false;
      console.log(this.assignForm);
    },
    //确认任务
    confirmTask(val) {
      console.log(val);
      console.log("确认任务");
    },
    //获取成员列表
    _getMemberList(teamId) {
      getMemberList(
        {
          teamId: teamId || ""
        },
        "get"
      ).then(res => {
        if (res.status == 200) {
          this.teamNumberList = res.data;
        }
      });
    }
    //提交分配任务
  },
  watch: {
    taskList(val) {
      val.map((item, index) => {
        switch (item.taskStatus) {
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
  created() {
    this._getMemberList();
  }
};
</script>

<style lang="scss" scoped>
.container {
  // height: 450px;
  background: rgba(255, 255, 255, 0.671);
  border-radius: 4px;
  padding-bottom: 90px;
  .task-section {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 500px;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 4px;
    border: 1px dotted #d9d9df;
    box-shadow: 2px 0px 19px 0px rgba(241, 226, 226, 0.52);
    // overflow: auto;
    // overflow-y: auto;
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
        margin-top: 10px;
        height: 450px;
        overflow-y: auto;
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
              .taskConChargeer p {
                &:nth-of-type(2) {
                  float: right;
                  margin-right: 18px;
                }
              }
            }
          }
        }
      }
      /*滚动条样式*/
      .task-list::-webkit-scrollbar {
        width: 4px;
      }
      .task-list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
      }
      .task-list::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
  .task-pool .task-body .task-list .poolList .el-card {
    :hover span {
      width: 12px;
      cursor: pointer;
      background-color: #254cca;
    }
  }
  .tobe-completed .task-body .task-list .poolList .el-card {
    :hover span {
      width: 12px;
      cursor: pointer;
      background-color: #e6a23c;
    }
  }
  .at-work .task-body .task-list .poolList .el-card {
    :hover span {
      width: 12px;
      cursor: pointer;
      background-color: #909399;
    }
  }
  .completed .task-body .task-list .poolList .el-card {
    :hover span {
      width: 12px;
      cursor: pointer;
      background-color: #67c23a;
    }
  }
  .el-dialog .el-dialog__body .el-form .el-form-item {
    &:nth-of-type(n) {
      .el-form-item__label {
        text-align: left !important;
      }
    }
    &:nth-of-type(2) {
      .el-form-item__content .el-date-editor {
        width: 220px;
      }
    }
  }
}
</style>