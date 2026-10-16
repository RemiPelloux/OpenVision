import { S5e, Skg } from "./diffChange.js";
import { T_ } from "./hash.js";
import { ale } from "./qIc.js";
import { x } from "./tslib.es6.js";
var vrs, _mt, bmt, _rs, s3t, wkg;
export { _mt, _rs, bmt, s3t, vrs, wkg };
var __wakaru_a_n_initialized = false;
export function a_n() {
if (__wakaru_a_n_initialized) return;
__wakaru_a_n_initialized = true;
"use strict";
x(), Skg(), T_(), vrs = class {
    constructor(e){
        this.source = e;
    }
    getElements() {
        const e = this.source, t = new Int32Array(e.length);
        for(let n = 0, i = e.length; n < i; n++)t[n] = e.charCodeAt(n);
        return t;
    }
}, _mt = class {
    static Assert(e, t) {
        if (!e) throw new Error(t);
    }
}, bmt = class {
    static Copy(e, t, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = e[t + s];
    }
    static Copy2(e, t, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = e[t + s];
    }
}, _rs = class {
    constructor(){
        this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }
    MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new S5e(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
    }
    AddOriginalElement(e, t) {
        this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }
    AddModifiedElement(e, t) {
        this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }
    getChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }
    getReverseChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }
}, s3t = class Din {
    constructor(t, n, i = null){
        this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
        const [r, s, o] = Din._getElements(t), [a, c, l] = Din._getElements(n);
        this._hasStrings = o && l, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = a, this._modifiedElementsOrHash = c, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }
    static _isStringArray(t) {
        return t.length > 0 && typeof t[0] == "string";
    }
    static _getElements(t) {
        const n = t.getElements();
        if (Din._isStringArray(n)) {
            const i = new Int32Array(n.length);
            for(let r = 0, s = n.length; r < s; r++)i[r] = ale(n[r], 0);
            return [
                n,
                i,
                !0
            ];
        }
        return n instanceof Int32Array ? [
            [],
            n,
            !1
        ] : [
            [],
            new Int32Array(n),
            !1
        ];
    }
    ElementsAreEqual(t, n) {
        return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
    }
    ElementsAreStrictEqual(t, n) {
        if (!this.ElementsAreEqual(t, n)) return !1;
        const i = Din._getStrictElement(this._originalSequence, t), r = Din._getStrictElement(this._modifiedSequence, n);
        return i === r;
    }
    static _getStrictElement(t, n) {
        return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null;
    }
    OriginalElementsAreEqual(t, n) {
        return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : !0;
    }
    ModifiedElementsAreEqual(t, n) {
        return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : !0;
    }
    ComputeDiff(t) {
        return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
    }
    _ComputeDiff(t, n, i, r, s) {
        const o = [
            !1
        ];
        let a = this.ComputeDiffRecursive(t, n, i, r, o);
        return s && (a = this.PrettifyChanges(a)), {
            quitEarly: o[0],
            changes: a
        };
    }
    ComputeDiffRecursive(t, n, i, r, s) {
        for(s[0] = !1; t <= n && i <= r && this.ElementsAreEqual(t, i);)t++, i++;
        for(; n >= t && r >= i && this.ElementsAreEqual(n, r);)n--, r--;
        if (t > n || i > r) {
            let h;
            return i <= r ? (_mt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), h = [
                new S5e(t, 0, i, r - i + 1)
            ]) : t <= n ? (_mt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = [
                new S5e(t, n - t + 1, i, 0)
            ]) : (_mt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), _mt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = []), h;
        }
        const o = [
            0
        ], a = [
            0
        ], c = this.ComputeRecursionPoint(t, n, i, r, o, a, s), l = o[0], u = a[0];
        if (c !== null) return c;
        if (!s[0]) {
            const h = this.ComputeDiffRecursive(t, l, i, u, s);
            let p = [];
            return s[0] ? p = [
                new S5e(l + 1, n - (l + 1) + 1, u + 1, r - (u + 1) + 1)
            ] : p = this.ComputeDiffRecursive(l + 1, n, u + 1, r, s), this.ConcatenateChanges(h, p);
        }
        return [
            new S5e(t, n - t + 1, i, r - i + 1)
        ];
    }
    WALKTRACE(t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T) {
        let E = null, A = null, R = new _rs, D = n, P = i, N = g[0] - b[0] - r, O = -1073741824, F = this.m_forwardHistory.length - 1;
        do {
            const H = N + t;
            H === D || H < P && l[H - 1] < l[H + 1] ? (h = l[H + 1], f = h - N - r, h < O && R.MarkNextChange(), O = h, R.AddModifiedElement(h + 1, f), N = H + 1 - t) : (h = l[H - 1] + 1, f = h - N - r, h < O && R.MarkNextChange(), O = h - 1, R.AddOriginalElement(h, f + 1), N = H - 1 - t), F >= 0 && (l = this.m_forwardHistory[F], t = l[0], D = 1, P = l.length - 1);
        }while (--F >= -1)
        if (E = R.getReverseChanges(), T[0]) {
            let H = g[0] + 1, $ = b[0] + 1;
            if (E !== null && E.length > 0) {
                const W = E[E.length - 1];
                H = Math.max(H, W.getOriginalEnd()), $ = Math.max($, W.getModifiedEnd());
            }
            A = [
                new S5e(H, p - H + 1, $, v - $ + 1)
            ];
        } else {
            R = new _rs, D = o, P = a, N = g[0] - b[0] - c, O = 1073741824, F = y ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                const H = N + s;
                H === D || H < P && u[H - 1] >= u[H + 1] ? (h = u[H + 1] - 1, f = h - N - c, h > O && R.MarkNextChange(), O = h + 1, R.AddOriginalElement(h + 1, f + 1), N = H + 1 - s) : (h = u[H - 1], f = h - N - c, h > O && R.MarkNextChange(), O = h, R.AddModifiedElement(h + 1, f + 1), N = H - 1 - s), F >= 0 && (u = this.m_reverseHistory[F], s = u[0], D = 1, P = u.length - 1);
            }while (--F >= -1)
            A = R.getChanges();
        }
        return this.ConcatenateChanges(E, A);
    }
    ComputeRecursionPoint(t, n, i, r, s, o, a) {
        let c = 0, l = 0, u = 0, h = 0, p = 0, g = 0;
        t--, i--, s[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        const f = n - t + (r - i), v = f + 1, b = new Int32Array(v), y = new Int32Array(v), T = r - i, E = n - t, A = t - i, R = n - r, P = (E - T) % 2 === 0;
        b[T] = t, y[E] = n, a[0] = !1;
        for(let N = 1; N <= f / 2 + 1; N++){
            let O = 0, F = 0;
            u = this.ClipDiagonalBound(T - N, N, T, v), h = this.ClipDiagonalBound(T + N, N, T, v);
            for(let $ = u; $ <= h; $ += 2){
                $ === u || $ < h && b[$ - 1] < b[$ + 1] ? c = b[$ + 1] : c = b[$ - 1] + 1, l = c - ($ - T) - A;
                const W = c;
                for(; c < n && l < r && this.ElementsAreEqual(c + 1, l + 1);)c++, l++;
                if (b[$] = c, c + l > O + F && (O = c, F = l), !P && Math.abs($ - E) <= N - 1 && c >= y[$]) return s[0] = c, o[0] = l, W <= y[$] && N <= 1448 ? this.WALKTRACE(T, u, h, A, E, p, g, R, b, y, c, n, s, l, r, o, P, a) : null;
            }
            const H = (O - t + (F - i) - N) / 2;
            if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(O, H)) return a[0] = !0, s[0] = O, o[0] = F, H > 0 && N <= 1448 ? this.WALKTRACE(T, u, h, A, E, p, g, R, b, y, c, n, s, l, r, o, P, a) : (t++, i++, [
                new S5e(t, n - t + 1, i, r - i + 1)
            ]);
            p = this.ClipDiagonalBound(E - N, N, E, v), g = this.ClipDiagonalBound(E + N, N, E, v);
            for(let $ = p; $ <= g; $ += 2){
                $ === p || $ < g && y[$ - 1] >= y[$ + 1] ? c = y[$ + 1] - 1 : c = y[$ - 1], l = c - ($ - E) - R;
                const W = c;
                for(; c > t && l > i && this.ElementsAreEqual(c, l);)c--, l--;
                if (y[$] = c, P && Math.abs($ - T) <= N && c <= b[$]) return s[0] = c, o[0] = l, W >= b[$] && N <= 1448 ? this.WALKTRACE(T, u, h, A, E, p, g, R, b, y, c, n, s, l, r, o, P, a) : null;
            }
            if (N <= 1447) {
                let $ = new Int32Array(h - u + 2);
                $[0] = T - u + 1, bmt.Copy2(b, u, $, 1, h - u + 1), this.m_forwardHistory.push($), $ = new Int32Array(g - p + 2), $[0] = E - p + 1, bmt.Copy2(y, p, $, 1, g - p + 1), this.m_reverseHistory.push($);
            }
        }
        return this.WALKTRACE(T, u, h, A, E, p, g, R, b, y, c, n, s, l, r, o, P, a);
    }
    PrettifyChanges(t) {
        for(let n = 0; n < t.length; n++){
            const i = t[n], r = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, o = i.originalLength > 0, a = i.modifiedLength > 0;
            for(; i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!o || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!a || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength));){
                const l = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
                if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !l) break;
                i.originalStart++, i.modifiedStart++;
            }
            const c = [
                null
            ];
            if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], c)) {
                t[n] = c[0], t.splice(n + 1, 1), n--;
                continue;
            }
        }
        for(let n = t.length - 1; n >= 0; n--){
            const i = t[n];
            let r = 0, s = 0;
            if (n > 0) {
                const h = t[n - 1];
                r = h.originalStart + h.originalLength, s = h.modifiedStart + h.modifiedLength;
            }
            const o = i.originalLength > 0, a = i.modifiedLength > 0;
            let c = 0, l = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
            for(let h = 1;; h++){
                const p = i.originalStart - h, g = i.modifiedStart - h;
                if (p < r || g < s || o && !this.OriginalElementsAreEqual(p, p + i.originalLength) || a && !this.ModifiedElementsAreEqual(g, g + i.modifiedLength)) break;
                const v = (p === r && g === s ? 5 : 0) + this._boundaryScore(p, i.originalLength, g, i.modifiedLength);
                v > l && (l = v, c = h);
            }
            i.originalStart -= c, i.modifiedStart -= c;
            const u = [
                null
            ];
            if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], u)) {
                t[n - 1] = u[0], t.splice(n, 1), n++;
                continue;
            }
        }
        if (this._hasStrings) for(let n = 1, i = t.length; n < i; n++){
            const r = t[n - 1], s = t[n], o = s.originalStart - r.originalStart - r.originalLength, a = r.originalStart, c = s.originalStart + s.originalLength, l = c - a, u = r.modifiedStart, h = s.modifiedStart + s.modifiedLength, p = h - u;
            if (o < 5 && l < 20 && p < 20) {
                const g = this._findBetterContiguousSequence(a, l, u, p, o);
                if (g) {
                    const [f, v] = g;
                    (f !== r.originalStart + r.originalLength || v !== r.modifiedStart + r.modifiedLength) && (r.originalLength = f - r.originalStart, r.modifiedLength = v - r.modifiedStart, s.originalStart = f + o, s.modifiedStart = v + o, s.originalLength = c - s.originalStart, s.modifiedLength = h - s.modifiedStart);
                }
            }
        }
        return t;
    }
    _findBetterContiguousSequence(t, n, i, r, s) {
        if (n < s || r < s) return null;
        const o = t + n - s + 1, a = i + r - s + 1;
        let c = 0, l = 0, u = 0;
        for(let h = t; h < o; h++)for(let p = i; p < a; p++){
            const g = this._contiguousSequenceScore(h, p, s);
            g > 0 && g > c && (c = g, l = h, u = p);
        }
        return c > 0 ? [
            l,
            u
        ] : null;
    }
    _contiguousSequenceScore(t, n, i) {
        let r = 0;
        for(let s = 0; s < i; s++){
            if (!this.ElementsAreEqual(t + s, n + s)) return 0;
            r += this._originalStringElements[t + s].length;
        }
        return r;
    }
    _OriginalIsBoundary(t) {
        return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
    }
    _OriginalRegionIsBoundary(t, n) {
        if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return !0;
        if (n > 0) {
            const i = t + n;
            if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i)) return !0;
        }
        return !1;
    }
    _ModifiedIsBoundary(t) {
        return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
    }
    _ModifiedRegionIsBoundary(t, n) {
        if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return !0;
        if (n > 0) {
            const i = t + n;
            if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i)) return !0;
        }
        return !1;
    }
    _boundaryScore(t, n, i, r) {
        const s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, o = this._ModifiedRegionIsBoundary(i, r) ? 1 : 0;
        return s + o;
    }
    ConcatenateChanges(t, n) {
        const i = [];
        if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
        if (this.ChangesOverlap(t[t.length - 1], n[0], i)) {
            const r = new Array(t.length + n.length - 1);
            return bmt.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], bmt.Copy(n, 1, r, t.length, n.length - 1), r;
        } else {
            const r = new Array(t.length + n.length);
            return bmt.Copy(t, 0, r, 0, t.length), bmt.Copy(n, 0, r, t.length, n.length), r;
        }
    }
    ChangesOverlap(t, n, i) {
        if (_mt.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), _mt.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
            const r = t.originalStart;
            let s = t.originalLength;
            const o = t.modifiedStart;
            let a = t.modifiedLength;
            return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (a = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new S5e(r, s, o, a), !0;
        } else return i[0] = null, !1;
    }
    ClipDiagonalBound(t, n, i, r) {
        if (t >= 0 && t < r) return t;
        const s = i, o = r - i - 1, a = n % 2 === 0;
        if (t < 0) {
            const c = s % 2 === 0;
            return a === c ? 0 : 1;
        } else {
            const c = o % 2 === 0;
            return a === c ? r - 1 : r - 2;
        }
    }
}, wkg = new Uint32Array(65536);

}
