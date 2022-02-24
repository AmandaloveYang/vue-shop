<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <div>
        <thumb-nail :pictures="dessertDetail.pictures"></thumb-nail>
      </div>
      <div class="mr-5 mt-6 mb-5 ml-n3">
        <big-picture :pictures="dessertDetail.pictures"></big-picture>
      </div>
      <div>
        <buy-detail :details="dessertDetail"></buy-detail>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import BigPicture from "@/components/buy/BigPicture";
import BuyDetail from "@/components/buy/BuyDetail";
import ThumbNail from "@/components/buy/ThumbNail";
export default {
  components: { BigPicture, BuyDetail, ThumbNail },
  created() {
    this.getDessertDetail();
    console.log(this);
  },
  data() {
    return {
      dessertDetail: {},
    };
  },
  methods: {
    async getDessertDetail() {
      let res = await this.$axios.get("/api/getDessertDetail.do", {
        params: { d_id: this.$route.params.id },
      });
      this.dessertDetail = res.data;
    },
  },
};
</script>

<style>
</style>
