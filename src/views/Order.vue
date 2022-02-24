<template>
  <div>
    <v-sheet>
      <v-stepper
        alt-labels
        max-width="1200"
        flat
        class="mx-auto"
        v-model="step"
      >
        <v-stepper-header>
          <v-stepper-step step="1" complete-icon="mdi-delete">
            我的购物车
          </v-stepper-step>
          <v-stepper-step step="2"> 填写订单信息 </v-stepper-step>
          <v-stepper-step step="3" editable> 完成订单 </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <my-cart @stepForward="step = 2"></my-cart>
          </v-stepper-content>
          <v-stepper-content step="2">
            <transport-info @selectAddress="getAddress"></transport-info>
            <check-info
              :orderAddress="selectedAddress"
              @stepBack="step = 1"
              @stepForward="step = 3"
            ></check-info>
          </v-stepper-content>
          <v-stepper-content step="3">
            <order-complete></order-complete>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-sheet>
  </div>
</template>

<script>
import MyCart from "@/components/MyCart";
import OrderComplete from "@/components/order/OrderComplete";
import TransportInfo from "@/components/order/TransportInfo";
import CheckInfo from "@/components/order/CheckInfo";
export default {
  components: {
    MyCart,
    OrderComplete,
    TransportInfo,
    CheckInfo,
  },
  data() {
    return {
      step: 1,
      selectedAddress: undefined,
    };
  },
  methods: {
    foo() {
      console.log("000");
    },
    getAddress(val) {
      this.selectedAddress = val;
    },
  },
};
</script>

<style>
</style>