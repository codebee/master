import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ExpVideo from '@/components/ExpVideo/ExpVideo.vue'
import { ExpVideo as Video } from '@/common/models/ExpVideo'

describe('ExpVideo.vue', () => {
  it('has nothing by default', () => {
    const wrapper = shallowMount(ExpVideo, {})
    const elements = wrapper.findAll('.exp-video > *')
    expect(elements.length).to.eq(0)
  })

  it('has the correct video attributes if given with all false', () => {
    const video = new Video.Model({
      src: 'https://www.example.com/video.mp4',
      imageUrl: 'https://www.example.com/image.jpg',
      type: 'video/mp4',
      title: 'Video',
      autoplay: false,
      loop: false,
      muted: false,
      controls: false
    })
    const wrapper = shallowMount(ExpVideo, {
      propsData: {
        video
      }
    })
    const element = wrapper.find('video')
    expect(element.attributes('loop')).to.eq(undefined)
    expect(element.attributes('muted')).to.eq(undefined)
    expect(element.attributes('autoplay')).to.eq(undefined)
    expect(element.attributes('playsinline')).to.eq(undefined)
    expect(element.attributes('controls')).to.eq(undefined)
  })

  it('has the correct video attributes if given with all true', () => {
    const video = new Video.Model({
      src: 'https://www.example.com/video.mp4',
      imageUrl: 'https://www.example.com/image.jpg',
      type: 'video/mp4',
      title: 'Video',
      autoplay: true,
      loop: true,
      muted: true,
      controls: true
    })
    const wrapper = shallowMount(ExpVideo, {
      propsData: {
        video
      }
    })
    const element = wrapper.find('video')
    expect(element.attributes('loop')).to.eq('loop')
    expect(element.attributes('muted')).to.eq('muted')
    expect(element.attributes('autoplay')).to.eq('autoplay')
    expect(element.attributes('playsinline')).to.eq('true')
    expect(element.attributes('controls')).to.eq('controls')
  })

  it('has the correct default aspect ratio', () => {
    const wrapper = shallowMount(ExpVideo, {})
    const elements = wrapper.findAll('.exp-video.exp-video--ratio-16x9')
    expect(elements.length).to.eq(1)
  })

  it('has the 16x9 aspect ratio if given', () => {
    const wrapper = shallowMount(ExpVideo, {
      propsData: {
        aspectRatio: Video.AspectRatio.sixteenByNine
      }
    })
    const elements = wrapper.findAll('.exp-video.exp-video--ratio-16x9')
    expect(elements.length).to.eq(1)
  })

  it('has the 4x3 aspect ratio if given', () => {
    const wrapper = shallowMount(ExpVideo, {
      propsData: {
        aspectRatio: Video.AspectRatio.fourByThree
      }
    })
    const elements = wrapper.findAll('.exp-video.exp-video--ratio-4x3')
    expect(elements.length).to.eq(1)
  })

  it('has the 1x1 aspect ratio if given', () => {
    const wrapper = shallowMount(ExpVideo, {
      propsData: {
        aspectRatio: Video.AspectRatio.oneByOne
      }
    })
    const elements = wrapper.findAll('.exp-video.exp-video--ratio-1x1')
    expect(elements.length).to.eq(1)
  })

  it('has content if given', () => {
    const wrapper = shallowMount(ExpVideo, {
      slots: {
        default: 'Random Content'
      }
    })
    const element = wrapper.find('.exp-video')
    expect(element.text()).to.eq('Random Content')
  })

  it('has iframe content if given', () => {
    const wrapper = shallowMount(ExpVideo, {
      slots: {
        default: '<iframe src="https://www.example.com"></iframe>'
      }
    })
    const elements = wrapper.findAll('.exp-video > iframe')
    expect(elements.length).to.eq(1)
  })
})
