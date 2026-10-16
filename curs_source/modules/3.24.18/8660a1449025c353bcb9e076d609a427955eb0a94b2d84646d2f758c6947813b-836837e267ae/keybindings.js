import { Ei, p1 } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Jse, vtt, p9t, sOd, oOd;
export { Jse, oOd, p9t, sOd, vtt };
var __wakaru_Qke_initialized = false;
export function Qke() {
if (__wakaru_Qke_initialized) return;
__wakaru_Qke_initialized = true;
"use strict";
E(), Ei(), Jse = class lAb {
    constructor(e, n, i, r, s){
        this.ctrlKey = e, this.shiftKey = n, this.altKey = i, this.metaKey = r, this.keyCode = s;
    }
    equals(e) {
        return e instanceof lAb && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
    }
    getHashCode() {
        const e = this.ctrlKey ? "1" : "0", n = this.shiftKey ? "1" : "0", i = this.altKey ? "1" : "0", r = this.metaKey ? "1" : "0";
        return `K${e}${n}${i}${r}${this.keyCode}`;
    }
    isModifierKey() {
        return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
    }
    toKeybinding() {
        return new p9t([
            this
        ]);
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
    }
}, vtt = class cAb {
    constructor(e, n, i, r, s){
        this.ctrlKey = e, this.shiftKey = n, this.altKey = i, this.metaKey = r, this.scanCode = s;
    }
    equals(e) {
        return e instanceof cAb && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.scanCode === e.scanCode;
    }
    getHashCode() {
        const e = this.ctrlKey ? "1" : "0", n = this.shiftKey ? "1" : "0", i = this.altKey ? "1" : "0", r = this.metaKey ? "1" : "0";
        return `S${e}${n}${i}${r}${this.scanCode}`;
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && (this.scanCode === 157 || this.scanCode === 161) || this.shiftKey && (this.scanCode === 158 || this.scanCode === 162) || this.altKey && (this.scanCode === 159 || this.scanCode === 163) || this.metaKey && (this.scanCode === 160 || this.scanCode === 164);
    }
}, p9t = class {
    constructor(t){
        if (t.length === 0) throw p1("chords");
        this.chords = t;
    }
    getHashCode() {
        let t = "";
        for(let e = 0, n = this.chords.length; e < n; e++)e !== 0 && (t += ";"), t += this.chords[e].getHashCode();
        return t;
    }
    equals(t) {
        if (t === null || this.chords.length !== t.chords.length) return !1;
        for(let e = 0; e < this.chords.length; e++)if (!this.chords[e].equals(t.chords[e])) return !1;
        return !0;
    }
}, sOd = class {
    constructor(t, e, n, i, r, s){
        this.ctrlKey = t, this.shiftKey = e, this.altKey = n, this.metaKey = i, this.keyLabel = r, this.keyAriaLabel = s;
    }
}, oOd = class {
};

}
