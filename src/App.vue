<template>
    <div class="main">
        <header class="header">
            <router-link to="/">
                <mu-avatar class="logo" size="126" color="blue" text-color="yellow">TUST</mu-avatar>
            </router-link>
        </header>
        <router-view class="content"></router-view>
        <footer class="footer">
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
        </footer>
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

<style lang="scss">
body {
    background-color: white;
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    height: 100%;
    text-align: center;
}

.header {
    width: 100%;
    margin-top: 20px;

    .logo {
        font-size: 40px !important;
    }
}

.content {
    width: 100%;
    padding-bottom: 56px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
</style>
