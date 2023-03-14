import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue"
import TodoAppView from "@/views/TodoAppView.vue"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"

import { useLoggedInStore } from '@/stores/loggedIn'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { requiresAuth: true }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoAppView,
            meta: { requiresAuth: true }
        }
    ]
});


router.beforeEach((to, from) => {
    const isLoggedIn = useLoggedInStore();
    let auth = isLoggedIn.checkedLoggedIn.loggedIn
    
    
    if(to.meta.requiresAuth && !auth) {
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
           
          }
    }
    
})

export default router

