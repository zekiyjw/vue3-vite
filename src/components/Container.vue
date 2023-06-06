<!-- eslint-disable no-var -->
<script setup lang="ts">
import { SVG } from '@svgdotjs/svg.js';
import { onMounted, reactive, ref } from 'vue';

interface Props {
    width: number
    height: number
    svg: any
    draw: any
}

// 获取容器的宽高
const opt = reactive<Props>({
    width: 0,
    height: 0,
    svg: null,
    draw: null,
});

const containerRef = ref<HTMLElement | null>(null);

// 容器尺寸变化，调整尺寸
function resize() {
    const rect = containerRef.value && containerRef.value.getBoundingClientRect();

    opt.width = rect?.width || 0;
    opt.height = rect?.height || 0;

    opt.svg.size(opt.width, opt.height);
}

onMounted(() => {
    const rect = containerRef.value && containerRef.value.getBoundingClientRect();

    opt.width = rect?.width || 0;
    opt.height = rect?.height || 0;

    // 画布
    opt.svg = SVG().addTo('.container').size(opt.width, opt.height);
    opt.draw = opt.svg.group();
    opt.draw.rect(100, 100).fill('#f06').move(20, 20);

    // eslint-disable-next-line no-console
    console.log(rect);
});
</script>

<template>
    <div ref="containerRef" class="container" />
</template>

<style scoped>
.container {
    width: 100%;
    height: calc(100% - 32px);
}
</style>
