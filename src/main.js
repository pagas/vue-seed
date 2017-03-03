import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import Menu from './components/Menu.vue'
import Sidebar from './components/Sidebar.vue'
import MainSection from './components/MainSection.vue'

Vue.component('app-menu', Menu);
Vue.component('app-sidebar', Sidebar);
Vue.component('app-main-section', MainSection);

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
