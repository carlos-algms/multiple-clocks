'use strict';

describe('Current time', () => {
  it('Current time should have hours, minutes and seconds', () => {
    currentTime().should.have.all.keys('hours', 'minutes', 'seconds');
  });
});
