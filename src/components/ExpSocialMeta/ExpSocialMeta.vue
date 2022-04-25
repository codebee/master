<template>
  <div class="exp-social-meta"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

export default Vue.extend({
  name: 'ExpSocialMeta',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    twitterHandle: {
      type: String,
      required: false
    }
  },
  metaInfo (): object {
    const meta = [
      { name: 'description', content: this.description },

      // Facebook
      { name: 'og:url', content: document.location.href },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: this.title },
      { name: 'og:description', content: this.description },
      { name: 'og:image', content: this.imageUrl },
      { name: 'og:image:alt', content: this.title },

      // Twitter
      { name: 'twitter:title', content: this.title },
      { name: 'twitter:description', content: this.description },
      { name: 'twitter:image', content: this.imageUrl },
      { name: 'twitter:image:alt', content: this.title },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]

    if (typeof this.twitterHandle === 'string') {
      meta.push({ name: 'twitter:site', content: this.twitterHandle })
    }

    return { meta }
  }
})
</script>
