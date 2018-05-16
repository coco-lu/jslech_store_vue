import Vue from 'vue'
import Router from 'vue-router'
import index from '../../../components/home/index/index'
import orders from '../../../components/home/orders/orders'
import userCenter from '../../../components/home/userCenter/userCenter'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/orders',
        component: orders
    }, {
        path: '/userCenter',
        component: userCenter
    }]
})