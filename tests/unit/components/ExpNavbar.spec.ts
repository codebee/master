import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ExpNavbar from '@/components/ExpNavbar/ExpNavbar.vue'
import { ExpLinkableImage as LinkableImage } from '@/common/models/ExpLinkableImage'
import { ExpImage } from '@/common/models/ExpImage'

const brandImage = new ExpImage.Model({
  src: 'https://www.example.com/brand.jpg',
  title: 'Brand Image'
})
const brandLinkableImage = new LinkableImage.Model({
  image: brandImage
})
const expediaImage = new ExpImage.Model({
  src: 'https://www.example.com/expedia.jpg',
  title: 'Expedia Image'
})
const expediaLinkableImage = new LinkableImage.Model({
  image: expediaImage
})
const menuImage = new ExpImage.Model({
  src: 'https://www.example.com/menu.jpg',
  title: 'Menu Image'
})

describe('ExpNavbar.vue', () => {
  it('has no brand image by default', () => {
    const wrapper = mount(ExpNavbar, {})
    const element = wrapper.find('.exp-navbar__brand')
    expect(element.exists()).to.eq(false)
  })

  it('has no content by default', () => {
    const wrapper = mount(ExpNavbar, {})
    const element = wrapper.find('.exp-navbar__content')
    expect(element.exists()).to.eq(true)
    expect(element.text()).to.eq('')
  })

  it('has button by default', () => {
    const wrapper = mount(ExpNavbar, {})
    const element = wrapper.find('.exp-navbar__button .exp-button-link')
    expect(element.exists()).to.eq(true)
    expect(element.attributes('href')).to.eq('https://www.expedia.com')
    expect(element.attributes('target')).to.eq('_blank')
    expect(element.attributes('title')).to.eq('Book Now')
    expect(element.text()).to.eq('Book Now')
  })

  it('has no expedia image by default', () => {
    const wrapper = mount(ExpNavbar, {})
    const elements = wrapper.findAll('.exp-navbar__expedia .exp-linkable-image')
    expect(elements.length).to.eq(0)
  })

  it('has custom brand image if given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        brandImage: brandLinkableImage
      }
    })
    const element = wrapper.find('.exp-navbar__brand .exp-linkable-image__image')
    expect(element.attributes('src')).to.eq('https://www.example.com/brand.jpg')
  })

  it('has content if given', () => {
    const wrapper = mount(ExpNavbar, {
      slots: {
        default: 'Navbar Content'
      }
    })
    const element = wrapper.find('.exp-navbar__content')
    expect(element.text()).to.eq('Navbar Content')
  })

  it('has no button if not given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        buttonLink: null
      }
    })
    expect(wrapper.find('.exp-navbar__expedia .exp-button-link').exists()).to.eq(false)
  })

  it('has no button if turned off', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        showButton: false
      }
    })
    expect(wrapper.find('.exp-navbar__expedia .exp-button-link').exists()).to.eq(false)
  })

  it('has custom expedia image if given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        expediaImage: expediaLinkableImage
      }
    })
    const element = wrapper.find('.exp-navbar__expedia .exp-linkable-image__image')
    expect(element.attributes('src')).to.eq('https://www.example.com/expedia.jpg')
  })

  it('has no expedia image if not given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        expediaImage: null
      }
    })
    expect(wrapper.find('.exp-navbar__expedia .exp-linkable-image').exists()).to.eq(false)
  })

  it('has mobile menu if content is given', () => {
    const wrapper = mount(ExpNavbar, {
      slots: {
        default: 'Navbar Content'
      }
    })
    const elements = wrapper.findAll('.exp-navbar__mobile-menu__link')
    expect(elements.length).to.eq(1)
  })

  it('has custom menu image if given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        menuImage
      },
      slots: {
        default: 'Navbar Content'
      }
    })
    const element = wrapper.find('.exp-navbar__mobile-menu__link')
    expect(element.attributes('style')).to.eq('background-image: url(https://www.example.com/menu.jpg);')
  })

  it('has menu text if image not given', () => {
    const wrapper = mount(ExpNavbar, {
      propsData: {
        menuImage: null
      },
      slots: {
        default: 'Navbar Content'
      }
    })
    const element = wrapper.find('.exp-navbar__mobile-menu__link')
    expect(element.text()).to.eq('Menu')
  })

  it('triggers event when mobile menu is clicked', async () => {
    const wrapper = mount(ExpNavbar, {
      slots: {
        default: 'Navbar Content'
      }
    })
    const element = wrapper.find('.exp-navbar__mobile-menu__link')
    element.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('toggle-menu')).not.eq(undefined)
  })
})
