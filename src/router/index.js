import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import SignUpView from "../views/SignUpView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: PostsView
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