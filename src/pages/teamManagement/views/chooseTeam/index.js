import {
    getTeamProInfo,
    changeTeamSeeNum
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {},
    data() {
        return {
            teamList: []
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
        onloadMore(){
            console.log("加载更多")
        }
    },
    created() {
        this._getTeamProInfo()
    }
}