### 一. 效果演示
#### 域名示例
https://stevenlee.club


#### 描述
域名可使人更方便更人性化的访问互联网，之前我买的云服务器时顺带买了两个，用于我自己服务器项目更便利的被访问。在我的云服务器过期后，当时觉得域名也就没什么用了，直到有天我突发奇想，能否将我自己的项目找一个免费平台部署，再使用我自己的域名～踩坑无数，后来总算实现了


### 二. 域名准备

#### 1. 购买一个域名

#### 2. 修改域名信息，并提交审核
    > 注：因为使用的是第三方网站的服务，所以无需备案通过，只需域名审核通过即可。

#### 3. 添加DNS服务器
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/01.png)
要使用第三方的服务，那当然我们需要添加第三方所要用到的DNS服务器。如图，点击修改，即可添加所需DNS服务器配置，**DNS服务器来源详见`三.4`。**





### 三. 第三方代码托管服务netlify


#### 1. 注册登陆

打开[https://www.netlify.com/](https://www.netlify.com/)这个网站，登陆注册无需多说。

#### 2. 资源导入

将个人项目导入网站，会自动部署并生成可访问链接。

以我的[个人项目](https://github.com/momodiy/momodiy.github.io)为例，把完整项目代码直接上传后，生成的可访问链接如下：[https://stevenlee.netlify.com/](https://stevenlee.netlify.com/)

#### 3. 自定义域名
（1）选择项目
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/02.png)

（2）点击站点设置
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/03.png)

（3）点击域名管理
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/04.png)

（4）添加自定义域名
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/05.png)

#### 4. 所需DNS查询
- 点击如下按钮即可检查所需DNS的配置信息
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/06.png)

- DNS配置示例
![image](https://raw.githubusercontent.com/momodiy/momodiy.github.io/master/blog/domain-deploy/img/07.png)


添加成功之后，就可以通过你自己的域名访问项目了，是不是很nice?

> netlify这个网站还支持直接通过github导入项目以及部署node项目，感兴趣的童鞋可以尝试解锁更多技能。

## END
