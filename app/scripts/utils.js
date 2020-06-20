/**
 * @global
 * @returns {ICurrentTime}
 */
// eslint-disable-next-line no-unused-vars
function currentTime() {
  var date = new Date();

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

/**
 * @global
 * @param {number | string} n
 * @returns {string}
 */
// eslint-disable-next-line no-unused-vars
function prependZero(n) {
  if (n >= 10) {
    return n.toString();
  }
  return '0' + n.toString();
}

/**
 * @param {DivWithPointers | SvgWithPointers} clock
 */
// eslint-disable-next-line no-unused-vars
function updateClock(clock) {
  // eslint-disable-next-line no-undef
  var time = currentTime();
  updateSeconds(clock.pointers.seconds, time);
  updateMinutes(clock.pointers.minutes, time);
  updateHours(clock.pointers.hours, time);
}

/**
 * @global
 * @param {HTMLElement | SVGElement} pointer
 * @param {ICurrentTime} time
 */
// eslint-disable-next-line no-unused-vars
function updateSeconds(pointer, time) {
  _updatePointer(pointer, time.seconds, 60);
}

/**
 * @global
 * @param {HTMLElement | SVGElement} pointer
 * @param {ICurrentTime} time
 */
// eslint-disable-next-line no-unused-vars
function updateMinutes(pointer, time) {
  _updatePointer(pointer, time.minutes, 60);
}

/**
 * @global
 * @param {HTMLElement | SVGElement} pointer
 * @param {ICurrentTime} time
 */
// eslint-disable-next-line no-unused-vars
function updateHours(pointer, time) {
  var deg = 30 * (time.hours % 12) + time.minutes / 2;
  _setStyle(pointer, deg);
}

/**
 * @param {HTMLElement | SVGElement} pointer
 * @param {number} value
 * @param {number} divisor
 */
function _updatePointer(pointer, value, divisor) {
  var deg = (value / divisor) * 360;
  _setStyle(pointer, deg);
}

/**
 * @param {HTMLElement | SVGElement} pointer
 * @param {number} deg
 */
function _setStyle(pointer, deg) {
  pointer.style.transform = 'rotate(' + deg + 'deg)';
  pointer.style.transition = deg === 0 ? 'none' : '';
}
