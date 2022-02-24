<template>
  <div
    class="d-flex flex-column justify-space-between align-center grey--text st"
  >
    <span class="">
      <v-icon class="text-h1" :color="iconColor">{{ icon }}</v-icon>
    </span>
    <div class="text-subtitle-1">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <div class="text d-flex">
      {{ text }}
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactWay",
  data() {
    return {};
  },
  props: ["icon", "iconColor", "title", "subtitle", "text"],
};
</script>

<style scoped>
.st {
  height: 180px;
}
.subtitle {
  font-size: 17px;
}
.text {
  font-size: 8px;
}
</style>
