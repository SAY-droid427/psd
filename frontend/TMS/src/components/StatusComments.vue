<template>
      <v-form>
    <v-container>
      <v-row v-for="comment in comments" v-bind:key="comment.id">
            <v-col cols="4"><strong>{{comment.authority}}</strong></v-col>
        <v-col cols="8">
          <v-text-field height="150"
            placeholder=""
            outlined filled
          ></v-text-field>  
        </v-col>     
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name:"StatusComments",
    data:function(){
        return{
            comments:[
                {
                    id:1,
                    authority:"Supervisor",
                    comments:""
                },
                {
                    id:2,
                    authority:"Head of Department"
                },
                {
                    id:3,
                    authority:"PS Division"
                }
            ]
        }
    }
}
</script>

<style scoped>
 .v-text-field{
      width: 500px;
}

</style>