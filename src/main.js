import { createApp } from 'vue'
import App from './App.vue'

import FontAwesomeIcon from './utils/font-awesome-icon';

import apolloProvider from './services/github-apollo-services';

/* eslint-disable */
createApp(App)
    .use(apolloProvider)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
