import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ExpSocialSharer from '@/components/ExpSocialSharer/ExpSocialSharer.vue'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpSocialSharer as SocialSharer } from '@/components/ExpSocialSharer/ExpSocialSharer.ts'

const image = new ExpImage.Model({
  src: 'https://www.example.com/image.jpg',
  title: 'Example image'
})
const customFacebook = new SocialSharer.Model({
  platform: SocialSharer.Platform.facebook,
  image: new ExpImage.Model({
    src: 'https://www.example.com/facebook.jpg',
    title: 'Facebook'
  })
})
const customTwitter = new SocialSharer.Model({
  platform: SocialSharer.Platform.twitter,
  image: new ExpImage.Model({
    src: 'https://www.example.com/twitter.jpg',
    title: 'Twitter'
  })
})

describe('ExpSocialSharer.vue', () => {
  it('has a title by default', () => {
    const wrapper = mount(ExpSocialSharer, {})
    const element = wrapper.find('.exp-social-sharer__content .exp-social-sharer__content__title')
    expect(element.text()).to.eq('Share your recommendations')
  })

  it('has no platforms by default', () => {
    const wrapper = mount(ExpSocialSharer, {})
    const elements = wrapper.findAll('.exp-social-sharer__icons a')
    expect(elements.length).to.eq(0)
  })

  it('has no body by default', () => {
    const wrapper = mount(ExpSocialSharer, {})
    const element = wrapper.find('.exp-social-sharer__content .exp-social-sharer__content__body')
    expect(element.exists()).to.eq(false)
  })

  it('has no image by default', () => {
    const wrapper = mount(ExpSocialSharer, {})
    const element = wrapper.find('.exp-social-sharer__image')
    expect(element.exists()).to.eq(false)
  })

  it('has custom title if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        title: 'Custom title'
      }
    })
    const element = wrapper.find('.exp-social-sharer__content .exp-social-sharer__content__title')
    expect(element.text()).to.eq('Custom title')
  })

  it('has body if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        body: 'This is some body copy.'
      }
    })
    const element = wrapper.find('.exp-social-sharer__content .exp-social-sharer__content__body')
    expect(element.text()).to.eq('This is some body copy.')
  })

  it('has an image if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        image
      }
    })
    const element = wrapper.find('.exp-social-sharer__image img')
    expect(element.attributes('src')).to.eq('https://www.example.com/image.jpg')
    expect(element.attributes('title')).to.eq('Example image')
    expect(element.attributes('alt')).to.eq('Example image')
  })

  it('has correct attributes for facebook link', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        platforms: [customFacebook]
      }
    })
    const element = wrapper.find('.exp-social-sharer__icons a')
    expect(element.attributes('onClick')).to.eq(undefined)
    expect(element.attributes('href')).to.eq('javascript:void(0);')
    expect(element.attributes('target')).to.eq('')
    expect(element.attributes('style')).to.eq('background-image: url(https://www.example.com/facebook.jpg);')
    expect(element.attributes('title')).to.eq('Share on Facebook')
  })

  it('has custom facebook icon if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        platforms: [customFacebook]
      }
    })
    const element = wrapper.find('.exp-social-sharer__icons a')
    expect(element.attributes('style')).to.eq('background-image: url(https://www.example.com/facebook.jpg);')
    expect(element.attributes('title')).to.eq('Share on Facebook')
  })

  it('has custom twitter icon if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        platforms: [customTwitter]
      }
    })
    const element = wrapper.find('.exp-social-sharer__icons a')
    expect(element.attributes('style')).to.eq('background-image: url(https://www.example.com/twitter.jpg);')
    expect(element.attributes('title')).to.eq('Share on Twitter')
  })

  it('has multiple social platforms if given', () => {
    const wrapper = mount(ExpSocialSharer, {
      propsData: {
        platforms: [customFacebook, customTwitter]
      }
    })
    const elements = wrapper.findAll('.exp-social-sharer__icons a')
    expect(elements.length).to.eq(2)
    expect(elements.at(0).attributes('title')).to.eq('Share on Facebook')
    expect(elements.at(1).attributes('title')).to.eq('Share on Twitter')
  })
})
