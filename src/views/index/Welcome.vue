<script>
import MapBaidu from './particle/Map.vue'
import Device from './particle/Device.vue'
import News from './particle/News.vue'

export default {
    components: {
        MapBaidu,
        Device,
        News
    }
}
</script>

<template>
    <div class="welcome-box">
        <div class="content">
            <MapBaidu class="map" />
            <div class="statistics">
                <Device class="device" />
                <News class="news" />
            </div>
        </div>
        <div class="echarts-box">
            <div class="mqtt"></div>
            <div class="cup-rate"></div>
            <div class="memory-rate"></div>
            <div class="system-rate"></div>
            <div class="seat"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .map {
        box-sizing: border-box;
        margin-right: 20px;
        width: calc((100% - 20px) / 2);
        height: 600px;
        background: url('@/assets/images/Loading_icon.gif') no-repeat center center #FFF;
        background-size: 30px 30px;
        border: 2px solid #FFF;
    }

    .statistics {
        box-sizing: border-box;
        width: calc((100% - 20px) / 2);

        .device,
        .news {
            box-sizing: border-box;
            padding: 15px;
            height: 290px;
            background: #FFF;
            overflow: hidden;
        }

        .news {
            margin-top: 20px;
        }
    }
}

.echarts-box {
    margin-top: 20px;
    padding: 20px 15px;
    padding-bottom: 0;
    background: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @w: calc((100% - 40px) / 3);

    &>div {
        flex-basis: @w;
        height: 350px;
        margin-bottom: 20px;
        background: url('@/assets/images/Loading_icon.gif') no-repeat center center #f9f9f9;
        background-size: 30px 30px;

        :deep(div) {
            background: #FFF;
        }

        &.mqtt {
            flex-basis: calc(@w * 2 + 20px);
        }

        &.seat {
            background: #FFF;
        }
    }
}
</style>