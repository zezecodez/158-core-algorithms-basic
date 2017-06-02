import { expect } from 'chai'
import binarySearch from '../src/binarySearch.js'

describe('binarySearch()', () => {
  it('Returns index of value passed as parameter', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)).to.deep.equal(0)
  })
  it('Returns null if the index exceeds arr.length', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 11)).to.deep.equal(null)
  })

})
