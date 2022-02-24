<template>
  <div id="box">
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      height="500"
      :src="require('@/assets/home/' + image)"
      class="img"
    >
      <v-sheet
        height="500"
        color="rgba(0, 0, 0, 0.3)"
        class="d-flex flex-column justify-center align-center"
      >
        <div
          class="
            mt-16
            mb-5
            text-h4
            font-weight-bold
            text-center
            white--text
            ziju
          "
        >
          {{ title }}
        </div>
        <div class="text-center white--text">
          <v-chip color="white" outlined>
            <div class="text-h6 ziju1">{{ subTitle }}</div>
          </v-chip>
        </div>

        <div class="mt-10 mx-12 text-center white--text">
          {{ content }}
        </div>
        <div class="text-center white--text mb-12"></div>
        <div class="text-10px text-center white--text">
          <span> MORE </span>
          <div class="line_wrap py-2">
            <div class="line">
              <div class="line_icon left">
                <v-icon small color="white">mdi-cake</v-icon>
              </div>
              <div class="line_icon right">
                <v-icon small color="white">mdi-cake</v-icon>
              </div>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "HotProduct",
  data() {
    return {
      /* image: "",
      title: "DESSERT",
      chipText: "典藏甜品",
      text: "FOZOON法颂,传承正宗去式甜品古法手工制作精髓,精心打造坊间地道 古早口碑源味,法式浪漫情调和午后惬意定格在静好时光中 ", */
    };
  },
  props: ["image", "title", "subTitle", "content"],
};
</script>

<style scoped>
.ziju {
  letter-spacing: 22px !important;
}
.ziju1 {
  letter-spacing: 6px !important;
}
.line_wrap {
  width: 100px;
  transition: 0.5s;
}
.line_wrap:hover {
  width: 150px;
}
.line {
  height: 1px;
  background-color: white;
  position: relative;
}
.line_icon {
  position: absolute;
  bottom: -10px;
}
.line_icon.left {
  left: -18px;
}
.line_icon.right {
  right: -18px;
}
.img {
  cursor: pointer;
  transition: all 0.8s;
}
.img:hover {
  /* border: 1px solid red; */
  transform: scale(1.1);
}
#box {
  overflow: hidden;
}
</style>
