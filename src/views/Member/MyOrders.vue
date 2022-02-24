<template>
  <div class="">
    <div>
      <div class="text-caption">订单类型</div>
      <v-chip-group v-model="selectedStatus">
        <v-chip active-class="secondary--text">
          全部订单
          <span class="ml-2">{{ orderItems.length }}</span>
        </v-chip>
        <v-chip
          v-for="(item, index) in orderStatus"
          :key="index"
          active-class="secondary--text"
          >{{ item }}
          <span class="ml-2">{{ getAmountByStatus(item) }}</span>
        </v-chip>
      </v-chip-group>
      <div
        v-for="(order, index) in getOrdersByStatus()"
        :key="index"
        class="mb-8"
      >
        <div class="d-flex mb-2">
          <v-spacer></v-spacer>
          <v-chip class="secondary mr-2">订单号：{{ order.o_id }}</v-chip>
          <v-chip class="secondary">时间：{{ order.date.slice(0, 10) }}</v-chip>
        </div>
        <v-data-table
          hide-default-footer
          :headers="[
            {
              text: '商品信息',
              value: 'info',
              width: '300',
            },
            {
              text: '单价',
              value: 'price',
              align: 'center',
              cellClass: '',
            },
            { text: '数量', value: 'amount' },
            {
              text: '实付款',
              value: 'subTotal',
              align: 'center',
            },
            { text: '评价', value: 'comment' },
          ]"
          :items="order.orderDetail"
        >
          <template v-slot:[`item.info`]="{ item }">
            <div>
              <div class="text-left d-flex flex-column justify-center my-2">
                <div class="text-subtitle-1 font-weight-black">
                  {{ item.name }}
                </div>
                <div class="text-caption">
                  {{ item.size }}/{{ item.taste ? item.taste : "-" }}
                </div>
              </div>
            </div>
          </template>
          <template v-slot:[`item.price`]="{ item }">
            <span class=""
              >{{ item.basic_price + item.taste_add + item.size_add }}.00</span
            >
          </template>
          <template v-slot:[`item.amount`]="{ item }">
            <span>{{ item.amount }}</span>
          </template>
          <template v-slot:[`item.subTotal`]="{ item }">
            <span
              >{{
                (item.basic_price + item.size_add + item.taste_add) *
                item.amount
              }}.00</span
            >
          </template>
          <template v-slot:[`item.comment`]="{ item }">
            <v-dialog width="400" v-model="item.dialogShow">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  color="secondary"
                  depressed
                  v-on="on"
                  v-bind="attrs"
                  v-if="!item.rating"
                >
                  <span class="text-caption">去评价</span>
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dense class="mb-7" color="secondary" dark
                  >新增评论</v-toolbar
                >
                <v-card-text>
                  <v-img
                    v-if="item.pic_name"
                    :src="require('@/assets/images/' + item.pic_name)"
                    width="240"
                    contain
                  />
                  <div class="text-h6 black--text mt-2">
                    {{ item.name }}
                  </div>
                  <div class="text-caption">
                    {{ item.size }}/{{ item.taste ? item.taste : "-" }}
                  </div>
                  <div class="my-5">
                    <span>您的评分：</span>
                    <v-rating
                      background-color="secondary"
                      color="secondary"
                      v-model="item.rating"
                    ></v-rating>
                  </div>
                  <div>
                    <span></span>
                    <v-textarea
                      outlined
                      color="secondary"
                      label="您的评论留言："
                      v-model="item.comment"
                    ></v-textarea>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="item.dialogShow = false"
                    >取消</v-btn
                  >
                  <v-btn
                    color="primary"
                    @click="
                      editComment(item);
                      item.dialogShow = false;
                    "
                    >提交评论</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn small color="primary" depressed v-if="item.rating">
              <span class="text-caption">已评价</span>
            </v-btn>
          </template>
        </v-data-table>
        <v-divider></v-divider>
        <div class="text-right text-h6 my-3">
          总价：
          <span class="font-weight-black secondary--text">{{
            "￥" + getTotalPrice(order.orderDetail) + ".00"
          }}</span>
        </div>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/ProductInfo";
export default {
  components: {
    ProductInfo,
  },
  mounted() {
    console.log(this);
    this.getOrderItems();
  },
  data() {
    return {
      orderItems: [],
      items: ["待支付", "配送中", "已完成"],
      number: "",
      orderStatus: ["待支付", "配送中", "已完成"],
      selectedStatus: 0,
    };
  },

  methods: {
    async getOrderItems() {
      console.log(this.$store.getters.user.u_id);
      let res = await this.$axios.get(
        "/api/getOrderInfo.do?u_id=" + this.$store.getters.user.u_id
      );
      this.orderItems = res.data.map((item) => ({
        ...item,
        dialogShow: false,
      }));
    },
    getTotalPrice(item) {
      return item.reduce(
        (total, item) =>
          total +
          (item.basic_price + item.taste_add + item.size_add) * item.amount,
        0
      );
    },
    getOrdersByStatus() {
      return this.selectedStatus == 0
        ? this.orderItems
        : this.orderItems.filter(
            (order) => order.status == this.orderStatus[this.selectedStatus - 1]
          );
    },
    getAmountByStatus(status) {
      return this.orderItems.filter((order) => order.status == status).length;
    },
    async editComment(item) {
      let { comment, rating, od_id } = item;
      await this.$axios.post("/api/editComment.do", { comment, rating, od_id });
    },
  },
};
</script>

<style scoped>
</style>