<template>
  <div class="d-flex justify-start">
    <v-divider vertical class="my-10"></v-divider>
    <div class="box pa-5">
      <div class="box-1 mb-5 d-flex justify-center align-center">
        <v-avatar size="160">
          <v-img
            :src="`https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly`"
            class="mb-6"
          ></v-img>
        </v-avatar>
      </div>
      <v-btn color="primary" block elevation="0" tile>编辑头像</v-btn>
    </div>
    <div class="box2 pl-10 pr-10 pt-10 mb-10 d-flex flex-column justify-center">
      <v-text-field
        label="您的姓名"
        outlined
        dense
        v-model="user.username"
      ></v-text-field>
      <v-text-field
        label="手机号码"
        outlined
        dense
        v-model="user.phone"
      ></v-text-field>
      <div class="d-flex align-center mt-n7">
        <div class="text-body-2 mx-3">性别</div>
        <v-radio-group row v-model="user.gender">
          <v-radio label="男" value="男"></v-radio>
          <v-radio label="女" value="女"></v-radio>
        </v-radio-group>
      </div>
      <v-menu
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            label="您的生日"
            outlined
            dense
            v-model="user.birth"
            v-on="on"
            v-bind="attrs"
          ></v-text-field>
        </template>
        <v-date-picker v-model="user.birth" no-title scrollable>
        </v-date-picker>
      </v-menu>

      <div class="text-caption">
        温馨提示:为了更好的给您提供满意的服务，请填写正确的个人信息
      </div>
      <v-btn
        color="secondary"
        class="mt-3"
        elevation="0"
        tile
        style="width: 120px"
        >保存</v-btn
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userdata: {},
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.box {
  width: 220px;
  height: 400px;
  /* border: 1px solid red; */
}
.box2 {
  width: 620px;
  height: 400px;
  /* border: 1px solid red; */
}
.box-1 {
  width: 180px;
  height: 180px;
  /* border: 1px solid red; */
}
.text {
  width: 200px;
  height: 42px;
  border: 1px solid rgb(201, 199, 199);
}
</style>