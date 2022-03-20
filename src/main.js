import { createApp } from 'vue'
import App from './App.vue'

import apolloProvider from './services/github-apollo-services';

/* eslint-disable */
createApp(App)
    .use(apolloProvider)
    .mount('#app');
