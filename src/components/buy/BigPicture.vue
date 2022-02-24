<template>
  <div class="d-flex my-2 demo-image__preview" id="box" v-if="pictures">
    <el-image
      style="max-width: 550px"
      :src="
        require('@/assets/images/' +
          pictures.find((item) => item.type == '01').pic_name)
      "
      :preview-src-list="
        pictures
          .filter((item) => item.type == '02')
          .map((item) => require('@/assets/images/' + item.pic_name))
      "
    >
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "CP_001.png",
      srcList: [
        require("@/assets/images/CP_001.png"),
        require("@/assets/images/CP_002.png"),
      ],
    };
  },
  props: ["pictures"],
};
</script>

<style scoped>
/*#box{*/
/*  border: 1px solid red;*/
/*}*/
</style>