<script setup lang="ts">
import { computed, reactive } from 'vue';
import useStore from '../store';
import Container from './Container.vue';
import Footer from './Footer.vue';

const { settings } = useStore();

const showformat = computed(() => settings.showformat);

const classObject = reactive({
    'show-sidebar': showformat,
});
</script>

<template>
    <section :class="classObject">
        <div class="main">
            <Container />
            <Footer />
        </div>
        <div class="sidebar" />
    </section>
</template>

<style scoped>
section {
    display: flex;
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: auto;
    background-color: #ffffff;
}

section.show-sidebar .sidebar {
    width: 260px;
    /* 显示侧边栏时，侧边栏宽度变为 260px */
}

section.show-sidebar .main-content {
    margin-right: 260px;
    /* 显示侧边栏时，主内容左边距为 260px */
}

.main {
    flex: 1;
    transition: margin-right 0.3s ease-out;
    /* 左边距变化具有过渡效果 */
    background-color: #ffffff;
}

.sidebar {
    width: 0;
    height: 100%;
    transition: width 0.3s ease-out;
    /* 宽度变化具有过渡效果 */
    background-color: #f4f5f5;
}
</style>
