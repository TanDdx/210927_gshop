import Vue from "vue"
import VueRouter from 'vue-router'
import MSite from '../pages/MSite.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Search from '../pages/Search.vue'

Vue.use(VueRouter)
export default  new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite
        },        {
            path:'/order',
            component:Order
        },        {
            path:'/profile',
            component:Profile
        },        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'msite'
        }
    ]
})