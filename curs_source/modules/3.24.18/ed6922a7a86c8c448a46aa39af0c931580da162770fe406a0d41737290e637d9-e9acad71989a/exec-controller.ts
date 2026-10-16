import { Eee, S_, nYs } from "./De_3.js";
import { Yu } from "./browser.ts";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { QQ, ege } from "./controlled.ts";
import { O$t, _X } from "./exec_pb.js";
import { Gp } from "./index_3.ts";
import { iYs } from "./otel.ts";
import { bi } from "./protobuf.js";
import { vU } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { lde } from "./writable-iterable.ts";
var VLn, Zso;
export { VLn, Zso };
var __wakaru_LLd_initialized = false;
export function LLd() {
if (__wakaru_LLd_initialized) return;
__wakaru_LLd_initialized = true;
"use strict";
x(), Gp(), _X(), Yu(), bi(), hg(), VLn = class extends Error {
    constructor(e){
        super(e), this.name = "LostConnection";
    }
}, Zso = class {
    constructor(e, t, n){
        this.serverStream = e, this.clientStream = t, this.controlledExecManager = n;
    }
    async run(e) {
        var t = [];
        try {
            const r = QQ(t, S_(e.withName("ClientExecController.run"))), s = [];
            try {
                for await (const o of this.serverStream){
                    if (vU(o, O$t)) {
                        this.controlledExecManager.handleControlMessage(o);
                        continue;
                    }
                    const a = (async ()=>{
                        var c = [];
                        try {
                            let h, p;
                            if (o.spanContext) {
                                const v = o.spanContext;
                                h = nYs({
                                    traceId: v.traceId,
                                    spanId: v.spanId,
                                    traceFlags: v.traceFlags ?? 1
                                }, "exec.handle", e), p = Eee(h);
                            } else h = e;
                            const g = QQ(c, p ? new iYs(h, p) : void 0), f = this.controlledExecManager.handle(h, o);
                            for await (const v of f)await this.clientStream.write(v);
                        } catch (h) {
                            var l = h, u = !0;
                        } finally{
                            ege(c, l, u);
                        }
                    })();
                    s.push(a);
                }
                await Promise.all(s);
            } catch (o) {
                if (o instanceof Qo && o.rawMessage === "protocol error: missing EndStreamResponse") throw new VLn(o.message);
                if (o instanceof Qo && o.code === Rs.Aborted) {
                    const a = o.cause;
                    if (a instanceof Error && "code" in a && typeof a.code == "string" && a.code.includes("ERR_STREAM_WRITE_AFTER_END")) throw new VLn(o.message);
                } else {
                    if (o instanceof lde) throw new VLn(o.message);
                    if (o instanceof Qo && o.code === Rs.Internal) {
                        const a = o.cause;
                        if (a instanceof Error && a.message.includes("NGHTTP2_PROTOCOL_ERROR")) throw new VLn(o.message);
                    }
                }
                throw o;
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            ege(t, n, i);
        }
    }
};

}
