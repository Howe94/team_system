import proTable from './taskModel/proTable.vue'
import taskTable from './taskModel/taskTable.vue'
import teamDialog from "../../../../components/teamDialog/index.vue";
import {
  getMyTeamList,
  getMyProList,
  getMyTaskList
} from '../../../../utils/teamManagement.url.js' // 引入接口
import BreadCrumb from '../../../../components/Breadcrumb/breadCrumb.vue'
export default {
  components: {
    BreadCrumb,
    proTable,
    taskTable,
    teamDialog
  },
  data() {
    return {
      tabList: [{
          key: 'first',
          navName: '所有项目',
        },
        {
          key: 'second',
          navName: '正在进行项目',
        },
        {
          key: 'third',
          navName: '已完成项目',
        }
      ], //列表
      activeName: 'first',
      itemAttribute: '', //团队属性
      selectTeamId: '', //选择的团队id
      typeVal: '0', //项目分类 0-所有项目，1-正在进行项目，2-已完成项目
      myTeamList: [], //我发起的团队
      joinTeamList: [], //我参加的团队
      myProList: [], //所有项目列表
      getOnProList: [], //正在进行的项目
      completedProList: [], //已完成的项目
      controlProList: [], //选择的项目列表
      teamName: '', //团队名称
      taskList:[],//任务列表
      centerDialogVisible: false, //新建项目弹框
      titleTip:"添加新项目",
      subTip:"完成并新增",
      dialogTeamInfo:[],//添加新项目的团队信息
      pageObj: {
        pageRowNum: 4,
        currPage: 1,
        totalPage: 7,
        totalRow: 0,
        pageIndex: 1
      },
    }
  },
  methods: {
    handleClick(tab, event) {
      this.controlProList = [];
      this.pageObj.currPage = 1;//默认初始页
      this.typeVal = tab.index;
      let _proList = [];
      if (tab.index == 0) { //所有项目
        _proList = this.myProList
      } else if (tab.index == 1) { //正在进行的项目
        _proList = this.getOnProList
      } else { //已完成的项目
        _proList = this.completedProList
      }
      this.pageObj.totalRow = _proList.length;
      this.controlProList = _proList.slice((this.pageObj.currPage - 1) * this.pageObj.pageRowNum, ((this.pageObj.currPage - 1) * this.pageObj.pageRowNum) + this.pageObj.pageRowNum);
    },
    // 子组件中 分页触发 父组件的方法
    changePages(val) {
      this.pageObj.currPage = val;
      let _proList = [];
      if(this.typeVal == 0){
        _proList = this.myProList
      }else if(this.typeVal == 1){
        _proList = this.getOnProList
      }else{
        _proList = this.completedProList
      }
      this.controlProList = _proList.slice((this.pageObj.currPage - 1) * this.pageObj.pageRowNum, ((this.pageObj.currPage - 1) * this.pageObj.pageRowNum) + this.pageObj.pageRowNum);

    },
    selectTeam(index) {
      // console.log(index)

    },
    getProInfo(team) {
      this.dialogTeamInfo = team;
      this.activeName = 'first'
      this.itemAttribute = team.is_leader;
      this.selectTeamId = team.team_id;
      this.teamName = team.team_name;
      this.myProList = [];
      this.getOnProList = [];
      this.completedProList = [];
      this._getMyProList(this.selectTeamId)
    },
    //获取团队列表
    _getMyTeamList() {
      getMyTeamList({
        user_Id: this.$store.state.userId || ''
      }, "get").then(res => {
        if (res.status == 200) {
          res.data.map((item, index) => {
            if (item.is_leader) {
              this.myTeamList.push(item);
            } else {
              this.joinTeamList.push(item)
            }
          })
        }
      }).catch(err => {
        console.log(err);
        this.$message.error(err);
      });
    },
    // 获取项目列表
    // .slice((this.pageObj.currPage-1)*this.pageObj.currPage,((this.pageObj.currPage-1)*this.pageObj.currPage)+this.pageObj.pageRowNum);
    _getMyProList(teamid) {
      getMyProList({
        user_id: this.$store.state.userId || '',
        team_id: teamid
      }, "get").then(res => {
        if (res.status == 200) {
          this.myProList = res.data;
          this.myProList.map((item, index) => {
            if (item.pro_status) {
              this.completedProList.push(item)
            } else {
              this.getOnProList.push(item)
            }
          })
          this.controlProList = this.myProList.slice((this.pageObj.currPage - 1) * this.pageObj.currPage, ((this.pageObj.currPage - 1) * this.pageObj.currPage) + this.pageObj.pageRowNum);
          this.pageObj.totalRow = this.myProList.length;
        }
      }).catch(err => {
        console.log(err);
        this.$message.error(err);
      });
    },
    //获取团队列表
    _getMyTaskList() {
      getMyTaskList({
        user_Id: this.$store.state.userId || ''
      }, "get").then(res => {
        if (res.status == 200) {
          this.taskList = res.data;
        }
      }).catch(err => {
        console.log(err);
        this.$message.error(err);
      });
    },
    addProInfo(){
      this.centerDialogVisible = true;
    },
    //添加项目信息
    addTeam(teamInfo){
      Object.assign({},teamInfo,this.selectTeamId)
      console.log(teamInfo)
    },
    closeDialog(value){
      this.centerDialogVisible = value;
    }

  },
  created() {
    this._getMyTeamList()
    this._getMyTaskList()
  }
}