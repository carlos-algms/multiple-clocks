/**
 * @global
 * @returns {{hours: *, minutes: *, seconds: *}}
 */
function currentTime() {
  var date = new Date();

  return {
    hours: prependZero(date.getHours()),
    minutes: prependZero(date.getMinutes()),
    seconds: prependZero(date.getSeconds()),
  };
}

/**
 * @global
 * @param {number | string} n
 * @returns {string}
 */
function prependZero(n) {
  if (n >= 10) {
    return '' + n;
  }
  return '0' + n.toString();
}
