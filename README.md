# Expedia master-component-library

This is a library of components created specifically for use with Expedia mini-sites.

## Master Component Library

The master component library provides a set of unbranded generic components for reuse across multiple sites, the idea being to speed up development by avoiding the need to repeatedly recreate the same common components in each site. This is a dependency of the master concierge, and therefore also of the Mississippi site.

## Master Concierge

The master concierge is an unbranded template built on Nuxt which is intended to be used as a starting point for branded implementations. The Mississippi site is one of the first such implementations.

## Project setup
```
npm install
```

### Compiles and minifies library for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Launch Storybook visual testing
```
npm run storybook
```

## Usage

For usage within your app, clone it locally and add it to your `package.json` file.
```
"master-component-library": "./../master-component-library"
```

You can then use exported components within your app.
```
import { ExampleButton } from 'master-component-library'
```

## Code quality

`ESLint` has been enabled and using the `Standard` configuration. [TypeScript](https://www.typescriptlang.org) has also been included and it's highly recommended that it is used throughout this library.

## Components

Components are to be stored under the `/src/components/{ComponentName}` directory. This will ensure that sub-components are kept in an easy to understand location. For shared components, these can be placed under the `/src/components/Common` directory.

### Visual testing of components

To make a component available within [Storyboook](http://storybook.js.org), you'll need to make a story file for each component. These are to be placed within a `/stories/{ComponentName}.stories.js` file.

Below is a basic example component which emits `click` when clicked.

```
<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
```

Here is an example story for the `ExampleButton` component above.

```
import { action } from '@storybook/addon-actions';
import ExampleButton from './../src/components/ExampleButton.vue';

export default {
  title: 'Example Button',
  component: ExampleButton,
};

export const Text = () => ({
  components: { ExampleButton },
  template: '<example-button @click="action">Hello Button</example-button>',
  methods: { action: action('clicked') },
});

export const Emoji = () => ({
  components: { ExampleButton },
  template: '<example-button @click="action">😀 😎 👍 💯</example-button>',
  methods: { action: action('clicked') },
});
```

### Adding components to the library

To make your component available from within the library, simply `export` them within the `/src/main.ts` file. These can also be namespaced like so.

```
import ExampleButtonView from './components/ExampleButton.vue'
const ExampleButton = {
  View: ExampleButtonView,
  // Model: xxx
  // Other types such as enums associated to this namespace
}
export { ExampleButton }
```

## Styling

To ensure that this component library can be easily re-used, we're going to follow the [BEM](http://getbem.com) styling approach. Please do NOT add `scoped` to the component's style tag.

Extending on the `ExampleButton` above, here is some basic **BEM** implementation.

```
<template>
  <div class="example-button">
    <button class="example-button__button" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.example-button__button {
  border: 1px solid #eee;
  background: #FFFFFF;
}
</style>
```

## Testing

Testing is done with [Mocha](https://mochajs.org). An example component and test is written below.

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  }
})
</script>
```

```
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
```