import { Fo, Ps, Rl, Se, ry, si, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { XMe, ub } from "./async.cursor.js";
import { TAe, aR, bn } from "./async.js";
import { Ar, Ji } from "./cancellation.js";
import { p2 } from "./canvas.js";
import { FKe } from "./canvasComposer.js";
import { mjv } from "./cgh.js";
import { $n, vi } from "./commands.js";
import { hSt, q$t } from "./composerCheckpointStorageService.js";
import { poe, zde } from "./composerCodeBlockService.js";
import { S8i, Wf, w8i } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { pq, rte } from "./composerFileService.js";
import { lb, n0 } from "./composerLogService.js";
import { H_e, YPe } from "./composerTextModelService.js";
import { Hv, rE } from "./composerViews.js";
import { Jm, ps } from "./composer_pb.js";
import { KAn, eg } from "./constants_18.js";
import { aCt } from "./conversationBodyAccess.js";
import { Pn } from "./extensions.js";
import { Fi } from "./files.js";
import { CN, Fee, zM } from "./inlineDiffService.js";
import { Ze, _t } from "./instantiation.js";
import { Vl, hA } from "./lineRange.js";
import { gt, li } from "./network.js";
import { BI, gF } from "./prettyDialog.js";
import { AO, Gzc, Tki, mn, qle, vn, zs } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Nl, bc } from "./resolverService.js";
import { Xh, im } from "./structuredLog.js";
import { Ag, Xp } from "./textfiles.js";
import { nt, ql } from "./tools_pb.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { KWt, PUe } from "./workspaceConnectionService.js";
var mtt, ZXi, cCt, YX;
export { YX, ZXi, cCt, mtt };
var __wakaru_lCt_initialized = false;
export function lCt() {
if (__wakaru_lCt_initialized) return;
__wakaru_lCt_initialized = true;
"use strict";
x(), Ze(), nl(), bn(), ub(), Ar(), si(), Se(), Ps(), Pn(), rE(), yv(), Wf(), gF(), Qt(), Nl(), Ha(), CN(), la(), ci(), eg(), vi(), rte(), q$t(), li(), zde(), aCt(), Jm(), ql(), YPe(), Fo(), hA(), Js(), Ag(), p2(), FKe(), Fi(), KWt(), im(), n0(), mtt = vn("composerCheckpointService"), ZXi = 8, cCt = class extends Error {
    constructor(e){
        super("Unable to create a restore point because the workspace files are unavailable.", {
            cause: e.cause
        }), this.name = "ComposerCheckpointCaptureError", this.fileOperationResult = e.fileOperationResult, this.phase = e.phase;
    }
}, YX = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b){
        super(), this._composerDataService = e, this._instantiationService = t, this._composerFileService = n, this._prettyDialogService = i, this._inlineDiffService = r, this._reactiveStorageService = s, this.composerTextModelService = o, this._analyticsService = a, this._workspaceContextService = c, this._commandService = l, this._composerCheckpointStorageService = u, this._composerCodeBlockService = h, this._textFileService = p, this._textModelService = g, this._workspaceConnectionService = f, this._structuredLogService = v, this._composerLogService = b, this._checkpointCaptureGuard = new XMe, this._checkpointCommitSequencer = new TAe;
    }
    get _composerViewsService() {
        return this._instantiationService.invokeFunction((e)=>e.get(Hv));
    }
    async getCurrentFilesContent(e, t) {
        const n = new Map, i = this._composerDataService.getHandleIfLoaded(e), r = i ? this._composerDataService.getComposerData(i) : void 0, s = new aR(ZXi);
        try {
            await Promise.all(t.map((o)=>s.queue(async ()=>{
                    if (!await this._composerFileService.exists({
                        uri: Ee.parse(o),
                        composerData: r
                    })) return;
                    const a = Ee.parse(o);
                    let c;
                    try {
                        c = await this.composerTextModelService.createModelReference(a, r, !0);
                        const u = c.object.textEditorModel.getLinesContent();
                        n.set(o, u);
                    } finally{
                        c?.dispose();
                    }
                })));
        } finally{
            s.dispose();
        }
        return n;
    }
    async createCheckoutCallback(e, t, n, i) {
        if (!e) {
            this._composerLogService.error("[composer] No composer handle provided");
            return;
        }
        const r = this._composerDataService.getComposerData(e);
        if (!r) {
            this._composerLogService.error("[composer] No composer found for the given handle");
            return;
        }
        const s = r.composerId, o = typeof t == "string";
        if (o && r.currentBubbleId === t) {
            this._composerLogService.info("[composer] Already at the target message");
            return;
        }
        let a;
        if (o && (a = r.fullConversationHeadersOnly.findIndex((g)=>g.bubbleId === t), a === -1)) {
            this._composerLogService.error("[composer] No message found with the given bubble ID or message has no checkpoint");
            return;
        }
        const c = n?.checkpointValidation ?? await this.validateCheckpointContent(e, t), l = async ()=>{
            if (r.currentBubbleId === void 0 && o) {
                const g = r.latestCheckpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(s, r.latestCheckpointId) : void 0, f = await this.createCurrentCheckpoint(s, g);
                if (r.latestCheckpointId && g) await this._composerCheckpointStorageService.updateCheckpoint(s, r.latestCheckpointId, (v)=>{
                    Object.assign(v, f);
                });
                else {
                    const v = await this._composerCheckpointStorageService.storeCheckpoint(s, f);
                    this._composerDataService.updateComposerData(e, {
                        latestCheckpointId: v
                    });
                }
            }
        };
        if (c.isSame) {
            this._composerLogService.info("[composer] Checkout to message is the same as current"), n?.fromSubmitChat || (await l(), this._commandService.executeCommand(KAn, s), this._composerDataService.updateComposerData(e, {
                currentBubbleId: o ? t : void 0,
                editingBubbleId: o ? t : void 0
            }), setTimeout(()=>{
                this._composerViewsService.getPrevEditingBubbleInputDelegate(s).focus();
            }, 0));
            return;
        }
        if (!n?.fromSubmitChat) {
            let g;
            if (c.hasNotebookFiles ? g = `You can always undo this later.
Note: Notebook cells are not supported for reverting.` : g = "You can always undo this later.", await this._prettyDialogService.openDialog({
                title: "Discard all changes up to this checkpoint?",
                message: g,
                cancelButton: {
                    id: "cancel",
                    label: "Cancel"
                },
                primaryButton: {
                    id: "continue",
                    label: "Continue"
                },
                shouldShowDontAskAgain: !0,
                dialogKey: "composer-checkout-to-message"
            }) !== "continue") return;
            this._commandService.executeCommand(KAn, s);
        }
        const u = r.currentBubbleId ? r.fullConversationHeadersOnly.findIndex((g)=>g.bubbleId === r.currentBubbleId) : r.fullConversationHeadersOnly.length - 1;
        let h = !o;
        a && (h = a > u), this._analyticsService.trackEvent("composer.checkout_to_message", {
            messageIndex: a,
            isMovingForward: h
        }), n?.fromSubmitChat || await l();
        const p = await this.createCheckoutCallbackWithInlineDiffs(e, t, r, s, n);
        if (p) return async ()=>{
            await p(), await Gzc({
                activeCanvas: qle(this._composerDataService.getComposerData(e)?.activeCanvas),
                fileExists: (g)=>this._composerFileService.exists({
                        uri: Tki(g),
                        composerData: r,
                        traceParent: i
                    }),
                clearActiveCanvas: ()=>this._composerDataService.updateComposerDataSetStore(e, (g)=>g("activeCanvas", void 0))
            });
        };
    }
    async createCheckoutCallbackWithInlineDiffs(e, t, n, i, r) {
        const s = typeof t == "string";
        let o = new Set, a = new Map, c = new Set, l;
        if (s) {
            await this._composerDataService.loadConversationFromBubble(e, t);
            const g = n.conversationMap[t].checkpointId;
            l = await this._composerCheckpointStorageService.retrieveCheckpoint(i, g);
        } else l = t;
        if (!l) throw new Error("[composer] No checkpoint found for the given bubble ID");
        if (s) {
            const g = await this.getFilesToRevertForCheckpoint(e, t, n.currentBubbleId, l);
            o = g.filesToRevert, a = g.intermediateFiles, c = g.foldersToDelete;
        } else {
            const g = new Set(l.activeInlineDiffs?.map((v)=>v.uri.toString()) ?? []), f = this.getUrisForCheckpoints(n);
            o = new Set(l.files.map((v)=>v.uri.toString()).filter((v)=>!g.has(v) && f.has(v)));
        }
        const u = new Set(o);
        for (const g of l.activeInlineDiffs ?? [])u.add(g.uri.toString());
        const h = new Map;
        return await Promise.all([
            ...u
        ].map(async (g)=>{
            const f = await this._composerDataService.getOrLoadOfsContent(n.composerId, g);
            f !== void 0 && h.set(g, f);
        })), async ()=>{
            const g = new aR(ZXi);
            await Promise.all([
                ...o
            ].map((f)=>g.queue(async ()=>{
                    try {
                        const v = Ee.parse(f);
                        let b;
                        if (v.path.endsWith(".ipynb")) return;
                        if (l.files.some((y)=>y.uri.toString() === f)) b = l.files.find((y)=>y.uri.toString() === f);
                        else {
                            const y = a.get(f);
                            y && (b = y.checkpoint.files.find((T)=>T.uri.toString() === f));
                        }
                        if (b) {
                            const y = h.get(v.toString()), T = y !== void 0 ? ry(y) : void 0;
                            if (b.isNewlyCreated) await this._composerFileService.deleteFile({
                                uri: v,
                                composerData: n
                            }), this._composerLogService.info(`[composer] Deleted newly created file ${f}`);
                            else {
                                await this._composerFileService.createNewFileAndMaybeFolder(b.uri, n, !0);
                                let A;
                                try {
                                    A = await this.composerTextModelService.createModelReference(v, n, !0);
                                    const R = A.object.textEditorModel, D = R.getLinesContent();
                                    if (T === void 0 || b.originalModelDiffWrtV0 === void 0) {
                                        this._composerLogService.error(`[composer] No original file state found for ${v.toString()}`);
                                        return;
                                    }
                                    const P = this._composerCodeBlockService.applyDiffToLines(T, b.originalModelDiffWrtV0);
                                    (D.length !== P.length || D.join(`
`) !== P.join(`
`)) && (R.setValue(P.join(`
`)), await this._composerFileService.saveFile({
                                        uri: v,
                                        composerData: n,
                                        options: {
                                            ignoreModifiedSince: !0
                                        }
                                    }));
                                } finally{
                                    A?.dispose();
                                }
                            }
                            const E = this._inlineDiffService.inlineDiffs.nonReactive().find((A)=>A.uri.toString() === f);
                            E && this._inlineDiffService.remove(E.id), this._composerLogService.info(`[composer] Processed file ${f} for revert operation`);
                        }
                    } catch (v) {
                        this._composerLogService.error(`[composer] Error processing file ${f}:`, v);
                    }
                }))), g.dispose();
            for (const f of c)try {
                await this._composerFileService.deleteFolder({
                    uri: Ee.parse(f),
                    composerData: n
                }), this._composerLogService.info(`[composer] Deleted newly created folder ${f}`);
            } catch (v) {
                this._composerLogService.error(`[composer] Error deleting folder ${f}:`, v);
            }
            if (S8i(l)) for (const f of l.nonExistentFiles)await this._composerFileService.deleteFile({
                uri: f.uri,
                composerData: n
            }), this._composerLogService.info(`[composer] Deleted non existent file ${f.uri.toString()}`);
            else l.nonExistentFiles.length > 0 && this._structuredLogService.warn("composer", "Skipped untrusted legacy checkpoint deletion markers", {
                composerId: i,
                markerCount: l.nonExistentFiles.length
            });
            for (const f of l.activeInlineDiffs){
                const { uri: v, originalTextDiffWrtV0: b, newTextDiffWrtV0: y, generationUUID: T } = f, E = h.get(v.toString()), A = E !== void 0 ? ry(E) : void 0;
                if (b !== void 0 && y !== void 0 && A !== void 0) {
                    const R = this._composerCodeBlockService.applyDiffToLines(A, b), D = this._composerCodeBlockService.applyDiffToLines(A, y);
                    if (R && D) {
                        const P = D.join(`
`);
                        await this._composerFileService.writeFile({
                            uri: v,
                            bufferOrReadableOrStream: wi.fromString(P),
                            composerData: n
                        }), await this._composerFileService.revertFile({
                            uri: v,
                            composerData: n,
                            options: {
                                soft: !1
                            }
                        });
                        const N = await this._textModelService.createModelReference(v);
                        try {
                            await this._textFileService.files.resolve(v, {
                                reload: {
                                    async: !1
                                },
                                forceReadFromFile: !0
                            });
                            const O = this._inlineDiffService.inlineDiffs.nonReactive().find(($)=>$.uri.toString() === v.toString());
                            O && this._inlineDiffService.remove(O.id);
                            const F = D.length, H = new Vl(1, F + 1);
                            await this._inlineDiffService.addDecorationsOnlyDiff({
                                uri: v,
                                generationUUID: T ?? zn(),
                                currentRange: H,
                                originalTextLines: R,
                                newTextLines: D,
                                prompt: "<checkpoint-revert>",
                                attachedToPromptBar: !1,
                                source: Fee,
                                createdAt: Date.now(),
                                composerMetadata: {
                                    composerId: n.composerId,
                                    composerGenerationID: n.chatGenerationUUID ?? ""
                                },
                                hideDeletionViewZones: !1
                            });
                        } finally{
                            N?.dispose();
                        }
                    }
                }
            }
            r?.fromSubmitChat || (this._composerDataService.updateComposerData(e, {
                currentBubbleId: s ? t : void 0,
                editingBubbleId: s ? t : void 0,
                newlyCreatedFiles: [
                    ...l.inlineDiffNewlyCreatedResources.files
                ],
                newlyCreatedFolders: [
                    ...l.inlineDiffNewlyCreatedResources.folders
                ]
            }), setTimeout(()=>{
                this._composerViewsService.getPrevEditingBubbleInputDelegate(i).focus();
            }, 0)), this._composerLogService.info(`[composer] Completed reverting to ${s ? "message " + t : "checkpoint"}`);
        };
    }
    async checkoutToCheckpoint(e, t) {
        const n = await this.createCheckoutCallback(e, t);
        n && await n();
    }
    async checkoutToLatest(e) {
        if (!e) {
            this._composerLogService.error("[composer] No composer handle provided");
            return;
        }
        const t = this._composerDataService.getComposerData(e);
        if (!t) {
            this._composerLogService.error("[composer] No composer found for the given handle");
            return;
        }
        if (!t.latestCheckpointId) {
            this._composerLogService.error("[composer] No latest checkpoint found for the composer");
            return;
        }
        const n = await this._composerCheckpointStorageService.retrieveCheckpoint(t.composerId, t.latestCheckpointId);
        if (!n) {
            this._composerLogService.error("[composer] No latest checkpoint found for the composer");
            return;
        }
        return this.checkoutToCheckpoint(e, n);
    }
    async createCurrentCheckpoint(e, t, n, i, r = Ji.None) {
        for(let s = 0;; s++)try {
            return await this.captureCurrentCheckpoint(e, t, n, i, r);
        } catch (o) {
            if (!(o instanceof cCt) || s > 0) throw o;
            if (this._structuredLogService.debug("composer", "Checkpoint capture failed; waiting for workspace recovery before retry", {
                composerId: e,
                bubbleId: n,
                fileOperationResult: o.fileOperationResult,
                phase: o.phase
            }), await this._workspaceConnectionService.ensureTransportReady(r) !== "connected") throw this._structuredLogService.warn("composer", "Checkpoint capture retry blocked by unavailable workspace", {
                composerId: e,
                bubbleId: n
            }), o;
        }
    }
    async captureCurrentCheckpoint(e, t, n, i, r = Ji.None) {
        const s = this._composerDataService.getHandleIfLoaded(e), o = s ? this._composerDataService.getComposerData(s) : void 0;
        if (!o || !s) throw new Error("[composer] No composer found for the given ID");
        const a = w8i(), c = this.getUrisForCheckpoints(o);
        for (const l of c){
            this.throwIfCheckpointCaptureCancelled(r);
            const u = Ee.parse(l), h = o.originalFileStates[l];
            if (h === void 0) continue;
            if (n !== void 0 && h.firstEditBubbleId === n && h.isNewlyCreated) {
                a.files.push({
                    uri: u,
                    originalModelDiffWrtV0: [],
                    isNewlyCreated: !0
                }), a.newlyCreatedFolders.push(...h.newlyCreatedFolders.map((f)=>({
                        uri: f
                    })));
                continue;
            }
            const p = this._composerDataService.getComposerData(s), g = await this._composerFileService.getFileExistence({
                uri: u,
                composerData: p,
                traceParent: i
            });
            if (g.state === "unknown") throw new cCt({
                fileOperationResult: g.result,
                phase: "existence",
                cause: g.error
            });
            if (g.state === "missing") {
                a.nonExistentFiles.push({
                    uri: u
                });
                continue;
            }
            try {
                const f = this._composerDataService.getHandleIfLoaded(e);
                if (!f) throw new Error("[composer] Composer unloaded while capturing checkpoint");
                const v = this._composerCodeBlockService.getInlineDiff(f, u);
                if (v) {
                    if ("newTextLines" in v && "originalTextLines" in v) {
                        const b = v.composerMetadata?.codeblockId ?? "", [y, T] = await Promise.all([
                            this._composerCodeBlockService.computeLineDiffs(f, u, v.originalTextLines, void 0, i),
                            this._composerCodeBlockService.computeLineDiffs(f, u, v.newTextLines, void 0, i)
                        ]);
                        a.activeInlineDiffs.push({
                            uri: u,
                            codeBlockId: b,
                            originalTextDiffWrtV0: y,
                            newTextDiffWrtV0: T,
                            generationUUID: v.generationUUID
                        });
                    }
                } else {
                    let b;
                    try {
                        b = await this.composerTextModelService.createModelReference(u, o, !0);
                        const y = b.object.textEditorModel, T = await this._composerCodeBlockService.computeLineDiffs(f, u, y.getLinesContent(), void 0, i);
                        a.files.push({
                            uri: u,
                            originalModelDiffWrtV0: T
                        });
                    } finally{
                        b?.dispose();
                    }
                }
            } catch (f) {
                throw f instanceof cCt ? f : (this.throwIfCheckpointCaptureCancelled(r), new cCt({
                    fileOperationResult: AO(f),
                    phase: "content",
                    cause: f
                }));
            }
        }
        if (t) {
            const l = t.files.filter((u)=>u.isNewlyCreated && !a.files.find((h)=>h.uri.toString() === u.uri.toString()));
            a.files.push(...l), a.newlyCreatedFolders = [
                ...t.newlyCreatedFolders
            ];
        }
        return a.inlineDiffNewlyCreatedResources = {
            files: [
                ...o.newlyCreatedFiles
            ],
            folders: [
                ...o.newlyCreatedFolders
            ]
        }, a;
    }
    throwIfCheckpointCaptureCancelled(e) {
        if (e.isCancellationRequested) throw new Rl;
    }
    async validateCheckpointContent(e, t) {
        if (!e) return {
            isSame: !1,
            hasNotebookFiles: !1
        };
        const n = this._composerDataService.getComposerData(e);
        if (!n) return {
            isSame: !1,
            hasNotebookFiles: !1
        };
        const i = typeof t == "string";
        let r, s = new Set, o = new Map, a = new Set;
        if (typeof t == "string") {
            await this._composerDataService.loadConversationFromBubble(e, t);
            const u = n.conversationMap[t].checkpointId;
            if (!u) return {
                isSame: !0,
                hasNotebookFiles: !1
            };
            if (r = await this._composerCheckpointStorageService.retrieveCheckpoint(n.composerId, u), !r) return {
                isSame: !0,
                hasNotebookFiles: !1
            };
            const h = await this.getFilesToRevertForCheckpoint(e, t, n.currentBubbleId, r);
            s = h.filesToRevert, o = h.intermediateFiles, a = h.foldersToDelete;
        } else {
            r = t;
            const u = new Set(r.activeInlineDiffs?.map((p)=>p.uri.toString()) ?? []), h = this.getUrisForCheckpoints(n);
            s = new Set(r.files.map((p)=>p.uri.toString()).filter((p)=>!u.has(p) && h.has(p)));
        }
        const c = Array.from(s).some((u)=>u.endsWith(".ipynb")), l = await this.getCurrentFilesContent(n.composerId, Array.from(s));
        for (const u of s){
            let h;
            if (r.files.some((g)=>g.uri.toString() === u)) h = r.files.find((g)=>g.uri.toString() === u);
            else {
                const g = o.get(u);
                g && (h = g.checkpoint.files.find((f)=>f.uri.toString() === u));
            }
            const p = l.get(u) || [];
            if (h) if (h.isNewlyCreated) {
                if (await this._composerFileService.exists({
                    uri: h.uri,
                    composerData: n
                })) return {
                    isSame: !1,
                    hasNotebookFiles: c
                };
            } else {
                if (!await this._composerFileService.exists({
                    uri: h.uri,
                    composerData: n
                })) return {
                    isSame: !1,
                    hasNotebookFiles: c
                };
                const g = await this._composerCodeBlockService.getCodeBlockLinesByDiff(e, h.uri, h.originalModelDiffWrtV0 ?? []) ?? [];
                if (!this.areContentsEqual(p, g ?? [])) return {
                    isSame: !1,
                    hasNotebookFiles: c
                };
            }
            else if (p.length > 0) return {
                isSame: !1,
                hasNotebookFiles: c
            };
        }
        if (i) {
            const u = this._composerDataService.getLoadedConversation(e), h = u.findIndex((p)=>p.bubbleId === t);
            if (h >= 0) {
                const p = n.currentBubbleId ? u.findIndex((f)=>f.bubbleId === n.currentBubbleId) : u.length, g = this._composerDataService.getComposerCapability(e, ps.TOOL_FORMER);
                for (const f of u.slice(h + 1, p >= 0 ? p : void 0)){
                    if (f.capabilityType !== ps.TOOL_FORMER) continue;
                    const v = g?.getBubbleData(f.bubbleId);
                    if (!v || v.tool !== nt.TASK_V2 && v.tool !== nt.TASK) continue;
                    const b = v.additionalData?.subagentComposerId;
                    if (!b) continue;
                    const y = this._composerDataService.getHandleIfLoaded(b) ?? await this._composerDataService.getComposerHandleById(b).catch(()=>{}), T = y ? this._composerDataService.getComposerData(y) : void 0;
                    if (!T?.originalFileStates || Object.keys(T.originalFileStates).length === 0) continue;
                    const E = Object.keys(T.originalFileStates).filter((R)=>{
                        if (s.has(R)) return !1;
                        const D = Ee.parse(R);
                        return D.scheme !== gt.vscodeNotebookCell && !D.path.endsWith(".ipynb");
                    });
                    if (E.length === 0) continue;
                    for (const R of E)if (T.originalFileStates[R].isNewlyCreated && await this._composerFileService.exists({
                        uri: Ee.parse(R),
                        composerData: n
                    })) return {
                        isSame: !1,
                        hasNotebookFiles: c
                    };
                    const A = E.filter((R)=>!T.originalFileStates[R].isNewlyCreated);
                    if (A.length > 0) {
                        await Promise.all(A.map((D)=>this._composerDataService.getOrLoadOfsContent(T.composerId, D)));
                        const R = await this.getCurrentFilesContent(n.composerId, A);
                        for (const D of A){
                            const P = R.get(D) || [], N = await this._composerDataService.getOrLoadOfsContent(T.composerId, D);
                            if (N === void 0) continue;
                            const O = ry(N);
                            if (!this.areContentsEqual(P, O)) return {
                                isSame: !1,
                                hasNotebookFiles: c
                            };
                        }
                    }
                }
            }
        }
        if (a.size > 0 || S8i(r) && r.nonExistentFiles.length > 0) return {
            isSame: !1,
            hasNotebookFiles: c
        };
        for (const u of r.activeInlineDiffs ?? []){
            const { uri: h, codeBlockId: p, originalTextDiffWrtV0: g, newTextDiffWrtV0: f } = u, v = this._inlineDiffService.inlineDiffs.nonReactive().find((T)=>T.uri.toString() === h.toString());
            if (!v) return {
                isSame: !1,
                hasNotebookFiles: c
            };
            const b = p || void 0, y = v.composerMetadata?.codeblockId || void 0;
            if (b !== y || n.composerId !== v.composerMetadata?.composerId) return {
                isSame: !1,
                hasNotebookFiles: c
            };
            if ("originalTextLines" in v && "newTextLines" in v) {
                const T = await this._composerCodeBlockService.getCodeBlockLinesByDiff(e, h, g ?? []), E = await this._composerCodeBlockService.getCodeBlockLinesByDiff(e, h, f ?? []);
                if (!T || !E || !this.areContentsEqual(T, v.originalTextLines) || !this.areContentsEqual(E, v.newTextLines)) return {
                    isSame: !1,
                    hasNotebookFiles: c
                };
            }
        }
        return {
            isSame: !0,
            hasNotebookFiles: c
        };
    }
    async getFilesToRevertForCheckpoint(e, t, n, i) {
        const r = this._composerDataService.getComposerData(e);
        if (!r) throw new Error("[composer] No composer found for the given handle");
        await this._composerDataService.loadConversationFromBubble(e, t);
        const s = new Set(i.activeInlineDiffs?.map((b)=>b.uri.toString()) ?? []), o = new Set, a = new Map;
        i.newlyCreatedFolders.forEach((b)=>{
            o.add(b.uri.toString());
        });
        const c = this._composerDataService.getLoadedConversation(e), l = c.findIndex((b)=>b.bubbleId === t) + 1, u = n ? c.findIndex((b)=>b.bubbleId === n) : c.length, h = c.slice(l, u).flatMap((b)=>b.checkpointId ? [
                b.checkpointId
            ] : []), p = new aR(ZXi);
        let g;
        try {
            g = await Promise.all(h.map((b)=>p.queue(()=>this._composerCheckpointStorageService.retrieveCheckpoint(r.composerId, b))));
        } finally{
            p.dispose();
        }
        for (const b of g)b && (b.files.forEach((y)=>{
            const T = y.uri.toString();
            !i.files.some((E)=>E.uri.toString() === T) && !a.has(T) && !s.has(T) && a.set(T, {
                checkpoint: b
            });
        }), b.newlyCreatedFolders.forEach((y)=>{
            o.add(y.uri.toString());
        }));
        const f = this.getUrisForCheckpoints(r);
        return {
            filesToRevert: new Set([
                ...i.files.filter((b)=>!s.has(b.uri.toString())).map((b)=>b.uri.toString()),
                ...a.keys()
            ].filter((b)=>f.has(b))),
            intermediateFiles: a,
            foldersToDelete: o
        };
    }
    getUrisForCheckpoints(e) {
        if (e.isNAL) return new Set(Array.from(Object.keys(e.originalFileStates)).filter(((r)=>{
            const s = Ee.parse(r);
            return s.scheme !== gt.vscodeNotebookCell && !s.path.endsWith(".ipynb");
        })));
        const t = new Set;
        for (const r of Object.keys(e.codeBlockData))t.add(r);
        const n = this._composerDataService.getHandleIfLoaded(e.composerId), i = n ? this._composerDataService.getLoadedConversation(n) : [];
        for (const r of i)if (r.capabilityType === ps.TOOL_FORMER) {
            const s = n ? this._composerDataService.getComposerCapability(n, ps.TOOL_FORMER)?.getBubbleData(r.bubbleId) : void 0;
            if (s?.tool === nt.DELETE_FILE && s.params?.relativeWorkspacePath) {
                const o = this._workspaceContextService.resolveRelativePath(s.params.relativeWorkspacePath);
                t.add(o.toString());
            }
        }
        return new Set(Array.from(t).filter(((r)=>{
            const s = Ee.parse(r);
            return s.scheme !== gt.vscodeNotebookCell && !s.path.endsWith(".ipynb");
        })));
    }
    areContentsEqual(e, t) {
        if (e.length !== t.length) return !1;
        for(let n = 0; n < e.length; n++)if (e[n] !== t[n]) return !1;
        return !0;
    }
    async getFileContentsGivenCheckpoint(e, t, n) {
        const i = n.toString(), r = t.activeInlineDiffs.find((a)=>a.uri.toString() === i), s = t.files.find((a)=>a.uri.toString() === i);
        let o = null;
        if (r && r.newTextDiffWrtV0) o = (await this._composerCodeBlockService.getCodeBlockLinesByDiff(e, n, r.newTextDiffWrtV0))?.join(`
`) ?? null;
        else if (s && s.originalModelDiffWrtV0) {
            if (s.isNewlyCreated && s.originalModelDiffWrtV0.length === 0) return null;
            o = (await this._composerCodeBlockService.getCodeBlockLinesByDiff(e, n, s.originalModelDiffWrtV0))?.join(`
`) ?? null;
        }
        return o;
    }
    async getFileContentsGivenBubbleId(e, t, n, i) {
        if (!e) return {
            case: "notFound"
        };
        const r = this._composerDataService.getComposerData(e);
        if (!r) return {
            case: "notFound"
        };
        const s = await mjv(this._composerDataService, e, t);
        if (!s) return {
            case: "notFound"
        };
        let o = s.checkpointId;
        i?.isAfterCheckpoint && (o = s.afterCheckpointId);
        const a = o ? await this._composerCheckpointStorageService.retrieveCheckpoint(r.composerId, o) : void 0;
        if (!a) return {
            case: "notFound"
        };
        const c = await this.getFileContentsGivenCheckpoint(e, a, n);
        if (c === null) {
            const l = n.toString();
            return r.originalFileStates[l]?.isNewlyCreated ? {
                case: "isNewlyCreated"
            } : {
                case: "notFound"
            };
        }
        return {
            case: "contents",
            contents: c
        };
    }
    async updateComposerBubbleCheckpoint(e, t, n, i, r = Ji.None) {
        const s = Date.now(), o = `${e}:${t}:${n?.isAfterCheckpoint === !0 ? "after" : "before"}`, a = this._checkpointCaptureGuard.bump(o), c = ()=>a.isCurrent() && !r.isCancellationRequested && n?.shouldContinue?.() !== !1;
        try {
            if (!c()) throw new Rl;
            const l = await this.createCurrentCheckpoint(e, void 0, t, i, r);
            await this._checkpointCommitSequencer.queue(o, async ()=>{
                if (!c()) throw new Rl;
                const u = this._composerDataService.getHandleIfLoaded(e);
                if (!u) throw new Rl;
                await this._composerDataService.updateComposerBubbleCheckpoint(u, t, l, {
                    isAfterCheckpoint: n?.isAfterCheckpoint ?? !1,
                    shouldCommit: c
                }, i);
            });
        } finally{
            a.isCurrent() && this._checkpointCaptureGuard.delete(o);
            const l = Date.now();
            this._composerLogService.debug(`[composer.checkpoint] Updated composer bubble checkpoint for composer ${e} in ${l - s}ms`);
        }
    }
    async updateLastCheckpointWithFileIfNotTracked(e, t, n) {
        if (!e) return;
        const i = e.data.composerId, r = this._composerDataService.getLastBubbleWhere(e, (o)=>!!o.checkpointId), s = r?.checkpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(i, r.checkpointId) : void 0;
        if (!t.path.endsWith(".ipynb") && r) {
            const o = s?.files.some((c)=>c.uri.toString() === t.toString()) || s?.activeInlineDiffs.some((c)=>c.uri.toString() === t.toString());
            let a = [
                " "
            ];
            if (!o) {
                if (n?.forceModelContent) a = n.forceModelContent;
                else {
                    let u;
                    try {
                        const h = e.data;
                        u = await this.composerTextModelService.createModelReference(t, h, !0), a = u.object.textEditorModel.getLinesContent();
                    } finally{
                        u?.dispose();
                    }
                }
                const c = await this._composerCodeBlockService.computeLineDiffs(e, t, a), l = [
                    "conversationMap",
                    r.bubbleId,
                    "checkpointId"
                ];
                if (s === void 0) {
                    const u = w8i(), h = await this._composerCheckpointStorageService.storeCheckpoint(i, u);
                    this._composerDataService.updateComposerDataSetStore(e, (p)=>p(...l, h));
                }
                if (r?.checkpointId) {
                    const u = r.checkpointId;
                    await this._composerCheckpointStorageService.updateCheckpoint(i, u, (h)=>{
                        h.files.push({
                            uri: t,
                            originalModelDiffWrtV0: c,
                            isNewlyCreated: n?.isNewlyCreated ?? !1
                        }), h.newlyCreatedFolders.push(...n?.newlyCreatedFolders ?? []);
                    });
                }
            }
        }
    }
}, ie([
    zs("ComposerCheckpointService.getCurrentFilesContent")
], YX.prototype, "getCurrentFilesContent", null), ie([
    zs("ComposerCheckpointService.createCheckoutCallback")
], YX.prototype, "createCheckoutCallback", null), ie([
    zs("ComposerCheckpointService.createCheckoutCallbackWithInlineDiffs")
], YX.prototype, "createCheckoutCallbackWithInlineDiffs", null), ie([
    zs("ComposerCheckpointService.checkoutToCheckpoint")
], YX.prototype, "checkoutToCheckpoint", null), ie([
    zs("ComposerCheckpointService.checkoutToLatest")
], YX.prototype, "checkoutToLatest", null), ie([
    zs("ComposerCheckpointService.createCurrentCheckpoint")
], YX.prototype, "createCurrentCheckpoint", null), ie([
    zs("ComposerCheckpointService.validateCheckpointContent")
], YX.prototype, "validateCheckpointContent", null), ie([
    zs("ComposerCheckpointService.getFilesToRevertForCheckpoint")
], YX.prototype, "getFilesToRevertForCheckpoint", null), ie([
    zs("ComposerCheckpointService.getUrisForCheckpoints")
], YX.prototype, "getUrisForCheckpoints", null), ie([
    zs("ComposerCheckpointService.areContentsEqual")
], YX.prototype, "areContentsEqual", null), ie([
    zs("ComposerCheckpointService.getFileContentsGivenCheckpoint")
], YX.prototype, "getFileContentsGivenCheckpoint", null), ie([
    zs("ComposerCheckpointService.getFileContentsGivenBubbleId")
], YX.prototype, "getFileContentsGivenBubbleId", null), YX = ie([
    C(0, Zs),
    C(1, _t),
    C(2, pq),
    C(3, BI),
    C(4, zM),
    C(5, Do),
    C(6, H_e),
    C(7, ca),
    C(8, Jn),
    C(9, $n),
    C(10, hSt),
    C(11, poe),
    C(12, Xp),
    C(13, bc),
    C(14, PUe),
    C(15, Xh),
    C(16, lb)
], YX), mn(mtt, YX, 1);

}
