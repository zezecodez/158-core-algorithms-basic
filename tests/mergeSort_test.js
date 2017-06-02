import { expect } from 'chai'
import mergeSort from '../src/mergeSort.js'

describe('mergeSort()', function(){
  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('should return a sorted array by using the mergeSort method', function(){
    expect(mergeSort([10,2,7,5,8,3,6,1,4,9])).to.eql([1,2,3,4,5,6,7,8,9,10])
  })

  it('should not sort objects', function(){
    expect(mergeSort({bob: 'me'})).to.eql("We can only sort arrays")
  })

  it('should not sort strings', function(){
    expect(mergeSort('bob')).to.eql("We can only sort arrays")
  })

  it('should only sort arrays', function(){
    expect(mergeSort(5)).to.eql("We can only sort arrays")
  })

})
