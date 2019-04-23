import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import VueParticles from 'vue-particles'
import jQuery from 'jquery'
global.$ = jQuery;

Vue.use(VueParticles);
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	hash: false,
	routes: Routes,
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
});

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router: router
}).$mount('#app');
