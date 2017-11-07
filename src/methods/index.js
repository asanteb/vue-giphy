import particles from '../assets/particles.json'
import axios from 'axios'
const API_KEY = 'dc6zaTOxFJmzC'

const initParticles = () => {
  console.log('loaded')
  particlesJS('pjs', particles)
}

const searchHandler = (search, a, state) => {
	if (search) this.giphy_search(search, state)
}

const giphy_search = (input, state) => {
  axios.request({
      method:  "GET",
      url:     "/search",
      baseURL: "http://api.giphy.com/v1/gifs",
      headers: {},
      params:  {api_key: API_KEY, q:input}
	})
	.then(res => {state.items = res.data.data; console.log(res.data.data)})
	.catch(err => console.log(err))
}
export {
	initParticles,
	giphy_search,
	searchHandler
}