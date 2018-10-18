<template>
    <div>
        <h1>Planear Viagem</h1>
        <search v-on:search="search"></search>
    </div>
</template>

<script>
import search from '../components/search';
import { getAvailableRoutes } from '../services/transport.service';
import { setData } from '../services/application-data';

export default {
    name: 'Homepage',
    components: {
        search
    },
    methods: {
        search({ fromValue, toValue }) {
            setData('routes', getAvailableRoutes(fromValue, toValue));
            this.$router.push({ path: 'routes' });
        }
    }
};
</script>

