<template>
   <div>
     <v-app-bar
      color="rgb(1,165,165)"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        
          <v-list-item>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Users Profile</v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-title>Groups Page</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     <div class="container">
         <v-card class="mx-auto" max-width="700">
             <v-card-text>
                 <div class="display-1 text--primary">App 1</div>
             </v-card-text>
             <v-card-actions>
                 <v-switch value input-value="true"></v-switch>
             </v-card-actions>
         </v-card>
     </div>   
          <div class="container">
         <v-card class="mx-auto" max-width="700">
             <v-card-text>
                 <div class="display-1 text--primary">App 2</div>
             </v-card-text>
             <v-card-actions>
                 <v-switch value input-value="true"></v-switch>
             </v-card-actions>
         </v-card>
     </div>   
  </div>
</template>
<script>
export default {
    name:"Dashboard",
    data(){
        return{
            drawer:false
        }
    }    
}
</script>
<style scoped>

</style>