<template>
    <div>
        <h1>Planear Viagem</h1>
        <search v-on:search="search"></search>
    </div>
</template>

<script>
import search from '../components/search';
import { setData } from '../services/application-data';

export default {
    name: 'Homepage',
    components: {
        search
    },
    methods: {
        search(data) {
            setData('userInput', data);
            this.$router.push({ path: 'routes' });
        }
    }
};
</script>

