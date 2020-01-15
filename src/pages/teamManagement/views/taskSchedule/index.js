import {
    getMyTeamList,
    getMyProList
} from '../../../../utils/teamManagement.url.js' // 引入接口
import BreadCrumb from '../../../../components/Breadcrumb/breadCrumb.vue'
export default {
    components: {BreadCrumb},
    data() {
        return {
            myTeamList:[],//我发起的团队
            joinTeamList:[],//我参加的团队
            myProList:[],//项目列表
            teamName: '',//团队名称
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          selectTeam(index){
            console.log(index)
            
          },
          getProInfo(teamId,teamName){
            this.teamName = teamName;
            this._getMyProList(teamId)
            console.log(this.teamName)
          },
          //获取团队列表
          _getMyTeamList() {
            getMyTeamList({
                user_Id: this.$store.state.userId || ''
            }, "get").then(res => {
              if (res.status == 200) {
                  res.data.map((item,index) =>{
                      if(item.is_leader){
                          this.myTeamList.push(item);
                      }else{
                          this.joinTeamList.push(item)
                      }
                  })
              }
            }).catch(err => {
                console.log(err);
                this.$message.error(err);
            });
          },
        //   获取项目列表
          _getMyProList(teamid) {
            getMyProList({
                user_id: this.$store.state.userId || '',
                team_id: teamid
            }, "get").then(res => {
              if (res.status == 200) {
                  this.myProList = res.data;
              }
            }).catch(err => {
                console.log(err);
                this.$message.error(err);
            });
          }

    },
    created() {
       this._getMyTeamList()
    }
}