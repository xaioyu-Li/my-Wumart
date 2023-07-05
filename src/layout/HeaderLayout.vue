<script>
import NavLayout from './NavLayout.vue'

export default {
    components: {
        NavLayout
    },
    props: {
        collapsed: Boolean
    },
    methods: {
        handleCommand(command) {

        }
    }
}
</script>

<template>
    <header class="header-layout">
        <div class="content">
            <div class="left">
                <i class="el-icon-s-unfold" @click="$emit('update:collapsed', false)" v-if="collapsed"></i>
                <i class="el-icon-s-fold" @click="$emit('update:collapsed', true)" v-else></i>
                <el-breadcrumb>
                    <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                    <el-breadcrumb-item to="/xxx">控制中心</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="right">
                <el-dropdown>
                    <span class="account-avatar">
                        <el-avatar
                            src="https://iot.wumei.live/prod-api/profile/avatar/2023/06/12/blob_20230612151159A006.png" />
                        <span>哈哈哈哈哈</span>
                    </span>
                    <el-dropdown-menu slot="dropdown" @command="handleCommand">
                        <el-dropdown-item command="/index/personal" icon="el-icon-user">
                            个人中心
                        </el-dropdown-item>
                        <el-dropdown-item command="/index/setting" icon="el-icon-setting">
                            个人设置
                        </el-dropdown-item>
                        <el-dropdown-item command="logout" icon="el-icon-position" divided>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="nav scrollActive">
            <NavLayout />
        </div>
    </header>
</template>

<style lang="less" scoped>
.header-layout {
    padding: 0;
    height: 80px;
    background-color: #FFF;

    .content,
    .nav {
        box-sizing: border-box;
        overflow: hidden;
    }

    .content {
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            align-items: center;

            .el-icon-s-fold,
            .el-icon-s-unfold {
                font-size: 18px;
                margin-right: 20px;
            }
        }

        .right {
            display: flex;
            align-items: center;

            .account-avatar {
                display: flex;
                align-items: center;

                .el-avatar {
                    margin-right: 5px;
                    width: 30px;
                    height: 30px;
                }

                :deep(.el-avatar--circle) {
                    border-radius: 50% !important;
                }
            }
        }
    }

    .nav {
        margin: 0 15px;
        padding-top: 2px;
        height: 30px;
        overflow-x: auto;
    }
}
</style>