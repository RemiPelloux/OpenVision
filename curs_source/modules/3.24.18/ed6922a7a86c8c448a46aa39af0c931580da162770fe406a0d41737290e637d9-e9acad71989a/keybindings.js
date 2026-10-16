import { C_, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
var SK, iBe, yht, mAc, Dzr;
export { Dzr, SK, iBe, mAc, yht };
var __wakaru_Zie_initialized = false;
export function Zie() {
if (__wakaru_Zie_initialized) return;
__wakaru_Zie_initialized = true;
"use strict";
x(), si(), SK = class kSm {
    constructor(t, n, i, r, s){
        this.ctrlKey = t, this.shiftKey = n, this.altKey = i, this.metaKey = r, this.keyCode = s;
    }
    equals(t) {
        return t instanceof kSm && this.ctrlKey === t.ctrlKey && this.shiftKey === t.shiftKey && this.altKey === t.altKey && this.metaKey === t.metaKey && this.keyCode === t.keyCode;
    }
    getHashCode() {
        const t = this.ctrlKey ? "1" : "0", n = this.shiftKey ? "1" : "0", i = this.altKey ? "1" : "0", r = this.metaKey ? "1" : "0";
        return `K${t}${n}${i}${r}${this.keyCode}`;
    }
    isModifierKey() {
        return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
    }
    toKeybinding() {
        return new yht([
            this
        ]);
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
    }
}, iBe = class wSm {
    constructor(t, n, i, r, s){
        this.ctrlKey = t, this.shiftKey = n, this.altKey = i, this.metaKey = r, this.scanCode = s;
    }
    equals(t) {
        return t instanceof wSm && this.ctrlKey === t.ctrlKey && this.shiftKey === t.shiftKey && this.altKey === t.altKey && this.metaKey === t.metaKey && this.scanCode === t.scanCode;
    }
    getHashCode() {
        const t = this.ctrlKey ? "1" : "0", n = this.shiftKey ? "1" : "0", i = this.altKey ? "1" : "0", r = this.metaKey ? "1" : "0";
        return `S${t}${n}${i}${r}${this.scanCode}`;
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && (this.scanCode === 157 || this.scanCode === 161) || this.shiftKey && (this.scanCode === 158 || this.scanCode === 162) || this.altKey && (this.scanCode === 159 || this.scanCode === 163) || this.metaKey && (this.scanCode === 160 || this.scanCode === 164);
    }
}, yht = class {
    constructor(e){
        if (e.length === 0) throw C_("chords");
        this.chords = e;
    }
    getHashCode() {
        let e = "";
        for(let t = 0, n = this.chords.length; t < n; t++)t !== 0 && (e += ";"), e += this.chords[t].getHashCode();
        return e;
    }
    equals(e) {
        if (e === null || this.chords.length !== e.chords.length) return !1;
        for(let t = 0; t < this.chords.length; t++)if (!this.chords[t].equals(e.chords[t])) return !1;
        return !0;
    }
}, mAc = class {
    constructor(e, t, n, i, r, s){
        this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = i, this.keyLabel = r, this.keyAriaLabel = s;
    }
}, Dzr = class {
};

}
