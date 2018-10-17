<template>
    <mu-list toggle-nested>
        <mu-list-item
                v-for="(route, routeIndex) in routesList"
                v-bind:key="routeIndex"
                v-bind:open="false"
                nested
                button>
            <mu-list-item-action>
                <mu-avatar v-bind:color="route.color" size="16"></mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{route.name}} ({{route.nextSchedule}})</mu-list-item-title>
            <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item slot="nested">
                <mu-sub-header>Horários</mu-sub-header>
            </mu-list-item>
            <mu-list-item slot="nested">
                <mu-sub-header>{{route.schedules.toString()}}</mu-sub-header>
            </mu-list-item>
            <mu-divider slot="nested"></mu-divider>
            <mu-list-item slot="nested">
                <mu-sub-header>Paragens</mu-sub-header>
            </mu-list-item>
            <mu-list-item slot="nested" v-for="(stop, stopIndex) in route.stops" v-bind:key="stopIndex">
                <mu-list-item-title>{{stop}}</mu-list-item-title>
            </mu-list-item>
        </mu-list-item>
    </mu-list>
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

.stops:not(:last-child)::after {
    content: ', ';
}
</style>
