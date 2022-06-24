import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carousel3d from "vue-carousel-3d";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);
Vue.use(Carousel3d);

export default new Vuetify({
  icons: {
      iconfont: "fa" || "md" || "mdi",
    },
    theme: {
      themes: {
        dark: {
          background: "#2F3346",
        },
      },
    },
});
