<template>
  <v-container fluid class="d-flex justify-center">
    <div width="990">
      <div class="d-flex justify-center">
        <div class="grey--text text-h3">BUSINESS</div>
      </div>
      <div class="text-center primary--text mb-5">企业专区</div>
      <div id="a">
        <hr style="width: 100%; color: grey; text-align: center" />
      </div>
      <v-card-text class="pa-0 d-flex align-center flex-column">
        <div class="text-h5 my-6">员工福利</div>
        <div>一、蛋糕券</div>
        <div>
          为您挑选适合您企业的员工生日蛋糕，可凭贵公司专属蛋糕券领取蛋糕；
        </div>
        <div>
          还可按照您预先提供的生日名单，按照您预约的日期，为您配送蛋糕。
        </div>
        <v-img
          class="mx-auto"
          width="500px"
          :src="require('@/assets/employee/cake1.jpg')"
        >
        </v-img>
        <div>二、储值卡</div>
        <div>
          实体储值卡，可充值任意金额，无有效期限，储值卡内金额可多次使用，购买门市自制品，西点、蛋糕、面包等产品。
        </div>
        <v-img
          class="mx-auto"
          width="500px"
          :src="require('@/assets/employee/quan.jpg')"
        >
        </v-img>
        <div>三、粽子采购</div>
        <div>端午节期间，多款粽子礼盒可选，可提供实物或提货券。</div>
        <div>支持配送服务。</div>
        <v-img
          class="mx-auto"
          width="500px"
          :src="require('@/assets/employee/libao.jpg')"
        >
        </v-img>
        <div>四、月饼采购</div>
        <div>中秋节期间，多款中秋礼盒可选，可提供实物或提货券</div>
        <div>支持配送服务。</div>
        <v-img
          class="mx-auto"
          width="500px"
          :src="require('@/assets/employee/libao2.jpg')"
        >
        </v-img>
        <div>部分合作企业名录，排名不分先后</div>
        <v-img
          class="mx-auto"
          width="500px"
          :src="require('@/assets/employee/sh.jpg')"
        >
        </v-img>
        <div id="jc">团购业务请联系：周经理 13612142457/022-27233223</div>
      </v-card-text>
    </div>
  </v-container>
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
div {
  margin-top: 5px;
  margin-bottom: 5px;
}
#jc {
  font-weight: bold;
}

</style>