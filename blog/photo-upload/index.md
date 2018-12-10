# h5实现移动端拍照展示功能

### 一、需求
使用h5+js实现移动端拍照、多图展示以及图片存储功能。

### 二、原理
- 利用移动端对于文件上传时支持拍照上传
- 在html中利用input标签设置类型为file
- 移动端点击该input标签可进行选择（相册选择图片、拍照等功能，该功能为提供扫码的app或系统定制）
- 可根据获取上传过后input输入框的`files`属性拿到拍照记录的照片信息数组

### 三、代码实现

#### 1.html主要代码

```html
<div class="addTaskList col-xs-12 ">
    <p class="col-xs-4 nopadding">拍照上传</p>
    <div class="col-xs-8 nopadding">
        <input id="inputFile" type="file" class="hidden" multiple="multiple"/>
        <img src="../../common/img/upload_icon.png" class="pull-right" alt="" id="photo-btn"  onclick="inputFile.click()>
    </div>
</div>
<div class="imgWrap"></div>
```
- 将input输入框隐藏，使用一个优雅的拍照图标，点击图标时模拟点击input标签
- class为imgWrap作为容器可放入拍照后的图片

#### 2.js主要代码

```js
$('#inputFile').on("change", function () {
    let file = $('#inputFile')[0].files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        let imgObj = '<img alt="local upload" src="' + e.target.result + '">';
        $('.imgWrap').append(imgObj);
        //  发送请求
    }
});
```
其中file对象为最新获取的图片，包含该图片的base64编码，直接将此base64编码放入img标签的src属性就可以在页面上查看该图。将生成的img标签对象插入节点可实现拍照多图展示。

#### 3.图片存储
**关于存储获取到的图片主要有三种解决方案**。
##### （1）图片立即上传
在完成拍照或上传图片完毕就上传图片至服务器，然后拿到返回的图片链接存入数据库。主要代码如下：


```js
uploadBtn.addEventListener("change", () => {
    const file = uploadBtn.files[0];
    const formData = new FormData();
    const reader = new FileReader();
    const xhr = new XMLHttpRequest();
    formData.append("file", file);
    formData.append("productLogo", "productLogo");
    xhr.open("post", pUrl + "/product/uploadFile");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        productLogoSrc = xhr.responseText.replace(/"/g, '')
      }
    }

    reader.readAsDataURL(file);
    reader.onload = e => companyLogo.src = e.target.result
    
    xhr.send(formData);
})
```

##### （2）图片保存时上传
在表单中所有信息输入完毕，将图片对象与表单信息一起提交。

```js
const formData = new FormData();
formData.append("key", "value"); //插入表单其他字段信息
formData.append("productLogo", "productLogo"); //插入图片对象
```


##### （3）base64上传
获取到图片base64编码后，将base64编码保存至数据库，有点不优雅但是对于前端来说难度最小。当然我们也可以做一些优化，使用canvas的api `toDataURL`将图片压缩，相应的我们存储的base64编码长度可以变短。


```js
reader.onload = e => companyLogo.src = e.target.result
```
其中`e.target.result`就是图片的base64编码。



### 四、效果图

#### 1.android不同软件扫码展示的拍照上传样式
- 手机默认浏览器扫码效果如下

![image](https://momodiy.github.io/blog/photo-upload/img/upload1.jpg)
- 微信与qq扫码点击上传会直接调用文件
![image](https://momodiy.github.io/blog/photo-upload/img/upload2.jpg)

**注：不同手机不同软件上传展示效果都不同。**

#### 2.多文件上传展示效果图
![image](https://momodiy.github.io/blog/photo-upload/img/listView.png)


### 五、优化
#### 1.上传文件类型限定
对于web端我们可以直接在input标签中加入特定属性即可限定上传文件的类型，移动端我们可以通过后缀名判断限定上传文件的类型。

eg. 限定上传文件类型
```js
let fileExtensionName = file.name.split('.').slice(-1)[0];
let legalExtensionName = ['jpg', 'jpeg', 'png', 'bmp', 'gif'];
if (!~legalExtensionName.indexOf(fileExtensionName.toLocaleLowerCase())) {
    return wnform.toast("请选择基本的图片类型");
}
```


#### 2.强制拍照
可以通过Android代码修改点击拍照按钮弹出的组件，设置为直接调用摄像头。

#### 3.图片大小裁剪

利用canvas的api重新绘制图片，再获取绘制成的图片的base64编码。

## END
