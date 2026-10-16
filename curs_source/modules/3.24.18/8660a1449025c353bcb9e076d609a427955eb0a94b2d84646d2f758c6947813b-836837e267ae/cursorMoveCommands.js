import { Ov, Yo, dP, wf, zR } from "./Iwo.js";
import { O1, swe, wQ } from "./cursorCommon.js";
import { Z7o, mO } from "./cursorMoveOperations.js";
import { gW, nwr } from "./cursorWordOperations.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var Lj, K_;
export { K_, Lj };
var __wakaru_iUo_initialized = false;
export function iUo() {
if (__wakaru_iUo_initialized) return;
__wakaru_iUo_initialized = true;
"use strict";
E(), To(), swe(), Z7o(), nwr(), jc(), Qs(), Lj = class {
    static addCursorDown(t, e, n) {
        const i = [];
        let r = 0;
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            i[r++] = new O1(a.modelState, a.viewState), n ? i[r++] = O1.fromModelState(mO.translateDown(t.cursorConfig, t.model, a.modelState)) : i[r++] = O1.fromViewState(mO.translateDown(t.cursorConfig, t, a.viewState));
        }
        return i;
    }
    static addCursorUp(t, e, n) {
        const i = [];
        let r = 0;
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            i[r++] = new O1(a.modelState, a.viewState), n ? i[r++] = O1.fromModelState(mO.translateUp(t.cursorConfig, t.model, a.modelState)) : i[r++] = O1.fromViewState(mO.translateUp(t.cursorConfig, t, a.viewState));
        }
        return i;
    }
    static moveToBeginningOfLine(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            i[r] = this._moveToLineStart(t, o, n);
        }
        return i;
    }
    static _moveToLineStart(t, e, n) {
        const i = e.viewState.position.column, r = e.modelState.position.column, s = i === r, o = e.viewState.position.lineNumber, a = t.getLineFirstNonWhitespaceColumn(o);
        return !s && !(i === a) ? this._moveToLineStartByView(t, e, n) : this._moveToLineStartByModel(t, e, n);
    }
    static _moveToLineStartByView(t, e, n) {
        return O1.fromViewState(mO.moveToBeginningOfLine(t.cursorConfig, t, e.viewState, n));
    }
    static _moveToLineStartByModel(t, e, n) {
        return O1.fromModelState(mO.moveToBeginningOfLine(t.cursorConfig, t.model, e.modelState, n));
    }
    static moveToEndOfLine(t, e, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = this._moveToLineEnd(t, a, n, i);
        }
        return r;
    }
    static _moveToLineEnd(t, e, n, i) {
        const r = e.viewState.position, s = t.getLineMaxColumn(r.lineNumber), o = r.column === s, a = e.modelState.position, l = t.model.getLineMaxColumn(a.lineNumber), c = s - r.column === l - a.column;
        return o || c ? this._moveToLineEndByModel(t, e, n, i) : this._moveToLineEndByView(t, e, n, i);
    }
    static _moveToLineEndByView(t, e, n, i) {
        return O1.fromViewState(mO.moveToEndOfLine(t.cursorConfig, t, e.viewState, n, i));
    }
    static _moveToLineEndByModel(t, e, n, i) {
        return O1.fromModelState(mO.moveToEndOfLine(t.cursorConfig, t.model, e.modelState, n, i));
    }
    static expandLineSelection(t, e) {
        const n = [];
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i], o = s.modelState.selection.startLineNumber, a = t.model.getLineCount();
            let l = s.modelState.selection.endLineNumber, c;
            l === a ? c = t.model.getLineMaxColumn(a) : (l++, c = 1), n[i] = O1.fromModelState(new wQ(new qt(o, 1, o, 1), 0, 0, new er(l, c), 0));
        }
        return n;
    }
    static moveToBeginningOfBuffer(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            i[r] = O1.fromModelState(mO.moveToBeginningOfBuffer(t.cursorConfig, t.model, o.modelState, n));
        }
        return i;
    }
    static moveToEndOfBuffer(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            i[r] = O1.fromModelState(mO.moveToEndOfBuffer(t.cursorConfig, t.model, o.modelState, n));
        }
        return i;
    }
    static selectAll(t, e) {
        const n = t.model.getLineCount(), i = t.model.getLineMaxColumn(n);
        return O1.fromModelState(new wQ(new qt(1, 1, 1, 1), 0, 0, new er(n, i), 0));
    }
    static line(t, e, n, i, r) {
        const s = t.model.validatePosition(i), o = r ? t.coordinatesConverter.validateViewPosition(new er(r.lineNumber, r.column), s) : t.coordinatesConverter.convertModelPositionToViewPosition(s);
        if (!n) {
            const l = t.model.getLineCount();
            let c = s.lineNumber + 1, u = 1;
            return c > l && (c = l, u = t.model.getLineMaxColumn(c)), O1.fromModelState(new wQ(new qt(s.lineNumber, 1, c, u), 2, 0, new er(c, u), 0));
        }
        const a = e.modelState.selectionStart.getStartPosition().lineNumber;
        if (s.lineNumber < a) return O1.fromViewState(e.viewState.move(!0, o.lineNumber, 1, 0));
        if (s.lineNumber > a) {
            const l = t.getLineCount();
            let c = o.lineNumber + 1, u = 1;
            return c > l && (c = l, u = t.getLineMaxColumn(c)), O1.fromViewState(e.viewState.move(!0, c, u, 0));
        } else {
            const l = e.modelState.selectionStart.getEndPosition();
            return O1.fromModelState(e.modelState.move(!0, l.lineNumber, l.column, 0));
        }
    }
    static word(t, e, n, i) {
        const r = t.model.validatePosition(i);
        return O1.fromModelState(gW.word(t.cursorConfig, t.model, e.modelState, n, r));
    }
    static cancelSelection(t, e) {
        if (!e.modelState.hasSelection()) return new O1(e.modelState, e.viewState);
        const n = e.viewState.position.lineNumber, i = e.viewState.position.column;
        return O1.fromViewState(new wQ(new qt(n, i, n, i), 0, 0, new er(n, i), 0));
    }
    static moveTo(t, e, n, i, r) {
        if (n) {
            if (e.modelState.selectionStartKind === 1) return this.word(t, e, n, i);
            if (e.modelState.selectionStartKind === 2) return this.line(t, e, n, i, r);
        }
        const s = t.model.validatePosition(i), o = r ? t.coordinatesConverter.validateViewPosition(new er(r.lineNumber, r.column), s) : t.coordinatesConverter.convertModelPositionToViewPosition(s);
        return O1.fromViewState(e.viewState.move(n, o.lineNumber, o.column, 0));
    }
    static simpleMove(t, e, n, i, r, s) {
        switch(n){
            case K_.Direction.Left:
                return s === K_.Unit.HalfLine ? this._moveHalfLineLeft(t, e, i) : this._moveLeft(t, e, i, r);
            case K_.Direction.Right:
                return s === K_.Unit.HalfLine ? this._moveHalfLineRight(t, e, i) : this._moveRight(t, e, i, r);
            case K_.Direction.Up:
                return s === K_.Unit.WrappedLine ? this._moveUpByViewLines(t, e, i, r) : this._moveUpByModelLines(t, e, i, r);
            case K_.Direction.Down:
                return s === K_.Unit.WrappedLine ? this._moveDownByViewLines(t, e, i, r) : this._moveDownByModelLines(t, e, i, r);
            case K_.Direction.PrevBlankLine:
                return s === K_.Unit.WrappedLine ? e.map((o)=>O1.fromViewState(mO.moveToPrevBlankLine(t.cursorConfig, t, o.viewState, i))) : e.map((o)=>O1.fromModelState(mO.moveToPrevBlankLine(t.cursorConfig, t.model, o.modelState, i)));
            case K_.Direction.NextBlankLine:
                return s === K_.Unit.WrappedLine ? e.map((o)=>O1.fromViewState(mO.moveToNextBlankLine(t.cursorConfig, t, o.viewState, i))) : e.map((o)=>O1.fromModelState(mO.moveToNextBlankLine(t.cursorConfig, t.model, o.modelState, i)));
            case K_.Direction.WrappedLineStart:
                return this._moveToViewMinColumn(t, e, i);
            case K_.Direction.WrappedLineFirstNonWhitespaceCharacter:
                return this._moveToViewFirstNonWhitespaceColumn(t, e, i);
            case K_.Direction.WrappedLineColumnCenter:
                return this._moveToViewCenterColumn(t, e, i);
            case K_.Direction.WrappedLineEnd:
                return this._moveToViewMaxColumn(t, e, i);
            case K_.Direction.WrappedLineLastNonWhitespaceCharacter:
                return this._moveToViewLastNonWhitespaceColumn(t, e, i);
            default:
                return null;
        }
    }
    static viewportMove(t, e, n, i, r) {
        const s = t.getCompletelyVisibleViewRange(), o = t.coordinatesConverter.convertViewRangeToModelRange(s);
        switch(n){
            case K_.Direction.ViewPortTop:
                {
                    const a = this._firstLineNumberInRange(t.model, o, r), l = t.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(t, e[0], i, a, l)
                    ];
                }
            case K_.Direction.ViewPortBottom:
                {
                    const a = this._lastLineNumberInRange(t.model, o, r), l = t.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(t, e[0], i, a, l)
                    ];
                }
            case K_.Direction.ViewPortCenter:
                {
                    const a = Math.round((o.startLineNumber + o.endLineNumber) / 2), l = t.model.getLineFirstNonWhitespaceColumn(a);
                    return [
                        this._moveToModelPosition(t, e[0], i, a, l)
                    ];
                }
            case K_.Direction.ViewPortIfOutside:
                {
                    const a = [];
                    for(let l = 0, c = e.length; l < c; l++){
                        const u = e[l];
                        a[l] = this.findPositionInViewportIfOutside(t, u, s, i);
                    }
                    return a;
                }
            default:
                return null;
        }
    }
    static findPositionInViewportIfOutside(t, e, n, i) {
        const r = e.viewState.position.lineNumber;
        if (n.startLineNumber <= r && r <= n.endLineNumber - 1) return new O1(e.modelState, e.viewState);
        {
            let s;
            r > n.endLineNumber - 1 ? s = n.endLineNumber - 1 : r < n.startLineNumber ? s = n.startLineNumber : s = r;
            const o = mO.vertical(t.cursorConfig, t, r, e.viewState.position.column, e.viewState.leftoverVisibleColumns, s, !1);
            return O1.fromViewState(e.viewState.move(i, o.lineNumber, o.column, o.leftoverVisibleColumns));
        }
    }
    static _firstLineNumberInRange(t, e, n) {
        let i = e.startLineNumber;
        return e.startColumn !== t.getLineMinColumn(i) && i++, Math.min(e.endLineNumber, i + n - 1);
    }
    static _lastLineNumberInRange(t, e, n) {
        let i = e.startLineNumber;
        return e.startColumn !== t.getLineMinColumn(i) && i++, Math.max(i, e.endLineNumber - n + 1);
    }
    static _moveLeft(t, e, n, i) {
        return e.map((r)=>O1.fromViewState(mO.moveLeft(t.cursorConfig, t, r.viewState, n, i)));
    }
    static _moveHalfLineLeft(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = Math.round(t.getLineLength(a) / 2);
            i[r] = O1.fromViewState(mO.moveLeft(t.cursorConfig, t, o.viewState, n, l));
        }
        return i;
    }
    static _moveRight(t, e, n, i) {
        return e.map((r)=>O1.fromViewState(mO.moveRight(t.cursorConfig, t, r.viewState, n, i)));
    }
    static _moveHalfLineRight(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = Math.round(t.getLineLength(a) / 2);
            i[r] = O1.fromViewState(mO.moveRight(t.cursorConfig, t, o.viewState, n, l));
        }
        return i;
    }
    static _moveDownByViewLines(t, e, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = O1.fromViewState(mO.moveDown(t.cursorConfig, t, a.viewState, n, i));
        }
        return r;
    }
    static _moveDownByModelLines(t, e, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = O1.fromModelState(mO.moveDown(t.cursorConfig, t.model, a.modelState, n, i));
        }
        return r;
    }
    static _moveUpByViewLines(t, e, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = O1.fromViewState(mO.moveUp(t.cursorConfig, t, a.viewState, n, i));
        }
        return r;
    }
    static _moveUpByModelLines(t, e, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = O1.fromModelState(mO.moveUp(t.cursorConfig, t.model, a.modelState, n, i));
        }
        return r;
    }
    static _moveToViewPosition(t, e, n, i, r) {
        return O1.fromViewState(e.viewState.move(n, i, r, 0));
    }
    static _moveToModelPosition(t, e, n, i, r) {
        return O1.fromModelState(e.modelState.move(n, i, r, 0));
    }
    static _moveToViewMinColumn(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = t.getLineMinColumn(a);
            i[r] = this._moveToViewPosition(t, o, n, a, l);
        }
        return i;
    }
    static _moveToViewFirstNonWhitespaceColumn(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = t.getLineFirstNonWhitespaceColumn(a);
            i[r] = this._moveToViewPosition(t, o, n, a, l);
        }
        return i;
    }
    static _moveToViewCenterColumn(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = Math.round((t.getLineMaxColumn(a) + t.getLineMinColumn(a)) / 2);
            i[r] = this._moveToViewPosition(t, o, n, a, l);
        }
        return i;
    }
    static _moveToViewMaxColumn(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = t.getLineMaxColumn(a);
            i[r] = this._moveToViewPosition(t, o, n, a, l);
        }
        return i;
    }
    static _moveToViewLastNonWhitespaceColumn(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = o.viewState.position.lineNumber, l = t.getLineLastNonWhitespaceColumn(a);
            i[r] = this._moveToViewPosition(t, o, n, a, l);
        }
        return i;
    }
}, ((t)=>{
    const e = function(s) {
        if (!wf(s)) return !1;
        const o = s;
        return !(!Yo(o.to) || !Ov(o.select) && !dP(o.select) || !Ov(o.by) && !Yo(o.by) || !Ov(o.value) && !zR(o.value));
    };
    t.metadata = {
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
                constraint: e,
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
    }, t.RawDirection = {
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
    }, t.RawUnit = {
        Line: "line",
        WrappedLine: "wrappedLine",
        Character: "character",
        HalfLine: "halfLine"
    };
    function n(s) {
        if (!s.to) return null;
        let o;
        switch(s.to){
            case t.RawDirection.Left:
                o = 0;
                break;
            case t.RawDirection.Right:
                o = 1;
                break;
            case t.RawDirection.Up:
                o = 2;
                break;
            case t.RawDirection.Down:
                o = 3;
                break;
            case t.RawDirection.PrevBlankLine:
                o = 4;
                break;
            case t.RawDirection.NextBlankLine:
                o = 5;
                break;
            case t.RawDirection.WrappedLineStart:
                o = 6;
                break;
            case t.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
                o = 7;
                break;
            case t.RawDirection.WrappedLineColumnCenter:
                o = 8;
                break;
            case t.RawDirection.WrappedLineEnd:
                o = 9;
                break;
            case t.RawDirection.WrappedLineLastNonWhitespaceCharacter:
                o = 10;
                break;
            case t.RawDirection.ViewPortTop:
                o = 11;
                break;
            case t.RawDirection.ViewPortBottom:
                o = 13;
                break;
            case t.RawDirection.ViewPortCenter:
                o = 12;
                break;
            case t.RawDirection.ViewPortIfOutside:
                o = 14;
                break;
            default:
                return null;
        }
        let a = 0;
        switch(s.by){
            case t.RawUnit.Line:
                a = 1;
                break;
            case t.RawUnit.WrappedLine:
                a = 2;
                break;
            case t.RawUnit.Character:
                a = 3;
                break;
            case t.RawUnit.HalfLine:
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
    t.parse = n;
    let i;
    ((s)=>{
        s[s.Left = 0] = "Left", s[s.Right = 1] = "Right", s[s.Up = 2] = "Up", s[s.Down = 3] = "Down", s[s.PrevBlankLine = 4] = "PrevBlankLine", s[s.NextBlankLine = 5] = "NextBlankLine", s[s.WrappedLineStart = 6] = "WrappedLineStart", s[s.WrappedLineFirstNonWhitespaceCharacter = 7] = "WrappedLineFirstNonWhitespaceCharacter", s[s.WrappedLineColumnCenter = 8] = "WrappedLineColumnCenter", s[s.WrappedLineEnd = 9] = "WrappedLineEnd", s[s.WrappedLineLastNonWhitespaceCharacter = 10] = "WrappedLineLastNonWhitespaceCharacter", s[s.ViewPortTop = 11] = "ViewPortTop", s[s.ViewPortCenter = 12] = "ViewPortCenter", s[s.ViewPortBottom = 13] = "ViewPortBottom", s[s.ViewPortIfOutside = 14] = "ViewPortIfOutside";
    })(i = t.Direction || (t.Direction = {}));
    let r;
    ((s)=>{
        s[s.None = 0] = "None", s[s.Line = 1] = "Line", s[s.WrappedLine = 2] = "WrappedLine", s[s.Character = 3] = "Character", s[s.HalfLine = 4] = "HalfLine";
    })(r = t.Unit || (t.Unit = {}));
})(K_ || (K_ = {}));

}
