<template>
  <v-app>
    <main >

      <v-container class="text-xs-center" >
        <v-layout row child-flex justify-center align-center wrap id='app1'>
          <v-flex xs12 sm6>
            <v-flex>
            <v-text-field
              name="input-1"
              label="Search something silly"
              v-model="search"
            ></v-text-field>
          </v-flex>
            <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
              <v-layout row wrap v-if="items.length > 0">
                <v-flex
                  xs4
                  v-for="n in 3"
                  :key="n"
                  v-on:click="handleClick(n)"
                >
                  <v-card flat tile>
                    <v-card-media
                      :src="items[n].images.downsized.url"
                      height="150px"
                    >
                    </v-card-media>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <div id="pjs"></div>
      </v-container>
    </main>
    <v-footer :fixed="fixed" app>
      <a href = "mailto: asante@geekenforcer.com">asante@geekenforcer.com</a>
      <v-btn flat icon>
        <v-icon>fa-github-alt</v-icon>
      </v-btn>
      <v-btn flat icon>
        <v-icon>fa-twitter</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>

  import {
    initParticles,
  } from './methods'
  import Result from './components/Result.vue'
  import axios from 'axios'

  const API_KEY = 'dc6zaTOxFJmzC'
  const state = {items: []}
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [],
        miniVariant: false,
        right: true,
        loading: false,
        rightDrawer: false,
        select: [],
        search: null,
        selectedImage: '',
        size: 'sm',
        userInput: '',
        title: 'Vuetify.js',
        state,
        q: {}
      }
    },
    mounted () {
      this.$nextTick(() => {this.initParticles()})
    },
    methods: {
      getLabel (item) {
        return item.title
      },
      giphy_search (input) {
        axios.request({
          method:  "GET",
          url:     "/search",
          baseURL: "http://api.giphy.com/v1/gifs",
          headers: {},
          params:  {api_key: API_KEY, q:input}
        })
        .then(res => {this.items = res.data.data; console.log(input, this.items)})
        .catch(err => console.log(err))
      },
      handleClick (n) {
        const img = this.items[n].images.downsized.url
        this.initParticles(img)
        console.log(img)
      },
      initParticles,
    },
    watch: {
      search (val) {
        if (val) this.giphy_search(val)
      }
    },
    components: {

    }
  }
</script>
