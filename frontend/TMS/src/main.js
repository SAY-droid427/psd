import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false


import GAuth from 'vue-google-oauth2'

const gauthOption = {
    clientId:'168640746186-md2jc7i8gtnn1n6geal4kqj20sop8ei6.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
  }

  Vue.use(GAuth,gauthOption);



new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
