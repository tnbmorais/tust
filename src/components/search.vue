<template>
    <div class="search-container">
        <mu-select label="De:" filterable v-model="selected.from" v-on:change="onFromSelect">
            <mu-option
                v-for="(route,index) in routesFrom"
                v-bind:key="index"
                v-bind:label="route"
                v-bind:value="route">
            </mu-option>
        </mu-select>
        <mu-select label="Para:" filterable v-model="selected.to">
            <mu-option
                v-for="(route,index) in routesTo"
                v-bind:key="index"
                v-bind:label="route"
                v-bind:value="route">
            </mu-option>
        </mu-select>
        <mu-date-input
            v-model="selected.date"
            label="Escolher Data"
            container="dialog"
            clock-type="24hr"
            view-type="list"
            icon="today"
            type="dateTime">
        </mu-date-input>
        <mu-button color="primary" v-on:click="search">Pesquisar</mu-button>
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
            selected: {
                from: '',
                to: '',
                date: new Date()
            }
        };
    },
    methods: {
        onFromSelect() {
            const fromValue = this.selected.from;
            this.routesTo = [];
            this.selected.to = '';
            this.routesTo = getAvailableStops(fromValue);
        },
        search() {
            const fromValue = this.selected.from;
            const toValue = this.selected.to;
            const date = this.selected.date;

            if (!fromValue || !toValue) {
                return;
            }

            this.$emit('search', {
                fromValue,
                toValue,
                date
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.search-container {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>

