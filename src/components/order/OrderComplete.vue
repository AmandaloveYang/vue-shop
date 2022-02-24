<template>
  <v-sheet max-width="900" class="mx-auto">
    <div>订单提交成功</div>
    <v-divider class="my-4"></v-divider>
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <v-icon class="text-h1" color="secondary"
            >mdi-check-circle-outline</v-icon
          >
        </div>
        <div class="d-flex flex-column justify-center ml-6">
          <div class="text-body-1 mb-2">订单提交成功！去付款咯~</div>
          <div class="text-caption">
            订单号:21101335103129149，请及时完成支付
          </div>
          <div class="text-caption">自提门店信息:2021-10-13 10:31:29</div>
        </div>
      </div>

      <div class="xian2 d-flex flex-column mr-8">
        <div>
          <span class="mt-2">应付总额：</span>
          <span class="text-h5 mt-2 secondary--text">{{
            $store.getters.totalPrice
          }}</span>
          <span class="mt-2">元</span>
        </div>
        <div>
          <v-btn class="mt-3" elevation="0" tile style="width: 120px"
            >保存</v-btn
          >
        </div>
      </div>
    </div>
    <div class="ml-3 mt-8">选择以下方式付款</div>
    <v-divider class="my-4"></v-divider>
    <div class="d-flex justify-start mr-10 mb-8">
      <v-sheet
        class="d-flex align-start mr-5"
        @click="
          alipay = !alipay;
          wechat = false;
        "
      >
        <v-img
          max-width="150"
          contain
          src="../../assets/images/Cust/Alipay.jpg"
          class="pa-3"
        >
        </v-img>
        <v-icon class="float-right" color="primary" v-if="alipay"
          >mdi-check-circle</v-icon
        >
        <v-icon class="float-right" color="primary" v-else
          >mdi-checkbox-blank-circle-outline</v-icon
        >
      </v-sheet>
      <v-sheet
        class="d-flex align-start"
        @click="
          wechat = !wechat;
          alipay = false;
        "
      >
        <v-img
          max-width="150"
          contain
          src="../../assets/images/Cust/wechat.jpg"
          class="pa-3"
        >
        </v-img>
        <v-icon class="float-right" color="primary" v-if="wechat"
          >mdi-check-circle</v-icon
        >
        <v-icon class="float-right" color="primary" v-else
          >mdi-checkbox-blank-circle-outline</v-icon
        >
      </v-sheet>
    </div>

    <div class="d-flex justify-center">
      <v-btn
        color="secondary"
        class="mt-3"
        elevation="0"
        tile
        style="width: 120px"
        >立即支付</v-btn
      >
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "OrderComplete",
  data() {
    return {
      alipay: false,
      wechat: false,
    };
  },
};
</script>

<style>
</style>