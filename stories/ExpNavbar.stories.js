import ExpNavbar from '@/components/ExpNavbar/ExpNavbar'
import { ExpLinkableImage as LinkableImage } from '@/common/models/ExpLinkableImage'
import { ExpImage } from '@/common/models/ExpImage'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExpNavbar',
  component: ExpNavbar,
  decorators: [withA11y]
}

const shortContent = 'This is some content.'
const longContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique erat sed rutrum sollicitudin. Fusce vitae lacus eu ex pulvinar congue. Mauris molestie consequat tincidunt.'
const brandImage = new ExpImage.Model({
  src: 'https://picsum.photos/400/250',
  title: 'Visit Jordan'
})
const brandLinkableImage = new LinkableImage.Model({ image: brandImage })
const expediaImage = new ExpImage.Model({
  src: 'https://picsum.photos/400/250',
  title: 'Expedia'
})
const expediaLinkableImage = new LinkableImage.Model({ image: expediaImage })

export const DefaultProperties = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithShortContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar v-on:toggle-menu="toggleMenu">${shortContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithLongContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithBrandImageAndContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :brand-image="image" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  data: () => {
    return { image: brandLinkableImage }
  },
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithBrandImageAndNoContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :brand-image="image" v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  data: () => {
    return { image: brandLinkableImage }
  },
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithBrandImageAndExpediaImageAndContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :brand-image="brandImage" :expedia-image="expediaImage" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  data: () => {
    return { 
      brandImage: brandLinkableImage,
      expediaImage: expediaLinkableImage 
    }
  },
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithExpediaImageAndContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :expedia-image="image" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  data: () => {
    return { image: expediaLinkableImage }
  },
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithMenuImageAndWithContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :menu-image="image" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  data: () => {
    const image = new ExpImage.Model({
      src: require('@/assets/images/mobile-menu-icon.svg'),
      title: 'Menu'
    })
    return { image: image }
  },
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoButtonOrContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :show-button="false" v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoButtonAndWithContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :show-button="false" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoButtonOrExpediaImageAndWithContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :show-button="false" :expedia-image="null" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoButtonOrExpediaImageOrContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :show-button="false" :expedia-image="null" v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoExpediaImageAndWithContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :expedia-image="null" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoExpediaImageOrContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :expedia-image="null" v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoPropertiesAndWithContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :brand-image="null" :show-button="false" :expedia-image="null" v-on:toggle-menu="toggleMenu">${longContent}</exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})

export const WithNoPropertiesOrContent = () => ({
  components: { ExpNavbar },
  template: `<exp-navbar :brand-image="null" :show-button="false" :expedia-image="null" v-on:toggle-menu="toggleMenu"></exp-navbar>`,
  methods: { toggleMenu: action('Toggle menu') }
})