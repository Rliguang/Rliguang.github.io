// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch' //引入滑动组件
import ElementUI from 'element-ui'; //引入Element UI
import 'element-ui/lib/theme-chalk/index.css';

import '../static/css/scale.css';
import Scale from '../static/js/scale.js';
Vue.use(ElementUI);
Vue.use(VueTouch, {
	name: 'v-touch'
})

VueTouch.config.swipe = {

	threshold: 100 //手指左右滑动距离

}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})