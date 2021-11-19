import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Vue3Mq } from "vue3-mq";

createApp(App)
.use(VueAxios, axios)
.use(Vue3Mq)
.use(router)
.use(store)
.mount('#app')

