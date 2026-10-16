import { kl } from "./browser.ts";
import { mym } from "./exec-error.ts";
import { Bve, E1r, T1r, Xse, d9o, p5e } from "./exec_pb.js";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { U4, hpe, iSi, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Z0e } from "./writable-iterable.ts";
import { KF1, XF1 } from "./yBp.js";
var gym, fym, vym, _ym, t7a, bym, yym, n7a, yE, Sym, YKr;
export { Sym, YKr, _ym, bym, fym, gym, n7a, t7a, vym, yE, yym };
var __wakaru_wA_initialized = false;
export function wA() {
if (__wakaru_wA_initialized) return;
__wakaru_wA_initialized = true;
"use strict";
E(), Ng(), iCe(), Xse(), kl(), mym(), gym = iie("SimpleControlledExecManager"), fym = "agentStoreConflict", vym = U4("agent_exec.controlled.exec.duration_ms", {
    description: "Duration of controlled exec operations in milliseconds",
    labelNames: [
        "exec_case"
    ]
}), _ym = hpe("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), t7a = hpe("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), bym = 3e3, yym = {
    computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)",
    recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)"
}, n7a = class extends Error {
    constructor(t){
        super(t), this.name = "ControlledExecDisposedError";
    }
}, yE = class {
    constructor(t, e, n){
        this.exec = t, this.deserializeArgs = e, this.serializeResult = n;
    }
    handle(t, e) {
        const n = this.deserializeArgs(e);
        if (n === void 0) return;
        const { id: i, args: r } = n;
        async function* s(o) {
            const a = performance.now(), l = [], c = await o.exec.execute(t, r, {
                execId: e.execId,
                hookContextCollector: l,
                deliverAgentStoreConflictNotices: e.acceptHookAdditionalContexts === !0
            }), u = o.serializeResult(i, c);
            u.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - a)), l.length > 0 && (u.hookAdditionalContexts = l), yield u;
        }
        return s(this);
    }
}, Sym = class {
    constructor(t, e, n){
        this.exec = t, this.deserializeArgs = e, this.serializeStream = n;
    }
    handle(t, e) {
        const n = this.deserializeArgs(e);
        if (n === void 0) return;
        const { id: i, args: r } = n;
        async function* s(o) {
            const a = performance.now(), l = [], c = o.exec.execute(t, r, {
                execId: e.execId,
                hookContextCollector: l,
                deliverAgentStoreConflictNotices: e.acceptHookAdditionalContexts === !0
            });
            try {
                for await (const u of c){
                    const d = o.serializeStream(i, u);
                    d.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - a)), yield d;
                }
            } finally{
                const u = l.filter((d)=>d.hookEventName === fym);
                u.length > 0 && (yield new p5e({
                    id: i,
                    hookAdditionalContexts: u
                }));
            }
        }
        return s(this);
    }
}, YKr = class rPb {
    constructor(e){
        this.handlers = [], this.runningExecs = new Map;
        const n = e?.includeGitStderrInThrows ?? !1;
        this.includeGitStderrInThrows = typeof n == "function" ? n : ()=>n;
    }
    register(e) {
        this.handlers.push(e);
    }
    handleControlMessage(e) {
        if (e.message.case === "abort") {
            const n = e.message.value.id, i = this.runningExecs.get(n);
            i && i();
        }
    }
    handle(e, n) {
        const [i, r] = e.withCancel();
        this.runningExecs.set(n.id, r);
        const s = n.message.case ?? "unknown";
        for (const c of this.handlers){
            const u = c.handle(i, n);
            if (u === void 0) continue;
            const d = u, h = iSi();
            let p;
            const g = ()=>{
                p = setTimeout(()=>{
                    h.write(new Bve({
                        message: {
                            case: "heartbeat",
                            value: new d9o({
                                id: n.id
                            })
                        }
                    })).then(g).catch(()=>{});
                }, bym);
            };
            g();
            const f = performance.now();
            return (async ()=>{
                try {
                    for await (const b of d)await h.write(b);
                    await h.write(new Bve({
                        message: {
                            case: "streamClose",
                            value: new T1r({
                                id: n.id
                            })
                        }
                    })), _ym.increment(i, 1, {
                        exec_case: s
                    });
                } catch (b) {
                    if (b instanceof Z0e) return;
                    t7a.increment(i, 1, {
                        exec_case: s
                    }), await h.write(new Bve({
                        message: {
                            case: "throw",
                            value: new E1r({
                                id: n.id,
                                error: b instanceof Error ? KF1(b.message, b, {
                                    includeStderr: this.includeGitStderrInThrows()
                                }) : "Unknown error",
                                stackTrace: b instanceof Error ? b.stack : void 0,
                                errorCode: XF1(b)
                            })
                        }
                    }));
                } finally{
                    const b = performance.now() - f;
                    vym.histogram(i, b, {
                        exec_case: s
                    }), clearTimeout(p), h.close(), this.runningExecs.delete(n.id), r();
                }
            })(), h;
        }
        this.runningExecs.delete(n.id), r();
        const o = n.message.case, a = (o === void 0 ? void 0 : yym[o]) ?? `No handler found for server message of type ${o}`;
        gym.error(e, a, {
            messageCase: o
        }), t7a.increment(e, 1, {
            exec_case: s
        });
        async function* l() {
            yield new Bve({
                message: {
                    case: "throw",
                    value: new E1r({
                        id: n.id,
                        error: a
                    })
                }
            }), yield new Bve({
                message: {
                    case: "streamClose",
                    value: new T1r({
                        id: n.id
                    })
                }
            });
        }
        return l();
    }
    static fromResources(e, n) {
        const i = new rPb(n);
        for (const [r, s] of e.entries())r.registerControlledImplementation(s, i);
        return i;
    }
};

}
