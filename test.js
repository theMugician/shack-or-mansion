const assert = require('assert');
const expect = require('expect');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4))
    })
  })
})

describe('List Object', () => {
    it('should return typeof Object', () => {
      expect('event').to.be.a('function')
    })
})

describe('Event emitter', () => {
    it('second argument should return typeof function', () => {
      expect('event').to.be.a('function')
    })
})