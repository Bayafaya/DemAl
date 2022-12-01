<template>
    <footer>
    <div class="container">
      <ul>
        <li>О месторождении</li>
        <li>Свойства соли</li>
        <li>Дистрибуция</li>
        <li>Отзывы</li>
      </ul>
      <h4>made in Kyrgyzstan</h4>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  padding: 336px 0 48px 0;
  background-image: url("../images/footerBg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
footer ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 48px;
}
footer ul li {
  list-style: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}
footer h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 42px;
  text-align: center;
  color: #FFFFFF;
}

@media(max-width:890px){
footer {
  padding: 60px 0 48px 0;
  background-image: url("../images/footerBg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
footer ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 48px;
}
footer ul li {
    margin-bottom: 24px;
}
}
</style>