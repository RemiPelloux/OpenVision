import { Cw, ti } from "./charCode.js";
import { Jbt } from "./eolCounter.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { Qbt } from "./ze.js";
var SCg, kCg, Iml;
export { Iml, SCg, kCg };
var __wakaru_hxk_initialized = false;
export function hxk() {
if (__wakaru_hxk_initialized) return;
__wakaru_hxk_initialized = true;
"use strict";
E(), Cw(), jc(), Qs(), Jbt(), SCg = class RXs {
    static create(e, n) {
        return new RXs(e, new kCg(n));
    }
    get startLineNumber() {
        return this._startLineNumber;
    }
    get endLineNumber() {
        return this._endLineNumber;
    }
    constructor(e, n){
        this._startLineNumber = e, this._tokens = n, this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    toString() {
        return this._tokens.toString(this._startLineNumber);
    }
    _updateEndLineNumber() {
        this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    isEmpty() {
        return this._tokens.isEmpty();
    }
    getLineTokens(e) {
        return this._startLineNumber <= e && e <= this._endLineNumber ? this._tokens.getLineTokens(e - this._startLineNumber) : null;
    }
    getRange() {
        const e = this._tokens.getRange();
        return e && new qt(this._startLineNumber + e.startLineNumber, e.startColumn, this._startLineNumber + e.endLineNumber, e.endColumn);
    }
    removeTokens(e) {
        const n = e.startLineNumber - this._startLineNumber, i = e.endLineNumber - this._startLineNumber;
        this._startLineNumber += this._tokens.removeTokens(n, e.startColumn - 1, i, e.endColumn - 1), this._updateEndLineNumber();
    }
    split(e) {
        const n = e.startLineNumber - this._startLineNumber, i = e.endLineNumber - this._startLineNumber, [r, s, o] = this._tokens.split(n, e.startColumn - 1, i, e.endColumn - 1);
        return [
            new RXs(this._startLineNumber, r),
            new RXs(this._startLineNumber + o, s)
        ];
    }
    applyEdit(e, n) {
        const [i, r, s] = Qbt(n);
        this.acceptEdit(e, i, r, s, n.length > 0 ? n.charCodeAt(0) : ti.Null);
    }
    acceptEdit(e, n, i, r, s) {
        this._acceptDeleteRange(e), this._acceptInsertText(new er(e.startLineNumber, e.startColumn), n, i, r, s), this._updateEndLineNumber();
    }
    _acceptDeleteRange(e) {
        if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return;
        const n = e.startLineNumber - this._startLineNumber, i = e.endLineNumber - this._startLineNumber;
        if (i < 0) {
            const s = i - n;
            this._startLineNumber -= s;
            return;
        }
        const r = this._tokens.getMaxDeltaLine();
        if (!(n >= r + 1)) {
            if (n < 0 && i >= r + 1) {
                this._startLineNumber = 0, this._tokens.clear();
                return;
            }
            if (n < 0) {
                const s = -n;
                this._startLineNumber -= s, this._tokens.acceptDeleteRange(e.startColumn - 1, 0, 0, i, e.endColumn - 1);
            } else this._tokens.acceptDeleteRange(0, n, e.startColumn - 1, i, e.endColumn - 1);
        }
    }
    _acceptInsertText(e, n, i, r, s) {
        if (n === 0 && i === 0) return;
        const o = e.lineNumber - this._startLineNumber;
        if (o < 0) {
            this._startLineNumber += n;
            return;
        }
        const a = this._tokens.getMaxDeltaLine();
        o >= a + 1 || this._tokens.acceptInsertText(o, e.column - 1, n, i, r, s);
    }
}, kCg = class ieu {
    constructor(e){
        this._tokens = e, this._tokenCount = e.length / 4;
    }
    toString(e) {
        const n = [];
        for(let i = 0; i < this._tokenCount; i++)n.push(`(${this._getDeltaLine(i) + e},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
        return `[${n.join(",")}]`;
    }
    getMaxDeltaLine() {
        const e = this._getTokenCount();
        return e === 0 ? -1 : this._getDeltaLine(e - 1);
    }
    getRange() {
        const e = this._getTokenCount();
        if (e === 0) return null;
        const n = this._getStartCharacter(0), i = this._getDeltaLine(e - 1), r = this._getEndCharacter(e - 1);
        return new qt(0, n + 1, i, r + 1);
    }
    _getTokenCount() {
        return this._tokenCount;
    }
    _getDeltaLine(e) {
        return this._tokens[4 * e];
    }
    _getStartCharacter(e) {
        return this._tokens[4 * e + 1];
    }
    _getEndCharacter(e) {
        return this._tokens[4 * e + 2];
    }
    isEmpty() {
        return this._getTokenCount() === 0;
    }
    getLineTokens(e) {
        let n = 0, i = this._getTokenCount() - 1;
        for(; n < i;){
            const r = n + Math.floor((i - n) / 2), s = this._getDeltaLine(r);
            if (s < e) n = r + 1;
            else if (s > e) i = r - 1;
            else {
                let o = r;
                for(; o > n && this._getDeltaLine(o - 1) === e;)o--;
                let a = r;
                for(; a < i && this._getDeltaLine(a + 1) === e;)a++;
                return new Iml(this._tokens.subarray(4 * o, 4 * a + 4));
            }
        }
        return this._getDeltaLine(n) === e ? new Iml(this._tokens.subarray(4 * n, 4 * n + 4)) : null;
    }
    clear() {
        this._tokenCount = 0;
    }
    removeTokens(e, n, i, r) {
        const s = this._tokens, o = this._tokenCount;
        let a = 0, l = !1, c = 0;
        for(let u = 0; u < o; u++){
            const d = 4 * u, h = s[d], p = s[d + 1], g = s[d + 2], f = s[d + 3];
            if ((h > e || h === e && g >= n) && (h < i || h === i && p <= r)) l = !0;
            else {
                if (a === 0 && (c = h), l) {
                    const _ = 4 * a;
                    s[_] = h - c, s[_ + 1] = p, s[_ + 2] = g, s[_ + 3] = f;
                }
                a++;
            }
        }
        return this._tokenCount = a, c;
    }
    split(e, n, i, r) {
        const s = this._tokens, o = this._tokenCount, a = [], l = [];
        let c = a, u = 0, d = 0;
        for(let h = 0; h < o; h++){
            const p = 4 * h, g = s[p], f = s[p + 1], _ = s[p + 2], b = s[p + 3];
            if (g > e || g === e && _ >= n) {
                if (g < i || g === i && f <= r) continue;
                c !== l && (c = l, u = 0, d = g);
            }
            c[u++] = g - d, c[u++] = f, c[u++] = _, c[u++] = b;
        }
        return [
            new ieu(new Uint32Array(a)),
            new ieu(new Uint32Array(l)),
            d
        ];
    }
    acceptDeleteRange(e, n, i, r, s) {
        const o = this._tokens, a = this._tokenCount, l = r - n;
        let c = 0, u = !1;
        for(let d = 0; d < a; d++){
            const h = 4 * d;
            let p = o[h], g = o[h + 1], f = o[h + 2];
            const _ = o[h + 3];
            if (p < n || p === n && f <= i) {
                c++;
                continue;
            } else if (p === n && g < i) p === r && f > s ? f -= s - i : f = i;
            else if (p === n && g === i) if (p === r && f > s) f -= s - i;
            else {
                u = !0;
                continue;
            }
            else if (p < r || p === r && g < s) if (p === r && f > s) p = n, g = i, f = g + (f - s);
            else {
                u = !0;
                continue;
            }
            else if (p > r) {
                if (l === 0 && !u) {
                    c = a;
                    break;
                }
                p -= l;
            } else if (p === r && g >= s) e && p === 0 && (g += e, f += e), p -= l, g -= s - i, f -= s - i;
            else throw new Error("Not possible!");
            const b = 4 * c;
            o[b] = p, o[b + 1] = g, o[b + 2] = f, o[b + 3] = _, c++;
        }
        this._tokenCount = c;
    }
    acceptInsertText(e, n, i, r, s, o) {
        const a = i === 0 && r === 1 && (o >= ti.Digit0 && o <= ti.Digit9 || o >= ti.A && o <= ti.Z || o >= ti.a && o <= ti.z), l = this._tokens, c = this._tokenCount;
        for(let u = 0; u < c; u++){
            const d = 4 * u;
            let h = l[d], p = l[d + 1], g = l[d + 2];
            if (!(h < e || h === e && g < n)) {
                if (h === e && g === n) if (a) g += 1;
                else continue;
                else if (h === e && p < n && n < g) i === 0 ? g += r : g = n;
                else {
                    if (h === e && p === n && a) continue;
                    if (h === e) if (h += i, i === 0) p += r, g += r;
                    else {
                        const f = g - p;
                        p = s + (p - n), g = p + f;
                    }
                    else h += i;
                }
                l[d] = h, l[d + 1] = p, l[d + 2] = g;
            }
        }
    }
}, Iml = class {
    constructor(t){
        this._tokens = t;
    }
    getCount() {
        return this._tokens.length / 4;
    }
    getStartCharacter(t) {
        return this._tokens[4 * t + 1];
    }
    getEndCharacter(t) {
        return this._tokens[4 * t + 2];
    }
    getMetadata(t) {
        return this._tokens[4 * t + 3];
    }
};

}
