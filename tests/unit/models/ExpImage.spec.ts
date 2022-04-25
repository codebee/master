import { expect } from 'chai'
import { ExpImage } from '@/common/models/ExpImage'

describe('ExpImage.ts', () => {
  it('initialises correctly', () => {
    const model = new ExpImage.Model({
      src: 'https://www.example.com/image.jpg',
      title: 'Example image'
    })
    expect(model.src).to.eq('https://www.example.com/image.jpg')
    expect(model.title).to.eq('Example image')
    expect(model.alt).to.eq('Example image')
  })
})
