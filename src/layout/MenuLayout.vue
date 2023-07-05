<script>
export default {
    props: {
        collapsed: Boolean
    }
}
</script>

<template>
    <el-menu router :collapse="collapsed" default-active="/index/welcome" background-color="#304156" text-color="#fff"
        active-text-color="#409eff" :collapse-transition="false" :unique-opened="true">
        <el-menu-item index="/index/welcome">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>

        <!-- 设备管理 -->
        <el-submenu index="/iot">
            <template slot="title">
                <i class="el-icon-printer"></i>
                <span>设备管理</span>
            </template>
            <el-menu-item index="/iot/template">
                <i class="el-icon-news"></i>
                <span slot="title">通用物模型</span>
            </el-menu-item>
            <el-menu-item index="/iot/category">
                <i class="el-icon-document-copy"></i>
                <span slot="title">产品分类</span>
            </el-menu-item>
            <el-menu-item index="/iot/product">
                <i class="el-icon-pie-chart"></i>
                <span slot="title">产品管理</span>
            </el-menu-item>
        </el-submenu>

        <!-- 运维管理 -->
        <el-submenu index="/template">
            <template slot="title">
                <i class="el-icon-printer"></i>
                <span>运维管理</span>
            </template>
            <el-menu-item index="/template/protocol">
                <i class="el-icon-news"></i>
                <span slot="title">协议管理</span>
            </el-menu-item>
            <el-menu-item index="/template/template">
                <i class="el-icon-document-copy"></i>
                <span slot="title">采集点模板</span>
            </el-menu-item>
            <el-menu-item index="/template/simulate">
                <i class="el-icon-pie-chart"></i>
                <span slot="title">设备模拟</span>
            </el-menu-item>
            <el-menu-item index="/template/firmware">
                <i class="el-icon-pie-chart"></i>
                <span slot="title">产品固件</span>
            </el-menu-item>
        </el-submenu>

        <!-- 系统管理 -->
        <el-submenu index="/system">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统管理</span>
            </template>
            <el-menu-item index="/system/user">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/system/menu">
                <i class="el-icon-postcard"></i>
                <span slot="title">菜单管理</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
    user-select: none;
    border-right: none;

    .el-submenu {
        .el-menu-item {
            background: #1f2d3d !important;

            &:hover {
                background: #001528 !important;
            }
        }
    }


    .el-icon-document {
        font-size: 18px;
    }
}
</style>