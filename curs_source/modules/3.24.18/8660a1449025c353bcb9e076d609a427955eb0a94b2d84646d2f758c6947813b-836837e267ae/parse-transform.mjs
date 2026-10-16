import { QYl } from "./ofv.js";
import { E } from "./tslib.es6.js";
var SRt, eRs, syv, tRs, JYl, eXl, tXl, oyv, ayv;
export { JYl, SRt, ayv, eRs, eXl, oyv, syv, tRs, tXl };
var __wakaru_lyv_initialized = false;
export function lyv() {
if (__wakaru_lyv_initialized) return;
__wakaru_lyv_initialized = true;
E(), SRt = (t)=>t * 180 / Math.PI, eRs = (t)=>{
    const e = SRt(Math.atan2(t[1], t[0]));
    return tRs(e);
}, syv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t)=>(Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: eRs,
    rotateZ: eRs,
    skewX: (t)=>SRt(Math.atan(t[1])),
    skewY: (t)=>SRt(Math.atan(t[2])),
    skew: (t)=>(Math.abs(t[1]) + Math.abs(t[2])) / 2
}, tRs = (t)=>(t = t % 360, t < 0 && (t += 360), t), JYl = eRs, eXl = (t)=>Math.sqrt(t[0] * t[0] + t[1] * t[1]), tXl = (t)=>Math.sqrt(t[4] * t[4] + t[5] * t[5]), oyv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: eXl,
    scaleY: tXl,
    scale: (t)=>(eXl(t) + tXl(t)) / 2,
    rotateX: (t)=>tRs(SRt(Math.atan2(t[6], t[5]))),
    rotateY: (t)=>tRs(SRt(Math.atan2(-t[2], t[0]))),
    rotateZ: JYl,
    rotate: JYl,
    skewX: (t)=>SRt(Math.atan(t[4])),
    skewY: (t)=>SRt(Math.atan(t[1])),
    skew: (t)=>(Math.abs(t[1]) + Math.abs(t[4])) / 2
}, ayv = (t, e)=>{
    const { transform: n = "none" } = getComputedStyle(t);
    return QYl(n, e);
};

}
