<template>
    <div class="container">
        <h1 class="my-5">Transfer Management System</h1>
        <div class="row mx-0 justify-center">
            <PS2TS />
            <TS2PS />
            <!-- <v-btn color="primary" dark x-large class="mx-4 mt-5">
                PS to TS Transfer
            </v-btn>
            <v-btn color="primary" dark x-large class="mx-4 mt-5">
                TS to PS Transfer
            </v-btn> -->
        </div>
        <div class="detail">
            <h2>There are two types of Transfers</h2>
            <div class="mt-5">
                <h2 class="font-weight-400">1) PS to TS </h2>
                <h2 class="font-weight-400">2) TS to PS</h2>
            </div>
            <p class="text-red note mt-5">Note: Only one type of a form can be filled. After this attempt, no further requests will be considered. Kindly fill the form judiciously.</p>
        </div>
    </div>
</template>

<script>
import PS2TS from '../../components/PS2TS'
import TS2PS from '../../components/TS2PS'
export default {
    components: {
        PS2TS,
        TS2PS
    },

    data: () => ({
        //
    }),
};
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

.font-weight-400 {
    font-weight: 400;
}

.detail {
    margin-top: 10rem;
}
</style>