import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        upadateUser(state, newuser) {
            state.user = newuser
        },
        changeUserStatus(state, obj){
            console.log(obj)
            state.user[obj.key] = obj.value
        }
    }
})
export default store