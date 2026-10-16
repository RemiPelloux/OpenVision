"use strict";
function n(e) {
    const t = e.replace(/\\/g, "/").split("/"), r = t[t.length - 1] ?? "";
    return "SKILL.md" === r && t.length >= 2 ? t[t.length - 2] ?? "" : r;
}
require.d(exports, {
    rFE: ()=>Et,
    jnL: ()=>bt,
    riQ: ()=>wt,
    acw: ()=>vt,
    iKs: ()=>_t,
    dSv: ()=>Be,
    yJV: ()=>er,
    yWW: ()=>bn,
    R10: ()=>et,
    sn5: ()=>Ye,
    dwX: ()=>Pe,
    gl4: ()=>ft,
    FHy: ()=>Qt,
    J6s: ()=>jt,
    cME: ()=>Lt.c,
    Jdl: ()=>Bt,
    YH2: ()=>rt,
    y7k: ()=>mn,
    f9i: ()=>gn,
    ha6: ()=>Re,
    orm: ()=>ke,
    Eyz: ()=>nr,
    CWo: ()=>tn.C,
    n6O: ()=>x,
    Thz: ()=>ln.Th,
    mHV: ()=>ln.mH,
    RZw: ()=>ln.RZ,
    Pwd: ()=>pn.Pw,
    qLf: ()=>We.qL,
    nRD: ()=>En,
    VMj: ()=>Cn,
    HwP: ()=>Sr,
    KHj: ()=>Rn.K,
    iul: ()=>Oe,
    YhQ: ()=>Fe,
    OkD: ()=>Ge,
    QCH: ()=>fn,
    kUN: ()=>Ct,
    sOX: ()=>tt,
    IGV: ()=>cr,
    iZk: ()=>st,
    uwM: ()=>$e,
    d_R: ()=>je,
    qwl: ()=>Le,
    eG3: ()=>Qe,
    e7l: ()=>Ue,
    ryB: ()=>ot,
    $bB: ()=>an,
    uaw: ()=>Kr,
    mA: ()=>Vr,
    Zg0: ()=>Ce,
    hv_: ()=>vn,
    RpG: ()=>it,
    vr_: ()=>yr,
    w4j: ()=>at,
    zyy: ()=>ze,
    Qw5: ()=>It,
    IjH: ()=>gt,
    IGA: ()=>lt,
    PEk: ()=>nn,
    I2x: ()=>Sn,
    oGr: ()=>on,
    jH1: ()=>ut,
    u8v: ()=>dt,
    UOG: ()=>kn,
    bob: ()=>ht,
    zNu: ()=>cn,
    _1u: ()=>Pt,
    Yg2: ()=>Rt,
    anv: ()=>Mt,
    rn8: ()=>Nt,
    bL4: ()=>yt,
    ODj: ()=>$t,
    Lxn: ()=>Dt,
    Yib: ()=>Ot,
    Hvh: ()=>Tt,
    ggl: ()=>qt,
    pY2: ()=>Ut,
    sfj: ()=>Jt,
    JP: ()=>br,
    mku: ()=>xt,
    TGP: ()=>Gt,
    Nw4: ()=>en,
    TIN: ()=>hn,
    TZ: ()=>Er,
    PiX: ()=>Ir,
    ghi: ()=>Cr,
    Rdb: ()=>kr,
    qNu: ()=>xr,
    T0F: ()=>Tr,
    ohZ: ()=>Rr,
    rSS: ()=>Tn,
    _As: ()=>tr,
    mlu: ()=>Ft,
    pq5: ()=>Yr,
    Mfc: ()=>rr,
    MZM: ()=>Zr,
    VNS: ()=>Te,
    oAs: ()=>sn,
    GuN: ()=>rn,
    qkk: ()=>qr,
    wve: ()=>Dr,
    ujx: ()=>u,
    kQm: ()=>l,
    ci8: ()=>n,
    OOW: ()=>c,
    XPF: ()=>un,
    rz0: ()=>An,
    ZnQ: ()=>_n,
    vx3: ()=>nt,
    N1y: ()=>St,
    NSZ: ()=>Ze,
    sC3: ()=>Bn,
    TQC: ()=>He,
    Lnu: ()=>Or
});
const s = "Description is required", o = "Failed to read skill file: ", i = "Invalid skill frontmatter: ";
function a(e) {
    return e instanceof Error ? e.message : String(e);
}
function c(e) {
    return o + a(e);
}
function l(e) {
    return i + a(e);
}
function u(e, t) {
    return e || t ? void 0 : s;
}
new Set([
    "EACCES",
    "EPERM",
    "ENOENT",
    "ENOTDIR",
    "EISDIR",
    "ELOOP",
    "ENAMETOOLONG"
]);
var d = require("./module-37949.js"), p = require("./module-46144.js"), m = require("./module-55094.js"), h = require("./module-91434.js"), f = require("./module-95339.js");
const g = / \[git: ([^\]]*)\]/, y = 2048;
function w(e, t, r) {
    if ("object" != typeof t || null === t) return e;
    if (g.test(e)) return e;
    const n = t, s = [];
    if ("string" == typeof n.gitErrorCode && n.gitErrorCode.length > 0 && s.push(`gitErrorCode=${n.gitErrorCode}`), "number" == typeof n.exitCode && Number.isFinite(n.exitCode) && s.push(`exitCode=${n.exitCode}`), 0 === s.length) return e;
    let o = `${e} [git: ${s.join(" ")}]`;
    var i;
    return !0 === r?.includeStderr && "string" == typeof n.stderr && n.stderr.length > 0 && (o += `\n--- git stderr ---\n${i = (0, f.ix)(n.stderr), i.length <= y ? i : `${i.slice(0, y)}… [truncated to 2048 chars]`}`), o;
}
const v = (0, d.h)("SimpleControlledExecManager"), _ = (0, p.v5)("agent_exec.controlled.exec.duration_ms", {
    description: "Duration of controlled exec operations in milliseconds",
    labelNames: [
        "exec_case"
    ]
}), A = (0, p.Pu)("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), S = (0, p.Pu)("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), b = {
    computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)",
    recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)"
};
class E extends Error {
    constructor(e){
        super(e), this.name = "ControlledExecDisposedError";
    }
}
function I(e) {
    return e instanceof E ? "EXEC_BACKEND_UNAVAILABLE" : e instanceof Error && "AgentExecStreamStartTimeoutError" === e.name ? "AGENT_EXEC_STREAM_START_TIMEOUT" : void 0;
}
class C {
    constructor(e, t, r){
        this.exec = e, this.deserializeArgs = t, this.serializeResult = r;
    }
    handle(e, t) {
        const r = this.deserializeArgs(t);
        if (void 0 === r) return;
        const { id: n, args: s } = r;
        return async function*(r) {
            const o = performance.now(), i = [], a = await r.exec.execute(e, s, {
                execId: t.execId,
                hookContextCollector: i,
                deliverAgentStoreConflictNotices: !0 === t.acceptHookAdditionalContexts
            }), c = r.serializeResult(n, a);
            c.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - o)), i.length > 0 && (c.hookAdditionalContexts = i), yield c;
        }(this);
    }
}
class k {
    constructor(e, t, r){
        this.exec = e, this.deserializeArgs = t, this.serializeStream = r;
    }
    handle(e, t) {
        const r = this.deserializeArgs(t);
        if (void 0 === r) return;
        const { id: n, args: s } = r;
        return async function*(r) {
            const o = performance.now(), i = [], a = r.exec.execute(e, s, {
                execId: t.execId,
                hookContextCollector: i,
                deliverAgentStoreConflictNotices: !0 === t.acceptHookAdditionalContexts
            });
            try {
                for await (const e of a){
                    const t = r.serializeStream(n, e);
                    t.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - o)), yield t;
                }
            } finally{
                const e = i.filter((e)=>"agentStoreConflict" === e.hookEventName);
                e.length > 0 && (yield new m.yT({
                    id: n,
                    hookAdditionalContexts: e
                }));
            }
        }(this);
    }
}
class x {
    constructor(e){
        this.handlers = [], this.runningExecs = new Map;
        const t = e?.includeGitStderrInThrows ?? !1;
        this.includeGitStderrInThrows = "function" == typeof t ? t : ()=>t;
    }
    register(e) {
        this.handlers.push(e);
    }
    handleControlMessage(e) {
        if ("abort" === e.message.case) {
            const t = e.message.value.id, r = this.runningExecs.get(t);
            r && r();
        }
    }
    handle(e, t) {
        const [r, n] = e.withCancel();
        this.runningExecs.set(t.id, n);
        const s = t.message.case ?? "unknown";
        for (const e of this.handlers){
            const o = e.handle(r, t);
            if (void 0 === o) continue;
            const i = o, a = (0, h.Jt)();
            let c;
            const l = ()=>{
                c = setTimeout(()=>{
                    a.write(new m.$Y({
                        message: {
                            case: "heartbeat",
                            value: new m.VA({
                                id: t.id
                            })
                        }
                    })).then(l).catch(()=>{});
                }, 3e3);
            };
            l();
            const u = performance.now();
            return (async ()=>{
                try {
                    for await (const e of i)await a.write(e);
                    await a.write(new m.$Y({
                        message: {
                            case: "streamClose",
                            value: new m.D9({
                                id: t.id
                            })
                        }
                    })), A.increment(r, 1, {
                        exec_case: s
                    });
                } catch (e) {
                    if (e instanceof h.W2) return;
                    S.increment(r, 1, {
                        exec_case: s
                    }), await a.write(new m.$Y({
                        message: {
                            case: "throw",
                            value: new m.Fu({
                                id: t.id,
                                error: e instanceof Error ? w(e.message, e, {
                                    includeStderr: this.includeGitStderrInThrows()
                                }) : "Unknown error",
                                stackTrace: e instanceof Error ? e.stack : void 0,
                                errorCode: I(e)
                            })
                        }
                    }));
                } finally{
                    const e = performance.now() - u;
                    _.histogram(r, e, {
                        exec_case: s
                    }), clearTimeout(c), a.close(), this.runningExecs.delete(t.id), n();
                }
            })(), a;
        }
        this.runningExecs.delete(t.id), n();
        const o = t.message.case, i = (void 0 === o ? void 0 : b[o]) ?? `No handler found for server message of type ${o}`;
        return v.error(e, i, {
            messageCase: o
        }), S.increment(e, 1, {
            exec_case: s
        }), async function*() {
            yield new m.$Y({
                message: {
                    case: "throw",
                    value: new m.Fu({
                        id: t.id,
                        error: i
                    })
                }
            }), yield new m.$Y({
                message: {
                    case: "streamClose",
                    value: new m.D9({
                        id: t.id
                    })
                }
            });
        }();
    }
    static fromResources(e, t) {
        const r = new x(t);
        for (const [t, n] of e.entries())t.registerControlledImplementation(n, r);
        return r;
    }
}
var T = require("./module-98875.js");
async function R(e) {
    const t = e[Symbol.asyncIterator](), r = await t.next();
    if (r.done) return;
    const n = {
        async *[Symbol.asyncIterator] () {
            for(;;){
                const e = await t.next();
                if (e.done) return;
                yield e.value;
            }
        }
    };
    return {
        firstItem: r.value,
        rest: n
    };
}
var B = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, P = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const J = (0, d.h)("ExecutorResource"), M = (0, p.Pu)("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
});
class q {
    constructor(e, t, r){
        this.execManager = e, this.serializeArgs = t, this.deserializeResult = r;
    }
    async execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = B(n, (0, T.VI)(e.withName("ExecutorResource.execute")), !1), o = s.ctx;
            void 0 !== r?.execId && s.span.setAttribute("exec.id", r.execId);
            const i = (0, T.mJ)(o), a = i ? new m.Kg(i) : void 0, c = this.execManager.createExecInstance(o, (e)=>{
                const n = this.serializeArgs(e, t);
                return new m.Ye({
                    id: n.id,
                    message: n.message,
                    execId: r?.execId,
                    machineId: r?.machineId,
                    spanContext: a,
                    acceptHookAdditionalContexts: void 0 !== r?.hookContextCollector
                });
            }), l = await R(c);
            if (void 0 === l) throw new Error("No exec result");
            let { firstItem: u, rest: d } = l;
            const p = (e)=>{
                if (void 0 !== r?.hookContextCollector && e.hookAdditionalContexts.length > 0) {
                    r.hookContextCollector.push(...e.hookAdditionalContexts);
                    for (const t of e.hookAdditionalContexts)M.increment(o, 1, {
                        hook_event_name: t.hookEventName
                    });
                }
            };
            p(u);
            let h = this.deserializeResult(u);
            for(; void 0 === h;){
                const e = await R(d);
                if (void 0 === e) throw new Error("No result value");
                u = e.firstItem, d = e.rest, p(u), h = this.deserializeResult(u);
            }
            return (async ()=>{
                try {
                    for await (const e of d)p(e);
                } catch (e) {
                    J.info(o, "Ignoring exec stream shutdown during detached drain", {
                        error: e
                    });
                }
            })().catch(()=>{}), h;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            P(n);
        }
    }
}
class D {
    constructor(e, t, r){
        this.execManager = e, this.serializeArgs = t, this.deserializeStream = r;
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = B(n, (0, T.VI)(e.withName("StreamExecutorResource.execute")), !1).ctx, o = (0, T.mJ)(s), i = o ? new m.Kg(o) : void 0, a = this.execManager.createExecInstance(s, (e)=>{
                const n = this.serializeArgs(e, t);
                return new m.Ye({
                    id: n.id,
                    message: n.message,
                    execId: r?.execId,
                    machineId: r?.machineId,
                    spanContext: i,
                    acceptHookAdditionalContexts: void 0 !== r?.hookContextCollector || !0 === r?.deliverAgentStoreConflictNotices
                });
            });
            for await (const e of a){
                void 0 !== r?.hookContextCollector && e.hookAdditionalContexts.length > 0 && r.hookContextCollector.push(...e.hookAdditionalContexts);
                const t = this.deserializeStream(e);
                void 0 !== t && (yield t);
            }
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            P(n);
        }
    }
}
const O = "agent-store-conflict-executor", N = "agent-store-conflict-notice-executor", F = "background-shell-executor", U = "canvas-diagnostics-executor", L = "computer-use-executor", $ = "conversation-search-executor", Q = "delete-executor", j = "diagnostics-executor", G = "fetch-executor", H = "force-background-shell-executor", z = "force-background-subagent-executor", W = "git-diff-executor", V = "grep-executor", K = "hook-executor", Y = "list-mcp-resources-executor", Z = "ls-executor", X = "mcp-allowlist-precheck-executor", ee = "mcp-executor", te = "mcp-state-executor", re = "mini-swe-agent-bash-executor", ne = "pi-bash-executor", se = "pi-edit-executor", oe = "pi-find-executor", ie = "pi-grep-executor", ae = "pi-ls-executor", ce = "pi-read-executor", le = "pi-write-executor", ue = "read-executor", de = "read-mcp-resource-executor", pe = "record-screen-executor", me = "redacted-read-executor", he = "request-context-executor", fe = "shell-allowlist-precheck-executor", ge = "shell-executor", ye = "shell-stream-executor", we = "smart-mode-classifier-executor", ve = "subagent-await-executor", _e = "subagent-executor", Ae = "web-fetch-allowlist-precheck-executor", Se = "write-background-shell-input-executor", be = "write-executor", Ee = "@anysphere/agent-exec/resource/";
function Ie(e) {
    return Symbol.for(`${Ee}${e}`);
}
function Ce(e, t, r) {
    return {
        name: e,
        symbol: Ie(e),
        remoteImplementation: t,
        registerControlledImplementation: r
    };
}
class ke {
    constructor(e){
        this.remoteExecManager = e;
    }
    get(e) {
        return e.remoteImplementation(this.remoteExecManager);
    }
}
class xe {
    constructor(e, t){
        this.resource = e, this.value = t;
    }
}
function Te(e, t) {
    return [
        e,
        t
    ];
}
class Re {
    constructor(){
        this.resources = new Map;
    }
    register(e, t) {
        this.resources.set(e.symbol, new xe(e, t));
    }
    get(e) {
        return this.resources.get(e.symbol)?.value;
    }
    entries() {
        return Array.from(this.resources.values()).map((e)=>[
                e.resource,
                e.value
            ]);
    }
}
class Be {
    constructor(e, t){
        this.baseAccessor = e, this.localResources = new Map;
        for (const [e, r] of t)this.localResources.set(e.symbol, {
            resource: e,
            implementation: r
        });
    }
    get(e) {
        const t = this.localResources.get(e.symbol);
        return t ? t.implementation : this.baseAccessor.get(e);
    }
}
class Pe {
    constructor(e, t){
        this.remoteAccessor = e, this.localResources = new Map;
        for (const [e, r] of t)this.localResources.set(e.symbol, {
            resource: e,
            implementation: r
        });
    }
    get(e) {
        const t = this.localResources.get(e.symbol);
        return t ? t.implementation : this.remoteAccessor.get(e);
    }
    *entries() {
        for (const { resource: e, implementation: t } of this.localResources.values())yield [
            e,
            t
        ];
        for (const e of this.remoteAccessor.entries())this.localResources.has(e[0].symbol) || (yield e);
    }
}
function Je(e) {
    return function(t, r) {
        return new m.Ye({
            id: t,
            message: {
                case: e,
                value: r
            }
        });
    };
}
function Me(e) {
    return (t)=>{
        if (t.message.case === e) return t.message.value;
    };
}
function qe(e) {
    return function(t, r) {
        const n = {
            case: e,
            value: r
        };
        return new m.yT({
            id: t,
            message: n
        });
    };
}
function De(e) {
    return function(t) {
        if (t.message.case === e) return {
            id: t.id,
            args: t.message.value
        };
    };
}
const Oe = Ce(O, (e)=>new q(e, Je("agentStoreConflictArgs"), Me("agentStoreConflictResult")), (e, t)=>{
    t.register(new C(e, De("agentStoreConflictArgs"), qe("agentStoreConflictResult")));
});
new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded",
    "gap"
]);
class Ne {
    async execute(e, t) {
        return "ack" === t.op ? {
            kind: "acked",
            count: 0
        } : "release" === t.op ? {
            kind: "released",
            count: 0
        } : "noteDeferredEagerWrittenPaths" === t.op ? {
            kind: "noted",
            count: 0
        } : {
            kind: "not-applicable"
        };
    }
}
const Fe = Ce(N, (e)=>new Ne, (e, t)=>{});
async function Ue(e, t, r, n) {
    return await e.execute(t, {
        op: "syncAndPeek",
        ...void 0 !== r?.conversationId ? {
            conversationId: r.conversationId
        } : {},
        ...void 0 !== r?.writtenPaths ? {
            writtenPaths: r.writtenPaths
        } : {},
        ...void 0 !== r?.timeoutMs ? {
            timeoutMs: r.timeoutMs
        } : {},
        ...!0 === r?.eager ? {
            eager: !0
        } : {}
    }, n);
}
async function Le(e, t, r, n) {
    return await e.execute(t, {
        op: "peek",
        ...void 0 !== r?.conversationId ? {
            conversationId: r.conversationId
        } : {}
    }, n);
}
async function $e(e, t, r, n, s) {
    0 !== r.length && await e.execute(t, {
        op: "ack",
        eventIds: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, s);
}
async function Qe(e, t, r, n, s) {
    0 !== r.length && await e.execute(t, {
        op: "release",
        eventIds: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, s);
}
async function je(e, t, r, n, s) {
    0 !== r.length && await e.execute(t, {
        op: "noteDeferredEagerWrittenPaths",
        writtenPaths: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, s);
}
const Ge = Ce(F, (e)=>new q(e, Je("backgroundShellSpawnArgs"), Me("backgroundShellSpawnResult")), (e, t)=>{
    t.register(new C(e, De("backgroundShellSpawnArgs"), qe("backgroundShellSpawnResult")));
}), He = Ce(Se, (e)=>new q(e, Je("writeShellStdinArgs"), Me("writeShellStdinResult")), (e, t)=>{
    t.register(new C(e, De("writeShellStdinArgs"), qe("writeShellStdinResult")));
});
function ze(e) {
    const t = {};
    return "string" == typeof e.title && e.title.trim().length > 0 && (t.title = e.title), "string" == typeof e.cwd && e.cwd.trim().length > 0 && (t.cwd = e.cwd), "number" == typeof e.startTimeMs && Number.isFinite(e.startTimeMs) && e.startTimeMs > 0 && (t.startTimeMs = String(Math.floor(e.startTimeMs))), Object.keys(t).length > 0 ? t : void 0;
}
var We = require("./module-11491.js");
function Ve(e, t) {
    if (e.some((e)=>e.conversationId === t.conversationId && e.id === t.id)) return {
        queue: [
            ...e
        ]
    };
    const r = {
        ...t
    };
    if (void 0 === t.groupKey) return {
        queue: [
            ...e,
            r
        ]
    };
    const n = e.findIndex((e)=>e.conversationId === t.conversationId && e.groupKey === t.groupKey);
    if (-1 === n) return {
        queue: [
            ...e,
            r
        ]
    };
    const s = [
        ...e
    ], o = s[n];
    return s[n] = r, {
        queue: s,
        replaced: o
    };
}
class Ke {
    constructor(){
        this.pending = [], this.inFlightById = new Map, this.acceptedKeys = new Set, this.suppressedIdsByConversation = new Map, this.revision = 0;
    }
    acceptedKey(e, t) {
        return `${e}\0${t}`;
    }
    enqueue(e) {
        const t = e.id.trim(), r = this.acceptedKey(e.conversationId, t);
        if (0 === t.length || this.acceptedKeys.has(r)) return;
        if (this.suppressedIdsByConversation.get(e.conversationId)?.has(t)) return;
        this.acceptedKeys.add(r);
        const { queue: n, replaced: s } = Ve(this.pending, {
            ...e,
            id: t
        });
        this.pending = n, s && this.acceptedKeys.delete(this.acceptedKey(s.conversationId, s.id)), this.revision++;
    }
    pull(e) {
        const t = this.suppressedIdsByConversation.get(e), r = [], n = [];
        let s = 0;
        for (const o of this.pending)o.conversationId === e ? t?.has(o.id) ? (this.acceptedKeys.delete(this.acceptedKey(e, o.id)), s++) : (r.push(o), this.inFlightById.set(o.id, o)) : n.push(o);
        return (r.length > 0 || s > 0) && (this.pending = n, this.revision++), r.map((e)=>({
                ...e
            }));
    }
    pullAll() {
        return [
            ...new Set(this.pending.map((e)=>e.conversationId))
        ].flatMap((e)=>this.pull(e));
    }
    ack(e) {
        const t = [];
        for (const r of e){
            const e = r.trim(), n = this.inFlightById.get(e);
            n && (this.acceptedKeys.delete(this.acceptedKey(n.conversationId, e)), t.push(n)), this.inFlightById.delete(e);
        }
        return t;
    }
    nack(e, t) {
        const r = new Set(e.map((e)=>e.trim())), n = [];
        for (const [e, t] of this.inFlightById)r.has(e) && (n.push(t), this.inFlightById.delete(e));
        if (!t.requeue) {
            for (const e of n)this.acceptedKeys.delete(this.acceptedKey(e.conversationId, e.id));
            return;
        }
        if (0 === n.length) return;
        let s = n;
        for (const e of this.pending){
            const { queue: t, replaced: r } = Ve(s, e);
            s = t, r && this.acceptedKeys.delete(this.acceptedKey(r.conversationId, r.id));
        }
        this.pending = s, this.revision++;
    }
    suppress(e, t) {
        const r = t.trim();
        if (0 === r.length) return;
        const n = this.suppressedIdsByConversation.get(e) ?? new Set;
        n.add(r), this.suppressedIdsByConversation.set(e, n);
        let s = !1;
        const o = this.pending.length;
        this.pending = this.pending.filter((t)=>t.conversationId !== e || t.id !== r), this.pending.length !== o && (this.acceptedKeys.delete(this.acceptedKey(e, r)), s = !0);
        const i = this.inFlightById.get(r);
        i && i.conversationId === e && (this.inFlightById.delete(r), this.acceptedKeys.delete(this.acceptedKey(e, r)), s = !0), s && this.revision++;
    }
    unsuppress(e, t) {
        const r = this.suppressedIdsByConversation.get(e);
        r?.delete(t.trim()) && 0 === r.size && this.suppressedIdsByConversation.delete(e);
    }
    unsuppressId(e) {
        const t = e.trim();
        for (const e of this.suppressedIdsByConversation.keys())this.unsuppress(e, t);
    }
    clear(e) {
        let t = !1;
        const r = this.pending.length;
        this.pending = this.pending.filter((t)=>t.conversationId !== e), this.pending.length !== r && (t = !0);
        for (const [r, n] of this.inFlightById)n.conversationId === e && (this.inFlightById.delete(r), t = !0);
        const n = this.acceptedKey(e, "");
        for (const e of this.acceptedKeys)e.startsWith(n) && (this.acceptedKeys.delete(e), t = !0);
        const s = this.suppressedIdsByConversation.delete(e);
        (t || s) && this.revision++;
    }
    hasPending(e) {
        return void 0 === e ? this.pending.length > 0 : this.pending.some((t)=>t.conversationId === e);
    }
    hasPendingMatching(e, t) {
        return this.pending.some((r)=>r.conversationId === e && t(r.payload));
    }
    getPendingCount() {
        return this.pending.length;
    }
    getUnsettledCount() {
        return this.acceptedKeys.size;
    }
    getRevision() {
        return this.revision;
    }
}
const Ye = "local";
function Ze(e) {
    if (void 0 !== e) switch(e){
        case "task_finished":
            return We.U6.TASK_FINISHED;
        case "task_progress":
            return We.U6.TASK_PROGRESS;
        default:
            return e;
    }
}
function Xe(e, t) {
    return !t || (!t.kind || e.kind === t.kind) && (!t.state || e.state === t.state) && (!t.ownerId || e.ownerId === t.ownerId);
}
class et {
    constructor(){
        this.records = new Map, this.wakeups = new Ke;
    }
    upsertWork(e) {
        this.records.set(e.id, e);
    }
    clearWork(e) {
        const t = this.records.delete(e);
        return this.wakeups.unsuppressId(e), t;
    }
    abortWork(e) {
        const t = this.records.get(e);
        return !!t && (t.abort && t.abort(), this.records.delete(e), this.wakeups.unsuppressId(e), !0);
    }
    hasRunningWork(e) {
        for (const t of this.records.values())if ("running" === t.state && Xe(t, e)) return !0;
        return !1;
    }
    abortAllWork(e) {
        let t = 0;
        for (const r of [
            ...this.records.values()
        ])Xe(r, e) && (r.abort && r.abort(), t++, this.records.delete(r.id), this.wakeups.unsuppressId(r.id));
        return t;
    }
    listWork(e) {
        const t = [];
        for (const r of this.records.values())Xe(r, e) && t.push({
            id: r.id,
            kind: r.kind,
            state: r.state,
            ownerId: r.ownerId,
            hasAbort: Boolean(r.abort),
            metadata: r.metadata
        });
        return t;
    }
    enqueue(e) {
        this.wakeups.enqueue(e);
    }
    pull(e) {
        return this.wakeups.pull(e);
    }
    ack(e) {
        return this.wakeups.ack(e);
    }
    nack(e, t) {
        this.wakeups.nack(e, t);
    }
    suppress(e, t) {
        this.wakeups.suppress(e, t);
    }
    enqueueCompletion(e) {
        this.enqueue({
            conversationId: Ye,
            id: e.taskId,
            payload: e,
            source: e.kind
        });
    }
    drainCompletions() {
        const e = this.wakeups.pullAll();
        return this.ack(e.map((e)=>e.id)), e.map((e)=>e.payload);
    }
    hasPendingCompletions(e) {
        return this.wakeups.hasPending(e);
    }
    markAwaitedCompletion(e) {
        this.suppress(Ye, e);
    }
    getWakeupRevision() {
        return this.wakeups.getRevision();
    }
}
const tt = Ce(U, (e)=>new q(e, Je("canvasDiagnosticsArgs"), Me("canvasDiagnosticsResult")), (e, t)=>{
    t.register(new C(e, De("canvasDiagnosticsArgs"), qe("canvasDiagnosticsResult")));
});
class rt extends Error {
    constructor(e){
        super(e), this.code = "NO_GIT_API", this.name = "NoGitAPIError", Error.captureStackTrace && Error.captureStackTrace(this, rt);
    }
}
function nt(e) {
    const t = {
        mouse_move: 0,
        click: 0,
        mouse_down: 0,
        mouse_up: 0,
        drag: 0,
        scroll: 0,
        type: 0,
        key: 0,
        wait: 0,
        screenshot: 0,
        cursor_position: 0
    };
    for (const r of e)switch(r.action.case){
        case "mouseMove":
            t.mouse_move += 1;
            break;
        case "click":
            t.click += 1;
            break;
        case "mouseDown":
            t.mouse_down += 1;
            break;
        case "mouseUp":
            t.mouse_up += 1;
            break;
        case "drag":
            t.drag += 1;
            break;
        case "scroll":
            t.scroll += 1;
            break;
        case "type":
            t.type += 1;
            break;
        case "key":
            t.key += 1;
            break;
        case "wait":
            t.wait += 1;
            break;
        case "screenshot":
            t.screenshot += 1;
            break;
        case "cursorPosition":
            t.cursor_position += 1;
    }
    return {
        actionCount: e.length,
        actionCounts: t
    };
}
const st = Ce(L, (e)=>new q(e, Je("computerUseArgs"), Me("computerUseResult")), (e, t)=>{
    t.register(new C(e, De("computerUseArgs"), qe("computerUseResult")));
}), ot = Ce($, (e)=>new q(e, Je("conversationSearchArgs"), Me("conversationSearchResult")), (e, t)=>{
    t.register(new C(e, De("conversationSearchArgs"), qe("conversationSearchResult")));
}), it = Ce(Q, (e)=>new q(e, Je("deleteArgs"), Me("deleteResult")), (e, t)=>{
    t.register(new C(e, De("deleteArgs"), qe("deleteResult")));
}), at = Ce(j, (e)=>new q(e, Je("diagnosticsArgs"), Me("diagnosticsResult")), (e, t)=>{
    t.register(new C(e, De("diagnosticsArgs"), qe("diagnosticsResult")));
});
var ct = require("./module-33002.js");
(0, ct.cF)(Symbol("execConversationId"), void 0), (0, ct.cF)(Symbol("execRequestId"), void 0), (0, ct.cF)(Symbol("execBrowserOperationSource"), void 0);
const lt = Ce(G, (e)=>new q(e, Je("fetchArgs"), Me("fetchResult")), (e, t)=>{
    t.register(new C(e, De("fetchArgs"), qe("fetchResult")));
}), ut = Ce(W, (e)=>new q(e, Je("gitDiffRequest"), Me("gitDiffResponse")), (e, t)=>{
    t.register(new C(e, De("gitDiffRequest"), qe("gitDiffResponse")));
}), dt = Ce(V, (e)=>new q(e, Je("grepArgs"), Me("grepResult")), (e, t)=>{
    t.register(new C(e, De("grepArgs"), qe("grepResult")));
});
var pt = require("./module-91022.js"), mt = require("./module-70355.js");
const ht = Ce(K, (e)=>new q(e, Je("executeHookArgs"), Me("executeHookResult")), (e, t)=>{
    t.register(new C(e, De("executeHookArgs"), qe("executeHookResult")));
});
class ft {
    constructor(e){
        this.hookExecutor = e;
    }
    hasFailClosedHooksForStep(e, t) {
        return this.hookExecutor.hasFailClosedHooksForStep?.(e, t) ?? !1;
    }
    async execute(e, t) {
        const r = t.request;
        if (!r) return new m.S1({
            response: void 0
        });
        switch(r.request.case){
            case "preCompact":
                {
                    const e = r.request.value, t = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        trigger: "manual" === e.trigger ? "manual" : "auto",
                        context_usage_percent: e.contextUsagePercent,
                        context_tokens: Number(e.contextTokens),
                        context_window_size: Number(e.contextWindowSize),
                        message_count: e.messageCount,
                        messages_to_compact: e.messagesToCompact,
                        is_first_compaction: e.isFirstCompaction
                    }, n = await this.hookExecutor.executeHookForStep(pt._E.preCompact, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "preCompact",
                                value: new mt.$_({
                                    userMessage: n?.user_message
                                })
                            }
                        })
                    });
                }
            case "subagentStart":
                {
                    const e = r.request.value, t = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        subagent_id: e.subagentId,
                        subagent_type: e.subagentType,
                        task: e.task,
                        parent_conversation_id: e.parentConversationId,
                        tool_call_id: e.toolCallId,
                        subagent_model: e.subagentModel,
                        is_parallel_worker: e.isParallelWorker,
                        git_branch: e.gitBranch
                    }, n = await this.hookExecutor.executeHookForStep(pt._E.subagentStart, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "subagentStart",
                                value: new mt.W0({
                                    permission: n?.permission,
                                    userMessage: n?.user_message,
                                    additionalContext: n?.additional_context
                                })
                            }
                        })
                    });
                }
            case "subagentStop":
                {
                    const e = r.request.value, t = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        subagent_id: e.subagentId,
                        subagent_type: e.subagentType,
                        status: e.status,
                        duration_ms: Number(e.durationMs),
                        summary: e.summary,
                        parent_conversation_id: e.parentConversationId,
                        message_count: e.messageCount,
                        tool_call_count: e.toolCallCount,
                        error_message: e.errorMessage,
                        modified_files: e.modifiedFiles,
                        git_branch: e.gitBranch,
                        loop_count: e.loopCount ?? 0,
                        task: e.task,
                        description: e.description,
                        ...e.childConversationId ? {
                            child_conversation_id: e.childConversationId
                        } : {}
                    }, n = await this.hookExecutor.executeHookForStep(pt._E.subagentStop, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "subagentStop",
                                value: new mt.AH({
                                    followupMessage: n?.followup_message,
                                    additionalContext: n?.additional_context
                                })
                            }
                        })
                    });
                }
            case "beforeSubmitPrompt":
                {
                    const e = r.request.value, t = await this.hookExecutor.executeHookForStep(pt._E.beforeSubmitPrompt, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        prompt: e.prompt,
                        attachments: (n = e.attachments, n.flatMap((e)=>"file" === e.type || "rule" === e.type ? [
                                {
                                    type: e.type,
                                    file_path: e.filePath
                                }
                            ] : [])),
                        composer_mode: e.composerMode
                    });
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "beforeSubmitPrompt",
                                value: new mt.u1({
                                    continue: t?.continue,
                                    userMessage: t?.user_message,
                                    additionalContext: t?.additional_context
                                })
                            }
                        })
                    });
                }
            case "afterAgentResponse":
                {
                    const e = r.request.value;
                    return await this.hookExecutor.executeHookForStep(pt._E.afterAgentResponse, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        text: e.text,
                        input_tokens: void 0 !== e.inputTokens ? Number(e.inputTokens) : void 0,
                        output_tokens: void 0 !== e.outputTokens ? Number(e.outputTokens) : void 0,
                        cache_read_tokens: void 0 !== e.cacheReadTokens ? Number(e.cacheReadTokens) : void 0,
                        cache_write_tokens: void 0 !== e.cacheWriteTokens ? Number(e.cacheWriteTokens) : void 0
                    }), new m.S1({
                        response: new m.w5({
                            response: {
                                case: "afterAgentResponse",
                                value: new mt.FW
                            }
                        })
                    });
                }
            case "afterAgentThought":
                {
                    const e = r.request.value;
                    return await this.hookExecutor.executeHookForStep(pt._E.afterAgentThought, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        text: e.text,
                        duration_ms: void 0 !== e.durationMs ? Number(e.durationMs) : void 0
                    }), new m.S1({
                        response: new m.w5({
                            response: {
                                case: "afterAgentThought",
                                value: new mt.H
                            }
                        })
                    });
                }
            case "stop":
                {
                    const e = r.request.value, t = await this.hookExecutor.executeHookForStep(pt._E.stop, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        status: e.status,
                        loop_count: e.loopCount,
                        input_tokens: void 0 !== e.inputTokens ? Number(e.inputTokens) : void 0,
                        output_tokens: void 0 !== e.outputTokens ? Number(e.outputTokens) : void 0,
                        cache_read_tokens: void 0 !== e.cacheReadTokens ? Number(e.cacheReadTokens) : void 0,
                        cache_write_tokens: void 0 !== e.cacheWriteTokens ? Number(e.cacheWriteTokens) : void 0
                    });
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "stop",
                                value: new mt.rT({
                                    followupMessage: t?.followup_message
                                })
                            }
                        })
                    });
                }
            case "preToolUse":
                {
                    const e = r.request.value, t = e.toolInput ? e.toolInput.toJson() : {}, n = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        ...e.parentToolCallId ? {
                            parent_tool_call_id: e.parentToolCallId
                        } : {},
                        tool_name: e.toolName,
                        tool_input: t,
                        tool_use_id: e.toolUseId,
                        cwd: e.cwd
                    }, s = await this.hookExecutor.executeHookForStep(pt._E.preToolUse, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "preToolUse",
                                value: new mt.Wn({
                                    permission: s?.permission,
                                    userMessage: s?.user_message,
                                    agentMessage: s?.agent_message,
                                    updatedInput: s?.updated_input ? JSON.stringify(s.updated_input) : void 0,
                                    additionalContext: s?.additional_context
                                })
                            }
                        })
                    });
                }
            case "postToolUse":
                {
                    const e = r.request.value, t = e.toolInput ? e.toolInput.toJson() : {}, n = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        ...e.parentToolCallId ? {
                            parent_tool_call_id: e.parentToolCallId
                        } : {},
                        tool_name: e.toolName,
                        tool_input: t,
                        tool_output: e.toolOutput,
                        duration: Number(e.durationMs),
                        tool_use_id: e.toolUseId,
                        cwd: e.cwd
                    }, s = await this.hookExecutor.executeHookForStep(pt._E.postToolUse, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "postToolUse",
                                value: new mt.uB({
                                    additionalContext: s?.additional_context
                                })
                            }
                        })
                    });
                }
            case "postToolUseFailure":
                {
                    const e = r.request.value, t = e.toolInput ? e.toolInput.toJson() : {}, n = {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, pt.U4)(e),
                        ...e.parentToolCallId ? {
                            parent_tool_call_id: e.parentToolCallId
                        } : {},
                        tool_name: e.toolName,
                        tool_input: t,
                        error_message: e.errorMessage,
                        failure_type: e.failureType,
                        duration: Number(e.durationMs),
                        tool_use_id: e.toolUseId,
                        is_interrupt: e.isInterrupt
                    }, s = await this.hookExecutor.executeHookForStep(pt._E.postToolUseFailure, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "postToolUseFailure",
                                value: new mt.U1({
                                    additionalContext: s?.additional_context
                                })
                            }
                        })
                    });
                }
            default:
                return new m.S1({
                    response: void 0
                });
        }
        var n;
    }
}
(0, ct.cF)(Symbol("execHookConversationId"), void 0), (0, ct.cF)(Symbol("execHookGenerationId"), void 0), (0, ct.cF)(Symbol("execHookModel"), void 0);
const gt = (0, ct.cF)(Symbol("execHookWorkspaceRoots"), void 0), yt = Ce(Z, (e)=>new q(e, Je("lsArgs"), Me("lsResult")), (e, t)=>{
    t.register(new C(e, De("lsArgs"), qe("lsResult")));
}), wt = "cursor-ide-browser", vt = "cursor-dev-control", _t = "custom-user-tools", At = new Set([
    "cursor-app-control",
    "cursor-backend-control",
    "cursor-browser-extension",
    wt,
    vt,
    _t,
    "fsd",
    "cursor-subscriptions",
    "cursor-cloud",
    "suggestions",
    "Cursor Slack Tools",
    "Cursor Automation Tools"
]);
function St(e) {
    return !At.has(e);
}
const bt = "cursor", Et = new Set([
    vt,
    wt
]);
function It(e) {
    if (void 0 !== e && 0 !== Object.keys(e).length) try {
        return JSON.stringify(e);
    } catch  {
        return;
    }
}
function Ct(e) {
    return {
        name: e.toolName,
        description: e.description,
        arguments: e.inputSchema,
        outputSchema: e.outputSchema,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId
    };
}
function kt(e) {
    if (void 0 !== e) try {
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function xt(e) {
    return kt(e);
}
function Tt(e) {
    return kt(e.inputSchemaJson) ?? e.inputSchema?.toJson();
}
function Rt(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = e;
    return "function" == typeof t.getSnapshot && "function" == typeof t.getAllSnapshots && "function" == typeof t.onDidChange;
}
var Bt;
function Pt(e) {
    return void 0 === e || void 0 === e.serverIdentifiers;
}
function Jt(...e) {
    const [t, r] = e;
    return e.length < 2 ? t : Pt(r) ? {
        serverIdentifiers: void 0,
        reason: t?.reason ?? r?.reason
    } : void 0 === t ? r : Pt(t) ? {
        serverIdentifiers: void 0,
        reason: t.reason ?? r?.reason
    } : {
        serverIdentifiers: [
            ...new Set([
                ...t.serverIdentifiers ?? [],
                ...r?.serverIdentifiers ?? []
            ])
        ],
        reason: t.reason ?? r?.reason
    };
}
function Mt(e) {
    return function(e) {
        if ("object" != typeof e || null === e) return !1;
        const t = e;
        return [
            "getTools",
            "getToolSet",
            "getClients",
            "getClient",
            "getInstructions",
            "getToolsForServers"
        ].every((e)=>"function" == typeof t[e]);
    }(e) && "function" == typeof e.onDidChange;
}
function qt(e) {
    switch(e){
        case "needsAuth":
            return "This MCP server requires authentication before its tools can be used.";
        case "error":
            return "This MCP server failed during live tool discovery. Its tools are unavailable until the connection is fixed.";
        case "loading":
            return "This MCP server is still loading; tools may not be available yet.";
        default:
            return;
    }
}
function Dt(e) {
    switch(e.kind){
        case "ready":
            return "connected";
        case "requires_authentication":
            return "needsAuth";
        case "error":
            return "error";
        default:
            return "loading";
    }
}
!function(e) {
    e.Snapshots = "cursor_mcp_lease_snapshot_store", e.Status = "cursor_mcp_lease_server_status", e.Settings = "cursor_mcp_lease_settings", e.Providers = "cursor_mcp_lease_providers", e.Unknown = "cursor_mcp_lease_unknown";
}(Bt || (Bt = {}));
const Ot = Ce(ee, (e)=>new q(e, Je("mcpArgs"), Me("mcpResult")), (e, t)=>{
    t.register(new C(e, De("mcpArgs"), qe("mcpResult")));
}), Nt = Ce(Y, (e)=>new q(e, Je("listMcpResourcesExecArgs"), Me("listMcpResourcesExecResult")), (e, t)=>{
    t.register(new C(e, De("listMcpResourcesExecArgs"), qe("listMcpResourcesExecResult")));
}), Ft = Ce(de, (e)=>new q(e, Je("readMcpResourceExecArgs"), Me("readMcpResourceExecResult")), (e, t)=>{
    t.register(new C(e, De("readMcpResourceExecArgs"), qe("readMcpResourceExecResult")));
}), Ut = Ce(te, (e)=>new q(e, Je("mcpStateExecArgs"), Me("mcpStateExecResult")), (e, t)=>{
    t.register(new C(e, De("mcpStateExecArgs"), qe("mcpStateExecResult")));
});
var Lt = require("./module-88107.js");
const $t = Ce(X, (e)=>new q(e, Je("mcpAllowlistPrecheckArgs"), Me("mcpAllowlistPrecheckResult")), (e, t)=>{
    t.register(new C(e, De("mcpAllowlistPrecheckArgs"), qe("mcpAllowlistPrecheckResult")));
}), Qt = "mcps", jt = "tools";
function Gt(e) {
    try {
        const t = JSON.parse(e);
        return "string" == typeof t.name && t.name.length > 0 ? t.name : "string" == typeof t.toolName && t.toolName.length > 0 ? t.toolName : void 0;
    } catch  {
        return;
    }
}
var Ht = require("./module-20941.js"), zt = require("./module-11197.js"), Wt = require("./module-88623.js"), Vt = require("./module-90066.js"), Kt = require("./module-65716.js"), Yt = require("./module-36038.js");
const Zt = new TextEncoder;
async function Xt(e) {
    const t = Zt.encode(e), r = await crypto.subtle.digest("SHA-256", t);
    return {
        sha256: [
            ...new Uint8Array(r)
        ].map((e)=>e.toString(16).padStart(2, "0")).join(""),
        bytes: t.byteLength
    };
}
class er {
    constructor(e){
        this.inner = e;
    }
    async execute(e, t, r) {
        if (!0 !== t.digestOnly) return this.inner.execute(e, t, r);
        const n = new Wt.a2({
            ...t,
            digestOnly: void 0
        });
        return async function(e) {
            if ("success" !== e.result.case) return e;
            const t = e.result.value;
            if ("content" !== t.output.case) return e;
            const { sha256: r, bytes: n } = await Xt(t.output.value);
            return new Wt.sV({
                result: {
                    case: "success",
                    value: new Wt.mE({
                        ...t,
                        output: {
                            case: void 0
                        },
                        outputBlobId: void 0,
                        sha256: r,
                        sizeBytes: BigInt(n)
                    })
                }
            });
        }(await this.inner.execute(e, n, r));
    }
}
const tr = Ce(ue, (e)=>new q(e, Je("readArgs"), Me("readResult")), (e, t)=>{
    t.register(new C(e, De("readArgs"), qe("readResult")));
}), rr = Ce(me, (e)=>new q(e, Je("redactedReadArgs"), Me("redactedReadResult")), (e, t)=>{
    t.register(new C(e, De("redactedReadArgs"), qe("redactedReadResult")));
}), nr = "$file:", sr = Ht.p, or = 16777216, ir = 4;
function ar(e) {
    if ("string" != typeof e || !e.startsWith(nr)) return;
    const t = e.slice(nr.length);
    return (0, Vt.Z1)(t) ? t : void 0;
}
function cr(e) {
    const t = new Set, r = (e)=>{
        const n = ar(e);
        void 0 !== n ? t.add(n) : Array.isArray(e) ? e.forEach(r) : null !== e && "object" == typeof e && Object.values(e).forEach(r);
    };
    return r(e), [
        ...t
    ];
}
const lr = (0, p.Pu)("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
}), ur = (0, p.v5)("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
}), dr = (0, p.Pu)("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
}), pr = (0, p.v5)("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});
function mr(e, t, r) {
    return {
        kind: e,
        message: `Could not resolve the symbolic argument "${nr}${t}": ${r} A string argument of the form "${nr}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.`
    };
}
class hr extends Error {
    constructor(e){
        super(e.message), this.failure = e;
    }
}
async function fr(e, t, r, n, s, { maxFileBytes: o = sr, maxTotalBytes: i = or }) {
    if (t.length > ir) throw new hr(mr("too_many", t[ir] ?? "", `at most ${ir} symbolic arguments may be used in one call (${t.length} given). Split the call or pass paths to tools that accept them.`));
    const a = r();
    if (void 0 === a) throw new hr(mr("no_read_executor", t[0] ?? "", "this environment cannot read files on behalf of a tool call."));
    const c = await (0, Kt.xb)(t, (t)=>(async function(e, t, r, n, s, o) {
            const i = await t.execute(e, new Wt.a2({
                path: r,
                toolCallId: n,
                ...o ? {
                    digestOnly: !0
                } : {}
            }));
            switch(i.result.case){
                case "success":
                    {
                        const t = i.result.value, n = o && void 0 !== t.sha256 && void 0 !== t.sizeBytes ? {
                            sha256: t.sha256,
                            bytes: Number(t.sizeBytes)
                        } : void 0;
                        if (void 0 === n && "content" !== t.output.case) throw new hr(mr("not_text", r, "the file is not a text file."));
                        if (o && (dr.increment(e, 1, {
                            source: void 0 !== n ? "vm_digest" : "outdated_executor"
                        }), void 0 === n)) throw new hr(mr("outdated_executor", r, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
                        const a = "content" === t.output.case ? t.output.value : void 0, { sha256: c, bytes: l } = n ?? await Xt(a ?? "");
                        if (t.truncated || l > s) throw new hr(mr("too_large", r, `the file is too large to inline (${Number(t.fileSize) || l} bytes; at most ${s} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
                        return {
                            content: a,
                            bytes: l,
                            sha256: c
                        };
                    }
                case "fileNotFound":
                    throw new hr(mr("not_found", r, "the file does not exist."));
                case "permissionDenied":
                    throw new hr(mr("permission_denied", r, "reading it was not permitted."));
                case "rejected":
                    throw new hr(mr("rejected", r, `${i.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
                case "invalidFile":
                    throw new hr(mr("not_text", r, "the file cannot be read as text."));
                case "error":
                    throw new hr(mr("read_error", r, i.result.value.error));
                default:
                    throw new hr(mr("read_error", r, "the read returned no result."));
            }
        })(e, a, t, n, o, s), {
        max: ir
    });
    let l = 0;
    for (const [e, r] of c)if (l += r.bytes, l > i) throw new hr(mr("over_budget", e, `together the ${t.length} symbolic arguments exceed the ${i} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
    return c;
}
function gr(e, t) {
    return e instanceof hr ? e.failure : mr("read_error", t, e instanceof Error ? e.message : String(e));
}
async function yr(e, { paths: t, getReadExecutor: r, toolCallId: n, ...s }) {
    const o = [
        ...new Set(t)
    ];
    try {
        const t = await fr(e, o, r, n, !0, s);
        return lr.increment(e, 1, {
            route: "review",
            outcome: "described"
        }), {
            kind: "described",
            descriptors: o.map((e)=>{
                const r = t.get(e);
                return new zt.n({
                    path: e,
                    sha256: r?.sha256 ?? "",
                    sizeBytes: BigInt(r?.bytes ?? 0)
                });
            })
        };
    } catch (t) {
        const r = gr(t, o[0] ?? "");
        return lr.increment(e, 1, {
            route: "review",
            outcome: r.kind
        }), {
            kind: "failed",
            failure: r
        };
    }
}
async function wr(e, t, { route: r, getReadExecutor: n, ...s }) {
    if (0 === t.symbolicPathArguments.length) return {
        kind: "none"
    };
    const o = new Map(t.symbolicPathArguments.map((e)=>[
            e.path,
            e
        ])), i = [
        ...o.keys()
    ], a = (t)=>(lr.increment(e, 1, {
            route: r,
            outcome: t.kind
        }), {
            kind: "failed",
            failure: t,
            result: new zt.iz({
                result: {
                    case: "error",
                    value: new zt.Nh({
                        error: t.message
                    })
                }
            })
        });
    let c;
    try {
        c = await fr(e, i, n, t.toolCallId, !1, s);
    } catch (e) {
        return a(gr(e, i[0] ?? ""));
    }
    let l = 0;
    for (const [e, t] of c){
        l += t.bytes;
        const r = o.get(e);
        if (r?.sha256 !== t.sha256) return a(mr("content_changed", e, `the file changed after the call was reviewed (${r?.sizeBytes ?? 0} bytes then, ${t.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
    }
    const u = new Map([
        ...c
    ].map(([e, t])=>[
            e,
            t.content ?? ""
        ])), d = function(e, t) {
        const r = (e)=>{
            const n = ar(e);
            return void 0 !== n ? t.get(n) ?? e : Array.isArray(e) ? e.map(r) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t])=>[
                    e,
                    r(t)
                ])) : e;
        };
        return Object.fromEntries(Object.entries(e).map(([e, t])=>[
                e,
                r(t)
            ]));
    }(Object.fromEntries(Object.entries(t.args).map(([e, t])=>[
            e,
            t.toJson()
        ])), u), p = t.clone();
    return p.args = Object.fromEntries(Object.entries(d).map(([e, t])=>[
            e,
            Yt.Value.fromJson(t)
        ])), p.symbolicPathArguments = [], lr.increment(e, 1, {
        route: r,
        outcome: "expanded"
    }), ur.record(e, l, {
        route: r
    }), pr.record(e, i.length, {
        route: r
    }), {
        kind: "expanded",
        expansion: {
            args: p,
            files: [
                ...c
            ].map(([e, t])=>({
                    path: e,
                    bytes: t.bytes
                })),
            paths: i.length,
            bytes: l
        }
    };
}
const vr = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
function _r(e, t, r, n) {
    return vr.test(t) ? (lr.increment(e, 1, {
        route: n,
        outcome: "server_rejected_body"
    }), `${t}\n\nThe request carried ${r.bytes} bytes of file contents substituted from ${r.paths} "${nr}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t;
}
function Ar(e) {
    return e.files.map((e)=>`"${nr}${e.path}" was replaced with the contents of ${e.path} (${e.bytes} bytes) before the call.`).join("\n");
}
class Sr {
    constructor(e, t){
        this.inner = e, this.getReadExecutor = t;
    }
    isBackendRouted(e) {
        return this.inner.isBackendRouted?.(e) ?? !1;
    }
    async execute(e, t, r) {
        if (0 === t.symbolicPathArguments.length) return this.inner.execute(e, t, r);
        const n = await wr(e, t, {
            route: "local",
            getReadExecutor: this.getReadExecutor
        });
        if ("none" === n.kind) return this.inner.execute(e, t, r);
        if ("failed" === n.kind) return n.result;
        let s;
        try {
            s = await this.inner.execute(e, n.expansion.args, r);
        } catch (t) {
            throw t instanceof Error && (t.message = _r(e, t.message, n.expansion, "local")), t;
        }
        return function(e, t, r, n) {
            const s = t.clone();
            return "success" === s.result.case ? s.result.value.content.push(new zt._Z({
                content: {
                    case: "text",
                    value: new zt.zN({
                        text: Ar(r)
                    })
                }
            })) : "error" === s.result.case && (s.result.value.error = _r(e, s.result.value.error, r, n)), s;
        }(e, s, n.expansion, "local");
    }
}
const br = Ce(re, (e)=>new q(e, Je("miniSweAgentBashArgs"), Me("miniSweAgentBashResult")), (e, t)=>{
    t.register(new C(e, De("miniSweAgentBashArgs"), qe("miniSweAgentBashResult")));
}), Er = Ce(ne, (e)=>new q(e, Je("piBashArgs"), Me("piBashResult")), (e, t)=>{
    t.register(new C(e, De("piBashArgs"), qe("piBashResult")));
}), Ir = Ce(se, (e)=>new q(e, Je("piEditArgs"), Me("piEditResult")), (e, t)=>{
    t.register(new C(e, De("piEditArgs"), qe("piEditResult")));
}), Cr = Ce(oe, (e)=>new q(e, Je("piFindArgs"), Me("piFindResult")), (e, t)=>{
    t.register(new C(e, De("piFindArgs"), qe("piFindResult")));
}), kr = Ce(ie, (e)=>new q(e, Je("piGrepArgs"), Me("piGrepResult")), (e, t)=>{
    t.register(new C(e, De("piGrepArgs"), qe("piGrepResult")));
}), xr = Ce(ae, (e)=>new q(e, Je("piLsArgs"), Me("piLsResult")), (e, t)=>{
    t.register(new C(e, De("piLsArgs"), qe("piLsResult")));
}), Tr = Ce(ce, (e)=>new q(e, Je("piReadArgs"), Me("piReadResult")), (e, t)=>{
    t.register(new C(e, De("piReadArgs"), qe("piReadResult")));
}), Rr = Ce(le, (e)=>new q(e, Je("piWriteArgs"), Me("piWriteResult")), (e, t)=>{
    t.register(new C(e, De("piWriteArgs"), qe("piWriteResult")));
});
var Br = require("./module-44498.js"), Pr = require("./module-19260.js"), Jr = require("./module-62671.js"), Mr = require("./module-19950.js");
const qr = Ce(ge, (e)=>new q(e, Je("shellArgs"), Me("shellResult")), (e, t)=>{
    t.register(new C(e, De("shellArgs"), qe("shellResult")));
}), Dr = Ce(ye, (e)=>new D(e, Je("shellStreamArgs"), Me("shellStream")), (e, t)=>{
    t.register(new k(e, De("shellStreamArgs"), qe("shellStream")));
}), Or = Ce(be, (e)=>new q(e, Je("writeArgs"), Me("writeResult")), (e, t)=>{
    t.register(new C(e, De("writeArgs"), qe("writeResult")));
}), Nr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", Fr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
function Ur(e, t) {
    return new Jr.jn({
        command: t.command ?? "",
        workingDirectory: t.workingDirectory ?? "",
        error: e,
        isReadonly: !0
    });
}
function Lr(e) {
    return {
        execute: async (t, r)=>new Jr.W4({
                result: {
                    case: "permissionDenied",
                    value: Ur(e, r)
                }
            })
    };
}
function $r(e) {
    return {
        async *execute (t, r) {
            yield new Jr.FI({
                event: {
                    case: "permissionDenied",
                    value: Ur(e, r)
                }
            });
        }
    };
}
function Qr(e) {
    return {
        execute: async (t, r)=>new Br.Lt({
                result: {
                    case: "permissionDenied",
                    value: Ur(e, r)
                }
            })
    };
}
function jr(e) {
    return {
        execute: async (t, r)=>new Mr.v3({
                result: {
                    case: "permissionDenied",
                    value: new Mr.U7({
                        path: r.path,
                        error: e,
                        isReadonly: !0
                    })
                }
            })
    };
}
function Gr(e) {
    return {
        execute: async (t, r)=>new Pr.Pi({
                result: {
                    case: "permissionDenied",
                    value: new Pr.QG({
                        path: r.path,
                        clientVisibleError: e,
                        isReadonly: !0
                    })
                }
            })
    };
}
function Hr(e) {
    return {
        execute: async (t, r)=>new zt.iz({
                result: {
                    case: "permissionDenied",
                    value: new zt.HQ({
                        error: `${e} Tool: ${r.name}`,
                        isReadonly: !0
                    })
                }
            })
    };
}
function zr(e) {
    return {
        execute: async (t, r)=>new Br.nt({
                result: {
                    case: "error",
                    value: new Br.Gv({
                        error: e
                    })
                }
            })
    };
}
function Wr(e) {
    const t = [
        [
            Or,
            jr(e.errorMessage)
        ],
        [
            it,
            Gr(e.errorMessage)
        ],
        [
            Ot,
            Hr(e.errorMessage)
        ]
    ];
    return e.wrapShell && t.push([
        qr,
        Lr(e.errorMessage)
    ], [
        Dr,
        $r(e.errorMessage)
    ], [
        Ge,
        Qr(e.errorMessage)
    ]), e.includeWriteBackgroundShellStdin && t.push([
        He,
        zr(e.errorMessage)
    ]), t;
}
function Vr(e, t) {
    return new Be(e, Wr({
        errorMessage: Nr,
        wrapShell: t,
        includeWriteBackgroundShellStdin: !1
    }));
}
function Kr(e) {
    return new Pe(e, Wr({
        errorMessage: Fr,
        wrapShell: !0,
        includeWriteBackgroundShellStdin: !0
    }));
}
const Yr = Ce(pe, (e)=>new q(e, Je("recordScreenArgs"), Me("recordScreenResult")), (e, t)=>{
    t.register(new C(e, De("recordScreenArgs"), qe("recordScreenResult")));
}), Zr = Ce(he, (e)=>new q(e, Je("requestContextArgs"), Me("requestContextResult")), (e, t)=>{
    t.register(new C(e, De("requestContextArgs"), qe("requestContextResult")));
});
var Xr = require("./module-89396.js");
function en(e) {
    const t = e.clone();
    return t.rules = [], t.nonFileRules = [], t.cloudRule = void 0, t.agentSkills = [], t.skillOptions = void 0, t.customSubagents = [], t.tools = [], t.mcpInstructions = [], t.mcpFileSystemOptions = void 0, t.mcpMetaToolOptions = void 0, {
        dynamicContext: t,
        rules: new Xr.T3({
            rules: e.rules.map((e)=>e.clone()),
            nonFileRules: e.nonFileRules.map((e)=>e.clone()),
            cloudRule: e.cloudRule
        }),
        skills: new Xr.CB({
            agentSkills: e.agentSkills.map((e)=>e.clone()),
            skillOptions: e.skillOptions?.clone()
        }),
        subagents: new Xr.yb({
            customSubagents: e.customSubagents.map((e)=>e.clone())
        }),
        mcps: new Xr.vB({
            tools: e.tools.map((e)=>e.clone()),
            mcpInstructions: e.mcpInstructions.map((e)=>e.clone()),
            mcpFileSystemOptions: e.mcpFileSystemOptions?.clone(),
            mcpMetaToolOptions: e.mcpMetaToolOptions?.clone()
        })
    };
}
var tn = require("./module-82589.js");
const rn = Ce(fe, (e)=>new q(e, Je("shellAllowlistPrecheckArgs"), Me("shellAllowlistPrecheckResult")), (e, t)=>{
    t.register(new C(e, De("shellAllowlistPrecheckArgs"), qe("shellAllowlistPrecheckResult")));
}), nn = Ce(H, (e)=>new q(e, Je("forceBackgroundShellArgs"), Me("forceBackgroundShellResult")), (e, t)=>{
    t.register(new C(e, De("forceBackgroundShellArgs"), qe("forceBackgroundShellResult")));
});
function sn(e, t) {
    e.hookApprovalRequirement = void 0 !== t ? new Jr.In(t) : void 0;
}
function on(e) {
    return e.hookApprovalRequirement;
}
function an(e) {
    return new Jr.In({
        kind: Jr.b.FORCE_PROMPT,
        reason: e
    });
}
function cn(e) {
    return e?.kind === Jr.b.FORCE_PROMPT;
}
var ln = require("./module-18846.js");
const un = Ce(we, (e)=>new q(e, Je("smartModeClassifierArgs"), Me("smartModeClassifierResult")), (e, t)=>{
    t.register(new C(e, De("smartModeClassifierArgs"), qe("smartModeClassifierResult")));
});
var dn = require("./module-39738.js"), pn = require("./module-12544.js");
const mn = "Sub-agent is currently running. You may send the follow-up message when it has completed.", hn = (0, ct.cF)(Symbol("pendingSubagentReplay"), void 0);
function fn(e) {
    return `Too many local subagents are already running (limit: ${e.maxRunning}). Wait for running subagents to finish (or collect background subagent results) before starting another one.`;
}
const gn = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
class yn extends Error {
    constructor(e, t){
        super(e), this.name = "SubagentHostError", this.agentId = t?.agentId, this.cause = t?.cause;
    }
}
const wn = 1e3;
function vn(e) {
    const t = new Map, r = new Map;
    async function n(t, r, n) {
        let s;
        try {
            s = await e.createOrResumeSession(t, r);
            const o = await e.runSession(t, s, r, {
                execId: n?.execId
            });
            return "error" === o.status ? new pn.vS({
                result: {
                    case: "error",
                    value: new pn.od({
                        agentId: s,
                        error: o.error
                    })
                }
            }) : "aborted" === o.status ? new pn.vS({
                result: {
                    case: "error",
                    value: new pn.od({
                        agentId: s,
                        error: o.error ?? "Subagent was aborted by the user"
                    })
                }
            }) : "background" === o.status ? new pn.vS({
                result: {
                    case: "success",
                    value: new pn.HJ({
                        agentId: s,
                        finalMessage: o.finalMessage,
                        toolCallCount: o.toolCallCount ?? 0,
                        backgroundReason: o.backgroundReason,
                        transcriptPath: o.transcriptPath
                    })
                }
            }) : new pn.vS({
                result: {
                    case: "success",
                    value: new pn.HJ({
                        agentId: s,
                        finalMessage: o.finalMessage,
                        toolCallCount: o.toolCallCount ?? 0
                    })
                }
            });
        } catch (t) {
            if (s && e.releaseSession && e.releaseSession(s), t instanceof dn.l4) throw t;
            const n = t instanceof Error ? t.message : String(t), o = s ?? function(e) {
                if (e instanceof yn && e.agentId) return e.agentId;
                if (!e || "object" != typeof e) return;
                const t = e;
                return "string" == typeof t.agentId ? t.agentId : void 0;
            }(t) ?? r.resumeAgentId;
            return new pn.vS({
                result: {
                    case: "error",
                    value: new pn.od({
                        ...o ? {
                            agentId: o
                        } : {},
                        error: n
                    })
                }
            });
        }
    }
    return {
        execute (e, s, o) {
            const i = function(e) {
                if (e.toolCallId && e.parentConversationId) return [
                    e.parentConversationId,
                    e.toolCallId,
                    e.resumeAgentId ?? "",
                    e.forkAgentId ?? ""
                ].join("\0");
            }(s);
            if (void 0 === i) return n(e, s, o);
            const a = r.get(i);
            if (void 0 !== a) return Promise.resolve(a);
            const c = t.get(i);
            if (void 0 !== c) return c;
            const l = n(e, s, o).then((e)=>("success" === e.result.case && (r.set(i, e), r.size > wn && r.delete(r.keys().next().value)), e)).finally(()=>{
                t.delete(i);
            });
            return t.set(i, l), l;
        }
    };
}
const _n = Ce(_e, (e)=>new q(e, Je("subagentArgs"), Me("subagentResult")), (e, t)=>{
    t.register(new C(e, De("subagentArgs"), qe("subagentResult")));
}), An = Ce(ve, (e)=>new q(e, Je("subagentAwaitArgs"), Me("subagentAwaitResult")), (e, t)=>{
    t.register(new C(e, De("subagentAwaitArgs"), qe("subagentAwaitResult")));
}), Sn = Ce(z, (e)=>new q(e, Je("forceBackgroundSubagentArgs"), Me("forceBackgroundSubagentResult")), (e, t)=>{
    t.register(new C(e, De("forceBackgroundSubagentArgs"), qe("forceBackgroundSubagentResult")));
});
const bn = {
    segmentChunks: [],
    assistantCandidate: void 0,
    candidateDisplacedByPlan: void 0,
    finalSummary: void 0
};
class En {
    constructor(){
        this.currentSegmentChunks = [];
    }
    onUpdate(e) {
        switch(e.message.case){
            case "textDelta":
                return void this.currentSegmentChunks.push(e.message.value.text);
            case "toolCallStarted":
            case "toolCallCompleted":
                {
                    this.closeSegment();
                    const { callId: t, toolCall: r } = e.message.value, n = function(e) {
                        switch(e?.tool.case){
                            case "sendFinalSummaryToolCall":
                            case "communicateUpdateToolCall":
                                return function(e) {
                                    const t = e?.trim();
                                    return t && t.length > 0 ? t : void 0;
                                }(e.tool.value.args?.finalSummary);
                            default:
                                return;
                        }
                    }(r);
                    void 0 !== n && (this.finalSummary = n);
                    const s = function(e) {
                        if ("createPlanToolCall" !== e?.tool.case) return;
                        const t = e.tool.value.args?.plan;
                        if ("string" != typeof t || 0 === t.trim().length) return;
                        return `Plan written to ${e.tool.value.result?.planUri?.trim() || "unknown plan file"}:\n${t}`;
                    }(r);
                    return void (void 0 !== s ? ("plan" === this.assistantCandidate?.kind && this.assistantCandidate.callId === t || (this.candidateDisplacedByPlan = this.assistantCandidate), this.assistantCandidate = {
                        kind: "plan",
                        callId: t,
                        value: s
                    }) : "plan" === this.assistantCandidate?.kind && this.assistantCandidate.callId === t && (this.assistantCandidate = this.candidateDisplacedByPlan, this.candidateDisplacedByPlan = void 0));
                }
            case "stepCompleted":
            case "turnEnded":
                return void this.closeSegment();
            default:
                return;
        }
    }
    snapshot() {
        return {
            segmentChunks: [
                ...this.currentSegmentChunks
            ],
            assistantCandidate: this.assistantCandidate,
            candidateDisplacedByPlan: this.candidateDisplacedByPlan,
            finalSummary: this.finalSummary
        };
    }
    restore(e) {
        this.currentSegmentChunks = [
            ...e.segmentChunks
        ], this.assistantCandidate = e.assistantCandidate, this.candidateDisplacedByPlan = e.candidateDisplacedByPlan, this.finalSummary = e.finalSummary;
    }
    finalize() {
        this.closeSegment();
        let e = this.assistantCandidate?.value;
        if (void 0 === e) {
            if (void 0 === this.finalSummary) return;
            e = "No output";
        }
        return void 0 === this.finalSummary ? e : [
            "<user_visible_high_level_summary>",
            this.finalSummary,
            "</user_visible_high_level_summary>",
            "<response>",
            e,
            "</response>"
        ].join("\n");
    }
    closeSegment() {
        if (0 === this.currentSegmentChunks.length) return;
        const e = this.currentSegmentChunks.join("");
        this.currentSegmentChunks = [], "" !== e.trim() && (this.assistantCandidate = {
            kind: "text",
            value: e
        });
    }
}
function In(e, t) {
    switch(e.status){
        case "idle":
            return function(e, t) {
                switch(t.type){
                    case "startRun":
                        return {
                            nextState: {
                                status: "running",
                                runId: t.runId,
                                abort: t.abort
                            },
                            effects: []
                        };
                    case "queueResume":
                        return void 0 === t.targetRunId ? {
                            nextState: e,
                            effects: []
                        } : {
                            nextState: {
                                status: "runningWithQueuedResume",
                                runId: t.targetRunId,
                                queuedResume: t.queuedResume
                            },
                            effects: []
                        };
                    case "runFinished":
                    case "clearQueuedResume":
                    case "abort":
                    case "release":
                        return {
                            nextState: e,
                            effects: []
                        };
                    default:
                        throw new Error(`Unhandled idle-state event: ${String(t)}`);
                }
            }(e, t);
        case "running":
            return function(e, t) {
                switch(t.type){
                    case "startRun":
                        return {
                            nextState: {
                                status: "running",
                                runId: t.runId,
                                abort: t.abort
                            },
                            effects: [
                                {
                                    type: "abortActiveRun",
                                    abort: e.abort
                                }
                            ]
                        };
                    case "queueResume":
                        return {
                            nextState: {
                                status: "runningWithQueuedResume",
                                runId: e.runId,
                                abort: e.abort,
                                queuedResume: t.queuedResume
                            },
                            effects: []
                        };
                    case "runFinished":
                        return t.runId !== e.runId ? {
                            nextState: e,
                            effects: []
                        } : {
                            nextState: {
                                status: "idle"
                            },
                            effects: []
                        };
                    case "clearQueuedResume":
                    case "release":
                        return {
                            nextState: e,
                            effects: []
                        };
                    case "abort":
                        return {
                            nextState: {
                                status: "idle"
                            },
                            effects: [
                                {
                                    type: "abortActiveRun",
                                    abort: e.abort
                                }
                            ]
                        };
                    default:
                        throw new Error(`Unhandled running-state event: ${String(t)}`);
                }
            }(e, t);
        case "runningWithQueuedResume":
            return function(e, t) {
                switch(t.type){
                    case "startRun":
                        return {
                            nextState: {
                                status: "runningWithQueuedResume",
                                runId: t.runId,
                                abort: t.abort,
                                queuedResume: e.queuedResume
                            },
                            effects: [
                                {
                                    type: "abortActiveRun",
                                    abort: e.abort
                                }
                            ]
                        };
                    case "queueResume":
                        return {
                            nextState: {
                                ...e,
                                queuedResume: t.mergeQueuedResume(e.queuedResume, t.queuedResume)
                            },
                            effects: []
                        };
                    case "runFinished":
                        return t.runId !== e.runId ? {
                            nextState: e,
                            effects: []
                        } : {
                            nextState: {
                                status: "running",
                                runId: e.runId,
                                abort: e.abort
                            },
                            effects: [
                                {
                                    type: "startQueuedRun",
                                    sourceRunId: e.runId,
                                    queuedResume: e.queuedResume
                                }
                            ]
                        };
                    case "clearQueuedResume":
                        return {
                            nextState: {
                                status: "running",
                                runId: e.runId,
                                abort: e.abort
                            },
                            effects: []
                        };
                    case "abort":
                        return {
                            nextState: {
                                status: "idle"
                            },
                            effects: [
                                {
                                    type: "abortActiveRun",
                                    abort: e.abort
                                }
                            ]
                        };
                    case "release":
                        return {
                            nextState: e,
                            effects: []
                        };
                    default:
                        throw new Error(`Unhandled runningWithQueuedResume-state event: ${String(t)}`);
                }
            }(e, t);
        default:
            return {
                nextState: e,
                effects: []
            };
    }
}
class Cn {
    constructor(e = {}){
        this.options = e, this.states = new Map, this.runCounterBySession = new Map, this.dispatchQueueBySession = new Map, this.dispatchInProgress = new Set, this.releaseRequestedBySession = new Set;
    }
    getState(e) {
        return this.states.get(e) ?? {
            status: "idle"
        };
    }
    isBusy(e) {
        return "idle" !== this.getState(e).status;
    }
    startRun(e, t) {
        const r = this.nextRunId(e);
        return this.enqueueEvent(e, {
            type: "startRun",
            runId: r,
            abort: t?.abort
        }), r;
    }
    queueResume(e, t) {
        this.enqueueEvent(e, {
            type: "queueResume",
            queuedResume: t.queuedResume,
            targetRunId: t.targetRunId,
            mergeQueuedResume: t.mergeQueuedResume
        });
    }
    finishRun(e, t) {
        this.enqueueEvent(e, {
            type: "runFinished",
            runId: t
        });
    }
    clearQueuedResume(e) {
        this.enqueueEvent(e, {
            type: "clearQueuedResume"
        });
    }
    abort(e) {
        this.enqueueEvent(e, {
            type: "abort"
        });
    }
    release(e) {
        this.enqueueEvent(e, {
            type: "release"
        });
    }
    nextRunId(e) {
        const t = (this.runCounterBySession.get(e) ?? 0) + 1;
        return this.runCounterBySession.set(e, t), t;
    }
    enqueueEvent(e, t) {
        const r = this.dispatchQueueBySession.get(e) ?? [];
        r.push(t), this.dispatchQueueBySession.set(e, r), this.drainEventQueue(e);
    }
    drainEventQueue(e) {
        if (this.dispatchInProgress.has(e)) return;
        let t;
        this.dispatchInProgress.add(e);
        try {
            const r = this.dispatchQueueBySession.get(e);
            if (!r) return;
            for(; r.length > 0;){
                const n = r.shift();
                if (n) try {
                    this.processEvent(e, n);
                } catch (e) {
                    t ??= e;
                }
            }
        } finally{
            this.dispatchQueueBySession.delete(e), this.dispatchInProgress.delete(e);
        }
        if (t) throw t;
    }
    processEvent(e, t) {
        const r = this.getState(e), { nextState: n, effects: s } = In(r, t);
        this.states.set(e, n), this.options.onStateChange?.({
            sessionId: e,
            previousState: r,
            nextState: n
        });
        for (const t of s)switch(t.type){
            case "abortActiveRun":
                t.abort?.();
                break;
            case "startQueuedRun":
                this.options.onQueuedRunReady?.({
                    sessionId: e,
                    sourceRunId: t.sourceRunId,
                    queuedResume: t.queuedResume
                });
                break;
            default:
                throw new Error(`Unhandled lifecycle manager effect: ${String(t)}`);
        }
        const o = this.getState(e);
        "release" === t.type && "idle" !== o.status && this.releaseRequestedBySession.add(e), "idle" !== o.status || "release" !== t.type && !this.releaseRequestedBySession.has(e) || (this.states.delete(e), this.runCounterBySession.delete(e), this.releaseRequestedBySession.delete(e));
    }
}
function kn(e) {
    return "string" == typeof e && e.trim().length > 0;
}
function xn(e) {
    return `--- Cursor Command: ${e} ---`;
}
function Tn(e, t) {
    const r = t.filter((t)=>t.content.length > 0 && !e.includes(xn(t.name)));
    if (0 === r.length) return e;
    return `<cursor_commands>\n${r.map((e)=>`${xn(e.name)}\n${e.content}\n--- End Command ---`).join("\n")}\n</cursor_commands>\n\n${e}`;
}
var Rn = require("./module-83508.js");
const Bn = Ce(Ae, (e)=>new q(e, Je("webFetchAllowlistPrecheckArgs"), Me("webFetchAllowlistPrecheckResult")), (e, t)=>{
    t.register(new C(e, De("webFetchAllowlistPrecheckArgs"), qe("webFetchAllowlistPrecheckResult")));
});
