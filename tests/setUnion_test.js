var mocha = require('mocha');
var expect = require('chai').expect;
var setUnion = require('../src/setUnion.js');

describe('setUnion()', function() {

  it('should be a function', function() {
    expect(setUnion).to.be.a('function');
  });

  it('return message if parameters are not arrays', function() {
    expect(setUnion(3, 1)).to.equal('pass an array for EACH parameter');
    expect(setUnion('3 is awesome', 'zeze hungry af')).to.equal('pass an array for EACH parameter');
  });

  it('return message if parameter only passes 1 parameter (it needs 2)', function() {
    expect(setUnion([123])).to.equal('pass an array for EACH parameter');
  });

  it('returns united array with no duplicates integers', function() {
    expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8]);
    expect(setUnion([1, 1, 1, 3, 3], [2, 3, 3, 8])).to.deep.equal([1, 2, 3, 8]);
  });
});
