<template>
  <div class="youtube container">
    <h2>Что говорят наши клиенты ?</h2>
    <swiper
      :slides-per-view="tabShow"
      :space-between="20"
    >
      <swiper-slide>
        <review-card :reviewCardData="reviewCardData" />
      </swiper-slide>
      <swiper-slide>
        <review-card :reviewCardData="reviewCardData" />
      </swiper-slide>
      <swiper-slide>
        <review-card :reviewCardData="reviewCardData" />
      </swiper-slide>
      <swiper-slide>
        <review-card :reviewCardData="reviewCardData" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import ReviewCard from "../components/ReviewCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  components: {
    ReviewCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviewCardData: {
        id: 1,
        srcImg: "src/images/youtube.png",
        date: "17 мая 2022",
        title: "“Результаты стали видны с первых дней лечения!”",
        body: ` "Айбек Маткасымович пришел к нам с острыми болями в бронхах. После долгих, безрезультатных походов к врачам, он наконец нашел панацею в нашем продукте "`,
      },
      tabShow:2,
    };
  },
  mounted() {
    if (window.innerWidth < 660) {
      this.tabShow = 1;
    }  
    else{
      this.tabShow = 2;
    }  
  },
};
</script>

<style scoped>
.youtube {
  padding: 72px 0;
}
.youtube h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #1d58af;
  text-align: center;
  padding-bottom: 94px;
}
</style>
