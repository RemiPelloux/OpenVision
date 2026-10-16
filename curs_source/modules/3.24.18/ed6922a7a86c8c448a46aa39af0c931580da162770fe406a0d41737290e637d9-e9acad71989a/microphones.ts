import { x } from "./tslib.es6.js";
function xPo() {
    return typeof navigator > "u" ? void 0 : navigator.mediaDevices;
}
function Wm_(e, t) {
    return e.length === t.length && e.every((n, i)=>n.deviceId === t[i]?.deviceId && n.label === t[i]?.label);
}
async function k8h() {
    const e = xPo();
    if (e?.enumerateDevices === void 0) return;
    const t = ++APo;
    let n;
    try {
        n = (await e.enumerateDevices()).filter((i)=>i.kind === "audioinput" && i.deviceId !== "").map(({ deviceId: i, label: r })=>({
                deviceId: i,
                label: r
            }));
    } catch  {
        return;
    }
    if (!(t !== APo || Wm_(wrr, n))) {
        wrr = n;
        for (const i of Lzt)i();
    }
}
function w8h() {
    k8h();
}
var krr, IPo, wrr, APo, Lzt, RPo;
export { APo, IPo, Lzt, RPo, Wm_, k8h, krr, w8h, wrr, xPo };
var __wakaru_C8h_initialized = false;
export function C8h() {
if (__wakaru_C8h_initialized) return;
__wakaru_C8h_initialized = true;
"use strict";
x(), krr = {
    channelCount: 1,
    echoCancellation: !0,
    noiseSuppression: !0
}, IPo = [], wrr = IPo, APo = 0, Lzt = new Set, RPo = {
    subscribe: (e)=>(Lzt.add(e), Lzt.size === 1 && (xPo()?.addEventListener("devicechange", w8h), k8h()), ()=>{
            Lzt.delete(e), Lzt.size === 0 && xPo()?.removeEventListener("devicechange", w8h);
        }),
    getSnapshot: ()=>wrr,
    getServerSnapshot: ()=>IPo
};

}
