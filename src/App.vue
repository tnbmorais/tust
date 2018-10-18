<template>
    <div class="main">
        <mu-avatar class="logo" size="126" color="blue" text-color="yellow">TUST</mu-avatar>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
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
</style>
