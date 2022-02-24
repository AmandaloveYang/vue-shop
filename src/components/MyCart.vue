<template>
  <v-card class="mb-12" color="">
    <v-card-text>
      <v-data-table
        hide-default-footer
        :headers="[
          { text: '商品信息', value: 'info', align: 'center' },
          {
            text: '单价',
            value: 'price',
            align: 'center',
            cellClass: 'text-h6',
          },
          { text: '数量', value: 'amount', align: 'center' },
          { text: '小计', value: 'subTotal' },
          { text: '操作', value: 'actions' },
        ]"
        :items="cartItems"
      >
        <template v-slot:[`item.info`]="{ item }">
          <product-info :item="item"></product-info>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          <span
            >{{ item.basic_price + item.size_add + item.taste_add }}.00</span
          >
        </template>
        <template v-slot:[`item.amount`]="{ item }">
          <v-btn
            icon
            @click="editCartItemAmount(item, -1)"
            :disabled="item.amount < 2"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="text-subtitle-2 mx-4">{{ item.amount }}</span>
          <v-btn icon @click="editCartItemAmount(item, 1)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:[`item.subTotal`]="{ item }">
          <span
            >{{
              (item.basic_price + item.size_add + item.taste_add) * item.amount
            }}.00</span
          >
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="error" v-on="on" v-bind="attrs">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <v-card width="300">
              <v-toolbar color="red" dark>删除商品</v-toolbar>
              <v-card-text
                >您将要把 <br />
                <span class="mr-3 text-h6">{{ item.name }}</span>
                <span
                  >{{ item.size }} <span class="ml-1"></span>
                  {{ item.taste }}</span
                >
                <br />
                移出购物车</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn>取消</v-btn>
                <v-btn @click="deleteCartItem(item)">确定</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions class="d-flex align-end">
      <v-btn tile elevation="0" color="primary" @click="$router.push('/cake')"
        >继续购物</v-btn
      >
      <v-spacer></v-spacer>
      <span class="text-subtitile-1 mr-2"
        >合计：<span class="secondary--text text-h4 font-weight-bold mx-2">{{
          totalPrice
        }}</span
        >元</span
      >
      <v-btn
        x-large
        tile
        elevation="0"
        class="ml-5 px-8"
        color="secondary"
        @click="$emit('stepForward')"
        >去结算</v-btn
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
    this.getCartItems();
  },
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
      console.log(res.data);
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
    async getTotalPrice() {
      this.totalPrice = this.cartItems.reduce(
        (total, item) =>
          total +
          item.amount * (item.basic_price + item.size_add + item.taste_add),
        0
      );
    },
  },
};
</script>

<style>
</style>