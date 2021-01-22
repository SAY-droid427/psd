<template>
  <v-row>
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y 
        min-width="auto" 
      >
        <template v-slot:activator="{ on, attrs }" >
          <v-text-field
            v-model="date"
            label="Select Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on" 
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable 
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="indigo"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="indigo"
            @click="$refs.menu.save(date)"
          >
            SAVE
          </v-btn>
        </v-date-picker>
      </v-menu>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
    props:['title']
  }
</script>

