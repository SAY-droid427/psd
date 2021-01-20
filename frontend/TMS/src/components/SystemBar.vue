<template>
    <div>
        <v-system-bar dark color="primary darken-2" height="34">
            <div class="ml-5">Having Troubles ?</div>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                <a href="mailto:abc@abc.com" class="ml-3" v-bind="attrs" v-on="on">
                        <v-icon>mdi-email</v-icon> 
                        developers.psd@gmail.com
                </a>
                </template>
                <span>Please note, no query regarding application will be entertained on this email, only queries related to working of website will be entertained on this email. While submitting any query please clearly mention your name, roll number and email in the query.</span>
            </v-tooltip>
            
            <v-spacer></v-spacer>
            <div class="mr-5">Welcome , 2019A7PS037G</div>
        </v-system-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    color: #fff !important;
    text-decoration: none;
}
</style>