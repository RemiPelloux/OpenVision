import { C2, QOu, S_, Wj, ZOu, aYs } from "./De_3.js";
import { MMn } from "./blob-store.ts";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { F$t, XOu } from "./kv_pb.js";
import { x } from "./tslib.es6.js";
var okc = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), akc = (e)=>{
    throw TypeError(e);
}, QQ = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && akc("Object expected");
        var i, r;
        n && (i = t[okc("asyncDispose")]), i === void 0 && (i = t[okc("dispose")], n && (r = i)), typeof i != "function" && akc("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, ege = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
};
var W8i, JOu, eFu, tFu, nFu, iFu;
export { JOu, QQ, W8i, eFu, ege, iFu, nFu, tFu };
var __wakaru_evv_initialized = false;
export function evv() {
if (__wakaru_evv_initialized) return;
__wakaru_evv_initialized = true;
"use strict";
x(), Gp(), mde(), XOu(), MMn(), W8i = Wj("ControlledKvManager"), JOu = 50, eFu = 100, tFu = C2("agent_kv.controlled.get_blob.duration_ms", {
    description: "Duration of ControlledKvManager getBlob operations in milliseconds"
}), nFu = C2("agent_kv.controlled.set_blob.duration_ms", {
    description: "Duration of ControlledKvManager setBlob operations in milliseconds"
}), iFu = class {
    constructor(e, t, n, i = {}){
        this.serverStream = e, this.clientStream = t, this.blobStore = n, this.options = i;
    }
    async run(e) {
        var t = [];
        try {
            const s = QQ(t, S_(e.withName("ControlledKvManager.run"))).ctx, o = new Set, a = (c)=>{
                o.add(c), c.finally(()=>{
                    o.delete(c);
                });
            };
            try {
                for await (const c of this.serverStream){
                    const l = performance.now(), u = Date.now();
                    switch(c.message.case){
                        case "getBlobArgs":
                            {
                                const h = c.message.value.blobId;
                                a((async ()=>{
                                    const p = ZOu(c.spanContext, "ControlledKvManager.getBlob", s);
                                    try {
                                        await this.options.beforeGetBlob?.(p, h);
                                        const g = await this.blobStore.getBlob(p, h);
                                        await this.clientStream.write(new F$t({
                                            id: c.id,
                                            message: {
                                                case: "getBlobResult",
                                                value: {
                                                    blobData: g ? aYs(g) : void 0
                                                }
                                            }
                                        }));
                                    } catch (g) {
                                        W8i.error(p, "Error handling getBlob", g);
                                        const f = g instanceof Error ? g.message : String(g);
                                        try {
                                            await this.clientStream.write(new F$t({
                                                id: c.id,
                                                message: {
                                                    case: "getBlobResult",
                                                    value: {
                                                        blobData: void 0,
                                                        error: {
                                                            message: f
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (v) {
                                            W8i.error(p, "Error writing failed getBlobResult", v);
                                        }
                                    } finally{
                                        const g = performance.now() - l;
                                        tFu.histogram(p, g), QOu(p, "ControlledKvManager.getBlob", JOu, u, g);
                                    }
                                })());
                                break;
                            }
                        case "setBlobArgs":
                            {
                                const h = c.message.value.blobId, p = c.message.value.blobData;
                                a((async ()=>{
                                    const g = ZOu(c.spanContext, "ControlledKvManager.setBlob", s);
                                    try {
                                        await this.blobStore.setBlob(g, h, p), await this.clientStream.write(new F$t({
                                            id: c.id,
                                            message: {
                                                case: "setBlobResult",
                                                value: {
                                                    error: void 0
                                                }
                                            }
                                        }));
                                    } catch (f) {
                                        const v = f instanceof Error ? f.message : String(f);
                                        try {
                                            await this.clientStream.write(new F$t({
                                                id: c.id,
                                                message: {
                                                    case: "setBlobResult",
                                                    value: {
                                                        error: {
                                                            message: v
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (b) {
                                            W8i.error(g, "Error writing setBlobResult", b);
                                        }
                                    } finally{
                                        const f = performance.now() - l;
                                        nFu.histogram(g, f), QOu(g, "ControlledKvManager.setBlob", eFu, u, f);
                                    }
                                })());
                                break;
                            }
                    }
                }
            } finally{
                await Promise.allSettled(o);
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            ege(t, n, i);
        }
    }
};

}
