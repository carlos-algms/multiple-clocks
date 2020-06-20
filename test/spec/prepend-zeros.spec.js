'use strict';

describe('Prepend zeros', () => {
  it('Return a string "01"', () => {
    prependZero(1).should.equal('01');
  });

  it('Return a number 11', () => {
    prependZero(11).should.equal(11);
  });
});
