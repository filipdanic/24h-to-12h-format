# 24hto12hformat

Converts from 24-hour `hh:mm` to 12-hour `hh:mm +merdian` format.

_Fun fact: the original name of this package (`24h-to-12h-format`) could not be published to NPM due to their system considering it a spam name. :)_

## Usage

Install with `yarn add 24hto12hformat`.

In your code:

```javascript
import timeFormatter from '24hto12hformat';

timeFormatter('13:30'); // => 1:30 pm
// same as timeFormatter('13:30', false);
// but
timeFormatter('13:30', true); // => 1:30 PM

// works fine
timeFormatter('15:33:29 GMT+020'); // => 3:33 pm
```

## Contract

```javascript
/**
 *
 * @param {string} time
 * @param {boolean} uppercase
 * @return {string}
 */
```

If the the supplied `time` argument is not a `string`, or it does not start in the `hh:mm` format, then the module will throw an exception in the form of a string.

