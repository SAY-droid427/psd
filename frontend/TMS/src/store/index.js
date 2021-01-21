import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    signIn(state,userProfile,loginType)
    {
      state.user = userProfile
      state.user.loginType = loginType
      console.log('Sign in mutation commited');
    }
  },
  actions: {
  },
  modules: {
  }
})
