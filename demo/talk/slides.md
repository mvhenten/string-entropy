#### every time you write 
## a password validator 
# A kitten will die 😾

---

## 🧑‍💻 Matthijs van Henten - https://github.com/mvhenten/

---

## We need to talk about passwords 😱

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

As pointed out by many sources, 

* String entropy is the most reliable way of scoring a password.
* Which is measured in shannon (Sh) and is a concept from information theory ([Wikipedia](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength)).

---

### The algorithm is...

## Surprisingly simple

# ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAAtBAMAAAD4sXvkAAAAMFBMVEX///9QUFB0dHTMzMwMDAyKioq2trZAQEAWFhbm5uaenp4wMDAEBAQiIiJiYmIAAABy9vpCAAAAAXRSTlMAQObYZgAABQxJREFUWAnFV01sG0UU/rJrj7O2sza5IUVhC4hQCTUOKghEJQcjBOGCVZC4ILpApSIIjVuEUkAtPiF6gA70xKHEB4SQEMQHoPwEsHqgqqoqqfg9ILIRh1KhJKZpoW1SzJv1T3bWYzvhsH6Sve/nm3lvZ97M2wd0i9jXWdn14mXg2FpRVgYq7bBkd2zeBr6QdcFKIUv2Z6ZzgCPrgpX8EfXEyjCsYGOQvfkjMqMXEE7JmGAlimjkxuuBoXM7Xxaen8WDMIMNwectZLHD2M7Do6z0tDBtxXKq2xHRKsVyfTlccmN1MJV82+W69ReyJlLQSpG5RkR9pfe7FYzrN2TtooiusFPhUSHrWUQvOYLbJJmr1iZHtIK7a2SW2ZZtLkLjwBmnFbiNXi+3MW7KFLLilEdFrXbgRVLf4GxqhipYy/+PQcohISs6ht08/MI7rjlC/2lbiWyvjCXb2zdsZa/eiz1LLwGzlWu0TLFZKmmx6ujFtS+Nmcs5eaqBsizDnM/DmD+NeMFnAJnOiDCf+7HJAnU9X1w7uw49ZhsjpXVRcIyug5hPh568MHnp+b8JxpEG6I1kmrCErJ+QtUJS13N2wYMcIv4+j0yseQWIF2UdesVbS/T7PwQF/lDU52XuIjMS3hXU9Vx4bNBdHNF8Q3KZvlFKKUvWIVHwKZD8FqAr9Sw0PxY/VLGKiNT1XHhskD64NNgQqkwiBwynfMrp6mt7tM60hUfw1urCvEdZZWn1BCkiUtdz4bEdTWSBGT+ANsfYtwBo2z6yXRsrhPItvqdEIgrKQO/fwqEdenGo4Cpa1XPhsR0NH5+cvOYCDrwuaE7wdBg+4D05fINakmjcXPFEFHGhb7jDtFpaZPAM18fwKMZZyjV467lnbgzzmrnF43M6Jv/6bVdhfIdoWRslBy6ZMP5q8YVXP6gZsW/H8TMS2fp06nretCN1eO15kvaGTrZErIxYHlo57mCSLX1GNjpmv0ZtCVQXxEE1SMiwFeA2HJQiUtXz0wTmiYqaaH0oCyLl+uy1p5kHBRMZpe+FzLsY58AdwPQTPlRNFAdVfNhkwhTRMB/ntKx7/7RJo67nOl1HLZabxtD6UBaE5lx2fa/7kkgXEE8Ow1iZcK+CrXRp/eai3D9vHomDep607hot46l+B4bDTpHGU8/X54ZGgZv0kq1IZMGU47MmClbCxuO4GeESwxS5JERPU7ZVR1Fa6EViMzgBfIWbiKVdv0oP2mpFPRce7yFLKxJZsMv2WRN32jFLfw07sJ3M+8iaI7f+bKsNorTYnSU+g/c4G8Njd3PANmghEKFf2qY/icgju1/SSELkyEn+4axnP1yr2Q9j/3Uc4cFbLWgUzcwquSlKI+vCgYuTn6yRsOdikh06xxGvVL6nYJJyPa+jyXLkgVceLpHs77OfPEhjOtOUjY9B0WyYjJ9wdIB6ng0MkPts5uCXzoM4XUfs/O12Z2QDIVY0lIo6RkPTkqFexEO0xROSwmNrsGbZeAjpSqWh2ACjH6brHnuP3tIZK0cUTyJR7DQoun/I7oRpso8sLTh6pVJuMjQp5Ih6c0jMNWGCVVBEUp+NtBNsAE3e/H02BngTJlhFyKJV8vTZrMWFF1xU/j67txCcb7UnX5+NT9WwALW+PtvMwg7Qu8qVr8/eCSRVsAB1cp/N3qSLLEDvCle+PpsqdCWrgHVBpeizuxCF16X4TPD12V5zF3hFn92FKLwu5T77PxrjcP0MiiQkAAAAAElFTkSuQmCC)

---

The Good:

```
correct horse battery staple
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

It's time top writing password validator regexes. 

**Use Entropy.**

![Thank You](./kitten.jpg)

https://www.npmjs.com/package/string-entropy

**Thank You**

---

## Demo

https://mvhenten.github.io/string-entropy/