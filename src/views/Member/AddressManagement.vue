<template>
  <div class="d-flex flex-wrap">
    <address-box
      v-for="(item, index) in addressData"
      :key="index"
      :receiver="item.receiver"
      :phone="item.phone"
      :address="item.address"
      :editable="true"
      :show="true"
    >
    </address-box>

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

          <!--          <v-form-->
          <!--              ref="form"-->
          <!--              v-model="valid"-->
          <!--          >-->
          <v-text-field
            label="电话号码"
            v-model="phone"
            :rules="phonenumberRules"
            required
            outlined
            prepend-inner-icon="mdi-cellphone"
            color="secondary"
          ></v-text-field>
          <!--          </v-form>-->

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
  </div>
</template>

<script>
import AddressBox from "@/components/AddressBox";

export default {
  components: {
    AddressBox,
  },
  created() {
    this.getUserAddress();
  },
  data() {
    return {
      addressData: [],
      dialog: false,
      receiver: "",
      address: "",
      phone: "",
      phonenumber: "",
      phonenumberRules: [
        (v) => !!v || "电话号码不能为空",
        (v) => /^1[3-9][0-9]{9}$/.test(v) || "电话号码输入有误",
      ],
    };
  },
  methods: {
    async getUserAddress() {
      let res = await this.$axios.post("/api/getUserAddress.do", {
        u_id: this.$store.getters.user.u_id,
      });
      this.addressData = res.data;
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
  },
};
</script>

<style scoped>
</style>