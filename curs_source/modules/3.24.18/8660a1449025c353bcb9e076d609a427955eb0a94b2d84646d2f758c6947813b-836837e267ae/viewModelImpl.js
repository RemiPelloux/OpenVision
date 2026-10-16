import { Di, Fa, Jxe, Qe, sY, st, xa } from "./Iwo.js";
import { Yxe, bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { _b, ls } from "./color.js";
import { $Py, J7d } from "./cursor.js";
import { I9t, swe } from "./cursorCommon.js";
import { q3, s2 } from "./editorOptions.js";
import { TUd, XPy } from "./glyphLanesModel.js";
import { BI, Iy } from "./languages.js";
import { mUd, z$o } from "./minimapTokensColorTracker.js";
import { iR, y4 } from "./modesRegistry.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { esi, iBt, qtt } from "./textModelEvents.js";
import { rUd } from "./textToHtmlTokenizer.js";
import { E } from "./tslib.es6.js";
import { A7d, D7d, F7d, I7d, L7d, M7d, N7d, O7d, P7d, hsi, psi, pyt, sBt, vfn, x7d, xQ } from "./viewEvents.js";
import { hUd, qPy } from "./viewLayout.js";
import { H0r, _fn, lUd, zAe } from "./viewModel.js";
import { fUd, vUd } from "./viewModelDecorations.js";
import { $7d, B$o, B7d, G7d, H7d, K7d, Q7d, U$o, V7d, W7d, X7d, Y7d, Z7d, z7d } from "./viewModelEventDispatcher.js";
import { SUd, YPy, wUd } from "./viewModelLines.js";
import { EUd, WPy, ZPy, Zwr } from "./ze.js";
var IUd, xUd, AUd, RUd, PUd, rHo;
export { AUd, IUd, PUd, RUd, rHo, xUd };
var __wakaru_QPy_initialized = false;
export function QPy() {
if (__wakaru_QPy_initialized) return;
__wakaru_QPy_initialized = true;
"use strict";
E(), bo(), qn(), _b(), Qe(), Di(), Fa(), s2(), $Py(), swe(), jc(), Qs(), iBt(), Iy(), y4(), rUd(), sBt(), qPy(), mUd(), zAe(), vUd(), U$o(), YPy(), XPy(), IUd = !0, xUd = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c){
        if (super(), this.languageConfigurationService = o, this._themeService = a, this._attachedView = l, this._transactionalTarget = c, this.hiddenAreasModel = new PUd, this.previousHiddenAreas = [], this._editorId = t, this._configuration = e, this.model = n, this._eventDispatcher = new B7d, this.onEvent = this._eventDispatcher.onEvent, this.cursorConfig = new I9t(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._updateConfigurationViewLineCount = this._register(new Yu(()=>this._updateConfigurationViewLineCountNow(), 0)), this._hasFocus = !1, this._viewportStart = AUd.create(this.model), this.glyphLanes = new TUd(0), IUd && this.model.isTooLargeForTokenization()) this._lines = new wUd(this.model);
        else {
            const u = this._configuration.options, d = u.get(52), h = u.get(144), p = u.get(152), g = u.get(143), f = u.get(134);
            this._lines = new SUd(this._editorId, this.model, i, r, d, this.model.getOptions().tabSize, h, p.wrappingColumn, g, f);
        }
        this.coordinatesConverter = this._lines.createCoordinatesConverter(), this._cursor = this._register(new J7d(n, this, this.coordinatesConverter, this.cursorConfig)), this.viewLayout = this._register(new hUd(this._configuration, this.getLineCount(), s)), this._register(this.viewLayout.onDidScroll((u)=>{
            u.scrollTopChanged && this._handleVisibleLinesChanged(), u.scrollTopChanged && this._viewportStart.invalidate(), this._eventDispatcher.emitSingleViewEvent(new D7d(u)), this._eventDispatcher.emitOutgoingEvent(new H7d(u.oldScrollWidth, u.oldScrollLeft, u.oldScrollHeight, u.oldScrollTop, u.scrollWidth, u.scrollLeft, u.scrollHeight, u.scrollTop));
        })), this._register(this.viewLayout.onDidContentSizeChange((u)=>{
            this._eventDispatcher.emitOutgoingEvent(u);
        })), this._decorations = new fUd(this._editorId, this.model, this._configuration, this._lines, this.coordinatesConverter), this._registerModelEvents(), this._register(this._configuration.onDidChangeFast((u)=>{
            try {
                const d = this._eventDispatcher.beginEmitViewEvents();
                this._onConfigurationChanged(d, u);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
        })), this._register(z$o.getInstance().onDidChange(()=>{
            this._eventDispatcher.emitSingleViewEvent(new O7d);
        })), this._register(this._themeService.onDidColorThemeChange((u)=>{
            this._invalidateDecorationsColorCache(), this._eventDispatcher.emitSingleViewEvent(new N7d(u));
        })), this._updateConfigurationViewLineCountNow();
    }
    dispose() {
        super.dispose(), this._decorations.dispose(), this._lines.dispose(), this._viewportStart.dispose(), this._eventDispatcher.dispose();
    }
    createLineBreaksComputer() {
        return this._lines.createLineBreaksComputer();
    }
    addViewEventHandler(t) {
        this._eventDispatcher.addViewEventHandler(t);
    }
    removeViewEventHandler(t) {
        this._eventDispatcher.removeViewEventHandler(t);
    }
    _updateConfigurationViewLineCountNow() {
        this._configuration.setViewLineCount(this._lines.getViewLineCount());
    }
    getModelVisibleRanges() {
        const t = this.viewLayout.getLinesViewportData(), e = new qt(t.startLineNumber, this.getLineMinColumn(t.startLineNumber), t.endLineNumber, this.getLineMaxColumn(t.endLineNumber));
        return this._toModelVisibleRanges(e);
    }
    visibleLinesStabilized() {
        const t = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(t, !0);
    }
    _handleVisibleLinesChanged() {
        const t = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(t, !1);
    }
    setHasFocus(t) {
        this._hasFocus = t, this._cursor.setHasFocus(t), this._eventDispatcher.emitSingleViewEvent(new P7d(t)), this._eventDispatcher.emitOutgoingEvent(new B$o(!t, t));
    }
    setHasWidgetFocus(t) {
        this._eventDispatcher.emitOutgoingEvent(new $7d(!t, t));
    }
    onCompositionStart() {
        this._eventDispatcher.emitSingleViewEvent(new I7d);
    }
    onCompositionEnd() {
        this._eventDispatcher.emitSingleViewEvent(new x7d);
    }
    _captureStableViewport() {
        if (this._viewportStart.isValid && this.viewLayout.getCurrentScrollTop() > 0) {
            const t = new er(this._viewportStart.viewLineNumber, this.getLineMinColumn(this._viewportStart.viewLineNumber)), e = this.coordinatesConverter.convertViewPositionToModelPosition(t);
            return new rHo(e, this._viewportStart.startLineDelta);
        }
        return new rHo(null, 0);
    }
    _onConfigurationChanged(t, e) {
        const n = this._captureStableViewport(), i = this._configuration.options, r = i.get(52), s = i.get(144), o = i.get(152), a = i.get(143), l = i.get(134);
        this._lines.setWrappingSettings(r, s, o.wrappingColumn, a, l) && (t.emitViewEvent(new hsi), t.emitViewEvent(new psi), t.emitViewEvent(new pyt(null)), this._cursor.onLineMappingChanged(t), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this._updateConfigurationViewLineCount.schedule()), e.hasChanged(96) && (this._decorations.reset(), t.emitViewEvent(new pyt(null))), e.hasChanged(103) && (this._decorations.reset(), t.emitViewEvent(new pyt(null))), t.emitViewEvent(new A7d(e)), this.viewLayout.onConfigurationChanged(e), n.recoverViewportStart(this.coordinatesConverter, this.viewLayout), I9t.shouldRecreate(e) && (this.cursorConfig = new I9t(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig));
    }
    _registerModelEvents() {
        this._register(this.model.onDidChangeContentOrInjectedText((t)=>{
            try {
                const n = this._eventDispatcher.beginEmitViewEvents();
                let i = !1, r = !1;
                const s = t instanceof esi ? t.rawContentChangedEvent.changes : t.changes, o = t instanceof esi ? t.rawContentChangedEvent.versionId : null, a = this._lines.createLineBreaksComputer();
                for (const u of s)switch(u.changeType){
                    case qtt.LinesInserted:
                        {
                            for(let d = 0; d < u.detail.length; d++){
                                const h = u.detail[d];
                                let p = u.injectedTexts[d];
                                p && (p = p.filter((g)=>!g.ownerId || g.ownerId === this._editorId)), a.addRequest(h, p, null);
                            }
                            break;
                        }
                    case qtt.LineChanged:
                        {
                            let d = null;
                            u.injectedText && (d = u.injectedText.filter((h)=>!h.ownerId || h.ownerId === this._editorId)), a.addRequest(u.detail, d, null);
                            break;
                        }
                }
                const l = a.finalize(), c = new Yxe(l);
                for (const u of s)switch(u.changeType){
                    case qtt.Flush:
                        {
                            this._lines.onModelFlushed(), n.emitViewEvent(new hsi), this._decorations.reset(), this.viewLayout.onFlushed(this.getLineCount()), i = !0;
                            break;
                        }
                    case qtt.LinesDeleted:
                        {
                            const d = this._lines.onModelLinesDeleted(o, u.fromLineNumber, u.toLineNumber);
                            d !== null && (n.emitViewEvent(d), this.viewLayout.onLinesDeleted(d.fromLineNumber, d.toLineNumber)), i = !0;
                            break;
                        }
                    case qtt.LinesInserted:
                        {
                            const d = c.takeCount(u.detail.length), h = this._lines.onModelLinesInserted(o, u.fromLineNumber, u.toLineNumber, d);
                            h !== null && (n.emitViewEvent(h), this.viewLayout.onLinesInserted(h.fromLineNumber, h.toLineNumber)), i = !0;
                            break;
                        }
                    case qtt.LineChanged:
                        {
                            const d = c.dequeue(), [h, p, g, f] = this._lines.onModelLineChanged(o, u.lineNumber, d);
                            r = h, p && n.emitViewEvent(p), g && (n.emitViewEvent(g), this.viewLayout.onLinesInserted(g.fromLineNumber, g.toLineNumber)), f && (n.emitViewEvent(f), this.viewLayout.onLinesDeleted(f.fromLineNumber, f.toLineNumber));
                            break;
                        }
                    case qtt.EOLChanged:
                        break;
                }
                o !== null && this._lines.acceptVersionId(o), this.viewLayout.onHeightMaybeChanged(), !i && r && (n.emitViewEvent(new psi), n.emitViewEvent(new pyt(null)), this._cursor.onLineMappingChanged(n), this._decorations.onLineMappingChanged());
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
            const e = this._viewportStart.isValid;
            if (this._viewportStart.invalidate(), this._configuration.setModelLineCount(this.model.getLineCount()), this._updateConfigurationViewLineCountNow(), !this._hasFocus && this.model.getAttachedEditorCount() >= 2 && e) {
                const n = this.model._getTrackedRange(this._viewportStart.modelTrackedRange);
                if (n) {
                    const i = this.coordinatesConverter.convertModelPositionToViewPosition(n.getStartPosition()), r = this.viewLayout.getVerticalOffsetForLineNumber(i.lineNumber);
                    this.viewLayout.setScrollPosition({
                        scrollTop: r + this._viewportStart.startLineDelta
                    }, 1);
                }
            }
            try {
                const n = this._eventDispatcher.beginEmitViewEvents();
                t instanceof esi && n.emitOutgoingEvent(new X7d(t.contentChangedEvent)), this._cursor.onModelContentChanged(n, t);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
            this._handleVisibleLinesChanged();
        })), this._register(this.model.onDidChangeTokens((t)=>{
            const e = [];
            for(let n = 0, i = t.ranges.length; n < i; n++){
                const r = t.ranges[n], s = this.coordinatesConverter.convertModelPositionToViewPosition(new er(r.fromLineNumber, 1)).lineNumber, o = this.coordinatesConverter.convertModelPositionToViewPosition(new er(r.toLineNumber, this.model.getLineMaxColumn(r.toLineNumber))).lineNumber;
                e[n] = {
                    fromLineNumber: s,
                    toLineNumber: o
                };
            }
            this._eventDispatcher.emitSingleViewEvent(new L7d(e)), this._eventDispatcher.emitOutgoingEvent(new Q7d(t));
        })), this._register(this.model.onDidChangeLanguageConfiguration((t)=>{
            this._eventDispatcher.emitSingleViewEvent(new M7d), this.cursorConfig = new I9t(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new Y7d(t));
        })), this._register(this.model.onDidChangeLanguage((t)=>{
            this.cursorConfig = new I9t(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new K7d(t));
        })), this._register(this.model.onDidChangeOptions((t)=>{
            if (this._lines.setTabSize(this.model.getOptions().tabSize)) {
                try {
                    const e = this._eventDispatcher.beginEmitViewEvents();
                    e.emitViewEvent(new hsi), e.emitViewEvent(new psi), e.emitViewEvent(new pyt(null)), this._cursor.onLineMappingChanged(e), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount());
                } finally{
                    this._eventDispatcher.endEmitViewEvents();
                }
                this._updateConfigurationViewLineCount.schedule();
            }
            this.cursorConfig = new I9t(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new Z7d(t));
        })), this._register(this.model.onDidChangeDecorations((t)=>{
            this._decorations.onModelDecorationsChanged(), this._eventDispatcher.emitSingleViewEvent(new pyt(t)), this._eventDispatcher.emitOutgoingEvent(new V7d(t));
        }));
    }
    setHiddenAreas(t, e, n) {
        this.hiddenAreasModel.setHiddenAreas(e, t);
        const i = this.hiddenAreasModel.getMergedRanges();
        if (i === this.previousHiddenAreas && !n) return;
        this.previousHiddenAreas = i;
        const r = this._captureStableViewport();
        let s = !1;
        try {
            const o = this._eventDispatcher.beginEmitViewEvents();
            s = this._lines.setHiddenAreas(i), s && (o.emitViewEvent(new hsi), o.emitViewEvent(new psi), o.emitViewEvent(new pyt(null)), this._cursor.onLineMappingChanged(o), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this.viewLayout.onHeightMaybeChanged());
            const a = r.viewportStartModelPosition?.lineNumber;
            a && i.some((c)=>c.startLineNumber <= a && a <= c.endLineNumber) || r.recoverViewportStart(this.coordinatesConverter, this.viewLayout);
        } finally{
            this._eventDispatcher.endEmitViewEvents();
        }
        this._updateConfigurationViewLineCount.schedule(), s && this._eventDispatcher.emitOutgoingEvent(new G7d);
    }
    getVisibleRangesPlusViewportAboveBelow() {
        const t = this._configuration.options.get(151), e = this._configuration.options.get(68), n = Math.max(20, Math.round(t.height / e)), i = this.viewLayout.getLinesViewportData(), r = Math.max(1, i.completelyVisibleStartLineNumber - n), s = Math.min(this.getLineCount(), i.completelyVisibleEndLineNumber + n);
        return this._toModelVisibleRanges(new qt(r, this.getLineMinColumn(r), s, this.getLineMaxColumn(s)));
    }
    getVisibleRanges() {
        const t = this.getCompletelyVisibleViewRange();
        return this._toModelVisibleRanges(t);
    }
    getHiddenAreas() {
        return this._lines.getHiddenAreas();
    }
    _toModelVisibleRanges(t) {
        const e = this.coordinatesConverter.convertViewRangeToModelRange(t), n = this._lines.getHiddenAreas();
        if (n.length === 0) return [
            e
        ];
        const i = [];
        let r = 0, s = e.startLineNumber, o = e.startColumn;
        const a = e.endLineNumber, l = e.endColumn;
        for(let c = 0, u = n.length; c < u; c++){
            const d = n[c].startLineNumber, h = n[c].endLineNumber;
            h < s || d > a || (s < d && (i[r++] = new qt(s, o, d - 1, this.model.getLineMaxColumn(d - 1))), s = h + 1, o = 1);
        }
        return (s < a || s === a && o < l) && (i[r++] = new qt(s, o, a, l)), i;
    }
    getCompletelyVisibleViewRange() {
        const t = this.viewLayout.getLinesViewportData(), e = t.completelyVisibleStartLineNumber, n = t.completelyVisibleEndLineNumber;
        return new qt(e, this.getLineMinColumn(e), n, this.getLineMaxColumn(n));
    }
    getCompletelyVisibleViewRangeAtScrollTop(t) {
        const e = this.viewLayout.getLinesViewportDataAtScrollTop(t), n = e.completelyVisibleStartLineNumber, i = e.completelyVisibleEndLineNumber;
        return new qt(n, this.getLineMinColumn(n), i, this.getLineMaxColumn(i));
    }
    saveState() {
        const t = this.viewLayout.saveState(), e = t.scrollTop, n = this.viewLayout.getLineNumberAtVerticalOffset(e), i = this.coordinatesConverter.convertViewPositionToModelPosition(new er(n, this.getLineMinColumn(n))), r = this.viewLayout.getVerticalOffsetForLineNumber(n) - e;
        return {
            scrollLeft: t.scrollLeft,
            firstPosition: i,
            firstPositionDeltaTop: r
        };
    }
    reduceRestoreState(t) {
        if (typeof t.firstPosition > "u") return this._reduceRestoreStateCompatibility(t);
        const e = this.model.validatePosition(t.firstPosition), n = this.coordinatesConverter.convertModelPositionToViewPosition(e), i = this.viewLayout.getVerticalOffsetForLineNumber(n.lineNumber) - t.firstPositionDeltaTop;
        return {
            scrollLeft: t.scrollLeft,
            scrollTop: i
        };
    }
    _reduceRestoreStateCompatibility(t) {
        return {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTopWithoutViewZones
        };
    }
    getTabSize() {
        return this.model.getOptions().tabSize;
    }
    getLineCount() {
        return this._lines.getViewLineCount();
    }
    setViewport(t, e, n) {
        this._viewportStart.update(this, t);
    }
    getActiveIndentGuide(t, e, n) {
        return this._lines.getActiveIndentGuide(t, e, n);
    }
    getLinesIndentGuides(t, e) {
        return this._lines.getViewLinesIndentGuides(t, e);
    }
    getBracketGuidesInRangeByLine(t, e, n, i) {
        return this._lines.getViewLinesBracketGuides(t, e, n, i);
    }
    getLineContent(t) {
        return this._lines.getViewLineContent(t);
    }
    getLineLength(t) {
        return this._lines.getViewLineLength(t);
    }
    getLineMinColumn(t) {
        return this._lines.getViewLineMinColumn(t);
    }
    getLineMaxColumn(t) {
        return this._lines.getViewLineMaxColumn(t);
    }
    getLineFirstNonWhitespaceColumn(t) {
        const e = sY(this.getLineContent(t));
        return e === -1 ? 0 : e + 1;
    }
    getLineLastNonWhitespaceColumn(t) {
        const e = Jxe(this.getLineContent(t));
        return e === -1 ? 0 : e + 2;
    }
    getMinimapDecorationsInRange(t) {
        return this._decorations.getMinimapDecorationsInRange(t);
    }
    getDecorationsInViewport(t) {
        return this._decorations.getDecorationsViewportData(t).decorations;
    }
    getInjectedTextAt(t) {
        return this._lines.getInjectedTextAt(t);
    }
    getViewportViewLineRenderingData(t, e) {
        const i = this._decorations.getDecorationsViewportData(t).inlineDecorations[e - t.startLineNumber];
        return this._getViewLineRenderingData(e, i);
    }
    getViewLineRenderingData(t) {
        const e = this._decorations.getInlineDecorationsOnLine(t);
        return this._getViewLineRenderingData(t, e);
    }
    _getViewLineRenderingData(t, e) {
        const n = this.model.mightContainRTL(), i = this.model.mightContainNonBasicASCII(), r = this.getTabSize(), s = this._lines.getViewLineData(t);
        return s.inlineDecorations && (e = [
            ...e,
            ...s.inlineDecorations.map((o)=>o.toInlineDecoration(t))
        ]), new _fn(s.minColumn, s.maxColumn, s.content, s.continuesWithWrappedLine, n, i, s.tokens, e, r, s.startVisibleColumn);
    }
    getViewLineData(t) {
        return this._lines.getViewLineData(t);
    }
    getMinimapLinesRenderingData(t, e, n) {
        const i = this._lines.getViewLinesData(t, e, n);
        return new lUd(this.getTabSize(), i);
    }
    getAllOverviewRulerDecorations(t) {
        const e = this.model.getOverviewRulerDecorations(this._editorId, Zwr(this._configuration.options)), n = new RUd;
        for (const i of e){
            const r = i.options, s = r.overviewRuler;
            if (!s) continue;
            const o = s.position;
            if (o === 0) continue;
            const a = s.getColor(t.value), l = this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.startLineNumber, i.range.startColumn), c = this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.endLineNumber, i.range.endColumn);
            n.accept(a, r.zIndex, l, c, o);
        }
        return n.asArray;
    }
    _invalidateDecorationsColorCache() {
        const t = this.model.getOverviewRulerDecorations();
        for (const e of t)e.options.overviewRuler?.invalidateCachedColor(), e.options.minimap?.invalidateCachedColor();
    }
    getValueInRange(t, e) {
        const n = this.coordinatesConverter.convertViewRangeToModelRange(t);
        return this.model.getValueInRange(n, e);
    }
    getValueLengthInRange(t, e) {
        const n = this.coordinatesConverter.convertViewRangeToModelRange(t);
        return this.model.getValueLengthInRange(n, e);
    }
    modifyPosition(t, e) {
        const n = this.coordinatesConverter.convertViewPositionToModelPosition(t), i = this.model.modifyPosition(n, e);
        return this.coordinatesConverter.convertModelPositionToViewPosition(i);
    }
    deduceModelPositionRelativeToViewPosition(t, e, n) {
        const i = this.coordinatesConverter.convertViewPositionToModelPosition(t);
        this.model.getEOL().length === 2 && (e < 0 ? e -= n : e += n);
        const s = this.model.getOffsetAt(i) + e;
        return this.model.getPositionAt(s);
    }
    getPlainTextToCopy(t, e, n) {
        const i = n ? `\r
` : this.model.getEOL();
        t = t.slice(0), t.sort(qt.compareRangesUsingStarts);
        let r = !1, s = !1;
        for (const a of t)a.isEmpty() ? r = !0 : s = !0;
        if (!s) {
            if (!e) return "";
            const a = t.map((c)=>c.startLineNumber);
            let l = "";
            for(let c = 0; c < a.length; c++)c > 0 && a[c - 1] === a[c] || (l += this.model.getLineContent(a[c]) + i);
            return l;
        }
        if (r && e) {
            const a = [];
            let l = 0;
            for (const c of t){
                const u = c.startLineNumber;
                c.isEmpty() ? u !== l && a.push(this.model.getLineContent(u)) : a.push(this.model.getValueInRange(c, n ? 2 : 0)), l = u;
            }
            return a.length === 1 ? a[0] : a;
        }
        const o = [];
        for (const a of t)a.isEmpty() || o.push(this.model.getValueInRange(a, n ? 2 : 0));
        return o.length === 1 ? o[0] : o;
    }
    getRichTextToCopy(t, e) {
        const n = this.model.getLanguageId();
        if (n === iR || t.length !== 1) return null;
        let i = t[0];
        if (i.isEmpty()) {
            if (!e) return null;
            const c = i.startLineNumber;
            i = new qt(c, this.model.getLineMinColumn(c), c, this.model.getLineMaxColumn(c));
        }
        const r = this._configuration.options.get(52), s = this._getColorMap(), a = /[:;\\\/<>]/.test(r.fontFamily) || r.fontFamily === q3.fontFamily;
        let l;
        return a ? l = q3.fontFamily : (l = r.fontFamily, l = l.replace(/"/g, "'"), /[,']/.test(l) || /[+ ]/.test(l) && (l = `'${l}'`), l = `${l}, ${q3.fontFamily}`), {
            mode: n,
            html: `<div style="color: ${s[1]};background-color: ${s[2]};font-family: ${l};font-weight: ${r.fontWeight};font-size: ${r.fontSize}px;line-height: ${r.lineHeight}px;white-space: pre;">` + this._getHTMLToCopy(i, s) + "</div>"
        };
    }
    _getHTMLToCopy(t, e) {
        const n = t.startLineNumber, i = t.startColumn, r = t.endLineNumber, s = t.endColumn, o = this.getTabSize();
        let a = "";
        for(let l = n; l <= r; l++){
            const c = this.model.tokenization.getLineTokens(l), u = c.getLineContent(), d = l === n ? i - 1 : 0, h = l === r ? s - 1 : u.length;
            u === "" ? a += "<br>" : a += WPy(u, c.inflate(), e, d, h, o, xa);
        }
        return a;
    }
    _getColorMap() {
        const t = BI.getColorMap(), e = [
            "#000000"
        ];
        if (t) for(let n = 1, i = t.length; n < i; n++)e[n] = ls.Format.CSS.formatHex(t[n]);
        return e;
    }
    getPrimaryCursorState() {
        return this._cursor.getPrimaryCursorState();
    }
    getLastAddedCursorIndex() {
        return this._cursor.getLastAddedCursorIndex();
    }
    getCursorStates() {
        return this._cursor.getCursorStates();
    }
    setCursorStates(t, e, n) {
        return this._withViewEventsCollector((i)=>this._cursor.setStates(i, t, e, n));
    }
    getCursorColumnSelectData() {
        return this._cursor.getCursorColumnSelectData();
    }
    getCursorAutoClosedCharacters() {
        return this._cursor.getAutoClosedCharacters();
    }
    setCursorColumnSelectData(t) {
        this._cursor.setCursorColumnSelectData(t);
    }
    getPrevEditOperationType() {
        return this._cursor.getPrevEditOperationType();
    }
    setPrevEditOperationType(t) {
        this._cursor.setPrevEditOperationType(t);
    }
    getSelection() {
        return this._cursor.getSelection();
    }
    getSelections() {
        return this._cursor.getSelections();
    }
    getPosition() {
        return this._cursor.getPrimaryCursorState().modelState.position;
    }
    setSelections(t, e, n = 0) {
        this._withViewEventsCollector((i)=>this._cursor.setSelections(i, t, e, n));
    }
    saveCursorState() {
        return this._cursor.saveState();
    }
    restoreCursorState(t) {
        this._withViewEventsCollector((e)=>this._cursor.restoreState(e, t));
    }
    _executeCursorEdit(t) {
        if (this._cursor.context.cursorConfig.readOnly) {
            this._eventDispatcher.emitOutgoingEvent(new z7d);
            return;
        }
        this._withViewEventsCollector(t);
    }
    executeEdits(t, e, n) {
        this._executeCursorEdit((i)=>this._cursor.executeEdits(i, t, e, n));
    }
    startComposition() {
        this._executeCursorEdit((t)=>this._cursor.startComposition(t));
    }
    endComposition(t) {
        this._executeCursorEdit((e)=>this._cursor.endComposition(e, t));
    }
    type(t, e) {
        this._executeCursorEdit((n)=>this._cursor.type(n, t, e));
    }
    compositionType(t, e, n, i, r) {
        this._executeCursorEdit((s)=>this._cursor.compositionType(s, t, e, n, i, r));
    }
    paste(t, e, n, i) {
        this._executeCursorEdit((r)=>this._cursor.paste(r, t, e, n, i));
    }
    cut(t) {
        this._executeCursorEdit((e)=>this._cursor.cut(e, t));
    }
    executeCommand(t, e) {
        this._executeCursorEdit((n)=>this._cursor.executeCommand(n, t, e));
    }
    executeCommands(t, e) {
        this._executeCursorEdit((n)=>this._cursor.executeCommands(n, t, e));
    }
    revealAllCursors(t, e, n = !1) {
        this._withViewEventsCollector((i)=>this._cursor.revealAll(i, t, n, xQ.Simple, e, 0));
    }
    revealPrimaryCursor(t, e, n = !1) {
        this._withViewEventsCollector((i)=>this._cursor.revealPrimary(i, t, n, xQ.Simple, e, 0));
    }
    revealTopMostCursor(t) {
        const e = this._cursor.getTopMostViewPosition(), n = new qt(e.lineNumber, e.column, e.lineNumber, e.column);
        this._withViewEventsCollector((i)=>i.emitViewEvent(new vfn(t, !1, n, null, xQ.Simple, !0, 0)));
    }
    revealBottomMostCursor(t) {
        const e = this._cursor.getBottomMostViewPosition(), n = new qt(e.lineNumber, e.column, e.lineNumber, e.column);
        this._withViewEventsCollector((i)=>i.emitViewEvent(new vfn(t, !1, n, null, xQ.Simple, !0, 0)));
    }
    revealRange(t, e, n, i, r) {
        this._withViewEventsCollector((s)=>s.emitViewEvent(new vfn(t, !1, n, null, i, e, r)));
    }
    changeWhitespace(t) {
        this.viewLayout.changeWhitespace(t) && (this._eventDispatcher.emitSingleViewEvent(new F7d), this._eventDispatcher.emitOutgoingEvent(new W7d));
    }
    _withViewEventsCollector(t) {
        return this._transactionalTarget.batchChanges(()=>{
            try {
                const e = this._eventDispatcher.beginEmitViewEvents();
                return t(e);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
        });
    }
    batchEvents(t) {
        this._withViewEventsCollector(()=>{
            t();
        });
    }
    normalizePosition(t, e) {
        return this._lines.normalizePosition(t, e);
    }
    getLineIndentColumn(t) {
        return this._lines.getLineIndentColumn(t);
    }
}, AUd = class KAb {
    constructor(e, n, i, r, s){
        this._model = e, this._viewLineNumber = n, this._isValid = i, this._modelTrackedRange = r, this._startLineDelta = s;
    }
    static create(e) {
        const n = e._setTrackedRange(null, new qt(1, 1, 1, 1), 1);
        return new KAb(e, 1, !1, n, 0);
    }
    get viewLineNumber() {
        return this._viewLineNumber;
    }
    get isValid() {
        return this._isValid;
    }
    get modelTrackedRange() {
        return this._modelTrackedRange;
    }
    get startLineDelta() {
        return this._startLineDelta;
    }
    dispose() {
        this._model._setTrackedRange(this._modelTrackedRange, null, 1);
    }
    update(e, n) {
        const i = e.coordinatesConverter.convertViewPositionToModelPosition(new er(n, e.getLineMinColumn(n))), r = e.model._setTrackedRange(this._modelTrackedRange, new qt(i.lineNumber, i.column, i.lineNumber, i.column), 1), s = e.viewLayout.getVerticalOffsetForLineNumber(n), o = e.viewLayout.getCurrentScrollTop();
        this._viewLineNumber = n, this._isValid = !0, this._modelTrackedRange = r, this._startLineDelta = o - s;
    }
    invalidate() {
        this._isValid = !1;
    }
}, RUd = class {
    constructor(){
        this._asMap = Object.create(null), this.asArray = [];
    }
    accept(t, e, n, i, r) {
        const s = this._asMap[t];
        if (s) {
            const o = s.data, a = o[o.length - 3], l = o[o.length - 1];
            if (a === r && l + 1 >= n) {
                i > l && (o[o.length - 1] = i);
                return;
            }
            o.push(r, n, i);
        } else {
            const o = new H0r(t, e, [
                r,
                n,
                i
            ]);
            this._asMap[t] = o, this.asArray.push(o);
        }
    }
}, PUd = class {
    constructor(){
        this.hiddenAreas = new Map, this.shouldRecompute = !1, this.ranges = [];
    }
    setHiddenAreas(t, e) {
        const n = this.hiddenAreas.get(t);
        n && EUd(n, e) || (this.hiddenAreas.set(t, e), this.shouldRecompute = !0);
    }
    getMergedRanges() {
        if (!this.shouldRecompute) return this.ranges;
        this.shouldRecompute = !1;
        const t = Array.from(this.hiddenAreas.values()).reduce((e, n)=>ZPy(e, n), []);
        return EUd(this.ranges, t) ? this.ranges : (this.ranges = t, this.ranges);
    }
}, rHo = class {
    constructor(t, e){
        this.viewportStartModelPosition = t, this.startLineDelta = e;
    }
    recoverViewportStart(t, e) {
        if (!this.viewportStartModelPosition) return;
        const n = t.convertModelPositionToViewPosition(this.viewportStartModelPosition), i = e.getVerticalOffsetForLineNumber(n.lineNumber);
        e.setScrollPosition({
            scrollTop: i + this.startLineDelta
        }, 1);
    }
};

}
