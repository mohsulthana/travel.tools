import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBookmark, faBell, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faMapMarkerAlt, faCalendarWeek, faBars, faWallet,
  faAddressCard, faAmbulance, faWifi, faCameraRetro,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LightTimeline from 'vue-light-timeline';
import store from './store/index';
import router from './router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './registerServiceWorker';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(
  faMapMarkerAlt, faCalendarWeek, faBars, faWallet,
  faAddressCard, faAmbulance, faWifi,
  faCameraRetro, faDownload,
);
library.add(faFacebook, faTwitter, faWhatsapp);
library.add(faBookmark, faBell, faCheckCircle);
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue, LightTimeline);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
