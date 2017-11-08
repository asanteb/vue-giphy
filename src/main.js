import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import './styles/main.css'
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
