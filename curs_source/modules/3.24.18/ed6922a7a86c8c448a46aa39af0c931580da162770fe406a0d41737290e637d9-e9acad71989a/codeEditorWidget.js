import { Lo, S, Se, bt, bxc, cn, ns, si, ve, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, Re, ei, ie } from "./actions_2.js";
import { rre } from "./baseColors.js";
import { mbg, s4c } from "./codeEditorContributions.js";
import { Ja, md } from "./codeEditorService.js";
import { tc } from "./colorRegistry.js";
import { $n, vi } from "./commands.js";
import { dn, xn } from "./contextkey.js";
import { _D, nre } from "./cursorColumns.js";
import { Z9, gfi } from "./cursorWordOperations.js";
import { WK } from "./domFontInfo.js";
import { pbg, r4c } from "./domLineBreaksComputer.js";
import { Gb, en, nW, xi } from "./dom_2.js";
import { gbg } from "./editor.css";
import { Lgg, iFc } from "./editorAction.js";
import { $Oc, HV } from "./editorColorRegistry.js";
import { c5, eU, ore, xLc } from "./editorColors.js";
import { OK, VT, bze, fwe } from "./editorCommon.js";
import { Gfn, R5c } from "./editorConfiguration.js";
import { gd, gn } from "./editorContextKeys.js";
import { yc, zC } from "./editorExtensions.js";
import { m1 } from "./editorOptions.js";
import { T_ } from "./hash.js";
import { Ze, _t } from "./instantiation.js";
import { HT, uC } from "./languageConfigurationRegistry.js";
import { Jc, kh } from "./languageFeatures.js";
import { hvg } from "./markerDecorations_2.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { Yn, ya } from "./position.js";
import { Kfg, Ypt, c2, cC, hvi, kI, o4c, pBc } from "./qIc.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { KC, ky } from "./serviceCollection.js";
import { Ewe, Wfn } from "./tabFocus.js";
import { Mv, Vd } from "./textModel.js";
import { $r, as } from "./themeService.js";
import { PK, ure } from "./tooltipService.js";
import { x } from "./tslib.es6.js";
import { J_i, cbg } from "./view.js";
import { h5c, ovg } from "./viewModelImpl.js";
import { Oes, T9c } from "./viewUserInputEvents.js";
var Iw, a4c, c4c, Its, U7, l4c, u4c, d4c, h4c, p4c, m4c, g4c;
export { Its, Iw, U7, a4c, c4c, d4c, g4c, h4c, l4c, m4c, p4c, u4c };
var __wakaru_HP_initialized = false;
export function HP() {
if (__wakaru_HP_initialized) return;
__wakaru_HP_initialized = true;
"use strict";
x(), en(), si(), bt(), T_(), Se(), li(), rt(), Op(), ei(), vi(), dn(), Ze(), KC(), ji(), tc(), as(), ure(), m1(), nre(), HV(), ya(), qi(), _f(), gfi(), Lgg(), fwe(), gd(), HT(), Mv(), kh(), Kfg(), ovg(), WK(), R5c(), Wfn(), yc(), md(), hvg(), cbg(), pbg(), T9c(), mbg(), gbg(), Iw = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this.languageConfigurationService = u, this._tooltipService = p, this._deliveryQueue = bxc(), this._contributions = this._register(new s4c), this._onDidDispose = this._register(new ve), this.onDidDispose = this._onDidDispose.event, this._onDidChangeModelContent = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelContent = this._onDidChangeModelContent.event, this._onDidChangeModelLanguage = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelLanguage = this._onDidChangeModelLanguage.event, this._onDidChangeModelLanguageConfiguration = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelLanguageConfiguration = this._onDidChangeModelLanguageConfiguration.event, this._onDidChangeModelOptions = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelOptions = this._onDidChangeModelOptions.event, this._onDidChangeModelDecorations = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelDecorations = this._onDidChangeModelDecorations.event, this._onDidChangeModelTokens = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModelTokens = this._onDidChangeModelTokens.event, this._onDidChangeConfiguration = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._onWillChangeModel = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onWillChangeModel = this._onWillChangeModel.event, this._onDidChangeModel = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeModel = this._onDidChangeModel.event, this._onDidChangeCursorPosition = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeCursorPosition = this._onDidChangeCursorPosition.event, this._onDidChangeCursorSelection = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeCursorSelection = this._onDidChangeCursorSelection.event, this._onDidAttemptReadOnlyEdit = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDidAttemptReadOnlyEdit = this._onDidAttemptReadOnlyEdit.event, this._onDidLayoutChange = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidLayoutChange = this._onDidLayoutChange.event, this._editorTextFocus = this._register(new Its({
            deliveryQueue: this._deliveryQueue
        })), this.onDidFocusEditorText = this._editorTextFocus.onDidChangeToTrue, this.onDidBlurEditorText = this._editorTextFocus.onDidChangeToFalse, this._editorWidgetFocus = this._register(new Its({
            deliveryQueue: this._deliveryQueue
        })), this.onDidFocusEditorWidget = this._editorWidgetFocus.onDidChangeToTrue, this.onDidBlurEditorWidget = this._editorWidgetFocus.onDidChangeToFalse, this._onWillType = this._register(new U7(this._contributions, this._deliveryQueue)), this.onWillType = this._onWillType.event, this._onDidType = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDidType = this._onDidType.event, this._onDidCompositionStart = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDidCompositionStart = this._onDidCompositionStart.event, this._onDidCompositionEnd = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDidCompositionEnd = this._onDidCompositionEnd.event, this._onDidPaste = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDidPaste = this._onDidPaste.event, this._onMouseUp = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseUp = this._onMouseUp.event, this._onMouseDown = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseDown = this._onMouseDown.event, this._onMouseDrag = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseDrag = this._onMouseDrag.event, this._onMouseDrop = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseDrop = this._onMouseDrop.event, this._onMouseDropCanceled = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseDropCanceled = this._onMouseDropCanceled.event, this._onDropIntoEditor = this._register(new U7(this._contributions, this._deliveryQueue)), this.onDropIntoEditor = this._onDropIntoEditor.event, this._onContextMenu = this._register(new U7(this._contributions, this._deliveryQueue)), this.onContextMenu = this._onContextMenu.event, this._onMouseMove = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseMove = this._onMouseMove.event, this._onMouseLeave = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseLeave = this._onMouseLeave.event, this._onMouseWheel = this._register(new U7(this._contributions, this._deliveryQueue)), this.onMouseWheel = this._onMouseWheel.event, this._onKeyUp = this._register(new U7(this._contributions, this._deliveryQueue)), this.onKeyUp = this._onKeyUp.event, this._onKeyDown = this._register(new U7(this._contributions, this._deliveryQueue)), this.onKeyDown = this._onKeyDown.event, this._onDidContentSizeChange = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidContentSizeChange = this._onDidContentSizeChange.event, this._onDidScrollChange = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidScrollChange = this._onDidScrollChange.event, this._onDidChangeViewZones = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeViewZones = this._onDidChangeViewZones.event, this._onDidChangeHiddenAreas = this._register(new ve({
            deliveryQueue: this._deliveryQueue
        })), this.onDidChangeHiddenAreas = this._onDidChangeHiddenAreas.event, this._updateCounter = 0, this._onWillTriggerEditorOperationEvent = this._register(new ve), this.onWillTriggerEditorOperationEvent = this._onWillTriggerEditorOperationEvent.event, this._onBeginUpdate = this._register(new ve), this.onBeginUpdate = this._onBeginUpdate.event, this._onEndUpdate = this._register(new ve), this.onEndUpdate = this._onEndUpdate.event, this._onBeforeExecuteEdit = this._register(new ve), this.onBeforeExecuteEdit = this._onBeforeExecuteEdit.event, this._contributionsDisposable = this._register(new cn), this._actions = new Map, this._bannerDomNode = null, this._dropIntoEditorDecorations = this.createDecorationsCollection(), this.inComposition = !1, r.willCreateCodeEditor(), this.shouldShowHover = !0;
        const g = {
            ...t,
            ...n.hideLineNumbers ? {
                lineNumbers: "off"
            } : {}
        };
        if (this._domElement = e, this._overflowWidgetsDomNode = g.overflowWidgetsDomNode, delete g.overflowWidgetsDomNode, this._id = ++a4c, this._decorationTypeKeysToIds = {}, this._decorationTypeSubtypes = {}, this._telemetryData = n.telemetryData, this._isMultiDiffEditor = n.isMultiDiffEditor ?? !1, this._isAddedMultiDiffEditor = n.isAddedMultiDiffEditor ?? !1, this._isDeletedMultiDiffEditor = n.isDeletedMultiDiffEditor ?? !1, this._configuration = this._register(this._createConfiguration(n.isSimpleWidget || !1, n.contextMenuId ?? (n.isSimpleWidget ? Re.SimpleEditorContext : Re.EditorContext), g, l, n.isChatCodeblock ?? !1, n.cursorCodeBlockType)), this._register(this._configuration.onDidChange((b)=>{
            this._onDidChangeConfiguration.fire(b);
            const y = this._configuration.options;
            if (b.hasChanged(151)) {
                const T = y.get(151);
                this._onDidLayoutChange.fire(T);
            }
        })), this._contextKeyService = this._register(o.createScoped(this._domElement)), n.contextKeyValues) for (const [b, y] of Object.entries(n.contextKeyValues))this._contextKeyService.createKey(b, y);
        this._notificationService = c, this._codeEditorService = r, this._commandService = s, this._themeService = a, this._register(new l4c(this, this._contextKeyService, this._tooltipService)), this._register(new u4c(this, this._contextKeyService, h)), this._instantiationService = this._register(i.createChild(new ky([
            xn,
            this._contextKeyService
        ]))), this._modelData = null, this._contentWidgets = {}, this._overlayWidgets = {}, this._glyphMarginWidgets = {};
        let f;
        Array.isArray(n.contributions) ? f = n.contributions : f = zC.getEditorContributions(), this._contributions.initialize(this, f, this._instantiationService);
        for (const b of zC.getEditorActions()){
            if (this._actions.has(b.id)) {
                ns(new Error(`Cannot have two actions with the same id ${b.id}`));
                continue;
            }
            const y = new iFc(b.id, b.label, b.alias, b.metadata, b.precondition ?? void 0, (T)=>this._instantiationService.invokeFunction((E)=>Promise.resolve(b.runEditorCommand(E, this, T))), this._contextKeyService);
            this._actions.set(y.id, y);
        }
        const v = ()=>!this._configuration.options.get(96) && this._configuration.options.get(36).enabled;
        this._register(new nW(this._domElement, {
            onDragOver: (b)=>{
                if (!v()) return;
                const y = this.getTargetAtClientPoint(b.clientX, b.clientY);
                y?.position && this.showDropIndicatorAt(y.position);
            },
            onDrop: async (b)=>{
                if (!v() || (this.removeDropIndicator(), !b.dataTransfer)) return;
                const y = this.getTargetAtClientPoint(b.clientX, b.clientY);
                y?.position && this._onDropIntoEditor.fire({
                    position: y.position,
                    event: b
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
    writeScreenReaderContent(e) {
        this._modelData?.view.writeScreenReaderContent(e);
    }
    _createConfiguration(e, t, n, i, r = !1, s = void 0) {
        return new Gfn(e, t, n, this._domElement, i, r, s);
    }
    getId() {
        return this.getEditorType() + ":" + this._id;
    }
    getEditorType() {
        return bze.ICodeEditor;
    }
    dispose() {
        this._codeEditorService.removeCodeEditor(this), this._actions.clear(), this._contentWidgets = {}, this._overlayWidgets = {}, this._removeDecorationTypes(), this._postDetachModelCleanup(this._detachModel()), this._onDidDispose.fire(), super.dispose();
    }
    invokeWithinContext(e) {
        return this._instantiationService.invokeFunction(e);
    }
    updateOptions(e) {
        this._configuration.updateOptions(e || {});
    }
    getOptions() {
        return this._configuration.options;
    }
    getOption(e) {
        return this._configuration.options.get(e);
    }
    getRawOptions() {
        return this._configuration.getRawOptions();
    }
    getOverflowWidgetsDomNode() {
        return this._overflowWidgetsDomNode;
    }
    getConfiguredWordAtPosition(e) {
        return this._modelData ? Z9.getWordAtPosition(this._modelData.model, this._configuration.options.get(136), this._configuration.options.get(135), e) : null;
    }
    getValue(e = null) {
        if (!this._modelData) return "";
        const t = !!(e && e.preserveBOM);
        let n = 0;
        return e && e.lineEnding && e.lineEnding === `
` ? n = 1 : e && e.lineEnding && e.lineEnding === `\r
` && (n = 2), this._modelData.model.getValue(n, t);
    }
    setValue(e) {
        try {
            if (this._beginUpdate(), !this._modelData) return;
            this._modelData.model.setValue(e);
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
    setModel(e = null) {
        if (!this._store.isDisposed) try {
            this._beginUpdate();
            const t = e;
            if (this._modelData === null && t === null || this._modelData && this._modelData.model === t) return;
            const n = {
                oldModelUrl: this._modelData?.model.uri || null,
                newModelUrl: t?.uri || null
            };
            this._onWillChangeModel.fire(n);
            const i = this.hasTextFocus(), r = this._detachModel();
            this._attachModel(t), this.hasModel() ? i && this.focus() : (this._editorTextFocus.setValue(!1), this._editorWidgetFocus.setValue(!1)), this._removeDecorationTypes(), this._onDidChangeModel.fire(n), this._postDetachModelCleanup(r), this._contributionsDisposable.value = this._contributions.onAfterModelAttached();
        } finally{
            this._endUpdate();
        }
    }
    _removeDecorationTypes() {
        if (this._decorationTypeKeysToIds = {}, this._decorationTypeSubtypes) {
            for(const e in this._decorationTypeSubtypes){
                const t = this._decorationTypeSubtypes[e];
                for(const n in t)this._removeDecorationType(e + "-" + n);
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
    static _getVerticalOffsetAfterPosition(e, t, n, i) {
        const r = e.model.validatePosition({
            lineNumber: t,
            column: n
        }), s = e.viewModel.coordinatesConverter.convertModelPositionToViewPosition(r);
        return e.viewModel.viewLayout.getVerticalOffsetAfterLineNumber(s.lineNumber, i);
    }
    getTopForLineNumber(e, t = !1) {
        return this._modelData ? Iw._getVerticalOffsetForPosition(this._modelData, e, 1, t) : -1;
    }
    getTopForPosition(e, t) {
        return this._modelData ? Iw._getVerticalOffsetForPosition(this._modelData, e, t, !1) : -1;
    }
    static _getVerticalOffsetForPosition(e, t, n, i = !1) {
        const r = e.model.validatePosition({
            lineNumber: t,
            column: n
        }), s = e.viewModel.coordinatesConverter.convertModelPositionToViewPosition(r);
        return e.viewModel.viewLayout.getVerticalOffsetForLineNumber(s.lineNumber, i);
    }
    getBottomForLineNumber(e, t = !1) {
        if (!this._modelData) return -1;
        const n = this._modelData.model.getLineMaxColumn(e);
        return Iw._getVerticalOffsetAfterPosition(this._modelData, e, n, t);
    }
    setHiddenAreas(e, t, n) {
        this._modelData?.viewModel.setHiddenAreas(e.map((i)=>dt.lift(i)), t, n);
    }
    getVisibleColumnFromPosition(e) {
        if (!this._modelData) return e.column;
        const t = this._modelData.model.validatePosition(e), n = this._modelData.model.getOptions().tabSize;
        return _D.visibleColumnFromColumn(this._modelData.model.getLineContent(t.lineNumber), t.column, n) + 1;
    }
    getStatusbarColumn(e) {
        if (!this._modelData) return e.column;
        const t = this._modelData.model.validatePosition(e), n = this._modelData.model.getOptions().tabSize;
        return _D.toStatusbarColumn(this._modelData.model.getLineContent(t.lineNumber), t.column, n);
    }
    getPosition() {
        return this._modelData ? this._modelData.viewModel.getPosition() : null;
    }
    setPosition(e, t = "api") {
        if (this._modelData) {
            if (!Yn.isIPosition(e)) throw new Error("Invalid arguments");
            this._modelData.viewModel.setSelections(t, [
                {
                    selectionStartLineNumber: e.lineNumber,
                    selectionStartColumn: e.column,
                    positionLineNumber: e.lineNumber,
                    positionColumn: e.column
                }
            ]);
        }
    }
    _sendRevealRange(e, t, n, i) {
        if (!this._modelData) return;
        if (!dt.isIRange(e)) throw new Error("Invalid arguments");
        const r = this._modelData.model.validateRange(e), s = this._modelData.viewModel.coordinatesConverter.convertModelRangeToViewRange(r);
        this._modelData.viewModel.revealRange("api", n, s, t, i);
    }
    revealLine(e, t = VT.Smooth) {
        this._revealLine(e, 0, t);
    }
    revealLineInCenter(e, t = VT.Smooth) {
        this._revealLine(e, 1, t);
    }
    revealLineInCenterIfOutsideViewport(e, t = VT.Smooth) {
        this._revealLine(e, 2, t);
    }
    revealLineNearTop(e, t = VT.Smooth) {
        this._revealLine(e, 5, t);
    }
    _revealLine(e, t, n) {
        if (typeof e != "number") throw new Error("Invalid arguments");
        this._sendRevealRange(new dt(e, 1, e, 1), t, !1, n);
    }
    revealPosition(e, t = VT.Smooth) {
        this._revealPosition(e, 0, !0, t);
    }
    revealPositionInCenter(e, t = VT.Smooth) {
        this._revealPosition(e, 1, !0, t);
    }
    revealPositionInCenterIfOutsideViewport(e, t = VT.Smooth) {
        this._revealPosition(e, 2, !0, t);
    }
    revealPositionNearTop(e, t = VT.Smooth) {
        this._revealPosition(e, 5, !0, t);
    }
    _revealPosition(e, t, n, i) {
        if (!Yn.isIPosition(e)) throw new Error("Invalid arguments");
        this._sendRevealRange(new dt(e.lineNumber, e.column, e.lineNumber, e.column), t, n, i);
    }
    getSelection() {
        return this._modelData ? this._modelData.viewModel.getSelection() : null;
    }
    getSelections() {
        return this._modelData ? this._modelData.viewModel.getSelections() : null;
    }
    setSelection(e, t = "api") {
        const n = za.isISelection(e), i = dt.isIRange(e);
        if (!n && !i) throw new Error("Invalid arguments");
        if (n) this._setSelectionImpl(e, t);
        else if (i) {
            const r = {
                selectionStartLineNumber: e.startLineNumber,
                selectionStartColumn: e.startColumn,
                positionLineNumber: e.endLineNumber,
                positionColumn: e.endColumn
            };
            this._setSelectionImpl(r, t);
        }
    }
    _setSelectionImpl(e, t) {
        if (!this._modelData) return;
        const n = new za(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
        this._modelData.viewModel.setSelections(t, [
            n
        ]);
    }
    revealLines(e, t, n = VT.Smooth) {
        this._revealLines(e, t, 0, n);
    }
    revealLinesInCenter(e, t, n = VT.Smooth) {
        this._revealLines(e, t, 1, n);
    }
    revealLinesInCenterIfOutsideViewport(e, t, n = VT.Smooth) {
        this._revealLines(e, t, 2, n);
    }
    revealLinesNearTop(e, t, n = VT.Smooth) {
        this._revealLines(e, t, 5, n);
    }
    _revealLines(e, t, n, i) {
        if (typeof e != "number" || typeof t != "number") throw new Error("Invalid arguments");
        this._sendRevealRange(new dt(e, 1, t, 1), n, !1, i);
    }
    revealRange(e, t = VT.Smooth, n = !1, i = !0) {
        this._revealRange(e, n ? 1 : 0, i, t);
    }
    revealRangeInCenter(e, t = VT.Smooth) {
        this._revealRange(e, 1, !0, t);
    }
    revealRangeInCenterIfOutsideViewport(e, t = VT.Smooth) {
        this._revealRange(e, 2, !0, t);
    }
    revealRangeNearTop(e, t = VT.Smooth) {
        this._revealRange(e, 5, !0, t);
    }
    revealRangeNearTopIfOutsideViewport(e, t = VT.Smooth) {
        this._revealRange(e, 6, !0, t);
    }
    revealRangeAtTop(e, t = VT.Smooth) {
        this._revealRange(e, 3, !0, t);
    }
    _revealRange(e, t, n, i) {
        if (!dt.isIRange(e)) throw new Error("Invalid arguments");
        this._sendRevealRange(dt.lift(e), t, n, i);
    }
    setSelections(e, t = "api", n = 0) {
        if (this._modelData) {
            if (!e || e.length === 0) throw new Error("Invalid arguments");
            for(let i = 0, r = e.length; i < r; i++)if (!za.isISelection(e[i])) throw new Error("Invalid arguments");
            this._modelData.viewModel.setSelections(t, e, n);
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
    setScrollLeft(e, t = VT.Immediate) {
        if (this._modelData) {
            if (typeof e != "number") throw new Error("Invalid arguments");
            this._modelData.viewModel.viewLayout.setScrollPosition({
                scrollLeft: e
            }, t);
        }
    }
    setScrollTop(e, t = VT.Immediate) {
        if (this._modelData) {
            if (typeof e != "number") throw new Error("Invalid arguments");
            this._modelData.viewModel.viewLayout.setScrollPosition({
                scrollTop: e
            }, t);
        }
    }
    setScrollPosition(e, t = VT.Immediate) {
        this._modelData && this._modelData.viewModel.viewLayout.setScrollPosition(e, t);
    }
    hasPendingScrollAnimation() {
        return this._modelData ? this._modelData.viewModel.viewLayout.hasPendingScrollAnimation() : !1;
    }
    saveViewState() {
        if (!this._modelData) return null;
        const e = this._contributions.saveViewState(), t = this._modelData.viewModel.saveCursorState(), n = this._modelData.viewModel.saveState();
        return {
            cursorState: t,
            viewState: n,
            contributionsState: e
        };
    }
    restoreViewState(e) {
        if (!this._modelData || !this._modelData.hasRealView) return;
        const t = e;
        if (t && t.cursorState && t.viewState) {
            const n = t.cursorState;
            Array.isArray(n) ? n.length > 0 && this._modelData.viewModel.restoreCursorState(n) : this._modelData.viewModel.restoreCursorState([
                n
            ]), this._contributions.restoreViewState(t.contributionsState || {});
            const i = this._modelData.viewModel.reduceRestoreState(t.viewState);
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
    getContribution(e) {
        return this._contributions.get(e);
    }
    getActions() {
        return Array.from(this._actions.values());
    }
    getSupportedActions() {
        let e = this.getActions();
        return e = e.filter((t)=>t.isSupported()), e;
    }
    getAction(e) {
        return this._actions.get(e) || null;
    }
    trigger(e, t, n) {
        n = n || {};
        try {
            switch(this._onWillTriggerEditorOperationEvent.fire({
                source: e,
                handlerId: t,
                payload: n
            }), this._beginUpdate(), t){
                case OK.CompositionStart:
                    this._startComposition();
                    return;
                case OK.CompositionEnd:
                    this._endComposition(e);
                    return;
                case OK.Type:
                    {
                        const r = n;
                        this._type(e, r.text || "");
                        return;
                    }
                case OK.ReplacePreviousChar:
                    {
                        const r = n;
                        this._compositionType(e, r.text || "", r.replaceCharCnt || 0, 0, 0);
                        return;
                    }
                case OK.CompositionType:
                    {
                        const r = n;
                        this._compositionType(e, r.text || "", r.replacePrevCharCnt || 0, r.replaceNextCharCnt || 0, r.positionDelta || 0);
                        return;
                    }
                case OK.Paste:
                    {
                        const r = n;
                        this._paste(e, r.text || "", r.pasteOnNewLine || !1, r.multicursorText || null, r.mode || null, r.clipboardEvent);
                        return;
                    }
                case OK.Cut:
                    this._cut(e);
                    return;
            }
            const i = this.getAction(t);
            if (i) {
                Promise.resolve(i.run(n)).then(void 0, ns);
                return;
            }
            if (!this._modelData || this._triggerEditorCommand(e, t, n)) return;
            this._triggerCommand(t, n);
        } finally{
            this._endUpdate();
        }
    }
    _triggerCommand(e, t) {
        this._commandService.executeCommand(e, t);
    }
    _startComposition() {
        this._modelData && (this.inComposition = !0, this._modelData.viewModel.startComposition(), this._onDidCompositionStart.fire());
    }
    _endComposition(e) {
        this._modelData && (this.inComposition = !1, this._modelData.viewModel.endComposition(e), this._onDidCompositionEnd.fire());
    }
    _type(e, t) {
        !this._modelData || t.length === 0 || (e === "keyboard" && this._onWillType.fire(t), this._modelData.viewModel.type(t, e), e === "keyboard" && this._onDidType.fire(t));
    }
    _compositionType(e, t, n, i, r) {
        this._modelData && this._modelData.viewModel.compositionType(t, n, i, r, e);
    }
    _paste(e, t, n, i, r, s) {
        if (!this._modelData) return;
        const o = this._modelData.viewModel, a = o.getSelection().getStartPosition();
        o.paste(t, n, i, e);
        const c = o.getSelection().getStartPosition();
        e === "keyboard" && this._onDidPaste.fire({
            clipboardEvent: s,
            range: new dt(a.lineNumber, a.column, c.lineNumber, c.column),
            languageId: r
        });
    }
    _cut(e) {
        this._modelData && this._modelData.viewModel.cut(e);
    }
    _triggerEditorCommand(e, t, n) {
        const i = zC.getEditorCommand(t);
        return i ? (n = n || {}, n.source = e, this._instantiationService.invokeFunction((r)=>{
            Promise.resolve(i.runEditorCommand(r, this, n)).then(void 0, ns);
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
    executeEdits(e, t, n) {
        if (!this._modelData || this._configuration.options.get(96)) return !1;
        let i;
        return n ? Array.isArray(n) ? i = ()=>n : i = n : i = ()=>null, this._onBeforeExecuteEdit.fire({
            source: e ?? void 0
        }), this._modelData.viewModel.executeEdits(e, t, i), !0;
    }
    executeCommand(e, t) {
        this._modelData && this._modelData.viewModel.executeCommand(t, e);
    }
    executeCommands(e, t) {
        this._modelData && this._modelData.viewModel.executeCommands(t, e);
    }
    createDecorationsCollection(e) {
        return new d4c(this, e);
    }
    changeDecorations(e) {
        return this._modelData ? this._modelData.model.changeDecorations(e, this._id) : null;
    }
    getLineDecorations(e) {
        return this._modelData ? this._modelData.model.getLineDecorations(e, this._id, hvi(this._configuration.options)) : null;
    }
    getDecorationsInRange(e) {
        return this._modelData ? this._modelData.model.getDecorationsInRange(e, this._id, hvi(this._configuration.options)) : null;
    }
    deltaDecorations(e, t) {
        return this._modelData ? e.length === 0 && t.length === 0 ? e : this._modelData.model.deltaDecorations(e, t, this._id) : [];
    }
    removeDecorations(e) {
        !this._modelData || e.length === 0 || this._modelData.model.changeDecorations((t)=>{
            t.deltaDecorations(e, []);
        });
    }
    setDecorationsByType(e, t, n) {
        const i = {}, r = this._decorationTypeSubtypes[t] || {};
        this._decorationTypeSubtypes[t] = i;
        const s = [];
        for (const a of n){
            let c = t;
            if (a.renderOptions) {
                const u = cC(a.renderOptions).toString(16);
                c = t + "-" + u, !r[u] && !i[u] && this._registerDecorationType(e, c, a.renderOptions, t), i[u] = !0;
            }
            const l = this._resolveDecorationOptions(c, !!a.hoverMessage);
            a.hoverMessage && (l.hoverMessage = a.hoverMessage), s.push({
                range: a.range,
                options: l
            });
        }
        for(const a in r)i[a] || this._removeDecorationType(t + "-" + a);
        const o = this._decorationTypeKeysToIds[t] || [];
        this.changeDecorations((a)=>this._decorationTypeKeysToIds[t] = a.deltaDecorations(o, s));
    }
    setDecorationsByTypeFast(e, t) {
        const n = this._decorationTypeSubtypes[e] || {};
        for(const o in n)this._removeDecorationType(e + "-" + o);
        this._decorationTypeSubtypes[e] = {};
        const i = Vd.createDynamic(this._resolveDecorationOptions(e, !1)), r = new Array(t.length);
        for(let o = 0, a = t.length; o < a; o++)r[o] = {
            range: t[o],
            options: i
        };
        const s = this._decorationTypeKeysToIds[e] || [];
        this.changeDecorations((o)=>this._decorationTypeKeysToIds[e] = o.deltaDecorations(s, r));
    }
    removeDecorationsByType(e) {
        const t = this._decorationTypeKeysToIds[e];
        if (t && this.changeDecorations((n)=>n.deltaDecorations(t, [])), this._decorationTypeKeysToIds.hasOwnProperty(e) && delete this._decorationTypeKeysToIds[e], this._decorationTypeSubtypes.hasOwnProperty(e)) {
            const n = this._decorationTypeSubtypes[e];
            for (const i of Object.keys(n))this._removeDecorationType(e + "-" + i);
            delete this._decorationTypeSubtypes[e];
        }
    }
    getLayoutInfo() {
        return this._configuration.options.get(151);
    }
    createOverviewRuler(e) {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.createOverviewRuler(e);
    }
    getContainerDomNode() {
        return this._domElement;
    }
    getDomNode() {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.domNode.domNode;
    }
    delegateVerticalScrollbarPointerDown(e) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.delegateVerticalScrollbarPointerDown(e);
    }
    delegateScrollFromMouseWheelEvent(e) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.delegateScrollFromMouseWheelEvent(e);
    }
    layout(e, t = !1) {
        this._configuration.observeContainer(e), t || this.render();
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
    addContentWidget(e) {
        const t = {
            widget: e,
            position: e.getPosition()
        };
        this._contentWidgets.hasOwnProperty(e.getId()) && console.warn("Overwriting a content widget with the same id:" + e.getId()), this._contentWidgets[e.getId()] = t, this._modelData && this._modelData.hasRealView && this._modelData.view.addContentWidget(t);
    }
    layoutContentWidget(e) {
        const t = e.getId();
        if (this._contentWidgets.hasOwnProperty(t)) {
            const n = this._contentWidgets[t];
            n.position = e.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutContentWidget(n);
        }
    }
    removeContentWidget(e) {
        const t = e.getId();
        if (this._contentWidgets.hasOwnProperty(t)) {
            const n = this._contentWidgets[t];
            delete this._contentWidgets[t], this._modelData && this._modelData.hasRealView && this._modelData.view.removeContentWidget(n);
        }
    }
    addOverlayWidget(e) {
        const t = {
            widget: e,
            position: e.getPosition()
        };
        this._overlayWidgets.hasOwnProperty(e.getId()) && console.warn("Overwriting an overlay widget with the same id."), this._overlayWidgets[e.getId()] = t, this._modelData && this._modelData.hasRealView && this._modelData.view.addOverlayWidget(t);
    }
    layoutOverlayWidget(e) {
        const t = e.getId();
        if (this._overlayWidgets.hasOwnProperty(t)) {
            const n = this._overlayWidgets[t];
            n.position = e.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutOverlayWidget(n);
        }
    }
    removeOverlayWidget(e) {
        const t = e.getId();
        if (this._overlayWidgets.hasOwnProperty(t)) {
            const n = this._overlayWidgets[t];
            delete this._overlayWidgets[t], this._modelData && this._modelData.hasRealView && this._modelData.view.removeOverlayWidget(n);
        }
    }
    addGlyphMarginWidget(e) {
        const t = {
            widget: e,
            position: e.getPosition()
        };
        this._glyphMarginWidgets.hasOwnProperty(e.getId()) && console.warn("Overwriting a glyph margin widget with the same id."), this._glyphMarginWidgets[e.getId()] = t, this._modelData && this._modelData.hasRealView && this._modelData.view.addGlyphMarginWidget(t);
    }
    layoutGlyphMarginWidget(e) {
        const t = e.getId();
        if (this._glyphMarginWidgets.hasOwnProperty(t)) {
            const n = this._glyphMarginWidgets[t];
            n.position = e.getPosition(), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutGlyphMarginWidget(n);
        }
    }
    removeGlyphMarginWidget(e) {
        const t = e.getId();
        if (this._glyphMarginWidgets.hasOwnProperty(t)) {
            const n = this._glyphMarginWidgets[t];
            delete this._glyphMarginWidgets[t], this._modelData && this._modelData.hasRealView && this._modelData.view.removeGlyphMarginWidget(n);
        }
    }
    changeViewZones(e) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.change(e);
    }
    getTargetAtClientPoint(e, t) {
        return !this._modelData || !this._modelData.hasRealView ? null : this._modelData.view.getTargetAtClientPoint(e, t);
    }
    getScrolledVisiblePosition(e) {
        if (!this._modelData || !this._modelData.hasRealView) return null;
        const t = this._modelData.model.validatePosition(e), n = this._configuration.options, i = n.get(151), r = Iw._getVerticalOffsetForPosition(this._modelData, t.lineNumber, t.column) - this.getScrollTop(), s = this._modelData.view.getOffsetForColumn(t.lineNumber, t.column) + i.glyphMarginWidth + i.lineNumbersWidth + i.decorationsWidth - this.getScrollLeft();
        return {
            top: r,
            left: s,
            height: n.get(68)
        };
    }
    getOffsetForColumn(e, t) {
        return !this._modelData || !this._modelData.hasRealView ? -1 : this._modelData.view.getOffsetForColumn(e, t);
    }
    render(e = !1) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.viewModel.batchEvents(()=>{
            this._modelData.view.render(!0, e);
        });
    }
    setAriaOptions(e) {
        !this._modelData || !this._modelData.hasRealView || this._modelData.view.setAriaOptions(e);
    }
    applyFontInfo(e) {
        c2(e, this._configuration.options.get(52));
    }
    setBanner(e, t) {
        this._bannerDomNode && this._domElement.contains(this._bannerDomNode) && this._bannerDomNode.remove(), this._bannerDomNode = e, this._configuration.setReservedHeight(e ? t : 0), this._bannerDomNode && this._domElement.prepend(this._bannerDomNode);
    }
    _attachModel(e) {
        if (!e) {
            this._modelData = null;
            return;
        }
        const t = [];
        this._domElement.setAttribute("data-mode-id", e.getLanguageId()), this._configuration.setIsDominatedByLongLines(e.isDominatedByLongLines()), this._configuration.setModelLineCount(e.getLineCount());
        const n = e.onBeforeAttached(), i = new h5c(this._id, this._configuration, e, r4c.create(xi(this._domElement)), pBc.create(this._configuration.options), (o)=>Gb(xi(this._domElement), o), this.languageConfigurationService, this._themeService, n, {
            batchChanges: (o)=>{
                try {
                    return this._beginUpdate(), o();
                } finally{
                    this._endUpdate();
                }
            }
        });
        t.push(e.onWillDispose(()=>this.setModel(null))), t.push(i.onEvent((o)=>{
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
                            const u = this.getOption(81), h = S(202, null, u);
                            this._notificationService.prompt(pi.Warning, h, [
                                {
                                    label: "Find and Replace",
                                    run: ()=>{
                                        this._commandService.executeCommand("editor.action.startFindReplaceAction");
                                    }
                                },
                                {
                                    label: S(203, null),
                                    run: ()=>{
                                        this._commandService.executeCommand("workbench.action.openSettings2", {
                                            query: "editor.multiCursorLimit"
                                        });
                                    }
                                }
                            ]);
                        }
                        const a = [];
                        for(let u = 0, h = o.selections.length; u < h; u++)a[u] = o.selections[u].getPosition();
                        const c = {
                            position: a[0],
                            secondaryPositions: a.slice(1),
                            reason: o.reason,
                            source: o.source
                        };
                        this._onDidChangeCursorPosition.fire(c);
                        const l = {
                            selection: o.selections[0],
                            secondarySelections: o.selections.slice(1),
                            modelVersionId: o.modelVersionId,
                            oldSelections: o.oldSelections,
                            oldModelVersionId: o.oldModelVersionId,
                            source: o.source,
                            reason: o.reason
                        };
                        this._onDidChangeCursorSelection.fire(l);
                        break;
                    }
                case 8:
                    this._onDidChangeModelDecorations.fire(o.event);
                    break;
                case 9:
                    this._domElement.setAttribute("data-mode-id", e.getLanguageId()), this._onDidChangeModelLanguage.fire(o.event);
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
            for(let a = 0, c = o.length; a < c; a++){
                const l = o[a];
                r.addContentWidget(this._contentWidgets[l]);
            }
            o = Object.keys(this._overlayWidgets);
            for(let a = 0, c = o.length; a < c; a++){
                const l = o[a];
                r.addOverlayWidget(this._overlayWidgets[l]);
            }
            o = Object.keys(this._glyphMarginWidgets);
            for(let a = 0, c = o.length; a < c; a++){
                const l = o[a];
                r.addGlyphMarginWidget(this._glyphMarginWidgets[l]);
            }
            r.render(!1, !0), r.domNode.domNode.setAttribute("data-uri", e.uri.toString());
        }
        this._modelData = new c4c(e, i, r, s, t, n);
    }
    _createView(e) {
        let t;
        this.isSimpleWidget ? t = {
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
        } : t = {
            paste: (r, s, o, a)=>{
                const c = {
                    text: r,
                    pasteOnNewLine: s,
                    multicursorText: o,
                    mode: a
                };
                this._commandService.executeCommand(OK.Paste, c);
            },
            type: (r)=>{
                const s = {
                    text: r
                };
                this._commandService.executeCommand(OK.Type, s);
            },
            compositionType: (r, s, o, a)=>{
                if (o || a) {
                    const c = {
                        text: r,
                        replacePrevCharCnt: s,
                        replaceNextCharCnt: o,
                        positionDelta: a
                    };
                    this._commandService.executeCommand(OK.CompositionType, c);
                } else {
                    const c = {
                        text: r,
                        replaceCharCnt: s
                    };
                    this._commandService.executeCommand(OK.ReplacePreviousChar, c);
                }
            },
            startComposition: ()=>{
                this._commandService.executeCommand(OK.CompositionStart, {});
            },
            endComposition: ()=>{
                this._commandService.executeCommand(OK.CompositionEnd, {});
            },
            cut: ()=>{
                this._commandService.executeCommand(OK.Cut, {});
            }
        };
        const n = new Oes(e.coordinatesConverter);
        return n.onKeyDown = (r)=>this._onKeyDown.fire(r), n.onKeyUp = (r)=>this._onKeyUp.fire(r), n.onContextMenu = (r)=>this._onContextMenu.fire(r), n.onMouseMove = (r)=>this._onMouseMove.fire(r), n.onMouseLeave = (r)=>this._onMouseLeave.fire(r), n.onMouseDown = (r)=>this._onMouseDown.fire(r), n.onMouseUp = (r)=>this._onMouseUp.fire(r), n.onMouseDrag = (r)=>this._onMouseDrag.fire(r), n.onMouseDrop = (r)=>this._onMouseDrop.fire(r), n.onMouseDropCanceled = (r)=>this._onMouseDropCanceled.fire(r), n.onMouseWheel = (r)=>this._onMouseWheel.fire(r), [
            new J_i(this._domElement, this.getId(), t, this._configuration, this._themeService.getColorTheme(), e, n, this._overflowWidgetsDomNode, this._instantiationService),
            !0
        ];
    }
    _postDetachModelCleanup(e) {
        e?.removeAllDecorationsWithOwnerId(this._id);
    }
    _detachModel() {
        if (this._contributionsDisposable.clear(), !this._modelData) return null;
        const e = this._modelData.model, t = this._modelData.hasRealView ? this._modelData.view.domNode.domNode : null;
        return this._modelData.dispose(), this._modelData = null, this._domElement.removeAttribute("data-mode-id"), t && this._domElement.contains(t) && t.remove(), this._bannerDomNode && this._domElement.contains(this._bannerDomNode) && this._bannerDomNode.remove(), e;
    }
    _registerDecorationType(e, t, n, i) {
        this._codeEditorService.registerDecorationType(e, t, n, i, this);
    }
    _removeDecorationType(e) {
        this._codeEditorService.removeDecorationType(e);
    }
    _resolveDecorationOptions(e, t) {
        return this._codeEditorService.resolveDecorationOptions(e, t);
    }
    getTelemetryData() {
        return this._telemetryData;
    }
    hasModel() {
        return this._modelData !== null;
    }
    showDropIndicatorAt(e) {
        const t = [
            {
                range: new dt(e.lineNumber, e.column, e.lineNumber, e.column),
                options: Iw.dropIntoEditorDecorationOptions
            }
        ];
        this._dropIntoEditorDecorations.set(t), this.revealPosition(e, VT.Immediate);
    }
    removeDropIndicator() {
        this._dropIntoEditorDecorations.clear();
    }
    setContextValue(e, t) {
        this._contextKeyService.createKey(e, t);
    }
    _beginUpdate() {
        this._updateCounter++, this._updateCounter === 1 && this._onBeginUpdate.fire();
    }
    _endUpdate() {
        this._updateCounter--, this._updateCounter === 0 && this._onEndUpdate.fire();
    }
}, Iw.dropIntoEditorDecorationOptions = Vd.register({
    description: "workbench-dnd-target",
    className: "dnd-target"
}), Iw = ie([
    C(3, _t),
    C(4, Ja),
    C(5, $n),
    C(6, xn),
    C(7, $r),
    C(8, di),
    C(9, ym),
    C(10, uC),
    C(11, Jc),
    C(12, PK)
], Iw), a4c = 0, c4c = class {
    constructor(e, t, n, i, r, s){
        this.model = e, this.viewModel = t, this.view = n, this.hasRealView = i, this.listenersToRemove = r, this.attachedView = s;
    }
    dispose() {
        Lo(this.listenersToRemove), this.model.onBeforeDetached(this.attachedView), this.hasRealView && this.view.dispose(), this.viewModel.dispose();
    }
}, Its = class extends we {
    constructor(e){
        super(), this._emitterOptions = e, this._onDidChangeToTrue = this._register(new ve(this._emitterOptions)), this.onDidChangeToTrue = this._onDidChangeToTrue.event, this._onDidChangeToFalse = this._register(new ve(this._emitterOptions)), this.onDidChangeToFalse = this._onDidChangeToFalse.event, this._value = 0;
    }
    setValue(e) {
        const t = e ? 2 : 1;
        this._value !== t && (this._value = t, this._value === 2 ? this._onDidChangeToTrue.fire() : this._value === 1 && this._onDidChangeToFalse.fire());
    }
}, U7 = class extends ve {
    constructor(e, t){
        super({
            deliveryQueue: t
        }), this._contributions = e;
    }
    fire(e) {
        this._contributions.onBeforeInteractionEvent(), super.fire(e);
    }
}, l4c = class extends we {
    constructor(e, t, n){
        super(), this._editor = e, t.createKey("editorId", e.getId()), this._editorSimpleInput = gn.editorSimpleInput.bindTo(t), this._editorFocus = gn.focus.bindTo(t), this._textInputFocus = gn.textInputFocus.bindTo(t), this._editorTextFocus = gn.editorTextFocus.bindTo(t), this._tabMovesFocus = gn.tabMovesFocus.bindTo(t), this._editorReadonly = gn.readOnly.bindTo(t), this._inDiffEditor = gn.inDiffEditor.bindTo(t), this._editorColumnSelection = gn.columnSelection.bindTo(t), this._hasMultipleSelections = gn.hasMultipleSelections.bindTo(t), this._hasNonEmptySelection = gn.hasNonEmptySelection.bindTo(t), this._canUndo = gn.canUndo.bindTo(t), this._canRedo = gn.canRedo.bindTo(t), this._register(this._editor.onDidChangeConfiguration(()=>this._updateFromConfig())), this._register(this._editor.onDidChangeCursorSelection(()=>this._updateFromSelection())), this._register(this._editor.onDidFocusEditorWidget(()=>this._updateFromFocus())), this._register(this._editor.onDidBlurEditorWidget(()=>this._updateFromFocus())), this._register(this._editor.onDidFocusEditorText(()=>{
            !this._editorReadonly.get() && !this._editor.isChatCodeblock && n.registerEvent("editor.focus"), this._updateFromFocus();
        })), this._register(this._editor.onDidBlurEditorText(()=>this._updateFromFocus())), this._register(this._editor.onDidChangeModel(()=>this._updateFromModel())), this._register(this._editor.onDidChangeConfiguration(()=>this._updateFromModel())), this._register(Ewe.onDidChangeTabFocus((i)=>this._tabMovesFocus.set(i))), this._updateFromConfig(), this._updateFromSelection(), this._updateFromFocus(), this._updateFromModel(), this._editorSimpleInput.set(this._editor.isSimpleWidget);
    }
    _updateFromConfig() {
        const e = this._editor.getOptions();
        this._tabMovesFocus.set(Ewe.getTabFocusMode()), this._editorReadonly.set(e.get(96)), this._inDiffEditor.set(e.get(63)), this._editorColumnSelection.set(e.get(22));
    }
    _updateFromSelection() {
        const e = this._editor.getSelections();
        e ? (this._hasMultipleSelections.set(e.length > 1), this._hasNonEmptySelection.set(e.some((t)=>!t.isEmpty()))) : (this._hasMultipleSelections.reset(), this._hasNonEmptySelection.reset());
    }
    _updateFromFocus() {
        this._editorFocus.set(this._editor.hasWidgetFocus() && !this._editor.isSimpleWidget), this._editorTextFocus.set(this._editor.hasTextFocus() && !this._editor.isSimpleWidget), this._textInputFocus.set(this._editor.hasTextFocus());
    }
    _updateFromModel() {
        const e = this._editor.getModel();
        this._canUndo.set(!!(e && e.canUndo())), this._canRedo.set(!!(e && e.canRedo()));
    }
}, u4c = class extends we {
    constructor(e, t, n){
        super(), this._editor = e, this._contextKeyService = t, this._languageFeaturesService = n, this._langId = gn.languageId.bindTo(t), this._hasCompletionItemProvider = gn.hasCompletionItemProvider.bindTo(t), this._hasCodeActionsProvider = gn.hasCodeActionsProvider.bindTo(t), this._hasCodeLensProvider = gn.hasCodeLensProvider.bindTo(t), this._hasDefinitionProvider = gn.hasDefinitionProvider.bindTo(t), this._hasDeclarationProvider = gn.hasDeclarationProvider.bindTo(t), this._hasImplementationProvider = gn.hasImplementationProvider.bindTo(t), this._hasTypeDefinitionProvider = gn.hasTypeDefinitionProvider.bindTo(t), this._hasHoverProvider = gn.hasHoverProvider.bindTo(t), this._hasDocumentHighlightProvider = gn.hasDocumentHighlightProvider.bindTo(t), this._hasDocumentSymbolProvider = gn.hasDocumentSymbolProvider.bindTo(t), this._hasReferenceProvider = gn.hasReferenceProvider.bindTo(t), this._hasRenameProvider = gn.hasRenameProvider.bindTo(t), this._hasSignatureHelpProvider = gn.hasSignatureHelpProvider.bindTo(t), this._hasInlayHintsProvider = gn.hasInlayHintsProvider.bindTo(t), this._hasDocumentFormattingProvider = gn.hasDocumentFormattingProvider.bindTo(t), this._hasDocumentSelectionFormattingProvider = gn.hasDocumentSelectionFormattingProvider.bindTo(t), this._hasMultipleDocumentFormattingProvider = gn.hasMultipleDocumentFormattingProvider.bindTo(t), this._hasMultipleDocumentSelectionFormattingProvider = gn.hasMultipleDocumentSelectionFormattingProvider.bindTo(t), this._isInEmbeddedEditor = gn.isInEmbeddedEditor.bindTo(t);
        const i = ()=>this._update();
        this._register(e.onDidChangeModel(i)), this._register(e.onDidChangeModelLanguage(i)), this._register(n.completionProvider.onDidChange(i)), this._register(n.codeActionProvider.onDidChange(i)), this._register(n.codeLensProvider.onDidChange(i)), this._register(n.definitionProvider.onDidChange(i)), this._register(n.declarationProvider.onDidChange(i)), this._register(n.implementationProvider.onDidChange(i)), this._register(n.typeDefinitionProvider.onDidChange(i)), this._register(n.hoverProvider.onDidChange(i)), this._register(n.documentHighlightProvider.onDidChange(i)), this._register(n.documentSymbolProvider.onDidChange(i)), this._register(n.referenceProvider.onDidChange(i)), this._register(n.renameProvider.onDidChange(i)), this._register(n.documentFormattingEditProvider.onDidChange(i)), this._register(n.documentRangeFormattingEditProvider.onDidChange(i)), this._register(n.signatureHelpProvider.onDidChange(i)), this._register(n.inlayHintsProvider.onDidChange(i)), i();
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
        const e = this._editor.getModel();
        if (!e) {
            this.reset();
            return;
        }
        this._contextKeyService.bufferChangeEvents(()=>{
            this._langId.set(e.getLanguageId()), this._hasCompletionItemProvider.set(this._languageFeaturesService.completionProvider.has(e)), this._hasCodeActionsProvider.set(this._languageFeaturesService.codeActionProvider.has(e)), this._hasCodeLensProvider.set(this._languageFeaturesService.codeLensProvider.has(e)), this._hasDefinitionProvider.set(this._languageFeaturesService.definitionProvider.has(e)), this._hasDeclarationProvider.set(this._languageFeaturesService.declarationProvider.has(e)), this._hasImplementationProvider.set(this._languageFeaturesService.implementationProvider.has(e)), this._hasTypeDefinitionProvider.set(this._languageFeaturesService.typeDefinitionProvider.has(e)), this._hasHoverProvider.set(this._languageFeaturesService.hoverProvider.has(e)), this._hasDocumentHighlightProvider.set(this._languageFeaturesService.documentHighlightProvider.has(e)), this._hasDocumentSymbolProvider.set(this._languageFeaturesService.documentSymbolProvider.has(e)), this._hasReferenceProvider.set(this._languageFeaturesService.referenceProvider.has(e)), this._hasRenameProvider.set(this._languageFeaturesService.renameProvider.has(e)), this._hasSignatureHelpProvider.set(this._languageFeaturesService.signatureHelpProvider.has(e)), this._hasInlayHintsProvider.set(this._languageFeaturesService.inlayHintsProvider.has(e)), this._hasDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.has(e) || this._languageFeaturesService.documentRangeFormattingEditProvider.has(e)), this._hasDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.has(e)), this._hasMultipleDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.all(e).length + this._languageFeaturesService.documentRangeFormattingEditProvider.all(e).length > 1), this._hasMultipleDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.all(e).length > 1), this._isInEmbeddedEditor.set(e.uri.scheme === gt.walkThroughSnippet || e.uri.scheme === gt.vscodeChatCodeBlock);
        });
    }
}, d4c = class {
    constructor(e, t){
        this._editor = e, this._decorationIds = [], this._isChangingDecorations = !1, Array.isArray(t) && t.length > 0 && this.set(t);
    }
    get length() {
        return this._decorationIds.length;
    }
    onDidChange(e, t, n) {
        return this._editor.onDidChangeModelDecorations((i)=>{
            this._isChangingDecorations || e.call(t, i);
        }, n);
    }
    getRange(e) {
        return !this._editor.hasModel() || e >= this._decorationIds.length ? null : this._editor.getModel().getDecorationRange(this._decorationIds[e]);
    }
    getRanges() {
        if (!this._editor.hasModel()) return [];
        const e = this._editor.getModel(), t = [];
        for (const n of this._decorationIds){
            const i = e.getDecorationRange(n);
            i && t.push(i);
        }
        return t;
    }
    has(e) {
        return this._decorationIds.includes(e.id);
    }
    clear() {
        this._decorationIds.length !== 0 && this.set([]);
    }
    set(e) {
        try {
            this._isChangingDecorations = !0, this._editor.changeDecorations((t)=>{
                this._decorationIds = t.deltaDecorations(this._decorationIds, e);
            });
        } finally{
            this._isChangingDecorations = !1;
        }
        return this._decorationIds;
    }
    append(e) {
        let t = [];
        try {
            this._isChangingDecorations = !0, this._editor.changeDecorations((n)=>{
                t = n.deltaDecorations([], e), this._decorationIds = this._decorationIds.concat(t);
            });
        } finally{
            this._isChangingDecorations = !1;
        }
        return t;
    }
}, h4c = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='"), p4c = encodeURIComponent("'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>"), m4c = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" height="3" width="12"><g fill="'), g4c = encodeURIComponent('"><circle cx="1" cy="1" r="1"/><circle cx="5" cy="1" r="1"/><circle cx="9" cy="1" r="1"/></g></svg>'), kI((e, t)=>{
    const n = e.getColor(ore);
    n && (t.addRule(`.monaco-editor .squiggly-error { background: url("data:image/svg+xml,${Ypt(n)}") repeat-x bottom left; }`), t.addRule(`:root { --monaco-editor-error-decoration: url("data:image/svg+xml,${Ypt(n)}"); }`));
    const i = e.getColor(rre);
    i && t.addRule(`.monaco-editor .squiggly-ai { background: url("data:image/svg+xml,${Ypt(i)}") repeat-x bottom left; }`);
    const r = e.getColor(c5);
    r && (t.addRule(`.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,${Ypt(r)}") repeat-x bottom left; }`), t.addRule(`:root { --monaco-editor-warning-decoration: url("data:image/svg+xml,${Ypt(r)}"); }`));
    const s = e.getColor(eU);
    s && (t.addRule(`.monaco-editor .squiggly-info { background: url("data:image/svg+xml,${Ypt(s)}") repeat-x bottom left; }`), t.addRule(`:root { --monaco-editor-info-decoration: url("data:image/svg+xml,${Ypt(s)}"); }`));
    const o = e.getColor(xLc);
    o && (t.addRule(`.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,${o4c(o)}") no-repeat bottom left; }`), t.addRule(`:root { --monaco-editor-hint-decoration: url("data:image/svg+xml,${o4c(o)}"); }`));
    const a = e.getColor($Oc);
    a && (t.addRule(`.monaco-editor.showUnused .squiggly-inline-unnecessary { opacity: ${a.rgba.a}; }`), t.addRule(`:root { --monaco-editor-unnecessary-decoration-opacity: ${a.rgba.a}; }`));
});

}
