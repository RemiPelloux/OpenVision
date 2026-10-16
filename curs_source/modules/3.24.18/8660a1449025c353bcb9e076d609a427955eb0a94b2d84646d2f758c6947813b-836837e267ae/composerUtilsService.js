import { Lzt, Wil, ahk, fng } from "./Aeg.js";
import { Fa, Nt, Qe, VCo, da, st, ww } from "./Iwo.js";
import { NVo, dhe } from "./LYd.js";
import { Gmr, O3, aa, bn, hA, jn } from "./SZu.js";
import { BNk, GNk, HNk, VNk, XVg, Yps, jNk, qNk, zNk } from "./Ycg.js";
import { ju, nf } from "./agent_pb.js";
import { Fdl, lEt } from "./aiFileInfoServiceTypes.js";
import { Dc, jl } from "./aiService.js";
import { Ebe, c_, cot } from "./async.cursor.js";
import { fTt, sat } from "./asyncOperationRegistry.js";
import { Rs, ss } from "./authenticationService.js";
import { N1l, UVg } from "./blobUploadService.js";
import { vl, wm } from "./buildFlags.js";
import { DHe } from "./canvasComposer.js";
import { $mn, bs, o9t, rz, sd, wy } from "./chat_pb.js";
import { nr, rs } from "./commands.js";
import { sie, y6 } from "./composerCapabilities.js";
import { AWt, YCn } from "./composerCheckpointStorageService.js";
import { $0t, BWt } from "./composerCodeBlockDiffStorageService.js";
import { Kbe, WCe } from "./composerCodeBlockService.js";
import { Hqr, J_, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { Cie, dG } from "./composerFileService.js";
import { iI, w1 } from "./composerLogService.js";
import { U0t, eot } from "./composerMessageStorageService.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { HCe, O4e } from "./composerTextModelService.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Ef, L0n } from "./constants_18.js";
import { pat } from "./conversationBodyAccess.js";
import { xze } from "./conversationHeaderQueries.js";
import { FD, yW } from "./editorWorker.js";
import { Wm, od } from "./editor_2.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Xy } from "./hash.js";
import { WRi } from "./hydrateComposerFromHostSession.js";
import { nl } from "./index.ts";
import { It, dn } from "./instantiation.js";
import { B4, F6e, WL1, kbe } from "./ipa.js";
import { DD, wd } from "./lineRange.js";
import { OQ, ioi } from "./linesDiffComputer.js";
import { du, kv } from "./map.js";
import { Dm } from "./message.js";
import { Uh, ip } from "./metricsService.js";
import { oIi } from "./nestedTaskUtils.js";
import { Ki, Ot } from "./network.js";
import { AB } from "./planFileUtils.js";
import { IA, VI } from "./pluginsProviderService.js";
import { hr } from "./protobuf.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Q0 } from "./sentry.js";
import { rVt } from "./subagentComposerConstants.js";
import { Ct, Pu } from "./tools_pb.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { rC } from "./utils_23.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { CBp, Hae } from "./yBp.js";
import { ks, pi } from "./ze.js";
var F1l, B1l, i9, MVe, DVe, ZVg, GRi, QVg, JVg, U1l, eKg, tKg, j1l, nKg, $1l, vye;
export { $1l, B1l, DVe, F1l, GRi, JVg, MVe, QVg, U1l, ZVg, eKg, i9, j1l, nKg, tKg, vye };
var __wakaru_fIt_initialized = false;
export function fIt() {
if (__wakaru_fIt_initialized) return;
__wakaru_fIt_initialized = true;
"use strict";
E(), nl(), It(), wm(), Pl(), DHe(), Qe(), Fa(), Rn(), Dc(), Sr(), fn(), sd(), ju(), uv(), yW(), Xy(), el(), y6(), rC(), Ki(), tf(), Pu(), __(), Q0(), pi(), c_(), ioi(), du(), DD(), od(), rs(), fS(), LS(), Fdl(), fTt(), Ux(), Ef(), BWt(), ip(), hr(), Xo(), YCn(), dp(), uv(), WCe(), Cie(), O4e(), xE(), _s(), Rs(), IA(), oIi(), WRi(), UVg(), AB(), U0t(), xze(), pat(), WB(), iI(), F1l = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), B1l = (t)=>{
    throw TypeError(t);
}, i9 = (t, e)=>(n, i)=>e(n, i, t), MVe = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && B1l("Object expected");
        var i, r;
        n && (i = e[F1l("asyncDispose")]), i === void 0 && (i = e[F1l("dispose")], n && (r = i)), typeof i != "function" && B1l("Object not disposable"), r && (i = function() {
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
}, DVe = (t, e, n)=>{
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
}, ZVg = 5, GRi = 2, QVg = 12, JVg = jn("composerPlanService"), U1l = new Set, eKg = 20, tKg = new Map([
    [
        "grok-voice",
        [
            "grok voice",
            "voice agent",
            "voice assistant",
            "voice mode",
            "text to speech",
            "text-to-speech",
            "speech to text",
            "speech-to-text",
            "speech to speech",
            "speech-to-speech",
            "read aloud",
            "transcription",
            "transcribe",
            "dictation",
            "voice",
            "tts",
            "stt",
            "sts"
        ]
    ]
]), j1l = new WeakMap, nKg = new Set, $1l = new WeakMap, vye = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I){
        super(), this._composerDataService = t, this._composerFileService = e, this._workspaceContextService = n, this._editorWorkerService = i, this._reactiveStorageService = r, this.composerTextModelService = s, this._instantiationService = o, this._commandService = a, this._uiOverlayService = l, this._composerEventService = c, this._aiFileInfoService = u, this._composerCodeBlockDiffStorageService = d, this._metricsService = h, this._composerCheckpointStorageService = p, this._composerMessageStorageService = g, this._composerCodeBlockService = f, this._aiService = _, this._composerModesService = b, this._experimentService = y, this._cursorAuthenticationService = S, this._blobUploadService = k, this._pluginsProviderService = C, this._asyncOperationRegistry = T, this._composerLogService = I, this._composerDiffCache = new kv(50), this._composerDiffSemaphore = new cot(5), this._composerIdToDisposables = this._register(new da), this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>F6e(this._composerDataService.loadedComposers.ids),
                ()=>F6e(this._composerDataService.allComposersData.selectedComposerIds)
            ],
            onChange: ({ deps: [A, P] })=>{
                const M = A.filter((O)=>P.includes(O));
                for (const O of M)if (!this._composerIdToDisposables.has(O)) {
                    const N = this._composerDataService.loadedComposers.byId[O];
                    this._composerIdToDisposables.set(O, this.setupComposerListeners(N));
                }
                for (const O of this._composerIdToDisposables.keys())M.includes(O) || this._composerIdToDisposables.deleteAndDispose(O);
            },
            runNowToo: !0
        }));
    }
    get _composerViewsService() {
        return this._instantiationService.invokeFunction((t)=>t.get(Bb));
    }
    setupComposerListeners(t) {
        const e = F6e(t), n = new Nt;
        return n.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>t.editingBubbleId
            ],
            onChange: ({ deps: [i], prevDeps: [r] = [
                void 0
            ] })=>{
                if (r === void 0 || i === r) return;
                const s = e.fullConversationHeadersOnly.findIndex((h)=>h.bubbleId === r);
                if (s === -1 || s >= e.fullConversationHeadersOnly.length - 1) return;
                const o = e.fullConversationHeadersOnly[s + 1]?.bubbleId, a = e.fullConversationHeadersOnly[s - 1]?.bubbleId, l = o ? e.conversationMap[o] : void 0, c = a ? e.conversationMap[a] : void 0;
                if ((l?.type !== bs.AI || l?.capabilityType !== mo.TOOL_FORMER) && (c?.type !== bs.AI || c?.capabilityType !== mo.TOOL_FORMER) || e.conversationMap[r]?.text?.trim() !== "") return;
                const d = this._composerDataService.getHandleIfLoaded(e.composerId);
                d && this._composerDataService.deleteComposerBubbles(d, [
                    r
                ]);
            }
        })), n;
    }
    async decideRunningComposerTabAction(t, e) {
        var n = [];
        try {
            const s = MVe(n, hA("ComposerUtilsService.decideRunningComposerTabAction")), o = this._composerDataService.selectedComposerId, a = this._composerDataService.getHandleIfLoaded(o), l = a ? this._composerDataService.isComposerRunning(a) : !1;
            return e && this._composerDataService.selectedComposerIds.includes(e) ? "skip" : t === "switch" ? "new-tab" : !l || !a ? "skip" : this._composerDataService.getPendingUserDecisionGroup(a).length > 0 ? "replace" : "new-tab";
        } catch (s) {
            var i = s, r = !0;
        } finally{
            DVe(n, i, r);
        }
    }
    async getFileLinesContent(t) {
        const { uri: e, composerId: n } = t, i = this._composerDataService.getHandleIfLoaded(n), r = i ? this._composerDataService.getComposerData(i) : void 0;
        if (!await this._composerFileService.exists({
            uri: e,
            composerData: r
        })) return null;
        let o;
        try {
            return o = await this.composerTextModelService.createModelReference(e, r, !0), o.object.textEditorModel.getLinesContent();
        } catch (a) {
            return this._composerLogService.error("[composer] error getting content of file", e, a), null;
        } finally{
            o?.dispose();
        }
    }
    async getFileContents(t) {
        const { uri: e, composerId: n } = t, i = this._composerDataService.getHandleIfLoaded(n), r = i ? this._composerDataService.getComposerData(i) : void 0;
        if (!await this._composerFileService.exists({
            uri: e,
            composerData: r
        })) return null;
        let o;
        try {
            return o = await this.composerTextModelService.createModelReference(e, r, !0), o.object.textEditorModel.getValue();
        } catch (a) {
            return this._composerLogService.error("[composer] error getting full content of file", e, a), null;
        } finally{
            o?.dispose();
        }
    }
    async ensureCapabilitiesAreLoaded(t, e) {
        var n = [];
        try {
            const s = MVe(n, e ? O3(e, "ComposerUtilsService.ensureCapabilitiesAreLoaded") : hA("ComposerUtilsService.ensureCapabilitiesAreLoaded")), o = this._composerDataService.getComposerData(t);
            if (!o || o.capabilities.length > 0) return;
            const a = kbe(this._instantiationService, t.composerId);
            if (a.length === 0) throw new Error(`[composer] No capabilities found for composer ${t.composerId}`);
            this._composerDataService.updateComposerData(t, {
                capabilities: a
            });
        } catch (s) {
            var i = s, r = !0;
        } finally{
            DVe(n, i, r);
        }
    }
    async getShouldWebSearchBeEnabled(t = !1, e) {
        var n = [];
        try {
            const s = MVe(n, hA("ComposerUtilsService.getShouldWebSearchBeEnabled")), o = this._reactiveStorageService.applicationUserPersistentStorage.composerState.isWebSearchToolEnabled3;
            return o ?? !0;
        } catch (s) {
            var i = s, r = !0;
        } finally{
            DVe(n, i, r);
        }
    }
    getShouldAutoSaveAgenticEdits() {
        var t = [];
        try {
            const i = MVe(t, hA("ComposerUtilsService.getShouldAutoSaveAgenticEdits"));
            return !0;
        } catch (i) {
            var e = i, n = !0;
        } finally{
            DVe(t, e, n);
        }
    }
    replacedBubbleForEdit(t, e, n) {
        if (t.additionalData === void 0) return n;
        const i = t.params?.instructions;
        if (i === void 0) return n;
        let r = "";
        i !== void 0 && (r += `${i}

`);
        let s;
        try {
            s = this._workspaceContextService.asRelativePath(e.uri);
        } catch  {
            s = e.uri.fsPath;
        }
        return r += `\`\`\`${s}
${e.content}
\`\`\``, new wy({
            ...n,
            text: r
        });
    }
    replacedBubbleForFastEdit(t, e, n) {
        var i = [];
        try {
            const o = MVe(i, hA("ComposerUtilsService.replacedBubbleForFastEdit")), a = this._composerDataService.getComposerCapability(t, mo.TOOL_FORMER);
            if (a === void 0) return new wy(e);
            const l = a.getBubbleData(e.bubbleId), c = e.codeBlocks?.find((u)=>!u.unregistered && u.uri ? u.codeblockId === n.codeblockId && VCo(u.uri, n.uri) : !1);
            return !l || !c ? new wy(e) : l.tool === Ct.EDIT_FILE ? this.replacedBubbleForEdit(l, c, new wy(e)) : new wy(e);
        } catch (o) {
            var r = o, s = !0;
        } finally{
            DVe(i, r, s);
        }
    }
    processConversationForFastEdit(t, e, n) {
        var i = [];
        try {
            const o = MVe(i, hA("ComposerUtilsService.processConversationForFastEdit")), a = e.findIndex((d)=>d.type === bs.AI && d.codeBlocks?.some((h)=>!h.unregistered && h.uri ? h.codeblockId === n.codeblockId && VCo(h.uri, n.uri) : !1)), c = e.slice(0, a + 1).map((d, h)=>{
                if (d.type === bs.AI && h !== a) {
                    const p = d.text.replace(/```[\s\S]*?```/g, "[old_code]");
                    return new wy({
                        ...d,
                        text: p
                    });
                }
                return new wy(d);
            }), u = e.at(a);
            if (u.capabilityType === mo.TOOL_FORMER) {
                const d = this.replacedBubbleForFastEdit(t, u, n);
                c[c.length - 1] = d;
            }
            return c;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            DVe(i, r, s);
        }
    }
    async readFileContents(t, e) {
        var n = [];
        try {
            const s = MVe(n, hA("ComposerUtilsService.readFileContents")), o = this._composerDataService.getHandleIfLoaded(e), a = o ? this._composerDataService.getComposerData(o) : void 0;
            return (await this._composerFileService.readFile({
                uri: t,
                composerData: a
            })).value.toString();
        } catch (s) {
            var i = s, r = !0;
        } finally{
            DVe(n, i, r);
        }
    }
    async getCodeBlockDataAfterRemovingBubbles(t, e) {
        const n = this._composerDataService.getComposerData(t);
        if (!n) throw new Error("[composer] Cannot get bubble for unloaded composer");
        const i = await Lzt(this._composerDataService, t, e), r = {};
        for (const o of i.bodies.values())o.codeBlocks?.filter((a)=>!a.unregistered && a.uri !== void 0).forEach((a)=>{
            const l = a.uri.toString();
            r[l] || (r[l] = new Set), r[l].add(a.codeblockId);
        });
        const s = {
            ...n.codeBlockData
        };
        for (const [o, a] of Object.entries(r))if (s[o]) {
            const l = {};
            for (const [c, u] of Object.entries(s[o]))a.has(c) || (l[c] = u);
            Object.keys(l).length === 0 ? delete s[o] : s[o] = l;
        }
        return s;
    }
    async removeMessagesAfterBubble(t, e) {
        const n = this._composerDataService.getComposerData(t);
        if (!n || e === void 0) return;
        const i = n.fullConversationHeadersOnly, r = i.findIndex((p)=>p.bubbleId === e);
        if (r === -1) return;
        const s = ahk(i, e), o = await this.getCodeBlockDataAfterRemovingBubbles(t, s), a = Wil(i.slice(r), Ct.CREATE_PLAN), l = await Lzt(this._composerDataService, t, a), u = ((p)=>{
            const g = new Map;
            for (const f of p){
                const _ = f.toolFormerData;
                if (_?.tool !== Ct.CREATE_PLAN) continue;
                const b = _.additionalData?.planUri;
                if (!b) continue;
                const y = Hae(b);
                g.set(y.fsPath, y);
            }
            return Array.from(g.values());
        })([
            ...l.bodies.values()
        ]);
        await this._composerDataService.deleteComposerBubbles(t, s), u.length > 0 && this._instantiationService.invokeFunction((g)=>g.get(JVg)).dereferencePlansCreatedByDeletedBubbles(t.composerId, u).catch((g)=>{
            this._composerLogService.warn("[composer] Failed to dereference deleted plan entries:", g);
        });
        let d = n.plan;
        if (n.plan?.bubbleId && s.includes(n.plan.bubbleId)) {
            const p = this._composerDataService.getToolFormer(t);
            if (p) {
                for(let g = r - 1; g >= 0; g--){
                    const f = i[g], _ = p.getBubbleData(f.bubbleId);
                    if (_?.tool === Ct.CREATE_PLAN && _.params) {
                        const b = _.params.steps && _.params.steps.length > 0;
                        d = {
                            content: _.params.plan || "",
                            bubbleId: f.bubbleId,
                            steps: _.params.steps,
                            overview: _.params.overview,
                            todos: _.params.todos?.map((y)=>({
                                    id: y.id,
                                    content: y.content,
                                    status: "pending",
                                    dependencies: y.dependencies || []
                                })),
                            isSpec: b
                        };
                        break;
                    }
                }
                d === n.plan && (d = void 0);
            }
        }
        const h = Object.keys(n.codeBlockData).filter((p)=>!(p in o));
        this._composerDataService.updateComposerDataSetStore(t, (p)=>{
            p("editingBubbleId", void 0), p("currentBubbleId", void 0), p("latestCheckpointId", void 0), d !== n.plan && (p("plan", d), p("isSpec", d?.isSpec ?? !1));
            for (const [g, f] of Object.entries(n.originalFileStates))s.includes(f.firstEditBubbleId) && p("originalFileStates", g, void 0);
            for (const g of h)p("codeBlockData", g, void 0);
            for (const g of Object.keys(o))p("codeBlockData", g, o[g]);
        });
        for (const p of h)try {
            const g = rt.parse(p);
            this._composerEventService.fireToRemoveDiffs({
                uri: g
            });
        } catch (g) {
            this._composerLogService.warn(`[composer] Failed to remove diffs for URI ${p}:`, g);
        }
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
            const { modified: r } = e[i];
            n.push(...r), i++;
        }
        return n;
    }
    async runCapabilitiesForProcess(t, e, n) {
        var i = [];
        try {
            const o = MVe(i, O3(n.parentSpanCtx, `runCapabilitiesForProcess.${e}`)), a = this._composerDataService.getComposerData(t);
            if (!a) return;
            const l = WL1(a.capabilities, e, n);
            if (e === "start-submit-chat") {
                const c = l.filter((u)=>!!u.onStartSubmitChatReturnShouldStop).sort((u, d)=>u.priority - d.priority);
                for (const u of c)if (u.onStartSubmitChatReturnShouldStop) {
                    this._asyncOperationRegistry.updateMetadata(n.composerId, "capability_start_submit_chat", {
                        capabilityName: u.name
                    });
                    try {
                        const d = await this.measureCapabilityExecution({
                            process: "start-submit-chat",
                            capabilityName: u.name,
                            parentSpanCtx: o,
                            capabilityFn: ()=>u.onStartSubmitChatReturnShouldStop.bind(u)(n)
                        });
                        if (typeof d == "object" && d.shouldStop) return d;
                    } catch (d) {
                        this._composerLogService.error(`[composer] Error running capability '${u.name}' during start-submit-chat`, d);
                    }
                }
            }
            if (e === "before-submit-chat") {
                const c = l.filter((u)=>!!u.onBeforeSubmitChat).sort((u, d)=>u.priority - d.priority);
                for (const u of c)if (u.onBeforeSubmitChat) {
                    this._asyncOperationRegistry.updateMetadata(n.composerId, "capability_before_submit_chat", {
                        capabilityName: u.name
                    });
                    try {
                        if (await this.measureCapabilityExecution({
                            process: "before-submit-chat",
                            capabilityName: u.name,
                            parentSpanCtx: o,
                            capabilityFn: ()=>u.onBeforeSubmitChat.bind(u)(n)
                        }) === !0) return !0;
                    } catch (d) {
                        if (this._composerLogService.error(`[composer] Error running capability '${u.name}' during before-submit-chat`, d), d instanceof Us) throw d;
                    }
                }
                return !1;
            }
            await Promise.all(l.map(async (c)=>{
                try {
                    switch(e){
                        case "chat-stream-finished":
                            {
                                c.onChatStreamFinished && await this.measureCapabilityExecution({
                                    process: "chat-stream-finished",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onChatStreamFinished.bind(c)(n)
                                });
                                return;
                            }
                        case "after-apply":
                            {
                                c.onAfterApply && await this.measureCapabilityExecution({
                                    process: "after-apply",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onAfterApply.bind(c)(n)
                                });
                                return;
                            }
                        case "before-apply":
                            {
                                c.onBeforeApply && await this.measureCapabilityExecution({
                                    process: "before-apply",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onBeforeApply.bind(c)(n)
                                });
                                return;
                            }
                        case "accept-all-edits":
                            {
                                c.onAcceptAllEdits && await this.measureCapabilityExecution({
                                    process: "accept-all-edits",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onAcceptAllEdits.bind(c)(n)
                                });
                                return;
                            }
                        case "add-pending-action":
                            {
                                c.onAddPendingAction && await this.measureCapabilityExecution({
                                    process: "add-pending-action",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onAddPendingAction.bind(c)(n)
                                });
                                return;
                            }
                        case "composer-done":
                            {
                                c.onComposerDone && await this.measureCapabilityExecution({
                                    process: "composer-done",
                                    capabilityName: c.name,
                                    parentSpanCtx: o,
                                    capabilityFn: ()=>c.onComposerDone.bind(c)(n)
                                });
                                return;
                            }
                        default:
                            return;
                    }
                } catch (u) {
                    this._composerLogService.error(`[composer] Error running capability '${c.name}' during ${e}`, u);
                    return;
                }
            }));
        } catch (o) {
            var r = o, s = !0;
        } finally{
            DVe(i, r, s);
        }
    }
    async selectNextComposer(t) {
        var e = [];
        try {
            const r = MVe(e, hA("ComposerUtilsService.selectNextComposer")), s = this._composerDataService.selectedComposerId;
            if (this._composerDataService.selectedComposerIds.length > 1) {
                const a = this._composerViewsService.getOrderedSelectedComposerIds(), l = a.findIndex((h)=>h === s);
                if (l === -1 || a.length <= 1) return;
                const c = a.length, u = (l + (t ? -1 : 1) + c) % c, d = a[u];
                d && await this._commandService.executeCommand(L0n, d);
            } else {
                const a = CBp([
                    ...this._composerDataService.allComposersData.allComposers
                ]), l = a.findIndex((h)=>h.composerId === s);
                if (l === -1 || a.length <= 1) return;
                const c = a.length, u = (l + (t ? -1 : 1) + c) % c, d = a[u].composerId;
                if (d) {
                    const h = this._composerDataService.getHandleIfLoaded(s);
                    if (h ? this._composerDataService.isComposerRunning(h) : !1) {
                        const g = await this.decideRunningComposerTabAction("switch", d);
                        if (g === "cancel") return;
                        if (g === "new-tab") {
                            await this._commandService.executeCommand(L0n, d, {
                                openInNewTab: !0
                            });
                            return;
                        }
                    }
                    await this._commandService.executeCommand(L0n, d);
                }
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            DVe(e, n, i);
        }
    }
    async selectPrevComposer() {
        await this.selectNextComposer(!0);
    }
    async computeDiff(t, e, n) {
        if (t === e) return [];
        const i = await this.computeLinesDiffWithSemaphore({
            first: t,
            second: e,
            options: {
                ignoreTrimWhitespace: !1,
                computeMoves: !1,
                maxComputationTimeMs: 1e3,
                ...n ?? {}
            }
        });
        return i.hitTimeout ? [] : i.changes.map((r)=>({
                original: r.original,
                modified: ww(e).slice(r.modified.startLineNumber - 1, r.modified.endLineNumberExclusive - 1)
            }));
    }
    async computeDiffAndFormat(t, e, n) {
        if (t === e) return new o9t({
            chunks: [],
            hitTimeout: !1
        });
        const i = await this.computeLinesDiffWithSemaphore({
            first: t,
            second: e,
            options: {
                ignoreTrimWhitespace: !1,
                computeMoves: !1,
                maxComputationTimeMs: this._experimentService.getDynamicConfigParam("tool_limits_config", "composerDiffMaxComputationTimeMs", {
                    disableExposureLog: !1
                }),
                ...n ?? {}
            }
        });
        if (i.hitTimeout) return new o9t({
            chunks: [],
            hitTimeout: !0
        });
        const a = i.changes.map((l)=>{
            const c = ww(t).slice(l.original.startLineNumber - 1, l.original.endLineNumberExclusive - 1).map((d)=>"- " + d), u = ww(e).slice(l.modified.startLineNumber - 1, l.modified.endLineNumberExclusive - 1).map((d)=>"+ " + d);
            return new $mn({
                diffString: [
                    ...c,
                    ...u
                ].join(`
`),
                oldStart: l.original.startLineNumber,
                newStart: l.modified.startLineNumber,
                oldLines: l.original.endLineNumberExclusive - l.original.startLineNumber,
                newLines: l.modified.endLineNumberExclusive - l.modified.startLineNumber,
                linesAdded: l.modified.endLineNumberExclusive - l.modified.startLineNumber,
                linesRemoved: l.original.endLineNumberExclusive - l.original.startLineNumber
            });
        }).reduce((l, c)=>{
            if (l.length === 0) return [
                c
            ];
            const u = l[l.length - 1];
            return this.shouldMergeChunks(u, c) ? l[l.length - 1] = this.mergeChunks(u, c, t, e) : l.push(c), l;
        }, []).map((l)=>this.growChunk(l, t, e));
        return new o9t({
            chunks: a,
            hitTimeout: !1
        });
    }
    async computeLinesDiffWithSemaphore({ first: t, second: e, options: n }) {
        const i = new Promise((o)=>{
            setTimeout(()=>{
                o(new OQ([], [], !0));
            }, n.maxComputationTimeMs);
        }), r = this._composerDiffSemaphore.withSemaphore(async ()=>{
            const o = await Gmr(Array.isArray(t) ? t.join(`
`) : t), a = await Gmr(Array.isArray(e) ? e.join(`
`) : e), l = JSON.stringify({
                firstSha1: o,
                secondSha1: a
            }), c = this._composerDiffCache.get(l);
            if (c) return c;
            const u = await this._editorWorkerService.computeLinesDiff(Array.isArray(t) ? t : ww(t), Array.isArray(e) ? e : ww(e), n);
            return this._composerDiffCache.set(l, u), u;
        }), s = await Promise.race([
            r,
            i
        ]);
        return s.hitTimeout && this._metricsService.increment({
            stat: "composer.computeLinesDiff.timedOut"
        }), s;
    }
    shouldMergeChunks(t, e) {
        return e.newStart - (t.newStart + t.newLines) <= ZVg;
    }
    mergeChunks(t, e, n, i) {
        const r = ww(i).slice(t.newStart + t.newLines - 1, e.newStart - 1).map((s)=>"  " + s);
        return new $mn({
            diffString: t.diffString + (r.length > 0 ? `
` + r.join(`
`) + `
` : `
`) + e.diffString,
            oldStart: t.oldStart,
            newStart: t.newStart,
            oldLines: e.oldStart + e.oldLines - t.oldStart,
            newLines: e.newStart + e.newLines - t.newStart,
            linesRemoved: t.linesRemoved + e.linesRemoved,
            linesAdded: t.linesAdded + e.linesAdded
        });
    }
    growChunk(t, e, n) {
        const i = ww(e), r = ww(n), s = Math.max(1, t.newStart - GRi), o = Math.min(r.length + 1, t.newStart + t.newLines + GRi), a = Math.max(1, t.oldStart - GRi), l = Math.min(i.length + 1, t.oldStart + t.oldLines + GRi), c = r.slice(s - 1, t.newStart - 1).map((h)=>"  " + h), u = r.slice(t.newStart + t.newLines - 1, o - 1).map((h)=>"  " + h), d = t.diffString.split(`
`);
        return new $mn({
            diffString: [
                ...c,
                ...d,
                ...u
            ].join(`
`),
            oldStart: a,
            newStart: s,
            oldLines: l - a,
            newLines: o - s,
            linesAdded: t.linesAdded,
            linesRemoved: t.linesRemoved
        });
    }
    codeChunkHasFullFileIntent(t) {
        return t.intent !== void 0 && [
            rz.COMPOSER_FILE,
            rz.MENTIONED_FILE
        ].includes(t.intent);
    }
    shouldShowCancel(t) {
        try {
            const e = this._composerDataService.getComposerData(t);
            return e ? this._composerDataService.getPendingUserDecisionGroup(t).length > 0 || e.status === "generating" || this._composerCodeBlockService.getCodeBlocksOfStatuses(t, "applying").filter((r)=>!r.isNotApplied).length > 0 : !1;
        } catch (e) {
            return this._composerLogService.error("[composer] Error in shouldShowCancel", e), !1;
        }
    }
    getHasPendingQuestionnaireAwaitingInput(t) {
        const e = this._composerDataService.getComposerData(t);
        if (!e) return !1;
        const n = e.fullConversationHeadersOnly, i = n.length, r = F6e(n);
        let s = !1, o;
        for(let a = i - 1; a >= 0; a--){
            const l = r[a];
            if (!l) continue;
            if (l.type === bs.HUMAN) break;
            const c = ks(()=>this._composerDataService.getComposerBubble(t, l.bubbleId));
            if (!c) continue;
            const u = F6e(c);
            if (!(u.capabilityType === mo.TOOL_FORMER && u.toolFormerData?.tool === Ct.ASK_QUESTION)) continue;
            o === void 0 && (o = l.bubbleId);
            const h = u.toolFormerData?.additionalData, p = h && "status" in h ? h.status : "pending";
            if (p === "pending" || p === "loading") {
                s = !0, o = l.bubbleId;
                break;
            }
        }
        if (o !== void 0) {
            const l = this._composerDataService.getComposerBubble(t, o)?.toolFormerData?.additionalData;
            l && l.status;
        }
        return s;
    }
    clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages(t) {
        if (!this._composerDataService.getComposerData(t)) return;
        const n = this._composerDataService.getLoadedConversation(t);
        for(let i = n.length - 1; i >= 0; i--){
            const r = n[i];
            if (r.type === bs.AI) {
                if (r.errorDetails || r.serviceStatusUpdate) {
                    this._composerDataService.updateComposerBubbleSetStore(t, r.bubbleId, (s)=>{
                        s("errorDetails", void 0), s("serviceStatusUpdate", void 0);
                    });
                    break;
                }
            } else break;
        }
    }
    resumeFromToolFormerBubble(t, e, n) {
        const i = this._composerDataService.getComposerData(t);
        if (!i) throw new Error("[composer] Cannot get bubble for unloaded composer");
        const r = this._composerDataService.getLoadedConversation(t), s = r.findIndex((c)=>c.bubbleId === e);
        if (s === -1) throw new Error(`[composer] No message found with bubble ID ${e}`);
        const o = this._composerDataService.getComposerBubble(t, e);
        if (!o || o.type !== bs.AI) throw new Error(`[composer] Message with bubble ID ${e} is not an AI message`);
        const a = {
            ...J_(),
            text: "",
            context: i.context,
            skipRendering: !0
        };
        if (n) o.afterCheckpointId && (a.checkpointId = o.afterCheckpointId);
        else if (!n) o.checkpointId && (a.checkpointId = o.checkpointId);
        else for(let c = s - 1; c >= 0; c--)if (r[c].checkpointId) {
            r[c].checkpointId && (a.checkpointId = r[c].checkpointId);
            break;
        }
        const l = s + (n ? 1 : 0);
        return this._composerDataService.insertComposerBubblesAtIndex(t, [
            a
        ], l), a.bubbleId;
    }
    clearText(t) {
        const e = this._composerDataService.getComposerData(t);
        e && (this._composerDataService.updateComposerData(t, {
            text: "",
            richText: ""
        }), this._composerEventService.fireShouldForceText({
            composerId: e.composerId
        }));
    }
    getCurrentFile() {
        const t = this._aiFileInfoService.getLastActiveFileEditor();
        if (!t) return;
        let e = Wm.getOriginalUri(t.input);
        if (!(!e && (NVo(t.input) && (e = t.input.modified.resource), !e))) {
            if (e.scheme === Ot.git) try {
                const n = JSON.parse(e.query);
                if (n && n.path) return {
                    uri: rt.file(n.path),
                    isCurrentFile: !0
                };
            } catch (n) {
                this._composerLogService.error("Failed to parse git URI", n);
            }
            if (this.isCompatibleScheme(e.scheme)) return {
                uri: e,
                isCurrentFile: !0
            };
        }
    }
    isCompatibleScheme(t) {
        return this._composerDataService.isCompatibleScheme(t);
    }
    isComposerEmpty(t) {
        let e;
        try {
            e = this._composerDataService.getComposerData(t);
        } catch (i) {
            return this._composerLogService.warn("tried to check if composer is empty but missing composer", i), !1;
        }
        if (!e || e.isSpec || e.isProject || e.createdFromBackgroundAgent?.bcId) return !1;
        const n = dhe(e.activeCanvas) !== void 0;
        return e.fullConversationHeadersOnly.length === 0 && e.text.trim() === "" && !n;
    }
    async abortGenerationUUID(t) {
        const e = this._aiService.streamingAbortControllers.get(t);
        e && (e.abort(), this._aiService.streamingAbortControllers.delete(t));
    }
    getBestOfNGroupId(t) {
        const e = this._composerDataService.getHandleIfLoaded(t), n = e ? this._composerDataService.getComposerData(e) : void 0;
        return n && n.isBestOfNSubcomposer && n.subagentInfo?.parentComposerId ? n.subagentInfo.parentComposerId : t;
    }
    unformatComposerDiff(t) {
        if (!t.chunks || t.chunks.length === 0 || t.hitTimeout) return [];
        const e = [];
        for (const n of t.chunks){
            const i = n.diffString.split(`
`);
            let r = n.oldStart, s = [], o = [], a = null;
            const l = ()=>{
                if (a !== null) {
                    const c = new wd(a - 1, r - 1);
                    e.push({
                        original: c,
                        modified: [
                            ...o
                        ]
                    }), s = [], o = [], a = null;
                }
            };
            for (const c of i)c.startsWith("- ") ? (a === null && (a = r), s.push(c.substring(2)), r += 1) : c.startsWith("+ ") ? (a === null && (a = r), o.push(c.substring(2))) : c.startsWith("  ") ? (l(), r += 1) : l();
            l();
        }
        return e;
    }
    async measureCapabilityExecution(t) {
        const e = performance.now();
        let n;
        const i = O3(t.parentSpanCtx, `composerCapability.${t.process}.${t.capabilityName}`);
        try {
            return n = await t.capabilityFn(), n;
        } catch (r) {
            throw i?.setError(r instanceof Error ? r : String(r)), r;
        } finally{
            const s = performance.now() - e;
            i?.end(), this._metricsService.distribution({
                stat: "composer.runCapabilities",
                value: s,
                tags: {
                    capability: t.capabilityName,
                    process: t.process
                }
            });
        }
    }
    async getDiffsFromSubagent(t, e) {
        const n = [], i = this._composerDataService.getHandleIfLoaded(e), r = i ? this._composerDataService.getComposerData(i) : void 0;
        if (!r) return n;
        const s = this._composerDataService.getHandleIfLoaded(t);
        if (!(s ? this._composerDataService.getComposerData(s) : void 0) || !s) return n;
        for (const [a] of Object.entries(r.codeBlockData))try {
            const l = rt.parse(a), c = this._composerDataService.getComposerData(s);
            if (!await this._composerFileService.exists({
                uri: l,
                composerData: c
            }) || l.path.endsWith(".ipynb")) continue;
            const d = this._composerDataService.getHandleIfLoaded(e);
            if (!d) continue;
            const h = this._composerCodeBlockService.getLastAppliedCodeBlock(d, l);
            if (!h) continue;
            const p = await this._composerCodeBlockService.getCodeBlockV0ModelLines(d, l), g = await this._composerCodeBlockService.getCodeBlockNewModelLines(d, l, h.codeblockId);
            if (!p || !g) continue;
            const f = p.join(`
`), _ = g.join(`
`);
            if (f === _) continue;
            const b = await this.computeDiffAndFormat(f, _), y = this._workspaceContextService.asRelativePath(l);
            n.push({
                filePath: y,
                diff: b,
                uri: l
            });
        } catch (l) {
            this._composerLogService.error("[ComposerUtilsService] Failed computing diff for", a, l);
            continue;
        }
        return n;
    }
    _dropOrphanedBubbleHeaders(t, e, n, i, r) {
        const s = i.filter((l)=>r?.[l] === void 0);
        if (s.length === 0) return n;
        const o = new Set(s), a = n.filter((l)=>!o.has(l.bubbleId));
        if (a.length === 0) throw new Error(`[composer] Failed to clone stored messages: ${s.join(", ")}`);
        return t.fullConversationHeadersOnly = t.fullConversationHeadersOnly.filter((l)=>!o.has(l.bubbleId)), this._metricsService.increment({
            stat: "composer.deepCloneComposer.orphanedHeadersDropped",
            value: s.length
        }), BNk(e, s, n.length), a;
    }
    async deepCloneComposer(t, e, n) {
        const i = performance.now();
        e = e ?? Ai();
        const r = n?.cloneState ?? {
            composerIdRemap: new Map
        }, s = new WeakMap, o = (K)=>{
            if (K === null || typeof K != "object" || K instanceof rt) return K;
            if (K instanceof Dm) return K.clone();
            if (K instanceof Uint8Array) return new Uint8Array(K);
            if (s.has(K)) return s.get(K);
            if (Array.isArray(K)) {
                const Y = [];
                s.set(K, Y);
                for (const J of K)Y.push(o(J));
                return Y;
            }
            const V = {};
            s.set(K, V);
            for (const [Y, J] of Object.entries(K))V[Y] = o(J);
            return V;
        }, a = (K)=>o(F6e(K)), l = (K)=>K === "running" || K === "loading" ? "cancelled" : K, c = F6e(t);
        r.composerIdRemap.set(c.composerId, e);
        const { capabilities: u, conversationActionManager: d, agentSessionId: h, ...p } = c, g = c.composerId, f = c.conversationMap, _ = (K)=>{
            const V = K.toolFormerData;
            if (!V || V.tool !== Ct.TASK_V2) return K;
            const Y = V.additionalData, J = Y?.composerData;
            if (!J) return K;
            const Q = F6e(J), { capabilities: te, conversationActionManager: ee, agentSessionId: re, ...ie } = Q, oe = {
                ...ie,
                capabilities: []
            }, se = l(Y?.status ?? "pending");
            return {
                ...K,
                toolFormerData: {
                    ...V,
                    additionalData: {
                        ...Y ?? {
                            status: se
                        },
                        status: se,
                        composerData: oe
                    }
                }
            };
        }, b = {};
        if (f) for (const [K, V] of Object.entries(f)){
            const Y = V.toolFormerData;
            if (Y && Y.tool === Ct.TASK_V2) {
                const J = Y.additionalData;
                if (J?.composerData) {
                    const te = l(J?.status ?? "pending");
                    b[K] = {
                        ...V,
                        toolFormerData: {
                            ...Y,
                            additionalData: {
                                ...J ?? {
                                    status: te
                                },
                                status: te,
                                composerData: void 0
                            }
                        }
                    };
                    continue;
                }
            }
            b[K] = V;
        }
        const { conversationMap: y, ...S } = p, k = {
            ...B4(c.modelConfig, e),
            ...a(S),
            conversationMap: {}
        };
        k.composerId = e;
        const C = (K)=>Yps(K) ?? new nf;
        k.conversationState = C(k.conversationState), k.status === "generating" && (k.status = "aborted");
        const T = c.fullConversationHeadersOnly ?? [], I = fng(T);
        k.conversationState.goalState = void 0;
        const A = {}, P = new Ebe(QVg);
        for (const [K, V] of Object.entries(b)){
            const Y = a(_(V));
            Y.bubbleId = K, Y.conversationState && (Y.conversationState = C(Y.conversationState), Y.conversationState.goalState = void 0), A[K] = Y, await P.yieldIfExhausted();
        }
        k.conversationMap = A;
        const M = new Set([
            k.conversationState
        ]);
        for (const K of Object.values(k.conversationMap))K.type === bs.HUMAN && M.add(K.conversationState);
        const O = await this._composerMessageStorageService.copyMessages(g, e, I), N = this._dropOrphanedBubbleHeaders(k, g, T, O.missing, f), U = new Set(O.copied);
        await Promise.all(Object.values(k.conversationMap).filter((K)=>!U.has(K.bubbleId)).map((K)=>this._composerMessageStorageService.storeMessage(e, K))), await Promise.all([
            this._composerCheckpointStorageService.copyComposerCheckpoints({
                srcComposerId: g,
                destComposerId: e
            }),
            this._composerCodeBlockDiffStorageService.copyComposerDiffs({
                srcComposerId: g,
                destComposerId: e
            })
        ]);
        const j = k.codeBlockData;
        for (const K of Object.keys(j))for (const V of Object.values(j[K]))V.applyGenerationUUID = void 0, V.latestApplyGenerationUUID = void 0, V.status === "generating" && (V.status = "completed"), V.status === "applying" && (V.status = "cancelled");
        {
            const K = [], V = new Set(Wil(N, Ct.TASK_V2));
            if (f) for (const [J, Q] of Object.entries(f))Q.toolFormerData?.tool === Ct.TASK_V2 && V.add(J);
            const Y = k.conversationMap;
            for (const J of V){
                const Q = async ()=>{
                    const te = Y[J];
                    return te || (await this._composerMessageStorageService.retrieveMessagesBatch(e, [
                        J
                    ])).get(J);
                };
                K.push((async ()=>{
                    let te;
                    try {
                        let ee = f?.[J];
                        ee || (ee = (await this._composerMessageStorageService.retrieveMessagesBatch(g, [
                            J
                        ])).get(J));
                        const re = ee?.toolFormerData;
                        if (!re || re.tool !== Ct.TASK_V2) return;
                        const ie = re.additionalData;
                        if (te = await Q(), !te?.toolFormerData || te.toolFormerData.tool !== Ct.TASK_V2) return;
                        let oe = ie?.composerData;
                        if (!oe && ie?.subagentComposerId) {
                            const ve = await this._composerDataService.getComposerHandleById(ie.subagentComposerId);
                            oe = ve ? this._composerDataService.getComposerData(ve) : void 0;
                        }
                        if (!oe) return;
                        const se = `${rVt}${Ai()}`, le = await this.deepCloneComposer(oe, se, {
                            skipCapabilities: !0,
                            cloneState: r
                        }), ce = [], ae = oe.capabilities;
                        if (Array.isArray(ae)) {
                            const ve = [
                                ...ae
                            ];
                            for (const fe of ve){
                                if (fe instanceof sie) {
                                    const Te = fe.toJSON();
                                    ce.push({
                                        type: Te.type,
                                        data: a(Te.data)
                                    });
                                    continue;
                                }
                                if (fe && typeof fe == "object") {
                                    const Te = fe, _e = Te.type, Ce = Te.data;
                                    typeof _e == "number" && Ce !== void 0 && ce.push({
                                        type: _e,
                                        data: a(Ce)
                                    });
                                }
                            }
                        }
                        le.capabilities = ce, await this._composerDataService.appendSubComposer(le);
                        const de = te.toolFormerData;
                        if (!de || de.tool !== Ct.TASK_V2) return;
                        const he = de.additionalData, ge = l(he?.status ?? "pending");
                        de.additionalData = {
                            ...he ?? {
                                status: ge
                            },
                            status: ge,
                            composerData: le,
                            subagentComposerId: se
                        };
                        const pe = k.subagentComposerIds ??= [];
                        qNk(pe, se), await this._composerMessageStorageService.storeMessage(e, te);
                    } catch (ee) {
                        this._composerLogService.error(`[composer] Failed to clone TASK_V2 subagent ${J}:`, ee);
                        const re = "cancelled", ie = te ?? await Q();
                        if (ie?.toolFormerData && ie.toolFormerData.tool === Ct.TASK_V2) {
                            const oe = ie.toolFormerData.additionalData;
                            ie.toolFormerData.additionalData = {
                                ...oe ?? {
                                    status: re
                                },
                                status: re,
                                composerData: void 0,
                                subagentComposerId: void 0
                            }, await this._composerMessageStorageService.storeMessage(e, ie);
                        }
                    }
                })());
            }
            await Promise.all(K);
        }
        for (const K of M)XVg(K, r.composerIdRemap);
        const $ = Object.values(k.conversationMap).filter((K)=>K.type === bs.HUMAN).map((K)=>this._composerMessageStorageService.storeMessage(e, K)), H = N.filter((K)=>K.type === bs.HUMAN && k.conversationMap[K.bubbleId] === void 0).map((K)=>K.bubbleId);
        if (H.length > 0) {
            const K = await this._composerMessageStorageService.retrieveMessagesBatch(e, H);
            for (const V of K.values())VNk(V.conversationState, r.composerIdRemap) && (V.conversationState && (V.conversationState.goalState = void 0), XVg(V.conversationState, r.composerIdRemap), $.push(this._composerMessageStorageService.storeMessage(e, V)));
        }
        await Promise.all($);
        const G = [], q = [
            ...t.subComposerIds ?? []
        ];
        if (q.length > 0) for (const K of q)try {
            const V = await this._composerDataService.getComposerHandleById(K);
            if (V) {
                const Y = Ai();
                G.push(Y), r.composerIdRemap.set(K, Y);
                const J = await this.deepCloneComposer(V.data, Y, {
                    cloneState: r
                });
                await this._composerDataService.appendSubComposer(J);
            }
        } catch (V) {
            this._composerLogService.error(`[composer] Failed to clone subComposer ${K}:`, V);
        }
        if (k.subComposerIds = G, k.subagentComposerIds = GNk(k.subagentComposerIds, r.composerIdRemap), k.selectedSubComposerId && (k.selectedSubComposerId = r.composerIdRemap.get(k.selectedSubComposerId) ?? k.selectedSubComposerId), k.subagentInfo?.parentComposerId && (k.subagentInfo.parentComposerId = r.composerIdRemap.get(k.subagentInfo.parentComposerId) ?? k.subagentInfo.parentComposerId), zNk(k.codeBlockData, r.composerIdRemap), !n?.skipCapabilities) {
            const K = t.capabilities.map((V)=>({
                    type: V.type,
                    data: a(V.toJSON().data)
                }));
            k.capabilities = kbe(this._instantiationService, e, {
                savedCapabilityData: K
            });
        }
        if (!vl.localMode && this._experimentService.checkFeatureGate("clone_blob_upload", {
            disableExposureLog: !1
        }) && this._cursorAuthenticationService.reactivePrivacyMode() !== !0) {
            let K = "";
            const V = t.fullConversationHeadersOnly ?? [], Y = t.conversationMap;
            for(let J = V.length - 1; J >= 0; J--){
                const Q = Y[V[J].bubbleId];
                if (Q?.requestId) {
                    K = Q.requestId;
                    break;
                }
            }
            K || (K = t.latestChatGenerationUUID ?? Ai()), this._blobUploadService.notifyClone({
                conversationId: k.composerId,
                sourceConversationId: t.composerId,
                sourceRequestId: K
            });
        }
        return this._metricsService.distribution({
            stat: "composer.deepCloneComposer",
            value: performance.now() - i,
            tags: {
                messageCount: String(I.length)
            }
        }), k;
    }
    async extractSummaryFromSubagent(t) {
        const e = this._composerDataService.getHandleIfLoaded(t), n = e ? this._composerDataService.getLoadedConversation(e) : [];
        if (!n || n.length === 0) throw new Hqr({
            clientVisibleErrorMessage: "Failed to get subagent conversation",
            modelVisibleErrorMessage: "Tool call failed",
            actualErrorMessage: "No conversation found for subagent composer"
        });
        const i = n[n.length - 1];
        return i.type === bs.HUMAN ? "" : i.text || "Task completed";
    }
    shouldSuggestPlanMode(t) {
        if (!this._composerModesService.getAllModes().find((l)=>l.id === "plan") || !t || t.trim().length === 0) return !1;
        const i = [
            "plan",
            "planning",
            "refactor",
            "migrate",
            "restructure",
            "design",
            "architect",
            "spec",
            "specify",
            "outline",
            "draft",
            "blueprint",
            "proposal",
            "roadmap",
            "strategy",
            "approach",
            "steps",
            "checklist",
            "timeline",
            "milestones",
            "phased",
            "staged",
            "rollout",
            "implementation",
            "execution",
            "workflow",
            "scope",
            "estimate",
            "breakdown",
            "roadmap",
            "todo",
            "acceptance criteria",
            "definition of done",
            "\u8BA1\u5212",
            "\u91CD\u6784",
            "\u8FC1\u79FB",
            "\u91CD\u7EC4",
            "\u8BBE\u8BA1",
            "\u65B9\u6848",
            "\u8DEF\u7EBF\u56FE",
            "\u6B65\u9AA4",
            "\u8349\u6848",
            "\u84DD\u56FE",
            "\u7B56\u7565",
            "\u5DE5\u4F5C\u6D41",
            "\u65F6\u95F4\u8868",
            "\u9636\u6BB5\u6027",
            "\u6267\u884C",
            "\u8303\u56F4",
            "\u4F30\u7B97",
            "\u4EFB\u52A1\u5206\u89E3",
            "\u9A8C\u6536\u6807\u51C6",
            "\u5B8C\u6210\u5B9A\u4E49",
            "jihua",
            "chonggou",
            "qianyi",
            "chongzu",
            "sheji",
            "fangan",
            "luxiantu",
            "buzhou",
            "caoan",
            "lantu",
            "celue",
            "gongzuoliu",
            "shijianbiao",
            "jieduanxing",
            "zhixing",
            "fanwei",
            "gusun",
            "renwufenjie",
            "yanshoubiaozhun",
            "wanchengdingyi",
            "\u092F\u094B\u091C\u0928\u093E",
            "\u092A\u0941\u0928\u0930\u094D\u0917\u0920\u0928",
            "\u0938\u094D\u0925\u093E\u0928\u093E\u0902\u0924\u0930\u0923",
            "\u092A\u0941\u0928\u0930\u094D\u0938\u0902\u0930\u091A\u0928\u093E",
            "\u0930\u0942\u092A\u0930\u0947\u0916\u093E",
            "\u0921\u093F\u091C\u093C\u093E\u0907\u0928",
            "\u0916\u093E\u0915\u093E",
            "\u0915\u093E\u0930\u094D\u092F\u092F\u094B\u091C\u0928\u093E",
            "\u0938\u092E\u092F\u0930\u0947\u0916\u093E",
            "\u0930\u0923\u0928\u0940\u0924\u093F",
            "\u0915\u093E\u0930\u094D\u092F\u093E\u0928\u094D\u0935\u092F\u0928",
            "\u091A\u0930\u0923\u092C\u0926\u094D\u0927",
            "\u0928\u0915\u094D\u0936\u093E",
            "\u0905\u0928\u0941\u092E\u093E\u0928",
            "\u0935\u093F\u092D\u093E\u091C\u0928",
            "\u0938\u094D\u0935\u0940\u0915\u0943\u0924\u093F \u092E\u093E\u092A\u0926\u0902\u0921",
            "\u092A\u0942\u0930\u094D\u0923\u0924\u093E \u092A\u0930\u093F\u092D\u093E\u0937\u093E",
            "plan",
            "planificar",
            "planificaci\xF3n",
            "refactorizaci\xF3n",
            "migrar",
            "reestructurar",
            "dise\xF1ar",
            "especificar",
            "hoja de ruta",
            "borrador",
            "pasos",
            "estrategia",
            "implementaci\xF3n",
            "ejecuci\xF3n",
            "flujo de trabajo",
            "cronograma",
            "etapas",
            "estimaci\xF3n",
            "desglose",
            "criterios de aceptaci\xF3n",
            "definici\xF3n de hecho",
            "plan",
            "planifier",
            "refactoriser",
            "migrer",
            "restructurer",
            "concevoir",
            "sp\xE9cifier",
            "feuille de route",
            "brouillon",
            "\xE9tapes",
            "strat\xE9gie",
            "mise en \u0153uvre",
            "ex\xE9cution",
            "flux de travail",
            "calendrier",
            "phases",
            "estimation",
            "d\xE9composition",
            "crit\xE8res d'acceptation",
            "d\xE9finition de termin\xE9",
            "\u062E\u0637\u0629",
            "\u062A\u062E\u0637\u064A\u0637",
            "\u0625\u0639\u0627\u062F\u0629 \u0647\u064A\u0643\u0644\u0629",
            "\u062A\u0631\u062D\u064A\u0644",
            "\u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0645\u064A\u0645",
            "\u062A\u0635\u0645\u064A\u0645",
            "\u0645\u062E\u0637\u0637",
            "\u062E\u0627\u0631\u0637\u0629 \u0637\u0631\u064A\u0642",
            "\u0645\u0633\u0648\u062F\u0629",
            "\u062E\u0637\u0648\u0627\u062A",
            "\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629",
            "\u062A\u0646\u0641\u064A\u0630",
            "\u062C\u062F\u0648\u0644 \u0632\u0645\u0646\u064A",
            "\u0645\u0631\u0627\u062D\u0644",
            "\u062A\u0642\u062F\u064A\u0631",
            "\u0646\u0637\u0627\u0642",
            "\u0627\u0646\u0647\u064A\u0627\u0631 \u0627\u0644\u0645\u0647\u0627\u0645",
            "\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0642\u0628\u0648\u0644",
            "\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0643\u062A\u0645\u0627\u0644",
            "\u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE",
            "\u09AA\u09C1\u09A8\u09B0\u09CD\u0997\u09A0\u09A8",
            "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
            "\u09A8\u0995\u09B6\u09BE",
            "\u09B0\u09C2\u09AA\u09B0\u09C7\u0996\u09BE",
            "\u09B0\u09CB\u09A1\u09AE\u09CD\u09AF\u09BE\u09AA",
            "\u0996\u09B8\u09DC\u09BE",
            "\u09A7\u09BE\u09AA",
            "\u0995\u09CC\u09B6\u09B2",
            "\u09B8\u09AE\u09AF\u09BC\u09B8\u09C2\u099A\u09C0",
            "\u09AC\u09BE\u09B8\u09CD\u09A4\u09AC\u09BE\u09AF\u09BC\u09A8",
            "\u09AA\u09B0\u09CD\u09AF\u09BE\u09AF\u09BC",
            "\u0986\u09A8\u09C1\u09AE\u09BE\u09A8\u09BF\u0995",
            "\u09AA\u09B0\u09BF\u09B8\u09B0",
            "\u0995\u09BE\u099C\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AC\u09BE\u09B9",
            "\u0997\u09CD\u09B0\u09B9\u09A3\u09AF\u09CB\u0997\u09CD\u09AF\u09A4\u09BE\u09B0 \u09AE\u09BE\u09A8\u09A6\u09A3\u09CD\u09A1",
            "\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3\u09A4\u09BE\u09B0 \u09B8\u0982\u099C\u09CD\u099E\u09BE",
            "planejar",
            "planejamento",
            "refatorar",
            "migrar",
            "reestruturar",
            "desenhar",
            "especificar",
            "roteiro",
            "rascunho",
            "etapas",
            "estrat\xE9gia",
            "implementa\xE7\xE3o",
            "execu\xE7\xE3o",
            "fluxo de trabalho",
            "cronograma",
            "fases",
            "estimativa",
            "escopo",
            "decomposi\xE7\xE3o",
            "crit\xE9rios de aceita\xE7\xE3o",
            "defini\xE7\xE3o de conclu\xEDdo",
            "\u043F\u043B\u0430\u043D",
            "\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
            "\u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433",
            "\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F",
            "\u0440\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
            "\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",
            "\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F",
            "\u0434\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430",
            "\u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A",
            "\u0448\u0430\u0433\u0438",
            "\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F",
            "\u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
            "\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",
            "\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441",
            "\u0433\u0440\u0430\u0444\u0438\u043A",
            "\u044D\u0442\u0430\u043F\u044B",
            "\u043E\u0446\u0435\u043D\u043A\u0430",
            "\u043E\u0431\u044A\u0435\u043C",
            "\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447",
            "\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0438",
            "\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u0438",
            "\u8A08\u753B",
            "\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0",
            "\u79FB\u884C",
            "\u518D\u69CB\u7BC9",
            "\u8A2D\u8A08",
            "\u4ED5\u69D8",
            "\u4ED5\u69D8\u66F8",
            "\u30ED\u30FC\u30C9\u30DE\u30C3\u30D7",
            "\u8349\u6848",
            "\u6226\u7565",
            "\u5B9F\u88C5",
            "\u5B9F\u884C",
            "\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC",
            "\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",
            "\u6BB5\u968E\u7684",
            "\u898B\u7A4D\u3082\u308A",
            "\u7BC4\u56F2",
            "\u5206\u89E3",
            "\u53D7\u3051\u5165\u308C\u57FA\u6E96",
            "\u5B8C\u4E86\u306E\u5B9A\u7FA9",
            "keikaku",
            "rifakutaringu",
            "ikou",
            "saikouchiku",
            "sekkei",
            "shiyou",
            "shiyousho",
            "roodomaapu",
            "soun",
            "senryaku",
            "jissou",
            "jikkou",
            "waakufurou",
            "taimurain",
            "dankaiteki",
            "mitsumori",
            "han'i",
            "bunkai",
            "ukeire kijun",
            "kanryou no teigi"
        ], r = t.toLowerCase();
        return !!(i.some((l)=>r.includes(l)) || (t.match(/[.!?]+/g) || []).length >= 1 || t.trim().split(/\s+/).filter((l)=>l.length > 0).length >= 35);
    }
    shouldSuggestDebugMode(t) {
        if (!this._composerModesService.getAllModes().find((s)=>s.id === "debug") || !t || t.trim().length === 0) return !1;
        const i = [
            "debug",
            "bug",
            "debugging"
        ], r = t.toLowerCase();
        return !!i.some((s)=>r.includes(s));
    }
    shouldSuggestReviewCta(t) {
        return !1;
    }
    getPluginKeywordSuggestion(t) {
        const e = this._pluginsProviderService.pluginsCache.get();
        if (e?.allMarketplacePlugins) return HNk(t, e.allMarketplacePlugins, jNk(e.installedPlugins));
    }
}, Re([
    aa("ComposerUtilsService.getCodeBlockDataAfterRemovingBubbles")
], vye.prototype, "getCodeBlockDataAfterRemovingBubbles", null), Re([
    aa("ComposerUtilsService.removeMessagesAfterBubble")
], vye.prototype, "removeMessagesAfterBubble", null), Re([
    aa("ComposerUtilsService.selectPrevComposer")
], vye.prototype, "selectPrevComposer", null), Re([
    aa("ComposerUtilsService.computeDiff")
], vye.prototype, "computeDiff", null), Re([
    aa("ComposerUtilsService.computeDiffAndFormat")
], vye.prototype, "computeDiffAndFormat", null), Re([
    aa("ComposerUtilsService.growChunk")
], vye.prototype, "growChunk", null), Re([
    aa("ComposerUtilsService.shouldShowCancel")
], vye.prototype, "shouldShowCancel", null), Re([
    aa("ComposerUtilsService.resumeFromToolFormerBubble")
], vye.prototype, "resumeFromToolFormerBubble", null), Re([
    aa("ComposerUtilsService.getCurrentFile")
], vye.prototype, "getCurrentFile", null), Re([
    aa("ComposerUtilsService.unformatComposerDiff")
], vye.prototype, "unformatComposerDiff", null), vye = Re([
    i9(0, no),
    i9(1, dG),
    i9(2, yr),
    i9(3, FD),
    i9(4, sa),
    i9(5, HCe),
    i9(6, dn),
    i9(7, nr),
    i9(8, Z_),
    i9(9, Fb),
    i9(10, lEt),
    i9(11, $0t),
    i9(12, Uh),
    i9(13, AWt),
    i9(14, eot),
    i9(15, Kbe),
    i9(16, jl),
    i9(17, uk),
    i9(18, Cr),
    i9(19, ss),
    i9(20, N1l),
    i9(21, VI),
    i9(22, sat),
    i9(23, w1)
], vye), bn(YM, vye, 1);

}
