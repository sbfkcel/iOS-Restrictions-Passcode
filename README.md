# iOS-Restrictions-Passcode

用于从iOS备份文件找回访问限制密码


## 如何操作？

一、安装Node.js

二、使用iTunes备份资料

三、使用icopybot从备份文件中搜索`com.apple.restrictionspassword.plist`文件，并打开

四、找到`RestrictionsOasswirdKey`、`RestrictionsPasswordKey`所对应的data

五、将data对应的填进`config.js`文件中

六、然后使用`node`执行`init.js`或`initHighPower.js`

```
#单进程
node init.js


#多进程，取决于CPU核数
node initHighPower.js
```

然后就等待结果吧……


## 相关链接

**icopybot下载页**

http://www.icopybot.com/download.htm


**Node.js下载页**

https://nodejs.org/









