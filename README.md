# 说明

一个非常轻量的JS插件 , 主要用于帮助我们快速确认当前网页所运行环境.  

## 安装

方式1: 通过 CDN 安装  

最简单的方法是直接在 html 文件中引入 CDN 链接

```html
<script src="https://asdasd.asdasd.as"></script>
```

方式2: 通过 npm 安装

```bash
npm install -S web-page-confirm-environment
```

## 使用  

script 标签 CDN方式引入

```js
const environment = new WebPageConfirmEnvironment({
    // 跟自己IOS客户端 协商好的 标识。客户端打开H5往UA设置得字符串标识
    ios: 'very-good-ios',
    android: 'very-good-android'
});

// 打印UA
console.log(environment.printUa())

// 是否在微信内
console.log(environment.isWechat)
```

NPM安装, import 方式引入

```js
import WebPageConfirmEnvironment from 'web-page-confirm-environment'
const environment = new WebPageConfirmEnvironment({
    // 跟自己IOS客户端 协商好的 标识。客户端打开H5往UA设置得字符串标识
    iosUa: 'very-good-ios',
    androidUa: 'very-good-android'
});
```

## props  

参数		|		说明		|	类型	|
----------|------------|-------------------
isPC 	  |是否正在PC内   		|	string |
isIos 	  |是否是ios	 	   |	string |
isAndroid |是否是安卓	  		|	string |
isWechat  |是否是在微信生浏览器中 |	  string |
isWxWork  |是否在企业微信中		 |	 string |
isWxmp 	  |是否在微信小程序		 |	 string |
isDingding|是否是钉钉内			|	string |
isInnerAdr|是否是自家安卓app	 |	 string |
isInnerIos|是否是自家ios app	|	string |
isInnerApp|是否是自家app		|	string |

## events  

参数		|	说明	|	类型	|
----------|------------|-----------
printUa |输出ua信息    |Function |
