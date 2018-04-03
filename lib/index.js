'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 *
 * @param {string} time
 * @param {boolean} uppercase
 * @return {string}
 */
exports.default = function (time) {
  var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof time !== 'string') {
    throw 'Error: Argument must be a string.';
  }

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hh = _time$split2[0],
      mm = _time$split2[1];

  hh = parseInt(hh, 10);
  mm = parseInt(mm, 10);

  if (!Number.isNaN(hh) && !Number.isNaN(mm)) {
    var suffix = hh >= 12 ? 'pm' : 'am';
    if (uppercase) {
      suffix = suffix.toUpperCase();
    }

    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm < 10 ? '0' + mm : mm;
    return hh + ':' + mm + ' ' + suffix;
  } else {
    throw 'Error: Argument must be a string in the format of hh:mm or hh:mm:ss or hh:mm:ss:ms etc.';
  }
};