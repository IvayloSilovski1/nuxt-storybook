import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// NEED THESE TO LOAD SCSS as global
// import "../assets/**/*.scss";
// import "../assets/style-resources.scss";
// import "../assets/main.scss";

import Buefy from 'buefy'
import Vue from 'vue'

Vue.use(Buefy)



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    extended: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    vieports: INITIAL_VIEWPORTS
  }
}
