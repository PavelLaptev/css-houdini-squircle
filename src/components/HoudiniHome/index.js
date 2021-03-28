import React from 'react'
import './index.css'

function registerProperty(){
  window.CSS.registerProperty({
    name: '--my-len',
    syntax: '<number>',
    inherits: false,
    initialValue: Math.random(),
  });
  window.CSS.registerProperty({
    name: '--my-saturation',
    syntax: '<number>',
    inherits: false,
    initialValue: Math.random(),
  });
  // 验证继承性能
  window.CSS.registerProperty({
    name: '--primary-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'tomato',
  });
}
registerProperty()

function setProp(value) {
  document.querySelector('.home').style.setProperty('--my-len', value);
  document.querySelector('.home').style.setProperty('--my-saturation', value);
  // console.log(document.querySelector('.home').classList)
}

export default function(){
  return <div>
    <h2 className="home">点亮我</h2>
    <div className="btn" onClick={() => setProp(Math.random())}>
      <span className="text">click me</span>
    </div>
  </div>
}