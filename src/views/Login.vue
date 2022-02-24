<template>
  <v-container
    fluid
    class="d-flex justify-center align-center primary fill-height"
  >
    <v-card width="990" height="550">
      <v-card-text class="text-center pa-0">
        <v-row>
          <v-col cols="4" class="pa-9 pr-3">
            <v-img
              class="shrink mr-2"
              height="80"
              contain
              :src="require('../assets/logo.png')"
              transition="scale-transition"
            />
            <div class="text-h5 mt-2">会员登录</div>
            <div class="text-button mb-2">MEMBER LOGIN</div>
            <v-text-field
              label="用户名"
              color="primary"
              outlined
              prepend-inner-icon="mdi-account-circle"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="密码"
              color="primary"
              outlined
              prepend-inner-icon="mdi-key"
              type="password"
              v-model="password"
            ></v-text-field>
            <div class="d-flex align-center mb-3">
              <v-divider></v-divider>
              <div class="text-caption font-weight-bold mx-6">其他方式登录</div>
              <v-divider></v-divider>
            </div>
            <v-chip
              class="ma-1"
              color="blue"
              text-color="white"
              @click="snackbar = true"
            >
              <v-avatar left>
                <v-icon>mdi-qqchat</v-icon>
              </v-avatar>
              QQ&nbsp;&nbsp;
            </v-chip>
            <v-chip
              class="ma-1"
              color="green"
              text-color="white"
              @click="snackbar = true"
            >
              <v-avatar left>
                <v-icon>mdi-wechat</v-icon>
              </v-avatar>
              微信
            </v-chip>
            <v-chip
              class="ma-1"
              color="pink"
              text-color="white"
              @click="snackbar = true"
            >
              <v-avatar left>
                <v-icon>mdi-google</v-icon>
              </v-avatar>
              Google
            </v-chip>

            <v-btn
              block
              tile
              class="primary mt-3 mb-5 dark white--text py-6 elevation-0"
              @click="login"
              >登录</v-btn
            >
            <div class="text-caption font-weight-bold">
              还没有账号？请点击
              <span class="text-decoration-underline">
                <a href="#/Register" class="secondary--text">注册账号</a>
              </span>
            </div>
          </v-col>
          <v-col cols="8">
            <v-carousel
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="550"
              cycle
            >
              <v-carousel-item>
                <v-img
                  :src="require('../assets/images/CP_012.jpg')"
                  cover
                  height="550"
                  class="d-flex justify-center"
                >
                  <v-sheet
                    class="d-flex justify-center align-start flex-column pa-10"
                    color="rgba(0, 0, 0, 0.5)"
                    height="550"
                  >
                    <div class="text-h2 font-weight-bold primary--text mb-7">
                      FOZOON：精致
                    </div>
                    <div class="text-subtitle-1 white--text text-left mb-7">
                      <span>
                        <span class="text-h4">
                          <v-icon class="pb-4" color="primary"
                            >mdi-format-quote-open</v-icon
                          >精致<v-icon class="pb-4" color="primary"
                            >mdi-format-quote-close</v-icon
                          >
                        </span>
                      </span>
                      是法式甜品的文化体现；FOZOON法颂紧抓这一精髓，坚持正宗传承。法式甜品文化，自有其独特的法兰西浪漫情调和惬意的轻松，这为小资们所追崇，也是FOZOON法颂挑拨大众味蕾、促其感受生活魅力的诀窍。不经意的舌尖诱惑，不仅仅是味蕾的蠢蠢欲动，还有清风拂面的生活向往，时光就此定格是多么的美好。
                    </div>
                    <v-btn x-large tile color="secondary" dark elevation="0">
                      <v-icon>mdi-text-box-search</v-icon>
                      了解更多</v-btn
                    >
                  </v-sheet>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :src="require('../assets/images/CG_051.jpg')"
                  cover
                  height="550"
                  class="d-flex justify-center"
                >
                  <v-sheet
                    class="d-flex justify-center align-start flex-column pa-10"
                    color="rgba(0, 0, 0, 0.5)"
                    height="550"
                  >
                    <div class="text-h2 font-weight-bold primary--text mb-7">
                      FOZOON：创新
                    </div>
                    <div class="text-subtitle-1 white--text text-left mb-7">
                      <span>
                        <span class="text-h4">
                          <v-icon class="pb-4" color="primary"
                            >mdi-format-quote-open</v-icon
                          >创新<v-icon class="pb-4" color="primary"
                            >mdi-format-quote-close</v-icon
                          >
                        </span>
                      </span>
                      是民族进步和社会发展的不竭动力；FOZOON法颂传承正宗法式技艺，不囿于传统制作手法和口味止步不前，而是在新技术、新口味、新产品等方面不断创新，FOZOON法颂志于打造独有的甜品文化和产品特色。
                    </div>
                    <v-btn x-large tile color="secondary" dark elevation="0">
                      <v-icon>mdi-text-box-search</v-icon>
                      了解更多</v-btn
                    >
                  </v-sheet>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-snackbar top color="error" v-model="snackbar">
      <v-icon x-large>mdi-emoticon-lol</v-icon>
      你不会真以为可以用这种方式登录吧？
      <template v-slot:action="{ attrs }">
        <v-btn color="secondary" v-bind="attrs" @click="snackbar = false">
          你说了算
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      top
      :color="loginSnackbarData.color"
      v-model="loginSnackbarData.show"
    >
      <v-icon x-large>{{ loginSnackbarData.icon }}</v-icon>
      {{ loginSnackbarData.tip }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          v-bind="attrs"
          @click="loginSnackbarData.show = false"
        >
          好的
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
  data() {
    return {
      username: "",
      password: "",
      snackbar: false,
      loginSnackbarData: {
        icon: "",
        color: "",
        show: false,
        tip: "",
      },
    };
  },
  methods: {
    async login() {
      const [username, password] = [this.username, this.password];
      let res = await this.$axios.post("/api/login.do", { username, password });
      if (res.data.login) {
        this.loginSnackbarData = {
          icon: "mdi-emoticon-happy",
          color: "primary",
          show: true,
          tip: "登录成功",
        };
        setTimeout(() => {
          this.$store.commit("getUserdata", res.data);
          window.sessionStorage.setItem("userdata", JSON.stringify(res.data));
          this.$router.push({ path: "/home" });
        }, 1000);
      } else {
        this.loginSnackbarData = {
          icon: "mdi-emoticon-lol",
          color: "error",
          show: true,
          tip: "你输入的账号或者密码错误了，也有可能都错了",
        };
      }
    },
  },
};
</script>

<style scoped>
</style>