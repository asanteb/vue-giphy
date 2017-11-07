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
              v-bind:items="cc"
              label="Find a gif"
              v-model="e11"
              autocomplete
              :search-input.sync="userInput"
            >
              <v-list-tile-content v-for="item in cc" :key="item.id">
                  <v-list-tile-title >{{item.id}}</v-list-tile-title>
              </v-list-tile-content>
        </v-select>
          </v-flex>
          </v-layout>
          <div id="pjs"></div>
      </v-container>
    </main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  
  import * as localMethods from './methods'
  import Result from './components/Result.vue'
  const state = {items: [{title:'11w12w', id: 'w1w1w1'}, {title: 'help', id: 'w1w121w1'}]}
  export default {
    data () {
      return {
        e11: [],
        clipped: false,
        drawer: true,
        fixed: false,
        cc: [{title:'11w12w', id: 'w1w1w1'}, {title: 'help', id: 'w1w121w1'}],
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        userInput: '',
        title: 'Vuetify.js',
        state
      }
    },
    mounted () {
      this.$nextTick(() => {this.initParticles()})
    },
    methods: localMethods,
    watch: { userInput: (a, b) => localMethods.searchHandler(a,b ,state) },
    components: {
      Result
    }
  }
</script>
