import Vue from 'vue'
import app from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../index.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);



new Vue ({
    el: '#app',
    store,
    render: h=>h(app)
})
