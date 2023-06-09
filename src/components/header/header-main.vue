<template>
    <header class="header-position">
        <div class="header-left">
            <img :src="img_url" width="40" height="40" />
        </div>
        <div class="header-right">
            <MenuOptions :items="menu_items" />
        </div>
    </header>
</template>

<script>

    import MenuOptions from '../menu/menu-options.vue'

    export default {
        name: 'HeaderMain',
        components: {
            MenuOptions
        },
        props: {
            img_url: String,
            menu_items: Array
        }
    }
</script>

<style>
    .header-position {
        width: 100%;
        display: flex;
        align-items: center;
        background-color:#ffffff;
        box-shadow: inset rgb(223 223 223) 0px -3px 6px 0px;
        font-family:"Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        height: 70px;
    }

    .header-left {
        width: 50%;
        display: flex;
        padding: 5px;
        padding-left:15px;
    }

    .header-right {
        width: 50%;
        display: flex;
        justify-content: end;
    }
</style>