import { Ei, Ga, Qe, Vn, st } from "./Iwo.js";
import { g6t, mP, ud } from "./SZu.js";
import { iS, lb } from "./adminSettingsService.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { BOe, Yu, ZE, qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { iFa, nFa } from "./autoSmartModelMigration.js";
import { sie, y6 } from "./composerCapabilities.js";
import { AWt, YCn } from "./composerCheckpointStorageService.js";
import { $0t, BWt } from "./composerCodeBlockDiffStorageService.js";
import { uv } from "./composerData.js";
import { O0t, TOe } from "./composerDataCreation.js";
import { FBp, LBp, yFa } from "./composerDraftRecord.js";
import { v5a } from "./composerHeaderLog.js";
import { $Bp, XO1 } from "./composerHeaderLogState.js";
import { iI, w1 } from "./composerLogService.js";
import { Sv, U0t, eot } from "./composerMessageStorageService.js";
import { lBp } from "./composerMigrations.js";
import { J8a, cie } from "./composerNotLoadedError.js";
import { $4, J5 } from "./experimentRefreshService.js";
import { Cr, _s } from "./experimentService.js";
import { Jv, hy } from "./gitContextService.js";
import { hX } from "./index_12.ts";
import { OT } from "./index_5.ts";
import { ASi, B31, DSi, F31, H9p, M6p, MSi, P6p, U31, bWt, j9p } from "./ipa.js";
import { mki } from "./jsonStringifyContext.js";
import { Ji, Li } from "./log.js";
import { Uh, ip } from "./metricsService.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { fwm, nCt } from "./rendererConversationRootWrite.js";
import { Q0 } from "./sentry.js";
import { Lke, Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { A81, ABp, AUa, BO1, Eki, F81, M81, P81, PBp, Pzr, R81, UBp, YO1, _wm, bwm, dki, fFa, g81, jO1, k81, owm, vwm, zO1 } from "./yBp.js";
import { Wu, ks, pi } from "./ze.js";
var RUa, PUa, pX, hGt, pGt, kwm, wwm, Cwm, Twm, Ewm, Iwm, xwm, MUa, Awm, DUa, Rwm, NUa, LUa, OUa, yYr, Iki, FUa, Pwm;
export { Awm, Cwm, DUa, Ewm, FUa, Iki, Iwm, LUa, MUa, NUa, OUa, PUa, Pwm, RUa, Rwm, Twm, hGt, kwm, pGt, pX, wwm, xwm, yYr };
var __wakaru_iCt_initialized = false;
export function iCt() {
if (__wakaru_iCt_initialized) return;
__wakaru_iCt_initialized = true;
"use strict";
E(), Ei(), Ga(), Xo(), Qe(), Zi(), el(), v5a(), uv(), O0t(), FBp(), XO1(), y6(), YCn(), U0t(), BWt(), lBp(), __(), of(), iS(), iFa(), _s(), $4(), Rs(), cie(), v1(), pi(), qn(), mP(), Q0(), ip(), C1(), Sr(), hy(), Ji(), mki(), hX(), OT(), fwm(), iI(), RUa = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), PUa = (t)=>{
    throw TypeError(t);
}, pX = (t, e)=>(n, i)=>e(n, i, t), hGt = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && PUa("Object expected");
        var i, r;
        n && (i = e[RUa("asyncDispose")]), i === void 0 && (i = e[RUa("dispose")], n && (r = i)), typeof i != "function" && PUa("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, pGt = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, kwm = 2, wwm = .01, Cwm = "composer_header_log_storage", Twm = 1e6, Ewm = new Set([
    "fullConversationHeadersOnly",
    "conversationState"
]), Iwm = 3e4, xwm = 3, MUa = 6e4, Awm = 1e3, DUa = 6e4, Rwm = 1e3, NUa = "ofsContent", LUa = !1, OUa = new Set, yYr = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g){
        this.onDidPersistComposer = t, this.markRootDirty = e, this.storageService = n, this.composerCheckpointStorageService = i, this.composerMessageStorageService = r, this.composerCodeBlockDiffStorageService = s, this.modelConfigService = o, this.adminSettingsService = a, this.experimentService = l, this.reactiveStorageService = c, this.metricsService = u, this.aiServerConfigService = d, this.workspaceContextService = h, this.gitContextService = p, this._composerLogService = g, this._durableOfsContent = new WeakMap, this._durableHeaderLog = new WeakMap, this._needsRootRewrite = new WeakSet, this._headerLogGateExposed = !1, this._drafts = new yFa(n, LBp);
    }
    registerSaveHook(t) {
        return this.storageService.cursorDiskKVOnShouldSave(t);
    }
    _applyDraft(t, e) {
        e !== void 0 && (t.text = e.text, t.richText = e.richText ?? t.richText);
    }
    _headerLogLayout(t) {
        const e = this.experimentService.checkFeatureGate(Cwm, {
            disableExposureLog: t === "read" || this._headerLogGateExposed
        });
        return t === "persist" && (this._headerLogGateExposed = !0), e ? "chunked" : "inline";
    }
    async readComposerRoot(t, e, n = 2) {
        const i = this.getComposerDataStorageKey(t), r = await this.storageService.cursorDiskKVGet(i, e);
        if (!r) return;
        const s = JSON.parse(r);
        if (P6p(s)) {
            const l = s.headerLog, c = await F31(this.storageService, t, l);
            return s.fullConversationHeadersOnly = c.headers, Reflect.deleteProperty(s, "headerLog"), c.damage.length > 0 ? n > 0 && await this.storageService.cursorDiskKVGet(i, e) !== r ? this.readComposerRoot(t, e, n - 1) : (TOe("composer header log damaged", {
                level: "warning",
                tags: {
                    client_error_type: "composer_header_log_damage",
                    damage: c.damage.join(",")
                },
                extra: {
                    expected: l.count,
                    found: c.headers.length,
                    missingChunkIndexes: c.missingChunkIndexes
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
                    chunkCount: l.chunkCount,
                    bytesByChunk: c.bytesByChunk,
                    aligned: c.aligned,
                    generation: l.generation
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
        const o = await this.storageService.cursorDiskKVGetPrefixKeys(DSi(t));
        if (o.length === 0) return {
            parsed: s,
            durable: {
                kind: "inline",
                leftoverKeys: o
            },
            needsRootRewrite: !1
        };
        const a = await this.storageService.cursorDiskKVGetBatch(o);
        return s.fullConversationHeadersOnly = U31({
            chunked: B31(a),
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
    needsRootRewrite(t) {
        return this._needsRootRewrite.has(t);
    }
    adoptHeaderLogState(t, e) {
        this._durableHeaderLog.set(e, this._durableHeaderLog.get(t)), this._durableHeaderLog.delete(t), this._needsRootRewrite.delete(t) ? this._needsRootRewrite.add(e) : this._needsRootRewrite.delete(e);
    }
    async load(t, e) {
        const [n, i] = await Promise.all([
            this.readComposerRoot(t, e),
            this._drafts.read(t)
        ]);
        if (e(`[composer] getHandle: ${t} value=${n ? "exists" : "undefined"}`), !n) return;
        const r = await bwm(n.parsed.conversationState);
        r !== void 0 && nCt.seedPersistedRoot(t, r);
        const s = await BO1(n.parsed, {
            composerCheckpointStorageService: this.composerCheckpointStorageService,
            composerMessageStorageService: this.composerMessageStorageService,
            composerCodeBlockDiffStorageService: this.composerCodeBlockDiffStorageService,
            ...this._modelConfigMigrationInputs(),
            storageService: this.storageService,
            workspaceContextService: this.workspaceContextService,
            gitContextService: this.gitContextService,
            composerLogService: this._composerLogService
        });
        return e(`[composer] getHandle: ${t} deserialized`), s.text && (i === void 0 && await this._drafts.write(t, s).catch(()=>{}), this.markRootDirty(t)), this._applyDraft(s, i), s.hasLoaded = !1, this._durableHeaderLog.set(s, n.durable), n.needsRootRewrite && this._needsRootRewrite.add(s), s;
    }
    async loadForPeek(t) {
        const [e, n] = await Promise.all([
            this.readComposerRoot(t),
            this._drafts.read(t)
        ]);
        if (!e) return;
        const i = jO1(e.parsed);
        if (i) return i.modelConfig && (i.modelConfig = H9p({
            modelConfig: i.modelConfig,
            ...this._modelConfigMigrationInputs()
        })), this._applyDraft(i, n), i.hasLoaded = !1, i;
    }
    _modelConfigMigrationInputs() {
        return {
            modelConfigService: this.modelConfigService,
            availableModelIds: j9p(this.modelConfigService.getAvailableDefaultModels(), this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? []),
            isModelBlocked: (t)=>this.adminSettingsService.isModelBlocked(t),
            isAutoSmartCostMigrationEnabled: ()=>this.experimentService.checkFeatureGate(nFa, {
                    disableExposureLog: !1
                })
        };
    }
    async loadOfsContent(t, e) {
        return R81(this.storageService, t, e);
    }
    _reportRootFieldBytes(t, e, n) {
        const i = t.keyBytes.get("fullConversationHeadersOnly") ?? 0, r = e.kind === "chunked" ? e.bytesByChunk.reduce((u, d)=>u + (d ?? 0), 0) : i, s = t.keyBytes.get("conversationState") ?? 0, o = t.json.length - i - s, a = [
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
        for (const [u, d] of a)this.metricsService.distribution({
            stat: "renderer.composer.persist.root_field_bytes",
            value: d,
            tags: {
                ...n,
                field: u
            }
        });
        if (o < Twm) return;
        const l = _wm(t.keyBytes, Ewm);
        if (!l) return;
        const c = l.key === "context" && t.nestedKeyBytes ? _wm(t.nestedKeyBytes) : void 0;
        this.metricsService.distribution({
            stat: "renderer.composer.persist.root_top_field_bytes",
            value: l.bytes,
            tags: {
                ...n,
                top_field: l.key,
                ...c ? {
                    top_context_field: c.key
                } : {}
            }
        });
    }
    async _resolveDurableHeaderLog(t, e) {
        const n = this._durableHeaderLog.get(t);
        return n?.kind === "chunked" && e === "chunked" ? n : n?.kind === "chunked" ? {
            kind: "inline",
            leftoverKeys: await this.storageService.cursorDiskKVGetPrefixKeys(DSi(t.composerId))
        } : n?.leftoverKeys !== void 0 ? {
            kind: "inline",
            leftoverKeys: n.leftoverKeys
        } : e === "inline" ? {
            kind: "inline",
            leftoverKeys: []
        } : {
            kind: "inline",
            leftoverKeys: await this.storageService.cursorDiskKVGetPrefixKeys(DSi(t.composerId))
        };
    }
    async persistLoadedComposer(t, e, n, i) {
        var r = [];
        try {
            const _ = this._headerLogLayout("persist"), b = {
                "metrics.version": kwm.toString(),
                trigger: i?.trigger ?? "unspecified",
                layout: _
            }, y = i?.rootUnchanged !== !0 || i.draftChanged === !0 && !t.text, S = [], k = new Map;
            let C = this._durableOfsContent.get(t);
            for (const [$, H] of Object.entries(t.originalFileStates ?? {}))H?.content !== void 0 && (k.set($, AUa(t.composerId, $)), C?.get($) !== H.content && S.push({
                uriStr: $,
                content: H.content
            }));
            if (C) for (const $ of C.keys())k.has($) || C.delete($);
            if (y && S.length > 0) {
                var s = [];
                try {
                    const $ = hGt(s, Eki(n, "ofsWrite"));
                    $.setAttribute("ofsEntryCount", S.length);
                    const H = performance.now();
                    await A81(this.storageService, t.composerId, S).then(()=>{
                        C || (C = new Map, this._durableOfsContent.set(t, C));
                        for (const { uriStr: q, content: K } of S)C.set(q, K);
                    }, (q)=>{
                        $.setError(q instanceof Error ? q : String(q)), Sv(q, {
                            tags: {
                                client_error_type: "persistLoadedComposer_ofsContent"
                            }
                        });
                    });
                    const G = performance.now() - H;
                    $.end(), this.metricsService.distribution({
                        stat: "renderer.composer.persist.ofs_write_ms",
                        value: G,
                        tags: b
                    });
                } catch ($) {
                    var o = $, a = !0;
                } finally{
                    pGt(s, o, a);
                }
            }
            let T, I, A;
            if (y) {
                var l = [];
                try {
                    const $ = await this._resolveDurableHeaderLog(t, _), H = hGt(l, Eki(n, "serialize")), G = performance.now(), q = i?.headerDirty?.freeze() ?? "all", K = YO1({
                        composerId: t.composerId,
                        headers: t.fullConversationHeadersOnly,
                        keep: PBp(t),
                        dirty: q,
                        durable: $,
                        layout: _,
                        generation: Ai()
                    }), V = Math.random() < wwm, Y = dki({
                        source: "persist",
                        messageCount: t.fullConversationHeadersOnly.length
                    }, ()=>{
                        const re = fFa({
                            ...t,
                            queueItems: void 0,
                            text: "",
                            richText: ""
                        }, k.size > 0 ? k : void 0, K.rootField), ie = V ? vwm(re, "context") : void 0;
                        return {
                            toSave: re,
                            measured: ie,
                            json: ie?.json ?? JSON.stringify(re)
                        };
                    }), J = Y.json;
                    T = {
                        rootWithoutQueue: J,
                        plan: K,
                        headerDirty: q
                    }, I = nCt.snapshot(t.composerId), A = bwm(Y.toSave.conversationState);
                    const Q = performance.now() - G, te = J.length + K.chunkBytesWritten;
                    H.setAttribute("serializedBytes", te), H.setAttribute("messageCount", t.fullConversationHeadersOnly.length), H.setAttribute("headerChunksWritten", K.writes.length), H.end();
                    const ee = [
                        [
                            "serialize_ms",
                            Q
                        ],
                        [
                            "serialize_bytes",
                            te
                        ],
                        [
                            "root_bytes",
                            J.length
                        ],
                        [
                            "header_chunks_written",
                            K.writes.length
                        ],
                        [
                            "header_chunk_bytes",
                            K.chunkBytesWritten
                        ]
                    ];
                    for (const [re, ie] of ee)this.metricsService.distribution({
                        stat: `renderer.composer.persist.${re}`,
                        value: ie,
                        tags: b
                    });
                    Y.measured && this._reportRootFieldBytes(Y.measured, K.nextDurable, b);
                } catch ($) {
                    var c = $, u = !0;
                } finally{
                    pGt(l, c, u);
                }
            }
            let P;
            if (t.createdFromBackgroundAgent?.shouldStreamMessages) {
                const $ = t.agentSessionId !== void 0 ? t.createdFromBackgroundAgent?.kickoffMessageId : void 0, H = $ !== void 0 ? t.fullConversationHeadersOnly.findIndex((G)=>G.bubbleId === $ || G.serverBubbleId === $) : -1;
                P = t.fullConversationHeadersOnly.filter((G, q)=>{
                    const K = H !== -1 && q <= H, V = G.serverBubbleId !== void 0 && G.serverBubbleId.length > 0, Y = $ === void 0 && ASi(G);
                    return K || V || Y;
                }).map((G)=>t.conversationMap[G.bubbleId]).filter((G)=>G !== void 0);
            } else P = Object.values(t.conversationMap);
            P = P.filter(($)=>$ != null && !bWt($)), e !== void 0 && (P = P.filter(($)=>e.has($.bubbleId)));
            const M = hGt(r, Eki(n, "messageLoop"));
            M.setAttribute("persistedMessageCount", P.length), M.setAttribute("dirtyScoped", e !== void 0);
            const O = performance.now(), N = 5;
            for(let $ = 0; $ < P.length; $ += N){
                const H = P.slice($, $ + N);
                await Promise.all(H.map((G)=>this.composerMessageStorageService.storeMessage(t.composerId, G, void 0, {
                        suppressPersistEvent: !0
                    }).catch((q)=>{
                        throw M.setError(q instanceof Error ? q : String(q)), Sv(q, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        }), q;
                    }))), await new Promise((G)=>setTimeout(G, 0));
            }
            const U = performance.now() - O;
            M.end(), this.metricsService.distribution({
                stat: "renderer.composer.persist.message_loop_ms",
                value: U,
                tags: b
            }), await this._drafts.write(t.composerId, t);
            let j = !0;
            if (T !== void 0) {
                var d = [];
                try {
                    const { plan: $, headerDirty: H } = T, G = hGt(d, Eki(n, "kvSet")), q = performance.now();
                    let K = !1, V;
                    const Y = this.getComposerDataStorageKey(t.composerId), J = [
                        [
                            Y,
                            F81(T.rootWithoutQueue, t.queueItems)
                        ],
                        ...$.writes,
                        ...$.deletes
                    ], Q = $.expectedGeneration === void 0 ? void 0 : M6p({
                        rootKey: Y,
                        generation: $.expectedGeneration
                    });
                    let te = !1;
                    j = await this.storageService.cursorDiskKVSetBatch(J, Q).then((re)=>re ? (this._durableHeaderLog.set(t, $.nextDurable), i?.headerDirty?.commit(H), !0) : (te = Q !== void 0, !1), (re)=>(G.setError(re instanceof Error ? re : String(re)), Sv(re, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        }), K = !0, V = re, !1));
                    const ee = performance.now() - q;
                    if (G.end(), this.metricsService.distribution({
                        stat: "renderer.composer.persist.kv_set_ms",
                        value: ee,
                        tags: b
                    }), te) return this.metricsService.increment({
                        stat: "renderer.composer.persist.header_log_conflict",
                        tags: b
                    }), this._durableHeaderLog.set(t, {
                        kind: "inline"
                    }), this.persistLoadedComposer(t, e, n, i);
                    if (K && i?.throwOnRootFailure) throw V;
                } catch ($) {
                    var h = $, p = !0;
                } finally{
                    pGt(d, h, p);
                }
            }
            if (j && I !== void 0 && A !== void 0) {
                const $ = await A.catch(()=>{});
                if ($ !== void 0) {
                    const H = nCt.createDiagnostic(I, $, Date.now()), G = g81(H);
                    await k81({
                        serializedDiagnostic: G,
                        persist: async (q)=>await this.storageService.cursorDiskKVSet(owm(t.composerId), q),
                        acknowledge: ()=>nCt.acknowledgePersisted(t.composerId, I, $)
                    });
                }
            }
            j && this.onDidPersistComposer?.(t.composerId);
        } catch (_) {
            var g = _, f = !0;
        } finally{
            pGt(r, g, f);
        }
    }
    async deleteComposer(t) {
        await Promise.all([
            this.storageService.cursorDiskKVSet(this.getComposerDataStorageKey(t), void 0),
            this._drafts.delete(t),
            P81(this.storageService, t),
            this.storageService.cursorDiskKVClearPrefix(DSi(t))
        ]), await this.storageService.cursorDiskKVSet(owm(t), void 0).catch(()=>{}), nCt.forget(t);
    }
    getComposerDataStorageKey(t) {
        return ABp(t);
    }
}, yYr = Re([
    pX(2, ki),
    pX(3, AWt),
    pX(4, eot),
    pX(5, $0t),
    pX(6, eg),
    pX(7, lb),
    pX(8, Cr),
    pX(9, sa),
    pX(10, Uh),
    pX(11, Qb),
    pX(12, yr),
    pX(13, Jv),
    pX(14, w1)
], yYr), Iki = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.backend = t, this.composerWasLoadedHook = e, this.composerWasUnloadedHook = n, this.loadedComposers = i, this.logService = r, this.composerLogService = s, this.experimentService = o, this.experimentRefreshService = a, this.authenticationService = l, this.refById = new Map, this._handleFinalizationRegistry = new FinalizationRegistry((u)=>this._onHandleCollected(u)), this._pendingCollectedFinalizations = new Set, this._runFinalizationDrainWhenIdle = this._register(new Vn), this._gcSweepTimer = this._register(new ZE), this._isManagerDisposed = !1, this.finalizingComposers = new Set, this.dirtyComposers = new Set, this._rootDirtyComposers = new Set, this._draftDirtyComposers = new Set, this._dirtyMessages = new Map, this._persistingMessages = new Map, this._headerDirty = new Map, this.dirtyPersistScheduler = this._register(new Yu(()=>this.doDirtyPersistWhenIdle(), Iwm)), this.runDirtyPersistWhenIdle = this._register(new Vn), this._persistTailByComposerId = new Map, this._lruCache = new Map, this._loadedAtByComposerId = new Map, this._gcSafetyNetExperimentRequested = !1, this._register(this.experimentRefreshService.onDidRefreshStatsigIdentity(()=>{
            this._gcSafetyNetExperimentRequested && this._hasTrackedHandleRefs() && this._startGcSafetyNetExperimentResolution();
        }));
        const c = this.backend.registerSaveHook?.(async (u)=>{
            if (u !== Lke.SHUTDOWN) return;
            const d = Wu(this.loadedComposers.byId);
            await Promise.allSettled([
                ...Object.values(d).map((h)=>{
                    const p = this._dirtyMessages.get(h.composerId) ?? new Set;
                    return this.persistLoadedComposer(h, p, void 0, {
                        trigger: "shutdown"
                    }).catch((g)=>{
                        Sv(g, {
                            tags: {
                                client_error_type: "persistLoadedComposer"
                            }
                        });
                    });
                })
            ]), this.dirtyComposers.clear(), this._rootDirtyComposers.clear(), this._draftDirtyComposers.clear(), this._dirtyMessages.clear(), this._persistingMessages.clear();
        });
        c && this._register(c), this.dirtyPersistScheduler.schedule();
    }
    dispose() {
        this._isManagerDisposed = !0, this.dirtyPersistScheduler.dispose(), this.runDirtyPersistWhenIdle.dispose();
        try {
            for (const t of Object.values(Wu(this.loadedComposers.byId)))Pzr({
                capabilities: (t.capabilities ?? []).filter((e)=>e instanceof sie)
            });
        } finally{
            super.dispose();
        }
    }
    doDirtyPersistWhenIdle() {
        this.runDirtyPersistWhenIdle.value = BOe(()=>{
            this.persistDirtyComposers(), this.dirtyPersistScheduler.schedule();
        });
    }
    markDirty(t) {
        this.dirtyComposers.add(t), this._rootDirtyComposers.add(t);
    }
    markDraftDirty(t) {
        this.dirtyComposers.add(t), this._draftDirtyComposers.add(t);
    }
    markMessageDirty(t, e) {
        this.dirtyComposers.add(t);
        let n = this._dirtyMessages.get(t);
        n || (n = new Set, this._dirtyMessages.set(t, n)), n.add(e);
    }
    recordHeaderWrite(t, e) {
        this._headerDirty.get(t)?.record(e);
    }
    updateWithoutMarkingDirty(t, ...e) {
        const n = this.loadedComposers.getUntrackedSnapshot(t);
        this.loadedComposers.update(t, ...e);
        const i = n && UBp(e, n);
        i !== void 0 && i !== "all" && this.recordHeaderWrite(t, i);
    }
    isMessageDirty(t, e) {
        const n = e;
        return (this._dirtyMessages.get(t)?.has(n) ?? !1) || (this._persistingMessages.get(t)?.has(n) ?? !1);
    }
    getTrackedDirtyMessageIds(t) {
        return new Set([
            ...this._dirtyMessages.get(t) ?? [],
            ...this._persistingMessages.get(t) ?? []
        ]);
    }
    async loadOfsContent(t, e) {
        const n = ks(()=>this.loadedComposers.byId[t]);
        if (!n) return;
        const i = n.originalFileStates[e];
        if (!i) return;
        if (i.content !== void 0) return i.content;
        if (!i.contentKey) return;
        const r = await this.backend.loadOfsContent(t, e), s = r ?? "";
        return r === void 0 && this.logService.warn(`[composer] Missing ofsContent for ${i.contentKey} in ${t.slice(0, 8)}`), this.loadedComposers.update(t, "originalFileStates", e, "content", s), s;
    }
    async persistDirtyComposers() {
        if (this.dirtyComposers.size === 0) return;
        const t = [
            ...this.dirtyComposers
        ];
        this.dirtyComposers.clear();
        const e = new Map, n = new Map, i = new Map;
        for (const s of t){
            const o = this._dirtyMessages.get(s), a = o ? new Set(o) : new Set;
            this._persistingMessages.set(s, a), this._dirtyMessages.delete(s), e.set(s, a), n.set(s, this._rootDirtyComposers.delete(s)), i.set(s, this._draftDirtyComposers.delete(s));
        }
        const r = Wu(this.loadedComposers.byId);
        await Promise.allSettled(t.map(async (s)=>{
            const o = r[s];
            if (!o) {
                this._persistingMessages.delete(s);
                return;
            }
            const a = e.get(s), l = i.get(s) ?? !1, c = n.get(s) ?? !0;
            try {
                await this.persistLoadedComposer(o, a, void 0, c ? {
                    trigger: "dirty_tick"
                } : {
                    trigger: "dirty_tick",
                    rootUnchanged: !0,
                    draftChanged: l
                }), this._persistingMessages.delete(s);
            } catch (u) {
                this._persistingMessages.delete(s);
                const d = e.get(s);
                if (Wu(this.loadedComposers.byId)[s] !== void 0 && d && d.size > 0) {
                    const p = this._dirtyMessages.get(s);
                    if (p) for (const g of d)p.add(g);
                    else this._dirtyMessages.set(s, new Set(d));
                }
                this.dirtyComposers.add(s), c && this._rootDirtyComposers.add(s), l && this._draftDirtyComposers.add(s), Sv(u, {
                    tags: {
                        client_error_type: "persistDirtyComposer"
                    }
                });
            }
        }));
    }
    runGarbageCollection() {
        this._evictExpiredLruEntries();
        for (const [t, e] of this.refById)e.type === "REF" && !e.ref.deref() && this._finalizeCollectedHandle(t);
    }
    _evictExpiredLruEntries() {
        const t = Date.now();
        for (const [e, n] of this._lruCache)t - n.touchedAt > MUa && this._lruCache.delete(e);
    }
    getGcSafetyNetSweepMs() {
        return this._gcSafetyNetSweepMs !== void 0 ? this._gcSafetyNetSweepMs : (this._gcSafetyNetExperimentRequested = !0, this._startGcSafetyNetExperimentResolution(), DUa);
    }
    _startGcSafetyNetExperimentResolution() {
        this._isManagerDisposed || this._gcSafetyNetSweepMs !== void 0 || this._gcSafetyNetResolve !== void 0 || (this._gcSafetyNetResolve = this._resolveGcSafetyNetExperiment());
    }
    async _resolveGcSafetyNetExperiment() {
        try {
            await this.experimentRefreshService.whenStartupRefreshComplete(), await this.experimentRefreshService.whenAuthChangeRefreshComplete();
        } catch  {}
        if (this._isManagerDisposed) return;
        const t = this.authenticationService.getCurrentAuthId();
        if (t === void 0 || !this.experimentRefreshService.isInitializedForIdentity(t)) {
            this._gcSafetyNetResolve = void 0;
            return;
        }
        const e = this.experimentService.getExperimentParam("composer_gc_safety_net_1s", "enabled", {
            disableExposureLog: !1
        }) === !0;
        this._gcSafetyNetSweepMs = e ? Rwm : DUa, this._armGcSweepTimer();
    }
    _armGcSweepTimer() {
        if (this._isManagerDisposed) return;
        const t = Date.now();
        let e;
        if (this._lruCache.size > 0) {
            let n = 1 / 0;
            for (const i of this._lruCache.values())n = Math.min(n, i.touchedAt + MUa);
            e = Math.max(t + Awm, n);
        } else if (this._hasTrackedHandleRefs()) e = t + this.getGcSafetyNetSweepMs();
        else {
            this._gcSweepDeadlineMs = void 0, this._gcSweepTimer.cancel();
            return;
        }
        this._gcSweepDeadlineMs !== void 0 && this._gcSweepDeadlineMs <= e || (this._gcSweepDeadlineMs = e, this._gcSweepTimer.cancelAndSet(()=>{
            this._gcSweepDeadlineMs = void 0, this.runGarbageCollection(), this._armGcSweepTimer();
        }, e - t));
    }
    _hasTrackedHandleRefs() {
        for (const t of this.refById.values())if (t.type === "REF") return !0;
        return !1;
    }
    _onHandleCollected(t) {
        this._isManagerDisposed || (this._pendingCollectedFinalizations.add(t), this._armFinalizationDrain());
    }
    _armFinalizationDrain() {
        this._isManagerDisposed || this._runFinalizationDrainWhenIdle.value !== void 0 || this._pendingCollectedFinalizations.size === 0 || (this._runFinalizationDrainWhenIdle.value = BOe((t)=>{
            this._runFinalizationDrainWhenIdle.clear(), this._drainPendingFinalizations(()=>t.timeRemaining() > 0);
        }));
    }
    _drainPendingFinalizations(t) {
        for (const e of this._pendingCollectedFinalizations)if (this._pendingCollectedFinalizations.delete(e), this._finalizeCollectedHandle(e), !t()) break;
        this._armFinalizationDrain();
    }
    _finalizeCollectedHandle(t) {
        const e = this.refById.get(t);
        e?.type === "REF" && !e.ref.deref() && this.startFinalization(t, e.deleteOnUnload).finally(()=>{
            this.refById.get(t)?.type === "FINALIZING" && this.refById.delete(t), this._armGcSweepTimer();
        });
    }
    startFinalization(t, e) {
        const n = this.finalizeComposer(t, e);
        return this.refById.set(t, {
            type: "FINALIZING",
            promise: n
        }), n;
    }
    async finalizeComposer(t, e) {
        if (this.finalizingComposers.has(t)) {
            const i = new Error(`[composer] Invariant violation: double finalization for composer: ${t}`);
            this.composerLogService.error(i.message), Sv(i, {
                tags: {
                    client_error_type: "composer_invariant_violation",
                    force_upload: "forced"
                }
            });
            return;
        }
        const n = Wu(this.loadedComposers.byId)[t];
        if (n) {
            this.finalizingComposers.add(t);
            try {
                Pzr(n), this.composerWasUnloadedHook(t);
                const i = new Set(this._dirtyMessages.get(t)), r = this._persistingMessages.get(t);
                if (r) for (const o of r)i.add(o);
                this.loadedComposers.delete(t), this._loadedAtByComposerId.delete(t), this._dirtyMessages.delete(t), this._persistingMessages.delete(t), this._headerDirty.delete(t);
                const s = this.refById.get(t);
                s?.type === "REF" && s.ref.deref()?.clearCachedData(), e ? await this.deletePersistedComposer(t) : MSi(n) || await this.persistLoadedComposer(n, i, void 0, {
                    trigger: "finalize"
                });
            } finally{
                this.finalizingComposers.delete(t);
            }
        }
    }
    async persistLoadedComposer(t, e, n, i) {
        const r = t.composerId, s = t, o = this._persistTailByComposerId.get(r) ?? Promise.resolve(), l = (async ()=>{
            {
                var u = [];
                try {
                    const f = hGt(u, Eki(n, "queueWait"));
                    await o.catch(()=>{});
                } catch (f) {
                    var d = f, h = !0;
                } finally{
                    pGt(u, d, h);
                }
            }
            const p = Wu(this.loadedComposers.byId)[r] ?? s, g = i?.trigger === "finalize" || i?.trigger === "shutdown";
            await this.backend.persistLoadedComposer(p, e, n, {
                ...i,
                headerDirty: g ? void 0 : this._headerDirty.get(r)
            });
        })(), c = l.catch(()=>{});
        this._persistTailByComposerId.set(r, c);
        try {
            await l;
        } finally{
            this._persistTailByComposerId.get(r) === c && this._persistTailByComposerId.delete(r);
        }
    }
    async deletePersistedComposer(t) {
        const n = (this._persistTailByComposerId.get(t) ?? Promise.resolve()).catch(()=>{}).then(()=>this.backend.deleteComposer(t)), i = n.catch(()=>{});
        this._persistTailByComposerId.set(t, i);
        try {
            await n;
        } finally{
            this._persistTailByComposerId.get(t) === i && this._persistTailByComposerId.delete(t);
        }
    }
    async restoreLoadedComposerFromDisk(t) {
        const e = await this.backend.load(t, ()=>{});
        if (!e) return;
        const n = this.loadedComposers.getUntrackedSnapshot(t);
        if (!n) return;
        const i = e.conversationCheckpointLastUpdatedAt ?? 0, r = n.conversationCheckpointLastUpdatedAt ?? 0;
        if (i <= r) return;
        const s = {
            ...e
        };
        delete s.capabilities, delete s.hasLoaded, this.loadedComposers.update(t, s), this.backend.adoptHeaderLogState?.(e, n), this.backend.needsRootRewrite?.(n) && this.markDirty(t);
    }
    getHandleIfLoaded(t) {
        const e = this.refById.get(t);
        if (e?.type === "REF") {
            const n = e.ref.deref();
            if (n) return n;
        }
    }
    async peekComposerData(t) {
        for(;;){
            const e = this.refById.get(t);
            if (e?.type === "LOADING") {
                const i = await e.promise;
                if (this.refById.get(t) !== e) continue;
                if (i) return {
                    source: "memory",
                    handle: i
                };
            }
            if (e?.type === "REF") {
                const i = e.ref.deref();
                if (i) return {
                    source: "memory",
                    handle: i
                };
                this._finalizeCollectedHandle(t);
                continue;
            }
            if (e?.type === "FINALIZING" && (await e.promise, this.refById.get(t) !== e)) continue;
            const n = await this._loadComposerDataForPeek(t);
            if (this.refById.get(t) === e) return n;
        }
    }
    async _loadComposerDataForPeek(t) {
        try {
            const e = await this.backend.loadForPeek?.(t);
            return e ? {
                source: "storage",
                data: e
            } : void 0;
        } catch (e) {
            this.logService.error("[composer] Error peeking composer data:", e);
            return;
        }
    }
    getComposerDataIfLoaded(t) {
        return ks(()=>this.loadedComposers.byId[t]);
    }
    getHandleLifecycle(t) {
        const e = this._loadedAtByComposerId.get(t), n = this.refById.get(t);
        return n === void 0 ? {
            state: "untracked",
            loadedAtMs: e
        } : n.type === "LOADING" ? {
            state: "loading",
            loadedAtMs: e
        } : n.type === "FINALIZING" ? {
            state: "finalizing",
            loadedAtMs: e
        } : {
            state: n.ref.deref() ? "live" : "collected-pending-finalization",
            loadedAtMs: e
        };
    }
    pushComposer(t) {
        const e = this.getHandleIfLoaded(t.composerId);
        if (e) return e;
        if (!this.refById.has(t.composerId)) return this.registerComposer(t);
    }
    createHandle(t) {
        return new FUa(t, this);
    }
    createWeakRef(t) {
        return new WeakRef(t);
    }
    registerComposer(t) {
        const e = this.createHandle(t.composerId);
        return this.refById.set(t.composerId, {
            type: "REF",
            ref: this.createWeakRef(e),
            deleteOnUnload: !1
        }), this._handleFinalizationRegistry.register(e, t.composerId), this._loadedAtByComposerId.set(t.composerId, Date.now()), this._headerDirty.set(t.composerId, new $Bp), this.loadedComposers.add(t), this._armGcSweepTimer(), this.composerWasLoadedHook(e.data), e;
    }
    async deleteComposer(t) {
        this._lruCache.delete(t), this._loadedAtByComposerId.delete(t), this._dirtyMessages.delete(t), this._persistingMessages.delete(t), this._headerDirty.delete(t);
        const e = this.refById.get(t);
        e?.type === "REF" ? (await this.startFinalization(t, !0), this.refById.delete(t)) : e?.type === "LOADING" ? e.deleteOnUnload = !0 : e?.type === "FINALIZING" ? (await e.promise, await this.deletePersistedComposer(t)) : await this.deletePersistedComposer(t), this._armGcSweepTimer();
    }
    async unloadComposer(t) {
        this.refById.get(t)?.type === "REF" && (this._lruCache.delete(t), await this.startFinalization(t, !1), this.refById.get(t)?.type === "FINALIZING" && this.refById.delete(t), this._armGcSweepTimer());
    }
    _touchLruCache(t, e) {
        for(this._lruCache.delete(t), this._lruCache.set(t, {
            handle: e,
            touchedAt: Date.now()
        }); this._lruCache.size > xwm;){
            const n = this._lruCache.keys().next().value;
            this._lruCache.delete(n);
        }
        this._armGcSweepTimer();
    }
    async getHandle(t, e, n) {
        var i = [];
        try {
            const o = hGt(i, g6t({
                parentSpanContext: n,
                name: "ComposerDataHandleStorageBackend.getHandle"
            })), a = await this._resolveHandle(t, e ?? (()=>{}));
            return a && this._touchLruCache(t, a), a;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            pGt(i, r, s);
        }
    }
    async _resolveHandle(t, e) {
        const n = this.refById.get(t);
        if (n?.type === "LOADING") return n.promise;
        if (n?.type === "FINALIZING") await n.promise;
        else if (n?.type === "REF") {
            const s = n.ref.deref();
            if (s) return s;
            await this.startFinalization(t, n.deleteOnUnload);
        }
        const i = this.refById.get(t);
        if (i?.type === "LOADING") return i.promise;
        if (i?.type === "REF") {
            const s = i.ref.deref();
            if (s) return s;
        }
        const r = this.loadFromStorage(t, e);
        return this.refById.set(t, {
            type: "LOADING",
            promise: r
        }), r;
    }
    async loadFromStorage(t, e) {
        const n = !LUa;
        n && (LUa = !0, ud("code/willLoadComposerFromStorage"));
        try {
            const i = await this.backend.load(t, e).catch((s)=>{
                e(`[composer] getHandle: ${t} error=${s.stack}`);
            }), r = this.refById.get(t);
            if (r?.type === "LOADING" && r.deleteOnUnload) {
                e(`[composer] getHandle: ${t} delete requested during load`), await this.deletePersistedComposer(t), this.refById.delete(t);
                return;
            }
            if (i) {
                const s = this.registerComposer(i);
                return this.backend.needsRootRewrite?.(i) && this.markDirty(t), s;
            }
            this.refById.delete(t);
            return;
        } catch (i) {
            e(`[composer] getHandle: ${t} error=${i.stack}`), this.refById.delete(t), this.composerLogService.error("[composer] Error loading composer data:", i);
            return;
        } finally{
            n && ud("code/didLoadComposerFromStorage");
        }
    }
}, Iki = Re([
    pX(4, Li),
    pX(5, w1),
    pX(6, Cr),
    pX(7, J5),
    pX(8, ss)
], Iki), FUa = class {
    constructor(t, e){
        this.composerId = t, this.manager = e, this.__GC_COMPOSER_DATA_HANDLE__ = !0, this.setData = (...n)=>{
            const i = this.manager.loadedComposers.getUntrackedSnapshot(this.composerId);
            if (i === void 0) {
                this.manager.composerLogService.warn("[composer] Attempting to set data on unloaded composer:", this.composerId);
                return;
            }
            if (this.manager.loadedComposers.update(this.composerId, ...n), zO1(n) ? this.manager.markDraftDirty(this.composerId) : n[0] !== "conversationMap" && (this.manager.markDirty(this.composerId), this.manager.recordHeaderWrite(this.composerId, UBp(n, i))), n[0] === "conversationMap" && typeof n[1] == "string") this.manager.markMessageDirty(this.composerId, n[1]);
            else if (n[0] === "conversationMap" && typeof n[1] == "object" && n[1] !== null) for (const l of Object.keys(n[1]))this.manager.markMessageDirty(this.composerId, l);
            else if (typeof n[0] == "object" && n[0] !== null && "conversationMap" in n[0]) {
                const l = n[0].conversationMap;
                if (typeof l == "object" && l !== null) for (const c of Object.keys(l))this.manager.markMessageDirty(this.composerId, c);
            } else if (n[0] === "conversationMap" && typeof n[1] == "function" || typeof n[0] == "function") {
                const l = ks(()=>this.manager.loadedComposers.byId[this.composerId]);
                for (const c of Object.keys(l?.conversationMap ?? {}))this.manager.markMessageDirty(this.composerId, c);
            }
            const r = n[0], s = n[1], o = r === "fullConversationHeadersOnly" && typeof s != "number", a = typeof r == "object" && r !== null && "fullConversationHeadersOnly" in r;
            if (o || a) {
                const l = ks(()=>this.manager.loadedComposers.byId[this.composerId]);
                l && M81(this.composerId, l.fullConversationHeadersOnly, "setData");
            }
        };
    }
    get data() {
        const t = this.manager.loadedComposers.getUntrackedSnapshot(this.composerId), e = this._cachedData;
        if (e !== void 0 && t === this._cachedDataRaw) return e;
        this.clearCachedData();
        const n = ks(()=>this.manager.loadedComposers.byId[this.composerId]);
        if (!n) throw new J8a;
        return this._cachedDataRaw = t, this._cachedData = n, n;
    }
    clearCachedData() {
        this._cachedData = void 0, this._cachedDataRaw = void 0;
    }
    restore() {
        return this.manager.restoreLoadedComposerFromDisk(this.composerId);
    }
}, Pwm = class {
    constructor(t){
        this.setData = (...e)=>{
            this.loadedComposerData[1](...e);
        }, this.loadedComposerData = t;
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
