<template>
  <div class="fourthBlockBg">
    <div class="fourthBlock container">
      <img src="../images/fourthBlockMain.png" alt="fourthBlockMain" />
      <div class="fourthBlock__item">
        <h5>специальное предложение</h5>
        <div class="fourthBlock__card">
          <h4>Хотели бы стать дистрибьютором?</h4>
          <button>Заполнить анкету</button>
          <img src="../images/fourthBlockBottle.png" alt="fourthBlockBottle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.fourthBlockBg {
  background-image: url("../images/fourthBg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.fourthBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 104px;
  padding: 120px 0;
}
.fourthBlock h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #3069be;
}
.fourthBlock img {
  height: 380px;
}
.fourthBlock__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.fourthBlock__card {
  position: relative;
  background-image: url("../images/dsagq.png"),
    url("../images/fourthBlockCardBg.png");
  background-size: cover, cover;
  background-position: center, center;
  background-repeat: repeat, no-repeat;
  padding: 24px 42px;
  display: flex;
  flex-direction: column;
  gap: 62px;
}
.fourthBlock__card h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
}
.fourthBlock__card button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #1d58af;
  border: none;
  background: #ffffff;
  padding: 8px 24px;
  border-radius: 2px;
  width: max-content;
}
.fourthBlock__card button:hover {
  box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 1);
}
.fourthBlock__card img {
  position: absolute;
  right: 48px;
  top: -78px;
  height: 340px;
}
@media (max-width:1378px){
  .fourthBlock img {
  height: 280px;
}
  .fourthBlock__card img {
  position: absolute;
  right: 0px;
  top: -78px;
  height: 340px;
}
.fourthBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 46px;
  padding: 120px 0;
}
}
@media (max-width:960px){
  .fourthBlock img {
  height: 220px;
}
  .fourthBlock__card img {
  position: absolute;
  right: 0px;
  top: -48px;
  height: 260px;
}
.fourthBlock__card{
  gap: 24px;
}
.fourthBlock h5 {
  font-size: 14px;
  line-height: 30px;
}
.fourthBlock__card h4 {
  font-size: 26px;
  line-height: 30px;
}
.fourthBlock__card button {
  font-size: 14px;
  line-height: 30px;
  padding: 8px 12px;
  width: max-content;
}
}

@media (max-width:785px){
.fourthBlock {
flex-direction: column;
}
.fourthBlock img {
  height: 280px;
}
}
@media (max-width:445px){
  .fourthBlock__card img {
  position: absolute;
  right: 0px;
  top: -48px;
  height: 220px;
}
.fourthBlock__card {
  padding: 12px 12px;
}
}
</style>
