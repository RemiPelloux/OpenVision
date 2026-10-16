import { rO } from "./Iwo.js";
import { YE } from "./assert.js";
import { J0 } from "./model_2.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { S7d, y7d } from "./ze.js";
var ffn, usi;
export { ffn, usi };
var __wakaru_k7d_initialized = false;
export function k7d() {
if (__wakaru_k7d_initialized) return;
__wakaru_k7d_initialized = true;
"use strict";
E(), YE(), jc(), J0(), ffn = class {
    constructor(t, e, n, i, r){
        this.injectionOffsets = t, this.injectionOptions = e, this.breakOffsets = n, this.breakOffsetsVisibleColumn = i, this.wrappedTextIndentLength = r;
    }
    getOutputLineCount() {
        return this.breakOffsets.length;
    }
    getMinOutputOffset(t) {
        return t > 0 ? this.wrappedTextIndentLength : 0;
    }
    getLineLength(t) {
        const e = t > 0 ? this.breakOffsets[t - 1] : 0;
        let i = this.breakOffsets[t] - e;
        return t > 0 && (i += this.wrappedTextIndentLength), i;
    }
    getMaxOutputOffset(t) {
        return this.getLineLength(t);
    }
    translateToInputOffset(t, e) {
        t > 0 && (e = Math.max(0, e - this.wrappedTextIndentLength));
        let i = t === 0 ? e : this.breakOffsets[t - 1] + e;
        if (this.injectionOffsets !== null) for(let r = 0; r < this.injectionOffsets.length && i > this.injectionOffsets[r]; r++)i < this.injectionOffsets[r] + this.injectionOptions[r].content.length ? i = this.injectionOffsets[r] : i -= this.injectionOptions[r].content.length;
        return i;
    }
    translateToOutputPosition(t, e = 2) {
        let n = t;
        if (this.injectionOffsets !== null) for(let i = 0; i < this.injectionOffsets.length && !(t < this.injectionOffsets[i] || e !== 1 && t === this.injectionOffsets[i]); i++)n += this.injectionOptions[i].content.length;
        return this.offsetInInputWithInjectionsToOutputPosition(n, e);
    }
    offsetInInputWithInjectionsToOutputPosition(t, e = 2) {
        let n = 0, i = this.breakOffsets.length - 1, r = 0, s = 0;
        for(; n <= i;){
            r = n + (i - n) / 2 | 0;
            const a = this.breakOffsets[r];
            if (s = r > 0 ? this.breakOffsets[r - 1] : 0, e === 0) if (t <= s) i = r - 1;
            else if (t > a) n = r + 1;
            else break;
            else if (t < s) i = r - 1;
            else if (t >= a) n = r + 1;
            else break;
        }
        let o = t - s;
        return r > 0 && (o += this.wrappedTextIndentLength), new usi(r, o);
    }
    normalizeOutputPosition(t, e, n) {
        if (this.injectionOffsets !== null) {
            const i = this.outputPositionToOffsetInInputWithInjections(t, e), r = this.normalizeOffsetInInputWithInjectionsAroundInjections(i, n);
            if (r !== i) return this.offsetInInputWithInjectionsToOutputPosition(r, n);
        }
        if (n === 0) {
            if (t > 0 && e === this.getMinOutputOffset(t)) return new usi(t - 1, this.getMaxOutputOffset(t - 1));
        } else if (n === 1) {
            const i = this.getOutputLineCount() - 1;
            if (t < i && e === this.getMaxOutputOffset(t)) return new usi(t + 1, this.getMinOutputOffset(t + 1));
        }
        return new usi(t, e);
    }
    outputPositionToOffsetInInputWithInjections(t, e) {
        return t > 0 && (e = Math.max(0, e - this.wrappedTextIndentLength)), (t > 0 ? this.breakOffsets[t - 1] : 0) + e;
    }
    normalizeOffsetInInputWithInjectionsAroundInjections(t, e) {
        const n = this.getInjectedTextAtOffset(t);
        if (!n) return t;
        if (e === 2) {
            if (t === n.offsetInInputWithInjections + n.length && y7d(this.injectionOptions[n.injectedTextIndex].cursorStops)) return n.offsetInInputWithInjections + n.length;
            {
                let i = n.offsetInInputWithInjections;
                if (S7d(this.injectionOptions[n.injectedTextIndex].cursorStops)) return i;
                let r = n.injectedTextIndex - 1;
                for(; r >= 0 && this.injectionOffsets[r] === this.injectionOffsets[n.injectedTextIndex] && !(y7d(this.injectionOptions[r].cursorStops) || (i -= this.injectionOptions[r].content.length, S7d(this.injectionOptions[r].cursorStops)));)r--;
                return i;
            }
        } else if (e === 1 || e === 4) {
            let i = n.offsetInInputWithInjections + n.length, r = n.injectedTextIndex;
            for(; r + 1 < this.injectionOffsets.length && this.injectionOffsets[r + 1] === this.injectionOffsets[r];)i += this.injectionOptions[r + 1].content.length, r++;
            return i;
        } else if (e === 0 || e === 3) {
            let i = n.offsetInInputWithInjections, r = n.injectedTextIndex;
            for(; r - 1 >= 0 && this.injectionOffsets[r - 1] === this.injectionOffsets[r];)i -= this.injectionOptions[r - 1].content.length, r--;
            return i;
        }
        rO(e);
    }
    getInjectedText(t, e) {
        const n = this.outputPositionToOffsetInInputWithInjections(t, e), i = this.getInjectedTextAtOffset(n);
        return i ? {
            options: this.injectionOptions[i.injectedTextIndex]
        } : null;
    }
    getInjectedTextAtOffset(t) {
        const e = this.injectionOffsets, n = this.injectionOptions;
        if (e !== null) {
            let i = 0;
            for(let r = 0; r < e.length; r++){
                const s = n[r].content.length, o = e[r] + i, a = e[r] + i + s;
                if (o > t) break;
                if (t <= a) return {
                    injectedTextIndex: r,
                    offsetInInputWithInjections: o,
                    length: s
                };
                i += s;
            }
        }
    }
}, usi = class {
    constructor(t, e){
        this.outputLineIndex = t, this.outputOffset = e;
    }
    toString() {
        return `${this.outputLineIndex}:${this.outputOffset}`;
    }
    toPosition(t) {
        return new er(t + this.outputLineIndex, this.outputOffset + 1);
    }
};

}
