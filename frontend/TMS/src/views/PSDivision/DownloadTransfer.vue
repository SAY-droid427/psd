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
                            value="" color="indigo"
                          ></v-radio>
                          <v-col cols="6"> 
                         <v-list>
                         <v-col cols="12">
                             <v-checkbox v-model="type1" label="PS-PS to PS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type1" label="PS-PS to PS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type1" label="PS-PS to TS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type1" label="TS-PS to TS-TS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                         </v-list>
                     </v-col>
                           <v-radio
                            label="TS To PS"
                            value=""  color="indigo"
                          ></v-radio>
                           <v-col cols="6"> 
                         <v-list>
                         <v-col cols="12">
                             <v-checkbox v-model="type1" label="TS to PS(Single Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type1" label="PS-TS to PS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
                          </v-col>
                          <v-col cols="12">
                             <v-checkbox v-model="type1" label="TS-TS to TS-PS(Dual Degree)" color="indigo"></v-checkbox>                        
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
          m1:false,
          m2:false,
          types:[

              {
                  id:3,
                  name:"PS-PS to TS-PS",
                  status:false
              },
              {
                  id:4,
                  name:"PS-TS to TS-TS",
                  status:false
              },
              {
                  id:5,
                  name:"PS-TS to PS-PS"
              }
          ]
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