import {
    getTeamProInfo,
    changeTeamSeeNum,
    getUniversity,
    getProType
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {},
    data() {
        return {
            teamList: [],
            formdata:{
                universityKey:"",//按照学院搜索
                proType:"",//按照类型搜索
                searchKey:""//搜索关键字
            },
            universityList:[

            ],//学院列表
            proTypeList:[]//类型列表
        }
    },
    methods: {
        _getTeamProInfo() {
            getTeamProInfo({
                key: this.formdata.universityKey || ''
            }, 'get').then(res => {
                this.teamList = res.data.slice(0,11)
            })
        },
        getTeamInfo(item) {
            this.$router.push({
                path: '/teamInfo'
            })
            this.$store.commit('getTeamInfo', item.proId)
            // changeTeamSeeNum({
            //     see_num: item.see_num
            // }, 'put').then(res => {
            //     console.log(res)
            // })
        },
        // 获取学院
        _getUniversity(){
            getUniversity({
            },"get").then(res =>{
                this.universityList = res.data;
            })
        },
        //获取类型
        _getProType(){
            getProType({},'get').then(res =>{
              if(res.status == 200){
                this.proTypeList = res.data;
              }
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
        this._getTeamProInfo();
        this._getProType()
    }
}