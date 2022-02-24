<template>
  <v-container v-if="pictures">
    <v-img
      v-for="pic in pictures.filter((item) => item.type == '02')"
      :key="pic.p_id"
      :src="require('@/assets/images/' + pic.pic_name)"
      aspect-ratio="1"
      class="grey lighten-2 ma-5"
      width="120"
    >
    </v-img>
  </v-container>
</template>
<script>
export default {
  created() {
    console.log(this);
  },
  props: ["pictures"],
};
</script>
<style scoped>
</style>