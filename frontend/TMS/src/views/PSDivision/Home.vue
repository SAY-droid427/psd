<template>
    <div class="container">
      <Deadlines />
      <v-row>
          <v-col cols="12">
             <v-card  class="mx-auto" max-width="900" outlined>
               <v-row align="center" justify="space-around">
                 <v-col cols="6">
                  <v-btn  color="black" dark class="ml-auto">Populate database</v-btn>   
                </v-col>
                <v-col cols="6">
                 <router-link to="/psd/transfer" class="link"> <v-btn  color="black" dark class="mr-auto">Download Transfers</v-btn></router-link>   
                </v-col>
               </v-row>
               <v-divider></v-divider>
              <v-card-subtitle>
                 <div class="headline text--primary">Transfer Form Control</div>
             </v-card-subtitle>
             <v-divider></v-divider>
            <v-card-text>
               <v-row v-for="form in forms" :key="form.id" class="mr-auto justify-center">
                   <v-row>
                   <v-col cols=6>
                       <h3 class="my-5">{{form.title}}</h3>
                     </v-col>
                     <v-col cols=6 >
                         <v-switch label="Enable" v-model="form.status" color="black"></v-switch>
                     </v-col>
                   </v-row>
                   <v-container v-if="form.status">
                     <v-row>
                       <v-col cols="6">
                         <strong>{{form.title}} Deadline</strong>
                       </v-col>
                       <v-col cols="6">
                          <DatePicker />
                       </v-col>
                     </v-row>
                   </v-container>
                 </v-row>
                <v-form>
                  <v-container>
                    <v-row>
                          <v-col cols="6"><strong>Message To Be Displayed</strong></v-col>
                      <v-col cols="6">
                        <v-text-field height="150"  placeholder="" outlined v-model="msg" ></v-text-field>  
                      </v-col>     
                    </v-row>
                 </v-container>
                 <v-row align="center" justify="space-around">
                   <v-col cols=12>
                     <v-btn color="black" large dark>Update</v-btn>
                   </v-col>
                 </v-row>
              </v-form>
            </v-card-text>
            </v-card>
          </v-col>
      </v-row>
    </div>
</template>

<script>
import Deadlines from "../../components/Deadlines";
import DatePicker from "../../components/DatePicker";
export default {
    components:{
        Deadlines,
        DatePicker
    },
     data () {
      return {
       forms:[
           {
               id:1,
               title:"Enable PS to TS form",
               status:false
           },
           {
               id:2,
               title:"Enable TS to PS form",
               status:false
           }
       ],
       msg:""  
     
      }
    
    },
   
    
}
</script>

<style scoped>
.container {
    text-align: center;
    padding-top: 60px;
}

.justify-center {
    justify-content: center;
}

.justify-space-around {
    justify-content: space-around;
}

.font-weight-400 {
    font-weight: 400;
}

.detail {
    margin-top: 10rem;
}
.link{
  text-decoration: none;
}



</style>