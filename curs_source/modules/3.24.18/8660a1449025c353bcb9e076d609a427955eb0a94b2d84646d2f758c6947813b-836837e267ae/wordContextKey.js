import { D, Qe, Vn } from "./Iwo.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var VHt;
export { VHt };
var __wakaru__x1_initialized = false;
export function _x1() {
if (__wakaru__x1_initialized) return;
__wakaru__x1_initialized = true;
"use strict";
E(), Qe(), Hi(), Bt(), VHt = class {
    constructor(t, e){
        this._editor = t, this._enabled = !1, this._selectionListener = new Vn, this._ckAtEnd = VHt.AtEnd.bindTo(e), this._configListener = this._editor.onDidChangeConfiguration((n)=>n.hasChanged(128) && this._update()), this._update();
    }
    dispose() {
        this._configListener.dispose(), this._selectionListener.dispose(), this._ckAtEnd.reset();
    }
    _update() {
        const t = this._editor.getOption(128) === "on";
        if (this._enabled !== t) if (this._enabled = t, this._enabled) {
            const e = ()=>{
                if (!this._editor.hasModel()) {
                    this._ckAtEnd.set(!1);
                    return;
                }
                const n = this._editor.getModel(), i = this._editor.getSelection(), r = n.getWordAtPosition(i.getStartPosition());
                if (!r) {
                    this._ckAtEnd.set(!1);
                    return;
                }
                this._ckAtEnd.set(r.endColumn === i.getStartPosition().column && i.getStartPosition().lineNumber === i.getEndPosition().lineNumber);
            };
            this._selectionListener.value = this._editor.onDidChangeCursorSelection(e), e();
        } else this._selectionListener.value && (this._ckAtEnd.reset(), this._selectionListener.clear());
    }
}, VHt.AtEnd = new cn("atEndOfWord", !1, {
    type: "boolean",
    description: D(1628, null)
}), VHt = Re([
    F(1, Rr)
], VHt);

}
