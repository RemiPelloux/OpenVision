import { Jce, Oo, Ps, R7, Se, jn, we } from "./HVr.js";
import { dr, hge } from "./arrays.js";
import { ac, bn } from "./async.js";
import { Ci, Sm } from "./color.js";
import { FJr, UJr } from "./cursor.js";
import { eze, ire } from "./cursorCommon.js";
import { dA, m1 } from "./editorOptions.js";
import { l5c, rvg } from "./glyphLanesModel.js";
import { Ky, Wp } from "./languages.js";
import { JBc, jJr } from "./minimapTokensColorTracker.js";
import { $T, Sy } from "./modesRegistry.js";
import { Yn, ya } from "./position.js";
import { GBc, hvi, svg, u5c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { ZBe, bfn, xpt } from "./textModelEvents.js";
import { Bze } from "./textToHtmlTokenizer.js";
import { x } from "./tslib.es6.js";
import { Bfn, CBc, FOt, Fze, Npt, SBc, TBc, Ufn, bBc, fBc, gBc, hW, kBc, vBc, wBc, yBc } from "./viewEvents.js";
import { Jfg, ZBc } from "./viewLayout.js";
import { BOt, Cle, __i, zBc } from "./viewModel.js";
import { n5c, t5c } from "./viewModelDecorations.js";
import { ABc, BBc, DBc, EBc, FBc, IBc, LBc, NBc, OBc, OJr, PBc, RBc, UBc, p_i } from "./viewModelEventDispatcher.js";
import { a5c, ivg, s5c } from "./viewModelLines.js";
var d5c, h5c, p5c, m5c, g5c, nes;
export { d5c, g5c, h5c, m5c, nes, p5c };
var __wakaru_ovg_initialized = false;
export function ovg() {
if (__wakaru_ovg_initialized) return;
__wakaru_ovg_initialized = true;
"use strict";
x(), dr(), bn(), Sm(), Se(), jn(), Ps(), m1(), UJr(), ire(), ya(), qi(), xpt(), Wp(), $T(), Bze(), Npt(), Jfg(), JBc(), Cle(), n5c(), p_i(), ivg(), rvg(), d5c = !0, h5c = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l){
        if (super(), this.languageConfigurationService = o, this._themeService = a, this._attachedView = c, this._transactionalTarget = l, this.hiddenAreasModel = new g5c, this.previousHiddenAreas = [], this._editorId = e, this._configuration = t, this.model = n, this._eventDispatcher = new EBc, this.onEvent = this._eventDispatcher.onEvent, this.cursorConfig = new eze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._updateConfigurationViewLineCount = this._register(new ac(()=>this._updateConfigurationViewLineCountNow(), 0)), this._hasFocus = !1, this._viewportStart = p5c.create(this.model), this.glyphLanes = new l5c(0), d5c && this.model.isTooLargeForTokenization()) this._lines = new a5c(this.model);
        else {
            const u = this._configuration.options, h = u.get(52), p = u.get(144), g = u.get(152), f = u.get(143), v = u.get(134);
            this._lines = new s5c(this._editorId, this.model, i, r, h, this.model.getOptions().tabSize, p, g.wrappingColumn, f, v);
        }
        this.coordinatesConverter = this._lines.createCoordinatesConverter(), this._cursor = this._register(new FJr(n, this, this.coordinatesConverter, this.cursorConfig)), this.viewLayout = this._register(new ZBc(this._configuration, this.getLineCount(), s)), this._register(this.viewLayout.onDidScroll((u)=>{
            u.scrollTopChanged && this._handleVisibleLinesChanged(), u.scrollTopChanged && this._viewportStart.invalidate(), this._eventDispatcher.emitSingleViewEvent(new SBc(u)), this._eventDispatcher.emitOutgoingEvent(new ABc(u.oldScrollWidth, u.oldScrollLeft, u.oldScrollHeight, u.oldScrollTop, u.scrollWidth, u.scrollLeft, u.scrollHeight, u.scrollTop));
        })), this._register(this.viewLayout.onDidContentSizeChange((u)=>{
            this._eventDispatcher.emitOutgoingEvent(u);
        })), this._decorations = new t5c(this._editorId, this.model, this._configuration, this._lines, this.coordinatesConverter), this._registerModelEvents(), this._register(this._configuration.onDidChangeFast((u)=>{
            try {
                const h = this._eventDispatcher.beginEmitViewEvents();
                this._onConfigurationChanged(h, u);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
        })), this._register(jJr.getInstance().onDidChange(()=>{
            this._eventDispatcher.emitSingleViewEvent(new CBc);
        })), this._register(this._themeService.onDidColorThemeChange((u)=>{
            this._invalidateDecorationsColorCache(), this._eventDispatcher.emitSingleViewEvent(new kBc(u));
        })), this._updateConfigurationViewLineCountNow();
    }
    dispose() {
        super.dispose(), this._decorations.dispose(), this._lines.dispose(), this._viewportStart.dispose(), this._eventDispatcher.dispose();
    }
    createLineBreaksComputer() {
        return this._lines.createLineBreaksComputer();
    }
    addViewEventHandler(e) {
        this._eventDispatcher.addViewEventHandler(e);
    }
    removeViewEventHandler(e) {
        this._eventDispatcher.removeViewEventHandler(e);
    }
    _updateConfigurationViewLineCountNow() {
        this._configuration.setViewLineCount(this._lines.getViewLineCount());
    }
    getModelVisibleRanges() {
        const e = this.viewLayout.getLinesViewportData(), t = new dt(e.startLineNumber, this.getLineMinColumn(e.startLineNumber), e.endLineNumber, this.getLineMaxColumn(e.endLineNumber));
        return this._toModelVisibleRanges(t);
    }
    visibleLinesStabilized() {
        const e = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(e, !0);
    }
    _handleVisibleLinesChanged() {
        const e = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(e, !1);
    }
    setHasFocus(e) {
        this._hasFocus = e, this._cursor.setHasFocus(e), this._eventDispatcher.emitSingleViewEvent(new bBc(e)), this._eventDispatcher.emitOutgoingEvent(new OJr(!e, e));
    }
    setHasWidgetFocus(e) {
        this._eventDispatcher.emitOutgoingEvent(new IBc(!e, e));
    }
    onCompositionStart() {
        this._eventDispatcher.emitSingleViewEvent(new gBc);
    }
    onCompositionEnd() {
        this._eventDispatcher.emitSingleViewEvent(new fBc);
    }
    _captureStableViewport() {
        if (this._viewportStart.isValid && this.viewLayout.getCurrentScrollTop() > 0) {
            const e = new Yn(this._viewportStart.viewLineNumber, this.getLineMinColumn(this._viewportStart.viewLineNumber)), t = this.coordinatesConverter.convertViewPositionToModelPosition(e);
            return new nes(t, this._viewportStart.startLineDelta);
        }
        return new nes(null, 0);
    }
    _onConfigurationChanged(e, t) {
        const n = this._captureStableViewport(), i = this._configuration.options, r = i.get(52), s = i.get(144), o = i.get(152), a = i.get(143), c = i.get(134);
        this._lines.setWrappingSettings(r, s, o.wrappingColumn, a, c) && (e.emitViewEvent(new Bfn), e.emitViewEvent(new Ufn), e.emitViewEvent(new Fze(null)), this._cursor.onLineMappingChanged(e), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this._updateConfigurationViewLineCount.schedule()), t.hasChanged(96) && (this._decorations.reset(), e.emitViewEvent(new Fze(null))), t.hasChanged(103) && (this._decorations.reset(), e.emitViewEvent(new Fze(null))), e.emitViewEvent(new vBc(t)), this.viewLayout.onConfigurationChanged(t), n.recoverViewportStart(this.coordinatesConverter, this.viewLayout), eze.shouldRecreate(t) && (this.cursorConfig = new eze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig));
    }
    _registerModelEvents() {
        this._register(this.model.onDidChangeContentOrInjectedText((e)=>{
            try {
                const n = this._eventDispatcher.beginEmitViewEvents();
                let i = !1, r = !1;
                const s = e instanceof bfn ? e.rawContentChangedEvent.changes : e.changes, o = e instanceof bfn ? e.rawContentChangedEvent.versionId : null, a = this._lines.createLineBreaksComputer();
                for (const u of s)switch(u.changeType){
                    case ZBe.LinesInserted:
                        {
                            for(let h = 0; h < u.detail.length; h++){
                                const p = u.detail[h];
                                let g = u.injectedTexts[h];
                                g && (g = g.filter((f)=>!f.ownerId || f.ownerId === this._editorId)), a.addRequest(p, g, null);
                            }
                            break;
                        }
                    case ZBe.LineChanged:
                        {
                            let h = null;
                            u.injectedText && (h = u.injectedText.filter((p)=>!p.ownerId || p.ownerId === this._editorId)), a.addRequest(u.detail, h, null);
                            break;
                        }
                }
                const c = a.finalize(), l = new hge(c);
                for (const u of s)switch(u.changeType){
                    case ZBe.Flush:
                        {
                            this._lines.onModelFlushed(), n.emitViewEvent(new Bfn), this._decorations.reset(), this.viewLayout.onFlushed(this.getLineCount()), i = !0;
                            break;
                        }
                    case ZBe.LinesDeleted:
                        {
                            const h = this._lines.onModelLinesDeleted(o, u.fromLineNumber, u.toLineNumber);
                            h !== null && (n.emitViewEvent(h), this.viewLayout.onLinesDeleted(h.fromLineNumber, h.toLineNumber)), i = !0;
                            break;
                        }
                    case ZBe.LinesInserted:
                        {
                            const h = l.takeCount(u.detail.length), p = this._lines.onModelLinesInserted(o, u.fromLineNumber, u.toLineNumber, h);
                            p !== null && (n.emitViewEvent(p), this.viewLayout.onLinesInserted(p.fromLineNumber, p.toLineNumber)), i = !0;
                            break;
                        }
                    case ZBe.LineChanged:
                        {
                            const h = l.dequeue(), [p, g, f, v] = this._lines.onModelLineChanged(o, u.lineNumber, h);
                            r = p, g && n.emitViewEvent(g), f && (n.emitViewEvent(f), this.viewLayout.onLinesInserted(f.fromLineNumber, f.toLineNumber)), v && (n.emitViewEvent(v), this.viewLayout.onLinesDeleted(v.fromLineNumber, v.toLineNumber));
                            break;
                        }
                    case ZBe.EOLChanged:
                        break;
                }
                o !== null && this._lines.acceptVersionId(o), this.viewLayout.onHeightMaybeChanged(), !i && r && (n.emitViewEvent(new Ufn), n.emitViewEvent(new Fze(null)), this._cursor.onLineMappingChanged(n), this._decorations.onLineMappingChanged());
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
            const t = this._viewportStart.isValid;
            if (this._viewportStart.invalidate(), this._configuration.setModelLineCount(this.model.getLineCount()), this._updateConfigurationViewLineCountNow(), !this._hasFocus && this.model.getAttachedEditorCount() >= 2 && t) {
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
                e instanceof bfn && n.emitOutgoingEvent(new FBc(e.contentChangedEvent)), this._cursor.onModelContentChanged(n, e);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
            this._handleVisibleLinesChanged();
        })), this._register(this.model.onDidChangeTokens((e)=>{
            const t = [];
            for(let n = 0, i = e.ranges.length; n < i; n++){
                const r = e.ranges[n], s = this.coordinatesConverter.convertModelPositionToViewPosition(new Yn(r.fromLineNumber, 1)).lineNumber, o = this.coordinatesConverter.convertModelPositionToViewPosition(new Yn(r.toLineNumber, this.model.getLineMaxColumn(r.toLineNumber))).lineNumber;
                t[n] = {
                    fromLineNumber: s,
                    toLineNumber: o
                };
            }
            this._eventDispatcher.emitSingleViewEvent(new wBc(t)), this._eventDispatcher.emitOutgoingEvent(new UBc(e));
        })), this._register(this.model.onDidChangeLanguageConfiguration((e)=>{
            this._eventDispatcher.emitSingleViewEvent(new yBc), this.cursorConfig = new eze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new OBc(e));
        })), this._register(this.model.onDidChangeLanguage((e)=>{
            this.cursorConfig = new eze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new NBc(e));
        })), this._register(this.model.onDidChangeOptions((e)=>{
            if (this._lines.setTabSize(this.model.getOptions().tabSize)) {
                try {
                    const t = this._eventDispatcher.beginEmitViewEvents();
                    t.emitViewEvent(new Bfn), t.emitViewEvent(new Ufn), t.emitViewEvent(new Fze(null)), this._cursor.onLineMappingChanged(t), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount());
                } finally{
                    this._eventDispatcher.endEmitViewEvents();
                }
                this._updateConfigurationViewLineCount.schedule();
            }
            this.cursorConfig = new eze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig), this._eventDispatcher.emitOutgoingEvent(new BBc(e));
        })), this._register(this.model.onDidChangeDecorations((e)=>{
            this._decorations.onModelDecorationsChanged(), this._eventDispatcher.emitSingleViewEvent(new Fze(e)), this._eventDispatcher.emitOutgoingEvent(new LBc(e));
        }));
    }
    setHiddenAreas(e, t, n) {
        this.hiddenAreasModel.setHiddenAreas(t, e);
        const i = this.hiddenAreasModel.getMergedRanges();
        if (i === this.previousHiddenAreas && !n) return;
        this.previousHiddenAreas = i;
        const r = this._captureStableViewport();
        let s = !1;
        try {
            const o = this._eventDispatcher.beginEmitViewEvents();
            s = this._lines.setHiddenAreas(i), s && (o.emitViewEvent(new Bfn), o.emitViewEvent(new Ufn), o.emitViewEvent(new Fze(null)), this._cursor.onLineMappingChanged(o), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this.viewLayout.onHeightMaybeChanged());
            const a = r.viewportStartModelPosition?.lineNumber;
            a && i.some((l)=>l.startLineNumber <= a && a <= l.endLineNumber) || r.recoverViewportStart(this.coordinatesConverter, this.viewLayout);
        } finally{
            this._eventDispatcher.endEmitViewEvents();
        }
        this._updateConfigurationViewLineCount.schedule(), s && this._eventDispatcher.emitOutgoingEvent(new DBc);
    }
    getVisibleRangesPlusViewportAboveBelow() {
        const e = this._configuration.options.get(151), t = this._configuration.options.get(68), n = Math.max(20, Math.round(e.height / t)), i = this.viewLayout.getLinesViewportData(), r = Math.max(1, i.completelyVisibleStartLineNumber - n), s = Math.min(this.getLineCount(), i.completelyVisibleEndLineNumber + n);
        return this._toModelVisibleRanges(new dt(r, this.getLineMinColumn(r), s, this.getLineMaxColumn(s)));
    }
    getVisibleRanges() {
        const e = this.getCompletelyVisibleViewRange();
        return this._toModelVisibleRanges(e);
    }
    getHiddenAreas() {
        return this._lines.getHiddenAreas();
    }
    _toModelVisibleRanges(e) {
        const t = this.coordinatesConverter.convertViewRangeToModelRange(e), n = this._lines.getHiddenAreas();
        if (n.length === 0) return [
            t
        ];
        const i = [];
        let r = 0, s = t.startLineNumber, o = t.startColumn;
        const a = t.endLineNumber, c = t.endColumn;
        for(let l = 0, u = n.length; l < u; l++){
            const h = n[l].startLineNumber, p = n[l].endLineNumber;
            p < s || h > a || (s < h && (i[r++] = new dt(s, o, h - 1, this.model.getLineMaxColumn(h - 1))), s = p + 1, o = 1);
        }
        return (s < a || s === a && o < c) && (i[r++] = new dt(s, o, a, c)), i;
    }
    getCompletelyVisibleViewRange() {
        const e = this.viewLayout.getLinesViewportData(), t = e.completelyVisibleStartLineNumber, n = e.completelyVisibleEndLineNumber;
        return new dt(t, this.getLineMinColumn(t), n, this.getLineMaxColumn(n));
    }
    getCompletelyVisibleViewRangeAtScrollTop(e) {
        const t = this.viewLayout.getLinesViewportDataAtScrollTop(e), n = t.completelyVisibleStartLineNumber, i = t.completelyVisibleEndLineNumber;
        return new dt(n, this.getLineMinColumn(n), i, this.getLineMaxColumn(i));
    }
    saveState() {
        const e = this.viewLayout.saveState(), t = e.scrollTop, n = this.viewLayout.getLineNumberAtVerticalOffset(t), i = this.coordinatesConverter.convertViewPositionToModelPosition(new Yn(n, this.getLineMinColumn(n))), r = this.viewLayout.getVerticalOffsetForLineNumber(n) - t;
        return {
            scrollLeft: e.scrollLeft,
            firstPosition: i,
            firstPositionDeltaTop: r
        };
    }
    reduceRestoreState(e) {
        if (typeof e.firstPosition > "u") return this._reduceRestoreStateCompatibility(e);
        const t = this.model.validatePosition(e.firstPosition), n = this.coordinatesConverter.convertModelPositionToViewPosition(t), i = this.viewLayout.getVerticalOffsetForLineNumber(n.lineNumber) - e.firstPositionDeltaTop;
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: i
        };
    }
    _reduceRestoreStateCompatibility(e) {
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTopWithoutViewZones
        };
    }
    getTabSize() {
        return this.model.getOptions().tabSize;
    }
    getLineCount() {
        return this._lines.getViewLineCount();
    }
    setViewport(e, t, n) {
        this._viewportStart.update(this, e);
    }
    getActiveIndentGuide(e, t, n) {
        return this._lines.getActiveIndentGuide(e, t, n);
    }
    getLinesIndentGuides(e, t) {
        return this._lines.getViewLinesIndentGuides(e, t);
    }
    getBracketGuidesInRangeByLine(e, t, n, i) {
        return this._lines.getViewLinesBracketGuides(e, t, n, i);
    }
    getLineContent(e) {
        return this._lines.getViewLineContent(e);
    }
    getLineLength(e) {
        return this._lines.getViewLineLength(e);
    }
    getLineMinColumn(e) {
        return this._lines.getViewLineMinColumn(e);
    }
    getLineMaxColumn(e) {
        return this._lines.getViewLineMaxColumn(e);
    }
    getLineFirstNonWhitespaceColumn(e) {
        const t = R7(this.getLineContent(e));
        return t === -1 ? 0 : t + 1;
    }
    getLineLastNonWhitespaceColumn(e) {
        const t = Jce(this.getLineContent(e));
        return t === -1 ? 0 : t + 2;
    }
    getMinimapDecorationsInRange(e) {
        return this._decorations.getMinimapDecorationsInRange(e);
    }
    getDecorationsInViewport(e) {
        return this._decorations.getDecorationsViewportData(e).decorations;
    }
    getInjectedTextAt(e) {
        return this._lines.getInjectedTextAt(e);
    }
    getViewportViewLineRenderingData(e, t) {
        const i = this._decorations.getDecorationsViewportData(e).inlineDecorations[t - e.startLineNumber];
        return this._getViewLineRenderingData(t, i);
    }
    getViewLineRenderingData(e) {
        const t = this._decorations.getInlineDecorationsOnLine(e);
        return this._getViewLineRenderingData(e, t);
    }
    _getViewLineRenderingData(e, t) {
        const n = this.model.mightContainRTL(), i = this.model.mightContainNonBasicASCII(), r = this.getTabSize(), s = this._lines.getViewLineData(e);
        return s.inlineDecorations && (t = [
            ...t,
            ...s.inlineDecorations.map((o)=>o.toInlineDecoration(e))
        ]), new BOt(s.minColumn, s.maxColumn, s.content, s.continuesWithWrappedLine, n, i, s.tokens, t, r, s.startVisibleColumn);
    }
    getViewLineData(e) {
        return this._lines.getViewLineData(e);
    }
    getMinimapLinesRenderingData(e, t, n) {
        const i = this._lines.getViewLinesData(e, t, n);
        return new zBc(this.getTabSize(), i);
    }
    getAllOverviewRulerDecorations(e) {
        const t = this.model.getOverviewRulerDecorations(this._editorId, hvi(this._configuration.options)), n = new m5c;
        for (const i of t){
            const r = i.options, s = r.overviewRuler;
            if (!s) continue;
            const o = s.position;
            if (o === 0) continue;
            const a = s.getColor(e.value), c = this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.startLineNumber, i.range.startColumn), l = this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.endLineNumber, i.range.endColumn);
            n.accept(a, r.zIndex, c, l, o);
        }
        return n.asArray;
    }
    _invalidateDecorationsColorCache() {
        const e = this.model.getOverviewRulerDecorations();
        for (const t of e)t.options.overviewRuler?.invalidateCachedColor(), t.options.minimap?.invalidateCachedColor();
    }
    getValueInRange(e, t) {
        const n = this.coordinatesConverter.convertViewRangeToModelRange(e);
        return this.model.getValueInRange(n, t);
    }
    getValueLengthInRange(e, t) {
        const n = this.coordinatesConverter.convertViewRangeToModelRange(e);
        return this.model.getValueLengthInRange(n, t);
    }
    modifyPosition(e, t) {
        const n = this.coordinatesConverter.convertViewPositionToModelPosition(e), i = this.model.modifyPosition(n, t);
        return this.coordinatesConverter.convertModelPositionToViewPosition(i);
    }
    deduceModelPositionRelativeToViewPosition(e, t, n) {
        const i = this.coordinatesConverter.convertViewPositionToModelPosition(e);
        this.model.getEOL().length === 2 && (t < 0 ? t -= n : t += n);
        const s = this.model.getOffsetAt(i) + t;
        return this.model.getPositionAt(s);
    }
    getPlainTextToCopy(e, t, n) {
        const i = n ? `\r
` : this.model.getEOL();
        e = e.slice(0), e.sort(dt.compareRangesUsingStarts);
        let r = !1, s = !1;
        for (const a of e)a.isEmpty() ? r = !0 : s = !0;
        if (!s) {
            if (!t) return "";
            const a = e.map((l)=>l.startLineNumber);
            let c = "";
            for(let l = 0; l < a.length; l++)l > 0 && a[l - 1] === a[l] || (c += this.model.getLineContent(a[l]) + i);
            return c;
        }
        if (r && t) {
            const a = [];
            let c = 0;
            for (const l of e){
                const u = l.startLineNumber;
                l.isEmpty() ? u !== c && a.push(this.model.getLineContent(u)) : a.push(this.model.getValueInRange(l, n ? 2 : 0)), c = u;
            }
            return a.length === 1 ? a[0] : a;
        }
        const o = [];
        for (const a of e)a.isEmpty() || o.push(this.model.getValueInRange(a, n ? 2 : 0));
        return o.length === 1 ? o[0] : o;
    }
    getRichTextToCopy(e, t) {
        const n = this.model.getLanguageId();
        if (n === Sy || e.length !== 1) return null;
        let i = e[0];
        if (i.isEmpty()) {
            if (!t) return null;
            const l = i.startLineNumber;
            i = new dt(l, this.model.getLineMinColumn(l), l, this.model.getLineMaxColumn(l));
        }
        const r = this._configuration.options.get(52), s = this._getColorMap(), a = /[:;\\\/<>]/.test(r.fontFamily) || r.fontFamily === dA.fontFamily;
        let c;
        return a ? c = dA.fontFamily : (c = r.fontFamily, c = c.replace(/"/g, "'"), /[,']/.test(c) || /[+ ]/.test(c) && (c = `'${c}'`), c = `${c}, ${dA.fontFamily}`), {
            mode: n,
            html: `<div style="color: ${s[1]};background-color: ${s[2]};font-family: ${c};font-weight: ${r.fontWeight};font-size: ${r.fontSize}px;line-height: ${r.lineHeight}px;white-space: pre;">` + this._getHTMLToCopy(i, s) + "</div>"
        };
    }
    _getHTMLToCopy(e, t) {
        const n = e.startLineNumber, i = e.startColumn, r = e.endLineNumber, s = e.endColumn, o = this.getTabSize();
        let a = "";
        for(let c = n; c <= r; c++){
            const l = this.model.tokenization.getLineTokens(c), u = l.getLineContent(), h = c === n ? i - 1 : 0, p = c === r ? s - 1 : u.length;
            u === "" ? a += "<br>" : a += GBc(u, l.inflate(), t, h, p, o, Oo);
        }
        return a;
    }
    _getColorMap() {
        const e = Ky.getColorMap(), t = [
            "#000000"
        ];
        if (e) for(let n = 1, i = e.length; n < i; n++)t[n] = Ci.Format.CSS.formatHex(e[n]);
        return t;
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
    setCursorStates(e, t, n) {
        return this._withViewEventsCollector((i)=>this._cursor.setStates(i, e, t, n));
    }
    getCursorColumnSelectData() {
        return this._cursor.getCursorColumnSelectData();
    }
    getCursorAutoClosedCharacters() {
        return this._cursor.getAutoClosedCharacters();
    }
    setCursorColumnSelectData(e) {
        this._cursor.setCursorColumnSelectData(e);
    }
    getPrevEditOperationType() {
        return this._cursor.getPrevEditOperationType();
    }
    setPrevEditOperationType(e) {
        this._cursor.setPrevEditOperationType(e);
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
    setSelections(e, t, n = 0) {
        this._withViewEventsCollector((i)=>this._cursor.setSelections(i, e, t, n));
    }
    saveCursorState() {
        return this._cursor.saveState();
    }
    restoreCursorState(e) {
        this._withViewEventsCollector((t)=>this._cursor.restoreState(t, e));
    }
    _executeCursorEdit(e) {
        if (this._cursor.context.cursorConfig.readOnly) {
            this._eventDispatcher.emitOutgoingEvent(new PBc);
            return;
        }
        this._withViewEventsCollector(e);
    }
    executeEdits(e, t, n) {
        this._executeCursorEdit((i)=>this._cursor.executeEdits(i, e, t, n));
    }
    startComposition() {
        this._executeCursorEdit((e)=>this._cursor.startComposition(e));
    }
    endComposition(e) {
        this._executeCursorEdit((t)=>this._cursor.endComposition(t, e));
    }
    type(e, t) {
        this._executeCursorEdit((n)=>this._cursor.type(n, e, t));
    }
    compositionType(e, t, n, i, r) {
        this._executeCursorEdit((s)=>this._cursor.compositionType(s, e, t, n, i, r));
    }
    paste(e, t, n, i) {
        this._executeCursorEdit((r)=>this._cursor.paste(r, e, t, n, i));
    }
    cut(e) {
        this._executeCursorEdit((t)=>this._cursor.cut(t, e));
    }
    executeCommand(e, t) {
        this._executeCursorEdit((n)=>this._cursor.executeCommand(n, e, t));
    }
    executeCommands(e, t) {
        this._executeCursorEdit((n)=>this._cursor.executeCommands(n, e, t));
    }
    revealAllCursors(e, t, n = !1) {
        this._withViewEventsCollector((i)=>this._cursor.revealAll(i, e, n, hW.Simple, t, 0));
    }
    revealPrimaryCursor(e, t, n = !1) {
        this._withViewEventsCollector((i)=>this._cursor.revealPrimary(i, e, n, hW.Simple, t, 0));
    }
    revealTopMostCursor(e) {
        const t = this._cursor.getTopMostViewPosition(), n = new dt(t.lineNumber, t.column, t.lineNumber, t.column);
        this._withViewEventsCollector((i)=>i.emitViewEvent(new FOt(e, !1, n, null, hW.Simple, !0, 0)));
    }
    revealBottomMostCursor(e) {
        const t = this._cursor.getBottomMostViewPosition(), n = new dt(t.lineNumber, t.column, t.lineNumber, t.column);
        this._withViewEventsCollector((i)=>i.emitViewEvent(new FOt(e, !1, n, null, hW.Simple, !0, 0)));
    }
    revealRange(e, t, n, i, r) {
        this._withViewEventsCollector((s)=>s.emitViewEvent(new FOt(e, !1, n, null, i, t, r)));
    }
    changeWhitespace(e) {
        this.viewLayout.changeWhitespace(e) && (this._eventDispatcher.emitSingleViewEvent(new TBc), this._eventDispatcher.emitOutgoingEvent(new RBc));
    }
    _withViewEventsCollector(e) {
        return this._transactionalTarget.batchChanges(()=>{
            try {
                const t = this._eventDispatcher.beginEmitViewEvents();
                return e(t);
            } finally{
                this._eventDispatcher.endEmitViewEvents();
            }
        });
    }
    batchEvents(e) {
        this._withViewEventsCollector(()=>{
            e();
        });
    }
    normalizePosition(e, t) {
        return this._lines.normalizePosition(e, t);
    }
    getLineIndentColumn(e) {
        return this._lines.getLineIndentColumn(e);
    }
}, p5c = class wkm {
    constructor(t, n, i, r, s){
        this._model = t, this._viewLineNumber = n, this._isValid = i, this._modelTrackedRange = r, this._startLineDelta = s;
    }
    static create(t) {
        const n = t._setTrackedRange(null, new dt(1, 1, 1, 1), 1);
        return new wkm(t, 1, !1, n, 0);
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
    update(t, n) {
        const i = t.coordinatesConverter.convertViewPositionToModelPosition(new Yn(n, t.getLineMinColumn(n))), r = t.model._setTrackedRange(this._modelTrackedRange, new dt(i.lineNumber, i.column, i.lineNumber, i.column), 1), s = t.viewLayout.getVerticalOffsetForLineNumber(n), o = t.viewLayout.getCurrentScrollTop();
        this._viewLineNumber = n, this._isValid = !0, this._modelTrackedRange = r, this._startLineDelta = o - s;
    }
    invalidate() {
        this._isValid = !1;
    }
}, m5c = class {
    constructor(){
        this._asMap = Object.create(null), this.asArray = [];
    }
    accept(e, t, n, i, r) {
        const s = this._asMap[e];
        if (s) {
            const o = s.data, a = o[o.length - 3], c = o[o.length - 1];
            if (a === r && c + 1 >= n) {
                i > c && (o[o.length - 1] = i);
                return;
            }
            o.push(r, n, i);
        } else {
            const o = new __i(e, t, [
                r,
                n,
                i
            ]);
            this._asMap[e] = o, this.asArray.push(o);
        }
    }
}, g5c = class {
    constructor(){
        this.hiddenAreas = new Map, this.shouldRecompute = !1, this.ranges = [];
    }
    setHiddenAreas(e, t) {
        const n = this.hiddenAreas.get(e);
        n && u5c(n, t) || (this.hiddenAreas.set(e, t), this.shouldRecompute = !0);
    }
    getMergedRanges() {
        if (!this.shouldRecompute) return this.ranges;
        this.shouldRecompute = !1;
        const e = Array.from(this.hiddenAreas.values()).reduce((t, n)=>svg(t, n), []);
        return u5c(this.ranges, e) ? this.ranges : (this.ranges = e, this.ranges);
    }
}, nes = class {
    constructor(e, t){
        this.viewportStartModelPosition = e, this.startLineDelta = t;
    }
    recoverViewportStart(e, t) {
        if (!this.viewportStartModelPosition) return;
        const n = e.convertModelPositionToViewPosition(this.viewportStartModelPosition), i = t.getVerticalOffsetForLineNumber(n.lineNumber);
        t.setScrollPosition({
            scrollTop: i + this.startLineDelta
        }, 1);
    }
};

}
