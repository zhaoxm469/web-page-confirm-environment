# 说明

短小而强悍的工具插件 , 用于帮助我们快速确认当前网页所运行环境.  

## 安装

方式1: 通过 CDN 安装  

最简单的方法是直接在 html 文件中引入 CDN 链接

```html
<script src="https://cdn.jsdelivr.net/npm/web-page-confirm-environment/dist/index.umd.min.js"></script>
```

方式2: 通过 npm 安装

```bash
npm install -S web-page-confirm-environment
```

## 使用  

script 标签 CDN方式引入

```js
const environment = new WebPageConfirmEnvironment({
    // 跟自家客户端 协商好，往 页面设置的UA标识。
    ios: 'very-good-ios',
    android: 'very-good-android'
});

// 打印UA
console.log(environment.printUa())

// 是否在微信
console.log(environment.isWechat)
```

NPM安装, import 方式引入

```js
import WebPageConfirmEnvironment from 'web-page-confirm-environment'
const environment = new WebPageConfirmEnvironment({
    iosUa: 'very-good-ios',
    androidUa: 'very-good-android'
});
```

## props  

参数		|		说明		|
----------|-------------------|
isPC 	  |是否正在PC内   		|
isIos 	  |是否是ios	 	   |
isAndroid |是否是安卓	  		|
isWechat  |是否是在微信生浏览器中 |
isWxWork  |是否在企业微信中		 |
isWxmp 	  |是否在微信小程序		 |
isDingding|是否是钉钉内			|
isInnerAdr|是否是自家安卓app	 |
isInnerIos|是否是自家ios app	|
isInnerApp|是否是自家app		|

## events  

参数		|	说明	|	类型	|
----------|------------|-----------
printUa |输出ua信息    |Function |
