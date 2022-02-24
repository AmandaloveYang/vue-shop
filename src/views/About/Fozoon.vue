<template>
  <div id="about">
    <div id="conent">
      <div class="grey--text text-h3">About us</div>
    </div>
    <div class="text-center primary--text">关于法颂</div>
    <div id="content-text">
      <span>
        天津市法颂食品有限公司，始建于2005年9月，是一家集西点、蛋糕、面包等为一体的连锁性烘焙企业，定位中高端西点，目前为止，直营20余家连锁门店；2013年12月，公司斥资兴建3000平米的新型现代化中央工厂正式投产使用。FOZOON法颂使用行业高精度新型生产设备，甄选行业内的优良食材；志于法式古早味开发和传承，传播地道口碑味道。
      </span>
    </div>
    <div id="img1">
      <img src="@/assets/FootNav/about-1.jpg" alt="" />
    </div>
    <div style="margin-top: 30px; color: blue">
      <p>企业的核心价值观：健康、美味、精致、创新</p>
    </div>
    <div>
      <div>
        「健康」是FOZOON法颂有史以来始终坚守的基本理念。FOZOON法颂，传承不止于法式经典制作技艺，还有对待生活的态度-健康、积极、乐观，源于法兰西浪漫的情怀和惬意都是对美好生活的向往与馨享。懂得享受生活的人，才能真正理解「健康」的重要性和深远意义。注重食品的「新鲜性」、坚持「现烤现做」是FOZOON法颂的特色和众多甜品品牌的不同之处！
      </div>
      <div>
        「美味」是食品的基本诉求和要求，也是FOZOON法颂始终的追求，也为此竭尽全力。法国鲜乳奶油、比利时的丝滑醇柔巧克力、日本的低筋阳光小麦粉、意大利的醇香芝士……，这一切都是FOZOON法颂坚守的初心和对待食品的态度，苛求道地食材正规的流通渠道，保证法式甜品的正宗质地和纯正口味，也正是如此，才成就了FOZOON法颂在坊间的良好口碑。
      </div>
      <div>
        「精致」是法式甜品的文化体现；FOZOON法颂紧抓这一精髓，坚持正宗传承。法式甜品文化，自有其独特的法兰西浪漫情调和惬意的轻松，这为小资们所追崇，也是FOZOON法颂挑拨大众味蕾、促其感受生活魅力的诀窍。不经意的舌尖诱惑，不仅仅是味蕾的蠢蠢欲动，还有清风拂面的生活向往，时光就此定格是多么的美好。
      </div>
      <div>
        「创新」是民族进步和社会发展的不竭动力；FOZOON法颂传承正宗法式技艺，不囿于传统制作手法和口味止步不前，而是在新技术、新口味、新产品等方面不断创新，FOZOON法颂志于打造独有的甜品文化和产品特色。
      </div>
    </div>
    <div id="img1">
      <img src="@/assets/FootNav/about-1.jpg" alt="" />
    </div>
    <div id="img1">
      <img src="@/assets/FootNav/about-1.jpg" alt="" />
    </div>
    <div style="margin-top: 50px">
      <div>FOZOON法颂，做给家人吃的食物。</div>
      <div>
        FOZOON法颂，传承正宗法式甜品大师经典技艺，严循古法纯手工精制的精髓，倾力传递道地法式古早味。
      </div>
      <div>
        FOZOON法颂，致力于法式甜品自然纯正美味的传递使命，艰辛却硕果累累；FOZOON法颂，收获了太多来自忠实粉丝的追随和他们传递来的充裕能量，这也正是FOZOON法颂砥砺前行的不竭动力和力量源泉！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
};
</script>

<style scoped>
#conent {
  display: flex;
  justify-content: center;
}
#about {
  margin: 1% 10%;
}
#content-text {
  text-indent: 2em;
}
#img1 > img {
  width: 600px;
  height: 550px;
}
#img1 {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>