<template>
<div class="taskBox">
    <el-table
    :data="allTaskData"
    empty-text="暂无任务"
    :show-header="false"
    stripe
    style="width: 100%">
    <el-table-column
      width="230">
      <template slot-scope="scope">
        <p>{{scope.row.task_start_time}} ~ {{scope.row.task_end_time}}</p>
      </template>
    </el-table-column>
    <el-table-column
      width="600">
      <template slot-scope="scope">
        <p>{{scope.row.task_content}}</p>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <p v-if="scope.row.task_status == 1">任务池</p>
        <p v-if="scope.row.task_status == 2">待完成</p>
        <p v-if="scope.row.task_status == 3">工作中</p>
        <p v-if="scope.row.task_status == 4">已完成</p>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
  export default {
    props: ["allTaskData", "pageObj"],
    data() {
      return {

      }
    }
  }
</script>