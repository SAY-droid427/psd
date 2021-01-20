<template>
<div>
  
  <v-app>
    <SystemBar />
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import SystemBar from './components/SystemBar'
export default {
  name: 'App',

  components: {
   Header,SystemBar,Footer
    
  },

  data: () => ({
    //
  }),
};
</script>
