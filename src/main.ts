/*
 * @Author: zhaoxingming
 * @Date: 2021-07-16 02:43:04
 * @LastEditTime: 2021-07-21 11:04:24
 * @LastEditors: vscode
 * @Description: 用于判断当前网页所在的运行环境
 *
 */

interface IClientUa {
    // 跟IOS客户端 端协商 往前端页面塞入的UA标识
    ios: string;
    // 跟Android客户端 端协商 往前端页面塞入的UA标识
    android: string;
}

const clientUaDef: IClientUa = {
    ios: '',
    android: ''
};

const UA = window.navigator.userAgent.toLowerCase();

export default class WebPageConfirmEnvironment {
    clientUa: IClientUa = clientUaDef;
    ua: string = UA;

    constructor(clientUa?: IClientUa) {
        this.clientUa = Object.assign(clientUa, clientUaDef);
        this.init();
    }

    init() {
        this.isInnerAdr = new RegExp(`${this.clientUa.android}`, 'i').test(
            this.ua
        );

        this.isInnerIos = new RegExp(`${this.clientUa.ios}`, 'i').test(this.ua);

        this.isInnerApp = this.isInnerAdr || this.isInnerIos;
    }

    printUa() {
        return window.navigator.userAgent.toLowerCase();
    }

    isAndroid: boolean = (() => {
        return /Android/i.test(this.ua);
    })();

    isIos: boolean = (() => {
        return /iPhone|iPod|iPad/i.test(this.ua);
    })();

    isWechat: boolean = (() => {
        return /MicroMessenger/i.test(this.ua);
    })();

    isWxWork: boolean = (() => {
        return /MicroMessenger/i.test(this.ua) && /wxwork/i.test(this.ua);
    })();

    isWxmp: boolean = (() => {
        return (
            /miniProgram/i.test(this.ua) ||
            window.__wxjs_environment === 'miniprogram'
        );
    })();

    isDingding: boolean = (() => {
        return /DingTalk/i.test(this.ua);
    })();

    /**
     * @description: 是否为手机端
     * @return { boolean }
     */
    isMobile: boolean = (() => {
        return /AppleWebKit.*Mobile.*/gi.test(this.ua);
    })();

    isPc: boolean = (() => {
        return !this.isMobile;
    })();

    /**
     * @description: 是否在自家安卓APP内
     * @return {*}
     */
    isInnerAdr: boolean = false;

    /**
     * @description: 是否在自家IOS APP内
     * @return {*}
     */
    isInnerIos: boolean = false;

    /**
     * @description: 是否在自家APP内
     * @return { boolean }
     */
    isInnerApp: boolean = false;
}
