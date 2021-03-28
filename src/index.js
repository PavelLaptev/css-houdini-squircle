import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * 带来的问题：
 *
 * 一、待解决的问题：
 * 1、对于内联样式、隐藏元素无法覆盖到，本例只列举了style标签及link
 * 2、未考虑css选择器优先级规则(比如important)，这会增加parser复杂度
 *
 * 二、无法避免的问
 * 1、复杂度，为了兼容一个属性，需要大量的额外代码支持
 * 2、性能，对于会频繁触发的操作(比如页面滚动、缩放等)，position: sticky这类polyfill会被频繁触发，删除样式 > 插入样式 > 页面重绘制 >降低页面流畅度
 * 3、不稳定，随着复杂度增加，导致错误增加
 */

/**
 * property value api 主要作用
 * 1、原生支持自定义属性，不需要额外的hack写法
 * 2、动态控制某个css属性值，实现自定义效果
 * 3、也可使用js控制自定义属性
 *
 * 参考
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide
 * http://www.danielcwilson.com/blog/2018/02/houdini-quickstart/
 */

/**
 * paint api 主要作用
 * 1、引入canva，可解决原生css无法解决的问题，减少使用不必要的元素
 * 2、相同的效果可复用
 * 3、发挥canvas威力，制作一些不规则图形
 * 4、write js in css
 *
 * 该属性主要作用于 background-image、mask-image、border-image
 *
 * 参考
 * https://www.w3cplus.com/css/css-paint-api.html
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API
 */

/**
 * layout api 主要作用
 * 1、主要作用于 display 属性
 * 2、效果可复用
 * 3、发挥canvas威力，制作一些不规则图形
 * 4、write js in css
 *
 * 参考
 * https://www.w3cplus.com/css/css-houdini.html
 * https://googlechromelabs.github.io/houdini-samples/
 */

// chrome://flags/#enable-experimental-web-platform-features

/**
 * 参考
 * https://github.com/GoogleChromeLabs/houdini-samples
 * https://googlechromelabs.github.io/houdini-samples/
 *
 */
