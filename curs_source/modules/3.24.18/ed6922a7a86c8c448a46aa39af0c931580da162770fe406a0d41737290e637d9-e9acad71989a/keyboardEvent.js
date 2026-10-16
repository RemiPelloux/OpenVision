import { Ai, jn } from "./HVr.js";
import { n_ } from "./browser_2.js";
import { Pr } from "./keyCodes.js";
import { SK, Zie } from "./keybindings.js";
import { Edg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var gAc, fAc, vAc, _Ac, gu;
export { _Ac, fAc, gAc, gu, vAc };
var __wakaru_jg_initialized = false;
export function jg() {
if (__wakaru_jg_initialized) return;
__wakaru_jg_initialized = true;
"use strict";
x(), n_(), Pr(), Zie(), jn(), gAc = Ai ? 256 : 2048, fAc = 512, vAc = 1024, _Ac = Ai ? 2048 : 256, gu = class {
    constructor(e){
        this._standardKeyboardEventBrand = !0;
        const t = e;
        this.browserEvent = t, this.target = t.target, this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, this.altGraphKey = t.getModifierState?.("AltGraph"), this.keyCode = Edg(t), this.code = t.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
    }
    preventDefault() {
        this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
    }
    stopPropagation() {
        this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
    }
    toKeyCodeChord() {
        return this._asKeyCodeChord;
    }
    equals(e) {
        return this._asKeybinding === e;
    }
    _computeKeybinding() {
        let e = 0;
        this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode);
        let t = 0;
        return this.ctrlKey && (t |= gAc), this.altKey && (t |= fAc), this.shiftKey && (t |= vAc), this.metaKey && (t |= _Ac), t |= e, t;
    }
    _computeKeyCodeChord() {
        let e = 0;
        return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode), new SK(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, e);
    }
};

}
