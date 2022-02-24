<template>
  <div id="box">
    <v-hover v-slot="{ hover }" open-delay="120" style="cursor: pointer">
      <v-card
        class="mx-auto"
        max-width="344"
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-card-text>
          <p class="text-h6 text--primary">法颂总部（津南店）</p>
          <p>电话：4000233234</p>
          <p>地址：津南区双港镇工业园丽港园7号楼</p>
          <p>营业时间：9:00-19:00</p>
          <v-slide-y-reverse-transition>
            <span id="map" v-if="hover">
              <img src="../assets/map01.png" alt="" />
            </span>
          </v-slide-y-reverse-transition>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "LocalCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#box {
  position: relative;
  width: 350px;
  height: 190px;
}
#map {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 10px;
  transition: all 0.8s;
}
</style>
