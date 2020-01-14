import {
    getTeamProInfo,
    changeTeamSeeNum,
    getUniversity
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {},
    data() {
        return {
            teamList: [],
            formdata:{
                university:"",//按照学院搜索
                pro_type:"",//按照类型搜索
                searchKey:""//搜索关键字
            },
            universityList:[],//学院列表
            pro_typeList:[]//类型列表
        }
    },
    methods: {
        _getTeamProInfo() {
            getTeamProInfo({
                university: "广东金融学院"
            }, 'get').then(res => {
                this.teamList = res.data.slice(0,11)
            })
        },
        getTeamInfo(item) {
            this.$router.push({
                path: '/teamInfo'
            })
            this.$store.commit('getTeamInfo', item.pro_id)
            // changeTeamSeeNum({
            //     see_num: item.see_num
            // }, 'put').then(res => {
            //     console.log(res)
            // })
        },
        _getUniversity(){
            getUniversity({

            },"get").then(res =>{
                this.universityList = res.data;
            })
        },
        onloadMore(){
            console.log("加载更多")
        },
        submitForm(){
            
        }
    },
    created() {
        this._getUniversity();
        this._getTeamProInfo()
    }
}