import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ExpButtonLink from '@/components/ExpButtonLink/ExpButtonLink.vue'
import { ExpLink } from '@/common/models/ExpLink'

const model = new ExpLink.Model({
  url: 'https://www.example.com',
  title: 'Example domain',
  target: ExpLink.Target.blank
})

describe('ExpButtonLink.vue', () => {
  it('has only one a tag', () => {
    const wrapper = shallowMount(ExpButtonLink, {
      propsData: { model }
    })
    expect(wrapper.findAll('a')).has.lengthOf(1)
  })

  it('has expected html attributes', () => {
    const wrapper = shallowMount(ExpButtonLink, {
      propsData: { model }
    })
    const element = wrapper.find('a')
    expect(element.attributes('href')).to.eq('https://www.example.com')
    expect(element.attributes('target')).to.eq('_blank')
    expect(element.attributes('title')).to.eq('Example domain')
  })

  it('populates the default slot', () => {
    const wrapper = shallowMount(ExpButtonLink, {
      propsData: { model },
      slots: {
        default: 'Link Content'
      }
    })
    const element = wrapper.find('a')
    expect(element.text()).to.eq('Link Content')
  })
})
