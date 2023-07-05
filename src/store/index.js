import Vue from "vue"
import Vuex, { createLogger } from "vuex"
import VuexPersistence from "vuex-persist"
Vue.use(Vuex)

/* 配置插件 */
const vueLocal = new VuexPersistence({
    key:'vuex',
    storage:window.localStorage,
    /* reducer(state){
        //指定部分vuex状态持久化存储
        return {

        }
    } */
})
const env = process.env.NODE_ENV,
    plugins = []
if (env === 'development') plugins.push(createLogger())

/* 创建store容器 */
const store = new Vuex.Store({
    strict: true,
    plugins,
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
})
export default store