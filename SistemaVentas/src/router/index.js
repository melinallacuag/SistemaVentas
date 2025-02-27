import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RContrasenaView from '../views/RContrasenaView.vue'
import CContrasenaView from '../views/CContrasenaView.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        meta: { secure: true }
    },
    {
        path: '/rcontrasena',
        name: 'RContrasena',
        component: RContrasenaView
    },
    {
        path: '/ccontrasena',
        name: 'CContrasena',
        component: CContrasenaView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from,next) => {
    const auth = localStorage.getItem('isAuth') === 'true'
    if (to.meta.secure && !auth) {
        next('/login'); 
    } else {
        next();
      }
});

export default router
