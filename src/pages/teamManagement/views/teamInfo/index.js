import {
    getTeamProInfo
} from '../../../../utils/teamManagement.url.js' // 引入接口
export default {
    components: {

    },
    data() {
        return {
            proId: '',
            teamInfo: []
        }
    },
    methods: {
        _getTeamProInfo(proId) {
            getTeamProInfo({
                proId: proId
            }, 'get').then(res => {
                this.teamInfo = res.data[0];
                // console.log(this.teamInfo)
            })
        },
    },
    created() {
        this.proId = this.$store.state.proId
        this._getTeamProInfo(this.proId)
        // console.log(this.$store.state.proId)
    }
}