<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const state = reactive({
    type: '-',
    angle: -75,
    rtt: 0,
    speed: 0,
    connection: null,
});

function getConnection() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    // eslint-disable-next-line no-console
    console.log('connection', connection);
    return connection;
}

function updateConnectionStatus() {
    state.type = state.connection.effectiveType;
    state.speed = state.connection.downlink;
    state.rtt = state.connection.rtt;
}

function calcAngle(value: number) {
    let angle = -90;
    if (value < 1.5)
        angle = (value / 1.5) * 60 - 90;

    else if (value > 1.5 && value < 6.5)
        angle = (value / 6.5) * 90 - 90;

    else if (value > 6.5 && value < 15)
        angle = (value / 15) * 30;

    else
        angle = (value / 15) * 90;

    return Math.round(angle);
}

onMounted(() => {
    state.connection = getConnection();
    state.connection.addEventListener('change', updateConnectionStatus);
    updateConnectionStatus();
});
</script>

<template>
    <div>
        <div>网络测速仪</div>
        <div class="min-h-screen items-center flex justify-center p-6">
            <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden border-r">
                <div class="block px-4 py-2 mb-6 leading-normal bg-grey-lighter flex flex-no-shrink">
                    <h3 class="pl-2 text-center m-auto align-middle text-grey-darkest w-full">
                        网络测速仪
                    </h3>
                </div>
                <div class="items-center flex justify-center p-4">
                    <div class="">
                        <div class="speedometr">
                            <div class="scale low" />
                            <div class="scale middle" />
                            <div class="scale hight" />
                            <div class="arrow" :style="{ transform: `rotate(${calcAngle(state.speed)}deg)` }" />
                        </div>
                        <div id="counter" class="text-grey-darkest text-center text-base font-semibold pt-4 pb-0">
                            {{ state.speed.toFixed(1) }}
                            Mbps
                        </div>
                    </div>
                </div>
                <div class="px-6 pt-0 pb-4 text-center">
                    <span
                        class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                    >{{
                        state.type }}</span>
                    <span
                        id="rtt"
                        class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                    >
                        {{ state.rtt }}
                        ms</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.speedometr {
    position: relative;
    height: 100px;
    width: 200px;
}

.speedometr .scale {
    position: absolute;
    border: 3px solid red;
    width: 65px;
    height: 15px;
    border-radius: 100% 100% 0 0;
    border-bottom: none;
}

.speedometr .scale.low {
    top: 10px;
    left: -30px;
    border-color: #e74c3c;
    transform: rotate(-50deg);
    transform-origin: top right;
}

.speedometr .scale.middle {
    left: calc(50% - 37px);
    border-color: #f1c40f;
}

.speedometr .scale.hight {
    top: 10px;
    right: -30px;
    transform: rotate(50deg);
    transform-origin: top left;
    border-color: #2ecc71;
}

.speedometr .arrow {
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -1px;
    width: 1px;
    height: 66px;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 100% 100% 0 0;
    background-color: black;
    transform: rotate(-75deg);
    transform-origin: bottom center;
    transition: transform 0.8s;
    transition-timing-function: cubic-bezier(0.65, 1.95, 0.03, 0.32);
}

.speedometr .arrow:after {
    content: '';
    display: block;
    height: 14px;
    width: 14px;
    background-color: #2c3e50;
    border-radius: 100%;
    position: absolute;
    bottom: -1px;
    left: -6px;
}
</style>
