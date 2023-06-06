import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import eslintPlugin from 'vite-plugin-eslint'; // 导入 eslint 插件

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
        // 匹配 .ts .vue 文件 在运行时进行 eslint 检查
        eslintPlugin({
            include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
