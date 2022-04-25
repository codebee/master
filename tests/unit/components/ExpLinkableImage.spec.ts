import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ExpLinkableImage from '@/components/ExpLinkableImage/ExpLinkableImage.vue'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpLink } from '@/common/models/ExpLink'
import { ExpLinkableImage as LinkableImage } from '@/common/models/ExpLinkableImage'

const image = new ExpImage.Model({
  src: 'https://www.example.com/image.jpg',
  title: 'Example image'
})
const link = new ExpLink.Model({
  url: 'https://www.example.com',
  title: 'Example domain',
  target: ExpLink.Target.blank
})
const modelWithNoLink = new LinkableImage.Model({ image })
const modelWithLink = new LinkableImage.Model({ image, link })

describe('ExpLinkableImage.vue', () => {
  it('has only an img tag when no link is given', () => {
    const wrapper = shallowMount(ExpLinkableImage, {
      propsData: { model: modelWithNoLink }
    })
    expect(wrapper.findAll('a')).has.lengthOf(0)
    expect(wrapper.findAll('img')).has.lengthOf(1)
  })

  it('has an a tag with a nested img tag when link is given', () => {
    const wrapper = shallowMount(ExpLinkableImage, {
      propsData: { model: modelWithLink }
    })
    expect(wrapper.findAll('a')).has.lengthOf(1)
    expect(wrapper.findAll('img')).has.lengthOf(1)
    expect(wrapper.find('a').findAll('img')).has.lengthOf(1)
  })

  it('has an a tag with expected html attributes when link is given', () => {
    const wrapper = shallowMount(ExpLinkableImage, {
      propsData: { model: modelWithLink }
    })
    const element = wrapper.find('a')
    expect(element.attributes('href')).to.eq('https://www.example.com')
    expect(element.attributes('title')).to.eq('Example domain')
    expect(element.attributes('target')).to.eq('_blank')
  })

  it('has an img tag with expected html attributes when link is given', () => {
    const wrapper = shallowMount(ExpLinkableImage, {
      propsData: { model: modelWithLink }
    })
    const element = wrapper.find('img')
    expect(element.attributes('src')).to.eq('https://www.example.com/image.jpg')
    expect(element.attributes('title')).to.eq(undefined)
    expect(element.attributes('alt')).to.eq('Example image')
  })

  it('has an img tag with expected html attributes when no link is given', () => {
    const wrapper = shallowMount(ExpLinkableImage, {
      propsData: { model: modelWithNoLink }
    })
    const element = wrapper.find('img')
    expect(element.attributes('src')).to.eq('https://www.example.com/image.jpg')
    expect(element.attributes('title')).to.eq('Example image')
    expect(element.attributes('alt')).to.eq('Example image')
  })
})
