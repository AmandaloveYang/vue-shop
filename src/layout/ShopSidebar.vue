<template>
  <v-btn color="primary" fixed bottom right fab large id="btn" @click="backTop"
    >top3311</v-btn
  >
</template>

<script>
export default {
  data() {
    return {
      txt: true,
    };
  },
  components: {},
  methods: {
    backTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
#btn {
  z-index: 9999;
  position: absolute;
  right: 0;
}
</style>
