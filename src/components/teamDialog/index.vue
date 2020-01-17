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
        <el-form-item label="项目名称" :label-width="formLabelWidth" prop="pro_name">
          <el-input v-model="proForm.pro_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目描述" :label-width="formLabelWidth" prop="pro_describe">
          <el-input v-model="proForm.pro_describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目类型" :label-width="formLabelWidth" prop="pro_type">
          <el-select v-model="proForm.pro_type" placeholder="请选择项目类型">
            <el-option
              v-for="(item, key) in proTypeList"
              :key="key"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="团队名称" :label-width="formLabelWidth" prop="team_name">
          <el-input v-model="proForm.team_name" autocomplete="off" :disabled="viliaInput"></el-input>
        </el-form-item>
        <el-form-item label="团队描述" :label-width="formLabelWidth" prop="team_describe">
          <el-input v-model="proForm.team_describe" autocomplete="off" :disabled="viliaInput"></el-input>
        </el-form-item>
        <el-form-item label="团队人数" :label-width="formLabelWidth" prop="team_number">
          <el-input v-model="proForm.team_number" autocomplete="off" :disabled="viliaInput"></el-input>
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
        pro_name: "",
        pro_describe: "",
        pro_type: "",
        team_name: "",
        team_describe: "",
        team_number: ""
      },
      proFormRules: {
        pro_name: {
          required: true,
          message: "请输入项目名称",
          trigger: "blur"
        },
        pro_describe: {
          required: false,
          message: "请输入项目描述",
          trigger: "blur"
        },
        pro_type: {
          required: true,
          message: "请输入项目类型",
          trigger: "blur"
        },
        team_name: {
          required: true,
          message: "请输入团队名称",
          trigger: "blur"
        },
        team_describe: {
          required: false,
          message: "请输入团队描述",
          trigger: "blur"
        },
        team_number: {
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
      (this.proForm.team_name = val.team_name),
        (this.proForm.team_describe = val.team_describe);
      this.proForm.team_number = val.team_number;
    }
  },
  created() {
    this._getProType();
  }
};
</script>

<style>
</style>