<template>
  <v-app-bar app height="100" color="white" elevate-on-scroll>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('../assets/logo.png')"
        transition="scale-transition"
      />
    </div>
    <v-spacer></v-spacer>
    <v-slide-group>
      <v-tabs height="100" icons-and-text color="primary">
        <v-slide-item style="width: 130px">
          <v-tab to="/home">
            <v-icon x-large class="primary--text">mdi-home</v-icon>
          </v-tab>
        </v-slide-item>
        <v-slide-item
          style="width: 130px"
          v-for="item in navbar"
          :key="item.to"
        >
          <v-tab :to="item.to">
            <div class="pt-4 primary--text">
              <h4>{{ item.title }}</h4>
              <div class="caption">{{ item.subtitle }}</div>
            </div>
          </v-tab>
        </v-slide-item>
      </v-tabs>
    </v-slide-group>

    <v-spacer></v-spacer>
    <v-btn
      tile
      color="#43bb81"
      dark
      class="mr-3 px-5"
      elevation="0"
      to="/register"
      v-if="!isLogin()"
      >注册</v-btn
    >
    <v-btn
      tile
      color="#d6af66"
      dark
      class="px-5 mr-3"
      elevation="0"
      to="/login"
      v-if="!isLogin()"
      >登录</v-btn
    >
    <span
      class="secondary--text text-overline d-flex align-center"
      v-if="isLogin()"
      >欢迎您
      <strong class="text-subtitle-1 ml-2 mr-2">{{
        $store.getters.user.username
      }}</strong>
    </span>
    <v-btn icon color="secondary" class="mr-2" v-if="isLogin()" @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-badge
      bordered
      color="error"
      :content="$store.getters.cartItems.length"
      overlap
      class="mr-2"
      v-if="isLogin()"
      :value="$store.getters.cartItems.length > 0"
    >
      <v-btn tile color="secondary" dark class="px-5" elevation="0" to="/order">
        <v-icon left>mdi-cart-variant</v-icon>
        购物车
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this);
  },

  data: () => ({
    navbar: [
      { title: "蛋糕系列", subtitle: "CAKE", to: "/cake" },
      { title: "甜品礼盒", subtitle: "GIFT", to: "/gift" },
      { title: "企业专区", subtitle: "BUSINESS", to: "/business" },
      { title: "会员中心", subtitle: "MEMBER", to: "/member" },
      { title: "联系我们", subtitle: "CONTACT", to: "/contact" },
    ],
  }),
  methods: {
    isLogin() {
      return this.$store.getters.user.login;
    },
    logout() {
      window.sessionStorage.removeItem("userdata");
      this.$store.commit("getUserdata", {});
    },
  },
};
</script>

<style scoped>
</style>