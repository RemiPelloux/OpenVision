import { CO, Ps } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
var gW, ges, U5c, $5c;
export { $5c, U5c, gW, ges };
var __wakaru_Wze_initialized = false;
export function Wze() {
if (__wakaru_Wze_initialized) return;
__wakaru_Wze_initialized = true;
"use strict";
x(), Ps(), eN(), gW = class VXn {
    constructor(t, n, i, r){
        this.startColumn = t, this.endColumn = n, this.className = i, this.type = r, this._lineDecorationBrand = void 0;
    }
    static _equals(t, n) {
        return t.startColumn === n.startColumn && t.endColumn === n.endColumn && t.className === n.className && t.type === n.type;
    }
    static equalsArr(t, n) {
        const i = t.length, r = n.length;
        if (i !== r) return !1;
        for(let s = 0; s < i; s++)if (!VXn._equals(t[s], n[s])) return !1;
        return !0;
    }
    static extractWrapped(t, n, i) {
        if (t.length === 0) return t;
        const r = n + 1, s = i + 1, o = i - n, a = [];
        let c = 0;
        for (const l of t)l.endColumn <= r || l.startColumn >= s || (a[c++] = new VXn(Math.max(1, l.startColumn - r + 1), Math.min(o + 1, l.endColumn - r + 1), l.className, l.type));
        return a;
    }
    static filter(t, n, i, r) {
        if (t.length === 0) return [];
        const s = [];
        let o = 0;
        for(let a = 0, c = t.length; a < c; a++){
            const l = t[a], u = l.range;
            if (u.endLineNumber < n || u.startLineNumber > n || u.isEmpty() && (l.type === 0 || l.type === 3)) continue;
            const h = u.startLineNumber === n ? u.startColumn : i, p = u.endLineNumber === n ? u.endColumn : r;
            s[o++] = new VXn(h, p, l.inlineClassName, l.type);
        }
        return s;
    }
    static _typeCompare(t, n) {
        const i = [
            2,
            0,
            1,
            3
        ];
        return i[t] - i[n];
    }
    static compare(t, n) {
        if (t.startColumn !== n.startColumn) return t.startColumn - n.startColumn;
        if (t.endColumn !== n.endColumn) return t.endColumn - n.endColumn;
        const i = VXn._typeCompare(t.type, n.type);
        return i !== 0 ? i : t.className !== n.className ? t.className < n.className ? -1 : 1 : 0;
    }
}, ges = class {
    constructor(e, t, n, i){
        this.startOffset = e, this.endOffset = t, this.className = n, this.metadata = i;
    }
}, U5c = class DIa {
    constructor(){
        this.stopOffsets = [], this.classNames = [], this.metadata = [], this.count = 0;
    }
    static _metadata(t) {
        let n = 0;
        for(let i = 0, r = t.length; i < r; i++)n |= t[i];
        return n;
    }
    consumeLowerThan(t, n, i) {
        for(; this.count > 0 && this.stopOffsets[0] < t;){
            let r = 0;
            for(; r + 1 < this.count && this.stopOffsets[r] === this.stopOffsets[r + 1];)r++;
            i.push(new ges(n, this.stopOffsets[r], this.classNames.join(" "), DIa._metadata(this.metadata))), n = this.stopOffsets[r] + 1, this.stopOffsets.splice(0, r + 1), this.classNames.splice(0, r + 1), this.metadata.splice(0, r + 1), this.count -= r + 1;
        }
        return this.count > 0 && n < t && (i.push(new ges(n, t - 1, this.classNames.join(" "), DIa._metadata(this.metadata))), n = t), n;
    }
    insert(t, n, i) {
        if (this.count === 0 || this.stopOffsets[this.count - 1] <= t) this.stopOffsets.push(t), this.classNames.push(n), this.metadata.push(i);
        else for(let r = 0; r < this.count; r++)if (this.stopOffsets[r] >= t) {
            this.stopOffsets.splice(r, 0, t), this.classNames.splice(r, 0, n), this.metadata.splice(r, 0, i);
            break;
        }
        this.count++;
    }
}, $5c = class {
    static normalize(e, t) {
        if (t.length === 0) return [];
        const n = [], i = new U5c;
        let r = 0;
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            let c = a.startColumn, l = a.endColumn;
            const u = a.className, h = a.type === 1 ? 2 : a.type === 2 ? 4 : 0;
            if (c > 1) {
                const f = e.charCodeAt(c - 2);
                CO(f) && c--;
            }
            if (l > 1) {
                const f = e.charCodeAt(l - 2);
                CO(f) && l--;
            }
            const p = c - 1, g = l - 2;
            r = i.consumeLowerThan(p, r, n), i.count === 0 && (r = p), i.insert(g, u, h);
        }
        return i.consumeLowerThan(yy.MAX_SAFE_SMALL_INTEGER, r, n), n;
    }
};

}
