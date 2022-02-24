<template>
  <div id="shop">
    <div class="d-flex justify-center">
      <div class="grey--text text-h3">Shopping Directory</div>
    </div>
    <div class="text-center primary--text">购物指南</div>
    <div style="margin-top: 30px">
      <img src="@/assets/FootNav/shop2.png" alt="" />
    </div>
    <div class="mt-5">1、注册/登陆FOZOON法颂官方商城</div>
    <div>
      如果您未在网站注册过，点击商城首页右上角【注册】按钮，根据提示进行账号注册；如果您已注册过，只需点击首页右上角【登录】按钮，输入验证码即可登录。
    </div>
    <div class="mt-5">2、选购商品放入购物车</div>
    <div>
      浏览/筛选您需要的商品，点击"立即购买"或放入"我的购物车"；进入购物车后，如果您还想购买其他感兴趣的商品，点击商品列表下方【继续购物】按钮即可；如果您不需要其他商品，即可点击商品列表下方的【结算】即进入结算页面。
    </div>
    <div class="mt-5">3、填写收货信息</div>
    <div>
      在收货信息页面填写收货人的详细信息。为了保证您的商品顺利配送，请准确填写收货人的姓名、地址、电话、配送时间等收货信息。注：官方蛋糕需至少提前2小时订购。部分产品需提前24小时预约，具体请详见产品详情页面
    </div>
    <div class="mt-5">4、选择配送方式</div>
    <div>
      填写收货人信息后，您可以根据您所在地区和时间要求选择您想要的送货方式。可以选择由FOZOON法颂配送至收货地址，也可以到指定自提点地点进行自提。
    </div>
    <div class="mt-5">5、选择付款方式</div>
    <div>
      完成收货人信息填写后，即可选择该订单付款方式，仅限网上支付供您选择，如果账户内有优惠券/积分等，可进行相应勾选。电脑pc端建议使用支付宝和网银在线，手机微信公众账号内登陆建议使用微信支付和网银在线。手机版或IPAD使用浏览器登陆建议使用支付宝和网银在线。
    </div>
    <div class="mt-5">6、订单提交完成</div>
    <div>
      填写并确认完以上信息，您就可以放心提交此订单，等待收货了。在提交订单后，您也可以通过会员中心"我的订单"查询您的订单状态。客服受理和发货时您会收到短息提醒。
    </div>
    <div class="mt-10">
      备注：补缴款请扫描下方法颂官方微信支付完成付款，完成后请致电4000 233
      234核实即可。
    </div>
    <div id="main">
      <div>
        <img src="@/assets/FootNav/zfb.jpg" alt="" class="img" />
      </div>
      <div style="margin-left: 100px">
        <img src="@/assets/FootNav/weixin.png" alt="" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#shop {
  margin: 1% 10%;
}
#main {
  display: flex;
  margin-top: 50px;
}
.img {
  width: 400px;
  height: 550px;
  flex-grow: 1;
}
</style>
