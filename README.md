# with-prefix

Ensures that a string starts with the given prefix, if it does not already. Also comes with a couple of extra utilities for common use cases.

## Usage

Install with `yarn add with-prefix`.

In your code:

```javascript
import withPrefix from 'with-prefix';

withPrefix('hello-world.com', 'www.'); // => www.hello-world.com
withPrefix('www.hello-world.com', 'www.'); // => www.hello-world.com

```

You can also use the `startsWith` function which checks if the prefix exists. 

```javascript
import { startsWith } from 'with-prefix';

startsWith('hello-world.com', 'www.'); // => false
startsWith('www.hello-world.com', 'www.'); // => true

```

## Utilities

The library also comes with the functions `withHTTP` and `withTell`. If you have an idea for some other common utilities with this pattern, send a Pull Request, or fork this repo and publish your own package.

### withHTTP

If the provided string stats with `http://` or `https://` then it is left as is. If not, then one of the two defaults based on the second argument.

```javascript
import { withHTTP } from 'with-prefix';

// signature: withHTPP = (target: String, useTLS: Boolean): String

// prefix based on the 2nd argument
withHTTP('hello-world.com', false); // => http://hello-world.com
withHTTP('hello-world.com', true); // => https://hello-world.com

// valid input is left alone
withHTTP('http://hello-world.com', false); // => http://hello-world.com
withHTTP('http://hello-world.com', true); // => http://hello-world.com

// valid input is left alone
withHTTP('https://hello-world.com', false); // => https://hello-world.com
withHTTP('https://hello-world.com', true); // => https://hello-world.com
```

### withTell

```javascript
import { withTell } from 'with-prefix';

// signature: withTell = (target: String): String


// prefix when no tell://
withTell('344-31-221'); // => tell://344-31-221

// valid input is left alone
withTell('tell://344-31-221'); // => tell://344-31-221
```
