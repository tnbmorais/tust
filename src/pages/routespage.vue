<template>
    <div>
        <h1>Percursos</h1>
        <routes v-bind:routesList="routes"></routes>
    </div>
</template>

<script>
import routes from '../components/routes';
import { getAvailableRoutes } from '../services/transport.service';
import { getData } from '../services/application-data';

export default {
    name: 'Routespage',
    components: {
        routes
    },
    data() {
        const { fromValue, toValue, date } = getData('userInput');

        return {
            routes: getAvailableRoutes(fromValue, toValue, date)
        };
    }
};
</script>
