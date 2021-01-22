<template>
<div class="container">
     <h1 class="my-5">Transfer Management</h1>
      <v-tabs fixed-tabs background-color="blue" dark >
    <v-tab v-for="type in types" v-bind:key="type.id">
        {{type.transfer}}        
    </v-tab>      
  </v-tabs>
  <Request v-bind:items="items" />
</div>
</template>

<script>
import Request from "../../components/Request";
export default {
    components:{
      Request
    },
     data() {
        return {
            tab: null,
            items: [
                { name: 'Not Forwarded', data: [{ applicant__user__username: "2018B4A70018G", applicant__user__first_name: "Ritik" }, { applicant__user__username: "2018B4A70018G", applicant__user__first_name: "Ritik" }] }, { name: 'Forwarded', data: [{ applicant__user__username: "2019AAPS000G", applicant__user__first_name: "Sayani" }] }
            ],
            types:[
                {
                    id:1,
                    transfer:"PS to TS Transfer"
                },
                {
                    id:2,
                    transfer:"TS to PS Transfer"
                }
            ]
        }
    },
    
    
}
</script>

<style scoped>
.container {
    text-align: center;
    padding-top: 140px;
}

.text-red {
    color: red;
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