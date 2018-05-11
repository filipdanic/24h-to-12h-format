/**
 *
 * @param {string} time
 * @param {boolean} uppercase
 * @param {boolean} includeSeconds
 * @return {string}
 */
export default (time, uppercase = false, includeSeconds = false) => {
  if (typeof time !== 'string') {
    throw 'Error: Argument must be a string.';
  }

  let [hh, mm, ss] = time.split(':');
  hh = parseInt(hh, 10);
  mm = parseInt(mm, 10);

  if (ss && ss.length > 2) {
    ss = `${ss[0]}${ss[1]}`;
  }

  ss = parseInt(ss, 10);

  if (isNaN(ss)) {
    ss = 0;
  }

  if (!Number.isNaN(hh) && !Number.isNaN(mm)) {
    let suffix = hh >= 12 ? 'pm' : 'am';
    if (uppercase) {
      suffix = suffix.toUpperCase();
    }

    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;
    return `${hh}:${mm}${includeSeconds ? `:${ss}` : ''} ${suffix}`;
  } else {
    throw 'Error: Argument must be a string in the format of hh:mm or hh:mm:ss or hh:mm:ss:ms etc.';
  }
};
