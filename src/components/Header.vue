<script setup lang="ts">
import { CompressOutlined, ExpandOutlined, LayoutOutlined } from '@ant-design/icons-vue';
import { computed, watch } from 'vue';
import useStore from '../store';

const { settings } = useStore();

// 全屏
const fullscreen = computed(() => settings.fullscreen);

function toggleFullscreen() {
    if (document.fullscreenElement)
        document.exitFullscreen();

    else
        document.documentElement.requestFullscreen();

    settings.changeSetting({ key: 'fullscreen', value: !fullscreen.value });
}

watch(
    () => document.fullscreenElement,
    (newValue) => {
        // eslint-disable-next-line no-console
        console.log(newValue);
        // this.isFullScreen = Boolean(newValue);
    },
);

// 格式
const showformat = computed(() => settings.showformat);

function toggleFormat() {
    settings.changeSetting({ key: 'showformat', value: !showformat.value });
}
</script>

<template>
    <header>
        <!-- 菜单 -->
        <div class="content">
            <div class="start">
                <div>未命名</div>
            </div>
            <div class="center">
                <!-- 菜单 -->
            </div>
            <div class="end">
                <div class="sidebar-item" @click="toggleFullscreen">
                    <div class="icon" :class="[fullscreen ? 'active-icon' : '']">
                        <ExpandOutlined v-show="!fullscreen" />
                        <CompressOutlined v-show="fullscreen" />
                    </div>
                    <div>{{ fullscreen ? '退出' : '全屏' }}</div>
                </div>
            </div>
        </div>
        <!-- 侧边栏 -->
        <div class="sidebar">
            <div class="sidebar-item" @click="toggleFormat">
                <div class="icon" :class="[showformat ? 'active-icon' : '']">
                    <LayoutOutlined />
                </div>
                <div>格式</div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    width: 100vw;
    height: 50px;
    background-color: #f5f5f5;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding-left: 24px;
}

.sidebar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 260px;
    padding: 0 32px;
}

.sidebar-item {
    font-size: 12px;
    text-align: center;
    cursor: pointer;
}

.icon {
    padding: 0 8px;
    border-radius: 4px;
    transition: .4s all;
}

.anticon {
    font-size: 14px;
}

.active-icon {
    background-color: #e3e3e2;
}
</style>
