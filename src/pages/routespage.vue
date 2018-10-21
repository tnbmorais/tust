<template>
    <div>
        <h1>Viagem</h1>
        <h4>{{travel.from}} - {{travel.to}}</h4>
        <h2>Percursos</h2>
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
            travel: {
                from: fromValue,
                to: toValue
            },
            routes: getAvailableRoutes(fromValue, toValue, date)
        };
    }
};
</script>
