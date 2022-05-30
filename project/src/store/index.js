import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard : false
    }
})



console.log('#store', store)

export default store