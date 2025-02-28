import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RContrasenaView from '../views/RContrasenaView.vue'
import CContrasenaView from '../views/CContrasenaView.vue'
import Layout from '../components/Layout.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        meta: { guestOnly: true }
    },
    {
        path: '/rcontrasena',
        name: 'RContrasena',
        component: RContrasenaView,
        meta: { guestOnly: true }
    },
    {
        path: '/ccontrasena',
        name: 'CContrasena',
        component: CContrasenaView,
        meta: { guestOnly: true }
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: DashboardView,
                meta: { secure: true }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from,next) => {
    const auth = localStorage.getItem('isAuth') === 'true'

    if (to.meta.secure  && !auth) next({ name: 'Login' })
        else if (to.meta.guestOnly && auth)  next({ name: 'Dashboard' })
        else next()

});

export default router
