<template>
  <router-view></router-view>
</template>

<script>
import ShopHeader from "@/layout/ShopHeader";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
    ShopHeader,
  },
};
</script>
