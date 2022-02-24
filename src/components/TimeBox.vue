<template>
  <div class="d-flex flex-row">
    <v-col md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="请选择日期"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            确定
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

    <div class="ma-5">
      <v-col>
        <v-select
          prepend-icon="mdi-calendar-clock"
          :items="items"
          label="请选择时间区域"
          dense
        ></v-select>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeBox",
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      items: ["10:00--12:00", "14:00--16:00"],
    };
  },
};
</script>

<style scoped>
</style>