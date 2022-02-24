<template>
  <div class="">
    <v-data-table
      hide-default-footer
      :headers="[
        {
          text: '商品信息',
          value: 'info',
        },
        { text: '评价', value: 'rating' },
        { text: '评价', value: 'comment' },
      ]"
      :items="orderWithRating"
    >
      <template v-slot:[`item.info`]="{ item }">
        <product-info :item="item"></product-info>
      </template>
      <template v-slot:[`item.rating`]="{ item }">
        <v-rating
          background-color="secondary"
          color="secondary"
          v-model="item.rating"
          readonly
        ></v-rating>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import ProductInfo from "@/components/ProductInfo";
export default {
  components: {
    ProductInfo,
  },
  mounted() {
    console.log(this);
    this.getOrderWithRating();
  },
  data() {
    return {
      orderItems: [],
      orderWithRating: [],
      items: ["待支付", "配送中", "已完成"],
      number: "",
      orderStatus: ["待支付", "配送中", "已完成"],
      selectedStatus: 0,
    };
  },

  methods: {
    async getOrderWithRating() {
      let res = await this.$axios.get(
        "/api/getOrderInfo.do?u_id=" + this.$store.getters.user.u_id
      );
      console.log(res.data);
      this.orderWithRating = res.data
        .reduce((total, item) => [...total, ...item.orderDetail], [])
        .filter((item) => item.rating !== null);
      this.orderItems = res.data.map((item) => ({
        ...item,
        dialogShow: false,
      }));
    },
  },
};
</script>

<style scoped>
</style>