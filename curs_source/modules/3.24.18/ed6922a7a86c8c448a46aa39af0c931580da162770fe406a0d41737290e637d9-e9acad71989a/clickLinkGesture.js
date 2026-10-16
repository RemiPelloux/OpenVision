import { Se, bt, jn, ve, we } from "./HVr.js";
import { Pr } from "./keyCodes.js";
import { Zis, pHc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Fyi, Qis, n_n, YFt;
export { Fyi, Qis, YFt, n_n };
var __wakaru_i_n_initialized = false;
export function i_n() {
if (__wakaru_i_n_initialized) return;
__wakaru_i_n_initialized = true;
"use strict";
x(), bt(), Pr(), Se(), jn(), Fyi = class {
    constructor(e, t){
        this.target = e.target, this.isLeftClick = e.event.leftButton, this.isMiddleClick = e.event.middleButton, this.isRightClick = e.event.rightButton, this.hasTriggerModifier = Zis(e.event, t.triggerModifier), this.hasSideBySideModifier = Zis(e.event, t.triggerSideBySideModifier), this.isNoneOrSingleMouseDown = e.event.detail <= 1;
    }
}, Qis = class {
    constructor(e, t){
        this.keyCodeIsTriggerKey = e.keyCode === t.triggerKey, this.keyCodeIsSideBySideKey = e.keyCode === t.triggerSideBySideKey, this.hasTriggerModifier = Zis(e, t.triggerModifier);
    }
}, n_n = class {
    constructor(e, t, n, i){
        this.triggerKey = e, this.triggerModifier = t, this.triggerSideBySideKey = n, this.triggerSideBySideModifier = i;
    }
    equals(e) {
        return this.triggerKey === e.triggerKey && this.triggerModifier === e.triggerModifier && this.triggerSideBySideKey === e.triggerSideBySideKey && this.triggerSideBySideModifier === e.triggerSideBySideModifier;
    }
}, YFt = class extends we {
    constructor(e, t){
        super(), this._onMouseMoveOrRelevantKeyDown = this._register(new ve), this.onMouseMoveOrRelevantKeyDown = this._onMouseMoveOrRelevantKeyDown.event, this._onExecute = this._register(new ve), this.onExecute = this._onExecute.event, this._onCancel = this._register(new ve), this.onCancel = this._onCancel.event, this._editor = e, this._extractLineNumberFromMouseEvent = t?.extractLineNumberFromMouseEvent ?? ((n)=>n.target.position ? n.target.position.lineNumber : 0), this._opts = pHc(this._editor.getOption(79)), this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._lineNumberOnMouseDown = 0, this._register(this._editor.onDidChangeConfiguration((n)=>{
            if (n.hasChanged(79)) {
                const i = pHc(this._editor.getOption(79));
                if (this._opts.equals(i)) return;
                this._opts = i, this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._lineNumberOnMouseDown = 0, this._onCancel.fire();
            }
        })), this._register(this._editor.onMouseMove((n)=>this._onEditorMouseMove(new Fyi(n, this._opts)))), this._register(this._editor.onMouseDown((n)=>this._onEditorMouseDown(new Fyi(n, this._opts)))), this._register(this._editor.onMouseUp((n)=>this._onEditorMouseUp(new Fyi(n, this._opts)))), this._register(this._editor.onKeyDown((n)=>this._onEditorKeyDown(new Qis(n, this._opts)))), this._register(this._editor.onKeyUp((n)=>this._onEditorKeyUp(new Qis(n, this._opts)))), this._register(this._editor.onMouseDrag(()=>this._resetHandler())), this._register(this._editor.onDidChangeCursorSelection((n)=>this._onDidChangeCursorSelection(n))), this._register(this._editor.onDidChangeModel((n)=>this._resetHandler())), this._register(this._editor.onDidChangeModelContent(()=>this._resetHandler())), this._register(this._editor.onDidScrollChange((n)=>{
            (n.scrollTopChanged || n.scrollLeftChanged) && this._resetHandler();
        }));
    }
    _onDidChangeCursorSelection(e) {
        e.selection && e.selection.startColumn !== e.selection.endColumn && this._resetHandler();
    }
    _onEditorMouseMove(e) {
        this._lastMouseMoveEvent = e, this._onMouseMoveOrRelevantKeyDown.fire([
            e,
            null
        ]);
    }
    _onEditorMouseDown(e) {
        this._hasTriggerKeyOnMouseDown = e.hasTriggerModifier, this._lineNumberOnMouseDown = this._extractLineNumberFromMouseEvent(e);
    }
    _onEditorMouseUp(e) {
        const t = this._extractLineNumberFromMouseEvent(e);
        this._hasTriggerKeyOnMouseDown && this._lineNumberOnMouseDown && this._lineNumberOnMouseDown === t && this._onExecute.fire(e);
    }
    _onEditorKeyDown(e) {
        this._lastMouseMoveEvent && (e.keyCodeIsTriggerKey || e.keyCodeIsSideBySideKey && e.hasTriggerModifier) ? this._onMouseMoveOrRelevantKeyDown.fire([
            this._lastMouseMoveEvent,
            e
        ]) : e.hasTriggerModifier && this._onCancel.fire();
    }
    _onEditorKeyUp(e) {
        e.keyCodeIsTriggerKey && this._onCancel.fire();
    }
    _resetHandler() {
        this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._onCancel.fire();
    }
};

}
