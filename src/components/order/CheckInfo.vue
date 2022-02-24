<template>
  <v-card class="mb-12" color="">
    <v-card-text>
      <v-data-table
        hide-default-footer
        :headers="[
          { text: '商品信息', value: 'info', align: 'center' },
          {
            text: '明细',
            value: 'price',
            align: 'center',
            cellClass: 'text-h6',
          },
          { text: '小计', value: 'subTotal' },
        ]"
        :items="$store.getters.cartItems"
      >
        <template v-slot:[`item.info`]="{ item }">
          <product-info :item="item"></product-info>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          <span
            >{{ item.basic_price + item.size_add + item.taste_add }}.00 ✖
            {{ item.amount }}</span
          >
        </template>
        <template v-slot:[`item.subTotal`]="{ item }">
          <span
            >{{
              (item.basic_price + item.size_add + item.taste_add) * item.amount
            }}.00</span
          >
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions class="d-flex align-end">
      <v-btn tile elevation="0" color="primary" @click="$emit('stepBack')"
        >回到购物车</v-btn
      >
      <v-spacer></v-spacer>
      <v-alert
        dense
        class="text-caption my-auto mx-4"
        max-width="250"
        type="error"
        v-if="!orderAddress"
      >
        您还未选定订单的<strong>物流方式</strong>
      </v-alert>
      <span class="text-subtitile-1 mr-2"
        >订单金额：<span
          class="secondary--text text-h4 font-weight-bold mx-2"
          >{{ getTotalPrice() }}</span
        >元</span
      >
      <v-btn
        large
        tile
        elevation="0"
        class="ml-5 px-8"
        color="secondary"
        @click="submitOrder"
        :disabled="!orderAddress"
        >确认并提交订单</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import ProductInfo from "@/components/ProductInfo";
export default {
  components: {
    ProductInfo,
  },
  created() {
    console.log(this);
    console.log(
      new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString().slice(0, 10)
    );
    /* this.getCartItems(); */
  },
  props: ["orderAddress"],
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
    };
  },
  methods: {
    async getCartItems() {
      let res = await this.$axios.post("/api/getCart.do", {
        u_id: this.$store.getters.user.u_id,
      });
      this.$store.commit("getCartItems", res.data);
      this.cartItems = this.$store.getters.cartItems;
      this.getTotalPrice();
    },
    async editCartItemAmount(item, num) {
      let value = item.amount + num;
      let ca_id = item.ca_id;
      await this.$axios.post("/api/editCart.do", {
        item: "amount",
        value,
        ca_id,
      });
      this.getCartItems();
    },
    async deleteCartItem(item) {
      console.log(item);
      let ca_id = item.ca_id;
      await this.$axios.post("/api/deleteCart.do", {
        ca_id,
      });
      this.getCartItems();
    },
    getTotalPrice() {
      return this.$store.getters.cartItems.reduce(
        (total, item) =>
          total +
          item.amount * (item.basic_price + item.size_add + item.taste_add),
        0
      );
    },
    async submitOrder() {
      const u_id = this.$store.getters.user.u_id;
      const status = "待支付";
      const date = new Date(Date.now() + 1000 * 60 * 60 * 8)
        .toISOString()
        .slice(0, 10);
      const address_id = this.orderAddress;
      const type = address_id.slice(0, 1) == "A" ? 1 : 0;
      const order = [u_id, status, date, type, address_id];
      const orderDetails = this.$store.getters.cartItems.map((item) => [
        item.d_id,
        item.s_id,
        item.t_id,
        item.amount,
      ]);
      await this.$axios.post("/api/createOrder.do", {
        order,
        orderDetails,
      });
      this.$emit("stepForward");
    },
  },
};
</script>

<style>
</style>