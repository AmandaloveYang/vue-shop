<template>
  <v-container
    fluid
    class="d-flex justify-center align-center secondary fill-height"
  >
    <v-card width="990" height="550">
      <v-card-text class="text-center pa-0">
        <v-row>
          <v-col cols="8">
            <v-img
              :src="require('../assets/images/CG_041.png')"
              cover
              max-height="550"
              class="d-flex justify-center"
            >
              <v-sheet
                class="d-flex justify-center align-start flex-column pa-10"
                color="rgba(0, 0, 0, 0.6)"
                height="550"
              >
                <div class="text-h2 font-weight-bold secondary--text mb-7">
                  精选蛋糕 & 典藏甜品
                </div>
                <div class="text-subtitle-1 white--text text-left mb-7">
                  FOZOON法颂，传承正宗法式甜品古法手工制作精髓，精心打造坊间地道
                  古早口碑源味，法式浪漫情调和午后惬意定格在静好时光中。坚守「健康本色」生活理念，苛求「道地食材」
                  可追溯：法国鲜乳奶油、比利时巧克力、日本阳光小麦粉、美国榛子、意大利芝士......
                </div>
                <v-btn x-large tile color="primary" dark elevation="0">
                  <v-icon>mdi-text-box-search</v-icon>
                  了解更多</v-btn
                >
              </v-sheet>
            </v-img>
          </v-col>
          <v-col cols="4" class="pa-9 pl-3">
            <v-img
              class="shrink mr-2"
              height="80"
              contain
              :src="require('../assets/logo.png')"
              transition="scale-transition"
            />
            <div class="text-h5 mt-2">会员注册</div>
            <div class="text-button mb-2">MEMBER REGISTRATION</div>
            <v-form v-model="valid">
              <v-text-field
                label="用户名"
                color="secondary"
                outlined
                prepend-inner-icon="mdi-account-circle"
                v-model="username"
                :rules="[(v) => !!v || '请输入用户名']"
              ></v-text-field>
              <v-text-field
                label="电话号码"
                color="secondary"
                outlined
                prepend-inner-icon="mdi-cellphone"
                v-model="phone"
                :rules="[
                  (v) => !!v || '请输入电话号码',
                  (v) =>
                    /^[1][3,4,5,7,8][0-9]{9}$/.test(v) || '电话号码格式错误',
                ]"
              ></v-text-field>
              <v-text-field
                label="密码"
                color="secondary"
                outlined
                prepend-inner-icon="mdi-key"
                type="password"
                v-model="password"
                :rules="[(v) => !!v || '请输入密码']"
              ></v-text-field>
              <v-btn
                block
                tile
                class="secondary mt-0 mb-5 dark white--text py-6 elevation-0"
                @click="register"
                :disabled="!valid"
                >确认并注册</v-btn
              >
            </v-form>
            <div class="text-caption font-weight-bold" color="secondary">
              已有账号？请点击
              <span class="text-decoration-underline primary--text">
                <a href="#/Login">登入账号</a>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      valid: false,
    };
  },
  methods: {
    async register() {
      let [username, password, phone] = [
        this.username,
        this.password,
        this.phone,
      ];
      console.log(this.valid);
      if (this.valid) {
        await this.$axios.post("/api/register.do", {
          username,
          password,
          phone,
        });
        let res = await this.$axios.post("/api/login.do", {
          username,
          password,
        });
        setTimeout(() => {
          this.$store.commit("getUserdata", res.data);
          window.sessionStorage.setItem("userdata", JSON.stringify(res.data));
          this.$router.push({ path: "/home" });
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
</style>