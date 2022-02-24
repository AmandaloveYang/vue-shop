<template>
  <div>
    <v-img src="../assets/company/5.jpg"></v-img>
    <router-link to="/business/customization">
      <v-img src="../assets/company/2.jpg"></v-img>
    </router-link>

    <router-link to="/business/teabreak">
      <v-img src="../assets/company/3.jpg"></v-img>
    </router-link>
    <router-link to="/home">
      <v-img src="../assets/company/4.jpg"></v-img>
    </router-link>

    <router-link to="/business/welfare">
      <v-img src="../assets/company/1.jpg"></v-img
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "Bussiness",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
</style>
