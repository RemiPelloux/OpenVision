import { Fvt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { vWo } from "./ze.js";
var _oe;
export { _oe };
var __wakaru_Rsi_initialized = false;
export function Rsi() {
if (__wakaru_Rsi_initialized) return;
__wakaru_Rsi_initialized = true;
"use strict";
E(), To(), ((t)=>{
    async function e(r) {
        try {
            if (!navigator.gpu) throw new Error("This browser does not support WebGPU");
            const s = await navigator.gpu.requestAdapter();
            if (!s) throw new Error("This browser supports WebGPU but it appears to be disabled");
            return vWo(await s.requestDevice());
        } catch (s) {
            throw r && r(s.message), s;
        }
    }
    t.requestDevice = e;
    function n(r, s, o) {
        const a = r.createBuffer(s);
        return o && r.queue.writeBuffer(a, 0, Fvt(o) ? o() : o), vWo(a);
    }
    t.createBuffer = n;
    function i(r, s) {
        return vWo(r.createTexture(s));
    }
    t.createTexture = i;
})(_oe || (_oe = {}));

}
