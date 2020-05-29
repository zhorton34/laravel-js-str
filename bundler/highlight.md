---

## Playground Examples

---
Curious, but not 100% on whether this is what you're looking for? 

- [Laravel Illuminate/Str & Illuminate/Str::of in js (live example coming soon)](https://codepen.io/zhorton34/pen/jObRLdM)

> **The most powerful method is Str.of('example')**, allowing us to fluently chain Str methods together

**Example**
```js
let { Str } = require('laravel-js-str');

let home = 'https://planets.com';
let title = 'hello mars, a cool world for you to visit, maybe?';

let article = Str.of(title).replaceFirst(',', '')
    .after('hello')
    .before('for you')
    .trim()
    .start('/')
    .finish('/')
    .kebab();
 
let resource = home + article

// resource value: 
// 'https://planets.com/mars-a-cool-world/'
//
// article value:
// Stringable: { value: 'https://planets.com/mars-a-cool-world-to-visit', replace, before, after, etc... }
//
```
