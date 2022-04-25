import ExpVideo from '@/components/ExpVideo/ExpVideo'
import { ExpVideo as Video } from '@/common/models/ExpVideo'
import { withA11y } from '@storybook/addon-a11y';
import videoAt16x9 from './assets/video-16x9.mp4'
import videoAt16x9Image from './assets/video-16x9.jpg'
import videoAt4x3 from './assets/video-4x3.mp4'
import videoAt4x3Image from './assets/video-4x3.jpg'
import videoAt1x1 from './assets/video-1x1.mp4'
import videoAt1x1Image from './assets/video-1x1.jpg'
import videoWithSound from './assets/video-sound.mp4'
import videoWithSoundImage from './assets/video-sound.jpg'

const video = new Video.Model({
  src: videoAt16x9,
  imageUrl: videoAt16x9Image,
  type: 'video/mp4',
  title: 'Video'
})

export default {
  title: 'ExpVideo',
  component: ExpVideo,
  decorators: [withA11y]
}

export const WithURLAtDefaultRatio = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video"></exp-video>',
  data: () => {
    return {
      video
    }
  }
})

export const WithURLAt16x9 = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video" :aspect-ratio="ratio"></exp-video>',
  data: () => {
    return {
      video,
      ratio: Video.AspectRatio.sixteenByNine
    }
  }
})

export const WithURLAt4x3 = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video" :aspect-ratio="ratio"></exp-video>',
  data: () => {
    const localVideo = new Video.Model({
      src: videoAt4x3,
      imageUrl: videoAt4x3Image,
      type: 'video/mp4',
      title: 'Video'
    })
    return {
      video: localVideo,
      ratio: Video.AspectRatio.fourByThree
    }
  }
})

export const WithURLAt1x1 = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video" :aspect-ratio="ratio"></exp-video>',
  data: () => {
    const localVideo = new Video.Model({
      src: videoAt1x1,
      imageUrl: videoAt1x1Image,
      type: 'video/mp4',
      title: 'Video'
    })
    return {
      video: localVideo,
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithURLAtIncorrectRatio = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video" :aspect-ratio="ratio"></exp-video>',
  data: () => {
    return {
      video,
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithURLWithAutoplay = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video"></exp-video>',
  data: () => {
    const video = new Video.Model({
      src: videoAt16x9,
      imageUrl: videoAt16x9Image,
      type: 'video/mp4',
      title: 'Video',
      autoplay: true
    })
    return {
      video
    }
  }
})

export const WithURLWithAutoplayWithoutControls = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video"></exp-video>',
  data: () => {
    const video = new Video.Model({
      src: videoAt16x9,
      imageUrl: videoAt16x9Image,
      type: 'video/mp4',
      title: 'Video',
      autoplay: true,
      controls: false
    })
    return {
      video
    }
  }
})

export const WithURLWithLoop = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video"></exp-video>',
  data: () => {
    const video = new Video.Model({
      src: videoAt16x9,
      imageUrl: videoAt16x9Image,
      type: 'video/mp4',
      title: 'Video',
      loop: true
    })
    return {
      video
    }
  }
})

export const WithURLWithMuted = () => ({
  components: { ExpVideo },
  template: '<exp-video :video="video"></exp-video>',
  data: () => {
    const video = new Video.Model({
      src: videoWithSound,
      imageUrl: videoWithSoundImage,
      type: 'video/mp4',
      title: 'Video',
      muted: true
    })
    return {
      video
    }
  }
})

export const WithYoutubeAtDefaultRatio = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://www.youtube.com/embed/BHACKCNDMW8?enablejsapi=1" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.sixteenByNine
    }
  }
})

export const WithYoutubeAt16x9 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://www.youtube.com/embed/BHACKCNDMW8?enablejsapi=1" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.sixteenByNine
    }
  }
})

export const WithYoutubeAt4x3 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe width="560" height="315" src="https://www.youtube.com/embed/mM5_T-F1Yn4?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.fourByThree
    }
  }
})

export const WithYoutubeAt1x1 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe width="560" height="315" src="https://www.youtube.com/embed/9Mgkz3yhyYg?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithYoutubeAtIncorrectRatio = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://www.youtube.com/embed/BHACKCNDMW8?enablejsapi=1" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithVimeoAtDefaultRatio = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://player.vimeo.com/video/95746815" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.sixteenByNine
    }
  }
})

export const WithVimeoAt16x9 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://player.vimeo.com/video/95746815" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.sixteenByNine
    }
  }
})

export const WithVimeoAt4x3 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://player.vimeo.com/video/157542597?title=0&byline=0&portrait=0" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.fourByThree
    }
  }
})

export const WithVimeoAt1x1 = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://player.vimeo.com/video/18222227" width="640" height="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithVimeoAtIncorrectRatio = () => ({
  components: { ExpVideo },
  template: `<exp-video :aspect-ratio="ratio"><iframe src="https://player.vimeo.com/video/95746815" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></exp-video>`,
  data: () => {
    return {
      ratio: Video.AspectRatio.oneByOne
    }
  }
})

export const WithNoParameters = () => ({
  components: { ExpVideo },
  template: '<exp-video></exp-video>'
})