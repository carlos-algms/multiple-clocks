'use strict';

describe('Current time', function () {

  it('Current time should have hours, minutes and seconds', function () {
    currentTime().should.have.all.keys('hours', 'minutes', 'seconds');
  });

});
