<template>
  <v-tabs centered color="green">
    <v-tab v-for="item in links" :key="item.to" :to="item.to">
      {{ item.title }}
    </v-tab>
  </v-tabs>
</template> 

<script>
import aboutRouter from "@/router/aboutRouter";
export default {
  name: "FooterNav",
  created() {
    // console.log(aboutRouter);
    // console.log(this);

    this.links = aboutRouter
      .filter((item) => item.meta)
      .map((item) => ({ title: item.meta.title, to: item.path }));
      // console.log(this.links);
  },
  data: () => ({
    links: [],
  }),
};
</script>