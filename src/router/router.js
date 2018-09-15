import Vue    from 'vue'
import Router from 'vue-router'

// Components
import Home        from '@/views/Home.vue'
import Description from '@/views/Description.vue'
import Partnership from '@/views/Partnership.vue'
import About       from '@/views/About.vue'
import FAQ         from '@/views/FAQ.vue'

const router = new Router({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/description',
        component: Description
    }, {
        path: '/partnership',
        component: Partnership
    }, {
        path: '/about',
        component: About
    }, {
        path: '/faq',
        component: FAQ
    }],

    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },

    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

Vue.use(Router)

export default router;
