<template>
  <v-footer padless>
    <v-card flat tile dark width="100%" class="text-center" :style="bg">
      <v-card-text class="d-flex justify-center">
        <v-img
          :src="require('../assets/footer-logo.png')"
          max-width="150px"
          aspect-ratio="1"
        ></v-img>
      </v-card-text>
      <v-card-text>
        <v-row class="white--text">
          <v-col cols="4">
            <div>ADDRESS</div>
            <div>地址</div>
            <div>天津市津南区双港科技产业园区丽港园7号</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="4">
            <div>PHONE</div>
            <div>电话</div>
            <div>15982391853</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="4">
            <div>E-MAIL</div>
            <div>邮箱</div>
            <div>tjfozoon@126.com</div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text id="box-text">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <footer-nav></footer-nav>
    </v-card>
  </v-footer>
</template>

<script>
import FooterNav from "../components/FooterNav";
export default {
  components: { FooterNav },
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      bg: {
        backgroundImage: "url(" + require("@/assets/footer_bg.png") + ")",
        backgroundRepeat: "repeat",
        width: "100%",
      },
    };
  },
};
</script>

<style scoped>
</style>