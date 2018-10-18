import Vue from 'vue';
import Router from 'vue-router';

import homepage from './pages/homepage';
import routespage from './pages/routespage';
import cityMap from './components/city-map';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: homepage
        },
        {
            path: '/routes',
            name: 'routes',
            component: routespage
        },
        {
            path: '/city-map',
            name: 'cityMap',
            component: cityMap
        }
    ]
});
