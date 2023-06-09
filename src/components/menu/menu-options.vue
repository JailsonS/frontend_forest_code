<template>
    <div class="menu-superior">
        <div class="menu-item" v-for="item in items" :key="item.id" ref="menuItem" @click="openMenuItems(item.submenu)">

            <div class="menu-item-content">
                <span> <strong>{{ item.label }}</strong> </span>
                <img v-if="item.submenu" src="./media/arrow-down.png" width="10" />
                


                <div class="menu-item-content-window" v-if="item.submenu && visible">
                    <ul>
                        <a :href="submenuItem.url" v-for="submenuItem in item.submenuItems" :key="submenuItem.id">
                            <li>
                                {{ submenuItem.label }}
                            </li>
                        </a>
                    </ul>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuOptions',
    props: {
        items: Array
    },
    data() {
        return {
            visible: false
        }
    },

    methods: {
        documentClick(e){
            
        },

        openMenuItems(hasSubmenu) {

            if(hasSubmenu || (!hasSubmenu && this.visible)) {
                this.visible = !this.visible
            }
            
        }
    },
    created () {
        document.addEventListener('click', this.documentClick)
    },
    destroyed () {
        // important to clean up!!
        document.removeEventListener('click', this.documentClick)
    }
}
</script>


<style scoped>
    
    .menu-superior {
        display: flex;
        align-items: center;
        align-content: center;
        color:rgb(66, 82, 110);
    }

    .menu-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 70px;
    }

    .menu-item:hover {
        background-color: rgb(235, 235, 235);
    }

    .menu-item-content {
        padding: 10px;
    }

    .menu-item-content-window {
        width: 200px;
        position: absolute;
        background-color: rgb(255, 255, 255);
        top: 70px;
        right: 30px;
        box-shadow: rgb(221 221 221) 0px 3px 3px;
        border-radius: 5px;
        padding: 10px;
        z-index: 99;
    }

    .menu-item-content ul {
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .menu-item-content ul li {
        list-style: none;
        height: 30px;
        padding: 5px;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        border-radius: 4px;
    }

    a {
        text-decoration: none;
        
    }

    .menu-item-content ul li:hover {
        background-color: rgb(235, 235, 235);
    }
</style>