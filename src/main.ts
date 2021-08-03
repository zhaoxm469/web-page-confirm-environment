/*
 * @Author: zhaoxingming
 * @Date: 2021-07-16 02:43:04
 * @LastEditTime: 2021-08-03 15:25:59
 * @LastEditors: vscode
 * @Description: 用于判断当前网页所在的运行环境
 *
 */

interface IClientUa {
    // 跟IOS客户端 端协商 往前端页面塞入的UA标识
    ios?: string;
    // 跟Android客户端 端协商 往前端页面塞入的UA标识
    android?: string;
    // 自定义UA
    ua?: string;
}

const clientUaDef: IClientUa = {
    ios: '',
    android: '',
    ua: ''
};

class WebPageConfirmEnvironment {
    ua: string = '';
    /**
     * @description: 是否在安卓APP内
     */
    isAndroid: boolean = false;
    /**
     * @description: 是否在IOS APP内
     */
    isIos: boolean = false;
    /**
     * @description: 是否在微信浏览器中
     */
    isWechat: boolean = false;
    /**
     * @description: 是否在企业微信中
     */
    isWxWork: boolean = false;
    /**
     * @description: 是否在微信小程序内
     */
    isWxmp: boolean = false;
    /**
     * @description: 是否在钉钉浏览器中
     */
    isDingding: boolean = false;
    /**
     * @description: 是否在飞书浏览器中
     */
    isFs: boolean = false;
    /**
     * @description: 是否在手机浏览器中
     */
    isMobile: boolean = false;
    /**
     * @description: 是否在PC端
     */
    isPc: boolean = false;
    /**
     * @description: 是否在自家安卓APP内
     */
    isInnerAdr: boolean = false;
    /**
     * @description: 是否在自家IOS APP内
     */
    isInnerIos: boolean = false;

    /**
     * @description: 是否在自家APP内
     */
    isInnerApp: boolean = false;

    constructor(private clientUa: IClientUa) {
        this.clientUa = Object.assign(clientUa, clientUaDef);
        this.editUa(clientUa.ua!);
        this.init();
    }

    init() {
        this.isAndroid = /android/i.test(this.ua);

        this.isIos = /iphone|ipod|ipad/i.test(this.ua);

        this.isWechat = /micromessenger/i.test(this.ua);

        this.isWxWork =
            /micromessenger/i.test(this.ua) && /wxwork/i.test(this.ua);

        this.isWxmp =
            /miniprogram/i.test(this.ua) ||
            window.__wxjs_environment === 'miniprogram';

        this.isDingding = /dingtalk/i.test(this.ua);

        this.isFs = /lark/i.test(this.ua);

        this.isMobile = /applewebkit.*mobile.*/gi.test(this.ua);

        this.isPc = !this.isMobile;

        this.isInnerAdr =
            this.isAndroid &&
            Boolean(this.clientUa.android) &&
            new RegExp(`${this.clientUa.android}`, 'i').test(this.ua);

        this.isInnerIos =
            this.isIos &&
            Boolean(this.clientUa.ios) &&
            new RegExp(`${this.clientUa.ios}`, 'i').test(this.ua);

        this.isInnerApp = this.isInnerAdr || this.isInnerIos;
    }

    /**
     * @description: 打印UA
     * @return string
     */
    printUa(): string {
        return this.ua;
    }

    private editUa(ua: string): void {
        const UA = window.navigator.userAgent.toLowerCase();
        this.ua = ua ? ua.toLowerCase() : UA;
    }
}

export default function (clientUa?: IClientUa) {
    Object.assign(clientUaDef, clientUa);
    return new WebPageConfirmEnvironment(clientUaDef);
}
