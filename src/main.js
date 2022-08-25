import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VeeValidate from 'vee-validate';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { BootstrapVue } from 'bootstrap-vue'

// Bootsrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// BootsrapVue CSS, JS
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue-icons'


//ANIMATE CSS
// import '../node_modules/animate.css/animate.min.css'

//FONT AWESOME
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

//AOS CSS
import '../node_modules/aos/dist/aos.css'

//AOS JS
import '../node_modules/aos/dist/aos.js'

// CUSTOM CSS
import './assets/css/main.css' 

createApp(App).use(store).use(router).mount('#app')

