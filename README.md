# use-immer-callback
cribbed from [use-immer](https://github.com/immerjs/use-immer/issues/46#issuecomment-580973010)

webpack:
```js
// next-config.js

const withImmer = require('next-transpile-modules')(['use-immer-callback']);

module.exports = withImmer();
```