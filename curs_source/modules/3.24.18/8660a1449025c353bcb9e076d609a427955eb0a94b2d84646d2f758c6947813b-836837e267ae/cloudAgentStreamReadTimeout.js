import { E } from "./tslib.es6.js";
var Pog;
export { Pog };
var __wakaru_Ymk_initialized = false;
export function Ymk() {
if (__wakaru_Ymk_initialized) return;
__wakaru_Ymk_initialized = true;
"use strict";
E(), Pog = class {
    async readNext(t) {
        let e;
        const n = new Promise((i, r)=>{
            e = r, this.timeoutReject = r;
        });
        try {
            return await Promise.race([
                t.next(),
                n
            ]);
        } finally{
            this.timeoutReject === e && (this.timeoutReject = void 0);
        }
    }
    reject(t) {
        const e = this.timeoutReject;
        return e === void 0 ? !1 : (this.timeoutReject = void 0, e(t), !0);
    }
};

}
