# rehype-input-disable

A [rehype](https://github.com/rehypejs/rehype) plugin to disable or enable specific input elements.

## Install

```sh
npm install rehype-input-disable
```

## Options

Optional:

- `type`: filer by input type, e.g. "checkbox"
- `disabled`: set the property to either `true` or `false`. Defaults to `true`.

## Usage

```js
import { rehype } from "rehype";
import rehypeInputDisable from "rehypeInputDisable";

rehype()
  .use(rehypeInputDisable, { type: "checkbox" disabled: False })
  .process('<input type="checkbox" id="key" value="1" disabled>', function (err, file) {
    if (err) throw err;
    console.log(String(file));
  });
```

Expected output:

```html
<html>
  <head></head>
  <body>
    <input type="checkbox" id="key" value="1" />
  </body>
</html>
```
