<template>
  <div class="d-flex">
    <div class="ma-3">
      <v-img
        v-if="item.pic_name"
        :src="require('@/assets/images/' + item.pic_name)"
        class="my-3"
        contain
        height="100"
        width="100"
      />
    </div>
    <div class="text-left d-flex flex-column justify-center">
      <div class="text-h6 font-weight-black ml-1 mb-1">
        {{ item.name }}
      </div>
      <div>
        <v-chip class="indigo mr-2 white--text" label>
          <v-icon dark left small>mdi-hexagon-slice-5</v-icon>
          {{ item.size }}</v-chip
        >
        <v-chip class="pink mr-2 white--text" label v-if="item.taste">
          <v-icon dark left small>mdi-cupcake</v-icon>
          {{ item.taste }}</v-chip
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>