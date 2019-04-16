import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import VueParticles from 'vue-particles'
import jQuery from 'jquery'
global.$ = jQuery

Vue.use(VueParticles)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')