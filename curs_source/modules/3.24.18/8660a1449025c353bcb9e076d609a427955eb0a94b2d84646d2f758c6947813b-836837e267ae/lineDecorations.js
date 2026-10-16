import { Fa, K9 } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
var RQ, _Ho, JUd, ejd;
export { JUd, RQ, _Ho, ejd };
var __wakaru_byt_initialized = false;
export function byt() {
if (__wakaru_byt_initialized) return;
__wakaru_byt_initialized = true;
"use strict";
E(), Fa(), lz(), RQ = class IZi {
    constructor(e, n, i, r){
        this.startColumn = e, this.endColumn = n, this.className = i, this.type = r, this._lineDecorationBrand = void 0;
    }
    static _equals(e, n) {
        return e.startColumn === n.startColumn && e.endColumn === n.endColumn && e.className === n.className && e.type === n.type;
    }
    static equalsArr(e, n) {
        const i = e.length, r = n.length;
        if (i !== r) return !1;
        for(let s = 0; s < i; s++)if (!IZi._equals(e[s], n[s])) return !1;
        return !0;
    }
    static extractWrapped(e, n, i) {
        if (e.length === 0) return e;
        const r = n + 1, s = i + 1, o = i - n, a = [];
        let l = 0;
        for (const c of e)c.endColumn <= r || c.startColumn >= s || (a[l++] = new IZi(Math.max(1, c.startColumn - r + 1), Math.min(o + 1, c.endColumn - r + 1), c.className, c.type));
        return a;
    }
    static filter(e, n, i, r) {
        if (e.length === 0) return [];
        const s = [];
        let o = 0;
        for(let a = 0, l = e.length; a < l; a++){
            const c = e[a], u = c.range;
            if (u.endLineNumber < n || u.startLineNumber > n || u.isEmpty() && (c.type === 0 || c.type === 3)) continue;
            const d = u.startLineNumber === n ? u.startColumn : i, h = u.endLineNumber === n ? u.endColumn : r;
            s[o++] = new IZi(d, h, c.inlineClassName, c.type);
        }
        return s;
    }
    static _typeCompare(e, n) {
        const i = [
            2,
            0,
            1,
            3
        ];
        return i[e] - i[n];
    }
    static compare(e, n) {
        if (e.startColumn !== n.startColumn) return e.startColumn - n.startColumn;
        if (e.endColumn !== n.endColumn) return e.endColumn - n.endColumn;
        const i = IZi._typeCompare(e.type, n.type);
        return i !== 0 ? i : e.className !== n.className ? e.className < n.className ? -1 : 1 : 0;
    }
}, _Ho = class {
    constructor(t, e, n, i){
        this.startOffset = t, this.endOffset = e, this.className = n, this.metadata = i;
    }
}, JUd = class mJc {
    constructor(){
        this.stopOffsets = [], this.classNames = [], this.metadata = [], this.count = 0;
    }
    static _metadata(e) {
        let n = 0;
        for(let i = 0, r = e.length; i < r; i++)n |= e[i];
        return n;
    }
    consumeLowerThan(e, n, i) {
        for(; this.count > 0 && this.stopOffsets[0] < e;){
            let r = 0;
            for(; r + 1 < this.count && this.stopOffsets[r] === this.stopOffsets[r + 1];)r++;
            i.push(new _Ho(n, this.stopOffsets[r], this.classNames.join(" "), mJc._metadata(this.metadata))), n = this.stopOffsets[r] + 1, this.stopOffsets.splice(0, r + 1), this.classNames.splice(0, r + 1), this.metadata.splice(0, r + 1), this.count -= r + 1;
        }
        return this.count > 0 && n < e && (i.push(new _Ho(n, e - 1, this.classNames.join(" "), mJc._metadata(this.metadata))), n = e), n;
    }
    insert(e, n, i) {
        if (this.count === 0 || this.stopOffsets[this.count - 1] <= e) this.stopOffsets.push(e), this.classNames.push(n), this.metadata.push(i);
        else for(let r = 0; r < this.count; r++)if (this.stopOffsets[r] >= e) {
            this.stopOffsets.splice(r, 0, e), this.classNames.splice(r, 0, n), this.metadata.splice(r, 0, i);
            break;
        }
        this.count++;
    }
}, ejd = class {
    static normalize(t, e) {
        if (e.length === 0) return [];
        const n = [], i = new JUd;
        let r = 0;
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            let l = a.startColumn, c = a.endColumn;
            const u = a.className, d = a.type === 1 ? 2 : a.type === 2 ? 4 : 0;
            if (l > 1) {
                const g = t.charCodeAt(l - 2);
                K9(g) && l--;
            }
            if (c > 1) {
                const g = t.charCodeAt(c - 2);
                K9(g) && c--;
            }
            const h = l - 1, p = c - 2;
            r = i.consumeLowerThan(h, r, n), i.count === 0 && (r = h), i.insert(p, u, d);
        }
        return i.consumeLowerThan(eI.MAX_SAFE_SMALL_INTEGER, r, n), n;
    }
};

}
