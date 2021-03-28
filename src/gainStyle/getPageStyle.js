
/**
 * 1、获取所有style标签的文本
 * 2、对于外链样式，使用fetch请求到
 */

const getPageStyles = () => {

  var styleElements =
      [...document.querySelectorAll('style, link[rel="stylesheet"]')];

  return Promise.all(styleElements.map((el) => {
    if (el.href) {
      return fetch(el.href).then((response) => response.text());
    } else {
      return el.innerHTML;
    }
  })).then((stylesArray) => {
    return stylesArray.join('\n')
  });
}

export default getPageStyles