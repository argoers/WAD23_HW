import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: PostsView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router