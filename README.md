string-entropy
==============

Calculate the information entropy of a string


[![build status](https://github.com/mvhenten/string-entropy/actions/workflows/node.js.yml/badge.svg)](https://github.com/mvhenten/string-entropy/actions/workflows/node.js.yml)

As pointed out by [other sources](http://xkcd.com/936/), string entropy is propably the most reliable way of
scoring a password. This module implements the algorithm described [here](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength), using a variable
sized alphabet based on the actual contents of the string.

![image of the formula for information entropy calculation](https://upload.wikimedia.org/math/6/2/7/6270d629826e5df0949332423566dd78.png)

### Demo

A [simple password strength meter](https://mvhenten.github.io/string-entropy/) that updates as you type.

### Documentation

See the annotated sources [src/index.ts](src/index.ts).

### Example

```javascript
import { entropy } from "string-entropy";

console.log(entropy('correct horse battery staple'));
// outputs  132
console.log(entropy('Secret01'));
// outputs    66
```


