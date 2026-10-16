import { kl } from "./browser.ts";
import { jxe, kde } from "./controlled.ts";
import { Kni, Xse, qde } from "./exec_pb.js";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { $Lp, SS, hpe, iie, qst } from "./ipa.js";
import { E } from "./tslib.es6.js";
var kym, wym, SE, Cym;
export { Cym, SE, kym, wym };
var __wakaru_CA_initialized = false;
export function CA() {
if (__wakaru_CA_initialized) return;
__wakaru_CA_initialized = true;
"use strict";
E(), Ng(), iCe(), Xse(), kl(), kym = iie("ExecutorResource"), wym = hpe("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
}), SE = class {
    constructor(t, e, n){
        this.execManager = t, this.serializeArgs = e, this.deserializeResult = n;
    }
    async execute(t, e, n) {
        var i = [];
        try {
            const o = kde(i, SS(t.withName("ExecutorResource.execute"))), a = o.ctx;
            n?.execId !== void 0 && o.span.setAttribute("exec.id", n.execId);
            const l = qst(a), c = l ? new Kni(l) : void 0, u = this.execManager.createExecInstance(a, (_)=>{
                const b = this.serializeArgs(_, e);
                return new qde({
                    id: b.id,
                    message: b.message,
                    execId: n?.execId,
                    machineId: n?.machineId,
                    spanContext: c,
                    acceptHookAdditionalContexts: n?.hookContextCollector !== void 0
                });
            }), d = await $Lp(u);
            if (d === void 0) throw new Error("No exec result");
            let { firstItem: h, rest: p } = d;
            const g = (_)=>{
                if (n?.hookContextCollector !== void 0 && _.hookAdditionalContexts.length > 0) {
                    n.hookContextCollector.push(..._.hookAdditionalContexts);
                    for (const b of _.hookAdditionalContexts)wym.increment(a, 1, {
                        hook_event_name: b.hookEventName
                    });
                }
            };
            g(h);
            let f = this.deserializeResult(h);
            for(; f === void 0;){
                const _ = await $Lp(p);
                if (_ === void 0) throw new Error("No result value");
                h = _.firstItem, p = _.rest, g(h), f = this.deserializeResult(h);
            }
            return (async ()=>{
                try {
                    for await (const _ of p)g(_);
                } catch (_) {
                    kym.info(a, "Ignoring exec stream shutdown during detached drain", {
                        error: _
                    });
                }
            })().catch(()=>{}), f;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            jxe(i, r, s);
        }
    }
}, Cym = class {
    constructor(t, e, n){
        this.execManager = t, this.serializeArgs = e, this.deserializeStream = n;
    }
    async *execute(t, e, n) {
        var i = [];
        try {
            const a = kde(i, SS(t.withName("StreamExecutorResource.execute"))).ctx, l = qst(a), c = l ? new Kni(l) : void 0, u = this.execManager.createExecInstance(a, (d)=>{
                const h = this.serializeArgs(d, e);
                return new qde({
                    id: h.id,
                    message: h.message,
                    execId: n?.execId,
                    machineId: n?.machineId,
                    spanContext: c,
                    acceptHookAdditionalContexts: n?.hookContextCollector !== void 0 || n?.deliverAgentStoreConflictNotices === !0
                });
            });
            for await (const d of u){
                n?.hookContextCollector !== void 0 && d.hookAdditionalContexts.length > 0 && n.hookContextCollector.push(...d.hookAdditionalContexts);
                const h = this.deserializeStream(d);
                h !== void 0 && (yield h);
            }
        } catch (o) {
            var r = o, s = !0;
        } finally{
            jxe(i, r, s);
        }
    }
};

}
