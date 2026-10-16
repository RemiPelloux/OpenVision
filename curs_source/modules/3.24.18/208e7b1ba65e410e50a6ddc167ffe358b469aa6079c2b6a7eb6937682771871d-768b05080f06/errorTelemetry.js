import { Vn } from "./arrays.js";
import { Ve, wi, wm } from "./errors.js";
import { ge } from "./event.js";
import { Wt, gr } from "./files.js";
import { j, ve } from "./lifecycle.js";
import { ns } from "./objects.js";
import { Un } from "./platform_2.js";
import { h } from "./tslib.es6.js";
function sUe(e, t, n) {
    return iUe(e.length, (r)=>n(e[r], t));
}
function iUe(e, t) {
    let n = 0, r = e - 1;
    for(; n <= r;){
        const s = (n + r) / 2 | 0, i = t(s);
        if (i < 0) n = s + 1;
        else if (i > 0) r = s - 1;
        else return s;
    }
    return -(n + 1);
}
function pWe(e) {
    const t = new Set;
    return JSON.stringify(e, (n, r)=>{
        if (Un(r) || Array.isArray(r)) {
            if (t.has(r)) return "[Circular]";
            t.add(r);
        }
        return typeof r == "bigint" ? `[BigInt ${r.toString()}]` : r;
    });
}
var y9, w9, WTe;
export { WTe, iUe, pWe, sUe, w9, y9 };
var __wakaru_Kst_initialized = false;
export function Kst() {
if (__wakaru_Kst_initialized) return;
__wakaru_Kst_initialized = true;
"use strict";
h(), Vn(), Ve(), j(), ns(), Wt(), ((e)=>{
    function t(n, r) {
        return n.callstack < r.callstack ? -1 : n.callstack > r.callstack ? 1 : 0;
    }
    e.compare = t;
})(y9 || (y9 = {})), w9 = class wLe {
    constructor(t, n = wLe.ERROR_FLUSH_TIMEOUT){
        this._flushHandle = -1, this._buffer = [], this._disposables = new ve, this._telemetryService = t, this._flushDelay = n;
        const r = wm.addListener((s)=>this._onErrorEvent(s));
        this._disposables.add(ge(r)), this.installErrorListeners();
    }
    dispose() {
        clearTimeout(this._flushHandle), this._flushBuffer(), this._disposables.dispose();
    }
    installErrorListeners() {}
    _onErrorEvent(t) {
        if (!t || t.code || (t.detail && t.detail.stack && (t = t.detail), wi.isErrorNoTelemetry(t) || t instanceof gr || typeof t?.message == "string" && t.message.includes("Unable to read file"))) return;
        const n = Array.isArray(t.stack) ? t.stack.join(`
`) : t.stack, r = t.message ? t.message : pWe(t);
        n && this._enqueue({
            msg: r,
            callstack: n
        });
    }
    _enqueue(t) {
        const n = sUe(this._buffer, t, y9.compare);
        n < 0 ? (t.count = 1, this._buffer.splice(~n, 0, t)) : (this._buffer[n].count || (this._buffer[n].count = 0), this._buffer[n].count += 1), this._flushHandle === -1 && (this._flushHandle = setTimeout(()=>{
            this._flushBuffer(), this._flushHandle = -1;
        }, this._flushDelay));
    }
    _flushBuffer() {
        for (const t of this._buffer)this._telemetryService.publicLogError2("UnhandledError", t);
        this._buffer.length = 0;
    }
}, w9.ERROR_FLUSH_TIMEOUT = 5 * 1e3, WTe = w9;

}
