import { Ct, He, Hie, Se, Zu, bt, ns, rn, si } from "./HVr.js";
import { A0, KT, Uf } from "./accessibilitySignalService.js";
import { Gyg, U8c, g5e } from "./accessibleDiffViewer.js";
import { C, ie } from "./actions_2.js";
import { FT } from "./arraysFind.js";
import { Hc } from "./autorun.js";
import { Ja, md } from "./codeEditorService.js";
import { HP, Iw } from "./codeEditorWidget.js";
import { dn, xn } from "./contextkey.js";
import { vSg, y7c } from "./delegatingEditorImpl.js";
import { hSg, m7c } from "./diffEditorDecorations.js";
import { pSg, syi } from "./diffEditorEditors.js";
import { Bvn, w7c } from "./diffEditorOptions.js";
import { Jns, _7c, b7c } from "./diffEditorSash.js";
import { Mvn, Rvn } from "./diffEditorViewModel.js";
import { iyi, ryi } from "./diffEditorViewZones.js";
import { en, xi } from "./dom_2.js";
import { bze, fwe } from "./editorCommon.js";
import { gd, gn } from "./editorContextKeys.js";
import { yc, zC } from "./editorExtensions.js";
import { DSg, fyi } from "./gutterFeature.js";
import { hKe, q7c } from "./hideUnchangedRegionsFeature.js";
import { s5e } from "./hotReloadHelpers.js";
import { Ze, _t } from "./instantiation.js";
import { Nvn, p7c } from "./movedBlocksLinesFeature.js";
import { qa } from "./observable.js";
import { f7c, q7 } from "./overviewRulerFeature.js";
import { H7 } from "./platformObservableUtils.js";
import { Yn, ya } from "./position.js";
import { gp, l2 } from "./progress.js";
import { $7, Ds, Fbi, JNt, K7c, QNt, Uh, Xo, b8c, cu, gBe, sKe, tw, ule, xle } from "./qIc.js";
import { dt, qi } from "./range.js";
import { PSg, z7c } from "./revertButtonsFeature.js";
import { KC, ky } from "./serviceCollection.js";
import { Zpt, nRe } from "./stableEditorScroll.js";
import { LSg } from "./style.css";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
import { Dle, kns, rmt } from "./utils_13.js";
var rN;
export { rN };
var __wakaru_kre_initialized = false;
export function kre() {
if (__wakaru_kre_initialized) return;
__wakaru_kre_initialized = true;
"use strict";
x(), en(), FT(), si(), bt(), s5e(), Se(), qa(), KT(), dn(), Ze(), KC(), H7(), gp(), ya(), qi(), fwe(), gd(), yc(), md(), Zpt(), HP(), Gyg(), hSg(), pSg(), b7c(), ryi(), vSg(), w7c(), Mvn(), DSg(), q7c(), p7c(), f7c(), PSg(), LSg(), Dle(), rN = class extends y7c {
    constructor(e, t, n, i, r, s, o, a){
        super(), this._domElement = e, this._parentContextKeyService = i, this._parentInstantiationService = r, this._codeEditorService = s, this._accessibilitySignalService = o, this._editorProgressService = a, this.elements = cu("div.monaco-diff-editor.side-by-side", {
            style: {
                position: "relative",
                height: "100%"
            }
        }, [
            cu("div.editor.original@original", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            }),
            cu("div.editor.modified@modified", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            }),
            cu("div.accessibleDiffViewer@accessibleDiffViewer", {
                style: {
                    position: "absolute",
                    height: "100%"
                }
            })
        ]), this._diffModelSrc = this._register(JNt(this, void 0)), this._diffModel = Ds(this, (E)=>this._diffModelSrc.read(E)?.object), this._deferredDiffModelRefDisposals = this._register(new He), this.onDidChangeModel = Ct.fromObservableLight(this._diffModel), this._boundarySashes = Xo(this, void 0), this.custom = !1, this._accessibleDiffViewerShouldBeVisible = Xo(this, !1), this._accessibleDiffViewerVisible = Ds(this, (E)=>this._options.onlyShowAccessibleDiffViewer.read(E) ? !0 : this._accessibleDiffViewerShouldBeVisible.read(E)), this._movedBlocksLinesPart = Xo(this, void 0), this._layoutInfo = Ds(this, (E)=>{
            const A = this._rootSizeObserver.width.read(E), R = this._rootSizeObserver.height.read(E);
            this._rootSizeObserver.automaticLayout ? this.elements.root.style.height = "100%" : this.elements.root.style.height = R + "px";
            const D = this._sash.read(E), P = this._gutter.read(E), N = P?.width.read(E) ?? 0, O = this._overviewRulerPart.read(E)?.width ?? 0;
            let F, H, $, W, G;
            if (!!D) {
                const z = D.sashLeft.read(E), X = this._movedBlocksLinesPart.read(E)?.width.read(E) ?? 0;
                F = 0, H = z - N - X, G = z - N, $ = z, W = A - $ - O;
            } else {
                G = 0;
                const z = this._options.inlineViewHideOriginalLineNumbers.read(E);
                F = N, z || this._isInAgentLayout ? H = 0 : H = Math.max(5, this._editors.originalObs.layoutInfoDecorationsLeft.read(E)), this._isInAgentLayout ? ($ = 0, W = A - O) : ($ = N + H, W = A - $ - O);
            }
            return this.elements.original.style.left = F + "px", this.elements.original.style.width = H + "px", this._editors.original.layout({
                width: H,
                height: R
            }, !0), P?.layout(G), this.elements.modified.style.left = $ + "px", this.elements.modified.style.width = W + "px", this._setCustomElementStyles(), this._editors.modified.layout({
                width: W,
                height: R
            }, !0), {
                modifiedEditor: this._editors.modified.getLayoutInfo(),
                originalEditor: this._editors.original.getLayoutInfo()
            };
        }), this._diffValue = this._diffModel.map((E, A)=>E?.diff.read(A)), this.onDidUpdateDiff = Ct.fromObservableLight(this._diffValue), this._contextKeyService = this._register(this._parentContextKeyService.createScoped(this._domElement)), this._instantiationService = this._register(this._parentInstantiationService.createChild(new ky([
            xn,
            this._contextKeyService
        ]))), this._codeEditorService.willCreateDiffEditor(), this._isInAgentLayout = e.closest(".agent-layout") !== null, this._contextKeyService.createKey("isInDiffEditor", !0), this._domElement.appendChild(this.elements.root), this._register(rn(()=>this.elements.root.remove())), this._rootSizeObserver = this._register(new kns(this.elements.root, t.dimension)), this._rootSizeObserver.setAutomaticLayout(t.automaticLayout ?? !1), this._options = this._instantiationService.createInstance(Bvn, t), this._register(Hc((E)=>{
            this._options.setWidth(this._rootSizeObserver.width.read(E));
        })), this._contextKeyService.createKey(gn.isEmbeddedDiffEditor.key, !1), this._register($7(gn.isEmbeddedDiffEditor, this._contextKeyService, (E)=>this._options.isInEmbeddedEditor.read(E))), this._register($7(gn.comparingMovedCode, this._contextKeyService, (E)=>!!this._diffModel.read(E)?.movedTextToCompare.read(E))), this._register($7(gn.diffEditorRenderSideBySideInlineBreakpointReached, this._contextKeyService, (E)=>this._options.couldShowInlineViewBecauseOfSize.read(E))), this._register($7(gn.diffEditorInlineMode, this._contextKeyService, (E)=>!this._options.renderSideBySide.read(E))), this._register($7(gn.hasChanges, this._contextKeyService, (E)=>(this._diffModel.read(E)?.diff.read(E)?.mappings.length ?? 0) > 0)), this._editors = this._register(this._instantiationService.createInstance(syi, this.elements.original, this.elements.modified, this._options, n, (E, A, R, D)=>this._createInnerEditor(E, A, R, D))), this._register($7(gn.diffEditorOriginalWritable, this._contextKeyService, (E)=>this._options.originalEditable.read(E))), this._register($7(gn.diffEditorModifiedWritable, this._contextKeyService, (E)=>!this._options.readOnly.read(E))), this._register($7(gn.diffEditorOriginalUri, this._contextKeyService, (E)=>this._diffModel.read(E)?.model.original.uri.toString() ?? "")), this._register($7(gn.diffEditorModifiedUri, this._contextKeyService, (E)=>this._diffModel.read(E)?.model.modified.uri.toString() ?? "")), this._overviewRulerPart = ule(this, (E)=>this._options.renderOverviewRuler.read(E) ? this._instantiationService.createInstance(xle(q7, E), this._editors, this.elements.root, this._diffModel, this._rootSizeObserver.width, this._rootSizeObserver.height, this._layoutInfo.map((A)=>A.modifiedEditor)) : void 0).recomputeInitiallyAndOnChange(this._store);
        const c = {
            height: this._rootSizeObserver.height,
            width: this._rootSizeObserver.width.map((E, A)=>E - (this._overviewRulerPart.read(A)?.width ?? 0))
        };
        this._sashLayout = new _7c(this._options, c), this._sash = ule(this, (E)=>{
            const A = this._options.renderSideBySide.read(E);
            return this.elements.root.classList.toggle("side-by-side", A), A ? new Jns(this.elements.root, c, this._options.enableSplitViewResizing, this._boundarySashes, this._sashLayout.sashLeft, ()=>this._sashLayout.resetSash()) : void 0;
        }).recomputeInitiallyAndOnChange(this._store);
        const l = ule(this, (E)=>this._instantiationService.createInstance(xle(hKe, E), this._editors, this._diffModel, this._options)).recomputeInitiallyAndOnChange(this._store);
        ule(this, (E)=>this._instantiationService.createInstance(xle(m7c, E), this._editors, this._diffModel, this._options, this)).recomputeInitiallyAndOnChange(this._store);
        const u = new Set, h = new Set;
        let p = !1;
        const g = ule(this, (E)=>this._instantiationService.createInstance(xle(iyi, E), xi(this._domElement), this._editors, this._diffModel, this._options, this, ()=>p || l.read(void 0).isUpdatingHiddenAreas, u, h)).recomputeInitiallyAndOnChange(this._store), f = Ds(this, (E)=>{
            const A = g.read(E).viewZones.read(E).orig, R = l.read(E).viewZones.read(E).origViewZones;
            return A.concat(R);
        }), v = Ds(this, (E)=>{
            const A = g.read(E).viewZones.read(E).mod, R = l.read(E).viewZones.read(E).modViewZones;
            return A.concat(R);
        });
        this._register(Fbi(this._editors.original, f, (E)=>{
            p = E;
        }, u));
        let b;
        this._register(Fbi(this._editors.modified, v, (E)=>{
            p = E, p ? b = nRe.capture(this._editors.modified) : (b?.restore(this._editors.modified), b = void 0);
        }, h)), this._accessibleDiffViewer = ule(this, (E)=>this._instantiationService.createInstance(xle(g5e, E), this.elements.accessibleDiffViewer, this._accessibleDiffViewerVisible, (A, R)=>this._accessibleDiffViewerShouldBeVisible.set(A, R), this._options.onlyShowAccessibleDiffViewer.map((A)=>!A), this._rootSizeObserver.width, this._rootSizeObserver.height, this._diffModel.map((A, R)=>A?.diff.read(R)?.mappings.map((D)=>D.lineRangeMapping)), new U8c(this._editors))).recomputeInitiallyAndOnChange(this._store);
        const y = this._accessibleDiffViewerVisible.map((E)=>E ? "hidden" : "visible");
        this._register(sKe(this.elements.modified, {
            visibility: y
        })), this._register(sKe(this.elements.original, {
            visibility: y
        })), this._createDiffEditorContributions(), this._codeEditorService.addDiffEditor(this), this._gutter = ule(this, (E)=>this._options.shouldRenderGutterMenu.read(E) ? this._instantiationService.createInstance(xle(fyi, E), this.elements.root, this._diffModel, this._editors, this._options, this._sashLayout, this._boundarySashes) : void 0), this._register(gBe(this._layoutInfo)), ule(this, (E)=>new (xle(Nvn, E))(this.elements.root, this._diffModel, this._layoutInfo.map((A)=>A.originalEditor), this._layoutInfo.map((A)=>A.modifiedEditor), this._editors)).recomputeInitiallyAndOnChange(this._store, (E)=>{
            this._movedBlocksLinesPart.set(E, void 0);
        }), this._register(Ct.runAndSubscribe(this._editors.modified.onDidChangeCursorPosition, (E)=>this._handleCursorPositionChange(E, !0))), this._register(Ct.runAndSubscribe(this._editors.original.onDidChangeCursorPosition, (E)=>this._handleCursorPositionChange(E, !1)));
        const T = this._diffModel.map(this, (E, A)=>{
            if (E) return E.diff.read(A) === void 0 && !E.isDiffUpToDate.read(A);
        });
        this._register(tw((E, A)=>{
            if (T.read(E) === !0) {
                const R = this._editorProgressService.show(!0, 1e3);
                A.add(rn(()=>R.done()));
            }
        })), this._setCustomElementStyles(), this._register(tw((E, A)=>{
            A.add(new (xle(z7c, E))(this._editors, this._diffModel, this._options, this));
        })), this._register(tw((E, A)=>{
            const R = this._diffModel.read(E);
            if (R) for (const D of [
                R.model.original,
                R.model.modified
            ])A.add(D.onWillDispose((P)=>{
                ns(new Zu("TextModel got disposed before DiffEditorWidget model got reset")), this.setModel(null);
            }));
        })), this._register(Hc((E)=>{
            this._options.setModel(this._diffModel.read(E));
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
    _createInnerEditor(e, t, n, i) {
        return e.createInstance(Iw, t, n, i);
    }
    _setCustomElementStyles() {
        if (this.custom) {
            this.elements.modified.style.left = "0px";
            const e = this._domElement.querySelectorAll(".line-delete");
            for (const t of e){
                const n = t;
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
        const e = zC.getDiffEditorContributions();
        for (const t of e)try {
            this._register(this._instantiationService.createInstance(t.ctor, this));
        } catch (n) {
            ns(n);
        }
    }
    get _targetEditor() {
        return this._editors.modified;
    }
    getEditorType() {
        return bze.IDiffEditor;
    }
    onVisible() {
        this._editors.original.onVisible(), this._editors.modified.onVisible();
    }
    onHide() {
        this._editors.original.onHide(), this._editors.modified.onHide();
    }
    layout(e) {
        this._setCustomElementStyles(), this._rootSizeObserver.observe(e);
    }
    hasTextFocus() {
        return this._editors.original.hasTextFocus() || this._editors.modified.hasTextFocus();
    }
    saveViewState() {
        const e = this._editors.original.saveViewState(), t = this._editors.modified.saveViewState();
        return {
            original: e,
            modified: t,
            modelState: this._diffModel.get()?.serializeState()
        };
    }
    restoreViewState(e) {
        if (e && e.original && e.modified) {
            const t = e;
            this._editors.original.restoreViewState(t.original), this._editors.modified.restoreViewState(t.modified), t.modelState && this._diffModel.get()?.restoreSerializedState(t.modelState);
        }
    }
    handleInitialized() {
        this._editors.original.handleInitialized(), this._editors.modified.handleInitialized();
    }
    createViewModel(e) {
        return this._instantiationService.createInstance(Rvn, e, this._options);
    }
    getModel() {
        return this._diffModel.get()?.model ?? null;
    }
    setModel(e) {
        const t = e ? "model" in e ? rmt.create(e).createNewRef(this) : rmt.create(this.createViewModel(e), this) : null;
        this.setDiffModel(t);
    }
    setDiffModel(e, t) {
        const n = this._diffModel.get();
        !e && n && this._accessibleDiffViewer.get().close(), this._diffModel.get() !== e?.object && QNt(t, (i)=>{
            const r = e?.object;
            qp.batchEventsGlobally(i, ()=>{
                this._editors.original.setModel(r ? r.model.original : null), this._editors.modified.setModel(r ? r.model.modified : null);
            });
            const s = this._diffModelSrc.get()?.createNewRef(this);
            this._diffModelSrc.set(e?.createNewRef(this), i), s && (this._deferredDiffModelRefDisposals.add(s), setTimeout(()=>{
                this._deferredDiffModelRefDisposals.delete(s);
            }, 0));
        });
    }
    updateOptions(e) {
        this._options.updateOptions(e);
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
    setBoundarySashes(e) {
        this._boundarySashes.set(e, void 0);
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
        const e = this._diffModel.get()?.diff.get();
        return e ? K7c(e) : null;
    }
    getDiffComputationResult() {
        const e = this._diffModel.get()?.diff.get();
        return e ? {
            changes: this.getLineChanges(),
            changes2: e.mappings.map((t)=>t.lineRangeMapping),
            identical: e.identical,
            quitEarly: e.quitEarly
        } : null;
    }
    revert(e) {
        const t = this._diffModel.get();
        !t || !t.isDiffUpToDate.get() || this._editors.modified.executeEdits("diffEditor", [
            {
                range: e.modified.toExclusiveRange(),
                text: t.model.original.getValueInRange(e.original.toExclusiveRange())
            }
        ]);
    }
    revertRangeMappings(e) {
        const t = this._diffModel.get();
        if (!t || !t.isDiffUpToDate.get()) return;
        const n = e.map((i)=>({
                range: i.modifiedRange,
                text: t.model.original.getValueInRange(i.originalRange)
            }));
        this._editors.modified.executeEdits("diffEditor", n);
    }
    _goTo(e) {
        this._editors.modified.setPosition(new Yn(e.lineRangeMapping.modified.startLineNumber, 1)), this._editors.modified.revealRangeInCenter(e.lineRangeMapping.modified.toExclusiveRange());
    }
    goToDiff(e) {
        const t = this._diffModel.get()?.diff.get()?.mappings;
        if (!t || t.length === 0) return;
        const n = this._editors.modified.getPosition().lineNumber;
        let i;
        e === "next" ? i = t.find((r)=>r.lineRangeMapping.modified.startLineNumber > n) ?? t[0] : i = Hie(t, (r)=>r.lineRangeMapping.modified.startLineNumber < n) ?? t[t.length - 1], this._goTo(i), i.lineRangeMapping.modified.isEmpty ? this._accessibilitySignalService.playSignal(Uf.diffLineDeleted, {
            source: "diffEditor.goToDiff"
        }) : i.lineRangeMapping.original.isEmpty ? this._accessibilitySignalService.playSignal(Uf.diffLineInserted, {
            source: "diffEditor.goToDiff"
        }) : i && this._accessibilitySignalService.playSignal(Uf.diffLineModified, {
            source: "diffEditor.goToDiff"
        });
    }
    revealFirstDiff() {
        const e = this._diffModel.get();
        e && this.waitForDiff().then(()=>{
            const t = e.diff.get()?.mappings;
            !t || t.length === 0 || this._goTo(t[0]);
        });
    }
    accessibleDiffViewerNext() {
        this._accessibleDiffViewer.get().next();
    }
    accessibleDiffViewerPrev() {
        this._accessibleDiffViewer.get().prev();
    }
    async waitForDiff() {
        const e = this._diffModel.get();
        e && await e.waitForDiff();
    }
    mapToOtherSide() {
        const e = this._editors.modified.hasWidgetFocus(), t = e ? this._editors.modified : this._editors.original, n = e ? this._editors.original : this._editors.modified;
        let i;
        const r = t.getSelection();
        if (r) {
            const s = this._diffModel.get()?.diff.get()?.mappings.map((o)=>e ? o.lineRangeMapping.flip() : o.lineRangeMapping);
            if (s) {
                const o = b8c(r.getStartPosition(), s), a = b8c(r.getEndPosition(), s);
                i = dt.plusRange(o, a);
            }
        }
        return {
            destination: n,
            destinationSelection: i
        };
    }
    switchSide() {
        const { destination: e, destinationSelection: t } = this.mapToOtherSide();
        e.focus(), t && e.setSelection(t);
    }
    exitCompareMove() {
        const e = this._diffModel.get();
        e && e.movedTextToCompare.set(void 0, void 0);
    }
    collapseAllUnchangedRegions() {
        const e = this._diffModel.get()?.unchangedRegions.get();
        e && Uh((t)=>{
            for (const n of e)n.collapseAll(t);
        });
    }
    showAllUnchangedRegions() {
        const e = this._diffModel.get()?.unchangedRegions.get();
        e && Uh((t)=>{
            for (const n of e)n.showAll(t);
        });
    }
    ensureLineIsVisible(e, t = !1) {
        const n = this._diffModel.get();
        n && (t && n.ensureOriginalLineIsVisible ? n.ensureOriginalLineIsVisible(e, 0, void 0) : !t && n.ensureModifiedLineIsVisible && n.ensureModifiedLineIsVisible(e, 0, void 0));
    }
    _handleCursorPositionChange(e, t) {
        if (e?.reason === 3) {
            const n = this._diffModel.get()?.diff.get()?.mappings.find((i)=>t ? i.lineRangeMapping.modified.contains(e.position.lineNumber) : i.lineRangeMapping.original.contains(e.position.lineNumber));
            n?.lineRangeMapping.modified.isEmpty ? this._accessibilitySignalService.playSignal(Uf.diffLineDeleted, {
                source: "diffEditor.cursorPositionChanged"
            }) : n?.lineRangeMapping.original.isEmpty ? this._accessibilitySignalService.playSignal(Uf.diffLineInserted, {
                source: "diffEditor.cursorPositionChanged"
            }) : n && this._accessibilitySignalService.playSignal(Uf.diffLineModified, {
                source: "diffEditor.cursorPositionChanged"
            });
        }
    }
    dispose() {
        super.dispose(), this._codeEditorService.removeDiffEditor(this);
    }
}, rN.ENTIRE_DIFF_OVERVIEW_WIDTH = q7.ENTIRE_DIFF_OVERVIEW_WIDTH, rN = ie([
    C(3, xn),
    C(4, _t),
    C(5, Ja),
    C(6, A0),
    C(7, l2)
], rN);

}
