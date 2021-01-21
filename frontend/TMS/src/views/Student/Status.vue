<template>
    <div class="container">
      <Deadlines />
        <h1 class="my-5">Transfer Request</h1>
        <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1">
          Submitted
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">
          Approved by PS Division
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Approved by Supervisor
        </v-stepper-step>

        <v-divider></v-divider>

          <v-stepper-step step="4">
          Approved by HOD
        </v-stepper-step>

      </v-stepper-header>
    </v-stepper>
        <div class="row mx-0 justify-center">
            <h1 class="my-6">Comments From Authorities</h1>
        </div>
        <div class="row mx-0 justify-center">
           <StatusComments />
        </div>
    </div>
</template>

<script>
import Deadlines from "../../components/Deadlines";
import StatusComments from "../../components/StatusComments";
export default {
  name:"Status",
  components:{
    Deadlines,
    StatusComments
  },
  data(){
    return {
      milestones:[
        {
          id:3,
          status:"HOD"
        },
        {
          id:2,
          status:"Supervisor"
        },
        {
          id:4,
          status:"PS Division"
        }
      ]
    }
  }

}
</script>

<style scoped>
.container {
    padding-top:60px;
    text-align: center;
}

.justify-center {
    justify-content: center;
}

.font-weight-400 {
    font-weight: 400;
}

.detail {
    margin-top: 10rem;
}
</style>