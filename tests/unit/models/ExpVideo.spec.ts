import { expect } from 'chai'
import { ExpVideo } from '@/common/models/ExpVideo'

describe('ExpVideo.ts', () => {
  it('initialises correctly with defaults', () => {
    const model = new ExpVideo.Model({
      src: 'https://www.example.com/video.mp4',
      imageUrl: 'https://www.example.com/video.jpg',
      type: 'video/mp4',
      title: 'Example video'
    })
    expect(model.src).to.eq('https://www.example.com/video.mp4')
    expect(model.imageUrl).to.eq('https://www.example.com/video.jpg')
    expect(model.type).to.eq('video/mp4')
    expect(model.title).to.eq('Example video')
    expect(model.autoplay).to.eq(false)
    expect(model.loop).to.eq(false)
    expect(model.muted).to.eq(false)
  })

  it('initialises correctly with all properties', () => {
    const model = new ExpVideo.Model({
      src: 'https://www.example.com/video.mp4',
      imageUrl: 'https://www.example.com/video.jpg',
      type: 'video/mp4',
      title: 'Example video',
      autoplay: true,
      loop: true,
      muted: true
    })
    expect(model.src).to.eq('https://www.example.com/video.mp4')
    expect(model.imageUrl).to.eq('https://www.example.com/video.jpg')
    expect(model.type).to.eq('video/mp4')
    expect(model.title).to.eq('Example video')
    expect(model.autoplay).to.eq(true)
    expect(model.loop).to.eq(true)
    expect(model.muted).to.eq(true)
  })
})
