import Vue from 'vue'
//import 'babel-polyfill'
import router from './router'
import App from './App'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
