import Vue from 'vue';
import Router from 'vue-router';

import homepage from './pages/homepage';
import routespage from './pages/routespage';
import mappage from './pages/mappage';
import { getData } from './services/application-data';

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
            component: routespage,
            beforeEnter: (_to, _from, next) => {
                if (!getData('userInput')) {
                    return next('/');
                }
                return next();
            }
        },
        {
            path: '/map',
            name: 'map',
            component: mappage
        }
    ]
});
