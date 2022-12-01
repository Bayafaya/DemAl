<template>
  <div v-for="feature in featuresData" :key="feature.id" class="thirdBlock__item">
    <img v-if="this.windowWidth > 480"
      :style="{ order: `${feature.order}` }"
      :src="feature.imgSrc"
      alt="thirdBlockSecond"
    />
    <img v-else 
      :style="{ order: `0` }"
      :src="feature.imgSrc"
      alt="thirdBlockSecond"
    />
    <p>
     {{ feature.text}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    featuresData: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      windowWidth: window.innerWidth,
    }
  }

};
</script>

<style scoped>
.thirdBlock__item {
  display: flex;
  gap: 36px;
  margin-bottom: 48px;
  align-items: center;
}
.thirdBlock__item img {
  height: 480px;
}
.thirdBlock__item p {
  box-shadow: 0px 0px 34px 2px rgba(0, 0, 0, 0.4);
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
  color: #000000;
  padding: 24px;
  background: #FFFFFF;
}
@media(max-width:810px){
  .thirdBlock__item img {
  height: 380px;
}
}
@media(max-width:660px){
  .thirdBlock__item img {
  height: 220px;
}
.thirdBlock__item {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  align-items: center;
}
}
@media(max-width:480px){
.thirdBlock__item {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  align-items: center;
  flex-direction: column;
}
.thirdBlock__item img {
  height: 380px;
}
}
</style>
