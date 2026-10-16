import { S, Sx, T0, Xr, dp, om } from "./HVr.js";
import { hS } from "./aria.js";
import { i5, n_ } from "./browser_2.js";
import { Ja, md } from "./codeEditorService.js";
import { dn, he } from "./contextkey.js";
import { apg, b2t } from "./cursorColumnSelection.js";
import { ire, wb } from "./cursorCommon.js";
import { pfi, qht } from "./cursorDeleteOperations.js";
import { a5, bf, uXr } from "./cursorMoveCommands.js";
import { Ofi, hgn } from "./cursorTypeEditOperations.js";
import { $Ae, Ffi } from "./cursorTypeOperations.js";
import { en } from "./dom_2.js";
import { gd, gn } from "./editorContextKeys.js";
import { CBe, i2, jmn, nXr, wBe, yc } from "./editorExtensions.js";
import { BXr } from "./editorHistoryOwner.js";
import { M2t, pgn } from "./editorHostPolicy.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { eb } from "./keybindingsRegistry.js";
import { rt } from "./nls.js";
import { Yn, ya } from "./position.js";
import { Khg, L2t, Pc, Qht, WS, lLc, sLc, yI } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var zy, dR, J4, N2t, Bfi, IO, dLc, HAe, UXr;
export { Bfi, HAe, IO, J4, N2t, UXr, dLc, dR, zy };
var __wakaru_sze_initialized = false;
export function sze() {
if (__wakaru_sze_initialized) return;
__wakaru_sze_initialized = true;
"use strict";
x(), rt(), n_(), Pr(), gr(), hS(), yc(), md(), apg(), ire(), pfi(), uXr(), Ffi(), ya(), qi(), gd(), dn(), eb(), en(), pgn(), Ofi(), BXr(), zy = 0, dR = class extends i2 {
    runEditorCommand(e, t, n) {
        const i = t._getViewModel();
        i && this.runCoreEditorCommand(i, n || {});
    }
}, ((e)=>{
    const t = function(s) {
        if (!dp(s)) return !1;
        const o = s;
        return !(!Xr(o.to) || !om(o.by) && !Xr(o.by) || !om(o.value) && !T0(o.value) || !om(o.revealCursor) && !Sx(o.revealCursor));
    };
    e.metadata = {
        description: "Scroll editor in the given direction",
        args: [
            {
                name: "Editor scroll argument object",
                description: "Property-value pairs that can be passed through this argument:\n					* 'to': A mandatory direction value.\n						```\n						'up', 'down'\n						```\n					* 'by': Unit to move. Default is computed based on 'to' value.\n						```\n						'line', 'wrappedLine', 'page', 'halfPage', 'editor'\n						```\n					* 'value': Number of units to move. Default is '1'.\n					* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n				",
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
                                "up",
                                "down"
                            ]
                        },
                        by: {
                            type: "string",
                            enum: [
                                "line",
                                "wrappedLine",
                                "page",
                                "halfPage",
                                "editor"
                            ]
                        },
                        value: {
                            type: "number",
                            default: 1
                        },
                        revealCursor: {
                            type: "boolean"
                        }
                    }
                }
            }
        ]
    }, e.RawDirection = {
        Up: "up",
        Right: "right",
        Down: "down",
        Left: "left"
    }, e.RawUnit = {
        Line: "line",
        WrappedLine: "wrappedLine",
        Page: "page",
        HalfPage: "halfPage",
        Editor: "editor",
        Column: "column"
    };
    function n(s) {
        let o;
        switch(s.to){
            case e.RawDirection.Up:
                o = 1;
                break;
            case e.RawDirection.Right:
                o = 2;
                break;
            case e.RawDirection.Down:
                o = 3;
                break;
            case e.RawDirection.Left:
                o = 4;
                break;
            default:
                return null;
        }
        let a;
        switch(s.by){
            case e.RawUnit.Line:
                a = 1;
                break;
            case e.RawUnit.WrappedLine:
                a = 2;
                break;
            case e.RawUnit.Page:
                a = 3;
                break;
            case e.RawUnit.HalfPage:
                a = 4;
                break;
            case e.RawUnit.Editor:
                a = 5;
                break;
            case e.RawUnit.Column:
                a = 6;
                break;
            default:
                a = 2;
        }
        const c = Math.floor(s.value || 1), l = !!s.revealCursor;
        return {
            direction: o,
            unit: a,
            value: c,
            revealCursor: l,
            select: !!s.select
        };
    }
    e.parse = n;
    let i;
    ((s)=>{
        s[s.Up = 1] = "Up", s[s.Right = 2] = "Right", s[s.Down = 3] = "Down", s[s.Left = 4] = "Left";
    })(i = e.Direction || (e.Direction = {}));
    let r;
    ((s)=>{
        s[s.Line = 1] = "Line", s[s.WrappedLine = 2] = "WrappedLine", s[s.Page = 3] = "Page", s[s.HalfPage = 4] = "HalfPage", s[s.Editor = 5] = "Editor", s[s.Column = 6] = "Column";
    })(r = e.Unit || (e.Unit = {}));
})(J4 || (J4 = {})), ((e)=>{
    const t = function(n) {
        if (!dp(n)) return !1;
        const i = n;
        return !(!T0(i.lineNumber) && !Xr(i.lineNumber) || !om(i.at) && !Xr(i.at));
    };
    e.metadata = {
        description: "Reveal the given line at the given logical position",
        args: [
            {
                name: "Reveal line argument object",
                description: "Property-value pairs that can be passed through this argument:\n					* 'lineNumber': A mandatory line number value.\n					* 'at': Logical position at which line has to be revealed.\n						```\n						'top', 'center', 'bottom'\n						```\n				",
                constraint: t,
                schema: {
                    type: "object",
                    required: [
                        "lineNumber"
                    ],
                    properties: {
                        lineNumber: {
                            type: [
                                "number",
                                "string"
                            ]
                        },
                        at: {
                            type: "string",
                            enum: [
                                "top",
                                "center",
                                "bottom"
                            ]
                        }
                    }
                }
            }
        ]
    }, e.RawAtArgument = {
        Top: "top",
        Center: "center",
        Bottom: "bottom"
    };
})(N2t || (N2t = {})), Bfi = class {
    constructor(e){
        e.addImplementation(1e4, "code-editor", (t, n)=>{
            const i = t.get(Ja).getFocusedCodeEditor();
            return i && i.hasTextFocus() ? this._runEditorCommand(t, i, n) : !1;
        }), e.addImplementation(1e3, "generic-dom-input-textarea", (t, n)=>{
            const i = WS(), r = t.get(M2t).treatsContentEditableAsNativeTextInput;
            if (i && Khg({
                element: i,
                includeContentEditable: r
            })) return this.runDOMCommand(i), !0;
            const s = i?.ownerDocument, o = s ? sLc(s) : void 0;
            return o ? (this.runDOMCommand(o), !0) : !1;
        }), e.addImplementation(0, "generic-dom", (t, n)=>{
            const i = t.get(Ja).getActiveCodeEditor();
            return i ? (i.focus(), this._runEditorCommand(t, i, n)) : !1;
        });
    }
    _runEditorCommand(e, t, n) {
        const i = this.runEditorCommand(e, t, n);
        return i || !0;
    }
}, ((e)=>{
    class t extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            if (!A.position) return;
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, [
                a5.moveTo(E, E.getPrimaryCursorState(), this._inSelectionMode, A.position, A.viewPosition)
            ]) && A.revealType !== 2 && E.revealAllCursors(A.source, !0, !0);
        }
    }
    e.MoveTo = Pc(new t({
        id: "_moveTo",
        inSelectionMode: !1,
        precondition: void 0
    })), e.MoveToSelect = Pc(new t({
        id: "_moveToSelect",
        inSelectionMode: !0,
        precondition: void 0
    }));
    class n extends dR {
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement();
            const R = this._getColumnSelectResult(E, E.getPrimaryCursorState(), E.getCursorColumnSelectData(), A);
            R !== null && (E.setCursorStates(A.source, 3, R.viewStates.map((D)=>wb.fromViewState(D))), E.setCursorColumnSelectData({
                isReal: !0,
                fromViewLineNumber: R.fromLineNumber,
                fromViewVisualColumn: R.fromVisualColumn,
                toViewLineNumber: R.toLineNumber,
                toViewVisualColumn: R.toVisualColumn
            }), R.reversed ? E.revealTopMostCursor(A.source) : E.revealBottomMostCursor(A.source));
        }
    }
    e.ColumnSelect = Pc(new class extends n {
        constructor(){
            super({
                id: "columnSelect",
                precondition: void 0
            });
        }
        _getColumnSelectResult(T, E, A, R) {
            if (typeof R.position > "u" || typeof R.viewPosition > "u" || typeof R.mouseColumn > "u") return null;
            const D = T.model.validatePosition(R.position), P = T.coordinatesConverter.validateViewPosition(new Yn(R.viewPosition.lineNumber, R.viewPosition.column), D), N = R.doColumnSelect ? A.fromViewLineNumber : P.lineNumber, O = R.doColumnSelect ? A.fromViewVisualColumn : R.mouseColumn - 1;
            return b2t.columnSelect(T.cursorConfig, T, N, O, P.lineNumber, R.mouseColumn - 1);
        }
    }), e.CursorColumnSelectLeft = Pc(new class extends n {
        constructor(){
            super({
                id: "cursorColumnSelectLeft",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.LeftArrow,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(T, E, A, R) {
            return b2t.columnSelectLeft(T.cursorConfig, T, A);
        }
    }), e.CursorColumnSelectRight = Pc(new class extends n {
        constructor(){
            super({
                id: "cursorColumnSelectRight",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.RightArrow,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(T, E, A, R) {
            return b2t.columnSelectRight(T.cursorConfig, T, A);
        }
    });
    class i extends n {
        constructor(E){
            super(E), this._isPaged = E.isPaged;
        }
        _getColumnSelectResult(E, A, R, D) {
            return b2t.columnSelectUp(E.cursorConfig, E, R, this._isPaged);
        }
    }
    e.CursorColumnSelectUp = Pc(new i({
        isPaged: !1,
        id: "cursorColumnSelectUp",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.UpArrow,
            linux: {
                primary: 0
            }
        }
    })), e.CursorColumnSelectPageUp = Pc(new i({
        isPaged: !0,
        id: "cursorColumnSelectPageUp",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.PageUp,
            linux: {
                primary: 0
            }
        }
    }));
    class r extends n {
        constructor(E){
            super(E), this._isPaged = E.isPaged;
        }
        _getColumnSelectResult(E, A, R, D) {
            return b2t.columnSelectDown(E.cursorConfig, E, R, this._isPaged);
        }
    }
    e.CursorColumnSelectDown = Pc(new r({
        isPaged: !1,
        id: "cursorColumnSelectDown",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.DownArrow,
            linux: {
                primary: 0
            }
        }
    })), e.CursorColumnSelectPageDown = Pc(new r({
        isPaged: !0,
        id: "cursorColumnSelectPageDown",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | Ie.Alt | fe.PageDown,
            linux: {
                primary: 0
            }
        }
    }));
    class s extends dR {
        constructor(){
            super({
                id: "cursorMove",
                precondition: void 0,
                metadata: bf.metadata
            });
        }
        runCoreEditorCommand(E, A) {
            const R = bf.parse(A);
            R && this._runCursorMove(E, A.source, R);
        }
        _runCursorMove(E, A, R) {
            E.model.pushStackElement(), E.setCursorStates(A, 3, s._move(E, E.getCursorStates(), R)), E.revealAllCursors(A, !0);
        }
        static _move(E, A, R) {
            const D = R.select, P = R.value;
            switch(R.direction){
                case bf.Direction.Left:
                case bf.Direction.Right:
                case bf.Direction.Up:
                case bf.Direction.Down:
                case bf.Direction.PrevBlankLine:
                case bf.Direction.NextBlankLine:
                case bf.Direction.WrappedLineStart:
                case bf.Direction.WrappedLineFirstNonWhitespaceCharacter:
                case bf.Direction.WrappedLineColumnCenter:
                case bf.Direction.WrappedLineEnd:
                case bf.Direction.WrappedLineLastNonWhitespaceCharacter:
                    return a5.simpleMove(E, A, R.direction, D, P, R.unit);
                case bf.Direction.ViewPortTop:
                case bf.Direction.ViewPortBottom:
                case bf.Direction.ViewPortCenter:
                case bf.Direction.ViewPortIfOutside:
                    return a5.viewportMove(E, A, R.direction, D, P);
                default:
                    return null;
            }
        }
    }
    e.CursorMoveImpl = s, e.CursorMove = Pc(new s);
    let o;
    ((T)=>{
        T[T.PAGE_SIZE_MARKER = -1] = "PAGE_SIZE_MARKER";
    })(o || (o = {}));
    class a extends dR {
        constructor(E){
            super(E), this._staticArgs = E.args;
        }
        runCoreEditorCommand(E, A) {
            let R = this._staticArgs;
            this._staticArgs.value === -1 && (R = {
                direction: this._staticArgs.direction,
                unit: this._staticArgs.unit,
                select: this._staticArgs.select,
                value: A.pageSize || E.cursorConfig.pageSize
            }), E.model.pushStackElement(), E.setCursorStates(A.source, 3, a5.simpleMove(E, E.getCursorStates(), R.direction, R.select, R.value, R.unit)), E.revealAllCursors(A.source, !0);
        }
    }
    e.CursorLeft = Pc(new a({
        args: {
            direction: bf.Direction.Left,
            unit: bf.Unit.None,
            select: !1,
            value: 1
        },
        id: "cursorLeft",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.LeftArrow,
            mac: {
                primary: fe.LeftArrow,
                secondary: [
                    Ie.WinCtrl | fe.KeyB
                ]
            }
        }
    })), e.CursorLeftSelect = Pc(new a({
        args: {
            direction: bf.Direction.Left,
            unit: bf.Unit.None,
            select: !0,
            value: 1
        },
        id: "cursorLeftSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.LeftArrow
        }
    })), e.CursorRight = Pc(new a({
        args: {
            direction: bf.Direction.Right,
            unit: bf.Unit.None,
            select: !1,
            value: 1
        },
        id: "cursorRight",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.RightArrow,
            mac: {
                primary: fe.RightArrow,
                secondary: [
                    Ie.WinCtrl | fe.KeyF
                ]
            }
        }
    })), e.CursorRightSelect = Pc(new a({
        args: {
            direction: bf.Direction.Right,
            unit: bf.Unit.None,
            select: !0,
            value: 1
        },
        id: "cursorRightSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.RightArrow
        }
    })), e.CursorUp = Pc(new a({
        args: {
            direction: bf.Direction.Up,
            unit: bf.Unit.WrappedLine,
            select: !1,
            value: 1
        },
        id: "cursorUp",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.UpArrow,
            mac: {
                primary: fe.UpArrow,
                secondary: [
                    Ie.WinCtrl | fe.KeyP
                ]
            }
        }
    })), e.CursorUpSelect = Pc(new a({
        args: {
            direction: bf.Direction.Up,
            unit: bf.Unit.WrappedLine,
            select: !0,
            value: 1
        },
        id: "cursorUpSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.UpArrow,
            secondary: [
                Ie.CtrlCmd | Ie.Shift | fe.UpArrow
            ],
            mac: {
                primary: Ie.Shift | fe.UpArrow
            },
            linux: {
                primary: Ie.Shift | fe.UpArrow
            }
        }
    })), e.CursorPageUp = Pc(new a({
        args: {
            direction: bf.Direction.Up,
            unit: bf.Unit.WrappedLine,
            select: !1,
            value: -1
        },
        id: "cursorPageUp",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.PageUp
        }
    })), e.CursorPageUpSelect = Pc(new a({
        args: {
            direction: bf.Direction.Up,
            unit: bf.Unit.WrappedLine,
            select: !0,
            value: -1
        },
        id: "cursorPageUpSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.PageUp
        }
    })), e.CursorDown = Pc(new a({
        args: {
            direction: bf.Direction.Down,
            unit: bf.Unit.WrappedLine,
            select: !1,
            value: 1
        },
        id: "cursorDown",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.DownArrow,
            mac: {
                primary: fe.DownArrow,
                secondary: [
                    Ie.WinCtrl | fe.KeyN
                ]
            }
        }
    })), e.CursorDownSelect = Pc(new a({
        args: {
            direction: bf.Direction.Down,
            unit: bf.Unit.WrappedLine,
            select: !0,
            value: 1
        },
        id: "cursorDownSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.DownArrow,
            secondary: [
                Ie.CtrlCmd | Ie.Shift | fe.DownArrow
            ],
            mac: {
                primary: Ie.Shift | fe.DownArrow
            },
            linux: {
                primary: Ie.Shift | fe.DownArrow
            }
        }
    })), e.CursorPageDown = Pc(new a({
        args: {
            direction: bf.Direction.Down,
            unit: bf.Unit.WrappedLine,
            select: !1,
            value: -1
        },
        id: "cursorPageDown",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.PageDown
        }
    })), e.CursorPageDownSelect = Pc(new a({
        args: {
            direction: bf.Direction.Down,
            unit: bf.Unit.WrappedLine,
            select: !0,
            value: -1
        },
        id: "cursorPageDownSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.PageDown
        }
    })), e.CreateCursor = Pc(new class extends dR {
        constructor(){
            super({
                id: "createCursor",
                precondition: void 0
            });
        }
        runCoreEditorCommand(T, E) {
            if (!E.position) return;
            let A;
            E.wholeLine ? A = a5.line(T, T.getPrimaryCursorState(), !1, E.position, E.viewPosition) : A = a5.moveTo(T, T.getPrimaryCursorState(), !1, E.position, E.viewPosition);
            const R = T.getCursorStates();
            if (R.length > 1) {
                const D = A.modelState ? A.modelState.position : null, P = A.viewState ? A.viewState.position : null;
                for(let N = 0, O = R.length; N < O; N++){
                    const F = R[N];
                    if (!(D && !F.modelState.selection.containsPosition(D)) && !(P && !F.viewState.selection.containsPosition(P))) {
                        R.splice(N, 1), T.model.pushStackElement(), T.setCursorStates(E.source, 3, R);
                        return;
                    }
                }
            }
            R.push(A), T.model.pushStackElement(), T.setCursorStates(E.source, 3, R);
        }
    }), e.LastCursorMoveToSelect = Pc(new class extends dR {
        constructor(){
            super({
                id: "_lastCursorMoveToSelect",
                precondition: void 0
            });
        }
        runCoreEditorCommand(T, E) {
            if (!E.position) return;
            const A = T.getLastAddedCursorIndex(), R = T.getCursorStates(), D = R.slice(0);
            D[A] = a5.moveTo(T, R[A], !0, E.position, E.viewPosition), T.model.pushStackElement(), T.setCursorStates(E.source, 3, D);
        }
    });
    class c extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, a5.moveToBeginningOfLine(E, E.getCursorStates(), this._inSelectionMode)), E.revealAllCursors(A.source, !0);
        }
    }
    e.CursorHome = Pc(new c({
        inSelectionMode: !1,
        id: "cursorHome",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.Home,
            mac: {
                primary: fe.Home,
                secondary: [
                    Ie.CtrlCmd | fe.LeftArrow
                ]
            }
        }
    })), e.CursorHomeSelect = Pc(new c({
        inSelectionMode: !0,
        id: "cursorHomeSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.Home,
            mac: {
                primary: Ie.Shift | fe.Home,
                secondary: [
                    Ie.CtrlCmd | Ie.Shift | fe.LeftArrow
                ]
            }
        }
    }));
    class l extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, this._exec(E.getCursorStates())), E.revealAllCursors(A.source, !0);
        }
        _exec(E) {
            const A = [];
            for(let R = 0, D = E.length; R < D; R++){
                const P = E[R], N = P.modelState.position.lineNumber;
                A[R] = wb.fromModelState(P.modelState.move(this._inSelectionMode, N, 1, 0));
            }
            return A;
        }
    }
    e.CursorLineStart = Pc(new l({
        inSelectionMode: !1,
        id: "cursorLineStart",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: 0,
            mac: {
                primary: Ie.WinCtrl | fe.KeyA
            }
        }
    })), e.CursorLineStartSelect = Pc(new l({
        inSelectionMode: !0,
        id: "cursorLineStartSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: 0,
            mac: {
                primary: Ie.WinCtrl | Ie.Shift | fe.KeyA
            }
        }
    }));
    class u extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, a5.moveToEndOfLine(E, E.getCursorStates(), this._inSelectionMode, A.sticky || !1)), E.revealAllCursors(A.source, !0);
        }
    }
    e.CursorEnd = Pc(new u({
        inSelectionMode: !1,
        id: "cursorEnd",
        precondition: void 0,
        kbOpts: {
            args: {
                sticky: !1
            },
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: fe.End,
            mac: {
                primary: fe.End,
                secondary: [
                    Ie.CtrlCmd | fe.RightArrow
                ]
            }
        },
        metadata: {
            description: "Go to End",
            args: [
                {
                    name: "args",
                    schema: {
                        type: "object",
                        properties: {
                            sticky: {
                                description: S(187, null),
                                type: "boolean",
                                default: !1
                            }
                        }
                    }
                }
            ]
        }
    })), e.CursorEndSelect = Pc(new u({
        inSelectionMode: !0,
        id: "cursorEndSelect",
        precondition: void 0,
        kbOpts: {
            args: {
                sticky: !1
            },
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.Shift | fe.End,
            mac: {
                primary: Ie.Shift | fe.End,
                secondary: [
                    Ie.CtrlCmd | Ie.Shift | fe.RightArrow
                ]
            }
        },
        metadata: {
            description: "Select to End",
            args: [
                {
                    name: "args",
                    schema: {
                        type: "object",
                        properties: {
                            sticky: {
                                description: S(188, null),
                                type: "boolean",
                                default: !1
                            }
                        }
                    }
                }
            ]
        }
    }));
    class h extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, this._exec(E, E.getCursorStates())), E.revealAllCursors(A.source, !0);
        }
        _exec(E, A) {
            const R = [];
            for(let D = 0, P = A.length; D < P; D++){
                const N = A[D], O = N.modelState.position.lineNumber, F = E.model.getLineMaxColumn(O);
                R[D] = wb.fromModelState(N.modelState.move(this._inSelectionMode, O, F, 0));
            }
            return R;
        }
    }
    e.CursorLineEnd = Pc(new h({
        inSelectionMode: !1,
        id: "cursorLineEnd",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: 0,
            mac: {
                primary: Ie.WinCtrl | fe.KeyE
            }
        }
    })), e.CursorLineEndSelect = Pc(new h({
        inSelectionMode: !0,
        id: "cursorLineEndSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: 0,
            mac: {
                primary: Ie.WinCtrl | Ie.Shift | fe.KeyE
            }
        }
    }));
    class p extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, a5.moveToBeginningOfBuffer(E, E.getCursorStates(), this._inSelectionMode)), E.revealAllCursors(A.source, !0);
        }
    }
    e.CursorTop = Pc(new p({
        inSelectionMode: !1,
        id: "cursorTop",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | fe.Home,
            mac: {
                primary: Ie.CtrlCmd | fe.UpArrow
            }
        }
    })), e.CursorTopSelect = Pc(new p({
        inSelectionMode: !0,
        id: "cursorTopSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | fe.Home,
            mac: {
                primary: Ie.CtrlCmd | Ie.Shift | fe.UpArrow
            }
        }
    }));
    class g extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            E.model.pushStackElement(), E.setCursorStates(A.source, 3, a5.moveToEndOfBuffer(E, E.getCursorStates(), this._inSelectionMode)), E.revealAllCursors(A.source, !0);
        }
    }
    e.CursorBottom = Pc(new g({
        inSelectionMode: !1,
        id: "cursorBottom",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | fe.End,
            mac: {
                primary: Ie.CtrlCmd | fe.DownArrow
            }
        }
    })), e.CursorBottomSelect = Pc(new g({
        inSelectionMode: !0,
        id: "cursorBottomSelect",
        precondition: void 0,
        kbOpts: {
            weight: zy,
            kbExpr: gn.textInputFocus,
            primary: Ie.CtrlCmd | Ie.Shift | fe.End,
            mac: {
                primary: Ie.CtrlCmd | Ie.Shift | fe.DownArrow
            }
        }
    }));
    class f extends dR {
        constructor(){
            super({
                id: "editorScroll",
                precondition: void 0,
                metadata: J4.metadata
            });
        }
        determineScrollMethod(E) {
            const A = [
                6
            ], R = [
                1,
                2,
                3,
                4,
                5,
                6
            ], D = [
                4,
                2
            ], P = [
                1,
                3
            ];
            return A.includes(E.unit) && D.includes(E.direction) ? this._runHorizontalEditorScroll.bind(this) : R.includes(E.unit) && P.includes(E.direction) ? this._runVerticalEditorScroll.bind(this) : null;
        }
        runCoreEditorCommand(E, A) {
            const R = J4.parse(A);
            if (!R) return;
            const D = this.determineScrollMethod(R);
            D && D(E, A.source, R);
        }
        _runVerticalEditorScroll(E, A, R) {
            const D = this._computeDesiredScrollTop(E, R);
            if (R.revealCursor) {
                const P = E.getCompletelyVisibleViewRangeAtScrollTop(D);
                E.setCursorStates(A, 3, [
                    a5.findPositionInViewportIfOutside(E, E.getPrimaryCursorState(), P, R.select)
                ]);
            }
            E.viewLayout.setScrollPosition({
                scrollTop: D
            }, 0);
        }
        _computeDesiredScrollTop(E, A) {
            if (A.unit === 1) {
                const P = E.viewLayout.getFutureViewport(), N = E.getCompletelyVisibleViewRangeAtScrollTop(P.top), O = E.coordinatesConverter.convertViewRangeToModelRange(N);
                let F;
                A.direction === 1 ? F = Math.max(1, O.startLineNumber - A.value) : F = Math.min(E.model.getLineCount(), O.startLineNumber + A.value);
                const H = E.coordinatesConverter.convertModelPositionToViewPosition(new Yn(F, 1));
                return E.viewLayout.getVerticalOffsetForLineNumber(H.lineNumber);
            }
            if (A.unit === 5) {
                let P = 0;
                return A.direction === 3 && (P = E.model.getLineCount() - E.cursorConfig.pageSize), E.viewLayout.getVerticalOffsetForLineNumber(P);
            }
            let R;
            A.unit === 3 ? R = E.cursorConfig.pageSize * A.value : A.unit === 4 ? R = Math.round(E.cursorConfig.pageSize / 2) * A.value : R = A.value;
            const D = (A.direction === 1 ? -1 : 1) * R;
            return E.viewLayout.getCurrentScrollTop() + D * E.cursorConfig.lineHeight;
        }
        _runHorizontalEditorScroll(E, A, R) {
            const D = this._computeDesiredScrollLeft(E, R);
            E.viewLayout.setScrollPosition({
                scrollLeft: D
            }, 0);
        }
        _computeDesiredScrollLeft(E, A) {
            const R = (A.direction === 4 ? -1 : 1) * A.value;
            return E.viewLayout.getCurrentScrollLeft() + R * E.cursorConfig.typicalHalfwidthCharacterWidth;
        }
    }
    e.EditorScrollImpl = f, e.EditorScroll = Pc(new f), e.ScrollLineUp = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollLineUp",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | fe.UpArrow,
                    mac: {
                        primary: Ie.WinCtrl | fe.PageUp
                    }
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Up,
                by: J4.RawUnit.WrappedLine,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollPageUp = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollPageUp",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | fe.PageUp,
                    win: {
                        primary: Ie.Alt | fe.PageUp
                    },
                    linux: {
                        primary: Ie.Alt | fe.PageUp
                    }
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Up,
                by: J4.RawUnit.Page,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollEditorTop = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollEditorTop",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Up,
                by: J4.RawUnit.Editor,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollLineDown = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollLineDown",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | fe.DownArrow,
                    mac: {
                        primary: Ie.WinCtrl | fe.PageDown
                    }
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Down,
                by: J4.RawUnit.WrappedLine,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollPageDown = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollPageDown",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: Ie.CtrlCmd | fe.PageDown,
                    win: {
                        primary: Ie.Alt | fe.PageDown
                    },
                    linux: {
                        primary: Ie.Alt | fe.PageDown
                    }
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Down,
                by: J4.RawUnit.Page,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollEditorBottom = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollEditorBottom",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Down,
                by: J4.RawUnit.Editor,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollLeft = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollLeft",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Left,
                by: J4.RawUnit.Column,
                value: 2,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    }), e.ScrollRight = Pc(new class extends dR {
        constructor(){
            super({
                id: "scrollRight",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus
                }
            });
        }
        runCoreEditorCommand(T, E) {
            e.EditorScroll.runCoreEditorCommand(T, {
                to: J4.RawDirection.Right,
                by: J4.RawUnit.Column,
                value: 2,
                revealCursor: !1,
                select: !1,
                source: E.source
            });
        }
    });
    class v extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            A.position && (E.model.pushStackElement(), E.setCursorStates(A.source, 3, [
                a5.word(E, E.getPrimaryCursorState(), this._inSelectionMode, A.position)
            ]), A.revealType !== 2 && E.revealAllCursors(A.source, !0, !0));
        }
    }
    e.WordSelect = Pc(new v({
        inSelectionMode: !1,
        id: "_wordSelect",
        precondition: void 0
    })), e.WordSelectDrag = Pc(new v({
        inSelectionMode: !0,
        id: "_wordSelectDrag",
        precondition: void 0
    })), e.LastCursorWordSelect = Pc(new class extends dR {
        constructor(){
            super({
                id: "lastCursorWordSelect",
                precondition: void 0
            });
        }
        runCoreEditorCommand(T, E) {
            if (!E.position) return;
            const A = T.getLastAddedCursorIndex(), R = T.getCursorStates(), D = R.slice(0), P = R[A];
            D[A] = a5.word(T, P, P.modelState.hasSelection(), E.position), T.model.pushStackElement(), T.setCursorStates(E.source, 3, D);
        }
    });
    class b extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            A.position && (E.model.pushStackElement(), E.setCursorStates(A.source, 3, [
                a5.line(E, E.getPrimaryCursorState(), this._inSelectionMode, A.position, A.viewPosition)
            ]), A.revealType !== 2 && E.revealAllCursors(A.source, !1, !0));
        }
    }
    e.LineSelect = Pc(new b({
        inSelectionMode: !1,
        id: "_lineSelect",
        precondition: void 0
    })), e.LineSelectDrag = Pc(new b({
        inSelectionMode: !0,
        id: "_lineSelectDrag",
        precondition: void 0
    }));
    class y extends dR {
        constructor(E){
            super(E), this._inSelectionMode = E.inSelectionMode;
        }
        runCoreEditorCommand(E, A) {
            if (!A.position) return;
            const R = E.getLastAddedCursorIndex(), D = E.getCursorStates(), P = D.slice(0);
            P[R] = a5.line(E, D[R], this._inSelectionMode, A.position, A.viewPosition), E.model.pushStackElement(), E.setCursorStates(A.source, 3, P);
        }
    }
    e.LastCursorLineSelect = Pc(new y({
        inSelectionMode: !1,
        id: "lastCursorLineSelect",
        precondition: void 0
    })), e.LastCursorLineSelectDrag = Pc(new y({
        inSelectionMode: !0,
        id: "lastCursorLineSelectDrag",
        precondition: void 0
    })), e.CancelSelection = Pc(new class extends dR {
        constructor(){
            super({
                id: "cancelSelection",
                precondition: gn.hasNonEmptySelection,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: fe.Escape,
                    secondary: [
                        Ie.Shift | fe.Escape
                    ]
                }
            });
        }
        runCoreEditorCommand(T, E) {
            T.model.pushStackElement(), T.setCursorStates(E.source, 3, [
                a5.cancelSelection(T, T.getPrimaryCursorState())
            ]), T.revealAllCursors(E.source, !0);
        }
    }), e.RemoveSecondaryCursors = Pc(new class extends dR {
        constructor(){
            super({
                id: "removeSecondaryCursors",
                precondition: gn.hasMultipleSelections,
                kbOpts: {
                    weight: zy + 1,
                    kbExpr: gn.textInputFocus,
                    primary: fe.Escape,
                    secondary: [
                        Ie.Shift | fe.Escape
                    ]
                }
            });
        }
        runCoreEditorCommand(T, E) {
            T.model.pushStackElement(), T.setCursorStates(E.source, 3, [
                T.getPrimaryCursorState()
            ]), T.revealAllCursors(E.source, !0), yI(S(189, null));
        }
    }), e.RevealLine = Pc(new class extends dR {
        constructor(){
            super({
                id: "revealLine",
                precondition: void 0,
                metadata: N2t.metadata
            });
        }
        runCoreEditorCommand(T, E) {
            const A = E, R = A.lineNumber || 0;
            let D = typeof R == "number" ? R + 1 : parseInt(R) + 1;
            D < 1 && (D = 1);
            const P = T.model.getLineCount();
            D > P && (D = P);
            const N = new dt(D, 1, D, T.model.getLineMaxColumn(D));
            let O = 0;
            if (A.at) switch(A.at){
                case N2t.RawAtArgument.Top:
                    O = 3;
                    break;
                case N2t.RawAtArgument.Center:
                    O = 1;
                    break;
                case N2t.RawAtArgument.Bottom:
                    O = 4;
                    break;
                default:
                    break;
            }
            const F = T.coordinatesConverter.convertModelRangeToViewRange(N);
            T.revealRange(E.source, !1, F, O, 0);
        }
    }), e.SelectAll = new class extends Bfi {
        constructor(){
            super(nXr);
        }
        runDOMCommand(T) {
            i5 && (T.focus(), T.select()), T.ownerDocument.execCommand("selectAll");
        }
        runEditorCommand(T, E, A) {
            const R = E._getViewModel();
            R && this.runCoreEditorCommand(R, A);
        }
        runCoreEditorCommand(T, E) {
            T.model.pushStackElement(), T.setCursorStates("keyboard", 3, [
                a5.selectAll(T, T.getPrimaryCursorState())
            ]);
        }
    }, e.SetSelection = Pc(new class extends dR {
        constructor(){
            super({
                id: "setSelection",
                precondition: void 0
            });
        }
        runCoreEditorCommand(T, E) {
            E.selection && (T.model.pushStackElement(), T.setCursorStates(E.source, 3, [
                wb.fromModelSelection(E.selection)
            ]));
        }
    });
})(IO || (IO = {})), dLc = he.and(gn.textInputFocus, gn.columnSelection), L2t(IO.CursorColumnSelectLeft.id, Ie.Shift | fe.LeftArrow), L2t(IO.CursorColumnSelectRight.id, Ie.Shift | fe.RightArrow), L2t(IO.CursorColumnSelectUp.id, Ie.Shift | fe.UpArrow), L2t(IO.CursorColumnSelectPageUp.id, Ie.Shift | fe.PageUp), L2t(IO.CursorColumnSelectDown.id, Ie.Shift | fe.DownArrow), L2t(IO.CursorColumnSelectPageDown.id, Ie.Shift | fe.PageDown), ((e)=>{
    class t extends i2 {
        runEditorCommand(i, r, s) {
            const o = r._getViewModel();
            o && this.runCoreEditingCommand(r, o, s || {});
        }
    }
    e.CoreEditingCommand = t, e.LineBreakInsert = Pc(new class extends t {
        constructor(){
            super({
                id: "lineBreakInsert",
                precondition: gn.writable,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: 0,
                    mac: {
                        primary: Ie.WinCtrl | fe.KeyO
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, hgn.lineBreakInsert(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection)));
        }
    }), e.Outdent = Pc(new class extends t {
        constructor(){
            super({
                id: "outdent",
                precondition: gn.writable,
                kbOpts: {
                    weight: zy,
                    kbExpr: he.and(gn.editorTextFocus, gn.tabDoesNotMoveFocus),
                    primary: Ie.Shift | fe.Tab
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, $Ae.outdent(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection))), n.pushUndoStop();
        }
    }), e.Tab = Pc(new class extends t {
        constructor(){
            super({
                id: "tab",
                precondition: gn.writable,
                kbOpts: {
                    weight: zy,
                    kbExpr: he.and(gn.editorTextFocus, gn.tabDoesNotMoveFocus),
                    primary: fe.Tab
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, $Ae.tab(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection))), n.pushUndoStop();
        }
    }), e.DeleteLeft = Pc(new class extends t {
        constructor(){
            super({
                id: "deleteLeft",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: fe.Backspace,
                    secondary: [
                        Ie.Shift | fe.Backspace
                    ],
                    mac: {
                        primary: fe.Backspace,
                        secondary: [
                            Ie.Shift | fe.Backspace,
                            Ie.WinCtrl | fe.KeyH,
                            Ie.WinCtrl | fe.Backspace
                        ]
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            const [s, o] = qht.deleteLeft(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map((a)=>a.modelState.selection), i.getCursorAutoClosedCharacters());
            s && n.pushUndoStop(), n.executeCommands(this.id, o), i.setPrevEditOperationType(2);
        }
    }), e.DeleteRight = Pc(new class extends t {
        constructor(){
            super({
                id: "deleteRight",
                precondition: void 0,
                kbOpts: {
                    weight: zy,
                    kbExpr: gn.textInputFocus,
                    primary: fe.Delete,
                    mac: {
                        primary: fe.Delete,
                        secondary: [
                            Ie.WinCtrl | fe.KeyD,
                            Ie.WinCtrl | fe.Delete
                        ]
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            const [s, o] = qht.deleteRight(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map((a)=>a.modelState.selection));
            s && n.pushUndoStop(), n.executeCommands(this.id, o), i.setPrevEditOperationType(3);
        }
    }), e.Undo = new class extends Bfi {
        constructor(){
            super(wBe);
        }
        runDOMCommand(n) {
            lLc(n, "undo") || n.ownerDocument.execCommand("undo");
        }
        runEditorCommand(n, i, r) {
            if (!(!i.hasModel() || i.getOption(96) === !0)) return i.getModel().undo();
        }
    }, e.Redo = new class extends Bfi {
        constructor(){
            super(CBe);
        }
        runDOMCommand(n) {
            lLc(n, "redo") || n.ownerDocument.execCommand("redo");
        }
        runEditorCommand(n, i, r) {
            if (!(!i.hasModel() || i.getOption(96) === !0)) return i.getModel().redo();
        }
    };
})(HAe || (HAe = {})), UXr = class extends jmn {
    constructor(e, t, n){
        super({
            id: e,
            precondition: void 0,
            metadata: n
        }), this._handlerId = t;
    }
    runCommand(e, t) {
        const n = e.get(Ja).getFocusedCodeEditor();
        n && n.trigger("keyboard", this._handlerId, t);
    }
}, Qht("type", {
    description: "Type",
    args: [
        {
            name: "args",
            schema: {
                type: "object",
                required: [
                    "text"
                ],
                properties: {
                    text: {
                        type: "string"
                    }
                }
            }
        }
    ]
}), Qht("replacePreviousChar"), Qht("compositionType"), Qht("compositionStart"), Qht("compositionEnd"), Qht("paste"), Qht("cut");

}
