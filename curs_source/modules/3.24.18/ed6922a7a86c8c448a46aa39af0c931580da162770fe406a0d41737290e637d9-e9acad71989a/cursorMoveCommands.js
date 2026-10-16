import { Sx, T0, Xr, dp, om } from "./HVr.js";
import { iW, ire, wb } from "./cursorCommon.js";
import { sXr, vM } from "./cursorMoveOperations.js";
import { Z9, gfi } from "./cursorWordOperations.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var a5, bf;
export { a5, bf };
var __wakaru_uXr_initialized = false;
export function uXr() {
if (__wakaru_uXr_initialized) return;
__wakaru_uXr_initialized = true;
"use strict";
x(), gr(), ire(), sXr(), gfi(), ya(), qi(), a5 = class {
    static addCursorDown(e, t, n) {
        const i = [];
        let r = 0;
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            i[r++] = new wb(a.modelState, a.viewState), n ? i[r++] = wb.fromModelState(vM.translateDown(e.cursorConfig, e.model, a.modelState)) : i[r++] = wb.fromViewState(vM.translateDown(e.cursorConfig, e, a.viewState));
        }
        return i;
    }
    static addCursorUp(e, t, n) {
        const i = [];
        let r = 0;
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            i[r++] = new wb(a.modelState, a.viewState), n ? i[r++] = wb.fromModelState(vM.translateUp(e.cursorConfig, e.model, a.modelState)) : i[r++] = wb.fromViewState(vM.translateUp(e.cursorConfig, e, a.viewState));
        }
        return i;
    }
    static moveToBeginningOfLine(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            i[r] = this._moveToLineStart(e, o, n);
        }
        return i;
    }
    static _moveToLineStart(e, t, n) {
        const i = t.viewState.position.column, r = t.modelState.position.column, s = i === r, o = t.viewState.position.lineNumber, a = e.getLineFirstNonWhitespaceColumn(o);
        return !s && !(i === a) ? this._moveToLineStartByView(e, t, n) : this._moveToLineStartByModel(e, t, n);
    }
    static _moveToLineStartByView(e, t, n) {
        return wb.fromViewState(vM.moveToBeginningOfLine(e.cursorConfig, e, t.viewState, n));
    }
    static _moveToLineStartByModel(e, t, n) {
        return wb.fromModelState(vM.moveToBeginningOfLine(e.cursorConfig, e.model, t.modelState, n));
    }
    static moveToEndOfLine(e, t, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = this._moveToLineEnd(e, a, n, i);
        }
        return r;
    }
    static _moveToLineEnd(e, t, n, i) {
        const r = t.viewState.position, s = e.getLineMaxColumn(r.lineNumber), o = r.column === s, a = t.modelState.position, c = e.model.getLineMaxColumn(a.lineNumber), l = s - r.column === c - a.column;
        return o || l ? this._moveToLineEndByModel(e, t, n, i) : this._moveToLineEndByView(e, t, n, i);
    }
    static _moveToLineEndByView(e, t, n, i) {
        return wb.fromViewState(vM.moveToEndOfLine(e.cursorConfig, e, t.viewState, n, i));
    }
    static _moveToLineEndByModel(e, t, n, i) {
        return wb.fromModelState(vM.moveToEndOfLine(e.cursorConfig, e.model, t.modelState, n, i));
    }
    static expandLineSelection(e, t) {
        const n = [];
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i], o = s.modelState.selection.startLineNumber, a = e.model.getLineCount();
            let c = s.modelState.selection.endLineNumber, l;
            c === a ? l = e.model.getLineMaxColumn(a) : (c++, l = 1), n[i] = wb.fromModelState(new iW(new dt(o, 1, o, 1), 0, 0, new Yn(c, l), 0));
        }
        return n;
    }
    static moveToBeginningOfBuffer(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            i[r] = wb.fromModelState(vM.moveToBeginningOfBuffer(e.cursorConfig, e.model, o.modelState, n));
        }
        return i;
    }
    static moveToEndOfBuffer(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            i[r] = wb.fromModelState(vM.moveToEndOfBuffer(e.cursorConfig, e.model, o.modelState, n));
        }
        return i;
    }
    static selectAll(e, t) {
        const n = e.model.getLineCount(), i = e.model.getLineMaxColumn(n);
        return wb.fromModelState(new iW(new dt(1, 1, 1, 1), 0, 0, new Yn(n, i), 0));
    }
    static line(e, t, n, i, r) {
        const s = e.model.validatePosition(i), o = r ? e.coordinatesConverter.validateViewPosition(new Yn(r.lineNumber, r.column), s) : e.coordinatesConverter.convertModelPositionToViewPosition(s);
        if (!n) {
            const c = e.model.getLineCount();
            let l = s.lineNumber + 1, u = 1;
            return l > c && (l = c, u = e.model.getLineMaxColumn(l)), wb.fromModelState(new iW(new dt(s.lineNumber, 1, l, u), 2, 0, new Yn(l, u), 0));
        }
        const a = t.modelState.selectionStart.getStartPosition().lineNumber;
        if (s.lineNumber < a) return wb.fromViewState(t.viewState.move(!0, o.lineNumber, 1, 0));
        if (s.lineNumber > a) {
            const c = e.getLineCount();
            let l = o.lineNumber + 1, u = 1;
            return l > c && (l = c, u = e.getLineMaxColumn(l)), wb.fromViewState(t.viewState.move(!0, l, u, 0));
        } else {
            const c = t.modelState.selectionStart.getEndPosition();
            return wb.fromModelState(t.modelState.move(!0, c.lineNumber, c.column, 0));
        }
    }
    static word(e, t, n, i) {
        const r = e.model.validatePosition(i);
        return wb.fromModelState(Z9.word(e.cursorConfig, e.model, t.modelState, n, r));
    }
    static cancelSelection(e, t) {
        if (!t.modelState.hasSelection()) return new wb(t.modelState, t.viewState);
        const n = t.viewState.position.lineNumber, i = t.viewState.position.column;
        return wb.fromViewState(new iW(new dt(n, i, n, i), 0, 0, new Yn(n, i), 0));
    }
    static moveTo(e, t, n, i, r) {
        if (n) {
            if (t.modelState.selectionStartKind === 1) return this.word(e, t, n, i);
            if (t.modelState.selectionStartKind === 2) return this.line(e, t, n, i, r);
        }
        const s = e.model.validatePosition(i), o = r ? e.coordinatesConverter.validateViewPosition(new Yn(r.lineNumber, r.column), s) : e.coordinatesConverter.convertModelPositionToViewPosition(s);
        return wb.fromViewState(t.viewState.move(n, o.lineNumber, o.column, 0));
    }
    static simpleMove(e, t, n, i, r, s) {
        switch(n){
            case bf.Direction.Left:
                return s === bf.Unit.HalfLine ? this._moveHalfLineLeft(e, t, i) : this._moveLeft(e, t, i, r);
            case bf.Direction.Right:
                return s === bf.Unit.HalfLine ? this._moveHalfLineRight(e, t, i) : this._moveRight(e, t, i, r);
            case bf.Direction.Up:
                return s === bf.Unit.WrappedLine ? this._moveUpByViewLines(e, t, i, r) : this._moveUpByModelLines(e, t, i, r);
            case bf.Direction.Down:
                return s === bf.Unit.WrappedLine ? this._moveDownByViewLines(e, t, i, r) : this._moveDownByModelLines(e, t, i, r);
            case bf.Direction.PrevBlankLine:
                return s === bf.Unit.WrappedLine ? t.map((o)=>wb.fromViewState(vM.moveToPrevBlankLine(e.cursorConfig, e, o.viewState, i))) : t.map((o)=>wb.fromModelState(vM.moveToPrevBlankLine(e.cursorConfig, e.model, o.modelState, i)));
            case bf.Direction.NextBlankLine:
                return s === bf.Unit.WrappedLine ? t.map((o)=>wb.fromViewState(vM.moveToNextBlankLine(e.cursorConfig, e, o.viewState, i))) : t.map((o)=>wb.fromModelState(vM.moveToNextBlankLine(e.cursorConfig, e.model, o.modelState, i)));
            case bf.Direction.WrappedLineStart:
                return this._moveToViewMinColumn(e, t, i);
            case bf.Direction.WrappedLineFirstNonWhitespaceCharacter:
                return this._moveToViewFirstNonWhitespaceColumn(e, t, i);
            case bf.Direction.WrappedLineColumnCenter:
                return this._moveToViewCenterColumn(e, t, i);
            case bf.Direction.WrappedLineEnd:
                return this._moveToViewMaxColumn(e, t, i);
            case bf.Direction.WrappedLineLastNonWhitespaceCharacter:
                return this._moveToViewLastNonWhitespaceColumn(e, t, i);
            default:
                return null;
        }
    }
    static viewportMove(e, t, n, i, r) {
        const s = e.getCompletelyVisibleViewRange(), o = e.coordinatesConverter.convertViewRangeToModelRange(s);
        switch(n){
            case bf.Direction.ViewPortTop:
                {
                    const a = this._firstLineNumberInRange(e.model, o, r), c = e.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(e, t[0], i, a, c)
                    ];
                }
            case bf.Direction.ViewPortBottom:
                {
                    const a = this._lastLineNumberInRange(e.model, o, r), c = e.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(e, t[0], i, a, c)
                    ];
                }
            case bf.Direction.ViewPortCenter:
                {
                    const a = Math.round((o.startLineNumber + o.endLineNumber) / 2), c = e.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(e, t[0], i, a, c)
                    ];
                }
            case bf.Direction.ViewPortIfOutside:
                {
                    const a = [];
                    for(let c = 0, l = t.length; c < l; c++){
                        const u = t[c];
                        a[c] = this.findPositionInViewportIfOutside(e, u, s, i);
                    }
                    return a;
                }
            default:
                return null;
        }
    }
    static findPositionInViewportIfOutside(e, t, n, i) {
        const r = t.viewState.position.lineNumber;
        if (n.startLineNumber <= r && r <= n.endLineNumber - 1) return new wb(t.modelState, t.viewState);
        {
            let s;
            r > n.endLineNumber - 1 ? s = n.endLineNumber - 1 : r < n.startLineNumber ? s = n.startLineNumber : s = r;
            const o = vM.vertical(e.cursorConfig, e, r, t.viewState.position.column, t.viewState.leftoverVisibleColumns, s, !1);
            return wb.fromViewState(t.viewState.move(i, o.lineNumber, o.column, o.leftoverVisibleColumns));
        }
    }
    static _firstLineNumberInRange(e, t, n) {
        let i = t.startLineNumber;
        return t.startColumn !== e.getLineMinColumn(i) && i++, Math.min(t.endLineNumber, i + n - 1);
    }
    static _lastLineNumberInRange(e, t, n) {
        let i = t.startLineNumber;
        return t.startColumn !== e.getLineMinColumn(i) && i++, Math.max(i, t.endLineNumber - n + 1);
    }
    static _moveLeft(e, t, n, i) {
        return t.map((r)=>wb.fromViewState(vM.moveLeft(e.cursorConfig, e, r.viewState, n, i)));
    }
    static _moveHalfLineLeft(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = Math.round(e.getLineLength(a) / 2);
            i[r] = wb.fromViewState(vM.moveLeft(e.cursorConfig, e, o.viewState, n, c));
        }
        return i;
    }
    static _moveRight(e, t, n, i) {
        return t.map((r)=>wb.fromViewState(vM.moveRight(e.cursorConfig, e, r.viewState, n, i)));
    }
    static _moveHalfLineRight(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = Math.round(e.getLineLength(a) / 2);
            i[r] = wb.fromViewState(vM.moveRight(e.cursorConfig, e, o.viewState, n, c));
        }
        return i;
    }
    static _moveDownByViewLines(e, t, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = wb.fromViewState(vM.moveDown(e.cursorConfig, e, a.viewState, n, i));
        }
        return r;
    }
    static _moveDownByModelLines(e, t, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = wb.fromModelState(vM.moveDown(e.cursorConfig, e.model, a.modelState, n, i));
        }
        return r;
    }
    static _moveUpByViewLines(e, t, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = wb.fromViewState(vM.moveUp(e.cursorConfig, e, a.viewState, n, i));
        }
        return r;
    }
    static _moveUpByModelLines(e, t, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = wb.fromModelState(vM.moveUp(e.cursorConfig, e.model, a.modelState, n, i));
        }
        return r;
    }
    static _moveToViewPosition(e, t, n, i, r) {
        return wb.fromViewState(t.viewState.move(n, i, r, 0));
    }
    static _moveToModelPosition(e, t, n, i, r) {
        return wb.fromModelState(t.modelState.move(n, i, r, 0));
    }
    static _moveToViewMinColumn(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = e.getLineMinColumn(a);
            i[r] = this._moveToViewPosition(e, o, n, a, c);
        }
        return i;
    }
    static _moveToViewFirstNonWhitespaceColumn(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = e.getLineFirstNonWhitespaceColumn(a);
            i[r] = this._moveToViewPosition(e, o, n, a, c);
        }
        return i;
    }
    static _moveToViewCenterColumn(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = Math.round((e.getLineMaxColumn(a) + e.getLineMinColumn(a)) / 2);
            i[r] = this._moveToViewPosition(e, o, n, a, c);
        }
        return i;
    }
    static _moveToViewMaxColumn(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = e.getLineMaxColumn(a);
            i[r] = this._moveToViewPosition(e, o, n, a, c);
        }
        return i;
    }
    static _moveToViewLastNonWhitespaceColumn(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = o.viewState.position.lineNumber, c = e.getLineLastNonWhitespaceColumn(a);
            i[r] = this._moveToViewPosition(e, o, n, a, c);
        }
        return i;
    }
}, ((e)=>{
    const t = function(s) {
        if (!dp(s)) return !1;
        const o = s;
        return !(!Xr(o.to) || !om(o.select) && !Sx(o.select) || !om(o.by) && !Xr(o.by) || !om(o.value) && !T0(o.value));
    };
    e.metadata = {
        description: "Move cursor to a logical position in the view",
        args: [
            {
                name: "Cursor move argument object",
                description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory logical position value providing where to move the cursor.
						\`\`\`
						'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
						'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
						'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
						'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'character', 'halfLine'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'select': If 'true' makes the selection. Default is 'false'.
				`,
                constraint: t,
                schema: {
                    type: "object",
                    required: [
                        "to"
                    ],
                    properties: {
                        to: {
                            type: "string",
                            enum: [
                                "left",
                                "right",
                                "up",
                                "down",
                                "prevBlankLine",
                                "nextBlankLine",
                                "wrappedLineStart",
                                "wrappedLineEnd",
                                "wrappedLineColumnCenter",
                                "wrappedLineFirstNonWhitespaceCharacter",
                                "wrappedLineLastNonWhitespaceCharacter",
                                "viewPortTop",
                                "viewPortCenter",
                                "viewPortBottom",
                                "viewPortIfOutside"
                            ]
                        },
                        by: {
                            type: "string",
                            enum: [
                                "line",
                                "wrappedLine",
                                "character",
                                "halfLine"
                            ]
                        },
                        value: {
                            type: "number",
                            default: 1
                        },
                        select: {
                            type: "boolean",
                            default: !1
                        }
                    }
                }
            }
        ]
    }, e.RawDirection = {
        Left: "left",
        Right: "right",
        Up: "up",
        Down: "down",
        PrevBlankLine: "prevBlankLine",
        NextBlankLine: "nextBlankLine",
        WrappedLineStart: "wrappedLineStart",
        WrappedLineFirstNonWhitespaceCharacter: "wrappedLineFirstNonWhitespaceCharacter",
        WrappedLineColumnCenter: "wrappedLineColumnCenter",
        WrappedLineEnd: "wrappedLineEnd",
        WrappedLineLastNonWhitespaceCharacter: "wrappedLineLastNonWhitespaceCharacter",
        ViewPortTop: "viewPortTop",
        ViewPortCenter: "viewPortCenter",
        ViewPortBottom: "viewPortBottom",
        ViewPortIfOutside: "viewPortIfOutside"
    }, e.RawUnit = {
        Line: "line",
        WrappedLine: "wrappedLine",
        Character: "character",
        HalfLine: "halfLine"
    };
    function n(s) {
        if (!s.to) return null;
        let o;
        switch(s.to){
            case e.RawDirection.Left:
                o = 0;
                break;
            case e.RawDirection.Right:
                o = 1;
                break;
            case e.RawDirection.Up:
                o = 2;
                break;
            case e.RawDirection.Down:
                o = 3;
                break;
            case e.RawDirection.PrevBlankLine:
                o = 4;
                break;
            case e.RawDirection.NextBlankLine:
                o = 5;
                break;
            case e.RawDirection.WrappedLineStart:
                o = 6;
                break;
            case e.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
                o = 7;
                break;
            case e.RawDirection.WrappedLineColumnCenter:
                o = 8;
                break;
            case e.RawDirection.WrappedLineEnd:
                o = 9;
                break;
            case e.RawDirection.WrappedLineLastNonWhitespaceCharacter:
                o = 10;
                break;
            case e.RawDirection.ViewPortTop:
                o = 11;
                break;
            case e.RawDirection.ViewPortBottom:
                o = 13;
                break;
            case e.RawDirection.ViewPortCenter:
                o = 12;
                break;
            case e.RawDirection.ViewPortIfOutside:
                o = 14;
                break;
            default:
                return null;
        }
        let a = 0;
        switch(s.by){
            case e.RawUnit.Line:
                a = 1;
                break;
            case e.RawUnit.WrappedLine:
                a = 2;
                break;
            case e.RawUnit.Character:
                a = 3;
                break;
            case e.RawUnit.HalfLine:
                a = 4;
                break;
        }
        return {
            direction: o,
            unit: a,
            select: !!s.select,
            value: s.value || 1
        };
    }
    e.parse = n;
    let i;
    ((s)=>{
        s[s.Left = 0] = "Left", s[s.Right = 1] = "Right", s[s.Up = 2] = "Up", s[s.Down = 3] = "Down", s[s.PrevBlankLine = 4] = "PrevBlankLine", s[s.NextBlankLine = 5] = "NextBlankLine", s[s.WrappedLineStart = 6] = "WrappedLineStart", s[s.WrappedLineFirstNonWhitespaceCharacter = 7] = "WrappedLineFirstNonWhitespaceCharacter", s[s.WrappedLineColumnCenter = 8] = "WrappedLineColumnCenter", s[s.WrappedLineEnd = 9] = "WrappedLineEnd", s[s.WrappedLineLastNonWhitespaceCharacter = 10] = "WrappedLineLastNonWhitespaceCharacter", s[s.ViewPortTop = 11] = "ViewPortTop", s[s.ViewPortCenter = 12] = "ViewPortCenter", s[s.ViewPortBottom = 13] = "ViewPortBottom", s[s.ViewPortIfOutside = 14] = "ViewPortIfOutside";
    })(i = e.Direction || (e.Direction = {}));
    let r;
    ((s)=>{
        s[s.None = 0] = "None", s[s.Line = 1] = "Line", s[s.WrappedLine = 2] = "WrappedLine", s[s.Character = 3] = "Character", s[s.HalfLine = 4] = "HalfLine";
    })(r = e.Unit || (e.Unit = {}));
})(bf || (bf = {}));

}
