import { ACo, Ei, Fa, G_y, Gt, K9, N1, Qe, TXu, Vn, j0o, p1, st, tt, xh, xr } from "./Iwo.js";
import { Yxe, bo } from "./arrays.js";
import { Z2y, s8d } from "./bracketPairsImpl.js";
import { _b, ls } from "./color.js";
import { Q2y, o8d } from "./colorizedBracketPairsDecorationProvider.js";
import { nr, rs } from "./commands.js";
import { _0r, c8d } from "./editStack.js";
import { d8d, h8d } from "./guidesTextModelPart.js";
import { X7o } from "./indentation.js";
import { tPy } from "./indentationGuesser.js";
import { It, dn } from "./instantiation.js";
import { Yjo, mPy, y0r } from "./intervalTree.js";
import { Kp, Ph } from "./language.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { dd, xp } from "./model.js";
import { DBd, J0, Ott, Rri, Z9t, Zbt, gO, ihe, r0r, s0r } from "./model_2.js";
import { i$o, w0r } from "./pieceTreeTextBuffer.js";
import { L8d } from "./pieceTreeTextBufferBuilder.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { v1 } from "./store.js";
import { POe } from "./stream.js";
import { Ywr, uz } from "./textModelDefaults.js";
import { Jri, S$o, esi, i7d, iBt, n7d, r7d, s7d, y$o, ztt } from "./textModelEvents.js";
import { GAe, ayt, qri } from "./textModelSearch.js";
import { v$o, z8d } from "./tokens.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
import { C7, rB } from "./undoRedo.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { A$o, L0r, N0r, NPy, RPy, Y7o, dfn, hHe, p8d, pwe, syt, u7d, x$o } from "./ze.js";
var csi, d7d, h7d, p7d, mfn, sB, R$o, P$o, m7d, g7d, f7d, gfn, Kg, M$o, v7d, _7d, b7d;
export { Kg, M$o, P$o, R$o, _7d, b7d, csi, d7d, f7d, g7d, gfn, h7d, m7d, mfn, p7d, sB, v7d };
var __wakaru_PC_initialized = false;
export function PC() {
if (__wakaru_PC_initialized) return;
__wakaru_PC_initialized = true;
"use strict";
E(), bo(), _b(), Ei(), Gt(), Qe(), POe(), Fa(), lz(), fn(), X7o(), jc(), Qs(), Cy(), Ywr(), Kp(), RD(), J0(), Z2y(), Q2y(), _0r(), h8d(), tPy(), mPy(), i$o(), L8d(), ayt(), RPy(), v$o(), iBt(), It(), rB(), v1(), uwe(), xp(), rs(), csi = 0, d7d = 999, h7d = 1e4, p7d = class {
    constructor(t){
        this._source = t, this._eos = !1;
    }
    read() {
        if (this._eos) return null;
        const t = [];
        let e = 0, n = 0;
        do {
            const i = this._source.read();
            if (i === null) return this._eos = !0, e === 0 ? null : t.join("");
            if (i.length > 0 && (t[e++] = i, n += i.length), n >= 64 * 1024) return t.join("");
        }while (!0)
    }
}, mfn = ()=>{
    throw new Error("Invalid change accessor");
}, sB = class extends st {
    constructor(t, e, n, i = null, r = !1, s = !1, o, a, l, c, u, d, h){
        super(), this.skipLSPSync = r, this.skipLSPRegistration = s, this._undoRedoService = o, this._languageService = a, this._languageConfigurationService = l, this._tooltipService = c, this.instantiationService = u, this._modelService = d, this._commandService = h, this._onWillDispose = this._register(new tt), this.onWillDispose = this._onWillDispose.event, this._onDidChangeDecorations = this._register(new v7d((y)=>this.handleBeforeFireDecorationsChangedEvent(y))), this.onDidChangeDecorations = this._onDidChangeDecorations.event, this._onDidChangeOptions = this._register(new tt), this.onDidChangeOptions = this._onDidChangeOptions.event, this._onDidChangeAttached = this._register(new tt), this.onDidChangeAttached = this._onDidChangeAttached.event, this._onDidChangeInjectedText = this._register(new tt), this._eventEmitter = this._register(new _7d), this._bufferDisposable = this._register(new Vn), this._languageSelectionListener = this._register(new Vn), this.syncedWithLSP = !1, this._deltaDecorationCallCnt = 0, this._attachedViews = new z8d, csi++, this.id = "$model" + csi, this.isForSimpleWidget = n.isForSimpleWidget, typeof i > "u" || i === null ? this._associatedResource = rt.parse("inmemory://model/" + csi) : this._associatedResource = i, this._attachedEditorCount = 0;
        const { textBuffer: p, disposable: g } = N0r(t, n.defaultEOL);
        this._buffer = p, this._bufferDisposable.value = g;
        const f = this._buffer.getLineCount(), _ = this._buffer.getValueLengthInRange(new qt(1, 1, f, this._buffer.getLineLength(f) + 1), Zbt.TextDefined);
        n.largeFileOptimizations ? (this._isTooLargeForTokenization = _ > sB.LARGE_FILE_SIZE_THRESHOLD || f > sB.LARGE_FILE_LINE_COUNT_THRESHOLD, this._isTooLargeForHeapOperation = _ > sB.LARGE_FILE_HEAP_OPERATION_THRESHOLD) : (this._isTooLargeForTokenization = !1, this._isTooLargeForHeapOperation = !1), this._options = sB.resolveOptions(this._buffer, n);
        const b = typeof e == "string" ? e : e.languageId;
        typeof e != "string" && (this._languageSelectionListener.value = e.onDidChange(()=>this._setLanguage(e.languageId))), this._bracketPairs = this._register(new s8d(this, this._languageConfigurationService)), this._guidesTextModelPart = this._register(new d8d(this, this._languageConfigurationService)), this._decorationProvider = this._register(new o8d(this)), this._tokenizationTextModelPart = this.instantiationService.createInstance(dfn, this, this._bracketPairs, b, this._attachedViews), this._isTooLargeForSyncing = _ > sB._MODEL_SYNC_LIMIT, this._versionId = 1, this._alternativeVersionId = 1, this._initialUndoRedoSnapshot = null, this._isDisposed = !1, this.__isDisposing = !1, this._instanceId = TXu(csi), this._lastDecorationId = 0, this._decorations = Object.create(null), this._decorationsTree = new R$o, this._commandManager = new c8d(this, this._undoRedoService), this._isUndoing = !1, this._isRedoing = !1, this._trimAutoWhitespaceLines = null, this._register(this._decorationProvider.onDidChange(()=>{
            this._onDidChangeDecorations.beginDeferredEmit(), this._onDidChangeDecorations.fire(), this._onDidChangeDecorations.endDeferredEmit();
        })), s || this._languageService.requestRichLanguageFeatures(b), this._register(this._languageConfigurationService.onDidChange((y)=>{
            this._bracketPairs.handleLanguageConfigurationServiceChange(y), this._tokenizationTextModelPart.handleLanguageConfigurationServiceChange(y);
        })), this.reactiveStorageReducers = new b7d(this), [this.nonPersistentReactiveStorage, this.setNonPersistentReactiveStorage] = this.createEmptyNonPersistentStorage();
    }
    static resolveOptions(t, e) {
        if (e.detectIndentation) {
            const n = p8d(t, e.tabSize, e.insertSpaces);
            return new s0r({
                tabSize: n.tabSize,
                indentSize: "tabSize",
                insertSpaces: n.insertSpaces,
                trimAutoWhitespace: e.trimAutoWhitespace,
                defaultEOL: e.defaultEOL,
                bracketPairColorizationOptions: e.bracketPairColorizationOptions
            });
        }
        return new s0r(e);
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
    onDidChangeContent(t) {
        return this._eventEmitter.slowEvent((e)=>t(e.contentChangedEvent));
    }
    onDidChangeContentOrInjectedText(t) {
        return N1(this._eventEmitter.fastEvent((e)=>t(e)), this._onDidChangeInjectedText.event((e)=>t(e)));
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
        return pwe(DBd(), void 0);
    }
    dispose() {
        this.__isDisposing = !0, this._onWillDispose.fire(), this._tokenizationTextModelPart.dispose(), this._isDisposed = !0, super.dispose(), this.__isDisposing = !1;
        const t = new w0r([], "", `
`, !1, !1, !0, !0);
        t.dispose(), this._buffer = t;
    }
    _hasListeners() {
        return this._onWillDispose.hasListeners() || this._onDidChangeDecorations.hasListeners() || this._tokenizationTextModelPart._hasListeners() || this._onDidChangeOptions.hasListeners() || this._onDidChangeAttached.hasListeners() || this._onDidChangeInjectedText.hasListeners() || this._eventEmitter.hasListeners();
    }
    _assertNotDisposed() {
        if (this._isDisposed) throw new xh("Model is disposed!");
    }
    equalsTextBuffer(t) {
        return this._assertNotDisposed(), this._buffer.equals(t);
    }
    getTextBuffer() {
        return this._assertNotDisposed(), this._buffer;
    }
    _emitContentChangedEvent(t, e) {
        if (this.__isDisposing) return;
        this._tokenizationTextModelPart.handleDidChangeContent(e), this._bracketPairs.handleDidChangeContent(e);
        let n = e;
        if (e.changes.some((i)=>"eolCount" in i)) {
            const i = e.changes.map((r)=>({
                    range: r.range,
                    rangeLength: r.rangeLength,
                    text: r.text,
                    rangeOffset: r.rangeOffset
                }));
            n = {
                ...e,
                changes: i
            };
        }
        this._eventEmitter.fire(new esi(t, n));
    }
    setValue(t) {
        if (this._assertNotDisposed(), t == null) throw p1();
        const { textBuffer: e, disposable: n } = N0r(t, this._options.defaultEOL);
        this._setValueFromTextBuffer(e, n);
    }
    _createContentChanged2(t, e, n, i, r, s, o, a, l) {
        return {
            changes: [
                {
                    range: t,
                    rangeOffset: e,
                    rangeLength: n,
                    text: r
                }
            ],
            eol: this._buffer.getEOL(),
            isEolChange: l,
            versionId: this.getVersionId(),
            isUndoing: s,
            isRedoing: o,
            isFlush: a
        };
    }
    _setValueFromTextBuffer(t, e) {
        this._assertNotDisposed();
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n), r = this.getLineCount(), s = this.getLineMaxColumn(r);
        this._buffer = t, this._bufferDisposable.value = e, this._increaseVersionId(), this._decorations = Object.create(null), this._decorationsTree = new R$o, this._commandManager.clear(), this._trimAutoWhitespaceLines = null, this._emitContentChangedEvent(new Jri([
            new n7d
        ], this._versionId, !1, !1), this._createContentChanged2(new qt(1, 1, r, s), 0, i, new er(r, s), this.getValue(), !1, !1, !0, !1));
    }
    setEOL(t) {
        this._assertNotDisposed();
        const e = t === Z9t.CRLF ? `\r
` : `
`;
        if (this._buffer.getEOL() === e) return;
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n), r = this.getLineCount(), s = this.getLineMaxColumn(r);
        this._onBeforeEOLChange(), this._buffer.setEOL(e), this._increaseVersionId(), this._onAfterEOLChange(), this._emitContentChangedEvent(new Jri([
            new s7d
        ], this._versionId, !1, !1), this._createContentChanged2(new qt(1, 1, r, s), 0, i, new er(r, s), this.getValue(), !1, !1, !1, !0));
    }
    _onBeforeEOLChange() {
        this._decorationsTree.ensureAllNodesHaveRanges(this);
    }
    _onAfterEOLChange() {
        const t = this.getVersionId(), e = this._decorationsTree.collectNodesPostOrder();
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n], s = r.range, o = r.cachedAbsoluteStart - r.start, a = this._buffer.getOffsetAt(s.startLineNumber, s.startColumn), l = this._buffer.getOffsetAt(s.endLineNumber, s.endColumn);
            r.cachedAbsoluteStart = a, r.cachedAbsoluteEnd = l, r.cachedVersionId = t, r.start = a - o, r.end = l - o, syt(r);
        }
    }
    onBeforeAttached() {
        return this._attachedEditorCount++, this._attachedEditorCount === 1 && (this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.attachView();
    }
    onBeforeDetached(t) {
        this._attachedEditorCount--, this._attachedEditorCount === 0 && (this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.detachView(t);
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
        let t = 0, e = 0;
        const n = this._buffer.getLineCount();
        for(let i = 1; i <= n; i++){
            const r = this._buffer.getLineLength(i);
            r >= h7d ? e += r : t += r;
        }
        return e > t;
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
    updateOptions(t) {
        this._assertNotDisposed();
        const e = typeof t.tabSize < "u" ? t.tabSize : this._options.tabSize, n = typeof t.indentSize < "u" ? t.indentSize : this._options.originalIndentSize, i = typeof t.insertSpaces < "u" ? t.insertSpaces : this._options.insertSpaces, r = typeof t.trimAutoWhitespace < "u" ? t.trimAutoWhitespace : this._options.trimAutoWhitespace, s = typeof t.bracketColorizationOptions < "u" ? t.bracketColorizationOptions : this._options.bracketPairColorizationOptions, o = new s0r({
            tabSize: e,
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
    detectIndentation(t, e) {
        this._assertNotDisposed();
        const n = p8d(this._buffer, e, t);
        this.updateOptions({
            insertSpaces: n.insertSpaces,
            tabSize: n.tabSize,
            indentSize: n.tabSize
        });
    }
    normalizeIndentation(t) {
        return this._assertNotDisposed(), Y7o(t, this._options.indentSize, this._options.insertSpaces);
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
    removeUnusualLineTerminators(t = null) {
        const e = this.findMatches(ACo.source, !1, !0, !1, null, !1, eI.MAX_SAFE_SMALL_INTEGER);
        this._buffer.resetMightContainUnusualLineTerminators(), this.pushEditOperations(t, e.map((n)=>({
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
    getOffsetAt(t) {
        this._assertNotDisposed();
        const e = this._validatePosition(t.lineNumber, t.column, 0);
        return this._buffer.getOffsetAt(e.lineNumber, e.column);
    }
    getPositionAt(t) {
        this._assertNotDisposed();
        const e = Math.min(this._buffer.getLength(), Math.max(0, t));
        return this._buffer.getPositionAt(e);
    }
    _increaseVersionId() {
        this._versionId = this._versionId + 1, this._alternativeVersionId = this._versionId;
    }
    _overwriteVersionId(t) {
        this._versionId = t;
    }
    _overwriteAlternativeVersionId(t) {
        this._alternativeVersionId = t;
    }
    _overwriteInitialUndoRedoSnapshot(t) {
        this._initialUndoRedoSnapshot = t;
    }
    getValue(t, e = !1) {
        if (this._assertNotDisposed(), this.isTooLargeForHeapOperation()) throw new xh("Operation would exceed heap memory limits");
        const n = this.getFullModelRange(), i = this.getValueInRange(n, t);
        return e ? this._buffer.getBOM() + i : i;
    }
    createSnapshot(t = !1) {
        return new p7d(this._buffer.createSnapshot(t));
    }
    getValueLength(t, e = !1) {
        this._assertNotDisposed();
        const n = this.getFullModelRange(), i = this.getValueLengthInRange(n, t);
        return e ? this._buffer.getBOM().length + i : i;
    }
    getValueInRange(t, e = Zbt.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getValueInRange(this.validateRange(t), e);
    }
    getValueLengthInRange(t, e = Zbt.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getValueLengthInRange(this.validateRange(t), e);
    }
    getCharacterCountInRange(t, e = Zbt.TextDefined) {
        return this._assertNotDisposed(), this._buffer.getCharacterCountInRange(this.validateRange(t), e);
    }
    getLineCount() {
        return this._assertNotDisposed(), this._buffer.getLineCount();
    }
    getLineContent(t) {
        if (this._assertNotDisposed(), t < 1 || t > this.getLineCount()) throw new xh("Illegal value for lineNumber");
        return this._buffer.getLineContent(t);
    }
    getLineLength(t) {
        if (this._assertNotDisposed(), t < 1 || t > this.getLineCount()) throw new xh("Illegal value for lineNumber");
        return this._buffer.getLineLength(t);
    }
    getLinesContent() {
        if (this._assertNotDisposed(), this.isTooLargeForHeapOperation()) throw new xh("Operation would exceed heap memory limits");
        return this._buffer.getLinesContent();
    }
    getEOL() {
        return this._assertNotDisposed(), this._buffer.getEOL();
    }
    getEndOfLineSequence() {
        return this._assertNotDisposed(), this._buffer.getEOL() === `
` ? Z9t.LF : Z9t.CRLF;
    }
    getLineMinColumn(t) {
        return this._assertNotDisposed(), 1;
    }
    getLineMaxColumn(t) {
        if (this._assertNotDisposed(), t < 1 || t > this.getLineCount()) throw new xh("Illegal value for lineNumber");
        return this._buffer.getLineLength(t) + 1;
    }
    getLineFirstNonWhitespaceColumn(t) {
        if (this._assertNotDisposed(), t < 1 || t > this.getLineCount()) throw new xh("Illegal value for lineNumber");
        return this._buffer.getLineFirstNonWhitespaceColumn(t);
    }
    getLineLastNonWhitespaceColumn(t) {
        if (this._assertNotDisposed(), t < 1 || t > this.getLineCount()) throw new xh("Illegal value for lineNumber");
        return this._buffer.getLineLastNonWhitespaceColumn(t);
    }
    _validateRangeRelaxedNoAllocations(t) {
        const e = this._buffer.getLineCount(), n = t.startLineNumber, i = t.startColumn;
        let r = Math.floor(typeof n == "number" && !isNaN(n) ? n : 1), s = Math.floor(typeof i == "number" && !isNaN(i) ? i : 1);
        if (r < 1) r = 1, s = 1;
        else if (r > e) r = e, s = this.getLineMaxColumn(r);
        else if (s <= 1) s = 1;
        else {
            const u = this.getLineMaxColumn(r);
            s >= u && (s = u);
        }
        const o = t.endLineNumber, a = t.endColumn;
        let l = Math.floor(typeof o == "number" && !isNaN(o) ? o : 1), c = Math.floor(typeof a == "number" && !isNaN(a) ? a : 1);
        if (l < 1) l = 1, c = 1;
        else if (l > e) l = e, c = this.getLineMaxColumn(l);
        else if (c <= 1) c = 1;
        else {
            const u = this.getLineMaxColumn(l);
            c >= u && (c = u);
        }
        return n === r && i === s && o === l && a === c && t instanceof qt && !(t instanceof bu) ? t : new qt(r, s, l, c);
    }
    _isValidPosition(t, e, n) {
        if (typeof t != "number" || typeof e != "number" || isNaN(t) || isNaN(e) || t < 1 || e < 1 || (t | 0) !== t || (e | 0) !== e) return !1;
        const i = this._buffer.getLineCount();
        if (t > i) return !1;
        if (e === 1) return !0;
        const r = this.getLineMaxColumn(t);
        if (e > r) return !1;
        if (n === 1) {
            const s = this._buffer.getLineCharCode(t, e - 2);
            if (K9(s)) return !1;
        }
        return !0;
    }
    _validatePosition(t, e, n) {
        const i = Math.floor(typeof t == "number" && !isNaN(t) ? t : 1), r = Math.floor(typeof e == "number" && !isNaN(e) ? e : 1), s = this._buffer.getLineCount();
        if (i < 1) return new er(1, 1);
        if (i > s) return new er(s, this.getLineMaxColumn(s));
        if (r <= 1) return new er(i, 1);
        const o = this.getLineMaxColumn(i);
        if (r >= o) return new er(i, o);
        if (n === 1) {
            const a = this._buffer.getLineCharCode(i, r - 2);
            if (K9(a)) return new er(i, r - 1);
        }
        return new er(i, r);
    }
    validatePosition(t) {
        return this._assertNotDisposed(), t instanceof er && this._isValidPosition(t.lineNumber, t.column, 1) ? t : this._validatePosition(t.lineNumber, t.column, 1);
    }
    isValidRange(t) {
        return this._isValidRange(t, 1);
    }
    _isValidRange(t, e) {
        const n = t.startLineNumber, i = t.startColumn, r = t.endLineNumber, s = t.endColumn;
        if (!this._isValidPosition(n, i, 0) || !this._isValidPosition(r, s, 0)) return !1;
        if (e === 1) {
            const o = i > 1 ? this._buffer.getLineCharCode(n, i - 2) : 0, a = s > 1 && s <= this._buffer.getLineLength(r) ? this._buffer.getLineCharCode(r, s - 2) : 0, l = K9(o), c = K9(a);
            return !l && !c;
        }
        return !0;
    }
    validateRange(t) {
        if (this._assertNotDisposed(), t instanceof qt && !(t instanceof bu) && this._isValidRange(t, 1)) return t;
        const n = this._validatePosition(t.startLineNumber, t.startColumn, 0), i = this._validatePosition(t.endLineNumber, t.endColumn, 0), r = n.lineNumber, s = n.column, o = i.lineNumber, a = i.column;
        {
            const l = s > 1 ? this._buffer.getLineCharCode(r, s - 2) : 0, c = a > 1 && a <= this._buffer.getLineLength(o) ? this._buffer.getLineCharCode(o, a - 2) : 0, u = K9(l), d = K9(c);
            return !u && !d ? new qt(r, s, o, a) : r === o && s === a ? new qt(r, s - 1, o, a - 1) : u && d ? new qt(r, s - 1, o, a + 1) : u ? new qt(r, s - 1, o, a) : new qt(r, s, o, a + 1);
        }
        return new qt(r, s, o, a);
    }
    modifyPosition(t, e) {
        this._assertNotDisposed();
        const n = this.getOffsetAt(t) + e;
        return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, n)));
    }
    getFullModelRange() {
        this._assertNotDisposed();
        const t = this.getLineCount();
        return new qt(1, 1, t, this.getLineMaxColumn(t));
    }
    findMatchesLineByLine(t, e, n, i) {
        return this._buffer.findMatchesLineByLine(t, e, n, i);
    }
    findMatches(t, e, n, i, r, s, o = d7d) {
        this._assertNotDisposed();
        let a = null;
        e !== null && (Array.isArray(e) || (e = [
            e
        ]), e.every((u)=>qt.isIRange(u)) && (a = e.map((u)=>this.validateRange(u)))), a === null && (a = [
            this.getFullModelRange()
        ]), a = a.sort((u, d)=>u.startLineNumber - d.startLineNumber || u.startColumn - d.startColumn);
        const l = [];
        l.push(a.reduce((u, d)=>qt.areIntersecting(u, d) ? u.plusRange(d) : (l.push(u), d)));
        let c;
        if (!n && t.indexOf(`
`) < 0) {
            const d = new GAe(t, n, i, r).parseSearchRequest();
            if (!d) return [];
            c = (h)=>this.findMatchesLineByLine(h, d, s, o);
        } else c = (u)=>qri.findMatches(this, new GAe(t, n, i, r), u, s, o);
        return l.map(c).reduce((u, d)=>u.concat(d), []);
    }
    findNextMatch(t, e, n, i, r, s) {
        this._assertNotDisposed();
        const o = this.validatePosition(e);
        if (!n && t.indexOf(`
`) < 0) {
            const l = new GAe(t, n, i, r).parseSearchRequest();
            if (!l) return null;
            const c = this.getLineCount();
            let u = new qt(o.lineNumber, o.column, c, this.getLineMaxColumn(c)), d = this.findMatchesLineByLine(u, l, s, 1);
            return qri.findNextMatch(this, new GAe(t, n, i, r), o, s), d.length > 0 || (u = new qt(1, 1, o.lineNumber, this.getLineMaxColumn(o.lineNumber)), d = this.findMatchesLineByLine(u, l, s, 1), d.length > 0) ? d[0] : null;
        }
        return qri.findNextMatch(this, new GAe(t, n, i, r), o, s);
    }
    findPreviousMatch(t, e, n, i, r, s) {
        this._assertNotDisposed();
        const o = this.validatePosition(e);
        return qri.findPreviousMatch(this, new GAe(t, n, i, r), o, s);
    }
    pushStackElement() {
        this._commandManager.pushStackElement();
    }
    popStackElement() {
        this._commandManager.popStackElement();
    }
    pushEOL(t) {
        if ((this.getEOL() === `
` ? Z9t.LF : Z9t.CRLF) !== t) try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._initialUndoRedoSnapshot === null && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEOL(t);
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _validateEditOperation(t) {
        return t instanceof Rri ? t : new Rri(t.identifier || null, this.validateRange(t.range), t.text, t.forceMoveMarkers || !1, t.isAutoWhitespaceEdit || !1, t._isTracked || !1);
    }
    _validateEditOperations(t) {
        const e = [];
        for(let n = 0, i = t.length; n < i; n++)e[n] = this._validateEditOperation(t[n]);
        return e;
    }
    pushEditOperations(t, e, n, i, r) {
        try {
            return this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._pushEditOperations(t, this._validateEditOperations(e), n, i, r);
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _pushEditOperations(t, e, n, i, r) {
        if (this._tooltipService.registerEvent("editor.type.push_edit_operation"), this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) {
            const s = e.map((a)=>({
                    range: this.validateRange(a.range),
                    text: a.text
                }));
            let o = !0;
            if (t) for(let a = 0, l = t.length; a < l; a++){
                const c = t[a];
                let u = !1;
                for(let d = 0, h = s.length; d < h; d++){
                    const p = s[d].range, g = p.startLineNumber > c.endLineNumber, f = c.startLineNumber > p.endLineNumber;
                    if (!g && !f) {
                        u = !0;
                        break;
                    }
                }
                if (!u) {
                    o = !1;
                    break;
                }
            }
            if (o) for(let a = 0, l = this._trimAutoWhitespaceLines.length; a < l; a++){
                const c = this._trimAutoWhitespaceLines[a], u = this.getLineMaxColumn(c);
                let d = !0;
                for(let h = 0, p = s.length; h < p; h++){
                    const g = s[h].range, f = s[h].text;
                    if (!(c < g.startLineNumber || c > g.endLineNumber) && !(c === g.startLineNumber && g.startColumn === u && g.isEmpty() && f && f.length > 0 && f.charAt(0) === `
`) && !(c === g.startLineNumber && g.startColumn === 1 && g.isEmpty() && f && f.length > 0 && f.charAt(f.length - 1) === `
`)) {
                        d = !1;
                        break;
                    }
                }
                if (d) {
                    const h = new qt(c, 1, c, u);
                    e.push(new Rri(null, h, null, !1, !1, !1));
                }
            }
            this._trimAutoWhitespaceLines = null;
        }
        return this._initialUndoRedoSnapshot === null && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEditOperation(t, e, n, i, r);
    }
    _applyUndo(t, e, n, i) {
        this._tooltipService.registerEvent("editor.type.undo");
        const r = t.map((s)=>{
            const o = this.getPositionAt(s.newPosition), a = this.getPositionAt(s.newEnd);
            return {
                range: new qt(o.lineNumber, o.column, a.lineNumber, a.column),
                text: s.oldText
            };
        });
        this._applyUndoRedoEdits(r, e, !0, !1, n, i);
    }
    _applyRedo(t, e, n, i) {
        this._tooltipService.registerEvent("editor.type.redo");
        const r = t.map((s)=>{
            const o = this.getPositionAt(s.oldPosition), a = this.getPositionAt(s.oldEnd);
            return {
                range: new qt(o.lineNumber, o.column, a.lineNumber, a.column),
                text: s.newText
            };
        });
        this._applyUndoRedoEdits(r, e, !1, !0, n, i);
    }
    _applyUndoRedoEdits(t, e, n, i, r, s) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._isUndoing = n, this._isRedoing = i, this.applyEdits(t, !1), this.setEOL(e), this._overwriteAlternativeVersionId(r);
        } finally{
            this._isUndoing = !1, this._isRedoing = !1, this._eventEmitter.endDeferredEmit(s), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    applyEdits(t, e = !1, n = !1) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit();
            const i = this._validateEditOperations(t), r = this._doApplyEdits(i, e);
            if (n) for (const s of i)this._undoRedoService.rebaseStack(this.uri, this._buffer.getOffsetAt(s.range.startLineNumber, s.range.startColumn), this._buffer.getOffsetAt(s.range.endLineNumber, s.range.endColumn), s.text?.length ?? 0, s.range.endLineNumber, s.range.endColumn, (s.text?.split(this.getEOL()).length ?? 1) - Math.max(1, s.range.endLineNumber - s.range.startLineNumber), s.text?.split(this.getEOL())[s.text.split(this.getEOL()).length - 1].length ?? 0 - s.range.endColumn + (s.range.startLineNumber === s.range.endLineNumber ? s.range.startColumn : 0));
            return r;
        } finally{
            this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _doApplyEdits(t, e) {
        const n = this._buffer.getLineCount(), i = this._buffer.applyEdits(t, this._options.trimAutoWhitespace, e), r = this._buffer.getLineCount(), s = i.changes;
        if (this._trimAutoWhitespaceLines = i.trimAutoWhitespaceLineNumbers, s.length !== 0) {
            for(let l = 0, c = s.length; l < c; l++){
                const u = s[l];
                this._decorationsTree.acceptReplace(u.rangeOffset, u.rangeLength, u.text.length, u.forceMoveMarkers);
            }
            const o = [];
            this._increaseVersionId();
            let a = n;
            for(let l = 0, c = s.length; l < c; l++){
                const u = s[l], d = u.eolCount;
                this._onDidChangeDecorations.fire();
                const h = u.range.startLineNumber, p = u.range.endLineNumber, g = p - h, f = d, _ = Math.min(g, f), b = f - g, y = r - a - b + h, S = y, k = y + f, C = this._decorationsTree.getInjectedTextInInterval(this, this.getOffsetAt(new er(S, 1)), this.getOffsetAt(new er(k, this.getLineMaxColumn(k))), 0), T = ztt.fromDecorations(C), I = new Yxe(T);
                for(let A = _; A >= 0; A--){
                    const P = h + A, M = y + A;
                    I.takeFromEndWhile((N)=>N.lineNumber > M);
                    const O = I.takeFromEndWhile((N)=>N.lineNumber === M);
                    o.push(new y$o(P, this.getLineContent(M), O));
                }
                if (_ < g) {
                    const A = h + _;
                    o.push(new i7d(A + 1, p));
                }
                if (_ < f) {
                    const A = new Yxe(T), P = h + _, M = f - _, O = r - a - M + P + 1, N = [], U = [];
                    for(let j = 0; j < M; j++){
                        const $ = O + j;
                        U[j] = this.getLineContent($), A.takeWhile((H)=>H.lineNumber < $), N[j] = A.takeWhile((H)=>H.lineNumber === $);
                    }
                    o.push(new r7d(P + 1, h + f, U, N));
                }
                a += b;
            }
            this._emitContentChangedEvent(new Jri(o, this.getVersionId(), this._isUndoing, this._isRedoing), {
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
    handleBeforeFireDecorationsChangedEvent(t) {
        if (t === null || t.size === 0) return;
        const n = Array.from(t).map((i)=>new y$o(i, this.getLineContent(i), this._getInjectedTextInLine(i)));
        this._onDidChangeInjectedText.fire(new S$o(n));
    }
    changeDecorations(t, e = 0) {
        this._assertNotDisposed();
        try {
            return this._onDidChangeDecorations.beginDeferredEmit(), this._changeDecorations(e, t);
        } finally{
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _changeDecorations(t, e) {
        const n = {
            addDecoration: (r, s)=>this._deltaDecorationsImpl(t, [], [
                    {
                        range: r,
                        options: s
                    }
                ])[0],
            changeDecoration: (r, s)=>{
                this._changeDecorationImpl(r, s);
            },
            changeDecorationOptions: (r, s)=>{
                this._changeDecorationOptionsImpl(r, u7d(s));
            },
            removeDecoration: (r)=>{
                this._deltaDecorationsImpl(t, [
                    r
                ], []);
            },
            deltaDecorations: (r, s)=>r.length === 0 && s.length === 0 ? [] : this._deltaDecorationsImpl(t, r, s)
        };
        let i = null;
        try {
            i = e(n);
        } catch (r) {
            xr(r);
        }
        return n.addDecoration = mfn, n.changeDecoration = mfn, n.changeDecorationOptions = mfn, n.removeDecoration = mfn, n.deltaDecorations = mfn, i;
    }
    deltaDecorations(t, e, n = 0) {
        if (this._assertNotDisposed(), t || (t = []), t.length === 0 && e.length === 0) return [];
        try {
            return this._deltaDecorationCallCnt++, this._deltaDecorationCallCnt > 1 && (console.warn("Invoking deltaDecorations recursively could lead to leaking decorations."), xr(new Error("Invoking deltaDecorations recursively could lead to leaking decorations."))), this._onDidChangeDecorations.beginDeferredEmit(), this._deltaDecorationsImpl(n, t, e);
        } finally{
            this._onDidChangeDecorations.endDeferredEmit(), this._deltaDecorationCallCnt--;
        }
    }
    _getTrackedRange(t) {
        return this.getDecorationRange(t);
    }
    _setTrackedRange(t, e, n) {
        const i = t ? this._decorations[t] : null;
        if (!i) return e ? this._deltaDecorationsImpl(0, [], [
            {
                range: e,
                options: M$o[n]
            }
        ], !0)[0] : null;
        if (!e) return this._decorationsTree.delete(i), delete this._decorations[i.id], null;
        const r = this._validateRangeRelaxedNoAllocations(e), s = this._buffer.getOffsetAt(r.startLineNumber, r.startColumn), o = this._buffer.getOffsetAt(r.endLineNumber, r.endColumn);
        return this._decorationsTree.delete(i), i.reset(this.getVersionId(), s, o, r), i.setOptions(M$o[n]), this._decorationsTree.insert(i), i.id;
    }
    removeAllDecorationsWithOwnerId(t) {
        if (this._isDisposed) return;
        const e = this._decorationsTree.collectNodesFromOwner(t);
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n];
            this._decorationsTree.delete(r), delete this._decorations[r.id];
        }
    }
    getDecorationOptions(t) {
        const e = this._decorations[t];
        return e ? e.options : null;
    }
    getDecorationRange(t) {
        const e = this._decorations[t];
        return e ? this._decorationsTree.getNodeRange(this, e) : null;
    }
    getLineDecorations(t, e = 0, n = !1) {
        return t < 1 || t > this.getLineCount() ? [] : this.getLinesDecorations(t, t, e, n);
    }
    getLinesDecorations(t, e, n = 0, i = !1, r = !1) {
        const s = this.getLineCount(), o = Math.min(s, Math.max(1, t)), a = Math.min(s, Math.max(1, e)), l = this.getLineMaxColumn(a), c = new qt(o, 1, a, l), u = this._getDecorationsInRange(c, n, i, r);
        return j0o(u, this._decorationProvider.getDecorationsInRange(c, n, i)), u;
    }
    getDecorationsInRange(t, e = 0, n = !1, i = !1, r = !1) {
        const s = this.validateRange(t), o = this._getDecorationsInRange(s, e, n, r);
        return j0o(o, this._decorationProvider.getDecorationsInRange(s, e, n, i)), o;
    }
    getOverviewRulerDecorations(t = 0, e = !1) {
        return this._decorationsTree.getAll(this, t, e, !0, !1);
    }
    getInjectedTextDecorations(t = 0) {
        return this._decorationsTree.getAllInjectedText(this, t);
    }
    _getInjectedTextInLine(t) {
        const e = this._buffer.getOffsetAt(t, 1), n = e + this._buffer.getLineLength(t), i = this._decorationsTree.getInjectedTextInInterval(this, e, n, 0);
        return ztt.fromDecorations(i).filter((r)=>r.lineNumber === t);
    }
    getAllDecorations(t = 0, e = !1) {
        let n = this._decorationsTree.getAll(this, t, e, !1, !1);
        return n = n.concat(this._decorationProvider.getAllDecorations(t, e)), n;
    }
    getAllMarginDecorations(t = 0) {
        return this._decorationsTree.getAll(this, t, !1, !1, !0);
    }
    _getDecorationsInRange(t, e, n, i) {
        const r = this._buffer.getOffsetAt(t.startLineNumber, t.startColumn), s = this._buffer.getOffsetAt(t.endLineNumber, t.endColumn);
        return this._decorationsTree.getAllInInterval(this, r, s, e, n, i);
    }
    getRangeAt(t, e) {
        return this._buffer.getRangeAt(t, e - t);
    }
    _changeDecorationImpl(t, e) {
        const n = this._decorations[t];
        if (!n) return;
        if (n.options.after) {
            const o = this.getDecorationRange(t);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.endLineNumber);
        }
        if (n.options.before) {
            const o = this.getDecorationRange(t);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.startLineNumber);
        }
        const i = this._validateRangeRelaxedNoAllocations(e), r = this._buffer.getOffsetAt(i.startLineNumber, i.startColumn), s = this._buffer.getOffsetAt(i.endLineNumber, i.endColumn);
        this._decorationsTree.delete(n), n.reset(this.getVersionId(), r, s, i), this._decorationsTree.insert(n), this._onDidChangeDecorations.checkAffectedAndFire(n.options), n.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(i.endLineNumber), n.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(i.startLineNumber);
    }
    _changeDecorationOptionsImpl(t, e) {
        const n = this._decorations[t];
        if (!n) return;
        const i = !!(n.options.overviewRuler && n.options.overviewRuler.color), r = !!(e.overviewRuler && e.overviewRuler.color);
        if (this._onDidChangeDecorations.checkAffectedAndFire(n.options), this._onDidChangeDecorations.checkAffectedAndFire(e), n.options.after || e.after) {
            const a = this._decorationsTree.getNodeRange(this, n);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.endLineNumber);
        }
        if (n.options.before || e.before) {
            const a = this._decorationsTree.getNodeRange(this, n);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.startLineNumber);
        }
        const s = i !== r, o = NPy(e) !== L0r(n);
        s || o ? (this._decorationsTree.delete(n), n.setOptions(e), this._decorationsTree.insert(n)) : n.setOptions(e);
    }
    _deltaDecorationsImpl(t, e, n, i = !1) {
        const r = this.getVersionId(), s = e.length;
        let o = 0;
        const a = n.length;
        let l = 0;
        this._onDidChangeDecorations.beginDeferredEmit();
        try {
            const c = new Array(a);
            for(; o < s || l < a;){
                let u = null;
                if (o < s) {
                    do u = this._decorations[e[o++]];
                    while (!u && o < s)
                    if (u) {
                        if (u.options.after) {
                            const d = this._decorationsTree.getNodeRange(this, u);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(d.endLineNumber);
                        }
                        if (u.options.before) {
                            const d = this._decorationsTree.getNodeRange(this, u);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(d.startLineNumber);
                        }
                        this._decorationsTree.delete(u), i || this._onDidChangeDecorations.checkAffectedAndFire(u.options);
                    }
                }
                if (l < a) {
                    if (!u) {
                        const _ = ++this._lastDecorationId, b = `${this._instanceId};${_}`;
                        u = new Yjo(b, 0, 0), this._decorations[b] = u;
                    }
                    const d = n[l], h = this._validateRangeRelaxedNoAllocations(d.range), p = u7d(d.options), g = this._buffer.getOffsetAt(h.startLineNumber, h.startColumn), f = this._buffer.getOffsetAt(h.endLineNumber, h.endColumn);
                    u.ownerId = t, u.reset(r, g, f, h), u.setOptions(p), u.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(h.endLineNumber), u.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(h.startLineNumber), i || this._onDidChangeDecorations.checkAffectedAndFire(p), this._decorationsTree.insert(u), c[l] = u.id, l++;
                } else u && delete this._decorations[u.id];
            }
            return c;
        } finally{
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    getLanguageId() {
        return this.tokenization.getLanguageId();
    }
    setLanguage(t, e) {
        typeof t == "string" ? (this._languageSelectionListener.clear(), this._setLanguage(t, e)) : (this._languageSelectionListener.value = t.onDidChange(()=>this._setLanguage(t.languageId, e)), this._setLanguage(t.languageId, e));
    }
    _setLanguage(t, e) {
        this.tokenization.setLanguageId(t, e), this._languageService.requestRichLanguageFeatures(t);
    }
    getLanguageIdAtPosition(t, e) {
        return this.tokenization.getLanguageIdAtPosition(t, e);
    }
    getWordAtPosition(t) {
        return this._tokenizationTextModelPart.getWordAtPosition(t);
    }
    getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(t) {
        const e = this._tokenizationTextModelPart.getLineTokens(t.lineNumber), n = e.findTokenIndexAtOffset(t.column - 1);
        return e.getStandardTokenType(n);
    }
    getWordUntilPosition(t) {
        return this._tokenizationTextModelPart.getWordUntilPosition(t);
    }
    getWordsUntilPosition(t) {
        return this._tokenizationTextModelPart.getWordsUntilPosition(t);
    }
    normalizePosition(t, e) {
        return t;
    }
    getLineIndentColumn(t) {
        return x$o(this.getLineContent(t)) + 1;
    }
    toString() {
        return `TextModel(${this.uri.toString()})`;
    }
}, sB._MODEL_SYNC_LIMIT = 50 * 1024 * 1024, sB.LARGE_FILE_SIZE_THRESHOLD = 20 * 1024 * 1024, sB.LARGE_FILE_LINE_COUNT_THRESHOLD = 300 * 1e3, sB.LARGE_FILE_HEAP_OPERATION_THRESHOLD = 256 * 1024 * 1024, sB.DEFAULT_CREATION_OPTIONS = {
    isForSimpleWidget: !1,
    tabSize: uz.tabSize,
    indentSize: uz.indentSize,
    insertSpaces: uz.insertSpaces,
    detectIndentation: !1,
    defaultEOL: r0r.LF,
    trimAutoWhitespace: uz.trimAutoWhitespace,
    largeFileOptimizations: uz.largeFileOptimizations,
    bracketPairColorizationOptions: uz.bracketPairColorizationOptions
}, sB = Re([
    F(6, C7),
    F(7, Ph),
    F(8, fA),
    F(9, ehe),
    F(10, dn),
    F(11, dd),
    F(12, nr)
], sB), R$o = class {
    constructor(){
        this._decorationsTree0 = new y0r, this._decorationsTree1 = new y0r, this._injectedTextDecorationsTree = new y0r;
    }
    ensureAllNodesHaveRanges(t) {
        this.getAll(t, 0, !1, !1, !1);
    }
    _ensureNodesHaveRanges(t, e) {
        for (const n of e)n.range === null && (n.range = t.getRangeAt(n.cachedAbsoluteStart, n.cachedAbsoluteEnd));
        return e;
    }
    getAllInInterval(t, e, n, i, r, s) {
        const o = t.getVersionId(), a = this._intervalSearch(e, n, i, r, o, s);
        return this._ensureNodesHaveRanges(t, a);
    }
    _intervalSearch(t, e, n, i, r, s) {
        const o = this._decorationsTree0.intervalSearch(t, e, n, i, r, s), a = this._decorationsTree1.intervalSearch(t, e, n, i, r, s), l = this._injectedTextDecorationsTree.intervalSearch(t, e, n, i, r, s);
        return o.concat(a).concat(l);
    }
    getInjectedTextInInterval(t, e, n, i) {
        const r = t.getVersionId(), s = this._injectedTextDecorationsTree.intervalSearch(e, n, i, !1, r, !1);
        return this._ensureNodesHaveRanges(t, s).filter((o)=>o.options.showIfCollapsed || !o.range.isEmpty());
    }
    getAllInjectedText(t, e) {
        const n = t.getVersionId(), i = this._injectedTextDecorationsTree.search(e, !1, n, !1);
        return this._ensureNodesHaveRanges(t, i).filter((r)=>r.options.showIfCollapsed || !r.range.isEmpty());
    }
    getAll(t, e, n, i, r) {
        const s = t.getVersionId(), o = this._search(e, n, i, s, r);
        return this._ensureNodesHaveRanges(t, o);
    }
    _search(t, e, n, i, r) {
        if (n) return this._decorationsTree1.search(t, e, i, r);
        {
            const s = this._decorationsTree0.search(t, e, i, r), o = this._decorationsTree1.search(t, e, i, r), a = this._injectedTextDecorationsTree.search(t, e, i, r);
            return s.concat(o).concat(a);
        }
    }
    collectNodesFromOwner(t) {
        const e = this._decorationsTree0.collectNodesFromOwner(t), n = this._decorationsTree1.collectNodesFromOwner(t), i = this._injectedTextDecorationsTree.collectNodesFromOwner(t);
        return e.concat(n).concat(i);
    }
    collectNodesPostOrder() {
        const t = this._decorationsTree0.collectNodesPostOrder(), e = this._decorationsTree1.collectNodesPostOrder(), n = this._injectedTextDecorationsTree.collectNodesPostOrder();
        return t.concat(e).concat(n);
    }
    insert(t) {
        L0r(t) ? this._injectedTextDecorationsTree.insert(t) : A$o(t) ? this._decorationsTree1.insert(t) : this._decorationsTree0.insert(t);
    }
    delete(t) {
        L0r(t) ? this._injectedTextDecorationsTree.delete(t) : A$o(t) ? this._decorationsTree1.delete(t) : this._decorationsTree0.delete(t);
    }
    getNodeRange(t, e) {
        const n = t.getVersionId();
        return e.cachedVersionId !== n && this._resolveNode(e, n), e.range === null && (e.range = t.getRangeAt(e.cachedAbsoluteStart, e.cachedAbsoluteEnd)), e.range;
    }
    _resolveNode(t, e) {
        L0r(t) ? this._injectedTextDecorationsTree.resolveNode(t, e) : A$o(t) ? this._decorationsTree1.resolveNode(t, e) : this._decorationsTree0.resolveNode(t, e);
    }
    acceptReplace(t, e, n, i) {
        this._decorationsTree0.acceptReplace(t, e, n, i), this._decorationsTree1.acceptReplace(t, e, n, i), this._injectedTextDecorationsTree.acceptReplace(t, e, n, i);
    }
}, P$o = class {
    constructor(t){
        this.color = t.color || "", this.darkColor = t.darkColor || "";
    }
}, m7d = class extends P$o {
    constructor(t){
        super(t), this._resolvedColor = null, this.position = typeof t.position == "number" ? t.position : gO.Center;
    }
    getColor(t) {
        return this._resolvedColor || (t.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.darkColor, t) : this._resolvedColor = this._resolveColor(this.color, t)), this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = null;
    }
    _resolveColor(t, e) {
        if (typeof t == "string") return t;
        const n = t ? e.getColor(t.id) : null;
        return n ? n.toString() : "";
    }
}, g7d = class {
    constructor(t){
        this.position = t?.position ?? ihe.Center, this.persistLane = t?.persistLane;
    }
}, f7d = class extends P$o {
    constructor(t){
        super(t), this.position = t.position, this.sectionHeaderStyle = t.sectionHeaderStyle ?? null, this.sectionHeaderText = t.sectionHeaderText ?? null;
    }
    getColor(t) {
        return this._resolvedColor || (t.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.darkColor, t) : this._resolvedColor = this._resolveColor(this.color, t)), this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = void 0;
    }
    _resolveColor(t, e) {
        return typeof t == "string" ? ls.fromHex(t) : e.getColor(t.id);
    }
}, gfn = class lJc {
    static from(e) {
        return e instanceof lJc ? e : new lJc(e);
    }
    constructor(e){
        this.content = e.content || "", this.tokens = e.tokens ?? null, this.inlineClassName = e.inlineClassName || null, this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || !1, this.attachedData = e.attachedData || null, this.cursorStops = e.cursorStops || null, this.order = e.order;
    }
}, Kg = class cJc {
    static register(e) {
        return new cJc(e);
    }
    static createDynamic(e) {
        return new cJc(e);
    }
    constructor(e){
        this.description = e.description, this.blockClassName = e.blockClassName ? hHe(e.blockClassName) : null, this.blockDoesNotCollapse = e.blockDoesNotCollapse ?? null, this.blockIsAfterEnd = e.blockIsAfterEnd ?? null, this.blockPadding = e.blockPadding ?? null, this.stickiness = e.stickiness || Ott.AlwaysGrowsWhenTypingAtEdges, this.zIndex = e.zIndex || 0, this.className = e.className ? hHe(e.className) : null, this.shouldFillLineOnLineBreak = e.shouldFillLineOnLineBreak ?? null, this.hoverMessage = e.hoverMessage || null, this.glyphMarginHoverMessage = e.glyphMarginHoverMessage || null, this.lineNumberHoverMessage = e.lineNumberHoverMessage || null, this.isWholeLine = e.isWholeLine || !1, this.showIfCollapsed = e.showIfCollapsed || !1, this.collapseOnReplaceEdit = e.collapseOnReplaceEdit || !1, this.overviewRuler = e.overviewRuler ? new m7d(e.overviewRuler) : null, this.minimap = e.minimap ? new f7d(e.minimap) : null, this.glyphMargin = e.glyphMarginClassName ? new g7d(e.glyphMargin) : null, this.glyphMarginClassName = e.glyphMarginClassName ? hHe(e.glyphMarginClassName) : null, this.linesDecorationsClassName = e.linesDecorationsClassName ? hHe(e.linesDecorationsClassName) : null, this.lineNumberClassName = e.lineNumberClassName ? hHe(e.lineNumberClassName) : null, this.linesDecorationsTooltip = e.linesDecorationsTooltip ? G_y(e.linesDecorationsTooltip) : null, this.firstLineDecorationClassName = e.firstLineDecorationClassName ? hHe(e.firstLineDecorationClassName) : null, this.marginClassName = e.marginClassName ? hHe(e.marginClassName) : null, this.inlineClassName = e.inlineClassName ? hHe(e.inlineClassName) : null, this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || !1, this.beforeContentClassName = e.beforeContentClassName ? hHe(e.beforeContentClassName) : null, this.afterContentClassName = e.afterContentClassName ? hHe(e.afterContentClassName) : null, this.after = e.after ? gfn.from(e.after) : null, this.before = e.before ? gfn.from(e.before) : null, this.hideInCommentTokens = e.hideInCommentTokens ?? !1, this.hideInStringTokens = e.hideInStringTokens ?? !1;
    }
}, Kg.EMPTY = Kg.register({
    description: "empty"
}), M$o = [
    Kg.register({
        description: "tracked-range-always-grows-when-typing-at-edges",
        stickiness: Ott.AlwaysGrowsWhenTypingAtEdges
    }),
    Kg.register({
        description: "tracked-range-never-grows-when-typing-at-edges",
        stickiness: Ott.NeverGrowsWhenTypingAtEdges
    }),
    Kg.register({
        description: "tracked-range-grows-only-when-typing-before",
        stickiness: Ott.GrowsOnlyWhenTypingBefore
    }),
    Kg.register({
        description: "tracked-range-grows-only-when-typing-after",
        stickiness: Ott.GrowsOnlyWhenTypingAfter
    })
], v7d = class extends st {
    constructor(t){
        super(), this.handleBeforeFire = t, this._actual = this._register(new tt), this.event = this._actual.event, this._affectedInjectedTextLines = null, this._deferredCnt = 0, this._shouldFireDeferred = !1, this._affectsMinimap = !1, this._affectsOverviewRuler = !1, this._affectsGlyphMargin = !1, this._affectsLineNumber = !1;
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
    recordLineAffectedByInjectedText(t) {
        this._affectedInjectedTextLines || (this._affectedInjectedTextLines = new Set), this._affectedInjectedTextLines.add(t);
    }
    checkAffectedAndFire(t) {
        this._affectsMinimap ||= !!t.minimap?.position, this._affectsOverviewRuler ||= !!t.overviewRuler?.color, this._affectsGlyphMargin ||= !!t.glyphMarginClassName, this._affectsLineNumber ||= !!t.lineNumberClassName, this.tryFire();
    }
    fire() {
        this._affectsMinimap = !0, this._affectsOverviewRuler = !0, this._affectsGlyphMargin = !0, this.tryFire();
    }
    tryFire() {
        this._deferredCnt === 0 ? this.doFire() : this._shouldFireDeferred = !0;
    }
    doFire() {
        this.handleBeforeFire(this._affectedInjectedTextLines);
        const t = {
            affectsMinimap: this._affectsMinimap,
            affectsOverviewRuler: this._affectsOverviewRuler,
            affectsGlyphMargin: this._affectsGlyphMargin,
            affectsLineNumber: this._affectsLineNumber
        };
        this._shouldFireDeferred = !1, this._affectsMinimap = !1, this._affectsOverviewRuler = !1, this._affectsGlyphMargin = !1, this._actual.fire(t);
    }
}, _7d = class extends st {
    constructor(){
        super(), this._fastEmitter = this._register(new tt), this.fastEvent = this._fastEmitter.event, this._slowEmitter = this._register(new tt), this.slowEvent = this._slowEmitter.event, this._deferredCnt = 0, this._deferredEvent = null;
    }
    hasListeners() {
        return this._fastEmitter.hasListeners() || this._slowEmitter.hasListeners();
    }
    beginDeferredEmit() {
        this._deferredCnt++;
    }
    endDeferredEmit(t = null) {
        if (this._deferredCnt--, this._deferredCnt === 0 && this._deferredEvent !== null) {
            this._deferredEvent.rawContentChangedEvent.resultingSelection = t;
            const e = this._deferredEvent;
            this._deferredEvent = null, this._fastEmitter.fire(e), this._slowEmitter.fire(e);
        }
    }
    fire(t) {
        if (this._deferredCnt > 0) {
            this._deferredEvent ? this._deferredEvent = this._deferredEvent.merge(t) : this._deferredEvent = t;
            return;
        }
        this._fastEmitter.fire(t), this._slowEmitter.fire(t);
    }
}, b7d = class {
    constructor(t){
        this.model = t;
    }
};

}
