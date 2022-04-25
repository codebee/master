import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ExpHero from '@/components/ExpHero/ExpHero.vue'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpVideo } from '@/common/models/ExpVideo'

const colorHex = '#eee'
const colorRGB = 'rgb(238, 238, 238)'
const image = new ExpImage.Model({
  src: 'https://picsum.photos/1000/600?blur',
  title: 'Background image'
})
const video = new ExpVideo.Model({
  src: 'http://html.framework-y.com/images/video-1.mp4',
  imageUrl: 'http://html.framework-y.com/images/video-1.png',
  type: 'video/mp4',
  title: 'Background video',
  autoplay: true,
  loop: true,
  muted: true
})

describe('ExpHero.vue', () => {
  it('has no background color, image, or video by default', () => {
    const wrapper = shallowMount(ExpHero, {})
    expect(wrapper.find('.exp-hero').attributes('style')).to.eq(undefined)
    expect(wrapper.find('video').exists()).to.eq(false)
  })

  it('has no content by default', () => {
    const wrapper = shallowMount(ExpHero, {})
    const element = wrapper.find('.exp-hero__content')
    expect(element.exists()).to.eq(false)
  })

  it('has background color if given', () => {
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        backgroundColor: colorHex
      }
    })
    const element = wrapper.find('.exp-hero')
    expect(element.attributes('style')).to.eq(`background-color: ${colorRGB};`)
  })

  it('has background image if given', () => {
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        image
      }
    })
    const element = wrapper.find('.exp-hero')
    expect(element.attributes('style')).to.eq(`background-image: url(${image.src});`)
    expect(element.attributes('title')).to.eq(image.title)
  })

  it('has background video if given', () => {
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        video
      }
    })
    const elementVideo = wrapper.find('video')
    const elementSource = wrapper.find('video source')
    expect(elementVideo.attributes('poster')).to.eq(video.imageUrl)
    expect(elementSource.attributes('src')).to.eq(video.src)
    expect(elementSource.attributes('type')).to.eq(video.type)
  })

  it('has background video with attributes false', () => {
    const videoWithAttributesFalse = new ExpVideo.Model({
      src: 'http://html.framework-y.com/images/video-1.mp4',
      imageUrl: 'http://html.framework-y.com/images/video-1.png',
      type: 'video/mp4',
      title: 'Background video'
    })
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        video: videoWithAttributesFalse
      }
    })
    const element = wrapper.find('video')
    expect(element.attributes('loop')).to.eq(undefined)
    expect(element.attributes('muted')).to.eq('muted')
    expect(element.attributes('autoplay')).to.eq(undefined)
    expect(element.attributes('playsinline')).to.eq(undefined)
  })

  it('has background video with attributes true', () => {
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        video
      }
    })
    const element = wrapper.find('video')
    expect(element.attributes('loop')).to.eq('loop')
    expect(element.attributes('muted')).to.eq('muted')
    expect(element.attributes('autoplay')).to.eq('autoplay')
    expect(element.attributes('playsinline')).to.eq('true')
  })

  it('has background video, image, and color if given', () => {
    const wrapper = shallowMount(ExpHero, {
      propsData: {
        backgroundColor: colorHex,
        image,
        video
      }
    })
    expect(wrapper.find('.exp-hero').attributes('style')).to.eq(`background-color: ${colorRGB}; background-image: url(${image.src});`)
    expect(wrapper.find('video').exists()).to.eq(true)
  })

  it('has content if given', () => {
    const wrapper = shallowMount(ExpHero, {
      slots: {
        default: 'Hero Content'
      }
    })
    const element = wrapper.find('.exp-hero__content')
    expect(element.text()).to.eq('Hero Content')
  })
})
