import { D, Ov, Yo, dP, wf, zR } from "./Iwo.js";
import { $3 } from "./aria.js";
import { A_, _7 } from "./browser_2.js";
import { Ju, og } from "./codeEditorService.js";
import { Hi, mt } from "./contextkey.js";
import { fAy, kgn } from "./cursorColumnSelection.js";
import { O1, swe } from "./cursorCommon.js";
import { Bii, Q7o } from "./cursorDeleteOperations.js";
import { K_, Lj, iUo } from "./cursorMoveCommands.js";
import { Cwr, eri } from "./cursorTypeEditOperations.js";
import { Twr, eHe } from "./cursorTypeOperations.js";
import { Hn } from "./dom_2.js";
import { cg, si } from "./editorContextKeys.js";
import { K7o, Nii, Nj, Sgn, Ud, ygn } from "./editorExtensions.js";
import { nri } from "./editorHistoryOwner.js";
import { L9t, N9t } from "./editorHostPolicy.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { xT } from "./keybindingsRegistry.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Agn, Bkr, O9t, RC, Zc, g6d, h6d, qve } from "./ze.js";
var Tw, G3, cz, Rgn, xwr, nB, v6d, Fbt, SUo;
export { Fbt, G3, Rgn, SUo, Tw, cz, nB, v6d, xwr };
var __wakaru_Pgn_initialized = false;
export function Pgn() {
if (__wakaru_Pgn_initialized) return;
__wakaru_Pgn_initialized = true;
"use strict";
E(), Bt(), A_(), Ma(), To(), $3(), Ud(), og(), fAy(), swe(), Q7o(), iUo(), Twr(), jc(), Qs(), cg(), Hi(), xT(), Hn(), L9t(), Cwr(), nri(), Tw = 0, G3 = class extends Nj {
    runEditorCommand(t, e, n) {
        const i = e._getViewModel();
        i && this.runCoreEditorCommand(i, n || {});
    }
}, ((t)=>{
    const e = function(s) {
        if (!wf(s)) return !1;
        const o = s;
        return !(!Yo(o.to) || !Ov(o.by) && !Yo(o.by) || !Ov(o.value) && !zR(o.value) || !Ov(o.revealCursor) && !dP(o.revealCursor));
    };
    t.metadata = {
        description: "Scroll editor in the given direction",
        args: [
            {
                name: "Editor scroll argument object",
                description: "Property-value pairs that can be passed through this argument:\n					* 'to': A mandatory direction value.\n						```\n						'up', 'down'\n						```\n					* 'by': Unit to move. Default is computed based on 'to' value.\n						```\n						'line', 'wrappedLine', 'page', 'halfPage', 'editor'\n						```\n					* 'value': Number of units to move. Default is '1'.\n					* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n				",
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
    }, t.RawDirection = {
        Up: "up",
        Right: "right",
        Down: "down",
        Left: "left"
    }, t.RawUnit = {
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
            case t.RawDirection.Up:
                o = 1;
                break;
            case t.RawDirection.Right:
                o = 2;
                break;
            case t.RawDirection.Down:
                o = 3;
                break;
            case t.RawDirection.Left:
                o = 4;
                break;
            default:
                return null;
        }
        let a;
        switch(s.by){
            case t.RawUnit.Line:
                a = 1;
                break;
            case t.RawUnit.WrappedLine:
                a = 2;
                break;
            case t.RawUnit.Page:
                a = 3;
                break;
            case t.RawUnit.HalfPage:
                a = 4;
                break;
            case t.RawUnit.Editor:
                a = 5;
                break;
            case t.RawUnit.Column:
                a = 6;
                break;
            default:
                a = 2;
        }
        const l = Math.floor(s.value || 1), c = !!s.revealCursor;
        return {
            direction: o,
            unit: a,
            value: l,
            revealCursor: c,
            select: !!s.select
        };
    }
    t.parse = n;
    let i;
    ((s)=>{
        s[s.Up = 1] = "Up", s[s.Right = 2] = "Right", s[s.Down = 3] = "Down", s[s.Left = 4] = "Left";
    })(i = t.Direction || (t.Direction = {}));
    let r;
    ((s)=>{
        s[s.Line = 1] = "Line", s[s.WrappedLine = 2] = "WrappedLine", s[s.Page = 3] = "Page", s[s.HalfPage = 4] = "HalfPage", s[s.Editor = 5] = "Editor", s[s.Column = 6] = "Column";
    })(r = t.Unit || (t.Unit = {}));
})(cz || (cz = {})), ((t)=>{
    const e = function(n) {
        if (!wf(n)) return !1;
        const i = n;
        return !(!zR(i.lineNumber) && !Yo(i.lineNumber) || !Ov(i.at) && !Yo(i.at));
    };
    t.metadata = {
        description: "Reveal the given line at the given logical position",
        args: [
            {
                name: "Reveal line argument object",
                description: "Property-value pairs that can be passed through this argument:\n					* 'lineNumber': A mandatory line number value.\n					* 'at': Logical position at which line has to be revealed.\n						```\n						'top', 'center', 'bottom'\n						```\n				",
                constraint: e,
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
    }, t.RawAtArgument = {
        Top: "top",
        Center: "center",
        Bottom: "bottom"
    };
})(Rgn || (Rgn = {})), xwr = class {
    constructor(t){
        t.addImplementation(1e4, "code-editor", (e, n)=>{
            const i = e.get(Ju).getFocusedCodeEditor();
            return i && i.hasTextFocus() ? this._runEditorCommand(e, i, n) : !1;
        }), t.addImplementation(1e3, "generic-dom-input-textarea", (e, n)=>{
            const i = RC(), r = e.get(N9t).treatsContentEditableAsNativeTextInput;
            if (i && Bkr({
                element: i,
                includeContentEditable: r
            })) return this.runDOMCommand(i), !0;
            const s = i?.ownerDocument, o = s ? h6d(s) : void 0;
            return o ? (this.runDOMCommand(o), !0) : !1;
        }), t.addImplementation(0, "generic-dom", (e, n)=>{
            const i = e.get(Ju).getActiveCodeEditor();
            return i ? (i.focus(), this._runEditorCommand(e, i, n)) : !1;
        });
    }
    _runEditorCommand(t, e, n) {
        const i = this.runEditorCommand(t, e, n);
        return i || !0;
    }
}, ((t)=>{
    class e extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            if (!k.position) return;
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, [
                Lj.moveTo(S, S.getPrimaryCursorState(), this._inSelectionMode, k.position, k.viewPosition)
            ]) && k.revealType !== 2 && S.revealAllCursors(k.source, !0, !0);
        }
    }
    t.MoveTo = Zc(new e({
        id: "_moveTo",
        inSelectionMode: !1,
        precondition: void 0
    })), t.MoveToSelect = Zc(new e({
        id: "_moveToSelect",
        inSelectionMode: !0,
        precondition: void 0
    }));
    class n extends G3 {
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement();
            const C = this._getColumnSelectResult(S, S.getPrimaryCursorState(), S.getCursorColumnSelectData(), k);
            C !== null && (S.setCursorStates(k.source, 3, C.viewStates.map((T)=>O1.fromViewState(T))), S.setCursorColumnSelectData({
                isReal: !0,
                fromViewLineNumber: C.fromLineNumber,
                fromViewVisualColumn: C.fromVisualColumn,
                toViewLineNumber: C.toLineNumber,
                toViewVisualColumn: C.toVisualColumn
            }), C.reversed ? S.revealTopMostCursor(k.source) : S.revealBottomMostCursor(k.source));
        }
    }
    t.ColumnSelect = Zc(new class extends n {
        constructor(){
            super({
                id: "columnSelect",
                precondition: void 0
            });
        }
        _getColumnSelectResult(y, S, k, C) {
            if (typeof C.position > "u" || typeof C.viewPosition > "u" || typeof C.mouseColumn > "u") return null;
            const T = y.model.validatePosition(C.position), I = y.coordinatesConverter.validateViewPosition(new er(C.viewPosition.lineNumber, C.viewPosition.column), T), A = C.doColumnSelect ? k.fromViewLineNumber : I.lineNumber, P = C.doColumnSelect ? k.fromViewVisualColumn : C.mouseColumn - 1;
            return kgn.columnSelect(y.cursorConfig, y, A, P, I.lineNumber, C.mouseColumn - 1);
        }
    }), t.CursorColumnSelectLeft = Zc(new class extends n {
        constructor(){
            super({
                id: "cursorColumnSelectLeft",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.LeftArrow,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(y, S, k, C) {
            return kgn.columnSelectLeft(y.cursorConfig, y, k);
        }
    }), t.CursorColumnSelectRight = Zc(new class extends n {
        constructor(){
            super({
                id: "cursorColumnSelectRight",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.RightArrow,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(y, S, k, C) {
            return kgn.columnSelectRight(y.cursorConfig, y, k);
        }
    });
    class i extends n {
        constructor(S){
            super(S), this._isPaged = S.isPaged;
        }
        _getColumnSelectResult(S, k, C, T) {
            return kgn.columnSelectUp(S.cursorConfig, S, C, this._isPaged);
        }
    }
    t.CursorColumnSelectUp = Zc(new i({
        isPaged: !1,
        id: "cursorColumnSelectUp",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.UpArrow,
            linux: {
                primary: 0
            }
        }
    })), t.CursorColumnSelectPageUp = Zc(new i({
        isPaged: !0,
        id: "cursorColumnSelectPageUp",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.PageUp,
            linux: {
                primary: 0
            }
        }
    }));
    class r extends n {
        constructor(S){
            super(S), this._isPaged = S.isPaged;
        }
        _getColumnSelectResult(S, k, C, T) {
            return kgn.columnSelectDown(S.cursorConfig, S, C, this._isPaged);
        }
    }
    t.CursorColumnSelectDown = Zc(new r({
        isPaged: !1,
        id: "cursorColumnSelectDown",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.DownArrow,
            linux: {
                primary: 0
            }
        }
    })), t.CursorColumnSelectPageDown = Zc(new r({
        isPaged: !0,
        id: "cursorColumnSelectPageDown",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | ut.Alt | Ze.PageDown,
            linux: {
                primary: 0
            }
        }
    }));
    class s extends G3 {
        constructor(){
            super({
                id: "cursorMove",
                precondition: void 0,
                metadata: K_.metadata
            });
        }
        runCoreEditorCommand(S, k) {
            const C = K_.parse(k);
            C && this._runCursorMove(S, k.source, C);
        }
        _runCursorMove(S, k, C) {
            S.model.pushStackElement(), S.setCursorStates(k, 3, s._move(S, S.getCursorStates(), C)), S.revealAllCursors(k, !0);
        }
        static _move(S, k, C) {
            const T = C.select, I = C.value;
            switch(C.direction){
                case K_.Direction.Left:
                case K_.Direction.Right:
                case K_.Direction.Up:
                case K_.Direction.Down:
                case K_.Direction.PrevBlankLine:
                case K_.Direction.NextBlankLine:
                case K_.Direction.WrappedLineStart:
                case K_.Direction.WrappedLineFirstNonWhitespaceCharacter:
                case K_.Direction.WrappedLineColumnCenter:
                case K_.Direction.WrappedLineEnd:
                case K_.Direction.WrappedLineLastNonWhitespaceCharacter:
                    return Lj.simpleMove(S, k, C.direction, T, I, C.unit);
                case K_.Direction.ViewPortTop:
                case K_.Direction.ViewPortBottom:
                case K_.Direction.ViewPortCenter:
                case K_.Direction.ViewPortIfOutside:
                    return Lj.viewportMove(S, k, C.direction, T, I);
                default:
                    return null;
            }
        }
    }
    t.CursorMoveImpl = s, t.CursorMove = Zc(new s);
    let o;
    ((y)=>{
        y[y.PAGE_SIZE_MARKER = -1] = "PAGE_SIZE_MARKER";
    })(o || (o = {}));
    class a extends G3 {
        constructor(S){
            super(S), this._staticArgs = S.args;
        }
        runCoreEditorCommand(S, k) {
            let C = this._staticArgs;
            this._staticArgs.value === -1 && (C = {
                direction: this._staticArgs.direction,
                unit: this._staticArgs.unit,
                select: this._staticArgs.select,
                value: k.pageSize || S.cursorConfig.pageSize
            }), S.model.pushStackElement(), S.setCursorStates(k.source, 3, Lj.simpleMove(S, S.getCursorStates(), C.direction, C.select, C.value, C.unit)), S.revealAllCursors(k.source, !0);
        }
    }
    t.CursorLeft = Zc(new a({
        args: {
            direction: K_.Direction.Left,
            unit: K_.Unit.None,
            select: !1,
            value: 1
        },
        id: "cursorLeft",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.LeftArrow,
            mac: {
                primary: Ze.LeftArrow,
                secondary: [
                    ut.WinCtrl | Ze.KeyB
                ]
            }
        }
    })), t.CursorLeftSelect = Zc(new a({
        args: {
            direction: K_.Direction.Left,
            unit: K_.Unit.None,
            select: !0,
            value: 1
        },
        id: "cursorLeftSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.LeftArrow
        }
    })), t.CursorRight = Zc(new a({
        args: {
            direction: K_.Direction.Right,
            unit: K_.Unit.None,
            select: !1,
            value: 1
        },
        id: "cursorRight",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.RightArrow,
            mac: {
                primary: Ze.RightArrow,
                secondary: [
                    ut.WinCtrl | Ze.KeyF
                ]
            }
        }
    })), t.CursorRightSelect = Zc(new a({
        args: {
            direction: K_.Direction.Right,
            unit: K_.Unit.None,
            select: !0,
            value: 1
        },
        id: "cursorRightSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.RightArrow
        }
    })), t.CursorUp = Zc(new a({
        args: {
            direction: K_.Direction.Up,
            unit: K_.Unit.WrappedLine,
            select: !1,
            value: 1
        },
        id: "cursorUp",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.UpArrow,
            mac: {
                primary: Ze.UpArrow,
                secondary: [
                    ut.WinCtrl | Ze.KeyP
                ]
            }
        }
    })), t.CursorUpSelect = Zc(new a({
        args: {
            direction: K_.Direction.Up,
            unit: K_.Unit.WrappedLine,
            select: !0,
            value: 1
        },
        id: "cursorUpSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.UpArrow,
            secondary: [
                ut.CtrlCmd | ut.Shift | Ze.UpArrow
            ],
            mac: {
                primary: ut.Shift | Ze.UpArrow
            },
            linux: {
                primary: ut.Shift | Ze.UpArrow
            }
        }
    })), t.CursorPageUp = Zc(new a({
        args: {
            direction: K_.Direction.Up,
            unit: K_.Unit.WrappedLine,
            select: !1,
            value: -1
        },
        id: "cursorPageUp",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.PageUp
        }
    })), t.CursorPageUpSelect = Zc(new a({
        args: {
            direction: K_.Direction.Up,
            unit: K_.Unit.WrappedLine,
            select: !0,
            value: -1
        },
        id: "cursorPageUpSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.PageUp
        }
    })), t.CursorDown = Zc(new a({
        args: {
            direction: K_.Direction.Down,
            unit: K_.Unit.WrappedLine,
            select: !1,
            value: 1
        },
        id: "cursorDown",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.DownArrow,
            mac: {
                primary: Ze.DownArrow,
                secondary: [
                    ut.WinCtrl | Ze.KeyN
                ]
            }
        }
    })), t.CursorDownSelect = Zc(new a({
        args: {
            direction: K_.Direction.Down,
            unit: K_.Unit.WrappedLine,
            select: !0,
            value: 1
        },
        id: "cursorDownSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.DownArrow,
            secondary: [
                ut.CtrlCmd | ut.Shift | Ze.DownArrow
            ],
            mac: {
                primary: ut.Shift | Ze.DownArrow
            },
            linux: {
                primary: ut.Shift | Ze.DownArrow
            }
        }
    })), t.CursorPageDown = Zc(new a({
        args: {
            direction: K_.Direction.Down,
            unit: K_.Unit.WrappedLine,
            select: !1,
            value: -1
        },
        id: "cursorPageDown",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.PageDown
        }
    })), t.CursorPageDownSelect = Zc(new a({
        args: {
            direction: K_.Direction.Down,
            unit: K_.Unit.WrappedLine,
            select: !0,
            value: -1
        },
        id: "cursorPageDownSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.PageDown
        }
    })), t.CreateCursor = Zc(new class extends G3 {
        constructor(){
            super({
                id: "createCursor",
                precondition: void 0
            });
        }
        runCoreEditorCommand(y, S) {
            if (!S.position) return;
            let k;
            S.wholeLine ? k = Lj.line(y, y.getPrimaryCursorState(), !1, S.position, S.viewPosition) : k = Lj.moveTo(y, y.getPrimaryCursorState(), !1, S.position, S.viewPosition);
            const C = y.getCursorStates();
            if (C.length > 1) {
                const T = k.modelState ? k.modelState.position : null, I = k.viewState ? k.viewState.position : null;
                for(let A = 0, P = C.length; A < P; A++){
                    const M = C[A];
                    if (!(T && !M.modelState.selection.containsPosition(T)) && !(I && !M.viewState.selection.containsPosition(I))) {
                        C.splice(A, 1), y.model.pushStackElement(), y.setCursorStates(S.source, 3, C);
                        return;
                    }
                }
            }
            C.push(k), y.model.pushStackElement(), y.setCursorStates(S.source, 3, C);
        }
    }), t.LastCursorMoveToSelect = Zc(new class extends G3 {
        constructor(){
            super({
                id: "_lastCursorMoveToSelect",
                precondition: void 0
            });
        }
        runCoreEditorCommand(y, S) {
            if (!S.position) return;
            const k = y.getLastAddedCursorIndex(), C = y.getCursorStates(), T = C.slice(0);
            T[k] = Lj.moveTo(y, C[k], !0, S.position, S.viewPosition), y.model.pushStackElement(), y.setCursorStates(S.source, 3, T);
        }
    });
    class l extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, Lj.moveToBeginningOfLine(S, S.getCursorStates(), this._inSelectionMode)), S.revealAllCursors(k.source, !0);
        }
    }
    t.CursorHome = Zc(new l({
        inSelectionMode: !1,
        id: "cursorHome",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.Home,
            mac: {
                primary: Ze.Home,
                secondary: [
                    ut.CtrlCmd | Ze.LeftArrow
                ]
            }
        }
    })), t.CursorHomeSelect = Zc(new l({
        inSelectionMode: !0,
        id: "cursorHomeSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.Home,
            mac: {
                primary: ut.Shift | Ze.Home,
                secondary: [
                    ut.CtrlCmd | ut.Shift | Ze.LeftArrow
                ]
            }
        }
    }));
    class c extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, this._exec(S.getCursorStates())), S.revealAllCursors(k.source, !0);
        }
        _exec(S) {
            const k = [];
            for(let C = 0, T = S.length; C < T; C++){
                const I = S[C], A = I.modelState.position.lineNumber;
                k[C] = O1.fromModelState(I.modelState.move(this._inSelectionMode, A, 1, 0));
            }
            return k;
        }
    }
    t.CursorLineStart = Zc(new c({
        inSelectionMode: !1,
        id: "cursorLineStart",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: 0,
            mac: {
                primary: ut.WinCtrl | Ze.KeyA
            }
        }
    })), t.CursorLineStartSelect = Zc(new c({
        inSelectionMode: !0,
        id: "cursorLineStartSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: 0,
            mac: {
                primary: ut.WinCtrl | ut.Shift | Ze.KeyA
            }
        }
    }));
    class u extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, Lj.moveToEndOfLine(S, S.getCursorStates(), this._inSelectionMode, k.sticky || !1)), S.revealAllCursors(k.source, !0);
        }
    }
    t.CursorEnd = Zc(new u({
        inSelectionMode: !1,
        id: "cursorEnd",
        precondition: void 0,
        kbOpts: {
            args: {
                sticky: !1
            },
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: Ze.End,
            mac: {
                primary: Ze.End,
                secondary: [
                    ut.CtrlCmd | Ze.RightArrow
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
                                description: D(187, null),
                                type: "boolean",
                                default: !1
                            }
                        }
                    }
                }
            ]
        }
    })), t.CursorEndSelect = Zc(new u({
        inSelectionMode: !0,
        id: "cursorEndSelect",
        precondition: void 0,
        kbOpts: {
            args: {
                sticky: !1
            },
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.Shift | Ze.End,
            mac: {
                primary: ut.Shift | Ze.End,
                secondary: [
                    ut.CtrlCmd | ut.Shift | Ze.RightArrow
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
                                description: D(188, null),
                                type: "boolean",
                                default: !1
                            }
                        }
                    }
                }
            ]
        }
    }));
    class d extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, this._exec(S, S.getCursorStates())), S.revealAllCursors(k.source, !0);
        }
        _exec(S, k) {
            const C = [];
            for(let T = 0, I = k.length; T < I; T++){
                const A = k[T], P = A.modelState.position.lineNumber, M = S.model.getLineMaxColumn(P);
                C[T] = O1.fromModelState(A.modelState.move(this._inSelectionMode, P, M, 0));
            }
            return C;
        }
    }
    t.CursorLineEnd = Zc(new d({
        inSelectionMode: !1,
        id: "cursorLineEnd",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: 0,
            mac: {
                primary: ut.WinCtrl | Ze.KeyE
            }
        }
    })), t.CursorLineEndSelect = Zc(new d({
        inSelectionMode: !0,
        id: "cursorLineEndSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: 0,
            mac: {
                primary: ut.WinCtrl | ut.Shift | Ze.KeyE
            }
        }
    }));
    class h extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, Lj.moveToBeginningOfBuffer(S, S.getCursorStates(), this._inSelectionMode)), S.revealAllCursors(k.source, !0);
        }
    }
    t.CursorTop = Zc(new h({
        inSelectionMode: !1,
        id: "cursorTop",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | Ze.Home,
            mac: {
                primary: ut.CtrlCmd | Ze.UpArrow
            }
        }
    })), t.CursorTopSelect = Zc(new h({
        inSelectionMode: !0,
        id: "cursorTopSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | Ze.Home,
            mac: {
                primary: ut.CtrlCmd | ut.Shift | Ze.UpArrow
            }
        }
    }));
    class p extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            S.model.pushStackElement(), S.setCursorStates(k.source, 3, Lj.moveToEndOfBuffer(S, S.getCursorStates(), this._inSelectionMode)), S.revealAllCursors(k.source, !0);
        }
    }
    t.CursorBottom = Zc(new p({
        inSelectionMode: !1,
        id: "cursorBottom",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | Ze.End,
            mac: {
                primary: ut.CtrlCmd | Ze.DownArrow
            }
        }
    })), t.CursorBottomSelect = Zc(new p({
        inSelectionMode: !0,
        id: "cursorBottomSelect",
        precondition: void 0,
        kbOpts: {
            weight: Tw,
            kbExpr: si.textInputFocus,
            primary: ut.CtrlCmd | ut.Shift | Ze.End,
            mac: {
                primary: ut.CtrlCmd | ut.Shift | Ze.DownArrow
            }
        }
    }));
    class g extends G3 {
        constructor(){
            super({
                id: "editorScroll",
                precondition: void 0,
                metadata: cz.metadata
            });
        }
        determineScrollMethod(S) {
            const k = [
                6
            ], C = [
                1,
                2,
                3,
                4,
                5,
                6
            ], T = [
                4,
                2
            ], I = [
                1,
                3
            ];
            return k.includes(S.unit) && T.includes(S.direction) ? this._runHorizontalEditorScroll.bind(this) : C.includes(S.unit) && I.includes(S.direction) ? this._runVerticalEditorScroll.bind(this) : null;
        }
        runCoreEditorCommand(S, k) {
            const C = cz.parse(k);
            if (!C) return;
            const T = this.determineScrollMethod(C);
            T && T(S, k.source, C);
        }
        _runVerticalEditorScroll(S, k, C) {
            const T = this._computeDesiredScrollTop(S, C);
            if (C.revealCursor) {
                const I = S.getCompletelyVisibleViewRangeAtScrollTop(T);
                S.setCursorStates(k, 3, [
                    Lj.findPositionInViewportIfOutside(S, S.getPrimaryCursorState(), I, C.select)
                ]);
            }
            S.viewLayout.setScrollPosition({
                scrollTop: T
            }, 0);
        }
        _computeDesiredScrollTop(S, k) {
            if (k.unit === 1) {
                const I = S.viewLayout.getFutureViewport(), A = S.getCompletelyVisibleViewRangeAtScrollTop(I.top), P = S.coordinatesConverter.convertViewRangeToModelRange(A);
                let M;
                k.direction === 1 ? M = Math.max(1, P.startLineNumber - k.value) : M = Math.min(S.model.getLineCount(), P.startLineNumber + k.value);
                const O = S.coordinatesConverter.convertModelPositionToViewPosition(new er(M, 1));
                return S.viewLayout.getVerticalOffsetForLineNumber(O.lineNumber);
            }
            if (k.unit === 5) {
                let I = 0;
                return k.direction === 3 && (I = S.model.getLineCount() - S.cursorConfig.pageSize), S.viewLayout.getVerticalOffsetForLineNumber(I);
            }
            let C;
            k.unit === 3 ? C = S.cursorConfig.pageSize * k.value : k.unit === 4 ? C = Math.round(S.cursorConfig.pageSize / 2) * k.value : C = k.value;
            const T = (k.direction === 1 ? -1 : 1) * C;
            return S.viewLayout.getCurrentScrollTop() + T * S.cursorConfig.lineHeight;
        }
        _runHorizontalEditorScroll(S, k, C) {
            const T = this._computeDesiredScrollLeft(S, C);
            S.viewLayout.setScrollPosition({
                scrollLeft: T
            }, 0);
        }
        _computeDesiredScrollLeft(S, k) {
            const C = (k.direction === 4 ? -1 : 1) * k.value;
            return S.viewLayout.getCurrentScrollLeft() + C * S.cursorConfig.typicalHalfwidthCharacterWidth;
        }
    }
    t.EditorScrollImpl = g, t.EditorScroll = Zc(new g), t.ScrollLineUp = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollLineUp",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | Ze.UpArrow,
                    mac: {
                        primary: ut.WinCtrl | Ze.PageUp
                    }
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Up,
                by: cz.RawUnit.WrappedLine,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollPageUp = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollPageUp",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | Ze.PageUp,
                    win: {
                        primary: ut.Alt | Ze.PageUp
                    },
                    linux: {
                        primary: ut.Alt | Ze.PageUp
                    }
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Up,
                by: cz.RawUnit.Page,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollEditorTop = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollEditorTop",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Up,
                by: cz.RawUnit.Editor,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollLineDown = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollLineDown",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | Ze.DownArrow,
                    mac: {
                        primary: ut.WinCtrl | Ze.PageDown
                    }
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Down,
                by: cz.RawUnit.WrappedLine,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollPageDown = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollPageDown",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: ut.CtrlCmd | Ze.PageDown,
                    win: {
                        primary: ut.Alt | Ze.PageDown
                    },
                    linux: {
                        primary: ut.Alt | Ze.PageDown
                    }
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Down,
                by: cz.RawUnit.Page,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollEditorBottom = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollEditorBottom",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Down,
                by: cz.RawUnit.Editor,
                value: 1,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollLeft = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollLeft",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Left,
                by: cz.RawUnit.Column,
                value: 2,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    }), t.ScrollRight = Zc(new class extends G3 {
        constructor(){
            super({
                id: "scrollRight",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus
                }
            });
        }
        runCoreEditorCommand(y, S) {
            t.EditorScroll.runCoreEditorCommand(y, {
                to: cz.RawDirection.Right,
                by: cz.RawUnit.Column,
                value: 2,
                revealCursor: !1,
                select: !1,
                source: S.source
            });
        }
    });
    class f extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            k.position && (S.model.pushStackElement(), S.setCursorStates(k.source, 3, [
                Lj.word(S, S.getPrimaryCursorState(), this._inSelectionMode, k.position)
            ]), k.revealType !== 2 && S.revealAllCursors(k.source, !0, !0));
        }
    }
    t.WordSelect = Zc(new f({
        inSelectionMode: !1,
        id: "_wordSelect",
        precondition: void 0
    })), t.WordSelectDrag = Zc(new f({
        inSelectionMode: !0,
        id: "_wordSelectDrag",
        precondition: void 0
    })), t.LastCursorWordSelect = Zc(new class extends G3 {
        constructor(){
            super({
                id: "lastCursorWordSelect",
                precondition: void 0
            });
        }
        runCoreEditorCommand(y, S) {
            if (!S.position) return;
            const k = y.getLastAddedCursorIndex(), C = y.getCursorStates(), T = C.slice(0), I = C[k];
            T[k] = Lj.word(y, I, I.modelState.hasSelection(), S.position), y.model.pushStackElement(), y.setCursorStates(S.source, 3, T);
        }
    });
    class _ extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            k.position && (S.model.pushStackElement(), S.setCursorStates(k.source, 3, [
                Lj.line(S, S.getPrimaryCursorState(), this._inSelectionMode, k.position, k.viewPosition)
            ]), k.revealType !== 2 && S.revealAllCursors(k.source, !1, !0));
        }
    }
    t.LineSelect = Zc(new _({
        inSelectionMode: !1,
        id: "_lineSelect",
        precondition: void 0
    })), t.LineSelectDrag = Zc(new _({
        inSelectionMode: !0,
        id: "_lineSelectDrag",
        precondition: void 0
    }));
    class b extends G3 {
        constructor(S){
            super(S), this._inSelectionMode = S.inSelectionMode;
        }
        runCoreEditorCommand(S, k) {
            if (!k.position) return;
            const C = S.getLastAddedCursorIndex(), T = S.getCursorStates(), I = T.slice(0);
            I[C] = Lj.line(S, T[C], this._inSelectionMode, k.position, k.viewPosition), S.model.pushStackElement(), S.setCursorStates(k.source, 3, I);
        }
    }
    t.LastCursorLineSelect = Zc(new b({
        inSelectionMode: !1,
        id: "lastCursorLineSelect",
        precondition: void 0
    })), t.LastCursorLineSelectDrag = Zc(new b({
        inSelectionMode: !0,
        id: "lastCursorLineSelectDrag",
        precondition: void 0
    })), t.CancelSelection = Zc(new class extends G3 {
        constructor(){
            super({
                id: "cancelSelection",
                precondition: si.hasNonEmptySelection,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: Ze.Escape,
                    secondary: [
                        ut.Shift | Ze.Escape
                    ]
                }
            });
        }
        runCoreEditorCommand(y, S) {
            y.model.pushStackElement(), y.setCursorStates(S.source, 3, [
                Lj.cancelSelection(y, y.getPrimaryCursorState())
            ]), y.revealAllCursors(S.source, !0);
        }
    }), t.RemoveSecondaryCursors = Zc(new class extends G3 {
        constructor(){
            super({
                id: "removeSecondaryCursors",
                precondition: si.hasMultipleSelections,
                kbOpts: {
                    weight: Tw + 1,
                    kbExpr: si.textInputFocus,
                    primary: Ze.Escape,
                    secondary: [
                        ut.Shift | Ze.Escape
                    ]
                }
            });
        }
        runCoreEditorCommand(y, S) {
            y.model.pushStackElement(), y.setCursorStates(S.source, 3, [
                y.getPrimaryCursorState()
            ]), y.revealAllCursors(S.source, !0), qve(D(189, null));
        }
    }), t.RevealLine = Zc(new class extends G3 {
        constructor(){
            super({
                id: "revealLine",
                precondition: void 0,
                metadata: Rgn.metadata
            });
        }
        runCoreEditorCommand(y, S) {
            const k = S, C = k.lineNumber || 0;
            let T = typeof C == "number" ? C + 1 : parseInt(C) + 1;
            T < 1 && (T = 1);
            const I = y.model.getLineCount();
            T > I && (T = I);
            const A = new qt(T, 1, T, y.model.getLineMaxColumn(T));
            let P = 0;
            if (k.at) switch(k.at){
                case Rgn.RawAtArgument.Top:
                    P = 3;
                    break;
                case Rgn.RawAtArgument.Center:
                    P = 1;
                    break;
                case Rgn.RawAtArgument.Bottom:
                    P = 4;
                    break;
                default:
                    break;
            }
            const M = y.coordinatesConverter.convertModelRangeToViewRange(A);
            y.revealRange(S.source, !1, M, P, 0);
        }
    }), t.SelectAll = new class extends xwr {
        constructor(){
            super(K7o);
        }
        runDOMCommand(y) {
            _7 && (y.focus(), y.select()), y.ownerDocument.execCommand("selectAll");
        }
        runEditorCommand(y, S, k) {
            const C = S._getViewModel();
            C && this.runCoreEditorCommand(C, k);
        }
        runCoreEditorCommand(y, S) {
            y.model.pushStackElement(), y.setCursorStates("keyboard", 3, [
                Lj.selectAll(y, y.getPrimaryCursorState())
            ]);
        }
    }, t.SetSelection = Zc(new class extends G3 {
        constructor(){
            super({
                id: "setSelection",
                precondition: void 0
            });
        }
        runCoreEditorCommand(y, S) {
            S.selection && (y.model.pushStackElement(), y.setCursorStates(S.source, 3, [
                O1.fromModelSelection(S.selection)
            ]));
        }
    });
})(nB || (nB = {})), v6d = mt.and(si.textInputFocus, si.columnSelection), Agn(nB.CursorColumnSelectLeft.id, ut.Shift | Ze.LeftArrow), Agn(nB.CursorColumnSelectRight.id, ut.Shift | Ze.RightArrow), Agn(nB.CursorColumnSelectUp.id, ut.Shift | Ze.UpArrow), Agn(nB.CursorColumnSelectPageUp.id, ut.Shift | Ze.PageUp), Agn(nB.CursorColumnSelectDown.id, ut.Shift | Ze.DownArrow), Agn(nB.CursorColumnSelectPageDown.id, ut.Shift | Ze.PageDown), ((t)=>{
    class e extends Nj {
        runEditorCommand(i, r, s) {
            const o = r._getViewModel();
            o && this.runCoreEditingCommand(r, o, s || {});
        }
    }
    t.CoreEditingCommand = e, t.LineBreakInsert = Zc(new class extends e {
        constructor(){
            super({
                id: "lineBreakInsert",
                precondition: si.writable,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: 0,
                    mac: {
                        primary: ut.WinCtrl | Ze.KeyO
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, eri.lineBreakInsert(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection)));
        }
    }), t.Outdent = Zc(new class extends e {
        constructor(){
            super({
                id: "outdent",
                precondition: si.writable,
                kbOpts: {
                    weight: Tw,
                    kbExpr: mt.and(si.editorTextFocus, si.tabDoesNotMoveFocus),
                    primary: ut.Shift | Ze.Tab
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, eHe.outdent(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection))), n.pushUndoStop();
        }
    }), t.Tab = Zc(new class extends e {
        constructor(){
            super({
                id: "tab",
                precondition: si.writable,
                kbOpts: {
                    weight: Tw,
                    kbExpr: mt.and(si.editorTextFocus, si.tabDoesNotMoveFocus),
                    primary: Ze.Tab
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            n.pushUndoStop(), n.executeCommands(this.id, eHe.tab(i.cursorConfig, i.model, i.getCursorStates().map((s)=>s.modelState.selection))), n.pushUndoStop();
        }
    }), t.DeleteLeft = Zc(new class extends e {
        constructor(){
            super({
                id: "deleteLeft",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: Ze.Backspace,
                    secondary: [
                        ut.Shift | Ze.Backspace
                    ],
                    mac: {
                        primary: Ze.Backspace,
                        secondary: [
                            ut.Shift | Ze.Backspace,
                            ut.WinCtrl | Ze.KeyH,
                            ut.WinCtrl | Ze.Backspace
                        ]
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            const [s, o] = Bii.deleteLeft(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map((a)=>a.modelState.selection), i.getCursorAutoClosedCharacters());
            s && n.pushUndoStop(), n.executeCommands(this.id, o), i.setPrevEditOperationType(2);
        }
    }), t.DeleteRight = Zc(new class extends e {
        constructor(){
            super({
                id: "deleteRight",
                precondition: void 0,
                kbOpts: {
                    weight: Tw,
                    kbExpr: si.textInputFocus,
                    primary: Ze.Delete,
                    mac: {
                        primary: Ze.Delete,
                        secondary: [
                            ut.WinCtrl | Ze.KeyD,
                            ut.WinCtrl | Ze.Delete
                        ]
                    }
                }
            });
        }
        runCoreEditingCommand(n, i, r) {
            const [s, o] = Bii.deleteRight(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map((a)=>a.modelState.selection));
            s && n.pushUndoStop(), n.executeCommands(this.id, o), i.setPrevEditOperationType(3);
        }
    }), t.Undo = new class extends xwr {
        constructor(){
            super(ygn);
        }
        runDOMCommand(n) {
            g6d(n, "undo") || n.ownerDocument.execCommand("undo");
        }
        runEditorCommand(n, i, r) {
            if (!(!i.hasModel() || i.getOption(96) === !0)) return i.getModel().undo();
        }
    }, t.Redo = new class extends xwr {
        constructor(){
            super(Sgn);
        }
        runDOMCommand(n) {
            g6d(n, "redo") || n.ownerDocument.execCommand("redo");
        }
        runEditorCommand(n, i, r) {
            if (!(!i.hasModel() || i.getOption(96) === !0)) return i.getModel().redo();
        }
    };
})(Fbt || (Fbt = {})), SUo = class extends Nii {
    constructor(t, e, n){
        super({
            id: t,
            precondition: void 0,
            metadata: n
        }), this._handlerId = e;
    }
    runCommand(t, e) {
        const n = t.get(Ju).getFocusedCodeEditor();
        n && n.trigger("keyboard", this._handlerId, e);
    }
}, O9t("type", {
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
}), O9t("replacePreviousChar"), O9t("compositionType"), O9t("compositionStart"), O9t("compositionEnd"), O9t("paste"), O9t("cut");

}
