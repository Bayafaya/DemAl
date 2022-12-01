<template>
  <div class="firstBlockBg">
    <div class="location container">
      <img src="../images/Group_3.png" alt="Group_3" />
      <div class="location__text">
        <h6>история</h6>
        <h3>Месторождение “Чон-Туз”</h3>
        <p>
          Месторождение “Чон-Туз” расположено на юго-западе Кочкорского района
          Нарынской области на высоте 2100 м над уровнем моря. По данным
          геологов, природная соль Чон-Туз сформировалась в Кочкорском озере
          около 40 млн лет назад. Лечебное воздействие оказывает среда,
          насыщенная аэроионами соли. Благодаря своим физико-химическим
          свойствам ионы соли оказывают бактерицидное и бактериостатическое
          действие.
        </p>
      </div>
    </div>
    <div class="location container">
      <img
        :style="{ order: `${this.order}` }"
        src="../images/Group_4.png"
        alt="Group_4"
      />
      <div class="location__text">
        <h6>эффект лечебницы</h6>
        <h3>Высокогорная спелеотерапия</h3>
        <p>
          Саногенный эффект высокогорной спелеотерапии (ВС) на организм больных
          уникален, так как обусловен интеграцией благоприятного воздействия
          микроклимата соляной шахты и условий горного климата. Микрочачтицы
          соли, попадая в дыхательные пути, оказывают бактерицидное действие на
          микрофлору, повышают мукоцилиарный клиренс, улучшая дренажную функцию
          бронхов, и уменьшают отек их стенок. Резкое сужение спектра аллергенов
          в окружающей среде вызывает снижение синтеза и постепенную элиминацию
          из организма патологических имунноглобунов класса Е.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: 1,
    };
  },
  mounted() {
    if (window.innerWidth < 760) {
      this.order = 0;
    }
  },
};
</script>

<style scoped>
.firstBlockBg {
  background-image: url("../images/firstBlockBg.png");
  background-size: 800px 900px;
  background-position: start;
  background-repeat: no-repeat;
}
.location {
  padding-top: 146px;
  display: flex;
  gap: 136px;
  align-items: center;
}
.location img {
  height: 500px;
}

.location__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36%;
  gap: 18px;
}
.location__text h6 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #1d58af;
}
.location__text h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #1d58af;
  margin-bottom: 36px;
}
.location__text p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
}
@media (max-width: 1200px) {
  .location img {
    height: 420px;
  }
  .location {
    gap: 86px;
    align-items: center;
  }
}
@media (max-width: 960px) {
  .location img {
    height: 360px;
  }
  .location {
    gap: 46px;
    align-items: center;
  }
  .location__text h6 {
    font-size: 16px;
    line-height: 22px;
  }
  .location__text h3 {
    font-size: 26px;
    line-height: 32px;
    color: #1d58af;
    margin-bottom: 18px;
  }
  .location__text p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
}

@media (max-width: 760px) {
  .location img {
    height: 360px;
    order: 0;
  }
  .location {
    gap: 46px;
    align-items: center;
    flex-direction: column;
  }
  .location__text {
    width: 100%;
  }
  .location__text h6 {
    font-size: 16px;
    line-height: 22px;
  }
  .location__text h3 {
    font-size: 26px;
    line-height: 32px;
    color: #1d58af;
    margin-bottom: 18px;
  }
  .location__text p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
}
@media (max-width: 475px) {
  .location img {
    height: 280px;
  }
}
</style>
