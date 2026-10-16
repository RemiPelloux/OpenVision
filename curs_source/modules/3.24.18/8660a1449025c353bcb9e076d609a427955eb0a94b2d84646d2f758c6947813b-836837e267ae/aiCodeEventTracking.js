import { Gt, Qe, en, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { vls } from "./Ycg.js";
import { NCk } from "./aiCodeChangeUtils.js";
import { YW, jTn } from "./aiCodeTypes.js";
import { Qr, Ss, _be } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { vl, wm } from "./buildFlags.js";
import { UJ } from "./composerChatService.js";
import { l0 } from "./composerChatServiceInterface.js";
import { Kbe, WCe } from "./composerCodeBlockService.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { Abe, X6e } from "./cppEventLogger.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { FD, yW } from "./editorWorker.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { $at } from "./index_18.ts";
import { G4, UO } from "./inlineDiffService.js";
import { It } from "./instantiation.js";
import { du, kv } from "./map.js";
import { tTe } from "./murmurhash.ts";
import { MB } from "./pathUtils.js";
import { Ul, sO } from "./path_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Y6e } from "./yBp.js";
var vSg, _Sg, bSg, nxi, _ls;
export { _Sg, _ls, bSg, nxi, vSg };
var __wakaru_bls_initialized = false;
export function bls() {
if (__wakaru_bls_initialized) return;
__wakaru_bls_initialized = true;
"use strict";
E(), $at(), Gt(), Qe(), du(), Ul(), G4(), hPe(), yW(), wm(), Rn(), It(), jTn(), Sr(), X6e(), Ss(), Dc(), fo(), _s(), MB(), UJ(), WCe(), Pl(), LS(), NCk(), vSg = 100, _Sg = 25, bSg = 100, nxi = jn("aiCodeEventTrackingService"), _ls = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this.editorWorkerService = t, this.workspaceContextService = e, this.analyticsService = n, this.experimentService = i, this.aiService = r, this.environmentService = s, this.cppEventLoggerService = o, this.inlineDiffService = a, this.diffDecorationVisibilityService = l, this.composerDataService = c, this.composerChatService = u, this.composerCodeBlockService = d, this.composerEventService = h, this.aiCodeTrackingService = p, this.processedEvents = new kv(vSg), this.recentHashes = new kv(_Sg), this.composerTally = new kv(bSg), !vl.localMode && (this.registerTabEvents(), this.registerComposerDiffEvents(), this.registerExperimentalSuggestionEvents());
    }
    normalizePath(t) {
        return Y6e(this.workspaceContextService, t) ?? t;
    }
    getComposer(t) {
        return t ? this.composerDataService.getComposerDataIfLoaded(t) : void 0;
    }
    registerTabEvents() {
        this._register(this.cppEventLoggerService.onDidSuggestCpp(async ({ file: t, previousContent: e, updatedContent: n, cppSource: i, requestId: r })=>{
            const s = sO(t).slice(1), { linesAdded: o, linesRemoved: a } = await vls(this.editorWorkerService, e, n).catch(()=>({
                    linesAdded: 0,
                    linesRemoved: 0
                }));
            this.analyticsService.trackEvent("tab.suggestion", {
                requestId: r,
                model: "tab",
                fileExtension: s,
                linesAdded: o,
                linesRemoved: a,
                cppSource: i
            });
        })), this._register(this.cppEventLoggerService.onDidAcceptAiContent(async (t)=>{
            const { file: e, previousContent: n, updatedContent: i, cppSource: r, source: s, requestId: o } = t, a = sO(e).slice(1), l = this.normalizePath(e);
            await Promise.all([
                this.aiCodeTrackingService.storeGeneratedContent(l, n, i, {
                    source: s,
                    fileExtension: a,
                    fileName: l,
                    requestId: o
                }).catch((c)=>console.error("[AiCodeTracking] Error storing:", c)),
                vls(this.editorWorkerService, n, i).then(({ linesAdded: c, linesRemoved: u })=>{
                    this.analyticsService.trackEvent("tab.accept", {
                        linesAdded: c,
                        linesRemoved: u,
                        fileExtension: a,
                        requestId: o,
                        model: "tab",
                        cppSource: r
                    });
                }).catch((c)=>console.error("[AiCodeTracking] Error calculating lines:", c))
            ]), this.aiCodeTrackingService.acceptedSuggestion({
                ...t,
                file: l
            });
        })), this._register(this.cppEventLoggerService.onDidRejectCpp(async ({ file: t, previousContent: e, updatedContent: n, cppSource: i, requestId: r })=>{
            const s = sO(t).slice(1), { linesAdded: o, linesRemoved: a } = await vls(this.editorWorkerService, e, n).catch(()=>({
                    linesAdded: 0,
                    linesRemoved: 0
                }));
            this.analyticsService.trackEvent("tab.reject", {
                requestId: r,
                model: "tab",
                fileExtension: s,
                linesAdded: o,
                linesRemoved: a,
                cppSource: i
            });
        }));
    }
    registerComposerDiffEvents() {
        const t = this.environmentService.isGlass ? en.filter(this.composerEventService.onDidFinishStreamChatForWorkspace, (e)=>e.workspaceIdentifier.id === this.workspaceContextService.getWorkspace().id) : this.composerEventService.onDidFinishStreamChat;
        this._register(this.inlineDiffService.onDidAcceptDiff(async (e)=>{
            const n = this.normalizePath(e.uri.path);
            if (e.change) {
                if (e.change.accepted.length === 0 && e.change.rejected.length === 0) return;
                const o = this.generateRecentHash(n, {
                    added: e.change.accepted,
                    removed: e.change.rejected
                });
                if (this.recentHashes.has(o)) return;
                this.recentHashes.set(o, !0);
            }
            const i = this.generateEventKey("full-diff", n, e.requestId);
            if (this.processedEvents.has(i)) return;
            const r = this.getComposer(e.composerMetadata?.composerId), s = await this.collectDiffMetadata(e.composerMetadata?.composerId, e.inlineDiff, e, e.requestId).catch(()=>{});
            if (s) {
                const o = e.change?.accepted?.length ?? s.linesAdded, a = e.change?.rejected?.length ?? s.linesRemoved;
                (o > 0 || a > 0) && this.trackComposerDiffEvents("accept", {
                    ...s,
                    composerId: e.composerMetadata?.composerId,
                    linesAdded: o,
                    linesRemoved: a,
                    invocationID: r?.latestChatGenerationUUID
                }, e.uri.path);
            }
            this.processedEvents.set(i, !0), this.aiCodeTrackingService.acceptedSuggestion({
                ...e,
                file: n
            });
        })), this._register(this.inlineDiffService.onDidAcceptPartialDiff(async (e)=>{
            const n = this.normalizePath(e.diffInfo.uri.path), i = this.generateEventKey("partial-diff", n, e.requestId, e.change);
            if (this.processedEvents.has(i) || this.processedEvents.has(this.generateEventKey("full-diff", n, e.requestId))) return;
            const r = this.generateRecentHash(n, {
                added: e.change.accepted,
                removed: e.change.rejected
            });
            if (this.recentHashes.has(r)) return;
            const s = this.getComposer(e.diffInfo.composerMetadata?.composerId), o = await this.collectDiffMetadata(e.diffInfo.composerMetadata?.composerId, e.inlineDiff, e.diffInfo, e.requestId).catch(()=>{});
            o && this.trackComposerDiffEvents("accept", {
                ...o,
                composerId: e.diffInfo.composerMetadata?.composerId,
                linesAdded: e.change.accepted.length,
                linesRemoved: e.change.rejected.length,
                invocationID: s?.latestChatGenerationUUID
            }, e.diffInfo.uri.path), this.processedEvents.set(i, !0), this.recentHashes.set(r, !0), this.aiCodeTrackingService.acceptedSuggestion({
                ...e,
                file: n
            });
        })), this._register(this.inlineDiffService.onDidRejectDiff(async (e)=>{
            const n = this.getComposer(e.composerMetadata?.composerId), i = await this.collectDiffMetadata(e.composerMetadata?.composerId, e.inlineDiff, e).catch(()=>{});
            i && this.trackComposerDiffEvents("reject", {
                ...i,
                composerId: e.composerMetadata?.composerId,
                linesAdded: e.change?.accepted?.length ?? i.linesAdded,
                linesRemoved: e.change?.rejected?.length ?? i.linesRemoved,
                source: e.sourceContext,
                invocationID: n?.latestChatGenerationUUID
            }, e.uri.path);
        })), this._register(this.inlineDiffService.onDidRejectPartialDiff(async (e)=>{
            const n = this.getComposer(e.diffInfo.composerMetadata?.composerId), i = await this.collectDiffMetadata(e.diffInfo.composerMetadata?.composerId, e.inlineDiff, e.diffInfo).catch(()=>{});
            i && this.trackComposerDiffEvents("reject", {
                ...i,
                composerId: e.diffInfo.composerMetadata?.composerId,
                source: e.diffInfo.sourceContext,
                invocationID: n?.latestChatGenerationUUID
            }, e.diffInfo.uri.path);
        })), this._register(t(async (e)=>{
            e.diffEvents.length > 0 && (e.isErrored || e.isAborted) && await this.processDiffEvents(e.diffEvents, e.isAborted ? "aborted" : "errored").catch((n)=>console.error("[AiCodeTracking] Error processing diff events:", n));
        })), this._register(this.composerChatService.onDidDisplayDiffs(async (e)=>{
            await this.processDiffEvents(e, "completed").catch((n)=>console.error("[AiCodeTracking] Error processing diff events:", n));
        })), this._register(this.composerEventService.onDidAcceptDiffWithoutInline(async (e)=>{
            const n = this.normalizePath(e.uri.path), i = this.generateEventKey("no-inline-diff", n, e.generationUUID);
            if (this.processedEvents.has(i)) return;
            const r = this.getComposer(e.composerId), s = sO(e.uri.path).slice(1), { linesAdded: o, linesRemoved: a, composerId: l, generationUUID: c } = e;
            this.analyticsService.trackEvent("composer.diff_summary", {
                filesChanged: 1,
                linesAdded: o,
                linesRemoved: a,
                model: r?.modelConfig?.modelName ?? "",
                isAgentic: !!r?.isAgentic,
                composerRequestID: c,
                invocationID: r?.latestChatGenerationUUID,
                status: "completed",
                composerId: l
            }), this.analyticsService.trackEvent("composer.diff_file", {
                linesAdded: o,
                linesRemoved: a,
                fileExtension: s,
                composerRequestID: c,
                invocationID: r?.latestChatGenerationUUID,
                status: "completed",
                composerId: l
            }), this.trackComposerDiffEvents("accept", {
                linesAdded: o,
                linesRemoved: a,
                fileExtension: s,
                model: r?.modelConfig?.modelName,
                uiSource: "composer",
                composerRequestID: c,
                promptBarID: void 0,
                isWorktree: !!r?.gitWorktree,
                composerId: l,
                source: "composer",
                invocationID: r?.latestChatGenerationUUID
            }, e.uri.path), this.processedEvents.set(i, !0), this.aiCodeTrackingService.acceptedSuggestion({
                file: n,
                previousContent: e.previousContent,
                updatedContent: e.updatedContent,
                source: YW.COMPOSER,
                requestId: c,
                range: {
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: e.updatedContent.split(`
`).length,
                    endColumn: 1
                }
            });
        }));
    }
    registerExperimentalSuggestionEvents() {
        const t = (e)=>e.map(({ range: n, rangeOffset: i = 0, rangeLength: r = 0, text: s })=>({
                    range: {
                        start: {
                            line: n.startLineNumber - 1,
                            character: n.startColumn - 1
                        },
                        end: {
                            line: n.endLineNumber - 1,
                            character: n.endColumn - 1
                        }
                    },
                    rangeOffset: i,
                    rangeLength: r,
                    text: s ?? ""
                }));
        this._register(this.cppEventLoggerService.onDidApplyCppEdits((e)=>{
            this.aiCodeTrackingService.generatedSuggestion({
                uri: e.uri.toString(),
                requestId: e.requestId,
                changes: t(e.edits),
                source: e.source === YW.TAB ? "tab" : "composer"
            });
        })), this._register(this.inlineDiffService.onDidApplyDiffEdits((e)=>{
            this.aiCodeTrackingService.generatedSuggestion({
                uri: e.uri.toString(),
                requestId: e.requestId,
                changes: t(e.edits),
                source: e.source === YW.TAB ? "tab" : "composer"
            });
        }));
    }
    async processDiffEvents(t, e) {
        let n = {
            linesAdded: 0,
            linesRemoved: 0,
            filesProcessed: 0
        }, i;
        for (const r of t){
            const s = this.composerDataService.getHandleIfLoaded(r.composerId);
            if (!s) continue;
            const o = this.composerCodeBlockService.getInlineDiff(s, r.uri);
            if (!o || !r.codeblockId) continue;
            const a = this.generateEventKey("diff-display", r.uri.path, r.generationUUID);
            if (this.processedEvents.has(a)) continue;
            const l = await this.collectDiffMetadata(r.composerId, o, r.diffInfo, r.generationUUID);
            if (!l) continue;
            i = {
                composerRequestID: r.generationUUID,
                modelName: r.modelName,
                composerId: r.composerId
            };
            let { linesAdded: c, linesRemoved: u } = l;
            const d = `${r.composerId}-${r.uri.path}`, h = this.composerTally.get(d) ?? {
                linesAdded: 0,
                linesRemoved: 0
            };
            c = Math.max(0, c - h.linesAdded), u = Math.max(0, u - h.linesRemoved), this.composerTally.set(d, {
                linesAdded: h.linesAdded + c,
                linesRemoved: h.linesRemoved + u
            }), n.linesAdded += c, n.linesRemoved += u, n.filesProcessed++, this.diffDecorationVisibilityService.shouldHideInlineDiffs() || this.analyticsService.trackEvent("composer.diff_file", {
                linesAdded: c,
                linesRemoved: u,
                fileExtension: l.fileExtension,
                composerRequestID: r.generationUUID,
                composerId: r.composerId,
                status: e
            }), this.processedEvents.set(a, !0);
        }
        n.filesProcessed > 0 && i && (this.diffDecorationVisibilityService.shouldHideInlineDiffs() || this.analyticsService.trackEvent("composer.diff_summary", {
            filesChanged: n.filesProcessed,
            linesAdded: n.linesAdded,
            linesRemoved: n.linesRemoved,
            model: i.modelName,
            isAgentic: !0,
            composerRequestID: i.composerRequestID,
            composerId: i.composerId,
            status: e
        }));
    }
    trackComposerDiffEvents(t, e, n) {
        const { source: i = "editor", fileExtension: r, linesAdded: s, linesRemoved: o, composerId: a } = e;
        this.analyticsService.trackEvent(`composer.${t}_diff`, {
            ...e,
            source: i
        }), r && this.analyticsService.trackEvent(`composer.${t}_diff_file`, {
            ...e,
            fileExtension: r
        });
        const l = `${a}-${n}`, c = this.composerTally.get(l);
        c && this.composerTally.set(l, {
            linesAdded: Math.max(0, c.linesAdded - s),
            linesRemoved: Math.max(0, c.linesRemoved - o)
        });
    }
    async collectDiffMetadata(t, e, n, i) {
        if (e) try {
            const r = e.changes ?? [], s = this.getComposer(t);
            let o = n?.change?.accepted?.length, a = n?.change?.rejected?.length;
            if (o === void 0 || a === void 0) {
                o = a = 0;
                for (const d of r)o += d.addedRange.endLineNumberExclusive - d.addedRange.startLineNumber, a += d.removedTextLines.length;
            }
            const l = n?.diffId ? this.inlineDiffService.getHandlerByDiffId(n.diffId) : void 0, c = !!l?.promptBarId, u = t ?? n?.composerMetadata?.composerId;
            return {
                linesAdded: o ?? 0,
                linesRemoved: a ?? 0,
                fileExtension: n?.uri ? sO(n.uri.path).slice(1) : "",
                model: c ? "default" : s?.modelConfig?.modelName,
                uiSource: c ? "cmdk" : u ? "composer" : null,
                composerRequestID: i ?? e.generationUUID,
                promptBarID: l?.promptBarId,
                isWorktree: !!s?.gitWorktree,
                source: n?.sourceContext ?? "editor",
                composerId: u
            };
        } catch (r) {
            console.error("[composer] Error collecting diff metadata:", r);
            return;
        }
    }
    generateEventKey(...t) {
        return tTe.hash(t.map((e)=>JSON.stringify(e)).join(":"), 0).toString();
    }
    generateRecentHash(t, { added: e, removed: n }) {
        return tTe.hash(`${t}${e.join(`
`)}\0\0${n.join(`
`)}`, 0);
    }
    async trackNoInlineDiffEvents(t) {
        if (vl.localMode) return;
        const { contentsBefore: e, contentsAfter: n, fileExtension: i, composerId: r, composerRequestID: s, model: o, isWorktree: a, invocationID: l } = t, { linesAdded: c, linesRemoved: u } = await vls(this.editorWorkerService, e, n).catch(()=>({
                linesAdded: 0,
                linesRemoved: 0
            }));
        this.analyticsService.trackEvent("composer.diff_file", {
            linesAdded: c,
            linesRemoved: u,
            fileExtension: i,
            composerRequestID: s,
            composerId: r,
            invocationID: l,
            status: "completed"
        }), this.analyticsService.trackEvent("composer.accept_diff_file", {
            linesAdded: c,
            linesRemoved: u,
            fileExtension: i,
            composerRequestID: s,
            composerId: r,
            model: o,
            uiSource: "composer",
            isWorktree: a,
            invocationID: l
        }), this.analyticsService.trackEvent("composer.diff_summary", {
            filesChanged: 1,
            linesAdded: c,
            linesRemoved: u,
            model: o ?? "",
            isAgentic: !0,
            composerRequestID: s,
            composerId: r,
            invocationID: l,
            status: "completed"
        }), this.analyticsService.trackEvent("composer.accept_diff", {
            linesAdded: c,
            linesRemoved: u,
            model: o ?? "",
            uiSource: "composer",
            composerRequestID: s,
            isWorktree: a,
            composerId: r,
            source: "composer",
            invocationID: l
        });
    }
}, _ls = Re([
    F(0, FD),
    F(1, yr),
    F(2, Qr),
    F(3, Cr),
    F(4, jl),
    F(5, ps),
    F(6, Abe),
    F(7, UO),
    F(8, fCe),
    F(9, no),
    F(10, l0),
    F(11, Kbe),
    F(12, Fb),
    F(13, _be)
], _ls), bn(nxi, _ls, 0);

}
