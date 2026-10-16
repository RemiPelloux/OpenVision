"use strict";
function n(e) {
    const t = e.replace(/\\/g, "/").split("/"), r = t[t.length - 1] ?? "";
    return "SKILL.md" === r && t.length >= 2 ? t[t.length - 2] ?? "" : r;
}
require.d(exports, {
    rFE: ()=>Ye,
    jnL: ()=>Ge,
    riQ: ()=>je,
    acw: ()=>Je,
    iKs: ()=>ze,
    dSv: ()=>de,
    yJV: ()=>_t,
    sn5: ()=>Ie,
    QHB: ()=>ae,
    FHy: ()=>ut,
    J6s: ()=>dt,
    cME: ()=>lt.c,
    y7k: ()=>Ar,
    f9i: ()=>Mr,
    ha6: ()=>ue,
    Eyz: ()=>kt,
    CWo: ()=>br.C,
    Thz: ()=>Tr.Th,
    mHV: ()=>Tr.mH,
    RZw: ()=>Tr.RZ,
    Pwd: ()=>Ir.Pw,
    HwP: ()=>Jt,
    KHj: ()=>Nr.K,
    iul: ()=>ye,
    YhQ: ()=>we,
    OkD: ()=>Ee,
    kUN: ()=>Ke,
    sOX: ()=>Ae,
    IGV: ()=>At,
    iZk: ()=>Me,
    uwM: ()=>Se,
    d_R: ()=>ke,
    qwl: ()=>_e,
    eG3: ()=>xe,
    e7l: ()=>be,
    ryB: ()=>Re,
    $bB: ()=>Er,
    uaw: ()=>yr,
    mA: ()=>gr,
    Zg0: ()=>ie,
    RpG: ()=>Oe,
    vr_: ()=>Ut,
    w4j: ()=>De,
    zyy: ()=>Ce,
    Qw5: ()=>Ve,
    IjH: ()=>$e,
    IGA: ()=>Fe,
    PEk: ()=>Sr,
    I2x: ()=>Dr,
    oGr: ()=>kr,
    jH1: ()=>Le,
    u8v: ()=>Ue,
    bob: ()=>Be,
    _1u: ()=>et,
    rn8: ()=>st,
    bL4: ()=>qe,
    ODj: ()=>ct,
    Lxn: ()=>nt,
    Yib: ()=>ot,
    Hvh: ()=>Xe,
    ggl: ()=>rt,
    pY2: ()=>at,
    sfj: ()=>tt,
    JP: ()=>zt,
    TGP: ()=>pt,
    TIN: ()=>Pr,
    TZ: ()=>Ht,
    PiX: ()=>Wt,
    ghi: ()=>Gt,
    Rdb: ()=>Yt,
    qNu: ()=>Vt,
    T0F: ()=>Kt,
    ohZ: ()=>Zt,
    _As: ()=>St,
    mlu: ()=>it,
    pq5: ()=>vr,
    Mfc: ()=>xt,
    MZM: ()=>wr,
    VNS: ()=>ce,
    oAs: ()=>xr,
    GuN: ()=>_r,
    qkk: ()=>rr,
    wve: ()=>nr,
    ci8: ()=>n,
    XPF: ()=>Cr,
    rz0: ()=>Or,
    ZnQ: ()=>Rr,
    vx3: ()=>Pe,
    N1y: ()=>We,
    sC3: ()=>Fr,
    TQC: ()=>Te,
    Lnu: ()=>or
});
new Set([
    "EACCES",
    "EPERM",
    "ENOENT",
    "ENOTDIR",
    "EISDIR",
    "ELOOP",
    "ENAMETOOLONG"
]);
var o = require("./module-37949.js"), s = require("./module-13807.js"), i = require("./module-55094.js");
(0, o.h)("SimpleControlledExecManager"), (0, s.v5)("agent_exec.controlled.exec.duration_ms", {
    description: "Duration of controlled exec operations in milliseconds",
    labelNames: [
        "exec_case"
    ]
}), (0, s.Pu)("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
}), (0, s.Pu)("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
});
Error;
class a {
    constructor(e, t, r){
        this.exec = e, this.deserializeArgs = t, this.serializeResult = r;
    }
    handle(e, t) {
        const r = this.deserializeArgs(t);
        if (void 0 === r) return;
        const { id: n, args: o } = r;
        return async function*(r) {
            const s = performance.now(), i = [], a = await r.exec.execute(e, o, {
                execId: t.execId,
                hookContextCollector: i,
                deliverAgentStoreConflictNotices: !0 === t.acceptHookAdditionalContexts
            }), l = r.serializeResult(n, a);
            l.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s)), i.length > 0 && (l.hookAdditionalContexts = i), yield l;
        }(this);
    }
}
class l {
    constructor(e, t, r){
        this.exec = e, this.deserializeArgs = t, this.serializeStream = r;
    }
    handle(e, t) {
        const r = this.deserializeArgs(t);
        if (void 0 === r) return;
        const { id: n, args: o } = r;
        return async function*(r) {
            const s = performance.now(), a = [], l = r.exec.execute(e, o, {
                execId: t.execId,
                hookContextCollector: a,
                deliverAgentStoreConflictNotices: !0 === t.acceptHookAdditionalContexts
            });
            try {
                for await (const e of l){
                    const t = r.serializeStream(n, e);
                    t.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s)), yield t;
                }
            } finally{
                const e = a.filter((e)=>"agentStoreConflict" === e.hookEventName);
                e.length > 0 && (yield new i.yT({
                    id: n,
                    hookAdditionalContexts: e
                }));
            }
        }(this);
    }
}
var c = require("./module-98875.js");
async function u(e) {
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
var d = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
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
}, p = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const h = (0, o.h)("ExecutorResource"), m = (0, s.Pu)("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
});
class f {
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
            const o = d(n, (0, c.VI)(e.withName("ExecutorResource.execute")), !1), s = o.ctx;
            void 0 !== r?.execId && o.span.setAttribute("exec.id", r.execId);
            const a = (0, c.mJ)(s), l = a ? new i.Kg(a) : void 0, p = this.execManager.createExecInstance(s, (e)=>{
                const n = this.serializeArgs(e, t);
                return new i.Ye({
                    id: n.id,
                    message: n.message,
                    execId: r?.execId,
                    machineId: r?.machineId,
                    spanContext: l,
                    acceptHookAdditionalContexts: void 0 !== r?.hookContextCollector
                });
            }), f = await u(p);
            if (void 0 === f) throw new Error("No exec result");
            let { firstItem: g, rest: y } = f;
            const v = (e)=>{
                if (void 0 !== r?.hookContextCollector && e.hookAdditionalContexts.length > 0) {
                    r.hookContextCollector.push(...e.hookAdditionalContexts);
                    for (const t of e.hookAdditionalContexts)m.increment(s, 1, {
                        hook_event_name: t.hookEventName
                    });
                }
            };
            v(g);
            let w = this.deserializeResult(g);
            for(; void 0 === w;){
                const e = await u(y);
                if (void 0 === e) throw new Error("No result value");
                g = e.firstItem, y = e.rest, v(g), w = this.deserializeResult(g);
            }
            return (async ()=>{
                try {
                    for await (const e of y)v(e);
                } catch (e) {
                    h.info(s, "Ignoring exec stream shutdown during detached drain", {
                        error: e
                    });
                }
            })().catch(()=>{}), w;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            p(n);
        }
    }
}
class g {
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
            const o = d(n, (0, c.VI)(e.withName("StreamExecutorResource.execute")), !1).ctx, s = (0, c.mJ)(o), a = s ? new i.Kg(s) : void 0, l = this.execManager.createExecInstance(o, (e)=>{
                const n = this.serializeArgs(e, t);
                return new i.Ye({
                    id: n.id,
                    message: n.message,
                    execId: r?.execId,
                    machineId: r?.machineId,
                    spanContext: a,
                    acceptHookAdditionalContexts: void 0 !== r?.hookContextCollector || !0 === r?.deliverAgentStoreConflictNotices
                });
            });
            for await (const e of l){
                void 0 !== r?.hookContextCollector && e.hookAdditionalContexts.length > 0 && r.hookContextCollector.push(...e.hookAdditionalContexts);
                const t = this.deserializeStream(e);
                void 0 !== t && (yield t);
            }
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            p(n);
        }
    }
}
const y = "agent-store-conflict-executor", v = "agent-store-conflict-notice-executor", w = "background-shell-executor", b = "canvas-diagnostics-executor", _ = "computer-use-executor", S = "conversation-search-executor", x = "delete-executor", k = "diagnostics-executor", E = "fetch-executor", T = "force-background-shell-executor", C = "force-background-subagent-executor", I = "git-diff-executor", A = "grep-executor", P = "hook-executor", M = "list-mcp-resources-executor", R = "ls-executor", O = "mcp-allowlist-precheck-executor", D = "mcp-executor", N = "mcp-state-executor", F = "mini-swe-agent-bash-executor", L = "pi-bash-executor", U = "pi-edit-executor", B = "pi-find-executor", $ = "pi-grep-executor", q = "pi-ls-executor", j = "pi-read-executor", J = "pi-write-executor", z = "read-executor", H = "read-mcp-resource-executor", W = "record-screen-executor", G = "redacted-read-executor", Y = "request-context-executor", V = "shell-allowlist-precheck-executor", K = "shell-executor", Z = "shell-stream-executor", X = "smart-mode-classifier-executor", Q = "subagent-await-executor", ee = "subagent-executor", te = "web-fetch-allowlist-precheck-executor", re = "write-background-shell-input-executor", ne = "write-executor", oe = "@anysphere/agent-exec/resource/";
function se(e) {
    return Symbol.for(`${oe}${e}`);
}
function ie(e, t, r) {
    return {
        name: e,
        symbol: se(e),
        remoteImplementation: t,
        registerControlledImplementation: r
    };
}
class ae {
    constructor(e, t){
        this.resourceEntries = new Map, this.remoteExecManager = e, void 0 !== t && this.registerAll(t);
    }
    register(e) {
        this.resourceEntries.set(e, e.remoteImplementation(this.remoteExecManager));
    }
    set(e, t) {
        this.resourceEntries.set(e, t);
    }
    registerAll(e) {
        for (const t of e)this.register(t);
    }
    get(e) {
        return this.resourceEntries.get(e);
    }
    entries() {
        return this.resourceEntries.entries();
    }
}
class le {
    constructor(e, t){
        this.resource = e, this.value = t;
    }
}
function ce(e, t) {
    return [
        e,
        t
    ];
}
class ue {
    constructor(){
        this.resources = new Map;
    }
    register(e, t) {
        this.resources.set(e.symbol, new le(e, t));
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
class de {
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
class pe {
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
function he(e) {
    return function(t, r) {
        return new i.Ye({
            id: t,
            message: {
                case: e,
                value: r
            }
        });
    };
}
function me(e) {
    return (t)=>{
        if (t.message.case === e) return t.message.value;
    };
}
function fe(e) {
    return function(t, r) {
        const n = {
            case: e,
            value: r
        };
        return new i.yT({
            id: t,
            message: n
        });
    };
}
function ge(e) {
    return function(t) {
        if (t.message.case === e) return {
            id: t.id,
            args: t.message.value
        };
    };
}
const ye = ie(y, (e)=>new f(e, he("agentStoreConflictArgs"), me("agentStoreConflictResult")), (e, t)=>{
    t.register(new a(e, ge("agentStoreConflictArgs"), fe("agentStoreConflictResult")));
});
new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded",
    "gap"
]);
class ve {
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
const we = ie(v, (e)=>new ve, (e, t)=>{});
async function be(e, t, r, n) {
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
async function _e(e, t, r, n) {
    return await e.execute(t, {
        op: "peek",
        ...void 0 !== r?.conversationId ? {
            conversationId: r.conversationId
        } : {}
    }, n);
}
async function Se(e, t, r, n, o) {
    0 !== r.length && await e.execute(t, {
        op: "ack",
        eventIds: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, o);
}
async function xe(e, t, r, n, o) {
    0 !== r.length && await e.execute(t, {
        op: "release",
        eventIds: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, o);
}
async function ke(e, t, r, n, o) {
    0 !== r.length && await e.execute(t, {
        op: "noteDeferredEagerWrittenPaths",
        writtenPaths: r,
        ...void 0 !== n?.conversationId ? {
            conversationId: n.conversationId
        } : {}
    }, o);
}
const Ee = ie(w, (e)=>new f(e, he("backgroundShellSpawnArgs"), me("backgroundShellSpawnResult")), (e, t)=>{
    t.register(new a(e, ge("backgroundShellSpawnArgs"), fe("backgroundShellSpawnResult")));
}), Te = ie(re, (e)=>new f(e, he("writeShellStdinArgs"), me("writeShellStdinResult")), (e, t)=>{
    t.register(new a(e, ge("writeShellStdinArgs"), fe("writeShellStdinResult")));
});
function Ce(e) {
    const t = {};
    return "string" == typeof e.title && e.title.trim().length > 0 && (t.title = e.title), "string" == typeof e.cwd && e.cwd.trim().length > 0 && (t.cwd = e.cwd), "number" == typeof e.startTimeMs && Number.isFinite(e.startTimeMs) && e.startTimeMs > 0 && (t.startTimeMs = String(Math.floor(e.startTimeMs))), Object.keys(t).length > 0 ? t : void 0;
}
const Ie = "local";
const Ae = ie(b, (e)=>new f(e, he("canvasDiagnosticsArgs"), me("canvasDiagnosticsResult")), (e, t)=>{
    t.register(new a(e, ge("canvasDiagnosticsArgs"), fe("canvasDiagnosticsResult")));
});
Error;
function Pe(e) {
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
const Me = ie(_, (e)=>new f(e, he("computerUseArgs"), me("computerUseResult")), (e, t)=>{
    t.register(new a(e, ge("computerUseArgs"), fe("computerUseResult")));
}), Re = ie(S, (e)=>new f(e, he("conversationSearchArgs"), me("conversationSearchResult")), (e, t)=>{
    t.register(new a(e, ge("conversationSearchArgs"), fe("conversationSearchResult")));
}), Oe = ie(x, (e)=>new f(e, he("deleteArgs"), me("deleteResult")), (e, t)=>{
    t.register(new a(e, ge("deleteArgs"), fe("deleteResult")));
}), De = ie(k, (e)=>new f(e, he("diagnosticsArgs"), me("diagnosticsResult")), (e, t)=>{
    t.register(new a(e, ge("diagnosticsArgs"), fe("diagnosticsResult")));
});
var Ne = require("./module-33002.js");
(0, Ne.cF)(Symbol("execConversationId"), void 0), (0, Ne.cF)(Symbol("execRequestId"), void 0), (0, Ne.cF)(Symbol("execBrowserOperationSource"), void 0);
const Fe = ie(E, (e)=>new f(e, he("fetchArgs"), me("fetchResult")), (e, t)=>{
    t.register(new a(e, ge("fetchArgs"), fe("fetchResult")));
}), Le = ie(I, (e)=>new f(e, he("gitDiffRequest"), me("gitDiffResponse")), (e, t)=>{
    t.register(new a(e, ge("gitDiffRequest"), fe("gitDiffResponse")));
}), Ue = ie(A, (e)=>new f(e, he("grepArgs"), me("grepResult")), (e, t)=>{
    t.register(new a(e, ge("grepArgs"), fe("grepResult")));
});
require("./module-307.js");
const Be = ie(P, (e)=>new f(e, he("executeHookArgs"), me("executeHookResult")), (e, t)=>{
    t.register(new a(e, ge("executeHookArgs"), fe("executeHookResult")));
});
(0, Ne.cF)(Symbol("execHookConversationId"), void 0), (0, Ne.cF)(Symbol("execHookGenerationId"), void 0), (0, Ne.cF)(Symbol("execHookModel"), void 0);
const $e = (0, Ne.cF)(Symbol("execHookWorkspaceRoots"), void 0), qe = ie(R, (e)=>new f(e, he("lsArgs"), me("lsResult")), (e, t)=>{
    t.register(new a(e, ge("lsArgs"), fe("lsResult")));
}), je = "cursor-ide-browser", Je = "cursor-dev-control", ze = "custom-user-tools", He = new Set([
    "cursor-app-control",
    "cursor-backend-control",
    "cursor-browser-extension",
    je,
    Je,
    ze,
    "fsd",
    "cursor-subscriptions",
    "cursor-cloud",
    "suggestions",
    "Cursor Slack Tools",
    "Cursor Automation Tools"
]);
function We(e) {
    return !He.has(e);
}
const Ge = "cursor", Ye = new Set([
    Je,
    je
]);
function Ve(e) {
    if (void 0 !== e && 0 !== Object.keys(e).length) try {
        return JSON.stringify(e);
    } catch  {
        return;
    }
}
function Ke(e) {
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
function Ze(e) {
    if (void 0 !== e) try {
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function Xe(e) {
    return Ze(e.inputSchemaJson) ?? e.inputSchema?.toJson();
}
var Qe;
function et(e) {
    return void 0 === e || void 0 === e.serverIdentifiers;
}
function tt(...e) {
    const [t, r] = e;
    return e.length < 2 ? t : et(r) ? {
        serverIdentifiers: void 0,
        reason: t?.reason ?? r?.reason
    } : void 0 === t ? r : et(t) ? {
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
function rt(e) {
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
function nt(e) {
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
}(Qe || (Qe = {}));
const ot = ie(D, (e)=>new f(e, he("mcpArgs"), me("mcpResult")), (e, t)=>{
    t.register(new a(e, ge("mcpArgs"), fe("mcpResult")));
}), st = ie(M, (e)=>new f(e, he("listMcpResourcesExecArgs"), me("listMcpResourcesExecResult")), (e, t)=>{
    t.register(new a(e, ge("listMcpResourcesExecArgs"), fe("listMcpResourcesExecResult")));
}), it = ie(H, (e)=>new f(e, he("readMcpResourceExecArgs"), me("readMcpResourceExecResult")), (e, t)=>{
    t.register(new a(e, ge("readMcpResourceExecArgs"), fe("readMcpResourceExecResult")));
}), at = ie(N, (e)=>new f(e, he("mcpStateExecArgs"), me("mcpStateExecResult")), (e, t)=>{
    t.register(new a(e, ge("mcpStateExecArgs"), fe("mcpStateExecResult")));
});
var lt = require("./module-88107.js");
const ct = ie(O, (e)=>new f(e, he("mcpAllowlistPrecheckArgs"), me("mcpAllowlistPrecheckResult")), (e, t)=>{
    t.register(new a(e, ge("mcpAllowlistPrecheckArgs"), fe("mcpAllowlistPrecheckResult")));
}), ut = "mcps", dt = "tools";
function pt(e) {
    try {
        const t = JSON.parse(e);
        return "string" == typeof t.name && t.name.length > 0 ? t.name : "string" == typeof t.toolName && t.toolName.length > 0 ? t.toolName : void 0;
    } catch  {
        return;
    }
}
var ht = require("./module-20941.js"), mt = require("./module-11197.js"), ft = require("./module-88623.js"), gt = require("./module-90066.js"), yt = require("./module-65716.js"), vt = require("./module-36038.js");
const wt = new TextEncoder;
async function bt(e) {
    const t = wt.encode(e), r = await crypto.subtle.digest("SHA-256", t);
    return {
        sha256: [
            ...new Uint8Array(r)
        ].map((e)=>e.toString(16).padStart(2, "0")).join(""),
        bytes: t.byteLength
    };
}
class _t {
    constructor(e){
        this.inner = e;
    }
    async execute(e, t, r) {
        if (!0 !== t.digestOnly) return this.inner.execute(e, t, r);
        const n = new ft.a2({
            ...t,
            digestOnly: void 0
        });
        return async function(e) {
            if ("success" !== e.result.case) return e;
            const t = e.result.value;
            if ("content" !== t.output.case) return e;
            const { sha256: r, bytes: n } = await bt(t.output.value);
            return new ft.sV({
                result: {
                    case: "success",
                    value: new ft.mE({
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
const St = ie(z, (e)=>new f(e, he("readArgs"), me("readResult")), (e, t)=>{
    t.register(new a(e, ge("readArgs"), fe("readResult")));
}), xt = ie(G, (e)=>new f(e, he("redactedReadArgs"), me("redactedReadResult")), (e, t)=>{
    t.register(new a(e, ge("redactedReadArgs"), fe("redactedReadResult")));
}), kt = "$file:", Et = ht.p, Tt = 16777216, Ct = 4;
function It(e) {
    if ("string" != typeof e || !e.startsWith(kt)) return;
    const t = e.slice(kt.length);
    return (0, gt.Z1)(t) ? t : void 0;
}
function At(e) {
    const t = new Set, r = (e)=>{
        const n = It(e);
        void 0 !== n ? t.add(n) : Array.isArray(e) ? e.forEach(r) : null !== e && "object" == typeof e && Object.values(e).forEach(r);
    };
    return r(e), [
        ...t
    ];
}
const Pt = (0, s.Pu)("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
}), Mt = (0, s.v5)("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
}), Rt = (0, s.Pu)("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
}), Ot = (0, s.v5)("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});
function Dt(e, t, r) {
    return {
        kind: e,
        message: `Could not resolve the symbolic argument "${kt}${t}": ${r} A string argument of the form "${kt}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.`
    };
}
class Nt extends Error {
    constructor(e){
        super(e.message), this.failure = e;
    }
}
async function Ft(e, t, r, n, o, { maxFileBytes: s = Et, maxTotalBytes: i = Tt }) {
    if (t.length > Ct) throw new Nt(Dt("too_many", t[Ct] ?? "", `at most ${Ct} symbolic arguments may be used in one call (${t.length} given). Split the call or pass paths to tools that accept them.`));
    const a = r();
    if (void 0 === a) throw new Nt(Dt("no_read_executor", t[0] ?? "", "this environment cannot read files on behalf of a tool call."));
    const l = await (0, yt.xb)(t, (t)=>(async function(e, t, r, n, o, s) {
            const i = await t.execute(e, new ft.a2({
                path: r,
                toolCallId: n,
                ...s ? {
                    digestOnly: !0
                } : {}
            }));
            switch(i.result.case){
                case "success":
                    {
                        const t = i.result.value, n = s && void 0 !== t.sha256 && void 0 !== t.sizeBytes ? {
                            sha256: t.sha256,
                            bytes: Number(t.sizeBytes)
                        } : void 0;
                        if (void 0 === n && "content" !== t.output.case) throw new Nt(Dt("not_text", r, "the file is not a text file."));
                        if (s && (Rt.increment(e, 1, {
                            source: void 0 !== n ? "vm_digest" : "outdated_executor"
                        }), void 0 === n)) throw new Nt(Dt("outdated_executor", r, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
                        const a = "content" === t.output.case ? t.output.value : void 0, { sha256: l, bytes: c } = n ?? await bt(a ?? "");
                        if (t.truncated || c > o) throw new Nt(Dt("too_large", r, `the file is too large to inline (${Number(t.fileSize) || c} bytes; at most ${o} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
                        return {
                            content: a,
                            bytes: c,
                            sha256: l
                        };
                    }
                case "fileNotFound":
                    throw new Nt(Dt("not_found", r, "the file does not exist."));
                case "permissionDenied":
                    throw new Nt(Dt("permission_denied", r, "reading it was not permitted."));
                case "rejected":
                    throw new Nt(Dt("rejected", r, `${i.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
                case "invalidFile":
                    throw new Nt(Dt("not_text", r, "the file cannot be read as text."));
                case "error":
                    throw new Nt(Dt("read_error", r, i.result.value.error));
                default:
                    throw new Nt(Dt("read_error", r, "the read returned no result."));
            }
        })(e, a, t, n, s, o), {
        max: Ct
    });
    let c = 0;
    for (const [e, r] of l)if (c += r.bytes, c > i) throw new Nt(Dt("over_budget", e, `together the ${t.length} symbolic arguments exceed the ${i} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
    return l;
}
function Lt(e, t) {
    return e instanceof Nt ? e.failure : Dt("read_error", t, e instanceof Error ? e.message : String(e));
}
async function Ut(e, { paths: t, getReadExecutor: r, toolCallId: n, ...o }) {
    const s = [
        ...new Set(t)
    ];
    try {
        const t = await Ft(e, s, r, n, !0, o);
        return Pt.increment(e, 1, {
            route: "review",
            outcome: "described"
        }), {
            kind: "described",
            descriptors: s.map((e)=>{
                const r = t.get(e);
                return new mt.n({
                    path: e,
                    sha256: r?.sha256 ?? "",
                    sizeBytes: BigInt(r?.bytes ?? 0)
                });
            })
        };
    } catch (t) {
        const r = Lt(t, s[0] ?? "");
        return Pt.increment(e, 1, {
            route: "review",
            outcome: r.kind
        }), {
            kind: "failed",
            failure: r
        };
    }
}
async function Bt(e, t, { route: r, getReadExecutor: n, ...o }) {
    if (0 === t.symbolicPathArguments.length) return {
        kind: "none"
    };
    const s = new Map(t.symbolicPathArguments.map((e)=>[
            e.path,
            e
        ])), i = [
        ...s.keys()
    ], a = (t)=>(Pt.increment(e, 1, {
            route: r,
            outcome: t.kind
        }), {
            kind: "failed",
            failure: t,
            result: new mt.iz({
                result: {
                    case: "error",
                    value: new mt.Nh({
                        error: t.message
                    })
                }
            })
        });
    let l;
    try {
        l = await Ft(e, i, n, t.toolCallId, !1, o);
    } catch (e) {
        return a(Lt(e, i[0] ?? ""));
    }
    let c = 0;
    for (const [e, t] of l){
        c += t.bytes;
        const r = s.get(e);
        if (r?.sha256 !== t.sha256) return a(Dt("content_changed", e, `the file changed after the call was reviewed (${r?.sizeBytes ?? 0} bytes then, ${t.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
    }
    const u = new Map([
        ...l
    ].map(([e, t])=>[
            e,
            t.content ?? ""
        ])), d = function(e, t) {
        const r = (e)=>{
            const n = It(e);
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
            vt.Value.fromJson(t)
        ])), p.symbolicPathArguments = [], Pt.increment(e, 1, {
        route: r,
        outcome: "expanded"
    }), Mt.record(e, c, {
        route: r
    }), Ot.record(e, i.length, {
        route: r
    }), {
        kind: "expanded",
        expansion: {
            args: p,
            files: [
                ...l
            ].map(([e, t])=>({
                    path: e,
                    bytes: t.bytes
                })),
            paths: i.length,
            bytes: c
        }
    };
}
const $t = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
function qt(e, t, r, n) {
    return $t.test(t) ? (Pt.increment(e, 1, {
        route: n,
        outcome: "server_rejected_body"
    }), `${t}\n\nThe request carried ${r.bytes} bytes of file contents substituted from ${r.paths} "${kt}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t;
}
function jt(e) {
    return e.files.map((e)=>`"${kt}${e.path}" was replaced with the contents of ${e.path} (${e.bytes} bytes) before the call.`).join("\n");
}
class Jt {
    constructor(e, t){
        this.inner = e, this.getReadExecutor = t;
    }
    isBackendRouted(e) {
        return this.inner.isBackendRouted?.(e) ?? !1;
    }
    async execute(e, t, r) {
        if (0 === t.symbolicPathArguments.length) return this.inner.execute(e, t, r);
        const n = await Bt(e, t, {
            route: "local",
            getReadExecutor: this.getReadExecutor
        });
        if ("none" === n.kind) return this.inner.execute(e, t, r);
        if ("failed" === n.kind) return n.result;
        let o;
        try {
            o = await this.inner.execute(e, n.expansion.args, r);
        } catch (t) {
            throw t instanceof Error && (t.message = qt(e, t.message, n.expansion, "local")), t;
        }
        return function(e, t, r, n) {
            const o = t.clone();
            return "success" === o.result.case ? o.result.value.content.push(new mt._Z({
                content: {
                    case: "text",
                    value: new mt.zN({
                        text: jt(r)
                    })
                }
            })) : "error" === o.result.case && (o.result.value.error = qt(e, o.result.value.error, r, n)), o;
        }(e, o, n.expansion, "local");
    }
}
const zt = ie(F, (e)=>new f(e, he("miniSweAgentBashArgs"), me("miniSweAgentBashResult")), (e, t)=>{
    t.register(new a(e, ge("miniSweAgentBashArgs"), fe("miniSweAgentBashResult")));
}), Ht = ie(L, (e)=>new f(e, he("piBashArgs"), me("piBashResult")), (e, t)=>{
    t.register(new a(e, ge("piBashArgs"), fe("piBashResult")));
}), Wt = ie(U, (e)=>new f(e, he("piEditArgs"), me("piEditResult")), (e, t)=>{
    t.register(new a(e, ge("piEditArgs"), fe("piEditResult")));
}), Gt = ie(B, (e)=>new f(e, he("piFindArgs"), me("piFindResult")), (e, t)=>{
    t.register(new a(e, ge("piFindArgs"), fe("piFindResult")));
}), Yt = ie($, (e)=>new f(e, he("piGrepArgs"), me("piGrepResult")), (e, t)=>{
    t.register(new a(e, ge("piGrepArgs"), fe("piGrepResult")));
}), Vt = ie(q, (e)=>new f(e, he("piLsArgs"), me("piLsResult")), (e, t)=>{
    t.register(new a(e, ge("piLsArgs"), fe("piLsResult")));
}), Kt = ie(j, (e)=>new f(e, he("piReadArgs"), me("piReadResult")), (e, t)=>{
    t.register(new a(e, ge("piReadArgs"), fe("piReadResult")));
}), Zt = ie(J, (e)=>new f(e, he("piWriteArgs"), me("piWriteResult")), (e, t)=>{
    t.register(new a(e, ge("piWriteArgs"), fe("piWriteResult")));
});
var Xt = require("./module-44498.js"), Qt = require("./module-19260.js"), er = require("./module-62671.js"), tr = require("./module-19950.js");
const rr = ie(K, (e)=>new f(e, he("shellArgs"), me("shellResult")), (e, t)=>{
    t.register(new a(e, ge("shellArgs"), fe("shellResult")));
}), nr = ie(Z, (e)=>new g(e, he("shellStreamArgs"), me("shellStream")), (e, t)=>{
    t.register(new l(e, ge("shellStreamArgs"), fe("shellStream")));
}), or = ie(ne, (e)=>new f(e, he("writeArgs"), me("writeResult")), (e, t)=>{
    t.register(new a(e, ge("writeArgs"), fe("writeResult")));
}), sr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", ir = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
function ar(e, t) {
    return new er.jn({
        command: t.command ?? "",
        workingDirectory: t.workingDirectory ?? "",
        error: e,
        isReadonly: !0
    });
}
function lr(e) {
    return {
        execute: async (t, r)=>new er.W4({
                result: {
                    case: "permissionDenied",
                    value: ar(e, r)
                }
            })
    };
}
function cr(e) {
    return {
        async *execute (t, r) {
            yield new er.FI({
                event: {
                    case: "permissionDenied",
                    value: ar(e, r)
                }
            });
        }
    };
}
function ur(e) {
    return {
        execute: async (t, r)=>new Xt.Lt({
                result: {
                    case: "permissionDenied",
                    value: ar(e, r)
                }
            })
    };
}
function dr(e) {
    return {
        execute: async (t, r)=>new tr.v3({
                result: {
                    case: "permissionDenied",
                    value: new tr.U7({
                        path: r.path,
                        error: e,
                        isReadonly: !0
                    })
                }
            })
    };
}
function pr(e) {
    return {
        execute: async (t, r)=>new Qt.Pi({
                result: {
                    case: "permissionDenied",
                    value: new Qt.QG({
                        path: r.path,
                        clientVisibleError: e,
                        isReadonly: !0
                    })
                }
            })
    };
}
function hr(e) {
    return {
        execute: async (t, r)=>new mt.iz({
                result: {
                    case: "permissionDenied",
                    value: new mt.HQ({
                        error: `${e} Tool: ${r.name}`,
                        isReadonly: !0
                    })
                }
            })
    };
}
function mr(e) {
    return {
        execute: async (t, r)=>new Xt.nt({
                result: {
                    case: "error",
                    value: new Xt.Gv({
                        error: e
                    })
                }
            })
    };
}
function fr(e) {
    const t = [
        [
            or,
            dr(e.errorMessage)
        ],
        [
            Oe,
            pr(e.errorMessage)
        ],
        [
            ot,
            hr(e.errorMessage)
        ]
    ];
    return e.wrapShell && t.push([
        rr,
        lr(e.errorMessage)
    ], [
        nr,
        cr(e.errorMessage)
    ], [
        Ee,
        ur(e.errorMessage)
    ]), e.includeWriteBackgroundShellStdin && t.push([
        Te,
        mr(e.errorMessage)
    ]), t;
}
function gr(e, t) {
    return new de(e, fr({
        errorMessage: sr,
        wrapShell: t,
        includeWriteBackgroundShellStdin: !1
    }));
}
function yr(e) {
    return new pe(e, fr({
        errorMessage: ir,
        wrapShell: !0,
        includeWriteBackgroundShellStdin: !0
    }));
}
const vr = ie(W, (e)=>new f(e, he("recordScreenArgs"), me("recordScreenResult")), (e, t)=>{
    t.register(new a(e, ge("recordScreenArgs"), fe("recordScreenResult")));
}), wr = ie(Y, (e)=>new f(e, he("requestContextArgs"), me("requestContextResult")), (e, t)=>{
    t.register(new a(e, ge("requestContextArgs"), fe("requestContextResult")));
});
var br = require("./module-82589.js");
const _r = ie(V, (e)=>new f(e, he("shellAllowlistPrecheckArgs"), me("shellAllowlistPrecheckResult")), (e, t)=>{
    t.register(new a(e, ge("shellAllowlistPrecheckArgs"), fe("shellAllowlistPrecheckResult")));
}), Sr = ie(T, (e)=>new f(e, he("forceBackgroundShellArgs"), me("forceBackgroundShellResult")), (e, t)=>{
    t.register(new a(e, ge("forceBackgroundShellArgs"), fe("forceBackgroundShellResult")));
});
function xr(e, t) {
    e.hookApprovalRequirement = void 0 !== t ? new er.In(t) : void 0;
}
function kr(e) {
    return e.hookApprovalRequirement;
}
function Er(e) {
    return new er.In({
        kind: er.b.FORCE_PROMPT,
        reason: e
    });
}
var Tr = require("./module-18846.js");
const Cr = ie(X, (e)=>new f(e, he("smartModeClassifierArgs"), me("smartModeClassifierResult")), (e, t)=>{
    t.register(new a(e, ge("smartModeClassifierArgs"), fe("smartModeClassifierResult")));
});
var Ir = require("./module-12544.js");
const Ar = "Sub-agent is currently running. You may send the follow-up message when it has completed.", Pr = (0, Ne.cF)(Symbol("pendingSubagentReplay"), void 0);
const Mr = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
Error;
const Rr = ie(ee, (e)=>new f(e, he("subagentArgs"), me("subagentResult")), (e, t)=>{
    t.register(new a(e, ge("subagentArgs"), fe("subagentResult")));
}), Or = ie(Q, (e)=>new f(e, he("subagentAwaitArgs"), me("subagentAwaitResult")), (e, t)=>{
    t.register(new a(e, ge("subagentAwaitArgs"), fe("subagentAwaitResult")));
}), Dr = ie(C, (e)=>new f(e, he("forceBackgroundSubagentArgs"), me("forceBackgroundSubagentResult")), (e, t)=>{
    t.register(new a(e, ge("forceBackgroundSubagentArgs"), fe("forceBackgroundSubagentResult")));
});
var Nr = require("./module-83508.js");
const Fr = ie(te, (e)=>new f(e, he("webFetchAllowlistPrecheckArgs"), me("webFetchAllowlistPrecheckResult")), (e, t)=>{
    t.register(new a(e, ge("webFetchAllowlistPrecheckArgs"), fe("webFetchAllowlistPrecheckResult")));
});
