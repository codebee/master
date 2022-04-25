import ExpSocialSharer from '@/components/ExpSocialSharer/ExpSocialSharer.vue'
import ExpSocialMeta from '@/components/ExpSocialMeta/ExpSocialMeta'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpSocialSharer as SocialSharer } from '@/components/ExpSocialSharer/ExpSocialSharer.ts'
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ExpSocialSharer',
  component: ExpSocialSharer,
  decorators: [withA11y]
}

const metaComponent = '<exp-social-meta :title="metaTitle" :description="metaDescription" :image-url="metaImageUrl"></exp-social-meta>'
const defaultProps = {
  metaTitle: 'Page title',
  metaDescription: 'Page description',
  metaImageUrl: 'https://picsum.photos/300/200',
}
const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed neque diam. Nam convallis aliquet mattis. Duis non malesuada est. Donec mollis tempus libero non fringilla.'
const image = new ExpImage.Model({
  src: 'https://picsum.photos/400/250',
  title: 'Visit Jordan'
})
const facebook = new SocialSharer.Model({
  platform: SocialSharer.Platform.facebook,
  image: new ExpImage.Model({
    src: require('@/assets/images/social-icon-facebook.svg'),
    title: 'Facebook'
  })
})
const twitter = new SocialSharer.Model({
  platform: SocialSharer.Platform.twitter,
  image: new ExpImage.Model({
    src: require('@/assets/images/social-icon-twitter.svg'),
    title: 'Twitter'
  })
})
const email = new SocialSharer.Model({
  platform: SocialSharer.Platform.email,
  image: new ExpImage.Model({
    src: require('@/assets/images/social-icon-email.svg'),
    title: 'Email'
  })
})

export const DefaultProperties = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer></exp-social-sharer></div>`,
  data: () => {
    return defaultProps
  }
})

export const DefaultPropertiesWithFacebookAndTwitterAndEmail = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :platforms="platforms"></exp-social-sharer></div>`,
  data: () => {
    defaultProps.platforms = [facebook, twitter, email]
    return defaultProps
  }
})

export const WithBody = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :body="body"></exp-social-sharer></div>`,
  data: () => {
    defaultProps.body = body
    return defaultProps
  }
})

export const WithImage = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :image="image"></exp-social-sharer></div>`,
  data: () => {
    defaultProps.body = body
    return defaultProps
  }
})

export const WithImageAndBody = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :image="image" :body="body"></exp-social-sharer></div>`,
  data: () => {
    defaultProps.body = body
    defaultProps.image = image
    return defaultProps
  }
})

export const WithTitle = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :title="title"></exp-social-sharer></div>`,
  data: () => {
    defaultProps.title = 'Custom title'
    return defaultProps
  }
})

export const WithCustomFacebookIconAndWithBody = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :body="body" :platforms="platforms"></exp-social-sharer></div>`,
  data: () => {
    const customFacebook = new SocialSharer.Model({
      platform: SocialSharer.Platform.facebook,
      image: new ExpImage.Model({
        src: 'https://image.flaticon.com/icons/svg/124/124010.svg',
        title: 'Facebook'
      })
    })
    defaultProps.body = body
    defaultProps.platforms = [
      customFacebook
    ]
    return defaultProps
  }
})

export const WithCustomTwitterIconAndWithBody = () => ({
  components: { ExpSocialSharer, ExpSocialMeta },
  template: `<div>${metaComponent}<exp-social-sharer :body="body" :platforms="platforms"></exp-social-sharer></div>`,
  data: () => {
    const customTwitter = new SocialSharer.Model({
      platform: SocialSharer.Platform.twitter,
      image: new ExpImage.Model({
        src: 'https://image.flaticon.com/icons/svg/733/733579.svg',
        title: 'Twitter'
      })
    })
    defaultProps.body = body
    defaultProps.platforms = [
      customTwitter
    ]
    return defaultProps
  }
})