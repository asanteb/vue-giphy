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
              <v-layout row wrap v-if="items.length > 0 && items[0].images">
                <v-flex
                  xs4
                  v-for="n in 3"
                  :key="n"
                  v-on:click="handleClick(n)"
                  v-on:mouseover="handleHover(n)"
                  v-if="items[n].images"
                >
                  <v-card flat tile href="#">
                    <v-card-media
                      :src="items[n].images.downsized.url"
                      height="150px"
                    >
                    </v-card-media>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>{{selectedImage.title}}</v-toolbar-title>
                </v-toolbar>
                  <v-card class="text-xs-center">
                    <img :src="selectedImage.img"></img>
                  </v-card>
                <v-divider></v-divider>
                <br />
                <v-content class="text-xs-center">
                  <h6>Rating</h6>
                  <p>
                    {{selectedImage.rating}}
                  </p>
                  <h6>Source</h6>
                  <p>
                    <a :href="selectedImage.source">{{selectedImage.source}}</a>
                  </p>
                  <h6>Date</h6>
                  <p>
                    {{selectedImage.date}}
                  </p>
                </v-content>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <div id="pjs"></div>
      </v-container>
    </main>
    <v-footer :fixed="fixed" app>
      <span><a href="asante@geekenforcer.com">asante@geekenforcer.com</a></span>
      <v-btn flat icon v-on:click="windowOpener('https://github.com/asantebuil/vue-giphy')">
        <v-icon>fa-github-alt</v-icon>
      </v-btn>
      <v-btn flat icon v-on:click="windowOpener('https://twitter.com/yamoshotto')">
        <v-icon>fa-twitter</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import {
    initParticles,
    windowOpener,
  } from './methods'
  

  const API_KEY = 'dc6zaTOxFJmzC'
  const state = {items: []}
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        dialog: false,
        items: [],
        miniVariant: false,
        right: true,
        loading: false,
        rightDrawer: false,
        select: [],
        search: null,
        selectedImage: {img: '', title: '', rating: '', source: '', date: ''},
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
      giphy_search (input) {
        axios.request({
          method:  "GET",
          url:     "/search",
          baseURL: "http://api.giphy.com/v1/gifs",
          headers: {},
          params:  {api_key: API_KEY, q:input, rating: 'pg', limit: 5}
        })
        .then(res => {this.items = res.data.data; console.log(res.data.data)})
        .catch(err => console.log(err))
      },
      handleClick (n) {
        this.dialog = true
      },
      handleHover (n) {
        const downsize_img = this.items[n].images.downsized.url
        const img = this.items[n].images.downsized.url
        const obj = {
          img: img,
          title: this.items[n].title,
          rating: this.items[n].rating.toUpperCase(),
          source: this.items[n].source,
          date: this.items[n].import_datetime
        }
        this.selectedImage = obj
        this.initParticles(downsize_img)
      },
      windowOpener,
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
