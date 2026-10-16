import { vL } from "./code_3.js";
import { e1i } from "./compression.js";
import { Z5 } from "./connect-error.js";
import { t1i } from "./limit-io.js";
import { E } from "./tslib.es6.js";
import { qzr } from "./yBp.js";
var t8p;
export { t8p };
var __wakaru_n8p_initialized = false;
export function n8p() {
if (__wakaru_n8p_initialized) return;
__wakaru_n8p_initialized = true;
"use strict";
E(), Z5(), vL(), e1i(), t1i(), t8p = class {
    constructor(t){
        this.readMaxBytes = t, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((t, e)=>t + e.byteLength, 0);
    }
    decode(t) {
        this.buf.push(t);
        const e = [];
        for(;;){
            let n = this.pop();
            if (!n) break;
            e.push(n);
        }
        return e;
    }
    pop() {
        if (!(!this.env && (this.env = this.head(), !this.env)) && this.cons(this.env.data)) {
            const t = this.env;
            return this.env = void 0, t;
        }
    }
    head() {
        if (!this.cons(this.header)) return;
        const t = this.headerView.getUint8(0), e = this.headerView.getUint32(1);
        return qzr(this.readMaxBytes, e, !0), {
            flags: t,
            data: new Uint8Array(e)
        };
    }
    cons(t) {
        const e = t.byteLength;
        if (this.byteLength < e) return !1;
        let n = 0;
        for(; n < e;){
            const i = this.buf.shift();
            i.byteLength > e - n ? (t.set(i.subarray(0, e - n), n), this.buf.unshift(i.subarray(e - n)), n += e - n) : (t.set(i, n), n += i.byteLength);
        }
        return !0;
    }
};

}
