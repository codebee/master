import ExpButtonLink from '@/components/ExpButtonLink/ExpButtonLink'
import { ExpLink } from '@/common/models/ExpLink'
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ExpButtonLink',
  component: ExpButtonLink,
  decorators: [withA11y]
}

export const WithText = () => ({
  components: { ExpButtonLink },
  template: '<exp-button-link :model="model">Example Button</exp-button-link>',
  data: () => {
    const link = new ExpLink.Model({
      url: 'https://www.example.com',
      title: 'Example',
      target: ExpLink.Target.blank
    })
    return { model: link }
  }
})