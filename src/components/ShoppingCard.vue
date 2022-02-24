<template>
  <v-card
    class="mx-auto my-2"
    max-width="350"
    @click="toBuyPage"
    :ripple="false"
  >
    <div class="pa-5">
      <v-img
        :src="require('../assets/images/' + imgsrc)"
        aspect-ratio="1"
      ></v-img>
    </div>
    <v-card-title class="pb-0">{{ title }}</v-card-title>
    <v-card-text>
      <div class="text-subtitle-1" style="min-height: 56px">{{ subtitle }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" label text v-if="isHot">
        热卖中
        <v-icon>mdi-fire</v-icon>
      </v-btn>
      <v-btn color="indigo" label text v-if="isNew">
        新品
        <v-icon>mdi-new-box</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon large color="secondary" :to="'/buy/' + id">
        <v-icon>mdi-cart-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    toBuyPage() {
      this.$router.push("/buy/" + this.id);
    },
  },
  props: {
    imgsrc: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    subtitle: {
      type: String,
      default: () => "",
    },
    isHot: {
      type: Boolean,
      default: () => false,
    },
    isNew: {
      type: Boolean,
      default: () => false,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style>
</style>