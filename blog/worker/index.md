### 一、简介

一般情况下我们使用JS都是单线程的模式，也就是前边的代码执行完，才能轮到后边的代码执行。后来因为电脑计算能力的增强，单线程模式对于多核CPU的计算机计算能力便出现了一些浪费。

web Worker是H5新增的功能，可以手动创建一个或多个额外线程来优化我们的页面。一般我们的主线程来处理UI展示、交互等方面的任务，Worker 线程可以用来完成一些耗时的操作，可以明显的提升用户体验。


### 二、用法
#### 1.主线程


- 创建额外线程（接收的参数只能是一个js文件的链接）


        const worker = new Worker('./work.js');


- 主进程向子进程通过postMessage发消息


        worker.postMessage('Hello World')


- 主进程接收子进程的消息


```
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
  doSomething();
}
```

- 主进程中结束子进程


        worker.terminate()

#### 2.子进程
- 子进程接主进程的消息


```
onmessage = e =>{
  // do something
}
```

- 主进程给子进程发消息


        postMessage('to main process')


- 子进程中结束自身进程


        close()

### 三、使用场景

- 复杂的计算任务
- 大文件上传
- 主流程加载速度优化
- 发挥你的脑洞...


### 四、在线案例

- 来自mdn的[在线案例](http://mdn.github.io/simple-web-worker/)，github项目[地址](https://github.com/mdn/simple-web-worker)
- 我仿照写的[在线案例](https://momodiy.github.io/blog/worker/Worker.html)。
    - 只实现了核心功能，监听累加计算
    - 不包含任何样式
    - 代码不到40行，感兴趣的小伙伴可以看一下

END
