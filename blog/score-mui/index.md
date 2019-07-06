### 一、组件介绍
> 其实就是一个代码块

简单的使用mui自带的图标及jquery实现了一个点击评分的组件，代码不多，尽可能的使用了mui自身的一些样式和方法避免重复造轮子。

### 二、相关依赖

- mui.js
- mui.css
- jquery.js

### 三、关键代码
#### 1. html

```html
<div class="icons mui-inline kps">
    <i data-index="1" class="mui-icon mui-icon-star"></i>
    <i data-index="2" class="mui-icon mui-icon-star"></i>
    <i data-index="3" class="mui-icon mui-icon-star"></i>
    <i data-index="4" class="mui-icon mui-icon-star"></i>
    <i data-index="5" class="mui-icon mui-icon-star"></i>
</div>
```

### 2.js

```js
// 点击评分
$(".kps").on("click", "i", e => {
  let val = $(e.target).index() + 1; // 当前评分的值
  Array.from($('.kps i')).map((v, i) => $(v)[i < val ? 'addClass' : 'removeClass']('mui-icon-star-filled'))
})

// 默认点亮3颗星
$('.kps i').eq(3).trigger('click')
```
### 3.css
css样式只有一句，用来设置被点亮星星的颜色。


```css
.mui-icon-star-filled {
    color: rgb(253, 175, 98);
}
```
### 四.效果如下
![demo](https://momodiy.github.io/blog/score-mui/img/star.png)

## END
