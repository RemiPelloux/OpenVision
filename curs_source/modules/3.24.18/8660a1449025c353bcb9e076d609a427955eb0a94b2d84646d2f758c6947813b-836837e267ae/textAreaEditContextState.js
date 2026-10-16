import { Fa, Ike, bdn } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var e_e, uCr, DQ;
export { DQ, e_e, uCr };
var __wakaru_Ijd_initialized = false;
export function Ijd() {
if (__wakaru_Ijd_initialized) return;
__wakaru_Ijd_initialized = true;
"use strict";
E(), Fa(), e_e = !1, uCr = class QYs {
    constructor(e, n, i, r, s){
        this.value = e, this.selectionStart = n, this.selectionEnd = i, this.selection = r, this.newlineCountBeforeSelection = s;
    }
    toString() {
        return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
    }
    static readFromTextArea(e, n) {
        const i = e.getValue(), r = e.getSelectionStart(), s = e.getSelectionEnd();
        let o;
        if (n) {
            const a = i.substring(0, r), l = n.value.substring(0, n.selectionStart);
            a === l && (o = n.newlineCountBeforeSelection);
        }
        return new QYs(i, r, s, null, o);
    }
    collapseSelection() {
        return this.selectionStart === this.value.length ? this : new QYs(this.value, this.value.length, this.value.length, null, void 0);
    }
    isWrittenToTextArea(e, n) {
        const i = this.value === e.getValue();
        return n ? this.selectionStart === e.getSelectionStart() && this.selectionEnd === e.getSelectionEnd() && i : i;
    }
    writeToTextArea(e, n, i) {
        e_e && console.log(`writeToTextArea ${e}: ${this.toString()}`), n.setValue(e, this.value), i && n.setSelectionRange(e, this.selectionStart, this.selectionEnd);
    }
    deduceEditorPosition(e) {
        if (e <= this.selectionStart) {
            const r = this.value.substring(e, this.selectionStart);
            return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, r, -1);
        }
        if (e >= this.selectionEnd) {
            const r = this.value.substring(this.selectionEnd, e);
            return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, r, 1);
        }
        const n = this.value.substring(this.selectionStart, e);
        if (n.indexOf("\u2026") === -1) return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, n, 1);
        const i = this.value.substring(e, this.selectionEnd);
        return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, i, -1);
    }
    _finishDeduceEditorPosition(e, n, i) {
        let r = 0, s = -1;
        for(; (s = n.indexOf(`
`, s + 1)) !== -1;)r++;
        return [
            e,
            i * n.length,
            r
        ];
    }
    static deduceInput(e, n, i) {
        if (!e) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        e_e && (console.log("------------------------deduceInput"), console.log(`PREVIOUS STATE: ${e.toString()}`), console.log(`CURRENT STATE: ${n.toString()}`));
        const r = Math.min(Ike(e.value, n.value), e.selectionStart, n.selectionStart), s = Math.min(bdn(e.value, n.value), e.value.length - e.selectionEnd, n.value.length - n.selectionEnd), o = e.value.substring(r, e.value.length - s), a = n.value.substring(r, n.value.length - s), l = e.selectionStart - r, c = e.selectionEnd - r, u = n.selectionStart - r, d = n.selectionEnd - r;
        if (e_e && (console.log(`AFTER DIFFING PREVIOUS STATE: <${o}>, selectionStart: ${l}, selectionEnd: ${c}`), console.log(`AFTER DIFFING CURRENT STATE: <${a}>, selectionStart: ${u}, selectionEnd: ${d}`)), u === d) {
            const p = e.selectionStart - r;
            return e_e && console.log(`REMOVE PREVIOUS: ${p} chars`), {
                text: a,
                replacePrevCharCnt: p,
                replaceNextCharCnt: 0,
                positionDelta: 0
            };
        }
        const h = c - l;
        return {
            text: a,
            replacePrevCharCnt: h,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
    }
    static deduceAndroidCompositionInput(e, n) {
        if (!e) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        if (e_e && (console.log("------------------------deduceAndroidCompositionInput"), console.log(`PREVIOUS STATE: ${e.toString()}`), console.log(`CURRENT STATE: ${n.toString()}`)), e.value === n.value) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: n.selectionEnd - e.selectionEnd
        };
        const i = Math.min(Ike(e.value, n.value), e.selectionEnd), r = Math.min(bdn(e.value, n.value), e.value.length - e.selectionEnd), s = e.value.substring(i, e.value.length - r), o = n.value.substring(i, n.value.length - r), a = e.selectionStart - i, l = e.selectionEnd - i, c = n.selectionStart - i, u = n.selectionEnd - i;
        return e_e && (console.log(`AFTER DIFFING PREVIOUS STATE: <${s}>, selectionStart: ${a}, selectionEnd: ${l}`), console.log(`AFTER DIFFING CURRENT STATE: <${o}>, selectionStart: ${c}, selectionEnd: ${u}`)), {
            text: o,
            replacePrevCharCnt: l,
            replaceNextCharCnt: s.length - l,
            positionDelta: u - o.length
        };
    }
    static fromScreenReaderContentState(e) {
        return new QYs(e.value, e.selectionStart, e.selectionEnd, e.selection, e.newlineCountBeforeSelection);
    }
}, uCr.EMPTY = new uCr("", 0, 0, null, void 0), DQ = uCr;

}
