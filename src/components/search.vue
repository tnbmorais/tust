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
    getAvailableStops
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

            if (!fromValue || !toValue) {
                return;
            }

            this.$emit('search', {
                fromValue,
                toValue
            });
        }
    }
};
</script>

<style scoped>

</style>
