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


**原型链指的是对象在获取其属性时，首先会查找它自身的属性，如果找不到，会沿着原型链一级一级向上查找属性，如果找到会停止向上查找并返回属性值，如果找不到则返回`undefined`。**

==以上图例中，绿色的那一条线就是原型链。==

###  2.函数的原型链
- 所有函数的构造函数都是Function（Function函数的构造函数也是它本身Function）
- 相对应的函数隐式原型链的上一级都是`Function.prototype`，再往上是`Object.prototype`,最上一级指向`null`

#### 图解
foo为自定义函数，其余`Object`、`Function`、`Symbol`等函数为js中原生构造函数。以下绿色线条都为函数的隐式原型链。



#### 结论
一个函数的隐式原型链指向如下
```
graph LR
functionX-->Function.prototype
Function.prototype-->Object.prototype
Object.prototype-->null
```



### 2.Object与Function

在js原型链中，Object与Function是两个很特殊的东西。Object是所有对象的父级，Function是所有函数的父级，js中函数也是一个对象，所以

Object是所有对象的根节点对象


### 3.原型链查找
- 对象的原型链最终都指向Object原型对象(Object.prototype)
- 函数的原型链最终都指向Function原型对象(Function.prototype)

- js中根节点对象最终都指向Object原型对象(Object.prototype)
- js中函数的最顶级构造函数都为Function




