import { ze } from "./index_2.ts";
import { h } from "./tslib.es6.js";
function E9(e) {
    if (e.length === 0) return [];
    const t = [];
    let r = e[0].type, n = [
        e[0].data
    ];
    for(let s = 1; s < e.length; s++){
        const i = e[s];
        if (i.type === r) {
            n.push(i.data);
            continue;
        }
        t.push({
            type: r,
            data: Buffer.concat(n)
        }), r = i.type, n = [
            i.data
        ];
    }
    return t.push({
        type: r,
        data: Buffer.concat(n)
    }), t;
}
var nl, B1;
export { B1, E9, nl };
var __wakaru_rs_initialized = false;
export function rs() {
if (__wakaru_rs_initialized) return;
__wakaru_rs_initialized = true;
"use strict";
h(), ze(), nl = {
    flushIntervalMs: 50,
    maxBufferedBytes: 256 * 1024
}, B1 = class {
    constructor(e, t){
        this.writable = e, this.flushIntervalMs = t?.flushIntervalMs ?? nl.flushIntervalMs, this.maxBufferedBytes = t?.maxBufferedBytes ?? nl.maxBufferedBytes;
    }
    pending = [];
    pendingBytes = 0;
    flushTimeout;
    flushPromise;
    flushIntervalMs;
    maxBufferedBytes;
    async push(e, t) {
        if (t.length !== 0) {
            if (this.pending.push({
                type: e,
                data: t
            }), this.pendingBytes += t.length, this.pendingBytes >= this.maxBufferedBytes) {
                await this.flush();
                return;
            }
            this.scheduleFlush();
        }
    }
    async flush() {
        if (this.clearFlushTimeout(), this.flushPromise) {
            await this.flushPromise, this.pendingBytes > 0 && await this.flush();
            return;
        }
        if (this.pendingBytes === 0) return;
        const e = this.pending;
        this.pending = [], this.pendingBytes = 0, this.flushPromise = this.writeBufferedOutput(e);
        try {
            await this.flushPromise;
        } finally{
            this.flushPromise = void 0;
        }
    }
    async close() {
        await this.flush();
    }
    scheduleFlush() {
        this.flushTimeout === void 0 && (this.flushTimeout = setTimeout(()=>{
            this.flushTimeout = void 0, this.flush();
        }, this.flushIntervalMs));
    }
    clearFlushTimeout() {
        this.flushTimeout !== void 0 && (clearTimeout(this.flushTimeout), this.flushTimeout = void 0);
    }
    async writeBufferedOutput(e) {
        for (const t of E9(e))try {
            await this.writable.write(t);
        } catch  {}
    }
};

}
