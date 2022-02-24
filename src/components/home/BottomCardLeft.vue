<template>
  <v-card
    height="400"
    tile
    flat
    class="secondary d-flex flex-column justify-center align-center white--text"
  >
    <div class="mb-5">
      <v-img
        class="mx-auto"
        src="../../assets/images/pp01.png"
        width="70"
      ></v-img>
    </div>
    <div class="text-h5 ls-3">品牌资讯</div>
    <div class="text-subtitle-1 ls-1">NEWS CENTER</div>
    <div class="text-body mt-5 mb-3">
      <v-carousel
        vertical
        height="20"
        hide-delimiters
        :show-arrows="false"
        cycle
      >
        <v-carousel-item v-for="(item, index) in news" :key="index">
          <v-icon class="white--text mdi-rotate-90 mb-1"
            >mdi-eiffel-tower</v-icon
          >
          <span class="mx-5 white--text">{{ item }}</span>
          <v-icon class="white--text mdi-rotate-270 mb-1"
            >mdi-eiffel-tower</v-icon
          >
        </v-carousel-item>
        <v-carousel-item>
          <v-icon class="white--text mdi-rotate-90 mb-1"
            >mdi-eiffel-tower</v-icon
          >
          <span class="mx-5 white--text"
            >日前，法颂与企业合作为孩子们举办【万圣节】联欢活动</span
          >
          <v-icon class="white--text mdi-rotate-270 mb-1"
            >mdi-eiffel-tower</v-icon
          >
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="text-caption mb-4">2017.10.31</div>
    <div class="text-caption">现新增加配送区域：</div>
    <div class="text-caption">
      滨海新区所有连锁门店地址3公里内提供免费配送服务
    </div>
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