'use strict';

describe('Test clock-analogic Api', function () {

  before(function () {
    this.time = {
      hours: 10,
      minutes: 30,
      seconds: '00'
    };
  });

  beforeEach(function () {
    this.pointer = document.createElement('span');
  });

  afterEach(function () {
    this.pointer = null;
  });


  it('Calculate correct seconds Degrees', function () {
    analogicClockApi.updateSeconds(this.pointer, this.time);
    var degrees = this.pointer.style.transform.replace(/[^0-9]/ig, '');
    degrees.should.equal('0');
  });

  it('Calculate correct minutes Degrees', function () {
    analogicClockApi.updateMinutes(this.pointer, this.time);
    var degrees = this.pointer.style.transform.replace(/[^0-9]/ig, '');
    degrees.should.equal('180');
  });

  it('Calculate correct hours Degrees', function () {
    analogicClockApi.updateHours(this.pointer, this.time);
    var degrees = this.pointer.style.transform.replace(/[^0-9]/ig, '');
    degrees.should.equal('315');
  });

});
