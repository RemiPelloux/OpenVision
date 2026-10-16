import { Aqe, Ps, jie } from "./HVr.js";
import { x } from "./tslib.es6.js";
var fre, F_i, vW;
export { F_i, fre, vW };
var __wakaru_p9c_initialized = false;
export function p9c() {
if (__wakaru_p9c_initialized) return;
__wakaru_p9c_initialized = true;
"use strict";
x(), Ps(), fre = !1, F_i = class d1r {
    constructor(t, n, i, r, s){
        this.value = t, this.selectionStart = n, this.selectionEnd = i, this.selection = r, this.newlineCountBeforeSelection = s;
    }
    toString() {
        return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
    }
    static readFromTextArea(t, n) {
        const i = t.getValue(), r = t.getSelectionStart(), s = t.getSelectionEnd();
        let o;
        if (n) {
            const a = i.substring(0, r), c = n.value.substring(0, n.selectionStart);
            a === c && (o = n.newlineCountBeforeSelection);
        }
        return new d1r(i, r, s, null, o);
    }
    collapseSelection() {
        return this.selectionStart === this.value.length ? this : new d1r(this.value, this.value.length, this.value.length, null, void 0);
    }
    isWrittenToTextArea(t, n) {
        const i = this.value === t.getValue();
        return n ? this.selectionStart === t.getSelectionStart() && this.selectionEnd === t.getSelectionEnd() && i : i;
    }
    writeToTextArea(t, n, i) {
        fre && console.log(`writeToTextArea ${t}: ${this.toString()}`), n.setValue(t, this.value), i && n.setSelectionRange(t, this.selectionStart, this.selectionEnd);
    }
    deduceEditorPosition(t) {
        if (t <= this.selectionStart) {
            const r = this.value.substring(t, this.selectionStart);
            return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, r, -1);
        }
        if (t >= this.selectionEnd) {
            const r = this.value.substring(this.selectionEnd, t);
            return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, r, 1);
        }
        const n = this.value.substring(this.selectionStart, t);
        if (n.indexOf("\u2026") === -1) return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, n, 1);
        const i = this.value.substring(t, this.selectionEnd);
        return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, i, -1);
    }
    _finishDeduceEditorPosition(t, n, i) {
        let r = 0, s = -1;
        for(; (s = n.indexOf(`
`, s + 1)) !== -1;)r++;
        return [
            t,
            i * n.length,
            r
        ];
    }
    static deduceInput(t, n, i) {
        if (!t) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        fre && (console.log("------------------------deduceInput"), console.log(`PREVIOUS STATE: ${t.toString()}`), console.log(`CURRENT STATE: ${n.toString()}`));
        const r = Math.min(jie(t.value, n.value), t.selectionStart, n.selectionStart), s = Math.min(Aqe(t.value, n.value), t.value.length - t.selectionEnd, n.value.length - n.selectionEnd), o = t.value.substring(r, t.value.length - s), a = n.value.substring(r, n.value.length - s), c = t.selectionStart - r, l = t.selectionEnd - r, u = n.selectionStart - r, h = n.selectionEnd - r;
        if (fre && (console.log(`AFTER DIFFING PREVIOUS STATE: <${o}>, selectionStart: ${c}, selectionEnd: ${l}`), console.log(`AFTER DIFFING CURRENT STATE: <${a}>, selectionStart: ${u}, selectionEnd: ${h}`)), u === h) {
            const g = t.selectionStart - r;
            return fre && console.log(`REMOVE PREVIOUS: ${g} chars`), {
                text: a,
                replacePrevCharCnt: g,
                replaceNextCharCnt: 0,
                positionDelta: 0
            };
        }
        const p = l - c;
        return {
            text: a,
            replacePrevCharCnt: p,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
    }
    static deduceAndroidCompositionInput(t, n) {
        if (!t) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        if (fre && (console.log("------------------------deduceAndroidCompositionInput"), console.log(`PREVIOUS STATE: ${t.toString()}`), console.log(`CURRENT STATE: ${n.toString()}`)), t.value === n.value) return {
            text: "",
            replacePrevCharCnt: 0,
            replaceNextCharCnt: 0,
            positionDelta: n.selectionEnd - t.selectionEnd
        };
        const i = Math.min(jie(t.value, n.value), t.selectionEnd), r = Math.min(Aqe(t.value, n.value), t.value.length - t.selectionEnd), s = t.value.substring(i, t.value.length - r), o = n.value.substring(i, n.value.length - r), a = t.selectionStart - i, c = t.selectionEnd - i, l = n.selectionStart - i, u = n.selectionEnd - i;
        return fre && (console.log(`AFTER DIFFING PREVIOUS STATE: <${s}>, selectionStart: ${a}, selectionEnd: ${c}`), console.log(`AFTER DIFFING CURRENT STATE: <${o}>, selectionStart: ${l}, selectionEnd: ${u}`)), {
            text: o,
            replacePrevCharCnt: c,
            replaceNextCharCnt: s.length - c,
            positionDelta: u - o.length
        };
    }
    static fromScreenReaderContentState(t) {
        return new d1r(t.value, t.selectionStart, t.selectionEnd, t.selection, t.newlineCountBeforeSelection);
    }
}, F_i.EMPTY = new F_i("", 0, 0, null, void 0), vW = F_i;

}
