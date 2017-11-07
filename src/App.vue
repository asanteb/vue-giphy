<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
    </v-toolbar>
    <main >
      <v-container class="text-xs-center" >
        <v-layout row child-flex justify-center align-center wrap id='app1'>
        <v-flex xs12 sm6>
            <v-select
              label="Select"
              autocomplete
            ></v-select>
          </v-flex>
          </v-layout>
          <div id="pjs">
          </div>
      </v-container>
    </main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import particles from './assets/particles.json'

  const state = {}
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        state
      }
    },
    mounted () {
      this.$nextTick(() => this.initParticles())
    },
    methods: {
      initParticles () {
        console.log('loaded')
        particlesJS('pjs', particles)
      }
    }
  }
</script>
