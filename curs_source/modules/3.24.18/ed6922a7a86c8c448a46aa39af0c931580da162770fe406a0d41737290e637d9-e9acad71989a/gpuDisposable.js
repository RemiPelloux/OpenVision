import { wqe } from "./HVr.js";
import { pts } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var VK;
export { VK };
var __wakaru_Qfn_initialized = false;
export function Qfn() {
if (__wakaru_Qfn_initialized) return;
__wakaru_Qfn_initialized = true;
"use strict";
x(), gr(), ((e)=>{
    async function t(r) {
        try {
            if (!navigator.gpu) throw new Error("This browser does not support WebGPU");
            const s = await navigator.gpu.requestAdapter();
            if (!s) throw new Error("This browser supports WebGPU but it appears to be disabled");
            return pts(await s.requestDevice());
        } catch (s) {
            throw r && r(s.message), s;
        }
    }
    e.requestDevice = t;
    function n(r, s, o) {
        const a = r.createBuffer(s);
        return o && r.queue.writeBuffer(a, 0, wqe(o) ? o() : o), pts(a);
    }
    e.createBuffer = n;
    function i(r, s) {
        return pts(r.createTexture(s));
    }
    e.createTexture = i;
})(VK || (VK = {}));

}
