<template>
  <div>
    <!-- <hello-world></hello-world> -->
    <head-banner></head-banner>
    <div class="box">
      <p>明星产品</p>
      <p>HOT PRODUCT</p>
    </div>
    <v-row no-gutters>
      <v-col cols="6" v-for="(item, index) in hotProduct" :key="index">
        <hot-product
          :title="item.title"
          :subTitle="item.subTitle"
          :content="item.content"
          :image="item.image"
        ></hot-product>
      </v-col>
    </v-row>
    <div class="box">
      <p>法颂产品</p>
      <p>OUR PRODUCT</p>
    </div>
    <v-row no-gutters>
      <v-col cols="3" v-for="(item, index) in ourProduct" :key="index">
        <our-product
          :title="item.title"
          :subTitle="item.subTitle"
          :content="item.content"
          :image="item.image"
        ></our-product>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <bottom-card-left id="left"></bottom-card-left>
      </v-col>
      <v-col cols="6">
        <bottom-card-right id="right"></bottom-card-right>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.box {
  color: #7a9f8c;
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
  line-height: 40px;
}
#footbox {
  width: 100%;
  display: flex;
}
#left {
  flex-grow: 1;
}
#right {
  flex-grow: 1;
}
</style>
<script>
// import HelloWorld from "../components/HelloWorld";
import HeadBanner from "@/components/home/HeadBanner.vue";
import HotProduct from "@/components/home/HotProduct.vue";
import OurProduct from "@/components/home/OurProduct.vue";
import BottomCardLeft from "@/components/home/BottomCardLeft.vue";
import BottomCardRight from "@/components/home/BottomCardRight.vue";

export default {
  components: {
    // HelloWorld,
    HeadBanner,
    HotProduct,
    OurProduct,
    BottomCardLeft,
    BottomCardRight,
  },
  data() {
    return {
      hotProduct: [
        {
          image: "dessert.jpg",
          title: "DESSERT",
          subTitle: "典藏甜品",
          content:
            "FOZOON法颂，传承正宗法式甜品古法手工制作精髓，精心打造坊间地道古早口碑源味，法式浪漫情调和午后惬意定格在静好时光中",
        },
        {
          image: "cake.jpg",
          title: "CAKE",
          subTitle: "精选蛋糕",
          content:
            "FOZOON法颂，坚守「健康本色」生活理念，苛求「道地食材」可追溯：法国鲜乳奶油、比利时巧克力、日本阳光小麦粉、美国榛子、意大利芝士......",
        },
      ],
      ourProduct: [
        {
          image: "c7.jpg",
          title: "Dessert",
          subTitle: "温馨甜点",
          content:
            "传承正宗法式甜品经典技艺  严循古法手工制作精髓  传播地道甜品滋味",
        },
        {
          image: "c8.jpg",
          title: "Gift",
          subTitle: "精选礼盒",
          content:
            "一款产品一个故事，法式浪漫邂逅在下午茶的相伴中恰好的仪式感分享的滋味在好友在家人在同事",
        },
        {
          image: "c9.jpg",
          title: "Cake",
          subTitle: "蛋糕系列",
          content:
            "坚守「健康本色」吃的「安心」  苛求「道地食材」品味「新鲜]源味  FOZOON法颂馨享甜蜜人生",
        },
        {
          image: "c10.jpg",
          title: "Afternoon tea",
          subTitle: "下午茶歇",
          content:
            "午后的惬意在信手之间  法式地道口碑甜品源滋味FOZOON法颂  一切定格在这静好时光中",
        },
      ],
    };
  },
  created() {
    console.log(this);
  },
};
</script>
