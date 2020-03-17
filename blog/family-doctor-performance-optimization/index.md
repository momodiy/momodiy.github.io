## 一、优化内容
vue项目在启动时需要第一步是下载整体项目启动必须的组件以及第一个路由(一般为登陆组件)所应用的所有资源文件，在下载完所有引用的依赖后vue项目整体才能进行下一步的执行渲染，因此首屏时间优化最重要的是优化请求时间最长的请求。

> 优化前

![image](https://note.youdao.com/yws/public/resource/4798bc1805a3bf12244587c607547200/xmlnote/76EC81DBCF0148DA8FED59C8A31898E1/39834)


### 1.ant-design 全局绑定优化
ant-design只用到了`Cascader`一个组件，在登录页无需全局引用，修改为`RecordDialog.vue`组件中引用。


```js
// RecordDialog.vue
import {Cascader} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Cascader)
```

### 2.echarts登录路由去除引入优化
之前是在全局注册过后在多个组件分别引用了echarts，导致打包文件过大。现修改为引用一次并挂载到全局。
![image](https://note.youdao.com/yws/public/resource/4798bc1805a3bf12244587c607547200/xmlnote/0A355A4AA8374ADEB38F582310F9AD11/39991)


### 3.statics文件夹优化
statics文件夹为vue项目中不打包的文件，目前在static文件夹存放了大量文件，包括项目中使用到的图片、ananimate.sass等等，这会造成大量文件被复制到打包后文件造成打包后文件过于庞大。

![image](https://note.youdao.com/yws/public/resource/4798bc1805a3bf12244587c607547200/xmlnote/D9ACC1B496D14A848B7A314DA58C5E85/39895)

**以上scss文件在打包后文件中并不会使用（出现引用会报错，浏览器不支持编译scss文件）。**

- 移除address.js
- scss文件位置优化

> 注：从规范性的角度可以考虑后期将`static`文件夹中的图片移动到`src/assets`下，如果开启图片压缩等功能还可实现性能优化

### 4.localstorage
> Chrome localstorage最大限制为5mb

家医3.0中`localStorage`最大使用占用达到4.4mb，主要为地址信息、缓存的字典项以及vuex其他数据。考虑到内存优化优先级更高，暂不作修改。

### 5.监听逻辑优化
健康档案弹出框使用computed计算vuex中存储的地址信息，地址信息为列表页面请求至vuex缓存的数据，因此无需监听地址信息修改，改为使用data接收。

使用`Object.freeze()`冻结地址对象，可避免vue为其添加get、set追踪依赖。


```js
cpmputed: {
    option () {
      return this.$store.state.addressData
    }
}

// 上方代码替换为 

data () {
 return {
     option: Object.freeze(this.$store.state.addressData)
 }   
}
```


## 二、优化结果
### 1.首屏时间
首屏时间由开始的7.3s降低到了目前的2.3s（受网速影响测试结果可能略有偏差）。

![image](https://note.youdao.com/yws/public/resource/4798bc1805a3bf12244587c607547200/xmlnote/5052D310885D4E74A148C9BE273BE054/39878)

#### ==测试发现，修改前与修改后上海内网的打开速度都在1.5s以内...==

### 2.优化后依赖

![image](https://note.youdao.com/yws/public/resource/4798bc1805a3bf12244587c607547200/xmlnote/BCD2D8AB6B114EDEBB9296A947488EB4/40001)

## END