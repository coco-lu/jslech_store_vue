// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import VueRouter from 'vue-router'
import http from 'vue-resource'
import global from '../../../static/js/global'
Vue.prototype.$global = global
Vue.use(Router)
Vue.config.productionTip = false
Vue.use(http);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})