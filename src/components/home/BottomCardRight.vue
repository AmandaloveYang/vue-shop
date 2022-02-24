<template>
  <v-card
    height="400"
    tile
    flat
    class="primary d-flex flex-column justify-center align-center white--text"
  >
    <div class="mb-5">
      <v-img
        class="mx-auto"
        src="../../assets/images/pp02.png"
        width="70"
      ></v-img>
    </div>
    <div class="text-h5 ls-3">配送说明</div>
    <div class="text-subtitle-1 ls-1">DELIVERY NOTE</div>
    <div class="text-body mt-5 mb-3">
      <span class="mx-5 white--text">消费满89元起配送，配送范围请阅读详情</span>
    </div>
    <div class="mt-16 mb-2"></div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      news: [
        "日前，法颂与企业合作为孩子们举办【万圣节】联欢活动",
        "法颂官网线上线下对接会员升级公告",
        "好消息 新增滨海新区配送服务",
      ],
    };
  },
};
</script>

<style scoped>
.ls-3 {
  letter-spacing: 0.3rem !important;
}
.ls-1 {
  letter-spacing: 0.1rem !important;
}
</style>