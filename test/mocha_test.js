var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var main = require('../main');

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = main.addTest(1,1);
       assert.equal(result, 2);
    });
  });
})

describe('Testing should function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : result.should.be.equal(value): ', function() {
         result = main.addTest(1,1);
         result.should.be.equal(2);
      })
    })
  })
