'use strict';

describe('Prepend zeros', function () {

  it('Return a string "01"', function () {
    prependZero(1).should.equal('01');
  });

  it('Return a number 11', function () {
    prependZero(11).should.equal(11);
  });

});
