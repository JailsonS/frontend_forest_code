<template>
    
    <div>
        <HeaderMain 
            :img_url="brandImg"
            :menu_items="menuItems"
        />

        <div class="container">
            body
        </div>

    </div>


</template>

<script>

    import HeaderMain from '../../components/header/header-main.vue'

    export default {
        name: 'Login',
        components: {
            HeaderMain
        },
        data() {
            return {
                menuItems: [
                    { id: 1, label:'Sobre', url: '#', submenu: false, submenuItems: [] },
                    { id: 2, label:'Login', url: '#', submenu: false, submenuItems: [] }
                ],
                brandImg: '../../../src/assets/logo.png'
            }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin:0;
        font-family: 'Verdana','sans-serif';
    }

    .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color:#fafafa;
    }
</style>
