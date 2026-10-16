"use strict";
require.d(exports, {
    uU: ()=>ve,
    KC: ()=>de,
    rw: ()=>ue
});
var n = require("./module-73024.js"), s = require("./module-48161.js"), o = require("./module-76760.js"), i = require("./module-75919.js"), a = require("./module-56215.js"), c = require("./module-81958.js");
function l(e, t) {
    n.mkdirSync(o.dirname(e), {
        recursive: !0
    });
    const r = `${e}.${process.pid}.${Date.now().toString(36)}`;
    try {
        n.writeFileSync(r, t), n.renameSync(r, e);
    } catch (e) {
        throw n.rmSync(r, {
            force: !0
        }), e;
    }
}
const u = c.Ik({
    schema: c.eu(1),
    generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
    label: c.Yj(),
    builtAt: c.Yj().optional(),
    servedAt: c.Yj(),
    pid: c.ai().int().nonnegative()
});
function d(e) {
    return o.join(e, "last-served.json");
}
function p(e) {
    const t = d(e);
    let r;
    try {
        r = n.readFileSync(t, "utf8");
    } catch (e) {
        if (function(e, t) {
            return e instanceof Error && "code" in e && e.code === t;
        }(e, "ENOENT")) return;
        throw e;
    }
    return function(e, t) {
        const r = u.safeParse(e);
        if (!r.success) {
            const e = r.error.issues[0], n = void 0 === e ? "" : ` at ${e.path.join(".") || "<root>"}`;
            throw new Error(`${t}: invalid last-served record${n}: ${e?.message ?? "unknown"}`);
        }
        const { builtAt: n, ...s } = r.data;
        return {
            ...s,
            ...void 0 === n ? {} : {
                builtAt: n
            }
        };
    }(JSON.parse(r), t);
}
c.Ik({
    schema: c.eu(1),
    pid: c.ai().int().nonnegative(),
    writtenAt: c.Yj(),
    enabledBy: c.k5([
        "gate",
        "env"
    ]),
    interfaceRevision: c.ai().int(),
    requiredCapabilities: c.YO(c.Yj()),
    natives: c.YO(c.Yj()),
    clientVersion: c.Yj().optional(),
    floor: c.Ik({
        generation: c.Yj(),
        label: c.Yj(),
        builtAt: c.Yj().optional(),
        commit: c.Yj().optional(),
        source: c.k5([
            "floor",
            "static"
        ])
    }),
    timing: c.Ik({
        pollIntervalMs: c.ai().nullable(),
        requestIdleTimeoutMs: c.ai().nullable()
    }).optional()
});
function m(e, t = process.pid) {
    return o.join(e, "hosts", `${t}.json`);
}
function h(e, t) {
    return e instanceof Error && "code" in e && e.code === t;
}
var f = require("./module-28967.js");
const g = c.Ik({
    schema: c.eu(1),
    pid: c.ai().int().positive(),
    attempts: c.YO(c.Ik({
        generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
        install: c.Yj(),
        phase: c.k5([
            "evaluate",
            "turn"
        ]),
        since: c.Yj()
    })),
    reportedBy: c.ai().int().positive().optional()
});
function y(e) {
    return o.join(e, "attempts");
}
function w(e, t) {
    return o.join(y(e), `${t}.json`);
}
function v(e, t) {
    n.rmSync(w(e, t), {
        force: !0
    });
}
function _(e) {
    if (e === process.pid) return !0;
    try {
        return process.kill(e, 0), !0;
    } catch (e) {
        return !(e instanceof Error && "code" in e && "ESRCH" === e.code);
    }
}
c.Ik({
    schema: c.eu(1),
    pid: c.ai().int().nonnegative(),
    writtenAt: c.Yj(),
    generations: c.YO(c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"))
});
function A(e, t) {
    return o.join(function(e) {
        return o.join(e, "serving");
    }(e), `${t}.json`);
}
function S(e) {
    n.rmSync(A(e, process.pid), {
        force: !0
    });
}
var b = require("./module-84990.js");
function E(e) {
    return {
        mainVersion: e.mainVersion,
        builtAt: e.builtAt,
        rollback: "rollback" === e.kind
    };
}
function I({ versionsDir: e, generation: t }) {
    if (void 0 !== t && /^[A-Za-z0-9._-]+$/.test(t)) try {
        return E((0, b.WI)(o.join(e, t)));
    } catch  {
        return;
    }
}
function C(e, t, r) {
    return !0 === e.rollback || void 0 === t || (0, b.Oj)(t, r) >= 0;
}
function k(e, t, { lastServed: r } = {}) {
    const n = void 0 === e.builtAt ? Number.NaN : Date.parse(e.builtAt);
    if (Number.isNaN(n)) return;
    const s = (0, b.K1)({
        candidateBuiltAt: t.builtAt,
        floorBuiltAt: e.builtAt
    }), o = void 0 === e.version ? void 0 : (0, b.VW)(e.version);
    if (void 0 === o) return void 0 === s ? void 0 : {
        check: "floor",
        message: s
    };
    const i = void 0 === t.mainVersion ? void 0 : (0, b.VW)(t.mainVersion);
    return function(e, t, r) {
        const n = Date.parse(t.builtAt);
        return n >= e && (void 0 === r || n >= Date.parse(r.builtAt));
    }(n, t, r) && C(t, i, o) ? void 0 : void 0 !== o.pre ? void 0 !== s ? {
        check: "floor",
        message: s
    } : C(t, i, o) ? void 0 : {
        check: "older",
        message: `records ${t.mainVersion}, older than this client's ${e.version}, and is not a rollback`
    } : void 0 === i ? {
        check: "floor",
        message: s ?? `packed ${t.builtAt}, before the module this client last served (packed ${r?.builtAt})`
    } : function(e, t) {
        return e.major > t.major || e.major === t.major && e.minor > t.minor;
    }(i, o) ? void 0 : {
        check: "before_cut",
        message: `records ${t.mainVersion}, from before the ${o.major}.${o.minor} release branch was cut; this client's built-in module already has that code`
    };
}
var x = require("./module-75405.js");
const T = 864e5, R = c.Ik({
    generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"),
    label: c.Yj(),
    install: c.Yj(),
    clientVersion: c.Yj().optional(),
    revertedAt: c.Yj(),
    trigger: c.Yj(),
    pid: c.ai().int().nonnegative()
}), B = c.Ik({
    schema: c.eu(1),
    reverts: c.YO(R)
});
function P(e) {
    return o.join(e, "reverted.json");
}
function J(e) {
    const t = P(e);
    let r;
    try {
        r = n.readFileSync(t, "utf8");
    } catch (e) {
        if (e instanceof Error && "code" in e && "ENOENT" === e.code) return;
        throw e;
    }
    const s = B.safeParse(JSON.parse(r));
    if (!s.success) {
        const e = s.error.issues[0], r = void 0 === e ? "" : ` at ${e.path.join(".") || "<root>"}`;
        throw new Error(`${t}: invalid reverted record${r}: ${e?.message ?? "unknown"}`);
    }
    return {
        schema: 1,
        reverts: s.data.reverts.map(({ clientVersion: e, ...t })=>({
                ...t,
                ...void 0 === e ? {} : {
                    clientVersion: e
                }
            }))
    };
}
function M(e, t) {
    const r = Date.parse(e.revertedAt);
    return !Number.isNaN(r) && r <= t && t - r < T;
}
const q = 6e5;
class D {
    constructor(e){
        this.options = e, this.mine = new Map, this.finished = new Set, this.said = new Set;
    }
    held(e) {
        try {
            return function(e, { install: t, clientVersion: r, now: n }) {
                return e?.reverts.find((e)=>e.install === t && e.clientVersion === r && M(e, n));
            }(J(this.options.rootDir), {
                install: e,
                clientVersion: this.options.clientVersion,
                now: this.options.now()
            });
        } catch (e) {
            return void this.sayOnce(`ignoring ${P(this.options.rootDir)}: ${O(e)}`);
        }
    }
    hold(e) {
        const t = this.options.now(), { clientVersion: r } = this.options, n = {
            ...e,
            ...void 0 === r ? {} : {
                clientVersion: r
            },
            revertedAt: new Date(t).toISOString(),
            pid: process.pid
        };
        let s = [];
        try {
            s = J(this.options.rootDir)?.reverts ?? [];
        } catch (e) {
            this.sayOnce(`replacing ${P(this.options.rootDir)}: ${O(e)}`);
        }
        try {
            !function(e, t, r, n) {
                const s = {
                    schema: 1,
                    reverts: [
                        ...t.filter((e)=>e.generation !== r.generation && M(e, n)),
                        r
                    ].slice(-16)
                };
                l(P(e), `${JSON.stringify(s, null, 2)}\n`);
            }(this.options.rootDir, s, n, t);
        } catch (t) {
            this.sayOnce(`revert of ${e.generation.slice(0, 12)} not recorded: ${O(t)}`), this.options.onWriteFailed?.("reverted", t);
        }
        return n;
    }
    crashLoop({ generation: e, install: t, label: r }) {
        const n = this.options.now(), s = this.deadRecords().filter((e)=>e.attempts.some((e)=>e.install === t && n - Date.parse(e.since) < q));
        if (!(s.length < 2)) return this.options.log(`${s.length} extension hosts (pid ${s.map((e)=>e.pid).join(", ")}) died with ${e.slice(0, 12)} unfinished within 10 minutes`), this.hold({
            generation: e,
            label: r(),
            install: t,
            trigger: "crash_loop"
        });
    }
    lostHosts() {
        const e = this.options.now(), t = [];
        for (const r of this.deadRecords())if (r.attempts.every((t)=>e - Date.parse(t.since) >= q) && void 0 !== r.reportedBy) this.remove(r.pid);
        else if (void 0 === r.reportedBy) {
            for (const e of r.attempts)t.push({
                pid: r.pid,
                generation: e.generation,
                phase: e.phase
            });
            this.write({
                ...r,
                reportedBy: process.pid
            });
        }
        return t;
    }
    begin({ generation: e, install: t }, r) {
        const n = `${t}:${r}`, s = this.mine.get(n);
        void 0 === s ? (this.mine.set(n, {
            attempt: {
                generation: e,
                install: t,
                phase: r,
                since: new Date(this.options.now()).toISOString()
            },
            open: 1
        }), this.writeMine()) : s.open += 1;
    }
    end(e, t) {
        const r = `${e}:${t}`, n = this.mine.get(r);
        void 0 !== n && (n.open -= 1, n.open <= 0 && (this.mine.delete(r), this.writeMine()));
    }
    turnStarted(e) {
        this.finished.has(e.install) || this.begin(e, "turn");
    }
    turnSettled(e) {
        this.end(e, "turn");
    }
    turnCompleted(e) {
        this.finished.add(e), this.mine.delete(`${e}:turn`) && this.writeMine();
    }
    removeMine() {
        this.remove(process.pid);
    }
    deadRecords() {
        let e;
        try {
            e = function(e) {
                let t;
                try {
                    t = n.readdirSync(y(e));
                } catch (e) {
                    if (e instanceof Error && "code" in e && "ENOENT" === e.code) return {
                        records: [],
                        unreadable: []
                    };
                    throw e;
                }
                const r = [], s = [];
                for (const i of t){
                    if (!/^\d+\.json$/.test(i)) continue;
                    const t = o.join(y(e), i);
                    try {
                        const e = g.safeParse(JSON.parse(n.readFileSync(t, "utf8")));
                        if (!e.success || `${e.data.pid}.json` !== i) {
                            s.push(`${t}: not an attempts record for its pid`);
                            continue;
                        }
                        const { reportedBy: o, ...a } = e.data;
                        r.push({
                            ...a,
                            ...void 0 === o ? {} : {
                                reportedBy: o
                            }
                        });
                    } catch (e) {
                        if (e instanceof Error && "code" in e && "ENOENT" === e.code) continue;
                        s.push(`${t}: ${e instanceof Error ? e.message : String(e)}`);
                    }
                }
                return {
                    records: r,
                    unreadable: s
                };
            }(this.options.rootDir);
        } catch (e) {
            return this.sayOnce(`attempts not read: ${O(e)}`), [];
        }
        for (const t of e.unreadable)this.sayOnce(`ignoring ${t}`);
        return e.records.filter((e)=>e.pid !== process.pid && !this.options.isProcessAlive(e.pid));
    }
    writeMine() {
        this.write({
            schema: 1,
            pid: process.pid,
            attempts: [
                ...this.mine.values()
            ].map(({ attempt: e })=>e)
        });
    }
    write(e) {
        try {
            !function(e, t) {
                0 !== t.attempts.length ? l(w(e, t.pid), `${JSON.stringify(t, null, 2)}\n`) : v(e, t.pid);
            }(this.options.rootDir, e);
        } catch (t) {
            this.sayOnce(`attempts of pid ${e.pid} not written: ${O(t)}`), this.options.onWriteFailed?.("attempts", t);
        }
    }
    remove(e) {
        try {
            v(this.options.rootDir, e);
        } catch (t) {
            this.sayOnce(`attempts of pid ${e} not removed: ${O(t)}`), this.options.onWriteFailed?.("attempts", t);
        }
    }
    sayOnce(e) {
        this.said.has(e) || (this.said.add(e), this.options.log(e));
    }
}
function O(e) {
    return e instanceof Error ? e.message : String(e);
}
function N(e, t, r, n, s) {
    const o = void 0 === r ? t : {
        ...t,
        channel: r
    }, i = {
        interfaceRevision: e.HARNESS_INTERFACE_REVISION,
        capabilities: n,
        harness: t
    }, a = [];
    let c = !1;
    return {
        describe: ()=>i,
        createTransport (t) {
            if (c) throw new Error("agent harness: generation is disposed");
            const r = e.activate(function(e, t) {
                const { metrics: r } = t;
                return {
                    module: e,
                    backendTransport: t.backendTransport,
                    get privacyMode () {
                        return t.getPrivacyModeEnum();
                    },
                    telemetry: {
                        tags: t.spanAttributes,
                        log: t.log,
                        increment: (e)=>r.increment(e),
                        distribution: (e)=>r.distribution(e),
                        gauge: (e)=>r.gauge(e)
                    }
                };
            }(o, t));
            if (!(r instanceof Promise)) return r.transport;
            const n = r.then((e)=>e.transport);
            return a.push(n), n.catch((e)=>s(`activate failed: ${F(e)}`)), {
                call: (e)=>n.then((t)=>t.call(e)),
                dispose () {
                    n.then((e)=>e.dispose(), ()=>{}).catch((e)=>s(`transport dispose failed: ${F(e)}`));
                }
            };
        },
        dispose () {
            c || (c = !0, "static" !== t.source && Promise.allSettled(a).then(()=>(function(e, t) {
                    let r;
                    try {
                        r = e.deactivate();
                    } catch (e) {
                        return void t(`deactivate failed: ${F(e)}`);
                    }
                    Promise.resolve(r).catch((e)=>{
                        t(`deactivate failed: ${F(e)}`);
                    });
                })(e, s)));
        }
    };
}
function F(e) {
    return e instanceof Error ? e.message : String(e);
}
var U = require("./module-98995.js"), L = require("./module-73136.js");
const $ = o.join("..", "..", "cursor-agent-exec", "dist", "node_modules"), Q = new Map([
    [
        "@napi-rs/canvas",
        "pdf-parse"
    ]
]), j = (0, L.fileURLToPath)(require("url").pathToFileURL(__filename).href);
function G(e = j) {
    const t = o.resolve(o.dirname(e), $), r = (0, U.createRequire)(e), s = function(e) {
        for(;;){
            const t = o.join(e, "node_modules", "@anysphere", "agent", "package.json");
            if (n.existsSync(t)) return t;
            const r = o.dirname(e);
            if (r === e) return;
            e = r;
        }
    }(o.dirname(e)), i = {};
    for (const e of f.Q$){
        const n = z(()=>r.resolve(o.join(t, e))) ?? (void 0 === s ? void 0 : z(()=>H(s, e)));
        void 0 !== n && (i[e] = n);
    }
    return i;
}
function H(e, t) {
    const r = (0, U.createRequire)(e), n = Q.get(t);
    return (void 0 === n ? r : (0, U.createRequire)(r.resolve(n))).resolve(t);
}
function z(e) {
    try {
        return e();
    } catch (e) {
        if (e instanceof Error && "code" in e && "MODULE_NOT_FOUND" === e.code) return;
        throw e;
    }
}
var W = require("./module-78877.js");
const V = require("node:vm");
class K extends Error {
    constructor(e){
        super(e), this.name = "HarnessRejectedError";
    }
}
class Y extends K {
    constructor(e, t = {}){
        super(`${e} ${t.why ?? `is not installed (no ${b.h1})`}`), this.state = "is not installed", this.name = "HarnessNotInstalledError";
    }
}
class Z extends Y {
    constructor(e){
        super(e.dir, {
            why: `is not loaded until this host can list it in ${e.marker} (${e.problem})`
        }), this.state = "is not loaded yet", this.name = "HarnessNotClaimedError";
    }
}
class X extends K {
    constructor(e){
        super(`reverted by extension host pid ${e.pid} at ${e.revertedAt} (${e.trigger}); held back until it is re-staged, the client updates or 24 hours pass`), this.name = "HarnessRevertHeldError";
    }
}
function ee({ dir: e, entryFile: t, sha256: r, natives: s, declaredNatives: i }) {
    const a = o.resolve(e, t), c = n.readFileSync(a);
    if ((0, b.fg)(c) !== r) throw new K(`${t}: sha256 differs from the manifest's`);
    const l = c.toString("utf8"), u = {
        exports: {}
    };
    (function(e) {
        W.setFlagsFromString("--no-compilation-cache");
        try {
            return e();
        } finally{
            W.setFlagsFromString("--compilation-cache");
        }
    })(()=>V.compileFunction(l, [
            "exports",
            "require",
            "module",
            "__filename",
            "__dirname"
        ], {
            filename: a
        }))(u.exports, (e)=>{
        if ((0, U.isBuiltin)(e)) return (0, U.createRequire)(a)(e);
        if (!(0, f.d3)(e)) throw (0, f._r)(`${t} requires "${e}", which is neither a node builtin nor a host-provided native (${f.Q$.join(", ")}); the generation was packed wrong`);
        if (!(0, f.d3)(e, i)) throw (0, f._r)(`${t} requires "${e}", which its manifest does not declare (natives: ${i.join(", ") || "none"})`);
        return (0, U.createRequire)(a)((0, f.pg)(s, e));
    }, u, a, o.dirname(a));
    const d = u.exports;
    if (!function(e) {
        return "object" == typeof e && null !== e && "activate" in e && "function" == typeof e.activate && "deactivate" in e && "function" == typeof e.deactivate && "HARNESS_INTERFACE_REVISION" in e && "number" == typeof e.HARNESS_INTERFACE_REVISION;
    }(d)) throw new Error(`${t} does not export activate, deactivate and HARNESS_INTERFACE_REVISION`);
    return d;
}
function te(e, t) {
    return "client" === e || "floor" === e || "before_cut" === e || "older" === e ? {
        verdict: "not_applicable",
        reason: e
    } : "revision" === e || "capabilities" === e || "natives" === e || "describe" === e && t instanceof K ? {
        verdict: "incompatible",
        reason: e
    } : "evaluate" === e || "describe" === e ? {
        verdict: "failed",
        reason: e
    } : {
        verdict: "refused",
        reason: e
    };
}
const re = new WeakMap;
function ne(e, t) {
    return "object" == typeof e && null !== e && re.set(e, t), e;
}
function se(e) {
    return "object" == typeof e && null !== e ? re.get(e) : void 0;
}
function oe(e) {
    return e instanceof Z ? "not_claimed" : e instanceof X ? "revert" : e instanceof Y ? "not_installed" : "rejected";
}
const ie = "floor", ae = "channel", ce = "sequence";
function le(e) {
    return /^[A-Za-z0-9._-]+$/.test(e);
}
function ue(e) {
    return e.length > 12 ? e.slice(0, 12) : e;
}
function de(e) {
    return `${e.label} (gen ${ue(e.generation)}, commit ${void 0 === e.commit ? "?" : e.commit.slice(0, 12)}, ${e.source})`;
}
function pe({ rootDir: e, floorDir: t, log: r }) {
    const n = s.homedir(), o = [
        [
            e,
            "<root>"
        ]
    ];
    return void 0 !== t && o.push([
        t,
        "<floor>"
    ]), n.length > 1 && o.push([
        n,
        "~"
    ]), (e)=>r(o.reduce((e, [t, r])=>e.split(t).join(r), e));
}
function me(e) {
    if (e instanceof Error && "code" in e) return "string" == typeof e.code ? e.code : void 0;
}
function he(e, t) {
    const r = t.describe();
    if (e.HARNESS_INTERFACE_REVISION !== a.nl || r.interfaceRevision !== a.nl) throw new K(`interface revision ${r.interfaceRevision} (entry ${e.HARNESS_INTERFACE_REVISION}); host requires ${a.nl}`);
    return r;
}
function fe(e, t) {
    try {
        return t();
    } catch (t) {
        throw e.dispose(), t;
    }
}
const ge = new Map, ye = new Set;
let we = !1;
class ve {
    constructor(e){
        this.rejectedInstalls = new Map, this.claimed = new Set, this.reportedWriteFailures = new Map, this.serveListeners = new Set, this.writeFailureListeners = new Set, this.saidClientUnordered = !1, this.live = new Map, this.loadListeners = new Set, this.revertListeners = new Set, this.lostHostListeners = new Set, this.pendingReverts = [], this.completedHere = new Set, this.options = {
            ...e,
            log: pe(e)
        }, this.guard = new D({
            rootDir: e.rootDir,
            clientVersion: e.clientVersion,
            log: this.options.log,
            now: e.now ?? Date.now,
            isProcessAlive: e.isProcessAlive ?? _,
            onWriteFailed: (e, t)=>this.reportWriteFailure(e, t)
        });
    }
    onDidRevert(e) {
        return this.revertListeners.add(e), ()=>this.revertListeners.delete(e);
    }
    onDidLoseHost(e) {
        return this.lostHostListeners.add(e), ()=>this.lostHostListeners.delete(e);
    }
    tell(e, t, r) {
        for (const n of e)try {
            n(t);
        } catch (e) {
            this.options.log(`${r} not reported: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    reportLostHosts() {
        const e = this.guard.lostHosts(), t = 0 === e.length ? void 0 : this.readChannel();
        for (const r of e){
            this.options.log(`extension host pid ${r.pid} died while ${"evaluate" === r.phase ? "evaluating" : "running a first turn on"} ${ue(r.generation)}`);
            const e = this.installedSequence(o.join(this.versionsDir, r.generation));
            this.tell(this.lostHostListeners, {
                ...r,
                channel: t,
                sequence: e
            }, `lost host ${r.pid}`);
        }
    }
    static shared(e) {
        const t = o.resolve(e.rootDir);
        let r = ge.get(t);
        return void 0 === r && (r = new ve(e), ge.set(t, r)), r;
    }
    get rootDir() {
        return this.options.rootDir;
    }
    get versionsDir() {
        return o.join(this.options.rootDir, "versions");
    }
    get currentPointerPath() {
        return o.join(this.options.rootDir, "current");
    }
    onDidLoad(e) {
        return this.loadListeners.add(e), ()=>this.loadListeners.delete(e);
    }
    reportLoad(e) {
        for (const t of this.loadListeners)try {
            t(e);
        } catch (t) {
            this.options.log(`load of ${ue(e.module.generation)} not reported: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    onDidServe(e) {
        return this.serveListeners.add(e), ()=>this.serveListeners.delete(e);
    }
    servedNow() {
        return this.lastServe;
    }
    onDidFailToWrite(e) {
        return this.writeFailureListeners.add(e), ()=>this.writeFailureListeners.delete(e);
    }
    reportServe(e, t, r, n) {
        this.servedFor = t, "not_installed" !== t && "not_claimed" !== t && (this.reportedNotInstalled = void 0);
        const s = "current" === t || "kill_switch" === t ? this.pointerChangedAt : void 0, o = {
            module: e.info,
            channel: e.channel,
            sequence: e.sequence,
            cause: t,
            when: r,
            ..."rejected" === t && void 0 !== n ? {
                refused: n
            } : {},
            ...void 0 === s ? {} : {
                currentChangedAt: s
            }
        }, { when: i, currentChangedAt: a, ...c } = o;
        this.lastServe = c;
        for (const r of this.serveListeners)try {
            r(o);
        } catch (r) {
            this.options.log(`serving ${ue(e.info.generation)} (${t}) not reported: ${r instanceof Error ? r.message : String(r)}`);
        }
        const l = this.pendingReverts;
        this.pendingReverts = [];
        for (const t of l)this.tell(this.revertListeners, {
            ...t,
            fallback: e.info
        }, `revert of ${ue(t.module.generation)}`);
    }
    reportWriteFailure(e, t) {
        const r = function(e) {
            const t = me(e);
            return void 0 !== t && /^E[A-Z0-9_]{1,23}$/.test(t) ? t.toLowerCase() : "other";
        }(t), n = this.reportedWriteFailures.get(e) ?? new Set;
        if (n.has(r)) return;
        n.add(r), this.reportedWriteFailures.set(e, n);
        const s = {
            file: e,
            code: r,
            channel: this.readChannel()
        };
        for (const t of this.writeFailureListeners)try {
            t(s);
        } catch (t) {
            this.options.log(`failed write of ${e} not reported: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    installedSequence(e) {
        try {
            const t = n.readFileSync(o.join(e, ce), "utf8").trim();
            return /^\d{1,16}$/.test(t) && Number.isSafeInteger(Number(t)) ? Number(t) : void 0;
        } catch (t) {
            return void ("ENOENT" !== me(t) && this.options.log(`unreadable ${ce} file in ${e}: ${t instanceof Error ? t.message : String(t)}`));
        }
    }
    readChannel() {
        try {
            const e = n.readFileSync(o.join(this.options.rootDir, ae), "utf8").trim();
            return /^[A-Za-z0-9._-]{1,64}$/.test(e) ? e : void 0;
        } catch (e) {
            return void ("ENOENT" !== me(e) && this.options.log(`unreadable ${ae} file: ${e instanceof Error ? e.message : String(e)}`));
        }
    }
    current() {
        return this.active ?? this.start(this.readPointer()).active;
    }
    start(e) {
        if (this.reportLostHosts(), this.off) {
            const e = this.serveFloor("start");
            return this.reportServe(e, "disabled", "start"), {
                active: e,
                swapped: !1
            };
        }
        if (void 0 === e || e === ie) {
            const t = this.serveFloor("start");
            return this.reportServe(t, void 0 === e ? "no_current" : "kill_switch", "start"), {
                active: t,
                swapped: !1
            };
        }
        const t = this.floorIdentity(), r = this.installKey(e);
        let n;
        try {
            const r = this.loadGeneration(e, "start");
            return this.activate(r, t), this.options.log(`serving ${de(r.info)} named by current; ${de(t)} stays unloaded`), this.reportServe(r, "current", "start"), {
                active: r,
                swapped: !1
            };
        } catch (e) {
            n = e;
        }
        const s = n instanceof Error ? n.message : String(n), o = n instanceof Y, i = oe(n), a = se(n);
        o ? this.reportedNotInstalled = e : this.rememberRejection(r, a), "revert" === i && (this.revertedFrom = e);
        const c = o ? {
            generation: e,
            reason: s,
            transient: !0
        } : {
            generation: e,
            reason: s
        }, l = n instanceof Y ? `generation ${ue(e)} named by current ${n.state}: ${s}` : `REJECTED generation ${ue(e)}: ${s}`, u = this.lastServed();
        if (void 0 !== u && u.generation !== e) try {
            const r = this.loadGeneration(u.generation, "fallback");
            return this.activate(r, t), this.options.log(`${l} — serving last served generation ${de(r.info)} (served ${u.servedAt}) instead of ${de(t)}; current still names ${ue(e)}`), this.reportServe(r, i, "start", a), {
                active: r,
                swapped: !1,
                rejected: c
            };
        } catch (e) {
            this.options.log(`last served generation ${ue(u.generation)} cannot serve either: ${e instanceof Error ? e.message : String(e)}`);
        }
        const d = this.serveFloor("fallback");
        return this.options.log(`${l} — staying on ${de(d.info)}${o ? " until it is" : ""}`), this.reportServe(d, i, "start", a), {
            active: d,
            swapped: !1,
            rejected: c
        };
    }
    serveFloor(e) {
        const t = this.loadFloor({
            when: e
        });
        return this.active = t, t;
    }
    get off() {
        return !1 === this.options.enabled?.();
    }
    announce(e = this.floorIdentity()) {
        if (this.off) return this.announcedFloor = e, void this.retire("installed generations are off in this host");
        const t = this.announcedFloor;
        if (t?.source === e.source && t.generation === e.generation && n.existsSync(m(this.options.rootDir))) return;
        const r = {
            schema: 1,
            pid: process.pid,
            writtenAt: (new Date).toISOString(),
            enabledBy: this.options.enabledBy ?? "env",
            interfaceRevision: a.nl,
            requiredCapabilities: [
                ...a.us
            ],
            natives: [
                ...f.Q$
            ],
            ...void 0 === this.options.clientVersion ? {} : {
                clientVersion: this.options.clientVersion
            },
            floor: {
                generation: e.generation,
                label: e.label,
                ...void 0 === e.builtAt ? {} : {
                    builtAt: e.builtAt
                },
                ...void 0 === e.commit ? {} : {
                    commit: e.commit
                },
                source: "static" === e.source ? "static" : "floor"
            },
            ...void 0 === this.options.timing ? {} : {
                timing: this.options.timing
            }
        };
        try {
            !function(e, t) {
                l(m(e, t.pid), `${JSON.stringify(t, null, 2)}\n`);
            }(this.options.rootDir, r), this.announcedFloor = e, this.announceProblem = void 0, this.reportedWriteFailures.delete("host_descriptor"), this.options.log(`host descriptor written (${m(this.options.rootDir)}): revision ${r.interfaceRevision}, floor gen ${ue(e.generation)}${void 0 === e.builtAt ? "" : ` built ${e.builtAt}`}, enabled by ${r.enabledBy}`);
        } catch (e) {
            const t = e instanceof Error ? e.message : String(e);
            this.announceProblem !== t && (this.announceProblem = t, this.options.log(`host descriptor not written: ${t}`)), this.reportWriteFailure("host_descriptor", e);
        }
    }
    retire(e) {
        try {
            (function(e) {
                try {
                    return n.rmSync(m(e)), !0;
                } catch (e) {
                    if (h(e, "ENOENT")) return !1;
                    throw e;
                }
            })(this.options.rootDir) && this.options.log(`host descriptor removed: ${e}`);
        } catch (e) {
            this.options.log(`host descriptor not removed: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    floorIdentity() {
        const { floorDir: e } = this.options;
        if (void 0 !== e && n.existsSync(e)) try {
            const t = (0, b.WI)(e);
            return {
                generation: t.generation,
                label: t.label,
                builtAt: t.builtAt,
                commit: t.commit,
                source: "floor"
            };
        } catch (t) {
            this.options.log(`packed floor manifest at ${e} unreadable: ${t instanceof Error ? t.message : String(t)}`);
        }
        return this.staticFloorBuild();
    }
    staticFloorBuild() {
        return {
            generation: "static",
            label: "static floor (host dist)",
            builtAt: this.options.staticFloorBuiltAt,
            commit: void 0,
            source: "static"
        };
    }
    floorBuiltAt() {
        if (void 0 === this.floorBuiltAtCache) {
            const e = this.floorIdentity().builtAt;
            this.floorBuiltAtCache = e ?? null, (void 0 === e || Number.isNaN(Date.parse(e))) && this.options.log(`floor has no build date${void 0 === e ? "" : ` (${JSON.stringify(e)})`}; the never-below-the-floor rule cannot run on this host`);
        }
        return this.floorBuiltAtCache ?? void 0;
    }
    clientVersionFor(e) {
        const { clientVersion: t } = this.options;
        return void 0 === e.engines || this.saidClientUnordered || void 0 !== t && void 0 !== (0, b.VW)(t) || (this.saidClientUnordered = !0, this.options.log(`client version ${void 0 === t ? "unknown" : JSON.stringify(t)}; no generation's engines.cursor can be judged on this host`)), t;
    }
    readPointer() {
        let e;
        try {
            e = n.openSync(this.currentPointerPath, "r");
            const t = n.fstatSync(e).mtimeMs, r = n.readFileSync(e, "utf8").trim();
            return this.pointerChangedAt = t, "" === r ? void 0 : r;
        } catch (e) {
            return void ("ENOENT" !== me(e) && this.options.log(`unreadable pointer ${this.currentPointerPath}: ${e instanceof Error ? e.message : String(e)}`));
        } finally{
            void 0 !== e && n.closeSync(e);
        }
    }
    poll() {
        void 0 !== this.servingProblem && this.writeServingMarker(), void 0 !== this.announcedFloor && this.announce(this.announcedFloor);
        const e = this.active;
        if (this.off) return void 0 === e ? this.start(void 0) : this.returnToFloor(e, "disabled");
        const t = this.readPointer();
        if (void 0 === e) return this.start(t);
        if (void 0 === t) {
            const t = this.moveOffHeld(e);
            return void 0 !== t ? t : ("installed" !== e.info.source && "no_current" !== this.servedFor && this.reportServe(e, "no_current", "turn"), {
                active: e,
                swapped: !1
            });
        }
        if (t === e.info.generation) {
            const t = this.moveOffHeld(e);
            return void 0 !== t ? t : (this.caughtUp(e), {
                active: e,
                swapped: !1
            });
        }
        if (t === ie) return this.returnToFloor(e, "kill_switch");
        const r = this.installKey(t);
        if (this.isRejectedInstall(r)) {
            const n = this.moveOffHeld(e);
            if (void 0 !== n) return n;
            const s = "revert" === this.servedFor && this.revertedFrom === t;
            return "rejected" === this.servedFor || s || this.reportServe(e, "rejected", "turn", this.rememberedRefusal(r)), {
                active: e,
                swapped: !1
            };
        }
        try {
            const r = this.loadGeneration(t, "turn");
            return this.activate(r, e.info), this.options.log(`swapped ${de(e.info)} -> ${de(r.info)}`), this.reportServe(r, "current", "turn"), {
                active: r,
                swapped: !0,
                previous: e.info
            };
        } catch (n) {
            const s = n instanceof Error ? n.message : String(n);
            if (n instanceof Y) {
                if (this.reportedNotInstalled === t) return this.moveOffHeld(e) ?? {
                    active: e,
                    swapped: !1
                };
                this.reportedNotInstalled = t;
                const r = this.moveOffHeld(e), o = r ?? this.serveLastServedInsteadOfFloor(e, t);
                return this.options.log(`generation ${ue(t)} named by current ${n.state}: ${s} — staying on ${de(o.active.info)} until it is`), void 0 === r && this.reportServe(o.active, oe(n), "turn"), {
                    ...o,
                    rejected: {
                        generation: t,
                        reason: s,
                        transient: !0
                    }
                };
            }
            const o = se(n);
            this.rememberRejection(r, o);
            const i = this.moveOffHeld(e), a = i ?? this.serveLastServedInsteadOfFloor(e, t);
            this.options.log(`REJECTED generation ${ue(t)}: ${s} — staying on ${de(a.active.info)}`);
            const c = oe(n);
            return "revert" === c && (this.revertedFrom = t), void 0 === i && this.reportServe(a.active, c, "turn", o), {
                ...a,
                rejected: {
                    generation: t,
                    reason: s
                }
            };
        }
    }
    moveOffHeld(e) {
        if ("installed" !== e.info.source) return;
        const t = this.installKey(e.info.generation), r = void 0 === t ? void 0 : this.guard.held(t);
        if (void 0 === r) return;
        this.rememberRejection(t), this.options.log(`REJECTED generation ${ue(e.info.generation)}: ${new X(r).message}`);
        const n = this.loadFallback(e.info);
        return this.active = n, this.previousServed = void 0, this.writeServingMarker(), this.options.log(`falling back ${de(e.info)} -> ${de(n.info)}`), this.revertedFrom = e.info.generation, this.pendingReverts.push({
            module: e.info,
            channel: e.channel,
            sequence: e.sequence,
            trigger: "persisted"
        }), this.reportServe(n, "revert", "turn"), {
            active: n,
            swapped: !0,
            previous: e.info
        };
    }
    caughtUp(e) {
        void 0 !== this.servedFor && "current" !== this.servedFor && this.reportServe(e, "current", "turn");
    }
    returnToFloor(e, t) {
        if ("installed" !== e.info.source) return this.servedFor !== t && this.reportServe(e, t, "turn"), {
            active: e,
            swapped: !1
        };
        const r = this.loadFloor({
            when: "turn"
        });
        return this.activate(r, e.info), this.options.log(`${"kill_switch" === t ? "kill switch: current names the floor" : "installed generations are off in this host"}; swapped ${de(e.info)} -> ${de(r.info)}`), this.reportServe(r, t, "turn"), {
            active: r,
            swapped: !0,
            previous: e.info
        };
    }
    activate(e, t) {
        this.active = e, this.previousServed = t, this.writeServingMarker();
    }
    markServed(e) {
        if ("installed" === e.source && !this.completedHere.has(e.generation)) {
            this.completedHere.add(e.generation);
            const t = this.installKey(e.generation);
            void 0 !== t && this.guard.turnCompleted(t);
        }
        var t, r;
        if ("installed" === e.source && this.lastServed()?.generation !== e.generation && !this.isRejectedInstall(this.installKey(e.generation))) try {
            t = this.options.rootDir, r = {
                schema: 1,
                generation: e.generation,
                label: e.label,
                ...void 0 === e.builtAt ? {} : {
                    builtAt: e.builtAt
                },
                servedAt: (new Date).toISOString(),
                pid: process.pid
            }, l(d(t), `${JSON.stringify(r, null, 2)}\n`), this.reportedWriteFailures.delete("last_served");
        } catch (e) {
            this.options.log(`last-served record not written: ${e instanceof Error ? e.message : String(e)}`), this.reportWriteFailure("last_served", e);
        }
    }
    serveLastServedInsteadOfFloor(e, t) {
        if ("installed" === e.info.source) return {
            active: e,
            swapped: !1
        };
        const r = this.lastServed();
        if (void 0 === r || r.generation === t) return {
            active: e,
            swapped: !1
        };
        try {
            const n = this.loadGeneration(r.generation, "fallback");
            return this.activate(n, e.info), this.options.log(`falling back to last served generation ${de(n.info)} (served ${r.servedAt}) instead of ${de(e.info)}; current still names ${ue(t)}`), {
                active: n,
                swapped: !0,
                previous: e.info
            };
        } catch (t) {
            return this.options.log(`last served generation ${ue(r.generation)} cannot serve either: ${t instanceof Error ? t.message : String(t)} — staying on ${de(e.info)}`), {
                active: e,
                swapped: !1
            };
        }
    }
    lastServed() {
        try {
            const e = p(this.options.rootDir);
            return this.lastServedProblem = void 0, e;
        } catch (e) {
            const t = e instanceof Error ? e.message : String(e);
            return void (this.lastServedProblem !== t && (this.lastServedProblem = t, this.options.log(`ignoring ${d(this.options.rootDir)}: ${t}`)));
        }
    }
    floor() {
        return this.loadFloor({
            counted: !1,
            when: "fallback"
        });
    }
    markIncompatible({ generation: e, reason: t, revert: r }) {
        const s = this.installKey(e);
        if (void 0 !== s && void 0 !== r && this.guard.hold({
            generation: e,
            label: r.label,
            install: s,
            trigger: r.trigger
        }), void 0 !== s && !this.isRejectedInstall(s) && (this.rememberRejection(s), this.options.log(`REJECTED generation ${ue(e)} at run time: ${t}`), this.lastServed()?.generation === e)) try {
            o = this.options.rootDir, n.rmSync(d(o), {
                force: !0
            });
        } catch (t) {
            this.options.log(`last-served record naming ${ue(e)} not removed: ${t instanceof Error ? t.message : String(t)}`);
        }
        var o;
        const i = this.current();
        if (i.info.generation !== e) return;
        if ("installed" !== i.info.source) return void this.options.log(`${de(i.info)} cannot serve this host (${t}) and nothing lies below the floor to fall back to`);
        const a = this.loadFallback(i.info);
        return this.active = a, this.previousServed = void 0, this.options.log(`falling back ${de(i.info)} -> ${de(a.info)}`), this.revertedFrom = e, this.reportServe(a, "revert", "turn"), a;
    }
    loadFallback(e) {
        const t = this.previousServed, r = [];
        void 0 !== t && "installed" === t.source && r.push({
            generation: t.generation,
            what: "previous generation"
        });
        const n = this.lastServed();
        void 0 !== n && r.push({
            generation: n.generation,
            what: "last served generation"
        });
        const s = new Set([
            e.generation
        ]);
        for (const { generation: e, what: t } of r)if (!s.has(e)) {
            s.add(e);
            try {
                return this.loadGeneration(e, "fallback");
            } catch (r) {
                this.options.log(`${t} ${ue(e)} cannot serve as the fallback: ${r instanceof Error ? r.message : String(r)}`);
            }
        }
        return this.loadFloor({
            when: "fallback"
        });
    }
    installKey(e) {
        if (!le(e)) return `pointer:${e}`;
        let t;
        try {
            t = n.statSync(o.join(this.versionsDir, e, b.h1));
        } catch (t) {
            return void ("ENOENT" !== me(t) && "ENOTDIR" !== me(t) && this.options.log(`manifest of ${ue(e)} unreadable: ${t instanceof Error ? t.message : String(t)}`));
        }
        return `${e}@${t.ino}:${t.mtimeMs}`;
    }
    isRejectedInstall(e) {
        return void 0 !== e && this.rejectedInstalls.has(e);
    }
    rememberRejection(e, t) {
        void 0 !== e && this.rejectedInstalls.set(e, t);
    }
    rememberedRefusal(e) {
        return void 0 === e ? void 0 : this.rejectedInstalls.get(e);
    }
    loadGeneration(e, t) {
        if (!le(e)) {
            const r = {
                verdict: "refused",
                reason: "pointer"
            };
            throw this.reportLoad({
                module: {
                    generation: e,
                    source: "installed"
                },
                channel: this.readChannel(),
                sequence: void 0,
                when: t,
                ...r
            }), ne(new K("pointer is not a plain directory name"), r);
        }
        const r = o.join(this.versionsDir, e);
        if (!n.existsSync(o.join(r, b.h1))) throw new Y(r);
        const s = this.installKey(e);
        if (this.isRejectedInstall(s)) throw this.reportLoad({
            module: {
                generation: e,
                source: "installed"
            },
            channel: this.readChannel(),
            sequence: this.installedSequence(r),
            when: t,
            verdict: "refused",
            reason: "rejected_earlier"
        }), ne(new K("rejected earlier by this host and not re-staged since"), this.rememberedRefusal(s) ?? {
            verdict: "refused",
            reason: "rejected_earlier"
        });
        if (this.reportLostHosts(), void 0 !== s && this.refuseIfHeld({
            generation: e,
            install: s
        }, r, t), this.claimed.add(e), this.writeServingMarker(), void 0 !== this.servingProblem) throw this.claimed.delete(e), new Z({
            dir: r,
            marker: A(this.options.rootDir, process.pid),
            problem: this.servingProblem
        });
        let i;
        const a = s ?? `${e}@unknown`;
        this.guard.begin({
            generation: e,
            install: a
        }, "evaluate");
        try {
            i = this.loadFrom({
                dir: r,
                source: "installed",
                expectedGeneration: e,
                when: t
            });
        } catch (t) {
            throw this.claimed.delete(e), this.writeServingMarker(), t;
        } finally{
            this.guard.end(a, "evaluate");
        }
        return this.claimed.delete(e), this.live.set(i.harness, i.info.generation), this.writeServingMarker(), i;
    }
    refuseIfHeld({ generation: e, install: t }, r, n) {
        let s = this.guard.held(t);
        if (void 0 === s && (s = this.guard.crashLoop({
            generation: e,
            install: t,
            label: ()=>this.labelOf(r)
        }), void 0 !== s && this.pendingReverts.push({
            module: {
                generation: e,
                label: s.label,
                source: "installed"
            },
            channel: this.readChannel(),
            sequence: this.installedSequence(r),
            trigger: "crash_loop"
        })), void 0 !== s) throw this.rememberRejection(t), this.reportLoad({
            module: {
                generation: e,
                source: "installed"
            },
            channel: this.readChannel(),
            sequence: this.installedSequence(r),
            when: n,
            verdict: "refused",
            reason: "rejected_earlier"
        }), new X(s);
    }
    labelOf(e) {
        try {
            return (0, b.WI)(e).label;
        } catch (t) {
            return this.options.log(`manifest in ${e} unreadable for its label: ${t instanceof Error ? t.message : String(t)}`), "unknown";
        }
    }
    turnStarted(e) {
        const t = this.unfinishedInstall(e);
        void 0 !== t && this.guard.turnStarted({
            generation: e.generation,
            install: t
        });
    }
    turnSettled(e) {
        const t = this.unfinishedInstall(e);
        void 0 !== t && this.guard.turnSettled(t);
    }
    unfinishedInstall(e) {
        return "installed" !== e.source || this.completedHere.has(e.generation) ? void 0 : this.installKey(e.generation);
    }
    removeAttemptMarks() {
        this.guard.removeMine();
    }
    release(e) {
        e.harness.dispose(), this.live.delete(e.harness) && this.writeServingMarker();
    }
    serving() {
        return [
            ...new Set(this.live.values())
        ].sort();
    }
    writeServingMarker() {
        const e = new Set([
            ...this.serving(),
            ...this.claimed
        ]);
        e.size > 0 && "installed" === this.previousServed?.source && e.add(this.previousServed.generation);
        try {
            0 === e.size ? (S(this.options.rootDir), ye.delete(this)) : (!function(e, t) {
                const r = {
                    schema: 1,
                    pid: process.pid,
                    writtenAt: (new Date).toISOString(),
                    generations: [
                        ...t
                    ].sort()
                };
                l(A(e, process.pid), `${JSON.stringify(r, null, 2)}\n`);
            }(this.options.rootDir, [
                ...e
            ].sort()), t = this, ye.add(t), we || (we = !0, process.once("exit", ()=>{
                for (const e of ye)e.removeServingMarker(), e.removeAttemptMarks();
            })), this.reportedWriteFailures.delete("serving_marker")), this.servingProblem = void 0;
        } catch (e) {
            const t = e instanceof Error ? e.message : String(e);
            this.servingProblem !== t && (this.servingProblem = t, this.options.log(`serving marker ${A(this.options.rootDir, process.pid)} not written: ${t}; no other installed generation is loaded until it is`)), this.reportWriteFailure("serving_marker", e);
        }
        var t;
    }
    removeServingMarker() {
        try {
            S(this.options.rootDir);
        } catch (e) {
            this.servingProblem = e instanceof Error ? e.message : String(e);
        }
    }
    servedNatives(e) {
        const t = this.hostNatives(), r = {}, n = [];
        for (const s of e){
            const e = t[s];
            void 0 === e ? n.push(s) : r[s] = e;
        }
        return n.length > 0 && this.options.log(`natives ${n.join(", ")} are declared but not shipped by this host; requiring them fails`), r;
    }
    hostNatives() {
        if (void 0 === this.resolvedHostNatives) {
            const e = this.options.hostNatives ?? G();
            this.resolvedHostNatives = e;
            const t = f.Q$.filter((t)=>void 0 === e[t]);
            this.options.log(`host natives, by path from the loader: ${function(e) {
                const t = o.dirname(j);
                return Object.entries(e).flatMap(([e, r])=>void 0 === r ? [] : [
                        `${e} (${o.relative(t, r)})`
                    ]).join(", ") || "none";
            }(e)}${0 === t.length ? "" : `; not found in this host: ${t.join(", ")}`}`);
        }
        return this.resolvedHostNatives;
    }
    loadFrom({ dir: e, source: t, expectedGeneration: r, counted: s = !0, when: a }) {
        const c = performance.now(), l = this.readChannel(), u = "installed" === t ? this.installedSequence(e) : void 0;
        let d = r ?? "unknown", p = "manifest";
        try {
            let n = (0, b.WI)(e);
            if (d = r ?? n.generation, p = "generation", void 0 !== r && n.generation !== r) throw new K(`manifest names generation ${ue(n.generation)}`);
            const { signatures: o } = this.options;
            "installed" === t && void 0 !== o && (p = "signature", n = this.signedManifest(e, n, o)), p = "revision";
            try {
                (0, b.P9)(n);
            } catch (e) {
                throw e instanceof b.Sh && ("revision" === e.check || "capabilities" === e.check || "natives" === e.check) && (p = e.check), e;
            }
            if ("installed" === t) {
                p = "client", (0, b.sr)(n, this.clientVersionFor(n)), p = "floor";
                const e = k({
                    version: this.options.clientVersion,
                    builtAt: this.floorBuiltAt()
                }, E(n), {
                    lastServed: I({
                        versionsDir: this.versionsDir,
                        generation: this.lastServed()?.generation
                    })
                });
                if (void 0 !== e) throw p = e.check, new b.Sh(e.message, e.check);
            }
            p = "payload", (0, b.xL)(e, n);
            const m = this.servedNatives(n.natives);
            (0, i.setEnvironmentData)((0, f.kx)(e), m), p = "evaluate";
            const h = ee({
                dir: e,
                entryFile: n.entry,
                sha256: n.files[n.entry].sha256,
                natives: m,
                declaredNatives: n.natives
            }), g = {
                generation: n.generation,
                label: n.label,
                commit: n.commit,
                builtAt: n.builtAt,
                source: t
            }, y = N(h, g, l, n.capabilities, this.options.log);
            p = "describe";
            const w = fe(y, ()=>{
                const e = he(h, y), t = e.capabilities.filter((e)=>!n.capabilities.includes(e)), r = n.capabilities.filter((t)=>!e.capabilities.includes(t));
                if (t.length > 0 || r.length > 0) throw new K(`describe() capabilities [${e.capabilities.join(", ")}] differ from the manifest's [${n.capabilities.join(", ")}]`);
                return new Set(e.capabilities);
            });
            return this.options.log(`loaded ${de(g)} from ${e} in ${Math.round(performance.now() - c)} ms; ${Object.keys(n.files).length} files verified by hash`), s && this.reportLoad({
                module: g,
                channel: l,
                sequence: u,
                when: a,
                verdict: "loaded",
                reason: "none"
            }), {
                info: g,
                harness: y,
                capabilities: w,
                channel: l,
                sequence: u
            };
        } catch (r) {
            if ("installed" === t && function(e) {
                let t;
                try {
                    t = (0, b.WI)(e);
                } catch  {
                    return !n.existsSync(o.join(e, b.h1));
                }
                return Object.keys(t.files).some((t)=>!n.existsSync(o.join(e, t)));
            }(e)) throw new Y(e, {
                why: "was removed while it loaded"
            });
            const i = te(p, r);
            throw s && this.reportLoad({
                module: {
                    generation: d,
                    source: t
                },
                channel: l,
                sequence: u,
                when: a,
                ...i
            }), ne(r, i);
        }
    }
    loadFloor({ counted: e = !0, when: t }) {
        const r = this.loadPackedOrStaticFloor(e, t);
        return this.announce(r.info), r;
    }
    loadPackedOrStaticFloor(e, t) {
        const { floorDir: r, staticFloor: s } = this.options;
        if (void 0 !== r && n.existsSync(r)) try {
            return this.loadFrom({
                dir: r,
                source: "floor",
                counted: e,
                when: t
            });
        } catch (e) {
            this.options.log(`packed floor at ${r} rejected: ${e instanceof Error ? e.message : String(e)} — falling back to the statically linked floor`);
        }
        const o = this.staticFloorBuild(), i = this.readChannel();
        let c = "evaluate";
        try {
            const r = N(s, o, i, Object.values(a.eN), this.options.log);
            c = "describe";
            const n = fe(r, ()=>he(s, r)), l = n.harness;
            return this.options.log(`floor: ${de(l)}`), e && this.reportLoad({
                module: l,
                channel: i,
                sequence: void 0,
                when: t,
                verdict: "loaded",
                reason: "none"
            }), {
                info: l,
                harness: r,
                capabilities: new Set(n.capabilities),
                channel: i,
                sequence: void 0
            };
        } catch (r) {
            throw e && this.reportLoad({
                module: o,
                channel: i,
                sequence: void 0,
                when: t,
                ...te(c, r)
            }), r;
        }
    }
    signedManifest(e, t, r) {
        const n = o.join(e, b.h1), s = (0, x.Mv)(n, b.T1.manifestBytes);
        if (void 0 === s) throw new K(`${b.h1} is gone`);
        const i = (0, x.r$)({
            manifest: s,
            signature: (0, x.g2)(e),
            keys: r.keys
        }), a = `generation ${ue(t.generation)} ${(0, x.LY)(i)}`;
        if ("valid" === i.status) {
            const e = (0, b.k_)(s, n);
            if (e.generation !== t.generation) throw new K(`${b.h1} changed while it was read`);
            return this.options.log(`signature: ${a}`), e;
        }
        if (r.enforce) throw new K(`signature: ${a}`);
        const c = `${t.generation} ${i.status}`;
        return this.reportedSignature !== c && (this.reportedSignature = c, this.options.log(`signature not enforced in this build: ${a}; loading it anyway`)), t;
    }
}
