## 一.问题描述
使用vue-cli创建的的项目，开发过程中无任何问题，在开发完成后准备打包上线，此时打包也无任何问题。然而打包后使用womcat发布时却出现了白屏问题。

## 二.原因探索

### 1.打开控制台

查看network，显示的都是各类资源404的报错，那很显然是资源路径错误。注意，下图中的资源路径没有拼接项目名。（使用本地Tomcat测试）
![image](https://github.com/momodiy/momodiy.github.io/blob/master/blog/vue-cli-building-resource-404/img/blog1.png?raw=true)

### 2.资源路径尝试
为了确认第一步的猜想，我们可以手动加上项目名来访问资源文件，然后很顺利的发现资源找到了。
![image](https://github.com/momodiy/momodiy.github.io/blob/master/blog/vue-cli-building-resource-404/img/blog2.png?raw=true)

## 三.解决方案
### 1. 快速方案

使用过tomcat的小伙伴应该都记得tomcat中内置的ROOT项目，我们可以直接使用localhost/ip +端口号打开，无需输入项目名。**因此，直接将打包后的文件改名为ROOT即可解决路径不对的问题。**

### 2. 完美方案


根目录中创建`vu.config.js`文件，示例代码如下

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/newScreen/' // 打包后发布文件名
    : '/' // 开发环境相对路径
}
```

对应以上代码，打包后的包名必须为newScreen。

### 3.其他
相对第一种肯定较为复杂，但是我们已经知道了问题出现的原因，那之后的解决方案也很简单，说白了就是将项目的默认访问根目录变为当前项目名下。

- 后期遇到较为优雅的解决方案还会更新

> tip：vue-cli:为4.1.1
> 
> 如遇到vue-cli版本不同导致解决方案不生效的问题欢迎给我留言

## END