import { Be, Lt } from "./code.js";
import { Py } from "./compression.js";
import { Kt, wt } from "./connect-error.js";
import { Dy } from "./limit-io.js";
import { h } from "./tslib.es6.js";
function Ny(e, t, n = !1) {
    if (t > e) {
        let r = `message size is larger than configured readMaxBytes ${e}`;
        throw n && (r = `message size ${t} is larger than configured readMaxBytes ${e}`), new wt(r, Be.ResourceExhausted);
    }
}
var NH;
export { NH, Ny };
var __wakaru_yHe_initialized = false;
export function yHe() {
if (__wakaru_yHe_initialized) return;
__wakaru_yHe_initialized = true;
"use strict";
h(), Kt(), Lt(), Py(), Dy(), NH = class {
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
        return Ny(this.readMaxBytes, t, !0), {
            flags: e,
            data: new Uint8Array(t)
        };
    }
    cons(e) {
        const t = e.byteLength;
        if (this.byteLength < t) return !1;
        let n = 0;
        for(; n < t;){
            const r = this.buf.shift();
            r.byteLength > t - n ? (e.set(r.subarray(0, t - n), n), this.buf.unshift(r.subarray(t - n)), n += t - n) : (e.set(r, n), n += r.byteLength);
        }
        return !0;
    }
};

}
