import { YSv, ZSv } from "./A3u.js";
import { C2, Wj, nMn, xee } from "./De_3.js";
import { Yu } from "./browser.ts";
import { LDd } from "./exec-error.ts";
import { $8i, H8i, Lse, W0e, _X, wYs } from "./exec_pb.js";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
import { lde } from "./writable-iterable.ts";
var NDd, ODd, FDd, BDd, zro, UDd, $Dd, Kro, SC, HDd, kWi;
export { $Dd, BDd, FDd, HDd, Kro, NDd, ODd, SC, UDd, kWi, zro };
var __wakaru_aT_initialized = false;
export function aT() {
if (__wakaru_aT_initialized) return;
__wakaru_aT_initialized = true;
"use strict";
x(), Gp(), mde(), _X(), Yu(), LDd(), NDd = Wj("SimpleControlledExecManager"), ODd = "agentStoreConflict", FDd = C2("agent_exec.controlled.exec.duration_ms", {
    description: "Duration of controlled exec operations in milliseconds",
    labelNames: [
        "exec_case"
    ]
}), BDd = xee("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), zro = xee("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), UDd = 3e3, $Dd = {
    computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)",
    recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)"
}, Kro = class extends Error {
    constructor(e){
        super(e), this.name = "ControlledExecDisposedError";
    }
}, SC = class {
    constructor(e, t, n){
        this.exec = e, this.deserializeArgs = t, this.serializeResult = n;
    }
    handle(e, t) {
        const n = this.deserializeArgs(t);
        if (n === void 0) return;
        const { id: i, args: r } = n;
        async function* s(o) {
            const a = performance.now(), c = [], l = await o.exec.execute(e, r, {
                execId: t.execId,
                hookContextCollector: c,
                deliverAgentStoreConflictNotices: t.acceptHookAdditionalContexts === !0
            }), u = o.serializeResult(i, l);
            u.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - a)), c.length > 0 && (u.hookAdditionalContexts = c), yield u;
        }
        return s(this);
    }
}, HDd = class {
    constructor(e, t, n){
        this.exec = e, this.deserializeArgs = t, this.serializeStream = n;
    }
    handle(e, t) {
        const n = this.deserializeArgs(t);
        if (n === void 0) return;
        const { id: i, args: r } = n;
        async function* s(o) {
            const a = performance.now(), c = [], l = o.exec.execute(e, r, {
                execId: t.execId,
                hookContextCollector: c,
                deliverAgentStoreConflictNotices: t.acceptHookAdditionalContexts === !0
            });
            try {
                for await (const u of l){
                    const h = o.serializeStream(i, u);
                    h.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - a)), yield h;
                }
            } finally{
                const u = c.filter((h)=>h.hookEventName === ODd);
                u.length > 0 && (yield new W0e({
                    id: i,
                    hookAdditionalContexts: u
                }));
            }
        }
        return s(this);
    }
}, kWi = class yCm {
    constructor(t){
        this.handlers = [], this.runningExecs = new Map;
        const n = t?.includeGitStderrInThrows ?? !1;
        this.includeGitStderrInThrows = typeof n == "function" ? n : ()=>n;
    }
    register(t) {
        this.handlers.push(t);
    }
    handleControlMessage(t) {
        if (t.message.case === "abort") {
            const n = t.message.value.id, i = this.runningExecs.get(n);
            i && i();
        }
    }
    handle(t, n) {
        const [i, r] = t.withCancel();
        this.runningExecs.set(n.id, r);
        const s = n.message.case ?? "unknown";
        for (const l of this.handlers){
            const u = l.handle(i, n);
            if (u === void 0) continue;
            const h = u, p = nMn();
            let g;
            const f = ()=>{
                g = setTimeout(()=>{
                    p.write(new Lse({
                        message: {
                            case: "heartbeat",
                            value: new wYs({
                                id: n.id
                            })
                        }
                    })).then(f).catch(()=>{});
                }, UDd);
            };
            f();
            const v = performance.now();
            return (async ()=>{
                try {
                    for await (const y of h)await p.write(y);
                    await p.write(new Lse({
                        message: {
                            case: "streamClose",
                            value: new $8i({
                                id: n.id
                            })
                        }
                    })), BDd.increment(i, 1, {
                        exec_case: s
                    });
                } catch (y) {
                    if (y instanceof lde) return;
                    zro.increment(i, 1, {
                        exec_case: s
                    }), await p.write(new Lse({
                        message: {
                            case: "throw",
                            value: new H8i({
                                id: n.id,
                                error: y instanceof Error ? YSv(y.message, y, {
                                    includeStderr: this.includeGitStderrInThrows()
                                }) : "Unknown error",
                                stackTrace: y instanceof Error ? y.stack : void 0,
                                errorCode: ZSv(y)
                            })
                        }
                    }));
                } finally{
                    const y = performance.now() - v;
                    FDd.histogram(i, y, {
                        exec_case: s
                    }), clearTimeout(g), p.close(), this.runningExecs.delete(n.id), r();
                }
            })(), p;
        }
        this.runningExecs.delete(n.id), r();
        const o = n.message.case, a = (o === void 0 ? void 0 : $Dd[o]) ?? `No handler found for server message of type ${o}`;
        NDd.error(t, a, {
            messageCase: o
        }), zro.increment(t, 1, {
            exec_case: s
        });
        async function* c() {
            yield new Lse({
                message: {
                    case: "throw",
                    value: new H8i({
                        id: n.id,
                        error: a
                    })
                }
            }), yield new Lse({
                message: {
                    case: "streamClose",
                    value: new $8i({
                        id: n.id
                    })
                }
            });
        }
        return c();
    }
    static fromResources(t, n) {
        const i = new yCm(n);
        for (const [r, s] of t.entries())r.registerControlledImplementation(s, i);
        return i;
    }
};

}
