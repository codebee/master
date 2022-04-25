<template>
  <footer :class="containerClass">
    <ul>
      <li class="exp-footer__item exp-footer__item--copyright">
        {{ footerText }}
      </li>
      <li class="exp-footer__item exp-footer__item--link" v-for="(link, index) in links" :key="index">
        <a :href="link.url" :title="link.title" :target="link.target"  @click="$emit('link-clicked', link)">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <div id="gdprBanner" v-if="shouldShowGDPRBanner"></div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpAlignment } from '@/common/ExpAlignment'
import { ExpLocation } from '@/common/ExpLocation'
import { ExpLink } from '@/common/models/ExpLink'
import { ExpGDPR } from '@/common/ExpGDPR'

declare let window: ExpGDPR.Banner

export default Vue.extend({
  name: 'ExpFooter',
  props: {
    countryCode: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return value as ExpLocation.Country !== undefined
      }
    },
    customLinks: {
      type: Array,
      required: false,
      validator: (value: Array<ExpLink.Model>): boolean => {
        const validItems = value.filter(item => {
          return item as ExpLink.Model !== undefined
        })
        return value.length === validItems.length
      },
      default (): Array<ExpLink.Model> {
        return []
      }
    },
    extraLinks: {
      type: Array,
      required: false,
      validator: (value: Array<ExpLink.Model>): boolean => {
        const validItems = value.filter(item => {
          return item as ExpLink.Model !== undefined
        })
        return value.length === validItems.length
      },
      default (): Array<ExpLink.Model> {
        return []
      }
    },
    alignment: {
      type: String,
      required: false,
      default (): string {
        return ExpAlignment.Horizontal.left
      },
      validator: (value: string): boolean => {
        return value as ExpAlignment.Horizontal !== undefined
      }
    },
    gdprCookieLocale: {
      type: String,
      required: false,
      default: 'en_GB'
    },
    gdprCookieUrl: {
      type: String,
      required: false,
      default: 'https://www.expedia.co.uk/p/support/cookies'
    },
    gdprExpediaDomain: {
      type: String,
      required: false,
      default: 'www.expedia.co.uk'
    },
    copyrightText: {
      type: String,
      required: false,
      default: ''
    }
  },
  mounted (): void {
    if (this.shouldShowGDPRBanner) {
      this.setupGDPRBanner()
    }
  },
  methods: {
    setupGDPRBanner (): void {
      if (window === undefined) return
      window.cookieLocale = this.gdprCookieLocale
      window.cookieURL = this.gdprCookieUrl
      window.expediaDomain = this.gdprExpediaDomain
      // eslint-disable-next-line
      // @ts-ignore Error: "Element implicitly has an 'any' type because index expression is not of type 'number'."
      window['com.expedia.www.tracking.default' as string] = false

      const cookieScript = document.createElement('script')
      cookieScript.setAttribute('src', '//a.travel-assets.com/oip/gdprBanner.js')
      document.body.appendChild(cookieScript)

      const trackingScript = document.createElement('script')
      trackingScript.setAttribute('src', '//a.travel-assets.com/oip/oip.js')
      document.head.appendChild(trackingScript)
    }
  },
  computed: {
    containerClass (): object {
      const classes: { [key: string]: boolean } = {
        'exp-footer': true
      }
      classes[`exp-footer--align-${this.alignment.toLowerCase()}`] = true
      return classes
    },
    hasCountry (): boolean {
      return this.countryCode as ExpLocation.Country !== undefined
    },
    country (): ExpLocation.Country {
      return this.countryCode as ExpLocation.Country
    },
    year (): number {
      return new Date().getFullYear()
    },
    footerText (): string {
      return this.copyrightText.length > 0 ? this.copyrightText : `© ${this.year} Expedia`
    },
    links (): Array<ExpLink.Model> {
      if (this.customLinks.length > 0) {
        return this.customLinks as Array<ExpLink.Model>
      }
      const links = this.defaultLinks
      const validExtraLinks = this.extraLinks.filter(link => {
        return link as ExpLink.Model !== undefined
      })
      return links.concat(validExtraLinks as Array<ExpLink.Model>)
    },
    shouldShowGDPRBanner (): boolean {
      return this.country === ExpLocation.Country.eu
    },
    defaultLinks (): Array<ExpLink.Model> {
      switch (this.country) {
        case ExpLocation.Country.eu:
          return this.defaultLinksForEU
        case ExpLocation.Country.us:
          return this.defaultLinksForUS
        case ExpLocation.Country.ca:
          return this.defaultLinksForCA
        default:
          return []
      }
    },
    defaultLinksForEU (): Array<ExpLink.Model> {
      return [
        new ExpLink.Model({
          url: 'https://www.expedia.co.uk/lp/lg-termsofuse',
          title: 'Terms of Use',
          target: ExpLink.Target.blank
        }),
        new ExpLink.Model({
          url: 'https://www.expedia.co.uk/lp/lg-privacy',
          title: 'Privacy Policy',
          target: ExpLink.Target.blank
        }),
        new ExpLink.Model({
          url: 'https://www.expedia.co.uk/p/support/cookies',
          title: 'Cookie Policy',
          target: ExpLink.Target.blank
        })
      ]
    },
    defaultLinksForUS (): Array<ExpLink.Model> {
      return [
        new ExpLink.Model({
          url: 'https://www.expedia.com/lp/lg-privacypolicy',
          title: 'Privacy Policy',
          target: ExpLink.Target.blank
        }),
        new ExpLink.Model({
          url: 'https://www.expedia.com/lp/lg-legal',
          title: 'Terms of Use',
          target: ExpLink.Target.blank
        }),
        new ExpLink.Model({
          url: 'https://www.expedia.com/dnsmpi',
          title: 'Do Not Sell My Personal Information',
          target: ExpLink.Target.blank
        })
      ]
    },
    defaultLinksForCA (): Array<ExpLink.Model> {
      return [
        new ExpLink.Model({
          url: 'https://www.expedia.ca/lp/lg-privacypolicy',
          title: 'Privacy Policy',
          target: ExpLink.Target.blank
        }),
        new ExpLink.Model({
          url: 'https://www.expedia.ca/lp/lg-legal',
          title: 'Terms of Use',
          target: ExpLink.Target.blank
        })
      ]
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-footer.scss';
</style>
