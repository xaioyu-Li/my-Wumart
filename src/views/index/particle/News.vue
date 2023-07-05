<script>
export default {}
</script>

<template>
    <div class="news-box">
        <h2 class="title">
            <i class="el-icon-news"></i>
            最新信息
        </h2>
        <el-skeleton :rows="5" animated v-if="true" />
        <div class="content" v-else>
            <div class="item">
                <p class="title">
                    <el-tag size="mini" color="#E6A23C">公告</el-tag>
                    物美智能V1.2版本发布
                </p>
                <p class="time">
                    <i class="el-icon-timer"></i>
                    2023/12/23
                </p>
            </div>
            <div class="item">
                <p class="title">
                    <el-tag size="mini" color="#409EFF">信息</el-tag>
                    物美智能V1.2版本发布
                </p>
                <p class="time">
                    <i class="el-icon-timer"></i>
                    2023/12/23
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.title {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 50px;

    i {
        font-size: 20px;
    }
}

.content {
    .item {
        display: flex;

        .title,
        .time {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            height: 52.5px;
            line-height: 52.5px;
        }

        .title {
            flex-basis: calc(100% - 120px);
            font-size: 15px;

            .el-tag {
                color: #FFF;
                border: none;
            }

            .el-tag--mini {
                line-height: 20px;
            }
        }

        .time {
            margin-left: 10px;
            margin-bottom: 0;
            flex-basis: 110px;
            text-align: right;
        }
    }
}

:deep(.el-skeleton) {
    margin-top: 10px;
}
</style>