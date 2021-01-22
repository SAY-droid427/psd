import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


const GUEST = {name:'Guest',email:'',img:''};


export default new Vuex.Store({

  state: {
     auth :{
       token : JSON.parse(localStorage.getItem('user-token')) || '',
       status : '' 
     },
     user : JSON.parse(localStorage.getItem('userProfile')) || GUEST
  },
  mutations: {
      GAUTH_REQUEST : (state)=>{
        state.auth.status = 'loading'
      },
      GAUTH_SUCCESS : (state,user_token)=>{
        state.auth.status = 'success'
        state.auth.token = user_token
      },
      GAUTH_ERROR : (state,err)=>{
        state.auth.status = 'error'
        state.auth.error = err
      },
      GAUTH_LOGOUT :(state)=>{
        state.auth.status='guest'
        state.auth.token=''
        state.user=GUEST;
      }
      
  },
  actions: {

    GAUTH_REQUEST : ({commit,dispatch})=>{
      console.log('in action');

     
      return new Promise((resolve,reject)=>{

            dispatch('GAUTH_LOGOUT') // temp
            commit('GAUTH_REQUEST')
            
             Vue.prototype.$gAuth.signIn().then((googleUser)=>{
              
             // const userProfile = googleUser.getBasicProfile();

              const user_token = googleUser.getAuthResponse();
              
              
            
             // console.log(googleUser.getAuthResponse(),"\n",googleUser.getId(),"\n",googleUser.getBasicProfile())

              localStorage.setItem('user-token',JSON.stringify(user_token));
             
              
              commit('GAUTH_SUCCESS',user_token);

              //Redirect here!

              resolve(googleUser);
              
        }).catch(err=>{
            commit('GAUTH_ERROR',err)
            localStorage.removeItem('user-token');
            reject(err);
        })
      }) 
    },

    GAUTH_LOGOUT : ({commit})=>{
      return new Promise((resolve)=>{
        commit('GAUTH_LOGOUT')
        localStorage.removeItem('user-token');
        resolve();
      })
    }

  },
  modules: {
  }
})
