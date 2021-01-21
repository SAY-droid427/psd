<template>
    <div class="container">
      <Deadlines />
      <v-row>
          <v-col cols="12">
             <v-card  class="mx-auto" max-width="900" outlined>
               <v-row align="center" justify="space-around">
                 <v-col cols="6">
                  <v-btn depressed color="primary">Populate database</v-btn>   
                </v-col>
                <v-col cols="6">
                  <v-btn depressed color="primary">Download Transfers</v-btn>   
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
                         <v-switch label="on" v-model="form.status"></v-switch>
                     </v-col>
                   </v-row>
                   <v-container v-if="form.status">
                   <DatePicker v-bind:title="form.title"/>
                   </v-container>
                 </v-row>
                <v-form>
                  <v-container>
                    <v-row>
                          <v-col cols="6"><strong>Message To Be Displayed</strong></v-col>
                      <v-col cols="6">
                        <v-text-field height="150"  placeholder="" outlined ></v-text-field>  
                      </v-col>     
                    </v-row>
                 </v-container>
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



</style>