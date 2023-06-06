import type { RouteRecordRaw } from 'vue-router';
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        // component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                name: 'Dashboard',
            },
            {
                path: 'speed_tester',
                component: () => import('@/views/speedtester/index.vue'),
                name: 'SpeedTester',
            },
        ],
    },
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
