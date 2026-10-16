import { se } from "./event.js";
import { J, j } from "./lifecycle.js";
import { FT, te } from "./log.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
var __e, v_e;
export { __e, v_e };
var __wakaru_met_initialized = false;
export function met() {
if (__wakaru_met_initialized) return;
__wakaru_met_initialized = true;
"use strict";
h(), ye(), se(), te(), j(), __e = class vv extends FT {
    constructor(t, n, r, s, i){
        super(s?.logLevel === "always"), this.channel = t, this.file = n, this.isLoggerCreated = !1, this.buffer = [], this.flushScheduled = !1, this.setLevel(r), this.channel.call("createLogger", [
            n,
            s,
            i
        ]).then(()=>{
            this.isLoggerCreated = !0, this.flush();
        });
    }
    log(t, n) {
        this.buffer.push([
            t,
            n
        ]), this.isLoggerCreated && (this.buffer.length >= vv.maxBatchSize ? this.flush() : this.flushScheduled || (this.flushScheduled = !0, queueMicrotask(()=>{
            this.flushScheduled = !1, this.flush();
        })));
    }
    flush() {
        if (!this.isLoggerCreated || !this.buffer.length) return;
        const t = this.buffer;
        if (this.buffer = [], t.length <= vv.maxBatchSize) this.doLog(t);
        else for(let n = 0; n < t.length; n += vv.maxBatchSize)this.doLog(t.slice(n, n + vv.maxBatchSize));
    }
    dispose() {
        this.flush(), super.dispose();
    }
    doLog(t) {
        this.channel.call("log", [
            this.file,
            t
        ]);
    }
}, __e.maxBatchSize = 256, v_e = class extends J {
    constructor(e, t){
        super(), t.call("setLogLevel", [
            e.getLogLevel()
        ]), this._register(e.onDidChangeLogLevel((n)=>t.call("setLogLevel", [
                n
            ]))), t.call("getRegisteredLoggers").then((n)=>{
            for (const r of n)e.registerLogger({
                ...r,
                resource: x.revive(r.resource)
            });
        }), this._register(t.listen("onDidChangeVisibility")(([n, r])=>e.setVisibility(x.revive(n), r))), this._register(t.listen("onDidChangeLoggers")(({ added: n, removed: r })=>{
            for (const s of n)e.registerLogger({
                ...s,
                resource: x.revive(s.resource)
            });
            for (const s of r)e.deregisterLogger(s.resource);
        }));
    }
};

}
