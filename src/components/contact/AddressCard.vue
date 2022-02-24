<template>
  <div id="box">
    <v-hover v-slot="{ hover }" open-delay="120" style="cursor: pointer">
      <v-card
        class="mx-auto"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        height="200"
      >
        <v-card-text>
          <p class="text-h6 text--primary">{{ name }}</p>
          <p>电话：{{ phone }}</p>
          <p style="height: 35px">地址：{{ location }}</p>
          <p>营业时间：{{ opening_time }}</p>
          <v-slide-y-reverse-transition>
            <span id="map" v-if="hover">
              <img src="@/assets/map01.png" alt="" />
            </span>
          </v-slide-y-reverse-transition>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "AddressCard",
  data() {
    return {};
  },
  props: ["name", "phone", "location", "opening_time"],
  components: {},
};
</script>

<style scoped>
#box {
  position: relative;
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
