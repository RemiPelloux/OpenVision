import { Di, Ec, Gt, Nt, Qe, Vn, _r, st, tt } from "./Iwo.js";
import { NP0, RP0 } from "./XRv.js";
import { IPi, KPi, qhl } from "./Ycg.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { qn } from "./async.js";
import { jm, kXt } from "./command-ids.js";
import { Hn } from "./dom_2.js";
import { Cr, _s } from "./experimentService.js";
import { Zq } from "./files.js";
import { Vc, yp } from "./glass-command-service.js";
import { hv, t_ } from "./glass-file-service.js";
import { GT, R2 } from "./glass-keybinding-router-service.js";
import { PP0 } from "./glass-markdown-preview-view-state.js";
import { FA } from "./glass-side-chat-utils.js";
import { Nu, xc } from "./glass-storage-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { Kpe } from "./glassCommandIds.js";
import { Gv, Oys } from "./glassContextKeys.js";
import { It, dn } from "./instantiation.js";
import { DP0, PPs } from "./markdown-pr-rich-link-presentation.js";
import { MVt } from "./markdownEditorEligibility.js";
import { fG, pRn } from "./markdownEditorInput.js";
import { Kat, OP, Vat } from "./markdownEditorModeService.js";
import { Ujl, eXf } from "./renderMarkdownEditor.react.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { kS } from "./yBp.js";
import { li } from "./ze.js";
var ytc, Stc, s8e, A2v, R2v, P2v, V6;
export { A2v, P2v, R2v, Stc, V6, s8e, ytc };
var __wakaru_LP0_initialized = false;
export function LP0() {
if (__wakaru_LP0_initialized) return;
__wakaru_LP0_initialized = true;
"use strict";
E(), Hn(), qn(), Gt(), Qe(), Di(), fn(), It(), MVt(), pRn(), Kat(), eXf(), wl(), Hv(), _s(), dv(), Gv(), jm(), FA(), yp(), hv(), R2(), xc(), xd(), PP0(), DP0(), ytc = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), Stc = (t)=>{
    throw TypeError(t);
}, s8e = (t, e)=>(n, i)=>e(n, i, t), A2v = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && Stc("Object expected");
        var i, r;
        n && (i = e[ytc("asyncDispose")]), i === void 0 && (i = e[ytc("dispose")], n && (r = i)), typeof i != "function" && Stc("Object not disposable"), r && (i = function() {
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
}, R2v = (t, e, n)=>{
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
}, P2v = 2e3, V6 = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this._handle = t, this._tabId = e, this._instantiationService = n, this._fileService = i, this._markdownModeService = r, this._experimentService = s, this._keybindingRouterService = o, this._commandService = a, this._activeAgentService = l, this._agentRepositoryService = c, this._storageService = u, this._onDidChangeMarkdownUi = this._register(new tt), this._onDidChangeRichTextEditor = this._register(new tt), this._fileChangeListener = this._register(new Vn), this._previewViewStateTracking = this._register(new Vn), this._richTextEditor = null, this._flushEnqueued = !1, this._formattingSelectionActive = !1, this._viewStateKeyPrefix = IPi(Vd.FILE_TAB_MARKDOWN_PREVIEW_VIEW_STATE, d.getWorkspace().id), V6._surfaceByTabId.set(this._tabId, this), this._register(this._markdownModeService.onDidModeChange((h)=>{
            const p = this._getMarkdownResource();
            p && h.uri.toString() === p.toString() && (this._maybeNotifySnapshotChanged(), this._queueFlush());
        }));
    }
    static _runAfterChain(t, e) {
        const r = (V6._mountChains.get(t) ?? Promise.resolve()).then(e).catch((s)=>{
            console.error("[Glass markdown preview]", s);
        }).finally(()=>{
            V6._mountChains.get(t) === r && V6._mountChains.delete(t);
        });
        return V6._mountChains.set(t, r), r;
    }
    _isAskSideChatAvailable() {
        var t = [];
        try {
            if (!this._experimentService.checkFeatureGate("glass_side_chats", {
                disableExposureLog: !0
            })) return !1;
            const i = this._activeAgentService.getActiveAgentId();
            if (!i) return !1;
            const r = A2v(t, this._agentRepositoryService.getAgent(i));
            return r !== void 0 && r.header.source !== "draft" && r.header.source !== "cloud" && !kS(r.header) && KPi(r.composerDataHandle.data);
        } catch (i) {
            var e = i, n = !0;
        } finally{
            R2v(t, e, n);
        }
    }
    dispose() {
        this._setFormattingSelectionActive(!1), V6._surfaceByTabId.delete(this._tabId);
        const t = this._lastMountedMarkdownResourceKey ?? this._getMarkdownResource()?.toString();
        V6._runAfterChain(this._tabId, async ()=>{
            await this._teardownWysiwygOverlay(t);
        }), super.dispose();
    }
    subscribeMarkdownUi(t) {
        return this._onDidChangeMarkdownUi.event(t);
    }
    subscribeRichTextEditor(t) {
        return this._onDidChangeRichTextEditor.event(t);
    }
    getRichTextEditor() {
        return this._richTextEditor;
    }
    _setRichTextEditor(t) {
        this._richTextEditor !== t && (this._richTextEditor = t, this._onDidChangeRichTextEditor.fire());
    }
    getMarkdownUiSnapshot() {
        const t = this._computeUiSnapshot(), e = this._cachedUiSnapshotForExternalStore;
        return e !== void 0 && this._snapshotsEqual(e, t) ? e : (this._cachedUiSnapshotForExternalStore = t, t);
    }
    isPreviewAvailableForFind() {
        const t = this._rendererInput;
        return !t?.isActiveTab || !t.hostElement ? !1 : this._handle.isEditorOverlayActive && this._computeUiSnapshot().showPreview;
    }
    syncRendererLayout(t) {
        this._rendererInput = t, (!t.isActiveTab || !this.computeUiSnapshotFor(t.filePath, t.editorType).showPreview) && this._setFormattingSelectionActive(!1), this._maybeNotifySnapshotChanged(), this._queueFlush();
    }
    reactEffectCleanup() {
        const t = this._getMarkdownResource()?.toString();
        V6._runAfterChain(this._tabId, async ()=>{
            this._store.isDisposed || await this._teardownWysiwygOverlay(t);
        });
    }
    async setHeaderMode(t) {
        const e = this._getMarkdownResource();
        if (!e) return;
        const n = t === "rich" ? OP.RICH : OP.RAW;
        if (this._handle.flushOverlayPendingContent(), n === OP.RICH) this._markdownModeService.setMode(e, OP.RICH);
        else {
            this._setFormattingSelectionActive(!1);
            const i = this._lastMountedHost;
            i && (i.style.display = "none"), this._markdownModeService.setMode(e, OP.RAW);
        }
    }
    _maybeNotifySnapshotChanged() {
        const t = this._computeUiSnapshot();
        this._snapshotsEqual(this._lastNotifiedSnapshot, t) || (this._lastNotifiedSnapshot = t, this._onDidChangeMarkdownUi.fire());
    }
    _snapshotsEqual(t, e) {
        return t ? t.filePath === e.filePath && t.editorType === e.editorType && t.showPreview === e.showPreview && t.showModeSwitcher === e.showModeSwitcher && t.headerMode === e.headerMode : !1;
    }
    _queueFlush() {
        this._flushEnqueued || (this._flushEnqueued = !0, V6._runAfterChain(this._tabId, async ()=>{
            this._flushEnqueued = !1, !this._store.isDisposed && this._flushMountAndWatcher();
        }));
    }
    _computeUiSnapshot() {
        return this.computeUiSnapshotFor(this._rendererInput?.filePath, this._rendererInput?.editorType ?? "code");
    }
    computeUiSnapshotFor(t, e) {
        const n = this._parseResource(t), i = this._computeShowModeSwitcher(n, e), r = this._getMarkdownMode(n), s = i && r === OP.RICH, o = r === OP.RICH ? "rich" : "raw";
        return {
            filePath: t,
            editorType: e,
            showPreview: s,
            showModeSwitcher: i,
            headerMode: o
        };
    }
    _getMarkdownResource() {
        return this._parseResource(this._rendererInput?.filePath);
    }
    _parseResource(t) {
        if (t) try {
            return rt.parse(t);
        } catch  {
            return;
        }
    }
    _computeShowModeSwitcher(t, e) {
        return !t || e !== "code" ? !1 : qhl(t);
    }
    _getMarkdownMode(t) {
        return t ? this._markdownModeService.getMode(t, {
            defaultWhenUnset: OP.RICH
        }) : OP.RICH;
    }
    _viewStateKey(t) {
        return `${this._viewStateKeyPrefix}/${t}`;
    }
    _trackPreviewViewState(t, e) {
        const n = new Nt;
        return n.add(li(t, "scroll", ()=>{
            t.checkVisibility() && (this._capturedViewState = e.getViewState?.());
        }, {
            capture: !0,
            passive: !0
        })), this._previewViewStateTracking.value = n, n;
    }
    _persistCapturedViewState() {
        const t = this._lastMountedMarkdownResourceKey, e = this._capturedViewState;
        this._capturedViewState = void 0, !(t === void 0 || e === void 0) && this._storageService.store(this._viewStateKey(t), JSON.stringify(e), io.APPLICATION, Wg.MACHINE);
    }
    async _teardownWysiwygOverlay(t) {
        this._setFormattingSelectionActive(!1), t !== void 0 && V6._ownerByResource.get(t) === this._tabId && V6._ownerByResource.delete(t), this._previewViewStateTracking.clear(), this._persistCapturedViewState(), this._lastMountedMarkdownResourceKey = void 0, this._lastMountedHost = void 0, this._setRichTextEditor(null), this._handle.isEditorOverlayActive && (this._handle.flushOverlayPendingContent(), await this._handle.detachOverlay({
            revertMonaco: !1
        }));
    }
    _mayStillOwnResource(t) {
        if (this._lastMountedMarkdownResourceKey === t) return !0;
        const e = this._getMarkdownResource();
        return !e || e.toString() !== t ? !1 : this._handle.isEditorOverlayActive || this._computeUiSnapshot().showPreview;
    }
    _flushMountAndWatcher() {
        const t = this._computeUiSnapshot(), e = this._getMarkdownResource(), n = this._rendererInput, i = n?.isActiveTab ?? !1, r = n?.hostElement ?? null;
        if (this._fileChangeListener.clear(), t.showPreview && e && i && (this._fileChangeListener.value = this._fileService.onDidFilesChange(async (s)=>{
            this._store.isDisposed || s.contains(e, Zq.UPDATED) && (this._handle.flushOverlayPendingContent(), this._handle.getSnapshot().isDirty || await this._handle.revert());
        })), t.showPreview && e && i && r) {
            const s = e, o = r;
            V6._runAfterChain(this._tabId, async ()=>{
                if (this._store.isDisposed || !this._isMountScenarioStillActive(s, o)) return;
                o.style.display = "";
                const a = s.toString();
                if (this._handle.isEditorOverlayActive) {
                    if (this._lastMountedMarkdownResourceKey === a && this._lastMountedHost === o) return;
                    const h = this._lastMountedMarkdownResourceKey;
                    if (await this._teardownWysiwygOverlay(h), !this._isMountScenarioStillActive(s, o)) return;
                }
                const l = V6._ownerByResource.get(a);
                if (l && l !== this._tabId) {
                    if (V6._surfaceByTabId.get(l)?._mayStillOwnResource(a)) return;
                    V6._ownerByResource.delete(a);
                }
                V6._ownerByResource.set(a, this._tabId);
                let c, u;
                try {
                    o.replaceChildren(), o.style.removeProperty("display"), o.style.removeProperty("visibility"), c = this._instantiationService.createInstance(fG, s), u = this._instantiationService.createInstance(PPs);
                    const d = Ujl(o, this._instantiationService, c, {
                        subscribeMonacoModelChanges: !1,
                        enableFrontmatterUi: !0,
                        fileIconVariant: "cursor-mixed",
                        linkContextMenu: !0,
                        onAskAgent: (f)=>{
                            this._commandService.executeCommand(Kpe, {
                                markdownPreviewSelection: {
                                    text: f,
                                    uri: s.toJSON()
                                }
                            });
                        },
                        onAskSideChat: (f)=>{
                            this._commandService.executeCommand(kXt, {
                                markdownPreviewSelection: {
                                    text: f,
                                    uri: s.toJSON()
                                }
                            });
                        },
                        askSideChatAvailable: this._isAskSideChatAvailable(),
                        askAgentShortcut: _r ? "\u2318L" : "Ctrl+L",
                        onEditableTextSelectionFocusChange: (f)=>{
                            this._isMountScenarioStillActive(s, o) && this._setFormattingSelectionActive(f);
                        },
                        onEditorReady: (f)=>{
                            f && this._setRichTextEditor(f);
                        },
                        richLinkPresentationProvider: u,
                        rootWorkspaceServices: this._rendererInput?.rootWorkspaceServices
                    }), h = {
                        dispose: ()=>{
                            u?.dispose(), (o.ownerDocument.defaultView ?? globalThis).setTimeout(()=>{
                                d.dispose();
                            }, 0), c.dispose();
                        },
                        isDirty: ()=>c.isDirty(),
                        flushPendingContent: ()=>{
                            d.flushPendingContent?.();
                        },
                        save: async ()=>(await c.save(0, {}), !0),
                        revert: async ()=>{
                            await NP0(c, d.reload);
                        },
                        focus: ()=>d.focus(),
                        selectAll: ()=>d.selectAll?.(),
                        onDidChangeDirty: c.onDidChangeDirty
                    };
                    this._handle.attachOverlay(h), this._lastMountedMarkdownResourceKey = a, this._lastMountedHost = o;
                    const p = this._trackPreviewViewState(o, d), g = RP0(this._storageService.get(this._viewStateKey(a), io.APPLICATION));
                    if (g) {
                        o.style.visibility = "hidden";
                        const f = ()=>{
                            p.isDisposed || o.style.removeProperty("visibility");
                        };
                        d.setViewState?.(g).then(f), p.add(Ec(f, P2v));
                    }
                } catch (d) {
                    throw V6._ownerByResource.get(a) === this._tabId && V6._ownerByResource.delete(a), u?.dispose(), c?.dispose(), d;
                }
            });
        } else V6._runAfterChain(this._tabId, async ()=>{
            this._store.isDisposed || await this._teardownWysiwygOverlay(this._getMarkdownResource()?.toString());
        });
    }
    _isMountScenarioStillActive(t, e) {
        const n = this._computeUiSnapshot(), i = this._getMarkdownResource(), r = this._rendererInput;
        return !n.showPreview || !r?.isActiveTab || !i || i.toString() !== t.toString() ? !1 : r.hostElement === e;
    }
    _setFormattingSelectionActive(t) {
        this._formattingSelectionActive !== t && (this._formattingSelectionActive = t, this._keybindingRouterService.setContext(Oys.key, t));
    }
}, V6._mountChains = new Map, V6._ownerByResource = new Map, V6._surfaceByTabId = new Map, V6 = Re([
    s8e(2, dn),
    s8e(3, t_),
    s8e(4, Vat),
    s8e(5, Cr),
    s8e(6, GT),
    s8e(7, Vc),
    s8e(8, vm),
    s8e(9, ma),
    s8e(10, Nu),
    s8e(11, F_)
], V6);

}
