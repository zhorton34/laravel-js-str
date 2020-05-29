---

## Setup

---

**Fluent Str Manipulation is as easy as Str.of(str).after('ex').before('.').title().plural()**

---

### Node & Webpack Setup

---

```js
const { Str } = require('laravel-js-helpers');

Str.of('hello world').studly().pluralStudly();
```

### CDN & Browser Setup

```html
<script src="https://unpkg.com/laravel-js-str@latest/build/index.min.js"></script>

<script>
const { Str } = laravelJsStr;

Str.of('hello world').camel();
</script>
```
