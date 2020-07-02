# 小白也能彻底理解的prototype原型链第一篇


### 前言
原型链这部分的概念对于前端开发人员，一直是一个难点，尤其是es6语法中还引入了class关键字，我们可以通过更直观的方式使用js对象继承等功能。本以为原型链相关知识现在只有在面试中用到了，但最近发现在**研究lodash、vue等项目的源码架构时，才发现原型链相关知识点是必知必会的**。


**要想更好的了解原型链相关知识点，先给出几条基础定义。**
- 一切都是对象
- Function的构造函数是它本身
- __proto__和constructor属性是对象所独有的
- prototype属性是函数所独有的


### 1.`constructor`构造函数
```
function Person () {}
let person1 = new Person()
```

以上代码中，Person就是一个构造函数，通过new关键字创建了一个它的实例对象,用代码表示这两个对象的关系如下。
         
         person1.constructor === Person  //true

> 问题来了，如果想让Person构造函数实例出的对象都拥有某些相同的属性该怎么操作呢？

接下来原型对象prototype顺利登场

### 2.`prototype`原型对象

```
function Person () {}
let person1 = new Person()

Person.prototype.head = 1

console.log(person1.head) // 1
```

**给构造函数的原型对象上添加的属性，该构造函数的实例对象都可以直接访问**，是不是很简单？

> 再来思考一个问题，如果实例对象想要直接操作其构造函数的原型对象要怎么操作呢？

接下来出场的是`__proto__`隐式原型链

### 3.`__proto__` 隐式原型链

__proto__属性的两边是各由两个下划线构成，在ECMA标准中也被称为`[[Prototype]]`,浏览器中操作这个对象还是需要命名为`__propo__`。先来一段官方定义

> ECMAScript标准，someObject.[[Prototype]] 符号是用于指向 someObject 的原型。从 ECMAScript 6 开始，[[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 `__proto__`。
> 
>被构造函数创建的实例对象的 [[Prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示 Object 的原型对象。

看的有点迷糊？没关系，下面还是最简单的代码展示。

```
function Person () {}
let person1 = new Person()

Person.prototype.head = 1
console.log(person1.head) // 1

person1.__propo__.head = 3
console.log(person1.head) // 3
```

### 4.图解及总结

以上三条相信大家都已经看明白了，接下来让我们把这三条知识点串联起来。

![image](https://geeksteven.gitee.io/momodiy.github.io/blog/prorotype01/imgs/process.png)

- Person可以使用new关键字构造一个person1的实例，Person是person1的构造函数
- Person.prototype的构造函数是Person
- person1的隐式原型链`__proto__`指向其构造函数的原型对象


### 5.后续

以上就是[`小白也能彻底理解的prototype原型链`](https://stevenlee.blog.csdn.net/article/details/107096637)系列的第一篇文章，后续还会讲到Function、Object等对象的完整原型链以及原型链在框架/组件源码中灵活使用。

为了保证文章质量，暂无法给出明确的完成时间~请各位多多包函与理解。

[后续文章](https://stevenlee.blog.csdn.net/article/details/107096637)
[占个坑](https://stevenlee.blog.csdn.net/article/details/107096637)


## END
