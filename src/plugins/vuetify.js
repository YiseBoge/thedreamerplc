// Vuetify Documentation https://vuetifyjs.com

import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VCol, VRow } from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow
  }
});

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#2D5B8D",
        secondary: "#f5f5f5",
        accent: "#204165",
        error: "#E64A19",
        info: "#2196F3",
        success: "#C0CA33",
        warning: "#FBC02D"
      },
      dark: {
        primary: "#2D5B8D",
        secondary: "#131313",
        accent: "#204165",
        error: "#E64A19",
        info: "#2196F3",
        success: "#C0CA33",
        warning: "#FBC02D"
      }
    }
  }
});
