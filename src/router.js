import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import ProductHome from "@/views/ProductHome"
import About from "@/views/About"
import Profile from "@/views/Profile"
import Login from "@/views/Login"
import ProductDetail from "@/views/ProductDetail"


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/product', component: ProductHome },
    { path: '/product/:id', component: ProductDetail },
    { path: '/about', component: About },
    {
        path: '/profile',
        component: Profile,

        // beforeEnter: (to, from, next) => {

        //     let auth = localStorage.getItem('auth');

        //     if (auth) {
        //         next();
        //     } else {
        //         next('/login')
        //     }

        // }

    },
    { path: '/login', component: Login },
]

const router = new VueRouter({
    // Using mode to clean # sign behind the url
    mode: 'history',

    routes
})

router.beforeEach((to, from, next) => {

    if (to.path === "/profile" || to.path === "/product") {
        let auth = localStorage.getItem('auth');
        if (auth) {
            next()
        } else {
            next('/login');
        }
    } else {
        next();
    }

})

// This is sent to main.js
export default router