<img src="https://img.icons8.com/fluent/28/000000/idea.png"></img>
![Version](https://img.shields.io/npm/v/laravel-js-str.svg?color=success&logo=npm)
[![Travis](https://img.shields.io/travis/zhorton34/laravel-js-str/master.svg?logo=travis)](https://travis-ci.org/zhorton34/laravel-js-str/builds)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=git&color=success)](http://makeapullrequest.com)
[![Code Pen](https://img.shields.io/badge/codepen/laraveljs-example/master.svg?logo=codepen)](https://codepen.io/zhorton34/pen/LYpoxEY)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?color=success&logo=github)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?color=success&logo=javascript)](https://github.com/zhorton34/laravel-js-str/blob/master/package.json)
[![npm license](https://img.shields.io/npm/l/laravel-js-str.svg?color=success)](http://badge.fury.io/js/laravel-js-str)
<img src="https://img.icons8.com/fluent/28/000000/idea.png"></img> 
---

# <img src="https://img.icons8.com/fluent/42/000000/ok.png"/> Project Goals

---

- [x] **Fluent**
- [x] **Stringable**
- [x] **Simplified**

---

# <a href='https://codepen.io/zhorton34/pen/LYpoxEY'><img src="https://img.icons8.com/fluent/38/000000/external-link.png"/> Tinkerable Demo</a>

---
![Code Pen Example](https://lh4.googleusercontent.com/GNH4vvaWgiG70gLrT_R4IQCTLQiuvpsMtAV0jFB6aaSD65acQXLo6cdX498XTc9RIaA9lhXLT_2vF7WElmeX=w1919-h952-rw "Package Gif Example")


---

## <img src="https://img.icons8.com/cotton/58/000000/hot-coffee--v1.png"/> Laravel JS Str

---

> _"Laravel's Illuminate\Str & Illuminate\Stringify Including Str.of() In Javascript"_

---

## <img src="https://img.icons8.com/fluent/38/000000/download.png"/> Installation

---


### <img src="https://img.icons8.com/color/21/000000/npm.png"/> NPM

```bash
npm install --save-dev laravel-js-str
```

### <img src="https://img.icons8.com/color/21/000000/clew.png"/> Yarn

```bash
yarn add laravel-js-str --save
```

### <img src="https://img.icons8.com/fluent/21/000000/download-2.png"/> CDN

```html
<script src='https://unpkg.com/laravel-js-str@latest/build/index.min.js'></script>
```


---

## Str

---
> **Documentation For Each String Method Points To Laravel. Javascript examples are below, Laravel docs will specify what each method specifically does. Replace Str::method() with Str.() when using this package**

- [Str.after](https://laravel.com/docs/7.x/helpers#method-str-after)
- [Str.afterLast](https://laravel.com/docs/7.x/helpers#method-str-after-last)
- [Str.ascii](https://laravel.com/docs/7.x/helpers#method-str-ascii)
- [Str.before](https://laravel.com/docs/7.x/helpers#method-str-before)
- [Str.beforeLast](https://laravel.com/docs/7.x/helpers#method-str-before-last)
- [Str.between](https://laravel.com/docs/7.x/helpers#method-str-between)
- [Str.contains](https://laravel.com/docs/7.x/helpers#method-str-contains)
- [Str.containsAll](https://laravel.com/docs/7.x/helpers#method-str-contains-all)
- [Str.finish](https://laravel.com/docs/7.x/helpers#method-str-finish)
- [Str.is](https://laravel.com/docs/7.x/helpers#method-str-is)
- [Str.isAscii](https://laravel.com/docs/7.x/helpers#method-str-is-ascii)
- [Str.isUuid](https://laravel.com/docs/7.x/helpers#method-str-is-uuid)
- [Str.length](https://laravel.com/docs/7.x/helpers#method-str-length)
- [Str.limit](https://laravel.com/docs/7.x/helpers#method-str-limit)
- [Str.lower](https://laravel.com/docs/7.x/helpers#method-str-lower)
- [Str.orderedUuid](https://laravel.com/docs/7.x/helpers#method-str-ordered-uuid)
- [Str.plural](https://laravel.com/docs/7.x/helpers#method-str-plural)
- [Str.random](https://laravel.com/docs/7.x/helpers#method-str-random)
- [Str.replaceArray](https://laravel.com/docs/7.x/helpers#method-str-replace-array)
- [Str.replaceFirst](https://laravel.com/docs/7.x/helpers#method-str-replace-first)
- [Str.replaceLast](https://laravel.com/docs/7.x/helpers#method-str-replace-last)
- [Str.singular](https://laravel.com/docs/7.x/helpers#method-str-singular)
- [Str.slug](https://laravel.com/docs/7.x/helpers#method-str-slug)
- [Str.start](https://laravel.com/docs/7.x/helpers#method-str-start)
- [Str.substr](https://laravel.com/docs/7.x/helpers#method-str-substr)
- [Str.ucfirst](https://laravel.com/docs/7.x/helpers#method-str-ucfirst)
- [Str.upper](https://laravel.com/docs/7.x/helpers#method-str-upper)
- [Str.uuid](https://laravel.com/docs/7.x/helpers#method-str-uuid)
- [Str.words](https://laravel.com/docs/7.x/helpers#method-str-words)



```js
const { Str } = require('laravel-js-str');

let slice = Str.after('This is my name', 'This is');
// ' my name'
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.afterLast('App\Http\Controllers\Controller', '\\');
// 'Controller'
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.ascii('û');
// 'u'    
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.before('This is my name', 'my name');
// 'This is '
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.beforeLast('This is my name', 'is');
// 'This '
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.between('This is my name', 'This', 'name');
// ' is my '
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.camel('foo_bar');
// fooBar
```




```js
const { Str } = require('laravel-js-str');

let contains = Str.contains('This is my name', 'my');
// true
```




```js
const { Str } = require('laravel-js-str');

let contains = Str.contains('This is my name', ['my', 'foo']);
// true
```




```js
const { Str } = require('laravel-js-str');

let containsAll = Str.containsAll('This is my name', ['my', 'name']);
// true
```


```js
const { Str } = require('laravel-js-str');

let result = Str.endsWith('This is my name', 'name');
// true
```


```js
const { Str } = require('laravel-js-str');

let result = Str.endsWith('This is my name', ['name', 'foo']);
// true 

result = Str.endsWith('This is my name', ['this', 'foo']);
// false
```




```js
const { Str } = require('laravel-js-str');

let adjusted = Str.finish('this/string', '/');
// this/string/ 

adjusted = Str.finish('this/string/', '/');
// this/string/
```




```js
const { Str } = require('laravel-js-str');

let matches = Str.is('foo*', 'foobar');
// true 

matches = Str.is('baz*', 'foobar');

// false
```



**isAscii is experimental, not confident it works in all scenarios**
```js
const { Str } = require('laravel-js-str');

let isAscii = Str.isAscii('Taylor');
// true 

isAscii = Str.isAscii('ü');

// false
```




```js
const { Str } = require('laravel-js-str');

let isUuid = Str.isUuid('a0a2a2d2-0b87-4a18-83f2-2529882be2de');
// true 

isUuid = Str.isUuid('laravel');

// false
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.kebab('fooBar');
// foo-bar
```




```js
const { Str } = require('laravel-js-str');

let length = Str.length('Laravel');
// 7
```




```js
const { Str } = require('laravel-js-str');

let truncated = Str.limit('The quick brown fox jumps over the lazy dog', 0);
// The quick brown fox...
```




```js
const { Str } = require('laravel-js-str');

let truncated = Str.limit('The quick brown fox jumps over the lazy dog', 0,  '(...)');
// The quick brown fox (...)
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.lower('LARAVEL');
// laravel
```



[Plural Package Used](https://www.npmjs.com/package/pluralize)
```js
const { Str } = require('laravel-js-str');

let plural = Str.plural('car');
// cars 

plural = Str.plural('child');
// children
```



[Plural Package Used](https://www.npmjs.com/package/pluralize)
```js
const { Str } = require('laravel-js-str');

let plural = Str.plural('child');
// children 

plural = Str.plural('child');
// child
```




```js
const { Str } = require('laravel-js-str');

let random = Str.random(40);
```




```js
const { Str } = require('laravel-js-str');

let string = 'The event will take place between ? and ?';
let replaced = Str.replaceArray(['?', '8:30', '9:00'], string);
// The event will take place between 8:30 and 9:00
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog');
// a quick brown fox jumps over the lazy dog
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog');
// the quick brown fox jumps over a lazy dog
```




```js
const { Str } = require('laravel-js-str');

let singular = Str.singular('cars');
// car 

singular = Str.singular('children');
// child
```




```js
const { Str } = require('laravel-js-str');

let slug = Str.slug('Laravel 5 Framework', '-');
// laravel-5-framework
```

```js
const { Str } = require('laravel-js-str');

let converted = Str.snake('fooBar');
// foo_bar
```




```js
const { Str } = require('laravel-js-str');

let adjusted = Str.start('this/string', '/');
// /this/string 

adjusted = Str.start('/this/string', '/');
// /this/string
```




```js
const { Str } = require('laravel-js-str');

let result = Str.startsWith('This is my name', This');
// true
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.studly('foo_bar');
// FooBar
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.substr('The Laravel Framework', , );
// Laravel
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.title('a nice title uses the correct case');
// A Nice Title Uses The Correct Case
```




```js
const { Str } = require('laravel-js-str');

let string = Str.ucfirst('foo bar');
// Foo bar
```




```js
const { Str } = require('laravel-js-str');

let string = Str.upper('laravel');
// LARAVEL
```




```js
const { Str } = require('laravel-js-str');

return Str.uuid();
```




```js
const { Str } = require('laravel-js-str');

Str.words('Perfectly balanced, as all things should be.', 3, '>>>');

// Perfectly balanced, as >>>
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.of('This is my name').after('This is');
// ' my name'
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.of('App\Http\Controllers\Controller').afterLast('\\');
// 'Controller'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('Taylor').append(' Otwell');
// 'Taylor Otwell'
```



**Experimental Method, not sure this works in all cases**
```js
const { Str } = require('laravel-js-str');

let string = Str.of('ü').ascii();
// 'u'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('/foo/bar/baz').basename();
// 'baz'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('/foo/bar/baz.jpg').basename('.jpg');
// 'baz'
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.of('This is my name').before('my name');
// 'This is '
```




```js
const { Str } = require('laravel-js-str');

let slice = Str.of('This is my name').beforeLast('is');
// 'This '
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.of('foo_bar').camel();
// fooBar
```




```js
const { Str } = require('laravel-js-str');

let contains = Str.of('This is my name').contains('my');
// true
```




```js
const { Str } = require('laravel-js-str');

let contains = Str.of('This is my name').contains(['my', foo']);
// true
```




```js
const { Str } = require('laravel-js-str');

let containsAll = Str.of('This is my name').containsAll(['my', 'name']);
// true
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('/foo/bar/baz').dirname();
// '/foo/bar'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('/foo/bar/baz').dirname(2);
// '/foo'
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('This is my name').endsWith('name');
// true
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('This is my name').endsWith(['name', 'foo']);
// true 

result = Str.of('This is my name').endsWith(['this', 'foo']);
// false
```



```js
const { Str } = require('laravel-js-str');

let result = Str.of('Laravel').exactly('Laravel');
// true
```



[Collect.js](https://npmjs.com/package/collect.js)
```js
const { Str } = require('laravel-js-str');

let collection = Str.of('foo bar baz').explode(' ');
// collect(['foo', 'bar', 'baz'])
```




```js
const { Str } = require('laravel-js-str');

let adjusted = Str.of('this/string').finish('/');
// this/string/ 

adjusted = Str.of('this/string/').finish('/');

// this/string/
```




```js
const { Str } = require('laravel-js-str');

let matches = Str.of('foobar').is('foo*');
// true 

matches = Str.of('foobar').is('baz*');

// false
```



**isAscii is Experimental, not positive its correct in all cases**
```js
const { Str } = require('laravel-js-str');

let result = Str.of('Taylor').isAscii();
// true 

result = Str.of('ü').isAcii();

// false
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('  ').trim().isEmpty();
// true 

result = Str.of('Laravel').trim().isEmpty();

// false
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('  ').trim().isNotEmpty();
// false 

result = Str.of('Laravel').trim().isNotEmpty();

// true
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.of('fooBar').kebab();
// foo-bar
```




```js
const { Str } = require('laravel-js-str');

let length = Str.of('Laravel').length();
// 7
```




```js
const { Str } = require('laravel-js-str');

let truncated = Str.of('The quick brown fox jumps over the lazy dog').limit(20);
// The quick brown fox...
```




```js
const { Str } = require('laravel-js-str');

let truncated = Str.of('The quick brown fox jumps over the lazy dog').limit(20, ' (...)');
// The quick brown fox (...)
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('LARAVEL').lower();
// 'laravel'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('  Laravel  ').ltrim();
// 'Laravel  ' 

string = Str.of('/Laravel/').ltrim('/');

// 'Laravel/'
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('foo bar').match('/bar/');
// 'bar' 

result = Str.of('foo bar').match('/foo (.*)/');

// 'bar'
```



__Match All Coming Soon__
```
const { Str } = require('laravel-js-str');

let result = Str.of('bar foo bar').matchAll('/bar/');
// collect(['bar', 'bar'])
```
```
const { Str } = require('laravel-js-str');

let result = Str.of('bar fun bar fly').matchAll('/f(\w*)/');
// collect(['un', 'ly']);


```




```js
const { Str } = require('laravel-js-str');

let plural = Str.of('car').plural();
// cars 

plural = Str.of('child').plural();

// children
```




```js
const { Str } = require('laravel-js-str');

let plural = Str.of('child').plural(2);
// children 

plural = Str.of('child').plural(1);

// child
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('Framework').prepend('Laravel ');
// Laravel Framework
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.of('Laravel 6.x').replace('6.x', '7.x');
// Laravel 7.x
```




```js
const { Str } = require('laravel-js-str');

let string = 'The event will take place between ? and ?';
let replaced = Str.of(string).replaceArray('?', ['8:30', '9:00']);
// The event will take place between 8:30 and 9:00
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.of('the quick brown fox jumps over the lazy dog').replaceFirst('the', 'a');
// a quick brown fox jumps over the lazy dog
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.of('the quick brown fox jumps over the lazy dog').replaceLast('the', 'a');
// the quick brown fox jumps over a lazy dog
```




```js
const { Str } = require('laravel-js-str');

let replaced = Str.of('(+1) 501-555-1000').replace('/[^A-Za-z0-9]++/', '');

//'15015551000'
```



```js
 
```


```js
const { Str } = require('laravel-js-str');

let string = Str.of('  Laravel  ').rtrim();
// '  Laravel' 

string = Str.of('/Laravel/').rtrim('/');

// '/Laravel'
```




```js
const { Str } = require('laravel-js-str');

let singular = Str.of('cars').singular();
// car 

singular = Str.of('children').singular();

// child
```




```js
const { Str } = require('laravel-js-str');

let slug = Str.of('Laravel Framework').slug('-');
// laravel-framework
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.of('fooBar').snake();
// foo_bar
```




```js
const { Str } = require('laravel-js-str');

let segments = Str.of('one, two, three').split('/[\s, +/');
// collect(["one", "two", "three"])
```




```js
const { Str } = require('laravel-js-str');

let adjusted = Str.of('this/string').start('/');
// /this/string 

adjusted = Str.of('/this/string').start('/');

// /this/string
```




```js
const { Str } = require('laravel-js-str');

let result = Str.of('This is my name').startsWith('This');
// true
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.of('foo_bar').studly();
// FooBar
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('Laravel Framework').substr(8);
// Framework 

string = Str.of('Laravel Framework').substr(8, );

// Frame
```




```js
const { Str } = require('laravel-js-str');

let converted = Str.of('a nice title uses the correct case').title();
// A Nice Title Uses The Correct Case
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('  Laravel  ').trim();
// 'Laravel' 

string = Str.of('/Laravel/').trim('/');

// 'Laravel'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('foo bar').ucfirst();
// Foo bar
```




```js
const { Str } = require('laravel-js-str');

let adjusted = Str.of('laravel').upper();
// LARAVEL
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('  ').whenEmpty(function(string) {	 
    return string.trim().prepend('Laravel');
});

// 'Laravel'
```




```js
const { Str } = require('laravel-js-str');

let string = Str.of('Perfectly balanced, as all things should be.').words(3,  '>>>');
// Perfectly balanced, as >>>
```


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


---

## Utilization

---
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


---

## Contribute

---

PRs are welcomed to this project.
If you want to improve this package, add
functionality or improve the docs please feel free to submit a PR.


---

## Security Vulnerabilities

---

If you discover a security vulnerability within Clean Code Studio Packages Or Specifically within 
laravel-js-str, please send an e-mail to Zachary Horton via zak@cleancode.studio. All security vulnerabilities will be promptly addressed.


---

## Change Log

---
- [Release 1.0.0](#release-100)

---

### Release 1.0.0

---

- Initial Release


---

## Versioning

---

> Semantic Versioning

|Code Status|Stage|Rule|Example Version|
|---|---|---|---|
|First release|New Product|Start with 1.0.0|1.0.0|
|Backward compatible bug fixes|Patch Release|Increment the third digit|1.0.1|
|Backward compatible new features|Minor Release|Increment the middle digit and reset last digit to zero|1.1.0|
|Changes that break backward compatibility|Major Release|Increment the first digit and reset middle and last digits to zero|2.0.0|

- [Learn More About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)


---

## License

---

MIT © [Zachary Horton (Clean Code Studio)](https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg)
