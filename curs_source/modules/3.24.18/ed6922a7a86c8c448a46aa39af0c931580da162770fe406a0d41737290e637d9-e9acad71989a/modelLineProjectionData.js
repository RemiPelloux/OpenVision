import { QN } from "./HVr.js";
import { C0 } from "./assert.js";
import { Cb } from "./model_2.js";
import { Yn, ya } from "./position.js";
import { cBc, lBc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var OOt, Ofn;
export { OOt, Ofn };
var __wakaru_uBc_initialized = false;
export function uBc() {
if (__wakaru_uBc_initialized) return;
__wakaru_uBc_initialized = true;
"use strict";
x(), C0(), ya(), Cb(), OOt = class {
    constructor(e, t, n, i, r){
        this.injectionOffsets = e, this.injectionOptions = t, this.breakOffsets = n, this.breakOffsetsVisibleColumn = i, this.wrappedTextIndentLength = r;
    }
    getOutputLineCount() {
        return this.breakOffsets.length;
    }
    getMinOutputOffset(e) {
        return e > 0 ? this.wrappedTextIndentLength : 0;
    }
    getLineLength(e) {
        const t = e > 0 ? this.breakOffsets[e - 1] : 0;
        let i = this.breakOffsets[e] - t;
        return e > 0 && (i += this.wrappedTextIndentLength), i;
    }
    getMaxOutputOffset(e) {
        return this.getLineLength(e);
    }
    translateToInputOffset(e, t) {
        e > 0 && (t = Math.max(0, t - this.wrappedTextIndentLength));
        let i = e === 0 ? t : this.breakOffsets[e - 1] + t;
        if (this.injectionOffsets !== null) for(let r = 0; r < this.injectionOffsets.length && i > this.injectionOffsets[r]; r++)i < this.injectionOffsets[r] + this.injectionOptions[r].content.length ? i = this.injectionOffsets[r] : i -= this.injectionOptions[r].content.length;
        return i;
    }
    translateToOutputPosition(e, t = 2) {
        let n = e;
        if (this.injectionOffsets !== null) for(let i = 0; i < this.injectionOffsets.length && !(e < this.injectionOffsets[i] || t !== 1 && e === this.injectionOffsets[i]); i++)n += this.injectionOptions[i].content.length;
        return this.offsetInInputWithInjectionsToOutputPosition(n, t);
    }
    offsetInInputWithInjectionsToOutputPosition(e, t = 2) {
        let n = 0, i = this.breakOffsets.length - 1, r = 0, s = 0;
        for(; n <= i;){
            r = n + (i - n) / 2 | 0;
            const a = this.breakOffsets[r];
            if (s = r > 0 ? this.breakOffsets[r - 1] : 0, t === 0) if (e <= s) i = r - 1;
            else if (e > a) n = r + 1;
            else break;
            else if (e < s) i = r - 1;
            else if (e >= a) n = r + 1;
            else break;
        }
        let o = e - s;
        return r > 0 && (o += this.wrappedTextIndentLength), new Ofn(r, o);
    }
    normalizeOutputPosition(e, t, n) {
        if (this.injectionOffsets !== null) {
            const i = this.outputPositionToOffsetInInputWithInjections(e, t), r = this.normalizeOffsetInInputWithInjectionsAroundInjections(i, n);
            if (r !== i) return this.offsetInInputWithInjectionsToOutputPosition(r, n);
        }
        if (n === 0) {
            if (e > 0 && t === this.getMinOutputOffset(e)) return new Ofn(e - 1, this.getMaxOutputOffset(e - 1));
        } else if (n === 1) {
            const i = this.getOutputLineCount() - 1;
            if (e < i && t === this.getMaxOutputOffset(e)) return new Ofn(e + 1, this.getMinOutputOffset(e + 1));
        }
        return new Ofn(e, t);
    }
    outputPositionToOffsetInInputWithInjections(e, t) {
        return e > 0 && (t = Math.max(0, t - this.wrappedTextIndentLength)), (e > 0 ? this.breakOffsets[e - 1] : 0) + t;
    }
    normalizeOffsetInInputWithInjectionsAroundInjections(e, t) {
        const n = this.getInjectedTextAtOffset(e);
        if (!n) return e;
        if (t === 2) {
            if (e === n.offsetInInputWithInjections + n.length && cBc(this.injectionOptions[n.injectedTextIndex].cursorStops)) return n.offsetInInputWithInjections + n.length;
            {
                let i = n.offsetInInputWithInjections;
                if (lBc(this.injectionOptions[n.injectedTextIndex].cursorStops)) return i;
                let r = n.injectedTextIndex - 1;
                for(; r >= 0 && this.injectionOffsets[r] === this.injectionOffsets[n.injectedTextIndex] && !(cBc(this.injectionOptions[r].cursorStops) || (i -= this.injectionOptions[r].content.length, lBc(this.injectionOptions[r].cursorStops)));)r--;
                return i;
            }
        } else if (t === 1 || t === 4) {
            let i = n.offsetInInputWithInjections + n.length, r = n.injectedTextIndex;
            for(; r + 1 < this.injectionOffsets.length && this.injectionOffsets[r + 1] === this.injectionOffsets[r];)i += this.injectionOptions[r + 1].content.length, r++;
            return i;
        } else if (t === 0 || t === 3) {
            let i = n.offsetInInputWithInjections, r = n.injectedTextIndex;
            for(; r - 1 >= 0 && this.injectionOffsets[r - 1] === this.injectionOffsets[r];)i -= this.injectionOptions[r - 1].content.length, r--;
            return i;
        }
        QN(t);
    }
    getInjectedText(e, t) {
        const n = this.outputPositionToOffsetInInputWithInjections(e, t), i = this.getInjectedTextAtOffset(n);
        return i ? {
            options: this.injectionOptions[i.injectedTextIndex]
        } : null;
    }
    getInjectedTextAtOffset(e) {
        const t = this.injectionOffsets, n = this.injectionOptions;
        if (t !== null) {
            let i = 0;
            for(let r = 0; r < t.length; r++){
                const s = n[r].content.length, o = t[r] + i, a = t[r] + i + s;
                if (o > e) break;
                if (e <= a) return {
                    injectedTextIndex: r,
                    offsetInInputWithInjections: o,
                    length: s
                };
                i += s;
            }
        }
    }
}, Ofn = class {
    constructor(e, t){
        this.outputLineIndex = e, this.outputOffset = t;
    }
    toString() {
        return `${this.outputLineIndex}:${this.outputOffset}`;
    }
    toPosition(e) {
        return new Yn(e + this.outputLineIndex, this.outputOffset + 1);
    }
};

}
