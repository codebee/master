import { expect } from 'chai'
import { ExpAlignment } from '@/common/ExpAlignment'

describe('ExpAlignment.ts - Horizontal', () => {
  it('has correct values', () => {
    expect(ExpAlignment.Horizontal.left).to.eq('LEFT')
    expect(ExpAlignment.Horizontal.center).to.eq('CENTER')
    expect(ExpAlignment.Horizontal.right).to.eq('RIGHT')
  })
})
