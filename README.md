## unique-now

Module to generate unique unix times.

```js
var now = require('./');

var i = 5;
while (i--) {
  console.log(now());
  
  // => 1416162073957000
  // => 1416162073958000
  // => 1416162073958001
  // => 1416162073958002
  // => 1416162073958003
}
```

## Install

```bash
$ npm install unique-now
```

![](https://dl.dropboxusercontent.com/s/r8lgjyub98v8j55/npmel_34.jpg)
