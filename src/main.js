import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import './styles/main.css'
import particles from './assets/particles.json'
Vue.use(Vuetify)
// Vue.use(main)
console.log(particles)
  // particlesJS('background', particles, () => {
  //   console.log('callback - particles.js config loaded');
  // });

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    //this.$nextTick(() => this.initParticles())
  },
  methods: {
    initParticles () {
      console.log('loaded')
      particlesJS('particleJS-container', particles)
    }
  }
})
