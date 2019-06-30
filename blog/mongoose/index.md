 **关于MongoDB数据库本地环境的搭建，我亲自实践后回过头写下这个教程，希望能够帮到你们:)。**

### 第一步：下载
下载地址 http://dl.mongodb.org/dl/win32/x86_64

我的选择（64位，windows） [mongodb-win32-x86_64-3.4.3-rc1-signed.msi](http://downloads.mongodb.org/win32/mongodb-win32-x86_64-3.4.3-rc1-signed.msi?_ga=2.261128783.376466667.1511697422-1572830419.1511523019)

### 第二步： 安装
- 安装流程
  - 双击msi
  - Run
  - Next
  - Next
  - Custom(只有选择Cunstom才可以自定义安装路径 推荐Custom)
  - Broswe选择安装路径
  - ok
  - Next
  - Install
  - finish (安装成功）
  
- 我的安装路径为 F:/mongodb
 
### 第三步 ： 启动服务 
- 进入 F:/mongodb/bin 找到 mongod.exe 与 mongo.exe 文件 
  - mongod.exe :	用于启动mongodb的服务
  - mongo.exe: 	用于进入mongodb的操作环境真正使用数据库
  
**因此在启动mongo.exe之前，必须先启动mongod.exe**

使用terminal终端工具进入 F:/mongodb/bin 执行

```
> mongod
```

![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqtq4j3kj20vo0gmt9v.jpg)

此时这个界面代表启动mongod.exe失败.原因：
> mongodb没有设置数据存储位置 需要在启动mongod.exe时手动设置

**于是我们手动在 F:/mongodb目录下创建data空文件夹作为数据存数目录，也就是下面的dbpath**

使用terminal终端工具进入F:/mongodb/bin 执行
```
> mongod --dbpath F:\mongodb\data
```

![image](http://wx4.sinaimg.cn/mw690/d707e012ly1flvqmbackij21h60dsgna.jpg)


上图代表mongod.exe启动成功，接下来**重新开启一个terminal终端**

 在F:/mongodb/bin 目录下执行

```
> mongo
```

![image](http://wx4.sinaimg.cn/mw690/d707e012ly1flvqmg9oanj20xm0eidgc.jpg)

启动成功!

### 第四步： 配置mongo.conf文件，优化mongod.exe的启动

**在F:/mongodb目录下创建mongo.conf文件并写入：**

```js
dbpath=F:\mongodb\data #数据库路径
logpath=F:\mongodb\logs\mongo.log #日志输出文件路径
logappend=true #错误日志采用追加模式
journal=true #启用日志文件，默认启用
quiet=true #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
port=27017 #端口号 默认为27017
```

**同时在F:/mongodb目录下创建logs目录作为日志目录**

创建完成后，我们只需每次在启动mongod.exe时应用这个文件就可以配置好dbpath，logpath等设置。

使用terminal终端工具进入F:/mongodb/bin 执行

```
> mongod --config F:\mongodb\mongo.conf
```

![image](http://wx4.sinaimg.cn/mw690/d707e012ly1flvqmlp8l0j20fz061745.jpg)

没有反应 但其实启动成功了，为了验证，我们重新开启一个terminal终端
 在F:/mongodb/bin 目录下执行

```
> mongo
```

![image](http://wx2.sinaimg.cn/mw690/d707e012ly1flvqo5c3xjj20vc0eh0t8.jpg)

启动成功!

**但是，以后每一次启动都需要加载配置文件 即 'mongod --config F:\mongodb\mongo.conf' 这一行命令**

### 第五步： 注册windows的服务，以windows 服务的形式启动mongodb
为进一步了简化：我们**以管理员的方式打开terminal终端工具**

在F:/mongodb/bin 目录下执行

```
> mongod --config "F:/mongodb/mongo.conf" --install --serviceName "MongoDB"
```

![image](http://wx4.sinaimg.cn/mw690/d707e012ly1flvqo9kl9nj20zf09vmxd.jpg)

若是出现这样的问题，去清空 F:/mongodb/logs目录 再次

```
> mongod --config "F:/mongodb/mongo.conf" --install --serviceName "MongoDB"
```

![image](http://wx1.sinaimg.cn/mw690/d707e012ly1flvqocvhguj20v70bt3yt.jpg)

没有消息就是好消息，我们注册Windows服务成功了，服务名为MongoDB

为了检验 我们 window+r 输入 services.msc

![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqofz9lyj20ax05k3yf.jpg)

点击ok

![image](http://wx2.sinaimg.cn/mw690/d707e012ly1flvqoisonmj20mt0eljsp.jpg)

找到了MongoDB这个服务(services)，代表注册成功!

以后要启动mongodb数据库， 只需要**以管理员的身份打开terminal终端**

```
> net start MongoDB
```

![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqrsuzskj20ff07ht8p.jpg)

MongoDB服务启动成功，但还没启动mongo.exe

再在F:/mongodb/bin 目录下执行 （不一定是管理员身份）

```
> mongo
```

![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqrwuvlkj20u50bzdg8.jpg)

启动成功！
若要停止mongodb,只需要**以管理员的身份打开terminal终端**

```
> net stop MongoDB
```
![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqs5301mj20cx04ggli.jpg)

MongoDB服务关闭成功！

#### 注意：
- mongod --config "F:/mongodb/mongo.conf" --install --serviceName "MongoDB"
- net start MongoDB 
- net stop MongoDB

**这三行命令必须是在管理员身份才生效**

此后，一旦`net start MongoDB`了，只要不使用`net stop MongoDB`关闭服务， 那么MongoDB服务就是永远启动的状态，只需要F:/mongodb/bin目录下执行mongo命令即可使用。

### 第六步： 将F:/mongodb/bin目录配置为环境变量

关于环境变量的配置我就不细说了...如图

![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqs1e91jj20aw0au3yp.jpg)

**MongoDB服务启动后，每次使用只需要 打开terminal终端工具 简单的输入mongo即可（任意路径 任意身份）**
![image](http://wx2.sinaimg.cn/mw690/d707e012ly1flvqs9vqg7j20uj0afjrp.jpg)
到此，够简化了吧。

### 第七部 ： 用mongodb可视化工具mongochef查看我们的mongodb数据库
 下载安装mongochef这里不赘述
 
- 打开mongochef 
- New Collection 
  - 自己填一个连接名 
  - server本地为localhost 
  - port默认为27017
   
![image](http://wx3.sinaimg.cn/mw690/d707e012ly1flvqt8winnj20f50dfjrg.jpg)

- Test Connect （此时mongodb服务必须处在开启状态 否则无法连接成功）

![image](http://wx1.sinaimg.cn/mw690/d707e012ly1flvqtca1xpj20ar05t745.jpg)

依次点击ok -> save -> connect，此时已经可以在左边栏看到当前连接的数据表

![image](http://wx1.sinaimg.cn/mw690/d707e012ly1flvqtkcruaj20b103qglf.jpg)


至此，所有配置完成。如果还有什么疑惑，可以给我留言 :)

> please enjoy IT.

## END

























