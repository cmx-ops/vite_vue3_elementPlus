import {createRouter, createWebHashHistory} from "vue-router"

import schoolStat from "/src/pages/schoolStat.vue";
import teacherStat from "/src/pages/teacherStat.vue";
import admin from '/src/pages/index.vue'
import home from "/src/pages/home.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/index',
        children: [
            {   //设置子路由
                path: '/index',
                name: 'index',
                // component:()=>import('/src/pages/index.vue'),
                component: admin
            },
            {   //设置子路由
                path: '/teacherStat',
                name: 'teacherStat',
                // component:()=>import('/src/pages/index.vue'),
                component: teacherStat
            },
            {   //设置子路由
                path: '/schoolStat',
                name: 'schoolStat',
                // component:()=>import('/src/pages/index.vue'),
                component: schoolStat
            }
        ]
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
