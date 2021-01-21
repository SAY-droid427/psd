<template>
   <div class="container">
     <h1 class="my-5">PS To TS Transfers</h1>
    <Request v-bind:items="items" />
   </div>
</template>

<script>
import Request from '../../components/Request'
export default {
  components: {
        Request
    },
    data() {
        return {
            tab: null,
            items: [
                { name: 'Not Forwarded', data: [{ applicant__user__username: "2018B4A70018G", applicant__user__first_name: "Ritik" }, { applicant__user__username: "2018B4A70018G", applicant__user__first_name: "Ritik" }] }, { name: 'Forwarded', data: [{ applicant__user__username: "2019A7PS0000", applicant__user__first_name: "Kanishq" }] }
            ],
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