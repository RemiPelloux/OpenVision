import { Ei, Gt, Kxe, Nt, Pn, Qe, en, xh, xr } from "./Iwo.js";
import { Nb, l2, xx } from "./accessibilitySignalService.js";
import { FNy, ant, hqd } from "./accessibleDiffViewer.js";
import { p4 } from "./arraysFind.js";
import { Jd } from "./autorun.js";
import { Ju, og } from "./codeEditorService.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { Hi, Rr } from "./contextkey.js";
import { Kqd, dLy } from "./delegatingEditorImpl.js";
import { Hqd, oLy } from "./diffEditorDecorations.js";
import { OTr, aLy } from "./diffEditorEditors.js";
import { Zqd, poi } from "./diffEditorOptions.js";
import { Vqd, rqo, zqd } from "./diffEditorSash.js";
import { RTr, soi } from "./diffEditorViewModel.js";
import { LTr, NTr } from "./diffEditorViewZones.js";
import { Hn, ws } from "./dom_2.js";
import { X9t, Ybt } from "./editorCommon.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud, pW } from "./editorExtensions.js";
import { ILy, ZTr } from "./gutterFeature.js";
import { Szd, qyt } from "./hideUnchangedRegionsFeature.js";
import { ent } from "./hotReloadHelpers.js";
import { It, dn } from "./instantiation.js";
import { $qd, uoi } from "./movedBlocksLinesFeature.js";
import { Jc } from "./observable.js";
import { Gqd, xY } from "./overviewRulerFeature.js";
import { QAe } from "./platformObservableUtils.js";
import { er, jc } from "./position.js";
import { ab, sne } from "./progress.js";
import { Qs, qt } from "./range.js";
import { ALy, kzd } from "./revertButtonsFeature.js";
import { fW, vW } from "./serviceCollection.js";
import { Ufn, tnt } from "./stableEditorScroll.js";
import { RLy } from "./style.css";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { EGo, TBt, bwe } from "./utils_13.js";
import { Cii, DI, Fyt, Hve, VGd, Zo, agn, bc, cTr, gHe, gwe, mg, twe, wzd, xv } from "./ze.js";
var BQ;
export { BQ };
var __wakaru_oRe_initialized = false;
export function oRe() {
if (__wakaru_oRe_initialized) return;
__wakaru_oRe_initialized = true;
"use strict";
E(), Hn(), p4(), Ei(), Gt(), ent(), Qe(), Jc(), l2(), Hi(), It(), vW(), QAe(), ab(), jc(), Qs(), Ybt(), cg(), Ud(), og(), Ufn(), boe(), FNy(), oLy(), aLy(), Vqd(), LTr(), dLy(), Zqd(), RTr(), ILy(), Szd(), $qd(), Gqd(), ALy(), RLy(), bwe(), BQ = class extends Kqd {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._domElement = t, this._parentContextKeyService = i, this._parentInstantiationService = r, this._codeEditorService = s, this._accessibilitySignalService = o, this._editorProgressService = a, this.elements = xv("div.monaco-diff-editor.side-by-side", {
            style: {
                position: "relative",
                height: "100%"
            }
        }, [
            xv("div.editor.original@original", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            }),
            xv("div.editor.modified@modified", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            }),
            xv("div.accessibleDiffViewer@accessibleDiffViewer", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            })
        ]), this._diffModelSrc = this._register(Cii(this, void 0)), this._diffModel = Zo(this, (S)=>this._diffModelSrc.read(S)?.object), this._deferredDiffModelRefDisposals = this._register(new Nt), this.onDidChangeModel = en.fromObservableLight(this._diffModel), this._boundarySashes = bc(this, void 0), this.custom = !1, this._accessibleDiffViewerShouldBeVisible = bc(this, !1), this._accessibleDiffViewerVisible = Zo(this, (S)=>this._options.onlyShowAccessibleDiffViewer.read(S) ? !0 : this._accessibleDiffViewerShouldBeVisible.read(S)), this._movedBlocksLinesPart = bc(this, void 0), this._layoutInfo = Zo(this, (S)=>{
            const k = this._rootSizeObserver.width.read(S), C = this._rootSizeObserver.height.read(S);
            this._rootSizeObserver.automaticLayout ? this.elements.root.style.height = "100%" : this.elements.root.style.height = C + "px";
            const T = this._sash.read(S), I = this._gutter.read(S), A = I?.width.read(S) ?? 0, P = this._overviewRulerPart.read(S)?.width ?? 0;
            let M, O, N, U, j;
            if (!!T) {
                const H = T.sashLeft.read(S), G = this._movedBlocksLinesPart.read(S)?.width.read(S) ?? 0;
                M = 0, O = H - A - G, j = H - A, N = H, U = k - N - P;
            } else {
                j = 0;
                const H = this._options.inlineViewHideOriginalLineNumbers.read(S);
                M = A, H || this._isInAgentLayout ? O = 0 : O = Math.max(5, this._editors.originalObs.layoutInfoDecorationsLeft.read(S)), this._isInAgentLayout ? (N = 0, U = k - P) : (N = A + O, U = k - N - P);
            }
            return this.elements.original.style.left = M + "px", this.elements.original.style.width = O + "px", this._editors.original.layout({
                width: O,
                height: C
            }, !0), I?.layout(j), this.elements.modified.style.left = N + "px", this.elements.modified.style.width = U + "px", this._setCustomElementStyles(), this._editors.modified.layout({
                width: U,
                height: C
            }, !0), {
                modifiedEditor: this._editors.modified.getLayoutInfo(),
                originalEditor: this._editors.original.getLayoutInfo()
            };
        }), this._diffValue = this._diffModel.map((S, k)=>S?.diff.read(k)), this.onDidUpdateDiff = en.fromObservableLight(this._diffValue), this._contextKeyService = this._register(this._parentContextKeyService.createScoped(this._domElement)), this._instantiationService = this._register(this._parentInstantiationService.createChild(new fW([
            Rr,
            this._contextKeyService
        ]))), this._codeEditorService.willCreateDiffEditor(), this._isInAgentLayout = t.closest(".agent-layout") !== null, this._contextKeyService.createKey("isInDiffEditor", !0), this._domElement.appendChild(this.elements.root), this._register(Pn(()=>this.elements.root.remove())), this._rootSizeObserver = this._register(new EGo(this.elements.root, e.dimension)), this._rootSizeObserver.setAutomaticLayout(e.automaticLayout ?? !1), this._options = this._instantiationService.createInstance(poi, e), this._register(Jd((S)=>{
            this._options.setWidth(this._rootSizeObserver.width.read(S));
        })), this._contextKeyService.createKey(si.isEmbeddedDiffEditor.key, !1), this._register(gHe(si.isEmbeddedDiffEditor, this._contextKeyService, (S)=>this._options.isInEmbeddedEditor.read(S))), this._register(gHe(si.comparingMovedCode, this._contextKeyService, (S)=>!!this._diffModel.read(S)?.movedTextToCompare.read(S))), this._register(gHe(si.diffEditorRenderSideBySideInlineBreakpointReached, this._contextKeyService, (S)=>this._options.couldShowInlineViewBecauseOfSize.read(S))), this._register(gHe(si.diffEditorInlineMode, this._contextKeyService, (S)=>!this._options.renderSideBySide.read(S))), this._register(gHe(si.hasChanges, this._contextKeyService, (S)=>(this._diffModel.read(S)?.diff.read(S)?.mappings.length ?? 0) > 0)), this._editors = this._register(this._instantiationService.createInstance(OTr, this.elements.original, this.elements.modified, this._options, n, (S, k, C, T)=>this._createInnerEditor(S, k, C, T))), this._register(gHe(si.diffEditorOriginalWritable, this._contextKeyService, (S)=>this._options.originalEditable.read(S))), this._register(gHe(si.diffEditorModifiedWritable, this._contextKeyService, (S)=>!this._options.readOnly.read(S))), this._register(gHe(si.diffEditorOriginalUri, this._contextKeyService, (S)=>this._diffModel.read(S)?.model.original.uri.toString() ?? "")), this._register(gHe(si.diffEditorModifiedUri, this._contextKeyService, (S)=>this._diffModel.read(S)?.model.modified.uri.toString() ?? "")), this._overviewRulerPart = twe(this, (S)=>this._options.renderOverviewRuler.read(S) ? this._instantiationService.createInstance(gwe(xY, S), this._editors, this.elements.root, this._diffModel, this._rootSizeObserver.width, this._rootSizeObserver.height, this._layoutInfo.map((k)=>k.modifiedEditor)) : void 0).recomputeInitiallyAndOnChange(this._store);
        const l = {
            height: this._rootSizeObserver.height,
            width: this._rootSizeObserver.width.map((S, k)=>S - (this._overviewRulerPart.read(k)?.width ?? 0))
        };
        this._sashLayout = new zqd(this._options, l), this._sash = twe(this, (S)=>{
            const k = this._options.renderSideBySide.read(S);
            return this.elements.root.classList.toggle("side-by-side", k), k ? new rqo(this.elements.root, l, this._options.enableSplitViewResizing, this._boundarySashes, this._sashLayout.sashLeft, ()=>this._sashLayout.resetSash()) : void 0;
        }).recomputeInitiallyAndOnChange(this._store);
        const c = twe(this, (S)=>this._instantiationService.createInstance(gwe(qyt, S), this._editors, this._diffModel, this._options)).recomputeInitiallyAndOnChange(this._store);
        twe(this, (S)=>this._instantiationService.createInstance(gwe(Hqd, S), this._editors, this._diffModel, this._options, this)).recomputeInitiallyAndOnChange(this._store);
        const u = new Set, d = new Set;
        let h = !1;
        const p = twe(this, (S)=>this._instantiationService.createInstance(gwe(NTr, S), ws(this._domElement), this._editors, this._diffModel, this._options, this, ()=>h || c.read(void 0).isUpdatingHiddenAreas, u, d)).recomputeInitiallyAndOnChange(this._store), g = Zo(this, (S)=>{
            const k = p.read(S).viewZones.read(S).orig, C = c.read(S).viewZones.read(S).origViewZones;
            return k.concat(C);
        }), f = Zo(this, (S)=>{
            const k = p.read(S).viewZones.read(S).mod, C = c.read(S).viewZones.read(S).modViewZones;
            return k.concat(C);
        });
        this._register(cTr(this._editors.original, g, (S)=>{
            h = S;
        }, u));
        let _;
        this._register(cTr(this._editors.modified, f, (S)=>{
            h = S, h ? _ = tnt.capture(this._editors.modified) : (_?.restore(this._editors.modified), _ = void 0);
        }, d)), this._accessibleDiffViewer = twe(this, (S)=>this._instantiationService.createInstance(gwe(ant, S), this.elements.accessibleDiffViewer, this._accessibleDiffViewerVisible, (k, C)=>this._accessibleDiffViewerShouldBeVisible.set(k, C), this._options.onlyShowAccessibleDiffViewer.map((k)=>!k), this._rootSizeObserver.width, this._rootSizeObserver.height, this._diffModel.map((k, C)=>k?.diff.read(C)?.mappings.map((T)=>T.lineRangeMapping)), new hqd(this._editors))).recomputeInitiallyAndOnChange(this._store);
        const b = this._accessibleDiffViewerVisible.map((S)=>S ? "hidden" : "visible");
        this._register(Fyt(this.elements.modified, {
            visibility: b
        })), this._register(Fyt(this.elements.original, {
            visibility: b
        })), this._createDiffEditorContributions(), this._codeEditorService.addDiffEditor(this), this._gutter = twe(this, (S)=>this._options.shouldRenderGutterMenu.read(S) ? this._instantiationService.createInstance(gwe(ZTr, S), this.elements.root, this._diffModel, this._editors, this._options, this._sashLayout, this._boundarySashes) : void 0), this._register(Hve(this._layoutInfo)), twe(this, (S)=>new (gwe(uoi, S))(this.elements.root, this._diffModel, this._layoutInfo.map((k)=>k.originalEditor), this._layoutInfo.map((k)=>k.modifiedEditor), this._editors)).recomputeInitiallyAndOnChange(this._store, (S)=>{
            this._movedBlocksLinesPart.set(S, void 0);
        }), this._register(en.runAndSubscribe(this._editors.modified.onDidChangeCursorPosition, (S)=>this._handleCursorPositionChange(S, !0))), this._register(en.runAndSubscribe(this._editors.original.onDidChangeCursorPosition, (S)=>this._handleCursorPositionChange(S, !1)));
        const y = this._diffModel.map(this, (S, k)=>{
            if (S) return S.diff.read(k) === void 0 && !S.isDiffUpToDate.read(k);
        });
        this._register(DI((S, k)=>{
            if (y.read(S) === !0) {
                const C = this._editorProgressService.show(!0, 1e3);
                k.add(Pn(()=>C.done()));
            }
        })), this._setCustomElementStyles(), this._register(DI((S, k)=>{
            k.add(new (gwe(kzd, S))(this._editors, this._diffModel, this._options, this));
        })), this._register(DI((S, k)=>{
            const C = this._diffModel.read(S);
            if (C) for (const T of [
                C.model.original,
                C.model.modified
            ])k.add(T.onWillDispose((I)=>{
                xr(new xh("TextModel got disposed before DiffEditorWidget model got reset")), this.setModel(null);
            }));
        })), this._register(Jd((S)=>{
            this._options.setModel(this._diffModel.read(S));
        }));
    }
    get onDidContentSizeChange() {
        return this._editors.onDidContentSizeChange;
    }
    get collapseUnchangedRegions() {
        return this._options.hideUnchangedRegions.get();
    }
    getViewModel() {
        return this._diffModel.get();
    }
    getViewWidth() {
        return this._rootSizeObserver.width.get();
    }
    getContentHeight() {
        return this._editors.modified.getContentHeight();
    }
    _createInnerEditor(t, e, n, i) {
        return t.createInstance(w4, e, n, i);
    }
    _setCustomElementStyles() {
        if (this.custom) {
            this.elements.modified.style.left = "0px";
            const t = this._domElement.querySelectorAll(".line-delete");
            for (const e of t){
                const n = e;
                n.style.left = "-2.5px", n.style.lineHeight = "16px";
            }
            this.getOriginalEditor().updateOptions({
                scrollbar: {
                    vertical: "hidden",
                    verticalScrollbarSize: 0,
                    horizontal: "hidden",
                    handleMouseWheel: !1,
                    alwaysConsumeMouseWheel: !1,
                    horizontalScrollbarSize: 0
                }
            });
        }
    }
    _createDiffEditorContributions() {
        const t = pW.getDiffEditorContributions();
        for (const e of t)try {
            this._register(this._instantiationService.createInstance(e.ctor, this));
        } catch (n) {
            xr(n);
        }
    }
    get _targetEditor() {
        return this._editors.modified;
    }
    getEditorType() {
        return X9t.IDiffEditor;
    }
    onVisible() {
        this._editors.original.onVisible(), this._editors.modified.onVisible();
    }
    onHide() {
        this._editors.original.onHide(), this._editors.modified.onHide();
    }
    layout(t) {
        this._setCustomElementStyles(), this._rootSizeObserver.observe(t);
    }
    hasTextFocus() {
        return this._editors.original.hasTextFocus() || this._editors.modified.hasTextFocus();
    }
    saveViewState() {
        const t = this._editors.original.saveViewState(), e = this._editors.modified.saveViewState();
        return {
            original: t,
            modified: e,
            modelState: this._diffModel.get()?.serializeState()
        };
    }
    restoreViewState(t) {
        if (t && t.original && t.modified) {
            const e = t;
            this._editors.original.restoreViewState(e.original), this._editors.modified.restoreViewState(e.modified), e.modelState && this._diffModel.get()?.restoreSerializedState(e.modelState);
        }
    }
    handleInitialized() {
        this._editors.original.handleInitialized(), this._editors.modified.handleInitialized();
    }
    createViewModel(t) {
        return this._instantiationService.createInstance(soi, t, this._options);
    }
    getModel() {
        return this._diffModel.get()?.model ?? null;
    }
    setModel(t) {
        const e = t ? "model" in t ? TBt.create(t).createNewRef(this) : TBt.create(this.createViewModel(t), this) : null;
        this.setDiffModel(e);
    }
    setDiffModel(t, e) {
        const n = this._diffModel.get();
        !t && n && this._accessibleDiffViewer.get().close(), this._diffModel.get() !== t?.object && agn(e, (i)=>{
            const r = t?.object;
            Yv.batchEventsGlobally(i, ()=>{
                this._editors.original.setModel(r ? r.model.original : null), this._editors.modified.setModel(r ? r.model.modified : null);
            });
            const s = this._diffModelSrc.get()?.createNewRef(this);
            this._diffModelSrc.set(t?.createNewRef(this), i), s && (this._deferredDiffModelRefDisposals.add(s), setTimeout(()=>{
                this._deferredDiffModelRefDisposals.delete(s);
            }, 0));
        });
    }
    updateOptions(t) {
        this._options.updateOptions(t);
    }
    getDomNode() {
        return this.elements.root;
    }
    getContainerDomNode() {
        return this._domElement;
    }
    getOriginalEditor() {
        return this._editors.original;
    }
    getModifiedEditor() {
        return this._editors.modified;
    }
    setBoundarySashes(t) {
        this._boundarySashes.set(t, void 0);
    }
    get ignoreTrimWhitespace() {
        return this._options.ignoreTrimWhitespace.get();
    }
    get maxComputationTime() {
        return this._options.maxComputationTimeMs.get();
    }
    get renderSideBySide() {
        return this._options.renderSideBySide.get();
    }
    getLineChanges() {
        const t = this._diffModel.get()?.diff.get();
        return t ? wzd(t) : null;
    }
    getDiffComputationResult() {
        const t = this._diffModel.get()?.diff.get();
        return t ? {
            changes: this.getLineChanges(),
            changes2: t.mappings.map((e)=>e.lineRangeMapping),
            identical: t.identical,
            quitEarly: t.quitEarly
        } : null;
    }
    revert(t) {
        const e = this._diffModel.get();
        !e || !e.isDiffUpToDate.get() || this._editors.modified.executeEdits("diffEditor", [
            {
                range: t.modified.toExclusiveRange(),
                text: e.model.original.getValueInRange(t.original.toExclusiveRange())
            }
        ]);
    }
    revertRangeMappings(t) {
        const e = this._diffModel.get();
        if (!e || !e.isDiffUpToDate.get()) return;
        const n = t.map((i)=>({
                range: i.modifiedRange,
                text: e.model.original.getValueInRange(i.originalRange)
            }));
        this._editors.modified.executeEdits("diffEditor", n);
    }
    _goTo(t) {
        this._editors.modified.setPosition(new er(t.lineRangeMapping.modified.startLineNumber, 1)), this._editors.modified.revealRangeInCenter(t.lineRangeMapping.modified.toExclusiveRange());
    }
    goToDiff(t) {
        const e = this._diffModel.get()?.diff.get()?.mappings;
        if (!e || e.length === 0) return;
        const n = this._editors.modified.getPosition().lineNumber;
        let i;
        t === "next" ? i = e.find((r)=>r.lineRangeMapping.modified.startLineNumber > n) ?? e[0] : i = Kxe(e, (r)=>r.lineRangeMapping.modified.startLineNumber < n) ?? e[e.length - 1], this._goTo(i), i.lineRangeMapping.modified.isEmpty ? this._accessibilitySignalService.playSignal(Nb.diffLineDeleted, {
            source: "diffEditor.goToDiff"
        }) : i.lineRangeMapping.original.isEmpty ? this._accessibilitySignalService.playSignal(Nb.diffLineInserted, {
            source: "diffEditor.goToDiff"
        }) : i && this._accessibilitySignalService.playSignal(Nb.diffLineModified, {
            source: "diffEditor.goToDiff"
        });
    }
    revealFirstDiff() {
        const t = this._diffModel.get();
        t && this.waitForDiff().then(()=>{
            const e = t.diff.get()?.mappings;
            !e || e.length === 0 || this._goTo(e[0]);
        });
    }
    accessibleDiffViewerNext() {
        this._accessibleDiffViewer.get().next();
    }
    accessibleDiffViewerPrev() {
        this._accessibleDiffViewer.get().prev();
    }
    async waitForDiff() {
        const t = this._diffModel.get();
        t && await t.waitForDiff();
    }
    mapToOtherSide() {
        const t = this._editors.modified.hasWidgetFocus(), e = t ? this._editors.modified : this._editors.original, n = t ? this._editors.original : this._editors.modified;
        let i;
        const r = e.getSelection();
        if (r) {
            const s = this._diffModel.get()?.diff.get()?.mappings.map((o)=>t ? o.lineRangeMapping.flip() : o.lineRangeMapping);
            if (s) {
                const o = VGd(r.getStartPosition(), s), a = VGd(r.getEndPosition(), s);
                i = qt.plusRange(o, a);
            }
        }
        return {
            destination: n,
            destinationSelection: i
        };
    }
    switchSide() {
        const { destination: t, destinationSelection: e } = this.mapToOtherSide();
        t.focus(), e && t.setSelection(e);
    }
    exitCompareMove() {
        const t = this._diffModel.get();
        t && t.movedTextToCompare.set(void 0, void 0);
    }
    collapseAllUnchangedRegions() {
        const t = this._diffModel.get()?.unchangedRegions.get();
        t && mg((e)=>{
            for (const n of t)n.collapseAll(e);
        });
    }
    showAllUnchangedRegions() {
        const t = this._diffModel.get()?.unchangedRegions.get();
        t && mg((e)=>{
            for (const n of t)n.showAll(e);
        });
    }
    ensureLineIsVisible(t, e = !1) {
        const n = this._diffModel.get();
        n && (e && n.ensureOriginalLineIsVisible ? n.ensureOriginalLineIsVisible(t, 0, void 0) : !e && n.ensureModifiedLineIsVisible && n.ensureModifiedLineIsVisible(t, 0, void 0));
    }
    _handleCursorPositionChange(t, e) {
        if (t?.reason === 3) {
            const n = this._diffModel.get()?.diff.get()?.mappings.find((i)=>e ? i.lineRangeMapping.modified.contains(t.position.lineNumber) : i.lineRangeMapping.original.contains(t.position.lineNumber));
            n?.lineRangeMapping.modified.isEmpty ? this._accessibilitySignalService.playSignal(Nb.diffLineDeleted, {
                source: "diffEditor.cursorPositionChanged"
            }) : n?.lineRangeMapping.original.isEmpty ? this._accessibilitySignalService.playSignal(Nb.diffLineInserted, {
                source: "diffEditor.cursorPositionChanged"
            }) : n && this._accessibilitySignalService.playSignal(Nb.diffLineModified, {
                source: "diffEditor.cursorPositionChanged"
            });
        }
    }
    dispose() {
        super.dispose(), this._codeEditorService.removeDiffEditor(this);
    }
}, BQ.ENTIRE_DIFF_OVERVIEW_WIDTH = xY.ENTIRE_DIFF_OVERVIEW_WIDTH, BQ = Re([
    F(3, Rr),
    F(4, dn),
    F(5, Ju),
    F(6, xx),
    F(7, sne)
], BQ);

}
