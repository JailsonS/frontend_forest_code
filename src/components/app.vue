<template>

    <div id="app">
        <transition name="page" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>

export default {
    name: 'App'
}

</script>

<style>

</style>
