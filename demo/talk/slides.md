#### Every time you write 
## a password validator 
# A kitten will die 😾

---

Matthijs van Henten 2025 // https://github.com/mvhenten/

---

I want to talk about a great tragedy 😱

---

### Every year, 


* Millions of lines of code are written 😅
* Thousands of hours are wasted 🤡
* Trillions of users are confused, frustrated, 😕
* Being told they are _wrong_. 😵‍💫
* All of this leading to _less security_ and _bad behaviour_. 😖

---

Even LLMS are misled:

### 🌟 AI Overview

> A strong password must include a combination of different character types and be long enough to prevent quick cracking. Common requirements include a minimum length of 8 to 12 characters, at least one uppercase letter, at least one lowercase letter, and at least one number. To increase security further, you should also add special characters like !, @, #, $, or %. 

---

### I kid you not.

---

The Good:

```
Correct horse battery staple
```

The Bad:

```
Secret101!
```

The Ugly:
```
Jv]udL*1+r6a
```

---

As pointed out by many sources, 

* String entropy is propably the most reliable way of scoring a password.
* [Wikipedia](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength)
* [XKCD #936](https://xkcd.com/936/)

---

The correct way to score password strength:

```javascript
/**
 * @param {String} str String to calculate entropy for
 * @returns {Number} entropy
 */
export const entropy = (str: string): number => {
  if (!str) return 0;
  return Math.round(str.length * (Math.log(alphabetSize(str)) / Math.log(2)));
};
```

---

It's time top writing password validator regexes. Use Entropy.

![Thank You](./kitten.jpg)

https://www.npmjs.com/package/string-entropy

**Thank You**

---

## Demo

https://mvhenten.github.io/string-entropy/