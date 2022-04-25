import ExpLinkableImage from '@/components/ExpLinkableImage/ExpLinkableImage'
import { ExpLinkableImage as LinkableImage } from '@/common/models/ExpLinkableImage'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpLink } from '@/common/models/ExpLink'
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ExpLinkableImage',
  component: ExpLinkableImage,
  decorators: [withA11y]
}

export const WithImageAndTitleAndLink = () => ({
  components: { ExpLinkableImage },
  template: '<exp-linkable-image :model="model"></exp-linkable-image>',
  data: () => {
    const image = new ExpImage.Model({
      src: 'https://picsum.photos/640/360',
      title: 'Random image from https://picsum.photos'
    })
    const link = new ExpLink.Model({
      url: 'https://www.example.com',
      title: 'Click here open www.example.com',
      target: ExpLink.Target.blank
    })
    const model = new LinkableImage.Model({ image, link })
    return { model }
  }
})

export const WithImageAndTitleAndNoLink = () => ({
  components: { ExpLinkableImage },
  template: '<exp-linkable-image :model="model"></exp-linkable-image>',
  data: () => {
    const image = new ExpImage.Model({
      src: 'https://picsum.photos/640/360',
      title: 'Random image from https://picsum.photos'
    })
    const model = new LinkableImage.Model({ image })
    return { model }
  }
})