import Vue from 'vue'

import GAuth from 'vue-google-oauth2'

const gauthOption = {
    clientId:'168640746186-md2jc7i8gtnn1n6geal4kqj20sop8ei6.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
  }

  Vue.use(GAuth,gauthOption);
