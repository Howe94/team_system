import BreadCrumb from '../../../../components/Breadcrumb/breadCrumb.vue'
import taskModel from './projectModel/taskModel.vue'
import fileModel from './projectModel/fileModel.vue'
import annouceModel from './projectModel/annouceModel.vue'
import {
    getTaskList
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {BreadCrumb,taskModel,fileModel,annouceModel},
    data() {
        return {
            taskList:[],//项目任务列表
            teamName:"",//团队名称
            proName:"",//项目名称
            breadAction:[],
            activeName:'first',
            member:5,//团队成员
            drawer: false,
            form:[],
            controlList:[]
        }
    },
    methods: {
        _getTaskList(proId){
            getTaskList({
                pro_id:proId
            },'get').then(res =>{
                if(res.status == 200){
                    this.taskList = res.data;
                }
            })
        },
        handleClick(tab){
            // console.log(tab)
        },
        handleClose(){
            
        }
     
    },
    mounted(){
    },
    created() {
        this.breadAction = JSON.parse(sessionStorage.getItem("PROJECTINFO"))
       this._getTaskList(this.$route.query.proId)
        // console.log(this.taskList)
    }
}