<template>
  <div id="delivery">
    <div class="d-flex justify-center">
      <div class="grey--text text-h3">Distribution</div>
    </div>
    <div class="text-center primary--text">配送说明</div>
    <div id="main">
      <div>
        <div class="d-flex justify-center"><span>1</span></div>
        <p class="d-flex justify-center">门市自取</p>
        <div>
          法颂目前支持的收货方式有两种：门市自取、配送服务（自建物流配送和快递配送）
        </div>
        <p>自取流程为：</p>
        <div class="mt-5">
          <img src="@/assets/FootNav/lc.jpg" alt="" />
        </div>
        <div class="mt-5">下单选择自取门市及取货时间</div>
        <div class="mt-5">
          取货流程：到达自取门市——提供订购产品名称、姓名、联系方式——门市备货验货提货
        </div>
        <div>注意事项:</div>
        <div>
          <div class="mt-5">
            ◆门市自取的订单，请在规定的时间内到自取点提取产品
          </div>
          <div class="mt-5">
            ◆网上订购享受专有的会员积分抵消费活动，不参与门市的任何活动及不适用门市会员卡支付
          </div>
          <div class="mt-5">
            ◆自提时间：按照取货门市的营业时间而定（如遇国家法定节假日，则以法颂发布放假时间为准)
          </div>
          <div class="mt-5">
            ◆产品需顾客当面点清，离开提货前台后法颂将不再对产品负责
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-center">
          <span>2</span>
        </div>
        <p class="d-flex justify-center">配送服务</p>
        <div class="mt-5">
          <div class="mt-5">
            1）商城内一次性消费满89元支持部分津南区及各门店三公里内免费配送服务，其他外环线内区域满150元配送。
          </div>
          <div class="mt-5">
            免费配送区域：天津市外环线内（老外环线）及西青大寺镇部分区域、津南部分区域，塘沽门店三公里范围内（骑手配送，骑手配送具有不接单及磕碰风险，建议到店自提）
          </div>
          <div class="mt-5">
            2）快递配送 仅支持全国送区域内产品配送，部分偏远地区除外。
          </div>
          <div id="map" class="map"></div>
        </div>
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
  mounted() {
    var map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(104.07258, 30.550701), 20); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      })
    );
    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
  },
};
</script>

<style scoped>
#delivery {
  margin: 1% 10%;
}
#main {
  display: flex;
  /* justify-content: center; */

  height: 800px;
  margin-top: 15px;
}
#main > div {
  flex: 1;
}
span {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: block;
  line-height: 60px;
  font-style: oblique;
  text-align: center;
  font-size: 25px;
}
#map{
  width: 800px;
  height: 500px;
}
</style>
