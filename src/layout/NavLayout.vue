<script>
export default {

}
</script>

<template>
    <div class="tablist-box">
        <el-tag type="info">首页</el-tag>
        <el-tag type="info" closable>商品管理</el-tag>
        <el-tag closable>分类管理</el-tag>
    </div>
</template>

<style lang="less" scoped>
.tablist-box {
    display: flex;
    align-items: center;
    height: 100%;

    .el-tag {
        margin-right: 10px;
        padding: 0 6px;
        height: 22px;
        line-height: 22px;
        cursor: pointer;
    }
}
</style>