import { x } from "./tslib.es6.js";
var vSh;
export { vSh };
var __wakaru_Lqv_initialized = false;
export function Lqv() {
if (__wakaru_Lqv_initialized) return;
__wakaru_Lqv_initialized = true;
"use strict";
x(), vSh = class {
    async readNext(e) {
        let t;
        const n = new Promise((i, r)=>{
            t = r, this.timeoutReject = r;
        });
        try {
            return await Promise.race([
                e.next(),
                n
            ]);
        } finally{
            this.timeoutReject === t && (this.timeoutReject = void 0);
        }
    }
    reject(e) {
        const t = this.timeoutReject;
        return t === void 0 ? !1 : (this.timeoutReject = void 0, t(e), !0);
    }
};

}
