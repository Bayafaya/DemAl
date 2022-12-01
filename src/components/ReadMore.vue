<template>
  <div class="readMoreBg">
    <div class="container">
      <div class="readMore">
        <h2>Хотите знать больше о полезных свойствах соли?</h2>
        <button>Больше информации</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.readMore {
  padding: 260px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 88px;
  width: 50%;
}
.readMore h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 58px;
  color: #004a82;
}

.readMore button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  border: none;
  background: #296bdb;
  padding: 24px 46px;
  width: max-content;
}
.readMore button:hover {
  box-shadow: 0px 4px 100px rgba(29, 88, 175, 0.45);
}
.readMoreBg {
  background-image: url("../images/lastBlockBg.png");
  background-size: 1000px 800px;
  background-repeat: no-repeat;
  background-position: right bottom;
}
@media (max-width: 820px) {
  .readMore {
    padding: 120px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    width: 80%;
    background: rgba(29, 88, 175, 0.45);
    border: 1px solid #004a82;
    border-radius: 2px;
  }
  .readMoreBg {
    background-image: url("../images/lastBlockBg.png");
    background-size: 800px 500px;
    background-repeat: no-repeat;
    background-position: right bottom;
    padding-bottom: 80px;
  }
  .readMore button {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 24px;
  }
  .readMore h2 {
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
  }
}

@media (max-width: 820px) {
  .readMore {
    width: 100%;
  }
}
</style>
