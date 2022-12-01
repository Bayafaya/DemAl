import { createStore } from "vuex";

export default createStore({
    state: () => ({
        dialogVisible: false,
    }),
    getters: {

    },
    mutations: {
        dialogVisibleChange(state, dialog) {
            state.dialogVisible = dialog;
        },
    },
    actions: {

    },
});