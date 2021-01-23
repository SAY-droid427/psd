<template>
    <div class="container">
         <v-card  class="mx-auto" max-width="900" outlined>
             <v-card-subtitle class="subtitle"><h1 class="my-3">Download Transfers</h1></v-card-subtitle>
             <v-divider></v-divider>
             <v-card-text>
                 <v-row>
                     <v-col cols="4">
                        <strong> Select Date Range</strong>
                     </v-col>
                     <v-col cols="4">                         
                         <DatePicker />
                     </v-col>
                     <v-col cols="4">
                         <DatePicker />
                     </v-col>
                 </v-row>
                 <v-row>
                     <v-col cols="4">
                         <strong>Select Type:</strong>
                     </v-col> 
                     <v-col cols="8">
                      <v-radio-group v-model="radioGroup">
                          <v-radio
                            label="PS To TS" 
                             color="indigo"  v-on:click="clicked1"
                          ></v-radio>
                          <v-col cols="6"> 
                         <v-list v-if="toggle1">
                         <v-col cols="12">
                             <v-checkbox v-model="type11" label="PS-PS to PS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type12" label="PS-PS to PS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type13" label="PS-PS to TS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type14" label="TS-PS to TS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                         </v-list>
                     </v-col>
                           <v-radio
                            label="TS To PS"  v-on:click="clicked2"
                            color="indigo" 
                          ></v-radio>
                           <v-col cols="6"> 
                         <v-list v-if="toggle2">
                         <v-col cols="12">
                             <v-checkbox v-model="type21" label="TS to PS(Single Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type22" label="PS-TS to PS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type23" label="TS-TS to TS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                         </v-list>
                     </v-col>
                        </v-radio-group>   
                     </v-col>             
                 </v-row>
                 <v-divider></v-divider>
                 <v-row>
                     <v-col cols="12">
                     <v-btn  color="indigo" dark class="mx-auto">Download</v-btn>  
                     </v-col> 
                 </v-row>
             </v-card-text>
         </v-card>

    </div>
</template>

<script>
import DatePicker from "../../components/DatePicker";
export default {
    components:{
      DatePicker
    },
    data () {
      return {
          radioGroup: 1,
          type11:0,
          type12:0,
          type13:0,
          type14:0,
          type21:0,
          type22:0,
          type23:0,
          toggle1:0,
          toggle2:0
       
      }
    },
    methods:{
        clicked1(){        
            this.toggle1=!this.toggle1;
            if(this.toggle1)
            this.toggle2=0;


        },
        clicked2(){
            this.toggle2=!this.toggle2;
            if(this.toggle2)
            this.toggle1=0;

        }
 

    }

}
</script>

<style scoped>
 .container {
    text-align: center;
    padding-top: 140px;
}
.subtitle{
    background-color: rgb(109, 69, 218);
}
</style>