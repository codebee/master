<template>
  <nav class="exp-navbar" :class="containerClass">
    <div class="exp-navbar__left">
      <div class="exp-navbar__expedia" v-if="hasButton || hasExpediaImage">
        <exp-linkable-image v-if="hasExpediaImage" :model="expediaImage" @click.native="$emit('expedia-clicked')"></exp-linkable-image>
      </div>
      <div class="exp-navbar__content">
        <slot></slot>
      </div>
      <div class="exp-navbar__brand" v-if="hasBrandImage">
        <exp-linkable-image :model="brandImage" @click.native="$emit('brand-clicked')"></exp-linkable-image>
      </div>
    </div>
    <div class="exp-navbar__right">
      <div class="exp-navbar__button" v-if="hasButton">
        <exp-button-link :model="buttonLink" @click.native="$emit('button-clicked')">
          {{ buttonLink.title }}
        </exp-button-link>
      </div>
      <div class="exp-navbar__mobile-menu" v-if="hasContent">
        <a href="javascript:void(0);" class="exp-navbar__mobile-menu__link"
          @click="toggleMenu" :style="menuStyle" :class="menuClass" :title="menuTitle">
          {{ menuTitle }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import ExpLinkableImage from '@/components/ExpLinkableImage/ExpLinkableImage.vue'
import ExpButtonLink from '@/components/ExpButtonLink/ExpButtonLink.vue'
import { ExpLinkableImage as LinkableImage } from '@/common/models/ExpLinkableImage'
import { ExpLink } from '@/common/models/ExpLink'
import { ExpImage } from '@/common/models/ExpImage'

// Ensure assets get included in export
require('@/assets/images/expedia-logo.svg')
require('@/assets/images/mobile-menu-icon.svg')

export default Vue.extend({
  name: 'ExpNavbar',
  components: {
    ExpLinkableImage,
    ExpButtonLink
  },
  props: {
    brandImage: {
      type: LinkableImage.Model,
      required: false,
      default: null
    },
    buttonLink: {
      type: ExpLink.Model,
      required: false,
      default (): ExpLink.Model {
        return new ExpLink.Model({
          url: 'https://www.expedia.com',
          title: 'Book Now',
          target: ExpLink.Target.blank
        })
      }
    },
    showButton: {
      type: Boolean,
      required: false,
      default: true
    },
    expediaImage: {
      type: LinkableImage.Model,
      required: false,
      default: null
    },
    menuImage: {
      type: ExpImage.Model,
      required: false,
      default: null
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('toggle-menu')
    }
  },
  computed: {
    containerClass (): object {
      return { 'exp-navbar--has-content': this.hasContent }
    },
    hasBrandImage (): boolean {
      return this.brandImage !== null && this.brandImage !== undefined
    },
    hasButton (): boolean {
      const hasButtonLink = this.buttonLink !== null && this.buttonLink !== undefined
      return this.showButton === true && hasButtonLink
    },
    hasContent (): boolean {
      return !!this.$slots.default
    },
    hasExpediaImage (): boolean {
      return this.expediaImage !== null && this.expediaImage !== undefined
    },
    hasMenuImage (): boolean {
      return this.menuImage !== null && this.menuImage !== undefined
    },
    menuClass (): object {
      return {
        'exp-navbar__mobile-menu__link--has-image': this.hasMenuImage
      }
    },
    menuStyle (): object {
      if (this.menuImage === null || this.menuImage === undefined) return {}
      return {
        backgroundImage: `url(${this.menuImage.src})`
      }
    },
    menuTitle (): string {
      if (this.menuImage === null || this.menuImage === undefined) return 'Menu'
      return this.menuImage.title
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-navbar.scss';
</style>
