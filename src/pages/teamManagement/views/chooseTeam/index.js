import {
    getTeamProInfo
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {
    },
    data() {
        return {
            teamList:[]
        }
    },
    methods: {
        _getTeamProInfo() {
            getTeamProInfo({
                university:"广东金融学院"
            }, 'get').then(res => {
                this.teamList = res.data;
                console.log(this.teamList)
            })
        },
    },
    created() {
        console.log("aaa")
        this._getTeamProInfo()
    }
}