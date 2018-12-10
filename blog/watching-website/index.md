### 一、概念
这里说的网站检查指的是**监测网站可用性可访问性**，防止网站挂了过后很久才发现。对于个人用户可以用来监测自己的站点、博客，对于企业用户则可以监测线上运行的项目。

自己用了几个月的工具，感觉比较靠谱，所以分享给大家。

### 二、用法
这里使用的监控工具是一个在线的网站  [uptimerobot](https://uptimerobot.com)。注册登录略...

#### 1. 点击进入监控
首先点击首页中心的`Go to Dashboard`按钮即可进入工作台。

<p><img style="width:400px;margin:auto" src="https://momodiy.github.io/blog/watching-website/img/bg.png" alt="index"></p>

#### 2. 添加监控站点
- 想要添加监控站点可点击`Add New Monitor`按钮，如下图。

<p><img style="width:400px" src="https://momodiy.github.io/blog/watching-website/img/addNew.png" alt="click"></p>

- 实际添加页面如下（可选择网站类型、配置url、监控站点昵称与轮询时间）
    - 监控时间可选5分钟到24小时
    - 右边可以配置接收监控结果的邮箱
    - 只有你监控的网站状态出现状态改变时才会出现收到提示，比如网站挂了，或者是网站恢复正常了


<p><img style="width:400px" src="https://momodiy.github.io/blog/watching-website/img/add.png" alt="add"></p>


#### 3. 监测查看
在检测结果中你可以看到过去24小时，你检测的站点的运行状况，宕机事件占比、详细日志以及过去几次宕机的时间及状态码变化情况。

<p><img style="width:400px" src="https://momodiy.github.io/blog/watching-website/img/res.png" alt="add"></p>

<p><img style="width:400px" src="https://momodiy.github.io/blog/watching-website/img/result.png" alt="add"></p>


#### 4. 提醒示例
以下截图是 2018/09/18 CSDN博客502时捕获的邮件信息，在这之后还有一封邮件，记录了网站宕机事件等内容。
<p><img style="width:400px" src="https://momodiy.github.io/blog/watching-website/img/blog-down.png" alt="add"></p>

> 该网站还支持短信与电话的告警，当然这些服务就需要付费了。

## END