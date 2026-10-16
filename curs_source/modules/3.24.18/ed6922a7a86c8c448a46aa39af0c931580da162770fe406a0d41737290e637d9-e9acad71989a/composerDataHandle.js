import { C1v, C_v, D1v, E_v, F3u, FNd, KLn, KNd, L1v, M1v, M_v, N3u, N_v, OLn, P1v, U1v, XNd, YNd, d7i, dXs, j3u, moo, v1v } from "./A3u.js";
import { CMn, EMn, QFu, XFu, _gv, aNu, bgv, cNu, nSt, vgv, xMn } from "./De_3.js";
import { Fo, Se, cn, si, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { R1, pw } from "./adminSettingsService.js";
import { dw, tE } from "./aiServerConfigService.js";
import { ac, bn, kge, wE } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { KYs, YYs } from "./autoSmartModelMigration.js";
import { T2, jj } from "./composerCapabilities.js";
import { hSt, q$t } from "./composerCheckpointStorageService.js";
import { vJe, ySt } from "./composerCodeBlockDiffStorageService.js";
import { Wf } from "./composerData.js";
import { Zke, dJe } from "./composerDataCreation.js";
import { G3u, H3u, gXs } from "./composerDraftRecord.js";
import { jKs } from "./composerHeaderLog.js";
import { O_v, z3u } from "./composerHeaderLogState.js";
import { lb, n0 } from "./composerLogService.js";
import { Km, W4e, gJe } from "./composerMessageStorageService.js";
import { _3u } from "./composerMigrations.js";
import { Vro, jro } from "./composerNotLoadedError.js";
import { A$, GU } from "./experimentRefreshService.js";
import { Kr, qs } from "./experimentService.js";
import { kk, r0 } from "./gitContextService.js";
import { ZW } from "./index_12.ts";
import { A1 } from "./index_5.ts";
import { ULn } from "./jsonStringifyContext.js";
import { Qn, Wn } from "./log.js";
import { Cp, vp } from "./metricsService.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { NNt, Ol, lr, qn, uu, wI } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { HJe, zNd } from "./rendererConversationRootWrite.js";
import { Lk } from "./sentry.js";
import { Vn, _J, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
var goo, foo, R$, lkt, ukt, JNd, e2d, t2d, n2d, i2d, r2d, s2d, voo, o2d, _oo, a2d, boo, yoo, Soo, zWi, YLn, koo, c2d;
export { JNd, R$, Soo, YLn, _oo, a2d, boo, c2d, e2d, foo, goo, i2d, koo, lkt, n2d, o2d, r2d, s2d, t2d, ukt, voo, yoo, zWi };
var __wakaru_HHt_initialized = false;
export function HHt() {
if (__wakaru_HHt_initialized) return;
__wakaru_HHt_initialized = true;
"use strict";
x(), si(), Fo(), Js(), Se(), Vn(), Ha(), jKs(), Wf(), dJe(), G3u(), O_v(), T2(), q$t(), gJe(), ySt(), _3u(), yv(), i0(), R1(), YYs(), qs(), A$(), Za(), jro(), jS(), qn(), bn(), wI(), Lk(), Cp(), tE(), ci(), r0(), Qn(), ULn(), ZW(), A1(), zNd(), n0(), goo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), foo = (e)=>{
    throw TypeError(e);
}, R$ = (e, t)=>(n, i)=>t(n, i, e), lkt = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && foo("Object expected");
        var i, r;
        n && (i = t[goo("asyncDispose")]), i === void 0 && (i = t[goo("dispose")], n && (r = i)), typeof i != "function" && foo("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, ukt = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, JNd = 2, e2d = .01, t2d = "composer_header_log_storage", n2d = 1e6, i2d = new Set([
    "fullConversationHeadersOnly",
    "conversationState"
]), r2d = 3e4, s2d = 3, voo = 6e4, o2d = 1e3, _oo = 6e4, a2d = 1e3, boo = "ofsContent", yoo = !1, Soo = new Set, zWi = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f){
        this.onDidPersistComposer = e, this.markRootDirty = t, this.storageService = n, this.composerCheckpointStorageService = i, this.composerMessageStorageService = r, this.composerCodeBlockDiffStorageService = s, this.modelConfigService = o, this.adminSettingsService = a, this.experimentService = c, this.reactiveStorageService = l, this.metricsService = u, this.aiServerConfigService = h, this.workspaceContextService = p, this.gitContextService = g, this._composerLogService = f, this._durableOfsContent = new WeakMap, this._durableHeaderLog = new WeakMap, this._needsRootRewrite = new WeakSet, this._headerLogGateExposed = !1, this._drafts = new gXs(n, H3u);
    }
    registerSaveHook(e) {
        return this.storageService.cursorDiskKVOnShouldSave(e);
    }
    _applyDraft(e, t) {
        t !== void 0 && (e.text = t.text, e.richText = t.richText ?? e.richText);
    }
    _headerLogLayout(e) {
        const t = this.experimentService.checkFeatureGate(t2d, {
            disableExposureLog: e === "read" || this._headerLogGateExposed
        });
        return e === "persist" && (this._headerLogGateExposed = !0), t ? "chunked" : "inline";
    }
    async readComposerRoot(e, t, n = 2) {
        const i = this.getComposerDataStorageKey(e), r = await this.storageService.cursorDiskKVGet(i, t);
        if (!r) return;
        const s = JSON.parse(r);
        if (aNu(s)) {
            const c = s.headerLog, l = await vgv(this.storageService, e, c);
            return s.fullConversationHeadersOnly = l.headers, Reflect.deleteProperty(s, "headerLog"), l.damage.length > 0 ? n > 0 && await this.storageService.cursorDiskKVGet(i, t) !== r ? this.readComposerRoot(e, t, n - 1) : (Zke("composer header log damaged", {
                level: "warning",
                tags: {
                    client_error_type: "composer_header_log_damage",
                    damage: l.damage.join(",")
                },
                extra: {
                    expected: c.count,
                    found: l.headers.length,
                    missingChunkIndexes: l.missingChunkIndexes
                }
            }), {
                parsed: s,
                durable: {
                    kind: "inline"
                },
                needsRootRewrite: !1
            }) : {
                parsed: s,
                durable: {
                    kind: "chunked",
                    chunkCount: c.chunkCount,
                    bytesByChunk: l.bytesByChunk,
                    aligned: l.aligned,
                    generation: c.generation
                },
                needsRootRewrite: !1
            };
        }
        if (this._headerLogLayout("read") === "inline") return {
            parsed: s,
            durable: {
                kind: "inline"
            },
            needsRootRewrite: !1
        };
        const o = await this.storageService.cursorDiskKVGetPrefixKeys(xMn(e));
        if (o.length === 0) return {
            parsed: s,
            durable: {
                kind: "inline",
                leftoverKeys: o
            },
            needsRootRewrite: !1
        };
        const a = await this.storageService.cursorDiskKVGetBatch(o);
        return s.fullConversationHeadersOnly = bgv({
            chunked: _gv(a),
            inline: s.fullConversationHeadersOnly ?? []
        }), {
            parsed: s,
            durable: {
                kind: "inline",
                leftoverKeys: o
            },
            needsRootRewrite: !0
        };
    }
    needsRootRewrite(e) {
        return this._needsRootRewrite.has(e);
    }
    adoptHeaderLogState(e, t) {
        this._durableHeaderLog.set(t, this._durableHeaderLog.get(e)), this._durableHeaderLog.delete(e), this._needsRootRewrite.delete(e) ? this._needsRootRewrite.add(t) : this._needsRootRewrite.delete(t);
    }
    async load(e, t) {
        const [n, i] = await Promise.all([
            this.readComposerRoot(e, t),
            this._drafts.read(e)
        ]);
        if (t(`[composer] getHandle: ${e} value=${n ? "exists" : "undefined"}`), !n) return;
        const r = await XNd(n.parsed.conversationState);
        r !== void 0 && HJe.seedPersistedRoot(e, r);
        const s = await C_v(n.parsed, {
            composerCheckpointStorageService: this.composerCheckpointStorageService,
            composerMessageStorageService: this.composerMessageStorageService,
            composerCodeBlockDiffStorageService: this.composerCodeBlockDiffStorageService,
            ...this._modelConfigMigrationInputs(),
            storageService: this.storageService,
            workspaceContextService: this.workspaceContextService,
            gitContextService: this.gitContextService,
            composerLogService: this._composerLogService
        });
        return t(`[composer] getHandle: ${e} deserialized`), s.text && (i === void 0 && await this._drafts.write(e, s).catch(()=>{}), this.markRootDirty(e)), this._applyDraft(s, i), s.hasLoaded = !1, this._durableHeaderLog.set(s, n.durable), n.needsRootRewrite && this._needsRootRewrite.add(s), s;
    }
    async loadForPeek(e) {
        const [t, n] = await Promise.all([
            this.readComposerRoot(e),
            this._drafts.read(e)
        ]);
        if (!t) return;
        const i = E_v(t.parsed);
        if (i) return i.modelConfig && (i.modelConfig = QFu({
            modelConfig: i.modelConfig,
            ...this._modelConfigMigrationInputs()
        })), this._applyDraft(i, n), i.hasLoaded = !1, i;
    }
    _modelConfigMigrationInputs() {
        return {
            modelConfigService: this.modelConfigService,
            availableModelIds: XFu(this.modelConfigService.getAvailableDefaultModels(), this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? []),
            isModelBlocked: (e)=>this.adminSettingsService.isModelBlocked(e),
            isAutoSmartCostMigrationEnabled: ()=>this.experimentService.checkFeatureGate(KYs, {
                    disableExposureLog: !1
                })
        };
    }
    async loadOfsContent(e, t) {
        return M1v(this.storageService, e, t);
    }
    _reportRootFieldBytes(e, t, n) {
        const i = e.keyBytes.get("fullConversationHeadersOnly") ?? 0, r = t.kind === "chunked" ? t.bytesByChunk.reduce((u, h)=>u + (h ?? 0), 0) : i, s = e.keyBytes.get("conversationState") ?? 0, o = e.json.length - i - s, a = [
            [
                "conversation_state",
                s
            ],
            [
                "headers",
                r
            ],
            [
                "other",
                o
            ]
        ];
        for (const [u, h] of a)this.metricsService.distribution({
            stat: "renderer.composer.persist.root_field_bytes",
            value: h,
            tags: {
                ...n,
                field: u
            }
        });
        if (o < n2d) return;
        const c = YNd(e.keyBytes, i2d);
        if (!c) return;
        const l = c.key === "context" && e.nestedKeyBytes ? YNd(e.nestedKeyBytes) : void 0;
        this.metricsService.distribution({
            stat: "renderer.composer.persist.root_top_field_bytes",
            value: c.bytes,
            tags: {
                ...n,
                top_field: c.key,
                ...l ? {
                    top_context_field: l.key
                } : {}
            }
        });
    }
    async _resolveDurableHeaderLog(e, t) {
        const n = this._durableHeaderLog.get(e);
        return n?.kind === "chunked" && t === "chunked" ? n : n?.kind === "chunked" ? {
            kind: "inline",
            leftoverKeys: await this.storageService.cursorDiskKVGetPrefixKeys(xMn(e.composerId))
        } : n?.leftoverKeys !== void 0 ? {
            kind: "inline",
            leftoverKeys: n.leftoverKeys
        } : t === "inline" ? {
            kind: "inline",
            leftoverKeys: []
        } : {
            kind: "inline",
            leftoverKeys: await this.storageService.cursorDiskKVGetPrefixKeys(xMn(e.composerId))
        };
    }
    async persistLoadedComposer(e, t, n, i) {
        var r = [];
        try {
            const b = this._headerLogLayout("persist"), y = {
                "metrics.version": JNd.toString(),
                trigger: i?.trigger ?? "unspecified",
                layout: b
            }, T = i?.rootUnchanged !== !0 || i.draftChanged === !0 && !e.text, E = [], A = new Map;
            let R = this._durableOfsContent.get(e);
            for (const [q, z] of Object.entries(e.originalFileStates ?? {}))z?.content !== void 0 && (A.set(q, moo(e.composerId, q)), R?.get(q) !== z.content && E.push({
                uriStr: q,
                content: z.content
            }));
            if (R) for (const q of R.keys())A.has(q) || R.delete(q);
            if (T && E.length > 0) {
                var s = [];
                try {
                    const q = lkt(s, KLn(n, "ofsWrite"));
                    q.setAttribute("ofsEntryCount", E.length);
                    const z = performance.now();
                    await D1v(this.storageService, e.composerId, E).then(()=>{
                        R || (R = new Map, this._durableOfsContent.set(e, R));
                        for (const { uriStr: Y, content: Z } of E)R.set(Y, Z);
                    }, (Y)=>{
                        q.setError(Y instanceof Error ? Y : String(Y)), Km(Y, {
                            tags: {
                                client_error_type: "persistLoadedComposer_ofsContent"
                            }
                        });
                    });
                    const X = performance.now() - z;
                    q.end(), this.metricsService.distribution({
                        stat: "renderer.composer.persist.ofs_write_ms",
                        value: X,
                        tags: y
                    });
                } catch (q) {
                    var o = q, a = !0;
                } finally{
                    ukt(s, o, a);
                }
            }
            let D, P, N;
            if (T) {
                var c = [];
                try {
                    const q = await this._resolveDurableHeaderLog(e, b), z = lkt(c, KLn(n, "serialize")), X = performance.now(), Y = i?.headerDirty?.freeze() ?? "all", Z = N_v({
                        composerId: e.composerId,
                        headers: e.fullConversationHeadersOnly,
                        keep: F3u(e),
                        dirty: Y,
                        durable: q,
                        layout: b,
                        generation: zn()
                    }), K = Math.random() < e2d, J = OLn({
                        source: "persist",
                        messageCount: e.fullConversationHeadersOnly.length
                    }, ()=>{
                        const ue = dXs({
                            ...e,
                            queueItems: void 0,
                            text: "",
                            richText: ""
                        }, A.size > 0 ? A : void 0, Z.rootField), ce = K ? KNd(ue, "context") : void 0;
                        return {
                            toSave: ue,
                            measured: ce,
                            json: ce?.json ?? JSON.stringify(ue)
                        };
                    }), ne = J.json;
                    D = {
                        rootWithoutQueue: ne,
                        plan: Z,
                        headerDirty: Y
                    }, P = HJe.snapshot(e.composerId), N = XNd(J.toSave.conversationState);
                    const ee = performance.now() - X, se = ne.length + Z.chunkBytesWritten;
                    z.setAttribute("serializedBytes", se), z.setAttribute("messageCount", e.fullConversationHeadersOnly.length), z.setAttribute("headerChunksWritten", Z.writes.length), z.end();
                    const re = [
                        [
                            "serialize_ms",
                            ee
                        ],
                        [
                            "serialize_bytes",
                            se
                        ],
                        [
                            "root_bytes",
                            ne.length
                        ],
                        [
                            "header_chunks_written",
                            Z.writes.length
                        ],
                        [
                            "header_chunk_bytes",
                            Z.chunkBytesWritten
                        ]
                    ];
                    for (const [ue, ce] of re)this.metricsService.distribution({
                        stat: `renderer.composer.persist.${ue}`,
                        value: ce,
                        tags: y
                    });
                    J.measured && this._reportRootFieldBytes(J.measured, Z.nextDurable, y);
                } catch (q) {
                    var l = q, u = !0;
                } finally{
                    ukt(c, l, u);
                }
            }
            let O;
            if (e.createdFromBackgroundAgent?.shouldStreamMessages) {
                const q = e.agentSessionId !== void 0 ? e.createdFromBackgroundAgent?.kickoffMessageId : void 0, z = q !== void 0 ? e.fullConversationHeadersOnly.findIndex((X)=>X.bubbleId === q || X.serverBubbleId === q) : -1;
                O = e.fullConversationHeadersOnly.filter((X, Y)=>{
                    const Z = z !== -1 && Y <= z, K = X.serverBubbleId !== void 0 && X.serverBubbleId.length > 0, J = q === void 0 && CMn(X);
                    return Z || K || J;
                }).map((X)=>e.conversationMap[X.bubbleId]).filter((X)=>X !== void 0);
            } else O = Object.values(e.conversationMap);
            O = O.filter((q)=>q != null && !nSt(q)), t !== void 0 && (O = O.filter((q)=>t.has(q.bubbleId)));
            const F = lkt(r, KLn(n, "messageLoop"));
            F.setAttribute("persistedMessageCount", O.length), F.setAttribute("dirtyScoped", t !== void 0);
            const H = performance.now(), $ = 5;
            for(let q = 0; q < O.length; q += $){
                const z = O.slice(q, q + $);
                await Promise.all(z.map((X)=>this.composerMessageStorageService.storeMessage(e.composerId, X, void 0, {
                        suppressPersistEvent: !0
                    }).catch((Y)=>{
                        throw F.setError(Y instanceof Error ? Y : String(Y)), Km(Y, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        }), Y;
                    }))), await new Promise((X)=>setTimeout(X, 0));
            }
            const W = performance.now() - H;
            F.end(), this.metricsService.distribution({
                stat: "renderer.composer.persist.message_loop_ms",
                value: W,
                tags: y
            }), await this._drafts.write(e.composerId, e);
            let G = !0;
            if (D !== void 0) {
                var h = [];
                try {
                    const { plan: q, headerDirty: z } = D, X = lkt(h, KLn(n, "kvSet")), Y = performance.now();
                    let Z = !1, K;
                    const J = this.getComposerDataStorageKey(e.composerId), ne = [
                        [
                            J,
                            U1v(D.rootWithoutQueue, e.queueItems)
                        ],
                        ...q.writes,
                        ...q.deletes
                    ], ee = q.expectedGeneration === void 0 ? void 0 : cNu({
                        rootKey: J,
                        generation: q.expectedGeneration
                    });
                    let se = !1;
                    G = await this.storageService.cursorDiskKVSetBatch(ne, ee).then((ue)=>ue ? (this._durableHeaderLog.set(e, q.nextDurable), i?.headerDirty?.commit(z), !0) : (se = ee !== void 0, !1), (ue)=>(X.setError(ue instanceof Error ? ue : String(ue)), Km(ue, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        }), Z = !0, K = ue, !1));
                    const re = performance.now() - Y;
                    if (X.end(), this.metricsService.distribution({
                        stat: "renderer.composer.persist.kv_set_ms",
                        value: re,
                        tags: y
                    }), se) return this.metricsService.increment({
                        stat: "renderer.composer.persist.header_log_conflict",
                        tags: y
                    }), this._durableHeaderLog.set(e, {
                        kind: "inline"
                    }), this.persistLoadedComposer(e, t, n, i);
                    if (Z && i?.throwOnRootFailure) throw K;
                } catch (q) {
                    var p = q, g = !0;
                } finally{
                    ukt(h, p, g);
                }
            }
            if (G && P !== void 0 && N !== void 0) {
                const q = await N.catch(()=>{});
                if (q !== void 0) {
                    const z = HJe.createDiagnostic(P, q, Date.now()), X = v1v(z);
                    await C1v({
                        serializedDiagnostic: X,
                        persist: async (Y)=>await this.storageService.cursorDiskKVSet(FNd(e.composerId), Y),
                        acknowledge: ()=>HJe.acknowledgePersisted(e.composerId, P, q)
                    });
                }
            }
            G && this.onDidPersistComposer?.(e.composerId);
        } catch (b) {
            var f = b, v = !0;
        } finally{
            ukt(r, f, v);
        }
    }
    async deleteComposer(e) {
        await Promise.all([
            this.storageService.cursorDiskKVSet(this.getComposerDataStorageKey(e), void 0),
            this._drafts.delete(e),
            P1v(this.storageService, e),
            this.storageService.cursorDiskKVClearPrefix(xMn(e))
        ]), await this.storageService.cursorDiskKVSet(FNd(e), void 0).catch(()=>{}), HJe.forget(e);
    }
    getComposerDataStorageKey(e) {
        return N3u(e);
    }
}, zWi = ie([
    R$(2, yn),
    R$(3, hSt),
    R$(4, W4e),
    R$(5, vJe),
    R$(6, QS),
    R$(7, pw),
    R$(8, Kr),
    R$(9, Do),
    R$(10, vp),
    R$(11, dw),
    R$(12, Jn),
    R$(13, kk),
    R$(14, lb)
], zWi), YLn = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.backend = e, this.composerWasLoadedHook = t, this.composerWasUnloadedHook = n, this.loadedComposers = i, this.logService = r, this.composerLogService = s, this.experimentService = o, this.experimentRefreshService = a, this.authenticationService = c, this.refById = new Map, this._handleFinalizationRegistry = new FinalizationRegistry((u)=>this._onHandleCollected(u)), this._pendingCollectedFinalizations = new Set, this._runFinalizationDrainWhenIdle = this._register(new cn), this._gcSweepTimer = this._register(new wE), this._isManagerDisposed = !1, this.finalizingComposers = new Set, this.dirtyComposers = new Set, this._rootDirtyComposers = new Set, this._draftDirtyComposers = new Set, this._dirtyMessages = new Map, this._persistingMessages = new Map, this._headerDirty = new Map, this.dirtyPersistScheduler = this._register(new ac(()=>this.doDirtyPersistWhenIdle(), r2d)), this.runDirtyPersistWhenIdle = this._register(new cn), this._persistTailByComposerId = new Map, this._lruCache = new Map, this._loadedAtByComposerId = new Map, this._gcSafetyNetExperimentRequested = !1, this._register(this.experimentRefreshService.onDidRefreshStatsigIdentity(()=>{
            this._gcSafetyNetExperimentRequested && this._hasTrackedHandleRefs() && this._startGcSafetyNetExperimentResolution();
        }));
        const l = this.backend.registerSaveHook?.(async (u)=>{
            if (u !== _J.SHUTDOWN) return;
            const h = uu(this.loadedComposers.byId);
            await Promise.allSettled([
                ...Object.values(h).map((p)=>{
                    const g = this._dirtyMessages.get(p.composerId) ?? new Set;
                    return this.persistLoadedComposer(p, g, void 0, {
                        trigger: "shutdown"
                    }).catch((f)=>{
                        Km(f, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        });
                    });
                })
            ]), this.dirtyComposers.clear(), this._rootDirtyComposers.clear(), this._draftDirtyComposers.clear(), this._dirtyMessages.clear(), this._persistingMessages.clear();
        });
        l && this._register(l), this.dirtyPersistScheduler.schedule();
    }
    dispose() {
        this._isManagerDisposed = !0, this.dirtyPersistScheduler.dispose(), this.runDirtyPersistWhenIdle.dispose();
        try {
            for (const e of Object.values(uu(this.loadedComposers.byId)))d7i({
                capabilities: (e.capabilities ?? []).filter((t)=>t instanceof jj)
            });
        } finally{
            super.dispose();
        }
    }
    doDirtyPersistWhenIdle() {
        this.runDirtyPersistWhenIdle.value = kge(()=>{
            this.persistDirtyComposers(), this.dirtyPersistScheduler.schedule();
        });
    }
    markDirty(e) {
        this.dirtyComposers.add(e), this._rootDirtyComposers.add(e);
    }
    markDraftDirty(e) {
        this.dirtyComposers.add(e), this._draftDirtyComposers.add(e);
    }
    markMessageDirty(e, t) {
        this.dirtyComposers.add(e);
        let n = this._dirtyMessages.get(e);
        n || (n = new Set, this._dirtyMessages.set(e, n)), n.add(t);
    }
    recordHeaderWrite(e, t) {
        this._headerDirty.get(e)?.record(t);
    }
    updateWithoutMarkingDirty(e, ...t) {
        const n = this.loadedComposers.getUntrackedSnapshot(e);
        this.loadedComposers.update(e, ...t);
        const i = n && j3u(t, n);
        i !== void 0 && i !== "all" && this.recordHeaderWrite(e, i);
    }
    isMessageDirty(e, t) {
        const n = t;
        return (this._dirtyMessages.get(e)?.has(n) ?? !1) || (this._persistingMessages.get(e)?.has(n) ?? !1);
    }
    getTrackedDirtyMessageIds(e) {
        return new Set([
            ...this._dirtyMessages.get(e) ?? [],
            ...this._persistingMessages.get(e) ?? []
        ]);
    }
    async loadOfsContent(e, t) {
        const n = lr(()=>this.loadedComposers.byId[e]);
        if (!n) return;
        const i = n.originalFileStates[t];
        if (!i) return;
        if (i.content !== void 0) return i.content;
        if (!i.contentKey) return;
        const r = await this.backend.loadOfsContent(e, t), s = r ?? "";
        return r === void 0 && this.logService.warn(`[composer] Missing ofsContent for ${i.contentKey} in ${e.slice(0, 8)}`), this.loadedComposers.update(e, "originalFileStates", t, "content", s), s;
    }
    async persistDirtyComposers() {
        if (this.dirtyComposers.size === 0) return;
        const e = [
            ...this.dirtyComposers
        ];
        this.dirtyComposers.clear();
        const t = new Map, n = new Map, i = new Map;
        for (const s of e){
            const o = this._dirtyMessages.get(s), a = o ? new Set(o) : new Set;
            this._persistingMessages.set(s, a), this._dirtyMessages.delete(s), t.set(s, a), n.set(s, this._rootDirtyComposers.delete(s)), i.set(s, this._draftDirtyComposers.delete(s));
        }
        const r = uu(this.loadedComposers.byId);
        await Promise.allSettled(e.map(async (s)=>{
            const o = r[s];
            if (!o) {
                this._persistingMessages.delete(s);
                return;
            }
            const a = t.get(s), c = i.get(s) ?? !1, l = n.get(s) ?? !0;
            try {
                await this.persistLoadedComposer(o, a, void 0, l ? {
                    trigger: "dirty_tick"
                } : {
                    trigger: "dirty_tick",
                    rootUnchanged: !0,
                    draftChanged: c
                }), this._persistingMessages.delete(s);
            } catch (u) {
                this._persistingMessages.delete(s);
                const h = t.get(s);
                if (uu(this.loadedComposers.byId)[s] !== void 0 && h && h.size > 0) {
                    const g = this._dirtyMessages.get(s);
                    if (g) for (const f of h)g.add(f);
                    else this._dirtyMessages.set(s, new Set(h));
                }
                this.dirtyComposers.add(s), l && this._rootDirtyComposers.add(s), c && this._draftDirtyComposers.add(s), Km(u, {
                    tags: {
                        client_error_type: "persistDirtyComposer"
                    }
                });
            }
        }));
    }
    runGarbageCollection() {
        this._evictExpiredLruEntries();
        for (const [e, t] of this.refById)t.type === "REF" && !t.ref.deref() && this._finalizeCollectedHandle(e);
    }
    _evictExpiredLruEntries() {
        const e = Date.now();
        for (const [t, n] of this._lruCache)e - n.touchedAt > voo && this._lruCache.delete(t);
    }
    getGcSafetyNetSweepMs() {
        return this._gcSafetyNetSweepMs !== void 0 ? this._gcSafetyNetSweepMs : (this._gcSafetyNetExperimentRequested = !0, this._startGcSafetyNetExperimentResolution(), _oo);
    }
    _startGcSafetyNetExperimentResolution() {
        this._isManagerDisposed || this._gcSafetyNetSweepMs !== void 0 || this._gcSafetyNetResolve !== void 0 || (this._gcSafetyNetResolve = this._resolveGcSafetyNetExperiment());
    }
    async _resolveGcSafetyNetExperiment() {
        try {
            await this.experimentRefreshService.whenStartupRefreshComplete(), await this.experimentRefreshService.whenAuthChangeRefreshComplete();
        } catch  {}
        if (this._isManagerDisposed) return;
        const e = this.authenticationService.getCurrentAuthId();
        if (e === void 0 || !this.experimentRefreshService.isInitializedForIdentity(e)) {
            this._gcSafetyNetResolve = void 0;
            return;
        }
        const t = this.experimentService.getExperimentParam("composer_gc_safety_net_1s", "enabled", {
            disableExposureLog: !1
        }) === !0;
        this._gcSafetyNetSweepMs = t ? a2d : _oo, this._armGcSweepTimer();
    }
    _armGcSweepTimer() {
        if (this._isManagerDisposed) return;
        const e = Date.now();
        let t;
        if (this._lruCache.size > 0) {
            let n = 1 / 0;
            for (const i of this._lruCache.values())n = Math.min(n, i.touchedAt + voo);
            t = Math.max(e + o2d, n);
        } else if (this._hasTrackedHandleRefs()) t = e + this.getGcSafetyNetSweepMs();
        else {
            this._gcSweepDeadlineMs = void 0, this._gcSweepTimer.cancel();
            return;
        }
        this._gcSweepDeadlineMs !== void 0 && this._gcSweepDeadlineMs <= t || (this._gcSweepDeadlineMs = t, this._gcSweepTimer.cancelAndSet(()=>{
            this._gcSweepDeadlineMs = void 0, this.runGarbageCollection(), this._armGcSweepTimer();
        }, t - e));
    }
    _hasTrackedHandleRefs() {
        for (const e of this.refById.values())if (e.type === "REF") return !0;
        return !1;
    }
    _onHandleCollected(e) {
        this._isManagerDisposed || (this._pendingCollectedFinalizations.add(e), this._armFinalizationDrain());
    }
    _armFinalizationDrain() {
        this._isManagerDisposed || this._runFinalizationDrainWhenIdle.value !== void 0 || this._pendingCollectedFinalizations.size === 0 || (this._runFinalizationDrainWhenIdle.value = kge((e)=>{
            this._runFinalizationDrainWhenIdle.clear(), this._drainPendingFinalizations(()=>e.timeRemaining() > 0);
        }));
    }
    _drainPendingFinalizations(e) {
        for (const t of this._pendingCollectedFinalizations)if (this._pendingCollectedFinalizations.delete(t), this._finalizeCollectedHandle(t), !e()) break;
        this._armFinalizationDrain();
    }
    _finalizeCollectedHandle(e) {
        const t = this.refById.get(e);
        t?.type === "REF" && !t.ref.deref() && this.startFinalization(e, t.deleteOnUnload).finally(()=>{
            this.refById.get(e)?.type === "FINALIZING" && this.refById.delete(e), this._armGcSweepTimer();
        });
    }
    startFinalization(e, t) {
        const n = this.finalizeComposer(e, t);
        return this.refById.set(e, {
            type: "FINALIZING",
            promise: n
        }), n;
    }
    async finalizeComposer(e, t) {
        if (this.finalizingComposers.has(e)) {
            const i = new Error(`[composer] Invariant violation: double finalization for composer: ${e}`);
            this.composerLogService.error(i.message), Km(i, {
                tags: {
                    client_error_type: "composer_invariant_violation",
                    force_upload: "forced"
                }
            });
            return;
        }
        const n = uu(this.loadedComposers.byId)[e];
        if (n) {
            this.finalizingComposers.add(e);
            try {
                d7i(n), this.composerWasUnloadedHook(e);
                const i = new Set(this._dirtyMessages.get(e)), r = this._persistingMessages.get(e);
                if (r) for (const o of r)i.add(o);
                this.loadedComposers.delete(e), this._loadedAtByComposerId.delete(e), this._dirtyMessages.delete(e), this._persistingMessages.delete(e), this._headerDirty.delete(e);
                const s = this.refById.get(e);
                s?.type === "REF" && s.ref.deref()?.clearCachedData(), t ? await this.deletePersistedComposer(e) : EMn(n) || await this.persistLoadedComposer(n, i, void 0, {
                    trigger: "finalize"
                });
            } finally{
                this.finalizingComposers.delete(e);
            }
        }
    }
    async persistLoadedComposer(e, t, n, i) {
        const r = e.composerId, s = e, o = this._persistTailByComposerId.get(r) ?? Promise.resolve(), c = (async ()=>{
            {
                var u = [];
                try {
                    const v = lkt(u, KLn(n, "queueWait"));
                    await o.catch(()=>{});
                } catch (v) {
                    var h = v, p = !0;
                } finally{
                    ukt(u, h, p);
                }
            }
            const g = uu(this.loadedComposers.byId)[r] ?? s, f = i?.trigger === "finalize" || i?.trigger === "shutdown";
            await this.backend.persistLoadedComposer(g, t, n, {
                ...i,
                headerDirty: f ? void 0 : this._headerDirty.get(r)
            });
        })(), l = c.catch(()=>{});
        this._persistTailByComposerId.set(r, l);
        try {
            await c;
        } finally{
            this._persistTailByComposerId.get(r) === l && this._persistTailByComposerId.delete(r);
        }
    }
    async deletePersistedComposer(e) {
        const n = (this._persistTailByComposerId.get(e) ?? Promise.resolve()).catch(()=>{}).then(()=>this.backend.deleteComposer(e)), i = n.catch(()=>{});
        this._persistTailByComposerId.set(e, i);
        try {
            await n;
        } finally{
            this._persistTailByComposerId.get(e) === i && this._persistTailByComposerId.delete(e);
        }
    }
    async restoreLoadedComposerFromDisk(e) {
        const t = await this.backend.load(e, ()=>{});
        if (!t) return;
        const n = this.loadedComposers.getUntrackedSnapshot(e);
        if (!n) return;
        const i = t.conversationCheckpointLastUpdatedAt ?? 0, r = n.conversationCheckpointLastUpdatedAt ?? 0;
        if (i <= r) return;
        const s = {
            ...t
        };
        delete s.capabilities, delete s.hasLoaded, this.loadedComposers.update(e, s), this.backend.adoptHeaderLogState?.(t, n), this.backend.needsRootRewrite?.(n) && this.markDirty(e);
    }
    getHandleIfLoaded(e) {
        const t = this.refById.get(e);
        if (t?.type === "REF") {
            const n = t.ref.deref();
            if (n) return n;
        }
    }
    async peekComposerData(e) {
        for(;;){
            const t = this.refById.get(e);
            if (t?.type === "LOADING") {
                const i = await t.promise;
                if (this.refById.get(e) !== t) continue;
                if (i) return {
                    source: "memory",
                    handle: i
                };
            }
            if (t?.type === "REF") {
                const i = t.ref.deref();
                if (i) return {
                    source: "memory",
                    handle: i
                };
                this._finalizeCollectedHandle(e);
                continue;
            }
            if (t?.type === "FINALIZING" && (await t.promise, this.refById.get(e) !== t)) continue;
            const n = await this._loadComposerDataForPeek(e);
            if (this.refById.get(e) === t) return n;
        }
    }
    async _loadComposerDataForPeek(e) {
        try {
            const t = await this.backend.loadForPeek?.(e);
            return t ? {
                source: "storage",
                data: t
            } : void 0;
        } catch (t) {
            this.logService.error("[composer] Error peeking composer data:", t);
            return;
        }
    }
    getComposerDataIfLoaded(e) {
        return lr(()=>this.loadedComposers.byId[e]);
    }
    getHandleLifecycle(e) {
        const t = this._loadedAtByComposerId.get(e), n = this.refById.get(e);
        return n === void 0 ? {
            state: "untracked",
            loadedAtMs: t
        } : n.type === "LOADING" ? {
            state: "loading",
            loadedAtMs: t
        } : n.type === "FINALIZING" ? {
            state: "finalizing",
            loadedAtMs: t
        } : {
            state: n.ref.deref() ? "live" : "collected-pending-finalization",
            loadedAtMs: t
        };
    }
    pushComposer(e) {
        const t = this.getHandleIfLoaded(e.composerId);
        if (t) return t;
        if (!this.refById.has(e.composerId)) return this.registerComposer(e);
    }
    createHandle(e) {
        return new koo(e, this);
    }
    createWeakRef(e) {
        return new WeakRef(e);
    }
    registerComposer(e) {
        const t = this.createHandle(e.composerId);
        return this.refById.set(e.composerId, {
            type: "REF",
            ref: this.createWeakRef(t),
            deleteOnUnload: !1
        }), this._handleFinalizationRegistry.register(t, e.composerId), this._loadedAtByComposerId.set(e.composerId, Date.now()), this._headerDirty.set(e.composerId, new z3u), this.loadedComposers.add(e), this._armGcSweepTimer(), this.composerWasLoadedHook(t.data), t;
    }
    async deleteComposer(e) {
        this._lruCache.delete(e), this._loadedAtByComposerId.delete(e), this._dirtyMessages.delete(e), this._persistingMessages.delete(e), this._headerDirty.delete(e);
        const t = this.refById.get(e);
        t?.type === "REF" ? (await this.startFinalization(e, !0), this.refById.delete(e)) : t?.type === "LOADING" ? t.deleteOnUnload = !0 : t?.type === "FINALIZING" ? (await t.promise, await this.deletePersistedComposer(e)) : await this.deletePersistedComposer(e), this._armGcSweepTimer();
    }
    async unloadComposer(e) {
        this.refById.get(e)?.type === "REF" && (this._lruCache.delete(e), await this.startFinalization(e, !1), this.refById.get(e)?.type === "FINALIZING" && this.refById.delete(e), this._armGcSweepTimer());
    }
    _touchLruCache(e, t) {
        for(this._lruCache.delete(e), this._lruCache.set(e, {
            handle: t,
            touchedAt: Date.now()
        }); this._lruCache.size > s2d;){
            const n = this._lruCache.keys().next().value;
            this._lruCache.delete(n);
        }
        this._armGcSweepTimer();
    }
    async getHandle(e, t, n) {
        var i = [];
        try {
            const o = lkt(i, NNt({
                parentSpanContext: n,
                name: "ComposerDataHandleStorageBackend.getHandle"
            })), a = await this._resolveHandle(e, t ?? (()=>{}));
            return a && this._touchLruCache(e, a), a;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            ukt(i, r, s);
        }
    }
    async _resolveHandle(e, t) {
        const n = this.refById.get(e);
        if (n?.type === "LOADING") return n.promise;
        if (n?.type === "FINALIZING") await n.promise;
        else if (n?.type === "REF") {
            const s = n.ref.deref();
            if (s) return s;
            await this.startFinalization(e, n.deleteOnUnload);
        }
        const i = this.refById.get(e);
        if (i?.type === "LOADING") return i.promise;
        if (i?.type === "REF") {
            const s = i.ref.deref();
            if (s) return s;
        }
        const r = this.loadFromStorage(e, t);
        return this.refById.set(e, {
            type: "LOADING",
            promise: r
        }), r;
    }
    async loadFromStorage(e, t) {
        const n = !yoo;
        n && (yoo = !0, Ol("code/willLoadComposerFromStorage"));
        try {
            const i = await this.backend.load(e, t).catch((s)=>{
                t(`[composer] getHandle: ${e} error=${s.stack}`);
            }), r = this.refById.get(e);
            if (r?.type === "LOADING" && r.deleteOnUnload) {
                t(`[composer] getHandle: ${e} delete requested during load`), await this.deletePersistedComposer(e), this.refById.delete(e);
                return;
            }
            if (i) {
                const s = this.registerComposer(i);
                return this.backend.needsRootRewrite?.(i) && this.markDirty(e), s;
            }
            this.refById.delete(e);
            return;
        } catch (i) {
            t(`[composer] getHandle: ${e} error=${i.stack}`), this.refById.delete(e), this.composerLogService.error("[composer] Error loading composer data:", i);
            return;
        } finally{
            n && Ol("code/didLoadComposerFromStorage");
        }
    }
}, YLn = ie([
    R$(4, Wn),
    R$(5, lb),
    R$(6, Kr),
    R$(7, GU),
    R$(8, na)
], YLn), koo = class {
    constructor(e, t){
        this.composerId = e, this.manager = t, this.__GC_COMPOSER_DATA_HANDLE__ = !0, this.setData = (...n)=>{
            const i = this.manager.loadedComposers.getUntrackedSnapshot(this.composerId);
            if (i === void 0) {
                this.manager.composerLogService.warn("[composer] Attempting to set data on unloaded composer:", this.composerId);
                return;
            }
            if (this.manager.loadedComposers.update(this.composerId, ...n), M_v(n) ? this.manager.markDraftDirty(this.composerId) : n[0] !== "conversationMap" && (this.manager.markDirty(this.composerId), this.manager.recordHeaderWrite(this.composerId, j3u(n, i))), n[0] === "conversationMap" && typeof n[1] == "string") this.manager.markMessageDirty(this.composerId, n[1]);
            else if (n[0] === "conversationMap" && typeof n[1] == "object" && n[1] !== null) for (const c of Object.keys(n[1]))this.manager.markMessageDirty(this.composerId, c);
            else if (typeof n[0] == "object" && n[0] !== null && "conversationMap" in n[0]) {
                const c = n[0].conversationMap;
                if (typeof c == "object" && c !== null) for (const l of Object.keys(c))this.manager.markMessageDirty(this.composerId, l);
            } else if (n[0] === "conversationMap" && typeof n[1] == "function" || typeof n[0] == "function") {
                const c = lr(()=>this.manager.loadedComposers.byId[this.composerId]);
                for (const l of Object.keys(c?.conversationMap ?? {}))this.manager.markMessageDirty(this.composerId, l);
            }
            const r = n[0], s = n[1], o = r === "fullConversationHeadersOnly" && typeof s != "number", a = typeof r == "object" && r !== null && "fullConversationHeadersOnly" in r;
            if (o || a) {
                const c = lr(()=>this.manager.loadedComposers.byId[this.composerId]);
                c && L1v(this.composerId, c.fullConversationHeadersOnly, "setData");
            }
        };
    }
    get data() {
        const e = this.manager.loadedComposers.getUntrackedSnapshot(this.composerId), t = this._cachedData;
        if (t !== void 0 && e === this._cachedDataRaw) return t;
        this.clearCachedData();
        const n = lr(()=>this.manager.loadedComposers.byId[this.composerId]);
        if (!n) throw new Vro;
        return this._cachedDataRaw = e, this._cachedData = n, n;
    }
    clearCachedData() {
        this._cachedData = void 0, this._cachedDataRaw = void 0;
    }
    restore() {
        return this.manager.restoreLoadedComposerFromDisk(this.composerId);
    }
}, c2d = class {
    constructor(e){
        this.setData = (...t)=>{
            this.loadedComposerData[1](...t);
        }, this.loadedComposerData = e;
    }
    get composerId() {
        return this.loadedComposerData[0].composerId;
    }
    get data() {
        return this.loadedComposerData[0];
    }
    async restore() {}
};

}
