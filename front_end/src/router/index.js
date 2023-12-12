import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import SelectedPostView from "@/views/SelectedPostView.vue";
import auth from "../auth";
import addPostView from "@/views/AddPostView.vue";

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
        path: "/posts/:id",
        name: "post",
        component: SelectedPostView,
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
        path: '/addpost',
        name: 'addPost',
        component: addPostView,
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
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router