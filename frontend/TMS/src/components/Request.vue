<template>
    <div>
        <div class="justify-center">
                <v-tabs v-model="tab" fixed-tabs background-color="indigo" dark slider-size=3>
                    <v-tabs-slider color="white"></v-tabs-slider>
    
                    <v-tab v-for="item in items" :key="item">
                        {{ item.name }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item">
                        <v-card flat>
                            <v-expansion-panels focusable>
                                <v-expansion-panel v-for="(data,i) in item.data" :key="i">
                                    <v-expansion-panel-header>{{data.applicant__user__username}}</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <div v-for="(value, name) in data" :key="value" class="row mx-0 justify-center">
                                            <div class="col-lg-4 text-left">{{name}}</div>
                                            <div class="col-lg-4 text-left">{{value}}</div>
    
                                        </div>
                                        <div class="col-lg-10 mx-auto">
                                            <v-textarea rows="4" outlined name="input-7-4" label="Enter Comments"></v-textarea>
                                            <div>
                                                <v-btn color="success" class="mx-2">
                                                    Recommend
                                                </v-btn>
                                                <v-btn color="error" class="mx-2">
                                                    Not Recommend
                                                </v-btn>
                                            </div>
    
                                        </div>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </div>
</template>

<script>
export default {
    props : ['items'],
    data() {
        return {
            tab: null,
        }
    },
}
</script>

<style scoped>
.container {
    text-align: center;
    padding:0px !important;
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