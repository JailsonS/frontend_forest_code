import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ 
  routes,
  mode: 'history' 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
