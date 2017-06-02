var mocha = require('mocha');
var expect = require('chai').expect;
var setIntersect = require('../src/setIntersection.js');

describe('setIntersect()', function() {

  it('should be a function', function() {
    expect(setIntersect).to.be.a('function');
  });

  it('return message if parameters are not arrays', function() {
    expect(setIntersect(3, 1)).to.equal('pass an array for EACH parameter');
    expect(setIntersect('3 is awesome', 'zeze hungry af')).to.equal('pass an array for EACH parameter');
  });

  it('return message if parameter only passes 1 parameter (it needs 2)', function() {
    expect(setIntersect([123])).to.equal('pass an array for EACH parameter');
  });

  it('returns united array with no duplicates integers', function() {
    expect(setIntersect([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([2, 4]);
  });

});
