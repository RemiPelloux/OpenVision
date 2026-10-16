import { Di, _r } from "./Iwo.js";
import { A_ } from "./browser_2.js";
import { Ma } from "./keyCodes.js";
import { Jse, Qke } from "./keybindings.js";
import { E } from "./tslib.es6.js";
import { KIy } from "./ze.js";
var aOd, lOd, cOd, uOd, rv;
export { aOd, cOd, lOd, rv, uOd };
var __wakaru_nT_initialized = false;
export function nT() {
if (__wakaru_nT_initialized) return;
__wakaru_nT_initialized = true;
"use strict";
E(), A_(), Ma(), Qke(), Di(), aOd = _r ? 256 : 2048, lOd = 512, cOd = 1024, uOd = _r ? 2048 : 256, rv = class {
    constructor(t){
        this._standardKeyboardEventBrand = !0;
        const e = t;
        this.browserEvent = e, this.target = e.target, this.ctrlKey = e.ctrlKey, this.shiftKey = e.shiftKey, this.altKey = e.altKey, this.metaKey = e.metaKey, this.altGraphKey = e.getModifierState?.("AltGraph"), this.keyCode = KIy(e), this.code = e.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
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
    equals(t) {
        return this._asKeybinding === t;
    }
    _computeKeybinding() {
        let t = 0;
        this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t = this.keyCode);
        let e = 0;
        return this.ctrlKey && (e |= aOd), this.altKey && (e |= lOd), this.shiftKey && (e |= cOd), this.metaKey && (e |= uOd), e |= t, e;
    }
    _computeKeyCodeChord() {
        let t = 0;
        return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t = this.keyCode), new Jse(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, t);
    }
};

}
