import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: {},
    warehouse: {},
    page:"personal"
}
const mutations = {
    setWareHouse(state, wh) {
        state.warehouse = wh
    }
}
export default new Vuex.Store({
    state,
    mutations
})
