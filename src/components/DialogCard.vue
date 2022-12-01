<template>
  <div
    class="dialog"
    v-if="$store.state.dialogVisible"
    @click="dialogVisible(false)"
  >
    <div @click.stop class="dialog__content">
      <div class="inputs__and__book">
        <div class="inputs">
          <input class="name" placeholder="ФИО" type="text" />
          <input class="phone__number"  placeholder="Номер телефона" type="number" />
          <input type="email" placeholder="Почта"/>
        </div>
        <button @click="dialogVisible(false)">заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      dialogVisible: "dialogVisibleChange",
    }),
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;
}
.dialog__content {
  width: 616px;
  height: 496px;
  margin: auto auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputs__and__book {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.inputs input {
  width: 100%;
  padding: 12px 8px;
  margin: 12px 0;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #296bdb;
}
.inputs__and__book button{
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  border: none;
  background: #296bdb;
  padding: 8px 12px;
  width: max-content;
  border-radius: 2px;
  margin-top: 24px;
}
@media (max-width:660px) {
  .dialog__content {
  width: 360px;
  height: 360px;
  margin: auto auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
}
</style>
