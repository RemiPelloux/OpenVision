import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var $Be;
export { $Be };
var __wakaru_Kgn_initialized = false;
export function Kgn() {
if (__wakaru_Kgn_initialized) return;
__wakaru_Kgn_initialized = true;
"use strict";
x(), Js(), $Be = class {
    constructor(){
        this.id = zn(), this._textValue = "", this._richTextValue = void 0, this._textListeners = new Map, this._editNodeListeners = new Map, this._submitListeners = new Map, this._focusListeners = new Map, this.forceFocus = ()=>{}, this._clearListeners = new Map;
    }
    setForceFocusNoScroll(e) {
        this.forceFocus = e;
    }
    doForceFocusNoScroll() {
        this.forceFocus();
    }
    onTextChange(e) {
        const t = zn();
        return this._textListeners.set(t, e), ()=>{
            this._textListeners.delete(t);
        };
    }
    onFireEditNode(e) {
        const t = zn();
        return this._editNodeListeners.set(t, e), ()=>{
            this._editNodeListeners.delete(t);
        };
    }
    getText() {
        return this._textValue;
    }
    getRichText() {
        return this._richTextValue;
    }
    setText(e, t) {
        if (!(e === this._textValue && t === this._richTextValue)) {
            this._textValue = e, this._richTextValue = t;
            for (const n of this._textListeners.values())n(e, t);
        }
    }
    fireEditNode(e) {
        for (const t of this._editNodeListeners.values())t(e);
    }
    numSubmitListeners() {
        return this._submitListeners.size;
    }
    onSubmit(e) {
        const t = zn();
        return this._submitListeners.set(t, e), ()=>{
            this._submitListeners.delete(t);
        };
    }
    submit() {
        for (const e of this._submitListeners.values())e();
    }
    onFocus(e) {
        const t = zn();
        return this._focusListeners.set(t, e), ()=>{
            this._focusListeners.delete(t);
        };
    }
    notifyFocus() {
        for (const e of this._focusListeners.values())e();
    }
    clear() {
        this._textValue = "";
        for (const e of this._clearListeners.values())e();
    }
    onClear(e) {
        const t = zn();
        return this._clearListeners.set(t, e), ()=>{
            this._clearListeners.delete(t);
        };
    }
};

}
