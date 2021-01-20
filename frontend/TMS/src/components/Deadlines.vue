<template>   
    <div class="container">       
         <h3 v-for="deadline in deadlines" v-bind:key="deadline.id" >{{deadline.id}}. Deadline for {{deadline.subject}}-Date:{{deadline.date}} Time:{{deadline.time}}</h3>   
    </div>        

</template>

<script>
export default {
    name:"Deadlines",
    data:function(){
        return{
            deadlines:[
                {
                    id:1,
                    subject:"PS to TS transfer Application",
                    date:"2021-02-04",
                    time:"23:59:59"
                },
                {
                    id:2,
                    subject:"TS to PS Transfer Application",
                    date:"2021-02-05",
                    time:"13:00:00"
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
    background-color: rgb(185, 222, 246);
    text-align: center;
}

</style>