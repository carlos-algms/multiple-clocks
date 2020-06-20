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
