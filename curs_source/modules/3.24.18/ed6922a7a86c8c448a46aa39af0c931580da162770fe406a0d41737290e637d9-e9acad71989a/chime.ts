import { x } from "./tslib.es6.js";
function t4h(e, t) {
    const n = e.map((a)=>Math.max(1, Math.round(a.durationMs / 1e3 * t))), i = Math.max(1, Math.round(i4h / 1e3 * t)), r = n.reduce((a, c)=>a + c, 0), s = new Float32Array(new ArrayBuffer(r * 4));
    let o = 0;
    for (const [a, c] of e.entries()){
        const l = n[a] ?? 0;
        for(let u = 0; u < l; u++){
            const h = Math.min(1, u / i), p = (1 - u / l) ** 2;
            s[o + u] = n4h * h * p * Math.sin(2 * Math.PI * c.frequencyHz * u / t);
        }
        o += l;
    }
    return s;
}
var n4h, i4h, r4h, s4h;
export { i4h, n4h, r4h, s4h, t4h };
var __wakaru_o4h_initialized = false;
export function o4h() {
if (__wakaru_o4h_initialized) return;
__wakaru_o4h_initialized = true;
"use strict";
x(), n4h = .16, i4h = 6, r4h = class VCm {
    static NOTES = [
        {
            frequencyHz: 659.25,
            durationMs: 90
        },
        {
            frequencyHz: 987.77,
            durationMs: 150
        }
    ];
    static render(t) {
        return t4h(VCm.NOTES, t);
    }
}, s4h = class jCm {
    static NOTES = [
        {
            frequencyHz: 987.77,
            durationMs: 90
        },
        {
            frequencyHz: 659.25,
            durationMs: 150
        }
    ];
    static render(t) {
        return t4h(jCm.NOTES, t);
    }
};

}
