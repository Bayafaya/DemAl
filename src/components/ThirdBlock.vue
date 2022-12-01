<template>
  <div class="thirdBlock">
    <div class="container">
      <h3>
        Положительное воздействие <br />
        лечебной соли
      </h3>
      <features-item :featuresData="featuresData" />
    </div>
  </div>
</template>

<script>
import FeaturesItem from "../components/FeaturesItem.vue";
export default {
  components: {
    FeaturesItem,
  },
  data() {
    return {
      featuresData: [
        {
          id: 1,
          order: 0,
          imgSrc: "src/images/thirdBlockMain.png",
          text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        tempora harum quasi debitis optio provident rem. Animi, quisquam
        adipisci veniam provident iste dolores accusamus similique consequatur
        alias commodi! Suscipit, fugiat. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt tempora harum quasi debitis optio provident
        rem. Animi, quisquam adipisci veniam provident iste dolores accusamus
        similique consequatur alias commodi! Suscipit, fugiat.`,
        },
        {
          id: 2,
          order: 1,
          imgSrc: "src/images/thirdBlockSecond.png",
          text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        tempora harum quasi debitis optio provident rem. Animi, quisquam
        adipisci veniam provident iste dolores accusamus similique consequatur
        alias commodi! Suscipit, fugiat. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt tempora harum quasi debitis optio provident
        rem. Animi, quisquam adipisci veniam provident iste dolores accusamus
        similique consequatur alias commodi! Suscipit, fugiat.`,
        },
        {
          id: 3,
          order: 0,
          imgSrc: "src/images/thirdBlockThird.png",
          text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        tempora harum quasi debitis optio provident rem. Animi, quisquam
        adipisci veniam provident iste dolores accusamus similique consequatur
        alias commodi! Suscipit, fugiat. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt tempora harum quasi debitis optio provident
        rem. Animi, quisquam adipisci veniam provident iste dolores accusamus
        similique consequatur alias commodi! Suscipit, fugiat.`,
        },
      ],
    };
  },

};
</script>

<style scoped>
.thirdBlock {
  background-image: url("../images/secondBlockBg.png"),
    url("../images/thirdBlockBg.png");
  background-size: 1100px 880px, 1100px 980px;
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  padding-bottom: 120px;
}

.thirdBlock h3 {
  padding: 146px 0 73px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  color: #1d58af;
}
@media (max-width: 810px) {
  .thirdBlock h3 {
    font-size: 32px;
    line-height: 38px;

  }
}
</style>
