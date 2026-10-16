import { Mpk } from "./Aeg.js";
import { Ei, Fa, Ga, Hc, Qe, Tr, st, ww } from "./Iwo.js";
import { YYd, dhe, oai } from "./LYd.js";
import { ID, aa, bn, jn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { G6e, c_ } from "./async.cursor.js";
import { FOe, qn, xI } from "./async.js";
import { Xs, yo } from "./cancellation.js";
import { jD } from "./canvas.js";
import { DHe } from "./canvasComposer.js";
import { nr, rs } from "./commands.js";
import { AWt, YCn } from "./composerCheckpointStorageService.js";
import { Kbe, WCe } from "./composerCodeBlockService.js";
import { Vqr, qqr, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Cie, dG } from "./composerFileService.js";
import { iI, w1 } from "./composerLogService.js";
import { HCe, O4e } from "./composerTextModelService.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { $bi, Ef } from "./constants_18.js";
import { pat } from "./conversationBodyAccess.js";
import { Rn } from "./extensions.js";
import { ms } from "./files.js";
import { G4, Rbe, UO } from "./inlineDiffService.js";
import { It, dn } from "./instantiation.js";
import { DD, wd } from "./lineRange.js";
import { Ki, Ot } from "./network.js";
import { Dw, oI } from "./prettyDialog.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Em, Rh } from "./resolverService.js";
import { Cm, wh } from "./structuredLog.js";
import { Vf, u_ } from "./textfiles.js";
import { Ct, Pu } from "./tools_pb.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { Lpe, fie } from "./workspaceConnectionService.js";
var mat, Srs, Ozt, ble;
export { Ozt, Srs, ble, mat };
var __wakaru_LTt_initialized = false;
export function LTt() {
if (__wakaru_LTt_initialized) return;
__wakaru_LTt_initialized = true;
"use strict";
E(), It(), Pl(), qn(), c_(), yo(), Ei(), Qe(), Fa(), Rn(), Ux(), __(), uv(), oI(), fn(), Em(), el(), G4(), Ss(), Sr(), Ef(), rs(), Cie(), YCn(), Ki(), WCe(), pat(), tf(), Pu(), O4e(), Ga(), DD(), Xo(), u_(), jD(), DHe(), ms(), Lpe(), Cm(), iI(), mat = jn("composerCheckpointService"), Srs = 8, Ozt = class extends Error {
    constructor(t){
        super("Unable to create a restore point because the workspace files are unavailable.", {
            cause: t.cause
        }), this.name = "ComposerCheckpointCaptureError", this.fileOperationResult = t.fileOperationResult, this.phase = t.phase;
    }
}, ble = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _){
        super(), this._composerDataService = t, this._instantiationService = e, this._composerFileService = n, this._prettyDialogService = i, this._inlineDiffService = r, this._reactiveStorageService = s, this.composerTextModelService = o, this._analyticsService = a, this._workspaceContextService = l, this._commandService = c, this._composerCheckpointStorageService = u, this._composerCodeBlockService = d, this._textFileService = h, this._textModelService = p, this._workspaceConnectionService = g, this._structuredLogService = f, this._composerLogService = _, this._checkpointCaptureGuard = new G6e, this._checkpointCommitSequencer = new FOe;
    }
    get _composerViewsService() {
        return this._instantiationService.invokeFunction((t)=>t.get(Bb));
    }
    async getCurrentFilesContent(t, e) {
        const n = new Map, i = this._composerDataService.getHandleIfLoaded(t), r = i ? this._composerDataService.getComposerData(i) : void 0, s = new xI(Srs);
        try {
            await Promise.all(e.map((o)=>s.queue(async ()=>{
                    if (!await this._composerFileService.exists({
                        uri: rt.parse(o),
                        composerData: r
                    })) return;
                    const a = rt.parse(o);
                    let l;
                    try {
                        l = await this.composerTextModelService.createModelReference(a, r, !0);
                        const u = l.object.textEditorModel.getLinesContent();
                        n.set(o, u);
                    } finally{
                        l?.dispose();
                    }
                })));
        } finally{
            s.dispose();
        }
        return n;
    }
    async createCheckoutCallback(t, e, n, i) {
        if (!t) {
            this._composerLogService.error("[composer] No composer handle provided");
            return;
        }
        const r = this._composerDataService.getComposerData(t);
        if (!r) {
            this._composerLogService.error("[composer] No composer found for the given handle");
            return;
        }
        const s = r.composerId, o = typeof e == "string";
        if (o && r.currentBubbleId === e) {
            this._composerLogService.info("[composer] Already at the target message");
            return;
        }
        let a;
        if (o && (a = r.fullConversationHeadersOnly.findIndex((p)=>p.bubbleId === e), a === -1)) {
            this._composerLogService.error("[composer] No message found with the given bubble ID or message has no checkpoint");
            return;
        }
        const l = n?.checkpointValidation ?? await this.validateCheckpointContent(t, e), c = async ()=>{
            if (r.currentBubbleId === void 0 && o) {
                const p = r.latestCheckpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(s, r.latestCheckpointId) : void 0, g = await this.createCurrentCheckpoint(s, p);
                if (r.latestCheckpointId && p) await this._composerCheckpointStorageService.updateCheckpoint(s, r.latestCheckpointId, (f)=>{
                    Object.assign(f, g);
                });
                else {
                    const f = await this._composerCheckpointStorageService.storeCheckpoint(s, g);
                    this._composerDataService.updateComposerData(t, {
                        latestCheckpointId: f
                    });
                }
            }
        };
        if (l.isSame) {
            this._composerLogService.info("[composer] Checkout to message is the same as current"), n?.fromSubmitChat || (await c(), this._commandService.executeCommand($bi, s), this._composerDataService.updateComposerData(t, {
                currentBubbleId: o ? e : void 0,
                editingBubbleId: o ? e : void 0
            }), setTimeout(()=>{
                this._composerViewsService.getPrevEditingBubbleInputDelegate(s).focus();
            }, 0));
            return;
        }
        if (!n?.fromSubmitChat) {
            let p;
            if (l.hasNotebookFiles ? p = `You can always undo this later.
Note: Notebook cells are not supported for reverting.` : p = "You can always undo this later.", await this._prettyDialogService.openDialog({
                title: "Discard all changes up to this checkpoint?",
                message: p,
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
            this._commandService.executeCommand($bi, s);
        }
        const u = r.currentBubbleId ? r.fullConversationHeadersOnly.findIndex((p)=>p.bubbleId === r.currentBubbleId) : r.fullConversationHeadersOnly.length - 1;
        let d = !o;
        a && (d = a > u), this._analyticsService.trackEvent("composer.checkout_to_message", {
            messageIndex: a,
            isMovingForward: d
        }), n?.fromSubmitChat || await c();
        const h = await this.createCheckoutCallbackWithInlineDiffs(t, e, r, s, n);
        if (h) return async ()=>{
            await h(), await YYd({
                activeCanvas: dhe(this._composerDataService.getComposerData(t)?.activeCanvas),
                fileExists: (p)=>this._composerFileService.exists({
                        uri: oai(p),
                        composerData: r,
                        traceParent: i
                    }),
                clearActiveCanvas: ()=>this._composerDataService.updateComposerDataSetStore(t, (p)=>p("activeCanvas", void 0))
            });
        };
    }
    async createCheckoutCallbackWithInlineDiffs(t, e, n, i, r) {
        const s = typeof e == "string";
        let o = new Set, a = new Map, l = new Set, c;
        if (s) {
            await this._composerDataService.loadConversationFromBubble(t, e);
            const p = n.conversationMap[e].checkpointId;
            c = await this._composerCheckpointStorageService.retrieveCheckpoint(i, p);
        } else c = e;
        if (!c) throw new Error("[composer] No checkpoint found for the given bubble ID");
        if (s) {
            const p = await this.getFilesToRevertForCheckpoint(t, e, n.currentBubbleId, c);
            o = p.filesToRevert, a = p.intermediateFiles, l = p.foldersToDelete;
        } else {
            const p = new Set(c.activeInlineDiffs?.map((f)=>f.uri.toString()) ?? []), g = this.getUrisForCheckpoints(n);
            o = new Set(c.files.map((f)=>f.uri.toString()).filter((f)=>!p.has(f) && g.has(f)));
        }
        const u = new Set(o);
        for (const p of c.activeInlineDiffs ?? [])u.add(p.uri.toString());
        const d = new Map;
        return await Promise.all([
            ...u
        ].map(async (p)=>{
            const g = await this._composerDataService.getOrLoadOfsContent(n.composerId, p);
            g !== void 0 && d.set(p, g);
        })), async ()=>{
            const p = new xI(Srs);
            await Promise.all([
                ...o
            ].map((g)=>p.queue(async ()=>{
                    try {
                        const f = rt.parse(g);
                        let _;
                        if (f.path.endsWith(".ipynb")) return;
                        if (c.files.some((b)=>b.uri.toString() === g)) _ = c.files.find((b)=>b.uri.toString() === g);
                        else {
                            const b = a.get(g);
                            b && (_ = b.checkpoint.files.find((y)=>y.uri.toString() === g));
                        }
                        if (_) {
                            const b = d.get(f.toString()), y = b !== void 0 ? ww(b) : void 0;
                            if (_.isNewlyCreated) await this._composerFileService.deleteFile({
                                uri: f,
                                composerData: n
                            }), this._composerLogService.info(`[composer] Deleted newly created file ${g}`);
                            else {
                                await this._composerFileService.createNewFileAndMaybeFolder(_.uri, n, !0);
                                let k;
                                try {
                                    k = await this.composerTextModelService.createModelReference(f, n, !0);
                                    const C = k.object.textEditorModel, T = C.getLinesContent();
                                    if (y === void 0 || _.originalModelDiffWrtV0 === void 0) {
                                        this._composerLogService.error(`[composer] No original file state found for ${f.toString()}`);
                                        return;
                                    }
                                    const I = this._composerCodeBlockService.applyDiffToLines(y, _.originalModelDiffWrtV0);
                                    (T.length !== I.length || T.join(`
`) !== I.join(`
`)) && (C.setValue(I.join(`
`)), await this._composerFileService.saveFile({
                                        uri: f,
                                        composerData: n,
                                        options: {
                                            ignoreModifiedSince: !0
                                        }
                                    }));
                                } finally{
                                    k?.dispose();
                                }
                            }
                            const S = this._inlineDiffService.inlineDiffs.nonReactive().find((k)=>k.uri.toString() === g);
                            S && this._inlineDiffService.remove(S.id), this._composerLogService.info(`[composer] Processed file ${g} for revert operation`);
                        }
                    } catch (f) {
                        this._composerLogService.error(`[composer] Error processing file ${g}:`, f);
                    }
                }))), p.dispose();
            for (const g of l)try {
                await this._composerFileService.deleteFolder({
                    uri: rt.parse(g),
                    composerData: n
                }), this._composerLogService.info(`[composer] Deleted newly created folder ${g}`);
            } catch (f) {
                this._composerLogService.error(`[composer] Error deleting folder ${g}:`, f);
            }
            if (qqr(c)) for (const g of c.nonExistentFiles)await this._composerFileService.deleteFile({
                uri: g.uri,
                composerData: n
            }), this._composerLogService.info(`[composer] Deleted non existent file ${g.uri.toString()}`);
            else c.nonExistentFiles.length > 0 && this._structuredLogService.warn("composer", "Skipped untrusted legacy checkpoint deletion markers", {
                composerId: i,
                markerCount: c.nonExistentFiles.length
            });
            for (const g of c.activeInlineDiffs){
                const { uri: f, originalTextDiffWrtV0: _, newTextDiffWrtV0: b, generationUUID: y } = g, S = d.get(f.toString()), k = S !== void 0 ? ww(S) : void 0;
                if (_ !== void 0 && b !== void 0 && k !== void 0) {
                    const C = this._composerCodeBlockService.applyDiffToLines(k, _), T = this._composerCodeBlockService.applyDiffToLines(k, b);
                    if (C && T) {
                        const I = T.join(`
`);
                        await this._composerFileService.writeFile({
                            uri: f,
                            bufferOrReadableOrStream: Tr.fromString(I),
                            composerData: n
                        }), await this._composerFileService.revertFile({
                            uri: f,
                            composerData: n,
                            options: {
                                soft: !1
                            }
                        });
                        const A = await this._textModelService.createModelReference(f);
                        try {
                            await this._textFileService.files.resolve(f, {
                                reload: {
                                    async: !1
                                },
                                forceReadFromFile: !0
                            });
                            const P = this._inlineDiffService.inlineDiffs.nonReactive().find((N)=>N.uri.toString() === f.toString());
                            P && this._inlineDiffService.remove(P.id);
                            const M = T.length, O = new wd(1, M + 1);
                            await this._inlineDiffService.addDecorationsOnlyDiff({
                                uri: f,
                                generationUUID: y ?? Ai(),
                                currentRange: O,
                                originalTextLines: C,
                                newTextLines: T,
                                prompt: "<checkpoint-revert>",
                                attachedToPromptBar: !1,
                                source: Rbe,
                                createdAt: Date.now(),
                                composerMetadata: {
                                    composerId: n.composerId,
                                    composerGenerationID: n.chatGenerationUUID ?? ""
                                },
                                hideDeletionViewZones: !1
                            });
                        } finally{
                            A?.dispose();
                        }
                    }
                }
            }
            r?.fromSubmitChat || (this._composerDataService.updateComposerData(t, {
                currentBubbleId: s ? e : void 0,
                editingBubbleId: s ? e : void 0,
                newlyCreatedFiles: [
                    ...c.inlineDiffNewlyCreatedResources.files
                ],
                newlyCreatedFolders: [
                    ...c.inlineDiffNewlyCreatedResources.folders
                ]
            }), setTimeout(()=>{
                this._composerViewsService.getPrevEditingBubbleInputDelegate(i).focus();
            }, 0)), this._composerLogService.info(`[composer] Completed reverting to ${s ? "message " + e : "checkpoint"}`);
        };
    }
    async checkoutToCheckpoint(t, e) {
        const n = await this.createCheckoutCallback(t, e);
        n && await n();
    }
    async checkoutToLatest(t) {
        if (!t) {
            this._composerLogService.error("[composer] No composer handle provided");
            return;
        }
        const e = this._composerDataService.getComposerData(t);
        if (!e) {
            this._composerLogService.error("[composer] No composer found for the given handle");
            return;
        }
        if (!e.latestCheckpointId) {
            this._composerLogService.error("[composer] No latest checkpoint found for the composer");
            return;
        }
        const n = await this._composerCheckpointStorageService.retrieveCheckpoint(e.composerId, e.latestCheckpointId);
        if (!n) {
            this._composerLogService.error("[composer] No latest checkpoint found for the composer");
            return;
        }
        return this.checkoutToCheckpoint(t, n);
    }
    async createCurrentCheckpoint(t, e, n, i, r = Xs.None) {
        for(let s = 0;; s++)try {
            return await this.captureCurrentCheckpoint(t, e, n, i, r);
        } catch (o) {
            if (!(o instanceof Ozt) || s > 0) throw o;
            if (this._structuredLogService.debug("composer", "Checkpoint capture failed; waiting for workspace recovery before retry", {
                composerId: t,
                bubbleId: n,
                fileOperationResult: o.fileOperationResult,
                phase: o.phase
            }), await this._workspaceConnectionService.ensureTransportReady(r) !== "connected") throw this._structuredLogService.warn("composer", "Checkpoint capture retry blocked by unavailable workspace", {
                composerId: t,
                bubbleId: n
            }), o;
        }
    }
    async captureCurrentCheckpoint(t, e, n, i, r = Xs.None) {
        const s = this._composerDataService.getHandleIfLoaded(t), o = s ? this._composerDataService.getComposerData(s) : void 0;
        if (!o || !s) throw new Error("[composer] No composer found for the given ID");
        const a = Vqr(), l = this.getUrisForCheckpoints(o);
        for (const c of l){
            this.throwIfCheckpointCaptureCancelled(r);
            const u = rt.parse(c), d = o.originalFileStates[c];
            if (d === void 0) continue;
            if (n !== void 0 && d.firstEditBubbleId === n && d.isNewlyCreated) {
                a.files.push({
                    uri: u,
                    originalModelDiffWrtV0: [],
                    isNewlyCreated: !0
                }), a.newlyCreatedFolders.push(...d.newlyCreatedFolders.map((g)=>({
                        uri: g
                    })));
                continue;
            }
            const h = this._composerDataService.getComposerData(s), p = await this._composerFileService.getFileExistence({
                uri: u,
                composerData: h,
                traceParent: i
            });
            if (p.state === "unknown") throw new Ozt({
                fileOperationResult: p.result,
                phase: "existence",
                cause: p.error
            });
            if (p.state === "missing") {
                a.nonExistentFiles.push({
                    uri: u
                });
                continue;
            }
            try {
                const g = this._composerDataService.getHandleIfLoaded(t);
                if (!g) throw new Error("[composer] Composer unloaded while capturing checkpoint");
                const f = this._composerCodeBlockService.getInlineDiff(g, u);
                if (f) {
                    if ("newTextLines" in f && "originalTextLines" in f) {
                        const _ = f.composerMetadata?.codeblockId ?? "", [b, y] = await Promise.all([
                            this._composerCodeBlockService.computeLineDiffs(g, u, f.originalTextLines, void 0, i),
                            this._composerCodeBlockService.computeLineDiffs(g, u, f.newTextLines, void 0, i)
                        ]);
                        a.activeInlineDiffs.push({
                            uri: u,
                            codeBlockId: _,
                            originalTextDiffWrtV0: b,
                            newTextDiffWrtV0: y,
                            generationUUID: f.generationUUID
                        });
                    }
                } else {
                    let _;
                    try {
                        _ = await this.composerTextModelService.createModelReference(u, o, !0);
                        const b = _.object.textEditorModel, y = await this._composerCodeBlockService.computeLineDiffs(g, u, b.getLinesContent(), void 0, i);
                        a.files.push({
                            uri: u,
                            originalModelDiffWrtV0: y
                        });
                    } finally{
                        _?.dispose();
                    }
                }
            } catch (g) {
                throw g instanceof Ozt ? g : (this.throwIfCheckpointCaptureCancelled(r), new Ozt({
                    fileOperationResult: ID(g),
                    phase: "content",
                    cause: g
                }));
            }
        }
        if (e) {
            const c = e.files.filter((u)=>u.isNewlyCreated && !a.files.find((d)=>d.uri.toString() === u.uri.toString()));
            a.files.push(...c), a.newlyCreatedFolders = [
                ...e.newlyCreatedFolders
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
    throwIfCheckpointCaptureCancelled(t) {
        if (t.isCancellationRequested) throw new Hc;
    }
    async validateCheckpointContent(t, e) {
        if (!t) return {
            isSame: !1,
            hasNotebookFiles: !1
        };
        const n = this._composerDataService.getComposerData(t);
        if (!n) return {
            isSame: !1,
            hasNotebookFiles: !1
        };
        const i = typeof e == "string";
        let r, s = new Set, o = new Map, a = new Set;
        if (typeof e == "string") {
            await this._composerDataService.loadConversationFromBubble(t, e);
            const u = n.conversationMap[e].checkpointId;
            if (!u) return {
                isSame: !0,
                hasNotebookFiles: !1
            };
            if (r = await this._composerCheckpointStorageService.retrieveCheckpoint(n.composerId, u), !r) return {
                isSame: !0,
                hasNotebookFiles: !1
            };
            const d = await this.getFilesToRevertForCheckpoint(t, e, n.currentBubbleId, r);
            s = d.filesToRevert, o = d.intermediateFiles, a = d.foldersToDelete;
        } else {
            r = e;
            const u = new Set(r.activeInlineDiffs?.map((h)=>h.uri.toString()) ?? []), d = this.getUrisForCheckpoints(n);
            s = new Set(r.files.map((h)=>h.uri.toString()).filter((h)=>!u.has(h) && d.has(h)));
        }
        const l = Array.from(s).some((u)=>u.endsWith(".ipynb")), c = await this.getCurrentFilesContent(n.composerId, Array.from(s));
        for (const u of s){
            let d;
            if (r.files.some((p)=>p.uri.toString() === u)) d = r.files.find((p)=>p.uri.toString() === u);
            else {
                const p = o.get(u);
                p && (d = p.checkpoint.files.find((g)=>g.uri.toString() === u));
            }
            const h = c.get(u) || [];
            if (d) if (d.isNewlyCreated) {
                if (await this._composerFileService.exists({
                    uri: d.uri,
                    composerData: n
                })) return {
                    isSame: !1,
                    hasNotebookFiles: l
                };
            } else {
                if (!await this._composerFileService.exists({
                    uri: d.uri,
                    composerData: n
                })) return {
                    isSame: !1,
                    hasNotebookFiles: l
                };
                const p = await this._composerCodeBlockService.getCodeBlockLinesByDiff(t, d.uri, d.originalModelDiffWrtV0 ?? []) ?? [];
                if (!this.areContentsEqual(h, p ?? [])) return {
                    isSame: !1,
                    hasNotebookFiles: l
                };
            }
            else if (h.length > 0) return {
                isSame: !1,
                hasNotebookFiles: l
            };
        }
        if (i) {
            const u = this._composerDataService.getLoadedConversation(t), d = u.findIndex((h)=>h.bubbleId === e);
            if (d >= 0) {
                const h = n.currentBubbleId ? u.findIndex((g)=>g.bubbleId === n.currentBubbleId) : u.length, p = this._composerDataService.getComposerCapability(t, mo.TOOL_FORMER);
                for (const g of u.slice(d + 1, h >= 0 ? h : void 0)){
                    if (g.capabilityType !== mo.TOOL_FORMER) continue;
                    const f = p?.getBubbleData(g.bubbleId);
                    if (!f || f.tool !== Ct.TASK_V2 && f.tool !== Ct.TASK) continue;
                    const _ = f.additionalData?.subagentComposerId;
                    if (!_) continue;
                    const b = this._composerDataService.getHandleIfLoaded(_) ?? await this._composerDataService.getComposerHandleById(_).catch(()=>{}), y = b ? this._composerDataService.getComposerData(b) : void 0;
                    if (!y?.originalFileStates || Object.keys(y.originalFileStates).length === 0) continue;
                    const S = Object.keys(y.originalFileStates).filter((C)=>{
                        if (s.has(C)) return !1;
                        const T = rt.parse(C);
                        return T.scheme !== Ot.vscodeNotebookCell && !T.path.endsWith(".ipynb");
                    });
                    if (S.length === 0) continue;
                    for (const C of S)if (y.originalFileStates[C].isNewlyCreated && await this._composerFileService.exists({
                        uri: rt.parse(C),
                        composerData: n
                    })) return {
                        isSame: !1,
                        hasNotebookFiles: l
                    };
                    const k = S.filter((C)=>!y.originalFileStates[C].isNewlyCreated);
                    if (k.length > 0) {
                        await Promise.all(k.map((T)=>this._composerDataService.getOrLoadOfsContent(y.composerId, T)));
                        const C = await this.getCurrentFilesContent(n.composerId, k);
                        for (const T of k){
                            const I = C.get(T) || [], A = await this._composerDataService.getOrLoadOfsContent(y.composerId, T);
                            if (A === void 0) continue;
                            const P = ww(A);
                            if (!this.areContentsEqual(I, P)) return {
                                isSame: !1,
                                hasNotebookFiles: l
                            };
                        }
                    }
                }
            }
        }
        if (a.size > 0 || qqr(r) && r.nonExistentFiles.length > 0) return {
            isSame: !1,
            hasNotebookFiles: l
        };
        for (const u of r.activeInlineDiffs ?? []){
            const { uri: d, codeBlockId: h, originalTextDiffWrtV0: p, newTextDiffWrtV0: g } = u, f = this._inlineDiffService.inlineDiffs.nonReactive().find((y)=>y.uri.toString() === d.toString());
            if (!f) return {
                isSame: !1,
                hasNotebookFiles: l
            };
            const _ = h || void 0, b = f.composerMetadata?.codeblockId || void 0;
            if (_ !== b || n.composerId !== f.composerMetadata?.composerId) return {
                isSame: !1,
                hasNotebookFiles: l
            };
            if ("originalTextLines" in f && "newTextLines" in f) {
                const y = await this._composerCodeBlockService.getCodeBlockLinesByDiff(t, d, p ?? []), S = await this._composerCodeBlockService.getCodeBlockLinesByDiff(t, d, g ?? []);
                if (!y || !S || !this.areContentsEqual(y, f.originalTextLines) || !this.areContentsEqual(S, f.newTextLines)) return {
                    isSame: !1,
                    hasNotebookFiles: l
                };
            }
        }
        return {
            isSame: !0,
            hasNotebookFiles: l
        };
    }
    async getFilesToRevertForCheckpoint(t, e, n, i) {
        const r = this._composerDataService.getComposerData(t);
        if (!r) throw new Error("[composer] No composer found for the given handle");
        await this._composerDataService.loadConversationFromBubble(t, e);
        const s = new Set(i.activeInlineDiffs?.map((_)=>_.uri.toString()) ?? []), o = new Set, a = new Map;
        i.newlyCreatedFolders.forEach((_)=>{
            o.add(_.uri.toString());
        });
        const l = this._composerDataService.getLoadedConversation(t), c = l.findIndex((_)=>_.bubbleId === e) + 1, u = n ? l.findIndex((_)=>_.bubbleId === n) : l.length, d = l.slice(c, u).flatMap((_)=>_.checkpointId ? [
                _.checkpointId
            ] : []), h = new xI(Srs);
        let p;
        try {
            p = await Promise.all(d.map((_)=>h.queue(()=>this._composerCheckpointStorageService.retrieveCheckpoint(r.composerId, _))));
        } finally{
            h.dispose();
        }
        for (const _ of p)_ && (_.files.forEach((b)=>{
            const y = b.uri.toString();
            !i.files.some((S)=>S.uri.toString() === y) && !a.has(y) && !s.has(y) && a.set(y, {
                checkpoint: _
            });
        }), _.newlyCreatedFolders.forEach((b)=>{
            o.add(b.uri.toString());
        }));
        const g = this.getUrisForCheckpoints(r);
        return {
            filesToRevert: new Set([
                ...i.files.filter((_)=>!s.has(_.uri.toString())).map((_)=>_.uri.toString()),
                ...a.keys()
            ].filter((_)=>g.has(_))),
            intermediateFiles: a,
            foldersToDelete: o
        };
    }
    getUrisForCheckpoints(t) {
        if (t.isNAL) return new Set(Array.from(Object.keys(t.originalFileStates)).filter(((r)=>{
            const s = rt.parse(r);
            return s.scheme !== Ot.vscodeNotebookCell && !s.path.endsWith(".ipynb");
        })));
        const e = new Set;
        for (const r of Object.keys(t.codeBlockData))e.add(r);
        const n = this._composerDataService.getHandleIfLoaded(t.composerId), i = n ? this._composerDataService.getLoadedConversation(n) : [];
        for (const r of i)if (r.capabilityType === mo.TOOL_FORMER) {
            const s = n ? this._composerDataService.getComposerCapability(n, mo.TOOL_FORMER)?.getBubbleData(r.bubbleId) : void 0;
            if (s?.tool === Ct.DELETE_FILE && s.params?.relativeWorkspacePath) {
                const o = this._workspaceContextService.resolveRelativePath(s.params.relativeWorkspacePath);
                e.add(o.toString());
            }
        }
        return new Set(Array.from(e).filter(((r)=>{
            const s = rt.parse(r);
            return s.scheme !== Ot.vscodeNotebookCell && !s.path.endsWith(".ipynb");
        })));
    }
    areContentsEqual(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++)if (t[n] !== e[n]) return !1;
        return !0;
    }
    async getFileContentsGivenCheckpoint(t, e, n) {
        const i = n.toString(), r = e.activeInlineDiffs.find((a)=>a.uri.toString() === i), s = e.files.find((a)=>a.uri.toString() === i);
        let o = null;
        if (r && r.newTextDiffWrtV0) o = (await this._composerCodeBlockService.getCodeBlockLinesByDiff(t, n, r.newTextDiffWrtV0))?.join(`
`) ?? null;
        else if (s && s.originalModelDiffWrtV0) {
            if (s.isNewlyCreated && s.originalModelDiffWrtV0.length === 0) return null;
            o = (await this._composerCodeBlockService.getCodeBlockLinesByDiff(t, n, s.originalModelDiffWrtV0))?.join(`
`) ?? null;
        }
        return o;
    }
    async getFileContentsGivenBubbleId(t, e, n, i) {
        if (!t) return {
            case: "notFound"
        };
        const r = this._composerDataService.getComposerData(t);
        if (!r) return {
            case: "notFound"
        };
        const s = await Mpk(this._composerDataService, t, e);
        if (!s) return {
            case: "notFound"
        };
        let o = s.checkpointId;
        i?.isAfterCheckpoint && (o = s.afterCheckpointId);
        const a = o ? await this._composerCheckpointStorageService.retrieveCheckpoint(r.composerId, o) : void 0;
        if (!a) return {
            case: "notFound"
        };
        const l = await this.getFileContentsGivenCheckpoint(t, a, n);
        if (l === null) {
            const c = n.toString();
            return r.originalFileStates[c]?.isNewlyCreated ? {
                case: "isNewlyCreated"
            } : {
                case: "notFound"
            };
        }
        return {
            case: "contents",
            contents: l
        };
    }
    async updateComposerBubbleCheckpoint(t, e, n, i, r = Xs.None) {
        const s = Date.now(), o = `${t}:${e}:${n?.isAfterCheckpoint === !0 ? "after" : "before"}`, a = this._checkpointCaptureGuard.bump(o), l = ()=>a.isCurrent() && !r.isCancellationRequested && n?.shouldContinue?.() !== !1;
        try {
            if (!l()) throw new Hc;
            const c = await this.createCurrentCheckpoint(t, void 0, e, i, r);
            await this._checkpointCommitSequencer.queue(o, async ()=>{
                if (!l()) throw new Hc;
                const u = this._composerDataService.getHandleIfLoaded(t);
                if (!u) throw new Hc;
                await this._composerDataService.updateComposerBubbleCheckpoint(u, e, c, {
                    isAfterCheckpoint: n?.isAfterCheckpoint ?? !1,
                    shouldCommit: l
                }, i);
            });
        } finally{
            a.isCurrent() && this._checkpointCaptureGuard.delete(o);
            const c = Date.now();
            this._composerLogService.debug(`[composer.checkpoint] Updated composer bubble checkpoint for composer ${t} in ${c - s}ms`);
        }
    }
    async updateLastCheckpointWithFileIfNotTracked(t, e, n) {
        if (!t) return;
        const i = t.data.composerId, r = this._composerDataService.getLastBubbleWhere(t, (o)=>!!o.checkpointId), s = r?.checkpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(i, r.checkpointId) : void 0;
        if (!e.path.endsWith(".ipynb") && r) {
            const o = s?.files.some((l)=>l.uri.toString() === e.toString()) || s?.activeInlineDiffs.some((l)=>l.uri.toString() === e.toString());
            let a = [
                " "
            ];
            if (!o) {
                if (n?.forceModelContent) a = n.forceModelContent;
                else {
                    let u;
                    try {
                        const d = t.data;
                        u = await this.composerTextModelService.createModelReference(e, d, !0), a = u.object.textEditorModel.getLinesContent();
                    } finally{
                        u?.dispose();
                    }
                }
                const l = await this._composerCodeBlockService.computeLineDiffs(t, e, a), c = [
                    "conversationMap",
                    r.bubbleId,
                    "checkpointId"
                ];
                if (s === void 0) {
                    const u = Vqr(), d = await this._composerCheckpointStorageService.storeCheckpoint(i, u);
                    this._composerDataService.updateComposerDataSetStore(t, (h)=>h(...c, d));
                }
                if (r?.checkpointId) {
                    const u = r.checkpointId;
                    await this._composerCheckpointStorageService.updateCheckpoint(i, u, (d)=>{
                        d.files.push({
                            uri: e,
                            originalModelDiffWrtV0: l,
                            isNewlyCreated: n?.isNewlyCreated ?? !1
                        }), d.newlyCreatedFolders.push(...n?.newlyCreatedFolders ?? []);
                    });
                }
            }
        }
    }
}, Re([
    aa("ComposerCheckpointService.getCurrentFilesContent")
], ble.prototype, "getCurrentFilesContent", null), Re([
    aa("ComposerCheckpointService.createCheckoutCallback")
], ble.prototype, "createCheckoutCallback", null), Re([
    aa("ComposerCheckpointService.createCheckoutCallbackWithInlineDiffs")
], ble.prototype, "createCheckoutCallbackWithInlineDiffs", null), Re([
    aa("ComposerCheckpointService.checkoutToCheckpoint")
], ble.prototype, "checkoutToCheckpoint", null), Re([
    aa("ComposerCheckpointService.checkoutToLatest")
], ble.prototype, "checkoutToLatest", null), Re([
    aa("ComposerCheckpointService.createCurrentCheckpoint")
], ble.prototype, "createCurrentCheckpoint", null), Re([
    aa("ComposerCheckpointService.validateCheckpointContent")
], ble.prototype, "validateCheckpointContent", null), Re([
    aa("ComposerCheckpointService.getFilesToRevertForCheckpoint")
], ble.prototype, "getFilesToRevertForCheckpoint", null), Re([
    aa("ComposerCheckpointService.getUrisForCheckpoints")
], ble.prototype, "getUrisForCheckpoints", null), Re([
    aa("ComposerCheckpointService.areContentsEqual")
], ble.prototype, "areContentsEqual", null), Re([
    aa("ComposerCheckpointService.getFileContentsGivenCheckpoint")
], ble.prototype, "getFileContentsGivenCheckpoint", null), Re([
    aa("ComposerCheckpointService.getFileContentsGivenBubbleId")
], ble.prototype, "getFileContentsGivenBubbleId", null), ble = Re([
    F(0, no),
    F(1, dn),
    F(2, dG),
    F(3, Dw),
    F(4, UO),
    F(5, sa),
    F(6, HCe),
    F(7, Qr),
    F(8, yr),
    F(9, nr),
    F(10, AWt),
    F(11, Kbe),
    F(12, Vf),
    F(13, Rh),
    F(14, fie),
    F(15, wh),
    F(16, w1)
], ble), bn(mat, ble, 1);

}
