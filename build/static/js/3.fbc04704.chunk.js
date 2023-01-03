(this["webpackJsonpcss-houdini-squircle"]=this["webpackJsonpcss-houdini-squircle"]||[]).push([[3],{28:function(e,t){!function(){function e(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&t(n.responseText)},n.open("GET",e,!0),n.send()}function t(e,t,n){Object.defineProperty?Object.defineProperty(e,t,n):e[t]=n.get()}var n,r=window.CSS;r||(window.CSS=r={}),r.supports||(r.supports=function e(t,n){if("paint"==t)return!0;if(n){var r=u.contentDocument.body;return r.style.cssText=t+":"+n,r.style.cssText.length>0}for(var i,o,a,s,l=/(^|not|(or)|(and))\s*\(\s*(.+?)\s*:(.+?)\)\s*|(.)/gi;a=l.exec(t);){if(a[6])return!1;s=e(a[4],a[5]),o=a[2]?o||s:a[3]?o&&s:(i=!a[1],s)}return o==i}),r.escape||(r.escape=function(e){return e.replace(/([^\w-])/g,"\\$1")});var i={};function o(e,t){var n=parseFloat(e);this.value=isNaN(n)?e:n,this.unit=t}r.registerProperty||(r.registerProperty=function(e){i[e.name]=e}),o.prototype.toString=function(){return this.value+("number"==this.unit?"":this.unit)},o.prototype.valueOf=function(){return this.value},"Hz Q ch cm deg dpcm dpi ddpx em ex fr grad in kHz mm ms number pc percent pt px rad rem s turn vh vmax vmin vw".split(" ").forEach((function(e){r[e]||(r[e]=function(t){return new o(t,e)})}));var a=/(background|mask|cursor|-image|-source)/,s=!!r.paintWorklet;s||(n=new ie,t(r,"paintWorklet",{enumerable:!0,configurable:!0,get:function(){return n}}));var l="css-paint-polyfill",c=document.createElement(l);s||document.documentElement.appendChild(c);var u=document.createElement("iframe");u.style.cssText="position:absolute; left:0; top:-999px; width:1px; height:1px;",c.appendChild(u);var p=document.createElement("style");p.id=l,p.$$isPaint=!0,c.appendChild(p);var d=p.sheet,f=c.style,v=!1,h=[],m=/(paint\(|-moz-element\(#paint-|-webkit-canvas\(paint-|[('"]blob:[^'"#]+#paint=|[('"]data:image\/paint-)/,g="getCSSCanvasContext"in document,y=(f.backgroundImage="-moz-element(#"+l+")")===f.backgroundImage,$="function"==typeof Promise;f.cssText="display:none !important;";var b=window.requestAnimationFrame||setTimeout,w=function(){return window.devicePixelRatio||1},P={},x={},R=0;function S(e){var t=e.bit^=1;return e.instances[t]||(e.instances[t]=new e.Painter)}function O(e,t){var n=e.cssText,r=m.test(n);if(!0===t.isNew&&r&&n!==(n=z(n))&&(e=function(e,t){for(var n=e.parentStyleSheet,r=e.parentRule,i=(r||n).cssRules,o=i.length-1,a=0;a<=o;a++)if(i[a]===e){(r||n).deleteRule(a),o=a;break}if(null!=t){if(r){var s=r.appendRule(t);return r.cssRules[s]}return n.insertRule(t,o),n.cssRules[o]}}(e,n)),r){var i,o,a,s=e.selectorText,l=q(e.style);if(i=null==t.counters[s]?t.counters[s]=1:++t.counters[s],null!=x[o="sheet"+t.sheetId+"\n"+s+"\n"+i]){if((a=x[o]).selector===s)return a.rule=e,void(a.cssText!==l&&t.toProcess.push(a));t.toRemove.push(a)}else a=x[o]={key:o,selector:s,cssText:l,properties:{},rule:e},t.toProcess.push(a.selector)}}function C(e,t){if(!("ownerSVGElement"in e)){t(e);for(var n=e.firstElementChild;n;)C(n,t),n=n.nextElementSibling}}function T(){for(var e,t=[].slice.call(document.styleSheets),n={toProcess:[],toRemove:[],counters:{},isNew:!1,sheetId:null,rules:null},r=0;r<t.length;r++){var i=t[r].ownerNode;if(!i.$$isPaint){try{n.rules=i.sheet.cssRules}catch(e){continue}if(n.sheetId=i.$$paintid,n.isNew=null==n.sheetId,n.isNew){if(n.sheetId=i.$$paintid=++R,!1===E(i))continue;e=!0}k(i.sheet,O,n)}}for(var o=n.toRemove.length;o--;)delete x[n.toRemove[o].key];n.toProcess.length>0&&F(n.toProcess.join(", ")),e&&F("[data-css-paint]",!0)}function k(t,n,r){var i=[[0,t.cssRules]],o=i[0],a=o[1];if(a)for(var s=0;i.length>0;s++)if(s>=a.length){i.pop();var l=i.length;l>0&&(a=(o=i[l-1])[1],s=o[0])}else{o[0]=s;var c=a[s];if(3!==c.type)if(1===c.type){var u=n(c,r);void 0!==u&&(r=u)}else c.cssRules&&c.cssRules.length>0&&i.push([0,c.cssRules]);else{if(c.$$isPaint)continue;var p=c.media&&c.media.mediaText;if(p&&!self.matchMedia(p).matches)continue;if(/ts\.g.{7}is\.com\/css/.test(c.href))continue;c.$$isPaint=!0,e(c.href,N)}}return r}function E(t){if(!t.$$isPaint){if(t.href)return e(t.href,N),!1;for(var n=t.childNodes.length;n--;){var r=t.childNodes[n].nodeValue,i=z(r);i!==r&&(t.childNodes[n].nodeValue=i)}}}function N(e){var t=function(e){var t=u.contentDocument.body,n=document.createElement("style");return n.media="print",n.$$paintid=++R,n.appendChild(document.createTextNode(e)),t.appendChild(n),n.sheet.remove=function(){return t.removeChild(n)},n.sheet}(z(e));try{t._=t.cssRules.length}catch(e){var n=function(){t&&G(t),t=null,clearTimeout(r)};t.ownerNode.onload=t.ownerNode.onerror=n;var r=setTimeout(n,5e3);return}G(t)}function G(e){var t="";if(k(e,(function(e){if(1===e.type){for(var n="",r=0;r<e.style.length;r++){var i=e.style.item(r),o=e.style.getPropertyValue(i);m.test(o)&&(n=i+": "+o+e.style.getPropertyPriority(i)+";")}if(n){n=e.selectorText+"{"+n+"}";for(var a=e;a=a.parentRule;)n=""+a.cssText.match(/^[\s\S]+?\{/)[0]+n+"}";t+=n}}})),e.remove(),t){var n=document.createElement("style");n.appendChild(document.createTextNode(t)),c.appendChild(n),T()}}function z(e){return e.replace(/(;|,|\b)paint\s*\(\s*(['"]?)(.+?)\2\s*\)(;|,|!|\b|$)/g,"$1url(data:image/paint-$3,=)$4")}var V,D,L,j=[];function A(e,t){t&&(e.$$paintObservedProperties=null,e.$$paintGeometry&&!e.$$paintGeometry.live&&(e.$$paintGeometry=null)),!0!==e.$$paintPending&&(e.$$paintPending=!0,-1===j.indexOf(e)&&1===j.push(e)&&b(I))}function I(){for(var e,t=0;t<j.length;t++)j[t]&&"style"===j[t].localName&&(e=!0,j[t]=null);if(e)return b(I),void T();var n=j.length&&j.some((function(e){return e&&!0===e.$$needsOverrides}));for(n&&K();j.length;){var r=j.pop();r&&B(r)}n&&Y()}function F(e,t){try{for(var n=document.querySelectorAll(e),r=0;r<n.length;r++)A(n[r],t)}catch(e){}}function M(e,t,n){for(var r=e.length,i=function(){--r||t.apply(null,n||h)},o=0;o<e.length;o++){var a=new Image;a.onload=i,a.onerror=onerror,a.src=e[o]}}function H(e){var t=e.$$paintId;return null==t&&(t=e.$$paintId=++X),t}function U(e){var t=e.$$paintRule,n=H(e);if(Number(e.getAttribute("data-css-paint"))!==n&&e.setAttribute("data-css-paint",n),null==t){var r=d.insertRule('[data-css-paint="'+n+'"] {}',d.cssRules.length);t=e.$$paintRule=d.cssRules[r]}return t}function q(e){var t=e.cssText;if(t)return t;t="";for(var n=0,r=void 0;n<e.length;n++)0!==n&&(t+=" "),t+=r=e[n],t+=":",t+=e.getPropertyValue(r),t+=";";return t}function B(e){var t=getComputedStyle(e);if(e.$$paintObservedProperties&&!e.$$needsOverrides)for(var n=0;n<e.$$paintObservedProperties.length;n++){var r=e.$$paintObservedProperties[n];if(t.getPropertyValue(r).trim()!==e.$$paintedPropertyValues[r]){Z(e,t);break}}else if(e.$$paintId||m.test(q(t)))Z(e,t);else{var i=e.getAttribute("style");m.test(i)&&(e.style.cssText=i.replace(/;\s*$/,"")+"; "+e.style.cssText,Z(e))}e.$$paintPending=!1}function W(e){e.$$paintGeometry&&!e.$$paintGeometry.live&&(e.$$paintGeometry=null),A(e)}var J={get:function(e){var t=i[e],n=t&&!1===t.inherits?D.style.getPropertyValue(e):J.getRaw(e);if(null==n&&t)n=t.initialValue;else if(t&&t.syntax){var o=t.syntax.replace(/[<>\s]/g,"");"function"==typeof r[o]&&(n=r[o](n))}return"string"==typeof n&&(n=n.trim()),n},getRaw:function(e){if(e in L)return L[e];var t=V.getPropertyValue(e);return"string"==typeof t&&(t=t.trim()),L[e]=t}},Q=window.ResizeObserver&&new window.ResizeObserver((function(e){for(var t=0;t<e.length;t++){var n=e[t],r=n.target.$$paintGeometry;r?r.live=!0:r=n.target.$$paintGeometry={width:0,height:0,live:!0};var i=n.borderBoxSize;if(i&&i.length&&(i=i[0]),i)r.width=0|i.inlineSize,r.height=0|i.blockSize;else{var o=getComputedStyle(n.target),a=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),s=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom);r.width=Math.round((n.contentRect.right-n.contentRect.left||n.contentRect.width)+a),r.height=Math.round((n.contentRect.bottom-n.contentRect.top||n.contentRect.height)+s)}A(n.target,!0)}})),X=0;function Z(e,t){!0===e.$$needsOverrides&&K();var n,r=V=null==t?getComputedStyle(e):t;D=e,L={};var i=[];e.$$paintPending=!1;var o=function(e){return e.$$paintGeometry||(e.$$paintGeometry={width:e.clientWidth,height:e.clientHeight,live:!1})}(e);!function(e){Q&&!e.$$paintGeometry.live&&(e.$$paintGeometry.live=!0,Q.observe(e))}(e),o={width:o.width,height:o.height};for(var s=w(),l=e.$$paintedProperties,u=0;u<r.length;u++){var p=r[u],d=J.getRaw(p),f=/(,|\b|^)(?:url\((['"]?))?((?:-moz-element\(#|-webkit-canvas\()paint-\d+-([^;,]+)|(?:data:image\/paint-|blob:[^'"#]+#paint=)([^"';, ]+)(?:[;,].*?)?)\2\)(;|,|\s|\b|$)/g,v="",h=0,m=[],$=!1,b=!1,x=void 0,R=void 0,O=!1,C=o;if(a.test(p)&&"-webkit-border-image"!==p){if(/border-image/.test(p)){var T=C.width,k=C.height,E=re(J.getRaw("border-image-slice").replace(/\sfill/,"").split(" ")),N=re(J.getRaw("border-width").split(" ")),G=re(J.getRaw("border-image-outset").split(" "));T+=ne("0"!=E.left&&parseFloat(N.left)||0,G.left||0,!0),T+=ne("0"!=E.right&&parseFloat(N.right)||0,G.right||0,!0),k+=ne("0"!=E.top&&parseFloat(N.top)||0,G.top||0,!0),O=!0,C={width:T,height:k+=ne("0"!=E.bottom&&parseFloat(N.bottom)||0,G.bottom||0,!0)}}for(;R=f.exec(d);){!1===b&&(x=H(e)),b=!0,v+=d.substring(0,R.index);var z=R[4]||R[5],j=R[3],A=P[z],I=A&&A.Painter.contextOptions||{},F=O||!1===I.scaling?1:s,q=void 0;A&&(A.Painter.inputProperties&&i.push.apply(i,A.Painter.inputProperties),q=S(A)),!0===I.nativePixels&&(C.width*=s,C.height*=s,F=1);var B=F*C.width,W=F*C.height,X=e.$$paintContext,Z="paint-"+x+"-"+z,_=X&&X.canvas;if(!_||_.width!=B||_.height!=W||!0===g&&X&&Z!==X.id){if(!0===g)(X=document.getCSSCanvasContext("2d",Z,B,W)).id=Z,e.$$paintContext&&X.clearRect(0,0,B,W);else{var ie=!1;_||((_=document.createElement("canvas")).id=Z,ie=y),_.width=B,_.height=W,ie&&(_.style.display="none",c.appendChild(_)),X=_.getContext("2d")}e.$$paintContext=X,X.imageSmoothingEnabled=!1,1!==F&&X.scale(F,F)}else X.clearRect(0,0,B,W);if(q&&(X.save(),X.beginPath(),q.paint(X,C,J),X.closePath(),X.restore(),!1===g&&!y&&"resetTransform"in X&&X.resetTransform()),v+=R[1],!0===g)v+="-webkit-canvas("+Z+")",(null==R[4]||_&&_.id!==Z)&&($=!0);else if(!0===y)v+="-moz-element(#"+Z+")",null==R[4]&&($=!0),_&&_.id!==Z&&(_.id=Z,$=!0);else{var oe=_.toDataURL("image/png").replace("/png","/paint-"+z);if("function"==typeof MSBlobBuilder&&(oe=ee(oe,z)),m.push(oe),v+='url("'+oe+'")',oe!==j||!n){var ae=j?j.indexOf("#"):-1;~ae&&URL.revokeObjectURL(j.substring(0,ae)),$=!0}j=oe}v+=R[6],h=R.index+R[0].length}!1!==b||null==l||null==l[p]?(v+=d.substring(h),$&&(n||(n=U(e)),null==l&&(l=e.$$paintedProperties={}),l[p]=!0,"background"===p.substring(0,10)&&1!==s&&te(n.style,"background-size","100% 100%"),/mask/.test(p)&&1!==s&&(te(n.style,"mask-size","contain"),g&&te(n.style,"-webkit-mask-size","contain")),/border-image/.test(p)&&g&&(te(n.style,"border-color","initial"),te(n.style,"image-rendering","optimizeSpeed")),0===m.length?te(n.style,p,v):M(m,te,[n.style,p,v]))):(n||(n=U(e)),n.style.removeProperty(p),Q&&Q.unobserve(e),e.$$paintGeometry&&(e.$$paintGeometry.live=!1))}}e.$$paintObservedProperties=0===i.length?null:i;for(var se=e.$$paintedPropertyValues={},le=0;le<i.length;le++){var ce=i[le];se[ce]=J.getRaw(ce)}!0===e.$$needsOverrides&&Y(),e.$$needsOverrides=null}var _=0;function K(){_++||(p.disabled=!0)}function Y(){--_||(p.disabled=!1)}function ee(e,t){for(var n=atob(e.split(",")[1]),r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return URL.createObjectURL(new Blob([r]))+"#paint="+t}function te(e,t,n){var r=v;v=!0,e.setProperty(t,n,"important"),v=r}function ne(e,t,n){var r=n?0:e,i=parseFloat(t);return t?t.match("px")?r+i:(t.match("%")&&(i/=100),e*i):r}function re(e){return{top:e[0],bottom:e[2]||e[0],left:e[3]||e[1]||e[0],right:e[1]||e[0]}}function ie(){}if(ie.prototype.addModule=function(n){var r,i,o=this;return $&&(r=new Promise((function(e){return i=e}))),e(n,(function(e){var n={registerPaint:function(e,t){!function(e,t,n){P[e]={worklet:n,Painter:t,properties:t.inputProperties?[].slice.call(t.inputProperties):[],bit:0,instances:[]};for(var r="",i=d.cssRules.length;i--;){var o=d.cssRules[i];-1!==o.style.cssText.indexOf("-"+e)&&(r+=o.selectorText)}r&&F(r,!0)}(e,t,{context:n,realm:r})}};t(n,"devicePixelRatio",{get:w}),n.self=n;var r=new function(e,t){var n=document.createElement("iframe");n.style.cssText="position:absolute; left:0; top:-999px; width:1px; height:1px;",t.appendChild(n);var r=n.contentWindow,i=r.document,o="var window,$hook";for(var a in r)a in e||"eval"===a||(o+=",",o+=a);for(var s in e)o+=",",o+=s,o+="=self.",o+=s;var l=i.createElement("script");l.appendChild(i.createTextNode('function $hook(self,console) {"use strict";\n\t\t'+o+";return function() {return eval(arguments[0])}}")),i.body.appendChild(l),this.exec=r.$hook(e,console)}(n,u.contentDocument&&u.contentDocument.body||c);e=(o.transpile||String)(e),r.exec(e),i&&i()})),r},!s)try{!function(){var e=!1;new MutationObserver((function(t){if(!0!==e&&!_){e=!0;for(var n=0;n<t.length;n++){var r=t[n],i=r.target,o=void 0,a=void 0;if(!i||!("ownerSVGElement"in i))if("childList"===r.type){if(o=r.addedNodes)for(var s=0;s<o.length;s++)1===o[s].nodeType&&C(o[s],A);if(a=r.removedNodes)for(var l=0;l<a.length;l++)Q&&a[l].$$paintGeometry&&(a[l].$$paintGeometry.live=!1,Q&&Q.unobserve(a[l]))}else if("attributes"===r.type&&1===i.nodeType){if("data-css-paint"===r.attributeName&&r.oldValue&&null!=i.$$paintId&&!i.getAttribute("data-css-paint")){H(i);continue}C(i,W)}}e=!1}})).observe(document.body,{childList:!0,attributes:!0,attributeOldValue:!0,subtree:!0});var n=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute"),r=n.value;n.value=function(e,t){return"style"===e&&m.test(t)&&(t=z(t),H(this),this.$$needsOverrides=!0,W(this)),r.call(this,e,t)},t(Element.prototype,"setAttribute",n);var i=Object.getOwnPropertyDescriptor(Element.prototype,"removeAttribute"),o=i.value;i.value=function(e){if("data-css-paint"!==e)return o.call(this,e)},t(Element.prototype,"removeAttribute",i);var s=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"style"),l=s.get;s.set=function(e){return s.get.call(this).cssText=e},s.get=function(){var e=l.call(this);return e.ownerElement!==this&&t(e,"ownerElement",{value:this}),e},t(HTMLElement.prototype,"style",s);var c={},u=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"cssText"),p=u.set;u.set=function(e){if(!_&&m.test(e)){e=e&&z(e);var t=this.ownerElement;t&&(H(t),t.$$needsOverrides=!0,W(t))}return p.call(this,e)},c.cssText=u,Object.keys((window.CSS2Properties||CSSStyleDeclaration).prototype).filter((function(e){return a.test(e)})).forEach((function(e){var t=e.replace(/([A-Z])/g,"-$1").toLowerCase();c[e]={configurable:!0,enumerable:!0,get:function(){var e=this.getPropertyPriority(t);return this.getPropertyValue(t)+(e?" !"+e:"")},set:function(n){var r=String(n).match(/^(.*?)\s*(?:!\s*(important)\s*)?$/);return this.setProperty(t,r[1],r[2]),this[e]}}}));var d=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"setProperty"),f=d.value;d.value=function(e,t,n){if(!v&&!_&&m.test(t)){t=t&&z(t);var r=this.ownerElement;r&&(H(r),r.$$needsOverrides=!0,W(r))}f.call(this,e,t,n)},c.setProperty=d,Object.defineProperties(CSSStyleDeclaration.prototype,c),window.CSS2Properties&&Object.defineProperties(window.CSS2Properties.prototype,c),addEventListener("resize",(function(){F("[data-css-paint]")}));var h={passive:!0};function g(e){for(var t=e.target;t;)1===t.nodeType&&A(t),t=t.parentNode}["animationiteration","animationend","animationstart","transitionstart","transitionend","transitionrun","transitioncancel","mouseover","mouseout","mousedown","mouseup","focus","blur"].forEach((function(e){addEventListener(e,g,h)})),T()}()}catch(e){}}()}}]);
//# sourceMappingURL=3.fbc04704.chunk.js.map