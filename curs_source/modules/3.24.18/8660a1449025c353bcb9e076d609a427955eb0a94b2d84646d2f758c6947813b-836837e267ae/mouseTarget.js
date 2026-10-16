import { Jkr, dFd } from "./cursorAtomicMoveOperations.js";
import { sL, zve } from "./cursorColumns.js";
import { Hn, ws } from "./dom_2.js";
import { Cfn, bsi } from "./editorDom.js";
import { ES, hP } from "./lazy.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { Syt, THo } from "./viewLine.js";
import { YAe, pz } from "./viewPart.js";
import { SMy, ksi, xbt } from "./ze.js";
var Ytt, EHo, pBt, ojd, wY, PQ, nCr, ajd, ljd, IHo, iCr, xHo, cjd;
export { EHo, IHo, PQ, Ytt, ajd, cjd, iCr, ljd, nCr, ojd, pBt, wY, xHo };
var __wakaru_ujd_initialized = false;
export function ujd() {
if (__wakaru_ujd_initialized) return;
__wakaru_ujd_initialized = true;
"use strict";
E(), Cfn(), pz(), THo(), jc(), Qs(), zve(), Hn(), dFd(), hP(), Ytt = class {
    constructor(t = null){
        this.hitTarget = t, this.type = 0;
    }
}, EHo = class {
    constructor(t, e, n){
        this.position = t, this.spanNode = e, this.injectedText = n, this.type = 1;
    }
    get hitTarget() {
        return this.spanNode;
    }
}, ((t)=>{
    function e(n, i, r) {
        const s = n.getPositionFromDOMInfo(i, r);
        return s ? new EHo(s, i, null) : new Ytt(i);
    }
    t.createFromDOMInfo = e;
})(pBt || (pBt = {})), ojd = class {
    constructor(t, e){
        this.lastViewCursorsRenderData = t, this.lastTextareaPosition = e;
    }
}, wY = class {
    static _deduceRage(t, e = null) {
        return !e && t ? new qt(t.lineNumber, t.column, t.lineNumber, t.column) : e ?? null;
    }
    static createUnknown(t, e, n) {
        return {
            type: 0,
            element: t,
            mouseColumn: e,
            position: n,
            range: this._deduceRage(n)
        };
    }
    static createTextarea(t, e) {
        return {
            type: 1,
            element: t,
            mouseColumn: e,
            position: null,
            range: null
        };
    }
    static createMargin(t, e, n, i, r, s) {
        return {
            type: t,
            element: e,
            mouseColumn: n,
            position: i,
            range: r,
            detail: s
        };
    }
    static createViewZone(t, e, n, i, r) {
        return {
            type: t,
            element: e,
            mouseColumn: n,
            position: i,
            range: this._deduceRage(i),
            detail: r
        };
    }
    static createContentText(t, e, n, i, r) {
        return {
            type: 6,
            element: t,
            mouseColumn: e,
            position: n,
            range: this._deduceRage(n, i),
            detail: r
        };
    }
    static createContentEmpty(t, e, n, i) {
        return {
            type: 7,
            element: t,
            mouseColumn: e,
            position: n,
            range: this._deduceRage(n),
            detail: i
        };
    }
    static createContentWidget(t, e, n) {
        return {
            type: 9,
            element: t,
            mouseColumn: e,
            position: null,
            range: null,
            detail: n
        };
    }
    static createScrollbar(t, e, n) {
        return {
            type: 11,
            element: t,
            mouseColumn: e,
            position: n,
            range: this._deduceRage(n)
        };
    }
    static createOverlayWidget(t, e, n) {
        return {
            type: 12,
            element: t,
            mouseColumn: e,
            position: null,
            range: null,
            detail: n
        };
    }
    static createOutsideEditor(t, e, n, i) {
        return {
            type: 13,
            element: null,
            mouseColumn: t,
            position: e,
            range: this._deduceRage(e),
            outsidePosition: n,
            outsideDistance: i
        };
    }
    static _typeToString(t) {
        return t === 1 ? "TEXTAREA" : t === 2 ? "GUTTER_GLYPH_MARGIN" : t === 3 ? "GUTTER_LINE_NUMBERS" : t === 4 ? "GUTTER_LINE_DECORATIONS" : t === 5 ? "GUTTER_VIEW_ZONE" : t === 6 ? "CONTENT_TEXT" : t === 7 ? "CONTENT_EMPTY" : t === 8 ? "CONTENT_VIEW_ZONE" : t === 9 ? "CONTENT_WIDGET" : t === 10 ? "OVERVIEW_RULER" : t === 11 ? "SCROLLBAR" : t === 12 ? "OVERLAY_WIDGET" : "UNKNOWN";
    }
    static toString(t) {
        return this._typeToString(t.type) + ": " + t.position + " - " + t.range + " - " + JSON.stringify(t.detail);
    }
}, PQ = class {
    static isTextArea(t) {
        return t.length === 2 && t[0] === 3 && t[1] === 7;
    }
    static isChildOfViewLines(t) {
        return t.length >= 4 && t[0] === 3 && t[3] === 8;
    }
    static isStrictChildOfViewLines(t) {
        return t.length > 4 && t[0] === 3 && t[3] === 8;
    }
    static isChildOfScrollableElement(t) {
        return t.length >= 2 && t[0] === 3 && t[1] === 6;
    }
    static isChildOfMinimap(t) {
        return t.length >= 2 && t[0] === 3 && t[1] === 9;
    }
    static isChildOfContentWidgets(t) {
        return t.length >= 4 && t[0] === 3 && t[3] === 1;
    }
    static isChildOfOverflowGuard(t) {
        return t.length >= 1 && t[0] === 3;
    }
    static isChildOfOverflowingContentWidgets(t) {
        return t.length >= 1 && t[0] === 2;
    }
    static isChildOfOverlayWidgets(t) {
        return t.length >= 2 && t[0] === 3 && t[1] === 4;
    }
    static isChildOfOverflowingOverlayWidgets(t) {
        return t.length >= 1 && t[0] === 5;
    }
}, nCr = class gJc {
    constructor(e, n, i){
        this.viewModel = e.viewModel;
        const r = e.configuration.options;
        this.layoutInfo = r.get(151), this.viewDomNode = n.viewDomNode, this.viewLinesGpu = n.viewLinesGpu, this.lineHeight = r.get(68), this.stickyTabStops = r.get(121), this.typicalHalfwidthCharacterWidth = r.get(52).typicalHalfwidthCharacterWidth, this.lastRenderData = i, this._context = e, this._viewHelper = n;
    }
    getZoneAtCoord(e) {
        return gJc.getZoneAtCoord(this._context, e);
    }
    static getZoneAtCoord(e, n) {
        const i = e.viewLayout.getWhitespaceAtVerticalOffset(n);
        if (i) {
            const r = i.verticalOffset + i.height / 2, s = e.viewModel.getLineCount();
            let o = null, a, l = null;
            return i.afterLineNumber !== s && (l = new er(i.afterLineNumber + 1, 1)), i.afterLineNumber > 0 && (o = new er(i.afterLineNumber, e.viewModel.getLineMaxColumn(i.afterLineNumber))), l === null ? a = o : o === null ? a = l : n < r ? a = o : a = l, {
                viewZoneId: i.id,
                afterLineNumber: i.afterLineNumber,
                positionBefore: o,
                positionAfter: l,
                position: a
            };
        }
        return null;
    }
    getFullLineRangeAtCoord(e) {
        if (this._context.viewLayout.isAfterLines(e)) {
            const r = this._context.viewModel.getLineCount(), s = this._context.viewModel.getLineMaxColumn(r);
            return {
                range: new qt(r, s, r, s),
                isAfterLines: !0
            };
        }
        const n = this._context.viewLayout.getLineNumberAtVerticalOffset(e), i = this._context.viewModel.getLineMaxColumn(n);
        return {
            range: new qt(n, 1, n, i),
            isAfterLines: !1
        };
    }
    getLineNumberAtVerticalOffset(e) {
        return this._context.viewLayout.getLineNumberAtVerticalOffset(e);
    }
    isAfterLines(e) {
        return this._context.viewLayout.isAfterLines(e);
    }
    isInTopPadding(e) {
        return this._context.viewLayout.isInTopPadding(e);
    }
    isInBottomPadding(e) {
        return this._context.viewLayout.isInBottomPadding(e);
    }
    getVerticalOffsetForLineNumber(e) {
        return this._context.viewLayout.getVerticalOffsetForLineNumber(e);
    }
    findAttribute(e, n) {
        return gJc._findAttribute(e, n, this._viewHelper.viewDomNode);
    }
    static _findAttribute(e, n, i) {
        for(; e && e !== e.ownerDocument.body;){
            if (e.hasAttribute && e.hasAttribute(n)) return e.getAttribute(n);
            if (e === i) return null;
            e = e.parentNode;
        }
        return null;
    }
    getLineWidth(e) {
        return this._viewHelper.getLineWidth(e);
    }
    visibleRangeForPosition(e, n) {
        return this._viewHelper.visibleRangeForPosition(e, n);
    }
    getPositionFromDOMInfo(e, n) {
        return this._viewHelper.getPositionFromDOMInfo(e, n);
    }
    getCurrentScrollTop() {
        return this._context.viewLayout.getCurrentScrollTop();
    }
    getCurrentScrollLeft() {
        return this._context.viewLayout.getCurrentScrollLeft();
    }
}, ajd = class {
    constructor(t, e, n, i){
        this.editorPos = e, this.pos = n, this.relativePos = i, this.mouseVerticalOffset = Math.max(0, t.getCurrentScrollTop() + this.relativePos.y), this.mouseContentHorizontalOffset = t.getCurrentScrollLeft() + this.relativePos.x - t.layoutInfo.contentLeft, this.isInMarginArea = this.relativePos.x < t.layoutInfo.contentLeft && this.relativePos.x >= t.layoutInfo.glyphMarginLeft, this.isInContentArea = !this.isInMarginArea, this.mouseColumn = Math.max(0, iCr._getMouseColumn(this.mouseContentHorizontalOffset, t.typicalHalfwidthCharacterWidth));
    }
}, ljd = class extends ajd {
    constructor(t, e, n, i, r){
        super(t, e, n, i), this.hitTestResult = new ES(()=>iCr.doHitTest(this._ctx, this)), this._targetPathCacheElement = null, this._targetPathCacheValue = new Uint8Array(0), this._ctx = t, this._eventTarget = r;
        const s = !!this._eventTarget;
        this._useHitTestTarget = !s;
    }
    get target() {
        return this._useHitTestTarget ? this.hitTestResult.value.hitTarget : this._eventTarget;
    }
    get targetPath() {
        return this._targetPathCacheElement !== this.target && (this._targetPathCacheElement = this.target, this._targetPathCacheValue = YAe.collect(this.target, this._ctx.viewDomNode)), this._targetPathCacheValue;
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
    _getMouseColumn(t = null) {
        return t && t.column < this._ctx.viewModel.getLineMaxColumn(t.lineNumber) ? sL.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(t.lineNumber), t.column, this._ctx.viewModel.model.getOptions().tabSize) + 1 : this.mouseColumn;
    }
    fulfillUnknown(t = null) {
        return wY.createUnknown(this.target, this._getMouseColumn(t), t);
    }
    fulfillTextarea() {
        return wY.createTextarea(this.target, this._getMouseColumn());
    }
    fulfillMargin(t, e, n, i) {
        return wY.createMargin(t, this.target, this._getMouseColumn(e), e, n, i);
    }
    fulfillViewZone(t, e, n) {
        return wY.createViewZone(t, this.target, this._getMouseColumn(e), e, n);
    }
    fulfillContentText(t, e, n) {
        return wY.createContentText(this.target, this._getMouseColumn(t), t, e, n);
    }
    fulfillContentEmpty(t, e) {
        return wY.createContentEmpty(this.target, this._getMouseColumn(t), t, e);
    }
    fulfillContentWidget(t) {
        return wY.createContentWidget(this.target, this._getMouseColumn(), t);
    }
    fulfillScrollbar(t) {
        return wY.createScrollbar(this.target, this._getMouseColumn(t), t);
    }
    fulfillOverlayWidget(t) {
        return wY.createOverlayWidget(this.target, this._getMouseColumn(), t);
    }
}, IHo = {
    isAfterLines: !0
}, iCr = class Qge {
    constructor(e, n){
        this._context = e, this._viewHelper = n;
    }
    mouseTargetIsWidget(e) {
        const n = e.target, i = YAe.collect(n, this._viewHelper.viewDomNode), r = n.parentElement;
        if (r && r.getAttribute("data-lexical-editor") === "true") return !0;
        const s = r?.parentElement;
        return !!(s && s.getAttribute("data-lexical-editor") === "true" || PQ.isChildOfContentWidgets(i) || PQ.isChildOfOverflowingContentWidgets(i) || PQ.isChildOfOverlayWidgets(i) || PQ.isChildOfOverflowingOverlayWidgets(i));
    }
    createMouseTarget(e, n, i, r, s) {
        const o = new nCr(this._context, this._viewHelper, e), a = new ljd(o, n, i, r, s);
        try {
            const l = Qge._createMouseTarget(o, a);
            if (l.type === 6 && o.stickyTabStops && l.position !== null) {
                const c = Qge._snapToSoftTabBoundary(l.position, o.viewModel), u = qt.fromPositions(c, c).plusRange(l.range);
                return a.fulfillContentText(c, u, l.detail);
            }
            return l;
        } catch  {
            return a.fulfillUnknown();
        }
    }
    static _createMouseTarget(e, n) {
        if (n.target === null) return n.fulfillUnknown();
        const i = n;
        let r = null;
        return !PQ.isChildOfOverflowGuard(n.targetPath) && !PQ.isChildOfOverflowingContentWidgets(n.targetPath) && !PQ.isChildOfOverflowingOverlayWidgets(n.targetPath) && (r = r || n.fulfillUnknown()), r = r || Qge._hitTestContentWidget(e, i), r = r || Qge._hitTestOverlayWidget(e, i), r = r || Qge._hitTestMinimap(e, i), r = r || Qge._hitTestScrollbarSlider(e, i), r = r || Qge._hitTestViewZone(e, i), r = r || Qge._hitTestMargin(e, i), r = r || Qge._hitTestViewCursor(e, i), r = r || Qge._hitTestTextArea(e, i), r = r || Qge._hitTestViewLines(e, i), r = r || Qge._hitTestScrollbar(e, i), r || n.fulfillUnknown();
    }
    static _hitTestContentWidget(e, n) {
        if (PQ.isChildOfContentWidgets(n.targetPath) || PQ.isChildOfOverflowingContentWidgets(n.targetPath)) {
            const i = e.findAttribute(n.target, "widgetId");
            return i ? n.fulfillContentWidget(i) : n.fulfillUnknown();
        }
        return null;
    }
    static _hitTestOverlayWidget(e, n) {
        if (PQ.isChildOfOverlayWidgets(n.targetPath) || PQ.isChildOfOverflowingOverlayWidgets(n.targetPath)) {
            const i = e.findAttribute(n.target, "widgetId");
            return i ? n.fulfillOverlayWidget(i) : n.fulfillUnknown();
        }
        return null;
    }
    static _hitTestViewCursor(e, n) {
        if (n.target) {
            const i = e.lastRenderData.lastViewCursorsRenderData;
            for (const r of i)if (n.target === r.domNode) return n.fulfillContentText(r.position, null, {
                mightBeForeignElement: !1,
                injectedText: null
            });
        }
        if (n.isInContentArea) {
            const i = e.lastRenderData.lastViewCursorsRenderData, r = n.mouseContentHorizontalOffset, s = n.mouseVerticalOffset;
            for (const o of i){
                if (r < o.contentLeft || r > o.contentLeft + o.width) continue;
                const a = e.getVerticalOffsetForLineNumber(o.position.lineNumber);
                if (a <= s && s <= a + o.height) return n.fulfillContentText(o.position, null, {
                    mightBeForeignElement: !1,
                    injectedText: null
                });
            }
        }
        return null;
    }
    static _hitTestViewZone(e, n) {
        const i = e.getZoneAtCoord(n.mouseVerticalOffset);
        if (i) {
            const r = n.isInContentArea ? 8 : 5;
            return n.fulfillViewZone(r, i.position, i);
        }
        return null;
    }
    static _hitTestTextArea(e, n) {
        return PQ.isTextArea(n.targetPath) ? e.lastRenderData.lastTextareaPosition ? n.fulfillContentText(e.lastRenderData.lastTextareaPosition, null, {
            mightBeForeignElement: !1,
            injectedText: null
        }) : n.fulfillTextarea() : null;
    }
    static _hitTestMargin(e, n) {
        if (n.isInMarginArea) {
            const i = e.getFullLineRangeAtCoord(n.mouseVerticalOffset), r = i.range.getStartPosition();
            let s = Math.abs(n.relativePos.x);
            const o = {
                isAfterLines: i.isAfterLines,
                glyphMarginLeft: e.layoutInfo.glyphMarginLeft,
                glyphMarginWidth: e.layoutInfo.glyphMarginWidth,
                lineNumbersWidth: e.layoutInfo.lineNumbersWidth,
                offsetX: s
            };
            if (s -= e.layoutInfo.glyphMarginLeft, s <= e.layoutInfo.glyphMarginWidth) {
                const a = e.viewModel.coordinatesConverter.convertViewPositionToModelPosition(i.range.getStartPosition()), l = e.viewModel.glyphLanes.getLanesAtLine(a.lineNumber);
                return o.glyphMarginLane = l[Math.floor(s / e.lineHeight)], n.fulfillMargin(2, r, i.range, o);
            }
            return s -= e.layoutInfo.glyphMarginWidth, s <= e.layoutInfo.lineNumbersWidth ? n.fulfillMargin(3, r, i.range, o) : (s -= e.layoutInfo.lineNumbersWidth, n.fulfillMargin(4, r, i.range, o));
        }
        return null;
    }
    static _hitTestViewLines(e, n) {
        if (!PQ.isChildOfViewLines(n.targetPath)) return null;
        if (e.isInTopPadding(n.mouseVerticalOffset)) return n.fulfillContentEmpty(new er(1, 1), IHo);
        if (e.isAfterLines(n.mouseVerticalOffset) || e.isInBottomPadding(n.mouseVerticalOffset)) {
            const r = e.viewModel.getLineCount(), s = e.viewModel.getLineMaxColumn(r);
            return n.fulfillContentEmpty(new er(r, s), IHo);
        }
        if (PQ.isStrictChildOfViewLines(n.targetPath)) {
            const r = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset);
            if (e.viewModel.getLineLength(r) === 0) {
                const o = e.getLineWidth(r), a = ksi(n.mouseContentHorizontalOffset - o);
                return n.fulfillContentEmpty(new er(r, 1), a);
            }
            const s = e.getLineWidth(r);
            if (n.mouseContentHorizontalOffset >= s) {
                const o = ksi(n.mouseContentHorizontalOffset - s), a = new er(r, e.viewModel.getLineMaxColumn(r));
                return n.fulfillContentEmpty(a, o);
            }
        } else if (e.viewLinesGpu) {
            const r = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset);
            if (e.viewModel.getLineLength(r) === 0) {
                const a = e.getLineWidth(r), l = ksi(n.mouseContentHorizontalOffset - a);
                return n.fulfillContentEmpty(new er(r, 1), l);
            }
            const s = e.getLineWidth(r);
            if (n.mouseContentHorizontalOffset >= s) {
                const a = ksi(n.mouseContentHorizontalOffset - s), l = new er(r, e.viewModel.getLineMaxColumn(r));
                return n.fulfillContentEmpty(l, a);
            }
            const o = e.viewLinesGpu.getPositionAtCoordinate(r, n.mouseContentHorizontalOffset);
            if (o) {
                const a = {
                    injectedText: null,
                    mightBeForeignElement: !1
                };
                return n.fulfillContentText(o, qt.fromPositions(o, o), a);
            }
        }
        const i = n.hitTestResult.value;
        return i.type === 1 ? Qge.createMouseTargetFromHitTestPosition(e, n, i.spanNode, i.position, i.injectedText) : n.wouldBenefitFromHitTestTargetSwitch ? (n.switchToHitTestTarget(), this._createMouseTarget(e, n)) : n.fulfillUnknown();
    }
    static _hitTestMinimap(e, n) {
        if (PQ.isChildOfMinimap(n.targetPath)) {
            const i = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = e.viewModel.getLineMaxColumn(i);
            return n.fulfillScrollbar(new er(i, r));
        }
        return null;
    }
    static _hitTestScrollbarSlider(e, n) {
        if (PQ.isChildOfScrollableElement(n.targetPath) && n.target && n.target.nodeType === 1) {
            const i = n.target.className;
            if (i && /\b(slider|scrollbar)\b/.test(i)) {
                const r = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), s = e.viewModel.getLineMaxColumn(r);
                return n.fulfillScrollbar(new er(r, s));
            }
        }
        return null;
    }
    static _hitTestScrollbar(e, n) {
        if (PQ.isChildOfScrollableElement(n.targetPath)) {
            const i = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = e.viewModel.getLineMaxColumn(i);
            return n.fulfillScrollbar(new er(i, r));
        }
        return null;
    }
    getMouseColumn(e) {
        const n = this._context.configuration.options, i = n.get(151), r = this._context.viewLayout.getCurrentScrollLeft() + e.x - i.contentLeft;
        return Qge._getMouseColumn(r, n.get(52).typicalHalfwidthCharacterWidth);
    }
    static _getMouseColumn(e, n) {
        return e < 0 ? 1 : Math.round(e / n) + 1;
    }
    static createMouseTargetFromHitTestPosition(e, n, i, r, s) {
        const o = r.lineNumber, a = r.column, l = e.getLineWidth(o);
        if (n.mouseContentHorizontalOffset > l) {
            const b = ksi(n.mouseContentHorizontalOffset - l);
            return n.fulfillContentEmpty(r, b);
        }
        const c = e.visibleRangeForPosition(o, a);
        if (!c) return n.fulfillUnknown(r);
        const u = c.left;
        if (Math.abs(n.mouseContentHorizontalOffset - u) < 1) return n.fulfillContentText(r, null, {
            mightBeForeignElement: !!s,
            injectedText: s
        });
        const d = [];
        if (d.push({
            offset: c.left,
            column: a
        }), a > 1) {
            const b = e.visibleRangeForPosition(o, a - 1);
            b && d.push({
                offset: b.left,
                column: a - 1
            });
        }
        const h = e.viewModel.getLineMaxColumn(o);
        if (a < h) {
            const b = e.visibleRangeForPosition(o, a + 1);
            b && d.push({
                offset: b.left,
                column: a + 1
            });
        }
        d.sort((b, y)=>b.offset - y.offset);
        const p = n.pos.toClientCoordinates(ws(e.viewDomNode)), g = i.getBoundingClientRect(), f = g.left <= p.clientX && p.clientX <= g.right;
        let _ = null;
        for(let b = 1; b < d.length; b++){
            const y = d[b - 1], S = d[b];
            if (y.offset <= n.mouseContentHorizontalOffset && n.mouseContentHorizontalOffset <= S.offset) {
                _ = new qt(o, y.column, o, S.column);
                const k = Math.abs(y.offset - n.mouseContentHorizontalOffset), C = Math.abs(S.offset - n.mouseContentHorizontalOffset);
                r = k < C ? new er(o, y.column) : new er(o, S.column);
                break;
            }
        }
        return n.fulfillContentText(r, _, {
            mightBeForeignElement: !f || !!s,
            injectedText: s
        });
    }
    static _doHitTestWithCaretRangeFromPoint(e, n) {
        const i = e.getLineNumberAtVerticalOffset(n.mouseVerticalOffset), r = e.getVerticalOffsetForLineNumber(i), s = r + e.lineHeight;
        if (!(i === e.viewModel.getLineCount() && n.mouseVerticalOffset > s)) {
            const a = Math.floor((r + s) / 2);
            let l = n.pos.y + (a - n.mouseVerticalOffset);
            l <= n.editorPos.y && (l = n.editorPos.y + 1), l >= n.editorPos.y + n.editorPos.height && (l = n.editorPos.y + n.editorPos.height - 1);
            const c = new bsi(n.pos.x, l), u = this._actualDoHitTestWithCaretRangeFromPoint(e, c.toClientCoordinates(ws(e.viewDomNode)));
            if (u.type === 1) return u;
        }
        return this._actualDoHitTestWithCaretRangeFromPoint(e, n.pos.toClientCoordinates(ws(e.viewDomNode)));
    }
    static _actualDoHitTestWithCaretRangeFromPoint(e, n) {
        const i = xbt(e.viewDomNode);
        let r;
        if (i ? typeof i.caretRangeFromPoint > "u" ? r = SMy(i, n.clientX, n.clientY) : r = i.caretRangeFromPoint(n.clientX, n.clientY) : r = e.viewDomNode.ownerDocument.caretRangeFromPoint(n.clientX, n.clientY), !r || !r.startContainer) return new Ytt;
        const s = r.startContainer;
        if (s.nodeType === s.TEXT_NODE) {
            const o = s.parentNode, a = o ? o.parentNode : null, l = a ? a.parentNode : null;
            return (l && l.nodeType === l.ELEMENT_NODE ? l.className : null) === Syt.CLASS_NAME ? pBt.createFromDOMInfo(e, o, r.startOffset) : new Ytt(s.parentNode);
        } else if (s.nodeType === s.ELEMENT_NODE) {
            const o = s.parentNode, a = o ? o.parentNode : null;
            return (a && a.nodeType === a.ELEMENT_NODE ? a.className : null) === Syt.CLASS_NAME ? pBt.createFromDOMInfo(e, s, s.textContent.length) : new Ytt(s);
        }
        return new Ytt;
    }
    static _doHitTestWithCaretPositionFromPoint(e, n) {
        const i = e.viewDomNode.ownerDocument.caretPositionFromPoint(n.clientX, n.clientY);
        if (i.offsetNode.nodeType === i.offsetNode.TEXT_NODE) {
            const r = i.offsetNode.parentNode, s = r ? r.parentNode : null, o = s ? s.parentNode : null;
            return (o && o.nodeType === o.ELEMENT_NODE ? o.className : null) === Syt.CLASS_NAME ? pBt.createFromDOMInfo(e, i.offsetNode.parentNode, i.offset) : new Ytt(i.offsetNode.parentNode);
        }
        if (i.offsetNode.nodeType === i.offsetNode.ELEMENT_NODE) {
            const r = i.offsetNode.parentNode, s = r && r.nodeType === r.ELEMENT_NODE ? r.className : null, o = r ? r.parentNode : null, a = o && o.nodeType === o.ELEMENT_NODE ? o.className : null;
            if (s === Syt.CLASS_NAME) {
                const l = i.offsetNode.childNodes[Math.min(i.offset, i.offsetNode.childNodes.length - 1)];
                if (l) return pBt.createFromDOMInfo(e, l, 0);
            } else if (a === Syt.CLASS_NAME) return pBt.createFromDOMInfo(e, i.offsetNode, 0);
        }
        return new Ytt(i.offsetNode);
    }
    static _snapToSoftTabBoundary(e, n) {
        const i = n.getLineContent(e.lineNumber), { tabSize: r } = n.model.getOptions(), s = Jkr.atomicPosition(i, e.column - 1, r, 2);
        return s !== -1 ? new er(e.lineNumber, s + 1) : e;
    }
    static doHitTest(e, n) {
        let i = new Ytt;
        if (typeof e.viewDomNode.ownerDocument.caretRangeFromPoint == "function" ? i = this._doHitTestWithCaretRangeFromPoint(e, n) : e.viewDomNode.ownerDocument.caretPositionFromPoint && (i = this._doHitTestWithCaretPositionFromPoint(e, n.pos.toClientCoordinates(ws(e.viewDomNode)))), i.type === 1) {
            const r = e.viewModel.getInjectedTextAt(i.position), s = e.viewModel.normalizePosition(i.position, 2);
            (r || !s.equals(i.position)) && (i = new EHo(s, i.spanNode, r));
        }
        return i;
    }
}, xHo = class xZi {
    static getInstance() {
        return xZi._INSTANCE || (xZi._INSTANCE = new xZi), xZi._INSTANCE;
    }
    constructor(){
        this._cache = {}, this._canvas = document.createElement("canvas");
    }
    getCharWidth(e, n) {
        const i = e + n;
        if (this._cache[i]) return this._cache[i];
        const r = this._canvas.getContext("2d");
        r.font = n;
        const o = r.measureText(e).width;
        return this._cache[i] = o, o;
    }
}, xHo._INSTANCE = null, cjd = xHo;

}
