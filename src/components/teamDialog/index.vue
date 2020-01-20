<template>
  <div class="dialogBox">
    <el-dialog
      :title="titleTip"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :before-close="handleClose"
    >
      <el-form :model="proForm" :rules="proFormRules" ref="proForm">
        <el-form-item label="项目名称" :label-width="formLabelWidth" prop="proName">
          <el-input v-model="proForm.proName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目描述" :label-width="formLabelWidth" prop="proDescribe">
          <el-input v-model="proForm.proDescribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目类型" :label-width="formLabelWidth" prop="proType">
          <el-select v-model="proForm.proType" placeholder="请选择项目类型">
            <el-option
              v-for="(item, key) in proTypeList"
              :key="key"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="团队名称" :label-width="formLabelWidth" prop="teamName">
          <el-input v-model="proForm.teamName" autocomplete="off" :disabled="viliaInput"></el-input>
        </el-form-item>
        <el-form-item label="团队描述" :label-width="formLabelWidth" prop="teamDescribe">
          <el-input v-model="proForm.teamDescribe" autocomplete="off" :disabled="viliaInput"></el-input>
        </el-form-item>
        <el-form-item label="团队人数" :label-width="formLabelWidth" prop="teamNumber">
          <el-input v-model="proForm.teamNumber" autocomplete="off" :disabled="viliaInput"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitTeamInfo">{{subTip}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getProType } from "../../utils/teamManagement.url.js"; // 引入接口
export default {
  props: ["centerDialogVisible", "titleTip", "dialogTeamInfo", "subTip"],
  data() {
    return {
      proTypeList: [], //项目类型
      viliaInput: false,
      proForm: {
        proName: "",
        proDescribe: "",
        proType: "",
        teamName: "",
        teamDescribe: "",
        teamNumber: ""
      },
      proFormRules: {
        proName: {
          required: true,
          message: "请输入项目名称",
          trigger: "blur"
        },
        proDescribe: {
          required: false,
          message: "请输入项目描述",
          trigger: "blur"
        },
        proType: {
          required: true,
          message: "请输入项目类型",
          trigger: "blur"
        },
        teamName: {
          required: true,
          message: "请输入团队名称",
          trigger: "blur"
        },
        teamDescribe: {
          required: false,
          message: "请输入团队描述",
          trigger: "blur"
        },
        teamNumber: {
          required: true,
          message: "请输入团队人数",
          trigger: "blur"
        }
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    _getProType() {
      getProType({}, "get").then(res => {
        if (res.status == 200) {
          this.proTypeList = res.data;
        }
      });
    },
    handleClose() {
      this.$emit("closeDialog", false);
    },
    submitTeamInfo() {
      this.$refs["proForm"].validate(valid => {
        if (valid) {
            this.$emit("closeDialog", false);
            this.$emit("addTeam",this.proForm)
        }
      });
      
    }
  },
  watch: {
    dialogTeamInfo(val) {
      this.viliaInput = true;
      (this.proForm.teamName = val.teamName),
        (this.proForm.teamDescribe = val.teamDescribe);
      this.proForm.teamNumber = val.teamNumber;
    }
  },
  created() {
    this._getProType();
  }
};
</script>

<style>
</style>