<template>
  <v-app>
    <shop-header></shop-header>
    <v-main v-scroll="onScroll">
      <router-view> </router-view>
      <v-fab-transition>
        <v-btn
          color="indigo"
          dark
          fixed
          bottom
          right
          fab
          large
          v-if="scrollTop > 200"
          @click="$vuetify.goTo(0, { duration: 500 })"
        >
          <v-icon>mdi-rocket</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>
    <shop-footer v-if="!$route.meta.hideFooter"></shop-footer>
  </v-app>
</template>

<script>
import ShopHeader from "@/layout/ShopHeader";
import ShopFooter from "@/layout/ShopFoooter";
import ShopSidebar from "@/layout/ShopSidebar";
export default {
  name: "App",
  components: {
    ShopHeader,
    ShopFooter,
    ShopSidebar,
  },
  mounted() {
    this.scrollTop = document.documentElement.scrollTop;
    this.initUserData();
  },
  data: () => ({
    scrollTop: 0,
  }),
  methods: {
    onScroll(e) {
      this.scrollTop = document.documentElement.scrollTop;
    },
    async initUserData() {
      const userdata = window.sessionStorage.userdata;
      if (userdata) {
        this.$store.commit("getUserdata", JSON.parse(userdata));
        let res = await this.$axios.post("/api/getCart.do", {
          u_id: this.$store.getters.user.u_id,
        });
        this.$store.commit("getCartItems", res.data);
      }
    },
  },
};
</script>
