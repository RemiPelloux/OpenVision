import { h_e } from "./A3u.js";
import { Ct, Se, bt, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ss_ } from "./aiCodeChangeUtils.js";
import { M6, YHt } from "./aiCodeTypes.js";
import { Tse, ca, la } from "./aiMiscServices.js";
import { Sg, jp } from "./aiService.js";
import { am, kc } from "./buildFlags.js";
import { _q } from "./composerChatService.js";
import { OR } from "./composerChatServiceInterface.js";
import { poe, zde } from "./composerCodeBlockService.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { Gse, r1e } from "./cppEventLogger.js";
import { Ade, o1e } from "./diffDecorationVisibilityService.js";
import { YC, kM } from "./editorWorker.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { qtt } from "./index_18.ts";
import { CN, zM } from "./inlineDiffService.js";
import { Ze } from "./instantiation.js";
import { ag, oc } from "./map.js";
import { ehe } from "./murmurhash.ts";
import { K3 } from "./pathUtils.js";
import { ba, dM } from "./path_2.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
async function Uer(e, t, n) {
    const i = t.split(`
`), r = n.split(`
`), s = await e.computeLinesDiff(i, r, {
        ignoreTrimWhitespace: !1,
        computeMoves: !1,
        maxComputationTimeMs: 500
    });
    let o = 0, a = 0;
    for (const c of s.changes){
        for(let l = c.original.startLineNumber; l < c.original.endLineNumberExclusive; l++){
            const u = l - 1;
            i[u].trim() && a++;
        }
        for(let l = c.modified.startLineNumber; l < c.modified.endLineNumberExclusive; l++){
            const u = l - 1;
            r[u].trim() && o++;
        }
    }
    return {
        linesAdded: o,
        linesRemoved: a
    };
}
var IPh, APh, RPh, wBn, $er;
export { $er, APh, IPh, RPh, Uer, wBn };
var __wakaru_Her_initialized = false;
export function Her() {
if (__wakaru_Her_initialized) return;
__wakaru_Her_initialized = true;
"use strict";
x(), qtt(), bt(), Se(), oc(), ba(), CN(), o1e(), kM(), am(), Pn(), Ze(), YHt(), ci(), r1e(), la(), Sg(), Vr(), qs(), K3(), _q(), zde(), nl(), yC(), Ss_(), IPh = 100, APh = 25, RPh = 100, wBn = vn("aiCodeEventTrackingService"), $er = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(), this.editorWorkerService = e, this.workspaceContextService = t, this.analyticsService = n, this.experimentService = i, this.aiService = r, this.environmentService = s, this.cppEventLoggerService = o, this.inlineDiffService = a, this.diffDecorationVisibilityService = c, this.composerDataService = l, this.composerChatService = u, this.composerCodeBlockService = h, this.composerEventService = p, this.aiCodeTrackingService = g, this.processedEvents = new ag(IPh), this.recentHashes = new ag(APh), this.composerTally = new ag(RPh), !kc.localMode && (this.registerTabEvents(), this.registerComposerDiffEvents(), this.registerExperimentalSuggestionEvents());
    }
    normalizePath(e) {
        return h_e(this.workspaceContextService, e) ?? e;
    }
    getComposer(e) {
        return e ? this.composerDataService.getComposerDataIfLoaded(e) : void 0;
    }
    registerTabEvents() {
        this._register(this.cppEventLoggerService.onDidSuggestCpp(async ({ file: e, previousContent: t, updatedContent: n, cppSource: i, requestId: r })=>{
            const s = dM(e).slice(1), { linesAdded: o, linesRemoved: a } = await Uer(this.editorWorkerService, t, n).catch(()=>({
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
        })), this._register(this.cppEventLoggerService.onDidAcceptAiContent(async (e)=>{
            const { file: t, previousContent: n, updatedContent: i, cppSource: r, source: s, requestId: o } = e, a = dM(t).slice(1), c = this.normalizePath(t);
            await Promise.all([
                this.aiCodeTrackingService.storeGeneratedContent(c, n, i, {
                    source: s,
                    fileExtension: a,
                    fileName: c,
                    requestId: o
                }).catch((l)=>console.error("[AiCodeTracking] Error storing:", l)),
                Uer(this.editorWorkerService, n, i).then(({ linesAdded: l, linesRemoved: u })=>{
                    this.analyticsService.trackEvent("tab.accept", {
                        linesAdded: l,
                        linesRemoved: u,
                        fileExtension: a,
                        requestId: o,
                        model: "tab",
                        cppSource: r
                    });
                }).catch((l)=>console.error("[AiCodeTracking] Error calculating lines:", l))
            ]), this.aiCodeTrackingService.acceptedSuggestion({
                ...e,
                file: c
            });
        })), this._register(this.cppEventLoggerService.onDidRejectCpp(async ({ file: e, previousContent: t, updatedContent: n, cppSource: i, requestId: r })=>{
            const s = dM(e).slice(1), { linesAdded: o, linesRemoved: a } = await Uer(this.editorWorkerService, t, n).catch(()=>({
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
        const e = this.environmentService.isGlass ? Ct.filter(this.composerEventService.onDidFinishStreamChatForWorkspace, (t)=>t.workspaceIdentifier.id === this.workspaceContextService.getWorkspace().id) : this.composerEventService.onDidFinishStreamChat;
        this._register(this.inlineDiffService.onDidAcceptDiff(async (t)=>{
            const n = this.normalizePath(t.uri.path);
            if (t.change) {
                if (t.change.accepted.length === 0 && t.change.rejected.length === 0) return;
                const o = this.generateRecentHash(n, {
                    added: t.change.accepted,
                    removed: t.change.rejected
                });
                if (this.recentHashes.has(o)) return;
                this.recentHashes.set(o, !0);
            }
            const i = this.generateEventKey("full-diff", n, t.requestId);
            if (this.processedEvents.has(i)) return;
            const r = this.getComposer(t.composerMetadata?.composerId), s = await this.collectDiffMetadata(t.composerMetadata?.composerId, t.inlineDiff, t, t.requestId).catch(()=>{});
            if (s) {
                const o = t.change?.accepted?.length ?? s.linesAdded, a = t.change?.rejected?.length ?? s.linesRemoved;
                (o > 0 || a > 0) && this.trackComposerDiffEvents("accept", {
                    ...s,
                    composerId: t.composerMetadata?.composerId,
                    linesAdded: o,
                    linesRemoved: a,
                    invocationID: r?.latestChatGenerationUUID
                }, t.uri.path);
            }
            this.processedEvents.set(i, !0), this.aiCodeTrackingService.acceptedSuggestion({
                ...t,
                file: n
            });
        })), this._register(this.inlineDiffService.onDidAcceptPartialDiff(async (t)=>{
            const n = this.normalizePath(t.diffInfo.uri.path), i = this.generateEventKey("partial-diff", n, t.requestId, t.change);
            if (this.processedEvents.has(i) || this.processedEvents.has(this.generateEventKey("full-diff", n, t.requestId))) return;
            const r = this.generateRecentHash(n, {
                added: t.change.accepted,
                removed: t.change.rejected
            });
            if (this.recentHashes.has(r)) return;
            const s = this.getComposer(t.diffInfo.composerMetadata?.composerId), o = await this.collectDiffMetadata(t.diffInfo.composerMetadata?.composerId, t.inlineDiff, t.diffInfo, t.requestId).catch(()=>{});
            o && this.trackComposerDiffEvents("accept", {
                ...o,
                composerId: t.diffInfo.composerMetadata?.composerId,
                linesAdded: t.change.accepted.length,
                linesRemoved: t.change.rejected.length,
                invocationID: s?.latestChatGenerationUUID
            }, t.diffInfo.uri.path), this.processedEvents.set(i, !0), this.recentHashes.set(r, !0), this.aiCodeTrackingService.acceptedSuggestion({
                ...t,
                file: n
            });
        })), this._register(this.inlineDiffService.onDidRejectDiff(async (t)=>{
            const n = this.getComposer(t.composerMetadata?.composerId), i = await this.collectDiffMetadata(t.composerMetadata?.composerId, t.inlineDiff, t).catch(()=>{});
            i && this.trackComposerDiffEvents("reject", {
                ...i,
                composerId: t.composerMetadata?.composerId,
                linesAdded: t.change?.accepted?.length ?? i.linesAdded,
                linesRemoved: t.change?.rejected?.length ?? i.linesRemoved,
                source: t.sourceContext,
                invocationID: n?.latestChatGenerationUUID
            }, t.uri.path);
        })), this._register(this.inlineDiffService.onDidRejectPartialDiff(async (t)=>{
            const n = this.getComposer(t.diffInfo.composerMetadata?.composerId), i = await this.collectDiffMetadata(t.diffInfo.composerMetadata?.composerId, t.inlineDiff, t.diffInfo).catch(()=>{});
            i && this.trackComposerDiffEvents("reject", {
                ...i,
                composerId: t.diffInfo.composerMetadata?.composerId,
                source: t.diffInfo.sourceContext,
                invocationID: n?.latestChatGenerationUUID
            }, t.diffInfo.uri.path);
        })), this._register(e(async (t)=>{
            t.diffEvents.length > 0 && (t.isErrored || t.isAborted) && await this.processDiffEvents(t.diffEvents, t.isAborted ? "aborted" : "errored").catch((n)=>console.error("[AiCodeTracking] Error processing diff events:", n));
        })), this._register(this.composerChatService.onDidDisplayDiffs(async (t)=>{
            await this.processDiffEvents(t, "completed").catch((n)=>console.error("[AiCodeTracking] Error processing diff events:", n));
        })), this._register(this.composerEventService.onDidAcceptDiffWithoutInline(async (t)=>{
            const n = this.normalizePath(t.uri.path), i = this.generateEventKey("no-inline-diff", n, t.generationUUID);
            if (this.processedEvents.has(i)) return;
            const r = this.getComposer(t.composerId), s = dM(t.uri.path).slice(1), { linesAdded: o, linesRemoved: a, composerId: c, generationUUID: l } = t;
            this.analyticsService.trackEvent("composer.diff_summary", {
                filesChanged: 1,
                linesAdded: o,
                linesRemoved: a,
                model: r?.modelConfig?.modelName ?? "",
                isAgentic: !!r?.isAgentic,
                composerRequestID: l,
                invocationID: r?.latestChatGenerationUUID,
                status: "completed",
                composerId: c
            }), this.analyticsService.trackEvent("composer.diff_file", {
                linesAdded: o,
                linesRemoved: a,
                fileExtension: s,
                composerRequestID: l,
                invocationID: r?.latestChatGenerationUUID,
                status: "completed",
                composerId: c
            }), this.trackComposerDiffEvents("accept", {
                linesAdded: o,
                linesRemoved: a,
                fileExtension: s,
                model: r?.modelConfig?.modelName,
                uiSource: "composer",
                composerRequestID: l,
                promptBarID: void 0,
                isWorktree: !!r?.gitWorktree,
                composerId: c,
                source: "composer",
                invocationID: r?.latestChatGenerationUUID
            }, t.uri.path), this.processedEvents.set(i, !0), this.aiCodeTrackingService.acceptedSuggestion({
                file: n,
                previousContent: t.previousContent,
                updatedContent: t.updatedContent,
                source: M6.COMPOSER,
                requestId: l,
                range: {
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: t.updatedContent.split(`
`).length,
                    endColumn: 1
                }
            });
        }));
    }
    registerExperimentalSuggestionEvents() {
        const e = (t)=>t.map(({ range: n, rangeOffset: i = 0, rangeLength: r = 0, text: s })=>({
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
        this._register(this.cppEventLoggerService.onDidApplyCppEdits((t)=>{
            this.aiCodeTrackingService.generatedSuggestion({
                uri: t.uri.toString(),
                requestId: t.requestId,
                changes: e(t.edits),
                source: t.source === M6.TAB ? "tab" : "composer"
            });
        })), this._register(this.inlineDiffService.onDidApplyDiffEdits((t)=>{
            this.aiCodeTrackingService.generatedSuggestion({
                uri: t.uri.toString(),
                requestId: t.requestId,
                changes: e(t.edits),
                source: t.source === M6.TAB ? "tab" : "composer"
            });
        }));
    }
    async processDiffEvents(e, t) {
        let n = {
            linesAdded: 0,
            linesRemoved: 0,
            filesProcessed: 0
        }, i;
        for (const r of e){
            const s = this.composerDataService.getHandleIfLoaded(r.composerId);
            if (!s) continue;
            const o = this.composerCodeBlockService.getInlineDiff(s, r.uri);
            if (!o || !r.codeblockId) continue;
            const a = this.generateEventKey("diff-display", r.uri.path, r.generationUUID);
            if (this.processedEvents.has(a)) continue;
            const c = await this.collectDiffMetadata(r.composerId, o, r.diffInfo, r.generationUUID);
            if (!c) continue;
            i = {
                composerRequestID: r.generationUUID,
                modelName: r.modelName,
                composerId: r.composerId
            };
            let { linesAdded: l, linesRemoved: u } = c;
            const h = `${r.composerId}-${r.uri.path}`, p = this.composerTally.get(h) ?? {
                linesAdded: 0,
                linesRemoved: 0
            };
            l = Math.max(0, l - p.linesAdded), u = Math.max(0, u - p.linesRemoved), this.composerTally.set(h, {
                linesAdded: p.linesAdded + l,
                linesRemoved: p.linesRemoved + u
            }), n.linesAdded += l, n.linesRemoved += u, n.filesProcessed++, this.diffDecorationVisibilityService.shouldHideInlineDiffs() || this.analyticsService.trackEvent("composer.diff_file", {
                linesAdded: l,
                linesRemoved: u,
                fileExtension: c.fileExtension,
                composerRequestID: r.generationUUID,
                composerId: r.composerId,
                status: t
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
            status: t
        }));
    }
    trackComposerDiffEvents(e, t, n) {
        const { source: i = "editor", fileExtension: r, linesAdded: s, linesRemoved: o, composerId: a } = t;
        this.analyticsService.trackEvent(`composer.${e}_diff`, {
            ...t,
            source: i
        }), r && this.analyticsService.trackEvent(`composer.${e}_diff_file`, {
            ...t,
            fileExtension: r
        });
        const c = `${a}-${n}`, l = this.composerTally.get(c);
        l && this.composerTally.set(c, {
            linesAdded: Math.max(0, l.linesAdded - s),
            linesRemoved: Math.max(0, l.linesRemoved - o)
        });
    }
    async collectDiffMetadata(e, t, n, i) {
        if (t) try {
            const r = t.changes ?? [], s = this.getComposer(e);
            let o = n?.change?.accepted?.length, a = n?.change?.rejected?.length;
            if (o === void 0 || a === void 0) {
                o = a = 0;
                for (const h of r)o += h.addedRange.endLineNumberExclusive - h.addedRange.startLineNumber, a += h.removedTextLines.length;
            }
            const c = n?.diffId ? this.inlineDiffService.getHandlerByDiffId(n.diffId) : void 0, l = !!c?.promptBarId, u = e ?? n?.composerMetadata?.composerId;
            return {
                linesAdded: o ?? 0,
                linesRemoved: a ?? 0,
                fileExtension: n?.uri ? dM(n.uri.path).slice(1) : "",
                model: l ? "default" : s?.modelConfig?.modelName,
                uiSource: l ? "cmdk" : u ? "composer" : null,
                composerRequestID: i ?? t.generationUUID,
                promptBarID: c?.promptBarId,
                isWorktree: !!s?.gitWorktree,
                source: n?.sourceContext ?? "editor",
                composerId: u
            };
        } catch (r) {
            console.error("[composer] Error collecting diff metadata:", r);
            return;
        }
    }
    generateEventKey(...e) {
        return ehe.hash(e.map((t)=>JSON.stringify(t)).join(":"), 0).toString();
    }
    generateRecentHash(e, { added: t, removed: n }) {
        return ehe.hash(`${e}${t.join(`
`)}\0\0${n.join(`
`)}`, 0);
    }
    async trackNoInlineDiffEvents(e) {
        if (kc.localMode) return;
        const { contentsBefore: t, contentsAfter: n, fileExtension: i, composerId: r, composerRequestID: s, model: o, isWorktree: a, invocationID: c } = e, { linesAdded: l, linesRemoved: u } = await Uer(this.editorWorkerService, t, n).catch(()=>({
                linesAdded: 0,
                linesRemoved: 0
            }));
        this.analyticsService.trackEvent("composer.diff_file", {
            linesAdded: l,
            linesRemoved: u,
            fileExtension: i,
            composerRequestID: s,
            composerId: r,
            invocationID: c,
            status: "completed"
        }), this.analyticsService.trackEvent("composer.accept_diff_file", {
            linesAdded: l,
            linesRemoved: u,
            fileExtension: i,
            composerRequestID: s,
            composerId: r,
            model: o,
            uiSource: "composer",
            isWorktree: a,
            invocationID: c
        }), this.analyticsService.trackEvent("composer.diff_summary", {
            filesChanged: 1,
            linesAdded: l,
            linesRemoved: u,
            model: o ?? "",
            isAgentic: !0,
            composerRequestID: s,
            composerId: r,
            invocationID: c,
            status: "completed"
        }), this.analyticsService.trackEvent("composer.accept_diff", {
            linesAdded: l,
            linesRemoved: u,
            model: o ?? "",
            uiSource: "composer",
            composerRequestID: s,
            isWorktree: a,
            composerId: r,
            source: "composer",
            invocationID: c
        });
    }
}, $er = ie([
    C(0, YC),
    C(1, Jn),
    C(2, ca),
    C(3, Kr),
    C(4, jp),
    C(5, Yi),
    C(6, Gse),
    C(7, zM),
    C(8, Ade),
    C(9, Zs),
    C(10, OR),
    C(11, poe),
    C(12, Zy),
    C(13, Tse)
], $er), mn(wBn, $er, 0);

}
