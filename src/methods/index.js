import particles from '../assets/particles.json'
import imgParticles from '../assets/img-particles.json'

const initParticles = (img) => {
  if (img) {
    imgParticles.particles.shape.image.src = img
    imgParticles.particles.move.speed = 2
    particlesJS('pjs', imgParticles)
  } else {
    particlesJS('pjs', particles)
  }
}

const windowOpener = (link) => {
	window.open(link, '_blank')
}

export {
	initParticles,
	windowOpener,
}
