import BreadCrumb from '../../../../components/Breadcrumb/breadCrumb.vue'
import {
    getTaskList
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {BreadCrumb},
    data() {
        return {
            taskList:[],//项目任务列表
            teamName:"",//团队名称
            proName:"",//项目名称
            breadAction:[],
            activeName:'first',
            member:5,//团队成员
            drawer: false,
            form:[]
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
        handleClick(){

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