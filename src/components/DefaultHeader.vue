<template>
  <header class="container">
    <div class="logo">
      <img src="../images/logo-removebg-preview.png" alt="logo" />
    </div>
    <nav>
      <ul class="nav-menu">
        <li>О месторождении</li>
        <li>Свойства соли</li>
        <li>Дистрибуция</li>
        <li>Отзывы</li>
      </ul>
    </nav>
    <div class="book"  @click="dialogVisible(true)">заказать</div>
    <div class="hamburger" @click="menuBarClick">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
            dialogVisible:'dialogVisibleChange',
        }),
    menuBarClick() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  padding-top: 34px;
}
nav {
  width: 60%;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
}
.nav-menu li {
  list-style: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: #ffffff;
}
.logo {
  width: max-content;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: #ffffff;
}
.logo img {
  height: 60px;
}
.book {
  width: max-content;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 6px;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
}
.hamburger {
  display: none;
  cursor: pointer;
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: white;
}
@media (max-width: 1040px) {
  nav {
    width: 64%;
  }
}
@media (max-width: 780px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Raleway", sans-serif;
    padding-top: 34px;
  }
  nav {
    width: max-content;
  }
  nav div {
    margin: 0 0;
  }
  .hamburger {
    display: block;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .nav-menu {
    position: absolute;
    left: -100%;
    top: 90px;
    gap: 0;
    flex-direction: column;
    /* border: 1px solid rgba(60, 108, 184, 1); */
    background: rgba(60, 108, 184, 0.5);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    z-index: 10;
    padding-bottom: 24px;
  }
  .nav-menu li {
    color: #ffffff;
    padding: 24px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
  nav div {
    margin: 0 0;
  }
  .nav-menu.active {
    left: 0;
  }
  .book {
    margin: 0 46px 0 auto;
  }
}
</style>
