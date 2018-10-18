<template>
    <div class="main">
        <router-link to="/">
            <mu-avatar class="logo" size="126" color="blue" text-color="yellow">TUST</mu-avatar>
        </router-link>
        <router-view class="content"></router-view>
        <mu-divider class="bottom-divider"></mu-divider>
        <mu-bottom-nav class="bottom-navigation" v-bind:value="routeSelected">
            <mu-bottom-nav-item
                title="Planear Viagem"
                to="/"
                value="/"
                icon="directions_bus"></mu-bottom-nav-item>
            <mu-bottom-nav-item
                title="Mapa"
                to="/city-map"
                value="/city-map"
                icon="location_on"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            routeSelected: this.$router.currentRoute.path
        };
    },
    watch: {
        $route(to) {
            this.routeSelected = to.path;
        }
    }
};
</script>

<style>
.main {
    text-align: center;
    padding-top: 20px;
}

.logo {
    font-size: 40px !important;
}

.bottom-divider {
    position: fixed;
    width: 100%;
    bottom: 56px;
}

.bottom-navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.content {
    padding-bottom: 56px;
}
</style>
