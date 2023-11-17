import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'

const routes = [{
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