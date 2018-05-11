/**
 *
 * @param {string} time
 * @param {boolean} uppercase
 * @param {boolean} includeMilliseconds
 * @return {string}
 */
export default (time, uppercase = false, includeMilliseconds = false) => {
  if (typeof time !== 'string') {
    throw 'Error: Argument must be a string.';
  }

  let [hh, mm, ms] = time.split(':');
  hh = parseInt(hh, 10);
  mm = parseInt(mm, 10);

  if (ms && ms.length > 2) {
    ms = `${ms[0]}${ms[1]}`;
  }

  ms = parseInt(ms, 10);

  if (isNaN(ms)) {
    ms = 0;
  }

  if (!Number.isNaN(hh) && !Number.isNaN(mm)) {
    let suffix = hh >= 12 ? 'pm' : 'am';
    if (uppercase) {
      suffix = suffix.toUpperCase();
    }

    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm < 10 ? `0${mm}` : mm;
    return `${hh}:${mm}${includeMilliseconds ? `:${ms < 10 ? `0${ms}` : ms}` : ''} ${suffix}`;
  } else {
    throw 'Error: Argument must be a string in the format of hh:mm or hh:mm:ss or hh:mm:ss:ms etc.';
  }
};
