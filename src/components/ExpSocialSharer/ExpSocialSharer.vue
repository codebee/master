<template>
  <div class="exp-social-sharer">
    <div class="exp-social-sharer__image" v-if="hasImage">
      <img :src="image.src" :title="image.title" :alt="image.alt">
    </div>
    <div class="exp-social-sharer__content">
      <h3 class="exp-social-sharer__content__title">
        {{ title }}
      </h3>
      <p class="exp-social-sharer__content__body" v-if="hasBody">
        {{ body }}
      </p>
    </div>
    <div class="exp-social-sharer__icons">
      <a v-for="(platform, index) in platforms" :key="index" v-on:click="onClickFor(platform)"
        :href="hrefFor(platform)" :target="targetFor(platform)" :style="styleFor(platform)" :title="titleFor(platform)">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpSocialSharer } from '@/components/ExpSocialSharer/ExpSocialSharer.ts'

// Ensure assets get included in export
require('@/assets/images/social-icon-facebook.svg')
require('@/assets/images/social-icon-twitter.svg')
require('@/assets/images/social-icon-email.svg')

export default Vue.extend({
  name: 'ExpSocialSharer',
  props: {
    image: {
      type: ExpImage.Model,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: 'Share your recommendations'
    },
    body: {
      type: String,
      required: false,
      default: null
    },
    platforms: {
      type: Array,
      required: false,
      validator: (value: Array<ExpSocialSharer.Model>): boolean => {
        const validItems = value.filter(item => {
          return item as ExpSocialSharer.Model !== undefined
        })
        return value.length === validItems.length
      },
      default (): Array<ExpSocialSharer.Model> {
        return []
      }
    }
  },
  data () {
    return {
      metaTitle: '',
      metaDescription: '',
      metaUrl: ''
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.metaTitle = this.getMetaByKey('og:title')
      this.metaDescription = this.getMetaByKey('og:description')
      this.metaUrl = this.getMetaByKey('og:url')
    })
  },
  methods: {
    hrefFor (platform: ExpSocialSharer.Model): string {
      const body = this.metaDescription || ''
      const encodedBody = encodeURIComponent(`${body}\n\n${this.metaUrl}`)
      switch (platform.platform) {
        case ExpSocialSharer.Platform.twitter:
          return `https://twitter.com/intent/tweet?url=${this.metaUrl}&text=${this.metaTitle}`
        case ExpSocialSharer.Platform.email:
          return `mailto:?subject=${this.metaTitle}&body=${encodedBody}`
        default:
          return 'javascript:void(0);'
      }
    },
    targetFor (platform: ExpSocialSharer.Model): string {
      return platform.platform === ExpSocialSharer.Platform.twitter ? '_blank' : ''
    },
    styleFor (platform: ExpSocialSharer.Model): object {
      if (platform.image !== null && platform.image !== undefined) {
        return { backgroundImage: `url(${platform.image.src})` }
      } else {
        return {}
      }
    },
    titleFor (platform: ExpSocialSharer.Model): string {
      return `Share on ${platform.platform}`
    },
    onClickFor (platform: ExpSocialSharer.Model): void {
      if (platform.platform === ExpSocialSharer.Platform.facebook) {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${this.metaUrl}`
        this.$emit('clicked', {
          platform: platform.platform,
          url
        })
        window.open(url, 'Facebook', 'width=670,height=740')
      } else {
        this.$emit('clicked', {
          platform: platform.platform,
          url: this.hrefFor(platform)
        })
      }
    },
    getMetaByKey (key: string): string {
      const metaTags = document.getElementsByTagName('meta')
      if (metaTags === undefined) return ''

      for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i] !== undefined) {
          const name = metaTags[i].getAttribute('name')
          const value = metaTags[i].getAttribute('content')

          if (name as string === key && name !== undefined && name !== null && value !== undefined && value !== null) {
            return value
          }
        }
      }
      return ''
    }
  },
  computed: {
    hasBody (): boolean {
      return this.body !== undefined && this.body !== null && this.body !== ''
    },
    hasImage (): boolean {
      return this.image !== null && this.image !== undefined
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-social-sharer.scss';
</style>
