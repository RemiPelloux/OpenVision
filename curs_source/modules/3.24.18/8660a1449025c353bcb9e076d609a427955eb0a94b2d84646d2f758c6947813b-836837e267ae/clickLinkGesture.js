import { Di, Gt, Qe, st, tt } from "./Iwo.js";
import { Ma } from "./keyCodes.js";
import { E } from "./tslib.es6.js";
import { Czo, sKd } from "./ze.js";
var MEr, Tzo, Hoi, Woi;
export { Hoi, MEr, Tzo, Woi };
var __wakaru_DEr_initialized = false;
export function DEr() {
if (__wakaru_DEr_initialized) return;
__wakaru_DEr_initialized = true;
"use strict";
E(), Gt(), Ma(), Qe(), Di(), MEr = class {
    constructor(t, e){
        this.target = t.target, this.isLeftClick = t.event.leftButton, this.isMiddleClick = t.event.middleButton, this.isRightClick = t.event.rightButton, this.hasTriggerModifier = Czo(t.event, e.triggerModifier), this.hasSideBySideModifier = Czo(t.event, e.triggerSideBySideModifier), this.isNoneOrSingleMouseDown = t.event.detail <= 1;
    }
}, Tzo = class {
    constructor(t, e){
        this.keyCodeIsTriggerKey = t.keyCode === e.triggerKey, this.keyCodeIsSideBySideKey = t.keyCode === e.triggerSideBySideKey, this.hasTriggerModifier = Czo(t, e.triggerModifier);
    }
}, Hoi = class {
    constructor(t, e, n, i){
        this.triggerKey = t, this.triggerModifier = e, this.triggerSideBySideKey = n, this.triggerSideBySideModifier = i;
    }
    equals(t) {
        return this.triggerKey === t.triggerKey && this.triggerModifier === t.triggerModifier && this.triggerSideBySideKey === t.triggerSideBySideKey && this.triggerSideBySideModifier === t.triggerSideBySideModifier;
    }
}, Woi = class extends st {
    constructor(t, e){
        super(), this._onMouseMoveOrRelevantKeyDown = this._register(new tt), this.onMouseMoveOrRelevantKeyDown = this._onMouseMoveOrRelevantKeyDown.event, this._onExecute = this._register(new tt), this.onExecute = this._onExecute.event, this._onCancel = this._register(new tt), this.onCancel = this._onCancel.event, this._editor = t, this._extractLineNumberFromMouseEvent = e?.extractLineNumberFromMouseEvent ?? ((n)=>n.target.position ? n.target.position.lineNumber : 0), this._opts = sKd(this._editor.getOption(79)), this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._lineNumberOnMouseDown = 0, this._register(this._editor.onDidChangeConfiguration((n)=>{
            if (n.hasChanged(79)) {
                const i = sKd(this._editor.getOption(79));
                if (this._opts.equals(i)) return;
                this._opts = i, this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._lineNumberOnMouseDown = 0, this._onCancel.fire();
            }
        })), this._register(this._editor.onMouseMove((n)=>this._onEditorMouseMove(new MEr(n, this._opts)))), this._register(this._editor.onMouseDown((n)=>this._onEditorMouseDown(new MEr(n, this._opts)))), this._register(this._editor.onMouseUp((n)=>this._onEditorMouseUp(new MEr(n, this._opts)))), this._register(this._editor.onKeyDown((n)=>this._onEditorKeyDown(new Tzo(n, this._opts)))), this._register(this._editor.onKeyUp((n)=>this._onEditorKeyUp(new Tzo(n, this._opts)))), this._register(this._editor.onMouseDrag(()=>this._resetHandler())), this._register(this._editor.onDidChangeCursorSelection((n)=>this._onDidChangeCursorSelection(n))), this._register(this._editor.onDidChangeModel((n)=>this._resetHandler())), this._register(this._editor.onDidChangeModelContent(()=>this._resetHandler())), this._register(this._editor.onDidScrollChange((n)=>{
            (n.scrollTopChanged || n.scrollLeftChanged) && this._resetHandler();
        }));
    }
    _onDidChangeCursorSelection(t) {
        t.selection && t.selection.startColumn !== t.selection.endColumn && this._resetHandler();
    }
    _onEditorMouseMove(t) {
        this._lastMouseMoveEvent = t, this._onMouseMoveOrRelevantKeyDown.fire([
            t,
            null
        ]);
    }
    _onEditorMouseDown(t) {
        this._hasTriggerKeyOnMouseDown = t.hasTriggerModifier, this._lineNumberOnMouseDown = this._extractLineNumberFromMouseEvent(t);
    }
    _onEditorMouseUp(t) {
        const e = this._extractLineNumberFromMouseEvent(t);
        this._hasTriggerKeyOnMouseDown && this._lineNumberOnMouseDown && this._lineNumberOnMouseDown === e && this._onExecute.fire(t);
    }
    _onEditorKeyDown(t) {
        this._lastMouseMoveEvent && (t.keyCodeIsTriggerKey || t.keyCodeIsSideBySideKey && t.hasTriggerModifier) ? this._onMouseMoveOrRelevantKeyDown.fire([
            this._lastMouseMoveEvent,
            t
        ]) : t.hasTriggerModifier && this._onCancel.fire();
    }
    _onEditorKeyUp(t) {
        t.keyCodeIsTriggerKey && this._onCancel.fire();
    }
    _resetHandler() {
        this._lastMouseMoveEvent = null, this._hasTriggerKeyOnMouseDown = !1, this._onCancel.fire();
    }
};

}
