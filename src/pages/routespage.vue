<template>
    <div>
        <h1>Percursos</h1>
        <routes v-bind:routesList="routes"></routes>
    </div>
</template>

<script>
import routes from '../components/routes';
import { getData } from '../services/application-data';

export default {
    name: 'Routespage',
    components: {
        routes
    },
    data() {
        return {
            routes: getData('routes')
        };
    }
};
</script>
