<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card :loading="loading" class="mx-auto my-6" max-width="350">
        <div id="box"></div>
        <v-divider class="mx-4"></v-divider>
        <div id="jj">
          <v-img
            height="300"
            id="jl"
            :src="require('@/assets/home/' + image)"
            
          ></v-img>
        </div>
        <v-divider class="mx-4"></v-divider>
        <v-card-title class="text">{{ subTitle }}</v-card-title>
        <v-card-text class="text">-{{ title }}-</v-card-text>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#B3CEC0"
            opacity="0.9"
            z-index="1"
            class="d-flex flex-column align-center justify-center"
          >
            <div id="tu"></div>
            <v-card-text class="text" id="kuang">{{ content }}</v-card-text>
            <hr id="tuxian" />
            <v-card-title class="text">{{ subTitle }}</v-card-title>

            <v-card-text class="text">-{{ title }}-</v-card-text>
            <transition name="dong">
              <div id="xk"></div>
            </transition>
          </v-overlay>
        </v-fade-transition>
      </v-card> </template
  ></v-hover>
</template>
<script>
export default {
  name: "OurProduct",
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  props: ["image", "title", "subTitle", "content"],
};
</script>
<style scoped>
#box {
  height: 80px;
}
#jl {
  margin-top: 10px;
  margin-bottom: 10px;
}
#jj {
  margin-bottom: 50px;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(181, 154, 101);
}
#tu {
  width: 80px;
  height: 80px;
  margin: 135px auto 10px;
}

#kuang {
  width: 200px;
  height: 100px;
  text-align: center;
  margin: 0px auto 120px;
  font-size: 15px;
  color: white;
}
#tuxian {
  color: white;
  opacity: 1;
  width: 350px;
  size: 6px;
}

#xk {
  height: 6px;
  background-color: rgb(220, 207, 182);
  z-index: 2;
  margin-top: -6px;
  border-radius: 0px 0px 5px 5px;
}

.dong-enter {
  opacity: 0;
  transition: width 0.8s;
}

.dong-leave-to {
  opacity: 1;
  transition: width 0.8s;
}
</style>