var mocha = require('mocha');
var expect = require('chai').expect;
var setSymDiff = require('../src/setSymmetricDiff.js');

describe('setSymDiff()', function() {

  it('should be a function', function() {
    expect(setSymDiff).to.be.a('function');
  });

  it('return message if parameters are not arrays', function() {
    expect(setSymDiff(3, 1)).to.equal('pass an array for EACH parameter');
    expect(setSymDiff('3 is awesome', 'zeze hungry af')).to.equal('pass an array for EACH parameter');
  });

  it('return message if parameter only passes 1 parameter (it needs 2)', function() {
    expect(setSymDiff([123])).to.equal('pass an array for EACH parameter');
  });

  it('returns united array with no duplicates integers', function() {
    expect(setSymDiff([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8]);
    expect(setSymDiff([1, 2, 3, 4], [2, 4, 6, 8, 9])).to.deep.equal([1, 3, 6, 8, 9]);
  });

});
