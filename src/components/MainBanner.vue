<template>
  <div class="bgMountains">
    <div class="filterBlue">
        <default-header />
      <div class="container mainBanner">
        <img src="../images/demAlBottlecCutted.png" alt="demAlBottle" />
        <div class="text__block">
          <div class="explore">Открой чистоту</div>
          <div class="kg__text">ЧОң-ТуЗСКОГО</div>
          <div class="deposits">месторождения</div>
          <button>Заполнить анкету</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultHeader from "../components/DefaultHeader.vue";
export default {
  components: { DefaultHeader },
};
</script>

<style scoped>
.mainBanner {
  height: 634px;
  border: 1px solid rgba(60, 108, 184, 1);
  background: rgba(60, 108, 184, 0.5);
  margin-top: 124px;
  display: flex;
  align-items: center;
}
.mainBanner img {
  width: 300px;
  height: 105%;
  margin-bottom: 15px;
}

.explore {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  text-transform: uppercase;
  color: #ffffff;
}
.kg__text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 85px;
  line-height: 104px;
  color: #3d6db9;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.68);
  padding: 0 48px 0 0;
}
.deposits {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  text-transform: uppercase;
  color: #ffffff;
}
.mainBanner button {
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #1d58af;
  background: #ffffff;
  border-radius: 2px;
  padding: 12px 48px;
  width: max-content;
  cursor: pointer;
}
.mainBanner button:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 8px rgba(60, 108, 184, 1);
}
.text__block {
  width: max-content;
  margin: auto 0 auto auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.filterBlue {
  height: 895px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(60, 108, 184, 0.6);
}
.bgMountains {
  height: 895px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../images/Rectangle.png");
}

/* --------------------------------- */
@media(max-width:910px){
  .mainBanner {
  height: auto;
  margin-top: 40px;
}
  .mainBanner img {
  width: 220px;
  height: 105%;
  margin-bottom: 15px;
}
.explore {
  font-size: 38px;
  line-height: 42px;
}
.kg__text {
  font-size: 48px;
  line-height: 104px;
  padding: 0 0 0 0;
}
.deposits {
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
}
.mainBanner button {
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  padding: 12px 48px;
  width: max-content;
}
}
/* --------------------------------- */
@media(max-width:712px){
  .mainBanner {
  height: auto;
 
}
  .mainBanner img {
  width: 220px;
  height: 105%;
  margin-bottom: 15px;
}
.explore {
  font-size: 38px;
  line-height: 42px;
}
.kg__text {
  font-size: 48px;
  line-height: 58px;
  padding: 0;
}
.deposits {
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
}
.mainBanner button {
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  padding: 12px 48px;
  width: 80%;
}
}
@media(max-width:680px){
  .mainBanner {
  height: auto;
  margin-top: 84px;
  display: flex;
  align-items: center;
}
.mainBanner img {
  width: 120px;
  height: 105%;
  margin-bottom: 15px;
}
}
@media(max-width:600px){
  .mainBanner {
  height: auto;
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 24px;
}
.mainBanner img {
  width: 160px;
  height: 280px;
  margin-bottom: 15px;
}
.text__block {
  width: max-content;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
  text-align: center;
 align-items: center;
}
.filterBlue {
  height: 880px;
}
.bgMountains {
  height: 880px;
}
}
@media(max-width:475px){ 
  .explore {
  font-size: 24px;
  line-height: 28px;
}
.kg__text {
  font-size: 34px;
  line-height: 42px;
  padding: 0;
}
.deposits {
  font-size: 24px;
  line-height: 28px;
}
.mainBanner button {
  font-size: 14px;
  line-height: 16px;
  padding: 12px 24px;
}
.filterBlue {
  height: 680px;
}
.bgMountains {
  height: 680px;
}
}
</style>
