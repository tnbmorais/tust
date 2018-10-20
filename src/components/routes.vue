<template>
    <mu-container>
        <mu-list textline="two-line">
            <mu-list-item
                v-for="(route, routeIndex) in routesList"
                v-bind:key="routeIndex"
                avatar
                button
                v-bind:ripple=false>
                <mu-list-item-action>
                    <mu-avatar v-bind:color="route.color"></mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>{{route.name}}</mu-list-item-title>
                    <mu-list-item-sub-title>Próxima Viagem: {{route.nextSchedule}}</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                    <mu-button icon @click="showStops(route.id)">
                        <mu-icon value="info"></mu-icon>
                    </mu-button>
                </mu-list-item-action>
            </mu-list-item>
        </mu-list>
        <mu-dialog title="Paragens" width="360" scrollable :open.sync="openScroll">
            <mu-list>
                <mu-list-item v-for="stop in stopsList" v-bind:key="stop">
                    <mu-list-item-content>
                        {{stop}}
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
            <mu-button slot="actions" flat color="primary" @click="toggleDialog">Fechar</mu-button>
        </mu-dialog>
    </mu-container>
</template>

<script>
export default {
    name: 'routes',
    props: {
        routesList: Array
    },
    data() {
        return {
            open: '',
            openScroll: false,
            stopsList: []
        };
    },
    methods: {
        setOpened(id) {
            this.open = id;
        },
        showStops(id) {
            this.stopsList = this.routesList.reduce((acc, route) => {
                if (route.id === id) {
                    return acc.concat(route.stops);
                }
                return acc;
            }, []);
            this.toggleDialog();
        },
        toggleDialog() {
            this.openScroll = !this.openScroll;
        }
    }
};
</script>

<style scoped>
.mu-item-title,
.mu-item-sub-title {
    font-size: 12px;
}
</style>
