import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        proId:'',
        isCampus: false,//校内或者校外
    },
    mutations: {
        getTeamInfo(state,proId){
            state.proId = proId;
        },
        storeIsCampus(state, isCampus){
            state.isCampus = isCampus;
        }
    },
    actions: {

    },
    getters: {
    }
})