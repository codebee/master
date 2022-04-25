import ExpHero from '@/components/ExpHero/ExpHero'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpVideo } from '@/common/models/ExpVideo'
import { withA11y } from '@storybook/addon-a11y';
import videoAt16x9 from './assets/video-16x9.mp4'
import videoAt16x9Image from './assets/video-16x9.jpg'

export default {
  title: 'ExpHero',
  component: ExpHero,
  decorators: [withA11y]
}

const childComponent = '<div style="padding: 1rem;"><h1>Hero content</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique erat sed rutrum sollicitudin. Fusce vitae lacus eu ex pulvinar congue. Mauris molestie consequat tincidunt.</p></div>'
const image = new ExpImage.Model({
  src: 'https://picsum.photos/1000/600?blur',
  title: 'Background image'
})
const video = new ExpVideo.Model({
  src: videoAt16x9,
  imageUrl: videoAt16x9Image,
  type: 'video/mp4',
  title: 'Background video',
  autoplay: true,
  loop: true,
  muted: true
})

export const DefaultProperties = () => ({
  components: { ExpHero },
  template: `<exp-hero></exp-hero>`
})

export const WithContent = () => ({
  components: { ExpHero },
  template: `<exp-hero>${childComponent}</exp-hero>`
})

export const WithBackgroundColorAndContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :background-color="color">${childComponent}</exp-hero>`,
  data: () => {
    return { 
      color: '#eee'
    }
  }
})

export const WithBackgroundImageAndContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :image="image">${childComponent}</exp-hero>`,
  data: () => {
    return { image }
  }
})

export const WithBackgroundImageAndNoContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :image="image"></exp-hero>`,
  data: () => {
    return { image }
  }
})

export const WithBackgroundVideoAndContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :video="video">${childComponent}</exp-hero>`,
  data: () => {    
    return { video }
  }
})

export const WithBackgroundVideoAndNoContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :video="video"></exp-hero>`,
  data: () => {
    return { video }
  }
})

export const WithBackgroundColorAndVideoAndContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :video="video" :background-color="color">${childComponent}</exp-hero>`,
  data: () => {
    return { 
      color: '#6f5499',
      video 
    }
  }
})

export const WithBackgroundColorAndImageAndVideoAndContent = () => ({
  components: { ExpHero },
  template: `<exp-hero :image="image" :video="video" :background-color="color">${childComponent}</exp-hero>`,
  data: () => {
    return {
      color: '#6f5499',
      image,
      video
    }
  }
})
