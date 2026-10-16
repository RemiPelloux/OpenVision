import { D, Ei, GYu, Gt, Nc, Qe, Vn, st, tt, xr } from "./Iwo.js";
import { tR } from "./SZu.js";
import { GS, Ty } from "./accessibility.js";
import { Ft, es } from "./actions_2.js";
import { F9t } from "./baseColors.js";
import { a3y, bHd } from "./codeEditorContributions.js";
import { Ju, og } from "./codeEditorService.js";
import { Ap } from "./colorRegistry.js";
import { nr, rs } from "./commands.js";
import { Hi, Rr } from "./contextkey.js";
import { sL, zve } from "./cursorColumns.js";
import { gW, nwr } from "./cursorWordOperations.js";
import { she } from "./domFontInfo.js";
import { _Hd, o3y } from "./domLineBreaksComputer.js";
import { Hn, Ix, aoe, ws } from "./dom_2.js";
import { l3y } from "./editor.css";
import { MBd, O2y } from "./editorAction.js";
import { doe, gBd } from "./editorColorRegistry.js";
import { $9t, A6d, lwe, tne } from "./editorColors.js";
import { X9t, Ybt, hoe, o2 } from "./editorCommon.js";
import { Z0r, rMy } from "./editorConfiguration.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud, pW } from "./editorExtensions.js";
import { s2 } from "./editorOptions.js";
import { Xy } from "./hash.js";
import { It, dn } from "./instantiation.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Dg, Nd } from "./languageFeatures.js";
import { sMy } from "./markerDecorations_2.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { fW, vW } from "./serviceCollection.js";
import { KAe, aBt } from "./tabFocus.js";
import { Kg, PC } from "./textModel.js";
import { Dl, Ml } from "./themeService.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { ICr, t3y } from "./view.js";
import { QPy, xUd } from "./viewModelImpl.js";
import { UHo, Ujd } from "./viewUserInputEvents.js";
import { FPy, T7d, Zwr, nne, oB, vBt, yHd } from "./ze.js";
var w4, SHd, kHd, MWo, TY, wHd, CHd, THd, EHd, IHd, xHd, AHd;
export { AHd, CHd, EHd, IHd, MWo, SHd, THd, TY, kHd, w4, wHd, xHd };
var __wakaru_boe_initialized = false;
export function boe() {
if (__wakaru_boe_initialized) return;
__wakaru_boe_initialized = true;
"use strict";
E(), Hn(), Ei(), Gt(), Xy(), Qe(), Ki(), Bt(), Ty(), es(), rs(), Hi(), It(), vW(), Ks(), Ap(), Dl(), uwe(), s2(), zve(), doe(), jc(), Qs(), Cy(), nwr(), O2y(), Ybt(), cg(), RD(), PC(), Dg(), FPy(), QPy(), she(), rMy(), aBt(), Ud(), og(), sMy(), t3y(), o3y(), Ujd(), a3y(), l3y(), w4 = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this.languageConfigurationService = u, this._tooltipService = h, this._deliveryQueue = GYu(), this._contributions = this._register(new bHd), this._onDidDispose = this._register(new tt), this.onDidDispose = this._onDidDispose.event, this._onDidChangeModelContent = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelContent = this._onDidChangeModelContent.event, this._onDidChangeModelLanguage = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelLanguage = this._onDidChangeModelLanguage.event, this._onDidChangeModelLanguageConfiguration = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelLanguageConfiguration = this._onDidChangeModelLanguageConfiguration.event, this._onDidChangeModelOptions = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelOptions = this._onDidChangeModelOptions.event, this._onDidChangeModelDecorations = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelDecorations = this._onDidChangeModelDecorations.event, this._onDidChangeModelTokens = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelTokens = this._onDidChangeModelTokens.event, this._onDidChangeConfiguration = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._onWillChangeModel = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onWillChangeModel = this._onWillChangeModel.event, this._onDidChangeModel = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModel = this._onDidChangeModel.event, this._onDidChangeCursorPosition = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeCursorPosition = this._onDidChangeCursorPosition.event, this._onDidChangeCursorSelection = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeCursorSelection = this._onDidChangeCursorSelection.event, this._onDidAttemptReadOnlyEdit = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDidAttemptReadOnlyEdit = this._onDidAttemptReadOnlyEdit.event, this._onDidLayoutChange = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidLayoutChange = this._onDidLayoutChange.event, this._editorTextFocus = this._register(new MWo({
            deliveryQueue: this._deliveryQueue
        })), this.onDidFocusEditorText = this._editorTextFocus.onDidChangeToTrue, this.onDidBlurEditorText = this._editorTextFocus.onDidChangeToFalse, this._editorWidgetFocus = this._register(new MWo({
            deliveryQueue: this._deliveryQueue
        })), this.onDidFocusEditorWidget = this._editorWidgetFocus.onDidChangeToTrue, this.onDidBlurEditorWidget = this._editorWidgetFocus.onDidChangeToFalse, this._onWillType = this._register(new TY(this._contributions, this._deliveryQueue)), this.onWillType = this._onWillType.event, this._onDidType = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDidType = this._onDidType.event, this._onDidCompositionStart = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDidCompositionStart = this._onDidCompositionStart.event, this._onDidCompositionEnd = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDidCompositionEnd = this._onDidCompositionEnd.event, this._onDidPaste = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDidPaste = this._onDidPaste.event, this._onMouseUp = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseUp = this._onMouseUp.event, this._onMouseDown = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseDown = this._onMouseDown.event, this._onMouseDrag = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseDrag = this._onMouseDrag.event, this._onMouseDrop = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseDrop = this._onMouseDrop.event, this._onMouseDropCanceled = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseDropCanceled = this._onMouseDropCanceled.event, this._onDropIntoEditor = this._register(new TY(this._contributions, this._deliveryQueue)), this.onDropIntoEditor = this._onDropIntoEditor.event, this._onContextMenu = this._register(new TY(this._contributions, this._deliveryQueue)), this.onContextMenu = this._onContextMenu.event, this._onMouseMove = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseMove = this._onMouseMove.event, this._onMouseLeave = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseLeave = this._onMouseLeave.event, this._onMouseWheel = this._register(new TY(this._contributions, this._deliveryQueue)), this.onMouseWheel = this._onMouseWheel.event, this._onKeyUp = this._register(new TY(this._contributions, this._deliveryQueue)), this.onKeyUp = this._onKeyUp.event, this._onKeyDown = this._register(new TY(this._contributions, this._deliveryQueue)), this.onKeyDown = this._onKeyDown.event, this._onDidContentSizeChange = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidContentSizeChange = this._onDidContentSizeChange.event, this._onDidScrollChange = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidScrollChange = this._onDidScrollChange.event, this._onDidChangeViewZones = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeViewZones = this._onDidChangeViewZones.event, this._onDidChangeHiddenAreas = this._register(new tt({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeHiddenAreas = this._onDidChangeHiddenAreas.event, this._updateCounter = 0, this._onWillTriggerEditorOperationEvent = this._register(new tt), this.onWillTriggerEditorOperationEvent = this._onWillTriggerEditorOperationEvent.event, this._onBeginUpdate = this._register(new tt), this.onBeginUpdate = this._onBeginUpdate.event, this._onEndUpdate = this._register(new tt), this.onEndUpdate = this._onEndUpdate.event, this._onBeforeExecuteEdit = this._register(new tt), this.onBeforeExecuteEdit = this._onBeforeExecuteEdit.event, this._contributionsDisposable = this._register(new Vn), this._actions = new Map, this._bannerDomNode = null, this._dropIntoEditorDecorations = this.createDecorationsCollection(), this.inComposition = !1, r.willCreateCodeEditor(), this.shouldShowHover = !0;
        const p = {
            ...e,
            ...n.hideLineNumbers ? {
                lineNumbers: "off"
            } : {}
        };
        if (this._domElement = t, this._overflowWidgetsDomNode = p.overflowWidgetsDomNode, delete p.overflowWidgetsDomNode, this._id = ++SHd, this._decorationTypeKeysToIds = {}, this._decorationTypeSubtypes = {}, this._telemetryData = n.telemetryData, this._isMultiDiffEditor = n.isMultiDiffEditor ?? !1, this._isAddedMultiDiffEditor = n.isAddedMultiDiffEditor ?? !1, this._isDeletedMultiDiffEditor = n.isDeletedMultiDiffEditor ?? !1, this._configuration = this._register(this._createConfiguration(n.isSimpleWidget || !1, n.contextMenuId ?? (n.isSimpleWidget ? Ft.SimpleEditorContext : Ft.EditorContext), p, c, n.isChatCodeblock ?? !1, n.cursorCodeBlockType)), this._register(this._configuration.onDidChange((_)=>{
            this._onDidChangeConfiguration.fire(_);
            const b = this._configuration.options;
            if (_.hasChanged(151)) {
                const y = b.get(151);
                this._onDidLayoutChange.fire(y);
            }
        })), this._contextKeyService = this._register(o.createScoped(this._domElement)), n.contextKeyValues) for (const [_, b] of Object.entries(n.contextKeyValues))this._contextKeyService.createKey(_, b);
        this._notificationService = l, this._codeEditorService = r, this._commandService = s, this._themeService = a, this._register(new wHd(this, this._contextKeyService, this._tooltipService)), this._register(new CHd(this, this._contextKeyService, d)), this._instantiationService = this._register(i.createChild(new fW([
            Rr,
            this._contextKeyService
        ]))), this._modelData = null, this._contentWidgets = {}, this._overlayWidgets = {}, this._glyphMarginWidgets = {};
        let g;
        Array.isArray(n.contributions) ? g = n.contributions : g = pW.getEditorContributions(), this._contributions.initialize(this, g, this._instantiationService);
        for (const _ of pW.getEditorActions()){
            if (this._actions.has(_.id)) {
                xr(new Error(`Cannot have two actions with the same id ${_.id}`));
                continue;
            }
            const b = new MBd(_.id, _.label, _.alias, _.metadata, _.precondition ?? void 0, (y)=>this._instantiationService.invokeFunction((S)=>Promise.resolve(_.runEditorCommand(S, this, y))), this._contextKeyService);
            this._actions.set(b.id, b);
        }
        const f = ()=>!this._configuration.options.get(96) && this._configuration.options.get(36).enabled;
        this._register(new aoe(this._domElement, {
            onDragOver: (_)=>{
                if (!f()) return;
                const b = this.getTargetAtClientPoint(_.clientX, _.clientY);
                b?.position && this.showDropIndicatorAt(b.position);
            },
            onDrop: async (_)=>{
                if (!f() || (this.removeDropIndicator(), !_.dataTransfer)) return;
                const b = this.getTargetAtClientPoint(_.clientX, _.clientY);
                b?.position && this._onDropIntoEditor.fire({
                    position: b.position,
                    event: _
                });
            },
            onDragLeave: ()=>{
                this.removeDropIndicator();
            },
            onDragEnd: ()=>{
                this.removeDropIndicator();
            }
        })), this._codeEditorService.addCodeEditor(this);
    }
    get isChatCodeblock() {
        return this._configuration.isChatCodeblock;
    }
    get cursorCodeBlockType() {
        return this._configuration.cursorCodeBlockType;
    }
    get isSimpleWidget() {
        return this._configuration.isSimpleWidget;
    }
    get contextMenuId() {
        return this._configuration.contextMenuId;
    }
    get contextKeyService() {
        return this._contextKeyService;
    }
    writeScreenReaderContent(t) {
        this._modelData?.view.writeScreenReaderContent(t);
    }
    _createConfiguration(t, e, n, i, r = !1, s = void 0) {
        return new Z0r(t, e, n, this._domElement, i, r, s);
    }
    getId() {
        return this.getEditorType() + ":" + this._id;
    }
    getEditorType() {
        return X9t.ICodeEditor;
    }
    dispose() {
        this._codeEditorService.removeCodeEditor(this), this._actions.clear(), this._contentWidgets = {}, this._overlayWidgets = {}, this._removeDecorationTypes(), this._postDetachModelCleanup(this._detachModel()), this._onDidDispose.fire(), super.dispose();
    }
    invokeWithinContext(t) {
        return this._instantiationService.invokeFunction(t);
    }
    updateOptions(t) {
        this._configuration.updateOptions(t || {});
    }
    getOptions() {
        return this._configuration.options;
    }
    getOption(t) {
        return this._configuration.options.get(t);
    }
    getRawOptions() {
        return this._configuration.getRawOptions();
    }
    getOverflowWidgetsDomNode() {
        return this._overflowWidgetsDomNode;
    }
    getConfiguredWordAtPosition(t) {
        return this._modelData ? gW.getWordAtPosition(this._modelData.model, this._configuration.options.get(136), this._configuration.options.get(135), t) : null;
    }
    getValue(t = null) {
        if (!this._modelData) return "";
        const e = !!(t && t.preserveBOM);
        let n = 0;
        return t && t.lineEnding && t.lineEnding === `
` ? n = 1 : t && t.lineEnding && t.lineEnding === `\r
` && (n = 2), this._modelData.model.getValue(n, e);
    }
    setValue(t) {
        try {
            if (this._beginUpdate(), !this._modelData) return;
            this._modelData.model.setValue(t);
        } finally{
            this._endUpdate();
        }
    }
    getModel() {
        return this._modelData ? this._modelData.model : null;
    }
    getIsMultiDiffEditor() {
        return this._isMultiDiffEditor;
    }
    getIsAddedMultiDiffEditor() {
        return this._isAddedMultiDiffEditor;
    }
    getIsDeletedMultiDiffEditor() {
        return this._isDeletedMultiDiffEditor;
    }
    setModel(t = null) {
        if (!this._store.isDisposed) try {
            this._beginUpdate();
            const e = t;
            if (this._modelData === null && e === null || this._modelData && this._modelData.model === e) return;
            const n = {
                oldModelUrl: this._modelData?.model.uri || null,
                newModelUrl: e?.uri || null
            };
            this._onWillChangeModel.fire(n);
            const i = this.hasTextFocus(), r = this._detachModel();
            this._attachModel(e), this.hasModel() ? i && this.focus() : (this._editorTextFocus.setValue(!1), this._editorWidgetFocus.setValue(!1)), this._removeDecorationTypes(), this._onDidChangeModel.fire(n), this._postDetachModelCleanup(r), this._contributionsDisposable.value = this._contributions.onAfterModelAttached();
        } finally{
            this._endUpdate();
        }
    }
    _removeDecorationTypes() {
        if (this._decorationTypeKeysToIds = {}, this._decorationTypeSubtypes) {
            for(const t in this._decorationTypeSubtypes){
                const e = this._decorationTypeSubtypes[t];
                for(const n in e)this._removeDecorationType(t + "-" + n);
            }
            this._decorationTypeSubtypes = {};
        }
    }
    getVisibleRanges() {
        return this._modelData ? this._modelData.viewModel.getVisibleRanges() : [];
    }
    getVisibleRangesPlusViewportAboveBelow() {
        return this._modelData ? this._modelData.viewModel.getVisibleRangesPlusViewportAboveBelow() : [];
    }
    getWhitespaces() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getWhitespaces() : [];
    }
    static _getVerticalOffsetAfterPosition(t, e, n, i) {
        const r = t.model.validatePosition({
            lineNumber: e,
            column: n
        }), s = t.viewModel.coordinatesConverter.convertModelPositionToViewPosition(r);
        return t.viewModel.viewLayout.getVerticalOffsetAfterLineNumber(s.lineNumber, i);
    }
    getTopForLineNumber(t, e = !1) {
        return this._modelData ? w4._getVerticalOffsetForPosition(this._modelData, t, 1, e) : -1;
    }
    getTopForPosition(t, e) {
        return this._modelData ? w4._getVerticalOffsetForPosition(this._modelData, t, e, !1) : -1;
    }
    static _getVerticalOffsetForPosition(t, e, n, i = !1) {
        const r = t.model.validatePosition({
            lineNumber: e,
            column: n
        }), s = t.viewModel.coordinatesConverter.convertModelPositionToViewPosition(r);
        return t.viewModel.viewLayout.getVerticalOffsetForLineNumber(s.lineNumber, i);
    }
    getBottomForLineNumber(t, e = !1) {
        if (!this._modelData) return -1;
        const n = this._modelData.model.getLineMaxColumn(t);
        return w4._getVerticalOffsetAfterPosition(this._modelData, t, n, e);
    }
    setHiddenAreas(t, e, n) {
        this._modelData?.viewModel.setHiddenAreas(t.map((i)=>qt.lift(i)), e, n);
    }
    getVisibleColumnFromPosition(t) {
        if (!this._modelData) return t.column;
        const e = this._modelData.model.validatePosition(t), n = this._modelData.model.getOptions().tabSize;
        return sL.visibleColumnFromColumn(this._modelData.model.getLineContent(e.lineNumber), e.column, n) + 1;
    }
    getStatusbarColumn(t) {
        if (!this._modelData) return t.column;
        const e = this._modelData.model.validatePosition(t), n = this._modelData.model.getOptions().tabSize;
        return sL.toStatusbarColumn(this._modelData.model.getLineContent(e.lineNumber), e.column, n);
    }
    getPosition() {
        return this._modelData ? this._modelData.viewModel.getPosition() : null;
    }
    setPosition(t, e = "api") {
        if (this._modelData) {
            if (!er.isIPosition(t)) throw new Error("Invalid arguments");
            this._modelData.viewModel.setSelections(e, [
                {
                    selectionStartLineNumber: t.lineNumber,
                    selectionStartColumn: t.column,
                    positionLineNumber: t.lineNumber,
                    positionColumn: t.column
                }
            ]);
        }
    }
    _sendRevealRange(t, e, n, i) {
        if (!this._modelData) return;
        if (!qt.isIRange(t)) throw new Error("Invalid arguments");
        const r = this._modelData.model.validateRange(t), s = this._modelData.viewModel.coordinatesConverter.convertModelRangeToViewRange(r);
        this._modelData.viewModel.revealRange("api", n, s, e, i);
    }
    revealLine(t, e = o2.Smooth) {
        this._revealLine(t, 0, e);
    }
    revealLineInCenter(t, e = o2.Smooth) {
        this._revealLine(t, 1, e);
    }
    revealLineInCenterIfOutsideViewport(t, e = o2.Smooth) {
        this._revealLine(t, 2, e);
    }
    revealLineNearTop(t, e = o2.Smooth) {
        this._revealLine(t, 5, e);
    }
    _revealLine(t, e, n) {
        if (typeof t != "number") throw new Error("Invalid arguments");
        this._sendRevealRange(new qt(t, 1, t, 1), e, !1, n);
    }
    revealPosition(t, e = o2.Smooth) {
        this._revealPosition(t, 0, !0, e);
    }
    revealPositionInCenter(t, e = o2.Smooth) {
        this._revealPosition(t, 1, !0, e);
    }
    revealPositionInCenterIfOutsideViewport(t, e = o2.Smooth) {
        this._revealPosition(t, 2, !0, e);
    }
    revealPositionNearTop(t, e = o2.Smooth) {
        this._revealPosition(t, 5, !0, e);
    }
    _revealPosition(t, e, n, i) {
        if (!er.isIPosition(t)) throw new Error("Invalid arguments");
        this._sendRevealRange(new qt(t.lineNumber, t.column, t.lineNumber, t.column), e, n, i);
    }
    getSelection() {
        return this._modelData ? this._modelData.viewModel.getSelection() : null;
    }
    getSelections() {
        return this._modelData ? this._modelData.viewModel.getSelections() : null;
    }
    setSelection(t, e = "api") {
        const n = bu.isISelection(t), i = qt.isIRange(t);
        if (!n && !i) throw new Error("Invalid arguments");
        if (n) this._setSelectionImpl(t, e);
        else if (i) {
            const r = {
                selectionStartLineNumber: t.startLineNumber,
                selectionStartColumn: t.startColumn,
                positionLineNumber: t.endLineNumber,
                positionColumn: t.endColumn
            };
            this._setSelectionImpl(r, e);
        }
    }
    _setSelectionImpl(t, e) {
        if (!this._modelData) return;
        const n = new bu(t.selectionStartLineNumber, t.selectionStartColumn, t.positionLineNumber, t.positionColumn);
        this._modelData.viewModel.setSelections(e, [
            n
        ]);
    }
    revealLines(t, e, n = o2.Smooth) {
        this._revealLines(t, e, 0, n);
    }
    revealLinesInCenter(t, e, n = o2.Smooth) {
        this._revealLines(t, e, 1, n);
    }
    revealLinesInCenterIfOutsideViewport(t, e, n = o2.Smooth) {
        this._revealLines(t, e, 2, n);
    }
    revealLinesNearTop(t, e, n = o2.Smooth) {
        this._revealLines(t, e, 5, n);
    }
    _revealLines(t, e, n, i) {
        if (typeof t != "number" || typeof e != "number") throw new Error("Invalid arguments");
        this._sendRevealRange(new qt(t, 1, e, 1), n, !1, i);
    }
    revealRange(t, e = o2.Smooth, n = !1, i = !0) {
        this._revealRange(t, n ? 1 : 0, i, e);
    }
    revealRangeInCenter(t, e = o2.Smooth) {
        this._revealRange(t, 1, !0, e);
    }
    revealRangeInCenterIfOutsideViewport(t, e = o2.Smooth) {
        this._revealRange(t, 2, !0, e);
    }
    revealRangeNearTop(t, e = o2.Smooth) {
        this._revealRange(t, 5, !0, e);
    }
    revealRangeNearTopIfOutsideViewport(t, e = o2.Smooth) {
        this._revealRange(t, 6, !0, e);
    }
    revealRangeAtTop(t, e = o2.Smooth) {
        this._revealRange(t, 3, !0, e);
    }
    _revealRange(t, e, n, i) {
        if (!qt.isIRange(t)) throw new Error("Invalid arguments");
        this._sendRevealRange(qt.lift(t), e, n, i);
    }
    setSelections(t, e = "api", n = 0) {
        if (this._modelData) {
            if (!t || t.length === 0) throw new Error("Invalid arguments");
            for(let i = 0, r = t.length; i < r; i++)if (!bu.isISelection(t[i])) throw new Error("Invalid arguments");
            this._modelData.viewModel.setSelections(e, t, n);
        }
    }
    getContentWidth() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getContentWidth() : -1;
    }
    getScrollWidth() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getScrollWidth() : -1;
    }
    getScrollLeft() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getCurrentScrollLeft() : -1;
    }
    getContentHeight() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getContentHeight() : -1;
    }
    getScrollHeight() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getScrollHeight() : -1;
    }
    getScrollTop() {
        return this._modelData ? this._modelData.viewModel.viewLayout.getCurrentScrollTop() : -1;
    }
    setScrollLeft(t, e = o2.Immediate) {
        if (this._modelData) {
            if (typeof t != "number") throw new Error("Invalid arguments");
            this._modelData.viewModel.viewLayout.setScrollPosition({
                scrollLeft: t
            }, e);
        }
    }
    setScrollTop(t, e = o2.Immediate) {
        if (this._modelData) {
            if (typeof t != "number") throw new Error("Invalid arguments");
            this._modelData.viewModel.viewLayout.setScrollPosition({
                scrollTop: t
            }, e);
        }
    }
    setScrollPosition(t, e = o2.Immediate) {
        this._modelData && this._modelData.viewModel.viewLayout.setScrollPosition(t, e);
    }
    hasPendingScrollAnimation() {
        return this._modelData ? this._modelData.viewModel.viewLayout.hasPendingScrollAnimation() : !1;
    }
    saveViewState() {
        if (!this._modelData) return null;
        const t = this._contributions.saveViewState(), e = this._modelData.viewModel.saveCursorState(), n = this._modelData.viewModel.saveState();
        return {
            cursorState: e,
            viewState: n,
            contributionsState: t
        };
    }
    restoreViewState(t) {
        if (!this._modelData || !this._modelData.hasRealView) return;
        const e = t;
        if (e && e.cursorState && e.viewState) {
            const n = e.cursorState;
            Array.isArray(n) ? n.length > 0 && this._modelData.viewModel.restoreCursorState(n) : this._modelData.viewModel.restoreCursorState([
                n
            ]), this._contributions.restoreViewState(e.contributionsState || {});
            const i = this._modelData.viewModel.reduceRestoreState(e.viewState);
            this._modelData.view.restoreState(i);
        }
    }
    handleInitialized() {
        this._getViewModel()?.visibleLinesStabilized();
    }
    onVisible() {
        this._modelData?.view.refreshFocusState();
    }
    onHide() {
        this._modelData?.view.refreshFocusState();
    }
    getContribution(t) {
        return this._contributions.get(t);
    }
    getActions() {
        return Array.from(this._actions.values());
    }
    getSupportedActions() {
        let t = this.getActions();
        return t = t.filter((e)=>e.isSupported()), t;
    }
    getAction(t) {
        return this._actions.get(t) || null;
    }
    trigger(t, e, n) {
        n = n || {};
        try {
            switch(this._onWillTriggerEditorOperationEvent.fire({
                source: t,
                handlerId: e,
                payload: n
            }), this._beginUpdate(), e){
                case hoe.CompositionStart:
                    this._startComposition();
                    return;
                case hoe.CompositionEnd:
                    this._endComposition(t);
                    return;
                case hoe.Type:
                    {
                        const r = n;
                        this._type(t, r.text || "");
                        return;
                    }
                case hoe.ReplacePreviousChar:
                    {
                        const r = n;
                        this._compositionType(t, r.text || "", r.replaceCharCnt || 0, 0, 0);
                        return;
                    }
                case hoe.CompositionType:
                    {
                        const r = n;
                        this._compositionType(t, r.text || "", r.replacePrevCharCnt || 0, r.replaceNextCharCnt || 0, r.positionDelta || 0);
                        return;
                    }
                case hoe.Paste:
                    {
                        const r = n;
                        this._paste(t, r.text || "", r.pasteOnNewLine || !1, r.multicursorText || null, r.mode || null, r.clipboardEvent);
                        return;
                    }
                case hoe.Cut:
                    this._cut(t);
                    return;
            }
            const i = this.getAction(e);
            if (i) {
                Promise.resolve(i.run(n)).then(void 0, xr);
                return;
            }
            if (!this._modelData || this._triggerEditorCommand(t, e, n)) return;
            this._triggerCommand(e, n);
        } finally{
            this._endUpdate();
        }
    }
    _triggerCommand(t, e) {
        this._commandService.executeCommand(t, e);
    }
    _startComposition() {
        this._modelData && (this.inComposition = !0, this._modelData.viewModel.startComposition(), this._onDidCompositionStart.fire());
    }
    _endComposition(t) {
        this._modelData && (this.inComposition = !1, this._modelData.viewModel.endComposition(t), this._onDidCompositionEnd.fire());
    }
    _type(t, e) {
        !this._modelData || e.length === 0 || (t === "keyboard" && this._onWillType.fire(e), this._modelData.viewModel.type(e, t), t === "keyboard" && this._onDidType.fire(e));
    }
    _compositionType(t, e, n, i, r) {
        this._modelData && this._modelData.viewModel.compositionType(e, n, i, r, t);
    }
    _paste(t, e, n, i, r, s) {
        if (!this._modelData) return;
        const o = this._modelData.viewModel, a = o.getSelection().getStartPosition();
        o.paste(e, n, i, t);
        const l = o.getSelection().getStartPosition();
        t === "keyboard" && this._onDidPaste.fire({
            clipboardEvent: s,
            range: new qt(a.lineNumber, a.column, l.lineNumber, l.column),
            languageId: r
        });
    }
    _cut(t) {
        this._modelData && this._modelData.viewModel.cut(t);
    }
    _triggerEditorCommand(t, e, n) {
        const i = pW.getEditorCommand(e);
        return i ? (n = n || {}, n.source = t, this._instantiationService.invokeFunction((r)=>{
            Promise.resolve(i.runEditorCommand(r, this, n)).then(void 0, xr);
        }), !0) : !1;
    }
    _getViewModel() {
        return this._modelData ? this._modelData.viewModel : null;
    }
    pushUndoStop() {
        return !this._modelData || this._configuration.options.get(96) ? !1 : (this._modelData.model.pushStackElement(), !0);
    }
    popUndoStop() {
        return !this._modelData || this._configuration.options.get(96) ? !1 : (this._modelData.model.popStackElement(), !0);
    }
    executeEdits(t, e, n) {
        if (!this._modelData || this._configuration.options.get(96)) return !1;
        let i;
        return n ? Array.isArray(n) ? i = ()=>n : i = n : i = ()=>null, this._onBeforeExecuteEdit.fire({
            source: t ?? void 0
        }), this._modelData.viewModel.executeEdits(t, e, i), !0;
    }
    executeCommand(t, e) {
        this._modelData && this._modelData.viewModel.executeCommand(e, t);
    }
    executeCommands(t, e) {
        this._modelData && this._modelData.viewModel.executeCommands(e, t);
    }
    createDecorationsCollection(t) {
        return new THd(this, t);
    }
    changeDecorations(t) {
        return this._modelData ? this._modelData.model.changeDecorations(t, this._id) : null;
    }
    getLineDecorations(t) {
        return this._modelData ? this._modelData.model.getLineDecorations(t, this._id, Zwr(this._configuration.options)) : null;
    }
    getDecorationsInRange(t) {
        return this._modelData ? this._modelData.model.getDecorationsInRange(t, this._id, Zwr(this._configuration.options)) : null;
    }
    deltaDecorations(t, e) {
        return this._modelData ? t.length === 0 && e.length === 0 ? t : this._modelData.model.deltaDecorations(t, e, this._id) : [];
    }
    removeDecorations(t) {
        !this._modelData || t.length === 0 || this._modelData.model.changeDecorations((e)=>{
            e.deltaDecorations(t, []);
        });
    }
    setDecorationsByType(t, e, n) {
        const i = {}, r = this._decorationTypeSubtypes[e] || {};
        this._decorationTypeSubtypes[e] = i;
        const s = [];
        for (const a of n){
            let l = e;
            if (a.renderOptions) {
                const u = tR(a.renderOptions).toString(16);
                l = e + "-" + u, !r[u] && !i[u] && this._registerDecorationType(t, l, a.renderOptions, e), i[u] = !0;
            }
            const c = this._resolveDecorationOptions(l, !!a.hoverMessage);
            a.hoverMessage && (c.hoverMessage = a.hoverMessage), s.push({
                range: a.range,
                options: c
            });
        }
        for(const a in r)i[a] || this._removeDecorationType(e + "-" + a);
        const o = this._decorationTypeKeysToIds[e] || [];
        this.changeDecorations((a)=>this._decorationTypeKeysToIds[e] = a.deltaDecorations(o, s));
    }
    setDecorationsByTypeFast(t, e) {
        const n = this._decorationTypeSubtypes[t] || {};
        for(const o in n)this._removeDecorationType(t + "-" + o);
        this._decorationTypeSubtypes[t] = {};
        const i = Kg.createDynamic(this._resolveDecorationOptions(t, !1)), r = new Array(e.length);
        for(let o = 0, a = e.length; o < a; o++)r[o] = {
            range: e[o],
            options: i
        };
        const s = this._decorationTypeKeysToIds[t] || [];
        this.changeDecorations((o)=>this._decorationTypeKeysToIds[t] = o.deltaDecorations(s, r));
    }
    removeDecorationsByType(t) {
        const e = this._decorationTypeKeysToIds[t];
        if (e && this.changeDecorations((n)=>n.deltaDecorations(e, [])), this._decorationTypeKeysToIds.hasOwnProperty(t) && delete this._decorationTypeKeysToIds[t], this._decorationTypeSubtypes.hasOwnProperty(t)) {
            const n = this._decorationTypeSubtypes[t];
            for (const i of Object.keys(n))this._removeDecorationType(t + "-" + i);
            delete this._decorationTypeSubtypes[t];
        }
    }
    getLayoutInfo() {
        return this._configuration.options.get(151);
    }
    createOverviewRuler(t) {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.createOverviewRuler(t);
    }
    getContainerDomNode() {
        return this._domElement;
    }
    getDomNode() {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.domNode.domNode;
    }
    delegateVerticalScrollbarPointerDown(t) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.delegateVerticalScrollbarPointerDown(t);
    }
    delegateScrollFromMouseWheelEvent(t) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.delegateScrollFromMouseWheelEvent(t);
    }
    layout(t, e = !1) {
        this._configuration.observeContainer(t), e || this.render();
    }
    focus() {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.focus();
    }
    hasTextFocus() {
        return !this._modelData || !this._modelData.hasRealView ? !1 : this._modelData.view.isFocused();
    }
    hasWidgetFocus() {
        return !this._modelData || !this._modelData.hasRealView ? !1 : this._modelData.view.isWidgetFocused();
    }
    addContentWidget(t) {
        const e = {
            widget: t,
            position: t.getPosition()
        };
        this._contentWidgets.hasOwnProperty(t.getId()) && console.warn("Overwriting a content widget with the same id:" + t.getId()), this._contentWidgets[t.getId()] = e, this._modelData && this._modelData.hasRealView && this._modelData.view.addContentWidget(e);
    }
    layoutContentWidget(t) {
        const e = t.getId();
        if (this._contentWidgets.hasOwnProperty(e)) {
            const n = this._contentWidgets[e];
            n.position = t.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutContentWidget(n);
        }
    }
    removeContentWidget(t) {
        const e = t.getId();
        if (this._contentWidgets.hasOwnProperty(e)) {
            const n = this._contentWidgets[e];
            delete this._contentWidgets[e], this._modelData && this._modelData.hasRealView && this._modelData.view.removeContentWidget(n);
        }
    }
    addOverlayWidget(t) {
        const e = {
            widget: t,
            position: t.getPosition()
        };
        this._overlayWidgets.hasOwnProperty(t.getId()) && console.warn("Overwriting an overlay widget with the same id."), this._overlayWidgets[t.getId()] = e, this._modelData && this._modelData.hasRealView && this._modelData.view.addOverlayWidget(e);
    }
    layoutOverlayWidget(t) {
        const e = t.getId();
        if (this._overlayWidgets.hasOwnProperty(e)) {
            const n = this._overlayWidgets[e];
            n.position = t.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutOverlayWidget(n);
        }
    }
    removeOverlayWidget(t) {
        const e = t.getId();
        if (this._overlayWidgets.hasOwnProperty(e)) {
            const n = this._overlayWidgets[e];
            delete this._overlayWidgets[e], this._modelData && this._modelData.hasRealView && this._modelData.view.removeOverlayWidget(n);
        }
    }
    addGlyphMarginWidget(t) {
        const e = {
            widget: t,
            position: t.getPosition()
        };
        this._glyphMarginWidgets.hasOwnProperty(t.getId()) && console.warn("Overwriting a glyph margin widget with the same id."), this._glyphMarginWidgets[t.getId()] = e, this._modelData && this._modelData.hasRealView && this._modelData.view.addGlyphMarginWidget(e);
    }
    layoutGlyphMarginWidget(t) {
        const e = t.getId();
        if (this._glyphMarginWidgets.hasOwnProperty(e)) {
            const n = this._glyphMarginWidgets[e];
            n.position = t.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutGlyphMarginWidget(n);
        }
    }
    removeGlyphMarginWidget(t) {
        const e = t.getId();
        if (this._glyphMarginWidgets.hasOwnProperty(e)) {
            const n = this._glyphMarginWidgets[e];
            delete this._glyphMarginWidgets[e], this._modelData && this._modelData.hasRealView && this._modelData.view.removeGlyphMarginWidget(n);
        }
    }
    changeViewZones(t) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.change(t);
    }
    getTargetAtClientPoint(t, e) {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.getTargetAtClientPoint(t, e);
    }
    getScrolledVisiblePosition(t) {
        if (!this._modelData || !this._modelData.hasRealView) return null;
        const e = this._modelData.model.validatePosition(t), n = this._configuration.options, i = n.get(151), r = w4._getVerticalOffsetForPosition(this._modelData, e.lineNumber, e.column) - this.getScrollTop(), s = this._modelData.view.getOffsetForColumn(e.lineNumber, e.column) + i.glyphMarginWidth + i.lineNumbersWidth + i.decorationsWidth - this.getScrollLeft();
        return {
            top: r,
            left: s,
            height: n.get(68)
        };
    }
    getOffsetForColumn(t, e) {
        return !this._modelData || !this._modelData.hasRealView ? -1 : this._modelData.view.getOffsetForColumn(t, e);
    }
    render(t = !1) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.viewModel.batchEvents(()=>{
            this._modelData.view.render(!0, t);
        });
    }
    setAriaOptions(t) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.setAriaOptions(t);
    }
    applyFontInfo(t) {
        oB(t, this._configuration.options.get(52));
    }
    setBanner(t, e) {
        this._bannerDomNode && this._domElement.contains(this._bannerDomNode) && this._bannerDomNode.remove(), this._bannerDomNode = t, this._configuration.setReservedHeight(t ? e : 0), this._bannerDomNode && this._domElement.prepend(this._bannerDomNode);
    }
    _attachModel(t) {
        if (!t) {
            this._modelData = null;
            return;
        }
        const e = [];
        this._domElement.setAttribute("data-mode-id", t.getLanguageId()), this._configuration.setIsDominatedByLongLines(t.isDominatedByLongLines()), this._configuration.setModelLineCount(t.getLineCount());
        const n = t.onBeforeAttached(), i = new xUd(this._id, this._configuration, t, _Hd.create(ws(this._domElement)), T7d.create(this._configuration.options), (o)=>Ix(ws(this._domElement), o), this.languageConfigurationService, this._themeService, n, {
            batchChanges: (o)=>{
                try {
                    return this._beginUpdate(), o();
                } finally{
                    this._endUpdate();
                }
            }
        });
        e.push(t.onWillDispose(()=>this.setModel(null))), e.push(i.onEvent((o)=>{
            switch(o.kind){
                case 0:
                    this._onDidContentSizeChange.fire(o);
                    break;
                case 1:
                    this._editorTextFocus.setValue(o.hasFocus);
                    break;
                case 2:
                    this._editorWidgetFocus.setValue(o.hasFocus);
                    break;
                case 3:
                    this._onDidScrollChange.fire(o);
                    break;
                case 4:
                    this._onDidChangeViewZones.fire();
                    break;
                case 5:
                    this._onDidChangeHiddenAreas.fire();
                    break;
                case 6:
                    this._onDidAttemptReadOnlyEdit.fire();
                    break;
                case 7:
                    {
                        if (o.reachedMaxCursorCount) {
                            const u = this.getOption(81), d = D(202, null, u);
                            this._notificationService.prompt(Yn.Warning, d, [
                                {
                                    label: "Find and Replace",
                                    run: ()=>{
                                        this._commandService.executeCommand("editor.action.startFindReplaceAction");
                                    }
                                },
                                {
                                    label: D(203, null),
                                    run: ()=>{
                                        this._commandService.executeCommand("workbench.action.openSettings2", {
                                            query: "editor.multiCursorLimit"
                                        });
                                    }
                                }
                            ]);
                        }
                        const a = [];
                        for(let u = 0, d = o.selections.length; u < d; u++)a[u] = o.selections[u].getPosition();
                        const l = {
                            position: a[0],
                            secondaryPositions: a.slice(1),
                            reason: o.reason,
                            source: o.source
                        };
                        this._onDidChangeCursorPosition.fire(l);
                        const c = {
                            selection: o.selections[0],
                            secondarySelections: o.selections.slice(1),
                            modelVersionId: o.modelVersionId,
                            oldSelections: o.oldSelections,
                            oldModelVersionId: o.oldModelVersionId,
                            source: o.source,
                            reason: o.reason
                        };
                        this._onDidChangeCursorSelection.fire(c);
                        break;
                    }
                case 8:
                    this._onDidChangeModelDecorations.fire(o.event);
                    break;
                case 9:
                    this._domElement.setAttribute("data-mode-id", t.getLanguageId()), this._onDidChangeModelLanguage.fire(o.event);
                    break;
                case 10:
                    this._onDidChangeModelLanguageConfiguration.fire(o.event);
                    break;
                case 11:
                    this._onDidChangeModelContent.fire(o.event);
                    break;
                case 12:
                    this._onDidChangeModelOptions.fire(o.event);
                    break;
                case 13:
                    this._onDidChangeModelTokens.fire(o.event);
                    break;
            }
        }));
        const [r, s] = this._createView(i);
        if (s) {
            this._domElement.appendChild(r.domNode.domNode);
            let o = Object.keys(this._contentWidgets);
            for(let a = 0, l = o.length; a < l; a++){
                const c = o[a];
                r.addContentWidget(this._contentWidgets[c]);
            }
            o = Object.keys(this._overlayWidgets);
            for(let a = 0, l = o.length; a < l; a++){
                const c = o[a];
                r.addOverlayWidget(this._overlayWidgets[c]);
            }
            o = Object.keys(this._glyphMarginWidgets);
            for(let a = 0, l = o.length; a < l; a++){
                const c = o[a];
                r.addGlyphMarginWidget(this._glyphMarginWidgets[c]);
            }
            r.render(!1, !0), r.domNode.domNode.setAttribute("data-uri", t.uri.toString());
        }
        this._modelData = new kHd(t, i, r, s, e, n);
    }
    _createView(t) {
        let e;
        this.isSimpleWidget ? e = {
            paste: (r, s, o, a)=>{
                this._paste("keyboard", r, s, o, a);
            },
            type: (r)=>{
                this._type("keyboard", r);
            },
            compositionType: (r, s, o, a)=>{
                this._compositionType("keyboard", r, s, o, a);
            },
            startComposition: ()=>{
                this._startComposition();
            },
            endComposition: ()=>{
                this._endComposition("keyboard");
            },
            cut: ()=>{
                this._cut("keyboard");
            }
        } : e = {
            paste: (r, s, o, a)=>{
                const l = {
                    text: r,
                    pasteOnNewLine: s,
                    multicursorText: o,
                    mode: a
                };
                this._commandService.executeCommand(hoe.Paste, l);
            },
            type: (r)=>{
                const s = {
                    text: r
                };
                this._commandService.executeCommand(hoe.Type, s);
            },
            compositionType: (r, s, o, a)=>{
                if (o || a) {
                    const l = {
                        text: r,
                        replacePrevCharCnt: s,
                        replaceNextCharCnt: o,
                        positionDelta: a
                    };
                    this._commandService.executeCommand(hoe.CompositionType, l);
                } else {
                    const l = {
                        text: r,
                        replaceCharCnt: s
                    };
                    this._commandService.executeCommand(hoe.ReplacePreviousChar, l);
                }
            },
            startComposition: ()=>{
                this._commandService.executeCommand(hoe.CompositionStart, {});
            },
            endComposition: ()=>{
                this._commandService.executeCommand(hoe.CompositionEnd, {});
            },
            cut: ()=>{
                this._commandService.executeCommand(hoe.Cut, {});
            }
        };
        const n = new UHo(t.coordinatesConverter);
        return n.onKeyDown = (r)=>this._onKeyDown.fire(r), n.onKeyUp = (r)=>this._onKeyUp.fire(r), n.onContextMenu = (r)=>this._onContextMenu.fire(r), n.onMouseMove = (r)=>this._onMouseMove.fire(r), n.onMouseLeave = (r)=>this._onMouseLeave.fire(r), n.onMouseDown = (r)=>this._onMouseDown.fire(r), n.onMouseUp = (r)=>this._onMouseUp.fire(r), n.onMouseDrag = (r)=>this._onMouseDrag.fire(r), n.onMouseDrop = (r)=>this._onMouseDrop.fire(r), n.onMouseDropCanceled = (r)=>this._onMouseDropCanceled.fire(r), n.onMouseWheel = (r)=>this._onMouseWheel.fire(r), [
            new ICr(this._domElement, this.getId(), e, this._configuration, this._themeService.getColorTheme(), t, n, this._overflowWidgetsDomNode, this._instantiationService),
            !0
        ];
    }
    _postDetachModelCleanup(t) {
        t?.removeAllDecorationsWithOwnerId(this._id);
    }
    _detachModel() {
        if (this._contributionsDisposable.clear(), !this._modelData) return null;
        const t = this._modelData.model, e = this._modelData.hasRealView ? this._modelData.view.domNode.domNode : null;
        return this._modelData.dispose(), this._modelData = null, this._domElement.removeAttribute("data-mode-id"), e && this._domElement.contains(e) && e.remove(), this._bannerDomNode && this._domElement.contains(this._bannerDomNode) && this._bannerDomNode.remove(), t;
    }
    _registerDecorationType(t, e, n, i) {
        this._codeEditorService.registerDecorationType(t, e, n, i, this);
    }
    _removeDecorationType(t) {
        this._codeEditorService.removeDecorationType(t);
    }
    _resolveDecorationOptions(t, e) {
        return this._codeEditorService.resolveDecorationOptions(t, e);
    }
    getTelemetryData() {
        return this._telemetryData;
    }
    hasModel() {
        return this._modelData !== null;
    }
    showDropIndicatorAt(t) {
        const e = [
            {
                range: new qt(t.lineNumber, t.column, t.lineNumber, t.column),
                options: w4.dropIntoEditorDecorationOptions
            }
        ];
        this._dropIntoEditorDecorations.set(e), this.revealPosition(t, o2.Immediate);
    }
    removeDropIndicator() {
        this._dropIntoEditorDecorations.clear();
    }
    setContextValue(t, e) {
        this._contextKeyService.createKey(t, e);
    }
    _beginUpdate() {
        this._updateCounter++, this._updateCounter === 1 && this._onBeginUpdate.fire();
    }
    _endUpdate() {
        this._updateCounter--, this._updateCounter === 0 && this._onEndUpdate.fire();
    }
}, w4.dropIntoEditorDecorationOptions = Kg.register({
    description: "workbench-dnd-target",
    className: "dnd-target"
}), w4 = Re([
    F(3, dn),
    F(4, Ju),
    F(5, nr),
    F(6, Rr),
    F(7, Ml),
    F(8, Wr),
    F(9, GS),
    F(10, fA),
    F(11, Nd),
    F(12, ehe)
], w4), SHd = 0, kHd = class {
    constructor(t, e, n, i, r, s){
        this.model = t, this.viewModel = e, this.view = n, this.hasRealView = i, this.listenersToRemove = r, this.attachedView = s;
    }
    dispose() {
        Nc(this.listenersToRemove), this.model.onBeforeDetached(this.attachedView), this.hasRealView && this.view.dispose(), this.viewModel.dispose();
    }
}, MWo = class extends st {
    constructor(t){
        super(), this._emitterOptions = t, this._onDidChangeToTrue = this._register(new tt(this._emitterOptions)), this.onDidChangeToTrue = this._onDidChangeToTrue.event, this._onDidChangeToFalse = this._register(new tt(this._emitterOptions)), this.onDidChangeToFalse = this._onDidChangeToFalse.event, this._value = 0;
    }
    setValue(t) {
        const e = t ? 2 : 1;
        this._value !== e && (this._value = e, this._value === 2 ? this._onDidChangeToTrue.fire() : this._value === 1 && this._onDidChangeToFalse.fire());
    }
}, TY = class extends tt {
    constructor(t, e){
        super({
            deliveryQueue: e
        }), this._contributions = t;
    }
    fire(t) {
        this._contributions.onBeforeInteractionEvent(), super.fire(t);
    }
}, wHd = class extends st {
    constructor(t, e, n){
        super(), this._editor = t, e.createKey("editorId", t.getId()), this._editorSimpleInput = si.editorSimpleInput.bindTo(e), this._editorFocus = si.focus.bindTo(e), this._textInputFocus = si.textInputFocus.bindTo(e), this._editorTextFocus = si.editorTextFocus.bindTo(e), this._tabMovesFocus = si.tabMovesFocus.bindTo(e), this._editorReadonly = si.readOnly.bindTo(e), this._inDiffEditor = si.inDiffEditor.bindTo(e), this._editorColumnSelection = si.columnSelection.bindTo(e), this._hasMultipleSelections = si.hasMultipleSelections.bindTo(e), this._hasNonEmptySelection = si.hasNonEmptySelection.bindTo(e), this._canUndo = si.canUndo.bindTo(e), this._canRedo = si.canRedo.bindTo(e), this._register(this._editor.onDidChangeConfiguration(()=>this._updateFromConfig())), this._register(this._editor.onDidChangeCursorSelection(()=>this._updateFromSelection())), this._register(this._editor.onDidFocusEditorWidget(()=>this._updateFromFocus())), this._register(this._editor.onDidBlurEditorWidget(()=>this._updateFromFocus())), this._register(this._editor.onDidFocusEditorText(()=>{
            !this._editorReadonly.get() && !this._editor.isChatCodeblock && n.registerEvent("editor.focus"), this._updateFromFocus();
        })), this._register(this._editor.onDidBlurEditorText(()=>this._updateFromFocus())), this._register(this._editor.onDidChangeModel(()=>this._updateFromModel())), this._register(this._editor.onDidChangeConfiguration(()=>this._updateFromModel())), this._register(KAe.onDidChangeTabFocus((i)=>this._tabMovesFocus.set(i))), this._updateFromConfig(), this._updateFromSelection(), this._updateFromFocus(), this._updateFromModel(), this._editorSimpleInput.set(this._editor.isSimpleWidget);
    }
    _updateFromConfig() {
        const t = this._editor.getOptions();
        this._tabMovesFocus.set(KAe.getTabFocusMode()), this._editorReadonly.set(t.get(96)), this._inDiffEditor.set(t.get(63)), this._editorColumnSelection.set(t.get(22));
    }
    _updateFromSelection() {
        const t = this._editor.getSelections();
        t ? (this._hasMultipleSelections.set(t.length > 1), this._hasNonEmptySelection.set(t.some((e)=>!e.isEmpty()))) : (this._hasMultipleSelections.reset(), this._hasNonEmptySelection.reset());
    }
    _updateFromFocus() {
        this._editorFocus.set(this._editor.hasWidgetFocus() && !this._editor.isSimpleWidget), this._editorTextFocus.set(this._editor.hasTextFocus() && !this._editor.isSimpleWidget), this._textInputFocus.set(this._editor.hasTextFocus());
    }
    _updateFromModel() {
        const t = this._editor.getModel();
        this._canUndo.set(!!(t && t.canUndo())), this._canRedo.set(!!(t && t.canRedo()));
    }
}, CHd = class extends st {
    constructor(t, e, n){
        super(), this._editor = t, this._contextKeyService = e, this._languageFeaturesService = n, this._langId = si.languageId.bindTo(e), this._hasCompletionItemProvider = si.hasCompletionItemProvider.bindTo(e), this._hasCodeActionsProvider = si.hasCodeActionsProvider.bindTo(e), this._hasCodeLensProvider = si.hasCodeLensProvider.bindTo(e), this._hasDefinitionProvider = si.hasDefinitionProvider.bindTo(e), this._hasDeclarationProvider = si.hasDeclarationProvider.bindTo(e), this._hasImplementationProvider = si.hasImplementationProvider.bindTo(e), this._hasTypeDefinitionProvider = si.hasTypeDefinitionProvider.bindTo(e), this._hasHoverProvider = si.hasHoverProvider.bindTo(e), this._hasDocumentHighlightProvider = si.hasDocumentHighlightProvider.bindTo(e), this._hasDocumentSymbolProvider = si.hasDocumentSymbolProvider.bindTo(e), this._hasReferenceProvider = si.hasReferenceProvider.bindTo(e), this._hasRenameProvider = si.hasRenameProvider.bindTo(e), this._hasSignatureHelpProvider = si.hasSignatureHelpProvider.bindTo(e), this._hasInlayHintsProvider = si.hasInlayHintsProvider.bindTo(e), this._hasDocumentFormattingProvider = si.hasDocumentFormattingProvider.bindTo(e), this._hasDocumentSelectionFormattingProvider = si.hasDocumentSelectionFormattingProvider.bindTo(e), this._hasMultipleDocumentFormattingProvider = si.hasMultipleDocumentFormattingProvider.bindTo(e), this._hasMultipleDocumentSelectionFormattingProvider = si.hasMultipleDocumentSelectionFormattingProvider.bindTo(e), this._isInEmbeddedEditor = si.isInEmbeddedEditor.bindTo(e);
        const i = ()=>this._update();
        this._register(t.onDidChangeModel(i)), this._register(t.onDidChangeModelLanguage(i)), this._register(n.completionProvider.onDidChange(i)), this._register(n.codeActionProvider.onDidChange(i)), this._register(n.codeLensProvider.onDidChange(i)), this._register(n.definitionProvider.onDidChange(i)), this._register(n.declarationProvider.onDidChange(i)), this._register(n.implementationProvider.onDidChange(i)), this._register(n.typeDefinitionProvider.onDidChange(i)), this._register(n.hoverProvider.onDidChange(i)), this._register(n.documentHighlightProvider.onDidChange(i)), this._register(n.documentSymbolProvider.onDidChange(i)), this._register(n.referenceProvider.onDidChange(i)), this._register(n.renameProvider.onDidChange(i)), this._register(n.documentFormattingEditProvider.onDidChange(i)), this._register(n.documentRangeFormattingEditProvider.onDidChange(i)), this._register(n.signatureHelpProvider.onDidChange(i)), this._register(n.inlayHintsProvider.onDidChange(i)), i();
    }
    dispose() {
        super.dispose();
    }
    reset() {
        this._contextKeyService.bufferChangeEvents(()=>{
            this._langId.reset(), this._hasCompletionItemProvider.reset(), this._hasCodeActionsProvider.reset(), this._hasCodeLensProvider.reset(), this._hasDefinitionProvider.reset(), this._hasDeclarationProvider.reset(), this._hasImplementationProvider.reset(), this._hasTypeDefinitionProvider.reset(), this._hasHoverProvider.reset(), this._hasDocumentHighlightProvider.reset(), this._hasDocumentSymbolProvider.reset(), this._hasReferenceProvider.reset(), this._hasRenameProvider.reset(), this._hasDocumentFormattingProvider.reset(), this._hasDocumentSelectionFormattingProvider.reset(), this._hasSignatureHelpProvider.reset(), this._isInEmbeddedEditor.reset();
        });
    }
    _update() {
        const t = this._editor.getModel();
        if (!t) {
            this.reset();
            return;
        }
        this._contextKeyService.bufferChangeEvents(()=>{
            this._langId.set(t.getLanguageId()), this._hasCompletionItemProvider.set(this._languageFeaturesService.completionProvider.has(t)), this._hasCodeActionsProvider.set(this._languageFeaturesService.codeActionProvider.has(t)), this._hasCodeLensProvider.set(this._languageFeaturesService.codeLensProvider.has(t)), this._hasDefinitionProvider.set(this._languageFeaturesService.definitionProvider.has(t)), this._hasDeclarationProvider.set(this._languageFeaturesService.declarationProvider.has(t)), this._hasImplementationProvider.set(this._languageFeaturesService.implementationProvider.has(t)), this._hasTypeDefinitionProvider.set(this._languageFeaturesService.typeDefinitionProvider.has(t)), this._hasHoverProvider.set(this._languageFeaturesService.hoverProvider.has(t)), this._hasDocumentHighlightProvider.set(this._languageFeaturesService.documentHighlightProvider.has(t)), this._hasDocumentSymbolProvider.set(this._languageFeaturesService.documentSymbolProvider.has(t)), this._hasReferenceProvider.set(this._languageFeaturesService.referenceProvider.has(t)), this._hasRenameProvider.set(this._languageFeaturesService.renameProvider.has(t)), this._hasSignatureHelpProvider.set(this._languageFeaturesService.signatureHelpProvider.has(t)), this._hasInlayHintsProvider.set(this._languageFeaturesService.inlayHintsProvider.has(t)), this._hasDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.has(t) || this._languageFeaturesService.documentRangeFormattingEditProvider.has(t)), this._hasDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.has(t)), this._hasMultipleDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.all(t).length + this._languageFeaturesService.documentRangeFormattingEditProvider.all(t).length > 1), this._hasMultipleDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.all(t).length > 1), this._isInEmbeddedEditor.set(t.uri.scheme === Ot.walkThroughSnippet || t.uri.scheme === Ot.vscodeChatCodeBlock);
        });
    }
}, THd = class {
    constructor(t, e){
        this._editor = t, this._decorationIds = [], this._isChangingDecorations = !1, Array.isArray(e) && e.length > 0 && this.set(e);
    }
    get length() {
        return this._decorationIds.length;
    }
    onDidChange(t, e, n) {
        return this._editor.onDidChangeModelDecorations((i)=>{
            this._isChangingDecorations || t.call(e, i);
        }, n);
    }
    getRange(t) {
        return !this._editor.hasModel() || t >= this._decorationIds.length ? null : this._editor.getModel().getDecorationRange(this._decorationIds[t]);
    }
    getRanges() {
        if (!this._editor.hasModel()) return [];
        const t = this._editor.getModel(), e = [];
        for (const n of this._decorationIds){
            const i = t.getDecorationRange(n);
            i && e.push(i);
        }
        return e;
    }
    has(t) {
        return this._decorationIds.includes(t.id);
    }
    clear() {
        this._decorationIds.length !== 0 && this.set([]);
    }
    set(t) {
        try {
            this._isChangingDecorations = !0, this._editor.changeDecorations((e)=>{
                this._decorationIds = e.deltaDecorations(this._decorationIds, t);
            });
        } finally{
            this._isChangingDecorations = !1;
        }
        return this._decorationIds;
    }
    append(t) {
        let e = [];
        try {
            this._isChangingDecorations = !0, this._editor.changeDecorations((n)=>{
                e = n.deltaDecorations([], t), this._decorationIds = this._decorationIds.concat(e);
            });
        } finally{
            this._isChangingDecorations = !1;
        }
        return e;
    }
}, EHd = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='"), IHd = encodeURIComponent("'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>"), xHd = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" height="3" width="12"><g fill="'), AHd = encodeURIComponent('"><circle cx="1" cy="1" r="1"/><circle cx="5" cy="1" r="1"/><circle cx="9" cy="1" r="1"/></g></svg>'), nne((t, e)=>{
    const n = t.getColor($9t);
    n && (e.addRule(`.monaco-editor .squiggly-error { background: url("data:image/svg+xml,${vBt(n)}") repeat-x bottom left; }`), e.addRule(`:root { --monaco-editor-error-decoration: url("data:image/svg+xml,${vBt(n)}"); }`));
    const i = t.getColor(F9t);
    i && e.addRule(`.monaco-editor .squiggly-ai { background: url("data:image/svg+xml,${vBt(i)}") repeat-x bottom left; }`);
    const r = t.getColor(tne);
    r && (e.addRule(`.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,${vBt(r)}") repeat-x bottom left; }`), e.addRule(`:root { --monaco-editor-warning-decoration: url("data:image/svg+xml,${vBt(r)}"); }`));
    const s = t.getColor(lwe);
    s && (e.addRule(`.monaco-editor .squiggly-info { background: url("data:image/svg+xml,${vBt(s)}") repeat-x bottom left; }`), e.addRule(`:root { --monaco-editor-info-decoration: url("data:image/svg+xml,${vBt(s)}"); }`));
    const o = t.getColor(A6d);
    o && (e.addRule(`.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,${yHd(o)}") no-repeat bottom left; }`), e.addRule(`:root { --monaco-editor-hint-decoration: url("data:image/svg+xml,${yHd(o)}"); }`));
    const a = t.getColor(gBd);
    a && (e.addRule(`.monaco-editor.showUnused .squiggly-inline-unnecessary { opacity: ${a.rgba.a}; }`), e.addRule(`:root { --monaco-editor-unnecessary-decoration-opacity: ${a.rgba.a}; }`));
});

}
