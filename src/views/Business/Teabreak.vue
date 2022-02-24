<template>
  <v-container
    fluid
    class="d-flex justify-center"
  >
    <div width="1200px">
      <div class="d-flex justify-center">
        <div class="grey--text text-h3">BUSINESS</div>
      </div>
      <div class="text-center primary--text mb-5">企业专区</div>
      <div id="a">
        <hr style="width: 100% ; color: grey ; text-align: center">
      </div>
      <v-card-text class="text-center pa-0 d-flex align-center flex-column">
          <div class="text-h5 my-6">茶歇服务</div>
          <div>法颂承接专业茶歇服务</div>
          <div>歇会适用推荐：发布会、答谢会、公司开幕、开业庆典、公司活动、会间茶歇、婚礼庆典</div>
          <div class="mb-4">会展餐饮、同学聚会、生日派对、节日庆典、私人派对、周年庆典、员工嘉勉、社团活动、社区聚会等。</div>
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea1.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea2.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea3.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea4.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea5.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea6.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea7.jpg')"
          />
          <v-img
              width="500px"
              :src="require('@/assets/tea/tea8.jpg')"
          />
      </v-card-text>
    </div>
  </v-container>
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

</style>
