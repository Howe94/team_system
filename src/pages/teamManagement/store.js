import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        proId:''
    },
    mutations: {
        getTeamInfo(state,proId){
            state.proId = proId;
        }
    },
    actions: {

    },
    getters: {
    }
})