/**
 *
 * @param {string} time
 * @param {boolean} uppercase
 * @return {string}
 */
export default (time, uppercase = false) => {
  if (typeof time !== 'string') {
    throw 'Error: Argument must be a string.';
  }

  let [hh, mm] = time.split(':');
  hh = parseInt(hh, 10);
  mm = parseInt(mm, 10);

  if (!Number.isNaN(hh) && !Number.isNaN(mm)) {
    let suffix = hh >= 12 ? 'pm' : 'am';
    if (uppercase) {
      suffix = suffix.toUpperCase();
    }

    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm < 10 ? `0${mm}` : mm;
    return `${hh}:${mm} ${suffix}`;
  } else {
    throw 'Error: Argument must be a string in the format of hh:mm or hh:mm:ss or hh:mm:ss:ms etc.';
  }
};
