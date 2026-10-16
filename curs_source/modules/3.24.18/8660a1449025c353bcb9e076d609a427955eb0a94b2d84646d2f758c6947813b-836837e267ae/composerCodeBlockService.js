import { LTi, RTi, aat } from "./Aeg.js";
import { Fa, Qe, Tdn, da, st, ww } from "./Iwo.js";
import { Gmr, O3, aa, bn, hA, jn } from "./SZu.js";
import { c_, cot } from "./async.cursor.js";
import { bs, sd } from "./chat_pb.js";
import { $0t, BWt } from "./composerCodeBlockDiffStorageService.js";
import { Tis, xil } from "./composerCodeBlockPartialInlineDiffFatesStorageService.js";
import { a5a, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { Cie, dG } from "./composerFileService.js";
import { iI, w1 } from "./composerLogService.js";
import { lil } from "./composerSlowSpanUtils.js";
import { HCe, O4e } from "./composerTextModelService.js";
import { $Ce } from "./composerUriUtils.js";
import { Cze } from "./debugLogFileUtils.js";
import { lPe, mX } from "./diffChangeSource.js";
import { FD, yW } from "./editorWorker.js";
import { Rn } from "./extensions.js";
import { Xy } from "./hash.js";
import { G4, UO } from "./inlineDiffService.js";
import { It } from "./instantiation.js";
import { uqe } from "./internalAgentToolsFileUtils.js";
import { Kst } from "./ipa.js";
import { DD, wd } from "./lineRange.js";
import { OQ, ioi } from "./linesDiffComputer.js";
import { du, kv } from "./map.js";
import { Uh, ip } from "./metricsService.js";
import { Ki, Ot } from "./network.js";
import { Rd, ih } from "./pathService.js";
import { AB } from "./planFileUtils.js";
import { I7, Swe } from "./rangeMapping.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Lr, Mc, gu } from "./resources.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { uX, wbe } from "./yBp.js";
import { ks, pi } from "./ze.js";
var Ril, Pil, Zpe, bzt, yzt, jtg, $tg, Kbe, lC;
export { $tg, Kbe, Pil, Ril, Zpe, bzt, jtg, lC, yzt };
var __wakaru_WCe_initialized = false;
export function WCe() {
if (__wakaru_WCe_initialized) return;
__wakaru_WCe_initialized = true;
"use strict";
E(), pi(), sd(), c_(), Xy(), Qe(), du(), Ki(), Lr(), Fa(), fn(), Xo(), lPe(), G4(), DD(), ioi(), Swe(), yW(), Rn(), It(), el(), __(), Sr(), ip(), ih(), BWt(), xil(), uv(), Pl(), LS(), Cie(), O4e(), $Ce(), Cze(), uqe(), AB(), lil(), iI(), Ril = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), Pil = (t)=>{
    throw TypeError(t);
}, Zpe = (t, e)=>(n, i)=>e(n, i, t), bzt = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && Pil("Object expected");
        var i, r;
        n && (i = e[Ril("asyncDispose")]), i === void 0 && (i = e[Ril("dispose")], n && (r = i)), typeof i != "function" && Pil("Object not disposable"), r && (i = function() {
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
}, yzt = (t, e, n)=>{
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
}, jtg = {
    shouldGracefullyFallBackOnTimeout: !0
}, $tg = 1e3, Kbe = jn("composerCodeBlockService"), lC = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this._reactiveStorageService = t, this.composerTextModelService = e, this._composerEventService = n, this._composerCodeBlockDiffStorageService = i, this._composerCodeBlockPartialInlineDiffFatesStorageService = r, this._editorWorkerService = s, this._metricsService = o, this._composerDataService = a, this._composerFileService = l, this._inlineDiffService = c, this._diffChangeSourceRegistry = u, this._workspaceContextService = d, this._pathService = h, this._composerLogService = p, this._composerDiffCache = new kv(50), this._composerDiffSemaphore = new cot(5), this._fileWatchers = this._register(new da), this._uriToCachedCodeBlocks = new Map, this._uriToCachedCodeBlocksQueue = new Map, this._getUserPlansDirAsync(), this._register(this._composerEventService.onDidFilesChange((k)=>{
            const C = Array.from(new Set([
                ...this._uriToCachedCodeBlocks.keys(),
                ...this._uriToCachedCodeBlocksQueue.keys()
            ]));
            for (const T of C){
                const I = rt.parse(T);
                if (k.contains(I)) {
                    const A = this._uriToCachedCodeBlocksQueue.get(I.toString()) ?? [];
                    this.markUriAsOutdated(I, A.length > 0), A.length > 0 && (this._uriToCachedCodeBlocks.set(I.toString(), A), this._uriToCachedCodeBlocksQueue.delete(I.toString()));
                }
            }
        })), this._register(this._inlineDiffService.onDidAcceptDiff((k)=>{
            this._storePartialInlineDiffFates(k);
        })), this._register(this._inlineDiffService.onDidRejectDiff((k)=>{
            this._storePartialInlineDiffFates(k);
        }));
        const g = (k, C, T)=>{
            var I = [];
            try {
                const M = bzt(I, hA("ComposerCodeBlockService.abortAndRemoveApplyGenerationUUID"));
                this.getComposerCodeBlock(k, C, T)?.applyGenerationUUID && this.updateComposerCodeBlock(k, C, T, {
                    applyGenerationUUID: void 0
                });
            } catch (M) {
                var A = M, P = !0;
            } finally{
                yzt(I, A, P);
            }
        }, f = (k)=>{
            var C = [];
            try {
                const A = bzt(C, hA("ComposerCodeBlockService.handleDiffRemoval"));
                if (!k.composerId) return;
                k.accepted ? b(k.diffInfo, !1, A) : _(k.diffInfo, !1, A);
            } catch (A) {
                var T = A, I = !0;
            } finally{
                yzt(C, T, I);
            }
        }, _ = (k, C = !0, T)=>{
            var I = [];
            try {
                const M = bzt(I, T ? O3(T, "ComposerCodeBlockService.handleDiffReject") : hA("ComposerCodeBlockService.handleDiffReject")), { composerId: O, codeblockId: N } = k.composerMetadata ?? {};
                if (!O) return;
                const U = this._composerDataService.getHandleIfLoaded(O);
                if (!U) return;
                const j = this._composerDataService.getComposerData(U);
                if (!j) return;
                let $ = k.uri;
                if (j.isNAL === !0 && k.uri.scheme === Ot.vscodeNotebookCell) try {
                    $ = Tdn(k.uri);
                } catch  {
                    $ = k.uri;
                }
                N !== void 0 && this.getComposerCodeBlock(U, $, N) && (this.isCodeBlockRegisteredAsCached(U, $, N) || (this.setCodeBlockStatusIncludingPreviouslyChained(U, $, N, "rejected"), g(U, $, N)));
                const H = k.inlineDiff !== void 0 && k.inlineDiff.uri.scheme !== Ot.vscodeNotebookCell && k.inlineDiff.originalTextLines.length === 0;
                if (!H) {
                    const G = $.toString();
                    (j.newlyCreatedFiles?.some((K)=>K.uri.toString() === G) ?? !1) && this._composerDataService.updateComposerData(U, {
                        newlyCreatedFiles: j.newlyCreatedFiles?.filter((K)=>K.uri.toString() !== G) ?? [],
                        newlyCreatedFolders: j.newlyCreatedFolders?.filter((K)=>!G.startsWith(K.uri.toString())) ?? []
                    });
                }
                H ? this._composerFileService.deleteNewFileAndMaybeFolder($, O, j).then((G)=>{
                    !G && C && this._composerFileService.saveFile({
                        uri: $,
                        composerData: j,
                        options: {
                            force: !0
                        }
                    });
                }) : C && this._composerFileService.saveFile({
                    uri: $,
                    composerData: j,
                    options: {
                        force: !0
                    }
                });
            } catch (M) {
                var A = M, P = !0;
            } finally{
                yzt(I, A, P);
            }
        }, b = (k, C = !0, T)=>{
            var I = [];
            try {
                const M = bzt(I, T ? O3(T, "ComposerCodeBlockService.handleDiffAccept") : hA("ComposerCodeBlockService.handleDiffAccept")), { composerId: O, codeblockId: N } = k.composerMetadata ?? {};
                if (!O) return;
                const U = this._composerDataService.getHandleIfLoaded(O);
                if (!U) return;
                const j = U.data;
                if (!j) return;
                let $ = k.uri;
                if (j.isNAL === !0 && k.uri.scheme === Ot.vscodeNotebookCell) try {
                    $ = Tdn(k.uri);
                } catch  {
                    $ = k.uri;
                }
                if (N !== void 0) {
                    if (!this.getComposerCodeBlock(U, $, N)) return;
                    this.setCodeBlockStatusIncludingPreviouslyChained(U, $, N, "accepted"), g(U, $, N);
                }
                C && this._composerFileService.saveFile({
                    uri: $,
                    composerData: j,
                    options: {
                        force: !0
                    }
                }), this._composerDataService.updateComposerData(U, {
                    newlyCreatedFiles: j.newlyCreatedFiles?.filter((H)=>H.uri.toString() !== $.toString()) ?? [],
                    newlyCreatedFolders: j.newlyCreatedFolders?.filter((H)=>!$.toString().startsWith(H.uri.toString())) ?? []
                });
            } catch (M) {
                var A = M, P = !0;
            } finally{
                yzt(I, A, P);
            }
        }, y = (k, C)=>{
            var T = [];
            try {
                const P = bzt(T, hA("ComposerCodeBlockService.handlePartialDiff")), { composerId: M } = k.diffInfo.composerMetadata ?? {};
                if (!M) return;
                const O = this._composerDataService.getHandleIfLoaded(M);
                if (!(O ? this._composerDataService.getComposerData(O) : void 0)) return;
                const { diffInfo: U, isDone: j } = k;
                j && (C === "accepted" ? b(U, !0, P) : _({
                    ...U,
                    inlineDiff: k.inlineDiff
                }, !0, P));
            } catch (P) {
                var I = P, A = !0;
            } finally{
                yzt(T, I, A);
            }
        }, S = (k)=>{
            var C = [];
            try {
                const A = bzt(C, hA("ComposerCodeBlockService.handleAddDiffFromUndoRedo")), { composerId: P, codeblockId: M } = k.composerMetadata ?? {};
                if (!P || M === void 0) return;
                const O = this._composerDataService.getHandleIfLoaded(P);
                if (!O || !O.data || !this.getComposerCodeBlock(O, k.uri, M)) return;
                this.updateComposerCodeBlock(O, k.uri, M, {
                    status: "completed"
                }), this._composerLogService.info(`[composer] Restored diff for ${k.uri.toString()} with codeblockId ${M}`);
            } catch (A) {
                var T = A, I = !0;
            } finally{
                yzt(C, T, I);
            }
        };
        this._register(this._inlineDiffService.onDidAcceptDiff(b)), this._register(this._inlineDiffService.onDidRejectDiff((k)=>_(k))), this._register(this._inlineDiffService.onDidRemoveDiffFromUndoRedo((k)=>f(k))), this._register(this._inlineDiffService.onDidAddDiffFromUndoRedo((k)=>S(k))), this._register(this._inlineDiffService.onDidAcceptPartialDiff((k)=>y(k, "accepted"))), this._register(this._inlineDiffService.onDidRejectPartialDiff((k)=>y(k, "rejected")));
    }
    get userPlansDir() {
        return this._userPlansDir;
    }
    async _getUserPlansDirAsync() {
        return this._userPlansDir ? this._userPlansDir : (this._userPlansDirPromise || (this._userPlansDirPromise = this._pathService.userHome().then((t)=>(this._userPlansDir = wbe(t), this._userPlansDir))), this._userPlansDirPromise);
    }
    async _storePartialInlineDiffFates(t) {
        const { composerMetadata: e, partialInlineDiffFates: n } = t;
        if (!e || !n) return;
        const { composerId: i, codeblockId: r } = e, s = t.uri, o = await this._composerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates(i, n), a = this._composerDataService.getHandleIfLoaded(i);
        a && r && this.updateComposerCodeBlock(a, s, r, {
            partialInlineDiffFatesId: o
        });
    }
    getComposerCodeBlock(t, e, n) {
        return t.data.codeBlockData?.[e.toString()]?.[n];
    }
    updateComposerCodeBlock(t, e, n, i) {
        if (!t.data.codeBlockData[e.toString()]?.[n]) {
            this._composerLogService.trace("[composer] updateReactiveCodeBlock called for codeblockId that does not exist", e, n);
            return;
        }
        try {
            this._composerDataService.updateComposerDataSetStore(t, (s)=>s("codeBlockData", e.toString(), n, (o)=>({
                        ...o,
                        ...i
                    })));
        } catch  {}
    }
    updateComposerCodeBlockSetStore(t, e, n, i) {
        if (!t.data.codeBlockData[e.toString()]?.[n]) {
            this._composerLogService.trace("[composer] updateComposerCodeBlockSetStore called for codeblockId that does not exist", e, n);
            return;
        }
        try {
            this._composerDataService.updateComposerDataSetStore(t, (o)=>{
                i((...l)=>o("codeBlockData", e.toString(), n, ...l));
            });
        } catch  {}
    }
    shouldCache(t, e) {
        const n = t.data;
        if (e !== void 0) {
            const o = this.getComposerCodeBlock(t, e.uri, e.codeblockId);
            if (o && o.isNotApplied) return !0;
        }
        const i = this._composerDataService.selectedComposerIds.includes(n.composerId), r = this._composerDataService.getRootComposerId(n.composerId), s = this._composerDataService.selectedComposerIds.includes(r);
        return !i && !s;
    }
    unregisterCachedCodeBlock(t, e, n) {
        this.updateComposerCodeBlock(t, e, n, {
            isCached: !1
        });
        const i = t.data.composerId, s = (this._uriToCachedCodeBlocks.get(e.toString()) ?? []).filter((l)=>l.composerId !== i || l.codeblockId !== n), a = (this._uriToCachedCodeBlocksQueue.get(e.toString()) ?? []).filter((l)=>l.composerId !== i || l.codeblockId !== n);
        if (s.length === 0 && a.length === 0) {
            this._fileWatchers.deleteAndDispose(e.toString()), this._uriToCachedCodeBlocks.delete(e.toString()), this._uriToCachedCodeBlocksQueue.delete(e.toString());
            return;
        }
        this._uriToCachedCodeBlocks.set(e.toString(), s), this._uriToCachedCodeBlocksQueue.set(e.toString(), a);
    }
    unregisterAllCachedCodeBlocks(t) {
        const e = this.getAllCachedCodeBlocks(t);
        for (const n of e)this.unregisterCachedCodeBlock(t, n.uri, n.codeblockId);
    }
    registerCachedCodeBlock(t, e, n, i) {
        this.updateComposerCodeBlock(t, e, n, {
            isCached: !0
        });
        const r = t.data, s = r.composerId;
        if (!this._fileWatchers.has(e.toString())) {
            const o = this._composerFileService.watch({
                uri: e,
                composerData: r
            });
            this._fileWatchers.set(e.toString(), o);
        }
        if (i) {
            const o = this._uriToCachedCodeBlocksQueue.get(e.toString()) ?? [];
            this._uriToCachedCodeBlocksQueue.set(e.toString(), [
                ...o.filter((c)=>c.composerId !== s || c.codeblockId !== n),
                {
                    composerId: s,
                    codeblockId: n
                }
            ]);
            const l = (this._uriToCachedCodeBlocks.get(e.toString()) ?? []).filter((c)=>c.composerId !== s || c.codeblockId !== n);
            this._uriToCachedCodeBlocks.set(e.toString(), l);
        } else {
            const o = this._uriToCachedCodeBlocks.get(e.toString()) ?? [];
            this._uriToCachedCodeBlocks.set(e.toString(), [
                ...o.filter((a)=>a.composerId !== s || a.codeblockId !== n),
                {
                    composerId: s,
                    codeblockId: n
                }
            ]);
        }
    }
    markUriAsOutdated(t, e) {
        if (!this._uriToCachedCodeBlocks.has(t.toString()) || !this._fileWatchers.has(t.toString())) return;
        const n = this._uriToCachedCodeBlocks.get(t.toString()) ?? [];
        for (const { composerId: i, codeblockId: r } of n){
            const s = this._composerDataService.getHandleIfLoaded(i);
            if (!s) continue;
            const o = this.getComposerCodeBlock(s, t, r);
            o && o.isNotApplied ? this._composerDataService.updateComposerDataSetStore(s, (a)=>a("codeBlockData", t.toString(), r, "diffId", void 0)) : (this.setCodeBlockStatus(s, t, r, "outdated"), this.updateComposerCodeBlock(s, t, r, {
                isCached: !1
            }));
        }
        e || this._fileWatchers.deleteAndDispose(t.toString()), this._uriToCachedCodeBlocks.delete(t.toString()), this._uriToCachedCodeBlocksQueue.delete(t.toString());
    }
    isCodeBlockRegisteredAsCached(t, e, n) {
        const i = t.data.composerId, r = !!this._uriToCachedCodeBlocks.get(e.toString())?.some((o)=>o.codeblockId === n && o.composerId === i) || !!this._uriToCachedCodeBlocksQueue.get(e.toString())?.some((o)=>o.codeblockId === n && o.composerId === i), s = this.getComposerCodeBlock(t, e, n)?.isCached;
        return (r && s) ?? !1;
    }
    getCodeBlockStatus(t, e, n) {
        const i = t.data;
        if (!i) return "none";
        const r = i?.codeBlockData[e.toString()];
        if (!r) return "none";
        const s = r[n];
        return s ? s.status : "none";
    }
    setCodeBlockStatus(t, e, n, i) {
        const r = t.data, s = this.getComposerCodeBlock(t, e, n);
        if (s && (this.updateComposerCodeBlock(t, e, n, {
            status: i
        }), s.fromSubagentCodeBlockInfo)) {
            const o = this._composerDataService.getHandleIfLoaded(s.fromSubagentCodeBlockInfo.composerId);
            o && this.updateComposerCodeBlock(o, s.uri, s.fromSubagentCodeBlockInfo.codeblockId, {
                status: i
            });
        }
    }
    setCodeBlockStatusIncludingPreviouslyChained(t, e, n, i) {
        const r = this.getComposerCodeBlock(t, e, n);
        if (r && (this.setCodeBlockStatus(t, e, n, i), r.chainedInfo)) {
            const s = new Set([
                n
            ]);
            let o = r.chainedInfo;
            for(; o;){
                const a = o.chainedFromCodeblockId, l = o.composerId || t.data.composerId, c = l ? this._composerDataService.getHandleIfLoaded(l) : t;
                if (!c) break;
                const u = this.getComposerCodeBlock(c, e, a);
                if (!u || s.has(a)) break;
                s.add(a), this.setCodeBlockStatus(c, e, a, i), o = u.chainedInfo || void 0;
            }
        }
    }
    getCodeBlocksOfStatuses(t, e) {
        const n = t.data;
        if (!n) return [];
        const i = n.codeBlockData, r = Array.isArray(e) ? e : [
            e
        ], s = [];
        for (const o of Object.keys(i)){
            const a = i[o];
            for (const l of Object.keys(a)){
                const c = a[l];
                r.includes(c.status) && s.push(c);
            }
        }
        return s;
    }
    setGeneratingCodeBlocksToAborted(t) {
        const e = this.getCodeBlocksOfStatuses(t, "generating");
        for (const i of e)this.setCodeBlockStatus(t, i.uri, i.codeblockId, "aborted");
        const n = t.data;
        if (n) for (const i of Object.keys(n.conversationMap)){
            const r = n.conversationMap[i];
            if (!(!r || r.type !== bs.AI)) for (const s of r.codeBlocks ?? [])s.isGenerating === !0 && this._composerDataService.updateComposerDataSetStore(t, (o)=>o("conversationMap", i, "codeBlocks", (a)=>a.codeBlockIdx === s.codeBlockIdx && a.unregistered === !0, "isGenerating", !1));
        }
    }
    getLastCreatedCodeBlockId(t, e) {
        const n = t.data;
        if (!n) return;
        const i = n.codeBlockData[e.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.createdAt !== void 0 && a.createdAt > r && (r = a.createdAt, s = o);
        }
        return s;
    }
    getLastAppliedCodeBlockId(t, e) {
        const n = t.data;
        if (!n) return;
        const i = n.codeBlockData[e.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.lastAppliedAt !== void 0 && a.lastAppliedAt > r && (r = a.lastAppliedAt, s = o);
        }
        return s;
    }
    getLastAppliedCodeBlock(t, e) {
        const n = this.getLastAppliedCodeBlockId(t, e);
        if (n) return this.getComposerCodeBlock(t, e, n);
    }
    getLastAcceptedCodeBlock(t, e) {
        const n = t.data;
        if (!n) return;
        const i = n.codeBlockData[e.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.status === "accepted" && a.lastAppliedAt !== void 0 && a.lastAppliedAt > r && (r = a.lastAppliedAt, s = o);
        }
        if (s) return this.getComposerCodeBlock(t, e, s);
    }
    getLastAppliedCodeBlocks(t) {
        const e = t.data;
        if (!e) return [];
        const n = [];
        return Object.keys(e.codeBlockData ?? {}).forEach((i)=>{
            const r = rt.parse(i), s = this.getLastAppliedCodeBlock(t, r);
            s && n.push(s);
        }), n;
    }
    getAllCachedCodeBlocks(t) {
        const e = t.data;
        if (!e) throw Error("[composer] composer doesn't exist");
        const { codeBlockData: n } = e, i = [];
        for (const r of Object.keys(n)){
            const s = n[r];
            for (const o of Object.keys(s))i.push(s[o]);
        }
        return i.filter(({ isCached: r })=>r === !0);
    }
    updateCodeBlockLastAppliedAt(t, e, n) {
        if (!t.data) return;
        const r = e.toString();
        this._composerDataService.updateComposerDataSetStore(t, (s)=>s("codeBlockData", r, n, "lastAppliedAt", Date.now()));
    }
    _getRelevantComposerIds(t) {
        if (this._composerDataService.getComposerDataVersion(t) === void 0 || this._composerDataService.getHandleIfLoaded(t.composerId)?.data !== t.data) return this._computeRelevantComposerIds(t);
        const e = this._composerDataService.loadedComposers.getSubagentStructureVersion();
        (this._relevantIdsCache === void 0 || this._relevantIdsCache.version !== e) && (this._relevantIdsCache = {
            version: e,
            byRoot: new Map
        });
        const n = this._relevantIdsCache.byRoot.get(t.composerId);
        if (n !== void 0) return n;
        const i = this._computeRelevantComposerIds(t);
        return this._relevantIdsCache.byRoot.set(t.composerId, i), i;
    }
    _computeRelevantComposerIds(t) {
        const e = new Set, n = [
            t.data.composerId
        ];
        for(; n.length > 0;){
            const i = n.pop();
            if (e.has(i)) continue;
            e.add(i);
            const r = i === t.data.composerId ? t : this._composerDataService.getHandleIfLoaded(i);
            if (r) for (const s of r.data.subagentComposerIds ?? [])e.has(s) || n.push(s);
        }
        return e;
    }
    getRelevantComposerIds(t) {
        return this._getRelevantComposerIds(t);
    }
    _isExcludedUri(t) {
        if (LTi(t, this._workspaceContextService)) return !0;
        const e = this.userPlansDir;
        return !!(e && uX(t, e) || Kst(t.toString()));
    }
    hasPendingDiffs(t) {
        const e = this._getRelevantComposerIds(t);
        return this._diffChangeSourceRegistry.getDescriptors().some((n)=>{
            const i = n.metadata?.composerId;
            return i !== void 0 && e.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getInlineDiff(t, e) {
        const n = this._getRelevantComposerIds(t);
        return this._inlineDiffService.inlineDiffs.nonReactive().find((i)=>{
            if (i.uri.toString() !== e.toString()) return !1;
            const r = i.composerMetadata?.composerId;
            return !(!r || !n.has(r));
        });
    }
    getAllInlineDiffs(t) {
        const e = this._getRelevantComposerIds(t);
        return this._inlineDiffService.inlineDiffs.nonReactive().filter((n)=>{
            const i = n.composerMetadata?.composerId;
            return i !== void 0 && e.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getAllPendingDiffDescriptors(t) {
        const e = this._getRelevantComposerIds(t);
        return this._diffChangeSourceRegistry.getDescriptors().filter((n)=>{
            const i = n.metadata?.composerId;
            return !!i && e.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getCodeBlockFileUris(t) {
        const e = t.data.codeBlockData;
        return Object.keys(e).filter((n)=>{
            const i = e[n];
            if (!i || Object.keys(i).length === 0) return !1;
            try {
                return !this._isExcludedUri(rt.parse(n));
            } catch  {
                return !0;
            }
        });
    }
    getInlineDiffForChaining(t) {
        const e = t.toString();
        return this._inlineDiffService.inlineDiffs.nonReactive().find((n)=>n.uri.toString() === e && n.composerMetadata?.composerId !== void 0);
    }
    doesFileHaveInlineDiff(t, e) {
        return !!this.getInlineDiff(t, e);
    }
    doesFileHaveChanges(t, e) {
        const n = this.getLastAppliedCodeBlock(t, e);
        return n != null && n.diffId !== void 0;
    }
    getUrisOfCodeblocksWithDiffsInLastAiBubbles(t, e) {
        if (!t.data) return [];
        const i = this._composerDataService.getLastAiBubbles(t, {
            humanBubbleId: e
        });
        return i.length ? this.getUrisOfCodeblocksWithDiffsInAiBubbles(t, i).map((r)=>r.uri) : [];
    }
    getUrisOfCodeblocksWithDiffsInAiBubbles(t, e) {
        if (!e.length) return [];
        const n = new Map;
        for (const i of e)i.codeBlocks?.forEach((r)=>{
            if (r.uri && !n.has(r.uri.toString())) {
                const s = this.getComposerCodeBlock(t, r.uri, r.codeblockId);
                s?.diffId !== void 0 && s.lastAppliedAt !== void 0 && n.set(r.uri.toString(), i.bubbleId);
            }
        });
        return Array.from(n.entries()).map(([i, r])=>({
                uri: rt.parse(i),
                firstBubbleId: r
            }));
    }
    changeCodeBlockUri(t, e, n, i) {
        const r = t.data;
        if (!r) throw new Error("[composer] No composer found for the given ID");
        const s = e.toString(), o = n.toString(), a = this.getComposerCodeBlock(t, e, i);
        if (!a) return this._composerLogService.error("[composer] No codeblock found for the given URI and codeblockId", e, i), "";
        if (r.codeBlockData[s]?.[i]) {
            const c = {
                ...r.codeBlockData[s][i],
                uri: n
            };
            Object.keys(r.codeBlockData[s]).filter((d)=>d !== i).length === 0 ? this._composerDataService.updateComposerDataSetStore(t, (d)=>{
                d("codeBlockData", s, void 0);
            }) : this._composerDataService.updateComposerDataSetStore(t, (d)=>{
                d("codeBlockData", s, i, void 0);
            }), this._composerDataService.updateComposerDataSetStore(t, (d)=>d("codeBlockData", o, (h = {})=>({
                        ...h,
                        [i]: c
                    })));
        }
        return this._composerDataService.updateComposerDataSetStore(t, (l)=>l("conversationMap", a.bubbleId, "codeBlocks", (c)=>!c.unregistered && c.uri?.toString() === s && c.codeblockId === i, (c)=>({
                    ...c,
                    uri: n
                }))), i;
    }
    async computeLineDiffs(t, e, n, i, r) {
        return RTi({
            traceParent: r,
            name: "ComposerCodeBlockService.computeLineDiffs.slow",
            thresholdMs: $tg,
            operation: async ()=>{
                const s = await this.getCodeBlockV0ModelLines(t, e);
                if (!s) return [];
                const o = await this.computeLinesDiffWithSemaphore({
                    first: s,
                    second: n,
                    options: {
                        ignoreTrimWhitespace: i?.forStats === !0,
                        computeMoves: !1,
                        maxComputationTimeMs: 2e3,
                        ...jtg
                    }
                });
                let a = o.changes;
                return o.hitTimeout && (this._composerLogService.warn(`[composer] Diff computation timed out for ${e.fsPath}. File has ${s.length} original lines and ${n.length} new lines. Treating entire file as changed.`), a = [
                    new I7(new wd(1, s.length + 1), new wd(1, n.length + 1), void 0)
                ]), a.map((c)=>({
                        original: c.original,
                        modified: n.slice(c.modified.startLineNumber - 1, c.modified.endLineNumberExclusive - 1)
                    }));
            }
        });
    }
    static _emptySideLinesDiff(t, e) {
        return t.length === 0 && e.length === 0 ? new OQ([], [], !1) : t.length === 0 ? new OQ([
            new I7(new wd(1, 1), new wd(1, e.length + 1), void 0)
        ], [], !1) : new OQ([
            new I7(new wd(1, t.length + 1), new wd(1, 1), void 0)
        ], [], !1);
    }
    async computeLinesDiffWithSemaphore({ first: t, second: e, options: n }) {
        return this._composerDiffSemaphore.withSemaphore(async ()=>{
            const i = Array.isArray(t) ? t : ww(t), r = Array.isArray(e) ? e : ww(e), s = i.join(`
`), o = r.join(`
`), a = await Gmr(s), l = await Gmr(o), c = JSON.stringify({
                firstSha1: a,
                secondSha1: l,
                firstLineCount: i.length,
                secondLineCount: r.length
            }), u = this._composerDiffCache.get(c);
            if (u) return u;
            const d = new Promise((g)=>{
                setTimeout(()=>{
                    g(new OQ([], [], !0));
                }, n.maxComputationTimeMs);
            }), h = i.length === 0 || r.length === 0 ? Promise.resolve(lC._emptySideLinesDiff(i, r)) : this._editorWorkerService.computeLinesDiffAsStrings(s, o, `
`, n), p = await Promise.race([
                h,
                d
            ]);
            return p.hitTimeout ? this._metricsService.increment({
                stat: "composer.computeLinesDiff.timedOut"
            }) : this._composerDiffCache.set(c, p), p;
        });
    }
    async getCodeBlockLinesByDiff(t, e, n) {
        if (!t.data) return null;
        const r = await this.getCodeBlockV0ModelLines(t, e);
        return ks(()=>n.length === 0 ? r ?? [] : this.applyDiffToLines(r ?? [], n));
    }
    async getCodeBlockV0ModelLines(t, e) {
        const n = t.data;
        if (!n) return null;
        const i = e.toString();
        if (!n.originalFileStates[i]) return null;
        const r = await this._composerDataService.getOrLoadOfsContent(n.composerId, i);
        return r !== void 0 ? ww(r) : null;
    }
    async getCodeBlockOriginalModelLines(t, e, n, i) {
        const r = t.data;
        if (!r) return null;
        const s = this.getComposerCodeBlock(t, e, n);
        if (!s || !s.diffId) return null;
        if (i?.shouldChain && s.chainedInfo) {
            const a = s.chainedInfo.composerId || t.data.composerId, l = a ? this._composerDataService.getHandleIfLoaded(a) : t;
            if (!l) return null;
            const c = this.getComposerCodeBlock(l, e, s.chainedInfo.chainedFromCodeblockId);
            if (!c || !c.diffId) return null;
            const u = await this._composerCodeBlockDiffStorageService.retrieveDiff(a, c.diffId);
            return u ? await this.getCodeBlockLinesByDiff(l, e, u.originalModelDiffWrtV0) : null;
        }
        const o = await this._composerCodeBlockDiffStorageService.retrieveDiff(r.composerId, s.diffId);
        return o ? await this.getCodeBlockLinesByDiff(t, e, o.originalModelDiffWrtV0) : null;
    }
    async getCodeBlockNewModelLines(t, e, n) {
        const i = t.data;
        if (!i) return null;
        const r = this.getComposerCodeBlock(t, e, n);
        if (!r || !r.diffId) return null;
        const s = await this._composerCodeBlockDiffStorageService.retrieveDiff(i.composerId, r.diffId);
        return s ? await this.getCodeBlockLinesByDiff(t, e, s.newModelDiffWrtV0) : null;
    }
    applyDiffToLines(t, e) {
        const n = [];
        let i = 0;
        for(let r = 0; r < t.length; r++){
            const s = t[r];
            if (i < e.length) {
                const { original: o, modified: a } = e[i];
                if (r === o.startLineNumber - 1 && (n.push(...a), i++, o.endLineNumberExclusive !== o.startLineNumber)) {
                    r += o.endLineNumberExclusive - o.startLineNumber - 1;
                    continue;
                }
            }
            n.push(s);
        }
        for(; i < e.length;){
            const { original: r, modified: s } = e[i];
            n.push(...s), i++;
        }
        return n;
    }
    async registerNewCodeBlock(t, e, n, i, r) {
        const s = t.data;
        if (!s) throw new Error("[composer] No composer found for the given ID");
        const o = this._composerDataService.getLoadedConversation(t), a = r?.bubbleId ? o.findIndex((_)=>_.bubbleId === r.bubbleId) : o.length - 1, l = o.at(a), c = r?.bubbleId ?? l?.bubbleId;
        if (!c) throw new Error("[composer] No AI message found");
        const u = l && l.codeBlocks?.find((_)=>_.codeBlockIdx === i)?.unregistered === !0, d = e.toString(), h = Ai(), p = {
            _v: a5a,
            bubbleId: c,
            codeBlockIdx: i,
            uri: e,
            codeblockId: h,
            status: r?.status ?? "none",
            isNotApplied: r?.isNotApplied,
            languageId: r?.languageId,
            chainedInfo: r?.chainedInfo,
            fromSubagentCodeBlockInfo: r?.fromSubagentCodeBlockInfo,
            codeBlockDisplayPreference: r?.isNotApplied ? "expanded" : "collapsed",
            createdAt: Date.now(),
            composerChatGenerationUuid: s.chatGenerationUUID
        };
        this._composerDataService.updateComposerDataSetStore(t, (_)=>_("codeBlockData", d, (b)=>({
                    ...b || {},
                    [h]: p
                }))), l && (u ? this._composerDataService.updateComposerDataSetStore(t, (_)=>_("conversationMap", c, "codeBlocks", (b)=>b.codeBlockIdx === i, {
                uri: e,
                codeblockId: h,
                codeBlockIdx: i,
                unregistered: !1,
                content: n,
                searchReplace: r?.searchReplace
            })) : this.addNewCodeBlockToBubble(t, c, i, {
            uri: e,
            codeblockId: h,
            codeBlockIdx: i,
            content: n,
            languageId: r?.languageId,
            searchReplace: r?.searchReplace
        }));
        const g = s.codeBlockData[d];
        if ((!g || Object.keys(g).length === 1) && s.originalFileStates[d] === void 0) {
            const _ = await this.getFileContent(e, t) ?? "", b = await this._composerFileService.exists({
                uri: e,
                composerData: s
            }), y = [];
            if (!b) {
                let S = e, k = Mc(S);
                for(; !gu(S, k) && !await this._composerFileService.exists({
                    uri: k,
                    composerData: s
                });)y.push(k), S = k, k = Mc(S);
                y.reverse();
            }
            if (this._composerDataService.updateComposerDataSetStore(t, (S)=>S("originalFileStates", d, {
                    content: _,
                    firstEditBubbleId: c,
                    isNewlyCreated: !b,
                    newlyCreatedFolders: y
                })), e.scheme === Ot.vscodeNotebookCell) try {
                const S = Tdn(e);
                if (s.originalFileStates[S.toString()] === void 0) {
                    const k = await this.getFileContent(S, t) ?? "", C = await this._composerFileService.exists({
                        uri: S,
                        composerData: s
                    });
                    this._composerDataService.updateComposerDataSetStore(t, (T)=>T("originalFileStates", S.toString(), {
                            content: k,
                            firstEditBubbleId: c,
                            isNewlyCreated: !C,
                            newlyCreatedFolders: y
                        }));
                }
            } catch  {
                this._composerLogService.error(`[registerNewCodeBlock] Failed to process notebook cell URI: ${e.toString()}`);
            }
        }
        return this._composerEventService.fireDidRegisterNewCodeBlock({
            composerId: s.composerId,
            uri: e,
            codeblockId: h,
            codeBlockIdx: i,
            messageIndex: a
        }), p;
    }
    async getFileContent(t, e) {
        const n = e.data;
        if (!await this._composerFileService.exists({
            uri: t,
            composerData: n
        })) return null;
        let r;
        try {
            const s = e.data;
            return r = await this.composerTextModelService.createModelReference(t, s, !0), r.object.textEditorModel.getValue();
        } catch (s) {
            return this._composerLogService.error("[composer] error getting content of file", t, s), null;
        } finally{
            r?.dispose();
        }
    }
    addNewCodeBlockToBubble(t, e, n, i) {
        this._composerDataService.updateComposerDataSetStore(t, (r)=>r("conversationMap", e, "codeBlocks", (s)=>{
                const o = [
                    ...s || []
                ], a = o.findIndex((c)=>c.codeBlockIdx > n), l = {
                    ...i,
                    codeBlockIdx: n
                };
                return a === -1 ? o.push(l) : o.splice(a, 0, l), o;
            }));
    }
    getChainedOriginalCodeBlock(t, e, n) {
        if (!t.data) return null;
        const r = this.getComposerCodeBlock(t, e, n);
        if (!r || !r.chainedInfo) return null;
        let s = r.chainedInfo, o;
        const a = new Set([
            n
        ]);
        for(; s;){
            const l = s.chainedFromCodeblockId, c = s.composerId || t.data.composerId, u = c ? this._composerDataService.getHandleIfLoaded(c) : t;
            if (!u || (o = this.getComposerCodeBlock(u, e, l), a.has(l))) break;
            a.add(l), s = o?.chainedInfo || void 0;
        }
        return o ?? null;
    }
    async getCodeBlockDiffStats(t, e) {
        const n = t.data;
        if (!n) return {
            added: 0,
            removed: 0
        };
        let i = e.toString();
        n.gitWorktree && (i = aat(e, n, this._workspaceContextService).toString());
        const r = n.codeBlockData[i];
        if (!r || Object.keys(r).length === 0) return this._composerLogService.warn(`[composer] No code blocks found for URI: ${i} in composer ${t.composerId}`), {
            added: 0,
            removed: 0
        };
        const s = this.getLastAppliedCodeBlock(t, e);
        if (!s) return {
            added: 0,
            removed: 0
        };
        const o = await this.getCodeBlockV0ModelLines(t, e), a = await this.getCodeBlockNewModelLines(t, e, s.codeblockId);
        if (!o || !a) return {
            added: 0,
            removed: 0
        };
        if (o.length === a.length) {
            let p = !1;
            for(let g = 0; g < o.length; g++)if (o[g] !== a[g]) {
                p = !0;
                break;
            }
            if (!p) return {
                added: 0,
                removed: 0
            };
        }
        const l = await this.computeLineDiffs(t, e, a, {
            forStats: !0
        }), c = l.reduce((p, g)=>p + g.modified.length + (g.original.endLineNumberExclusive - g.original.startLineNumber), 0), u = o.length + a.length;
        c > u * .8 && this._composerLogService.warn(`[composer] Large diff detected for ${e.fsPath} (${c}/${u} lines). This may be due to diff timeout or whitespace issues.`);
        let d = 0, h = 0;
        for (const p of l)d += p.modified.length, h += p.original.endLineNumberExclusive - p.original.startLineNumber;
        return {
            added: d,
            removed: h
        };
    }
    async getPartialInlineDiffFates(t, e, n) {
        const i = t.data;
        if (!i) return;
        const r = this.getComposerCodeBlock(t, e, n);
        return !r || !r.partialInlineDiffFatesId ? void 0 : (await this._composerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates(i.composerId, r.partialInlineDiffFatesId))?.fates;
    }
    getRecentDiffDescriptors(t) {
        return this.getAllPendingDiffDescriptors(t);
    }
}, Re([
    aa("ComposerCodeBlockService.getComposerCodeBlock")
], lC.prototype, "getComposerCodeBlock", null), Re([
    aa("ComposerCodeBlockService.updateComposerCodeBlock")
], lC.prototype, "updateComposerCodeBlock", null), Re([
    aa("ComposerCodeBlockService.updateComposerCodeBlockSetStore")
], lC.prototype, "updateComposerCodeBlockSetStore", null), Re([
    aa("ComposerCodeBlockService.unregisterCachedCodeBlock")
], lC.prototype, "unregisterCachedCodeBlock", null), Re([
    aa("ComposerCodeBlockService.unregisterAllCachedCodeBlocks")
], lC.prototype, "unregisterAllCachedCodeBlocks", null), Re([
    aa("ComposerCodeBlockService.registerCachedCodeBlock")
], lC.prototype, "registerCachedCodeBlock", null), Re([
    aa("ComposerCodeBlockService.markUriAsOutdated")
], lC.prototype, "markUriAsOutdated", null), Re([
    aa("ComposerCodeBlockService.isCodeBlockRegisteredAsCached")
], lC.prototype, "isCodeBlockRegisteredAsCached", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockStatus")
], lC.prototype, "getCodeBlockStatus", null), Re([
    aa("ComposerCodeBlockService.setCodeBlockStatus")
], lC.prototype, "setCodeBlockStatus", null), Re([
    aa("ComposerCodeBlockService.setCodeBlockStatusIncludingPreviouslyChained")
], lC.prototype, "setCodeBlockStatusIncludingPreviouslyChained", null), Re([
    aa("ComposerCodeBlockService.getCodeBlocksOfStatuses")
], lC.prototype, "getCodeBlocksOfStatuses", null), Re([
    aa("ComposerCodeBlockService.setGeneratingCodeBlocksToAborted")
], lC.prototype, "setGeneratingCodeBlocksToAborted", null), Re([
    aa("ComposerCodeBlockService.getLastCreatedCodeBlockId")
], lC.prototype, "getLastCreatedCodeBlockId", null), Re([
    aa("ComposerCodeBlockService.getLastAppliedCodeBlockId")
], lC.prototype, "getLastAppliedCodeBlockId", null), Re([
    aa("ComposerCodeBlockService.getLastAppliedCodeBlock")
], lC.prototype, "getLastAppliedCodeBlock", null), Re([
    aa("ComposerCodeBlockService.getLastAcceptedCodeBlock")
], lC.prototype, "getLastAcceptedCodeBlock", null), Re([
    aa("ComposerCodeBlockService.getLastAppliedCodeBlocks")
], lC.prototype, "getLastAppliedCodeBlocks", null), Re([
    aa("ComposerCodeBlockService.getAllCachedCodeBlocks")
], lC.prototype, "getAllCachedCodeBlocks", null), Re([
    aa("ComposerCodeBlockService.updateCodeBlockLastAppliedAt")
], lC.prototype, "updateCodeBlockLastAppliedAt", null), Re([
    aa("ComposerCodeBlockService.getInlineDiff")
], lC.prototype, "getInlineDiff", null), Re([
    aa("ComposerCodeBlockService.getAllInlineDiffs")
], lC.prototype, "getAllInlineDiffs", null), Re([
    aa("ComposerCodeBlockService.getAllPendingDiffDescriptors")
], lC.prototype, "getAllPendingDiffDescriptors", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockFileUris")
], lC.prototype, "getCodeBlockFileUris", null), Re([
    aa("ComposerCodeBlockService.getInlineDiffForChaining")
], lC.prototype, "getInlineDiffForChaining", null), Re([
    aa("ComposerCodeBlockService.doesFileHaveInlineDiff")
], lC.prototype, "doesFileHaveInlineDiff", null), Re([
    aa("ComposerCodeBlockService.doesFileHaveChanges")
], lC.prototype, "doesFileHaveChanges", null), Re([
    aa("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInLastAiBubbles")
], lC.prototype, "getUrisOfCodeblocksWithDiffsInLastAiBubbles", null), Re([
    aa("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInAiBubbles")
], lC.prototype, "getUrisOfCodeblocksWithDiffsInAiBubbles", null), Re([
    aa("ComposerCodeBlockService.changeCodeBlockUri")
], lC.prototype, "changeCodeBlockUri", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockLinesByDiff")
], lC.prototype, "getCodeBlockLinesByDiff", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockV0ModelLines")
], lC.prototype, "getCodeBlockV0ModelLines", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockOriginalModelLines")
], lC.prototype, "getCodeBlockOriginalModelLines", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockNewModelLines")
], lC.prototype, "getCodeBlockNewModelLines", null), Re([
    aa("ComposerCodeBlockService.registerNewCodeBlock")
], lC.prototype, "registerNewCodeBlock", null), Re([
    aa("ComposerCodeBlockService.getChainedOriginalCodeBlock")
], lC.prototype, "getChainedOriginalCodeBlock", null), Re([
    aa("ComposerCodeBlockService.getCodeBlockDiffStats")
], lC.prototype, "getCodeBlockDiffStats", null), Re([
    aa("ComposerCodeBlockService.getPartialInlineDiffFates")
], lC.prototype, "getPartialInlineDiffFates", null), Re([
    aa("ComposerCodeBlockService.getRecentDiffDescriptors")
], lC.prototype, "getRecentDiffDescriptors", null), lC = Re([
    Zpe(0, sa),
    Zpe(1, HCe),
    Zpe(2, Fb),
    Zpe(3, $0t),
    Zpe(4, Tis),
    Zpe(5, FD),
    Zpe(6, Uh),
    Zpe(7, no),
    Zpe(8, dG),
    Zpe(9, UO),
    Zpe(10, mX),
    Zpe(11, yr),
    Zpe(12, Rd),
    Zpe(13, w1)
], lC), bn(Kbe, lC, 1);

}
