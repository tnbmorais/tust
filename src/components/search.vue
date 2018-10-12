<template>
    <div>
        <div>
            <label>De:</label>
            <input type="search" list="routesFrom" ref="from" v-on:change="onFromSelect"/>
        </div>
        <div>
            <label>Para:</label>
            <input type="search" list="routesTo" ref="to"/>
        </div>
        <button v-on:click="search">Pesquisar</button>

        <h1 v-if="routes.length > 0">Rotas disponíveis</h1>
        <ul>
            <li v-for="(route, index) in routes" v-bind:key="index">
                <span class="icon-route" v-bind:style="{'background-color': route.color}"></span>
                {{route.name}}
                <h5>{{route.stops.join(', ')}}</h5>
            </li>
        </ul>

        <div>
            <img
        class="routes-image"
        width="100%"
        src="https://www.cm-stirso.pt/thumbs/cmsantotirso/uploads/writer_file/image/2840/Mapa_das_Linhas_1_980_2500.png"
        alt="">
        </div>

        <datalist id="routesFrom">
            <option v-for="(route, index) in routesFrom" v-bind:key="index" v-bind:value="route"></option>
        </datalist>

        <datalist id="routesTo">
            <option v-for="(route, index) in routesTo" v-bind:key="index" v-bind:value="route"></option>
        </datalist>
    </div>
</template>

<script>
import {
    getStops,
    getAvailableStops,
    getAvailableRoutes
} from '../services/transport.service';

export default {
    name: 'search',
    data() {
        return {
            routesFrom: getStops(),
            routesTo: [],
            routes: []
        };
    },
    methods: {
        onFromSelect() {
            this.$refs.to.value = '';
            this.routes = [];

            const fromValue = this.$refs.from.value;

            this.routesTo = getAvailableStops(fromValue);
        },
        search() {
            const fromValue = this.$refs.from.value;
            const toValue = this.$refs.to.value;
            this.routes = getAvailableRoutes(fromValue, toValue);
        }
    }
};
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.icon-route {
    width: 10px;
    height: 20px;
    display: inline-block;
    background-color: black;
    margin-right: 10px;
}

.routes-image {
  max-width: 700px;
}
</style>
