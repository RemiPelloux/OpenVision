import { jn, vf } from "./HVr.js";
import { IO, sze } from "./coreCommands.js";
import { Yn, ya } from "./position.js";
import { x } from "./tslib.es6.js";
var y9c;
export { y9c };
var __wakaru_Fvg_initialized = false;
export function Fvg() {
if (__wakaru_Fvg_initialized) return;
__wakaru_Fvg_initialized = true;
"use strict";
x(), sze(), ya(), jn(), y9c = class {
    constructor(e, t, n, i){
        this.configuration = e, this.viewModel = t, this.userInputEvents = n, this.commandDelegate = i;
    }
    paste(e, t, n, i) {
        this.commandDelegate.paste(e, t, n, i);
    }
    type(e) {
        this.commandDelegate.type(e);
    }
    compositionType(e, t, n, i) {
        this.commandDelegate.compositionType(e, t, n, i);
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
    setSelection(e) {
        IO.SetSelection.runCoreEditorCommand(this.viewModel, {
            source: "keyboard",
            selection: e
        });
    }
    _validateViewColumn(e) {
        const t = this.viewModel.getLineMinColumn(e.lineNumber);
        return e.column < t ? new Yn(e.lineNumber, t) : e;
    }
    _hasMulticursorModifier(e) {
        switch(this.configuration.options.get(79)){
            case "altKey":
                return e.altKey;
            case "ctrlKey":
                return e.ctrlKey;
            case "metaKey":
                return e.metaKey;
            default:
                return !1;
        }
    }
    _hasNonMulticursorModifier(e) {
        switch(this.configuration.options.get(79)){
            case "altKey":
                return e.ctrlKey || e.metaKey;
            case "ctrlKey":
                return e.altKey || e.metaKey;
            case "metaKey":
                return e.ctrlKey || e.altKey;
            default:
                return !1;
        }
    }
    dispatchMouse(e) {
        const t = this.configuration.options, n = vf && t.get(112), i = t.get(22);
        e.middleButton && !n ? this._columnSelect(e.position, e.mouseColumn, e.inSelectionMode) : e.startedOnLineNumbers ? this._hasMulticursorModifier(e) ? e.inSelectionMode ? this._lastCursorLineSelect(e.position, e.revealType) : this._createCursor(e.position, !0) : e.inSelectionMode ? this._lineSelectDrag(e.position, e.revealType) : this._lineSelect(e.position, e.revealType) : e.mouseDownCount >= 4 ? this._selectAll() : e.mouseDownCount === 3 ? this._hasMulticursorModifier(e) ? e.inSelectionMode ? this._lastCursorLineSelectDrag(e.position, e.revealType) : this._lastCursorLineSelect(e.position, e.revealType) : e.inSelectionMode ? this._lineSelectDrag(e.position, e.revealType) : this._lineSelect(e.position, e.revealType) : e.mouseDownCount === 2 ? e.onInjectedText || (this._hasMulticursorModifier(e) ? this._lastCursorWordSelect(e.position, e.revealType) : e.inSelectionMode ? this._wordSelectDrag(e.position, e.revealType) : this._wordSelect(e.position, e.revealType)) : this._hasMulticursorModifier(e) ? this._hasNonMulticursorModifier(e) || (e.shiftKey ? this._columnSelect(e.position, e.mouseColumn, !0) : e.inSelectionMode ? this._lastCursorMoveToSelect(e.position, e.revealType) : this._createCursor(e.position, !1)) : e.inSelectionMode ? e.altKey ? this._columnSelect(e.position, e.mouseColumn, !0) : i ? this._columnSelect(e.position, e.mouseColumn, !0) : this._moveToSelect(e.position, e.revealType) : this.moveTo(e.position, e.revealType);
    }
    _usualArgs(e, t) {
        return e = this._validateViewColumn(e), {
            source: "mouse",
            position: this._convertViewToModelPosition(e),
            viewPosition: e,
            revealType: t
        };
    }
    moveTo(e, t) {
        IO.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _moveToSelect(e, t) {
        IO.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _columnSelect(e, t, n) {
        e = this._validateViewColumn(e), IO.ColumnSelect.runCoreEditorCommand(this.viewModel, {
            source: "mouse",
            position: this._convertViewToModelPosition(e),
            viewPosition: e,
            mouseColumn: t,
            doColumnSelect: n
        });
    }
    _createCursor(e, t) {
        e = this._validateViewColumn(e), IO.CreateCursor.runCoreEditorCommand(this.viewModel, {
            source: "mouse",
            position: this._convertViewToModelPosition(e),
            viewPosition: e,
            wholeLine: t
        });
    }
    _lastCursorMoveToSelect(e, t) {
        IO.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _wordSelect(e, t) {
        IO.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _wordSelectDrag(e, t) {
        IO.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _lastCursorWordSelect(e, t) {
        IO.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _lineSelect(e, t) {
        IO.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _lineSelectDrag(e, t) {
        IO.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _lastCursorLineSelect(e, t) {
        IO.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _lastCursorLineSelectDrag(e, t) {
        IO.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e, t));
    }
    _selectAll() {
        IO.SelectAll.runCoreEditorCommand(this.viewModel, {
            source: "mouse"
        });
    }
    _convertViewToModelPosition(e) {
        return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(e);
    }
    emitKeyDown(e) {
        this.userInputEvents.emitKeyDown(e);
    }
    emitKeyUp(e) {
        this.userInputEvents.emitKeyUp(e);
    }
    emitContextMenu(e) {
        this.userInputEvents.emitContextMenu(e);
    }
    emitMouseMove(e) {
        this.userInputEvents.emitMouseMove(e);
    }
    emitMouseLeave(e) {
        this.userInputEvents.emitMouseLeave(e);
    }
    emitMouseUp(e) {
        this.userInputEvents.emitMouseUp(e);
    }
    emitMouseDown(e) {
        this.userInputEvents.emitMouseDown(e);
    }
    emitMouseDrag(e) {
        this.userInputEvents.emitMouseDrag(e);
    }
    emitMouseDrop(e) {
        this.userInputEvents.emitMouseDrop(e);
    }
    emitMouseDropCanceled() {
        this.userInputEvents.emitMouseDropCanceled();
    }
    emitMouseWheel(e) {
        this.userInputEvents.emitMouseWheel(e);
    }
};

}
