<template>
  <a class="exp-button-link" :href="model.url" :target="model.target" :title="model.title">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExpLink } from '@/common/models/ExpLink'

export default Vue.extend({
  name: 'ExpButtonLink',
  props: {
    model: {
      type: ExpLink.Model,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/exp-button-link.scss';
</style>
