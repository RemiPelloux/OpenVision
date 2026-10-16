require.d(exports, {
    iH: ()=>Mt,
    dw: ()=>Te,
    getPeerAgentStoreFilesDirs: ()=>Re,
    getUserAgentStoreFilesDirsReady: ()=>$e,
    V0: ()=>jt,
    uR: ()=>Ft,
    dk: ()=>qt,
    H_: ()=>xt,
    kE: ()=>Gt,
    te: ()=>Ht,
    mt: ()=>Bt,
    C: ()=>tt
});
var r = require(83737), s = require(23152);
var o = require(35068);
const i = "agentStore.skillRoots.v1", a = 6048e5;
let d = Promise.resolve();
function c(e) {
    return Array.isArray(e) && 2 === e.length && ("user" === e[0] || "team" === e[0]) && "string" == typeof e[1] && e[1].length > 0;
}
function u(e, t, n = Date.now()) {
    if (void 0 === t.authId) return;
    const r = e.get(i);
    return !function(e) {
        if ("object" != typeof e || null === e) return !1;
        const t = e;
        return "string" == typeof t.authId && ("number" == typeof t.teamId || null === t.teamId) && "boolean" == typeof t.enabled && Array.isArray(t.mountKeys) && t.mountKeys.every(c) && "number" == typeof t.writtenAt && Number.isFinite(t.writtenAt);
    }(r) || r.authId !== t.authId || r.teamId !== (t.teamId ?? null) || Math.abs(n - r.writtenAt) > a ? void 0 : {
        enabled: r.enabled,
        mountKeys: r.mountKeys
    };
}
var l = require(61933), f = require(94289), h = require(72795), g = require(18021), p = require(13920), m = require(77598), y = require(73024), v = require(76760), w = require(91398);
const S = /https?:\/\/[^\s'")]+/g;
function I(e) {
    return (e instanceof Error ? e.message : String(e)).replace(S, (e)=>{
        try {
            const t = new URL(e);
            return `${t.protocol}//${t.host}${t.pathname}`;
        } catch  {
            return "<unparseable-presigned-url>";
        }
    });
}
let b;
function k() {
    return b ??= (async ()=>{
        try {
            return (0, o.agentStoreRpcServiceFromDedicatedGate)(await w.cursor.checkFeatureGate(l.QT, {
                disableExposureLog: !0
            }));
        } catch  {
            return o.DEFAULT_AGENT_STORE_RPC_SERVICE;
        }
    })(), b;
}
const A = [
    v.join(__dirname, "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node"),
    v.join(__dirname, "..", "..", "cursor-agent-exec", "dist", "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node"),
    v.join(__dirname, "..", "..", "..", "..", "cursor-agent-exec", "dist", "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node")
].find((e)=>y.existsSync(e));
const P = {
    getConnectTransport: ()=>w.cursor.connectTransport,
    getCursorCreds: ()=>w.cursor.getCursorCreds(),
    getDynamicConfigValue: (e)=>w.cursor.getDynamicConfigValue(e),
    showWarningMessage: (e)=>w.window.showWarningMessage(e),
    loadSqlite: async function() {
        return function(e) {
            if (void 0 === A) return e;
            const t = function(t, n) {
                return new e(t, {
                    ...n,
                    nativeBinding: n?.nativeBinding ?? A
                });
            };
            return Object.setPrototypeOf(t, e), t.prototype = e.prototype, t;
        }((await Promise.resolve().then(require.t.bind(require, 60677, 23))).default);
    },
    sanitizeLogMessage: I,
    loadSyncModule: async ()=>await Promise.resolve().then(require.bind(require, 35068)),
    getAgentStoreRpcService: ()=>k()
};
class M extends o.AgentStoreSyncRuntimeController {
    constructor(e, t, n, r, s, i = o.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, a){
        super(e, t, n, P, r, s, i, a);
    }
}
const D = "agentStoreSync.pathHashSalt";
async function C(e) {
    const t = e.globalState.get(D);
    if ("string" == typeof t && t.length > 0) return t;
    const n = (0, m.randomUUID)();
    await e.globalState.update(D, n);
    const r = e.globalState.get(D);
    return "string" == typeof r && r.length > 0 ? r : n;
}
var _ = require(77273);
const $ = "agent_store_principal_local_mounts", R = "agent_store_local_user_mount", L = "agent_store_sync_client", T = "agent_store_citation_index_tier";
function K(e) {
    if (void 0 === e.storeBase) return [];
    const t = e.principalMountKeys.get("user");
    if (void 0 === t) return [];
    try {
        return [
            (0, r.yA)((0, r.WX)(e.storeBase, t))
        ];
    } catch (t) {
        return e.onError(t), [];
    }
}
const N = [
    5e3,
    15e3,
    3e4,
    6e4
];
function E(e, t) {
    return e.length === t.length && e.every((e, n)=>e === t[n]);
}
function F(e, t) {
    const n = [];
    for (const r of e)t(r) && n.push(r);
    return n;
}
function H(e) {
    if (0 === e.conversationId.trim().length) return [];
    const t = [], n = new Set;
    if (void 0 !== e.selfFilesDir && e.selfFilesDir.length > 0 && t.push({
        path: e.selfFilesDir,
        kind: "self"
    }), void 0 !== e.inherited) for (const r of e.inherited)n.has(r.alias) || (n.add(r.alias), t.push({
        path: r.filesDir,
        kind: "peer",
        alias: r.alias,
        readOnly: r.readOnly
    }));
    for (const r of e.registry){
        if (n.has(r.alias)) continue;
        let e;
        switch(n.add(r.alias), r.kind){
            case "peer":
                e = "peer";
                break;
            case "share":
                e = "share";
                break;
            case "principal":
                e = "principal";
                break;
            default:
                return r.kind;
        }
        t.push({
            path: r.filesDir,
            kind: e,
            alias: r.alias,
            readOnly: "share" === r.kind
        });
    }
    return t;
}
function x(e, t) {
    return e.ensureFilesDir(t);
}
function B(e, t, n) {
    e.requestMount(t, n);
}
function G(e, t, n) {
    return {
        scope: e,
        path: t,
        rootLinkPolicy: n
    };
}
const j = [
    "team",
    "user",
    "agent"
];
function q(e, t) {
    const n = function(e, t) {
        const n = e.getHarness();
        if (void 0 !== n) try {
            (0, r._b)(t);
            const e = (0, r.f$)((0, r.WX)(n, t));
            return (0, r.rs)(e), e;
        } catch  {
            return;
        }
    }(e, t);
    if (void 0 === n) return {
        kind: "unavailable"
    };
    const s = function(e, t) {
        const n = e.handoutPins, r = e.windowId;
        if (void 0 === n || void 0 === r) return "skipped";
        if (n.has(t)) return "reused";
        const s = e.getHarness();
        if (void 0 === s) return "skipped";
        const i = (0, o.acquireStorePinSync)({
            store: s,
            mountKey: t,
            windowId: r,
            purpose: "foreground"
        });
        if ("evicting" === i.kind) return "evicting";
        if (!i.handle.acquired) {
            const n = void 0 !== i.handle.error ? `: ${String(i.handle.error)}` : "";
            e.warn?.(`agent store pin not acquired for ${t}${n}`);
        }
        return n.set(t, i.handle), "new";
    }(e, t);
    if ("evicting" === s) return {
        kind: "evicting"
    };
    try {
        y.mkdirSync(n, {
            recursive: !0,
            mode: r.qH
        });
        try {
            y.chmodSync(n, r.qH);
        } catch  {}
        return {
            kind: "ready",
            filesDir: n
        };
    } catch  {
        if ("new" === s) {
            const n = e.handoutPins?.get(t);
            e.handoutPins?.delete(t), n?.release();
        }
        return {
            kind: "unavailable"
        };
    }
}
function O(e, t) {
    const n = q(e, t);
    return "ready" === n.kind ? n.filesDir : void 0;
}
async function W(e) {
    const t = e.handoutPins;
    if (void 0 === t) return;
    const n = [
        ...t.values()
    ];
    t.clear(), await Promise.all(n.map((e)=>e.release()));
}
function z(e, t) {
    const n = {
        scope: "agent",
        reason: t
    };
    return {
        scopes: e.scopes.filter((e)=>"agent" !== e.scope),
        unavailableScopes: [
            ...e.unavailableScopes ?? [],
            n
        ]
    };
}
function U(e, t) {
    return async (n)=>{
        let s;
        if (void 0 !== n?.syncAgentPath) try {
            s = (0, o.normalizeRelPath)(n.syncAgentPath);
        } catch  {
            return;
        }
        if (void 0 === n || "string" != typeof n.agentId || void 0 !== n.mount && "self" !== n.mount && "peer" !== n.mount || void 0 !== n.syncAgentPath && "string" != typeof n.syncAgentPath || void 0 !== s && "peer" !== n.mount) return;
        const i = n.mount ?? "self", a = e.getHarness();
        if (void 0 === a) return d = !0 === e.isHarnessSettling?.() ? "sync-starting" : "sync-unavailable", {
            scopes: [],
            unavailableScopes: j.map((e)=>({
                    scope: e,
                    reason: d
                }))
        };
        var d;
        const c = e.getPrincipalMountKeys(), u = e.getController(), f = function(e, t, n) {
            return {
                ...e,
                scopes: e.scopes.map((e)=>{
                    const r = "agent" === e.scope ? void 0 : t.get(e.scope);
                    return void 0 === r ? e : {
                        ...e,
                        syncState: n?.getMountSyncState(r) ?? "opening"
                    };
                })
            };
        }(function(e) {
            const t = e.agentId.trim(), { localStoreBase: n, localStoreTmpDirName: s } = e, o = (e)=>(0, r.f$)({
                    base: n,
                    agentId: e,
                    tmpDirName: s
                }), i = e.localPrincipalSourceIds?.user, a = e.localPrincipalSourceIds?.team;
            return {
                scopes: [
                    ...void 0 === a ? [] : [
                        G("team", o(a), "reject")
                    ],
                    ...void 0 === i ? [] : [
                        G("user", o(i), "reject")
                    ],
                    ...(0, l.v8)(t) ? [
                        G("agent", o(t), "reject")
                    ] : []
                ]
            };
        }({
            agentId: n.agentId,
            localStoreBase: a.base,
            localStoreTmpDirName: a.tmpDirName,
            localPrincipalSourceIds: {
                user: c.get("user"),
                team: c.get("team")
            }
        }), c, u);
        if (void 0 === f.scopes.find((e)=>"agent" === e.scope)) return f;
        const h = q(e, n.agentId);
        if ("evicting" === h.kind) return z(f, "sync-starting");
        if ("ready" !== h.kind) return z(f, "mount-failed");
        let g;
        if ("peer" === i) {
            if (void 0 === u) return z(f, "sync-unavailable");
            if (void 0 === s) {
                const e = await u.ensureMountedPeer({
                    peerAgentId: n.agentId,
                    isProjectStore: !0 === n.isProjectStore,
                    awaitInitialRound: !1 !== n.awaitInitialRound
                }).catch(()=>{});
                if (void 0 === e || "mounted" !== e.outcome && "already-present" !== e.outcome) return z(f, "mount-failed");
                g = e.syncState;
            } else if ("served" !== await u.resolveCitedPath({
                mountKey: n.agentId,
                relPath: s,
                indexTierEnabled: e.isCitationIndexTierEnabled(),
                isProjectStore: !0 === n.isProjectStore,
                ...void 0 !== t?.citedFileWait ? {
                    waitBudget: t.citedFileWait
                } : {}
            })) return z(f, "mount-failed");
        } else if (void 0 !== u && "lazy" === u.mountPolicy()) if (u.hasSelfMount(n.agentId)) e.releaseLazySelfWatch?.(n.agentId);
        else {
            const t = (0, o.admitLocalAgentStore)({
                agentId: n.agentId,
                policy: "lazy",
                reason: "prompt_inventory",
                indexPopulated: u.localStoreIndexIsPopulated(n.agentId),
                resumeRequested: !0 === n.resume || u.hasAdmittedResume(n.agentId)
            });
            if ("mount" === t.action) {
                const r = ()=>{
                    u.hasSelfMount(n.agentId) || u.hasNonSelfMount(n.agentId) ? e.releaseLazySelfWatch?.(n.agentId) : e.noteLazySelfStore?.(n.agentId, h.filesDir);
                };
                Promise.resolve(u.openAdmittedLazySelf(n.agentId, t.reason)).then(r, r);
            } else e.noteLazySelfStore?.(n.agentId, h.filesDir);
        }
        else u?.ensureMounted(n.agentId);
        return {
            ...f,
            scopes: f.scopes.map((e)=>"agent" === e.scope ? {
                    ...e,
                    path: h.filesDir,
                    ...void 0 === g ? {} : {
                        syncState: g
                    }
                } : e)
        };
    };
}
const X = {
    outcome: "unavailable",
    pushed: 0,
    pulled: 0
};
const J = "user", V = "team", Q = 5e3, Y = 6e4, Z = "Agent store sync is currently disabled; it resumes automatically when re-enabled.";
let ee, te, ne, re, se, oe = o.NEVER_STARTED_HARNESS_PHASE, ie = 0, ae = [];
const de = new Map;
let ce, ue, le, fe, he, ge, pe, me, ye, ve, we, Se, Ie = 0, be = [], ke = !0, Ae = o.DEFAULT_HARNESS_RECOVERY_CONFIG, Pe = Promise.resolve();
function Me(e) {
    Promise.resolve(Pe).then(()=>{
        (0, o.isHarnessInactive)(oe) || e();
    });
}
const De = new Map, Ce = new Map;
const _e = new class {
    constructor(e){
        this.current = e;
    }
    ready() {
        const e = this.current();
        if (e.length > 0) return Promise.resolve(e);
        if (void 0 === this.pending) {
            let e;
            const t = new Promise((t)=>{
                e = t;
            });
            this.pending = {
                promise: t,
                resolve: e
            };
        }
        return this.pending.promise;
    }
    settle(e) {
        const t = this.pending;
        this.pending = void 0, t?.resolve([
            e
        ]);
    }
}(function() {
    if (void 0 === ee) return [];
    const e = Te.mountKeys.get("user");
    if (void 0 === e) return [];
    try {
        const t = (0, r.f$)((0, r.WX)(ee, e));
        return (0, r.rs)(t), [
            t
        ];
    } catch  {
        return [];
    }
});
function $e() {
    return _e.ready();
}
function Re() {
    return [
        ...new Set([
            ...[
                ...De.values()
            ].filter((e)=>"peer" === e.kind).map((e)=>e.filesDir),
            ...Ce.values()
        ])
    ];
}
function Le(e) {
    ge?.appendLine(`[cursor-agent-host] ${e}`);
}
const Te = new class {
    constructor(e){
        this.deps = e, this.mountKeysByAlias = new Map, this.listeners = new Set, this.targetDirsListeners = new Set, this.enabled = !1, this.enabledResolved = !1, this.refreshGeneration = 0, this.retryPending = !1, this.retryAttempts = 0, this.published = [], this.publishedTargetDirs = [];
    }
    get mountKeys() {
        return this.mountKeysByAlias;
    }
    get() {
        return (e = {
            enabled: this.enabled,
            storeBase: this.deps.getStoreBase(),
            principalMountKeys: this.mountKeysByAlias,
            onError: (e)=>{
                this.deps.log(`Agent store skills root unavailable: ${I(e)}`);
            }
        }).enabled ? K(e) : [];
        var e;
    }
    targetDirs() {
        return K({
            storeBase: this.deps.getStoreBase(),
            principalMountKeys: this.mountKeysByAlias,
            onError: (e)=>{
                this.deps.log(`Agent store skills target unavailable: ${I(e)}`);
            }
        });
    }
    onDidChange(e) {
        return this.listeners.add(e), ()=>{
            this.listeners.delete(e);
        };
    }
    onDidChangeTargetDirs(e) {
        return this.targetDirsListeners.add(e), ()=>{
            this.targetDirsListeners.delete(e);
        };
    }
    setMountKey(e, t) {
        this.mountKeysByAlias.set(e, t), this.publishIfChanged();
    }
    deleteMountKey(e) {
        this.mountKeysByAlias.delete(e), this.publishIfChanged();
    }
    clearMountKeys() {
        this.mountKeysByAlias.clear(), this.publishIfChanged();
    }
    deleteMountKeyByValue(e) {
        for (const [t, n] of this.mountKeysByAlias)if (n === e) return this.deleteMountKey(t), t;
    }
    restore(e) {
        this.enabled = e.enabled, this.enabledResolved = !1, this.mountKeysByAlias.clear();
        for (const [t, n] of e.mountKeys)this.mountKeysByAlias.set(t, n);
        this.publishTargetDirsIfChanged(), this.publishRootsIfChanged();
    }
    forgetResolution() {
        this.refreshGeneration += 1, this.enabledResolved = !1, this.enabled = !1, this.publishRootsIfChanged();
    }
    async refreshGate() {
        const e = ++this.refreshGeneration;
        let t;
        try {
            t = await this.deps.resolveEnabled();
        } catch (e) {
            t = void 0, this.deps.log(`skills sync setting resolve failed: ${I(e)}`);
        }
        e === this.refreshGeneration && (void 0 !== t ? (this.retryAttempts = 0, this.enabled = t, this.enabledResolved = !0, this.publishIfChanged()) : this.scheduleIndeterminateRetry());
    }
    scheduleIndeterminateRetry() {
        if (this.retryPending) return;
        if (void 0 === this.deps.getStoreBase()) return void (this.retryAttempts = 0);
        const e = N[Math.min(this.retryAttempts, N.length - 1)];
        this.retryAttempts += 1, this.retryPending = !0, this.deps.scheduleRetry(()=>(this.retryPending = !1, this.refreshGate()), e);
    }
    publishIfChanged() {
        this.publishTargetDirsIfChanged(), this.publishRootsIfChanged(), this.enabledResolved && this.deps.persist?.({
            enabled: this.enabled,
            mountKeys: [
                ...this.mountKeysByAlias
            ]
        });
    }
    publishTargetDirsIfChanged() {
        const e = this.targetDirs();
        if (!E(e, this.publishedTargetDirs)) {
            this.publishedTargetDirs = e;
            for (const e of this.targetDirsListeners)try {
                e();
            } catch (e) {
                this.deps.log(`Agent store skills target listener failed: ${I(e)}`);
            }
        }
    }
    publishRootsIfChanged() {
        const e = this.get();
        if (!E(e, this.published)) {
            this.published = e;
            for (const t of e)this.ensureSkillsDirExists(t);
            this.deps.log(`Agent store skills roots: count=${e.length} enabled=${this.enabled ? "on" : "off"} user=${this.mountKeysByAlias.get("user") ?? "<none>"}`);
            for (const e of this.listeners)try {
                e();
            } catch (e) {
                this.deps.log(`Agent store skills root listener failed: ${I(e)}`);
            }
        }
    }
    ensureSkillsDirExists(e) {
        try {
            this.deps.ensureDirectory(e);
        } catch (e) {
            this.deps.log(`Agent store skills dir could not be created: ${I(e)}`);
        }
    }
}({
    resolveEnabled: function() {
        return async function(e) {
            try {
                return "object" == typeof (t = await e.getEffectiveSettings()) && null !== t && !0 === t.enabled;
            } catch (t) {
                return void e.log(`skills sync setting read failed: ${I(t)}`);
            }
            var t;
        }({
            getEffectiveSettings: ()=>(0, g.UU)(h.DashboardService, w.cursor.connectTransport).getEffectiveUserAgentStoreSkillsSettings({}),
            log: Le
        });
    },
    getStoreBase: ()=>ee,
    ensureDirectory: r.Ew,
    scheduleRetry: function(e, t) {
        setTimeout(()=>{
            e();
        }, t).unref();
    },
    log: Le,
    persist: (e)=>{
        void 0 !== we && void 0 !== Se && (function(e, t, n, r = Date.now()) {
            if (void 0 === t.authId) return Promise.resolve();
            const s = {
                authId: t.authId,
                teamId: t.teamId ?? null,
                enabled: n.enabled,
                mountKeys: n.mountKeys,
                writtenAt: r
            };
            return d = d.catch(()=>{}).then(()=>e.update(i, s)), d;
        })(we, Se, e).then(void 0, (e)=>{
            Le(`Agent store skills roots cache write failed: ${I(e)}`);
        });
    }
});
let Ke, Ne, Ee = !1, Fe = !0, He = 0, xe = 0, Be = Promise.resolve();
const Ge = new Map;
function je(e, t, n) {
    De.set(t, n), "user" === n.alias && _e.settle(n.filesDir), e.appendLine(`[cursor-agent-host] mount alias add kind=${n.kind} mountKey=${t} alias=${n.alias}`);
}
function qe() {
    return void 0 !== ee && void 0 !== te;
}
function Oe() {
    void 0 !== ue && (clearTimeout(ue), ue = void 0);
    const e = le;
    le = void 0, e?.();
}
function We(e, t, n) {
    const r = oe;
    "stopping" === t.kind && Oe(), "starting" === t.kind ? (ke = !1, "down" === r.kind && "server_disabled" === r.reason && (ye = r.attempts)) : "up" === t.kind ? ke = 0 === be.length : "down" === t.kind && "server_disabled" !== t.reason && (ye = void 0), oe = t, e.appendLine(`[cursor-agent-host] agent store harness ${(0, o.formatHarnessTransition)({
        from: r,
        to: t,
        reason: n
    })}`), Ue(e);
}
function ze() {
    void 0 !== ve && (clearTimeout(ve), ve = void 0);
}
function Ue(e) {
    ze();
    const t = (0, o.harnessProbeDelayMs)({
        phase: oe,
        now: Date.now(),
        config: Ae
    });
    if (void 0 === t || t <= 0 || void 0 === pe) return;
    ve = setTimeout(()=>{
        ve = void 0, Xe(e);
    }, Math.min(t, 2147483647));
}
async function Xe(e) {
    "down" === oe.kind && (Date.now() < oe.nextProbeAtMs ? Ue(e) : void 0 !== pe && await _t(pe, e, "probe_timer"));
}
function Je(e) {
    "down" === oe.kind && ("touch" === e && (0, o.harnessTouchIsCoolingDown)({
        phase: oe,
        now: Date.now(),
        config: Ae
    }) || void 0 !== pe && void 0 !== me && _t(pe, me, e));
}
function Ve() {
    const e = ae;
    ae = [];
    for (const t of e)t.dispose();
}
function Qe(e) {
    return "starting" !== oe.kind || ie !== e;
}
function Ye() {
    return "stopping" === oe.kind || "down" === oe.kind && "extension_deactivate" === oe.reason;
}
function Ze() {
    w.window.showInformationMessage(Z);
}
async function et(e) {
    try {
        const e = await w.cursor.getDynamicConfigValue(o.AGENT_STORE_SYNC_CLIENT_CONFIG_NAME);
        return (0, o.resolveAgentStoreSyncClientConfig)(e ?? void 0, "ide");
    } catch (t) {
        return e.appendLine(`[cursor-agent-host] Agent store sync config read failed, using defaults: ${I(t)}`), (0, o.agentStoreSyncClientCodeDefaults)("ide");
    }
}
async function tt(e) {
    const t = te, n = Te.mountKeys.get("user");
    return void 0 === t || void 0 === n ? "absent" : await t.forceSyncPathsForConflictNotices({
        mountKey: n,
        absPaths: e
    });
}
function nt(e) {
    const t = te, n = [
        ...Te.mountKeys
    ];
    Te.clearMountKeys();
    for (const [, e] of n)De.delete(e);
    const r = Be.then(async ()=>{
        await Promise.allSettled(n.map(async ([n, r])=>{
            void 0 !== t && await t.unmountPrincipal(r), e.appendLine(`[cursor-agent-host] principal mount removed alias=${n}`);
        }));
    });
    return Be = r.catch(()=>{}), r;
}
function rt(e) {
    He += 1, Fe = !0, function() {
        for (const e of Te.mountKeys.values())De.delete(e);
    }(), void 0 !== Ne && (clearTimeout(Ne), Ne = void 0), xe = 0;
    const t = nt(e);
    Me(()=>{
        t.finally(()=>{
            ct(e);
        });
    });
}
function st(e, t) {
    var n, r;
    (n = t, r = Se, n?.authId !== r?.authId || n?.teamId !== r?.teamId) && (Se = t, Te.forgetResolution(), rt(e), ot(t), Me(()=>{
        Te.refreshGate();
    }));
}
function ot(e) {
    if (void 0 === we || void 0 === ee) return;
    const t = u(we, e);
    void 0 !== t && function(e, t) {
        const n = new Map(t.mountKeys).get("user");
        if (void 0 === n) return !0;
        try {
            return !0 === y.statSync((0, r.yA)((0, r.WX)(e, n)), {
                throwIfNoEntry: !1
            })?.isDirectory();
        } catch  {
            return !1;
        }
    }(ee, t) && Te.restore(t);
}
function it(e, t) {
    const n = new Set([
        J,
        V
    ]);
    for (const [r, s] of De)if (r !== t) {
        if (s.alias === e) {
            const t = gt(`${e}_mounted`, n);
            De.set(r, {
                ...s,
                alias: t
            });
            continue;
        }
        n.add(s.alias);
    }
}
async function at(e) {
    const t = He;
    if (!qe() || void 0 === ee || void 0 === te) return !1;
    if (await Be, t !== He) return !1;
    const n = await async function(e) {
        try {
            return await w.cursor.checkFeatureGate($) ? [
                "user",
                "team"
            ] : await w.cursor.checkFeatureGate(R) ? [
                "user"
            ] : [];
        } catch (t) {
            return e.appendLine(`[cursor-agent-host] Principal agent-store mount gate check failed, defaulting to disabled: ${String(t)}`), [];
        }
    }(e);
    if (0 === n.length) return t !== He || await nt(e), !1;
    const s = await w.cursor.getUserId();
    if (t !== He) return !1;
    if (void 0 === s) return void 0 === w.cursor.getCursorAuthToken() || Fe ? await nt(e) : e.appendLine("[cursor-agent-host] principal mount refresh kept existing mounts because user lookup was unavailable"), void 0 !== w.cursor.getCursorAuthToken();
    const o = Se?.teamId ?? w.cursor.getTeamId(), i = new Map((function(e) {
        const t = [];
        return e.mountAliases.includes("user") && t.push({
            alias: "user",
            sourceId: (0, l._N)({
                userId: e.userId,
                teamId: e.teamId
            })
        }), void 0 !== e.teamId && e.mountAliases.includes("team") && t.push({
            alias: "team",
            sourceId: (0, l.Ko)(e.teamId)
        }), t;
    })({
        userId: s,
        teamId: o,
        mountAliases: n
    }).map((e)=>[
            e.alias,
            e.sourceId
        ])), a = [
        ...Te.mountKeys
    ].filter(([e, t])=>i.get(e) !== t);
    for (const [e, t] of a)Te.deleteMountKey(e), De.delete(t);
    if (await Promise.allSettled(a.map(async ([, e])=>{
        await te?.unmountPrincipal(e);
    })), t !== He) return !1;
    Fe = !1;
    let d = !1;
    for (const [n, s] of i){
        const { outcome: o, reason: i } = await te.ensureMountedPrincipal({
            sourceId: s,
            alias: n
        });
        if (t !== He) return await te.unmountPrincipal(s), !1;
        "mounted" === o || "already-present" === o ? (it(n, s), Te.setMountKey(n, s), je(e, s, {
            alias: n,
            filesDir: (0, r.f$)((0, r.WX)(ee, s)),
            kind: "principal"
        })) : (e.appendLine(`[cursor-agent-host] principal mount skipped alias=${n} outcome=${o} reason=${i}`), d = !0);
    }
    return d;
}
function dt(e) {
    if (void 0 !== Ne || (0, o.isHarnessInactive)(oe)) return;
    xe += 1;
    const t = Math.min(Y, Q * 2 ** Math.min(xe - 1, 4));
    Ne = setTimeout(()=>{
        Ne = void 0, ct(e);
    }, t);
}
function ct(e) {
    (0, o.isHarnessInactive)(oe) || (Ee = !0, void 0 === Ke && (Ke = (async ()=>{
        for(; Ee;){
            Ee = !1;
            let t = !1;
            try {
                t = await at(e);
            } catch (n) {
                e.appendLine(`[cursor-agent-host] principal mount refresh failed: ${I(n)}`), Fe && await nt(e), t = !0;
            }
            t ? dt(e) : (xe = 0, void 0 !== Ne && (clearTimeout(Ne), Ne = void 0));
        }
    })().finally(()=>{
        Ke = void 0, Ee && ct(e);
    })));
}
async function ut(e) {
    return async function(e) {
        const t = await pt(e);
        return "enabled" === t;
    }(e);
}
async function lt(e) {
    try {
        return await w.cursor.checkFeatureGate(L);
    } catch (t) {
        return e.appendLine(`[cursor-agent-host] Agent store subagent inherit gate check failed, defaulting to disabled: ${String(t)}`), !1;
    }
}
async function ft(e, t) {
    if (Je("touch"), !await lt(e) || !qe() || void 0 === ee) return {
        applied: !1,
        inheritedSourceIds: []
    };
    const n = t.parentConversationId.trim(), s = t.childConversationId.trim();
    if (0 === n.length || 0 === s.length || !(0, r.v8)(n)) return {
        applied: !1,
        inheritedSourceIds: []
    };
    const o = new Map;
    te?.ensureMounted(n);
    const i = (0, r.f$)((0, r.WX)(ee, n));
    try {
        (0, r.rs)(i), o.set(l._u, {
            alias: l._u,
            filesDir: i,
            readOnly: !1
        });
    } catch (t) {
        e.appendLine(`[cursor-agent-host] subagent inherit skip parent store: ${I(t)}`);
    }
    if (0 === o.size) return {
        applied: !1,
        inheritedSourceIds: []
    };
    const a = !1 !== t.registerLocalShellMounts;
    return a && Ge.set(s, o), te?.noteInheritedConflictNoticeMounts(s, [
        n
    ]), e.appendLine(`[cursor-agent-host] subagent inherit applied child=${s} parent=${n} mounts=${o.size} registerLocalShellMounts=${a}`), {
        applied: !0,
        inheritedSourceIds: [
            n
        ]
    };
}
function ht(e, t) {
    const n = t.childConversationId.trim();
    if (0 === n.length) return;
    const r = Ge.delete(n);
    te?.clearInheritedConflictNoticeMounts(n), r && e.appendLine(`[cursor-agent-host] subagent inherit cleared child=${n}`);
}
function gt(e, t) {
    return (0, o.allocateUniqueAgentStoreMountAlias)({
        preferred: e,
        usedAliases: t
    });
}
async function pt(e) {
    try {
        return await w.cursor.checkFeatureGate(L) ? "enabled" : void 0 === await w.cursor.getAuthId() ? "unknown" : "disabled";
    } catch (t) {
        return e.appendLine(`[cursor-agent-host] Agent store sync gate check failed: ${String(t)}`), "unknown";
    }
}
let mt = !1;
async function yt(e) {
    try {
        mt = await w.cursor.checkFeatureGate(T);
    } catch (t) {
        mt = !1, e.appendLine(`[cursor-agent-host] Agent store citation index tier gate check failed, defaulting to disabled: ${String(t)}`);
    }
}
async function vt(e, t) {
    if (!await ut(e) || !qe()) return t.silent || Ze(), {
        mounted: !1,
        reason: "disabled"
    };
    if (!function(e) {
        if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
        const t = e;
        return !(void 0 !== t.input && "string" != typeof t.input || void 0 !== t.storeId && "string" != typeof t.storeId || void 0 !== t.shareId && "string" != typeof t.shareId || void 0 !== t.alias && "string" != typeof t.alias || void 0 !== t.silent && "boolean" != typeof t.silent);
    }(t)) return {
        mounted: !1,
        reason: "invalid-mount"
    };
    const n = (0, r.j6)(t);
    if (void 0 === n) return {
        mounted: !1,
        reason: "invalid-mount"
    };
    const s = "share" === n.kind ? n.shareId : n.agentId, i = De.get(s);
    if (void 0 !== i) return {
        mounted: !0,
        kind: i.kind,
        mountKey: s,
        storeId: "peer" === n.kind ? n.agentId : void 0,
        shareId: "share" === n.kind ? n.shareId : void 0,
        alias: i.alias,
        filesDir: i.filesDir,
        reason: "already-mounted"
    };
    const a = t.alias?.trim(), d = (c = a && (0, o.isValidAgentStoreMountAlias)(a) ? a : (0, o.defaultAgentStoreMountAlias)(n.kind, s), (0, o.allocateUniqueAgentStoreMountAlias)({
        preferred: c,
        usedAliases: new Set([
            J,
            V,
            ...[
                ...De.values()
            ].map((e)=>e.alias)
        ])
    }));
    var c;
    if (void 0 === te || void 0 === ee) return t.silent || Ze(), {
        mounted: !1,
        kind: n.kind,
        mountKey: s,
        alias: d,
        reason: "disabled"
    };
    const { outcome: u } = "share" === n.kind ? await te.ensureMountedShare({
        shareId: n.shareId,
        alias: d
    }) : await te.ensureMountedPeer({
        peerAgentId: n.agentId,
        alias: d
    });
    if ("mounted" !== u && "already-present" !== u) return {
        mounted: !1,
        kind: n.kind,
        mountKey: s,
        storeId: "peer" === n.kind ? n.agentId : void 0,
        shareId: "share" === n.kind ? n.shareId : void 0,
        alias: d,
        reason: "mount-not-started"
    };
    const l = (0, r.f$)((0, r.WX)(ee, s));
    return je(e, s, {
        alias: d,
        filesDir: l,
        kind: n.kind
    }), t.silent || w.window.showInformationMessage(`Mounted ${n.kind} ${s} as ${d}`), {
        mounted: !0,
        kind: n.kind,
        mountKey: s,
        storeId: "peer" === n.kind ? n.agentId : void 0,
        shareId: "share" === n.kind ? n.shareId : void 0,
        alias: d,
        filesDir: l
    };
}
let wt = `${process.pid}-${(0, m.randomUUID)()}`;
const St = new Map, It = {
    getHarness: ()=>ee,
    getController: ()=>te,
    getPrincipalMountKeys: ()=>Te.mountKeys,
    isCitationIndexTierEnabled: ()=>mt,
    isHarnessSettling: function() {
        return !Ye() && (void 0 !== ce || !(0, o.isHarnessInactive)(oe) && Ie > 0);
    },
    get windowId () {
        return wt;
    },
    handoutPins: St,
    warn: (e)=>Le(e),
    noteLazySelfStore: (e, t)=>{
        te?.noteDeferredLocalStore(e, "prompt_inventory"), Kt(e, t);
    },
    releaseLazySelfWatch: (e)=>{
        Tt(e);
    }
}, bt = U(It), kt = function(e) {
    const t = U(e);
    return async (n)=>{
        if (void 0 === n || "string" != typeof n.agentId || "string" != typeof n.relPath) return {
            outcome: "invalid"
        };
        let r;
        try {
            r = (0, o.normalizeRelPath)(n.relPath);
        } catch  {
            return {
                outcome: "invalid"
            };
        }
        const s = await t({
            agentId: n.agentId,
            mount: "self"
        }), i = s?.scopes.find((e)=>"agent" === e.scope)?.path, a = e.getController();
        if (void 0 === i || void 0 === a) return {
            outcome: "absent"
        };
        if ("lazy" === a.mountPolicy?.()) {
            if ("absent" === await a.prepareExplicitSelfSync(n.agentId, "explicit_sync", {
                openEmpty: !0
            })) return {
                outcome: "absent"
            };
        } else {
            const { outcome: e } = await a.ensureMountedSelfAwaited(n.agentId);
            if ("mounted" !== e && "already-present" !== e) return {
                outcome: "absent"
            };
        }
        return {
            outcome: await a.forceSyncPathForConflictNotices({
                mountKey: n.agentId,
                absPath: v.join(i, r)
            })
        };
    };
}(It), At = (Pt = It, async (e)=>{
    if (void 0 === e || "string" != typeof e.agentId || !0 !== e.isProjectStore || !Array.isArray(e.relPaths) || 0 === e.relPaths.length || e.relPaths.length > f.d1) return {
        outcome: "invalid",
        pushed: 0,
        pulled: 0
    };
    const t = [];
    for (const n of e.relPaths){
        if ("string" != typeof n) return {
            outcome: "invalid",
            pushed: 0,
            pulled: 0
        };
        try {
            t.push((0, o.normalizeRelPath)(n));
        } catch  {
            return {
                outcome: "invalid",
                pushed: 0,
                pulled: 0
            };
        }
    }
    if (void 0 === Pt.getHarness()) return X;
    if (void 0 === O(Pt, e.agentId)) return X;
    const n = Pt.getController();
    if (void 0 === n) return X;
    let r;
    try {
        r = await n.refreshPeerPaths({
            peerAgentId: e.agentId,
            relPaths: t,
            isProjectStore: !0
        });
    } catch  {
        return {
            outcome: "error",
            pushed: 0,
            pulled: 0
        };
    }
    switch(r.kind){
        case "ran":
            return {
                outcome: r.errors > 0 ? "error" : "refreshed",
                pushed: r.pushed,
                pulled: r.pulled
            };
        case "holder-owns-fetch":
            return {
                outcome: "passive",
                pushed: 0,
                pulled: 0
            };
        case "throttled":
            return {
                outcome: "throttled",
                pushed: 0,
                pulled: 0
            };
        case "unavailable":
            return X;
        case "failed":
            return {
                outcome: "error",
                pushed: 0,
                pulled: 0
            };
    }
});
var Pt;
async function Mt(e, t, n, i) {
    pe = e, me = t, void 0 !== i?.whenProviderRegistered && (Pe = i.whenProviderRegistered), we = e.globalState, e.subscriptions.push(w.commands.registerCommand(f._4, (e)=>void 0 === e ? Promise.resolve({
            mounted: !1,
            reason: "invalid-mount"
        }) : vt(t, e)), w.commands.registerCommand(f.kJ, (e)=>(function(e) {
            if (void 0 === ee) return [];
            const t = new Set([
                ...De.values()
            ].map((e)=>e.alias)), n = [], s = new Set;
            for (const i of e?.storeIds ?? []){
                const e = i.trim();
                if (!(0, r.Y6)(e) && !(0, r.v8)(e) || s.has(e)) continue;
                s.add(e);
                const a = De.get(e), d = a?.alias ?? gt((0, o.defaultAgentStoreMountAlias)("peer", e), t), c = a?.filesDir ?? (0, r.f$)((0, r.WX)(ee, e));
                n.push({
                    kind: "mine",
                    storeId: e,
                    alias: d,
                    filesDir: c
                });
            }
            const i = new Set;
            for (const s of e?.shareIds ?? []){
                const e = s.trim();
                if (!(0, r.A8)(e) || i.has(e)) continue;
                i.add(e);
                const a = De.get(e), d = a?.alias ?? gt((0, o.defaultAgentStoreMountAlias)("share", e), t), c = a?.filesDir ?? (0, r.f$)((0, r.WX)(ee, e));
                n.push({
                    kind: "shared",
                    shareId: e,
                    alias: d,
                    filesDir: c
                });
            }
            return n;
        })(e)), w.commands.registerCommand(f.$P, ()=>Te.get()), w.commands.registerCommand(f.Ak, ()=>Te.targetDirs()), w.commands.registerCommand(f.cX, ()=>Te.refreshGate()), w.commands.registerCommand(f.P9, async (e)=>{
        Je("touch");
        const t = await bt(e);
        if ("peer" === e?.mount) {
            const n = t?.scopes.find((e)=>"agent" === e.scope)?.path;
            void 0 === n ? Ce.delete(e.agentId) : Ce.set(e.agentId, n);
        }
        return t;
    }), w.commands.registerCommand(f.OT, (e)=>kt(e)), w.commands.registerCommand(f.Ml, (e)=>At(e)), w.commands.registerCommand(f.H8, (e)=>void 0 === e || 0 === e.conversationId.trim().length ? {
            stores: []
        } : function(e, t) {
            if (!ee) return {
                stores: []
            };
            const n = e.trim();
            try {
                (0, r._b)(n);
            } catch  {
                return {
                    stores: []
                };
            }
            const s = (e, t)=>{
                try {
                    return (0, r.rs)(e), !0;
                } catch (e) {
                    return ge?.appendLine(`[cursor-agent-host] omitting ${t} from prompt inventory: ${I(e)}`), !1;
                }
            };
            let o = Nt(n, "prompt_inventory", !0 === t?.resume);
            void 0 === o || s(o, `self mount ${n}`) || (o = void 0);
            const i = F(Ge.get(n)?.values() ?? [], (e)=>s(e.filesDir, `inherited mount alias ${e.alias}`));
            return {
                stores: H({
                    conversationId: n,
                    selfFilesDir: o,
                    registry: F(De.values(), (e)=>s(e.filesDir, `mount alias ${e.alias}`)),
                    inherited: i
                })
            };
        }(e.conversationId, {
            resume: !0 === e.resume
        })), w.commands.registerCommand(f.oP, (e)=>ft(t, e)), w.commands.registerCommand(f.Bi, (e)=>ht(t, e)), w.commands.registerCommand(f.rs, (e)=>(async function(e, t) {
            if (!await lt(e) || !qe()) return;
            const n = new Set;
            for (const s of t.agentIds){
                const t = s.trim();
                if (0 === t.length || n.has(t) || !(0, r.v8)(t)) continue;
                n.add(t);
                const o = await te?.forceSyncMountedIfPresent(t);
                if ("synced" === o?.kind) {
                    const { summary: t } = o;
                    e.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync mounted done: pushed=${t.filesPushed} pulled=${t.filesPulled} skipped=${t.filesSkipped} refusals=${t.refusals} errors=${t.errors.length} (${t.durationMs}ms)`);
                    for (const n of t.errors)e.appendLine(`[cursor-agent-host]   error ${n.code} on ${n.relPath ?? "<unknown>"}: ${I(n.message)}`);
                    continue;
                }
                "mounted-no-summary" !== o?.kind ? e.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync skipped unmounted store ${t}`) : e.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync mounted failed without summary for ${t}`);
            }
        })(t, e)));
    const a = {
        applySubagentStoreMounts: async (e)=>{
            try {
                await ft(t, {
                    parentConversationId: e.parentStoreId,
                    childConversationId: e.childStoreId
                });
            } catch (e) {
                t.appendLine(`[cursor-agent-host] local subagent store mount apply failed: ${I(e)}`);
            }
        },
        clearSubagentStoreMounts: async (e)=>{
            try {
                ht(t, {
                    childConversationId: e.childStoreId
                });
            } catch (e) {
                t.appendLine(`[cursor-agent-host] local subagent store mount clear failed: ${I(e)}`);
            }
        }
    };
    !function(e, t) {
        const n = [], r = new Set;
        for(;;){
            const s = t.getActive();
            if (void 0 === s || s === e) break;
            if (r.has(s)) break;
            r.add(s), t.unregister(s), n.push(s);
        }
        t.register(e);
        for (const e of n)t.register(e);
    }(a, {
        getActive: s.ux,
        register: s.R6,
        unregister: s.gR
    }), n.push(async ()=>{
        (0, s.gR)(a), await Rt(t, {
            reason: "extension_deactivate"
        }), ze(), pe = void 0, me = void 0;
    }), "down" === oe.kind && "extension_deactivate" === oe.reason || (e.subscriptions.push(w.cursor.onDidChangeGates((n)=>{
        var r;
        (void 0 === (r = n.changedGates) || r.includes(L)) && _t(e, t), function(e) {
            return void 0 === e || e.includes(T);
        }(n.changedGates) && yt(t);
    })), await yt(t), await _t(e, t));
}
const Dt = {
    enabled: "Agent store harness enabled by agent_store_sync_client",
    disabled: "Agent store harness disabled by agent_store_sync_client",
    unknown: "Agent store sync gate unknown; leaving the harness as it is"
};
function Ct(e, t) {
    he !== t && (he = t, e.appendLine(`[cursor-agent-host] ${Dt[t]}`));
}
async function _t(e, t, n = "gate_change") {
    if ("starting" === oe.kind && void 0 !== ce) {
        if (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({
            coreReady: qe(),
            phase: oe
        })) return;
        return _t(e, t, n);
    }
    if ("stopping" === oe.kind && void 0 !== fe) return await fe, _t(e, t, n);
    if ("starting" === oe.kind || "stopping" === oe.kind) return;
    let s;
    Ie++;
    try {
        s = await pt(t);
    } finally{
        Ie--;
    }
    const i = he;
    if (Ct(t, s), "disabled" === s && "down" === oe.kind && void 0 !== ue && (Oe(), ie += 1), void 0 !== ce && (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({
        coreReady: qe(),
        phase: oe,
        gateState: s
    }))) return;
    Ae = (0, o.harnessRecoveryConfigFromClient)(await et(t));
    switch((0, o.planHarnessAction)({
        phase: oe,
        gateState: s,
        trigger: n,
        now: Date.now(),
        config: Ae,
        previousGateState: i
    })){
        case "start":
            return void await async function(e, t, n = "gate_change", s) {
                if (void 0 !== ce) {
                    if (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({
                        coreReady: qe(),
                        phase: oe
                    })) return;
                    return _t(e, t, n);
                }
                if (qe() || Ye()) return;
                const i = async function(e, t, n, s) {
                    const i = oe, a = ie;
                    "down" === i.kind && "gate_change" !== n && t.appendLine(`[cursor-agent-host] agent store harness probe attempt=${i.attempts + 1} (${n})`);
                    const d = "gate_change" === n ? (0, o.harnessRecoveryStartDelayMs)({
                        fromPhase: i,
                        jitterMs: Ae.startJitterMs
                    }) : 0;
                    if (d > 0) {
                        if (await function(e) {
                            return new Promise((t)=>{
                                le = t, ue = setTimeout(()=>{
                                    ue = void 0, le = void 0, t();
                                }, e);
                            });
                        }(d), qe() || Ye()) return;
                        if (ie !== a) return void queueMicrotask(()=>{
                            void 0 !== pe && ("down" !== oe.kind || "server_disabled" !== oe.reason || Rt(t, {
                                reason: "gate_off"
                            }));
                        });
                        Ae = (0, o.harnessRecoveryConfigFromClient)(await et(t));
                        const e = Date.now(), r = (0, o.settleHarnessTriggerAfterJitter)({
                            trigger: n,
                            phase: oe,
                            now: e,
                            config: Ae
                        }), c = await pt(t);
                        Ct(t, c);
                        const u = (0, o.planHarnessAction)({
                            phase: oe,
                            gateState: c,
                            trigger: r,
                            now: e,
                            config: Ae,
                            previousGateState: s
                        });
                        if (!(0, o.shouldContinueHarnessStartAfterJitter)({
                            action: u,
                            gateState: c,
                            trigger: r,
                            policy: Ae.policy,
                            phase: oe,
                            fromPhase: i
                        })) return void queueMicrotask(()=>{
                            void 0 !== pe && ("stand-down" !== u ? _t(pe, t, r) : Rt(t, {
                                reason: "gate_off"
                            }));
                        });
                    }
                    if (Ye() || ie !== a) return;
                    ie += 1;
                    const c = ie;
                    We(t, {
                        kind: "starting"
                    }, (0, o.harnessStartTransitionReason)(i)), Fe = !0, xe = 0, He += 1;
                    try {
                        const n = Promise.all([
                            Promise.resolve(w.cursor.getAuthId()).catch(()=>{}),
                            Promise.resolve(w.cursor.getActiveTeamId()).catch(()=>{})
                        ]).then(([e, t])=>({
                                authId: e,
                                teamId: t
                            })), s = (0, r.v5)({
                            urlProtocol: w.env.uriScheme
                        });
                        if (await async function({ base: e, tmpDirName: t }) {
                            const n = v.join(e, t);
                            await y.promises.mkdir(n, {
                                recursive: !0,
                                mode: r.qH
                            });
                            try {
                                await y.promises.chmod(n, r.qH);
                            } catch  {}
                        }({
                            base: s.base,
                            tmpDirName: s.tmpDirName
                        }), Qe(c)) return;
                        const a = await async function(e) {
                            return (0, o.createAgentStoreSyncMetrics)({
                                sink: {
                                    increment (e, t, n) {
                                        w.cursor.metricsIncrement({
                                            stat: e,
                                            value: t,
                                            tags: {
                                                ...n
                                            }
                                        });
                                    },
                                    distribution (e, t, n) {
                                        w.cursor.metricsDistribution({
                                            stat: e,
                                            value: t,
                                            tags: {
                                                ...n
                                            }
                                        });
                                    },
                                    gauge (e, t, n) {
                                        w.cursor.metricsGauge({
                                            stat: e,
                                            value: t,
                                            tags: {
                                                ...n
                                            }
                                        });
                                    }
                                },
                                surface: "ide",
                                extraTags: {
                                    os: process.platform
                                },
                                pathHashSalt: await C(e),
                                service: await k(),
                                breadcrumbs: {
                                    addBreadcrumb (e) {
                                        w.tracing.addBreadcrumb({
                                            category: e.category,
                                            level: e.level,
                                            message: e.message,
                                            data: e.data
                                        });
                                    }
                                }
                            });
                        }(e);
                        if (Qe(c)) return;
                        const d = await et(t);
                        if (Qe(c)) return;
                        const u = await n;
                        if (Qe(c)) return;
                        const l = `${process.pid}-${(0, m.randomUUID)()}`, f = new M(s, l, t, ({ mountKey: e, mountKind: n })=>{
                            if (De.delete(e), "principal" !== n) return;
                            const r = Te.deleteMountKeyByValue(e);
                            t.appendLine(`[cursor-agent-host] principal mount invalidated alias=${r ?? "<unknown>"}`), dt(t);
                        }, a, d, (e, n)=>{
                            te === f && Rt(t, {
                                reason: `server_disabled:${e}`,
                                retryAfterMs: n?.retryAfterMs
                            });
                        });
                        if (Qe(c)) return void f.dispose();
                        if (wt = l, ee = s, ge = t, te = f, function() {
                            $t();
                            const e = new o.AgentStoreConversationActivityTracker({
                                idleQuiesceMs: ()=>te?.idleQuiesceMs() ?? 0,
                                setActivity: (e, t)=>{
                                    te?.setConversationActivity(e, t);
                                },
                                quiesceSelfSessions: ()=>{
                                    te?.quiesceIdleSelfSessions();
                                },
                                schedule: (e, t)=>{
                                    const n = setTimeout(e, t);
                                    return {
                                        dispose () {
                                            clearTimeout(n);
                                        }
                                    };
                                }
                            });
                            ne = e, te?.setIdleQuiesceEnabledListener(()=>{
                                const t = !1 !== w.window.state?.focused;
                                t && te?.releaseNewSelfSessionHold(), e.noteWindowFocused(t);
                            }), re = (0, o.setAgentStoreConversationTurnListener)((t, n)=>{
                                e.noteTurn(t, n);
                            }), se = w.window.onDidChangeWindowState((t)=>{
                                t.focused && te?.releaseNewSelfSessionHold(), e.noteWindowFocused(t.focused);
                            }), !1 === w.window.state?.focused && e.noteWindowFocused(!1);
                        }(), t.appendLine(`[cursor-agent-host] Agent store sync ready at ${v.join(s.base, s.tmpDirName)} (source=${s.source}, ephemeral=${s.ephemeralOnLogout}, uriScheme=${w.env.uriScheme})`), (0, o.isNonDefaultAgentStoreSyncClientConfig)(d) && t.appendLine(`[cursor-agent-host] Agent store sync client config (non-default): ${JSON.stringify(d)}`), Qe(c)) return;
                        if (Se = u, ot(u), ae.push(w.cursor.onDidChangeCursorAuthToken((e)=>{
                            const n = function(e) {
                                const t = e?.split(".")[1];
                                if (void 0 !== t) try {
                                    const e = JSON.parse(Buffer.from(t, "base64url").toString("utf8")), n = "object" == typeof e && null !== e ? e.sub : void 0;
                                    return "string" == typeof n && n.length > 0 ? n : void 0;
                                } catch  {
                                    return;
                                }
                            }(e);
                            void 0 === n && void 0 === Se?.authId || st(t, {
                                authId: n,
                                teamId: Se?.teamId ?? w.cursor.getTeamId()
                            });
                        }), w.cursor.onDidChangeActiveTeamId((e)=>{
                            st(t, {
                                authId: Se?.authId,
                                teamId: e
                            });
                        }), w.cursor.onDidChangeGates((e)=>{
                            var n;
                            (void 0 === (n = e.changedGates) || n.includes($) || n.includes(R)) && Me(()=>{
                                ct(t);
                            });
                        })), Qe(c)) return;
                        We(t, {
                            kind: "up"
                        }, "down" === i.kind ? (0, o.harnessStartTransitionReason)(i) : "started"), Me(()=>{
                            "up" === oe.kind && ie === c && (Te.refreshGate(), ct(t), async function(e, t) {
                                const n = be;
                                if (0 === n.length) return void (ie === t && (ke = !0));
                                e.appendLine(`[cursor-agent-host] agent store harness replaying ${n.length} remembered mount(s)`);
                                const r = (0, o.rememberedMountsOldestFirst)(n);
                                let s = !0;
                                for(let e = 0; e < r.length; e++){
                                    const n = r[e];
                                    if (void 0 === n) continue;
                                    if ("up" !== oe.kind || void 0 === te || ie !== t) return;
                                    const i = (0, o.rememberedMountReplay)(n);
                                    if (void 0 === i) continue;
                                    const a = (0, o.harnessRecoveryStartDelayMs)({
                                        fromPhase: (0, o.createDownPhase)({
                                            reason: "gate_off",
                                            since: 0
                                        }),
                                        jitterMs: Ae.startJitterMs
                                    });
                                    if (a > 0 && await new Promise((e)=>setTimeout(e, a)), "up" !== oe.kind || void 0 === te || ie !== t) return;
                                    const d = "self" === i.kind ? await te.ensureMountedSelfAwaited(i.agentId) : "peer" === i.kind ? await te.ensureMountedPeer({
                                        peerAgentId: i.agentId,
                                        ...void 0 !== i.alias ? {
                                            alias: i.alias
                                        } : {},
                                        ...!0 === i.isProjectStore ? {
                                            isProjectStore: !0
                                        } : {}
                                    }) : await te.ensureMountedShare({
                                        shareId: i.shareId,
                                        ...void 0 !== i.alias ? {
                                            alias: i.alias
                                        } : {}
                                    });
                                    if ("mounted" === d.outcome || "already-present" === d.outcome) {
                                        if ("up" !== oe.kind || void 0 === te || ie !== t) return;
                                    } else s = !1;
                                }
                                ie === t && s && (be = [], ke = !0);
                            }(t, c));
                        });
                    } catch (e) {
                        if (t.appendLine(`[cursor-agent-host] Failed to resolve agent store base: ${String(e)}`), "starting" === oe.kind && ie === c) {
                            const e = te;
                            te = void 0, ee = void 0, ge = void 0, Ve(), void 0 !== e && e.dispose(), We(t, (0, o.startFailedHarnessPhase)({
                                previous: i,
                                now: Date.now(),
                                config: Ae
                            }), "start_failed");
                        }
                    }
                }(e, t, n, s);
                ce = i;
                try {
                    await i;
                } finally{
                    ce = void 0;
                }
            }(e, t, n, i);
        case "stand-down":
            return void await Rt(t, {
                reason: "gate_off"
            });
        case "none":
            return (0, o.shouldPromoteDueNoneToProbe)({
                trigger: n,
                phase: oe,
                now: Date.now(),
                config: Ae
            }) ? void queueMicrotask(()=>{
                Xe(t);
            }) : void Ue(t);
    }
}
function $t() {
    te?.setIdleQuiesceEnabledListener(void 0), se?.dispose(), se = void 0, re?.(), re = void 0, ne?.dispose(), ne = void 0;
}
async function Rt(e, t) {
    const n = (0, o.classifyHarnessDownReason)(t.reason), r = "extension_deactivate" !== n;
    if (void 0 !== fe && await fe, r && (0, o.isHarnessLatchedDown)(oe) && void 0 === te && void 0 === ee) {
        const r = (0, o.remintAlreadyDownPhase)({
            phase: oe,
            downReason: n,
            now: Date.now(),
            config: Ae,
            retryAfterMs: t.retryAfterMs,
            previousDownAttempts: ye
        });
        return Oe(), ie += 1, void 0 !== r && (Oe(), ie += 1, We(e, r, t.reason)), void await W(It);
    }
    if (void 0 !== fe) return;
    const s = async function(e, t, n, r) {
        try {
            ie += 1, We(e, {
                kind: "stopping",
                next: n
            }, t), Ve(), Ee = !1, void 0 !== Ne && (clearTimeout(Ne), Ne = void 0), await Ke?.catch(()=>{}), await Be, Ae = (0, o.harnessRecoveryConfigFromClient)(await et(e)), $t();
            const s = te;
            "extension_deactivate" === n || "latch" === Ae.policy ? (be = [], ke = !0) : be = (0, o.snapshotRememberedHarnessMounts)({
                live: s?.listMounts() ?? [],
                pending: be,
                replayComplete: ke,
                max: Ae.rememberedMountsMax
            }), te = void 0, ee = void 0, ge = void 0, Ce.clear(), Ge.clear(), function() {
                for (const e of [
                    ...de.keys()
                ])Tt(e);
            }(), Te.forgetResolution(), Te.clearMountKeys();
            for (const [e, t] of De)"principal" === t.kind && De.delete(e);
            if (e.appendLine(`[cursor-agent-host] Agent store harness stood down (${t})`), void 0 !== s) try {
                await s.dispose();
            } catch (t) {
                e.appendLine(`[cursor-agent-host] controller dispose failed: ${String(t)}`);
            }
            We(e, (0, o.createDownPhase)({
                reason: n,
                since: Date.now(),
                attempts: (0, o.nextDownAttempts)({
                    reason: n,
                    previousDownAttempts: ye
                }),
                retryAfterMs: r,
                config: Ae
            }), t);
        } finally{
            await W(It);
        }
    }(e, t.reason, n, t.retryAfterMs);
    fe = s;
    try {
        await s;
    } finally{
        fe = void 0;
    }
}
function Lt() {
    return {
        ensureFilesDir: (e)=>O(It, e),
        requestMount: (e, t)=>{
            const n = ()=>{
                !0 !== te?.hasSelfMount(e) && !0 !== te?.hasNonSelfMount(e) || Tt(e);
            };
            let r;
            "write_detected" === t ? r = te?.requestDeferredSelfMount(e, t) : "resume" === t ? r = te?.openAdmittedLazySelf(e, t) : (te?.recordMountRequested(e, t), te?.ensureMounted(e)), n(), void 0 !== r && r.then(n, n);
        }
    };
}
function Tt(e) {
    const t = de.get(e);
    if (void 0 !== t) {
        de.delete(e);
        try {
            t.close();
        } catch  {}
    }
}
function Kt(e, t) {
    if (de.has(e) || !0 === te?.hasSelfMount(e) || !0 === te?.hasNonSelfMount(e)) return;
    const n = function(e, t, n = y.watch) {
        try {
            return n(e, {
                recursive: !0
            }, t);
        } catch  {
            try {
                return n(e, t);
            } catch  {
                return;
            }
        }
    }(t, ()=>{
        !function(e, t) {
            Je("touch"), B(Lt(), e, t);
        }(e, "write_detected");
    });
    void 0 !== n && (de.set(e, n), n.on("error", ()=>{
        Tt(e);
    }));
}
function Nt(e, t, n) {
    if (void 0 === te) return Et(e);
    const r = (0, o.admitLocalAgentStore)({
        agentId: e,
        policy: te.mountPolicy(),
        reason: t,
        indexPopulated: te.localStoreIndexIsPopulated(e),
        resumeRequested: n
    });
    if ("mount" === r.action) {
        "resume" !== r.reason && Tt(e);
        const t = function(e, t) {
            return Je("touch"), function(e, t, n) {
                const r = x(e, t);
                if (void 0 !== r) return B(e, t, n), r;
            }(Lt(), e, t);
        }(e, r.reason);
        return "resume" === r.reason && void 0 !== t && !0 !== te.hasSelfMount(e) && !0 !== te.hasNonSelfMount(e) && Kt(e, t), t;
    }
    const s = Et(e);
    return void 0 !== s ? (te?.noteDeferredLocalStore(e, t), Kt(e, s), s) : void 0;
}
function Et(e) {
    return Je("touch"), x(Lt(), e);
}
function Ft(e = ()=>!0, t) {
    return {
        listJournalRefs: ()=>{
            if (!e()) return [];
            const n = "function" == typeof t ? t() : t, r = n?.trim();
            return void 0 === r || 0 === r.length ? [] : te?.listConflictJournalRefs(r) ?? [];
        }
    };
}
function Ht(e = ()=>!0, t) {
    return {
        wakeForWrittenPath: (n)=>{
            e() && te?.wakeForWrittenPath({
                writtenPath: n,
                basePaths: t?.()
            });
        },
        wakeExposedMounts: ()=>{
            e() && te?.wakeAllRunningSessions();
        }
    };
}
function xt(e = ()=>!0, t) {
    return async (n)=>{
        const r = te;
        if (void 0 === r || !e()) return "not_store_path";
        const s = t?.(), o = r.resolveConflictNoticeMountKeyForPath({
            absPath: n,
            basePaths: s
        });
        if (void 0 === o) return "not_store_path";
        const i = await r.forceSyncPathForConflictNotices({
            mountKey: o,
            absPath: n,
            basePaths: s
        });
        return "synced-path" === i ? "synced_path" : i;
    };
}
function Bt() {
    return ()=>te?.writeBarrierTimeoutMs() ?? o.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.writeBarrierTimeoutMs;
}
function Gt() {
    return (e)=>{
        te?.recordWriteBarrier(e);
    };
}
function jt(e = ()=>!0, t) {
    return {
        listMounts: (t)=>e() ? te?.listConflictNoticeMounts(t) ?? [] : [],
        resolveMountKeyForPath: (e)=>te?.resolveConflictNoticeMountKeyForPath({
                absPath: e,
                basePaths: t?.()
            }),
        resolveWrittenPathAbs: (e)=>te?.resolveConflictNoticeWrittenPath({
                absPath: e,
                basePaths: t?.()
            }),
        isMountDirty: (e)=>te?.isConflictNoticeMountDirty(e) ?? !1,
        forceSyncMount: async (e)=>await te?.forceSyncForConflictNotices(e) ?? "absent",
        forceSyncMountPath: async ({ mountKey: e, absPath: n, timeoutMs: r })=>await te?.forceSyncPathForConflictNotices({
                mountKey: e,
                absPath: n,
                basePaths: t?.(),
                timeoutMs: r
            }) ?? "absent"
    };
}
function qt(e) {
    const t = new Map;
    return (n)=>{
        if (!ee) return {};
        const s = n.get(p.zN), o = (0, _.L)(n, s?.conversationId), i = o ?? e.sessionId;
        try {
            (0, r._b)(i);
        } catch  {
            return {};
        }
        let a = t.get(i);
        if (void 0 === a || !St.has(i)) {
            t.delete(i);
            const e = void 0 !== te;
            if (a = Nt(i, "env_provider", !0 === s?.resumeAgentStore), void 0 === a) return {};
            e && t.set(i, a);
        }
        const d = {
            [l.jO]: a
        }, c = void 0 !== o && Ge.has(o);
        return (De.size > 0 || c) && void 0 !== ge && (d[l.eX] = function(e, t) {
            const n = Object.create(null), s = void 0 !== t ? Ge.get(t) : void 0;
            if (void 0 !== s) for (const t of s.values()){
                try {
                    (0, r.rs)(t.filesDir);
                } catch (n) {
                    e.appendLine(`[cursor-agent-host] omitting inherited mount alias ${t.alias} from env: ${I(n)}`);
                    continue;
                }
                n[t.alias] = {
                    path: t.filesDir,
                    readOnly: t.readOnly
                };
            }
            for (const [t, s] of De)if (void 0 === n[s.alias]) {
                try {
                    (0, r.rs)(s.filesDir);
                } catch (n) {
                    e.appendLine(`[cursor-agent-host] omitting mount alias ${s.alias} (${t}) from env: ${I(n)}`);
                    continue;
                }
                n[s.alias] = {
                    path: s.filesDir,
                    readOnly: "share" === s.kind
                };
            }
            return JSON.stringify(n);
        }(ge, o)), d;
    };
}
