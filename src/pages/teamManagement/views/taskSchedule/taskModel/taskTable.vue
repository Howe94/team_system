<template>
  <div class="taskBox">
    <el-table
      :data="allTaskData"
      empty-text="暂无任务"
      :show-header="false"
      height="250"
      stripe
      style="width: 100%"
    >
      <el-table-column width="220">
        <template slot-scope="scope">
          <p>{{scope.row.taskStartTime}} ~ {{scope.row.taskEndTime}}</p>
        </template>
      </el-table-column>
      <el-table-column width="618">
        <template slot-scope="scope">
          <p>{{scope.row.taskContent}}</p>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-tag v-if="scope.row.taskStatus == 1">任务池</el-tag>
          <el-tag type="warning" v-if="scope.row.taskStatus == 2">待完成</el-tag>
          <el-tag type="info" v-if="scope.row.taskStatus == 3">工作中</el-tag>
          <el-tag type="success" v-if="scope.row.taskStatus == 4">已完成</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["allTaskData", "pageObj"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.taskBox {
  .el-table--scrollable-y {
    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      height: 50px;
      background: rgb(80, 80, 80);
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(170, 170, 170, 0.2);
      border-radius: 2px;
      background: rgba(134, 134, 134, 0.4);
    }
  }
  &:last-of-type {
    
  }
}
</style>