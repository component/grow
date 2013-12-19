
/**
 * Line regexp.
 */

var line = /\r\n|\r|\n/;

/**
 * Grow the given `el`.
 *
 * Options:
 *
 *  - `max` maximum rows
 *  - `min` minimum rows
 *
 * @param {Element} el
 * @param {Object} options
 * @api public
 */

module.exports = function(el, options){
  options = options || {};
  var max = options.max || Infinity;
  var min = options.min || 1;
  el.addEventListener('input', function() {
    var rows = Math.min(max, lines(el.value));
    if (rows < min)
      rows = min;
    el.setAttribute('rows', rows);
  } , false);
};

  
/**
 * Line count in `str`.
 * 
 * @param {String} str
 * @return {String}
 */

function lines(str) {
  return str.split(line).length;
}