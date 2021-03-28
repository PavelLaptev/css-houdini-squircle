/**
 * 使用 document.styleSheets 获取CSSOM，
 * 但是发现并不能获取到 random， 因为浏览器对于不认识的属性会直接忽略掉，所以这里的通过 cssom 修改属性基本无效
 */
export default function ss() {
  for (const stylesheet of document.styleSheets) {
    // console.log(stylesheet, 'stylesheet')
    // 展开嵌套的规则（如@media块）到一个单独的数组
    const rules = [...stylesheet.rules].reduce((prev, next) => {
      return prev.concat(next.cssRules ? [...next.cssRules] : [next]);
    }, []);
    // 遍历每个展开的规则，并且替换random为一个随机数字
    for (const rule of rules) {
      for (const property of Object.keys(rule.style)) {
        const value = rule.style[property];
        if (value.includes("random")) {
          // console.log(value, 99999);
          rule.style[property] = value.replace("random", Math.random());
        }
      }
    }
  }
}
