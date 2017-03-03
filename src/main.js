import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router';

import Menu from './components/Menu.vue'
import Sidebar from './components/Sidebar.vue'
import MainSection from './components/MainSection.vue'
import About from './components/About.vue'

Vue.component('app-menu', Menu);
Vue.component('app-sidebar', Sidebar);
Vue.component('app-main-section', MainSection);
Vue.component('app-about', About);

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
    { path: '/about', component: About },
    { path: '/', component: MainSection }
]

const router = new VueRouter({routes})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

// const app = new Vue({
// //  router
//   el: '#app'
// })
