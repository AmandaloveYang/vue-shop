<template>
  <div>
    <head-banner></head-banner>
    <hot-product></hot-product>
    <our-product></our-product>
    <v-row>
      <v-col>
        <bottom-card-left></bottom-card-left>
      </v-col>
      <v-col>
        <bottom-card-right></bottom-card-right>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BottomCardLeft from "@/components/home/BottomCardLeft";
import BottomCardRight from "@/components/home/BottomCardRight";
import HeadBanner from "@/components/home/HeadBanner";
import HotProduct from "@/components/home/HotProduct";
import OurProduct from "@/components/home/OurProduct";
export default {
  components: {
    BottomCardLeft,
    BottomCardRight,
    HeadBanner,
    HotProduct,
    OurProduct,
  },
};
</script>

<style>
</style>