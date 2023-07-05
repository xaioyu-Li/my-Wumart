import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
Vue.use(VueRouter)

/* 创建路由管理 */
const router = new VueRouter({
    mode: 'hash',
    routes
})
router.beforeEach((to, from, next) => {
    next()

})
router.afterEach((to, from) => {

})
export default router