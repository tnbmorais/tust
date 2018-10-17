<template>
    <div class="main">
        <mu-appbar title="Tust" full-width color="primary"></mu-appbar>
        <search v-on:search="search"></search>
        <routes v-bind:routesList="routes"></routes>
        <city-map></city-map>
    </div>
</template>

<script>
import search from './components/search';
import routes from './components/routes';
import cityMap from './components/city-map';
import { getAvailableRoutes } from './services/transport.service';

export default {
    name: 'App',
    components: {
        search,
        routes,
        cityMap
    },
    data() {
        return {
            routes: []
        };
    },
    methods: {
        search({ fromValue, toValue }) {
            this.routes = getAvailableRoutes(fromValue, toValue);
        }
    }
};
</script>

<style>
.main {
    text-align: center;
}
</style>
