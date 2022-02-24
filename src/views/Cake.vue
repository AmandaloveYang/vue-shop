<template>
  <v-container fluid>
    <v-row class="justify-center mt-10">
      <div>
        <div class="text-center text-h3 secondary--text">CAKE</div>
        <p class="text-center text-subtitle-1 secondary--text">蛋糕系列</p>
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
          @click="cakeKind = null"
          >全部</v-chip
        >
        <v-chip
          label
          outlined
          filter
          class="px-6 py-4"
          v-for="(item, index) in cakeKinds"
          :key="index"
          color="secondary"
          @click="cakeKind == item ? (cakeKind = null) : (cakeKind = item)"
          >{{ item }}</v-chip
        >
      </v-chip-group>
    </v-row>

    <v-sheet max-width="1500" class="mx-auto mt-10">
      <v-row class="">
        <v-col class="d-flex ml-10">
          <div style="width: 160px" class="mr-3">
            <v-select
              outlined
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              clearable
              label="口味"
              color="secondary"
              :items="cakeTastes"
              v-model="cakeTaste"
            ></v-select>
          </div>
          <div style="width: 160px">
            <v-select
              outlined
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              clearable
              label="尺寸"
              color="secondary"
              :items="cakeSizes"
              v-model="cakeSize"
            ></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="3" v-for="item in cakesFilter()" :key="item.c_id">
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
    this.getCakes();
  },
  data() {
    return {
      cakeName: "cake2.jpg",
      cakeKinds: [
        "人气蛋糕",
        "欧风慕斯",
        "儿童蛋糕",
        "祝寿蛋糕",
        "经典蛋糕",
        "定制蛋糕",
        "婚宴蛋糕",
      ],
      cakeTastes: ["巧克力", "奶油水果", "咖啡", "抹茶", "坚果", "其他"],
      cakeSizes: ["6寸", "8寸", "10寸", "12寸", "双层", "多层"],
      cakeKind: null,
      cakeSize: null,
      cakeTaste: null,
      cakes: [],
      page: 1,
      pagenum: 12,
      total: 0,
      pages: 0,
    };
  },
  methods: {
    getCakes() {
      this.$axios
        .post("/api/getDesserts.do", {
          type: "01",
        })
        .then((res) => {
          let dessert = res.data.dessert;
          this.cakes = dessert;
        });
    },
    cakesFilter() {
      let cakeKind = this.cakeKind;
      let cakeTaste = this.cakeTaste;
      let cakeSize = this.cakeSize;
      let total = 0;
      let cakes = this.cakes;

      cakes = cakeKind
        ? this.cakes.filter((item) => item.kind == this.cakeKind)
        : cakes;
      cakes = cakeTaste
        ? cakes.filter((item) => item.taste == this.cakeTaste)
        : cakes;
      cakes = cakeSize
        ? cakes.filter((item) => item.size == this.cakeSize)
        : cakes;

      total = cakes.length;
      this.pages = Math.ceil(total / this.pagenum);
      (this.page - 1) * 12 > total && (this.page = 1);
      return cakes.slice((this.page - 1) * 12, this.page * 12);
    },
  },
  watch: {
    page: function (val) {
      this.cakesFilter();
    },
  },
};
</script>

<style>
</style>