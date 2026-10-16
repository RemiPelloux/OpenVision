import { Di, a_ } from "./Iwo.js";
import { Pgn, nB } from "./coreCommands.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
var Njd;
export { Njd };
var __wakaru_RMy_initialized = false;
export function RMy() {
if (__wakaru_RMy_initialized) return;
__wakaru_RMy_initialized = true;
"use strict";
E(), Pgn(), jc(), Di(), Njd = class {
    constructor(t, e, n, i){
        this.configuration = t, this.viewModel = e, this.userInputEvents = n, this.commandDelegate = i;
    }
    paste(t, e, n, i) {
        this.commandDelegate.paste(t, e, n, i);
    }
    type(t) {
        this.commandDelegate.type(t);
    }
    compositionType(t, e, n, i) {
        this.commandDelegate.compositionType(t, e, n, i);
    }
    compositionStart() {
        this.commandDelegate.startComposition();
    }
    compositionEnd() {
        this.commandDelegate.endComposition();
    }
    cut() {
        this.commandDelegate.cut();
    }
    setSelection(t) {
        nB.SetSelection.runCoreEditorCommand(this.viewModel, {
            source: "keyboard",
            selection: t
        });
    }
    _validateViewColumn(t) {
        const e = this.viewModel.getLineMinColumn(t.lineNumber);
        return t.column < e ? new er(t.lineNumber, e) : t;
    }
    _hasMulticursorModifier(t) {
        switch(this.configuration.options.get(79)){
            case "altKey":
                return t.altKey;
            case "ctrlKey":
                return t.ctrlKey;
            case "metaKey":
                return t.metaKey;
            default:
                return !1;
        }
    }
    _hasNonMulticursorModifier(t) {
        switch(this.configuration.options.get(79)){
            case "altKey":
                return t.ctrlKey || t.metaKey;
            case "ctrlKey":
                return t.altKey || t.metaKey;
            case "metaKey":
                return t.ctrlKey || t.altKey;
            default:
                return !1;
        }
    }
    dispatchMouse(t) {
        const e = this.configuration.options, n = a_ && e.get(112), i = e.get(22);
        t.middleButton && !n ? this._columnSelect(t.position, t.mouseColumn, t.inSelectionMode) : t.startedOnLineNumbers ? this._hasMulticursorModifier(t) ? t.inSelectionMode ? this._lastCursorLineSelect(t.position, t.revealType) : this._createCursor(t.position, !0) : t.inSelectionMode ? this._lineSelectDrag(t.position, t.revealType) : this._lineSelect(t.position, t.revealType) : t.mouseDownCount >= 4 ? this._selectAll() : t.mouseDownCount === 3 ? this._hasMulticursorModifier(t) ? t.inSelectionMode ? this._lastCursorLineSelectDrag(t.position, t.revealType) : this._lastCursorLineSelect(t.position, t.revealType) : t.inSelectionMode ? this._lineSelectDrag(t.position, t.revealType) : this._lineSelect(t.position, t.revealType) : t.mouseDownCount === 2 ? t.onInjectedText || (this._hasMulticursorModifier(t) ? this._lastCursorWordSelect(t.position, t.revealType) : t.inSelectionMode ? this._wordSelectDrag(t.position, t.revealType) : this._wordSelect(t.position, t.revealType)) : this._hasMulticursorModifier(t) ? this._hasNonMulticursorModifier(t) || (t.shiftKey ? this._columnSelect(t.position, t.mouseColumn, !0) : t.inSelectionMode ? this._lastCursorMoveToSelect(t.position, t.revealType) : this._createCursor(t.position, !1)) : t.inSelectionMode ? t.altKey ? this._columnSelect(t.position, t.mouseColumn, !0) : i ? this._columnSelect(t.position, t.mouseColumn, !0) : this._moveToSelect(t.position, t.revealType) : this.moveTo(t.position, t.revealType);
    }
    _usualArgs(t, e) {
        return t = this._validateViewColumn(t), {
            source: "mouse",
            position: this._convertViewToModelPosition(t),
            viewPosition: t,
            revealType: e
        };
    }
    moveTo(t, e) {
        nB.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _moveToSelect(t, e) {
        nB.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _columnSelect(t, e, n) {
        t = this._validateViewColumn(t), nB.ColumnSelect.runCoreEditorCommand(this.viewModel, {
            source: "mouse",
            position: this._convertViewToModelPosition(t),
            viewPosition: t,
            mouseColumn: e,
            doColumnSelect: n
        });
    }
    _createCursor(t, e) {
        t = this._validateViewColumn(t), nB.CreateCursor.runCoreEditorCommand(this.viewModel, {
            source: "mouse",
            position: this._convertViewToModelPosition(t),
            viewPosition: t,
            wholeLine: e
        });
    }
    _lastCursorMoveToSelect(t, e) {
        nB.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _wordSelect(t, e) {
        nB.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _wordSelectDrag(t, e) {
        nB.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _lastCursorWordSelect(t, e) {
        nB.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _lineSelect(t, e) {
        nB.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _lineSelectDrag(t, e) {
        nB.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _lastCursorLineSelect(t, e) {
        nB.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _lastCursorLineSelectDrag(t, e) {
        nB.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(t, e));
    }
    _selectAll() {
        nB.SelectAll.runCoreEditorCommand(this.viewModel, {
            source: "mouse"
        });
    }
    _convertViewToModelPosition(t) {
        return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(t);
    }
    emitKeyDown(t) {
        this.userInputEvents.emitKeyDown(t);
    }
    emitKeyUp(t) {
        this.userInputEvents.emitKeyUp(t);
    }
    emitContextMenu(t) {
        this.userInputEvents.emitContextMenu(t);
    }
    emitMouseMove(t) {
        this.userInputEvents.emitMouseMove(t);
    }
    emitMouseLeave(t) {
        this.userInputEvents.emitMouseLeave(t);
    }
    emitMouseUp(t) {
        this.userInputEvents.emitMouseUp(t);
    }
    emitMouseDown(t) {
        this.userInputEvents.emitMouseDown(t);
    }
    emitMouseDrag(t) {
        this.userInputEvents.emitMouseDrag(t);
    }
    emitMouseDrop(t) {
        this.userInputEvents.emitMouseDrop(t);
    }
    emitMouseDropCanceled() {
        this.userInputEvents.emitMouseDropCanceled();
    }
    emitMouseWheel(t) {
        this.userInputEvents.emitMouseWheel(t);
    }
};

}
