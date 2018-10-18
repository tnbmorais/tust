// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'material-design-icons/iconfont/material-icons.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
});
