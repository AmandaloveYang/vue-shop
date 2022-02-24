<template>
  <v-container fluid>
    <v-row class="justify-center mt-10">
      <div>
        <div class="text-center text-h3 secondary--text">GIFT</div>
        <p class="text-center text-subtitle-1 secondary--text">甜品礼盒</p>
      </div>
    </v-row>
    <v-row class="justify-center">
      <v-chip-group>
        <v-chip
          outlined
          label
          filter
          class="px-6 py-4"
          color="secondary"
          @click="giftKind = null"
          >全部</v-chip
        >
        <v-chip
          label
          outlined
          filter
          class="px-6 py-4"
          v-for="(item, index) in giftKinds"
          :key="index"
          color="secondary"
          @click="giftKind == item ? (giftKind = null) : (giftKind = item)"
          >{{ item }}</v-chip
        >
      </v-chip-group>
    </v-row>

    <v-sheet max-width="1500" class="mx-auto mt-10">
      <v-row class="mx-2">
        <v-col cols="3" v-for="item in giftsFilter()" :key="item.c_id">
          <shopping-card
            :imgsrc="item.pic_name"
            :title="item.name"
            :subtitle="item.tag"
            :isHot="item.is_hot == 1 ? true : false"
            :isNew="item.is_new == 1 ? true : false"
            :id="item.d_id"
          ></shopping-card>
        </v-col>
      </v-row>
    </v-sheet>
    <v-row class="justify-center">
      <v-sheet min-width="600">
        <v-pagination
          class="text-center mt-5 mb-10"
          v-model="page"
          :length="pages"
          v-if="pages > 0"
          @input="
            $vuetify.goTo(0, {
              duration: 0,
            })
          "
        ></v-pagination>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import ShoppingCard from "@/components/ShoppingCard";
export default {
  components: {
    ShoppingCard,
  },
  created() {
    console.log(this);
    this.getGifts();
  },
  data() {
    return {
      giftName: "cake2.jpg",
      giftKinds: ["月饼礼盒", "精选礼盒——全国送", "温馨甜点"],
      giftTastes: null,
      giftSizes: null,
      giftKind: null,
      giftSize: null,
      giftTaste: null,
      gifts: [],
      page: 1,
      pagenum: 12,
      total: 0,
      pages: 0,
    };
  },
  methods: {
    getGifts() {
      this.$axios
        .post("/api/getDesserts.do", {
          type: "02",
        })
        .then((res) => {
          let dessert = res.data.dessert;
          this.gifts = dessert;
        });
    },
    giftsFilter() {
      let giftKind = this.giftKind;
      let giftTaste = this.giftTaste;
      let giftSize = this.giftSize;
      let total = 0;
      let gifts = this.gifts;

      gifts = giftKind
        ? this.gifts.filter((item) => item.kind == this.giftKind)
        : gifts;
      gifts = giftTaste
        ? gifts.filter((item) => item.taste == this.giftTaste)
        : gifts;
      gifts = giftSize
        ? gifts.filter((item) => item.size == this.giftSize)
        : gifts;

      total = gifts.length;
      this.pages = Math.ceil(total / this.pagenum);
      (this.page - 1) * 12 > total && (this.page = 1);
      return gifts.slice((this.page - 1) * 12, this.page * 12);
    },
  },
  watch: {
    page: function (val) {
      this.giftsFilter();
    },
  },
};
</script>

<style>
</style>