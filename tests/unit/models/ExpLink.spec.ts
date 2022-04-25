import { expect } from 'chai'
import { ExpLink } from '@/common/models/ExpLink'

describe('ExpLink.ts', () => {
  it('initialises correctly', () => {
    const model = new ExpLink.Model({
      url: 'https://www.example.com',
      title: 'Example domain',
      target: ExpLink.Target.blank
    })
    expect(model.url).to.eq('https://www.example.com')
    expect(model.title).to.eq('Example domain')
    expect(model.target).to.eq(ExpLink.Target.blank)
  })

  it('assigns target to self when target is undefined', () => {
    const model = new ExpLink.Model({
      url: 'https://www.example.com',
      title: 'Example domain'
    })
    expect(model.target).to.eq(ExpLink.Target.self)
  })
})

describe('ExpLink.ts - Target', () => {
  it('has correct values', () => {
    expect(ExpLink.Target.blank).to.eq('_blank')
    expect(ExpLink.Target.self).to.eq('_self')
    expect(ExpLink.Target.parent).to.eq('_parent')
    expect(ExpLink.Target.top).to.eq('_top')
  })
})
