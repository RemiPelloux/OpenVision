import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
var Xbt;
export { Xbt };
var __wakaru_i0r_initialized = false;
export function i0r() {
if (__wakaru_i0r_initialized) return;
__wakaru_i0r_initialized = true;
"use strict";
E(), Xo(), Xbt = class {
    constructor(){
        this.id = Ai(), this._textValue = "", this._richTextValue = void 0, this._textListeners = new Map, this._editNodeListeners = new Map, this._submitListeners = new Map, this._focusListeners = new Map, this.forceFocus = ()=>{}, this._clearListeners = new Map;
    }
    setForceFocusNoScroll(t) {
        this.forceFocus = t;
    }
    doForceFocusNoScroll() {
        this.forceFocus();
    }
    onTextChange(t) {
        const e = Ai();
        return this._textListeners.set(e, t), ()=>{
            this._textListeners.delete(e);
        };
    }
    onFireEditNode(t) {
        const e = Ai();
        return this._editNodeListeners.set(e, t), ()=>{
            this._editNodeListeners.delete(e);
        };
    }
    getText() {
        return this._textValue;
    }
    getRichText() {
        return this._richTextValue;
    }
    setText(t, e) {
        if (!(t === this._textValue && e === this._richTextValue)) {
            this._textValue = t, this._richTextValue = e;
            for (const n of this._textListeners.values())n(t, e);
        }
    }
    fireEditNode(t) {
        for (const e of this._editNodeListeners.values())e(t);
    }
    numSubmitListeners() {
        return this._submitListeners.size;
    }
    onSubmit(t) {
        const e = Ai();
        return this._submitListeners.set(e, t), ()=>{
            this._submitListeners.delete(e);
        };
    }
    submit() {
        for (const t of this._submitListeners.values())t();
    }
    onFocus(t) {
        const e = Ai();
        return this._focusListeners.set(e, t), ()=>{
            this._focusListeners.delete(e);
        };
    }
    notifyFocus() {
        for (const t of this._focusListeners.values())t();
    }
    clear() {
        this._textValue = "";
        for (const t of this._clearListeners.values())t();
    }
    onClear(t) {
        const e = Ai();
        return this._clearListeners.set(e, t), ()=>{
            this._clearListeners.delete(e);
        };
    }
};

}
