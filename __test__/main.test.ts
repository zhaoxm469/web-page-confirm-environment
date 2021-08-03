import webPageConfirmEnvironment from '../src/main';

describe('一. 方法', () => {
    test('1. 打印UA，判断是否初始化成功', () => {
        const env = webPageConfirmEnvironment();
        expect(env.ua).toBeTruthy();
    });
    test('2. 动态设置UA', () => {
        const ua = 'custom-ua-ios';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.ua).toBe(ua);
    });
    test('3. 打印UA', () => {
        const ua = 'custom-ua-ios';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.printUa()).toBe(ua);
        env;
    });
});

describe('二. 环境判断', () => {
    test('1. 是否在IOS浏览器内', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isIos).toBeTruthy();
    });

    test('2. 是否在安卓浏览器内', () => {
        const ua =
            'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Mobile Safari/537.36 Edg/92.0.902.62';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isAndroid).toBeTruthy();
    });

    test('3. 是否在微信浏览器内', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0(0x18000022) NetType/WIFI Language/zh_CN';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isIos).toBeTruthy();
        expect(env.isWechat).toBeTruthy();
    });

    test('4. 是否在企业微信中', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 wxwork/3.0.31 MicroMessenger/7.0.1 Language/zh';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isWxWork).toBeTruthy();
    });

    test('5. 是否在微信小程序中', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0(0x18000022) NetType/WIFI Language/zh_CN miniProgram';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isWxmp).toBeTruthy();
    });

    // 假的UA
    test('6. 是否在钉钉浏览器中', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 DingTalk Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isDingding).toBeTruthy();
    });

    test('7. 是否在飞书浏览器中', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.6 Mobile/15E148 Safari/604.1 Lark/4.1.3 LarkLocale/zh_CN';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isFs).toBeTruthy();
    });

    test('8. 是否在手机端', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isIos).toBeTruthy();
    });

    test('9. 是否在PC端', () => {
        const ua =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isPc).toBeTruthy();
    });

    test('10. 是否在自家安卓中（否）', () => {
        const ua =
            'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) nucarf Chrome/92.0.4515.107 Mobile Safari/537.36 Edg/92.0.902.62';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isInnerAdr).toBeFalsy();
    });

    test('11. 是否在自家安卓中（真）', () => {
        const ua =
            'Mozilla/5.0 nucarf (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) nucarf Chrome/92.0.4515.107 Mobile Safari/537.36 Edg/92.0.902.62';
        const env = webPageConfirmEnvironment({
            androidUa: 'nucarf',
            ua
        });
        expect(env.isInnerAdr).toBeTruthy();
    });

    test('12. 是否在自家IOS中（否）', () => {
        const ua =
            'Mozilla/5.0 (iPhone; nucarf CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isInnerIos).toBeFalsy();
    });

    test('13. 是否在自家IOS中（真）', () => {
        const ua =
            'Mozilla/5.0 (iPhone; nucarf  CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            iosUa: 'nucarf',
            ua
        });
        expect(env.isInnerIos).toBeTruthy();
    });

    test('14. 是否在自家APP内(否)', () => {
        const ua =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua
        });
        expect(env.isInnerAdr).toBeFalsy();
    });

    test('15. 是否在自家APP内(真)', () => {
        const ua =
            'Mozilla/5.0 nucarf (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107';
        const env = webPageConfirmEnvironment({
            ua,
            iosUa: 'nucarf',
            androidUa: 'nucarf'
        });
        expect(env.isInnerApp).toBeTruthy();
    });
});
