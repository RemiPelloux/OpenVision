"use strict";
function n(e) {
    const t = e.replace(/\\/g, "/").split("/"), r = t[t.length - 1] ?? "";
    return "SKILL.md" === r && t.length >= 2 ? t[t.length - 2] ?? "" : r;
}
require.d(exports, {
    rFE: ()=>bt,
    jnL: ()=>_t,
    riQ: ()=>ft,
    acw: ()=>gt,
    iKs: ()=>yt,
    dSv: ()=>Ae,
    yJV: ()=>Qt,
    R10: ()=>Qe,
    sn5: ()=>Ve,
    dwX: ()=>Re,
    gl4: ()=>pt,
    FHy: ()=>Ut,
    J6s: ()=>Lt,
    cME: ()=>Nt.c,
    YH2: ()=>Ze,
    y7k: ()=>an,
    f9i: ()=>ln,
    ha6: ()=>Pe,
    Eyz: ()=>er,
    CWo: ()=>Yr.C,
    n6O: ()=>C,
    Thz: ()=>nn.Th,
    mHV: ()=>nn.mH,
    RZw: ()=>nn.RZ,
    Pwd: ()=>on.Pw,
    HwP: ()=>vr,
    KHj: ()=>mn.K,
    iul: ()=>De,
    YhQ: ()=>Ne,
    OkD: ()=>Ge,
    kUN: ()=>kt,
    sOX: ()=>Xe,
    IGV: ()=>or,
    iZk: ()=>tt,
    uwM: ()=>Le,
    d_R: ()=>je,
    qwl: ()=>Ue,
    eG3: ()=>$e,
    e7l: ()=>Fe,
    ryB: ()=>rt,
    $bB: ()=>tn,
    uaw: ()=>Hr,
    mA: ()=>Wr,
    Zg0: ()=>Ie,
    RpG: ()=>nt,
    vr_: ()=>hr,
    w4j: ()=>st,
    zyy: ()=>We,
    Qw5: ()=>St,
    IjH: ()=>mt,
    IGA: ()=>it,
    PEk: ()=>Xr,
    I2x: ()=>pn,
    oGr: ()=>en,
    jH1: ()=>at,
    u8v: ()=>ct,
    bob: ()=>dt,
    zNu: ()=>rn,
    _1u: ()=>Ct,
    boZ: ()=>At,
    Yg2: ()=>It,
    anv: ()=>Rt,
    rn8: ()=>Bt,
    bL4: ()=>ht,
    ODj: ()=>Ft,
    Lxn: ()=>Jt,
    Yib: ()=>Ot,
    Hvh: ()=>Et,
    ggl: ()=>Mt,
    pY2: ()=>qt,
    sfj: ()=>Pt,
    JP: ()=>_r,
    TGP: ()=>$t,
    TIN: ()=>cn,
    TZ: ()=>br,
    PiX: ()=>Sr,
    ghi: ()=>kr,
    Rdb: ()=>xr,
    qNu: ()=>Er,
    T0F: ()=>Ir,
    ohZ: ()=>Tr,
    _As: ()=>Xt,
    mlu: ()=>Dt,
    pq5: ()=>Kr,
    Mfc: ()=>Zt,
    MZM: ()=>Vr,
    VNS: ()=>Ce,
    oAs: ()=>Zr,
    GuN: ()=>Qr,
    qkk: ()=>Mr,
    wve: ()=>Jr,
    ujx: ()=>u,
    kQm: ()=>l,
    ci8: ()=>n,
    OOW: ()=>c,
    XPF: ()=>sn,
    rz0: ()=>dn,
    ZnQ: ()=>un,
    vx3: ()=>et,
    N1y: ()=>vt,
    sC3: ()=>hn,
    TQC: ()=>ze,
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
var d = require("./module-37949.js"), p = require("./module-13807.js"), m = require("./module-55094.js"), h = require("./module-91434.js"), f = require("./module-95339.js");
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
}), b = (0, p.Pu)("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), S = (0, p.Pu)("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), k = {
    computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)",
    recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)"
};
class x extends Error {
    constructor(e){
        super(e), this.name = "ControlledExecDisposedError";
    }
}
function E(e) {
    return e instanceof x ? "EXEC_BACKEND_UNAVAILABLE" : e instanceof Error && "AgentExecStreamStartTimeoutError" === e.name ? "AGENT_EXEC_STREAM_START_TIMEOUT" : void 0;
}
class I {
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
class T {
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
class C {
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
                    })), b.increment(r, 1, {
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
                                errorCode: E(e)
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
        const o = t.message.case, i = (void 0 === o ? void 0 : k[o]) ?? `No handler found for server message of type ${o}`;
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
        const r = new C(t);
        for (const [t, n] of e.entries())t.registerControlledImplementation(n, r);
        return r;
    }
}
var P = require("./module-98875.js");
async function A(e) {
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
var R = function(e, t, r) {
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
}, M = function(e) {
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
const J = (0, d.h)("ExecutorResource"), O = (0, p.Pu)("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
});
class B {
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
            const s = R(n, (0, P.VI)(e.withName("ExecutorResource.execute")), !1), o = s.ctx;
            void 0 !== r?.execId && s.span.setAttribute("exec.id", r.execId);
            const i = (0, P.mJ)(o), a = i ? new m.Kg(i) : void 0, c = this.execManager.createExecInstance(o, (e)=>{
                const n = this.serializeArgs(e, t);
                return new m.Ye({
                    id: n.id,
                    message: n.message,
                    execId: r?.execId,
                    machineId: r?.machineId,
                    spanContext: a,
                    acceptHookAdditionalContexts: void 0 !== r?.hookContextCollector
                });
            }), l = await A(c);
            if (void 0 === l) throw new Error("No exec result");
            let { firstItem: u, rest: d } = l;
            const p = (e)=>{
                if (void 0 !== r?.hookContextCollector && e.hookAdditionalContexts.length > 0) {
                    r.hookContextCollector.push(...e.hookAdditionalContexts);
                    for (const t of e.hookAdditionalContexts)O.increment(o, 1, {
                        hook_event_name: t.hookEventName
                    });
                }
            };
            p(u);
            let h = this.deserializeResult(u);
            for(; void 0 === h;){
                const e = await A(d);
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
            M(n);
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
            const s = R(n, (0, P.VI)(e.withName("StreamExecutorResource.execute")), !1).ctx, o = (0, P.mJ)(s), i = o ? new m.Kg(o) : void 0, a = this.execManager.createExecInstance(s, (e)=>{
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
            M(n);
        }
    }
}
const q = "agent-store-conflict-executor", N = "agent-store-conflict-notice-executor", F = "background-shell-executor", U = "canvas-diagnostics-executor", L = "computer-use-executor", $ = "conversation-search-executor", j = "delete-executor", G = "diagnostics-executor", z = "fetch-executor", W = "force-background-shell-executor", H = "force-background-subagent-executor", K = "git-diff-executor", V = "grep-executor", Y = "hook-executor", Q = "list-mcp-resources-executor", X = "ls-executor", Z = "mcp-allowlist-precheck-executor", ee = "mcp-executor", te = "mcp-state-executor", re = "mini-swe-agent-bash-executor", ne = "pi-bash-executor", se = "pi-edit-executor", oe = "pi-find-executor", ie = "pi-grep-executor", ae = "pi-ls-executor", ce = "pi-read-executor", le = "pi-write-executor", ue = "read-executor", de = "read-mcp-resource-executor", pe = "record-screen-executor", me = "redacted-read-executor", he = "request-context-executor", fe = "shell-allowlist-precheck-executor", ge = "shell-executor", ye = "shell-stream-executor", we = "smart-mode-classifier-executor", ve = "subagent-await-executor", _e = "subagent-executor", be = "web-fetch-allowlist-precheck-executor", Se = "write-background-shell-input-executor", ke = "write-executor", xe = "@anysphere/agent-exec/resource/";
function Ee(e) {
    return Symbol.for(`${xe}${e}`);
}
function Ie(e, t, r) {
    return {
        name: e,
        symbol: Ee(e),
        remoteImplementation: t,
        registerControlledImplementation: r
    };
}
class Te {
    constructor(e, t){
        this.resource = e, this.value = t;
    }
}
function Ce(e, t) {
    return [
        e,
        t
    ];
}
class Pe {
    constructor(){
        this.resources = new Map;
    }
    register(e, t) {
        this.resources.set(e.symbol, new Te(e, t));
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
class Ae {
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
class Re {
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
function Me(e) {
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
function Je(e) {
    return (t)=>{
        if (t.message.case === e) return t.message.value;
    };
}
function Oe(e) {
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
function Be(e) {
    return function(t) {
        if (t.message.case === e) return {
            id: t.id,
            args: t.message.value
        };
    };
}
const De = Ie(q, (e)=>new B(e, Me("agentStoreConflictArgs"), Je("agentStoreConflictResult")), (e, t)=>{
    t.register(new I(e, Be("agentStoreConflictArgs"), Oe("agentStoreConflictResult")));
});
new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded",
    "gap"
]);
class qe {
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
const Ne = Ie(N, (e)=>new qe, (e, t)=>{});
async function Fe(e, t, r, n) {
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
async function Ue(e, t, r, n) {
    return await e.execute(t, {
        op: "peek",
        ...void 0 !== r?.conversationId ? {
            conversationId: r.conversationId
        } : {}
    }, n);
}
async function Le(e, t, r, n, s) {
    0 !== r.length && await e.execute(t, {
        op: "ack",
        eventIds: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, s);
}
async function $e(e, t, r, n, s) {
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
const Ge = Ie(F, (e)=>new B(e, Me("backgroundShellSpawnArgs"), Je("backgroundShellSpawnResult")), (e, t)=>{
    t.register(new I(e, Be("backgroundShellSpawnArgs"), Oe("backgroundShellSpawnResult")));
}), ze = Ie(Se, (e)=>new B(e, Me("writeShellStdinArgs"), Je("writeShellStdinResult")), (e, t)=>{
    t.register(new I(e, Be("writeShellStdinArgs"), Oe("writeShellStdinResult")));
});
function We(e) {
    const t = {};
    return "string" == typeof e.title && e.title.trim().length > 0 && (t.title = e.title), "string" == typeof e.cwd && e.cwd.trim().length > 0 && (t.cwd = e.cwd), "number" == typeof e.startTimeMs && Number.isFinite(e.startTimeMs) && e.startTimeMs > 0 && (t.startTimeMs = String(Math.floor(e.startTimeMs))), Object.keys(t).length > 0 ? t : void 0;
}
function He(e, t) {
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
        const { queue: n, replaced: s } = He(this.pending, {
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
            const { queue: t, replaced: r } = He(s, e);
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
const Ve = "local";
function Ye(e, t) {
    return !t || (!t.kind || e.kind === t.kind) && (!t.state || e.state === t.state) && (!t.ownerId || e.ownerId === t.ownerId);
}
class Qe {
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
        for (const t of this.records.values())if ("running" === t.state && Ye(t, e)) return !0;
        return !1;
    }
    abortAllWork(e) {
        let t = 0;
        for (const r of [
            ...this.records.values()
        ])Ye(r, e) && (r.abort && r.abort(), t++, this.records.delete(r.id), this.wakeups.unsuppressId(r.id));
        return t;
    }
    listWork(e) {
        const t = [];
        for (const r of this.records.values())Ye(r, e) && t.push({
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
            conversationId: Ve,
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
        this.suppress(Ve, e);
    }
    getWakeupRevision() {
        return this.wakeups.getRevision();
    }
}
const Xe = Ie(U, (e)=>new B(e, Me("canvasDiagnosticsArgs"), Je("canvasDiagnosticsResult")), (e, t)=>{
    t.register(new I(e, Be("canvasDiagnosticsArgs"), Oe("canvasDiagnosticsResult")));
});
class Ze extends Error {
    constructor(e){
        super(e), this.code = "NO_GIT_API", this.name = "NoGitAPIError", Error.captureStackTrace && Error.captureStackTrace(this, Ze);
    }
}
function et(e) {
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
const tt = Ie(L, (e)=>new B(e, Me("computerUseArgs"), Je("computerUseResult")), (e, t)=>{
    t.register(new I(e, Be("computerUseArgs"), Oe("computerUseResult")));
}), rt = Ie($, (e)=>new B(e, Me("conversationSearchArgs"), Je("conversationSearchResult")), (e, t)=>{
    t.register(new I(e, Be("conversationSearchArgs"), Oe("conversationSearchResult")));
}), nt = Ie(j, (e)=>new B(e, Me("deleteArgs"), Je("deleteResult")), (e, t)=>{
    t.register(new I(e, Be("deleteArgs"), Oe("deleteResult")));
}), st = Ie(G, (e)=>new B(e, Me("diagnosticsArgs"), Je("diagnosticsResult")), (e, t)=>{
    t.register(new I(e, Be("diagnosticsArgs"), Oe("diagnosticsResult")));
});
var ot = require("./module-33002.js");
(0, ot.cF)(Symbol("execConversationId"), void 0), (0, ot.cF)(Symbol("execRequestId"), void 0), (0, ot.cF)(Symbol("execBrowserOperationSource"), void 0);
const it = Ie(z, (e)=>new B(e, Me("fetchArgs"), Je("fetchResult")), (e, t)=>{
    t.register(new I(e, Be("fetchArgs"), Oe("fetchResult")));
}), at = Ie(K, (e)=>new B(e, Me("gitDiffRequest"), Je("gitDiffResponse")), (e, t)=>{
    t.register(new I(e, Be("gitDiffRequest"), Oe("gitDiffResponse")));
}), ct = Ie(V, (e)=>new B(e, Me("grepArgs"), Je("grepResult")), (e, t)=>{
    t.register(new I(e, Be("grepArgs"), Oe("grepResult")));
});
var lt = require("./module-91022.js"), ut = require("./module-70355.js");
const dt = Ie(Y, (e)=>new B(e, Me("executeHookArgs"), Je("executeHookResult")), (e, t)=>{
    t.register(new I(e, Be("executeHookArgs"), Oe("executeHookResult")));
});
class pt {
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
                        ...(0, lt.U4)(e),
                        trigger: "manual" === e.trigger ? "manual" : "auto",
                        context_usage_percent: e.contextUsagePercent,
                        context_tokens: Number(e.contextTokens),
                        context_window_size: Number(e.contextWindowSize),
                        message_count: e.messageCount,
                        messages_to_compact: e.messagesToCompact,
                        is_first_compaction: e.isFirstCompaction
                    }, n = await this.hookExecutor.executeHookForStep(lt._E.preCompact, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "preCompact",
                                value: new ut.$_({
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
                        ...(0, lt.U4)(e),
                        subagent_id: e.subagentId,
                        subagent_type: e.subagentType,
                        task: e.task,
                        parent_conversation_id: e.parentConversationId,
                        tool_call_id: e.toolCallId,
                        subagent_model: e.subagentModel,
                        is_parallel_worker: e.isParallelWorker,
                        git_branch: e.gitBranch
                    }, n = await this.hookExecutor.executeHookForStep(lt._E.subagentStart, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "subagentStart",
                                value: new ut.W0({
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
                        ...(0, lt.U4)(e),
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
                    }, n = await this.hookExecutor.executeHookForStep(lt._E.subagentStop, t);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "subagentStop",
                                value: new ut.AH({
                                    followupMessage: n?.followup_message,
                                    additionalContext: n?.additional_context
                                })
                            }
                        })
                    });
                }
            case "beforeSubmitPrompt":
                {
                    const e = r.request.value, t = await this.hookExecutor.executeHookForStep(lt._E.beforeSubmitPrompt, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, lt.U4)(e),
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
                                value: new ut.u1({
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
                    return await this.hookExecutor.executeHookForStep(lt._E.afterAgentResponse, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, lt.U4)(e),
                        text: e.text,
                        input_tokens: void 0 !== e.inputTokens ? Number(e.inputTokens) : void 0,
                        output_tokens: void 0 !== e.outputTokens ? Number(e.outputTokens) : void 0,
                        cache_read_tokens: void 0 !== e.cacheReadTokens ? Number(e.cacheReadTokens) : void 0,
                        cache_write_tokens: void 0 !== e.cacheWriteTokens ? Number(e.cacheWriteTokens) : void 0
                    }), new m.S1({
                        response: new m.w5({
                            response: {
                                case: "afterAgentResponse",
                                value: new ut.FW
                            }
                        })
                    });
                }
            case "afterAgentThought":
                {
                    const e = r.request.value;
                    return await this.hookExecutor.executeHookForStep(lt._E.afterAgentThought, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, lt.U4)(e),
                        text: e.text,
                        duration_ms: void 0 !== e.durationMs ? Number(e.durationMs) : void 0
                    }), new m.S1({
                        response: new m.w5({
                            response: {
                                case: "afterAgentThought",
                                value: new ut.H
                            }
                        })
                    });
                }
            case "stop":
                {
                    const e = r.request.value, t = await this.hookExecutor.executeHookForStep(lt._E.stop, {
                        conversation_id: e.conversationId ?? "",
                        generation_id: e.generationId ?? "",
                        model: e.model ?? "",
                        ...(0, lt.U4)(e),
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
                                value: new ut.rT({
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
                        ...(0, lt.U4)(e),
                        ...e.parentToolCallId ? {
                            parent_tool_call_id: e.parentToolCallId
                        } : {},
                        tool_name: e.toolName,
                        tool_input: t,
                        tool_use_id: e.toolUseId,
                        cwd: e.cwd
                    }, s = await this.hookExecutor.executeHookForStep(lt._E.preToolUse, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "preToolUse",
                                value: new ut.Wn({
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
                        ...(0, lt.U4)(e),
                        ...e.parentToolCallId ? {
                            parent_tool_call_id: e.parentToolCallId
                        } : {},
                        tool_name: e.toolName,
                        tool_input: t,
                        tool_output: e.toolOutput,
                        duration: Number(e.durationMs),
                        tool_use_id: e.toolUseId,
                        cwd: e.cwd
                    }, s = await this.hookExecutor.executeHookForStep(lt._E.postToolUse, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "postToolUse",
                                value: new ut.uB({
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
                        ...(0, lt.U4)(e),
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
                    }, s = await this.hookExecutor.executeHookForStep(lt._E.postToolUseFailure, n);
                    return new m.S1({
                        response: new m.w5({
                            response: {
                                case: "postToolUseFailure",
                                value: new ut.U1({
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
(0, ot.cF)(Symbol("execHookConversationId"), void 0), (0, ot.cF)(Symbol("execHookGenerationId"), void 0), (0, ot.cF)(Symbol("execHookModel"), void 0);
const mt = (0, ot.cF)(Symbol("execHookWorkspaceRoots"), void 0), ht = Ie(X, (e)=>new B(e, Me("lsArgs"), Je("lsResult")), (e, t)=>{
    t.register(new I(e, Be("lsArgs"), Oe("lsResult")));
}), ft = "cursor-ide-browser", gt = "cursor-dev-control", yt = "custom-user-tools", wt = new Set([
    "cursor-app-control",
    "cursor-backend-control",
    "cursor-browser-extension",
    ft,
    gt,
    yt,
    "fsd",
    "cursor-subscriptions",
    "cursor-cloud",
    "suggestions",
    "Cursor Slack Tools",
    "Cursor Automation Tools"
]);
function vt(e) {
    return !wt.has(e);
}
const _t = "cursor", bt = new Set([
    gt,
    ft
]);
function St(e) {
    if (void 0 !== e && 0 !== Object.keys(e).length) try {
        return JSON.stringify(e);
    } catch  {
        return;
    }
}
function kt(e) {
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
function xt(e) {
    if (void 0 !== e) try {
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function Et(e) {
    return xt(e.inputSchemaJson) ?? e.inputSchema?.toJson();
}
function It(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = e;
    return "function" == typeof t.getSnapshot && "function" == typeof t.getAllSnapshots && "function" == typeof t.onDidChange;
}
var Tt;
function Ct(e) {
    return void 0 === e || void 0 === e.serverIdentifiers;
}
function Pt(...e) {
    const [t, r] = e;
    return e.length < 2 ? t : Ct(r) ? {
        serverIdentifiers: void 0,
        reason: t?.reason ?? r?.reason
    } : void 0 === t ? r : Ct(t) ? {
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
function At(e) {
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
}
function Rt(e) {
    return At(e) && "function" == typeof e.onDidChange;
}
function Mt(e) {
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
function Jt(e) {
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
}(Tt || (Tt = {}));
const Ot = Ie(ee, (e)=>new B(e, Me("mcpArgs"), Je("mcpResult")), (e, t)=>{
    t.register(new I(e, Be("mcpArgs"), Oe("mcpResult")));
}), Bt = Ie(Q, (e)=>new B(e, Me("listMcpResourcesExecArgs"), Je("listMcpResourcesExecResult")), (e, t)=>{
    t.register(new I(e, Be("listMcpResourcesExecArgs"), Oe("listMcpResourcesExecResult")));
}), Dt = Ie(de, (e)=>new B(e, Me("readMcpResourceExecArgs"), Je("readMcpResourceExecResult")), (e, t)=>{
    t.register(new I(e, Be("readMcpResourceExecArgs"), Oe("readMcpResourceExecResult")));
}), qt = Ie(te, (e)=>new B(e, Me("mcpStateExecArgs"), Je("mcpStateExecResult")), (e, t)=>{
    t.register(new I(e, Be("mcpStateExecArgs"), Oe("mcpStateExecResult")));
});
var Nt = require("./module-88107.js");
const Ft = Ie(Z, (e)=>new B(e, Me("mcpAllowlistPrecheckArgs"), Je("mcpAllowlistPrecheckResult")), (e, t)=>{
    t.register(new I(e, Be("mcpAllowlistPrecheckArgs"), Oe("mcpAllowlistPrecheckResult")));
}), Ut = "mcps", Lt = "tools";
function $t(e) {
    try {
        const t = JSON.parse(e);
        return "string" == typeof t.name && t.name.length > 0 ? t.name : "string" == typeof t.toolName && t.toolName.length > 0 ? t.toolName : void 0;
    } catch  {
        return;
    }
}
var jt = require("./module-20941.js"), Gt = require("./module-11197.js"), zt = require("./module-88623.js"), Wt = require("./module-90066.js"), Ht = require("./module-65716.js"), Kt = require("./module-36038.js");
const Vt = new TextEncoder;
async function Yt(e) {
    const t = Vt.encode(e), r = await crypto.subtle.digest("SHA-256", t);
    return {
        sha256: [
            ...new Uint8Array(r)
        ].map((e)=>e.toString(16).padStart(2, "0")).join(""),
        bytes: t.byteLength
    };
}
class Qt {
    constructor(e){
        this.inner = e;
    }
    async execute(e, t, r) {
        if (!0 !== t.digestOnly) return this.inner.execute(e, t, r);
        const n = new zt.a2({
            ...t,
            digestOnly: void 0
        });
        return async function(e) {
            if ("success" !== e.result.case) return e;
            const t = e.result.value;
            if ("content" !== t.output.case) return e;
            const { sha256: r, bytes: n } = await Yt(t.output.value);
            return new zt.sV({
                result: {
                    case: "success",
                    value: new zt.mE({
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
const Xt = Ie(ue, (e)=>new B(e, Me("readArgs"), Je("readResult")), (e, t)=>{
    t.register(new I(e, Be("readArgs"), Oe("readResult")));
}), Zt = Ie(me, (e)=>new B(e, Me("redactedReadArgs"), Je("redactedReadResult")), (e, t)=>{
    t.register(new I(e, Be("redactedReadArgs"), Oe("redactedReadResult")));
}), er = "$file:", tr = jt.p, rr = 16777216, nr = 4;
function sr(e) {
    if ("string" != typeof e || !e.startsWith(er)) return;
    const t = e.slice(er.length);
    return (0, Wt.Z1)(t) ? t : void 0;
}
function or(e) {
    const t = new Set, r = (e)=>{
        const n = sr(e);
        void 0 !== n ? t.add(n) : Array.isArray(e) ? e.forEach(r) : null !== e && "object" == typeof e && Object.values(e).forEach(r);
    };
    return r(e), [
        ...t
    ];
}
const ir = (0, p.Pu)("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
}), ar = (0, p.v5)("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
}), cr = (0, p.Pu)("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
}), lr = (0, p.v5)("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});
function ur(e, t, r) {
    return {
        kind: e,
        message: `Could not resolve the symbolic argument "${er}${t}": ${r} A string argument of the form "${er}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.`
    };
}
class dr extends Error {
    constructor(e){
        super(e.message), this.failure = e;
    }
}
async function pr(e, t, r, n, s, { maxFileBytes: o = tr, maxTotalBytes: i = rr }) {
    if (t.length > nr) throw new dr(ur("too_many", t[nr] ?? "", `at most ${nr} symbolic arguments may be used in one call (${t.length} given). Split the call or pass paths to tools that accept them.`));
    const a = r();
    if (void 0 === a) throw new dr(ur("no_read_executor", t[0] ?? "", "this environment cannot read files on behalf of a tool call."));
    const c = await (0, Ht.xb)(t, (t)=>(async function(e, t, r, n, s, o) {
            const i = await t.execute(e, new zt.a2({
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
                        if (void 0 === n && "content" !== t.output.case) throw new dr(ur("not_text", r, "the file is not a text file."));
                        if (o && (cr.increment(e, 1, {
                            source: void 0 !== n ? "vm_digest" : "outdated_executor"
                        }), void 0 === n)) throw new dr(ur("outdated_executor", r, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
                        const a = "content" === t.output.case ? t.output.value : void 0, { sha256: c, bytes: l } = n ?? await Yt(a ?? "");
                        if (t.truncated || l > s) throw new dr(ur("too_large", r, `the file is too large to inline (${Number(t.fileSize) || l} bytes; at most ${s} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
                        return {
                            content: a,
                            bytes: l,
                            sha256: c
                        };
                    }
                case "fileNotFound":
                    throw new dr(ur("not_found", r, "the file does not exist."));
                case "permissionDenied":
                    throw new dr(ur("permission_denied", r, "reading it was not permitted."));
                case "rejected":
                    throw new dr(ur("rejected", r, `${i.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
                case "invalidFile":
                    throw new dr(ur("not_text", r, "the file cannot be read as text."));
                case "error":
                    throw new dr(ur("read_error", r, i.result.value.error));
                default:
                    throw new dr(ur("read_error", r, "the read returned no result."));
            }
        })(e, a, t, n, o, s), {
        max: nr
    });
    let l = 0;
    for (const [e, r] of c)if (l += r.bytes, l > i) throw new dr(ur("over_budget", e, `together the ${t.length} symbolic arguments exceed the ${i} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
    return c;
}
function mr(e, t) {
    return e instanceof dr ? e.failure : ur("read_error", t, e instanceof Error ? e.message : String(e));
}
async function hr(e, { paths: t, getReadExecutor: r, toolCallId: n, ...s }) {
    const o = [
        ...new Set(t)
    ];
    try {
        const t = await pr(e, o, r, n, !0, s);
        return ir.increment(e, 1, {
            route: "review",
            outcome: "described"
        }), {
            kind: "described",
            descriptors: o.map((e)=>{
                const r = t.get(e);
                return new Gt.n({
                    path: e,
                    sha256: r?.sha256 ?? "",
                    sizeBytes: BigInt(r?.bytes ?? 0)
                });
            })
        };
    } catch (t) {
        const r = mr(t, o[0] ?? "");
        return ir.increment(e, 1, {
            route: "review",
            outcome: r.kind
        }), {
            kind: "failed",
            failure: r
        };
    }
}
async function fr(e, t, { route: r, getReadExecutor: n, ...s }) {
    if (0 === t.symbolicPathArguments.length) return {
        kind: "none"
    };
    const o = new Map(t.symbolicPathArguments.map((e)=>[
            e.path,
            e
        ])), i = [
        ...o.keys()
    ], a = (t)=>(ir.increment(e, 1, {
            route: r,
            outcome: t.kind
        }), {
            kind: "failed",
            failure: t,
            result: new Gt.iz({
                result: {
                    case: "error",
                    value: new Gt.Nh({
                        error: t.message
                    })
                }
            })
        });
    let c;
    try {
        c = await pr(e, i, n, t.toolCallId, !1, s);
    } catch (e) {
        return a(mr(e, i[0] ?? ""));
    }
    let l = 0;
    for (const [e, t] of c){
        l += t.bytes;
        const r = o.get(e);
        if (r?.sha256 !== t.sha256) return a(ur("content_changed", e, `the file changed after the call was reviewed (${r?.sizeBytes ?? 0} bytes then, ${t.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
    }
    const u = new Map([
        ...c
    ].map(([e, t])=>[
            e,
            t.content ?? ""
        ])), d = function(e, t) {
        const r = (e)=>{
            const n = sr(e);
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
            Kt.Value.fromJson(t)
        ])), p.symbolicPathArguments = [], ir.increment(e, 1, {
        route: r,
        outcome: "expanded"
    }), ar.record(e, l, {
        route: r
    }), lr.record(e, i.length, {
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
const gr = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
function yr(e, t, r, n) {
    return gr.test(t) ? (ir.increment(e, 1, {
        route: n,
        outcome: "server_rejected_body"
    }), `${t}\n\nThe request carried ${r.bytes} bytes of file contents substituted from ${r.paths} "${er}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t;
}
function wr(e) {
    return e.files.map((e)=>`"${er}${e.path}" was replaced with the contents of ${e.path} (${e.bytes} bytes) before the call.`).join("\n");
}
class vr {
    constructor(e, t){
        this.inner = e, this.getReadExecutor = t;
    }
    isBackendRouted(e) {
        return this.inner.isBackendRouted?.(e) ?? !1;
    }
    async execute(e, t, r) {
        if (0 === t.symbolicPathArguments.length) return this.inner.execute(e, t, r);
        const n = await fr(e, t, {
            route: "local",
            getReadExecutor: this.getReadExecutor
        });
        if ("none" === n.kind) return this.inner.execute(e, t, r);
        if ("failed" === n.kind) return n.result;
        let s;
        try {
            s = await this.inner.execute(e, n.expansion.args, r);
        } catch (t) {
            throw t instanceof Error && (t.message = yr(e, t.message, n.expansion, "local")), t;
        }
        return function(e, t, r, n) {
            const s = t.clone();
            return "success" === s.result.case ? s.result.value.content.push(new Gt._Z({
                content: {
                    case: "text",
                    value: new Gt.zN({
                        text: wr(r)
                    })
                }
            })) : "error" === s.result.case && (s.result.value.error = yr(e, s.result.value.error, r, n)), s;
        }(e, s, n.expansion, "local");
    }
}
const _r = Ie(re, (e)=>new B(e, Me("miniSweAgentBashArgs"), Je("miniSweAgentBashResult")), (e, t)=>{
    t.register(new I(e, Be("miniSweAgentBashArgs"), Oe("miniSweAgentBashResult")));
}), br = Ie(ne, (e)=>new B(e, Me("piBashArgs"), Je("piBashResult")), (e, t)=>{
    t.register(new I(e, Be("piBashArgs"), Oe("piBashResult")));
}), Sr = Ie(se, (e)=>new B(e, Me("piEditArgs"), Je("piEditResult")), (e, t)=>{
    t.register(new I(e, Be("piEditArgs"), Oe("piEditResult")));
}), kr = Ie(oe, (e)=>new B(e, Me("piFindArgs"), Je("piFindResult")), (e, t)=>{
    t.register(new I(e, Be("piFindArgs"), Oe("piFindResult")));
}), xr = Ie(ie, (e)=>new B(e, Me("piGrepArgs"), Je("piGrepResult")), (e, t)=>{
    t.register(new I(e, Be("piGrepArgs"), Oe("piGrepResult")));
}), Er = Ie(ae, (e)=>new B(e, Me("piLsArgs"), Je("piLsResult")), (e, t)=>{
    t.register(new I(e, Be("piLsArgs"), Oe("piLsResult")));
}), Ir = Ie(ce, (e)=>new B(e, Me("piReadArgs"), Je("piReadResult")), (e, t)=>{
    t.register(new I(e, Be("piReadArgs"), Oe("piReadResult")));
}), Tr = Ie(le, (e)=>new B(e, Me("piWriteArgs"), Je("piWriteResult")), (e, t)=>{
    t.register(new I(e, Be("piWriteArgs"), Oe("piWriteResult")));
});
var Cr = require("./module-44498.js"), Pr = require("./module-19260.js"), Ar = require("./module-62671.js"), Rr = require("./module-19950.js");
const Mr = Ie(ge, (e)=>new B(e, Me("shellArgs"), Je("shellResult")), (e, t)=>{
    t.register(new I(e, Be("shellArgs"), Oe("shellResult")));
}), Jr = Ie(ye, (e)=>new D(e, Me("shellStreamArgs"), Je("shellStream")), (e, t)=>{
    t.register(new T(e, Be("shellStreamArgs"), Oe("shellStream")));
}), Or = Ie(ke, (e)=>new B(e, Me("writeArgs"), Je("writeResult")), (e, t)=>{
    t.register(new I(e, Be("writeArgs"), Oe("writeResult")));
}), Br = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", Dr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
function qr(e, t) {
    return new Ar.jn({
        command: t.command ?? "",
        workingDirectory: t.workingDirectory ?? "",
        error: e,
        isReadonly: !0
    });
}
function Nr(e) {
    return {
        execute: async (t, r)=>new Ar.W4({
                result: {
                    case: "permissionDenied",
                    value: qr(e, r)
                }
            })
    };
}
function Fr(e) {
    return {
        async *execute (t, r) {
            yield new Ar.FI({
                event: {
                    case: "permissionDenied",
                    value: qr(e, r)
                }
            });
        }
    };
}
function Ur(e) {
    return {
        execute: async (t, r)=>new Cr.Lt({
                result: {
                    case: "permissionDenied",
                    value: qr(e, r)
                }
            })
    };
}
function Lr(e) {
    return {
        execute: async (t, r)=>new Rr.v3({
                result: {
                    case: "permissionDenied",
                    value: new Rr.U7({
                        path: r.path,
                        error: e,
                        isReadonly: !0
                    })
                }
            })
    };
}
function $r(e) {
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
function jr(e) {
    return {
        execute: async (t, r)=>new Gt.iz({
                result: {
                    case: "permissionDenied",
                    value: new Gt.HQ({
                        error: `${e} Tool: ${r.name}`,
                        isReadonly: !0
                    })
                }
            })
    };
}
function Gr(e) {
    return {
        execute: async (t, r)=>new Cr.nt({
                result: {
                    case: "error",
                    value: new Cr.Gv({
                        error: e
                    })
                }
            })
    };
}
function zr(e) {
    const t = [
        [
            Or,
            Lr(e.errorMessage)
        ],
        [
            nt,
            $r(e.errorMessage)
        ],
        [
            Ot,
            jr(e.errorMessage)
        ]
    ];
    return e.wrapShell && t.push([
        Mr,
        Nr(e.errorMessage)
    ], [
        Jr,
        Fr(e.errorMessage)
    ], [
        Ge,
        Ur(e.errorMessage)
    ]), e.includeWriteBackgroundShellStdin && t.push([
        ze,
        Gr(e.errorMessage)
    ]), t;
}
function Wr(e, t) {
    return new Ae(e, zr({
        errorMessage: Br,
        wrapShell: t,
        includeWriteBackgroundShellStdin: !1
    }));
}
function Hr(e) {
    return new Re(e, zr({
        errorMessage: Dr,
        wrapShell: !0,
        includeWriteBackgroundShellStdin: !0
    }));
}
const Kr = Ie(pe, (e)=>new B(e, Me("recordScreenArgs"), Je("recordScreenResult")), (e, t)=>{
    t.register(new I(e, Be("recordScreenArgs"), Oe("recordScreenResult")));
}), Vr = Ie(he, (e)=>new B(e, Me("requestContextArgs"), Je("requestContextResult")), (e, t)=>{
    t.register(new I(e, Be("requestContextArgs"), Oe("requestContextResult")));
});
var Yr = require("./module-82589.js");
const Qr = Ie(fe, (e)=>new B(e, Me("shellAllowlistPrecheckArgs"), Je("shellAllowlistPrecheckResult")), (e, t)=>{
    t.register(new I(e, Be("shellAllowlistPrecheckArgs"), Oe("shellAllowlistPrecheckResult")));
}), Xr = Ie(W, (e)=>new B(e, Me("forceBackgroundShellArgs"), Je("forceBackgroundShellResult")), (e, t)=>{
    t.register(new I(e, Be("forceBackgroundShellArgs"), Oe("forceBackgroundShellResult")));
});
function Zr(e, t) {
    e.hookApprovalRequirement = void 0 !== t ? new Ar.In(t) : void 0;
}
function en(e) {
    return e.hookApprovalRequirement;
}
function tn(e) {
    return new Ar.In({
        kind: Ar.b.FORCE_PROMPT,
        reason: e
    });
}
function rn(e) {
    return e?.kind === Ar.b.FORCE_PROMPT;
}
var nn = require("./module-18846.js");
const sn = Ie(we, (e)=>new B(e, Me("smartModeClassifierArgs"), Je("smartModeClassifierResult")), (e, t)=>{
    t.register(new I(e, Be("smartModeClassifierArgs"), Oe("smartModeClassifierResult")));
});
var on = require("./module-12544.js");
const an = "Sub-agent is currently running. You may send the follow-up message when it has completed.", cn = (0, ot.cF)(Symbol("pendingSubagentReplay"), void 0);
const ln = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
Error;
const un = Ie(_e, (e)=>new B(e, Me("subagentArgs"), Je("subagentResult")), (e, t)=>{
    t.register(new I(e, Be("subagentArgs"), Oe("subagentResult")));
}), dn = Ie(ve, (e)=>new B(e, Me("subagentAwaitArgs"), Je("subagentAwaitResult")), (e, t)=>{
    t.register(new I(e, Be("subagentAwaitArgs"), Oe("subagentAwaitResult")));
}), pn = Ie(H, (e)=>new B(e, Me("forceBackgroundSubagentArgs"), Je("forceBackgroundSubagentResult")), (e, t)=>{
    t.register(new I(e, Be("forceBackgroundSubagentArgs"), Oe("forceBackgroundSubagentResult")));
});
var mn = require("./module-83508.js");
const hn = Ie(be, (e)=>new B(e, Me("webFetchAllowlistPrecheckArgs"), Je("webFetchAllowlistPrecheckResult")), (e, t)=>{
    t.register(new I(e, Be("webFetchAllowlistPrecheckArgs"), Oe("webFetchAllowlistPrecheckResult")));
});
