<script>
export default {}
</script>

<template>
    <div class="category-box">
        <div class="filter-box">
            <div class="filter">
                <div class="form-item">
                    <label>分类名称</label>
                    <el-input placeholder="请输入产品分类名称" size="small" />
                </div>
            </div>
            <div class="handler">
                <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
                <el-button size="mini" icon="el-icon-refresh">重置</el-button>
            </div>
            <!-- <div class="handler">
                <el-button type="primary" ghost icon="el-icon-plus">新增</el-button>
                <el-button type="danger" ghost icon="el-icon-minus">删除</el-button>
                <el-button type="success" ghost icon="el-icon-download">下载</el-button>
            </div> -->
        </div>
    </div>
</template>

<style lang="less" scoped>
.filter-box {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 15px;
    background: #FFF;

    .filter {
        display: flex;
        flex-wrap: wrap;

        .form-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
            height: 32px;

            label {
                padding: 0 10px;
                width: auto;
                font-size: 14px;
                color: #606266;
                font-weight: 700;
            }

            .el-input {
                width: 205px;
            }

            .el-select {
                width: 150px;
            }
        }
    }
}
</style>
