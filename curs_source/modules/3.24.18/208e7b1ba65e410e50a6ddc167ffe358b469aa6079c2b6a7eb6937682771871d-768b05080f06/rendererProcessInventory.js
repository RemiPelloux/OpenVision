import { h } from "./tslib.es6.js";
var Eme;
export { Eme };
var __wakaru_bme_initialized = false;
export function bme() {
if (__wakaru_bme_initialized) return;
__wakaru_bme_initialized = true;
"use strict";
h(), Eme = class {
    constructor(){
        this.previous = new Map;
    }
    update(e, t) {
        const n = new Map, r = new Map;
        for (const s of t){
            if (s.cumulativeCpuSeconds === void 0 || !Number.isFinite(s.cumulativeCpuSeconds)) continue;
            const i = this.previous.get(s.pid);
            if (i && e > i.atMs && s.cumulativeCpuSeconds >= i.cpuSeconds) {
                const a = (e - i.atMs) / 1e3;
                n.set(s.pid, (s.cumulativeCpuSeconds - i.cpuSeconds) / a * 100);
            }
            r.set(s.pid, {
                cpuSeconds: s.cumulativeCpuSeconds,
                atMs: e
            });
        }
        return this.previous = r, n;
    }
};

}
