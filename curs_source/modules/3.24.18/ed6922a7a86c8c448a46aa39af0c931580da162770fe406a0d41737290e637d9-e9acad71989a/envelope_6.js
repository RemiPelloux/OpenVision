import { w7i } from "./A3u.js";
import { PD } from "./code_3.js";
import { YMn } from "./compression.js";
import { rL } from "./connect-error.js";
import { XMn } from "./limit-io.js";
import { x } from "./tslib.es6.js";
var cBu;
export { cBu };
var __wakaru_lBu_initialized = false;
export function lBu() {
if (__wakaru_lBu_initialized) return;
__wakaru_lBu_initialized = true;
"use strict";
x(), rL(), PD(), YMn(), XMn(), cBu = class {
    constructor(e){
        this.readMaxBytes = e, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((e, t)=>e + t.byteLength, 0);
    }
    decode(e) {
        this.buf.push(e);
        const t = [];
        for(;;){
            let n = this.pop();
            if (!n) break;
            t.push(n);
        }
        return t;
    }
    pop() {
        if (!(!this.env && (this.env = this.head(), !this.env)) && this.cons(this.env.data)) {
            const e = this.env;
            return this.env = void 0, e;
        }
    }
    head() {
        if (!this.cons(this.header)) return;
        const e = this.headerView.getUint8(0), t = this.headerView.getUint32(1);
        return w7i(this.readMaxBytes, t, !0), {
            flags: e,
            data: new Uint8Array(t)
        };
    }
    cons(e) {
        const t = e.byteLength;
        if (this.byteLength < t) return !1;
        let n = 0;
        for(; n < t;){
            const i = this.buf.shift();
            i.byteLength > t - n ? (e.set(i.subarray(0, t - n), n), this.buf.unshift(i.subarray(t - n)), n += t - n) : (e.set(i, n), n += i.byteLength);
        }
        return !0;
    }
};

}
