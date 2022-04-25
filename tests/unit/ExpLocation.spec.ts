import { expect } from 'chai'
import { ExpLocation } from '@/common/ExpLocation'

describe('ExpLocation.ts - Country', () => {
  it('has correct values', () => {
    expect(ExpLocation.Country.ca).to.eq('CA')
    expect(ExpLocation.Country.eu).to.eq('EU')
    expect(ExpLocation.Country.us).to.eq('US')
  })
})
