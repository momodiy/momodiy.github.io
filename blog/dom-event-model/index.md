<img src="https://visitor-badge.glitch.me/badge?page_id=StevenLee20201213DOMEvent" alt="visitor"/> 

## 一. dom0事件模型（原始事件模型）

> 当时还没有形成正式的W3C标准，但该事件模型仍在早起广泛应用。

- 一个dom节点只能绑定一个事件
- 再次绑定会覆盖之前的事件

## 二. dom2事件模型
> 因为DOM于1998年10月1日成为W3C的推荐标准，但是该标准并没有定义事件相关的内容，所以新的标准直接从DOM2开始。<br>
> DOM2规范是从2000 年 11 月开始（于2003 年 1 修订确认），关于事件模型新增了`addEventListener`方法...详情如下

- 新增冒泡和捕获的概念
- 一个元素节点支持绑定多个事件

![capture&bubble](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/dom-event-model/capture&bubble.png)


### 1. 绑定事件:**addEventListener(参数如下)**
- 事件名称
- 事件回调
- 是否在捕获阶段执行（Boolean，选填，默认为true）
    - 为true时在捕获阶段执行，从document向下查找一直找到触发的元素
    - 为false时在冒泡阶段执行，从触发的元素一层层向上冒泡


### 2. 移除事件**removeEventListener(参数如下)**
- 事件名称
- 绑定的函数
- 是否在捕获阶段执行（Boolean，选填，默认为true）

一般来说，绑定事件再移除有三种玩法，详见如下代码


```
// case1: 引用函数名添加一个事件绑定再移除
const tip = () => console.log('click test')
let btn = document.getElementById("confirm")
btn.addEventListener("click", tip, true)
btn.removeEventListener(click, tip, false) // 注意，第三个参数（是否在捕获阶段执行）不一致会导致解绑失败

// case2：添加绑定的普通函数中解绑
let btn = document.getElementById("confirm")
btn.addEventListener("click", function (e) {
  console.log('绑定成功')
  btn.removeEventListener(e.type, arguments.callee, true) // arguments.callee指向当前匿名函数
}, true)

// case3：添加绑定的函数为匿名箭头函数，无法解绑
let btn = document.getElementById("confirm")
btn.addEventListener("click", e => {
  console.log('绑定成功', e)
  // 此时无法获取到当前函数，所以无法解绑
}, true)
```

### 三. IE 事件模型
> 只在IE6-IE10浏览器中有效，其他浏览器均未支持。<br>
> MDN 上对于`attachEvent`方法介绍只有一句:<br>You are probably looking for EventTarget.addEventListener().<br>
能感受到对这类老方法深深的嫌弃



IE事件模型，只支持冒泡。使用起来很简单，一般用于兼容低版本IE浏览器。


```
// 绑定事件
element.attachEvent(eventType, handler)

// 移除事件
element.detachEvent(eventType, handler)
```

## END
