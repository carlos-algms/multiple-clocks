'use strict';

describe('Test clock-analogic Api', () => {
  const time = {
    hours: 10,
    minutes: 30,
    seconds: 0,
  };

  /** @type {HTMLElement} */
  let pointer;

  beforeEach(() => {
    pointer = document.createElement('span');
  });

  afterEach(() => {
    pointer = null;
  });

  it('Calculate correct seconds Degrees', () => {
    updateSeconds(pointer, time);
    const degrees = pointer.style.transform.replace(/[^0-9]/gi, '');
    degrees.should.equal('0');
  });

  it('Calculate correct minutes Degrees', () => {
    updateMinutes(pointer, time);
    const degrees = pointer.style.transform.replace(/[^0-9]/gi, '');
    degrees.should.equal('180');
  });

  it('Calculate correct hours Degrees', () => {
    updateHours(pointer, time);
    const degrees = pointer.style.transform.replace(/[^0-9]/gi, '');
    degrees.should.equal('315');
  });
});
