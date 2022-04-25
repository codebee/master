<template>
  <div class="exp-linkable-image">
    <a class="exp-linkable-image__link" v-if="hasLink"
      :href="model.link.url" :target="model.link.target" :title="model.link.title">
      <img class="exp-linkable-image__image"
        :src="model.image.src" :alt="model.image.alt">
    </a>
    <img class="exp-linkable-image__image" v-if="!hasLink"
      :src="model.image.src" :title="model.image.title" :alt="model.image.alt">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpLinkableImage } from '@/common/models/ExpLinkableImage'

export default Vue.extend({
  name: 'ExpLinkableImage',
  props: {
    model: {
      type: ExpLinkableImage.Model,
      required: true
    }
  },
  computed: {
    hasLink (): boolean {
      return this.model.link != null
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-linkable-image.scss';
</style>
