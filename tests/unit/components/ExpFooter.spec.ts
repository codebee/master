/* eslint-disable @typescript-eslint/no-explicit-any */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ExpFooter from '@/components/ExpFooter/ExpFooter.vue'
import { ExpLocation } from '@/common/ExpLocation'
import { ExpAlignment } from '@/common/ExpAlignment'
import { ExpLink } from '@/common/models/ExpLink'
import { ExpGDPR } from '@/common/ExpGDPR'

declare let window: ExpGDPR.Banner

function resetGDPRWindow () {
  if (window === undefined) return
  if (window.cookieLocale !== undefined) {
    window.cookieLocale = undefined
  }
  if (window.cookieURL !== undefined) {
    window.cookieURL = undefined
  }
  if (window.expediaDomain !== undefined) {
    window.expediaDomain = undefined
  }
  // eslint-disable-next-line
  // @ts-ignore Error: "Element implicitly has an 'any' type because index expression is not of type 'number'."
  window['com.expedia.www.tracking.default' as string] = undefined
}

describe('ExpFooter.vue', () => {
  it('has the correct copyright message', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us
      }
    })
    const element = wrapper.find('.exp-footer__item--copyright')
    expect(element.text()).to.eq('© 2020 Expedia')
  })

  it('has the correct default links for USA', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us
      }
    })
    const elements = wrapper.findAll('a')
    expect(elements.length).to.eq(3)
    expect(elements.at(0).attributes('href')).to.eq('https://www.expedia.com/lp/lg-privacypolicy')
    expect(elements.at(0).attributes('title')).to.eq('Privacy Policy')
    expect(elements.at(0).attributes('target')).to.eq('_blank')
    expect(elements.at(0).text()).to.eq('Privacy Policy')
    expect(elements.at(1).attributes('href')).to.eq('https://www.expedia.com/lp/lg-legal')
    expect(elements.at(1).attributes('title')).to.eq('Terms of Use')
    expect(elements.at(1).attributes('target')).to.eq('_blank')
    expect(elements.at(1).text()).to.eq('Terms of Use')
    expect(elements.at(2).attributes('href')).to.eq('https://www.expedia.com/dnsmpi')
    expect(elements.at(2).attributes('title')).to.eq('Do Not Sell My Personal Information')
    expect(elements.at(2).attributes('target')).to.eq('_blank')
    expect(elements.at(2).text()).to.eq('Do Not Sell My Personal Information')
  })

  it('has the correct default links for Canada', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.ca
      }
    })
    const elements = wrapper.findAll('a')
    expect(elements.length).to.eq(2)
    expect(elements.at(0).attributes('href')).to.eq('https://www.expedia.ca/lp/lg-privacypolicy')
    expect(elements.at(0).attributes('title')).to.eq('Privacy Policy')
    expect(elements.at(0).attributes('target')).to.eq('_blank')
    expect(elements.at(0).text()).to.eq('Privacy Policy')
    expect(elements.at(1).attributes('href')).to.eq('https://www.expedia.ca/lp/lg-legal')
    expect(elements.at(1).attributes('title')).to.eq('Terms of Use')
    expect(elements.at(1).attributes('target')).to.eq('_blank')
    expect(elements.at(1).text()).to.eq('Terms of Use')
  })

  it('has the correct default links for Europe', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu
      }
    })
    const elements = wrapper.findAll('a')
    expect(elements.length).to.eq(3)
    expect(elements.at(0).attributes('href')).to.eq('https://www.expedia.co.uk/lp/lg-termsofuse')
    expect(elements.at(0).attributes('title')).to.eq('Terms of Use')
    expect(elements.at(0).attributes('target')).to.eq('_blank')
    expect(elements.at(0).text()).to.eq('Terms of Use')
    expect(elements.at(1).attributes('href')).to.eq('https://www.expedia.co.uk/lp/lg-privacy')
    expect(elements.at(1).attributes('title')).to.eq('Privacy Policy')
    expect(elements.at(1).attributes('target')).to.eq('_blank')
    expect(elements.at(1).text()).to.eq('Privacy Policy')
    expect(elements.at(2).attributes('href')).to.eq('https://www.expedia.co.uk/p/support/cookies')
    expect(elements.at(2).attributes('title')).to.eq('Cookie Policy')
    expect(elements.at(2).attributes('target')).to.eq('_blank')
    expect(elements.at(2).text()).to.eq('Cookie Policy')
  })

  it('does not have a cookie banner for USA', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us
      }
    })
    const element = wrapper.find('#gdprBanner')
    expect(element.exists()).to.eq(false)
  })

  it('does not have a cookie banner for Canada', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.ca
      }
    })
    const element = wrapper.find('#gdprBanner')
    expect(element.exists()).to.eq(false)
  })

  // Note: We need to test the implementation of the cookie banner manually
  it('has a cookie banner for Europe', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu
      }
    })
    expect(wrapper.find('#gdprBanner').exists()).to.eq(true)
  })

  it('has correct default GDPR settings if Europe', () => {
    resetGDPRWindow()
    shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu
      }
    })
    expect(window.cookieLocale).to.eq('en_GB')
    expect(window.cookieURL).to.eq('https://www.expedia.co.uk/p/support/cookies')
    expect(window.expediaDomain).to.eq('www.expedia.co.uk')
    expect((window as { [key: string]: any })['com.expedia.www.tracking.default' as string]).to.eq(false)
  })

  it('has undefined GDPR settings if USA', () => {
    resetGDPRWindow()
    shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us
      }
    })
    expect(window.cookieLocale).to.eq(undefined)
    expect(window.cookieURL).to.eq(undefined)
    expect(window.expediaDomain).to.eq(undefined)
    expect((window as { [key: string]: any })['com.expedia.www.tracking.default' as string]).to.eq(undefined)
  })

  it('has undefined GDPR settings if Canada', () => {
    resetGDPRWindow()
    shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.ca
      }
    })
    expect(window.cookieLocale).to.eq(undefined)
    expect(window.cookieURL).to.eq(undefined)
    expect(window.expediaDomain).to.eq(undefined)
    expect((window as { [key: string]: any })['com.expedia.www.tracking.default' as string]).to.eq(undefined)
  })

  it('has correct custom GDPR settings if Europe', () => {
    resetGDPRWindow()
    shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu,
        gdprCookieLocale: 'Locale',
        gdprCookieUrl: 'URL',
        gdprExpediaDomain: 'Expedia'
      }
    })
    expect(window.cookieLocale).to.eq('Locale')
    expect(window.cookieURL).to.eq('URL')
    expect(window.expediaDomain).to.eq('Expedia')
    expect((window as { [key: string]: any })['com.expedia.www.tracking.default' as string]).to.eq(false)
  })

  it('has extra links if given', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu,
        extraLinks: [
          new ExpLink.Model({
            url: 'https://www.example.com/internal.html',
            title: 'Internal Link',
            target: ExpLink.Target.self
          })
        ]
      }
    })
    const elements = wrapper.findAll('a')
    expect(elements.length).to.eq(4)
    expect(elements.at(3).attributes('href')).to.eq('https://www.example.com/internal.html')
    expect(elements.at(3).attributes('title')).to.eq('Internal Link')
    expect(elements.at(3).attributes('target')).to.eq('_self')
    expect(elements.at(3).text()).to.eq('Internal Link')
  })

  it('has a left alignment class by default', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us
      }
    })
    const element = wrapper.find('.exp-footer')
    expect(element.attributes('class')).to.eq('exp-footer exp-footer--align-left')
  })

  it('has a left alignment class if given', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us,
        alignment: ExpAlignment.Horizontal.left
      }
    })
    const element = wrapper.find('.exp-footer')
    expect(element.attributes('class')).to.eq('exp-footer exp-footer--align-left')
  })

  it('has a center alignment class if given', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us,
        alignment: ExpAlignment.Horizontal.center
      }
    })
    const element = wrapper.find('.exp-footer')
    expect(element.attributes('class')).to.eq('exp-footer exp-footer--align-center')
  })

  it('has a right alignment class if given', () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.us,
        alignment: ExpAlignment.Horizontal.right
      }
    })
    const element = wrapper.find('.exp-footer')
    expect(element.attributes('class')).to.eq('exp-footer exp-footer--align-right')
  })

  it('emits link-clicked event when a link is clicked', async () => {
    const wrapper = shallowMount(ExpFooter, {
      propsData: {
        countryCode: ExpLocation.Country.eu
      }
    })
    const link = wrapper.find('.exp-footer__item--link a')
    link.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['link-clicked']).to.have.lengthOf(1)
    console.log(wrapper.emitted()['link-clicked'])
  })
})
