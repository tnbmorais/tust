<template>
    <div>
        <h1 v-if="routesList.length > 0">Rotas disponíveis</h1>
        <ul>
            <li class="route" v-for="(route, routeIndex) in routesList" v-bind:key="routeIndex">
                <span class="icon-route" v-bind:style="{'background-color': route.color}"></span>
                {{route.name}}
                <h5>
                    <span class="stops" v-for="(stop, stopIndex) in route.stops" v-bind:key="stopIndex">{{stop}}</span>
                </h5>
                {{route.schedules}}
            </li>
        </ul>
        <div>
            <img
        class="routes-image"
        width="100%"
        src="https://www.cm-stirso.pt/thumbs/cmsantotirso/uploads/writer_file/image/2840/Mapa_das_Linhas_1_980_2500.png"
        alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'routes',
    props: {
        routesList: Array
    }
};
</script>

<style scoped>
.route:not(:last-child) {
    border-bottom: 1px solid #CCC;
    margin-bottom: 10px;
}

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

.stops:not(:last-child)::after {
    content: ', ';
}
</style>
