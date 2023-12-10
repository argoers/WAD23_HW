import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import auth from "../auth";

const routes = [
    {
        path: '/',
        name: 'home',
        component: PostsView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router