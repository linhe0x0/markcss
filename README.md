# markcss <sup><em> for Markdown</em></sup>

This is a markdown theme carefully crafted & designed for modern computer screens.

The theme now has a **built-in** dark mode support. Which means the theme changes with your system, and you don't have to manually setup any preferences.

Separated themes (`mark-light.css`, `mark-dark.css`) are also provided.

And separated themes (`github-markdown.css`, `github-markdown-light.css`, `github-markdown-dark.css`) for GitHub Markdown style are also provided.

This theme is currently tested on MacOS only.

[Live Demo](https://blog.sqrtthree.com/)

## 📦️ Installation

```sh
npm install markcss

# or using yarn
yarn add markcss
```

## Usage

The `github-markdown.css` is exported by default. If you want to get the full page version, please see [dist/mark.css](https://github.com/sqrthree/markcss/blob/main/dist/mark.css).

```css
/* with PostCSS in css file */
@import 'markcss';
```

```js
// with Webpack or others in js file */
import 'markcss'
```

## All Files

```
dist
├── github-markdown-dark.css
├── github-markdown-light.css
├── github-markdown.css
├── mark-dark.css
├── mark-light.css
└── mark.css
```

## LICENSE

This project is licensed under the MIT License.

---

> [sqrtthree.com](http://sqrtthree.com/) &nbsp;&middot;&nbsp;
> GitHub [@sqrthree](https://github.com/sqrthree) &nbsp;&middot;&nbsp;
> Twitter [@sqrtthree](https://twitter.com/sqrtthree)
