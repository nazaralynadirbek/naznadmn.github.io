import Vue from 'vue'

import Store  from './store/store'
import Router from './router/router'

// Components
import App from './App.vue'

new Vue({
    el: '#app',
    store: Store,
    router: Router,
    render: h => h(App)
})
