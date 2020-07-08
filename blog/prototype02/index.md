### 前言
回顾一下，上一篇文章主要通过构造函数与其实例对象讲解了原型对象、构造函数和隐式原型链之间的关系及用法，希望没看过的同学去先去看看[第一篇](https://stevenlee.blog.csdn.net/article/details/107096637)再来。


这一篇我们主要是来完整的学习下原型链。

#### 首先需要了解的
- __proto__和constructor属性是**一般对象**所独有的
- 函数也是一种对象，且独有prototype属性
- null和undefined不属于一般对象


### 1.构造函数与实例对象之间的原型链

```
function Person () {}
let person1 = new Person()
```
以上代码大家应该很熟悉了，尤其再配上下面这张图。

![miniPrototype](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9nZWVrc3RldmVuLmdpdGVlLmlvL21vbW9kaXkuZ2l0aHViLmlvL2Jsb2cvcHJvdG90eXBlMDIvaW1ncy9taW5pUHJvdG90eXBlLnBuZw?x-oss-process=image/format,png)

**原型链指的是对象在获取其属性时，首先会查找它自身的属性，如果找不到，会沿着原型链一级一级向上查找属性，如果找到会停止向上查找并返回属性值，如果找不到则返回`undefined`。**以上图例中，绿色的那一条线就是原型链。

###  2.函数的原型链
#### (1).描述
- 所有函数的构造函数都是Function（Function函数的构造函数也是它本身Function）
- 相对应的函数隐式原型链的上一级都是`Function.prototype`，再往上是`Object.prototype`,最上一级指向`null`

#### (2).图解
foo为自定义函数，其余`Object`、`Function`、`Symbol`等函数为js中原生构造函数。以下蓝色线条都为函数的隐式原型链。

![fn__proto__](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9nZWVrc3RldmVuLmdpdGVlLmlvL21vbW9kaXkuZ2l0aHViLmlvL2Jsb2cvcHJvdG90eXBlMDIvaW1ncy9mblByb3RvLnBuZw?x-oss-process=image/format,png)

#### (3).结论
一个函数的隐式原型链指向如下
```
graph LR
functionX-->Function.prototype
Function.prototype-->Object.prototype
Object.prototype-->null
```

### 3.对象的原型链

#### (1).基础回顾
在javascript入门时相信大家都了解过js的几种基本数据类型。加上es6之后加上的`Symbol `与`BigInt`一种八种。
- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol
- Object

#### (2)非一般对象
这个`非一般对象`是我自己起的名😁。在前言中提到

> __proto__和constructor属性是**一般对象**所独有的

所以`非一般对象`指的就是没有 `__proto__`和`constructor`属性的对象。(这里说的对象为广义上一切皆对象的对象，包括数组、字符串、空、函数、未定义等等数据类型的对象)


以上数据类型中，`null`与`undefined`就属于非一般对象。

#### (3)简单数据类型对象
去除`null`与`undefined`，包括Boolean、Number、BigInt、String与Symbol这五种简单数据类型对象。 

- 以上五种数据类型都可以通过字面量的方式创建实例
    - eg.  let sym1 = Symbol('name')
- 以上五种数据类型的实例,都对应它自身的构造函数
        
        
```
let num = Number(232) // 等价于 let num = 232

num.constructor === Number  // true
```

- 以上数据类型的实例，原型链指向其构造函数的原型对象


```
let sym1 = Symbol('foo')

sym1.__proto__ === Symbol.prototype // true
```

- 以上数据类型的实例，都不是函数，没有prototype属性

```
let x = BigInt('200')

x.prototype // undefined
```

#### (4)复杂对象类型
这里对应的数据类型只剩下最后一种`Object`,也就是js中狭义上的对象，`Object`对象相关原型链关系请看如下代码。


```
let obj = {}
// 构造函数指向Object
obj.constructor === Object

// 原型链指向构造函数的原型对象
obj.__proto__ === Object.prototype

```
#### (5)总结
观察了以上几种数据类型对象的原型链指向，聪明的小伙伴应该能发现它们整体存在一些规律。
#### 通用规则
- 空对象（`null`与`undefined`）没有构造函数、原型对象与隐式原型链等属性。
- 原型对象是函数独有的属性，函数原型对象的构造函数指向其本身
    - Number.prototype.constructor === Number
    - 上边一句的Number可以替换为任意函数


- 对象的构造函数与其数据类型有关


```
let [num,str,obj] = [23, 'nice', {}]
let foo = () => {}

num.constructor === Number // true
str.constructor === String // true
obj.constructor === Object // true
foo.constructor === Function // true
```
- 对象的隐式原型链指向其构造函数的原型对象

```
let [num,str,obj] = [23, 'nice', {}]
let foo = () => {}

num.__proto__ === Number.prototype // true
str.__proto__ === String.prototype // true
obj.__proto__ === Object.prototype // true
foo.__proto__ === Function.prototype // true
```
#### 特别注意
- Function的构造函数是它本身
- Object的隐式原型链是null

**记住以上规则，你可以推断出任意对象的完整原型链。**

## END
