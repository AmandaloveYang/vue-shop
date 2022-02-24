<template>
  <div class="ma-5 mt-10">
    <div class="text-h5 primary--text">{{ details.name }}</div>
    <div class="text-h6 secondary--text">
      {{ details.tag }}
    </div>
    <v-divider class="my-3"></v-divider>
    <div class="text-h4 secondary--text mb-3">
      ￥{{ details.basic_price + addPrice }}.00
    </div>
    <div class="d-flex align-center mb-3 flex-wrap">
      <v-icon color="indigo" large class="mr-5">mdi-hexagon-slice-5</v-icon>
      <v-chip-group
        column
        active-class="indigo white--text"
        v-model="selectedSize"
      >
        <v-chip
          v-for="item in details.sizes"
          :key="item.s_id"
          class="mr-2"
          small
        >
          {{ item.size }}</v-chip
        >
      </v-chip-group>
    </div>
    <div
      class="d-flex align-center"
      v-if="details.tastes && details.tastes.find((item) => item.t_id)"
    >
      <v-icon color="pink" large class="mr-5">mdi-cupcake</v-icon>
      <v-chip-group
        column
        active-class="pink white--text"
        v-model="selectedTaste"
      >
        <v-chip
          class="mr-2"
          small
          v-for="item in details.tastes"
          :key="item.t_id"
        >
          {{ item.taste }}</v-chip
        >
      </v-chip-group>
    </div>

    <v-slide-x-transition>
      <v-alert
        dense
        outlined
        class="text-caption pa-1 mt-4"
        max-width="250"
        type="error"
        v-if="
          !(
            selectedSize !== undefined &&
            (details.tastes.length == 0 || selectedTaste !== undefined)
          )
        "
      >
        您还未选择商品的<strong>口味</strong>以及<strong>规格</strong>
      </v-alert>
    </v-slide-x-transition>

    <div class="text-caption my-5">请提前24小时预定</div>
    <div class="d-flex align-center flex-wrap">
      <div>
        <span class="text-body-2 mx-3">数量</span>
        <v-btn text icon @click="buyAmount -= 1" :disabled="buyAmount < 2">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span class="text-subtitle-2 mx-1">{{ buyAmount }}</span>
        <v-btn text icon @click="buyAmount += 1">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div>
        <v-btn
          tile
          elevation="0"
          color="secondary"
          class="mx-4 px-8"
          :disabled="
            !(
              selectedSize !== undefined &&
              (details.tastes.length == 0 || selectedTaste !== undefined)
            )
          "
          @click="handleShopping"
          >加入购物车</v-btn
        >
        <v-btn
          tile
          elevation="0"
          color="secondary"
          class="px-8"
          :disabled="
            !(
              selectedSize !== undefined &&
              (details.tastes.length == 0 || selectedTaste !== undefined)
            )
          "
          @click="
            handleShopping();
            foo();
          "
          >立即购买</v-btn
        >
      </div>
    </div>

    <v-divider class="my-6"></v-divider>
    <div class="text-caption mb-2">
      订购中遇到问题请您查看订购流程或致电客服热线：4000 - 233 - 234
    </div>
    <v-icon color="green" class="mx-1">mdi-wechat</v-icon>
    <v-icon color="blue" class="mx-1">mdi-qqchat</v-icon>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
  data() {
    return {
      price: 72,
      addPrice: 0,
      selectedSize: undefined,
      selectedTaste: undefined,
      buyAmount: 1,
    };
  },
  methods: {
    handleAddPrice() {
      this.addPrice = 0;
      let sizeIndex = this.selectedSize;
      let tasteIndex = this.selectedTaste;
      this.addPrice += sizeIndex ? this.details.sizes[sizeIndex].size_add : 0;
      this.addPrice += tasteIndex
        ? this.details.tastes[tasteIndex].taste_add
        : 0;
    },
    async handleShopping() {
      if (this.$store.getters.user && this.$store.getters.user.u_id) {
        let cartItems = this.$store.getters.cartItems;
        let buyItem = {
          u_id: this.$store.getters.user.u_id,
          d_id: this.details.d_id,
          size_id: this.details.sizes[this.selectedSize].s_id,
          taste_id:
            this.details.tastes.length > 0
              ? this.details.tastes[this.selectedTaste].t_id
              : null,
          amount: this.buyAmount,
        };
        let existItem = cartItems.find(
          (item) =>
            item.size_id == buyItem.size_id && item.taste_id == buyItem.taste_id
        );
        if (existItem) {
          let value = existItem.amount + buyItem.amount;
          let ca_id = existItem.ca_id;
          await this.$axios.post("/api/editCart.do", {
            item: "amount",
            value,
            ca_id,
          });
        } else {
          await this.$axios.post("/api/addCart.do", buyItem);
        }
      } else {
        this.$router.push("/login");
      }
    },
    foo() {
      this.$router.push("/order");
    },
  },
  watch: {
    selectedSize() {
      this.handleAddPrice();
    },
    selectedTaste() {
      this.handleAddPrice();
    },
  },
  props: ["details"],
};
</script>

<style>
</style>