import { VMc, dfi } from "./cursorAtomicMoveOperations.js";
import { _D, nre } from "./cursorColumns.js";
import { en, xi } from "./dom_2.js";
import { jOt, jfn } from "./editorDom.js";
import { Yf, qC } from "./lazy.js";
import { Yn, ya } from "./position.js";
import { Ivg, Kfn, Xqe } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { Vze, kes } from "./viewLine.js";
import { aU, jge } from "./viewPart.js";
var t5e, wes, Vpt, q5c, F7, fW, A_i, z5c, K5c, Ces, R_i, Tes, Y5c;
export { A_i, Ces, F7, K5c, R_i, Tes, Vpt, Y5c, fW, q5c, t5e, wes, z5c };
var __wakaru_X5c_initialized = false;
export function X5c() {
if (__wakaru_X5c_initialized) return;
__wakaru_X5c_initialized = true;
"use strict";
x(), jOt(), aU(), kes(), ya(), qi(), nre(), en(), VMc(), qC(), t5e = class {
    constructor(e = null){
        this.hitTarget = e, this.type = 0;
    }
}, wes = class {
    constructor(e, t, n){
        this.position = e, this.spanNode = t, this.injectedText = n, this.type = 1;
    }
    get hitTarget() {
        return this.spanNode;
    }
}, ((e)=>{
    function t(n, i, r) {
        const s = n.getPositionFromDOMInfo(i, r);
        return s ? new wes(s, i, null) : new t5e(i);
    }
    e.createFromDOMInfo = t;
})(Vpt || (Vpt = {})), q5c = class {
    constructor(e, t){
        this.lastViewCursorsRenderData = e, this.lastTextareaPosition = t;
    }
}, F7 = class {
    static _deduceRage(e, t = null) {
        return !t && e ? new dt(e.lineNumber, e.column, e.lineNumber, e.column) : t ?? null;
    }
    static createUnknown(e, t, n) {
        return {
            type: 0,
            element: e,
            mouseColumn: t,
            position: n,
            range: this._deduceRage(n)
        };
    }
    static createTextarea(e, t) {
        return {
            type: 1,
            element: e,
            mouseColumn: t,
            position: null,
            range: null
        };
    }
    static createMargin(e, t, n, i, r, s) {
        return {
            type: e,
            element: t,
            mouseColumn: n,
            position: i,
            range: r,
            detail: s
        };
    }
    static createViewZone(e, t, n, i, r) {
        return {
            type: e,
            element: t,
            mouseColumn: n,
            position: i,
            range: this._deduceRage(i),
            detail: r
        };
    }
    static createContentText(e, t, n, i, r) {
        return {
            type: 6,
            element: e,
            mouseColumn: t,
            position: n,
            range: this._deduceRage(n, i),
            detail: r
        };
    }
    static createContentEmpty(e, t, n, i) {
        return {
            type: 7,
            element: e,
            mouseColumn: t,
            position: n,
            range: this._deduceRage(n),
            detail: i
        };
    }
    static createContentWidget(e, t, n) {
        return {
            type: 9,
            element: e,
            mouseColumn: t,
            position: null,
            range: null,
            detail: n
        };
    }
    static createScrollbar(e, t, n) {
        return {
            type: 11,
            element: e,
            mouseColumn: t,
            position: n,
            range: this._deduceRage(n)
        };
    }
    static createOverlayWidget(e, t, n) {
        return {
            type: 12,
            element: e,
            mouseColumn: t,
            position: null,
            range: null,
            detail: n
        };
    }
    static createOutsideEditor(e, t, n, i) {
        return {
            type: 13,
            element: null,
            mouseColumn: e,
            position: t,
            range: this._deduceRage(t),
            outsidePosition: n,
            outsideDistance: i
        };
    }
    static _typeToString(e) {
        return e === 1 ? "TEXTAREA" : e === 2 ? "GUTTER_GLYPH_MARGIN" : e === 3 ? "GUTTER_LINE_NUMBERS" : e === 4 ? "GUTTER_LINE_DECORATIONS" : e === 5 ? "GUTTER_VIEW_ZONE" : e === 6 ? "CONTENT_TEXT" : e === 7 ? "CONTENT_EMPTY" : e === 8 ? "CONTENT_VIEW_ZONE" : e === 9 ? "CONTENT_WIDGET" : e === 10 ? "OVERVIEW_RULER" : e === 11 ? "SCROLLBAR" : e === 12 ? "OVERLAY_WIDGET" : "UNKNOWN";
    }
    static toString(e) {
        return this._typeToString(e.type) + ": " + e.position + " - " + e.range + " - " + JSON.stringify(e.detail);
    }
}, fW = class {
    static isTextArea(e) {
        return e.length === 2 && e[0] === 3 && e[1] === 7;
    }
    static isChildOfViewLines(e) {
        return e.length >= 4 && e[0] === 3 && e[3] === 8;
    }
    static isStrictChildOfViewLines(e) {
        return e.length > 4 && e[0] === 3 && e[3] === 8;
    }
    static isChildOfScrollableElement(e) {
        return e.length >= 2 && e[0] === 3 && e[1] === 6;
    }
    static isChildOfMinimap(e) {
        return e.length >= 2 && e[0] === 3 && e[1] === 9;
    }
    static isChildOfContentWidgets(e) {
        return e.length >= 4 && e[0] === 3 && e[3] === 1;
    }
    static isChildOfOverflowGuard(e) {
        return e.length >= 1 && e[0] === 3;
    }
    static isChildOfOverflowingContentWidgets(e) {
        return e.length >= 1 && e[0] === 2;
    }
    static isChildOfOverlayWidgets(e) {
        return e.length >= 2 && e[0] === 3 && e[1] === 4;
    }
    static isChildOfOverflowingOverlayWidgets(e) {
        return e.length >= 1 && e[0] === 5;
    }
}, A_i = class MIa {
    constructor(t, n, i){
        this.viewModel = t.viewModel;
        const r = t.configuration.options;
        this.layoutInfo = r.get(151), this.viewDomNode = n.viewDomNode, this.viewLinesGpu = n.viewLinesGpu, this.lineHeight = r.get(68), this.stickyTabStops = r.get(121), this.typicalHalfwidthCharacterWidth = r.get(52).typicalHalfwidthCharacterWidth, this.lastRenderData = i, this._context = t, this._viewHelper = n;
    }
    getZoneAtCoord(t) {
        return MIa.getZoneAtCoord(this._context, t);
    }
    static getZoneAtCoord(t, n) {
        const i = t.viewLayout.getWhitespaceAtVerticalOffset(n);
        if (i) {
            const r = i.verticalOffset + i.height / 2, s = t.viewModel.getLineCount();
            let o = null, a, c = null;
            return i.afterLineNumber !== s && (c = new Yn(i.afterLineNumber + 1, 1)), i.afterLineNumber > 0 && (o = new Yn(i.afterLineNumber, t.viewModel.getLineMaxColumn(i.afterLineNumber))), c === null ? a = o : o === null ? a = c : n < r ? a = o : a = c, {
                viewZoneId: i.id,
                afterLineNumber: i.afterLineNumber,
                positionBefore: o,
                positionAfter: c,
                position: a
            };
        }
        return null;
    }
    getFullLineRangeAtCoord(t) {
        if (this._context.viewLayout.isAfterLines(t)) {
            const r = this._context.viewModel.getLineCount(), s = this._context.viewModel.getLineMaxColumn(r);
            return {
                range: new dt(r, s, r, s),
                isAfterLines: !0
            };
        }
        const n = this._context.viewLayout.getLineNumberAtVerticalOffset(t), i = this._context.viewModel.getLineMaxColumn(n);
        return {
            range: new dt(n, 1, n, i),
            isAfterLines: !1
        };
    }
    getLineNumberAtVerticalOffset(t) {
        return this._context.viewLayout.getLineNumberAtVerticalOffset(t);
    }
    isAfterLines(t) {
        return this._context.viewLayout.isAfterLines(t);
    }
    isInTopPadding(t) {
        return this._context.viewLayout.isInTopPadding(t);
    }
    isInBottomPadding(t) {
        return this._context.viewLayout.isInBottomPadding(t);
    }
    getVerticalOffsetForLineNumber(t) {
        return this._context.viewLayout.getVerticalOffsetForLineNumber(t);
    }
    findAttribute(t, n) {
        return MIa._findAttribute(t, n, this._viewHelper.viewDomNode);
    }
    static _findAttribute(t, n, i) {
        for(; t && t !== t.ownerDocument.body;){
            if (t.hasAttribute && t.hasAttribute(n)) return t.getAttribute(n);
            if (t === i) return null;
            t = t.parentNode;
        }
        return null;
    }
    getLineWidth(t) {
        return this._viewHelper.getLineWidth(t);
    }
    visibleRangeForPosition(t, n) {
        return this._viewHelper.visibleRangeForPosition(t, n);
    }
    getPositionFromDOMInfo(t, n) {
        return this._viewHelper.getPositionFromDOMInfo(t, n);
    }
    getCurrentScrollTop() {
        return this._context.viewLayout.getCurrentScrollTop();
    }
    getCurrentScrollLeft() {
        return this._context.viewLayout.getCurrentScrollLeft();
    }
}, z5c = class {
    constructor(e, t, n, i){
        this.editorPos = t, this.pos = n, this.relativePos = i, this.mouseVerticalOffset = Math.max(0, e.getCurrentScrollTop() + this.relativePos.y), this.mouseContentHorizontalOffset = e.getCurrentScrollLeft() + this.relativePos.x - e.layoutInfo.contentLeft, this.isInMarginArea = this.relativePos.x < e.layoutInfo.contentLeft && this.relativePos.x >= e.layoutInfo.glyphMarginLeft, this.isInContentArea = !this.isInMarginArea, this.mouseColumn = Math.max(0, R_i._getMouseColumn(this.mouseContentHorizontalOffset, e.typicalHalfwidthCharacterWidth));
    }
}, K5c = class extends z5c {
    constructor(e, t, n, i, r){
        super(e, t, n, i), this.hitTestResult = new Yf(()=>R_i.doHitTest(this._ctx, this)), this._targetPathCacheElement = null, this._targetPathCacheValue = new Uint8Array(0), this._ctx = e, this._eventTarget = r;
        const s = !!this._eventTarget;
        this._useHitTestTarget = !s;
    }
    get target() {
        return this._useHitTestTarget ? this.hitTestResult.value.hitTarget : this._eventTarget;
    }
    get targetPath() {
        return this._targetPathCacheElement !== this.target && (this._targetPathCacheElement = this.target, this._targetPathCacheValue = jge.collect(this.target, this._ctx.viewDomNode)), this._targetPathCacheValue;
    }
    toString() {
        return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
    }
    get wouldBenefitFromHitTestTargetSwitch() {
        return !this._useHitTestTarget && this.hitTestResult.value.hitTarget !== null && this.target !== this.hitTestResult.value.hitTarget;
    }
    switchToHitTestTarget() {
        this._useHitTestTarget = !0;
    }
    _getMouseColumn(e = null) {
        return e && e.column < this._ctx.viewModel.getLineMaxColumn(e.lineNumber) ? _D.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(e.lineNumber), e.column, this._ctx.viewModel.model.getOptions().tabSize) + 1 : this.mouseColumn;
    }
    fulfillUnknown(e = null) {
        return F7.createUnknown(this.target, this._getMouseColumn(e), e);
    }
    fulfillTextarea() {
        return F7.createTextarea(this.target, this._getMouseColumn());
    }
    fulfillMargin(e, t, n, i) {
        return F7.createMargin(e, this.target, this._getMouseColumn(t), t, n, i);
    }
    fulfillViewZone(e, t, n) {
        return F7.createViewZone(e, this.target, this._getMouseColumn(t), t, n);
    }
    fulfillContentText(e, t, n) {
        return F7.createContentText(this.target, this._getMouseColumn(e), e, t, n);
    }
    fulfillContentEmpty(e, t) {
        return F7.createContentEmpty(this.target, this._getMouseColumn(e), e, t);
    }
    fulfillContentWidget(e) {
        return F7.createContentWidget(this.target, this._getMouseColumn(), e);
    }
    fulfillScrollbar(e) {
        return F7.createScrollbar(this.target, this._getMouseColumn(e), e);
    }
    fulfillOverlayWidget(e) {
        return F7.createOverlayWidget(this.target, this._getMouseColumn(), e);
    }
}, Ces = {
    isAfterLines: !0
}, R_i = class bne {
    constructor(t, n){
        this._context = t, this._viewHelper = n;
    }
    mouseTargetIsWidget(t) {
        const n = t.target, i = jge.collect(n, this._viewHelper.viewDomNode), r = n.parentElement;
        if (r && r.getAttribute("data-lexical-editor") === "true") return !0;
        const s = r?.parentElement;
        return !!(s && s.getAttribute("data-lexical-editor") === "true" || fW.isChildOfContentWidgets(i) || fW.isChildOfOverflowingContentWidgets(i) || fW.isChildOfOverlayWidgets(i) || fW.isChildOfOverflowingOverlayWidgets(i));
    }
    createMouseTarget(t, n, i, r, s) {
        const o = new A_i(this._context, this._viewHelper, t), a = new K5c(o, n, i, r, s);
        try {
            const c = bne._createMouseTarget(o, a);
            if (c.type === 6 && o.stickyTabStops && c.position !== null) {
                const l = bne._snapToSoftTabBoundary(c.position, o.viewModel), u = dt.fromPositions(l, l).plusRange(c.range);
                return a.fulfillContentText(l, u, c.detail);
            }
            return c;
        } catch  {
            return a.fulfillUnknown();
        }
    }
    static _createMouseTarget(t, n) {
        if (n.target === null) return n.fulfillUnknown();
        const i = n;
        let r = null;
        return !fW.isChildOfOverflowGuard(n.targetPath) && !fW.isChildOfOverflowingContentWidgets(n.targetPath) && !fW.isChildOfOverflowingOverlayWidgets(n.targetPath) && (r = r || n.fulfillUnknown()), r = r || bne._hitTestContentWidget(t, i), r = r || bne._hitTestOverlayWidget(t, i), r = r || bne._hitTestMinimap(t, i), r = r || bne._hitTestScrollbarSlider(t, i), r = r || bne._hitTestViewZone(t, i), r = r || bne._hitTestMargin(t, i), r = r || bne._hitTestViewCursor(t, i), r = r || bne._hitTestTextArea(t, i), r = r || bne._hitTestViewLines(t, i), r = r || bne._hitTestScrollbar(t, i), r || n.fulfillUnknown();
    }
    static _hitTestContentWidget(t, n) {
        if (fW.isChildOfContentWidgets(n.targetPath) || fW.isChildOfOverflowingContentWidgets(n.targetPath)) {
            const i = t.findAttribute(n.target, "widgetId");
            return i ? n.fulfillContentWidget(i) : n.fulfillUnknown();
        }
        return null;
    }
    static _hitTestOverlayWidget(t, n) {
        if (fW.isChildOfOverlayWidgets(n.targetPath) || fW.isChildOfOverflowingOverlayWidgets(n.targetPath)) {
            const i = t.findAttribute(n.target, "widgetId");
            return i ? n.fulfillOverlayWidget(i) : n.fulfillUnknown();
        }
        return null;
    }
    static _hitTestViewCursor(t, n) {
        if (n.target) {
            const i = t.lastRenderData.lastViewCursorsRenderData;
            for (const r of i)if (n.target === r.domNode) return n.fulfillContentText(r.position, null, {
                mightBeForeignElement: !1,
                injectedText: null
            });
        }
        if (n.isInContentArea) {
            const i = t.lastRenderData.lastViewCursorsRenderData, r = n.mouseContentHorizontalOffset, s = n.mouseVerticalOffset;
            for (const o of i){
                if (r < o.contentLeft || r > o.contentLeft + o.width) continue;
                const a = t.getVerticalOffsetForLineNumber(o.position.lineNumber);
                if (a <= s && s <= a + o.height) return n.fulfillContentText(o.position, null, {
                    mightBeForeignElement: !1,
                    injectedText: null
                });
            }
        }
        return null;
    }
    static _hitTestViewZone(t, n) {
        const i = t.getZoneAtCoord(n.mouseVerticalOffset);
        if (i) {
            const r = n.isInContentArea ? 8 : 5;
            return n.fulfillViewZone(r, i.position, i);
        }
        return null;
    }
    static _hitTestTextArea(t, n) {
        return fW.isTextArea(n.targetPath) ? t.lastRenderData.lastTextareaPosition ? n.fulfillContentText(t.lastRenderData.lastTextareaPosition, null, {
            mightBeForeignElement: !1,
            injectedText: null
        }) : n.fulfillTextarea() : null;
    }
    static _hitTestMargin(t, n) {
        if (n.isInMarginArea) {
            const i = t.getFullLineRangeAtCoord(n.mouseVerticalOffset), r = i.range.getStartPosition();
            let s = Math.abs(n.relativePos.x);
            const o = {
                isAfterLines: i.isAfterLines,
                glyphMarginLeft: t.layoutInfo.glyphMarginLeft,
                glyphMarginWidth: t.layoutInfo.glyphMarginWidth,
                lineNumbersWidth: t.layoutInfo.lineNumbersWidth,
                offsetX: s
            };
            if (s -= t.layoutInfo.glyphMarginLeft, s <= t.layoutInfo.glyphMarginWidth) {
                const a = t.viewModel.coordinatesConverter.convertViewPositionToModelPosition(i.range.getStartPosition()), c = t.viewModel.glyphLanes.getLanesAtLine(a.lineNumber);
                return o.glyphMarginLane = c[Math.floor(s / t.lineHeight)], n.fulfillMargin(2, r, i.range, o);
            }
            return s -= t.layoutInfo.glyphMarginWidth, s <= t.layoutInfo.lineNumbersWidth ? n.fulfillMargin(3, r, i.range, o) : (s -= t.layoutInfo.lineNumbersWidth, n.fulfillMargin(4, r, i.range, o));
        }
        return null;
    }
    static _hitTestViewLines(t, n) {
        if (!fW.isChildOfViewLines(n.targetPath)) return null;
        if (t.isInTopPadding(n.mouseVerticalOffset)) return n.fulfillContentEmpty(new Yn(1, 1), Ces);
        if (t.isAfterLines(n.mouseVerticalOffset) || t.isInBottomPadding(n.mouseVerticalOffset)) {
            const r = t.viewModel.getLineCount(), s = t.viewModel.getLineMaxColumn(r);
            return n.fulfillContentEmpty(new Yn(r, s), Ces);
        }
        if (fW.isStrictChildOfViewLines(n.targetPath)) {
            const r = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset);
            if (t.viewModel.getLineLength(r) === 0) {
                const o = t.getLineWidth(r), a = Kfn(n.mouseContentHorizontalOffset - o);
                return n.fulfillContentEmpty(new Yn(r, 1), a);
            }
            const s = t.getLineWidth(r);
            if (n.mouseContentHorizontalOffset >= s) {
                const o = Kfn(n.mouseContentHorizontalOffset - s), a = new Yn(r, t.viewModel.getLineMaxColumn(r));
                return n.fulfillContentEmpty(a, o);
            }
        } else if (t.viewLinesGpu) {
            const r = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset);
            if (t.viewModel.getLineLength(r) === 0) {
                const a = t.getLineWidth(r), c = Kfn(n.mouseContentHorizontalOffset - a);
                return n.fulfillContentEmpty(new Yn(r, 1), c);
            }
            const s = t.getLineWidth(r);
            if (n.mouseContentHorizontalOffset >= s) {
                const a = Kfn(n.mouseContentHorizontalOffset - s), c = new Yn(r, t.viewModel.getLineMaxColumn(r));
                return n.fulfillContentEmpty(c, a);
            }
            const o = t.viewLinesGpu.getPositionAtCoordinate(r, n.mouseContentHorizontalOffset);
            if (o) {
                const a = {
                    injectedText: null,
                    mightBeForeignElement: !1
                };
                return n.fulfillContentText(o, dt.fromPositions(o, o), a);
            }
        }
        const i = n.hitTestResult.value;
        return i.type === 1 ? bne.createMouseTargetFromHitTestPosition(t, n, i.spanNode, i.position, i.injectedText) : n.wouldBenefitFromHitTestTargetSwitch ? (n.switchToHitTestTarget(), this._createMouseTarget(t, n)) : n.fulfillUnknown();
    }
    static _hitTestMinimap(t, n) {
        if (fW.isChildOfMinimap(n.targetPath)) {
            const i = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = t.viewModel.getLineMaxColumn(i);
            return n.fulfillScrollbar(new Yn(i, r));
        }
        return null;
    }
    static _hitTestScrollbarSlider(t, n) {
        if (fW.isChildOfScrollableElement(n.targetPath) && n.target && n.target.nodeType === 1) {
            const i = n.target.className;
            if (i && /\b(slider|scrollbar)\b/.test(i)) {
                const r = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), s = t.viewModel.getLineMaxColumn(r);
                return n.fulfillScrollbar(new Yn(r, s));
            }
        }
        return null;
    }
    static _hitTestScrollbar(t, n) {
        if (fW.isChildOfScrollableElement(n.targetPath)) {
            const i = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = t.viewModel.getLineMaxColumn(i);
            return n.fulfillScrollbar(new Yn(i, r));
        }
        return null;
    }
    getMouseColumn(t) {
        const n = this._context.configuration.options, i = n.get(151), r = this._context.viewLayout.getCurrentScrollLeft() + t.x - i.contentLeft;
        return bne._getMouseColumn(r, n.get(52).typicalHalfwidthCharacterWidth);
    }
    static _getMouseColumn(t, n) {
        return t < 0 ? 1 : Math.round(t / n) + 1;
    }
    static createMouseTargetFromHitTestPosition(t, n, i, r, s) {
        const o = r.lineNumber, a = r.column, c = t.getLineWidth(o);
        if (n.mouseContentHorizontalOffset > c) {
            const y = Kfn(n.mouseContentHorizontalOffset - c);
            return n.fulfillContentEmpty(r, y);
        }
        const l = t.visibleRangeForPosition(o, a);
        if (!l) return n.fulfillUnknown(r);
        const u = l.left;
        if (Math.abs(n.mouseContentHorizontalOffset - u) < 1) return n.fulfillContentText(r, null, {
            mightBeForeignElement: !!s,
            injectedText: s
        });
        const h = [];
        if (h.push({
            offset: l.left,
            column: a
        }), a > 1) {
            const y = t.visibleRangeForPosition(o, a - 1);
            y && h.push({
                offset: y.left,
                column: a - 1
            });
        }
        const p = t.viewModel.getLineMaxColumn(o);
        if (a < p) {
            const y = t.visibleRangeForPosition(o, a + 1);
            y && h.push({
                offset: y.left,
                column: a + 1
            });
        }
        h.sort((y, T)=>y.offset - T.offset);
        const g = n.pos.toClientCoordinates(xi(t.viewDomNode)), f = i.getBoundingClientRect(), v = f.left <= g.clientX && g.clientX <= f.right;
        let b = null;
        for(let y = 1; y < h.length; y++){
            const T = h[y - 1], E = h[y];
            if (T.offset <= n.mouseContentHorizontalOffset && n.mouseContentHorizontalOffset <= E.offset) {
                b = new dt(o, T.column, o, E.column);
                const A = Math.abs(T.offset - n.mouseContentHorizontalOffset), R = Math.abs(E.offset - n.mouseContentHorizontalOffset);
                r = A < R ? new Yn(o, T.column) : new Yn(o, E.column);
                break;
            }
        }
        return n.fulfillContentText(r, b, {
            mightBeForeignElement: !v || !!s,
            injectedText: s
        });
    }
    static _doHitTestWithCaretRangeFromPoint(t, n) {
        const i = t.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = t.getVerticalOffsetForLineNumber(i), s = r + t.lineHeight;
        if (!(i === t.viewModel.getLineCount() && n.mouseVerticalOffset > s)) {
            const a = Math.floor((r + s) / 2);
            let c = n.pos.y + (a - n.mouseVerticalOffset);
            c <= n.editorPos.y && (c = n.editorPos.y + 1), c >= n.editorPos.y + n.editorPos.height && (c = n.editorPos.y + n.editorPos.height - 1);
            const l = new jfn(n.pos.x, c), u = this._actualDoHitTestWithCaretRangeFromPoint(t, l.toClientCoordinates(xi(t.viewDomNode)));
            if (u.type === 1) return u;
        }
        return this._actualDoHitTestWithCaretRangeFromPoint(t, n.pos.toClientCoordinates(xi(t.viewDomNode)));
    }
    static _actualDoHitTestWithCaretRangeFromPoint(t, n) {
        const i = Xqe(t.viewDomNode);
        let r;
        if (i ? typeof i.caretRangeFromPoint > "u" ? r = Ivg(i, n.clientX, n.clientY) : r = i.caretRangeFromPoint(n.clientX, n.clientY) : r = t.viewDomNode.ownerDocument.caretRangeFromPoint(n.clientX, n.clientY), !r || !r.startContainer) return new t5e;
        const s = r.startContainer;
        if (s.nodeType === s.TEXT_NODE) {
            const o = s.parentNode, a = o ? o.parentNode : null, c = a ? a.parentNode : null;
            return (c && c.nodeType === c.ELEMENT_NODE ? c.className : null) === Vze.CLASS_NAME ? Vpt.createFromDOMInfo(t, o, r.startOffset) : new t5e(s.parentNode);
        } else if (s.nodeType === s.ELEMENT_NODE) {
            const o = s.parentNode, a = o ? o.parentNode : null;
            return (a && a.nodeType === a.ELEMENT_NODE ? a.className : null) === Vze.CLASS_NAME ? Vpt.createFromDOMInfo(t, s, s.textContent.length) : new t5e(s);
        }
        return new t5e;
    }
    static _doHitTestWithCaretPositionFromPoint(t, n) {
        const i = t.viewDomNode.ownerDocument.caretPositionFromPoint(n.clientX, n.clientY);
        if (i.offsetNode.nodeType === i.offsetNode.TEXT_NODE) {
            const r = i.offsetNode.parentNode, s = r ? r.parentNode : null, o = s ? s.parentNode : null;
            return (o && o.nodeType === o.ELEMENT_NODE ? o.className : null) === Vze.CLASS_NAME ? Vpt.createFromDOMInfo(t, i.offsetNode.parentNode, i.offset) : new t5e(i.offsetNode.parentNode);
        }
        if (i.offsetNode.nodeType === i.offsetNode.ELEMENT_NODE) {
            const r = i.offsetNode.parentNode, s = r && r.nodeType === r.ELEMENT_NODE ? r.className : null, o = r ? r.parentNode : null, a = o && o.nodeType === o.ELEMENT_NODE ? o.className : null;
            if (s === Vze.CLASS_NAME) {
                const c = i.offsetNode.childNodes[Math.min(i.offset, i.offsetNode.childNodes.length - 1)];
                if (c) return Vpt.createFromDOMInfo(t, c, 0);
            } else if (a === Vze.CLASS_NAME) return Vpt.createFromDOMInfo(t, i.offsetNode, 0);
        }
        return new t5e(i.offsetNode);
    }
    static _snapToSoftTabBoundary(t, n) {
        const i = n.getLineContent(t.lineNumber), { tabSize: r } = n.model.getOptions(), s = dfi.atomicPosition(i, t.column - 1, r, 2);
        return s !== -1 ? new Yn(t.lineNumber, s + 1) : t;
    }
    static doHitTest(t, n) {
        let i = new t5e;
        if (typeof t.viewDomNode.ownerDocument.caretRangeFromPoint == "function" ? i = this._doHitTestWithCaretRangeFromPoint(t, n) : t.viewDomNode.ownerDocument.caretPositionFromPoint && (i = this._doHitTestWithCaretPositionFromPoint(t, n.pos.toClientCoordinates(xi(t.viewDomNode)))), i.type === 1) {
            const r = t.viewModel.getInjectedTextAt(i.position), s = t.viewModel.normalizePosition(i.position, 2);
            (r || !s.equals(i.position)) && (i = new wes(s, i.spanNode, r));
        }
        return i;
    }
}, Tes = class jXn {
    static getInstance() {
        return jXn._INSTANCE || (jXn._INSTANCE = new jXn), jXn._INSTANCE;
    }
    constructor(){
        this._cache = {}, this._canvas = document.createElement("canvas");
    }
    getCharWidth(t, n) {
        const i = t + n;
        if (this._cache[i]) return this._cache[i];
        const r = this._canvas.getContext("2d");
        r.font = n;
        const o = r.measureText(t).width;
        return this._cache[i] = o, o;
    }
}, Tes._INSTANCE = null, Y5c = Tes;

}
