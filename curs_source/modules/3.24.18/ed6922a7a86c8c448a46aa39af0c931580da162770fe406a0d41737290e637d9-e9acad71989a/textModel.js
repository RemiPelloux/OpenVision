import { CO, C_, Gqr, Ps, Qjr, Se, U_, Wqr, Zu, bt, cn, ns, oug, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr, hge } from "./arrays.js";
import { Kgg, RFc } from "./bracketPairsImpl.js";
import { Ci, Sm } from "./color.js";
import { DFc, Ygg } from "./colorizedBracketPairsDecorationProvider.js";
import { $n, vi } from "./commands.js";
import { LFc, ifn } from "./editStack.js";
import { FFc, OFc } from "./guidesTextModelPart.js";
import { rXr } from "./indentation.js";
import { Qgg } from "./indentationGuesser.js";
import { Ze, _t } from "./instantiation.js";
import { Nvi, XFc, ofn } from "./intervalTree.js";
import { kl, pc } from "./language.js";
import { HT, uC } from "./languageConfigurationRegistry.js";
import { Ll, fc } from "./model.js";
import { Cb, HBe, Svi, Ygn, bpt, nU, rFc, xE, yvi, yze } from "./model_2.js";
import { Bvi, jQr } from "./pieceTreeTextBuffer.js";
import { a3c } from "./pieceTreeTextBufferBuilder.js";
import { Yn, ya } from "./position.js";
import { BFc, Efg, GV, Ize, Lfn, Q3c, a_i, c_i, eRe, iXr, jfg, wOt, xJr } from "./qIc.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { jS } from "./store.js";
import { nwe } from "./stream.js";
import { tU, uvi } from "./textModelDefaults.js";
import { A3c, D3c, I3c, QBe, R3c, _fn, bfn, cJr, lJr, xpt } from "./textModelEvents.js";
import { kle, ufn, zBe } from "./textModelSearch.js";
import { _3c, sJr } from "./tokens.js";
import { PK, ure } from "./tooltipService.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
import { $P, UP } from "./undoRedo.js";
import { Ee, Qt } from "./uri.js";
var Nfn, J3c, eBc, tBc, LOt, yM, IJr, AJr, nBc, iBc, rBc, NOt, Vd, RJr, sBc, oBc, aBc;
export { AJr, IJr, J3c, LOt, NOt, Nfn, RJr, Vd, aBc, eBc, iBc, nBc, oBc, rBc, sBc, tBc, yM };
var __wakaru_Mv_initialized = false;
export function Mv() {
if (__wakaru_Mv_initialized) return;
__wakaru_Mv_initialized = true;
"use strict";
x(), dr(), Sm(), si(), bt(), Se(), nwe(), Ps(), eN(), Qt(), rXr(), ya(), qi(), _f(), uvi(), kl(), HT(), Cb(), Kgg(), Ygg(), ifn(), FFc(), Qgg(), XFc(), jQr(), a3c(), zBe(), Efg(), sJr(), xpt(), Ze(), $P(), jS(), ure(), Ll(), vi(), Nfn = 0, J3c = 999, eBc = 1e4, tBc = class {
    constructor(e){
        this._source = e, this._eos = !1;
    }
    read() {
        if (this._eos) return null;
        const e = [];
        let t = 0, n = 0;
        do {
            const i = this._source.read();
            if (i === null) return this._eos = !0, t === 0 ? null : e.join("");
            if (i.length > 0 && (e[t++] = i, n += i.length), n >= 64 * 1024) return e.join("");
        }while (!0)
    }
}, LOt = ()=>{
    throw new Error("Invalid change accessor");
}, yM = class extends we {
    constructor(e, t, n, i = null, r = !1, s = !1, o, a, c, l, u, h, p){
        super(), this.skipLSPSync = r, this.skipLSPRegistration = s, this._undoRedoService = o, this._languageService = a, this._languageConfigurationService = c, this._tooltipService = l, this.instantiationService = u, this._modelService = h, this._commandService = p, this._onWillDispose = this._register(new ve), this.onWillDispose = this._onWillDispose.event, this._onDidChangeDecorations = this._register(new sBc((T)=>this.handleBeforeFireDecorationsChangedEvent(T))), this.onDidChangeDecorations = this._onDidChangeDecorations.event, this._onDidChangeOptions = this._register(new ve), this.onDidChangeOptions = this._onDidChangeOptions.event, this._onDidChangeAttached = this._register(new ve), this.onDidChangeAttached = this._onDidChangeAttached.event, this._onDidChangeInjectedText = this._register(new ve), this._eventEmitter = this._register(new oBc), this._bufferDisposable = this._register(new cn), this._languageSelectionListener = this._register(new cn), this.syncedWithLSP = !1, this._deltaDecorationCallCnt = 0, this._attachedViews = new _3c, Nfn++, this.id = "$model" + Nfn, this.isForSimpleWidget = n.isForSimpleWidget, typeof i > "u" || i === null ? this._associatedResource = Ee.parse("inmemory://model/" + Nfn) : this._associatedResource = i, this._attachedEditorCount = 0;
        const { textBuffer: g, disposable: f } = Lfn(e, n.defaultEOL);
        this._buffer = g, this._bufferDisposable.value = f;
        const v = this._buffer.getLineCount(), b = this._buffer.getValueLengthInRange(new dt(1, 1, v, this._buffer.getLineLength(v) + 1), yze.TextDefined);
        n.largeFileOptimizations ? (this._isTooLargeForTokenization = b > yM.LARGE_FILE_SIZE_THRESHOLD || v > yM.LARGE_FILE_LINE_COUNT_THRESHOLD, this._isTooLargeForHeapOperation = b > yM.LARGE_FILE_HEAP_OPERATION_THRESHOLD) : (this._isTooLargeForTokenization = !1, this._isTooLargeForHeapOperation = !1), this._options = yM.resolveOptions(this._buffer, n);
        const y = typeof t == "string" ? t : t.languageId;
        typeof t != "string" && (this._languageSelectionListener.value = t.onDidChange(()=>this._setLanguage(t.languageId))), this._bracketPairs = this._register(new RFc(this, this._languageConfigurationService)), this._guidesTextModelPart = this._register(new OFc(this, this._languageConfigurationService)), this._decorationProvider = this._register(new DFc(this)), this._tokenizationTextModelPart = this.instantiationService.createInstance(wOt, this, this._bracketPairs, y, this._attachedViews), this._isTooLargeForSyncing = b > yM._MODEL_SYNC_LIMIT, this._versionId = 1, this._alternativeVersionId = 1, this._initialUndoRedoSnapshot = null, this._isDisposed = !1, this.__isDisposing = !1, this._instanceId = Wqr(Nfn), this._lastDecorationId = 0, this._decorations = Object.create(null), this._decorationsTree = new IJr, this._commandManager = new LFc(this, this._undoRedoService), this._isUndoing = !1, this._isRedoing = !1, this._trimAutoWhitespaceLines = null, this._register(this._decorationProvider.onDidChange(()=>{
            this._onDidChangeDecorations.beginDeferredEmit(), this._onDidChangeDecorations.fire(), this._onDidChangeDecorations.endDeferredEmit();
        })), s || this._languageService.requestRichLanguageFeatures(y), this._register(this._languageConfigurationService.onDidChange((T)=>{
            this._bracketPairs.handleLanguageConfigurationServiceChange(T), this._tokenizationTextModelPart.handleLanguageConfigurationServiceChange(T);
        })), this.reactiveStorageReducers = new aBc(this), [this.nonPersistentReactiveStorage, this.setNonPersistentReactiveStorage] = this.createEmptyNonPersistentStorage();
    }
    static resolveOptions(e, t) {
        if (t.detectIndentation) {
            const n = BFc(e, t.tabSize, t.insertSpaces);
            return new Svi({
                tabSize: n.tabSize,
                indentSize: "tabSize",
                insertSpaces: n.insertSpaces,
                trimAutoWhitespace: t.trimAutoWhitespace,
                defaultEOL: t.defaultEOL,
                bracketPairColorizationOptions: t.bracketPairColorizationOptions
            });
        }
        return new Svi(t);
    }
    get onDidChangeLanguage() {
        return this._tokenizationTextModelPart.onDidChangeLanguage;
    }
    get onDidChangeLanguageConfiguration() {
        return this._tokenizationTextModelPart.onDidChangeLanguageConfiguration;
    }
    get onDidChangeTokens() {
        return this._tokenizationTextModelPart.onDidChangeTokens;
    }
    onDidChangeContent(e) {
        return this._eventEmitter.slowEvent((t)=>e(t.contentChangedEvent));
    }
    onDidChangeContentOrInjectedText(e) {
        return U_(this._eventEmitter.fastEvent((t)=>e(t)), this._onDidChangeInjectedText.event((t)=>e(t)));
    }
    _isDisposing() {
        return this.__isDisposing;
    }
    get tokenization() {
        return this._tokenizationTextModelPart;
    }
    get bracketPairs() {
        return this._bracketPairs;
    }
    get guides() {
        return this._guidesTextModelPart;
    }
    createEmptyNonPersistentStorage() {
        return GV(rFc(), void 0);
    }
    dispose() {
        this.__isDisposing = !0, this._onWillDispose.fire(), this._tokenizationTextModelPart.dispose(), this._isDisposed = !0, super.dispose(), this.__isDisposing = !1;
        const e = new Bvi([], "", `
`, !1, !1, !0, !0);
        e.dispose(), this._buffer = e;
    }
    _hasListeners() {
        return this._onWillDispose.hasListeners() || this._onDidChangeDecorations.hasListeners() || this._tokenizationTextModelPart._hasListeners() || this._onDidChangeOptions.hasListeners() || this._onDidChangeAttached.hasListeners() || this._onDidChangeInjectedText.hasListeners() || this._eventEmitter.hasListeners();
    }
    _assertNotDisposed() {
        if (this._isDisposed) throw new Zu("Model is disposed!");
    }
    equalsTextBuffer(e) {
        return this._assertNotDisposed(), this._buffer.equals(e);
    }
    getTextBuffer() {
        return this._assertNotDisposed(), this._buffer;
    }
    _emitContentChangedEvent(e, t) {
        if (this.__isDisposing) return;
        this._tokenizationTextModelPart.handleDidChangeContent(t), this._bracketPairs.handleDidChangeContent(t);
        let n = t;
        if (t.changes.some((i)=>"eolCount" in i)) {
            const i = t.changes.map((r)=>({
                    range: r.range,
                    rangeLength: r.rangeLength,
                    text: r.text,
                    rangeOffset: r.rangeOffset
                }));
            n = {
                ...t,
                changes: i
            };
        }
        this._eventEmitter.fire(new bfn(e, n));
    }
    setValue(e) {
        if (this._assertNotDisposed(), e == null) throw C_();
        const { textBuffer: t, disposable: n } = Lfn(e, this._options.defaultEOL);
        this._setValueFromTextBuffer(t, n);
    }
    _createContentChanged2(e, t, n, i, r, s, o, a, c) {
        return {
            changes: [
                {
                    range: e,
                    rangeOffset: t,
                    rangeLength: n,
                    text: r
                }
            ],
            eol: this._buffer.getEOL(),
            isEolChange: c,
            versionId: this.getVersionId(),
            isUndoing: s,
            isRedoing: o,
            isFlush: a
        };
    }
    _setValueFromTextBuffer(e, t) {
        this._assertNotDisposed();
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n), r = this.getLineCount(), s = this.getLineMaxColumn(r);
        this._buffer = e, this._bufferDisposable.value = t, this._increaseVersionId(), this._decorations = Object.create(null), this._decorationsTree = new IJr, this._commandManager.clear(), this._trimAutoWhitespaceLines = null, this._emitContentChangedEvent(new _fn([
            new I3c
        ], this._versionId, !1, !1), this._createContentChanged2(new dt(1, 1, r, s), 0, i, new Yn(r, s), this.getValue(), !1, !1, !0, !1));
    }
    setEOL(e) {
        this._assertNotDisposed();
        const t = e === bpt.CRLF ? `\r
` : `
`;
        if (this._buffer.getEOL() === t) return;
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n), r = this.getLineCount(), s = this.getLineMaxColumn(r);
        this._onBeforeEOLChange(), this._buffer.setEOL(t), this._increaseVersionId(), this._onAfterEOLChange(), this._emitContentChangedEvent(new _fn([
            new D3c
        ], this._versionId, !1, !1), this._createContentChanged2(new dt(1, 1, r, s), 0, i, new Yn(r, s), this.getValue(), !1, !1, !1, !0));
    }
    _onBeforeEOLChange() {
        this._decorationsTree.ensureAllNodesHaveRanges(this);
    }
    _onAfterEOLChange() {
        const e = this.getVersionId(), t = this._decorationsTree.collectNodesPostOrder();
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n], s = r.range, o = r.cachedAbsoluteStart - r.start, a = this._buffer.getOffsetAt(s.startLineNumber, s.startColumn), c = this._buffer.getOffsetAt(s.endLineNumber, s.endColumn);
            r.cachedAbsoluteStart = a, r.cachedAbsoluteEnd = c, r.cachedVersionId = e, r.start = a - o, r.end = c - o, Ize(r);
        }
    }
    onBeforeAttached() {
        return this._attachedEditorCount++, this._attachedEditorCount === 1 && (this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.attachView();
    }
    onBeforeDetached(e) {
        this._attachedEditorCount--, this._attachedEditorCount === 0 && (this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.detachView(e);
    }
    isAttachedToEditor() {
        return this._attachedEditorCount > 0;
    }
    getAttachedEditorCount() {
        return this._attachedEditorCount;
    }
    isTooLargeForSyncing() {
        return this._isTooLargeForSyncing;
    }
    isTooLargeForTokenization() {
        return this._isTooLargeForTokenization;
    }
    isTooLargeForHeapOperation() {
        return this._isTooLargeForHeapOperation;
    }
    isDisposed() {
        return this._isDisposed;
    }
    isDominatedByLongLines() {
        if (this._assertNotDisposed(), this.isTooLargeForTokenization()) return !1;
        let e = 0, t = 0;
        const n = this._buffer.getLineCount();
        for(let i = 1; i <= n; i++){
            const r = this._buffer.getLineLength(i);
            r >= eBc ? t += r : e += r;
        }
        return t > e;
    }
    get uri() {
        return this._associatedResource;
    }
    getOptions() {
        return this._assertNotDisposed(), this._options;
    }
    getFormattingOptions() {
        return {
            tabSize: this._options.indentSize,
            insertSpaces: this._options.insertSpaces
        };
    }
    updateOptions(e) {
        this._assertNotDisposed();
        const t = typeof e.tabSize < "u" ? e.tabSize : this._options.tabSize, n = typeof e.indentSize < "u" ? e.indentSize : this._options.originalIndentSize, i = typeof e.insertSpaces < "u" ? e.insertSpaces : this._options.insertSpaces, r = typeof e.trimAutoWhitespace < "u" ? e.trimAutoWhitespace : this._options.trimAutoWhitespace, s = typeof e.bracketColorizationOptions < "u" ? e.bracketColorizationOptions : this._options.bracketPairColorizationOptions, o = new Svi({
            tabSize: t,
            indentSize: n,
            insertSpaces: i,
            defaultEOL: this._options.defaultEOL,
            trimAutoWhitespace: r,
            bracketPairColorizationOptions: s
        });
        if (this._options.equals(o)) return;
        const a = this._options.createChangeEvent(o);
        this._options = o, this._bracketPairs.handleDidChangeOptions(a), this._decorationProvider.handleDidChangeOptions(a), this._onDidChangeOptions.fire(a);
    }
    detectIndentation(e, t) {
        this._assertNotDisposed();
        const n = BFc(this._buffer, t, e);
        this.updateOptions({
            insertSpaces: n.insertSpaces,
            tabSize: n.tabSize,
            indentSize: n.tabSize
        });
    }
    normalizeIndentation(e) {
        return this._assertNotDisposed(), iXr(e, this._options.indentSize, this._options.insertSpaces);
    }
    getVersionId() {
        return this._assertNotDisposed(), this._versionId;
    }
    mightContainRTL() {
        return this._buffer.mightContainRTL();
    }
    mightContainUnusualLineTerminators() {
        return this._buffer.mightContainUnusualLineTerminators();
    }
    removeUnusualLineTerminators(e = null) {
        const t = this.findMatches(Gqr.source, !1, !0, !1, null, !1, yy.MAX_SAFE_SMALL_INTEGER);
        this._buffer.resetMightContainUnusualLineTerminators(), this.pushEditOperations(e, t.map((n)=>({
                range: n.range,
                text: null
            })), ()=>null);
    }
    mightContainNonBasicASCII() {
        return this._buffer.mightContainNonBasicASCII();
    }
    getAlternativeVersionId() {
        return this._assertNotDisposed(), this._alternativeVersionId;
    }
    getInitialUndoRedoSnapshot() {
        return this._assertNotDisposed(), this._initialUndoRedoSnapshot;
    }
    getOffsetAt(e) {
        this._assertNotDisposed();
        const t = this._validatePosition(e.lineNumber, e.column, 0);
        return this._buffer.getOffsetAt(t.lineNumber, t.column);
    }
    getPositionAt(e) {
        this._assertNotDisposed();
        const t = Math.min(this._buffer.getLength(), Math.max(0, e));
        return this._buffer.getPositionAt(t);
    }
    _increaseVersionId() {
        this._versionId = this._versionId + 1, this._alternativeVersionId = this._versionId;
    }
    _overwriteVersionId(e) {
        this._versionId = e;
    }
    _overwriteAlternativeVersionId(e) {
        this._alternativeVersionId = e;
    }
    _overwriteInitialUndoRedoSnapshot(e) {
        this._initialUndoRedoSnapshot = e;
    }
    getValue(e, t = !1) {
        if (this._assertNotDisposed(), this.isTooLargeForHeapOperation()) throw new Zu("Operation would exceed heap memory limits");
        const n = this.getFullModelRange(), i = this.getValueInRange(n, e);
        return t ? this._buffer.getBOM() + i : i;
    }
    createSnapshot(e = !1) {
        return new tBc(this._buffer.createSnapshot(e));
    }
    getValueLength(e, t = !1) {
        this._assertNotDisposed();
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n, e);
        return t ? this._buffer.getBOM().length + i : i;
    }
    getValueInRange(e, t = yze.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getValueInRange(this.validateRange(e), t);
    }
    getValueLengthInRange(e, t = yze.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getValueLengthInRange(this.validateRange(e), t);
    }
    getCharacterCountInRange(e, t = yze.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getCharacterCountInRange(this.validateRange(e), t);
    }
    getLineCount() {
        return this._assertNotDisposed(), this._buffer.getLineCount();
    }
    getLineContent(e) {
        if (this._assertNotDisposed(), e < 1 || e > this.getLineCount()) throw new Zu("Illegal value for lineNumber");
        return this._buffer.getLineContent(e);
    }
    getLineLength(e) {
        if (this._assertNotDisposed(), e < 1 || e > this.getLineCount()) throw new Zu("Illegal value for lineNumber");
        return this._buffer.getLineLength(e);
    }
    getLinesContent() {
        if (this._assertNotDisposed(), this.isTooLargeForHeapOperation()) throw new Zu("Operation would exceed heap memory limits");
        return this._buffer.getLinesContent();
    }
    getEOL() {
        return this._assertNotDisposed(), this._buffer.getEOL();
    }
    getEndOfLineSequence() {
        return this._assertNotDisposed(), this._buffer.getEOL() === `
` ? bpt.LF : bpt.CRLF;
    }
    getLineMinColumn(e) {
        return this._assertNotDisposed(), 1;
    }
    getLineMaxColumn(e) {
        if (this._assertNotDisposed(), e < 1 || e > this.getLineCount()) throw new Zu("Illegal value for lineNumber");
        return this._buffer.getLineLength(e) + 1;
    }
    getLineFirstNonWhitespaceColumn(e) {
        if (this._assertNotDisposed(), e < 1 || e > this.getLineCount()) throw new Zu("Illegal value for lineNumber");
        return this._buffer.getLineFirstNonWhitespaceColumn(e);
    }
    getLineLastNonWhitespaceColumn(e) {
        if (this._assertNotDisposed(), e < 1 || e > this.getLineCount()) throw new Zu("Illegal value for lineNumber");
        return this._buffer.getLineLastNonWhitespaceColumn(e);
    }
    _validateRangeRelaxedNoAllocations(e) {
        const t = this._buffer.getLineCount(), n = e.startLineNumber, i = e.startColumn;
        let r = Math.floor(typeof n == "number" && !isNaN(n) ? n : 1), s = Math.floor(typeof i == "number" && !isNaN(i) ? i : 1);
        if (r < 1) r = 1, s = 1;
        else if (r > t) r = t, s = this.getLineMaxColumn(r);
        else if (s <= 1) s = 1;
        else {
            const u = this.getLineMaxColumn(r);
            s >= u && (s = u);
        }
        const o = e.endLineNumber, a = e.endColumn;
        let c = Math.floor(typeof o == "number" && !isNaN(o) ? o : 1), l = Math.floor(typeof a == "number" && !isNaN(a) ? a : 1);
        if (c < 1) c = 1, l = 1;
        else if (c > t) c = t, l = this.getLineMaxColumn(c);
        else if (l <= 1) l = 1;
        else {
            const u = this.getLineMaxColumn(c);
            l >= u && (l = u);
        }
        return n === r && i === s && o === c && a === l && e instanceof dt && !(e instanceof za) ? e : new dt(r, s, c, l);
    }
    _isValidPosition(e, t, n) {
        if (typeof e != "number" || typeof t != "number" || isNaN(e) || isNaN(t) || e < 1 || t < 1 || (e | 0) !== e || (t | 0) !== t) return !1;
        const i = this._buffer.getLineCount();
        if (e > i) return !1;
        if (t === 1) return !0;
        const r = this.getLineMaxColumn(e);
        if (t > r) return !1;
        if (n === 1) {
            const s = this._buffer.getLineCharCode(e, t - 2);
            if (CO(s)) return !1;
        }
        return !0;
    }
    _validatePosition(e, t, n) {
        const i = Math.floor(typeof e == "number" && !isNaN(e) ? e : 1), r = Math.floor(typeof t == "number" && !isNaN(t) ? t : 1), s = this._buffer.getLineCount();
        if (i < 1) return new Yn(1, 1);
        if (i > s) return new Yn(s, this.getLineMaxColumn(s));
        if (r <= 1) return new Yn(i, 1);
        const o = this.getLineMaxColumn(i);
        if (r >= o) return new Yn(i, o);
        if (n === 1) {
            const a = this._buffer.getLineCharCode(i, r - 2);
            if (CO(a)) return new Yn(i, r - 1);
        }
        return new Yn(i, r);
    }
    validatePosition(e) {
        return this._assertNotDisposed(), e instanceof Yn && this._isValidPosition(e.lineNumber, e.column, 1) ? e : this._validatePosition(e.lineNumber, e.column, 1);
    }
    isValidRange(e) {
        return this._isValidRange(e, 1);
    }
    _isValidRange(e, t) {
        const n = e.startLineNumber, i = e.startColumn, r = e.endLineNumber, s = e.endColumn;
        if (!this._isValidPosition(n, i, 0) || !this._isValidPosition(r, s, 0)) return !1;
        if (t === 1) {
            const o = i > 1 ? this._buffer.getLineCharCode(n, i - 2) : 0, a = s > 1 && s <= this._buffer.getLineLength(r) ? this._buffer.getLineCharCode(r, s - 2) : 0, c = CO(o), l = CO(a);
            return !c && !l;
        }
        return !0;
    }
    validateRange(e) {
        if (this._assertNotDisposed(), e instanceof dt && !(e instanceof za) && this._isValidRange(e, 1)) return e;
        const n = this._validatePosition(e.startLineNumber, e.startColumn, 0), i = this._validatePosition(e.endLineNumber, e.endColumn, 0), r = n.lineNumber, s = n.column, o = i.lineNumber, a = i.column;
        {
            const c = s > 1 ? this._buffer.getLineCharCode(r, s - 2) : 0, l = a > 1 && a <= this._buffer.getLineLength(o) ? this._buffer.getLineCharCode(o, a - 2) : 0, u = CO(c), h = CO(l);
            return !u && !h ? new dt(r, s, o, a) : r === o && s === a ? new dt(r, s - 1, o, a - 1) : u && h ? new dt(r, s - 1, o, a + 1) : u ? new dt(r, s - 1, o, a) : new dt(r, s, o, a + 1);
        }
        return new dt(r, s, o, a);
    }
    modifyPosition(e, t) {
        this._assertNotDisposed();
        const n = this.getOffsetAt(e) + t;
        return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, n)));
    }
    getFullModelRange() {
        this._assertNotDisposed();
        const e = this.getLineCount();
        return new dt(1, 1, e, this.getLineMaxColumn(e));
    }
    findMatchesLineByLine(e, t, n, i) {
        return this._buffer.findMatchesLineByLine(e, t, n, i);
    }
    findMatches(e, t, n, i, r, s, o = J3c) {
        this._assertNotDisposed();
        let a = null;
        t !== null && (Array.isArray(t) || (t = [
            t
        ]), t.every((u)=>dt.isIRange(u)) && (a = t.map((u)=>this.validateRange(u)))), a === null && (a = [
            this.getFullModelRange()
        ]), a = a.sort((u, h)=>u.startLineNumber - h.startLineNumber || u.startColumn - h.startColumn);
        const c = [];
        c.push(a.reduce((u, h)=>dt.areIntersecting(u, h) ? u.plusRange(h) : (c.push(u), h)));
        let l;
        if (!n && e.indexOf(`
`) < 0) {
            const h = new kle(e, n, i, r).parseSearchRequest();
            if (!h) return [];
            l = (p)=>this.findMatchesLineByLine(p, h, s, o);
        } else l = (u)=>ufn.findMatches(this, new kle(e, n, i, r), u, s, o);
        return c.map(l).reduce((u, h)=>u.concat(h), []);
    }
    findNextMatch(e, t, n, i, r, s) {
        this._assertNotDisposed();
        const o = this.validatePosition(t);
        if (!n && e.indexOf(`
`) < 0) {
            const c = new kle(e, n, i, r).parseSearchRequest();
            if (!c) return null;
            const l = this.getLineCount();
            let u = new dt(o.lineNumber, o.column, l, this.getLineMaxColumn(l)), h = this.findMatchesLineByLine(u, c, s, 1);
            return ufn.findNextMatch(this, new kle(e, n, i, r), o, s), h.length > 0 || (u = new dt(1, 1, o.lineNumber, this.getLineMaxColumn(o.lineNumber)), h = this.findMatchesLineByLine(u, c, s, 1), h.length > 0) ? h[0] : null;
        }
        return ufn.findNextMatch(this, new kle(e, n, i, r), o, s);
    }
    findPreviousMatch(e, t, n, i, r, s) {
        this._assertNotDisposed();
        const o = this.validatePosition(t);
        return ufn.findPreviousMatch(this, new kle(e, n, i, r), o, s);
    }
    pushStackElement() {
        this._commandManager.pushStackElement();
    }
    popStackElement() {
        this._commandManager.popStackElement();
    }
    pushEOL(e) {
        if ((this.getEOL() === `
` ? bpt.LF : bpt.CRLF) !== e) try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._initialUndoRedoSnapshot === null && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEOL(e);
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _validateEditOperation(e) {
        return e instanceof Ygn ? e : new Ygn(e.identifier || null, this.validateRange(e.range), e.text, e.forceMoveMarkers || !1, e.isAutoWhitespaceEdit || !1, e._isTracked || !1);
    }
    _validateEditOperations(e) {
        const t = [];
        for(let n = 0, i = e.length; n < i; n++)t[n] = this._validateEditOperation(e[n]);
        return t;
    }
    pushEditOperations(e, t, n, i, r) {
        try {
            return this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._pushEditOperations(e, this._validateEditOperations(t), n, i, r);
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _pushEditOperations(e, t, n, i, r) {
        if (this._tooltipService.registerEvent("editor.type.push_edit_operation"), this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) {
            const s = t.map((a)=>({
                    range: this.validateRange(a.range),
                    text: a.text
                }));
            let o = !0;
            if (e) for(let a = 0, c = e.length; a < c; a++){
                const l = e[a];
                let u = !1;
                for(let h = 0, p = s.length; h < p; h++){
                    const g = s[h].range, f = g.startLineNumber > l.endLineNumber, v = l.startLineNumber > g.endLineNumber;
                    if (!f && !v) {
                        u = !0;
                        break;
                    }
                }
                if (!u) {
                    o = !1;
                    break;
                }
            }
            if (o) for(let a = 0, c = this._trimAutoWhitespaceLines.length; a < c; a++){
                const l = this._trimAutoWhitespaceLines[a], u = this.getLineMaxColumn(l);
                let h = !0;
                for(let p = 0, g = s.length; p < g; p++){
                    const f = s[p].range, v = s[p].text;
                    if (!(l < f.startLineNumber || l > f.endLineNumber) && !(l === f.startLineNumber && f.startColumn === u && f.isEmpty() && v && v.length > 0 && v.charAt(0) === `
`) && !(l === f.startLineNumber && f.startColumn === 1 && f.isEmpty() && v && v.length > 0 && v.charAt(v.length - 1) === `
`)) {
                        h = !1;
                        break;
                    }
                }
                if (h) {
                    const p = new dt(l, 1, l, u);
                    t.push(new Ygn(null, p, null, !1, !1, !1));
                }
            }
            this._trimAutoWhitespaceLines = null;
        }
        return this._initialUndoRedoSnapshot === null && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEditOperation(e, t, n, i, r);
    }
    _applyUndo(e, t, n, i) {
        this._tooltipService.registerEvent("editor.type.undo");
        const r = e.map((s)=>{
            const o = this.getPositionAt(s.newPosition), a = this.getPositionAt(s.newEnd);
            return {
                range: new dt(o.lineNumber, o.column, a.lineNumber, a.column),
                text: s.oldText
            };
        });
        this._applyUndoRedoEdits(r, t, !0, !1, n, i);
    }
    _applyRedo(e, t, n, i) {
        this._tooltipService.registerEvent("editor.type.redo");
        const r = e.map((s)=>{
            const o = this.getPositionAt(s.oldPosition), a = this.getPositionAt(s.oldEnd);
            return {
                range: new dt(o.lineNumber, o.column, a.lineNumber, a.column),
                text: s.newText
            };
        });
        this._applyUndoRedoEdits(r, t, !1, !0, n, i);
    }
    _applyUndoRedoEdits(e, t, n, i, r, s) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._isUndoing = n, this._isRedoing = i, this.applyEdits(e, !1), this.setEOL(t), this._overwriteAlternativeVersionId(r);
        } finally{
            this._isUndoing = !1, this._isRedoing = !1, this._eventEmitter.endDeferredEmit(s), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    applyEdits(e, t = !1, n = !1) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit();
            const i = this._validateEditOperations(e), r = this._doApplyEdits(i, t);
            if (n) for (const s of i)this._undoRedoService.rebaseStack(this.uri, this._buffer.getOffsetAt(s.range.startLineNumber, s.range.startColumn), this._buffer.getOffsetAt(s.range.endLineNumber, s.range.endColumn), s.text?.length ?? 0, s.range.endLineNumber, s.range.endColumn, (s.text?.split(this.getEOL()).length ?? 1) - Math.max(1, s.range.endLineNumber - s.range.startLineNumber), s.text?.split(this.getEOL())[s.text.split(this.getEOL()).length - 1].length ?? 0 - s.range.endColumn + (s.range.startLineNumber === s.range.endLineNumber ? s.range.startColumn : 0));
            return r;
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _doApplyEdits(e, t) {
        const n = this._buffer.getLineCount(), i = this._buffer.applyEdits(e, this._options.trimAutoWhitespace, t), r = this._buffer.getLineCount(), s = i.changes;
        if (this._trimAutoWhitespaceLines = i.trimAutoWhitespaceLineNumbers, s.length !== 0) {
            for(let c = 0, l = s.length; c < l; c++){
                const u = s[c];
                this._decorationsTree.acceptReplace(u.rangeOffset, u.rangeLength, u.text.length, u.forceMoveMarkers);
            }
            const o = [];
            this._increaseVersionId();
            let a = n;
            for(let c = 0, l = s.length; c < l; c++){
                const u = s[c], h = u.eolCount;
                this._onDidChangeDecorations.fire();
                const p = u.range.startLineNumber, g = u.range.endLineNumber, f = g - p, v = h, b = Math.min(f, v), y = v - f, T = r - a - y + p, E = T, A = T + v, R = this._decorationsTree.getInjectedTextInInterval(this, this.getOffsetAt(new Yn(E, 1)), this.getOffsetAt(new Yn(A, this.getLineMaxColumn(A))), 0), D = QBe.fromDecorations(R), P = new hge(D);
                for(let N = b; N >= 0; N--){
                    const O = p + N, F = T + N;
                    P.takeFromEndWhile(($)=>$.lineNumber > F);
                    const H = P.takeFromEndWhile(($)=>$.lineNumber === F);
                    o.push(new cJr(O, this.getLineContent(F), H));
                }
                if (b < f) {
                    const N = p + b;
                    o.push(new A3c(N + 1, g));
                }
                if (b < v) {
                    const N = new hge(D), O = p + b, F = v - b, H = r - a - F + O + 1, $ = [], W = [];
                    for(let G = 0; G < F; G++){
                        const q = H + G;
                        W[G] = this.getLineContent(q), N.takeWhile((z)=>z.lineNumber < q), $[G] = N.takeWhile((z)=>z.lineNumber === q);
                    }
                    o.push(new R3c(O + 1, p + v, W, $));
                }
                a += y;
            }
            this._emitContentChangedEvent(new _fn(o, this.getVersionId(), this._isUndoing, this._isRedoing), {
                changes: s,
                eol: this._buffer.getEOL(),
                isEolChange: !1,
                versionId: this.getVersionId(),
                isUndoing: this._isUndoing,
                isRedoing: this._isRedoing,
                isFlush: !1
            });
        }
        return i.reverseEdits === null ? void 0 : i.reverseEdits;
    }
    undo() {
        return this._undoRedoService.undo(this.uri);
    }
    canUndo() {
        return this._undoRedoService.canUndo(this.uri);
    }
    redo() {
        return this._undoRedoService.redo(this.uri);
    }
    canRedo() {
        return this._undoRedoService.canRedo(this.uri);
    }
    handleBeforeFireDecorationsChangedEvent(e) {
        if (e === null || e.size === 0) return;
        const n = Array.from(e).map((i)=>new cJr(i, this.getLineContent(i), this._getInjectedTextInLine(i)));
        this._onDidChangeInjectedText.fire(new lJr(n));
    }
    changeDecorations(e, t = 0) {
        this._assertNotDisposed();
        try {
            return this._onDidChangeDecorations.beginDeferredEmit(), this._changeDecorations(t, e);
        } finally{
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _changeDecorations(e, t) {
        const n = {
            addDecoration: (r, s)=>this._deltaDecorationsImpl(e, [], [
                    {
                        range: r,
                        options: s
                    }
                ])[0],
            changeDecoration: (r, s)=>{
                this._changeDecorationImpl(r, s);
            },
            changeDecorationOptions: (r, s)=>{
                this._changeDecorationOptionsImpl(r, Q3c(s));
            },
            removeDecoration: (r)=>{
                this._deltaDecorationsImpl(e, [
                    r
                ], []);
            },
            deltaDecorations: (r, s)=>r.length === 0 && s.length === 0 ? [] : this._deltaDecorationsImpl(e, r, s)
        };
        let i = null;
        try {
            i = t(n);
        } catch (r) {
            ns(r);
        }
        return n.addDecoration = LOt, n.changeDecoration = LOt, n.changeDecorationOptions = LOt, n.removeDecoration = LOt, n.deltaDecorations = LOt, i;
    }
    deltaDecorations(e, t, n = 0) {
        if (this._assertNotDisposed(), e || (e = []), e.length === 0 && t.length === 0) return [];
        try {
            return this._deltaDecorationCallCnt++, this._deltaDecorationCallCnt > 1 && (console.warn("Invoking deltaDecorations recursively could lead to leaking decorations."), ns(new Error("Invoking deltaDecorations recursively could lead to leaking decorations."))), this._onDidChangeDecorations.beginDeferredEmit(), this._deltaDecorationsImpl(n, e, t);
        } finally{
            this._onDidChangeDecorations.endDeferredEmit(), this._deltaDecorationCallCnt--;
        }
    }
    _getTrackedRange(e) {
        return this.getDecorationRange(e);
    }
    _setTrackedRange(e, t, n) {
        const i = e ? this._decorations[e] : null;
        if (!i) return t ? this._deltaDecorationsImpl(0, [], [
            {
                range: t,
                options: RJr[n]
            }
        ], !0)[0] : null;
        if (!t) return this._decorationsTree.delete(i), delete this._decorations[i.id], null;
        const r = this._validateRangeRelaxedNoAllocations(t), s = this._buffer.getOffsetAt(r.startLineNumber, r.startColumn), o = this._buffer.getOffsetAt(r.endLineNumber, r.endColumn);
        return this._decorationsTree.delete(i), i.reset(this.getVersionId(), s, o, r), i.setOptions(RJr[n]), this._decorationsTree.insert(i), i.id;
    }
    removeAllDecorationsWithOwnerId(e) {
        if (this._isDisposed) return;
        const t = this._decorationsTree.collectNodesFromOwner(e);
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n];
            this._decorationsTree.delete(r), delete this._decorations[r.id];
        }
    }
    getDecorationOptions(e) {
        const t = this._decorations[e];
        return t ? t.options : null;
    }
    getDecorationRange(e) {
        const t = this._decorations[e];
        return t ? this._decorationsTree.getNodeRange(this, t) : null;
    }
    getLineDecorations(e, t = 0, n = !1) {
        return e < 1 || e > this.getLineCount() ? [] : this.getLinesDecorations(e, e, t, n);
    }
    getLinesDecorations(e, t, n = 0, i = !1, r = !1) {
        const s = this.getLineCount(), o = Math.min(s, Math.max(1, e)), a = Math.min(s, Math.max(1, t)), c = this.getLineMaxColumn(a), l = new dt(o, 1, a, c), u = this._getDecorationsInRange(l, n, i, r);
        return Qjr(u, this._decorationProvider.getDecorationsInRange(l, n, i)), u;
    }
    getDecorationsInRange(e, t = 0, n = !1, i = !1, r = !1) {
        const s = this.validateRange(e), o = this._getDecorationsInRange(s, t, n, r);
        return Qjr(o, this._decorationProvider.getDecorationsInRange(s, t, n, i)), o;
    }
    getOverviewRulerDecorations(e = 0, t = !1) {
        return this._decorationsTree.getAll(this, e, t, !0, !1);
    }
    getInjectedTextDecorations(e = 0) {
        return this._decorationsTree.getAllInjectedText(this, e);
    }
    _getInjectedTextInLine(e) {
        const t = this._buffer.getOffsetAt(e, 1), n = t + this._buffer.getLineLength(e), i = this._decorationsTree.getInjectedTextInInterval(this, t, n, 0);
        return QBe.fromDecorations(i).filter((r)=>r.lineNumber === e);
    }
    getAllDecorations(e = 0, t = !1) {
        let n = this._decorationsTree.getAll(this, e, t, !1, !1);
        return n = n.concat(this._decorationProvider.getAllDecorations(e, t)), n;
    }
    getAllMarginDecorations(e = 0) {
        return this._decorationsTree.getAll(this, e, !1, !1, !0);
    }
    _getDecorationsInRange(e, t, n, i) {
        const r = this._buffer.getOffsetAt(e.startLineNumber, e.startColumn), s = this._buffer.getOffsetAt(e.endLineNumber, e.endColumn);
        return this._decorationsTree.getAllInInterval(this, r, s, t, n, i);
    }
    getRangeAt(e, t) {
        return this._buffer.getRangeAt(e, t - e);
    }
    _changeDecorationImpl(e, t) {
        const n = this._decorations[e];
        if (!n) return;
        if (n.options.after) {
            const o = this.getDecorationRange(e);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.endLineNumber);
        }
        if (n.options.before) {
            const o = this.getDecorationRange(e);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.startLineNumber);
        }
        const i = this._validateRangeRelaxedNoAllocations(t), r = this._buffer.getOffsetAt(i.startLineNumber, i.startColumn), s = this._buffer.getOffsetAt(i.endLineNumber, i.endColumn);
        this._decorationsTree.delete(n), n.reset(this.getVersionId(), r, s, i), this._decorationsTree.insert(n), this._onDidChangeDecorations.checkAffectedAndFire(n.options), n.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(i.endLineNumber), n.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(i.startLineNumber);
    }
    _changeDecorationOptionsImpl(e, t) {
        const n = this._decorations[e];
        if (!n) return;
        const i = !!(n.options.overviewRuler && n.options.overviewRuler.color), r = !!(t.overviewRuler && t.overviewRuler.color);
        if (this._onDidChangeDecorations.checkAffectedAndFire(n.options), this._onDidChangeDecorations.checkAffectedAndFire(t), n.options.after || t.after) {
            const a = this._decorationsTree.getNodeRange(this, n);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.endLineNumber);
        }
        if (n.options.before || t.before) {
            const a = this._decorationsTree.getNodeRange(this, n);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.startLineNumber);
        }
        const s = i !== r, o = jfg(t) !== c_i(n);
        s || o ? (this._decorationsTree.delete(n), n.setOptions(t), this._decorationsTree.insert(n)) : n.setOptions(t);
    }
    _deltaDecorationsImpl(e, t, n, i = !1) {
        const r = this.getVersionId(), s = t.length;
        let o = 0;
        const a = n.length;
        let c = 0;
        this._onDidChangeDecorations.beginDeferredEmit();
        try {
            const l = new Array(a);
            for(; o < s || c < a;){
                let u = null;
                if (o < s) {
                    do u = this._decorations[t[o++]];
                    while (!u && o < s)
                    if (u) {
                        if (u.options.after) {
                            const h = this._decorationsTree.getNodeRange(this, u);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(h.endLineNumber);
                        }
                        if (u.options.before) {
                            const h = this._decorationsTree.getNodeRange(this, u);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(h.startLineNumber);
                        }
                        this._decorationsTree.delete(u), i || this._onDidChangeDecorations.checkAffectedAndFire(u.options);
                    }
                }
                if (c < a) {
                    if (!u) {
                        const b = ++this._lastDecorationId, y = `${this._instanceId};${b}`;
                        u = new Nvi(y, 0, 0), this._decorations[y] = u;
                    }
                    const h = n[c], p = this._validateRangeRelaxedNoAllocations(h.range), g = Q3c(h.options), f = this._buffer.getOffsetAt(p.startLineNumber, p.startColumn), v = this._buffer.getOffsetAt(p.endLineNumber, p.endColumn);
                    u.ownerId = e, u.reset(r, f, v, p), u.setOptions(g), u.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.endLineNumber), u.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.startLineNumber), i || this._onDidChangeDecorations.checkAffectedAndFire(g), this._decorationsTree.insert(u), l[c] = u.id, c++;
                } else u && delete this._decorations[u.id];
            }
            return l;
        } finally{
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    getLanguageId() {
        return this.tokenization.getLanguageId();
    }
    setLanguage(e, t) {
        typeof e == "string" ? (this._languageSelectionListener.clear(), this._setLanguage(e, t)) : (this._languageSelectionListener.value = e.onDidChange(()=>this._setLanguage(e.languageId, t)), this._setLanguage(e.languageId, t));
    }
    _setLanguage(e, t) {
        this.tokenization.setLanguageId(e, t), this._languageService.requestRichLanguageFeatures(e);
    }
    getLanguageIdAtPosition(e, t) {
        return this.tokenization.getLanguageIdAtPosition(e, t);
    }
    getWordAtPosition(e) {
        return this._tokenizationTextModelPart.getWordAtPosition(e);
    }
    getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(e) {
        const t = this._tokenizationTextModelPart.getLineTokens(e.lineNumber), n = t.findTokenIndexAtOffset(e.column - 1);
        return t.getStandardTokenType(n);
    }
    getWordUntilPosition(e) {
        return this._tokenizationTextModelPart.getWordUntilPosition(e);
    }
    getWordsUntilPosition(e) {
        return this._tokenizationTextModelPart.getWordsUntilPosition(e);
    }
    normalizePosition(e, t) {
        return e;
    }
    getLineIndentColumn(e) {
        return a_i(this.getLineContent(e)) + 1;
    }
    toString() {
        return `TextModel(${this.uri.toString()})`;
    }
}, yM._MODEL_SYNC_LIMIT = 50 * 1024 * 1024, yM.LARGE_FILE_SIZE_THRESHOLD = 20 * 1024 * 1024, yM.LARGE_FILE_LINE_COUNT_THRESHOLD = 300 * 1e3, yM.LARGE_FILE_HEAP_OPERATION_THRESHOLD = 256 * 1024 * 1024, yM.DEFAULT_CREATION_OPTIONS = {
    isForSimpleWidget: !1,
    tabSize: tU.tabSize,
    indentSize: tU.indentSize,
    insertSpaces: tU.insertSpaces,
    detectIndentation: !1,
    defaultEOL: yvi.LF,
    trimAutoWhitespace: tU.trimAutoWhitespace,
    largeFileOptimizations: tU.largeFileOptimizations,
    bracketPairColorizationOptions: tU.bracketPairColorizationOptions
}, yM = ie([
    C(6, UP),
    C(7, pc),
    C(8, uC),
    C(9, PK),
    C(10, _t),
    C(11, fc),
    C(12, $n)
], yM), IJr = class {
    constructor(){
        this._decorationsTree0 = new ofn, this._decorationsTree1 = new ofn, this._injectedTextDecorationsTree = new ofn;
    }
    ensureAllNodesHaveRanges(e) {
        this.getAll(e, 0, !1, !1, !1);
    }
    _ensureNodesHaveRanges(e, t) {
        for (const n of t)n.range === null && (n.range = e.getRangeAt(n.cachedAbsoluteStart, n.cachedAbsoluteEnd));
        return t;
    }
    getAllInInterval(e, t, n, i, r, s) {
        const o = e.getVersionId(), a = this._intervalSearch(t, n, i, r, o, s);
        return this._ensureNodesHaveRanges(e, a);
    }
    _intervalSearch(e, t, n, i, r, s) {
        const o = this._decorationsTree0.intervalSearch(e, t, n, i, r, s), a = this._decorationsTree1.intervalSearch(e, t, n, i, r, s), c = this._injectedTextDecorationsTree.intervalSearch(e, t, n, i, r, s);
        return o.concat(a).concat(c);
    }
    getInjectedTextInInterval(e, t, n, i) {
        const r = e.getVersionId(), s = this._injectedTextDecorationsTree.intervalSearch(t, n, i, !1, r, !1);
        return this._ensureNodesHaveRanges(e, s).filter((o)=>o.options.showIfCollapsed || !o.range.isEmpty());
    }
    getAllInjectedText(e, t) {
        const n = e.getVersionId(), i = this._injectedTextDecorationsTree.search(t, !1, n, !1);
        return this._ensureNodesHaveRanges(e, i).filter((r)=>r.options.showIfCollapsed || !r.range.isEmpty());
    }
    getAll(e, t, n, i, r) {
        const s = e.getVersionId(), o = this._search(t, n, i, s, r);
        return this._ensureNodesHaveRanges(e, o);
    }
    _search(e, t, n, i, r) {
        if (n) return this._decorationsTree1.search(e, t, i, r);
        {
            const s = this._decorationsTree0.search(e, t, i, r), o = this._decorationsTree1.search(e, t, i, r), a = this._injectedTextDecorationsTree.search(e, t, i, r);
            return s.concat(o).concat(a);
        }
    }
    collectNodesFromOwner(e) {
        const t = this._decorationsTree0.collectNodesFromOwner(e), n = this._decorationsTree1.collectNodesFromOwner(e), i = this._injectedTextDecorationsTree.collectNodesFromOwner(e);
        return t.concat(n).concat(i);
    }
    collectNodesPostOrder() {
        const e = this._decorationsTree0.collectNodesPostOrder(), t = this._decorationsTree1.collectNodesPostOrder(), n = this._injectedTextDecorationsTree.collectNodesPostOrder();
        return e.concat(t).concat(n);
    }
    insert(e) {
        c_i(e) ? this._injectedTextDecorationsTree.insert(e) : xJr(e) ? this._decorationsTree1.insert(e) : this._decorationsTree0.insert(e);
    }
    delete(e) {
        c_i(e) ? this._injectedTextDecorationsTree.delete(e) : xJr(e) ? this._decorationsTree1.delete(e) : this._decorationsTree0.delete(e);
    }
    getNodeRange(e, t) {
        const n = e.getVersionId();
        return t.cachedVersionId !== n && this._resolveNode(t, n), t.range === null && (t.range = e.getRangeAt(t.cachedAbsoluteStart, t.cachedAbsoluteEnd)), t.range;
    }
    _resolveNode(e, t) {
        c_i(e) ? this._injectedTextDecorationsTree.resolveNode(e, t) : xJr(e) ? this._decorationsTree1.resolveNode(e, t) : this._decorationsTree0.resolveNode(e, t);
    }
    acceptReplace(e, t, n, i) {
        this._decorationsTree0.acceptReplace(e, t, n, i), this._decorationsTree1.acceptReplace(e, t, n, i), this._injectedTextDecorationsTree.acceptReplace(e, t, n, i);
    }
}, AJr = class {
    constructor(e){
        this.color = e.color || "", this.darkColor = e.darkColor || "";
    }
}, nBc = class extends AJr {
    constructor(e){
        super(e), this._resolvedColor = null, this.position = typeof e.position == "number" ? e.position : xE.Center;
    }
    getColor(e) {
        return this._resolvedColor || (e.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.darkColor, e) : this._resolvedColor = this._resolveColor(this.color, e)), this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = null;
    }
    _resolveColor(e, t) {
        if (typeof e == "string") return e;
        const n = e ? t.getColor(e.id) : null;
        return n ? n.toString() : "";
    }
}, iBc = class {
    constructor(e){
        this.position = e?.position ?? nU.Center, this.persistLane = e?.persistLane;
    }
}, rBc = class extends AJr {
    constructor(e){
        super(e), this.position = e.position, this.sectionHeaderStyle = e.sectionHeaderStyle ?? null, this.sectionHeaderText = e.sectionHeaderText ?? null;
    }
    getColor(e) {
        return this._resolvedColor || (e.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.darkColor, e) : this._resolvedColor = this._resolveColor(this.color, e)), this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = void 0;
    }
    _resolveColor(e, t) {
        return typeof e == "string" ? Ci.fromHex(e) : t.getColor(e.id);
    }
}, NOt = class TIa {
    static from(t) {
        return t instanceof TIa ? t : new TIa(t);
    }
    constructor(t){
        this.content = t.content || "", this.tokens = t.tokens ?? null, this.inlineClassName = t.inlineClassName || null, this.inlineClassNameAffectsLetterSpacing = t.inlineClassNameAffectsLetterSpacing || !1, this.attachedData = t.attachedData || null, this.cursorStops = t.cursorStops || null, this.order = t.order;
    }
}, Vd = class EIa {
    static register(t) {
        return new EIa(t);
    }
    static createDynamic(t) {
        return new EIa(t);
    }
    constructor(t){
        this.description = t.description, this.blockClassName = t.blockClassName ? eRe(t.blockClassName) : null, this.blockDoesNotCollapse = t.blockDoesNotCollapse ?? null, this.blockIsAfterEnd = t.blockIsAfterEnd ?? null, this.blockPadding = t.blockPadding ?? null, this.stickiness = t.stickiness || HBe.AlwaysGrowsWhenTypingAtEdges, this.zIndex = t.zIndex || 0, this.className = t.className ? eRe(t.className) : null, this.shouldFillLineOnLineBreak = t.shouldFillLineOnLineBreak ?? null, this.hoverMessage = t.hoverMessage || null, this.glyphMarginHoverMessage = t.glyphMarginHoverMessage || null, this.lineNumberHoverMessage = t.lineNumberHoverMessage || null, this.isWholeLine = t.isWholeLine || !1, this.showIfCollapsed = t.showIfCollapsed || !1, this.collapseOnReplaceEdit = t.collapseOnReplaceEdit || !1, this.overviewRuler = t.overviewRuler ? new nBc(t.overviewRuler) : null, this.minimap = t.minimap ? new rBc(t.minimap) : null, this.glyphMargin = t.glyphMarginClassName ? new iBc(t.glyphMargin) : null, this.glyphMarginClassName = t.glyphMarginClassName ? eRe(t.glyphMarginClassName) : null, this.linesDecorationsClassName = t.linesDecorationsClassName ? eRe(t.linesDecorationsClassName) : null, this.lineNumberClassName = t.lineNumberClassName ? eRe(t.lineNumberClassName) : null, this.linesDecorationsTooltip = t.linesDecorationsTooltip ? oug(t.linesDecorationsTooltip) : null, this.firstLineDecorationClassName = t.firstLineDecorationClassName ? eRe(t.firstLineDecorationClassName) : null, this.marginClassName = t.marginClassName ? eRe(t.marginClassName) : null, this.inlineClassName = t.inlineClassName ? eRe(t.inlineClassName) : null, this.inlineClassNameAffectsLetterSpacing = t.inlineClassNameAffectsLetterSpacing || !1, this.beforeContentClassName = t.beforeContentClassName ? eRe(t.beforeContentClassName) : null, this.afterContentClassName = t.afterContentClassName ? eRe(t.afterContentClassName) : null, this.after = t.after ? NOt.from(t.after) : null, this.before = t.before ? NOt.from(t.before) : null, this.hideInCommentTokens = t.hideInCommentTokens ?? !1, this.hideInStringTokens = t.hideInStringTokens ?? !1;
    }
}, Vd.EMPTY = Vd.register({
    description: "empty"
}), RJr = [
    Vd.register({
        description: "tracked-range-always-grows-when-typing-at-edges",
        stickiness: HBe.AlwaysGrowsWhenTypingAtEdges
    }),
    Vd.register({
        description: "tracked-range-never-grows-when-typing-at-edges",
        stickiness: HBe.NeverGrowsWhenTypingAtEdges
    }),
    Vd.register({
        description: "tracked-range-grows-only-when-typing-before",
        stickiness: HBe.GrowsOnlyWhenTypingBefore
    }),
    Vd.register({
        description: "tracked-range-grows-only-when-typing-after",
        stickiness: HBe.GrowsOnlyWhenTypingAfter
    })
], sBc = class extends we {
    constructor(e){
        super(), this.handleBeforeFire = e, this._actual = this._register(new ve), this.event = this._actual.event, this._affectedInjectedTextLines = null, this._deferredCnt = 0, this._shouldFireDeferred = !1, this._affectsMinimap = !1, this._affectsOverviewRuler = !1, this._affectsGlyphMargin = !1, this._affectsLineNumber = !1;
    }
    hasListeners() {
        return this._actual.hasListeners();
    }
    beginDeferredEmit() {
        this._deferredCnt++;
    }
    endDeferredEmit() {
        this._deferredCnt--, this._deferredCnt === 0 && (this._shouldFireDeferred && this.doFire(), this._affectedInjectedTextLines?.clear(), this._affectedInjectedTextLines = null);
    }
    recordLineAffectedByInjectedText(e) {
        this._affectedInjectedTextLines || (this._affectedInjectedTextLines = new Set), this._affectedInjectedTextLines.add(e);
    }
    checkAffectedAndFire(e) {
        this._affectsMinimap ||= !!e.minimap?.position, this._affectsOverviewRuler ||= !!e.overviewRuler?.color, this._affectsGlyphMargin ||= !!e.glyphMarginClassName, this._affectsLineNumber ||= !!e.lineNumberClassName, this.tryFire();
    }
    fire() {
        this._affectsMinimap = !0, this._affectsOverviewRuler = !0, this._affectsGlyphMargin = !0, this.tryFire();
    }
    tryFire() {
        this._deferredCnt === 0 ? this.doFire() : this._shouldFireDeferred = !0;
    }
    doFire() {
        this.handleBeforeFire(this._affectedInjectedTextLines);
        const e = {
            affectsMinimap: this._affectsMinimap,
            affectsOverviewRuler: this._affectsOverviewRuler,
            affectsGlyphMargin: this._affectsGlyphMargin,
            affectsLineNumber: this._affectsLineNumber
        };
        this._shouldFireDeferred = !1, this._affectsMinimap = !1, this._affectsOverviewRuler = !1, this._affectsGlyphMargin = !1, this._actual.fire(e);
    }
}, oBc = class extends we {
    constructor(){
        super(), this._fastEmitter = this._register(new ve), this.fastEvent = this._fastEmitter.event, this._slowEmitter = this._register(new ve), this.slowEvent = this._slowEmitter.event, this._deferredCnt = 0, this._deferredEvent = null;
    }
    hasListeners() {
        return this._fastEmitter.hasListeners() || this._slowEmitter.hasListeners();
    }
    beginDeferredEmit() {
        this._deferredCnt++;
    }
    endDeferredEmit(e = null) {
        if (this._deferredCnt--, this._deferredCnt === 0 && this._deferredEvent !== null) {
            this._deferredEvent.rawContentChangedEvent.resultingSelection = e;
            const t = this._deferredEvent;
            this._deferredEvent = null, this._fastEmitter.fire(t), this._slowEmitter.fire(t);
        }
    }
    fire(e) {
        if (this._deferredCnt > 0) {
            this._deferredEvent ? this._deferredEvent = this._deferredEvent.merge(e) : this._deferredEvent = e;
            return;
        }
        this._fastEmitter.fire(e), this._slowEmitter.fire(e);
    }
}, aBc = class {
    constructor(e){
        this.model = e;
    }
};

}
