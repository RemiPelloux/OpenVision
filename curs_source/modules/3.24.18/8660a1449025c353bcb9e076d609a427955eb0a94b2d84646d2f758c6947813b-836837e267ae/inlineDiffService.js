import { Ei, Gt, Qe, Zm, st, tt, xr, zpr } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { YW, jTn } from "./aiCodeTypes.js";
import { Qr, Ss, l$ } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { bo } from "./arrays.js";
import { X7, dPe } from "./cmdKStateService.js";
import { Ju, og } from "./codeEditorService.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { or, yi } from "./configuration.js";
import { ZOe, hJn, ipn, pJn, pa } from "./constants_8.js";
import { Abe, X6e } from "./cppEventLogger.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { xw } from "./editorBrowser.js";
import { L9t, N9t } from "./editorHostPolicy.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { vot, zki } from "./genericUndoRedoElement.js";
import { fXr } from "./inlineDiffDecorationUtils.js";
import { ICm, Vki } from "./inlineDiffServiceUtils.js";
import { xCm, zae } from "./inlineDiffUndoRedoElement.js";
import { It, dn } from "./instantiation.js";
import { DD, wd } from "./lineRange.js";
import { du, kv } from "./map.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Y7, jM } from "./notebookCommon.js";
import { Sqe, qae } from "./notebookService.js";
import { Rd, ih } from "./pathService.js";
import { AB } from "./planFileUtils.js";
import { jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { UTn } from "./reactiveStorageService.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Em, Rh } from "./resolverService.js";
import { Iu, Lr } from "./resources.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { Uv, Xv, rzd, szd } from "./telemetry.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { C7, rB } from "./undoRedo.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { $71, ACm, ECm, G71, K71, Kki, Q81, QUa, Uja, W71, Y71, jja, uX, wbe, wpe } from "./yBp.js";
import { Qm, pi, qS } from "./ze.js";
var $ja, Hja, b2, RCm, PCm, UO, Wja, Gja, XTn, qja, pPe, Rbe;
export { $ja, Gja, Hja, PCm, RCm, Rbe, UO, Wja, XTn, b2, pPe, qja };
var __wakaru_G4_initialized = false;
export function G4() {
if (__wakaru_G4_initialized) return;
__wakaru_G4_initialized = true;
"use strict";
E(), pi(), bo(), pa(), Ei(), Gt(), Qe(), du(), Ki(), Lr(), fn(), Xo(), or(), Rn(), It(), UTn(), el(), sk(), jTn(), Zi(), Xv(), rB(), Vp(), Sr(), X6e(), Pl(), LS(), AB(), ih(), Y7(), Sqe(), Ss(), Dc(), dPe(), Wo(), fo(), _s(), u_(), DD(), jc(), Qs(), xp(), Em(), xw(), og(), zki(), ICm(), xCm(), fXr(), hPe(), L9t(), $ja = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), Hja = (t)=>{
    throw TypeError(t);
}, b2 = (t, e)=>(n, i)=>e(n, i, t), RCm = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && Hja("Object expected");
        var i, r;
        n && (i = e[$ja("asyncDispose")]), i === void 0 && (i = e[$ja("dispose")], n && (r = i)), typeof i != "function" && Hja("Object not disposable"), r && (i = function() {
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
}, PCm = (t, e, n)=>{
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
}, UO = jn("inlineDiffService"), Wja = 128, Gja = "inlineDiffUndoRedo", XTn = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C){
        super(), this.textModelService = t, this.instantiationService = e, this.reactiveStorageService = n, this.undoRedoService = i, this.editorService = r, this.uriIdentityService = s, this.telemetryService = o, this.cppEventLogger = a, this.codeEditorService = l, this.textFileService = c, this.storageService = u, this.workspaceContextService = d, this.composerEventService = h, this.aiService = p, this.cmdKStateService = g, this.analyticsService = f, this.composerDataService = _, this.experimentService = b, this.pathService = y, this.notebookService = S, this.modelService = k, this.environmentService = C, this.inlineDiffs = this._register(new vb([])), this.diffHandlers = new Map, this._inlineDiffCache = new kv(5), this._persistedDiffIds = new Set, this._parkedStoredDiffs = new Map, this._parkedRestoresInFlight = new Map, this._parkInlineDiffs = !1, this._usePendingDiffSingleShotRestore = !1, this._onDidChangeParkedDiffs = this._register(new tt), this.onDidChangeParkedDiffs = this._onDidChangeParkedDiffs.event, this._dirtyDiffIds = new Set, this._onDidChangeDiffInfos = this._register(new tt), this.onDidChangeDiffInfos = this._onDidChangeDiffInfos.event, this._onDidAcceptDiff = this._register(new tt), this.onDidAcceptDiff = this._onDidAcceptDiff.event, this._onDidRejectDiff = this._register(new tt), this.onDidRejectDiff = this._onDidRejectDiff.event, this._onDidAddDiff = this._register(new tt), this.onDidAddDiff = this._onDidAddDiff.event, this._onDidRemoveDiff = this._register(new tt), this.onDidRemoveDiff = this._onDidRemoveDiff.event, this._onDidAddDiffFromUndoRedo = this._register(new tt), this.onDidAddDiffFromUndoRedo = this._onDidAddDiffFromUndoRedo.event, this._onDidRemoveDiffFromUndoRedo = this._register(new tt), this.onDidRemoveDiffFromUndoRedo = this._onDidRemoveDiffFromUndoRedo.event, this._onDidAcceptPartialDiff = this._register(new tt), this.onDidAcceptPartialDiff = this._onDidAcceptPartialDiff.event, this._onDidRejectPartialDiff = this._register(new tt), this.onDidRejectPartialDiff = this._onDidRejectPartialDiff.event, this._onDidApplyDiffEdits = this._register(new tt), this.onDidApplyDiffEdits = this._onDidApplyDiffEdits.event, this._onDidComputeDiff = this._register(new tt), this.onDidComputeDiff = this._onDidComputeDiff.event, this._onDidSuppressVisibleInlineDiff = this._register(new tt), this.onDidSuppressVisibleInlineDiff = this._onDidSuppressVisibleInlineDiff.event, this._userPlansDir = wbe(this.pathService.userHome({
            preferLocal: !0
        }));
        for (const T of XTn.registeredActions)T(this.reactiveStorageService);
        this.storageService.cursorDiskKVClearPrefix(Gja).catch((T)=>console.error("[inlineDiff] Error clearing undo/redo data:", T)), this._register(this.storageService.cursorDiskKVOnShouldSave(async (T)=>{
            await this.persistInlineDiffs();
        })), this.loadInlineDiffs().catch((T)=>{
            console.error("[inlineDiff] Error loading inline diffs:", T);
        }), this._register(this.composerEventService.onToRemoveDiffs(async (T)=>{
            const I = this.diffInfos.filter((A)=>A.uri.toString() === T.uri.toString());
            for (const A of I)this.remove(A.diffId);
            for (const A of this._parkedStoredDiffs.values())if (Iu.isEqual(rt.revive(A.uri), T.uri)) {
                this.discardParkedDiff(A.diffId);
                break;
            }
        }));
    }
    get diffInfos() {
        return Array.from(this.diffHandlers.values()).map((t)=>({
                uri: t.inlineDiff.uri,
                diffId: t.id,
                composerMetadata: t.composerMetadata
            }));
    }
    static registerAction(t) {
        this.registeredActions.push(t);
    }
    recordCancelEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            requestId: t.requestId,
            promptBarId: t.promptBarId,
            eventType: {
                case: "interruptGeneration",
                value: {}
            }
        });
    }
    recordDiffComputation(t, e, n) {
        !Number.isFinite(t) || t < 0 || this._onDidComputeDiff.fire({
            durationMs: t,
            lineCount: e,
            isFinal: n
        });
    }
    recordAcceptEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            requestId: t.requestId,
            promptBarId: t.promptBarId,
            eventType: {
                case: "acceptAll",
                value: {}
            }
        });
    }
    recordRejectEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            requestId: t.requestId,
            promptBarId: t.promptBarId,
            eventType: {
                case: "rejectAll",
                value: {
                    ...t.actorRequestId !== void 0 ? {
                        actorRequestId: t.actorRequestId
                    } : {},
                    ...t.silent !== void 0 ? {
                        silent: t.silent
                    } : {}
                }
            }
        });
    }
    recordAfterRejectEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            requestId: t.requestId,
            promptBarId: t.promptBarId,
            eventType: {
                case: "afterReject",
                value: {}
            }
        });
    }
    recordPartialAcceptEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            requestId: t.requestId,
            promptBarId: t.promptBarId,
            eventType: {
                case: "acceptPartialDiff",
                value: {
                    greenRange: t.greenRange,
                    redLines: t.redLines,
                    greenLines: t.greenLines
                }
            }
        });
    }
    recordPartialRejectEvent(t) {
        this.cppEventLogger.recordCmdKEvent(t.model, {
            promptBarId: t.promptBarId,
            requestId: t.requestId,
            eventType: {
                case: "rejectPartialDiff",
                value: {
                    greenRange: t.greenRange,
                    redLines: t.redLines,
                    greenLines: t.greenLines
                }
            }
        });
    }
    async reportEditFate(t, e, n) {}
    fireApplyDiffEdits(t) {
        this._onDidApplyDiffEdits.fire(t);
    }
    getInlineDiffDiskWorkspaceStorageKey() {
        return `inlineDiffs-${this.workspaceContextService.getWorkspace()?.id || "default"}`;
    }
    getInlineDiffStorageKeyPrefix() {
        return `inlineDiff:${this.workspaceContextService.getWorkspace()?.id || "default"}:`;
    }
    getInlineDiffStorageKey(t) {
        return `${this.getInlineDiffStorageKeyPrefix()}${t}`;
    }
    updateInlineDiff(t) {
        this.inlineDiffs.change([
            ...this.inlineDiffs.value.filter((e)=>e.id !== t.id),
            t
        ]), t.composerMetadata !== void 0 && this._dirtyDiffIds.add(t.id);
    }
    removeInlineDiff(t) {
        const e = this.inlineDiffs.value.filter((n)=>n.id !== t);
        e.length !== this.inlineDiffs.value.length && this.inlineDiffs.change(e);
    }
    updateInlineDiffProperty(t, e, n) {
        const i = this.inlineDiffs.value, r = i.findIndex((s)=>s.id === t);
        if (r >= 0) {
            const s = [
                ...i
            ];
            s[r] = {
                ...s[r],
                [e]: n
            }, this.inlineDiffs.change(s), s[r].composerMetadata !== void 0 && this._dirtyDiffIds.add(t);
        }
    }
    async persistInlineDiffs() {
        try {
            const t = this.inlineDiffs.value.filter((e)=>e.composerMetadata !== void 0 && this._dirtyDiffIds.has(e.id));
            if (t.length === 0) return;
            await Promise.allSettled(t.map(async (e)=>{
                if (this._parkInlineDiffs && !this._dirtyDiffIds.has(e.id)) return;
                const n = {
                    diffId: e.id,
                    uri: e.uri,
                    originalTextLines: e.originalTextLines,
                    generationUUID: e.generationUUID,
                    composerMetadata: e.composerMetadata,
                    cellId: e.cellId,
                    hideDecorations: e.hideDecorations,
                    ...this._parkInlineDiffs ? {
                        persistedAt: Date.now()
                    } : {}
                };
                await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(e.id), JSON.stringify(n)), this._dirtyDiffIds.delete(e.id), this._persistedDiffIds.add(e.id);
            }));
        } catch (t) {
            console.error("[inlineDiff] Error persisting inline diffs:", t);
        }
    }
    async loadInlineDiffs() {
        try {
            let t = [];
            const e = await this.storageService.cursorDiskKVGetPrefix(this.getInlineDiffStorageKeyPrefix());
            if (e.length > 0) {
                for (const [, s] of e)try {
                    const o = JSON.parse(s);
                    t.push(o);
                } catch (o) {
                    console.error("[inlineDiff] Error parsing stored diff:", o);
                }
                console.log(`[inlineDiff] Loaded ${t.length} diffs from per-key storage`);
            } else {
                const s = await this.storageService.cursorDiskKVGet(this.getInlineDiffDiskWorkspaceStorageKey());
                if (s) {
                    const o = JSON.parse(s);
                    Array.isArray(o) && (t = o, console.log(`[inlineDiff] Migrating ${t.length} diffs from legacy single-blob format`), await Promise.allSettled(t.map(async (a)=>{
                        await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(a.diffId), JSON.stringify(a));
                    })), await this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffDiskWorkspaceStorageKey()), console.log("[inlineDiff] Migration complete, deleted legacy storage key"));
                }
            }
            if (t.length === 0) return;
            const n = this.environmentService.remoteAuthority, i = n?.startsWith("ssh-remote+") === !0 || n?.includes("@ssh-remote+") === !0;
            if (this._usePendingDiffSingleShotRestore = i, this._parkInlineDiffs = this.experimentService.checkFeatureGate("park_inline_diffs", {
                disableExposureLog: !1
            }), !this._parkInlineDiffs) {
                await this.restoreAllStoredDiffsEagerly(t), this.autoAcceptStalePlanFileDiffs();
                return;
            }
            if (t = await this.pruneStoredDiffs(t), t.length === 0) return;
            for (const s of t)this._persistedDiffIds.add(s.diffId);
            const r = new Set;
            for (const s of t){
                const o = rt.revive(s.uri);
                r.has(o.toString()) || (r.add(o.toString()), this.modelService.getModel(o) !== null || uX(o, this._userPlansDir) ? !await this.restoreStoredDiff(s) && !uX(o, this._userPlansDir) && this._persistedDiffIds.has(s.diffId) && this.getHandlerByDiffId(s.diffId) === void 0 && this._parkedStoredDiffs.set(o.toString(), s) : this._parkedStoredDiffs.set(o.toString(), s));
            }
            this._parkedStoredDiffs.size > 0 && this._onDidChangeParkedDiffs.fire(), this.autoAcceptStalePlanFileDiffs();
        } catch (t) {
            console.error("[inlineDiff] Error loading inline diffs from storage:", t);
        }
    }
    async restoreAllStoredDiffsEagerly(t) {
        const e = this._usePendingDiffSingleShotRestore;
        this._persistedDiffIds = new Set(t.map((s)=>s.diffId));
        const n = new Set, i = [], r = [];
        await Promise.allSettled(t.map(async (s)=>{
            const o = rt.revive(s.uri);
            n.has(o.toString()) || (n.add(o.toString()), !e && !this.textFileService.isDirty(o) && r.push(o), i.push([
                s,
                await this.textModelService.createModelReference(o, !0)
            ]));
        }));
        for (const [s, o] of i){
            let a;
            try {
                if (this.getHandlerByDiffId(s.diffId)) {
                    o.dispose();
                    continue;
                }
                const { uri: l, originalTextLines: c, generationUUID: u, composerMetadata: d, cellId: h, hideDecorations: p } = s, g = rt.revive(l);
                let f, _ = [];
                try {
                    const k = o.object.textEditorModel;
                    if (_ = k.getLinesContent(), Zm(_, c)) {
                        this._persistedDiffIds.delete(s.diffId), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(s.diffId)).catch((T)=>{
                            console.error("[inlineDiff] Error deleting storage key for stale diff:", T);
                        }), o.dispose();
                        continue;
                    }
                    !e && !p && k.setValue(c.join(k.getEOL())), f = {
                        startLineNumber: 1,
                        endLineNumberExclusive: (e || p ? _.length : k.getLineCount()) + 1
                    };
                } catch  {
                    console.log("[inlineDiff] File no longer exists, skipping diff restoration:", g.toString()), o.dispose();
                    continue;
                }
                const b = d.codeblockId !== void 0 || d.toolCallId !== void 0, y = d.composerId !== void 0 && b && d.composerGenerationID !== void 0, S = {
                    id: s.diffId,
                    uri: g,
                    generationUUID: u,
                    currentRange: f,
                    originalTextLines: c,
                    prompt: "",
                    attachedToPromptBar: !1,
                    source: Rbe,
                    createdAt: Date.now(),
                    hideDeletionViewZones: p ?? !1,
                    hideDecorations: p,
                    composerMetadata: y ? {
                        composerId: d.composerId,
                        codeblockId: d.codeblockId,
                        toolCallId: d.toolCallId,
                        composerGenerationID: d.composerGenerationID
                    } : void 0,
                    cellId: h
                };
                e || p ? (o.dispose(), a = await this.addDecorationsOnlyDiff({
                    ...S,
                    newTextLines: _
                }, !0)) : (a = this.addActiveDiff(S, o), this.addLinesToDiff(a.id, _), this.finishDiffSuccess(a.id)), this._dirtyDiffIds.delete(a.id), console.log(`[inlineDiff] Restored diff ${a.id} for ${g.toString()}`);
            } catch (l) {
                console.error("[inlineDiff] Error loading individual diff:", l), !a && !this.diffHandlers.has(s.diffId) && o.dispose();
            }
        }
        e || await Promise.allSettled(r.map(async (s)=>{
            this.textFileService.isDirty(s) && await this.textFileService.save(s, {
                reason: 1,
                skipSaveParticipants: !0,
                force: !0,
                ignoreModifiedSince: !0
            });
        }));
    }
    async pruneStoredDiffs(t) {
        const e = [];
        for (const o of t)o.persistedAt === void 0 && (o.persistedAt = 0, e.push(o));
        const n = [
            ...t
        ].sort((o, a)=>a.persistedAt - o.persistedAt), i = n.slice(0, Wja), r = n.slice(Wja), s = new Set(i);
        return await Promise.allSettled([
            ...e.filter((o)=>s.has(o)).map((o)=>this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(o.diffId), JSON.stringify(o))),
            ...r.map((o)=>this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(o.diffId)))
        ]), i;
    }
    async restoreStoredDiff(t) {
        if (this.getHandlerByDiffId(t.diffId)) return !1;
        const { uri: e, originalTextLines: n, generationUUID: i, composerMetadata: r, cellId: s, hideDecorations: o } = t, a = rt.revive(e);
        let l;
        try {
            l = await this.textModelService.createModelReference(a, !0);
        } catch  {
            return !1;
        }
        const c = this._usePendingDiffSingleShotRestore, u = !c && !this.textFileService.isDirty(a);
        let d;
        const h = ()=>{
            d !== void 0 && !d.isDisposed() && this.getHandlerByDiffId(t.diffId) === void 0 && d.setValue(p.join(d.getEOL()));
        };
        let p = [];
        try {
            let g;
            try {
                const S = l.object.textEditorModel;
                if (p = S.getLinesContent(), Zm(p, n)) return this._persistedDiffIds.delete(t.diffId), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(t.diffId)).catch(xr), l.dispose(), !1;
                if (this.diffInfos.some((C)=>C.uri.toString() === S.uri.toString())) return l.dispose(), !1;
                !c && !o && (d = S, S.setValue(n.join(S.getEOL()))), g = {
                    startLineNumber: 1,
                    endLineNumberExclusive: (c || o ? p.length : S.getLineCount()) + 1
                };
            } catch  {
                return h(), l.dispose(), !1;
            }
            const f = r.codeblockId !== void 0 || r.toolCallId !== void 0, _ = r.composerId !== void 0 && f && r.composerGenerationID !== void 0, b = {
                id: t.diffId,
                uri: a,
                generationUUID: i,
                currentRange: g,
                originalTextLines: n,
                prompt: "",
                attachedToPromptBar: !1,
                source: Rbe,
                createdAt: Date.now(),
                hideDeletionViewZones: o ?? !1,
                hideDecorations: o,
                composerMetadata: _ ? {
                    composerId: r.composerId,
                    codeblockId: r.codeblockId,
                    toolCallId: r.toolCallId,
                    composerGenerationID: r.composerGenerationID
                } : void 0,
                cellId: s
            };
            let y;
            if (c || o) {
                l.dispose();
                const S = await this.addDecorationsOnlyDiff({
                    ...b,
                    newTextLines: p
                }, !0, !0);
                if (S === void 0) return !1;
                y = S;
            } else y = this.addActiveDiff(b, l), this.addLinesToDiff(y.id, p), this.finishDiffSuccess(y.id);
            return this._dirtyDiffIds.delete(y.id), !c && u && this.textFileService.isDirty(a) && await this.textFileService.save(a, {
                reason: 1,
                skipSaveParticipants: !0,
                force: !0,
                ignoreModifiedSince: !0
            }), !0;
        } catch (g) {
            return h(), this.diffHandlers.has(t.diffId) || l.dispose(), xr(g), !1;
        }
    }
    autoAcceptStalePlanFileDiffs() {
        const t = this.inlineDiffs.value.filter((e)=>uX(e.uri, this._userPlansDir));
        for (const e of t)console.log(`[inlineDiff] Auto-accepting stale plan file diff: ${e.uri.toString()}`), this.acceptDiff(e.id);
    }
    getHandlerByDiffId(t) {
        return this.diffHandlers.get(t);
    }
    notifySuppressedDiffVisible(t) {
        const e = this.diffHandlers.get(t);
        !e || !e.markSuppressionNotificationReported() || this._onDidSuppressVisibleInlineDiff.fire({
            diffId: t,
            uri: e.inlineDiff.uri
        });
    }
    getParkedDiffs() {
        return [
            ...this._parkedStoredDiffs.values()
        ].map((t)=>({
                diffId: t.diffId,
                uri: rt.revive(t.uri),
                composerId: t.composerMetadata.composerId,
                toolCallId: t.composerMetadata.toolCallId,
                generationUUID: t.generationUUID,
                originalTextLines: t.originalTextLines
            }));
    }
    async restoreParkedDiff(t) {
        const e = this._parkedRestoresInFlight.get(t);
        if (e !== void 0) return e;
        let n;
        for (const [o, a] of this._parkedStoredDiffs)if (a.diffId === t) {
            n = [
                o,
                a
            ];
            break;
        }
        if (n === void 0) return this.getHandlerByDiffId(t) !== void 0;
        const [i, r] = n;
        if (this.diffInfos.some((o)=>o.uri.toString() === i)) return !1;
        const s = this.restoreStoredDiff(r).then((o)=>{
            if (this._parkedStoredDiffs.get(i) !== r) return this.getHandlerByDiffId(t) !== void 0 && this.remove(t), this._dirtyDiffIds.delete(t), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(t)).catch(xr), !1;
            const a = o || this.getHandlerByDiffId(t) !== void 0;
            return (a || !this._persistedDiffIds.has(t)) && (this._parkedStoredDiffs.delete(i), this._onDidChangeParkedDiffs.fire()), a;
        }).finally(()=>{
            this._parkedRestoresInFlight.delete(t);
        });
        return this._parkedRestoresInFlight.set(t, s), s;
    }
    discardParkedDiff(t) {
        for (const [e, n] of this._parkedStoredDiffs)if (n.diffId === t) {
            this._parkedStoredDiffs.delete(e), this._persistedDiffIds.delete(t), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(t)).catch(xr), this._onDidChangeParkedDiffs.fire();
            return;
        }
    }
    revealDiff(t) {
        const e = this.diffHandlers.get(t);
        if (!e) return;
        const n = this.editorService.activeEditorPane;
        if (n === void 0) return;
        const i = n.getControl();
        i !== void 0 && qS(i) && this.uriIdentityService.extUri.isEqual(i.getModel()?.uri, e.inlineDiff.uri) && i.revealRangeInCenter({
            startLineNumber: e.inlineDiff.currentRange.startLineNumber,
            startColumn: 1,
            endLineNumber: e.inlineDiff.currentRange.endLineNumberExclusive,
            endColumn: 1
        });
    }
    _remove(t) {
        const e = this.cmdKStateService.getPromptBarByDiffId(t.id);
        e && this.cmdKStateService.updatePromptBar(e.id, "diffId", void 0);
        const n = t.id, i = t.inlineDiff.uri, r = t.composerMetadata;
        this.diffHandlers.delete(n), t.remove(), this.removeInlineDiff(n), this._dirtyDiffIds.delete(n), this._persistedDiffIds.has(n) && (this._persistedDiffIds.delete(n), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(n)).catch((s)=>{
            console.error("[inlineDiff] Error deleting storage key for diff:", s);
        })), this._onDidRemoveDiff.fire({
            diffInfo: {
                uri: i,
                diffId: n,
                composerMetadata: r
            }
        }), this._onDidChangeDiffInfos.fire();
    }
    getStoredInlineDiff(t) {
        if (this._inlineDiffCache.has(t)) {
            const e = this._inlineDiffCache.get(t);
            if (e) return Promise.resolve(wpe(e));
        }
        return this.storageService.cursorDiskKVGet(t).then((e)=>{
            if (e) {
                const n = $71(JSON.parse(e));
                return this._inlineDiffCache.set(t, n), n;
            }
        });
    }
    setStoredInlineDiff(t, e) {
        return e ? (this._inlineDiffCache.set(t, wpe(e)), this.storageService.cursorDiskKVSet(t, JSON.stringify(e))) : (this._inlineDiffCache.delete(t), this.storageService.cursorDiskKVClearPrefix(t));
    }
    getUndoResourceForInlineDiff(t) {
        return t.uri.scheme !== Ot.vscodeNotebookCell ? t.uri : jM.parse(t.uri)?.notebook ?? t.uri;
    }
    tryResolveNotebookCellUriByCellId(t) {
        if (t.uri.scheme !== Ot.vscodeNotebookCell || !t.cellId) return;
        const e = jM.parse(t.uri);
        if (!e) return;
        const n = this.notebookService.getNotebookTextModel(e.notebook);
        return n ? n.cells.find((r)=>r.metadata?.id === t.cellId)?.uri : void 0;
    }
    getModelReferenceUri(t) {
        return this.tryResolveNotebookCellUriByCellId(t) ?? t.uri;
    }
    tryCaptureNotebookCellDeletionInfo(t) {
        if (t.uri.scheme !== Ot.vscodeNotebookCell) return;
        const e = jM.parse(t.uri);
        if (!e) return;
        const n = this.notebookService.getNotebookTextModel(e.notebook);
        if (!n) return;
        const i = n.cells.findIndex((o)=>o.handle === e.handle);
        if (i === -1) return;
        const r = n.cells[i], s = {
            source: r.getValue(),
            language: r.language,
            mime: r.mime,
            cellKind: r.cellKind,
            outputs: r.outputs ?? [],
            metadata: r.metadata,
            internalMetadata: r.internalMetadata,
            collapseState: r.collapseState
        };
        return {
            notebookUri: e.notebook,
            cellIndex: i,
            cellData: s
        };
    }
    remove(t, e) {
        const n = this.diffHandlers.get(t);
        if (!n) return;
        let i;
        const r = e?.shouldStorePrevState !== !1 && !n.inlineDiff.hideDecorations;
        let s;
        r && (s = ACm(t), this.setStoredInlineDiff(s, n.inlineDiff).catch((h)=>{
            console.error("[inlineDiff] Error storing undo data:", h);
        }));
        const o = n.inlineDiff.uri, a = this.getUndoResourceForInlineDiff(n.inlineDiff), l = n.promptBarId, c = n.composerMetadata ? {
            ...n.composerMetadata
        } : void 0, u = Q81(n.inlineDiff), d = new zae("Undo Remove Diff", "undo-remove-diff", t, a, async ()=>{
            let h;
            try {
                let p;
                const g = this.getModelReferenceUri(u);
                if (h = await this.textModelService.createModelReference(g), r && s) {
                    const f = await this.getStoredInlineDiff(s);
                    if (f) p = {
                        ...f,
                        id: t,
                        uri: h.object.textEditorModel.uri
                    };
                    else throw new Error("[inlineDiff] No stored data found for create diff undo");
                } else p = {
                    ...u,
                    id: t,
                    uri: h.object.textEditorModel.uri,
                    originalTextLines: h.object.textEditorModel.getLinesContent().slice(u.currentRange.startLineNumber - 1, u.currentRange.endLineNumberExclusive - 1),
                    newTextLines: h.object.textEditorModel.getLinesContent().slice(u.currentRange.startLineNumber - 1, u.currentRange.endLineNumberExclusive - 1),
                    changes: [],
                    onAccept: void 0,
                    onReject: void 0
                };
                if (!p) throw new Error("[inlineDiff] No revived diff found for create diff undo");
                i = this.instantiationService.createInstance(pPe, h, p, l), h = void 0, this.diffHandlers.set(t, i), this._onDidChangeDiffInfos.fire(), this._onDidAddDiffFromUndoRedo.fire({
                    uri: p.uri,
                    diffId: t,
                    composerMetadata: c
                });
            } catch (p) {
                console.error("[inlineDiff] Error retrieving undo data:", p);
            } finally{
                h?.dispose(), r && s && this.setStoredInlineDiff(s, void 0).catch((p)=>console.error("[inlineDiff] Error cleaning up undo data:", p));
            }
        }, async ()=>{
            try {
                const h = this.diffHandlers.get(t);
                if (!h) return;
                r && s && this.setStoredInlineDiff(s, h.inlineDiff), this.cancelInUndo(t), this._remove(h), this._onDidRemoveDiffFromUndoRedo.fire({
                    diffInfo: {
                        uri: h.inlineDiff.uri,
                        diffId: t,
                        composerMetadata: h.composerMetadata
                    },
                    accepted: e?.accepted ?? !1
                });
            } catch (h) {
                console.error("[inlineDiff] Error in redo operation:", h);
            }
        });
        this.pushUndoElement(d, {}), (e?.closePromptBar ?? !1) && n.promptBarId && this._getPromptBar(n.promptBarId)?.diffId === t && this._hidePromptBar(n.promptBarId), this._remove(n);
    }
    _getPromptBar(t) {
        return QUa(this.cmdKStateService.getPromptBar(t));
    }
    _hidePromptBar(t) {
        const e = this._getPromptBar(t);
        if (e?.uri === void 0) return;
        this.cmdKStateService.removePromptBar(t);
        const n = {
            current: void 0
        };
        let i;
        if (this.textModelService.createModelReference(e.uri).then((r)=>{
            i = r, n.current = this.getPromptBarCurrentRange(e, r.object.textEditorModel);
            const s = e.currentRangeDecorationId;
            s && r.object.textEditorModel.deltaDecorations([
                s
            ], []);
        }).finally(()=>{
            i?.dispose();
        }), e?.diffId === void 0) {
            let r;
            this.textModelService.createModelReference(e.uri).then((s)=>{
                if (r = s, e.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
                    const o = this.getPromptBarCurrentRange(e, s.object.textEditorModel);
                    e.prePromptBarCursorPosition && o && jja(this.codeEditorService, {
                        startLineNumber: o.startLineNumber,
                        endLineNumber: o.endLineNumberExclusive - 1,
                        startColumn: 1,
                        endColumn: 1
                    }, s.object.textEditorModel.uri, e.prePromptBarCursorPosition), Kki(s.object.textEditorModel, e.modifyTextModelPrePromptBarBackwardEdit);
                }
            }).finally(()=>{
                r?.dispose();
            }), this.undoRedoService.pushElement(new vot("Undo Close Prompt Bar", "undo-close-prompt-bar", e?.uri, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(e.uri), e.modifyTextModelPrePromptBarForwardEdit.length > 0 && Kki(s.object.textEditorModel, e.modifyTextModelPrePromptBarForwardEdit);
                    const o = s.object.textEditorModel.deltaDecorations([], [
                        {
                            range: {
                                startLineNumber: n.current?.startLineNumber ?? 1,
                                endLineNumber: (n.current?.endLineNumberExclusive ?? 2) - 1,
                                startColumn: 1,
                                endColumn: s.object.textEditorModel.getLineMaxColumn((n.current?.endLineNumberExclusive ?? 2) - 1)
                            },
                            options: {
                                description: "promptBar-tracking-range",
                                isWholeLine: !0
                            }
                        }
                    ])[0];
                    Qm(()=>{
                        this.cmdKStateService.updatePromptBar(e.id, "currentRangeDecorationId", o);
                    });
                } finally{
                    s?.dispose();
                }
            }, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(e.uri), n.current = this.getPromptBarCurrentRange(e, s.object.textEditorModel);
                    const o = e.currentRangeDecorationId;
                    if (o && s.object.textEditorModel.deltaDecorations([
                        o
                    ], []), this.cmdKStateService.removePromptBar(e.id), e.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
                        const a = this.getPromptBarCurrentRange(e, s.object.textEditorModel);
                        e.prePromptBarCursorPosition && a && jja(this.codeEditorService, {
                            startLineNumber: a.startLineNumber,
                            endLineNumber: a.endLineNumberExclusive - 1,
                            startColumn: 1,
                            endColumn: 1
                        }, s.object.textEditorModel.uri, e.prePromptBarCursorPosition), Kki(s.object.textEditorModel, e.modifyTextModelPrePromptBarBackwardEdit);
                    }
                } finally{
                    s?.dispose();
                }
            }));
        } else {
            const r = new zae("Undo Close Prompt Bar", "undo-close-prompt-bar", e.diffId, e.uri, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(e.uri);
                    const o = s.object.textEditorModel.deltaDecorations([], [
                        {
                            range: {
                                startLineNumber: n.current?.startLineNumber ?? 1,
                                endLineNumber: (n.current?.endLineNumberExclusive ?? 2) - 1,
                                startColumn: 1,
                                endColumn: s.object.textEditorModel.getLineMaxColumn((n.current?.endLineNumberExclusive ?? 2) - 1)
                            },
                            options: {
                                description: "promptBar-tracking-range",
                                isWholeLine: !0
                            }
                        }
                    ])[0];
                    Qm(()=>{
                        this.cmdKStateService.updatePromptBar(e.id, "currentRangeDecorationId", o);
                    });
                } finally{
                    s?.dispose();
                }
            }, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(e.uri), n.current = this.getPromptBarCurrentRange(e, s.object.textEditorModel);
                    const o = e.currentRangeDecorationId;
                    o && s.object.textEditorModel.deltaDecorations([
                        o
                    ], []), this.cmdKStateService.removePromptBar(e.id);
                } finally{
                    s?.dispose();
                }
            });
            this.pushUndoElement(r, {});
        }
    }
    hidePromptBar(t) {
        this._hidePromptBar(t);
    }
    addActiveDiff(t, e, n) {
        const i = (a, l, c, u)=>`${a.toString()}|${l}|${c}|${u}`, r = i(t.uri, t.currentRange.startLineNumber, t.currentRange.endLineNumberExclusive, t.composerMetadata?.composerId ?? "non-composer"), s = [
            ...this.inlineDiffs.value
        ];
        for (const a of s)if (i(a.uri, a.currentRange.startLineNumber, a.currentRange.endLineNumberExclusive, a.composerMetadata?.composerId ?? "non-composer") === r) {
            const c = this.getHandlerByDiffId(a.id);
            c ? this._remove(c) : this.removeInlineDiff(a.id);
        }
        const o = this.addDiff(t, e, n);
        return o.activate(), o;
    }
    addDiff(t, e, n) {
        const i = this.instantiationService.createInstance(pPe, e, t, n);
        this.diffHandlers.set(i.id, i), this._onDidChangeDiffInfos.fire();
        const r = i.id;
        t.composerMetadata !== void 0 && this._dirtyDiffIds.add(r);
        const s = {
            uri: t.uri,
            diffId: r,
            composerMetadata: t.composerMetadata
        };
        this._onDidAddDiff.fire(s);
        let o, a = !1, l = n ? this._getPromptBar(n) : void 0;
        const c = ACm(r), u = new zae("Undo Create Diff", "undo-create-diff", r, e.object.textEditorModel.uri, async ()=>{
            try {
                const d = this.diffHandlers.get(r);
                if (!d) return;
                await this.setStoredInlineDiff(c, d.inlineDiff).catch((h)=>console.error("[inlineDiff] Error storing undo data:", h)), this.cancelInUndo(r), l = n ? this._getPromptBar(n) : void 0, l?.diffId === d.id && (a = !0), this._remove(d), this._onDidRemoveDiffFromUndoRedo.fire({
                    diffInfo: {
                        uri: t.uri,
                        diffId: r,
                        composerMetadata: d.composerMetadata
                    },
                    accepted: !1
                });
            } catch (d) {
                console.error("[inlineDiff] Error retrieving undo data:", d);
            }
        }, async ()=>{
            let d;
            try {
                const h = await this.getStoredInlineDiff(c);
                h ? (d = await this.textModelService.createModelReference(t.uri), o = this.instantiationService.createInstance(pPe, d, {
                    ...h,
                    id: r
                }, n), d = void 0, this.diffHandlers.set(r, o), this._onDidChangeDiffInfos.fire(), this._onDidAddDiffFromUndoRedo.fire({
                    uri: t.uri,
                    diffId: r,
                    composerMetadata: o.composerMetadata
                }), a && l && this.cmdKStateService.replacePromptBar(l)) : console.error("[inlineDiff] No stored data found for create diff redo");
            } catch (h) {
                console.error("[inlineDiff] Error in redo operation:", h);
            } finally{
                d?.dispose(), this.setStoredInlineDiff(c, void 0).catch((h)=>console.error("[inlineDiff] Error cleaning up redo data:", h));
            }
        });
        return this.pushUndoElement(u, {}), i;
    }
    cancelDiff(t) {
        const e = this.diffHandlers.get(t);
        if (!e) {
            this.removeInlineDiff(t);
            return;
        }
        e.cancel(), e.finishFailure();
    }
    setDiff(t, e) {
        const n = this.diffHandlers.get(t);
        n && n.setDiff(e);
    }
    cancelInUndo(t) {
        const e = this.diffHandlers.get(t);
        e && e.cancelInUndo();
    }
    findClosestChange(t, e) {
        const n = this.diffHandlers.get(t);
        if (n && n instanceof pPe) return n.findClosestChange(e);
    }
    acceptPartialDiff(t, e) {
        const n = this.diffHandlers.get(t);
        if (!n) return !1;
        this.telemetryService.publicLogCapture("inlineDiffAcceptPartial", {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new zae("Undo Accept Partial Diff", "undo-accept-partial-diff", t, i, ()=>{}, ()=>{}), {
            breakConsolidation: !0
        });
        let r = [], s = [];
        if (n instanceof pPe) {
            const a = n.findClosestChange(e);
            r = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), s = [
                ...a.removedTextLines
            ];
        }
        const o = n.acceptPartialDiff(e);
        return this._onDidAcceptPartialDiff.fire({
            inlineDiff: n.inlineDiff,
            requestId: n.inlineDiff.generationUUID,
            file: n.inlineDiff.uri.toString(),
            previousContent: s.join(`
`),
            updatedContent: r.join(`
`),
            source: YW.COMPOSER,
            range: {
                startLineNumber: n.inlineDiff.currentRange.startLineNumber,
                endLineNumber: n.inlineDiff.currentRange.endLineNumberExclusive,
                startColumn: 0,
                endColumn: -1
            },
            diffInfo: {
                diffId: t,
                uri: n.inlineDiff.uri,
                composerMetadata: n.composerMetadata
            },
            isDone: o,
            change: {
                accepted: r,
                rejected: s
            }
        }), o && this.remove(t, {
            closePromptBar: !0,
            accepted: !0,
            shouldStorePrevState: !1
        }), o;
    }
    rejectPartialDiff(t, e) {
        const n = this.diffHandlers.get(t);
        if (!n) return !1;
        this.telemetryService.publicLogCapture("inlineDiffRejectPartial", {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new zae("Undo Reject Partial Diff", "undo-reject-partial-diff", t, i, ()=>{}, ()=>{}), {
            breakConsolidation: !0
        });
        let r = [], s = [];
        if (n instanceof pPe) {
            const a = n.findClosestChange(e);
            s = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), r = [
                ...a.removedTextLines
            ];
        }
        const o = n.rejectPartialDiff(e);
        return o && this.remove(t, {
            accepted: !1,
            shouldStorePrevState: !1
        }), this._onDidRejectPartialDiff.fire({
            diffInfo: {
                diffId: t,
                uri: n.inlineDiff.uri,
                composerMetadata: n.composerMetadata
            },
            isDone: o,
            change: {
                accepted: r,
                rejected: s
            },
            inlineDiff: n.inlineDiff
        }), o;
    }
    acceptDiff(t, e) {
        const n = this.diffHandlers.get(t);
        if (!n) return;
        this.telemetryService.publicLogCapture(rzd, {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new zae("Undo Accept Diff", "undo-accept-diff", t, i, ()=>{}, ()=>{}), {
            breakConsolidation: e?.dontBreakConsolidation !== void 0 ? !e.dontBreakConsolidation : !0
        });
        let r = [], s = [];
        const o = [];
        n instanceof pPe && (n.changes.forEach((a)=>{
            const l = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), c = n.inlineDiff.originalTextLines.slice(a.removedLinesOriginalRange.startLineNumber - 1, a.removedLinesOriginalRange.endLineNumberExclusive - 1);
            r.push(...l), s.push(...c), o.push({
                removedLines: c,
                removedRange: {
                    startLineNumber: a.removedLinesOriginalRange.startLineNumber,
                    endLineNumberExclusive: a.removedLinesOriginalRange.endLineNumberExclusive
                },
                addedLines: l,
                addedRange: {
                    startLineNumber: a.addedRange.startLineNumber,
                    endLineNumberExclusive: a.addedRange.endLineNumberExclusive
                },
                fate: "accepted"
            });
        }), this.trackAcceptRejectDiffDetails("accept", n.changes ?? [], e?.sourceContext ?? "editor")), n.accept(), this._onDidAcceptDiff.fire({
            requestId: n.inlineDiff.generationUUID,
            diffId: t,
            uri: n.inlineDiff.uri,
            inlineDiff: n.inlineDiff,
            composerMetadata: n.composerMetadata,
            change: {
                accepted: r,
                rejected: s
            },
            previousContent: s.join(`
`),
            updatedContent: r.join(`
`),
            source: YW.COMPOSER,
            file: n.inlineDiff.uri.toString(),
            range: {
                startLineNumber: n.inlineDiff.currentRange.startLineNumber,
                endLineNumber: n.inlineDiff.currentRange.endLineNumberExclusive,
                startColumn: 0,
                endColumn: -1
            },
            sourceContext: e?.sourceContext || "editor",
            partialInlineDiffFates: o
        }), this.remove(t, {
            closePromptBar: !0,
            accepted: !0
        });
    }
    rejectDiff(t, e, n) {
        const i = this.diffHandlers.get(t);
        if (!i) {
            this.removeInlineDiff(t);
            return;
        }
        e?.rejectSilently !== !0 && this.telemetryService.publicLogCapture(szd, {
            generationUUID: i.inlineDiff.generationUUID
        });
        const r = this.getUndoResourceForInlineDiff(i.inlineDiff);
        this.pushUndoElement(new zae("Undo Reject Diff", "undo-reject-diff", t, r, ()=>{}, ()=>{}), {
            breakConsolidation: e?.dontBreakConsolidation !== void 0 ? !e.dontBreakConsolidation : !0
        });
        const s = [];
        i instanceof pPe && (i.changes.forEach((a)=>{
            const l = i.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), c = i.inlineDiff.originalTextLines.slice(a.removedLinesOriginalRange.startLineNumber - 1, a.removedLinesOriginalRange.endLineNumberExclusive - 1);
            s.push({
                removedLines: c,
                removedRange: {
                    startLineNumber: a.removedLinesOriginalRange.startLineNumber,
                    endLineNumberExclusive: a.removedLinesOriginalRange.endLineNumberExclusive
                },
                addedLines: l,
                addedRange: {
                    startLineNumber: a.addedRange.startLineNumber,
                    endLineNumberExclusive: a.addedRange.endLineNumberExclusive
                },
                fate: "rejected"
            });
        }), this.trackAcceptRejectDiffDetails("reject", i.changes ?? [], e?.sourceContext ?? "editor")), i.reject({
            rejectSilently: e?.rejectSilently
        }, n), i.callRejectCallback(), e?.rejectSilently || this._onDidRejectDiff.fire({
            diffId: t,
            uri: i.inlineDiff.uri,
            composerMetadata: i.composerMetadata,
            inlineDiff: i.inlineDiff,
            sourceContext: e?.sourceContext || "editor",
            partialInlineDiffFates: s
        });
        const o = i.inlineDiff.isNewlyCreatedCell === !0 ? this.tryCaptureNotebookCellDeletionInfo(i.inlineDiff) : void 0;
        if (this.remove(t, {
            closePromptBar: e?.close && e?.rejectSilently !== !0,
            accepted: !1,
            shouldStorePrevState: !1
        }), o) {
            const a = this.notebookService.getNotebookTextModel(o.notebookUri);
            a && (a.applyEdits([
                {
                    editType: 1,
                    index: o.cellIndex,
                    count: 1,
                    cells: []
                }
            ], !0, void 0, ()=>{}, void 0, !1), this.pushUndoElement(new zae("Undo Delete Notebook Cell", "undo-delete-notebook-cell", t, r, ()=>{
                this.notebookService.getNotebookTextModel(o.notebookUri)?.applyEdits([
                    {
                        editType: 1,
                        index: o.cellIndex,
                        count: 0,
                        cells: [
                            o.cellData
                        ]
                    }
                ], !0, void 0, ()=>{}, void 0, !1);
            }, ()=>{
                this.notebookService.getNotebookTextModel(o.notebookUri)?.applyEdits([
                    {
                        editType: 1,
                        index: o.cellIndex,
                        count: 1,
                        cells: []
                    }
                ], !0, void 0, ()=>{}, void 0, !1);
            }), {}));
        }
    }
    trackAcceptRejectDiffDetails(t, e, n) {
        const i = new Map, r = (o, a)=>`${o}:${a}`, s = (o, a)=>{
            const l = r(o, a);
            return i.has(l) || i.set(l, {
                linesAdded: 0,
                linesRemoved: 0
            }), i.get(l);
        };
        for (const o of e){
            for (const a of o.addedLinesMetaData ?? [])if (a.composerGenerationID && a.toolCallID) {
                const l = s(a.composerGenerationID, a.toolCallID);
                l.linesAdded += 1;
            }
            for (const a of o.removedLinesMetaData ?? [])if (a.composerGenerationID && a.toolCallID) {
                const l = s(a.composerGenerationID, a.toolCallID);
                l.linesRemoved += 1;
            }
        }
        for (const [o, a] of i.entries()){
            const [l, c] = o.split(":");
            this.analyticsService.trackEvent("composer.accept_reject_diff_details", {
                chatGenerationUUID: l,
                toolCallId: c,
                acceptOrReject: t,
                linesAdded: a.linesAdded,
                linesRemoved: a.linesRemoved,
                sourceContext: n
            });
        }
    }
    finishDiffSuccess(t) {
        const e = this.diffHandlers.get(t);
        e && e.finishSuccess();
    }
    addLineToDiff(t, e) {
        this.addLinesToDiff(t, [
            e
        ]);
    }
    addLinesToDiff(t, e) {
        const n = this.diffHandlers.get(t);
        n && n.addLinesToDiff(e);
    }
    async streamDiff({ uri: t, originalLineRange: e, hideDeletionViewZones: n, generationUUID: i, streamingLines: r, originalTextLines: s, originalLineTokens: o, extraContextLinesAbove: a, extraContextLinesBelow: l, prompt: c, diffIdCallback: u, doneCallback: d, cancelGenerationWithNoChangesCallback: h, rejectCallback: p, promptBarId: g, composerId: f }) {
        var _ = [];
        try {
            const S = {
                uri: t,
                generationUUID: i,
                currentRange: e,
                originalTextLines: s,
                originalLineTokens: o,
                prompt: c,
                hideDeletionViewZones: n,
                attachedToPromptBar: u !== void 0,
                extraContextLinesAbove: a,
                extraContextLinesBelow: l,
                composerId: f
            }, k = RCm(_, new zpr(await this.textModelService.createModelReference(t, !0))), C = this.addDiff(S, k.value, g);
            k.transferOut(), C.activate(d, h, p), u !== void 0 && u(C.id);
            let T = !1, I = [];
            try {
                for await (const A of r)C.addLinesToDiff([
                    A
                ]), I.push(A);
            } catch  {
                T = !0;
            }
            if (!T && g && u) {
                const A = t.path.split("/").pop() ?? "", P = A.includes(".") ? A.split(".").pop() ?? "" : "";
                let M = 0, O = 0;
                const N = C.changes ?? [];
                for (const $ of N)M += $.addedRange.endLineNumberExclusive - $.addedRange.startLineNumber, O += $.removedTextLines.length;
                const j = (f ? this.composerDataService?.getComposerDataIfLoaded(f) : void 0)?.modelConfig?.modelName ?? "default";
                this.analyticsService.trackEvent("cmdk.diff_displayed", {
                    composerRequestID: i,
                    composerId: f,
                    fileExtension: P,
                    promptBarID: g,
                    linesAdded: M,
                    linesRemoved: O,
                    model: j
                });
            }
            T ? C.finishFailure() : C.finishSuccess();
        } catch (S) {
            var b = S, y = !0;
        } finally{
            PCm(_, b, y);
        }
    }
    pushUndoElement(t, e) {
        if (e.breakConsolidation === !0) {
            this.undoRedoService.pushElement(t);
            return;
        }
        const n = this.undoRedoService.getLastElement(t.resource);
        n instanceof zae ? n.push(t) : this.undoRedoService.pushElement(t);
    }
    dispose() {
        super.dispose();
        for (const t of this.diffHandlers.values())t.dispose();
        this.diffHandlers.clear(), this._onDidChangeDiffInfos.fire();
    }
    updateComposerMetadata(t, e) {
        this.updateInlineDiffProperty(t, "composerMetadata", e);
        const n = this.diffHandlers.get(t);
        n && (n.composerMetadata = e);
    }
    firePartialDiffCompletionEvent(t) {
        this._onDidAcceptDiff.fire(t);
    }
    async addDecorationsOnlyDiff(t, e, n) {
        const i = await this.textModelService.createModelReference(t.uri, e), r = this.inlineDiffs.value.find((a)=>a.uri.toString() === t.uri.toString());
        if (r) {
            if (n) {
                i.dispose();
                return;
            }
            this.remove(r.id);
        }
        const s = this.instantiationService.createInstance(pPe, i, t, void 0);
        if (this.diffHandlers.set(s.id, s), t.composerMetadata !== void 0 && this._dirtyDiffIds.add(s.id), !s.tryDeferDiffState()) {
            const a = s.getDiffState(!0, t.composerMetadata?.composerGenerationID, t.toolCallId);
            s.inlineDiff.changes = a.changes, s.inlineDiff.activeLine = a.activeLine, s.inlineDiff.pendingRange = a.pendingRange, Uja(s.inlineDiff.originalTextLines, s.inlineDiff.newTextLines, a.changes);
        }
        this.updateInlineDiff(wpe(s.inlineDiff)), s.computeDecorations(), this._onDidChangeDiffInfos.fire(), t.composerMetadata && this.updateComposerMetadata(s.id, t.composerMetadata);
        const o = {
            uri: t.uri,
            diffId: s.id,
            composerMetadata: t.composerMetadata
        };
        return this._onDidAddDiff.fire(o), s;
    }
    getPromptBarCurrentRange(t, e) {
        if (t === void 0) return;
        const n = this.inlineDiffs.value.find((r)=>r.id === t.diffId);
        if (n !== void 0) if (e) {
            const r = e.getLineCount();
            if (!(n.currentRange.startLineNumber === 1 && n.currentRange.endLineNumberExclusive === r + 1)) return n.currentRange;
        } else return n.currentRange;
        const i = e?.getDecorationRange(t.currentRangeDecorationId);
        if (i) return {
            startLineNumber: i.startLineNumber,
            endLineNumberExclusive: i.endLineNumber + 1
        };
    }
}, XTn.registeredActions = [], XTn = Re([
    b2(0, Rh),
    b2(1, dn),
    b2(2, sa),
    b2(3, C7),
    b2(4, gr),
    b2(5, nh),
    b2(6, Uv),
    b2(7, Abe),
    b2(8, Ju),
    b2(9, Vf),
    b2(10, ki),
    b2(11, yr),
    b2(12, Fb),
    b2(13, jl),
    b2(14, X7),
    b2(15, Qr),
    b2(16, no),
    b2(17, Cr),
    b2(18, Rd),
    b2(19, qae),
    b2(20, dd),
    b2(21, ps)
], XTn), bn(UO, XTn, 1), qja = (t, e)=>({
        startLineNumber: Math.max(t.startLineNumber, e.startLineNumber),
        endLineNumberExclusive: Math.min(t.endLineNumberExclusive, e.endLineNumberExclusive)
    }), pPe = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this.inlineDiffService = i, this.undoRedoService = r, this.configurationService = s, this.notebookService = o, this.cppService = a, this.aiService = l, this.cmdKStateService = c, this.experimentService = u, this.composerDataService = d, this.diffDecorationVisibilityService = h, this.editorHostPolicy = p, this.cachedDecorationIDs = [], this.hasShownThresholdNotification = !1, this.numAcceptedPartialDiffs = 0, this.numRejectedPartialDiffs = 0, this.isApplyingPartialRejectEdit = !1, this.changeFates = new Map, this.active = !1, this.lastEdits = [], this.agentEditedTextLines = void 0, this.isDiffStateDeferred = !1, this.modelRef = t, this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
            this.computeDecorations();
        })), this.promptBarId = n, this.composerMetadata = e.composerMetadata, this.toolCallId = e.toolCallId;
        let g = e.cellId;
        if (!g && e.uri.scheme === Ot.vscodeNotebookCell) {
            const _ = jM.parse(e.uri);
            if (_) {
                const b = this.notebookService.getNotebookTextModel(_.notebook);
                if (b) {
                    const y = b.cells.find((S)=>S.handle === _.handle);
                    y && y.metadata && "id" in y.metadata && typeof y.metadata.id == "string" && (g = y.metadata.id);
                }
            }
        }
        this.inlineDiff = {
            id: Ai(),
            changes: [],
            activeLine: void 0,
            pendingRange: {
                startLineNumber: 1,
                endLineNumberExclusive: e.currentRange.endLineNumberExclusive - e.currentRange.startLineNumber + 1
            },
            newTextLines: e.newTextLines ?? [],
            onAccept: void 0,
            onReject: void 0,
            canUndoUpdates: !0,
            showNativeAcceptReject: !1,
            cellId: g,
            ...e
        };
        const f = s.onDidChangeConfiguration((_)=>{
            _.affectsConfiguration(ZOe) && this.computeDecorations();
        });
        if (this._register(f), e.attachedToPromptBar) {
            const _ = e.lastPromptBarCurrentRange ?? {
                startLineNumber: e.currentRange.startLineNumber,
                endLineNumberExclusive: e.currentRange.endLineNumberExclusive
            }, b = this.modelRef.object.textEditorModel.deltaDecorations([], [
                {
                    range: {
                        startLineNumber: _.startLineNumber,
                        endLineNumber: _.endLineNumberExclusive - 1,
                        startColumn: 1,
                        endColumn: this.modelRef.object.textEditorModel.getLineMaxColumn(_.endLineNumberExclusive - 1)
                    },
                    options: {
                        description: "promptBar-tracking-range",
                        isWholeLine: !0
                    }
                }
            ])[0];
            n && (this.cmdKStateService.updatePromptBar(n, "diffId", this.inlineDiff.id), this.cmdKStateService.updatePromptBar(n, "currentRangeDecorationId", b));
        }
        this._register(t.object.textEditorModel.onDidChangeContent((_)=>{
            for (const b of _.changes)switch(G71(this.inlineDiff.currentRange, b.range)){
                case Vki.After:
                    {
                        if (!this.isDiffStateDeferred && this.changes.length > 0) {
                            const S = this.changes[this.changes.length - 1];
                            if (this.inlineDiff.currentRange.startLineNumber + S.addedRange.endLineNumberExclusive - 1 === b.range.startLineNumber && (S.removedTextLines.join(_.eol) === b.text || S.removedTextLines.join(_.eol) + _.eol === b.text) && b.range.startColumn === 1 && b.range.startLineNumber === this.inlineDiff.currentRange.endLineNumberExclusive) {
                                this.inlineDiff.newTextLines = this.inlineDiff.newTextLines.concat(S.removedTextLines), this.inlineDiff.currentRange = new wd(this.inlineDiff.currentRange.startLineNumber, this.inlineDiff.currentRange.endLineNumberExclusive + S.removedTextLines.length), this.changes.pop(), this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
                                return;
                            }
                        }
                        break;
                    }
                case Vki.Before:
                    {
                        const S = b.text.split(`
`).length - (b.range.endLineNumber - b.range.startLineNumber + 1);
                        this.inlineDiff.currentRange = new wd(this.inlineDiff.currentRange.startLineNumber + S, this.inlineDiff.currentRange.endLineNumberExclusive + S), this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
                        break;
                    }
                case Vki.Overlap:
                    {
                        if (this.active) continue;
                        this.processOverlapEdit(b, _.eol);
                        break;
                    }
            }
        })), this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
    }
    getChangeHash(t) {
        return `${t.removedLinesOriginalRange.startLineNumber}-${t.removedLinesOriginalRange.endLineNumberExclusive}-${t.addedRange.startLineNumber}-${t.addedRange.endLineNumberExclusive}`;
    }
    getUndoResourceForUri(t) {
        return t.scheme !== Ot.vscodeNotebookCell ? t : jM.parse(t)?.notebook ?? t;
    }
    get id() {
        return this.inlineDiff.id;
    }
    processOverlapEdit(t, e) {
        const n = this.lastEdits.find((b)=>b.range.startLineNumber === t.range.startLineNumber && b.range.startColumn === t.range.startColumn && b.range.endLineNumber === t.range.endLineNumber && b.range.endColumn === t.range.endColumn && (b.text ?? "") === t.text);
        if (n) {
            this.lastEdits = this.lastEdits.filter((b)=>b !== n);
            return;
        }
        let i = t.text, r = t.range.startColumn, s = t.range.endColumn, o = this.inlineDiff.currentRange.startLineNumber, a = t.range.startLineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
        a < 1 && (a = 1, r = 1, i.includes(e) ? (i = i.split(e).slice(1).join(e), o = t.range.startLineNumber + 1) : (console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), o = t.range.startLineNumber));
        let l = t.range.endLineNumber - this.inlineDiff.currentRange.startLineNumber + 1, c = !1;
        l > this.inlineDiff.newTextLines.length && (l = this.inlineDiff.newTextLines.length, s = this.inlineDiff.newTextLines[l - 1].length + 1, i.includes(e) ? i = i.split(e).slice(0, -1).join(e) : (console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), c = !0));
        const u = this.applyEditToLines(this.inlineDiff.newTextLines, {
            startLineIndex: a,
            endLineIndexInclusive: l,
            startColumn: r,
            endColumn: s,
            text: i,
            eol: e
        });
        c && u.length > 0 && u[u.length - 1] === "" && u.pop();
        const d = new wd(o, o + u.length);
        if (W71(this.isDiffStateDeferred, this.agentEditedTextLines, u)) {
            this.agentEditedTextLines = void 0, this.inlineDiff.currentRange = d, this.inlineDiff.newTextLines = u, this.inlineDiff.changes = [], this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
            return;
        }
        const h = (b, y, S)=>{
            let k = [], C = [], T = 0;
            for (const I of y){
                let A = 0, P = !1;
                for (const M of b){
                    const O = qja(M.removedLinesOriginalRange, I.removedLinesOriginalRange);
                    for(let $ = O.startLineNumber; $ < O.endLineNumberExclusive; $++){
                        P = !0;
                        let H = M.removedLinesMetaData ? M.removedLinesMetaData[$ - M.removedLinesOriginalRange.startLineNumber] : void 0;
                        H && (I.removedLinesMetaData[$ - I.removedLinesOriginalRange.startLineNumber] = H);
                    }
                    const N = {
                        startLineNumber: M.addedRange.startLineNumber - A,
                        endLineNumberExclusive: M.addedRange.endLineNumberExclusive - A
                    }, U = {
                        startLineNumber: I.addedRange.startLineNumber - T,
                        endLineNumberExclusive: I.addedRange.endLineNumberExclusive - T
                    }, j = qja(N, U);
                    for(let $ = j.startLineNumber; $ < j.endLineNumberExclusive; $++){
                        const H = this.inlineDiff.newTextLines[$ + A - 1], G = u[$ + T - 1];
                        if (!S && H !== G) continue;
                        P = !0;
                        let q = M.addedLinesMetaData ? M.addedLinesMetaData[$ + A - M.addedRange.startLineNumber] : void 0;
                        q && (I.addedLinesMetaData[$ + T - I.addedRange.startLineNumber] = q);
                    }
                    A += M.addedRange.endLineNumberExclusive - M.addedRange.startLineNumber, A -= M.removedLinesOriginalRange.endLineNumberExclusive - M.removedLinesOriginalRange.startLineNumber;
                }
                T += I.addedRange.endLineNumberExclusive - I.addedRange.startLineNumber, T -= I.removedLinesOriginalRange.endLineNumberExclusive - I.removedLinesOriginalRange.startLineNumber, k.push(I), C.push(!P);
            }
            return {
                finalChanges: k,
                userChanges: C
            };
        }, p = (b, y)=>{
            if (!b || b.length === 0) return;
            let S, k = -1;
            for(let C = 0; C < b.length; C++)if (b[C].composerGenerationID) {
                S = b[C], k = C;
                break;
            }
            if (!S && y && (S = y, k = 0, b[0] = y), !!S) {
                for(let C = k - 1; C >= 0 && !b[C].composerGenerationID; C--)b[C] = S;
                for(let C = k + 1; C < b.length; C++)b[C].composerGenerationID ? S = b[C] : b[C] = S;
                return S;
            }
        }, g = this.composerMetadata?.composerId;
        let f = g ? this.composerDataService.getComposerDataIfLoaded(g) : void 0, _ = [];
        if (Zm(this.agentEditedTextLines, u)) {
            this.agentEditedTextLines = void 0;
            const b = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0, this.composerMetadata?.composerGenerationID, this.toolCallId);
            _ = h(this.changes, b.changes, !1).finalChanges;
        } else if (f?.isNAL) {
            if (f.status !== "generating" && !this.isApplyingPartialRejectEdit) {
                let S = !1, k = 0;
                for (const C of this.changes){
                    const T = C.addedRange.startLineNumber, I = C.addedRange.endLineNumberExclusive, A = I - T, P = C.removedLinesOriginalRange.endLineNumberExclusive - C.removedLinesOriginalRange.startLineNumber;
                    if (a < I && l >= T) {
                        S = !0;
                        break;
                    }
                    I <= a && (k += A - P);
                }
                if (!S) {
                    const C = a - k, T = l - k;
                    C >= 1 && T <= this.inlineDiff.originalTextLines.length && (this.inlineDiff.originalTextLines = this.applyEditToLines(this.inlineDiff.originalTextLines, {
                        startLineIndex: C,
                        endLineIndexInclusive: T,
                        startColumn: r,
                        endColumn: s,
                        text: i,
                        eol: e
                    }));
                }
            }
            const y = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0, this.composerMetadata?.composerGenerationID, this.toolCallId);
            _ = h(this.changes, y.changes, !0).finalChanges;
            for (const S of _){
                let k;
                S.removedLinesOriginalRange.startLineNumber !== S.removedLinesOriginalRange.endLineNumberExclusive && (k = p(S.removedLinesMetaData, void 0)), S.addedRange.startLineNumber !== S.addedRange.endLineNumberExclusive && (k = p(S.addedLinesMetaData, k));
            }
        } else _ = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0).changes;
        if (this.inlineDiff.currentRange = d, this.inlineDiff.newTextLines = u, this.inlineDiff.changes = _, this.changes.length === 0) {
            this.remove();
            return;
        }
        this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
    }
    applyEditToLines(t, e) {
        const i = (t[e.startLineIndex - 1].slice(0, e.startColumn - 1) + e.text + t[e.endLineIndexInclusive - 1].slice(e.endColumn - 1)).split(e.eol);
        return [
            ...t.slice(0, e.startLineIndex - 1),
            ...i,
            ...t.slice(e.endLineIndexInclusive)
        ];
    }
    finishFailure() {
        if (!this.active) return;
        let t = !0;
        for(let n = 0; n < this.inlineDiff.newTextLines.length; n++)if (this.inlineDiff.newTextLines[n] !== this.inlineDiff.originalTextLines[n]) {
            t = !1;
            break;
        }
        if (t) {
            this.inlineDiffService.remove(this.inlineDiff.id), this._cancelGenerationWithNoChanges();
            return;
        }
        const e = this.getDiffState(!1);
        this.inlineDiff.newTextLines = e.newFullRangeTextLines, this.handleDiffState(e), this.computeDecorations(), this._finish();
    }
    finishSuccess() {
        if (!this.active) return;
        const t = this.getDiffState(!0);
        this.handleDiffState(t), Uja(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, this.changes), this.computeDecorations(), this._finish();
    }
    reject(t, e) {
        const n = this.getUndoResourceForUri(this.inlineDiff.uri), i = [];
        this.cppService.shouldNotTriggerFromInlineDiffReject = !0, setTimeout(()=>{
            this.cppService.shouldNotTriggerFromInlineDiffReject = !1;
        }, 1e3);
        for (const a of this.changes){
            let l = a.removedTextLines.join(this.modelRef.object.textEditorModel.getEOL());
            const c = this.getGreenRange(a);
            a.addedRange.startLineNumber === a.addedRange.endLineNumberExclusive && (l += this.modelRef.object.textEditorModel.getEOL());
            const u = {
                range: c,
                text: l,
                forceMoveMarkers: !0
            };
            i.push(u);
        }
        this.inlineDiffService.recordRejectEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId,
            actorRequestId: e,
            silent: t?.rejectSilently
        }), t?.rejectSilently !== !0 && this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "reject", {
            numPartiallyAccepted: this.numAcceptedPartialDiffs,
            numPartiallyRejected: this.numRejectedPartialDiffs,
            numUnresolved: this.changes.length
        });
        const r = [];
        try {
            r.push(...this.modelRef.object.textEditorModel.applyEdits(i, !0));
        } catch (a) {
            console.warn("Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?", a);
        }
        this.inlineDiffService.recordAfterRejectEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId
        }), this.removeDecorations(), this.inlineDiffService.removeInlineDiff(this.inlineDiff.id);
        const s = this.cmdKStateService.getPromptBarByDiffId(this.inlineDiff.id);
        s && (this.inlineDiff.lastPromptBarCurrentRange = this.inlineDiffService.getPromptBarCurrentRange(s, this.modelRef.object.textEditorModel));
        const o = new zae("Undo Reject Suggestion", "undo-reject-suggestion", this.inlineDiff.id, n, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(r);
            } catch (a) {
                console.error("[inlineDiff] Error retrieving undo data:", a);
            }
        }, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(i);
            } catch (a) {
                console.error("[inlineDiff] Error retrieving undo data:", a);
            }
        });
        this.inlineDiffService.pushUndoElement(o, {});
    }
    cancel() {
        this.inlineDiffService.recordCancelEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId
        }), this.aiService.getGenerationMetadata(this.inlineDiff.generationUUID)?.type !== "composer" && this.aiService.removeInprogressAIGeneration(this.inlineDiff.generationUUID);
    }
    compileAndFirePartialHistory() {
        if (this.changeFates.size === 0 || !this.composerMetadata) return;
        const t = [], e = Array.from(this.changeFates.entries()).sort(([n, i], [r, s])=>i.removedRange.startLineNumber - s.removedRange.startLineNumber);
        for (const [n, i] of e)t.push(i);
        if (this.numAcceptedPartialDiffs > 0 || this.numRejectedPartialDiffs > 0) {
            const n = this.numAcceptedPartialDiffs > 0 && this.numRejectedPartialDiffs > 0 ? "partially_accepted" : this.numAcceptedPartialDiffs > 0 ? "fully_accepted" : "fully_rejected";
            this.inlineDiffService.firePartialDiffCompletionEvent({
                requestId: this.inlineDiff.generationUUID,
                diffId: this.inlineDiff.id,
                uri: this.inlineDiff.uri,
                inlineDiff: this.inlineDiff,
                composerMetadata: this.composerMetadata,
                change: {
                    accepted: [],
                    rejected: []
                },
                previousContent: "",
                updatedContent: "",
                source: YW.COMPOSER,
                file: this.inlineDiff.uri.toString(),
                range: {
                    startLineNumber: this.inlineDiff.currentRange.startLineNumber,
                    endLineNumber: this.inlineDiff.currentRange.endLineNumberExclusive,
                    startColumn: 0,
                    endColumn: -1
                },
                sourceContext: "composer",
                partialInlineDiffFates: t
            });
        }
    }
    remove() {
        this.compileAndFirePartialHistory(), this.removeDecorations(), this.inlineDiffService.removeInlineDiff(this.inlineDiff.id), this.dispose();
    }
    add() {
        this.computeDecorations(), this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff));
    }
    getGreenRange(t) {
        const e = this.modelRef.object.textEditorModel, n = e.getLineCount();
        if (t.removedTextLines.length === 0) {
            let i = this.inlineDiff.currentRange.startLineNumber + t.addedRange.startLineNumber - 1, r = this.inlineDiff.currentRange.startLineNumber + t.addedRange.endLineNumberExclusive - 1;
            if (r <= n) return new qt(i, 1, r, 1);
            {
                r = n;
                let s = 1;
                return i > 1 && (i--, s = e.getLineMaxColumn(i)), new qt(i, s, r, e.getLineMaxColumn(r));
            }
        } else {
            const i = this.inlineDiff.currentRange.startLineNumber + t.addedRange.endLineNumberExclusive - 1 - 1, r = Math.min(i, n);
            return t.addedRange.endLineNumberExclusive === t.addedRange.startLineNumber ? new qt(this.inlineDiff.currentRange.startLineNumber + t.addedRange.startLineNumber - 1, 1, this.inlineDiff.currentRange.startLineNumber + t.addedRange.startLineNumber - 1, 1) : new qt(this.inlineDiff.currentRange.startLineNumber + t.addedRange.startLineNumber - 1, 1, r, this.modelRef.object.textEditorModel.getLineMaxColumn(r));
        }
    }
    rejectPartialDiff(t) {
        const e = this.getUndoResourceForUri(this.inlineDiff.uri), n = this.findClosestChangeIndex(t), i = this.changes[n];
        this.inlineDiffService.trackAcceptRejectDiffDetails("reject", [
            i
        ], "editor");
        const r = this.getChangeHash(i), s = this.changes.length === 1, o = this.getGreenRange(i), a = i.addedRange.endLineNumberExclusive === i.addedRange.startLineNumber ? this.modelRef.object.textEditorModel.getEOL() : "", l = o.endLineNumber > this.modelRef.object.textEditorModel.getLineCount(), c = this.modelRef.object.textEditorModel.getEOL(), u = (l ? c : "") + i.removedTextLines.join(c) + a, d = {
            range: o,
            text: u,
            forceMoveMarkers: !0
        };
        this.inlineDiffService.recordPartialRejectEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            redLines: u.split(`
`),
            greenLines: this.modelRef.object.textEditorModel.getValueInRange(o).split(`
`),
            greenRange: o,
            promptBarId: this.promptBarId
        }), this.changeFates.set(r, {
            fate: "rejected",
            removedLines: i.removedTextLines,
            removedRange: i.removedLinesOriginalRange,
            addedLines: this.inlineDiff.newTextLines.slice(i.addedRange.startLineNumber - 1, i.addedRange.endLineNumberExclusive - 1),
            addedRange: i.addedRange
        });
        const h = [];
        try {
            this.isApplyingPartialRejectEdit = !0, h.push(...this.modelRef.object.textEditorModel.applyEdits([
                d
            ], !0));
        } catch (g) {
            console.warn("Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?", g);
        } finally{
            this.isApplyingPartialRejectEdit = !1;
        }
        if (this.inlineDiffService.recordAfterRejectEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId
        }), s) {
            this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "partial", {
                numPartiallyAccepted: this.numAcceptedPartialDiffs,
                numPartiallyRejected: this.numRejectedPartialDiffs,
                numUnresolved: 0
            });
            const g = this.cmdKStateService.getPromptBarByDiffId(this.inlineDiff.id);
            g && (this.inlineDiff.lastPromptBarCurrentRange = this.inlineDiffService.getPromptBarCurrentRange(g, this.modelRef.object.textEditorModel));
        }
        this.numRejectedPartialDiffs++;
        const p = new zae("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, e, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(h);
            } catch (g) {
                console.error("[inlineDiff] Error undoing reject partial diff:", g);
            }
        }, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits([
                    d
                ]);
            } catch (g) {
                console.error("[inlineDiff] Error undoing reject partial diff:", g);
            }
        });
        return this.inlineDiffService.pushUndoElement(p, {}), s && this.remove(), s;
    }
    findClosestChange(t) {
        return this.changes[this.findClosestChangeIndex(t)];
    }
    findClosestChangeIndex(t) {
        let e = t.lineNumber;
        e = t.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
        let n = 0;
        const i = (r)=>Math.min(Math.abs(r.addedRange.endLineNumberExclusive - 1 - e), Math.abs(r.addedRange.startLineNumber - e));
        for(let r = 1; r < this.changes.length; r++){
            const s = this.changes[r], o = i(s), a = i(this.changes[n]);
            o < a && (n = r);
        }
        return n;
    }
    acceptPartialDiff(t) {
        const e = this.getUndoResourceForUri(this.inlineDiff.uri), n = this.findClosestChangeIndex(t), i = this.changes[n];
        this.inlineDiffService.trackAcceptRejectDiffDetails("accept", [
            i
        ], "editor");
        const r = this.getChangeHash(i), s = this.inlineDiff.id, o = this.inlineDiffService;
        this.inlineDiffService.recordPartialAcceptEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            redLines: (i.removedTextLines.join(this.modelRef.object.textEditorModel.getEOL()) + (i.addedRange.endLineNumberExclusive === i.addedRange.startLineNumber ? this.modelRef.object.textEditorModel.getEOL() : "")).split(`
`),
            greenLines: this.modelRef.object.textEditorModel.getValueInRange(this.getGreenRange(i)).split(`
`),
            greenRange: this.getGreenRange(i),
            promptBarId: this.promptBarId
        }), this.changeFates.set(r, {
            fate: "accepted",
            removedLines: i.removedTextLines,
            removedRange: i.removedLinesOriginalRange,
            addedLines: this.inlineDiff.newTextLines.slice(i.addedRange.startLineNumber - 1, i.addedRange.endLineNumberExclusive - 1),
            addedRange: i.addedRange
        });
        const a = i.removedLinesOriginalRange.startLineNumber - 1, l = i.removedLinesOriginalRange.endLineNumberExclusive - i.removedLinesOriginalRange.startLineNumber, c = this.inlineDiff.originalTextLines.slice(a, a + l), u = this.inlineDiff.newTextLines.slice(i.addedRange.startLineNumber - 1, i.addedRange.endLineNumberExclusive - 1), d = {
            index: a,
            removedLines: c,
            addedLines: u
        }, h = [
            ...this.inlineDiff.originalTextLines.slice(0, d.index),
            ...d.addedLines,
            ...this.inlineDiff.originalTextLines.slice(d.index + l)
        ];
        let p = structuredClone(this.changes), g = i.addedRange.endLineNumberExclusive - i.addedRange.startLineNumber;
        g -= i.removedLinesOriginalRange.endLineNumberExclusive - i.removedLinesOriginalRange.startLineNumber;
        for(let b = n + 1; b < this.changes.length; b++){
            const y = this.changes[b];
            y.removedLinesOriginalRange.startLineNumber += g, y.removedLinesOriginalRange.endLineNumberExclusive += g;
        }
        this.inlineDiff.changes = this.changes.filter((b)=>b !== i);
        let f = structuredClone(this.changes);
        this.inlineDiff.originalTextLines = h, this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations(), this.numAcceptedPartialDiffs++;
        const _ = new zae("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, e, ()=>{
            const b = o.getHandlerByDiffId(s);
            if (!b) throw new Error("[inlineDiffService] Handler not found");
            const y = b.getUndoResourceForUri(b.inlineDiff.uri);
            this.undoRedoService.blockPushElements(y);
            try {
                b.inlineDiff.originalTextLines = [
                    ...b.inlineDiff.originalTextLines.slice(0, d.index),
                    ...d.removedLines,
                    ...b.inlineDiff.originalTextLines.slice(d.index + d.addedLines.length)
                ], b.inlineDiff.changes = structuredClone(p), o.updateInlineDiff(wpe(b.inlineDiff)), b.computeDecorations(), b.numAcceptedPartialDiffs--;
            } finally{
                this.undoRedoService.unblockPushElements(y);
            }
        }, ()=>{
            const b = o.getHandlerByDiffId(s);
            if (!b) throw new Error("[inlineDiffService] Handler not found");
            const y = b.getUndoResourceForUri(b.inlineDiff.uri);
            this.undoRedoService.blockPushElements(y);
            try {
                b.inlineDiff.originalTextLines = [
                    ...b.inlineDiff.originalTextLines.slice(0, d.index),
                    ...d.addedLines,
                    ...b.inlineDiff.originalTextLines.slice(d.index + d.removedLines.length)
                ], b.inlineDiff.changes = structuredClone(f), b.inlineDiffService.updateInlineDiff(wpe(b.inlineDiff)), b.computeDecorations(), b.numAcceptedPartialDiffs++;
            } finally{
                this.undoRedoService.unblockPushElements(y);
            }
        });
        return this.inlineDiffService.pushUndoElement(_, {}), this.changes.length === 0 ? (this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "partial", {
            numPartiallyAccepted: this.numAcceptedPartialDiffs,
            numPartiallyRejected: this.numRejectedPartialDiffs,
            numUnresolved: 0
        }), this.remove(), !0) : !1;
    }
    accept() {
        this.inlineDiffService.recordAcceptEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId
        }), this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "accept", {
            numPartiallyAccepted: this.numAcceptedPartialDiffs,
            numPartiallyRejected: this.numRejectedPartialDiffs,
            numUnresolved: this.changes.length
        }), this.remove();
    }
    removeDecorations() {
        const t = this.cachedDecorationIDs;
        this.cachedDecorationIDs = [], this.deltaDecorations(t, []);
    }
    get changes() {
        return this.ensureDiffStateComputed(), this.inlineDiff.changes;
    }
    tryDeferDiffState() {
        return !this.editorHostPolicy.alwaysHidesInlineDiffDecorations || !this._shouldHideDecorations() || !this.experimentService.checkFeatureGate("inline_diff_defer_hidden_diff_state", {
            disableExposureLog: !1
        }) ? !1 : (this.isDiffStateDeferred = !0, this.inlineDiff.changes = [], !0);
    }
    ensureDiffStateComputed() {
        if (!this.isDiffStateDeferred) return;
        this.isDiffStateDeferred = !1;
        const t = this.getDiffState(!0, this.composerMetadata?.composerGenerationID, this.toolCallId);
        this.inlineDiff.changes = t.changes, this.inlineDiff.activeLine = t.activeLine, this.inlineDiff.pendingRange = t.pendingRange, Uja(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, t.changes), this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff));
    }
    getDiffState(t, e, n) {
        return this._timedDiffState(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, t, e, n);
    }
    _timedDiffState(t, e, n, i, r) {
        const s = performance.now(), o = ECm(t, e, n, i, r);
        return this.inlineDiffService.recordDiffComputation(performance.now() - s, Math.max(t.length, e.length), n), o;
    }
    addLinesToDiff(t) {
        if (!this.active) return;
        const e = [];
        for (const i of t){
            (i.includes(`
`) || i.includes("\r")) && console.warn("InlineDiffService#addLine: line contains newline characters, which is not supported");
            let r = i.replace(/\r/g, "");
            r = r.replace(/\n/g, ""), e.push(r);
        }
        this.inlineDiff.newTextLines = this.inlineDiff.newTextLines.concat(e);
        const n = this.getDiffState(!1);
        this.handleDiffState(n), this.computeDecorations();
    }
    _toDescriptor() {
        const t = this._shouldHideDecorations();
        return {
            id: this.inlineDiff.id,
            sourceId: "inline-diff",
            uri: this.inlineDiff.uri,
            currentRange: {
                startLineNumber: this.inlineDiff.currentRange.startLineNumber,
                endLineNumberExclusive: this.inlineDiff.currentRange.endLineNumberExclusive
            },
            changes: this.changes,
            originalLineTokens: this.inlineDiff.originalLineTokens,
            streamingState: {
                activeLine: this.inlineDiff.activeLine,
                pendingRange: this.inlineDiff.pendingRange
            },
            metadata: {
                generationId: this.inlineDiff.generationUUID,
                composerId: this.inlineDiff.composerMetadata?.composerId,
                toolCallId: this.inlineDiff.toolCallId,
                hideDeletionViewZones: t,
                source: this.inlineDiff.source
            }
        };
    }
    _getModelAccess() {
        return {
            getLineMaxColumn: (t)=>this.modelRef.object.textEditorModel.getLineMaxColumn(t),
            getValueInRange: (t)=>this.modelRef.object.textEditorModel.getValueInRange(t)
        };
    }
    _isActivelyGenerating() {
        return this.aiService.inprogressAIGenerations.value.some((t)=>t.generationUUID === this.inlineDiff.generationUUID);
    }
    _shouldHideDecorations() {
        return this.diffDecorationVisibilityService.shouldHideInlineDiffs();
    }
    computeDecorations() {
        if (this._shouldHideDecorations()) {
            this.cachedDecorationIDs = this.deltaDecorations(this.cachedDecorationIDs, []);
            return;
        }
        const e = this.configurationService.getValue(ZOe), n = this._toDescriptor(), i = {
            isThemed: e ?? hJn,
            showRemovedChanges: !0,
            showInsertedLineBackgrounds: !0
        }, r = Y71(n, this._isActivelyGenerating(), i, this._getModelAccess()), s = this.configurationService.getValue(ipn) ?? pJn, o = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
            disableExposureLog: !1
        })?.maxDecorations ?? 100;
        s && this.changes.length > o && r.splice(0), this.cachedDecorationIDs = this.deltaDecorations(this.cachedDecorationIDs, r);
    }
    markSuppressionNotificationReported() {
        return this.hasShownThresholdNotification ? !1 : (this.hasShownThresholdNotification = !0, !0);
    }
    deltaDecorations(t, e, n = 0) {
        const i = this.modelRef.object.textEditorModel;
        return !i || i.isDisposed() ? [] : i.deltaDecorations(t, e, n);
    }
    fireApplyDiffEditsAsync(t, e, n, i, r) {
        queueMicrotask(()=>{
            const s = n.map((o)=>{
                const a = i.getOffsetAt({
                    lineNumber: o.range.startLineNumber,
                    column: o.range.startColumn
                });
                let l = 0;
                return (o.range.startLineNumber !== o.range.endLineNumber || o.range.startColumn !== o.range.endColumn) && (l = i.getOffsetAt({
                    lineNumber: o.range.endLineNumber,
                    column: o.range.endColumn
                }) - a), {
                    ...o,
                    rangeOffset: a,
                    rangeLength: l
                };
            });
            this.inlineDiffService.fireApplyDiffEdits({
                uri: t,
                requestId: e,
                edits: s,
                source: YW.COMPOSER,
                composerMetadata: r
            });
        });
    }
    handleDiffState(t) {
        const e = this.modelRef.object.textEditorModel, n = K71(t, this.inlineDiff, this.modelRef);
        this.lastEdits = n;
        let i = [];
        i = e.applyEdits(n, !0), this.fireApplyDiffEditsAsync(this.inlineDiff.uri, this.inlineDiff.generationUUID, n, e, this.composerMetadata), this.inlineDiff.currentRange = new wd(this.inlineDiff.currentRange.startLineNumber, this.inlineDiff.currentRange.startLineNumber + t.newFullRangeTextLines.length), this.isDiffStateDeferred = !1, this.inlineDiff.changes = t.changes, this.inlineDiff.activeLine = t.activeLine, this.inlineDiff.pendingRange = t.pendingRange, this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff));
        const r = new zae("Undo Update Diff", "undo-update-diff", this.inlineDiff.id, e.uri, async ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(i);
            } catch (s) {
                console.error("[inlineDiff] Error undoing update diff:", s);
            }
        }, async ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(n);
            } catch (s) {
                console.error("[inlineDiff] Error undoing update diff:", s);
            }
        });
        this.inlineDiffService.pushUndoElement(r, {});
    }
    cancelInUndo() {
        this.aiService.removeInprogressAIGeneration(this.inlineDiff.generationUUID), this.active = !1;
    }
    setDiff(t) {
        this.inlineDiff = t, this.inlineDiffService.updateInlineDiff(wpe(this.inlineDiff)), this.computeDecorations();
    }
    activate(t, e, n) {
        this.active = !0, this.doneCallback = t, this.cancelGenerationWithNoChangesCallback = e, this.rejectCallback = n;
    }
    _finish() {
        this.active = !1, this.doneCallback && this.doneCallback({
            generationUUID: this.inlineDiff.generationUUID,
            diffRange: this.inlineDiff.currentRange,
            model: this.modelRef.object.textEditorModel
        });
    }
    _cancelGenerationWithNoChanges() {
        this.cancelGenerationWithNoChangesCallback && this.cancelGenerationWithNoChangesCallback();
    }
    callRejectCallback() {
        this.rejectCallback && this.rejectCallback();
    }
    dispose() {
        super.dispose(), this.modelRef?.dispose();
    }
}, pPe = Re([
    b2(3, UO),
    b2(4, C7),
    b2(5, yi),
    b2(6, qae),
    b2(7, l$),
    b2(8, jl),
    b2(9, X7),
    b2(10, Cr),
    b2(11, no),
    b2(12, fCe),
    b2(13, N9t)
], pPe), Rbe = "speculative-full-file";

}
