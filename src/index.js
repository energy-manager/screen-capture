import ScreenCaptureModal from "./ScreenCaptureModal.vue";

export default {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("screen-capture-modal", ScreenCaptureModal);
    }
};