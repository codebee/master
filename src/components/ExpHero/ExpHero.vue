<template>
  <div class="exp-hero" :style="containerStyle" :title="title">
    <div class="exp-hero__content" title="" v-if="hasContent">
      <slot></slot>
    </div>
    <div class="exp-hero__video" v-if="hasVideo">
      <video ref="video" class="exp-hero__video__player" muted
        :poster="video.imageUrl" :loop="video.loop" :autoplay="video.autoplay" :playsinline="video.autoplay">
        <source :src="video.src" :type="video.type">
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpVideo } from '@/common/models/ExpVideo'

export default Vue.extend({
  name: 'ExpHero',
  props: {
    image: {
      type: ExpImage.Model,
      required: false,
      default: null
    },
    video: {
      type: ExpVideo.Model,
      required: false,
      default: null
    },
    backgroundColor: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    containerStyle (): object {
      const style: {[k: string]: string} = {}

      if (this.backgroundColor !== null && this.backgroundColor !== undefined) {
        style['background-color'] = this.backgroundColor
      }
      if (this.image !== null && this.image !== undefined) {
        style['background-image'] = `url(${this.image.src})`
      }

      return style
    },
    hasContent (): boolean {
      return this.$slots.default !== undefined && this.$slots.default !== null
    },
    hasVideo (): boolean {
      return this.video !== null && this.video !== undefined
    },
    title (): string {
      if (this.video !== null && this.video !== undefined) {
        return this.video.title
      } else if (this.image !== null && this.image !== undefined) {
        return this.image.title
      }
      return ''
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-hero.scss';
</style>
