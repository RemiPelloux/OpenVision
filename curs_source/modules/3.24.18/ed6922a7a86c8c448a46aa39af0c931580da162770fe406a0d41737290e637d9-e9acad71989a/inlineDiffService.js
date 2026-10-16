import { GTv, HTv, KTv, Loo, Nee, Nse, VTv, YTv, _Nn, aFd, fao, nTv, qj, rFd, vao } from "./A3u.js";
import { Se, bt, lNt, nh, ns, si, ve, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { M6, YHt } from "./aiCodeTypes.js";
import { ca, k2, la } from "./aiMiscServices.js";
import { Sg, jp } from "./aiService.js";
import { dr } from "./arrays.js";
import { Y3, f_e } from "./cmdKStateService.js";
import { Ja, md } from "./codeEditorService.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { Cn, qt } from "./configuration.js";
import { KNt, RAe, So, gmn, mmn } from "./constants_8.js";
import { Gse, r1e } from "./cppEventLogger.js";
import { Ade, o1e } from "./diffDecorationVisibilityService.js";
import { Nv } from "./editorBrowser.js";
import { M2t, pgn } from "./editorHostPolicy.js";
import { Ni, hn } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { fNn, hUe } from "./genericUndoRedoElement.js";
import { FGi } from "./inlineDiffDecorationUtils.js";
import { sFd, vNn } from "./inlineDiffServiceUtils.js";
import { TX, oFd } from "./inlineDiffUndoRedoElement.js";
import { Ze, _t } from "./instantiation.js";
import { Vl, hA } from "./lineRange.js";
import { ag, oc } from "./map.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { dm, ed } from "./notebookCommon.js";
import { D_, Ow } from "./notebookService.js";
import { fu, zl } from "./pathService.js";
import { eF } from "./planFileUtils.js";
import { ya } from "./position.js";
import { Fp, Lh, mn, qn, vn } from "./qIc.js";
import { dt, qi } from "./range.js";
import { KHt } from "./reactiveStorageService.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Nl, bc } from "./resolverService.js";
import { Li, pl } from "./resources.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { $h, D7c, R7c, np } from "./telemetry.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { $P, UP } from "./undoRedo.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
var _ao, bao, HE, cFd, lFd, zM, yao, Sao, cWt, kao, v_e, Fee;
export { Fee, HE, Sao, _ao, bao, cFd, cWt, kao, lFd, v_e, yao, zM };
var __wakaru_CN_initialized = false;
export function CN() {
if (__wakaru_CN_initialized) return;
__wakaru_CN_initialized = true;
"use strict";
x(), qn(), dr(), So(), si(), bt(), Se(), oc(), li(), Li(), Qt(), Js(), Cn(), Pn(), Ze(), KHt(), Ha(), sy(), YHt(), Vn(), np(), $P(), rl(), ci(), r1e(), nl(), yC(), eF(), fu(), ed(), Ow(), la(), Sg(), f_e(), Ni(), Vr(), qs(), Ag(), hA(), ya(), qi(), Ll(), Nl(), Nv(), md(), fNn(), sFd(), oFd(), FGi(), o1e(), pgn(), _ao = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), bao = (e)=>{
    throw TypeError(e);
}, HE = (e, t)=>(n, i)=>t(n, i, e), cFd = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && bao("Object expected");
        var i, r;
        n && (i = t[_ao("asyncDispose")]), i === void 0 && (i = t[_ao("dispose")], n && (r = i)), typeof i != "function" && bao("Object not disposable"), r && (i = function() {
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
}, lFd = (e, t, n)=>{
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
}, zM = vn("inlineDiffService"), yao = 128, Sao = "inlineDiffUndoRedo", cWt = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R){
        super(), this.textModelService = e, this.instantiationService = t, this.reactiveStorageService = n, this.undoRedoService = i, this.editorService = r, this.uriIdentityService = s, this.telemetryService = o, this.cppEventLogger = a, this.codeEditorService = c, this.textFileService = l, this.storageService = u, this.workspaceContextService = h, this.composerEventService = p, this.aiService = g, this.cmdKStateService = f, this.analyticsService = v, this.composerDataService = b, this.experimentService = y, this.pathService = T, this.notebookService = E, this.modelService = A, this.environmentService = R, this.inlineDiffs = this._register(new av([])), this.diffHandlers = new Map, this._inlineDiffCache = new ag(5), this._persistedDiffIds = new Set, this._parkedStoredDiffs = new Map, this._parkedRestoresInFlight = new Map, this._parkInlineDiffs = !1, this._usePendingDiffSingleShotRestore = !1, this._onDidChangeParkedDiffs = this._register(new ve), this.onDidChangeParkedDiffs = this._onDidChangeParkedDiffs.event, this._dirtyDiffIds = new Set, this._onDidChangeDiffInfos = this._register(new ve), this.onDidChangeDiffInfos = this._onDidChangeDiffInfos.event, this._onDidAcceptDiff = this._register(new ve), this.onDidAcceptDiff = this._onDidAcceptDiff.event, this._onDidRejectDiff = this._register(new ve), this.onDidRejectDiff = this._onDidRejectDiff.event, this._onDidAddDiff = this._register(new ve), this.onDidAddDiff = this._onDidAddDiff.event, this._onDidRemoveDiff = this._register(new ve), this.onDidRemoveDiff = this._onDidRemoveDiff.event, this._onDidAddDiffFromUndoRedo = this._register(new ve), this.onDidAddDiffFromUndoRedo = this._onDidAddDiffFromUndoRedo.event, this._onDidRemoveDiffFromUndoRedo = this._register(new ve), this.onDidRemoveDiffFromUndoRedo = this._onDidRemoveDiffFromUndoRedo.event, this._onDidAcceptPartialDiff = this._register(new ve), this.onDidAcceptPartialDiff = this._onDidAcceptPartialDiff.event, this._onDidRejectPartialDiff = this._register(new ve), this.onDidRejectPartialDiff = this._onDidRejectPartialDiff.event, this._onDidApplyDiffEdits = this._register(new ve), this.onDidApplyDiffEdits = this._onDidApplyDiffEdits.event, this._onDidComputeDiff = this._register(new ve), this.onDidComputeDiff = this._onDidComputeDiff.event, this._onDidSuppressVisibleInlineDiff = this._register(new ve), this.onDidSuppressVisibleInlineDiff = this._onDidSuppressVisibleInlineDiff.event, this._userPlansDir = Nse(this.pathService.userHome({
            preferLocal: !0
        }));
        for (const D of cWt.registeredActions)D(this.reactiveStorageService);
        this.storageService.cursorDiskKVClearPrefix(Sao).catch((D)=>console.error("[inlineDiff] Error clearing undo/redo data:", D)), this._register(this.storageService.cursorDiskKVOnShouldSave(async (D)=>{
            await this.persistInlineDiffs();
        })), this.loadInlineDiffs().catch((D)=>{
            console.error("[inlineDiff] Error loading inline diffs:", D);
        }), this._register(this.composerEventService.onToRemoveDiffs(async (D)=>{
            const P = this.diffInfos.filter((N)=>N.uri.toString() === D.uri.toString());
            for (const N of P)this.remove(N.diffId);
            for (const N of this._parkedStoredDiffs.values())if (pl.isEqual(Ee.revive(N.uri), D.uri)) {
                this.discardParkedDiff(N.diffId);
                break;
            }
        }));
    }
    get diffInfos() {
        return Array.from(this.diffHandlers.values()).map((e)=>({
                uri: e.inlineDiff.uri,
                diffId: e.id,
                composerMetadata: e.composerMetadata
            }));
    }
    static registerAction(e) {
        this.registeredActions.push(e);
    }
    recordCancelEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            requestId: e.requestId,
            promptBarId: e.promptBarId,
            eventType: {
                case: "interruptGeneration",
                value: {}
            }
        });
    }
    recordDiffComputation(e, t, n) {
        !Number.isFinite(e) || e < 0 || this._onDidComputeDiff.fire({
            durationMs: e,
            lineCount: t,
            isFinal: n
        });
    }
    recordAcceptEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            requestId: e.requestId,
            promptBarId: e.promptBarId,
            eventType: {
                case: "acceptAll",
                value: {}
            }
        });
    }
    recordRejectEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            requestId: e.requestId,
            promptBarId: e.promptBarId,
            eventType: {
                case: "rejectAll",
                value: {
                    ...e.actorRequestId !== void 0 ? {
                        actorRequestId: e.actorRequestId
                    } : {},
                    ...e.silent !== void 0 ? {
                        silent: e.silent
                    } : {}
                }
            }
        });
    }
    recordAfterRejectEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            requestId: e.requestId,
            promptBarId: e.promptBarId,
            eventType: {
                case: "afterReject",
                value: {}
            }
        });
    }
    recordPartialAcceptEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            requestId: e.requestId,
            promptBarId: e.promptBarId,
            eventType: {
                case: "acceptPartialDiff",
                value: {
                    greenRange: e.greenRange,
                    redLines: e.redLines,
                    greenLines: e.greenLines
                }
            }
        });
    }
    recordPartialRejectEvent(e) {
        this.cppEventLogger.recordCmdKEvent(e.model, {
            promptBarId: e.promptBarId,
            requestId: e.requestId,
            eventType: {
                case: "rejectPartialDiff",
                value: {
                    greenRange: e.greenRange,
                    redLines: e.redLines,
                    greenLines: e.greenLines
                }
            }
        });
    }
    async reportEditFate(e, t, n) {}
    fireApplyDiffEdits(e) {
        this._onDidApplyDiffEdits.fire(e);
    }
    getInlineDiffDiskWorkspaceStorageKey() {
        return `inlineDiffs-${this.workspaceContextService.getWorkspace()?.id || "default"}`;
    }
    getInlineDiffStorageKeyPrefix() {
        return `inlineDiff:${this.workspaceContextService.getWorkspace()?.id || "default"}:`;
    }
    getInlineDiffStorageKey(e) {
        return `${this.getInlineDiffStorageKeyPrefix()}${e}`;
    }
    updateInlineDiff(e) {
        this.inlineDiffs.change([
            ...this.inlineDiffs.value.filter((t)=>t.id !== e.id),
            e
        ]), e.composerMetadata !== void 0 && this._dirtyDiffIds.add(e.id);
    }
    removeInlineDiff(e) {
        const t = this.inlineDiffs.value.filter((n)=>n.id !== e);
        t.length !== this.inlineDiffs.value.length && this.inlineDiffs.change(t);
    }
    updateInlineDiffProperty(e, t, n) {
        const i = this.inlineDiffs.value, r = i.findIndex((s)=>s.id === e);
        if (r >= 0) {
            const s = [
                ...i
            ];
            s[r] = {
                ...s[r],
                [t]: n
            }, this.inlineDiffs.change(s), s[r].composerMetadata !== void 0 && this._dirtyDiffIds.add(e);
        }
    }
    async persistInlineDiffs() {
        try {
            const e = this.inlineDiffs.value.filter((t)=>t.composerMetadata !== void 0 && this._dirtyDiffIds.has(t.id));
            if (e.length === 0) return;
            await Promise.allSettled(e.map(async (t)=>{
                if (this._parkInlineDiffs && !this._dirtyDiffIds.has(t.id)) return;
                const n = {
                    diffId: t.id,
                    uri: t.uri,
                    originalTextLines: t.originalTextLines,
                    generationUUID: t.generationUUID,
                    composerMetadata: t.composerMetadata,
                    cellId: t.cellId,
                    hideDecorations: t.hideDecorations,
                    ...this._parkInlineDiffs ? {
                        persistedAt: Date.now()
                    } : {}
                };
                await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(t.id), JSON.stringify(n)), this._dirtyDiffIds.delete(t.id), this._persistedDiffIds.add(t.id);
            }));
        } catch (e) {
            console.error("[inlineDiff] Error persisting inline diffs:", e);
        }
    }
    async loadInlineDiffs() {
        try {
            let e = [];
            const t = await this.storageService.cursorDiskKVGetPrefix(this.getInlineDiffStorageKeyPrefix());
            if (t.length > 0) {
                for (const [, s] of t)try {
                    const o = JSON.parse(s);
                    e.push(o);
                } catch (o) {
                    console.error("[inlineDiff] Error parsing stored diff:", o);
                }
                console.log(`[inlineDiff] Loaded ${e.length} diffs from per-key storage`);
            } else {
                const s = await this.storageService.cursorDiskKVGet(this.getInlineDiffDiskWorkspaceStorageKey());
                if (s) {
                    const o = JSON.parse(s);
                    Array.isArray(o) && (e = o, console.log(`[inlineDiff] Migrating ${e.length} diffs from legacy single-blob format`), await Promise.allSettled(e.map(async (a)=>{
                        await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(a.diffId), JSON.stringify(a));
                    })), await this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffDiskWorkspaceStorageKey()), console.log("[inlineDiff] Migration complete, deleted legacy storage key"));
                }
            }
            if (e.length === 0) return;
            const n = this.environmentService.remoteAuthority, i = n?.startsWith("ssh-remote+") === !0 || n?.includes("@ssh-remote+") === !0;
            if (this._usePendingDiffSingleShotRestore = i, this._parkInlineDiffs = this.experimentService.checkFeatureGate("park_inline_diffs", {
                disableExposureLog: !1
            }), !this._parkInlineDiffs) {
                await this.restoreAllStoredDiffsEagerly(e), this.autoAcceptStalePlanFileDiffs();
                return;
            }
            if (e = await this.pruneStoredDiffs(e), e.length === 0) return;
            for (const s of e)this._persistedDiffIds.add(s.diffId);
            const r = new Set;
            for (const s of e){
                const o = Ee.revive(s.uri);
                r.has(o.toString()) || (r.add(o.toString()), this.modelService.getModel(o) !== null || qj(o, this._userPlansDir) ? !await this.restoreStoredDiff(s) && !qj(o, this._userPlansDir) && this._persistedDiffIds.has(s.diffId) && this.getHandlerByDiffId(s.diffId) === void 0 && this._parkedStoredDiffs.set(o.toString(), s) : this._parkedStoredDiffs.set(o.toString(), s));
            }
            this._parkedStoredDiffs.size > 0 && this._onDidChangeParkedDiffs.fire(), this.autoAcceptStalePlanFileDiffs();
        } catch (e) {
            console.error("[inlineDiff] Error loading inline diffs from storage:", e);
        }
    }
    async restoreAllStoredDiffsEagerly(e) {
        const t = this._usePendingDiffSingleShotRestore;
        this._persistedDiffIds = new Set(e.map((s)=>s.diffId));
        const n = new Set, i = [], r = [];
        await Promise.allSettled(e.map(async (s)=>{
            const o = Ee.revive(s.uri);
            n.has(o.toString()) || (n.add(o.toString()), !t && !this.textFileService.isDirty(o) && r.push(o), i.push([
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
                const { uri: c, originalTextLines: l, generationUUID: u, composerMetadata: h, cellId: p, hideDecorations: g } = s, f = Ee.revive(c);
                let v, b = [];
                try {
                    const A = o.object.textEditorModel;
                    if (b = A.getLinesContent(), nh(b, l)) {
                        this._persistedDiffIds.delete(s.diffId), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(s.diffId)).catch((D)=>{
                            console.error("[inlineDiff] Error deleting storage key for stale diff:", D);
                        }), o.dispose();
                        continue;
                    }
                    !t && !g && A.setValue(l.join(A.getEOL())), v = {
                        startLineNumber: 1,
                        endLineNumberExclusive: (t || g ? b.length : A.getLineCount()) + 1
                    };
                } catch  {
                    console.log("[inlineDiff] File no longer exists, skipping diff restoration:", f.toString()), o.dispose();
                    continue;
                }
                const y = h.codeblockId !== void 0 || h.toolCallId !== void 0, T = h.composerId !== void 0 && y && h.composerGenerationID !== void 0, E = {
                    id: s.diffId,
                    uri: f,
                    generationUUID: u,
                    currentRange: v,
                    originalTextLines: l,
                    prompt: "",
                    attachedToPromptBar: !1,
                    source: Fee,
                    createdAt: Date.now(),
                    hideDeletionViewZones: g ?? !1,
                    hideDecorations: g,
                    composerMetadata: T ? {
                        composerId: h.composerId,
                        codeblockId: h.codeblockId,
                        toolCallId: h.toolCallId,
                        composerGenerationID: h.composerGenerationID
                    } : void 0,
                    cellId: p
                };
                t || g ? (o.dispose(), a = await this.addDecorationsOnlyDiff({
                    ...E,
                    newTextLines: b
                }, !0)) : (a = this.addActiveDiff(E, o), this.addLinesToDiff(a.id, b), this.finishDiffSuccess(a.id)), this._dirtyDiffIds.delete(a.id), console.log(`[inlineDiff] Restored diff ${a.id} for ${f.toString()}`);
            } catch (c) {
                console.error("[inlineDiff] Error loading individual diff:", c), !a && !this.diffHandlers.has(s.diffId) && o.dispose();
            }
        }
        t || await Promise.allSettled(r.map(async (s)=>{
            this.textFileService.isDirty(s) && await this.textFileService.save(s, {
                reason: 1,
                skipSaveParticipants: !0,
                force: !0,
                ignoreModifiedSince: !0
            });
        }));
    }
    async pruneStoredDiffs(e) {
        const t = [];
        for (const o of e)o.persistedAt === void 0 && (o.persistedAt = 0, t.push(o));
        const n = [
            ...e
        ].sort((o, a)=>a.persistedAt - o.persistedAt), i = n.slice(0, yao), r = n.slice(yao), s = new Set(i);
        return await Promise.allSettled([
            ...t.filter((o)=>s.has(o)).map((o)=>this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(o.diffId), JSON.stringify(o))),
            ...r.map((o)=>this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(o.diffId)))
        ]), i;
    }
    async restoreStoredDiff(e) {
        if (this.getHandlerByDiffId(e.diffId)) return !1;
        const { uri: t, originalTextLines: n, generationUUID: i, composerMetadata: r, cellId: s, hideDecorations: o } = e, a = Ee.revive(t);
        let c;
        try {
            c = await this.textModelService.createModelReference(a, !0);
        } catch  {
            return !1;
        }
        const l = this._usePendingDiffSingleShotRestore, u = !l && !this.textFileService.isDirty(a);
        let h;
        const p = ()=>{
            h !== void 0 && !h.isDisposed() && this.getHandlerByDiffId(e.diffId) === void 0 && h.setValue(g.join(h.getEOL()));
        };
        let g = [];
        try {
            let f;
            try {
                const E = c.object.textEditorModel;
                if (g = E.getLinesContent(), nh(g, n)) return this._persistedDiffIds.delete(e.diffId), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(e.diffId)).catch(ns), c.dispose(), !1;
                if (this.diffInfos.some((R)=>R.uri.toString() === E.uri.toString())) return c.dispose(), !1;
                !l && !o && (h = E, E.setValue(n.join(E.getEOL()))), f = {
                    startLineNumber: 1,
                    endLineNumberExclusive: (l || o ? g.length : E.getLineCount()) + 1
                };
            } catch  {
                return p(), c.dispose(), !1;
            }
            const v = r.codeblockId !== void 0 || r.toolCallId !== void 0, b = r.composerId !== void 0 && v && r.composerGenerationID !== void 0, y = {
                id: e.diffId,
                uri: a,
                generationUUID: i,
                currentRange: f,
                originalTextLines: n,
                prompt: "",
                attachedToPromptBar: !1,
                source: Fee,
                createdAt: Date.now(),
                hideDeletionViewZones: o ?? !1,
                hideDecorations: o,
                composerMetadata: b ? {
                    composerId: r.composerId,
                    codeblockId: r.codeblockId,
                    toolCallId: r.toolCallId,
                    composerGenerationID: r.composerGenerationID
                } : void 0,
                cellId: s
            };
            let T;
            if (l || o) {
                c.dispose();
                const E = await this.addDecorationsOnlyDiff({
                    ...y,
                    newTextLines: g
                }, !0, !0);
                if (E === void 0) return !1;
                T = E;
            } else T = this.addActiveDiff(y, c), this.addLinesToDiff(T.id, g), this.finishDiffSuccess(T.id);
            return this._dirtyDiffIds.delete(T.id), !l && u && this.textFileService.isDirty(a) && await this.textFileService.save(a, {
                reason: 1,
                skipSaveParticipants: !0,
                force: !0,
                ignoreModifiedSince: !0
            }), !0;
        } catch (f) {
            return p(), this.diffHandlers.has(e.diffId) || c.dispose(), ns(f), !1;
        }
    }
    autoAcceptStalePlanFileDiffs() {
        const e = this.inlineDiffs.value.filter((t)=>qj(t.uri, this._userPlansDir));
        for (const t of e)console.log(`[inlineDiff] Auto-accepting stale plan file diff: ${t.uri.toString()}`), this.acceptDiff(t.id);
    }
    getHandlerByDiffId(e) {
        return this.diffHandlers.get(e);
    }
    notifySuppressedDiffVisible(e) {
        const t = this.diffHandlers.get(e);
        !t || !t.markSuppressionNotificationReported() || this._onDidSuppressVisibleInlineDiff.fire({
            diffId: e,
            uri: t.inlineDiff.uri
        });
    }
    getParkedDiffs() {
        return [
            ...this._parkedStoredDiffs.values()
        ].map((e)=>({
                diffId: e.diffId,
                uri: Ee.revive(e.uri),
                composerId: e.composerMetadata.composerId,
                toolCallId: e.composerMetadata.toolCallId,
                generationUUID: e.generationUUID,
                originalTextLines: e.originalTextLines
            }));
    }
    async restoreParkedDiff(e) {
        const t = this._parkedRestoresInFlight.get(e);
        if (t !== void 0) return t;
        let n;
        for (const [o, a] of this._parkedStoredDiffs)if (a.diffId === e) {
            n = [
                o,
                a
            ];
            break;
        }
        if (n === void 0) return this.getHandlerByDiffId(e) !== void 0;
        const [i, r] = n;
        if (this.diffInfos.some((o)=>o.uri.toString() === i)) return !1;
        const s = this.restoreStoredDiff(r).then((o)=>{
            if (this._parkedStoredDiffs.get(i) !== r) return this.getHandlerByDiffId(e) !== void 0 && this.remove(e), this._dirtyDiffIds.delete(e), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(e)).catch(ns), !1;
            const a = o || this.getHandlerByDiffId(e) !== void 0;
            return (a || !this._persistedDiffIds.has(e)) && (this._parkedStoredDiffs.delete(i), this._onDidChangeParkedDiffs.fire()), a;
        }).finally(()=>{
            this._parkedRestoresInFlight.delete(e);
        });
        return this._parkedRestoresInFlight.set(e, s), s;
    }
    discardParkedDiff(e) {
        for (const [t, n] of this._parkedStoredDiffs)if (n.diffId === e) {
            this._parkedStoredDiffs.delete(t), this._persistedDiffIds.delete(e), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(e)).catch(ns), this._onDidChangeParkedDiffs.fire();
            return;
        }
    }
    revealDiff(e) {
        const t = this.diffHandlers.get(e);
        if (!t) return;
        const n = this.editorService.activeEditorPane;
        if (n === void 0) return;
        const i = n.getControl();
        i !== void 0 && Fp(i) && this.uriIdentityService.extUri.isEqual(i.getModel()?.uri, t.inlineDiff.uri) && i.revealRangeInCenter({
            startLineNumber: t.inlineDiff.currentRange.startLineNumber,
            startColumn: 1,
            endLineNumber: t.inlineDiff.currentRange.endLineNumberExclusive,
            endColumn: 1
        });
    }
    _remove(e) {
        const t = this.cmdKStateService.getPromptBarByDiffId(e.id);
        t && this.cmdKStateService.updatePromptBar(t.id, "diffId", void 0);
        const n = e.id, i = e.inlineDiff.uri, r = e.composerMetadata;
        this.diffHandlers.delete(n), e.remove(), this.removeInlineDiff(n), this._dirtyDiffIds.delete(n), this._persistedDiffIds.has(n) && (this._persistedDiffIds.delete(n), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(n)).catch((s)=>{
            console.error("[inlineDiff] Error deleting storage key for diff:", s);
        })), this._onDidRemoveDiff.fire({
            diffInfo: {
                uri: i,
                diffId: n,
                composerMetadata: r
            }
        }), this._onDidChangeDiffInfos.fire();
    }
    getStoredInlineDiff(e) {
        if (this._inlineDiffCache.has(e)) {
            const t = this._inlineDiffCache.get(e);
            if (t) return Promise.resolve(Nee(t));
        }
        return this.storageService.cursorDiskKVGet(e).then((t)=>{
            if (t) {
                const n = HTv(JSON.parse(t));
                return this._inlineDiffCache.set(e, n), n;
            }
        });
    }
    setStoredInlineDiff(e, t) {
        return t ? (this._inlineDiffCache.set(e, Nee(t)), this.storageService.cursorDiskKVSet(e, JSON.stringify(t))) : (this._inlineDiffCache.delete(e), this.storageService.cursorDiskKVClearPrefix(e));
    }
    getUndoResourceForInlineDiff(e) {
        return e.uri.scheme !== gt.vscodeNotebookCell ? e.uri : dm.parse(e.uri)?.notebook ?? e.uri;
    }
    tryResolveNotebookCellUriByCellId(e) {
        if (e.uri.scheme !== gt.vscodeNotebookCell || !e.cellId) return;
        const t = dm.parse(e.uri);
        if (!t) return;
        const n = this.notebookService.getNotebookTextModel(t.notebook);
        return n ? n.cells.find((r)=>r.metadata?.id === e.cellId)?.uri : void 0;
    }
    getModelReferenceUri(e) {
        return this.tryResolveNotebookCellUriByCellId(e) ?? e.uri;
    }
    tryCaptureNotebookCellDeletionInfo(e) {
        if (e.uri.scheme !== gt.vscodeNotebookCell) return;
        const t = dm.parse(e.uri);
        if (!t) return;
        const n = this.notebookService.getNotebookTextModel(t.notebook);
        if (!n) return;
        const i = n.cells.findIndex((o)=>o.handle === t.handle);
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
            notebookUri: t.notebook,
            cellIndex: i,
            cellData: s
        };
    }
    remove(e, t) {
        const n = this.diffHandlers.get(e);
        if (!n) return;
        let i;
        const r = t?.shouldStorePrevState !== !1 && !n.inlineDiff.hideDecorations;
        let s;
        r && (s = aFd(e), this.setStoredInlineDiff(s, n.inlineDiff).catch((p)=>{
            console.error("[inlineDiff] Error storing undo data:", p);
        }));
        const o = n.inlineDiff.uri, a = this.getUndoResourceForInlineDiff(n.inlineDiff), c = n.promptBarId, l = n.composerMetadata ? {
            ...n.composerMetadata
        } : void 0, u = nTv(n.inlineDiff), h = new TX("Undo Remove Diff", "undo-remove-diff", e, a, async ()=>{
            let p;
            try {
                let g;
                const f = this.getModelReferenceUri(u);
                if (p = await this.textModelService.createModelReference(f), r && s) {
                    const v = await this.getStoredInlineDiff(s);
                    if (v) g = {
                        ...v,
                        id: e,
                        uri: p.object.textEditorModel.uri
                    };
                    else throw new Error("[inlineDiff] No stored data found for create diff undo");
                } else g = {
                    ...u,
                    id: e,
                    uri: p.object.textEditorModel.uri,
                    originalTextLines: p.object.textEditorModel.getLinesContent().slice(u.currentRange.startLineNumber - 1, u.currentRange.endLineNumberExclusive - 1),
                    newTextLines: p.object.textEditorModel.getLinesContent().slice(u.currentRange.startLineNumber - 1, u.currentRange.endLineNumberExclusive - 1),
                    changes: [],
                    onAccept: void 0,
                    onReject: void 0
                };
                if (!g) throw new Error("[inlineDiff] No revived diff found for create diff undo");
                i = this.instantiationService.createInstance(v_e, p, g, c), p = void 0, this.diffHandlers.set(e, i), this._onDidChangeDiffInfos.fire(), this._onDidAddDiffFromUndoRedo.fire({
                    uri: g.uri,
                    diffId: e,
                    composerMetadata: l
                });
            } catch (g) {
                console.error("[inlineDiff] Error retrieving undo data:", g);
            } finally{
                p?.dispose(), r && s && this.setStoredInlineDiff(s, void 0).catch((g)=>console.error("[inlineDiff] Error cleaning up undo data:", g));
            }
        }, async ()=>{
            try {
                const p = this.diffHandlers.get(e);
                if (!p) return;
                r && s && this.setStoredInlineDiff(s, p.inlineDiff), this.cancelInUndo(e), this._remove(p), this._onDidRemoveDiffFromUndoRedo.fire({
                    diffInfo: {
                        uri: p.inlineDiff.uri,
                        diffId: e,
                        composerMetadata: p.composerMetadata
                    },
                    accepted: t?.accepted ?? !1
                });
            } catch (p) {
                console.error("[inlineDiff] Error in redo operation:", p);
            }
        });
        this.pushUndoElement(h, {}), (t?.closePromptBar ?? !1) && n.promptBarId && this._getPromptBar(n.promptBarId)?.diffId === e && this._hidePromptBar(n.promptBarId), this._remove(n);
    }
    _getPromptBar(e) {
        return Loo(this.cmdKStateService.getPromptBar(e));
    }
    _hidePromptBar(e) {
        const t = this._getPromptBar(e);
        if (t?.uri === void 0) return;
        this.cmdKStateService.removePromptBar(e);
        const n = {
            current: void 0
        };
        let i;
        if (this.textModelService.createModelReference(t.uri).then((r)=>{
            i = r, n.current = this.getPromptBarCurrentRange(t, r.object.textEditorModel);
            const s = t.currentRangeDecorationId;
            s && r.object.textEditorModel.deltaDecorations([
                s
            ], []);
        }).finally(()=>{
            i?.dispose();
        }), t?.diffId === void 0) {
            let r;
            this.textModelService.createModelReference(t.uri).then((s)=>{
                if (r = s, t.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
                    const o = this.getPromptBarCurrentRange(t, s.object.textEditorModel);
                    t.prePromptBarCursorPosition && o && vao(this.codeEditorService, {
                        startLineNumber: o.startLineNumber,
                        endLineNumber: o.endLineNumberExclusive - 1,
                        startColumn: 1,
                        endColumn: 1
                    }, s.object.textEditorModel.uri, t.prePromptBarCursorPosition), _Nn(s.object.textEditorModel, t.modifyTextModelPrePromptBarBackwardEdit);
                }
            }).finally(()=>{
                r?.dispose();
            }), this.undoRedoService.pushElement(new hUe("Undo Close Prompt Bar", "undo-close-prompt-bar", t?.uri, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(t.uri), t.modifyTextModelPrePromptBarForwardEdit.length > 0 && _Nn(s.object.textEditorModel, t.modifyTextModelPrePromptBarForwardEdit);
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
                    Lh(()=>{
                        this.cmdKStateService.updatePromptBar(t.id, "currentRangeDecorationId", o);
                    });
                } finally{
                    s?.dispose();
                }
            }, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(t.uri), n.current = this.getPromptBarCurrentRange(t, s.object.textEditorModel);
                    const o = t.currentRangeDecorationId;
                    if (o && s.object.textEditorModel.deltaDecorations([
                        o
                    ], []), this.cmdKStateService.removePromptBar(t.id), t.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
                        const a = this.getPromptBarCurrentRange(t, s.object.textEditorModel);
                        t.prePromptBarCursorPosition && a && vao(this.codeEditorService, {
                            startLineNumber: a.startLineNumber,
                            endLineNumber: a.endLineNumberExclusive - 1,
                            startColumn: 1,
                            endColumn: 1
                        }, s.object.textEditorModel.uri, t.prePromptBarCursorPosition), _Nn(s.object.textEditorModel, t.modifyTextModelPrePromptBarBackwardEdit);
                    }
                } finally{
                    s?.dispose();
                }
            }));
        } else {
            const r = new TX("Undo Close Prompt Bar", "undo-close-prompt-bar", t.diffId, t.uri, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(t.uri);
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
                    Lh(()=>{
                        this.cmdKStateService.updatePromptBar(t.id, "currentRangeDecorationId", o);
                    });
                } finally{
                    s?.dispose();
                }
            }, async ()=>{
                let s;
                try {
                    s = await this.textModelService.createModelReference(t.uri), n.current = this.getPromptBarCurrentRange(t, s.object.textEditorModel);
                    const o = t.currentRangeDecorationId;
                    o && s.object.textEditorModel.deltaDecorations([
                        o
                    ], []), this.cmdKStateService.removePromptBar(t.id);
                } finally{
                    s?.dispose();
                }
            });
            this.pushUndoElement(r, {});
        }
    }
    hidePromptBar(e) {
        this._hidePromptBar(e);
    }
    addActiveDiff(e, t, n) {
        const i = (a, c, l, u)=>`${a.toString()}|${c}|${l}|${u}`, r = i(e.uri, e.currentRange.startLineNumber, e.currentRange.endLineNumberExclusive, e.composerMetadata?.composerId ?? "non-composer"), s = [
            ...this.inlineDiffs.value
        ];
        for (const a of s)if (i(a.uri, a.currentRange.startLineNumber, a.currentRange.endLineNumberExclusive, a.composerMetadata?.composerId ?? "non-composer") === r) {
            const l = this.getHandlerByDiffId(a.id);
            l ? this._remove(l) : this.removeInlineDiff(a.id);
        }
        const o = this.addDiff(e, t, n);
        return o.activate(), o;
    }
    addDiff(e, t, n) {
        const i = this.instantiationService.createInstance(v_e, t, e, n);
        this.diffHandlers.set(i.id, i), this._onDidChangeDiffInfos.fire();
        const r = i.id;
        e.composerMetadata !== void 0 && this._dirtyDiffIds.add(r);
        const s = {
            uri: e.uri,
            diffId: r,
            composerMetadata: e.composerMetadata
        };
        this._onDidAddDiff.fire(s);
        let o, a = !1, c = n ? this._getPromptBar(n) : void 0;
        const l = aFd(r), u = new TX("Undo Create Diff", "undo-create-diff", r, t.object.textEditorModel.uri, async ()=>{
            try {
                const h = this.diffHandlers.get(r);
                if (!h) return;
                await this.setStoredInlineDiff(l, h.inlineDiff).catch((p)=>console.error("[inlineDiff] Error storing undo data:", p)), this.cancelInUndo(r), c = n ? this._getPromptBar(n) : void 0, c?.diffId === h.id && (a = !0), this._remove(h), this._onDidRemoveDiffFromUndoRedo.fire({
                    diffInfo: {
                        uri: e.uri,
                        diffId: r,
                        composerMetadata: h.composerMetadata
                    },
                    accepted: !1
                });
            } catch (h) {
                console.error("[inlineDiff] Error retrieving undo data:", h);
            }
        }, async ()=>{
            let h;
            try {
                const p = await this.getStoredInlineDiff(l);
                p ? (h = await this.textModelService.createModelReference(e.uri), o = this.instantiationService.createInstance(v_e, h, {
                    ...p,
                    id: r
                }, n), h = void 0, this.diffHandlers.set(r, o), this._onDidChangeDiffInfos.fire(), this._onDidAddDiffFromUndoRedo.fire({
                    uri: e.uri,
                    diffId: r,
                    composerMetadata: o.composerMetadata
                }), a && c && this.cmdKStateService.replacePromptBar(c)) : console.error("[inlineDiff] No stored data found for create diff redo");
            } catch (p) {
                console.error("[inlineDiff] Error in redo operation:", p);
            } finally{
                h?.dispose(), this.setStoredInlineDiff(l, void 0).catch((p)=>console.error("[inlineDiff] Error cleaning up redo data:", p));
            }
        });
        return this.pushUndoElement(u, {}), i;
    }
    cancelDiff(e) {
        const t = this.diffHandlers.get(e);
        if (!t) {
            this.removeInlineDiff(e);
            return;
        }
        t.cancel(), t.finishFailure();
    }
    setDiff(e, t) {
        const n = this.diffHandlers.get(e);
        n && n.setDiff(t);
    }
    cancelInUndo(e) {
        const t = this.diffHandlers.get(e);
        t && t.cancelInUndo();
    }
    findClosestChange(e, t) {
        const n = this.diffHandlers.get(e);
        if (n && n instanceof v_e) return n.findClosestChange(t);
    }
    acceptPartialDiff(e, t) {
        const n = this.diffHandlers.get(e);
        if (!n) return !1;
        this.telemetryService.publicLogCapture("inlineDiffAcceptPartial", {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new TX("Undo Accept Partial Diff", "undo-accept-partial-diff", e, i, ()=>{}, ()=>{}), {
            breakConsolidation: !0
        });
        let r = [], s = [];
        if (n instanceof v_e) {
            const a = n.findClosestChange(t);
            r = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), s = [
                ...a.removedTextLines
            ];
        }
        const o = n.acceptPartialDiff(t);
        return this._onDidAcceptPartialDiff.fire({
            inlineDiff: n.inlineDiff,
            requestId: n.inlineDiff.generationUUID,
            file: n.inlineDiff.uri.toString(),
            previousContent: s.join(`
`),
            updatedContent: r.join(`
`),
            source: M6.COMPOSER,
            range: {
                startLineNumber: n.inlineDiff.currentRange.startLineNumber,
                endLineNumber: n.inlineDiff.currentRange.endLineNumberExclusive,
                startColumn: 0,
                endColumn: -1
            },
            diffInfo: {
                diffId: e,
                uri: n.inlineDiff.uri,
                composerMetadata: n.composerMetadata
            },
            isDone: o,
            change: {
                accepted: r,
                rejected: s
            }
        }), o && this.remove(e, {
            closePromptBar: !0,
            accepted: !0,
            shouldStorePrevState: !1
        }), o;
    }
    rejectPartialDiff(e, t) {
        const n = this.diffHandlers.get(e);
        if (!n) return !1;
        this.telemetryService.publicLogCapture("inlineDiffRejectPartial", {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new TX("Undo Reject Partial Diff", "undo-reject-partial-diff", e, i, ()=>{}, ()=>{}), {
            breakConsolidation: !0
        });
        let r = [], s = [];
        if (n instanceof v_e) {
            const a = n.findClosestChange(t);
            s = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), r = [
                ...a.removedTextLines
            ];
        }
        const o = n.rejectPartialDiff(t);
        return o && this.remove(e, {
            accepted: !1,
            shouldStorePrevState: !1
        }), this._onDidRejectPartialDiff.fire({
            diffInfo: {
                diffId: e,
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
    acceptDiff(e, t) {
        const n = this.diffHandlers.get(e);
        if (!n) return;
        this.telemetryService.publicLogCapture(R7c, {
            generationUUID: n.inlineDiff.generationUUID
        });
        const i = this.getUndoResourceForInlineDiff(n.inlineDiff);
        this.pushUndoElement(new TX("Undo Accept Diff", "undo-accept-diff", e, i, ()=>{}, ()=>{}), {
            breakConsolidation: t?.dontBreakConsolidation !== void 0 ? !t.dontBreakConsolidation : !0
        });
        let r = [], s = [];
        const o = [];
        n instanceof v_e && (n.changes.forEach((a)=>{
            const c = n.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), l = n.inlineDiff.originalTextLines.slice(a.removedLinesOriginalRange.startLineNumber - 1, a.removedLinesOriginalRange.endLineNumberExclusive - 1);
            r.push(...c), s.push(...l), o.push({
                removedLines: l,
                removedRange: {
                    startLineNumber: a.removedLinesOriginalRange.startLineNumber,
                    endLineNumberExclusive: a.removedLinesOriginalRange.endLineNumberExclusive
                },
                addedLines: c,
                addedRange: {
                    startLineNumber: a.addedRange.startLineNumber,
                    endLineNumberExclusive: a.addedRange.endLineNumberExclusive
                },
                fate: "accepted"
            });
        }), this.trackAcceptRejectDiffDetails("accept", n.changes ?? [], t?.sourceContext ?? "editor")), n.accept(), this._onDidAcceptDiff.fire({
            requestId: n.inlineDiff.generationUUID,
            diffId: e,
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
            source: M6.COMPOSER,
            file: n.inlineDiff.uri.toString(),
            range: {
                startLineNumber: n.inlineDiff.currentRange.startLineNumber,
                endLineNumber: n.inlineDiff.currentRange.endLineNumberExclusive,
                startColumn: 0,
                endColumn: -1
            },
            sourceContext: t?.sourceContext || "editor",
            partialInlineDiffFates: o
        }), this.remove(e, {
            closePromptBar: !0,
            accepted: !0
        });
    }
    rejectDiff(e, t, n) {
        const i = this.diffHandlers.get(e);
        if (!i) {
            this.removeInlineDiff(e);
            return;
        }
        t?.rejectSilently !== !0 && this.telemetryService.publicLogCapture(D7c, {
            generationUUID: i.inlineDiff.generationUUID
        });
        const r = this.getUndoResourceForInlineDiff(i.inlineDiff);
        this.pushUndoElement(new TX("Undo Reject Diff", "undo-reject-diff", e, r, ()=>{}, ()=>{}), {
            breakConsolidation: t?.dontBreakConsolidation !== void 0 ? !t.dontBreakConsolidation : !0
        });
        const s = [];
        i instanceof v_e && (i.changes.forEach((a)=>{
            const c = i.inlineDiff.newTextLines.slice(a.addedRange.startLineNumber - 1, a.addedRange.endLineNumberExclusive - 1), l = i.inlineDiff.originalTextLines.slice(a.removedLinesOriginalRange.startLineNumber - 1, a.removedLinesOriginalRange.endLineNumberExclusive - 1);
            s.push({
                removedLines: l,
                removedRange: {
                    startLineNumber: a.removedLinesOriginalRange.startLineNumber,
                    endLineNumberExclusive: a.removedLinesOriginalRange.endLineNumberExclusive
                },
                addedLines: c,
                addedRange: {
                    startLineNumber: a.addedRange.startLineNumber,
                    endLineNumberExclusive: a.addedRange.endLineNumberExclusive
                },
                fate: "rejected"
            });
        }), this.trackAcceptRejectDiffDetails("reject", i.changes ?? [], t?.sourceContext ?? "editor")), i.reject({
            rejectSilently: t?.rejectSilently
        }, n), i.callRejectCallback(), t?.rejectSilently || this._onDidRejectDiff.fire({
            diffId: e,
            uri: i.inlineDiff.uri,
            composerMetadata: i.composerMetadata,
            inlineDiff: i.inlineDiff,
            sourceContext: t?.sourceContext || "editor",
            partialInlineDiffFates: s
        });
        const o = i.inlineDiff.isNewlyCreatedCell === !0 ? this.tryCaptureNotebookCellDeletionInfo(i.inlineDiff) : void 0;
        if (this.remove(e, {
            closePromptBar: t?.close && t?.rejectSilently !== !0,
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
            ], !0, void 0, ()=>{}, void 0, !1), this.pushUndoElement(new TX("Undo Delete Notebook Cell", "undo-delete-notebook-cell", e, r, ()=>{
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
    trackAcceptRejectDiffDetails(e, t, n) {
        const i = new Map, r = (o, a)=>`${o}:${a}`, s = (o, a)=>{
            const c = r(o, a);
            return i.has(c) || i.set(c, {
                linesAdded: 0,
                linesRemoved: 0
            }), i.get(c);
        };
        for (const o of t){
            for (const a of o.addedLinesMetaData ?? [])if (a.composerGenerationID && a.toolCallID) {
                const c = s(a.composerGenerationID, a.toolCallID);
                c.linesAdded += 1;
            }
            for (const a of o.removedLinesMetaData ?? [])if (a.composerGenerationID && a.toolCallID) {
                const c = s(a.composerGenerationID, a.toolCallID);
                c.linesRemoved += 1;
            }
        }
        for (const [o, a] of i.entries()){
            const [c, l] = o.split(":");
            this.analyticsService.trackEvent("composer.accept_reject_diff_details", {
                chatGenerationUUID: c,
                toolCallId: l,
                acceptOrReject: e,
                linesAdded: a.linesAdded,
                linesRemoved: a.linesRemoved,
                sourceContext: n
            });
        }
    }
    finishDiffSuccess(e) {
        const t = this.diffHandlers.get(e);
        t && t.finishSuccess();
    }
    addLineToDiff(e, t) {
        this.addLinesToDiff(e, [
            t
        ]);
    }
    addLinesToDiff(e, t) {
        const n = this.diffHandlers.get(e);
        n && n.addLinesToDiff(t);
    }
    async streamDiff({ uri: e, originalLineRange: t, hideDeletionViewZones: n, generationUUID: i, streamingLines: r, originalTextLines: s, originalLineTokens: o, extraContextLinesAbove: a, extraContextLinesBelow: c, prompt: l, diffIdCallback: u, doneCallback: h, cancelGenerationWithNoChangesCallback: p, rejectCallback: g, promptBarId: f, composerId: v }) {
        var b = [];
        try {
            const E = {
                uri: e,
                generationUUID: i,
                currentRange: t,
                originalTextLines: s,
                originalLineTokens: o,
                prompt: l,
                hideDeletionViewZones: n,
                attachedToPromptBar: u !== void 0,
                extraContextLinesAbove: a,
                extraContextLinesBelow: c,
                composerId: v
            }, A = cFd(b, new lNt(await this.textModelService.createModelReference(e, !0))), R = this.addDiff(E, A.value, f);
            A.transferOut(), R.activate(h, p, g), u !== void 0 && u(R.id);
            let D = !1, P = [];
            try {
                for await (const N of r)R.addLinesToDiff([
                    N
                ]), P.push(N);
            } catch  {
                D = !0;
            }
            if (!D && f && u) {
                const N = e.path.split("/").pop() ?? "", O = N.includes(".") ? N.split(".").pop() ?? "" : "";
                let F = 0, H = 0;
                const $ = R.changes ?? [];
                for (const q of $)F += q.addedRange.endLineNumberExclusive - q.addedRange.startLineNumber, H += q.removedTextLines.length;
                const G = (v ? this.composerDataService?.getComposerDataIfLoaded(v) : void 0)?.modelConfig?.modelName ?? "default";
                this.analyticsService.trackEvent("cmdk.diff_displayed", {
                    composerRequestID: i,
                    composerId: v,
                    fileExtension: O,
                    promptBarID: f,
                    linesAdded: F,
                    linesRemoved: H,
                    model: G
                });
            }
            D ? R.finishFailure() : R.finishSuccess();
        } catch (E) {
            var y = E, T = !0;
        } finally{
            lFd(b, y, T);
        }
    }
    pushUndoElement(e, t) {
        if (t.breakConsolidation === !0) {
            this.undoRedoService.pushElement(e);
            return;
        }
        const n = this.undoRedoService.getLastElement(e.resource);
        n instanceof TX ? n.push(e) : this.undoRedoService.pushElement(e);
    }
    dispose() {
        super.dispose();
        for (const e of this.diffHandlers.values())e.dispose();
        this.diffHandlers.clear(), this._onDidChangeDiffInfos.fire();
    }
    updateComposerMetadata(e, t) {
        this.updateInlineDiffProperty(e, "composerMetadata", t);
        const n = this.diffHandlers.get(e);
        n && (n.composerMetadata = t);
    }
    firePartialDiffCompletionEvent(e) {
        this._onDidAcceptDiff.fire(e);
    }
    async addDecorationsOnlyDiff(e, t, n) {
        const i = await this.textModelService.createModelReference(e.uri, t), r = this.inlineDiffs.value.find((a)=>a.uri.toString() === e.uri.toString());
        if (r) {
            if (n) {
                i.dispose();
                return;
            }
            this.remove(r.id);
        }
        const s = this.instantiationService.createInstance(v_e, i, e, void 0);
        if (this.diffHandlers.set(s.id, s), e.composerMetadata !== void 0 && this._dirtyDiffIds.add(s.id), !s.tryDeferDiffState()) {
            const a = s.getDiffState(!0, e.composerMetadata?.composerGenerationID, e.toolCallId);
            s.inlineDiff.changes = a.changes, s.inlineDiff.activeLine = a.activeLine, s.inlineDiff.pendingRange = a.pendingRange, fao(s.inlineDiff.originalTextLines, s.inlineDiff.newTextLines, a.changes);
        }
        this.updateInlineDiff(Nee(s.inlineDiff)), s.computeDecorations(), this._onDidChangeDiffInfos.fire(), e.composerMetadata && this.updateComposerMetadata(s.id, e.composerMetadata);
        const o = {
            uri: e.uri,
            diffId: s.id,
            composerMetadata: e.composerMetadata
        };
        return this._onDidAddDiff.fire(o), s;
    }
    getPromptBarCurrentRange(e, t) {
        if (e === void 0) return;
        const n = this.inlineDiffs.value.find((r)=>r.id === e.diffId);
        if (n !== void 0) if (t) {
            const r = t.getLineCount();
            if (!(n.currentRange.startLineNumber === 1 && n.currentRange.endLineNumberExclusive === r + 1)) return n.currentRange;
        } else return n.currentRange;
        const i = t?.getDecorationRange(e.currentRangeDecorationId);
        if (i) return {
            startLineNumber: i.startLineNumber,
            endLineNumberExclusive: i.endLineNumber + 1
        };
    }
}, cWt.registeredActions = [], cWt = ie([
    HE(0, bc),
    HE(1, _t),
    HE(2, Do),
    HE(3, UP),
    HE(4, hn),
    HE(5, Ea),
    HE(6, $h),
    HE(7, Gse),
    HE(8, Ja),
    HE(9, Xp),
    HE(10, yn),
    HE(11, Jn),
    HE(12, Zy),
    HE(13, jp),
    HE(14, Y3),
    HE(15, ca),
    HE(16, Zs),
    HE(17, Kr),
    HE(18, zl),
    HE(19, D_),
    HE(20, fc),
    HE(21, Yi)
], cWt), mn(zM, cWt, 1), kao = (e, t)=>({
        startLineNumber: Math.max(e.startLineNumber, t.startLineNumber),
        endLineNumberExclusive: Math.min(e.endLineNumberExclusive, t.endLineNumberExclusive)
    }), v_e = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(), this.inlineDiffService = i, this.undoRedoService = r, this.configurationService = s, this.notebookService = o, this.cppService = a, this.aiService = c, this.cmdKStateService = l, this.experimentService = u, this.composerDataService = h, this.diffDecorationVisibilityService = p, this.editorHostPolicy = g, this.cachedDecorationIDs = [], this.hasShownThresholdNotification = !1, this.numAcceptedPartialDiffs = 0, this.numRejectedPartialDiffs = 0, this.isApplyingPartialRejectEdit = !1, this.changeFates = new Map, this.active = !1, this.lastEdits = [], this.agentEditedTextLines = void 0, this.isDiffStateDeferred = !1, this.modelRef = e, this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
            this.computeDecorations();
        })), this.promptBarId = n, this.composerMetadata = t.composerMetadata, this.toolCallId = t.toolCallId;
        let f = t.cellId;
        if (!f && t.uri.scheme === gt.vscodeNotebookCell) {
            const b = dm.parse(t.uri);
            if (b) {
                const y = this.notebookService.getNotebookTextModel(b.notebook);
                if (y) {
                    const T = y.cells.find((E)=>E.handle === b.handle);
                    T && T.metadata && "id" in T.metadata && typeof T.metadata.id == "string" && (f = T.metadata.id);
                }
            }
        }
        this.inlineDiff = {
            id: zn(),
            changes: [],
            activeLine: void 0,
            pendingRange: {
                startLineNumber: 1,
                endLineNumberExclusive: t.currentRange.endLineNumberExclusive - t.currentRange.startLineNumber + 1
            },
            newTextLines: t.newTextLines ?? [],
            onAccept: void 0,
            onReject: void 0,
            canUndoUpdates: !0,
            showNativeAcceptReject: !1,
            cellId: f,
            ...t
        };
        const v = s.onDidChangeConfiguration((b)=>{
            b.affectsConfiguration(RAe) && this.computeDecorations();
        });
        if (this._register(v), t.attachedToPromptBar) {
            const b = t.lastPromptBarCurrentRange ?? {
                startLineNumber: t.currentRange.startLineNumber,
                endLineNumberExclusive: t.currentRange.endLineNumberExclusive
            }, y = this.modelRef.object.textEditorModel.deltaDecorations([], [
                {
                    range: {
                        startLineNumber: b.startLineNumber,
                        endLineNumber: b.endLineNumberExclusive - 1,
                        startColumn: 1,
                        endColumn: this.modelRef.object.textEditorModel.getLineMaxColumn(b.endLineNumberExclusive - 1)
                    },
                    options: {
                        description: "promptBar-tracking-range",
                        isWholeLine: !0
                    }
                }
            ])[0];
            n && (this.cmdKStateService.updatePromptBar(n, "diffId", this.inlineDiff.id), this.cmdKStateService.updatePromptBar(n, "currentRangeDecorationId", y));
        }
        this._register(e.object.textEditorModel.onDidChangeContent((b)=>{
            for (const y of b.changes)switch(VTv(this.inlineDiff.currentRange, y.range)){
                case vNn.After:
                    {
                        if (!this.isDiffStateDeferred && this.changes.length > 0) {
                            const E = this.changes[this.changes.length - 1];
                            if (this.inlineDiff.currentRange.startLineNumber + E.addedRange.endLineNumberExclusive - 1 === y.range.startLineNumber && (E.removedTextLines.join(b.eol) === y.text || E.removedTextLines.join(b.eol) + b.eol === y.text) && y.range.startColumn === 1 && y.range.startLineNumber === this.inlineDiff.currentRange.endLineNumberExclusive) {
                                this.inlineDiff.newTextLines = this.inlineDiff.newTextLines.concat(E.removedTextLines), this.inlineDiff.currentRange = new Vl(this.inlineDiff.currentRange.startLineNumber, this.inlineDiff.currentRange.endLineNumberExclusive + E.removedTextLines.length), this.changes.pop(), this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
                                return;
                            }
                        }
                        break;
                    }
                case vNn.Before:
                    {
                        const E = y.text.split(`
`).length - (y.range.endLineNumber - y.range.startLineNumber + 1);
                        this.inlineDiff.currentRange = new Vl(this.inlineDiff.currentRange.startLineNumber + E, this.inlineDiff.currentRange.endLineNumberExclusive + E), this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
                        break;
                    }
                case vNn.Overlap:
                    {
                        if (this.active) continue;
                        this.processOverlapEdit(y, b.eol);
                        break;
                    }
            }
        })), this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
    }
    getChangeHash(e) {
        return `${e.removedLinesOriginalRange.startLineNumber}-${e.removedLinesOriginalRange.endLineNumberExclusive}-${e.addedRange.startLineNumber}-${e.addedRange.endLineNumberExclusive}`;
    }
    getUndoResourceForUri(e) {
        return e.scheme !== gt.vscodeNotebookCell ? e : dm.parse(e)?.notebook ?? e;
    }
    get id() {
        return this.inlineDiff.id;
    }
    processOverlapEdit(e, t) {
        const n = this.lastEdits.find((y)=>y.range.startLineNumber === e.range.startLineNumber && y.range.startColumn === e.range.startColumn && y.range.endLineNumber === e.range.endLineNumber && y.range.endColumn === e.range.endColumn && (y.text ?? "") === e.text);
        if (n) {
            this.lastEdits = this.lastEdits.filter((y)=>y !== n);
            return;
        }
        let i = e.text, r = e.range.startColumn, s = e.range.endColumn, o = this.inlineDiff.currentRange.startLineNumber, a = e.range.startLineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
        a < 1 && (a = 1, r = 1, i.includes(t) ? (i = i.split(t).slice(1).join(t), o = e.range.startLineNumber + 1) : (console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), o = e.range.startLineNumber));
        let c = e.range.endLineNumber - this.inlineDiff.currentRange.startLineNumber + 1, l = !1;
        c > this.inlineDiff.newTextLines.length && (c = this.inlineDiff.newTextLines.length, s = this.inlineDiff.newTextLines[c - 1].length + 1, i.includes(t) ? i = i.split(t).slice(0, -1).join(t) : (console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), l = !0));
        const u = this.applyEditToLines(this.inlineDiff.newTextLines, {
            startLineIndex: a,
            endLineIndexInclusive: c,
            startColumn: r,
            endColumn: s,
            text: i,
            eol: t
        });
        l && u.length > 0 && u[u.length - 1] === "" && u.pop();
        const h = new Vl(o, o + u.length);
        if (GTv(this.isDiffStateDeferred, this.agentEditedTextLines, u)) {
            this.agentEditedTextLines = void 0, this.inlineDiff.currentRange = h, this.inlineDiff.newTextLines = u, this.inlineDiff.changes = [], this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
            return;
        }
        const p = (y, T, E)=>{
            let A = [], R = [], D = 0;
            for (const P of T){
                let N = 0, O = !1;
                for (const F of y){
                    const H = kao(F.removedLinesOriginalRange, P.removedLinesOriginalRange);
                    for(let q = H.startLineNumber; q < H.endLineNumberExclusive; q++){
                        O = !0;
                        let z = F.removedLinesMetaData ? F.removedLinesMetaData[q - F.removedLinesOriginalRange.startLineNumber] : void 0;
                        z && (P.removedLinesMetaData[q - P.removedLinesOriginalRange.startLineNumber] = z);
                    }
                    const $ = {
                        startLineNumber: F.addedRange.startLineNumber - N,
                        endLineNumberExclusive: F.addedRange.endLineNumberExclusive - N
                    }, W = {
                        startLineNumber: P.addedRange.startLineNumber - D,
                        endLineNumberExclusive: P.addedRange.endLineNumberExclusive - D
                    }, G = kao($, W);
                    for(let q = G.startLineNumber; q < G.endLineNumberExclusive; q++){
                        const z = this.inlineDiff.newTextLines[q + N - 1], X = u[q + D - 1];
                        if (!E && z !== X) continue;
                        O = !0;
                        let Y = F.addedLinesMetaData ? F.addedLinesMetaData[q + N - F.addedRange.startLineNumber] : void 0;
                        Y && (P.addedLinesMetaData[q + D - P.addedRange.startLineNumber] = Y);
                    }
                    N += F.addedRange.endLineNumberExclusive - F.addedRange.startLineNumber, N -= F.removedLinesOriginalRange.endLineNumberExclusive - F.removedLinesOriginalRange.startLineNumber;
                }
                D += P.addedRange.endLineNumberExclusive - P.addedRange.startLineNumber, D -= P.removedLinesOriginalRange.endLineNumberExclusive - P.removedLinesOriginalRange.startLineNumber, A.push(P), R.push(!O);
            }
            return {
                finalChanges: A,
                userChanges: R
            };
        }, g = (y, T)=>{
            if (!y || y.length === 0) return;
            let E, A = -1;
            for(let R = 0; R < y.length; R++)if (y[R].composerGenerationID) {
                E = y[R], A = R;
                break;
            }
            if (!E && T && (E = T, A = 0, y[0] = T), !!E) {
                for(let R = A - 1; R >= 0 && !y[R].composerGenerationID; R--)y[R] = E;
                for(let R = A + 1; R < y.length; R++)y[R].composerGenerationID ? E = y[R] : y[R] = E;
                return E;
            }
        }, f = this.composerMetadata?.composerId;
        let v = f ? this.composerDataService.getComposerDataIfLoaded(f) : void 0, b = [];
        if (nh(this.agentEditedTextLines, u)) {
            this.agentEditedTextLines = void 0;
            const y = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0, this.composerMetadata?.composerGenerationID, this.toolCallId);
            b = p(this.changes, y.changes, !1).finalChanges;
        } else if (v?.isNAL) {
            if (v.status !== "generating" && !this.isApplyingPartialRejectEdit) {
                let E = !1, A = 0;
                for (const R of this.changes){
                    const D = R.addedRange.startLineNumber, P = R.addedRange.endLineNumberExclusive, N = P - D, O = R.removedLinesOriginalRange.endLineNumberExclusive - R.removedLinesOriginalRange.startLineNumber;
                    if (a < P && c >= D) {
                        E = !0;
                        break;
                    }
                    P <= a && (A += N - O);
                }
                if (!E) {
                    const R = a - A, D = c - A;
                    R >= 1 && D <= this.inlineDiff.originalTextLines.length && (this.inlineDiff.originalTextLines = this.applyEditToLines(this.inlineDiff.originalTextLines, {
                        startLineIndex: R,
                        endLineIndexInclusive: D,
                        startColumn: r,
                        endColumn: s,
                        text: i,
                        eol: t
                    }));
                }
            }
            const T = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0, this.composerMetadata?.composerGenerationID, this.toolCallId);
            b = p(this.changes, T.changes, !0).finalChanges;
            for (const E of b){
                let A;
                E.removedLinesOriginalRange.startLineNumber !== E.removedLinesOriginalRange.endLineNumberExclusive && (A = g(E.removedLinesMetaData, void 0)), E.addedRange.startLineNumber !== E.addedRange.endLineNumberExclusive && (A = g(E.addedLinesMetaData, A));
            }
        } else b = this._timedDiffState(this.inlineDiff.originalTextLines, u, !0).changes;
        if (this.inlineDiff.currentRange = h, this.inlineDiff.newTextLines = u, this.inlineDiff.changes = b, this.changes.length === 0) {
            this.remove();
            return;
        }
        this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
    }
    applyEditToLines(e, t) {
        const i = (e[t.startLineIndex - 1].slice(0, t.startColumn - 1) + t.text + e[t.endLineIndexInclusive - 1].slice(t.endColumn - 1)).split(t.eol);
        return [
            ...e.slice(0, t.startLineIndex - 1),
            ...i,
            ...e.slice(t.endLineIndexInclusive)
        ];
    }
    finishFailure() {
        if (!this.active) return;
        let e = !0;
        for(let n = 0; n < this.inlineDiff.newTextLines.length; n++)if (this.inlineDiff.newTextLines[n] !== this.inlineDiff.originalTextLines[n]) {
            e = !1;
            break;
        }
        if (e) {
            this.inlineDiffService.remove(this.inlineDiff.id), this._cancelGenerationWithNoChanges();
            return;
        }
        const t = this.getDiffState(!1);
        this.inlineDiff.newTextLines = t.newFullRangeTextLines, this.handleDiffState(t), this.computeDecorations(), this._finish();
    }
    finishSuccess() {
        if (!this.active) return;
        const e = this.getDiffState(!0);
        this.handleDiffState(e), fao(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, this.changes), this.computeDecorations(), this._finish();
    }
    reject(e, t) {
        const n = this.getUndoResourceForUri(this.inlineDiff.uri), i = [];
        this.cppService.shouldNotTriggerFromInlineDiffReject = !0, setTimeout(()=>{
            this.cppService.shouldNotTriggerFromInlineDiffReject = !1;
        }, 1e3);
        for (const a of this.changes){
            let c = a.removedTextLines.join(this.modelRef.object.textEditorModel.getEOL());
            const l = this.getGreenRange(a);
            a.addedRange.startLineNumber === a.addedRange.endLineNumberExclusive && (c += this.modelRef.object.textEditorModel.getEOL());
            const u = {
                range: l,
                text: c,
                forceMoveMarkers: !0
            };
            i.push(u);
        }
        this.inlineDiffService.recordRejectEvent({
            model: this.modelRef.object.textEditorModel,
            requestId: this.inlineDiff.generationUUID,
            promptBarId: this.promptBarId,
            actorRequestId: t,
            silent: e?.rejectSilently
        }), e?.rejectSilently !== !0 && this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "reject", {
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
        const o = new TX("Undo Reject Suggestion", "undo-reject-suggestion", this.inlineDiff.id, n, ()=>{
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
        const e = [], t = Array.from(this.changeFates.entries()).sort(([n, i], [r, s])=>i.removedRange.startLineNumber - s.removedRange.startLineNumber);
        for (const [n, i] of t)e.push(i);
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
                source: M6.COMPOSER,
                file: this.inlineDiff.uri.toString(),
                range: {
                    startLineNumber: this.inlineDiff.currentRange.startLineNumber,
                    endLineNumber: this.inlineDiff.currentRange.endLineNumberExclusive,
                    startColumn: 0,
                    endColumn: -1
                },
                sourceContext: "composer",
                partialInlineDiffFates: e
            });
        }
    }
    remove() {
        this.compileAndFirePartialHistory(), this.removeDecorations(), this.inlineDiffService.removeInlineDiff(this.inlineDiff.id), this.dispose();
    }
    add() {
        this.computeDecorations(), this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff));
    }
    getGreenRange(e) {
        const t = this.modelRef.object.textEditorModel, n = t.getLineCount();
        if (e.removedTextLines.length === 0) {
            let i = this.inlineDiff.currentRange.startLineNumber + e.addedRange.startLineNumber - 1, r = this.inlineDiff.currentRange.startLineNumber + e.addedRange.endLineNumberExclusive - 1;
            if (r <= n) return new dt(i, 1, r, 1);
            {
                r = n;
                let s = 1;
                return i > 1 && (i--, s = t.getLineMaxColumn(i)), new dt(i, s, r, t.getLineMaxColumn(r));
            }
        } else {
            const i = this.inlineDiff.currentRange.startLineNumber + e.addedRange.endLineNumberExclusive - 1 - 1, r = Math.min(i, n);
            return e.addedRange.endLineNumberExclusive === e.addedRange.startLineNumber ? new dt(this.inlineDiff.currentRange.startLineNumber + e.addedRange.startLineNumber - 1, 1, this.inlineDiff.currentRange.startLineNumber + e.addedRange.startLineNumber - 1, 1) : new dt(this.inlineDiff.currentRange.startLineNumber + e.addedRange.startLineNumber - 1, 1, r, this.modelRef.object.textEditorModel.getLineMaxColumn(r));
        }
    }
    rejectPartialDiff(e) {
        const t = this.getUndoResourceForUri(this.inlineDiff.uri), n = this.findClosestChangeIndex(e), i = this.changes[n];
        this.inlineDiffService.trackAcceptRejectDiffDetails("reject", [
            i
        ], "editor");
        const r = this.getChangeHash(i), s = this.changes.length === 1, o = this.getGreenRange(i), a = i.addedRange.endLineNumberExclusive === i.addedRange.startLineNumber ? this.modelRef.object.textEditorModel.getEOL() : "", c = o.endLineNumber > this.modelRef.object.textEditorModel.getLineCount(), l = this.modelRef.object.textEditorModel.getEOL(), u = (c ? l : "") + i.removedTextLines.join(l) + a, h = {
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
        const p = [];
        try {
            this.isApplyingPartialRejectEdit = !0, p.push(...this.modelRef.object.textEditorModel.applyEdits([
                h
            ], !0));
        } catch (f) {
            console.warn("Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?", f);
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
            const f = this.cmdKStateService.getPromptBarByDiffId(this.inlineDiff.id);
            f && (this.inlineDiff.lastPromptBarCurrentRange = this.inlineDiffService.getPromptBarCurrentRange(f, this.modelRef.object.textEditorModel));
        }
        this.numRejectedPartialDiffs++;
        const g = new TX("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, t, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits(p);
            } catch (f) {
                console.error("[inlineDiff] Error undoing reject partial diff:", f);
            }
        }, ()=>{
            try {
                this.modelRef.object.textEditorModel.applyEdits([
                    h
                ]);
            } catch (f) {
                console.error("[inlineDiff] Error undoing reject partial diff:", f);
            }
        });
        return this.inlineDiffService.pushUndoElement(g, {}), s && this.remove(), s;
    }
    findClosestChange(e) {
        return this.changes[this.findClosestChangeIndex(e)];
    }
    findClosestChangeIndex(e) {
        let t = e.lineNumber;
        t = e.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
        let n = 0;
        const i = (r)=>Math.min(Math.abs(r.addedRange.endLineNumberExclusive - 1 - t), Math.abs(r.addedRange.startLineNumber - t));
        for(let r = 1; r < this.changes.length; r++){
            const s = this.changes[r], o = i(s), a = i(this.changes[n]);
            o < a && (n = r);
        }
        return n;
    }
    acceptPartialDiff(e) {
        const t = this.getUndoResourceForUri(this.inlineDiff.uri), n = this.findClosestChangeIndex(e), i = this.changes[n];
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
        const a = i.removedLinesOriginalRange.startLineNumber - 1, c = i.removedLinesOriginalRange.endLineNumberExclusive - i.removedLinesOriginalRange.startLineNumber, l = this.inlineDiff.originalTextLines.slice(a, a + c), u = this.inlineDiff.newTextLines.slice(i.addedRange.startLineNumber - 1, i.addedRange.endLineNumberExclusive - 1), h = {
            index: a,
            removedLines: l,
            addedLines: u
        }, p = [
            ...this.inlineDiff.originalTextLines.slice(0, h.index),
            ...h.addedLines,
            ...this.inlineDiff.originalTextLines.slice(h.index + c)
        ];
        let g = structuredClone(this.changes), f = i.addedRange.endLineNumberExclusive - i.addedRange.startLineNumber;
        f -= i.removedLinesOriginalRange.endLineNumberExclusive - i.removedLinesOriginalRange.startLineNumber;
        for(let y = n + 1; y < this.changes.length; y++){
            const T = this.changes[y];
            T.removedLinesOriginalRange.startLineNumber += f, T.removedLinesOriginalRange.endLineNumberExclusive += f;
        }
        this.inlineDiff.changes = this.changes.filter((y)=>y !== i);
        let v = structuredClone(this.changes);
        this.inlineDiff.originalTextLines = p, this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations(), this.numAcceptedPartialDiffs++;
        const b = new TX("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, t, ()=>{
            const y = o.getHandlerByDiffId(s);
            if (!y) throw new Error("[inlineDiffService] Handler not found");
            const T = y.getUndoResourceForUri(y.inlineDiff.uri);
            this.undoRedoService.blockPushElements(T);
            try {
                y.inlineDiff.originalTextLines = [
                    ...y.inlineDiff.originalTextLines.slice(0, h.index),
                    ...h.removedLines,
                    ...y.inlineDiff.originalTextLines.slice(h.index + h.addedLines.length)
                ], y.inlineDiff.changes = structuredClone(g), o.updateInlineDiff(Nee(y.inlineDiff)), y.computeDecorations(), y.numAcceptedPartialDiffs--;
            } finally{
                this.undoRedoService.unblockPushElements(T);
            }
        }, ()=>{
            const y = o.getHandlerByDiffId(s);
            if (!y) throw new Error("[inlineDiffService] Handler not found");
            const T = y.getUndoResourceForUri(y.inlineDiff.uri);
            this.undoRedoService.blockPushElements(T);
            try {
                y.inlineDiff.originalTextLines = [
                    ...y.inlineDiff.originalTextLines.slice(0, h.index),
                    ...h.addedLines,
                    ...y.inlineDiff.originalTextLines.slice(h.index + h.removedLines.length)
                ], y.inlineDiff.changes = structuredClone(v), y.inlineDiffService.updateInlineDiff(Nee(y.inlineDiff)), y.computeDecorations(), y.numAcceptedPartialDiffs++;
            } finally{
                this.undoRedoService.unblockPushElements(T);
            }
        });
        return this.inlineDiffService.pushUndoElement(b, {}), this.changes.length === 0 ? (this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "partial", {
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
        const e = this.cachedDecorationIDs;
        this.cachedDecorationIDs = [], this.deltaDecorations(e, []);
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
        const e = this.getDiffState(!0, this.composerMetadata?.composerGenerationID, this.toolCallId);
        this.inlineDiff.changes = e.changes, this.inlineDiff.activeLine = e.activeLine, this.inlineDiff.pendingRange = e.pendingRange, fao(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, e.changes), this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff));
    }
    getDiffState(e, t, n) {
        return this._timedDiffState(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, e, t, n);
    }
    _timedDiffState(e, t, n, i, r) {
        const s = performance.now(), o = rFd(e, t, n, i, r);
        return this.inlineDiffService.recordDiffComputation(performance.now() - s, Math.max(e.length, t.length), n), o;
    }
    addLinesToDiff(e) {
        if (!this.active) return;
        const t = [];
        for (const i of e){
            (i.includes(`
`) || i.includes("\r")) && console.warn("InlineDiffService#addLine: line contains newline characters, which is not supported");
            let r = i.replace(/\r/g, "");
            r = r.replace(/\n/g, ""), t.push(r);
        }
        this.inlineDiff.newTextLines = this.inlineDiff.newTextLines.concat(t);
        const n = this.getDiffState(!1);
        this.handleDiffState(n), this.computeDecorations();
    }
    _toDescriptor() {
        const e = this._shouldHideDecorations();
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
                hideDeletionViewZones: e,
                source: this.inlineDiff.source
            }
        };
    }
    _getModelAccess() {
        return {
            getLineMaxColumn: (e)=>this.modelRef.object.textEditorModel.getLineMaxColumn(e),
            getValueInRange: (e)=>this.modelRef.object.textEditorModel.getValueInRange(e)
        };
    }
    _isActivelyGenerating() {
        return this.aiService.inprogressAIGenerations.value.some((e)=>e.generationUUID === this.inlineDiff.generationUUID);
    }
    _shouldHideDecorations() {
        return this.diffDecorationVisibilityService.shouldHideInlineDiffs();
    }
    computeDecorations() {
        if (this._shouldHideDecorations()) {
            this.cachedDecorationIDs = this.deltaDecorations(this.cachedDecorationIDs, []);
            return;
        }
        const t = this.configurationService.getValue(RAe), n = this._toDescriptor(), i = {
            isThemed: t ?? mmn,
            showRemovedChanges: !0,
            showInsertedLineBackgrounds: !0
        }, r = YTv(n, this._isActivelyGenerating(), i, this._getModelAccess()), s = this.configurationService.getValue(KNt) ?? gmn, o = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
            disableExposureLog: !1
        })?.maxDecorations ?? 100;
        s && this.changes.length > o && r.splice(0), this.cachedDecorationIDs = this.deltaDecorations(this.cachedDecorationIDs, r);
    }
    markSuppressionNotificationReported() {
        return this.hasShownThresholdNotification ? !1 : (this.hasShownThresholdNotification = !0, !0);
    }
    deltaDecorations(e, t, n = 0) {
        const i = this.modelRef.object.textEditorModel;
        return !i || i.isDisposed() ? [] : i.deltaDecorations(e, t, n);
    }
    fireApplyDiffEditsAsync(e, t, n, i, r) {
        queueMicrotask(()=>{
            const s = n.map((o)=>{
                const a = i.getOffsetAt({
                    lineNumber: o.range.startLineNumber,
                    column: o.range.startColumn
                });
                let c = 0;
                return (o.range.startLineNumber !== o.range.endLineNumber || o.range.startColumn !== o.range.endColumn) && (c = i.getOffsetAt({
                    lineNumber: o.range.endLineNumber,
                    column: o.range.endColumn
                }) - a), {
                    ...o,
                    rangeOffset: a,
                    rangeLength: c
                };
            });
            this.inlineDiffService.fireApplyDiffEdits({
                uri: e,
                requestId: t,
                edits: s,
                source: M6.COMPOSER,
                composerMetadata: r
            });
        });
    }
    handleDiffState(e) {
        const t = this.modelRef.object.textEditorModel, n = KTv(e, this.inlineDiff, this.modelRef);
        this.lastEdits = n;
        let i = [];
        i = t.applyEdits(n, !0), this.fireApplyDiffEditsAsync(this.inlineDiff.uri, this.inlineDiff.generationUUID, n, t, this.composerMetadata), this.inlineDiff.currentRange = new Vl(this.inlineDiff.currentRange.startLineNumber, this.inlineDiff.currentRange.startLineNumber + e.newFullRangeTextLines.length), this.isDiffStateDeferred = !1, this.inlineDiff.changes = e.changes, this.inlineDiff.activeLine = e.activeLine, this.inlineDiff.pendingRange = e.pendingRange, this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff));
        const r = new TX("Undo Update Diff", "undo-update-diff", this.inlineDiff.id, t.uri, async ()=>{
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
    setDiff(e) {
        this.inlineDiff = e, this.inlineDiffService.updateInlineDiff(Nee(this.inlineDiff)), this.computeDecorations();
    }
    activate(e, t, n) {
        this.active = !0, this.doneCallback = e, this.cancelGenerationWithNoChangesCallback = t, this.rejectCallback = n;
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
}, v_e = ie([
    HE(3, zM),
    HE(4, UP),
    HE(5, qt),
    HE(6, D_),
    HE(7, k2),
    HE(8, jp),
    HE(9, Y3),
    HE(10, Kr),
    HE(11, Zs),
    HE(12, Ade),
    HE(13, M2t)
], v_e), Fee = "speculative-full-file";

}
