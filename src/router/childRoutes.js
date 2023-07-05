/* 渲染三级路由组件的RouterView */
const RouterViewPage = {
    name: 'RouterViewPage',
    render: (h) => {
        return h('router-view', {})
    }
}

// 首页的子集
const indexRoutes = [{
    path: 'welcome',
    name: 'index_welcome',
    meta: {
        title: '首页',
        icon: 'el-icon-s-home',
        hidden: true,
        level: 3
    },
    component: () => import(/* webpackChunkName:'index' */ '@/views/index/Welcome.vue')
}, {
    path: 'personal',
    name: 'index_personal',
    meta: {
        title: '个人中心',
        icon: 'el-icon-user',
        hidden: false,
        level: 3
    },
    component: () => import(/* webpackChunkName:'index' */ '@/views/index/Personal.vue')
}, {
    path: 'setting',
    name: 'index_setting',
    meta: {
        title: '个人设置',
        icon: 'el-icon-setting',
        hidden: false,
        level: 3
    },
    component: () => import(/* webpackChunkName:'index' */ '@/views/index/Setting.vue')
}]

// 设备管理的子集
const iotRoutes = [
    {
        path: 'template',
        name: 'iot_template',
        meta: {
            title: '通用物模型',
            icon: 'el-icon-news',
            hidden: true,
            level: 3,
            permission: 'iot:template:list'//全局校验
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Template.vue')
    },
    {
        path: 'category',
        name: 'iot_category',
        meta: {
            title: '产品分类',
            icon: 'el-icon-document-copy',
            hidden: true,
            level: 3,
            permission: 'iot:category:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Category.vue')
    },
    {
        path: 'product',
        name: 'iot_product',
        meta: {
            title: '产品管理',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:product:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Product.vue')
    },
    {
        path: 'group',
        name: 'iot_group',
        meta: {
            title: '设备分组',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:group:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Group.vue')
    },
    {
        path: 'device',
        name: 'iot_device',
        meta: {
            title: '设备管理',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:device:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Device.vue')
    },
    {
        path: 'alertLog',
        name: 'iot_alertLog',
        meta: {
            title: '设备警告',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:alertLog:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/AlertLog.vue')
    },
    {
        path: 'scene',
        name: 'iot_scene',
        meta: {
            title: '场景联动',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:scene:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Scene.vue')
    },
    {
        path: 'sip',
        name: 'iot_sip',
        meta: {
            title: '视频配置',
            icon: 'el-icon-pie-chart',
            hidden: true,
            level: 3,
            permission: 'iot:sip:list'
        },
        component: () => import(/* webpackChunkName:'iot' */'@/views/iot/Sip.vue')
    }
]
//运维管理的子集
const templateRoutes = [
    {
        path: 'protocol',
        name: 'template_protocol',
        meta: {
            title: '协议管理',
            icon: '',
            hidden: true,
            level: 3,
            permission: 'iot:category:list'
        },
        component: () => import(/* webpackChunkName:'template' */'@/views/template/protocol.vue')
    },
    {
        path: 'template',
        name: 'template_template',
        meta: {
            title: '协议管理',
            icon: '',
            hidden: true,
            level: 3,
            permission: 'iot:category:list'
        },
        component: () => import(/* webpackChunkName:'template' */'@/views/template/template.vue')
    },
    {
        path: 'simulate',
        name: 'template_simulate',
        meta: {
            title: '设备模拟',
            icon: '',
            hidden: true,
            level: 3,
            permission: 'iot:category:list'
        },
        component: () => import(/* webpackChunkName:'template' */'@/views/template/simulate.vue')
    },
    {
        path: 'firmware',
        name: 'template_firmware',
        meta: {
            title: '设备模拟',
            icon: '',
            hidden: true,
            level: 3,
            permission: 'iot:category:list'
        },
        component: () => import(/* webpackChunkName:'template' */'@/views/template/firmware.vue')
    },
]
// 系统管理的子集
const systemRoutes = [
    {
        path: 'user',
        name: 'system_user',
        meta: {
            title: '用户管理',
            icon: 'el-icon-user',
            hidden: true,
            level: 3,
            permission: 'system:user:query'
        },
        component: () => import(/* webpackChunkName:'system' */'@/views/system/User.vue')
    },
    {
        path: 'menu',
        name: 'system_menu',
        meta: {
            title: '菜单管理',
            icon: 'el-icon-postcard',
            hidden: true,
            level: 3,
            permission: 'system:menu:query'
        },
        component: () => import(/* webpackChunkName:'system' */'@/views/system/Menu.vue')
    }
]

/* 二级路由 */
const childRoutes = [
    // 首页
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            icon: '',
            hidden: false,
            level: 2
        },
        component: RouterViewPage,
        redirect: '/index/welcome',
        children: indexRoutes
    },
    // 设备管理
    {
        path: '/iot',
        name: 'iot',
        meta: {
            title: '设备管理',
            icon: 'el-icon-printer',
            hidden: true,
            level: 2
        },
        component: RouterViewPage,
        redirect: '/iot/template',
        children: iotRoutes
    },
    // 运维管理
    {
        path: '/template',
        name: 'template',
        meta: {
            title: '运维管理',
            icon: '',
            hidden: true,
            level: 2
        },
        component: RouterViewPage,
        redirect: '/system/user',
        children: templateRoutes
    },
    // 系统管理
    {
        path: '/system',
        name: 'system',
        meta: {
            title: '系统管理',
            icon: 'el-icon-setting',
            hidden: true,
            level: 2
        },
        component: RouterViewPage,
        redirect: '/system/user',
        children: systemRoutes
    },

]
export default childRoutes