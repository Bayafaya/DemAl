<template>
  <main-banner />
  <second-location-block />
  <third-block />
  <fourth-block />
  <review-block />
  <read-more />
  <default-footer />
  <dialog-card />

</template>

<script>
import MainBanner from "./components/MainBanner.vue";
import SecondLocationBlock from "./components/SecondLocationBlock.vue";
import ThirdBlock from "./components/ThirdBlock.vue";
import FourthBlock from "./components/FourthBlock.vue";
import ReviewCard from "./components/ReviewCard.vue";
import ReviewBlock from "./components/ReviewBlock.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import ReadMore from "./components/ReadMore.vue";
import DefaultFooter from "./components/DefaultFooter.vue";
import DialogCard from "./components/DialogCard.vue";


export default {
  components: {
    MainBanner,
    SecondLocationBlock,
    FourthBlock,
    ReviewCard,
    Swiper,
    SwiperSlide,
    ReviewBlock,
    ReadMore,
    ThirdBlock,
    DefaultFooter,
    DialogCard,
  },

};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  width: 1180px;
  width: 80%;
}
@media (max-width: 1280px) {
  .container {
    width: 80%;
  }
}
@media (max-width: 1020px) {
  .container {
    width: 90%;
  }
}
</style>
