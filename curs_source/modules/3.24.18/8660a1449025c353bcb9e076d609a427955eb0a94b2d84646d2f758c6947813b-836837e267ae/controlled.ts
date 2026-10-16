import { BSi } from "./blob-store.ts";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { $4p, D5a, H4p, SS, U4, iie } from "./ipa.js";
import { j4p, jCn } from "./kv_pb.js";
import { E } from "./tslib.es6.js";
var IHu = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), xHu = (t)=>{
    throw TypeError(t);
}, kde = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && xHu("Object expected");
        var i, r;
        n && (i = e[IHu("asyncDispose")]), i === void 0 && (i = e[IHu("dispose")], n && (r = i)), typeof i != "function" && xHu("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, jxe = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
};
var szr, W4p, G4p, q4p, z4p, V4p;
export { G4p, V4p, W4p, jxe, kde, q4p, szr, z4p };
var __wakaru_hL1_initialized = false;
export function hL1() {
if (__wakaru_hL1_initialized) return;
__wakaru_hL1_initialized = true;
"use strict";
E(), Ng(), iCe(), j4p(), BSi(), szr = iie("ControlledKvManager"), W4p = 50, G4p = 100, q4p = U4("agent_kv.controlled.get_blob.duration_ms", {
    description: "Duration of ControlledKvManager getBlob operations in milliseconds"
}), z4p = U4("agent_kv.controlled.set_blob.duration_ms", {
    description: "Duration of ControlledKvManager setBlob operations in milliseconds"
}), V4p = class {
    constructor(t, e, n, i = {}){
        this.serverStream = t, this.clientStream = e, this.blobStore = n, this.options = i;
    }
    async run(t) {
        var e = [];
        try {
            const s = kde(e, SS(t.withName("ControlledKvManager.run"))).ctx, o = new Set, a = (l)=>{
                o.add(l), l.finally(()=>{
                    o.delete(l);
                });
            };
            try {
                for await (const l of this.serverStream){
                    const c = performance.now(), u = Date.now();
                    switch(l.message.case){
                        case "getBlobArgs":
                            {
                                const d = l.message.value.blobId;
                                a((async ()=>{
                                    const h = $4p(l.spanContext, "ControlledKvManager.getBlob", s);
                                    try {
                                        await this.options.beforeGetBlob?.(h, d);
                                        const p = await this.blobStore.getBlob(h, d);
                                        await this.clientStream.write(new jCn({
                                            id: l.id,
                                            message: {
                                                case: "getBlobResult",
                                                value: {
                                                    blobData: p ? D5a(p) : void 0
                                                }
                                            }
                                        }));
                                    } catch (p) {
                                        szr.error(h, "Error handling getBlob", p);
                                        const g = p instanceof Error ? p.message : String(p);
                                        try {
                                            await this.clientStream.write(new jCn({
                                                id: l.id,
                                                message: {
                                                    case: "getBlobResult",
                                                    value: {
                                                        blobData: void 0,
                                                        error: {
                                                            message: g
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (f) {
                                            szr.error(h, "Error writing failed getBlobResult", f);
                                        }
                                    } finally{
                                        const p = performance.now() - c;
                                        q4p.histogram(h, p), H4p(h, "ControlledKvManager.getBlob", W4p, u, p);
                                    }
                                })());
                                break;
                            }
                        case "setBlobArgs":
                            {
                                const d = l.message.value.blobId, h = l.message.value.blobData;
                                a((async ()=>{
                                    const p = $4p(l.spanContext, "ControlledKvManager.setBlob", s);
                                    try {
                                        await this.blobStore.setBlob(p, d, h), await this.clientStream.write(new jCn({
                                            id: l.id,
                                            message: {
                                                case: "setBlobResult",
                                                value: {
                                                    error: void 0
                                                }
                                            }
                                        }));
                                    } catch (g) {
                                        const f = g instanceof Error ? g.message : String(g);
                                        try {
                                            await this.clientStream.write(new jCn({
                                                id: l.id,
                                                message: {
                                                    case: "setBlobResult",
                                                    value: {
                                                        error: {
                                                            message: f
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (_) {
                                            szr.error(p, "Error writing setBlobResult", _);
                                        }
                                    } finally{
                                        const g = performance.now() - c;
                                        z4p.histogram(p, g), H4p(p, "ControlledKvManager.setBlob", G4p, u, g);
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
            jxe(e, n, i);
        }
    }
};

}
