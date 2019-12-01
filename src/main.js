import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import { Notification } from "element-ui";
import { handleResponseError } from "./utils/http.service";
import VueSVGIcon from "vue-svgicon";

Vue.use(VueSVGIcon);
Vue.use(VeeValidate);

const NotifyWrapper = {
  install(Vue) {
    Vue.prototype.$notify = preferences => {
      Notification({
        position: "top-right",
        offset: 80,
        ...preferences
      });
    };
  }
};
Vue.use(NotifyWrapper);

handleResponseError(({ title, message }) => {
  Vue.prototype.$notify({
    type: "error",
    title,
    message
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
