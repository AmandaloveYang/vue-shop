<template>
  <v-container fluid>
    <div>物流方式</div>
    <v-btn
      class="my-8 mr-4 px-12"
      elevation="0"
      :outlined="!isSelf"
      color="secondary"
      @click="
        isSelf = true;
        isDelivery = false;
      "
      >门店自取</v-btn
    >
    <v-btn
      class="my-8 px-12"
      elevation="0"
      :outlined="!isDelivery"
      color="secondary"
      @click="
        isDelivery = true;
        isSelf = false;
      "
      >需要配送</v-btn
    >

    <div v-if="isSelf">
      <div>门店自提</div>
      <div class="d-flex flex-wrap">
        <address-box
          v-if="isShow"
          :receiver="receiver"
          :phone="phonenumber"
          :address="selectedStore.name + ' ' + selectedStore.location"
        ></address-box>
        <v-hover v-slot="{ hover }">
          <v-card
            class="pa-3 ma-3 d-flex align-center flex-column justify-center"
            width="350px"
            height="230px"
            outlined
            :color="hover ? 'secondary' : undefined"
            :dark="hover ? true : false"
            @click="dialog1 = true"
            v-if="isLogin()"
            :ripple="false"
          >
            <v-icon class="text-h3">mdi-map-marker</v-icon>
            <div class="text-h6">选择自提点</div>
          </v-card>
        </v-hover>
      </div>
      <v-row>
        <v-col cols="2">
          <div>自提时间</div>
        </v-col>
        <v-col cols="10">
          <div>
            <time-box class="ml-13"></time-box>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-if="isDelivery">
      <div>选择收货地址</div>
      <div class="d-flex flex-wrap">
        <div
          v-for="(item, index) in addressData"
          :key="index"
          @click="selectAddress(item)"
        >
          <address-box
            :receiver="item.receiver"
            :phone="item.phone"
            :address="item.address"
            :show="true"
            :isActive="item.isActive"
          >
          </address-box>
        </div>

        <v-hover v-slot="{ hover }">
          <v-card
            class="pa-3 ma-3 d-flex align-center flex-column justify-center"
            width="350"
            height="230px"
            outlined
            :color="hover ? 'secondary' : undefined"
            :dark="hover ? true : false"
            @click="dialog = true"
            :ripple="false"
          >
            <v-btn x-large icon>
              <v-icon class="text-h3">mdi-plus-circle-outline</v-icon>
            </v-btn>
            <div class="text-h6">添加新地址</div>
          </v-card>
        </v-hover>
      </div>
      <v-row>
        <v-col cols="2">
          <div>配送时间</div>
        </v-col>
        <v-col cols="10">
          <div>
            <time-box class="ml-13"></time-box>
            <div class="ml-16">
              当日15:00至次日10:00的订单，最早配送时间为次日14:00-16:00。生日蛋糕及西点类订单金额满89元
              支持天津市区外环线内、外环南路至南开大学津南校区、各门店3公里内免费配送，全国送产品支持全国快
              递配送（偏远地区除外）具体资费标准请查看全国送产品内介绍，金额不足免邮费的订单，请在补邮费专区
              补差价;
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog1" scrollable max-width="800px">
      <v-card>
        <v-card-title>选择自提点</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 400px">
          <v-radio-group
            v-model="selectedStore"
            column
            v-for="item in storeAddress"
            :key="item.st_id"
          >
            <v-radio
              :label="`${item.name}:${item.location}`"
              :value="item"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-text-field
            label="输入取货人姓名"
            class="ma-5"
            prepend-icon="mdi-calendar-account"
            v-model="receiver"
          ></v-text-field>
          <v-text-field
            label="请输入电话号码"
            :rules="phonenumberRules"
            class="ma-5"
            prepend-icon="mdi-cellphone"
            v-model="phonenumber"
          ></v-text-field>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog1 = false">
            取消
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              dialog1 = false;
              isShow = true;
              $emit('selectAddress', selectedStore.st_id);
            "
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-toolbar color="secondary mb-8" dark flat>添加新地址</v-toolbar>
        <v-card-text>
          <v-text-field
            label="收件人"
            outlined
            prepend-inner-icon="mdi-email-receive"
            color="secondary"
            v-model="receiver"
          ></v-text-field>
          <v-text-field
            label="电话号码"
            v-model="phone"
            :rules="phonenumberRules"
            required
            outlined
            prepend-inner-icon="mdi-cellphone"
            color="secondary"
          ></v-text-field>
          <v-text-field
            label="详细地址"
            v-model="address"
            outlined
            prepend-inner-icon="mdi-map-marker-radius"
            color="secondary"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="dialog = false">取消</v-btn>
          <v-btn text color="primary" @click="addUserAddress">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AddressBox from "@/components/AddressBox";
import TimeBox from "@/components/TimeBox";
export default {
  data() {
    return {
      isShow: false,
      selectedStore: {},
      dialog1: false,
      isSelf: false,
      isDelivery: false,
      dialog: false,
      receiver: this.$store.getters.user.username,
      address: "",
      addressData: [],
      phone: "",
      phonenumber: this.$store.getters.user.phone,
      phonenumberRules: [
        (v) => !!v || "电话号码不能为空",
        (v) => /^1[3-9][0-9]{9}$/.test(v) || "电话号码输入有误",
      ],
      storeAddress: [],
    };
  },
  components: {
    AddressBox,
    TimeBox,
  },
  created() {
    console.log(this);
    this.getUserAddress();
    this.getStores();
  },
  methods: {
    isLogin() {
      return this.$store.getters.user.login;
    },
    async getUserAddress() {
      let res = await this.$axios.post("/api/getUserAddress.do", {
        u_id: this.$store.getters.user.u_id,
      });
      this.addressData = res.data.map((item) => ({ ...item, isActive: false }));
    },
    async addUserAddress() {
      await this.$axios.post("/api/addUserAddress.do", {
        u_id: this.$store.getters.user.u_id,
        address: this.address,
        phone: this.phone,
        receiver: this.receiver,
      });
      this.dialog = false;
      this.address = "";
      this.phone = "";
      this.receiver = "";
      this.getUserAddress();
    },
    async getStores() {
      let res = await this.$axios.get("/api/getStore.do");
      this.storeAddress = res.data;
    },
    selectAddress(item) {
      this.addressData.forEach((address) => {
        address.isActive = address.a_id == item.a_id;
      });
      this.phonenumber = item.phone;
      this.receiver = item.receiver;
      this.$emit("selectAddress", item.a_id);
    },
  },
};
</script>

<style>
</style>