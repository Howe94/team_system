<template>
  <div>
    <div class="pro-table">
      <el-table :data="allProData" border style="width: 100%" empty-text="暂无项目">
        <el-table-column label="序号" width="60" :resizable="false">
          <template slot-scope="scope">
            <span>{{ (scope.$index+1)+(pageObj.currPage - 1)*pageObj.pageRowNum }}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目详情" width="560" :resizable="false">
          <template slot-scope="scope">
            <ul>
              <li>
                <p>项目名称</p>
                <p>{{scope.row.pro_name}}</p>
              </li>
              <li>
                <p>项目起止时间</p>
                <p>{{scope.row.pro_start_time}}~{{scope.row.pro_end_time}}</p>
              </li>
              <li>
                <p>项目创建时间</p>
                <p>{{scope.row.pro_date}}</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>队长名称</p>
                <p>{{scope.row.leader_name}}</p>
              </li>
              <li>
                <p>团队名称</p>
                <p>{{scope.row.team_name}}</p>
              </li>
              <li>
                <p>项目类型</p>
                <p>{{scope.row.pro_type}}</p>
              </li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column label="项目描述" width="169" :resizable="false">
          <template slot-scope="scope">
            <span>{{scope.row.pro_describe}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="130" :resizable="false">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">项目管理</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-content">
      <p class="total-items">共{{pageObj.totalRow}}个项目</p>
      <el-pagination
        background
        @current-change="changePage"
        :current-page="pageObj.currPage"
        :page-size.sync="pageObj.pageRowNum"
        layout="prev, pager, next"
        :total="pageObj.totalRow"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ["allProData", "pageObj"],
  data() {
    return {};
  },
  methods: {
    handleClick(row) {
      console.log(row)
      this.$router.push({
        name:"projectManage",
        path: "/projectManage",
        query: {proId:row.pro_id},
        params:{teamName: row.team_name,proName:row.pro_name}
      });
      console.log(row);
    },
    changePage(val) {
      this.$emit("clickPages", val);
    }
  },
  watch: {
    allProData(val) {}
  },
  created() {
    // console.log("111111")
    // console.log(this.allProData)
  }
};
</script>
<style lang="scss" scoped>
.pro-table {
  margin-top: 26px;
  ::v-deep thead tr th {
    font-size: 14px;
    font-weight: 600;
    &:first-of-type {
      padding-left: 10px;
    }
    &:nth-of-type(4) {
      text-align: right;
      padding-right: 20px;
    }
  }
  ::v-deep tbody tr td {
    &:nth-of-type(1) {
      padding-left: 10px;
    }
    &:nth-of-type(2) {
      ul {
        width: 250px;
        &:first-of-type {
          float: left;
          margin-right: 30px;
        }
        &:last-of-type {
          float: left;
        }
      }
      p {
        font-family: "PingFangSC-Regular";
        font-size: 14px;
        color: #333333;
        &:first-of-type {
          float: left;
          width: 90px;
          color: #999999;
          padding-right: 8px;
        }
        &:last-of-type {
          float: left;
          width: 150px;
        }
      }
    }
    &:last-of-type {
      .cell {
        .el-button {
          &:nth-of-type(1) {
            width: 60px;
            color: #ffffff;
            background: #5cf0b7;
          }
          &:nth-of-type(2) {
            width: 30px;
            color: #ffffff;
            background: #59bdf7;
          }
        }
      }
    }
  }
}

.page-content {
  text-align: right;
  .total-items {
    display: inline-block;
    text-align: right;
    margin: 20px 0;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    color: #999999;
    text-align: right;
  }
  .el-pagination {
    display: inline-block;
  }
}
</style>