# iOS-Restrictions-Passcode

用于从备份文件找回你的，iOS设备访问限制密码


## 如何操作？

一、你需要安装Node.js

二、使用iTunes备份你的iOS资料

三、使用icopybot从备份文件中搜索`com.apple.restrictionspassword.plist`文件，并找开。

四、找到与`RestrictionsOasswirdKey`、`RestrictionsPasswordKey`key所对应的data

五、将data对应的填入到`config.js`文件中

六、然后使用`node`执行`init.js`

```
node init.js
```

OK，等待结果吧！


## 相关链接

**icopybot下载页**

http://www.icopybot.com/download.htm


**Node.js下载页**

https://nodejs.org/









