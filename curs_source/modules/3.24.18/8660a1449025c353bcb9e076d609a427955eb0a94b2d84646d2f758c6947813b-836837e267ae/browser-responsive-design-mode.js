import { b4 } from "./numbers.js";
import { E } from "./tslib.es6.js";
import { Hxv, Wxv } from "./wTv.js";
var KOn, iec, rec, sec, uPs, Vxv, oec, Kxv, aec, lec, Yxv, Xxv, cec, uec, Zxv, Qxv, Jxv;
export { Jxv, KOn, Kxv, Qxv, Vxv, Xxv, Yxv, Zxv, aec, cec, iec, lec, oec, rec, sec, uPs, uec };
var __wakaru_m6i_initialized = false;
export function m6i() {
if (__wakaru_m6i_initialized) return;
__wakaru_m6i_initialized = true;
"use strict";
E(), b4(), KOn = "responsive", iec = globalThis.navigator?.userAgent.match(/Chrome\/(\d+)/)?.[1] ?? "124", rec = "26_0", sec = rec.replace("_", "."), uPs = Hxv("iPhone"), Vxv = Hxv("iPad"), oec = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${sec} Safari/605.1.15`, Kxv = `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${iec}.0.0.0 Mobile Safari/537.36`, aec = [
    {
        id: "iphone-16e",
        label: "iPhone 16e",
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
        mobile: !0,
        userAgent: uPs
    },
    {
        id: "iphone-17",
        label: "iPhone 17",
        width: 402,
        height: 874,
        deviceScaleFactor: 3,
        mobile: !0,
        userAgent: uPs
    },
    {
        id: "iphone-17-pro-max",
        label: "iPhone 17 Pro Max",
        width: 440,
        height: 956,
        deviceScaleFactor: 3,
        mobile: !0,
        userAgent: uPs
    },
    {
        id: "pixel-10",
        label: "Pixel 10",
        width: 412,
        height: 923,
        deviceScaleFactor: 2.625,
        mobile: !0,
        userAgent: Wxv("Pixel 10")
    },
    {
        id: "galaxy-s25-ultra",
        label: "Galaxy S25 Ultra",
        width: 384,
        height: 832,
        deviceScaleFactor: 2.8125,
        mobile: !0,
        userAgent: Wxv("SM-S938B")
    },
    {
        id: "ipad-mini",
        label: "iPad mini",
        width: 744,
        height: 1133,
        deviceScaleFactor: 2,
        mobile: !0,
        userAgent: Vxv
    },
    {
        id: "ipad-air-11",
        label: 'iPad Air 11"',
        width: 820,
        height: 1180,
        deviceScaleFactor: 2,
        mobile: !0,
        userAgent: oec
    },
    {
        id: "ipad-pro-13",
        label: 'iPad Pro 13"',
        width: 1032,
        height: 1376,
        deviceScaleFactor: 2,
        mobile: !0,
        userAgent: oec
    },
    {
        id: "laptop",
        label: "Laptop",
        width: 1366,
        height: 768,
        deviceScaleFactor: 0,
        mobile: !1
    },
    {
        id: "desktop",
        label: "Desktop",
        width: 1920,
        height: 1080,
        deviceScaleFactor: 0,
        mobile: !1
    }
], lec = [
    .5,
    .75,
    1,
    1.25,
    1.5
], Yxv = 50, Xxv = 9999, cec = {
    deviceId: KOn,
    width: 412,
    height: 915,
    zoom: "fit"
}, uec = 24, Zxv = .1, Qxv = 10, Jxv = {
    deviceScaleFactor: 2,
    mobile: !0,
    userAgent: Kxv
};

}
