<template>
    <div class="review__card">
    <img :src="reviewCardData.srcImg" alt="youtube" />
    <span> {{reviewCardData.date}}</span>
    <h3>{{reviewCardData.title}}</h3>
    <p>
     {{ reviewCardData.body }}
    </p>
  </div>
</template>

<script>
export default {
props:{
    reviewCardData:{
        type:Object,
        required:true,
    }
},
}
</script>

<style scoped>
.review__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.review__card img {
  width: auto;
  height: 240px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.45);
}
.review__card span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #1d58af;
}
.review__card h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #1d58af;
}
.review__card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height:30px;
  text-align: center;
  color: #1d58af;
}
@media (max-width:1200px) {
  .review__card img {
  width: auto;
  height: 200px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.45);
}
@media (max-width:915px) {
  .review__card img {
  width: auto;
  height: 140px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.45);
}
.review__card span {
  font-size: 18px;
  line-height: 30px;
}
.review__card h3 {
  font-size: 26px;
  line-height: 32px;
}
.review__card p {
  font-size: 14px;
  line-height:18px;
}
}
}
</style>