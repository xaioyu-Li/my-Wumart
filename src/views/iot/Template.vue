<script>
export default {}
</script>

<template>
    <div class="template-box">
        <!-- 筛选/操作区域 -->
        <div class="filter-box">
            <div class="filter">
                <div class="form-item">
                    <label>名称</label>
                    <el-input placeholder="请输入物模型名称" />
                </div>
                <div class="form-item">
                    <label>类别</label>
                    <el-select value="" />
                </div>
            </div>
            <div class="handler">
                <el-button type="primary" ghost icon="el-icon-plus">新增</el-button>
                <el-button type="danger" ghost icon="el-icon-minus">删除</el-button>
                <el-button type="success" ghost icon="el-icon-download">下载</el-button>
            </div>
        </div>

        <!-- 表格区域 -->
        <div class="table-box">
            <el-table stripe :data="[]" v-loading="false">
                <el-table-column type="selection" align="center" min-width="4%" />
                <el-table-column label="名称" prop="templateName" align="center" min-width="8%" />
                <el-table-column label="标识符" prop="identifier" align="center" min-width="8%" />
                <el-table-column label="图表展示" prop="isChart" align="center" min-width="8%" />
                <el-table-column label="实时监测" prop="isMonitor" align="center" min-width="8%" />
                <el-table-column label="只读" prop="isReadonly" align="center" min-width="6%" />
                <el-table-column label="物模型识别" prop="type" align="center" min-width="10%" />
                <el-table-column label="数据类型" prop="datatype" align="center" min-width="8%" />
                <el-table-column label="数据定义" min-width="14%">
                    <template>
                        <div class="specs-box">
                            <p class="specs-item">
                                <span>最大值:</span>
                                <span>0</span>
                            </p>
                            <p class="specs-item">
                                <span>步长:</span>
                                <span>0</span>
                            </p>
                            <p class="specs-item">
                                <span>最小值:</span>
                                <span>0</span>
                            </p>
                            <p class="specs-item">
                                <span>单位:</span>
                                <span>米</span>
                            </p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="排序" prop="modelOrder" align="center" min-width="6%" />
                <el-table-column label="创建时间" prop="createTime" min-width="10%" />
                <el-table-column label="操作" min-width="10%">
                    <template>
                        <el-link type="primary">修改</el-link>
                        <el-popconfirm title="您确定要删除这一项吗？">
                            <el-link type="danger" slot="reference">删除</el-link>
                        </el-popconfirm>
                    </template>
                </el-table-column>

                <template #append>
                    <el-pagination background layout="sizes, prev, pager, next" :page-size="10" :total="20"
                        hide-on-single-page>
                    </el-pagination>
                </template>
            </el-table>
        </div>

        <!-- 弹出层 -->
        <el-dialog title="新增/修改通用物模型" top="5vh" width="650px" :visible="false" :close-on-click-modal="false"
            :close-on-press-escape="false">

            <el-form label-width="80px" label-suffix=":">
                <el-form-item label="模型名称">
                    <el-input placeholder="请输入物模型名称，例如：温度" />
                </el-form-item>
                <el-form-item label="模型标识">
                    <el-input placeholder="请输入标识符，例如：temperature" />
                </el-form-item>
                <el-form-item label="模型排序">
                    <el-input-number :min="0" />
                </el-form-item>
                <el-form-item label="模型类别">
                    <el-radio-group>
                        <el-radio-button label="属性"></el-radio-button>
                        <el-radio-button label="功能"></el-radio-button>
                        <el-radio-button label="事件"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="模型特性">
                    <el-checkbox-group :value="[]">
                        <el-checkbox label="图表展示"></el-checkbox>
                        <el-checkbox label="实时监测"></el-checkbox>
                        <el-checkbox label="只读数据"></el-checkbox>
                        <el-checkbox label="历史存储"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-divider />
                <el-form-item label="数据类型">
                    <el-select value=""></el-select>
                </el-form-item>
                <el-form-item label="取值范围">
                    <el-input-number :min="0" :max="100" placeholder="最小值" />
                    &nbsp; 到 &nbsp;
                    <el-input-number :min="0" :max="100" placeholder="最大值" />
                </el-form-item>
                <el-form-item label="单位">
                    <el-input placeholder="请输入单位，例如：米" style="width: 40%;" />
                </el-form-item>
                <el-form-item label="步长" style="margin-bottom: 0;">
                    <el-input-number placeholder="请输入步长" style="width: 40%;" />
                </el-form-item>
            </el-form>

            <template #footer>
                <el-button type="primary">确认提交</el-button>
                <el-button>取消</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<style lang="less" scoped>
.filter-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #FFF;

    .handler {
        display: flex;

        .el-button {
            margin-left: 10px;
        }
    }

    .filter {
        display: flex;
        flex-wrap: wrap;

        .form-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
            height: 40px;

            label {
                padding: 0 10px;
                width: auto;
            }

            .el-input {
                width: 240px;
            }

            .el-select {
                width: 150px;
            }
        }
    }
}

.table-box {
    position: relative;
    margin-top: 10px;
    background: #FFF;

    .el-link {
        margin-right: 10px;
    }

    .el-table {
        position: absolute;
        box-sizing: border-box;
        padding: 15px;
        width: 100%;
    }

    .el-pagination {
        margin-top: 15px;
        text-align: right;
    }
}

.specs-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .specs-item {
        margin-bottom: 0;
        width: 62%;
        line-height: 20px;
        font-size: 12px;

        &:nth-child(2n) {
            width: 34%;
        }

        span {
            &:nth-child(2) {
                color: #F56C6C;
            }
        }
    }
}

:deep(.el-dialog__body) {
    padding: 20px;
}

@media all and (max-width: 1100px) {
    .filter-box {
        display: block;

        .handler {
            margin-top: 10px;
        }
    }
}
</style>