import { expect } from 'chai'
import { ExpImage } from '@/common/models/ExpImage'
import { ExpLink } from '@/common/models/ExpLink'
import { ExpLinkableImage } from '@/common/models/ExpLinkableImage'

const image = new ExpImage.Model({
  src: 'https://www.example.com/image.jpg',
  title: 'Example image'
})

describe('ExpLinkableImage.ts', () => {
  it('initialises correctly', () => {
    const link = new ExpLink.Model({
      url: 'https://www.example.com',
      title: 'Example domain'
    })
    const model = new ExpLinkableImage.Model({ image, link })
    expect(model.image).to.eq(image)
    expect(model.link).to.eq(link)
  })

  it('assigns link to null when link is undefined', () => {
    const model = new ExpLinkableImage.Model({ image })
    expect(model.image).to.eq(image)
    expect(model.link).to.eq(null)
  })
})
