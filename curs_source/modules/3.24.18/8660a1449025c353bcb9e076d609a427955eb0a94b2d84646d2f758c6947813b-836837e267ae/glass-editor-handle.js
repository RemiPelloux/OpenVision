import { HIs, LLn, u5i } from "./Asv.js";
import { Gt, Nt, Pn, Qe, Vn, Zm, m4, st, tt } from "./Iwo.js";
import { tR } from "./SZu.js";
import { VRv } from "./WRv.js";
import { EP0, EPs, ktc, xP0 } from "./XRv.js";
import { AEf, EEf, IEf, IPi, KTk, Klw, MEf, qhl, xEf, xye } from "./Ycg.js";
import { bo } from "./arrays.js";
import { Ebe, c_ } from "./async.cursor.js";
import { Yu, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { BQ, oRe } from "./diffEditorWidget.js";
import { Hn, ws } from "./dom_2.js";
import { K0r, V0r } from "./elementSizeObserver.js";
import { Cr, _s } from "./experimentService.js";
import { O6t, Zq } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { RPs, k2v } from "./glass-code-font-weights.js";
import { aw, vN } from "./glass-context-key-service.js";
import { $G, bU } from "./glass-diff-service.js";
import { fYe, pJt } from "./glass-display-service.js";
import { xPs } from "./glass-display-utils.js";
import { UZl, Zwv, qRs, xRt } from "./glass-editor-constants.js";
import { IP0 } from "./glass-editor-save-participants.js";
import { Dme, FEf, ice } from "./glass-editor-service.types.js";
import { hv, t_ } from "./glass-file-service.js";
import { Jye, ege } from "./glass-language-service.js";
import { AP0 } from "./glass-large-file-gate-config.js";
import { Zu, eu } from "./glass-log-service.js";
import { LP0, V6 } from "./glass-markdown-wysiwyg-surface.js";
import { OP0 } from "./glass-pdf-preview-routing.js";
import { ADf, VXt, j5l } from "./glass-reveal-file-in-os.js";
import { Nu, xc } from "./glass-storage-service.js";
import { YRv } from "./glass-tex-preview-eligibility.js";
import { AXt, Mxt } from "./glass-text-model-service.js";
import { d5i, sRt } from "./glass-viewable-media.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Gv, Pxt } from "./glassContextKeys.js";
import { Xy } from "./hash.js";
import { It, dn } from "./instantiation.js";
import { MVt } from "./markdownEditorEligibility.js";
import { tB } from "./mime.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { US0 } from "./ofv.js";
import { LKe, T$l } from "./quickDiffDecorator.js";
import { O2n, Tlt } from "./quickDiffModel.js";
import { Qs, qt } from "./range.js";
import { Aa, Lr, XR } from "./resources.js";
import { Cy, bu } from "./selection.js";
import { fW, vW } from "./serviceCollection.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { Vf, mXr, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { M9e, P9e } from "./untitledTextEditorService.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { gX, vCe } from "./webConstants.js";
import { KTn } from "./yBp.js";
import { v5e, y7 } from "./ze.js";
var C6i, M2v, ige;
export { C6i, M2v, ige };
var __wakaru_D2v_initialized = false;
export function D2v() {
if (__wakaru_D2v_initialized) return;
__wakaru_D2v_initialized = true;
"use strict";
E(), AXt(), Jye(), Hn(), vCe(), bo(), c_(), qn(), yo(), Gt(), Xy(), Qe(), tB(), Ki(), Lr(), fn(), K0r(), boe(), oRe(), Qs(), Cy(), xp(), It(), vW(), MVt(), T$l(), O2n(), _s(), YI(), u_(), M9e(), YRv(), dv(), Gv(), $G(), pJt(), xPs(), k2v(), aw(), VXt(), hv(), Zu(), xc(), xd(), qRs(), IP0(), Dme(), AP0(), LP0(), OP0(), sRt(), C6i = class zsn {
    constructor(e){
        this._doc = e, this._shadows = new Set, this._sheets = [], this._mirroredSheetByOwner = new Map, this._rulesByOwner = new Map, this._headChangedWhileDormant = !1, this._deferImmediateRebuild = !1, this._listeners = new Nt, this._pendingRebuild = this._listeners.add(new Vn), m4(this._listeners), this._scheduler = new Yu(()=>this._rebuild(), 150), this._listeners.add(this._scheduler);
        const n = e.defaultView;
        if (n) {
            const i = new n.MutationObserver((s)=>{
                if (this._shadows.size === 0) {
                    this._headChangedWhileDormant = !0;
                    return;
                }
                let o = !1, a = !1;
                const l = new Set;
                for (const c of s){
                    const u = this._styleElementForContentMutation(c);
                    u ? l.add(u) : (o = !0, a ||= this._mutationAddsOrRemovesStyle(c));
                }
                if (a) {
                    this._deferImmediateRebuild ? (this._pendingRebuild.clear(), this._scheduler.schedule(0)) : this._rebuild();
                    return;
                }
                for (const c of l)this._refreshMirroredStyleElement(c) || (o = !0);
                o && this._scheduler.schedule();
            });
            i.observe(e.head, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0,
                attributeFilter: [
                    "href",
                    "media",
                    "disabled"
                ]
            }), this._observer = i, this._listeners.add(Pn(()=>i.disconnect()));
            const r = (s)=>{
                const o = s.target;
                o && (o.tagName === "LINK" || o.tagName === "STYLE") && (this._shadows.size === 0 ? this._headChangedWhileDormant = !0 : this._scheduler.schedule());
            };
            e.addEventListener("load", r, !0), this._listeners.add(Pn(()=>e.removeEventListener("load", r, !0)));
        }
    }
    static register(e, n, i = !1) {
        let r = zsn._perDocument.get(n);
        return r || (r = new zsn(n), zsn._perDocument.set(n, r)), r._deferImmediateRebuild = i, r._add(e);
    }
    _add(e) {
        const n = this._shadows.size === 0;
        return this._shadows.add(e), n && this._observer && this._observer.takeRecords().length > 0 && (this._headChangedWhileDormant = !0), this._apply(e), (this._sheets.length === 0 || this._headChangedWhileDormant) && (this._headChangedWhileDormant = !1, this._scheduler.schedule(0)), Pn(()=>{
            this._shadows.delete(e);
            try {
                e.adoptedStyleSheets = [];
            } catch  {}
            this._shadows.size === 0 && (this._deferImmediateRebuild = !1, this._scheduler.isScheduled() && (this._scheduler.cancel(), this._headChangedWhileDormant = !0), this._pendingRebuild.value && (this._pendingRebuild.clear(), this._headChangedWhileDormant = !0));
        });
    }
    _rebuild() {
        this._scheduler.cancel(), this._pendingRebuild.clear();
        const e = this._doc.defaultView, n = e?.CSSStyleSheet;
        if (!e || !n) return;
        const i = Array.from(this._doc.styleSheets), r = [], s = new Map, o = new Map;
        let a = 0;
        const l = (c)=>{
            this._pendingRebuild.clear();
            const u = new Ebe(zsn._REBUILD_SLICE_BUDGET_MS);
            for(; a < i.length;){
                const d = i[a++], h = d.ownerNode, p = zsn._rules(d), g = h ? this._mirroredSheetByOwner.get(h) : void 0;
                if (h && g && p && Zm(this._rulesByOwner.get(h), p)) {
                    r.push(g), s.set(h, g), o.set(h, p);
                    continue;
                }
                const f = this._readStyleSheet(d);
                if (f !== void 0) {
                    try {
                        const _ = g ?? new n;
                        _.replaceSync(f), r.push(_), h && (s.set(h, _), p && o.set(h, p));
                    } catch  {}
                    if (a < i.length && (u.shouldYield() || c !== void 0 && !c.didTimeout && c.timeRemaining() <= 0)) {
                        this._pendingRebuild.value = y7(e, l, zsn._REBUILD_SLICE_IDLE_TIMEOUT_MS);
                        return;
                    }
                }
            }
            this._sheets = r, this._mirroredSheetByOwner = s, this._rulesByOwner = o;
            for (const d of this._shadows)this._apply(d);
        };
        l();
    }
    static _rules(e) {
        try {
            return Array.from(e.cssRules);
        } catch  {
            return;
        }
    }
    _styleElementForContentMutation(e) {
        if (e.type !== "childList" && e.type !== "characterData") return;
        const i = (e.target.nodeType === Node.ELEMENT_NODE ? e.target : e.target.parentElement)?.closest("style");
        return i && this._isStyleElement(i) && i.ownerDocument === this._doc ? i : void 0;
    }
    _mutationAddsOrRemovesStyle(e) {
        return [
            ...e.addedNodes,
            ...e.removedNodes
        ].some((n)=>this._isStyleElement(n));
    }
    _isStyleElement(e) {
        const n = this._doc.defaultView?.HTMLStyleElement;
        return n !== void 0 && e instanceof n;
    }
    _refreshMirroredStyleElement(e) {
        const n = this._mirroredSheetByOwner.get(e);
        if (!n) return !1;
        try {
            return n.replaceSync(e.textContent ?? ""), !0;
        } catch  {
            return !1;
        }
    }
    _readStyleSheet(e) {
        let n;
        try {
            n = e.cssRules;
        } catch  {
            return;
        }
        const i = [];
        for (const r of Array.from(n)){
            const s = r.cssText;
            s.startsWith("@import") || i.push(s);
        }
        return i.join(`
`);
    }
    _apply(e) {
        try {
            e.adoptedStyleSheets = this._sheets;
        } catch  {}
    }
}, C6i._perDocument = new WeakMap, C6i._REBUILD_SLICE_BUDGET_MS = 8, C6i._REBUILD_SLICE_IDLE_TIMEOUT_MS = 16, M2v = C6i, ige = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _){
        super(), this._instantiationService = e, this._textModelService = n, this._textFileService = i, this._untitledTextEditorService = r, this._languageService = s, this._fileService = o, this._modelService = a, this._storageService = l, this._filesConfigurationService = c, this._logService = u, this._contextKeyService = d, this._workspaceContextService = h, this._glassDiffService = p, this._glassDisplayService = g, this._quickDiffModelService = f, this._experimentService = _, this._editorScope = new Vn, this._listeners = new Set, this._snapshot = FEf, this._requestedEditorType = "code", this._requestedViewType = "fixed", this._requestedDiffScope = "unstaged", this._isReadOnly = !1, this._latestModelHandle = this._register(new Vn), this._originalModelHandle = this._register(new Vn), this._dirtyListener = this._register(new Vn), this._autoSaveListener = this._register(new Vn), this._saveParticipantsCancellation = this._register(new Vn), this._autoSaveScheduler = this._register(new Yu(()=>{
            this._runAutoSave();
        }, ige._LOCAL_AUTO_SAVE_DELAY_MS)), this._scrollListener = this._register(new Vn), this._unstagedStatusListener = this._register(new Vn), this._diffContentListener = this._register(new Vn), this._contentHeightListener = this._register(new Vn), this._imageFileWatcher = this._register(new Vn), this._currentFileWatcher = this._register(new Vn), this._providerWait = this._register(new Vn), this._quickDiffDecorator = this._register(new Vn), this._onContentHeightChanged = this._register(new tt), this.onContentHeightChanged = this._onContentHeightChanged.event, this._onEditorScrollChanged = this._register(new tt), this.onEditorScrollChanged = this._onEditorScrollChanged.event, this._sizeObserverListener = this._register(new Vn), this._shadowStyleMirrorDispose = this._register(new Vn), this._isDirty = !1, this._setFileVersion = 0, this._largeFileGateOverrides = new Set, this._mediaSourceVersion = 0, this._pdfBytesGeneration = 0, this._overlayDirtyListener = this._register(new Vn), this.containerRef = (b)=>{
            if (b) return this.attachToContainer(b), ()=>{
                this.detachFromContainer();
            };
        }, this.tabId = t.tabId ?? "", this.markdownWysiwygSurface = this._register(this._instantiationService.createInstance(V6, this, this.tabId)), this._requestedEditorType = t.editorType ?? this._requestedEditorType, this._requestedViewType = t.viewType ?? this._requestedViewType, this._requestedDiffScope = t.diffScope ?? this._requestedDiffScope, this._forceAutoSave = t.forceAutoSave ?? !1, this._viewStateKeyPrefix = IPi(Vd.FILE_TAB_VIEW_STATE, this._workspaceContextService.getWorkspace().id), this._editorPrefs = this._readEditorPreferences(), this._keybindingStyleKey = this._contextKeyService.createKey("glassKeybindingStyle", this._editorPrefs.keybindings), this._register(this._storageService.onDidChangeValue(io.APPLICATION, Vd.EDITOR_PREFERENCES, this._store)(()=>{
            const b = this._editorPrefs.keybindings;
            this._editorPrefs = this._readEditorPreferences(), this._updateEditorOptions(), this._installAutoSaveListener();
            const y = this._editorPrefs.keybindings;
            b !== y && this._keybindingStyleKey.set(y);
        })), this._register(this._glassDisplayService.onDidChange(()=>{
            this._updateEditorOptions();
        })), this._register(this._experimentService.onDidChangeGates((b)=>{
            (!b.changedGates || b.changedGates.has("glass_editor_shadow_isolation")) && this._onShadowIsolationGateChanged();
        })), this._register(this._filesConfigurationService.onDidChangeAutoSaveConfiguration(()=>{
            this._installAutoSaveListener();
        })), this._syncUnstagedStatusListener(), this._syncDiffContentListener();
    }
    _viewStateKey(t) {
        return `${this._viewStateKeyPrefix}/${t}`;
    }
    get _isDisposed() {
        return this._store.isDisposed;
    }
    _relativePath(t) {
        const e = this._workspaceContextService.getWorkspace().folders[0]?.uri;
        if (!(!e || !t || !t.path.startsWith(`${e.path}/`))) return t.path.slice(e.path.length + 1);
    }
    getSnapshot() {
        return this._snapshot;
    }
    getPdfBytes() {
        return this._pdfBytes;
    }
    subscribe(t, e) {
        const n = (i)=>{
            i.type === t && e(i.payload);
        };
        return this._listeners.add(n), ()=>{
            this._listeners.delete(n);
        };
    }
    subscribeAll(t) {
        return this._listeners.add(t), ()=>{
            this._listeners.delete(t);
        };
    }
    syncEditorType(t) {
        t !== this._requestedEditorType && (this._requestedEditorType = t, this._syncUnstagedStatusListener(), this._syncDiffContentListener(), this._container && (this._teardownEditor(), this._buildActiveEditor(), this._reloadCurrentFile()));
    }
    syncDiffScope(t) {
        t !== this._requestedDiffScope && (this._requestedDiffScope = t, this._syncUnstagedStatusListener(), this._syncDiffContentListener(), this._requestedEditorType === "diff" && (this._rebuildDiffModelReferencesForCurrentFile(), this.touch()));
    }
    syncViewType(t) {
        this._requestedViewType = t;
    }
    layout() {
        this._isDisposed || this._layout();
    }
    async touch() {
        if (!(!this._container || this._requestedViewType !== "inline")) {
            if (this._editor?.type !== "diff") {
                this._layout();
                return;
            }
            await this._editor.widget.waitForDiff(), !(this._isDisposed || this._requestedViewType !== "inline" || this._editor?.type !== "diff") && (this._editor.widget.collapseAllUnchangedRegions(), this._layout());
        }
    }
    setEditorScrollTop(t) {
        !this._editor || this._requestedViewType !== "inline" || (this._editor.type === "diff" ? this._editor.widget.getModifiedEditor().setScrollTop(t) : this._editor.widget.setScrollTop(t));
    }
    scrollEditorHorizontallyBy(t) {
        if (!this._editor || this._requestedViewType !== "inline" || !Number.isFinite(t) || t === 0) return !1;
        if (this._editor.type === "diff") {
            const n = this._editor.widget.getOriginalEditor(), i = this._editor.widget.getModifiedEditor(), r = Math.max(0, n.getContentWidth() - n.getLayoutInfo().contentWidth), o = Math.max(0, i.getContentWidth() - i.getLayoutInfo().contentWidth) > r ? i : n, a = o.getScrollLeft();
            return o.setScrollLeft(a + t), o.getScrollLeft() !== a;
        }
        const e = this._editor.widget.getScrollLeft();
        return this._editor.widget.setScrollLeft(e + t), this._editor.widget.getScrollLeft() !== e;
    }
    attachToContainer(t) {
        if (this._isDisposed) return;
        const e = this._resolveEffectiveContainer(t);
        if (this._container === e && this._editor) {
            this._layout();
            return;
        }
        if (this._container && this._container !== e && this._detach(), this._container = e, this._buildActiveEditor(), this._editor?.type === "code" && this._currentUri) {
            const n = this._latestModelHandle.value?.object.textEditorModel;
            n ? this._attachCodeModel({
                model: n,
                filePath: this._currentUri.toString(),
                focus: !1
            }) : this._providerWait.value || (this._latestModelHandle.clear(), this._reloadCurrentFile());
        } else if (this._editor?.type === "diff" && this._currentUri) {
            const n = this._latestModelHandle.value?.object.textEditorModel, i = this._originalModelHandle.value?.object.textEditorModel;
            n && i ? this._attachDiffModel({
                modifiedModel: n,
                originalModel: i,
                filePath: this._currentUri.toString(),
                version: this._setFileVersion
            }) : (this._latestModelHandle.clear(), this._originalModelHandle.clear(), this._reloadCurrentFile());
        }
    }
    detachFromContainer() {
        this._isDisposed || (this._reactHost = void 0, this._detach());
    }
    async setFile(t, e, n) {
        const i = typeof t == "string" ? rt.parse(t) : t;
        if (this._isDisposed) return;
        const r = i?.toString();
        if (this._currentUri?.toString() === r && !this._snapshot.isLoading) {
            this._applySelection(e, n);
            return;
        }
        const s = ++this._setFileVersion;
        if (!i) {
            this._providerWait.clear(), this._clearCurrentFile(), this._currentUri = i, this._isDirty = !1, this._syncTabMeta(), this._syncUnstagedStatusListener(), this._setSnapshot({
                currentFilePath: void 0,
                isLoading: !1,
                isDirty: !1,
                error: void 0,
                contentType: "text",
                imageDataUrl: void 0,
                videoDataUrl: void 0
            });
            return;
        }
        const o = i.toString();
        if (this._currentUri !== void 0 && this._saveViewState(), this._currentUri = i, this._isDirty = !1, this._syncTabMeta(), this._syncUnstagedStatusListener(), this._providerWait.clear(), i.scheme !== Ot.untitled && !this._fileService.hasProvider(i)) {
            const l = ktc(i.path);
            l && this._editor?.widget.setModel(null), this._setSnapshot({
                currentFilePath: o,
                isLoading: !0,
                isDirty: !1,
                error: void 0,
                contentType: l ? "pdf" : "text",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            }), this._waitForFileProvider(i, e, n);
            return;
        }
        if (this._installCurrentFileWatcher(i), this._prepareFileLoad(), ktc(i.path)) {
            this._editor?.widget.setModel(null), this._setSnapshot({
                currentFilePath: o,
                isLoading: !0,
                isDirty: !1,
                error: void 0,
                contentType: "pdf",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            }), await this._tryLoadBinaryMedia(i, o, s);
            return;
        }
        this._setSnapshot({
            currentFilePath: o,
            isLoading: !0,
            isDirty: !1,
            error: void 0,
            contentType: "text",
            imageDataUrl: void 0,
            videoDataUrl: void 0,
            pdfBytesGeneration: void 0
        });
        try {
            const l = await this._loadFile({
                uri: i,
                filePath: o,
                version: s,
                preserveFocus: n?.preserveFocus
            });
            this._isStale(s, o) || (l ? this._pendingSelectionAfterGate = e ? {
                filePath: o,
                selection: e
            } : void 0 : (e ? this._applySelection(e, n) : this._resetToTop(), this._setFileReadySnapshot(o)));
        } catch (l) {
            if (this._isStale(s, o)) return;
            if (mXr.isTextFileOperationError(l) && l.textFileOperationResult === 0) {
                await this._tryLoadBinaryMedia(i, o, s);
                return;
            }
            this._setFileError(o, l);
        }
    }
    _waitForFileProvider(t, e, n) {
        if (this._fileService.hasProvider(t)) {
            this.setFile(t, e, n);
            return;
        }
        let i = !1, r;
        const s = ()=>{
            i || (i = !0, r?.dispose(), this._providerWait.value === a && this._providerWait.clear());
        }, o = ()=>{
            if (!(i || !this._fileService.hasProvider(t))) {
                if (this._currentUri?.toString() !== t.toString()) {
                    s();
                    return;
                }
                s(), this.setFile(t, e, n);
            }
        }, a = {
            dispose: s
        }, l = ()=>{
            this._fileService.hasProvider(t) && o();
        }, c = async ()=>{
            try {
                await this._fileService.canHandleResource(t), o();
            } catch (u) {
                i || this._logService.warn(`[GlassEditorHandle] file_provider_activation_failed fileScheme=${t.scheme}`, u);
            }
        };
        r = this._fileService.onDidChangeFileSystemProviderRegistrations((u)=>{
            u.scheme === t.scheme && u.added && o();
        }), this._providerWait.value = a, l(), queueMicrotask(l), c();
    }
    async setFilePath(t) {
        const e = this._workspaceContextService.getWorkspace().folders[0]?.uri;
        e && await this.setFile(rt.joinPath(e, t));
    }
    setReadOnly(t) {
        this._isReadOnly !== t && (this._isReadOnly = t, t ? this._autoSaveScheduler.cancel() : (this._isDirty || this._editorOverlay?.isDirty()) && this._scheduleAutoSave(), this._updateEditorOptions());
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
    async save() {
        if (this._autoSaveScheduler.cancel(), this._isReadOnly) return !1;
        if (this._editorOverlay) return this._editorOverlay.save();
        const t = this._currentUri;
        return t ? (await this._runExplicitSaveParticipants(t), this._autoSaveScheduler.cancel(), this._saveCurrentTextFile(t, {
            skipSaveParticipants: !0
        })) : !1;
    }
    async _runExplicitSaveParticipants(t) {
        const e = new El;
        this._saveParticipantsCancellation.value = Pn(()=>e.dispose(!0)), await EP0({
            files: this._textFileService.files,
            uri: t,
            logService: this._logService,
            token: e.token
        });
    }
    async revert() {
        if (this._autoSaveScheduler.cancel(), this._editorOverlay) {
            await this._editorOverlay.revert();
            return;
        }
        this._currentUri && await this._textFileService.revert(this._currentUri);
    }
    focus() {
        if (this._editorOverlay) {
            this._editorOverlay.focus();
            return;
        }
        if (this._editor) {
            this._editor.widget.focus();
            return;
        }
        ws(this._container).requestAnimationFrame(()=>{
            this._editor?.widget.focus();
        });
    }
    get isEditorOverlayActive() {
        return this._editorOverlay !== void 0;
    }
    selectAllInEditorOverlay() {
        this._editorOverlay?.selectAll?.();
    }
    flushOverlayPendingContent() {
        const t = this._editorOverlay;
        t && (t.flushPendingContent?.(), this._syncOverlayDirtyState(t));
    }
    attachOverlay(t) {
        this._detachOverlay(), this._editorOverlay = t, this._dirtyListener.clear(), this._overlayDirtyListener.value = t.onDidChangeDirty(()=>{
            this._syncOverlayDirtyState(t);
        }), this._isDirty = t.isDirty(), this._syncTabMeta(), this._setSnapshot({
            ...this._snapshot,
            isDirty: this._isDirty
        }), this._installAutoSaveListener();
    }
    _syncOverlayDirtyState(t) {
        if (this._editorOverlay !== t) return;
        const e = t.isDirty();
        e !== this._isDirty && (this._isDirty = e, this._syncTabMeta(), this._setSnapshot({
            ...this._snapshot,
            isDirty: e
        })), e ? this._scheduleAutoSave() : this._autoSaveScheduler.cancel();
    }
    async detachOverlay(t) {
        this._detachOverlay(), t?.revertMonaco && this._currentUri && await this._textFileService.revert(this._currentUri);
    }
    _detachOverlay() {
        this._editorOverlay && (this._overlayDirtyListener.clear(), this._editorOverlay.dispose(), this._editorOverlay = void 0, this._isDirty = this._computeIsDirty(), this._installDirtyListener(), this._installAutoSaveListener(), this._syncTabMeta(), this._setSnapshot({
            ...this._snapshot,
            isDirty: this._isDirty
        }));
    }
    getEditorControl() {
        return this._editor?.widget;
    }
    getTextModel() {
        return this._latestModelHandle.value?.object.textEditorModel ?? null;
    }
    dispose() {
        this._detachOverlay(), super.dispose(), this._detach(), this._editorScope.dispose(), this._revokeMediaBlobUrls(), this._listeners.clear();
    }
    _prepareFileLoad() {
        this._dirtyListener.clear(), this._autoSaveListener.clear(), this._autoSaveScheduler.cancel(), this._imageFileWatcher.clear(), this._quickDiffDecorator.clear(), this._revokeMediaBlobUrls(), this._requestedEditorType === "diff" && (this._lastDiffUriIdentity = void 0);
    }
    async _loadFile(t) {
        let e = !1;
        return this._requestedEditorType === "diff" ? await this._loadDiffFile(t) : e = await this._loadCodeFile(t), this._isStale(t.version, t.filePath) || (this._isDirty = this._computeIsDirty(), this._syncTabMeta(), this._installDirtyListener(), this._installAutoSaveListener()), e;
    }
    _installCurrentFileWatcher(t) {
        if (t.scheme !== Ot.file && t.scheme !== Ot.vscodeRemote && t.scheme !== Ot.cursorWorker) {
            this._currentFileWatcher.clear();
            return;
        }
        this._currentFileWatcher.value = this._fileService.watch(t);
    }
    _setFileReadySnapshot(t) {
        this._clearPdfBytes(), this._setSnapshot({
            currentFilePath: t,
            isLoading: !1,
            isDirty: this._isDirty,
            error: void 0,
            contentType: "text",
            imageDataUrl: void 0,
            videoDataUrl: void 0,
            pdfBytesGeneration: void 0
        });
    }
    _reloadCurrentFile() {
        if (!this._currentUri) return;
        this._saveViewState();
        const t = this._currentUri, e = ++this._setFileVersion, n = t.toString();
        if (this._setSnapshot({
            ...this._snapshot,
            isLoading: !0,
            largeFileGate: void 0
        }), this._prepareFileLoad(), ktc(t.path)) {
            this._editor?.widget.setModel(null), this._setSnapshot({
                ...this._snapshot,
                isLoading: !0,
                largeFileGate: void 0,
                error: void 0,
                contentType: "pdf",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            }), this._tryLoadBinaryMedia(t, n, e);
            return;
        }
        this._loadFile({
            uri: t,
            filePath: n,
            version: e
        }).then((i)=>{
            if (this._isStale(e, n) || i) return;
            const r = this._pendingSelectionAfterGate?.filePath === n ? this._pendingSelectionAfterGate.selection : void 0;
            this._pendingSelectionAfterGate = void 0, r && this._applySelection(r), this._setFileReadySnapshot(n);
        }).catch(async (i)=>{
            if (!this._isStale(e, n)) {
                if (this._isBinaryFileError(i)) {
                    await this._tryLoadBinaryMedia(t, n, e);
                    return;
                }
                this._setFileError(n, i);
            }
        });
    }
    _setFileError(t, e) {
        this._editor?.widget.setModel(null), this._setSnapshot({
            currentFilePath: t,
            isLoading: !1,
            isDirty: !1,
            error: this._errorMessage(e),
            contentType: this._isBinaryFileError(e) ? "binary" : "text",
            imageDataUrl: void 0,
            videoDataUrl: void 0
        });
    }
    async _tryLoadBinaryMedia(t, e, n) {
        const i = v5e(t.path);
        if (u5i(i)) {
            this._snapshot.contentType !== "pdf" && (this._editor?.widget.setModel(null), this._setSnapshot({
                currentFilePath: e,
                isLoading: !0,
                isDirty: !1,
                error: void 0,
                contentType: "pdf",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            })), await this._tryLoadPdfPreview(t, e, n);
            return;
        }
        const r = LLn(i);
        if (!r || !i) {
            this._editor?.widget.setModel(null), this._clearPdfBytes(), this._setSnapshot({
                currentFilePath: e,
                isLoading: !1,
                isDirty: !1,
                error: j5l,
                contentType: "binary",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            });
            return;
        }
        const s = HIs({
            resource: t,
            version: ++this._mediaSourceVersion
        });
        if (s) {
            this._installMediaFileWatcher(t, e), this._publishMediaSource({
                filePath: e,
                mediaKind: r,
                source: s
            });
            return;
        }
        try {
            const o = await this._readMediaAsBlobUrl(t, i);
            if (this._isStale(n, e)) {
                URL.revokeObjectURL(o);
                return;
            }
            this._installMediaFileWatcher(t, e), this._publishMediaSource({
                filePath: e,
                mediaKind: r,
                source: o,
                ownedBlobUrl: o
            });
        } catch  {
            if (this._isStale(n, e)) return;
            this._editor?.widget.setModel(null), this._clearPdfBytes(), this._setSnapshot({
                currentFilePath: e,
                isLoading: !1,
                isDirty: !1,
                error: r === "video" ? "Failed to load video" : "Failed to load image",
                contentType: r,
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            });
        }
    }
    async _tryLoadPdfPreview(t, e, n) {
        try {
            const i = await this._fileService.stat(t);
            if (this._isStale(n, e)) return;
            if (i.size > d5i) {
                this._editor?.widget.setModel(null), this._setPdfTooLargeSnapshot(e);
                return;
            }
            const r = await this._readFileBytes(t);
            if (this._isStale(n, e)) return;
            if (r.byteLength > d5i) {
                this._editor?.widget.setModel(null), this._setPdfTooLargeSnapshot(e);
                return;
            }
            this._installMediaFileWatcher(t, e), this._publishPdfBytes(e, r);
        } catch  {
            if (this._isStale(n, e)) return;
            this._editor?.widget.setModel(null), this._clearPdfBytes(), this._setSnapshot({
                currentFilePath: e,
                isLoading: !1,
                isDirty: !1,
                error: "Failed to load PDF",
                contentType: "binary",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                pdfBytesGeneration: void 0
            });
        }
    }
    async _readFileBytes(t) {
        const n = (await this._fileService.readFile(t)).value.buffer;
        return n.buffer instanceof ArrayBuffer ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
    }
    async _readMediaAsBlobUrl(t, e) {
        const n = await this._readFileBytes(t), i = new Blob([
            n
        ], {
            type: e
        });
        return URL.createObjectURL(i);
    }
    _publishPdfBytes(t, e) {
        this._revokeMediaBlobUrls(), this._editor?.widget.setModel(null), this._pdfBytes = e, this._pdfBytesGeneration += 1, this._setSnapshot({
            currentFilePath: t,
            isLoading: !1,
            isDirty: !1,
            error: void 0,
            contentType: "pdf",
            imageDataUrl: void 0,
            videoDataUrl: void 0,
            pdfBytesGeneration: this._pdfBytesGeneration
        });
    }
    _clearPdfBytes() {
        this._pdfBytes = void 0;
    }
    _setPdfTooLargeSnapshot(t) {
        this._clearPdfBytes(), this._setSnapshot({
            currentFilePath: t,
            isLoading: !1,
            isDirty: !1,
            error: ADf,
            contentType: "binary",
            imageDataUrl: void 0,
            videoDataUrl: void 0,
            pdfBytesGeneration: void 0
        });
    }
    _publishMediaSource({ filePath: t, mediaKind: e, source: n, ownedBlobUrl: i }) {
        this._revokeMediaBlobUrls(), this._clearPdfBytes(), this._editor?.widget.setModel(null), this._mediaBlobUrl = i, this._setSnapshot({
            currentFilePath: t,
            isLoading: !1,
            isDirty: !1,
            error: void 0,
            contentType: e,
            imageDataUrl: e === "image" ? n : void 0,
            videoDataUrl: e === "video" ? n : void 0,
            pdfBytesGeneration: void 0
        });
    }
    _installMediaFileWatcher(t, e) {
        this._imageFileWatcher.clear(), this._imageFileWatcher.value = this._fileService.onDidFilesChange((n)=>{
            !n.affects(t, Zq.UPDATED) || this._currentUri?.toString() !== e || this._refreshMedia(t, e);
        });
    }
    async _refreshMedia(t, e) {
        const n = v5e(t.path);
        if (u5i(n)) {
            const a = this._setFileVersion, l = ++this._mediaSourceVersion, c = ()=>this._isStale(a, e) || l !== this._mediaSourceVersion;
            try {
                const u = await this._fileService.stat(t);
                if (c()) return;
                if (u.size > d5i) {
                    this._setPdfTooLargeSnapshot(e);
                    return;
                }
                const d = await this._readFileBytes(t);
                if (c()) return;
                if (d.byteLength > d5i) {
                    this._setPdfTooLargeSnapshot(e);
                    return;
                }
                this._publishPdfBytes(e, d);
            } catch  {}
            return;
        }
        const i = LLn(n);
        if (!i || !n) return;
        const r = this._setFileVersion, s = ++this._mediaSourceVersion, o = HIs({
            resource: t,
            version: s
        });
        if (o) {
            this._publishMediaSource({
                filePath: e,
                mediaKind: i,
                source: o
            });
            return;
        }
        try {
            const a = await this._readMediaAsBlobUrl(t, n);
            if (this._isStale(r, e) || s !== this._mediaSourceVersion) {
                URL.revokeObjectURL(a);
                return;
            }
            this._publishMediaSource({
                filePath: e,
                mediaKind: i,
                source: a,
                ownedBlobUrl: a
            });
        } catch  {}
    }
    _clearCurrentFile() {
        this._saveViewState(), this._dirtyListener.clear(), this._autoSaveListener.clear(), this._autoSaveScheduler.cancel(), this._imageFileWatcher.clear(), this._currentFileWatcher.clear(), this._providerWait.clear(), this._quickDiffDecorator.clear(), this._originalModelHandle.clear(), this._latestModelHandle.clear(), this._lastDiffUriIdentity = void 0, this._editor?.widget.setModel(null), this._revokeMediaBlobUrls();
    }
    _revokeMediaBlobUrls() {
        this._mediaBlobUrl && (URL.revokeObjectURL(this._mediaBlobUrl), this._mediaBlobUrl = void 0), this._clearPdfBytes();
    }
    _detectLanguage(t, e) {
        const n = t.getLanguageId();
        if (n !== "plaintext" && n !== "unknown") return;
        const i = this._languageService.guessLanguageIdByFilepathOrFirstLine(e);
        if (i && i !== "unknown" && i !== "plaintext") {
            t.setLanguage(i);
            return;
        }
        const r = Zwv[XR(e).toLowerCase()];
        r && t.setLanguage(r);
    }
    async _loadCodeFile(t) {
        const { uri: e, filePath: n, version: i } = t;
        if (e.scheme === Ot.untitled) this._untitledTextEditorService.create({
            untitledResource: e
        });
        else {
            const o = qhl(e), a = US0(o ? "wysiwyg-markdown" : KTk(e) || VRv(n) ? "heavy-preview" : "plain", xP0(this._experimentService)), l = v5e(e.path), d = !(LLn(l) !== void 0 || u5i(l)) && !this._largeFileGateOverrides.has(n) ? Math.min(a, xRt) : xRt;
            let h;
            try {
                const p = await this._textFileService.files.resolve(e, {
                    reason: 2,
                    limits: {
                        size: d
                    }
                }), g = p.isDirty() ? 0 : p.textEditorModel?.getValueLength() ?? 0;
                h = g > d ? g : void 0;
            } catch (p) {
                if (!(p instanceof O6t)) throw p;
                h = p.size;
            }
            if (h !== void 0) return this._isStale(i, n) ? !1 : h > xRt ? (this._setSnapshot({
                currentFilePath: n,
                isLoading: !1,
                isDirty: !1,
                error: "File is too large to preview",
                contentType: "text",
                imageDataUrl: void 0,
                videoDataUrl: void 0
            }), !0) : (this._editor?.widget.setModel(null), this._latestModelHandle.clear(), this._originalModelHandle.clear(), this._setSnapshot({
                currentFilePath: n,
                isLoading: !1,
                isDirty: !1,
                error: void 0,
                contentType: "text",
                imageDataUrl: void 0,
                videoDataUrl: void 0,
                largeFileGate: {
                    sizeBytes: h,
                    thresholdBytes: a,
                    isMarkdown: o
                }
            }), !0);
        }
        const r = await this._textModelService.createModelReference(e);
        if (this._isStale(i, n)) return r.dispose(), !1;
        this._originalModelHandle.clear(), this._latestModelHandle.value = r;
        const s = r.object.textEditorModel;
        return this._detectLanguage(s, e), this._updateEditorOptions(), this._attachCodeModel({
            model: s,
            filePath: n,
            focus: !t.preserveFocus
        }), !1;
    }
    _attachCodeModel({ model: t, filePath: e, focus: n = !0 }) {
        this._editor?.type === "code" && (this._editor.widget.setModel(t), this._layout(), this._restoreViewState(e), this._syncQuickDiffDecorator(t), n && this._editor.widget.focus());
    }
    _syncQuickDiffDecorator(t) {
        if (this._editor?.type !== "code") {
            this._quickDiffDecorator.clear();
            return;
        }
        const e = this._quickDiffModelService.createQuickDiffModelReference(t.uri);
        if (!e) {
            this._quickDiffDecorator.clear();
            return;
        }
        this._quickDiffDecorator.value = this._instantiationService.createInstance(LKe, this._editor.widget, e, !0);
    }
    _applySelection(t, e) {
        if (!t || this._editor?.type !== "code") return;
        const n = Math.max(1, t.startLineNumber), i = Math.max(1, t.startColumn), r = Math.max(n, t.endLineNumber), s = Math.max(1, t.endColumn), o = new qt(n, i, r, s);
        this._editor.widget.setSelection(new bu(n, i, r, s)), (()=>{
            this._editor?.type === "code" && (this._editor.widget.revealRangeNearTopIfOutsideViewport(o, 0), e?.preserveFocus || this._editor.widget.focus());
        })();
    }
    _resetToTop() {
        this._editor?.type === "code" && (this._editor.widget.setPosition({
            lineNumber: 1,
            column: 1
        }), this._editor.widget.setScrollTop(0));
    }
    _buildDiffUris({ fileUri: t }) {
        const e = (n)=>t.with({
                scheme: "git",
                query: JSON.stringify({
                    path: t.fsPath,
                    ref: n
                })
            });
        switch(this._requestedDiffScope){
            case "unstaged":
                return {
                    originalUri: e(""),
                    modifiedUri: t
                };
            case "staged":
                return {
                    originalUri: e("HEAD"),
                    modifiedUri: e("")
                };
            case "committed":
                {
                    const n = this._glassDiffService.getCommittedBranchModel(), i = n.mergeBaseRefName, r = n.effectiveTargetRefName;
                    return {
                        originalUri: i ? e(i) : void 0,
                        modifiedUri: e(r)
                    };
                }
            default:
                {
                    const n = this._requestedDiffScope;
                    throw new Error(`Unknown diff scope: ${n}`);
                }
        }
    }
    async _loadDiffFile({ uri: t, filePath: e, version: n }) {
        this._refreshDiffUriIdentityFromCurrentUris();
        const { originalUri: i, modifiedUri: r } = this._buildDiffUris({
            fileUri: t
        });
        let s, o;
        try {
            s = await this._textModelService.createModelReference(r);
        } catch  {
            s = this._createEmptyTextModelReference();
        }
        if (i) try {
            o = await this._textModelService.createModelReference(i);
        } catch  {
            o = void 0;
        }
        if (this._isStale(n, e)) {
            s.dispose(), o?.dispose();
            return;
        }
        o || (o = this._createEmptyTextModelReference()), this._latestModelHandle.value = s, this._originalModelHandle.value = o, this._detectLanguage(s.object.textEditorModel, t), await this._attachDiffModel({
            modifiedModel: s.object.textEditorModel,
            originalModel: o.object.textEditorModel,
            filePath: e,
            version: n
        });
    }
    _computeDiffUriIdentity() {
        if (!this._currentUri) return;
        const { originalUri: t, modifiedUri: e } = this._buildDiffUris({
            fileUri: this._currentUri
        });
        return String(tR({
            scope: this._requestedDiffScope,
            original: t?.toString() ?? null,
            modified: e.toString()
        }));
    }
    _refreshDiffUriIdentityFromCurrentUris() {
        this._lastDiffUriIdentity = this._computeDiffUriIdentity();
    }
    _createEmptyTextModelReference() {
        const t = this._modelService.createModel("", null);
        return {
            isEmptyTextModelReference: !0,
            object: {
                textEditorModel: t
            },
            dispose: ()=>t.dispose()
        };
    }
    async _attachDiffModel({ modifiedModel: t, originalModel: e, filePath: n, version: i }) {
        this._editor?.type !== "diff" || this._isStale(i, n) || (this._editor.widget.setModel({
            original: e,
            modified: t
        }), !(this._requestedViewType === "inline" && (await this._editor.widget.waitForDiff(), this._isStale(i, n))) && (this._layout(), this._restoreViewState(n), this._refreshDiffUriIdentityFromCurrentUris()));
    }
    registerTabHandlers(t) {
        return this._tabHandlers = t, this._syncTabMeta(), {
            dispose: ()=>{
                this._tabHandlers = void 0;
            }
        };
    }
    _syncTabMeta() {
        this._currentUri && this._tabHandlers?.onLabelChanged(Aa(this._currentUri)), this._tabHandlers?.onDirtyChanged(this._isDirty);
    }
    _computeIsDirty() {
        const t = this._latestModelHandle.value;
        return !t || !this._isResolvedModelRef(t) ? !1 : KTn(t.object) && t.object.isDirty();
    }
    _installDirtyListener() {
        if (this._dirtyListener.clear(), this._editorOverlay) return;
        const t = this._latestModelHandle.value;
        if (!t || !this._isResolvedModelRef(t) || !KTn(t.object)) return;
        const e = t.object;
        this._dirtyListener.value = e.onDidChangeDirty(()=>{
            const n = e.isDirty();
            n !== this._isDirty && (this._isDirty = n, this._syncTabMeta(), this._setSnapshot({
                ...this._snapshot,
                isDirty: n
            }));
        });
    }
    _isInferredAutoSaveEnabled() {
        return this._filesConfigurationService.getAutoSaveMode(this._currentUri).mode !== 0;
    }
    _isAutoSaveEnabled() {
        return MEf(this._editorPrefs.autoSaveEnabled, this._isInferredAutoSaveEnabled());
    }
    _shouldAutoSaveCurrentResource() {
        return !this._isReadOnly && (this._forceAutoSave || this._isAutoSaveEnabled()) && this._currentUri !== void 0 && this._currentUri.scheme !== Ot.untitled;
    }
    _scheduleAutoSave() {
        if (!this._shouldAutoSaveCurrentResource()) {
            this._autoSaveScheduler.cancel();
            return;
        }
        const t = this._currentUri?.scheme === Ot.vscodeRemote ? ige._REMOTE_AUTO_SAVE_DELAY_MS : ige._LOCAL_AUTO_SAVE_DELAY_MS;
        this._autoSaveScheduler.schedule(t);
    }
    _installAutoSaveListener() {
        if (this._autoSaveListener.clear(), this._autoSaveScheduler.cancel(), !this._shouldAutoSaveCurrentResource()) return;
        if (this._editorOverlay) {
            this._editorOverlay.isDirty() && this._scheduleAutoSave();
            return;
        }
        const t = this._latestModelHandle.value;
        if (!t || !this._isResolvedModelRef(t) || !KTn(t.object)) return;
        const e = t.object, n = new Nt;
        n.add(e.textEditorModel.onDidChangeContent(()=>{
            e.isDirty() && this._scheduleAutoSave();
        })), n.add(e.onDidChangeDirty(()=>{
            e.isDirty() || this._autoSaveScheduler.cancel();
        })), this._autoSaveListener.value = n, e.isDirty() && this._scheduleAutoSave();
    }
    async _runAutoSave() {
        if (!this._shouldAutoSaveCurrentResource()) return;
        if (this._editorOverlay) {
            if (!this._editorOverlay.isDirty()) return;
            try {
                await this._editorOverlay.save();
            } catch (i) {
                this._logService.error("[Glass] Auto-save failed for editor overlay", i);
            }
            return;
        }
        const t = this._latestModelHandle.value;
        if (!t || !this._isResolvedModelRef(t) || !KTn(t.object) || !t.object.isDirty()) return;
        const n = this._currentUri;
        if (n) try {
            await this._saveCurrentTextFile(n, {
                reason: 2,
                skipSaveParticipants: !0
            });
        } catch (i) {
            this._logService.error("[Glass] Auto-save failed for text file", n.toString(), i);
        }
    }
    async _saveCurrentTextFile(t, e) {
        return await this._textFileService.save(t, e) !== void 0;
    }
    _isResolvedModelRef(t) {
        return !("isEmptyTextModelReference" in t);
    }
    _setSnapshot(t) {
        const e = this._snapshot;
        e.currentFilePath === t.currentFilePath && e.isLoading === t.isLoading && e.isDirty === t.isDirty && e.error === t.error && e.contentType === t.contentType && e.imageDataUrl === t.imageDataUrl && e.videoDataUrl === t.videoDataUrl && e.pdfBytesGeneration === t.pdfBytesGeneration && this._largeFileGatesEqual(e.largeFileGate, t.largeFileGate) || (this._snapshot = t, this._emit({
            type: "snapshotChanged",
            payload: t
        }), e.currentFilePath !== t.currentFilePath && this._emit({
            type: "fileChanged",
            payload: {
                filePath: t.currentFilePath
            }
        }), e.isDirty !== t.isDirty && this._emit({
            type: "dirtyChanged",
            payload: {
                isDirty: t.isDirty
            }
        }));
    }
    _emit(t) {
        for (const e of this._listeners)e(t);
    }
    _largeFileGatesEqual(t, e) {
        return t === e ? !0 : !t || !e ? !1 : t.sizeBytes === e.sizeBytes && t.thresholdBytes === e.thresholdBytes && t.isMarkdown === e.isMarkdown;
    }
    overrideLargeFileGate() {
        const t = this._snapshot.largeFileGate ? this._snapshot.currentFilePath : void 0;
        t && (this._largeFileGateOverrides.add(t), this._reloadCurrentFile());
    }
    _buildEditorOptions() {
        const t = this._requestedViewType === "inline", e = IEf(this._editorPrefs.lineNumbersVisible), n = EPs({
            uiFontSizePx: this._glassDisplayService.getFontSize({
                type: "normal"
            }),
            codeFontSizePx: this._glassDisplayService.getFontSize({
                type: "code"
            })
        }), i = this._glassDisplayService.getFontFamily({
            type: "code"
        }), r = EEf(this._editorPrefs.keybindings), s = {
            ...UZl,
            fixedOverflowWidgets: !0,
            fontSize: n.fontSizePx,
            fontWeight: RPs,
            lineNumbers: this._editorPrefs.lineNumbersVisible ? "on" : "off",
            showFoldingControls: e,
            lineDecorationsWidth: xEf(this._editorPrefs.lineNumbersVisible),
            lineNumbersMinChars: AEf(this._editorPrefs.lineNumbersVisible),
            lineHeight: n.lineHeightPx,
            readOnly: t || this._isReadOnly,
            wordWrap: this._editorPrefs.wordWrapEnabled ? "on" : "off",
            scrollbar: {
                useShadows: !1
            }
        };
        return r !== void 0 && (s.cursorStyle = r), i !== void 0 && (s.fontFamily = i), !t && this._editorPrefs.lineNumbersVisible && (s.lineDecorationsWidth = 14), t && (s.scrollBeyondLastLine = !1, s.scrollbar = {
            vertical: "hidden",
            horizontal: "hidden",
            handleMouseWheel: !1,
            useShadows: !1
        }), s;
    }
    _buildDiffEditorOptions() {
        const t = this._requestedViewType === "inline", e = IEf(this._editorPrefs.lineNumbersVisible), n = EPs({
            uiFontSizePx: this._glassDisplayService.getFontSize({
                type: "normal"
            }),
            codeFontSizePx: this._glassDisplayService.getFontSize({
                type: "code"
            })
        }), i = this._glassDisplayService.getFontFamily({
            type: "code"
        }), r = EEf(this._editorPrefs.keybindings), s = {
            ...UZl,
            fixedOverflowWidgets: !0,
            fontSize: n.fontSizePx,
            fontWeight: RPs,
            lineNumbers: this._editorPrefs.lineNumbersVisible ? "on" : "off",
            showFoldingControls: e,
            lineDecorationsWidth: xEf(this._editorPrefs.lineNumbersVisible),
            lineNumbersMinChars: AEf(this._editorPrefs.lineNumbersVisible),
            lineHeight: n.lineHeightPx,
            wordWrap: this._editorPrefs.wordWrapEnabled ? "on" : "off",
            readOnly: t || this._isReadOnly,
            renderSideBySide: !1,
            renderOverviewRuler: !t,
            renderGutterMenu: !1,
            originalEditable: !1,
            renderIndicators: !1,
            compactMode: t
        };
        return r !== void 0 && (s.cursorStyle = r), i !== void 0 && (s.fontFamily = i), t ? (s.hideUnchangedRegions = {
            enabled: !0
        }, s.renderLineHighlight = "none", s.scrollBeyondLastLine = !1, s.overviewRulerBorder = !1, s.overviewRulerLanes = 0, s.cursorBlinking = "hidden", s.scrollbar = {
            vertical: "hidden",
            horizontal: "hidden",
            handleMouseWheel: !1,
            useShadows: !1
        }) : s.scrollbar = {
            vertical: "hidden",
            useShadows: !1
        }, s;
    }
    _buildActiveEditor() {
        if (!this._container) return;
        this._disposeInlineListeners();
        const t = this._acquireOverflowWidgetsDomNode();
        if (this._requestedEditorType === "code") {
            const e = new Nt, n = e.add(this._contextKeyService.createScoped(this._container));
            Pxt.bindTo(n).set(!0);
            const i = this._instantiationService.createChild(new fW(Klw(n)), e);
            this._editorScope.value = e;
            const r = i.createInstance(w4, this._container, {
                ...this._buildEditorOptions(),
                overflowWidgetsDomNode: t
            }, {
                isSimpleWidget: !1
            });
            this._editor = {
                type: "code",
                widget: r
            };
        } else {
            const e = this._instantiationService.createInstance(BQ, this._container, {
                ...this._buildDiffEditorOptions(),
                overflowWidgetsDomNode: t
            }, {});
            this._editor = {
                type: "diff",
                widget: e
            };
        }
        this._installInlineListeners(), this._setupResizeObserver(), this._syncHostKeybindingContext(), this._layout();
    }
    _acquireOverflowWidgetsDomNode() {
        if (!this._container) return;
        const t = this._container.ownerDocument.defaultView;
        if (!t) return;
        if (this._overflowWidgetsWindow === t) {
            const r = ige._overflowAnchorByWindow.get(t)?.anchor;
            if (r?.isConnected) return r;
            this._overflowWidgetsWindow = void 0;
        }
        this._releaseOverflowWidgetsDomNode();
        const e = gX.get(t) ?? this._container.ownerDocument.body, n = ige._overflowAnchorByWindow.get(t);
        if (n?.anchor.isConnected) return n.refCount += 1, this._overflowWidgetsWindow = t, n.anchor;
        const i = this._container.ownerDocument.createElement("div");
        return i.classList.add("monaco-editor"), i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "0", i.style.height = "0", i.style.overflow = "visible", i.style.zIndex = "1000", e.appendChild(i), ige._overflowAnchorByWindow.set(t, {
            anchor: i,
            refCount: 1
        }), this._overflowWidgetsWindow = t, i;
    }
    _releaseOverflowWidgetsDomNode() {
        const t = this._overflowWidgetsWindow;
        if (!t) return;
        this._overflowWidgetsWindow = void 0;
        const e = ige._overflowAnchorByWindow.get(t);
        e && (e.refCount -= 1, !(e.refCount > 0) && (e.anchor.remove(), ige._overflowAnchorByWindow.delete(t)));
    }
    _installInlineListeners() {
        if (this._requestedViewType !== "inline" || !this._editor) return;
        this._contentHeightListener.value = this._editor.widget.onDidContentSizeChange((e)=>{
            e.contentHeightChanged && this._onContentHeightChanged.fire(e.contentHeight);
        });
        const t = this._editor.type === "diff" ? this._editor.widget.getModifiedEditor() : this._editor.widget;
        this._scrollListener.value = t.onDidScrollChange((e)=>{
            e.scrollTopChanged && this._onEditorScrollChanged.fire(e.scrollTop);
        });
    }
    _disposeInlineListeners() {
        this._contentHeightListener.clear(), this._scrollListener.clear();
    }
    _syncUnstagedStatusListener() {
        if (this._requestedEditorType !== "diff" || this._requestedDiffScope !== "unstaged") {
            this._unstagedStatusListener.clear();
            return;
        }
        const t = (i)=>{
            if (i) return this._glassDiffService.getFileEntry({
                scope: "unstaged",
                filePath: i
            })?.status;
        }, e = this._relativePath(this._currentUri);
        let n = t(e) === "untracked";
        this._unstagedStatusListener.value = this._glassDiffService.subscribe("unstaged", (i)=>{
            const r = this._relativePath(this._currentUri);
            if (i.type === "fileGitStatusUpdated" && r === i.payload.path || i.type === "scopeSnapshotUpdated") {
                const s = t(r) === "untracked";
                if (s === n) return;
                n = s, this._rebuildDiffModelReferencesForCurrentFile();
            }
        });
    }
    _syncDiffContentListener() {
        if (this._requestedEditorType !== "diff") {
            this._diffContentListener.clear();
            return;
        }
        this._diffContentListener.value = this._glassDiffService.subscribe(this._requestedDiffScope, (t)=>{
            const e = this._relativePath(this._currentUri);
            if (e) switch(t.type){
                case "fileContentUpdated":
                    if (e !== t.payload.path) return;
                    this._rebuildDiffModelReferencesForCurrentFile(), this.touch();
                    return;
                case "scopeSnapshotUpdated":
                    {
                        if (this._requestedDiffScope !== "committed" && !t.payload.filePaths.includes(e)) return;
                        const n = this._computeDiffUriIdentity();
                        if (!n) return;
                        n !== this._lastDiffUriIdentity && this._rebuildDiffModelReferencesForCurrentFile(), this.touch();
                        return;
                    }
                default:
                    return;
            }
        });
    }
    _rebuildDiffModelReferencesForCurrentFile() {
        this._latestModelHandle.clear(), this._originalModelHandle.clear(), this._container && this._requestedEditorType === "diff" && this._reloadCurrentFile();
    }
    _updateEditorOptions() {
        this._editor?.type === "diff" ? this._editor.widget.updateOptions(this._buildDiffEditorOptions()) : this._editor?.type === "code" && this._editor.widget.updateOptions(this._buildEditorOptions());
    }
    refreshEditorOptions() {
        this._editorPrefs = this._readEditorPreferences(), this._updateEditorOptions();
    }
    _readEditorPreferences() {
        const t = this._storageService.get(Vd.EDITOR_PREFERENCES, io.APPLICATION);
        if (t) try {
            const e = xye(JSON.parse(t));
            if (e) return e;
        } catch  {}
        return ice;
    }
    _saveViewState() {
        if (this._requestedViewType === "inline") return;
        const t = this._currentUri?.toString(), e = this._editor?.widget.saveViewState();
        t && e && this._storageService.store(this._viewStateKey(t), JSON.stringify(e), io.APPLICATION, Wg.MACHINE);
    }
    _restoreViewState(t) {
        if (!this._editor || this._requestedViewType === "inline") return;
        const e = this._storageService.get(this._viewStateKey(t), io.APPLICATION);
        if (e) try {
            this._editor.widget.restoreViewState(JSON.parse(e));
        } catch  {}
    }
    _isStale(t, e) {
        return this._isDisposed || t !== this._setFileVersion || this._currentUri?.toString() !== e;
    }
    _teardownEditor() {
        this._saveViewState(), this._quickDiffDecorator.clear();
        const t = this._editor?.widget;
        this._editor = void 0;
        try {
            t?.dispose();
        } finally{
            this._editorScope.clear();
        }
    }
    _isShadowIsolationEnabled() {
        return this._shadowIsolationEnabled ??= this._experimentService.checkFeatureGate("glass_editor_shadow_isolation", {
            disableExposureLog: !1
        }), this._shadowIsolationEnabled;
    }
    _shouldDeferShadowStyleRebuild() {
        return this._deferShadowStyleRebuildEnabled ??= this._experimentService.checkFeatureGate("glass_defer_shadow_style_rebuild", {
            disableExposureLog: !1
        }), this._deferShadowStyleRebuildEnabled;
    }
    _resolveEffectiveContainer(t) {
        if (this._reactHost = t, !this._isShadowIsolationEnabled()) return this._teardownShadow(), t;
        if (this._shadowWrapper?.parentElement === t && this._shadowMountEl) return this._shadowMountEl;
        this._teardownShadow();
        try {
            const e = t.ownerDocument.createElement("div");
            e.className = "glass-editor-shadow-host", e.style.width = "100%", e.style.height = "100%", e.style.background = "var(--cursor-bg-editor, var(--vscode-editor-background))", t.appendChild(e);
            const n = e.attachShadow({
                mode: "open"
            }), i = t.ownerDocument.createElement("div");
            return i.className = "glass-editor-shadow-mount", i.style.width = "100%", i.style.height = "100%", i.style.overflow = "hidden", i.style.background = "inherit", i.style.setProperty("--vscode-editor-background", "var(--cursor-bg-editor)"), n.appendChild(i), this._shadowWrapper = e, this._shadowMountEl = i, this._setupShadowSheetSync(n, t.ownerDocument), i;
        } catch (e) {
            return this._logService.warn("[GlassEditorHandle] shadow isolation failed; using light DOM", e), this._teardownShadow(), t;
        }
    }
    _setupShadowSheetSync(t, e) {
        this._shadowStyleMirrorDispose.value = M2v.register(t, e, this._shouldDeferShadowStyleRebuild()), this._shadowFocusListenerDispose?.();
        const n = ()=>this._syncHostKeybindingContext();
        t.addEventListener("focusin", n), this._shadowFocusListenerDispose = ()=>t.removeEventListener("focusin", n);
    }
    _syncHostKeybindingContext() {
        const t = this._shadowWrapper;
        if (!t) return;
        let e = t.shadowRoot?.activeElement ?? null;
        for(; e;){
            const n = e.getAttribute?.("data-keybinding-context");
            if (n) {
                t.setAttribute("data-keybinding-context", n);
                return;
            }
            e = e.parentElement;
        }
        t.removeAttribute("data-keybinding-context");
    }
    _teardownShadow() {
        this._shadowStyleMirrorDispose.clear(), this._shadowFocusListenerDispose?.(), this._shadowFocusListenerDispose = void 0, this._shadowWrapper?.remove(), this._shadowWrapper = void 0, this._shadowMountEl = void 0;
    }
    _onShadowIsolationGateChanged() {
        if (this._isDisposed) return;
        const t = this._shadowIsolationEnabled;
        this._shadowIsolationEnabled = void 0, this._deferShadowStyleRebuildEnabled = void 0;
        const e = this._isShadowIsolationEnabled();
        if (t === e || !this._reactHost) return;
        const n = this._reactHost;
        this._detach(), this.attachToContainer(n);
    }
    _detach() {
        this._sizeObserverListener.clear(), this._sizeObserver?.dispose(), this._sizeObserver = void 0, this._disposeInlineListeners(), this._releaseOverflowWidgetsDomNode(), this._teardownShadow(), this._container = void 0, this._teardownEditor();
    }
    _setupResizeObserver() {
        !this._container || this._requestedViewType === "inline" || (this._sizeObserverListener.clear(), this._sizeObserver?.dispose(), this._sizeObserver = new V0r(this._container, void 0), this._sizeObserverListener.value = this._sizeObserver.onDidChange(()=>this._layoutFromObserver()), this._sizeObserver.startObserving());
    }
    _layoutFromObserver() {
        if (!this._editor || !this._container || !this._sizeObserver) return;
        const t = this._sizeObserver.getWidth(), e = this._sizeObserver.getHeight();
        t <= 5 || e <= 5 || this._editor.widget.layout({
            width: t,
            height: e
        });
    }
    _layout() {
        if (!this._editor || !this._container) return;
        const t = this._container.clientWidth, e = this._container.clientHeight;
        t > 0 && e > 0 && this._editor.widget.layout({
            width: t,
            height: e
        });
    }
    _errorMessage(t) {
        return this._isBinaryFileError(t) ? j5l : t instanceof Error ? t.message : "Failed to open file";
    }
    _isBinaryFileError(t) {
        return mXr.isTextFileOperationError(t) && t.textFileOperationResult === 0;
    }
}, ige._LOCAL_AUTO_SAVE_DELAY_MS = 200, ige._REMOTE_AUTO_SAVE_DELAY_MS = 1e3, ige._overflowAnchorByWindow = new WeakMap, ige = Re([
    F(1, dn),
    F(2, Mxt),
    F(3, Vf),
    F(4, P9e),
    F(5, ege),
    F(6, t_),
    F(7, dd),
    F(8, Nu),
    F(9, fT),
    F(10, eu),
    F(11, vN),
    F(12, F_),
    F(13, bU),
    F(14, fYe),
    F(15, Tlt),
    F(16, Cr)
], ige);

}
