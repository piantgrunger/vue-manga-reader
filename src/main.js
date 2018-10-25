import Vue from 'vue'
import app from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../index.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import router from './router'



new Vue ({
    el: '#app',
    router,
    render: h=>h(app)
}).$mount('#app')
