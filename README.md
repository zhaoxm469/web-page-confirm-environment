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

script CDN方式引入

```js
const environment = webPageConfirmEnvironment();

// 是否在微信
console.log(environment.isWechat)
```

NPM方式

```js
import webPageConfirmEnvironment from 'web-page-confirm-environment'

// 是否在微信
console.log(environment.isWechat)
```

判断是否在自家APP内

```js
const environment = webPageConfirmEnvironment({
    // 跟自家客户端 协商好，往 页面设置的UA标识。
    ios: 'very-good-ios',
    android: 'very-good-android'
});

// 是否在自家安卓APP内
console.log(environment.isInnerAdr)

// 是否在自家IOS APP内
console.log(environment.isInnerAdr)

// 判断是否在自家APP内
console.log(environment.isInnerApp)
```

自定义UA

```js
const environment = webPageConfirmEnvironment({
    // 跟自家客户端 协商好，往 页面设置的UA标识。
    ios: 'very-good-ios',
    android: 'very-good-android',
    ua: 'xx-xxx-xxxx'
});

// 打印UA
console.log(environment.printUa()) // -> xx-xxx-xxxx
```

## config

参数	   |		说明								|   是否必传 |   类型 |
----------|-------------------------------------------|-----------|-------|
iosUa 	  |跟IOS客户端协商好 往前端页面塞入的UA标识 		| 否 		|string |
androidUa |跟Android客户端协商好 往前端页面塞入的UA标识     | 否 		|string |
ua		  |自定义的UA标识								| 否   |string |

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
isFs      |是否是飞书浏览器中    |
isInnerAdr|是否是自家安卓app	 |
isInnerIos|是否是自家ios app	|
isInnerApp|是否是自家app		|

## events  

参数		|	说明	|	类型	|
----------|------------|-----------
printUa |输出ua信息    |Function |
