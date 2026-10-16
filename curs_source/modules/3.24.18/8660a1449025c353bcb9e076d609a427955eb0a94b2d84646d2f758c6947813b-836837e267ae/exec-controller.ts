import { kl } from "./browser.ts";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { jxe, kde } from "./controlled.ts";
import { Gmn, Xse } from "./exec_pb.js";
import { Ng } from "./index_3.ts";
import { SS, dpe, x5a } from "./ipa.js";
import { A5a } from "./otel.ts";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Z0e } from "./writable-iterable.ts";
import { tz } from "./ze.js";
var kki, hUa;
export { hUa, kki };
var __wakaru_ikm_initialized = false;
export function ikm() {
if (__wakaru_ikm_initialized) return;
__wakaru_ikm_initialized = true;
"use strict";
E(), Ng(), Xse(), kl(), hr(), dp(), kki = class extends Error {
    constructor(t){
        super(t), this.name = "LostConnection";
    }
}, hUa = class {
    constructor(t, e, n){
        this.serverStream = t, this.clientStream = e, this.controlledExecManager = n;
    }
    async run(t) {
        var e = [];
        try {
            const r = kde(e, SS(t.withName("ClientExecController.run"))), s = [];
            try {
                for await (const o of this.serverStream){
                    if (tz(o, Gmn)) {
                        this.controlledExecManager.handleControlMessage(o);
                        continue;
                    }
                    const a = (async ()=>{
                        var l = [];
                        try {
                            let d, h;
                            if (o.spanContext) {
                                const f = o.spanContext;
                                d = x5a({
                                    traceId: f.traceId,
                                    spanId: f.spanId,
                                    traceFlags: f.traceFlags ?? 1
                                }, "exec.handle", t), h = dpe(d);
                            } else d = t;
                            const p = kde(l, h ? new A5a(d, h) : void 0), g = this.controlledExecManager.handle(d, o);
                            for await (const f of g)await this.clientStream.write(f);
                        } catch (d) {
                            var c = d, u = !0;
                        } finally{
                            jxe(l, c, u);
                        }
                    })();
                    s.push(a);
                }
                await Promise.all(s);
            } catch (o) {
                if (o instanceof Us && o.rawMessage === "protocol error: missing EndStreamResponse") throw new kki(o.message);
                if (o instanceof Us && o.code === pr.Aborted) {
                    const a = o.cause;
                    if (a instanceof Error && "code" in a && typeof a.code == "string" && a.code.includes("ERR_STREAM_WRITE_AFTER_END")) throw new kki(o.message);
                } else {
                    if (o instanceof Z0e) throw new kki(o.message);
                    if (o instanceof Us && o.code === pr.Internal) {
                        const a = o.cause;
                        if (a instanceof Error && a.message.includes("NGHTTP2_PROTOCOL_ERROR")) throw new kki(o.message);
                    }
                }
                throw o;
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            jxe(e, n, i);
        }
    }
};

}
