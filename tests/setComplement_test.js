var mocha = require('mocha');
var expect = require('chai').expect;
var setComplement = require('../src/setComplement.js');

describe('setComplement()', function() {

  it('should be a function', function() {
    expect(setComplement).to.be.a('function');
  });

  it('return message if parameters are not arrays', function() {
    expect(setComplement(3, 1)).to.equal('pass an array for EACH parameter');
    expect(setComplement('3 is awesome', 'zeze hungry af')).to.equal('pass an array for EACH parameter');
  });

  it('return message if parameter only passes 1 parameter (it needs 2)', function() {
    expect(setComplement([123])).to.equal('pass an array for EACH parameter');
  });

  it('returns united array with no duplicates integers', function() {
    expect(setComplement([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([6, 8]);
    expect(setComplement([1, 2, 3, 4], [2, 4, 6, 8, 9])).to.deep.equal([6, 8, 9]);
  });

});
