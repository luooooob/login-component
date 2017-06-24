# 面试题：一个带验证码倒计时功能的登录组件

## 介绍

直接用原生JavaScript完成的，用到了[Font Awesome](http://fontawesome.io/)的两个图标，之外就没有其他库和框架了

## 功能

* 对手机号进行校验
* 在手机号正确的情况下才允许发送验证码
* 重发验证码倒计时功能
* 计时过程中不允许再次点击

## 预览

[在线预览](https://luobstack.xyz/login-component/)

![preview](http://imgsrc.baidu.com/forum/pic/item/019c34fdfc03924515909cbb8d94a4c27d1e2534.jpg)

![preview](http://imgsrc.baidu.com/forum/pic/item/b29dccc79f3df8dc639df425c711728b461028b1.jpg)

## 思考

仅在前端对发送验证码的频率进行限制并不完全有效，比如刷新一次页面就可以跳过倒计时。就算用localstorage对一些状态进行存储也一样，这些都可以清空的

暂时没有想到更好的方法。我觉得想要完全实现理想的重发验证码倒计时功能，还是要和后端配合