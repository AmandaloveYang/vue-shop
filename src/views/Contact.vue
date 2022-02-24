<template>
  <v-container fluid>
    <v-row class="d-flex flex-column align-center my-10">
      <div class="text-h3 grey--text">Contact Us</div>
      <div class="text-center primary--text">联系我们</div>
    </v-row>
    <v-sheet max-width="900" class="mx-auto">
      <v-row class="d-flex justify-center mb-10">
        <v-col v-for="(item, index) in contactWays" :key="index">
          <contact-way
            :icon="item.icon"
            :iconColor="item.iconColor"
            :title="item.title"
            :subtitle="item.subtitle"
            :text="item.text"
            class="mx-auto"
          >
            <template v-slot:text>
              <div v-if="index == 2">
                <v-icon color="green" class="mx-1">mdi-wechat</v-icon>
                <v-icon color="blue" class="mx-1">mdi-qqchat</v-icon>
              </div>
            </template>
          </contact-way>
        </v-col>
      </v-row>
    </v-sheet>
    <v-row class="d-flex flex-column align-center mb-10">
      <div class="text-h3 grey--text">Our Stores</div>
      <div class="text-center primary--text">门店分布</div>
    </v-row>
    <v-sheet max-width="1200" class="mx-auto">
      <v-row>
        <v-col v-for="item in stores" :key="item.st_id" cols="4">
          <address-card
            :name="item.name"
            :phone="item.phone"
            :location="item.location"
            :opening_time="item.opening_time"
            class="mx-auto"
          >
          </address-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import LocalCard from "@/components/LocalCard";
import AddressCard from "@/components/contact/AddressCard";
import ContactWay from "@/components/contact/ContactWay";
export default {
  name: "Contact",
  components: {
    LocalCard,
    AddressCard,
    ContactWay,
  },
  created() {
    this.getStores();
    console.log(this);
  },
  data() {
    return {
      contactWays: [
        {
          icon: "mdi-timer-outline",
          iconColor: "primary",
          title: "SERVICE TIME",
          subtitle: "服务时间",
          text: "全年无休8:30-17:00",
        },
        {
          icon: "mdi-cellphone-sound",
          iconColor: "secondary",
          title: "PHONE",
          subtitle: "电话",
          text: "4000 - 233 - 234",
        },
        {
          icon: "mdi-web",
          iconColor: "indigo",
          title: "SERVICE ONLINE",
          subtitle: "在线客服",
          text: "",
        },
      ],
      stores: [],
    };
  },
  methods: {
    async getStores() {
      let res = await this.$axios.get("/api/getStore.do");
      this.stores = res.data;
    },
  },
};
</script>

<style>
</style>
