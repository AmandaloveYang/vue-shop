<template>
  <v-footer height="780" :style="bg" tag="footer" padless>
    <div id="main">
      <div id="mainimg">
        <v-img :src="require('../assets/bgc.jpg')"></v-img>
      </div>
    </div>
    <v-card
      :style="bg"
      flat
      tile
      class="ighten-1 white--text text-center"
      id="v-card"
    >
      <div id="footer-msg">
        <ul class="msg">
          <li>ADDRESS</li>
          <li>地址</li>
          <li>天津市津南区双港科技产业园区丽港园7号</li>
        </ul>

        <ul class="msg">
          <li>PHONE</li>
          <li>电话</li>
          <li>15982391853</li>
        </ul>

        <ul class="msg">
          <li>E-MAIL</li>
          <li>邮箱</li>
          <li>tjfozoon@126.com</li>
        </ul>
      </div>
      <v-card-text id="box-text">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <!-- <v-divider></v-divider> -->
      <!-- <v-card-text class="white--text" id="footer-nav">
        <footernav></footernav>
      </v-card-text> -->
    </v-card>
  </v-footer>
</template>
<script>
import footernav from "../components/FooterNav";
export default {
  name: "ShopFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    bg: {
      backgroundImage: "url(" + require("@/assets/footer_bg.png") + ")",
      backgroundRepeat: "repeat",
    },
  }),
  components: {
    footernav,
  },
};
</script>
<style scoped>
#footer-bigbox {
  width: 100%;
}
li {
  list-style: none;
}
#main {
  width: 100%;
  display: flex;
  justify-content: center;
}
#mainimg {
  width: 300px;
  height: 300px;
  margin-top: -100px;
}

#footer-msg {
  width: 100%;
  display: flex;
  margin-top: -200px;
  padding: 0px 300px;
}
.msg {
  width: 100%;
  flex-grow: 1;
  height: 60px;
  font-size: 15px;
  margin-bottom: 20px;
}
#v-card {
  width: 100%;
}

#footer-nav {
  height: 100px;
  width: 100%;
}
foot1 {
  height: 200px;
}
</style>