<template>
  <el-carousel :interval="4000" type="card" height="610px" id="carousel">
    <el-carousel-item v-for="(item, i) in items" :key="i" id="a">
      <router-link :to="{ name: 'shop222', query: { number: i } }">
        <v-img
          :src="require('@/assets/home/' + item)"
          id="img"
          @click="tag(i)"
        ></v-img
      ></router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: ["c1.jpg", "c2.png", "c3.png", "c4.jpg", "c5.png", "c6.jpg"],
    };
  },
  methods: {
    // 判断图片的下标
    tag(i) {
      console.log(i);
    },
  },
};
</script>
<style>
#img {
  height: 600px;
  margin-right: 100px;
}
#a {
  width: 1100px;
}
</style>
