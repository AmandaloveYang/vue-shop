<template>
  <v-container>
    <v-row class="d-flex flex-column align-center my-10">
      <div class="text-h3 grey--text">Member Center</div>
      <div class="text-center primary--text">会员中心</div>
    </v-row>
    <v-card tile class="mb-10">
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-list rounded>
              <!-- <v-subheader>REPORTS</v-subheader> -->
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="9">
            <div v-if="$route.path == '/member'">
              <v-row>
                <v-col cols="2" class="d-flex align-center justify-center">
                  <v-avatar size="88">
                    <v-img
                      :src="`https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly`"
                      class="mb-6"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="10" class="pt-10">
                  <div class="text-h5">{{ $store.getters.user.username }}</div>
                  <div class="text-subtitle-1 grey--text">下午好！</div>
                  <div class="text-subtitle-1 grey--text">
                    持有法颂会员卡或储值卡请到法颂各连锁店内注册绑定手机号，
                    即可在官网查询余额和消费。查询请点击我的钱包
                  </div>
                  <div
                    class="
                      text-caption text-decoration-underline
                      font-weight-bold
                      primary--text
                    "
                  >
                    <a href="#/member/accountDetails"> 修改个人信息 > </a>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <template v-for="(item, index) in todos">
                  <v-col class="d-flex justify-space-around" :key="index">
                    <v-icon class="text-h2" :color="item.iconColor">{{
                      item.icon
                    }}</v-icon>
                    <div class="d-flex flex-column justify-center">
                      <div class="mb-2 text-h6">
                        {{ item.todo }}：{{ item.amount }}
                      </div>
                      <div class="text-subtitle-2">
                        <a
                          :href="'#/member/' + item.href"
                          class="secondary--text"
                          >{{ item.showTodo }} ></a
                        >
                      </div>
                    </div>
                  </v-col>
                  <v-divider
                    vertical
                    class="my-6"
                    :key="index + '0'"
                  ></v-divider>
                </template>
              </v-row>
            </div>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "我的订单", icon: "mdi-text-box", to: "/member/myOrders" },
        {
          text: "地址管理",
          icon: "mdi-map-marker-radius",
          to: "/member/addressManagement",
        },
        {
          text: "评价管理",
          icon: "mdi-comment-processing",
          to: "/member/commentManagement",
        },
        {
          text: "账户信息",
          icon: "mdi-account-details",
          to: "/member/accountDetails",
        },
      ],
      todos: [
        {
          icon: "mdi-truck",
          iconColor: "purple",
          todo: "配送中订单",
          amount: 0,
          showTodo: "查看正在配送订单",
          href: "myOrders",
        },
        {
          icon: "mdi-comment-quote",
          iconColor: "green",
          todo: "待评论数",
          amount: 0,
          showTodo: "评论管理",
          href: "commentManagement",
        },
        {
          icon: "mdi-wallet",
          iconColor: "orange",
          todo: "待支付订单",
          amount: 0,
          showTodo: "查看待支付订单",
          href: "myOrders",
        },
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>