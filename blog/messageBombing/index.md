```​
set WshShell= WScript.CreateObject("WScript.Shell")
WshShell.AppActivate "群的名称"
for i=1 to 10
WScript.Sleep 500
WshShell.SendKeys "^v"
WshShell.SendKeys i
WshShell.SendKeys "%s"
Next
```

保存为vbs的，打开群然后输入一句话，复制一下，双击脚本。



你就会看到群里在狂刷，如果你嫌少可以把i值调大。


原理很简单，就是模拟键盘的粘贴、回车，，然后循环这一过程。

很简单但技术党应该觉得挺有意思
