string-entropy
==============

Calculate the information entropy of a string

[![Build Status](https://drone.io/github.com/mvhenten/string-entropy/status.png)](https://drone.io/github.com/mvhenten/string-entropy/latest)

As pointed out by [other sources](http://xkcd.com/936/), string entropy is propably the most reliable way of
scoring a password. This module implements the algorithm described [here](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength), using a variable
sized alphabet based on the actual contents of the string.

![image of the formula for information entropy calculation](https://upload.wikimedia.org/math/6/2/7/6270d629826e5df0949332423566dd78.png)

### Documentation

See the [annotated sources](http://mvhenten.github.io/string-entropy/) or have a look at [index.js](index.js).

### Browser support

A number of builds are available in the `dist` folder. Checkout the [demo](http://mvhenten.github.io/string-entropy/demo.html) for an example of this module
implemented as a bootstrap plugin.

### Example

```javascript
var entropy = require('string-entropy');

console.log(entropy('correct horse battery staple'));
// outputs  132
console.log(entropy('Secret01'));
// outputs    66
```


