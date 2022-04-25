<template>
  <div ref="container" :class="containerClass">
    <video 
      ref="video" 
      class="exp-video__video__player" 
      v-if="hasVideo"
      :title="video.title" 
      :poster="video.imageUrl" 
      :loop="video.loop" 
      :autoplay="video.autoplay"
      :playsinline="video.autoplay" 
      :controls="video.controls" 
      :muted="video.muted"
    >
      <source :src="video.src" :type="video.type">
    </video>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpVideo } from '@/common/models/ExpVideo'
import VimeoPlayer from '@vimeo/player'
import YouTubePlayer from 'youtube-player'

export default Vue.extend({
  name: 'ExpVideo',
  props: {
    video: {
      type: ExpVideo.Model,
      required: false,
      default: null
    },
    aspectRatio: {
      type: String,
      required: false,
      default () {
        return ExpVideo.AspectRatio.sixteenByNine
      },
      validator: (value: string): boolean => {
        return value as ExpVideo.AspectRatio !== undefined
      }
    }
  },
  data () {
    const lastRecordedTime = 0
    const videoPercent25 = false
    const videoPercent50 = false
    const videoPercent75 = false
    const videoPercent100 = false
    return { lastRecordedTime, videoPercent25, videoPercent50, videoPercent75, videoPercent100 }
  },
  mounted () {
    this.updateMutedAttribute()
    this.addEventHandlersForVideoUrl()
    this.addEventHandlersForVideoIframe()
  },
  methods: {
    addEventHandlersForVideoUrl () {
      if (this.$refs.video === undefined) {
        return
      }
      // eslint-disable-next-line
      // @ts-ignore
      this.$refs.video.addEventListener('play', this.handleVideoPlayEvent, false)
      // eslint-disable-next-line
      // @ts-ignore
      this.$refs.video.addEventListener('pause', this.handleVideoPauseEvent, false)
      // eslint-disable-next-line
      // @ts-ignore
      this.$refs.video.addEventListener('timeupdate', this.handleVideoTimeUpdateEvent, false)
      // eslint-disable-next-line
      // @ts-ignore
      this.$refs.video.addEventListener('ended', this.handleVideoEndedEvent, false)
    },
    addEventHandlersForVideoIframe () {
      if (this.$refs.container === undefined) {
        return
      }
      // eslint-disable-next-line
      // @ts-ignore
      const iframe = this.$refs.container.querySelector('iframe')
      if (iframe === undefined || iframe === null) {
        return
      }
      const url = iframe.getAttribute('src')
      if (url.includes('vimeo') === true) {
        this.addEventHandlerForVimeoVideo(iframe)
      } else if (url.includes('youtube') === true) {
        this.addEventHandlerForYouTubeVideo(iframe)
      }
    },
    addEventHandlerForVimeoVideo (element: HTMLElement) {
      const player = new VimeoPlayer(element)
      player.on('play', () => {
        this.$emit('playing')
      })
      player.on('pause', () => {
        this.$emit('paused')
      })
    },
    addEventHandlerForYouTubeVideo (element: HTMLElement) {
      // eslint-disable-next-line
      // @ts-ignore vue unique id
      const id = `${this._uid}-youtube`
      element.setAttribute('id', id)
      // eslint-disable-next-line
      // @ts-ignore vue unique id
      const player = new YouTubePlayer(id)
      // eslint-disable-next-line
      player.on('stateChange', (event: { [key: string]: any }) => {
        if (event.data === 1) {
          this.$emit('playing')
        }
        else if (event.data === 2) {
          this.$emit('paused')
        }
      })
    },
    handleVideoPlayEvent (event: Event) {
      if (event.type !== 'play') {
        return
      }
      this.$emit('playing')
    },
    handleVideoPauseEvent (event: Event) {
      if (event.type !== 'pause') {
        return
      }
      this.$emit('paused')
    },
    handleVideoTimeUpdateEvent (event: Event) {
      // @ts-ignore
      if (this.videoPercent100 || !event.target || !event.target.currentTime) {
        return;
      }
      // @ts-ignore
      if (!this.videoPercent25 && event.target.currentTime > event.target.duration * 0.25) {
        this.$emit('progress25percent')
        this.videoPercent25 = true;
      }
      // @ts-ignore
      else if (!this.videoPercent50 && event.target.currentTime > event.target.duration * 0.5) {
        this.$emit('progress50percent')
        this.videoPercent50 = true;
      }
      // @ts-ignore
      else if (!this.videoPercent75 && event.target.currentTime > event.target.duration * 0.75) {
        this.$emit('progress75percent')
        this.videoPercent75 = true;
      }
      // @ts-ignore
      else if (!this.videoPercent100 && this.videoPercent75 && event.target.currentTime < this.lastRecordedTime) {
        this.$emit('progress100percent')
        this.videoPercent100 = true;
      }
      // @ts-ignore
      this.lastRecordedTime = event.target.currentTime;
    },
    handleVideoEndedEvent (event: Event) {
      if (event.type !== 'ended') {
        return
      }
      this.$emit('ended')
    },
    updateMutedAttribute () {
      if (this.video !== null && this.video !== undefined && this.video.muted === true) {
        (this.$refs.video as HTMLElement).setAttribute('muted', 'muted')
      }
    },
  },
  computed: {
    containerClass () {
      const classes: {[k: string]: boolean} = { 'exp-video': true }

      if (this.aspectRatio !== null && this.aspectRatio !== undefined) {
        classes[`exp-video--ratio-${this.aspectRatio}`] = true
      } else {
        classes[`exp-video--ratio-${ExpVideo.AspectRatio.sixteenByNine}`] = true
      }

      return classes
    },
    hasContent (): boolean {
      return this.$slots.default !== undefined && this.$slots.default !== null
    },
    hasVideo (): boolean {
      return this.video !== null && this.video !== undefined
    }
  },
  watch: {
    video (newValue?: ExpVideo.Model) {
      if (newValue === undefined || newValue === null) return
      this.updateMutedAttribute()
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-video.scss';
</style>
