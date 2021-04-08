# Squircle CSS Houdini

![Cover](https://raw.githubusercontent.com/PavelLaptev/squircle-houdini-css/main/README-images/cover.png)

A tiny CSS Houdini module that allows to add a squircle shape to HTML elements.

---

### 🎻 [Demo on GitHub Pages](https://pavellaptev.github.io/squircle-houdini-css/)

### 👾 [Codepen examples](https://codepen.io/collection/XjgQqp)

### 🗞 [Medium article](https://pavellaptev.medium.com/squircles-on-the-web-houdini-to-the-rescue-5ef11f646b72)

---

## 🎛 Custom CSS Properties

![--squircle-radius](https://raw.githubusercontent.com/PavelLaptev/squircle-houdini-css/main/README-images/--squircle-radius.png)

### --squircle-radius

The property controls the roundness of the corners.

Syntax: **`<px>`**
Defaul value: **`—`**
Min/Max values: **`—`**

---

![--squircle-smooth](https://raw.githubusercontent.com/PavelLaptev/squircle-houdini-css/main/README-images/--squircle-smooth.png)

### --squircle-smooth

The property controls length of bezier guide lines. Could be difined by `--squircle-ratio`.

Syntax: **`<number>`**
Defaul value: **`1`**
Min/Max values: **`0.1 / 1`**

---

![--squircle-outline](https://raw.githubusercontent.com/PavelLaptev/squircle-houdini-css/main/README-images/--squircle-outline.png)

### --squircle-outline

The property controls squrcle outline. There are two methods how too use it with `background-mask` and `mask`+`:pseudo-element`. to find out more check [codepen examples](https://codepen.io/collection/XjgQqp).

Syntax: **`<px>`**
Defaul value: **`—`**
Min/Max values: **`—`**

---

![--squircle-color](https://raw.githubusercontent.com/PavelLaptev/squircle-houdini-css/main/README-images/--squircle-color.png)

### --squircle-color

The property accepts any color, including variables.

Syntax: **`<color>`**
Defaul value: **`#f45`**
Min/Max values: **`—`**

---

### --squircle-ratio: `<number>`

This property makes the squrcle radius visualy the same as the standart `border-radius`.

Syntax: **`<px>`**
Defaul value: **`1.8`**
Min/Max values: **`—`**

---

## 🕹 How to install

In order make squircle works you need to register the module somewere as a JS script.

#### Use via external link

```js
<script>
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      "https://www.unpkg.com/css-houdini-squircle@0.1.1/squircle.min.js"
    );
  }
</script>
```

#### Install via NPM

```
npm i css-houdini-squircle
```

#### Download

You can download the min version of the module [from UNPKG](https://www.unpkg.com/browse/css-houdini-squircle@0.1.3/squircle.min.js)

```
https://www.unpkg.com/browse/css-houdini-squircle@0.1.3/squircle.min.js
```

---

## 🚬 TO-DO

- Transition support
