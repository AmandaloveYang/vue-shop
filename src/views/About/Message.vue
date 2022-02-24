<template>
  <div id="message">
    <div class="d-flex justify-center">
      <div class="grey--text text-h3">ONLINE MESSAGE</div>
    </div>
    <div class="text-center primary--text">在线留言</div>
    <div class="d-flex justify-center">
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="姓名" outlined></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center" style="margin-top: -30px">
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="电话" outlined></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center" style="margin-top: -30px">
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="留言标题" outlined></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center" style="margin-top: -30px">
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="留言内容" outlined height="200"></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center" style="margin-top: -20px">
      <v-btn color="#b69b65" elevation="6" x-large style="margin-right: 60px"
        >立即提交</v-btn
      >
      <v-btn color="#b69b65" elevation="6" x-large style="margin-left: 20px"
        >重置</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#message {
  margin: 1% 10%;
}
</style>