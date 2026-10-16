import { Nse, qj } from "./A3u.js";
import { uJe } from "./De_3.js";
import { Ps, Se, po, ry, we, xNt } from "./HVr.js";
import { ie } from "./actions_2.js";
import { Z4e, ub } from "./async.cursor.js";
import { PFn, n8e, xFn } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { vJe, ySt } from "./composerCodeBlockDiffStorageService.js";
import { OSo, aXi } from "./composerCodeBlockPartialInlineDiffFatesStorageService.js";
import { NKs, Wf } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { pq, rte } from "./composerFileService.js";
import { lb, n0 } from "./composerLogService.js";
import { bSo } from "./composerSlowSpanUtils.js";
import { H_e, YPe } from "./composerTextModelService.js";
import { hoe } from "./composerUriUtils.js";
import { i8e } from "./debugLogFileUtils.js";
import { D$, p_e } from "./diffChangeSource.js";
import { YC, kM } from "./editorWorker.js";
import { Pn } from "./extensions.js";
import { T_ } from "./hash.js";
import { CN, zM } from "./inlineDiffService.js";
import { Ze } from "./instantiation.js";
import { VMe } from "./internalAgentToolsFileUtils.js";
import { Vl, hA } from "./lineRange.js";
import { Ivn, SW } from "./linesDiffComputer.js";
import { ag, oc } from "./map.js";
import { Cp, vp } from "./metricsService.js";
import { gt, li } from "./network.js";
import { fu, zl } from "./pathService.js";
import { eF } from "./planFileUtils.js";
import { UT, egi, gM, lr, mn, qn, vn, zs } from "./qIc.js";
import { C3, Ple } from "./rangeMapping.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Ac, Li, ml } from "./resources.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
var BSo, USo, ste, Zwt, Qwt, Sfh, kfh, poe, wk;
export { BSo, Qwt, Sfh, USo, Zwt, kfh, poe, ste, wk };
var __wakaru_zde_initialized = false;
export function zde() {
if (__wakaru_zde_initialized) return;
__wakaru_zde_initialized = true;
"use strict";
x(), qn(), Hu(), ub(), T_(), Se(), oc(), li(), Li(), Ps(), Qt(), Js(), p_e(), CN(), hA(), Ivn(), Ple(), kM(), Pn(), Ze(), Ha(), yv(), ci(), Cp(), fu(), ySt(), OSo(), Wf(), nl(), yC(), rte(), YPe(), hoe(), i8e(), VMe(), eF(), bSo(), n0(), BSo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), USo = (e)=>{
    throw TypeError(e);
}, ste = (e, t)=>(n, i)=>t(n, i, e), Zwt = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && USo("Object expected");
        var i, r;
        n && (i = t[BSo("asyncDispose")]), i === void 0 && (i = t[BSo("dispose")], n && (r = i)), typeof i != "function" && USo("Object not disposable"), r && (i = function() {
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
}, Qwt = (e, t, n)=>{
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
}, Sfh = {
    shouldGracefullyFallBackOnTimeout: !0
}, kfh = 1e3, poe = vn("composerCodeBlockService"), wk = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(), this._reactiveStorageService = e, this.composerTextModelService = t, this._composerEventService = n, this._composerCodeBlockDiffStorageService = i, this._composerCodeBlockPartialInlineDiffFatesStorageService = r, this._editorWorkerService = s, this._metricsService = o, this._composerDataService = a, this._composerFileService = c, this._inlineDiffService = l, this._diffChangeSourceRegistry = u, this._workspaceContextService = h, this._pathService = p, this._composerLogService = g, this._composerDiffCache = new ag(50), this._composerDiffSemaphore = new Z4e(5), this._fileWatchers = this._register(new po), this._uriToCachedCodeBlocks = new Map, this._uriToCachedCodeBlocksQueue = new Map, this._getUserPlansDirAsync(), this._register(this._composerEventService.onDidFilesChange((A)=>{
            const R = Array.from(new Set([
                ...this._uriToCachedCodeBlocks.keys(),
                ...this._uriToCachedCodeBlocksQueue.keys()
            ]));
            for (const D of R){
                const P = Ee.parse(D);
                if (A.contains(P)) {
                    const N = this._uriToCachedCodeBlocksQueue.get(P.toString()) ?? [];
                    this.markUriAsOutdated(P, N.length > 0), N.length > 0 && (this._uriToCachedCodeBlocks.set(P.toString(), N), this._uriToCachedCodeBlocksQueue.delete(P.toString()));
                }
            }
        })), this._register(this._inlineDiffService.onDidAcceptDiff((A)=>{
            this._storePartialInlineDiffFates(A);
        })), this._register(this._inlineDiffService.onDidRejectDiff((A)=>{
            this._storePartialInlineDiffFates(A);
        }));
        const f = (A, R, D)=>{
            var P = [];
            try {
                const F = Zwt(P, UT("ComposerCodeBlockService.abortAndRemoveApplyGenerationUUID"));
                this.getComposerCodeBlock(A, R, D)?.applyGenerationUUID && this.updateComposerCodeBlock(A, R, D, {
                    applyGenerationUUID: void 0
                });
            } catch (F) {
                var N = F, O = !0;
            } finally{
                Qwt(P, N, O);
            }
        }, v = (A)=>{
            var R = [];
            try {
                const N = Zwt(R, UT("ComposerCodeBlockService.handleDiffRemoval"));
                if (!A.composerId) return;
                A.accepted ? y(A.diffInfo, !1, N) : b(A.diffInfo, !1, N);
            } catch (N) {
                var D = N, P = !0;
            } finally{
                Qwt(R, D, P);
            }
        }, b = (A, R = !0, D)=>{
            var P = [];
            try {
                const F = Zwt(P, D ? gM(D, "ComposerCodeBlockService.handleDiffReject") : UT("ComposerCodeBlockService.handleDiffReject")), { composerId: H, codeblockId: $ } = A.composerMetadata ?? {};
                if (!H) return;
                const W = this._composerDataService.getHandleIfLoaded(H);
                if (!W) return;
                const G = this._composerDataService.getComposerData(W);
                if (!G) return;
                let q = A.uri;
                if (G.isNAL === !0 && A.uri.scheme === gt.vscodeNotebookCell) try {
                    q = xNt(A.uri);
                } catch  {
                    q = A.uri;
                }
                $ !== void 0 && this.getComposerCodeBlock(W, q, $) && (this.isCodeBlockRegisteredAsCached(W, q, $) || (this.setCodeBlockStatusIncludingPreviouslyChained(W, q, $, "rejected"), f(W, q, $)));
                const z = A.inlineDiff !== void 0 && A.inlineDiff.uri.scheme !== gt.vscodeNotebookCell && A.inlineDiff.originalTextLines.length === 0;
                if (!z) {
                    const X = q.toString();
                    (G.newlyCreatedFiles?.some((Z)=>Z.uri.toString() === X) ?? !1) && this._composerDataService.updateComposerData(W, {
                        newlyCreatedFiles: G.newlyCreatedFiles?.filter((Z)=>Z.uri.toString() !== X) ?? [],
                        newlyCreatedFolders: G.newlyCreatedFolders?.filter((Z)=>!X.startsWith(Z.uri.toString())) ?? []
                    });
                }
                z ? this._composerFileService.deleteNewFileAndMaybeFolder(q, H, G).then((X)=>{
                    !X && R && this._composerFileService.saveFile({
                        uri: q,
                        composerData: G,
                        options: {
                            force: !0
                        }
                    });
                }) : R && this._composerFileService.saveFile({
                    uri: q,
                    composerData: G,
                    options: {
                        force: !0
                    }
                });
            } catch (F) {
                var N = F, O = !0;
            } finally{
                Qwt(P, N, O);
            }
        }, y = (A, R = !0, D)=>{
            var P = [];
            try {
                const F = Zwt(P, D ? gM(D, "ComposerCodeBlockService.handleDiffAccept") : UT("ComposerCodeBlockService.handleDiffAccept")), { composerId: H, codeblockId: $ } = A.composerMetadata ?? {};
                if (!H) return;
                const W = this._composerDataService.getHandleIfLoaded(H);
                if (!W) return;
                const G = W.data;
                if (!G) return;
                let q = A.uri;
                if (G.isNAL === !0 && A.uri.scheme === gt.vscodeNotebookCell) try {
                    q = xNt(A.uri);
                } catch  {
                    q = A.uri;
                }
                if ($ !== void 0) {
                    if (!this.getComposerCodeBlock(W, q, $)) return;
                    this.setCodeBlockStatusIncludingPreviouslyChained(W, q, $, "accepted"), f(W, q, $);
                }
                R && this._composerFileService.saveFile({
                    uri: q,
                    composerData: G,
                    options: {
                        force: !0
                    }
                }), this._composerDataService.updateComposerData(W, {
                    newlyCreatedFiles: G.newlyCreatedFiles?.filter((z)=>z.uri.toString() !== q.toString()) ?? [],
                    newlyCreatedFolders: G.newlyCreatedFolders?.filter((z)=>!q.toString().startsWith(z.uri.toString())) ?? []
                });
            } catch (F) {
                var N = F, O = !0;
            } finally{
                Qwt(P, N, O);
            }
        }, T = (A, R)=>{
            var D = [];
            try {
                const O = Zwt(D, UT("ComposerCodeBlockService.handlePartialDiff")), { composerId: F } = A.diffInfo.composerMetadata ?? {};
                if (!F) return;
                const H = this._composerDataService.getHandleIfLoaded(F);
                if (!(H ? this._composerDataService.getComposerData(H) : void 0)) return;
                const { diffInfo: W, isDone: G } = A;
                G && (R === "accepted" ? y(W, !0, O) : b({
                    ...W,
                    inlineDiff: A.inlineDiff
                }, !0, O));
            } catch (O) {
                var P = O, N = !0;
            } finally{
                Qwt(D, P, N);
            }
        }, E = (A)=>{
            var R = [];
            try {
                const N = Zwt(R, UT("ComposerCodeBlockService.handleAddDiffFromUndoRedo")), { composerId: O, codeblockId: F } = A.composerMetadata ?? {};
                if (!O || F === void 0) return;
                const H = this._composerDataService.getHandleIfLoaded(O);
                if (!H || !H.data || !this.getComposerCodeBlock(H, A.uri, F)) return;
                this.updateComposerCodeBlock(H, A.uri, F, {
                    status: "completed"
                }), this._composerLogService.info(`[composer] Restored diff for ${A.uri.toString()} with codeblockId ${F}`);
            } catch (N) {
                var D = N, P = !0;
            } finally{
                Qwt(R, D, P);
            }
        };
        this._register(this._inlineDiffService.onDidAcceptDiff(y)), this._register(this._inlineDiffService.onDidRejectDiff((A)=>b(A))), this._register(this._inlineDiffService.onDidRemoveDiffFromUndoRedo((A)=>v(A))), this._register(this._inlineDiffService.onDidAddDiffFromUndoRedo((A)=>E(A))), this._register(this._inlineDiffService.onDidAcceptPartialDiff((A)=>T(A, "accepted"))), this._register(this._inlineDiffService.onDidRejectPartialDiff((A)=>T(A, "rejected")));
    }
    get userPlansDir() {
        return this._userPlansDir;
    }
    async _getUserPlansDirAsync() {
        return this._userPlansDir ? this._userPlansDir : (this._userPlansDirPromise || (this._userPlansDirPromise = this._pathService.userHome().then((e)=>(this._userPlansDir = Nse(e), this._userPlansDir))), this._userPlansDirPromise);
    }
    async _storePartialInlineDiffFates(e) {
        const { composerMetadata: t, partialInlineDiffFates: n } = e;
        if (!t || !n) return;
        const { composerId: i, codeblockId: r } = t, s = e.uri, o = await this._composerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates(i, n), a = this._composerDataService.getHandleIfLoaded(i);
        a && r && this.updateComposerCodeBlock(a, s, r, {
            partialInlineDiffFatesId: o
        });
    }
    getComposerCodeBlock(e, t, n) {
        return e.data.codeBlockData?.[t.toString()]?.[n];
    }
    updateComposerCodeBlock(e, t, n, i) {
        if (!e.data.codeBlockData[t.toString()]?.[n]) {
            this._composerLogService.trace("[composer] updateReactiveCodeBlock called for codeblockId that does not exist", t, n);
            return;
        }
        try {
            this._composerDataService.updateComposerDataSetStore(e, (s)=>s("codeBlockData", t.toString(), n, (o)=>({
                        ...o,
                        ...i
                    })));
        } catch  {}
    }
    updateComposerCodeBlockSetStore(e, t, n, i) {
        if (!e.data.codeBlockData[t.toString()]?.[n]) {
            this._composerLogService.trace("[composer] updateComposerCodeBlockSetStore called for codeblockId that does not exist", t, n);
            return;
        }
        try {
            this._composerDataService.updateComposerDataSetStore(e, (o)=>{
                i((...c)=>o("codeBlockData", t.toString(), n, ...c));
            });
        } catch  {}
    }
    shouldCache(e, t) {
        const n = e.data;
        if (t !== void 0) {
            const o = this.getComposerCodeBlock(e, t.uri, t.codeblockId);
            if (o && o.isNotApplied) return !0;
        }
        const i = this._composerDataService.selectedComposerIds.includes(n.composerId), r = this._composerDataService.getRootComposerId(n.composerId), s = this._composerDataService.selectedComposerIds.includes(r);
        return !i && !s;
    }
    unregisterCachedCodeBlock(e, t, n) {
        this.updateComposerCodeBlock(e, t, n, {
            isCached: !1
        });
        const i = e.data.composerId, s = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter((c)=>c.composerId !== i || c.codeblockId !== n), a = (this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? []).filter((c)=>c.composerId !== i || c.codeblockId !== n);
        if (s.length === 0 && a.length === 0) {
            this._fileWatchers.deleteAndDispose(t.toString()), this._uriToCachedCodeBlocks.delete(t.toString()), this._uriToCachedCodeBlocksQueue.delete(t.toString());
            return;
        }
        this._uriToCachedCodeBlocks.set(t.toString(), s), this._uriToCachedCodeBlocksQueue.set(t.toString(), a);
    }
    unregisterAllCachedCodeBlocks(e) {
        const t = this.getAllCachedCodeBlocks(e);
        for (const n of t)this.unregisterCachedCodeBlock(e, n.uri, n.codeblockId);
    }
    registerCachedCodeBlock(e, t, n, i) {
        this.updateComposerCodeBlock(e, t, n, {
            isCached: !0
        });
        const r = e.data, s = r.composerId;
        if (!this._fileWatchers.has(t.toString())) {
            const o = this._composerFileService.watch({
                uri: t,
                composerData: r
            });
            this._fileWatchers.set(t.toString(), o);
        }
        if (i) {
            const o = this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? [];
            this._uriToCachedCodeBlocksQueue.set(t.toString(), [
                ...o.filter((l)=>l.composerId !== s || l.codeblockId !== n),
                {
                    composerId: s,
                    codeblockId: n
                }
            ]);
            const c = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter((l)=>l.composerId !== s || l.codeblockId !== n);
            this._uriToCachedCodeBlocks.set(t.toString(), c);
        } else {
            const o = this._uriToCachedCodeBlocks.get(t.toString()) ?? [];
            this._uriToCachedCodeBlocks.set(t.toString(), [
                ...o.filter((a)=>a.composerId !== s || a.codeblockId !== n),
                {
                    composerId: s,
                    codeblockId: n
                }
            ]);
        }
    }
    markUriAsOutdated(e, t) {
        if (!this._uriToCachedCodeBlocks.has(e.toString()) || !this._fileWatchers.has(e.toString())) return;
        const n = this._uriToCachedCodeBlocks.get(e.toString()) ?? [];
        for (const { composerId: i, codeblockId: r } of n){
            const s = this._composerDataService.getHandleIfLoaded(i);
            if (!s) continue;
            const o = this.getComposerCodeBlock(s, e, r);
            o && o.isNotApplied ? this._composerDataService.updateComposerDataSetStore(s, (a)=>a("codeBlockData", e.toString(), r, "diffId", void 0)) : (this.setCodeBlockStatus(s, e, r, "outdated"), this.updateComposerCodeBlock(s, e, r, {
                isCached: !1
            }));
        }
        t || this._fileWatchers.deleteAndDispose(e.toString()), this._uriToCachedCodeBlocks.delete(e.toString()), this._uriToCachedCodeBlocksQueue.delete(e.toString());
    }
    isCodeBlockRegisteredAsCached(e, t, n) {
        const i = e.data.composerId, r = !!this._uriToCachedCodeBlocks.get(t.toString())?.some((o)=>o.codeblockId === n && o.composerId === i) || !!this._uriToCachedCodeBlocksQueue.get(t.toString())?.some((o)=>o.codeblockId === n && o.composerId === i), s = this.getComposerCodeBlock(e, t, n)?.isCached;
        return (r && s) ?? !1;
    }
    getCodeBlockStatus(e, t, n) {
        const i = e.data;
        if (!i) return "none";
        const r = i?.codeBlockData[t.toString()];
        if (!r) return "none";
        const s = r[n];
        return s ? s.status : "none";
    }
    setCodeBlockStatus(e, t, n, i) {
        const r = e.data, s = this.getComposerCodeBlock(e, t, n);
        if (s && (this.updateComposerCodeBlock(e, t, n, {
            status: i
        }), s.fromSubagentCodeBlockInfo)) {
            const o = this._composerDataService.getHandleIfLoaded(s.fromSubagentCodeBlockInfo.composerId);
            o && this.updateComposerCodeBlock(o, s.uri, s.fromSubagentCodeBlockInfo.codeblockId, {
                status: i
            });
        }
    }
    setCodeBlockStatusIncludingPreviouslyChained(e, t, n, i) {
        const r = this.getComposerCodeBlock(e, t, n);
        if (r && (this.setCodeBlockStatus(e, t, n, i), r.chainedInfo)) {
            const s = new Set([
                n
            ]);
            let o = r.chainedInfo;
            for(; o;){
                const a = o.chainedFromCodeblockId, c = o.composerId || e.data.composerId, l = c ? this._composerDataService.getHandleIfLoaded(c) : e;
                if (!l) break;
                const u = this.getComposerCodeBlock(l, t, a);
                if (!u || s.has(a)) break;
                s.add(a), this.setCodeBlockStatus(l, t, a, i), o = u.chainedInfo || void 0;
            }
        }
    }
    getCodeBlocksOfStatuses(e, t) {
        const n = e.data;
        if (!n) return [];
        const i = n.codeBlockData, r = Array.isArray(t) ? t : [
            t
        ], s = [];
        for (const o of Object.keys(i)){
            const a = i[o];
            for (const c of Object.keys(a)){
                const l = a[c];
                r.includes(l.status) && s.push(l);
            }
        }
        return s;
    }
    setGeneratingCodeBlocksToAborted(e) {
        const t = this.getCodeBlocksOfStatuses(e, "generating");
        for (const i of t)this.setCodeBlockStatus(e, i.uri, i.codeblockId, "aborted");
        const n = e.data;
        if (n) for (const i of Object.keys(n.conversationMap)){
            const r = n.conversationMap[i];
            if (!(!r || r.type !== Tr.AI)) for (const s of r.codeBlocks ?? [])s.isGenerating === !0 && this._composerDataService.updateComposerDataSetStore(e, (o)=>o("conversationMap", i, "codeBlocks", (a)=>a.codeBlockIdx === s.codeBlockIdx && a.unregistered === !0, "isGenerating", !1));
        }
    }
    getLastCreatedCodeBlockId(e, t) {
        const n = e.data;
        if (!n) return;
        const i = n.codeBlockData[t.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.createdAt !== void 0 && a.createdAt > r && (r = a.createdAt, s = o);
        }
        return s;
    }
    getLastAppliedCodeBlockId(e, t) {
        const n = e.data;
        if (!n) return;
        const i = n.codeBlockData[t.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.lastAppliedAt !== void 0 && a.lastAppliedAt > r && (r = a.lastAppliedAt, s = o);
        }
        return s;
    }
    getLastAppliedCodeBlock(e, t) {
        const n = this.getLastAppliedCodeBlockId(e, t);
        if (n) return this.getComposerCodeBlock(e, t, n);
    }
    getLastAcceptedCodeBlock(e, t) {
        const n = e.data;
        if (!n) return;
        const i = n.codeBlockData[t.toString()];
        if (!i || Object.keys(i).length === 0) return;
        let r = -1, s;
        for(const o in i){
            const a = i[o];
            a.status === "accepted" && a.lastAppliedAt !== void 0 && a.lastAppliedAt > r && (r = a.lastAppliedAt, s = o);
        }
        if (s) return this.getComposerCodeBlock(e, t, s);
    }
    getLastAppliedCodeBlocks(e) {
        const t = e.data;
        if (!t) return [];
        const n = [];
        return Object.keys(t.codeBlockData ?? {}).forEach((i)=>{
            const r = Ee.parse(i), s = this.getLastAppliedCodeBlock(e, r);
            s && n.push(s);
        }), n;
    }
    getAllCachedCodeBlocks(e) {
        const t = e.data;
        if (!t) throw Error("[composer] composer doesn't exist");
        const { codeBlockData: n } = t, i = [];
        for (const r of Object.keys(n)){
            const s = n[r];
            for (const o of Object.keys(s))i.push(s[o]);
        }
        return i.filter(({ isCached: r })=>r === !0);
    }
    updateCodeBlockLastAppliedAt(e, t, n) {
        if (!e.data) return;
        const r = t.toString();
        this._composerDataService.updateComposerDataSetStore(e, (s)=>s("codeBlockData", r, n, "lastAppliedAt", Date.now()));
    }
    _getRelevantComposerIds(e) {
        if (this._composerDataService.getComposerDataVersion(e) === void 0 || this._composerDataService.getHandleIfLoaded(e.composerId)?.data !== e.data) return this._computeRelevantComposerIds(e);
        const t = this._composerDataService.loadedComposers.getSubagentStructureVersion();
        (this._relevantIdsCache === void 0 || this._relevantIdsCache.version !== t) && (this._relevantIdsCache = {
            version: t,
            byRoot: new Map
        });
        const n = this._relevantIdsCache.byRoot.get(e.composerId);
        if (n !== void 0) return n;
        const i = this._computeRelevantComposerIds(e);
        return this._relevantIdsCache.byRoot.set(e.composerId, i), i;
    }
    _computeRelevantComposerIds(e) {
        const t = new Set, n = [
            e.data.composerId
        ];
        for(; n.length > 0;){
            const i = n.pop();
            if (t.has(i)) continue;
            t.add(i);
            const r = i === e.data.composerId ? e : this._composerDataService.getHandleIfLoaded(i);
            if (r) for (const s of r.data.subagentComposerIds ?? [])t.has(s) || n.push(s);
        }
        return t;
    }
    getRelevantComposerIds(e) {
        return this._getRelevantComposerIds(e);
    }
    _isExcludedUri(e) {
        if (PFn(e, this._workspaceContextService)) return !0;
        const t = this.userPlansDir;
        return !!(t && qj(e, t) || uJe(e.toString()));
    }
    hasPendingDiffs(e) {
        const t = this._getRelevantComposerIds(e);
        return this._diffChangeSourceRegistry.getDescriptors().some((n)=>{
            const i = n.metadata?.composerId;
            return i !== void 0 && t.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getInlineDiff(e, t) {
        const n = this._getRelevantComposerIds(e);
        return this._inlineDiffService.inlineDiffs.nonReactive().find((i)=>{
            if (i.uri.toString() !== t.toString()) return !1;
            const r = i.composerMetadata?.composerId;
            return !(!r || !n.has(r));
        });
    }
    getAllInlineDiffs(e) {
        const t = this._getRelevantComposerIds(e);
        return this._inlineDiffService.inlineDiffs.nonReactive().filter((n)=>{
            const i = n.composerMetadata?.composerId;
            return i !== void 0 && t.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getAllPendingDiffDescriptors(e) {
        const t = this._getRelevantComposerIds(e);
        return this._diffChangeSourceRegistry.getDescriptors().filter((n)=>{
            const i = n.metadata?.composerId;
            return !!i && t.has(i) && !this._isExcludedUri(n.uri);
        });
    }
    getCodeBlockFileUris(e) {
        const t = e.data.codeBlockData;
        return Object.keys(t).filter((n)=>{
            const i = t[n];
            if (!i || Object.keys(i).length === 0) return !1;
            try {
                return !this._isExcludedUri(Ee.parse(n));
            } catch  {
                return !0;
            }
        });
    }
    getInlineDiffForChaining(e) {
        const t = e.toString();
        return this._inlineDiffService.inlineDiffs.nonReactive().find((n)=>n.uri.toString() === t && n.composerMetadata?.composerId !== void 0);
    }
    doesFileHaveInlineDiff(e, t) {
        return !!this.getInlineDiff(e, t);
    }
    doesFileHaveChanges(e, t) {
        const n = this.getLastAppliedCodeBlock(e, t);
        return n != null && n.diffId !== void 0;
    }
    getUrisOfCodeblocksWithDiffsInLastAiBubbles(e, t) {
        if (!e.data) return [];
        const i = this._composerDataService.getLastAiBubbles(e, {
            humanBubbleId: t
        });
        return i.length ? this.getUrisOfCodeblocksWithDiffsInAiBubbles(e, i).map((r)=>r.uri) : [];
    }
    getUrisOfCodeblocksWithDiffsInAiBubbles(e, t) {
        if (!t.length) return [];
        const n = new Map;
        for (const i of t)i.codeBlocks?.forEach((r)=>{
            if (r.uri && !n.has(r.uri.toString())) {
                const s = this.getComposerCodeBlock(e, r.uri, r.codeblockId);
                s?.diffId !== void 0 && s.lastAppliedAt !== void 0 && n.set(r.uri.toString(), i.bubbleId);
            }
        });
        return Array.from(n.entries()).map(([i, r])=>({
                uri: Ee.parse(i),
                firstBubbleId: r
            }));
    }
    changeCodeBlockUri(e, t, n, i) {
        const r = e.data;
        if (!r) throw new Error("[composer] No composer found for the given ID");
        const s = t.toString(), o = n.toString(), a = this.getComposerCodeBlock(e, t, i);
        if (!a) return this._composerLogService.error("[composer] No codeblock found for the given URI and codeblockId", t, i), "";
        if (r.codeBlockData[s]?.[i]) {
            const l = {
                ...r.codeBlockData[s][i],
                uri: n
            };
            Object.keys(r.codeBlockData[s]).filter((h)=>h !== i).length === 0 ? this._composerDataService.updateComposerDataSetStore(e, (h)=>{
                h("codeBlockData", s, void 0);
            }) : this._composerDataService.updateComposerDataSetStore(e, (h)=>{
                h("codeBlockData", s, i, void 0);
            }), this._composerDataService.updateComposerDataSetStore(e, (h)=>h("codeBlockData", o, (p = {})=>({
                        ...p,
                        [i]: l
                    })));
        }
        return this._composerDataService.updateComposerDataSetStore(e, (c)=>c("conversationMap", a.bubbleId, "codeBlocks", (l)=>!l.unregistered && l.uri?.toString() === s && l.codeblockId === i, (l)=>({
                    ...l,
                    uri: n
                }))), i;
    }
    async computeLineDiffs(e, t, n, i, r) {
        return xFn({
            traceParent: r,
            name: "ComposerCodeBlockService.computeLineDiffs.slow",
            thresholdMs: kfh,
            operation: async ()=>{
                const s = await this.getCodeBlockV0ModelLines(e, t);
                if (!s) return [];
                const o = await this.computeLinesDiffWithSemaphore({
                    first: s,
                    second: n,
                    options: {
                        ignoreTrimWhitespace: i?.forStats === !0,
                        computeMoves: !1,
                        maxComputationTimeMs: 2e3,
                        ...Sfh
                    }
                });
                let a = o.changes;
                return o.hitTimeout && (this._composerLogService.warn(`[composer] Diff computation timed out for ${t.fsPath}. File has ${s.length} original lines and ${n.length} new lines. Treating entire file as changed.`), a = [
                    new C3(new Vl(1, s.length + 1), new Vl(1, n.length + 1), void 0)
                ]), a.map((l)=>({
                        original: l.original,
                        modified: n.slice(l.modified.startLineNumber - 1, l.modified.endLineNumberExclusive - 1)
                    }));
            }
        });
    }
    static _emptySideLinesDiff(e, t) {
        return e.length === 0 && t.length === 0 ? new SW([], [], !1) : e.length === 0 ? new SW([
            new C3(new Vl(1, 1), new Vl(1, t.length + 1), void 0)
        ], [], !1) : new SW([
            new C3(new Vl(1, e.length + 1), new Vl(1, 1), void 0)
        ], [], !1);
    }
    async computeLinesDiffWithSemaphore({ first: e, second: t, options: n }) {
        return this._composerDiffSemaphore.withSemaphore(async ()=>{
            const i = Array.isArray(e) ? e : ry(e), r = Array.isArray(t) ? t : ry(t), s = i.join(`
`), o = r.join(`
`), a = await egi(s), c = await egi(o), l = JSON.stringify({
                firstSha1: a,
                secondSha1: c,
                firstLineCount: i.length,
                secondLineCount: r.length
            }), u = this._composerDiffCache.get(l);
            if (u) return u;
            const h = new Promise((f)=>{
                setTimeout(()=>{
                    f(new SW([], [], !0));
                }, n.maxComputationTimeMs);
            }), p = i.length === 0 || r.length === 0 ? Promise.resolve(wk._emptySideLinesDiff(i, r)) : this._editorWorkerService.computeLinesDiffAsStrings(s, o, `
`, n), g = await Promise.race([
                p,
                h
            ]);
            return g.hitTimeout ? this._metricsService.increment({
                stat: "composer.computeLinesDiff.timedOut"
            }) : this._composerDiffCache.set(l, g), g;
        });
    }
    async getCodeBlockLinesByDiff(e, t, n) {
        if (!e.data) return null;
        const r = await this.getCodeBlockV0ModelLines(e, t);
        return lr(()=>n.length === 0 ? r ?? [] : this.applyDiffToLines(r ?? [], n));
    }
    async getCodeBlockV0ModelLines(e, t) {
        const n = e.data;
        if (!n) return null;
        const i = t.toString();
        if (!n.originalFileStates[i]) return null;
        const r = await this._composerDataService.getOrLoadOfsContent(n.composerId, i);
        return r !== void 0 ? ry(r) : null;
    }
    async getCodeBlockOriginalModelLines(e, t, n, i) {
        const r = e.data;
        if (!r) return null;
        const s = this.getComposerCodeBlock(e, t, n);
        if (!s || !s.diffId) return null;
        if (i?.shouldChain && s.chainedInfo) {
            const a = s.chainedInfo.composerId || e.data.composerId, c = a ? this._composerDataService.getHandleIfLoaded(a) : e;
            if (!c) return null;
            const l = this.getComposerCodeBlock(c, t, s.chainedInfo.chainedFromCodeblockId);
            if (!l || !l.diffId) return null;
            const u = await this._composerCodeBlockDiffStorageService.retrieveDiff(a, l.diffId);
            return u ? await this.getCodeBlockLinesByDiff(c, t, u.originalModelDiffWrtV0) : null;
        }
        const o = await this._composerCodeBlockDiffStorageService.retrieveDiff(r.composerId, s.diffId);
        return o ? await this.getCodeBlockLinesByDiff(e, t, o.originalModelDiffWrtV0) : null;
    }
    async getCodeBlockNewModelLines(e, t, n) {
        const i = e.data;
        if (!i) return null;
        const r = this.getComposerCodeBlock(e, t, n);
        if (!r || !r.diffId) return null;
        const s = await this._composerCodeBlockDiffStorageService.retrieveDiff(i.composerId, r.diffId);
        return s ? await this.getCodeBlockLinesByDiff(e, t, s.newModelDiffWrtV0) : null;
    }
    applyDiffToLines(e, t) {
        const n = [];
        let i = 0;
        for(let r = 0; r < e.length; r++){
            const s = e[r];
            if (i < t.length) {
                const { original: o, modified: a } = t[i];
                if (r === o.startLineNumber - 1 && (n.push(...a), i++, o.endLineNumberExclusive !== o.startLineNumber)) {
                    r += o.endLineNumberExclusive - o.startLineNumber - 1;
                    continue;
                }
            }
            n.push(s);
        }
        for(; i < t.length;){
            const { original: r, modified: s } = t[i];
            n.push(...s), i++;
        }
        return n;
    }
    async registerNewCodeBlock(e, t, n, i, r) {
        const s = e.data;
        if (!s) throw new Error("[composer] No composer found for the given ID");
        const o = this._composerDataService.getLoadedConversation(e), a = r?.bubbleId ? o.findIndex((b)=>b.bubbleId === r.bubbleId) : o.length - 1, c = o.at(a), l = r?.bubbleId ?? c?.bubbleId;
        if (!l) throw new Error("[composer] No AI message found");
        const u = c && c.codeBlocks?.find((b)=>b.codeBlockIdx === i)?.unregistered === !0, h = t.toString(), p = zn(), g = {
            _v: NKs,
            bubbleId: l,
            codeBlockIdx: i,
            uri: t,
            codeblockId: p,
            status: r?.status ?? "none",
            isNotApplied: r?.isNotApplied,
            languageId: r?.languageId,
            chainedInfo: r?.chainedInfo,
            fromSubagentCodeBlockInfo: r?.fromSubagentCodeBlockInfo,
            codeBlockDisplayPreference: r?.isNotApplied ? "expanded" : "collapsed",
            createdAt: Date.now(),
            composerChatGenerationUuid: s.chatGenerationUUID
        };
        this._composerDataService.updateComposerDataSetStore(e, (b)=>b("codeBlockData", h, (y)=>({
                    ...y || {},
                    [p]: g
                }))), c && (u ? this._composerDataService.updateComposerDataSetStore(e, (b)=>b("conversationMap", l, "codeBlocks", (y)=>y.codeBlockIdx === i, {
                uri: t,
                codeblockId: p,
                codeBlockIdx: i,
                unregistered: !1,
                content: n,
                searchReplace: r?.searchReplace
            })) : this.addNewCodeBlockToBubble(e, l, i, {
            uri: t,
            codeblockId: p,
            codeBlockIdx: i,
            content: n,
            languageId: r?.languageId,
            searchReplace: r?.searchReplace
        }));
        const f = s.codeBlockData[h];
        if ((!f || Object.keys(f).length === 1) && s.originalFileStates[h] === void 0) {
            const b = await this.getFileContent(t, e) ?? "", y = await this._composerFileService.exists({
                uri: t,
                composerData: s
            }), T = [];
            if (!y) {
                let E = t, A = ml(E);
                for(; !Ac(E, A) && !await this._composerFileService.exists({
                    uri: A,
                    composerData: s
                });)T.push(A), E = A, A = ml(E);
                T.reverse();
            }
            if (this._composerDataService.updateComposerDataSetStore(e, (E)=>E("originalFileStates", h, {
                    content: b,
                    firstEditBubbleId: l,
                    isNewlyCreated: !y,
                    newlyCreatedFolders: T
                })), t.scheme === gt.vscodeNotebookCell) try {
                const E = xNt(t);
                if (s.originalFileStates[E.toString()] === void 0) {
                    const A = await this.getFileContent(E, e) ?? "", R = await this._composerFileService.exists({
                        uri: E,
                        composerData: s
                    });
                    this._composerDataService.updateComposerDataSetStore(e, (D)=>D("originalFileStates", E.toString(), {
                            content: A,
                            firstEditBubbleId: l,
                            isNewlyCreated: !R,
                            newlyCreatedFolders: T
                        }));
                }
            } catch  {
                this._composerLogService.error(`[registerNewCodeBlock] Failed to process notebook cell URI: ${t.toString()}`);
            }
        }
        return this._composerEventService.fireDidRegisterNewCodeBlock({
            composerId: s.composerId,
            uri: t,
            codeblockId: p,
            codeBlockIdx: i,
            messageIndex: a
        }), g;
    }
    async getFileContent(e, t) {
        const n = t.data;
        if (!await this._composerFileService.exists({
            uri: e,
            composerData: n
        })) return null;
        let r;
        try {
            const s = t.data;
            return r = await this.composerTextModelService.createModelReference(e, s, !0), r.object.textEditorModel.getValue();
        } catch (s) {
            return this._composerLogService.error("[composer] error getting content of file", e, s), null;
        } finally{
            r?.dispose();
        }
    }
    addNewCodeBlockToBubble(e, t, n, i) {
        this._composerDataService.updateComposerDataSetStore(e, (r)=>r("conversationMap", t, "codeBlocks", (s)=>{
                const o = [
                    ...s || []
                ], a = o.findIndex((l)=>l.codeBlockIdx > n), c = {
                    ...i,
                    codeBlockIdx: n
                };
                return a === -1 ? o.push(c) : o.splice(a, 0, c), o;
            }));
    }
    getChainedOriginalCodeBlock(e, t, n) {
        if (!e.data) return null;
        const r = this.getComposerCodeBlock(e, t, n);
        if (!r || !r.chainedInfo) return null;
        let s = r.chainedInfo, o;
        const a = new Set([
            n
        ]);
        for(; s;){
            const c = s.chainedFromCodeblockId, l = s.composerId || e.data.composerId, u = l ? this._composerDataService.getHandleIfLoaded(l) : e;
            if (!u || (o = this.getComposerCodeBlock(u, t, c), a.has(c))) break;
            a.add(c), s = o?.chainedInfo || void 0;
        }
        return o ?? null;
    }
    async getCodeBlockDiffStats(e, t) {
        const n = e.data;
        if (!n) return {
            added: 0,
            removed: 0
        };
        let i = t.toString();
        n.gitWorktree && (i = n8e(t, n, this._workspaceContextService).toString());
        const r = n.codeBlockData[i];
        if (!r || Object.keys(r).length === 0) return this._composerLogService.warn(`[composer] No code blocks found for URI: ${i} in composer ${e.composerId}`), {
            added: 0,
            removed: 0
        };
        const s = this.getLastAppliedCodeBlock(e, t);
        if (!s) return {
            added: 0,
            removed: 0
        };
        const o = await this.getCodeBlockV0ModelLines(e, t), a = await this.getCodeBlockNewModelLines(e, t, s.codeblockId);
        if (!o || !a) return {
            added: 0,
            removed: 0
        };
        if (o.length === a.length) {
            let g = !1;
            for(let f = 0; f < o.length; f++)if (o[f] !== a[f]) {
                g = !0;
                break;
            }
            if (!g) return {
                added: 0,
                removed: 0
            };
        }
        const c = await this.computeLineDiffs(e, t, a, {
            forStats: !0
        }), l = c.reduce((g, f)=>g + f.modified.length + (f.original.endLineNumberExclusive - f.original.startLineNumber), 0), u = o.length + a.length;
        l > u * .8 && this._composerLogService.warn(`[composer] Large diff detected for ${t.fsPath} (${l}/${u} lines). This may be due to diff timeout or whitespace issues.`);
        let h = 0, p = 0;
        for (const g of c)h += g.modified.length, p += g.original.endLineNumberExclusive - g.original.startLineNumber;
        return {
            added: h,
            removed: p
        };
    }
    async getPartialInlineDiffFates(e, t, n) {
        const i = e.data;
        if (!i) return;
        const r = this.getComposerCodeBlock(e, t, n);
        return !r || !r.partialInlineDiffFatesId ? void 0 : (await this._composerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates(i.composerId, r.partialInlineDiffFatesId))?.fates;
    }
    getRecentDiffDescriptors(e) {
        return this.getAllPendingDiffDescriptors(e);
    }
}, ie([
    zs("ComposerCodeBlockService.getComposerCodeBlock")
], wk.prototype, "getComposerCodeBlock", null), ie([
    zs("ComposerCodeBlockService.updateComposerCodeBlock")
], wk.prototype, "updateComposerCodeBlock", null), ie([
    zs("ComposerCodeBlockService.updateComposerCodeBlockSetStore")
], wk.prototype, "updateComposerCodeBlockSetStore", null), ie([
    zs("ComposerCodeBlockService.unregisterCachedCodeBlock")
], wk.prototype, "unregisterCachedCodeBlock", null), ie([
    zs("ComposerCodeBlockService.unregisterAllCachedCodeBlocks")
], wk.prototype, "unregisterAllCachedCodeBlocks", null), ie([
    zs("ComposerCodeBlockService.registerCachedCodeBlock")
], wk.prototype, "registerCachedCodeBlock", null), ie([
    zs("ComposerCodeBlockService.markUriAsOutdated")
], wk.prototype, "markUriAsOutdated", null), ie([
    zs("ComposerCodeBlockService.isCodeBlockRegisteredAsCached")
], wk.prototype, "isCodeBlockRegisteredAsCached", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockStatus")
], wk.prototype, "getCodeBlockStatus", null), ie([
    zs("ComposerCodeBlockService.setCodeBlockStatus")
], wk.prototype, "setCodeBlockStatus", null), ie([
    zs("ComposerCodeBlockService.setCodeBlockStatusIncludingPreviouslyChained")
], wk.prototype, "setCodeBlockStatusIncludingPreviouslyChained", null), ie([
    zs("ComposerCodeBlockService.getCodeBlocksOfStatuses")
], wk.prototype, "getCodeBlocksOfStatuses", null), ie([
    zs("ComposerCodeBlockService.setGeneratingCodeBlocksToAborted")
], wk.prototype, "setGeneratingCodeBlocksToAborted", null), ie([
    zs("ComposerCodeBlockService.getLastCreatedCodeBlockId")
], wk.prototype, "getLastCreatedCodeBlockId", null), ie([
    zs("ComposerCodeBlockService.getLastAppliedCodeBlockId")
], wk.prototype, "getLastAppliedCodeBlockId", null), ie([
    zs("ComposerCodeBlockService.getLastAppliedCodeBlock")
], wk.prototype, "getLastAppliedCodeBlock", null), ie([
    zs("ComposerCodeBlockService.getLastAcceptedCodeBlock")
], wk.prototype, "getLastAcceptedCodeBlock", null), ie([
    zs("ComposerCodeBlockService.getLastAppliedCodeBlocks")
], wk.prototype, "getLastAppliedCodeBlocks", null), ie([
    zs("ComposerCodeBlockService.getAllCachedCodeBlocks")
], wk.prototype, "getAllCachedCodeBlocks", null), ie([
    zs("ComposerCodeBlockService.updateCodeBlockLastAppliedAt")
], wk.prototype, "updateCodeBlockLastAppliedAt", null), ie([
    zs("ComposerCodeBlockService.getInlineDiff")
], wk.prototype, "getInlineDiff", null), ie([
    zs("ComposerCodeBlockService.getAllInlineDiffs")
], wk.prototype, "getAllInlineDiffs", null), ie([
    zs("ComposerCodeBlockService.getAllPendingDiffDescriptors")
], wk.prototype, "getAllPendingDiffDescriptors", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockFileUris")
], wk.prototype, "getCodeBlockFileUris", null), ie([
    zs("ComposerCodeBlockService.getInlineDiffForChaining")
], wk.prototype, "getInlineDiffForChaining", null), ie([
    zs("ComposerCodeBlockService.doesFileHaveInlineDiff")
], wk.prototype, "doesFileHaveInlineDiff", null), ie([
    zs("ComposerCodeBlockService.doesFileHaveChanges")
], wk.prototype, "doesFileHaveChanges", null), ie([
    zs("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInLastAiBubbles")
], wk.prototype, "getUrisOfCodeblocksWithDiffsInLastAiBubbles", null), ie([
    zs("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInAiBubbles")
], wk.prototype, "getUrisOfCodeblocksWithDiffsInAiBubbles", null), ie([
    zs("ComposerCodeBlockService.changeCodeBlockUri")
], wk.prototype, "changeCodeBlockUri", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockLinesByDiff")
], wk.prototype, "getCodeBlockLinesByDiff", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockV0ModelLines")
], wk.prototype, "getCodeBlockV0ModelLines", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockOriginalModelLines")
], wk.prototype, "getCodeBlockOriginalModelLines", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockNewModelLines")
], wk.prototype, "getCodeBlockNewModelLines", null), ie([
    zs("ComposerCodeBlockService.registerNewCodeBlock")
], wk.prototype, "registerNewCodeBlock", null), ie([
    zs("ComposerCodeBlockService.getChainedOriginalCodeBlock")
], wk.prototype, "getChainedOriginalCodeBlock", null), ie([
    zs("ComposerCodeBlockService.getCodeBlockDiffStats")
], wk.prototype, "getCodeBlockDiffStats", null), ie([
    zs("ComposerCodeBlockService.getPartialInlineDiffFates")
], wk.prototype, "getPartialInlineDiffFates", null), ie([
    zs("ComposerCodeBlockService.getRecentDiffDescriptors")
], wk.prototype, "getRecentDiffDescriptors", null), wk = ie([
    ste(0, Do),
    ste(1, H_e),
    ste(2, Zy),
    ste(3, vJe),
    ste(4, aXi),
    ste(5, YC),
    ste(6, vp),
    ste(7, Zs),
    ste(8, pq),
    ste(9, zM),
    ste(10, D$),
    ste(11, Jn),
    ste(12, zl),
    ste(13, lb)
], wk), mn(poe, wk, 1);

}
