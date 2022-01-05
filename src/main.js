import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Vue3Mq } from "vue3-mq"
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
.use(VueAxios, axios)
.use(Vue3Mq)
.use(router)
.use(store)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAcKPiLaNEMHMBTfxZ2cK7AeJpPUAsQ33k',
        libraries: "places"
    },
})
.mount('#app')

