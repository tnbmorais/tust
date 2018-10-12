<template>
    <div class="main">
        <img width="25%" src="./assets/logo.png">
        <search v-on:search="search"></search>
        <routes v-bind:routesList="routes"></routes>
    </div>
</template>

<script>
import search from './components/search';
import routes from './components/routes';
import { getAvailableRoutes } from './services/transport.service';

export default {
    name: 'App',
    components: {
        search,
        routes
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
</style>
