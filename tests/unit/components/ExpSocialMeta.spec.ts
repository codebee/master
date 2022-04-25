import { assert, expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import ExpSocialMeta from '@/components/ExpSocialMeta/ExpSocialMeta.vue'
import VueMeta from 'vue-meta'

const localVue = createLocalVue()
localVue.use(VueMeta)

describe('ExpSocialMeta.vue', () => {
  it('has the correct social meta tags', () => {
    const wrapper = mount(ExpSocialMeta, {
      propsData: {
        title: 'Page title',
        description: 'This is the page description.',
        imageUrl: 'https://www.example.com/image.jpg'
      }
    })
    const meta = wrapper.vm.$meta().refresh().metaInfo.meta
    if (meta === undefined) assert.fail()
    expect(meta.length).to.eq(12)
    expect(meta[0].name).to.eq('description')
    expect(meta[0].content).to.eq('This is the page description.')

    // Facebook
    expect(meta[1].name).to.eq('og:url')
    expect(meta[1].content).to.eq('http://localhost/')
    expect(meta[2].name).to.eq('og:type')
    expect(meta[2].content).to.eq('website')
    expect(meta[3].name).to.eq('og:title')
    expect(meta[3].content).to.eq('Page title')
    expect(meta[4].name).to.eq('og:description')
    expect(meta[4].content).to.eq('This is the page description.')
    expect(meta[5].name).to.eq('og:image')
    expect(meta[5].content).to.eq('https://www.example.com/image.jpg')
    expect(meta[6].name).to.eq('og:image:alt')
    expect(meta[6].content).to.eq('Page title')

    // Twitter
    expect(meta[7].name).to.eq('twitter:title')
    expect(meta[7].content).to.eq('Page title')
    expect(meta[8].name).to.eq('twitter:description')
    expect(meta[8].content).to.eq('This is the page description.')
    expect(meta[9].name).to.eq('twitter:image')
    expect(meta[9].content).to.eq('https://www.example.com/image.jpg')
    expect(meta[10].name).to.eq('twitter:image:alt')
    expect(meta[10].content).to.eq('Page title')
    expect(meta[11].name).to.eq('twitter:card')
    expect(meta[11].content).to.eq('summary_large_image')
  })

  it('has the correct twitter handle', () => {
    const wrapper = mount(ExpSocialMeta, {
      propsData: {
        title: 'Page title',
        description: 'This is the page description.',
        imageUrl: 'https://www.example.com/image.jpg',
        twitterHandle: '@test'
      }
    })
    const meta = wrapper.vm.$meta().refresh().metaInfo.meta
    if (meta === undefined) assert.fail()
    expect(meta.length).to.eq(13)
    expect(meta[12].name).to.eq('twitter:site')
    expect(meta[12].content).to.eq('@test')
  })
})
