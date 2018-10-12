<template>
    <div class="main">
        <img width="25%" src="./assets/logo.png">
        <search></search>
    </div>
</template>

<script>
import search from './components/search';

export default {
    name: 'App',
    components: {
        search
    }
};
</script>

<style>
.main {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
</style>
