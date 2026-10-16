import { Pke } from "./SZu.js";
import { _nt, n5y } from "./diffChange.js";
import { Xy } from "./hash.js";
import { E } from "./tslib.es6.js";
var Kzo, qBt, zBt, Yzo, Dvn, r5y;
export { Dvn, Kzo, Yzo, qBt, r5y, zBt };
var __wakaru_zoi_initialized = false;
export function zoi() {
if (__wakaru_zoi_initialized) return;
__wakaru_zoi_initialized = true;
"use strict";
E(), n5y(), Xy(), Kzo = class {
    constructor(t){
        this.source = t;
    }
    getElements() {
        const t = this.source, e = new Int32Array(t.length);
        for(let n = 0, i = t.length; n < i; n++)e[n] = t.charCodeAt(n);
        return e;
    }
}, qBt = class {
    static Assert(t, e) {
        if (!t) throw new Error(e);
    }
}, zBt = class {
    static Copy(t, e, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = t[e + s];
    }
    static Copy2(t, e, n, i, r) {
        for(let s = 0; s < r; s++)n[i + s] = t[e + s];
    }
}, Yzo = class {
    constructor(){
        this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }
    MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new _nt(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
    }
    AddOriginalElement(t, e) {
        this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, e), this.m_originalCount++;
    }
    AddModifiedElement(t, e) {
        this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, e), this.m_modifiedCount++;
    }
    getChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }
    getReverseChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }
}, Dvn = class n$n {
    constructor(e, n, i = null){
        this.ContinueProcessingPredicate = i, this._originalSequence = e, this._modifiedSequence = n;
        const [r, s, o] = n$n._getElements(e), [a, l, c] = n$n._getElements(n);
        this._hasStrings = o && c, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = a, this._modifiedElementsOrHash = l, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }
    static _isStringArray(e) {
        return e.length > 0 && typeof e[0] == "string";
    }
    static _getElements(e) {
        const n = e.getElements();
        if (n$n._isStringArray(n)) {
            const i = new Int32Array(n.length);
            for(let r = 0, s = n.length; r < s; r++)i[r] = Pke(n[r], 0);
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
    ElementsAreEqual(e, n) {
        return this._originalElementsOrHash[e] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[e] === this._modifiedStringElements[n] : !0;
    }
    ElementsAreStrictEqual(e, n) {
        if (!this.ElementsAreEqual(e, n)) return !1;
        const i = n$n._getStrictElement(this._originalSequence, e), r = n$n._getStrictElement(this._modifiedSequence, n);
        return i === r;
    }
    static _getStrictElement(e, n) {
        return typeof e.getStrictElement == "function" ? e.getStrictElement(n) : null;
    }
    OriginalElementsAreEqual(e, n) {
        return this._originalElementsOrHash[e] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[e] === this._originalStringElements[n] : !0;
    }
    ModifiedElementsAreEqual(e, n) {
        return this._modifiedElementsOrHash[e] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[e] === this._modifiedStringElements[n] : !0;
    }
    ComputeDiff(e) {
        return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e);
    }
    _ComputeDiff(e, n, i, r, s) {
        const o = [
            !1
        ];
        let a = this.ComputeDiffRecursive(e, n, i, r, o);
        return s && (a = this.PrettifyChanges(a)), {
            quitEarly: o[0],
            changes: a
        };
    }
    ComputeDiffRecursive(e, n, i, r, s) {
        for(s[0] = !1; e <= n && i <= r && this.ElementsAreEqual(e, i);)e++, i++;
        for(; n >= e && r >= i && this.ElementsAreEqual(n, r);)n--, r--;
        if (e > n || i > r) {
            let d;
            return i <= r ? (qBt.Assert(e === n + 1, "originalStart should only be one more than originalEnd"), d = [
                new _nt(e, 0, i, r - i + 1)
            ]) : e <= n ? (qBt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), d = [
                new _nt(e, n - e + 1, i, 0)
            ]) : (qBt.Assert(e === n + 1, "originalStart should only be one more than originalEnd"), qBt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), d = []), d;
        }
        const o = [
            0
        ], a = [
            0
        ], l = this.ComputeRecursionPoint(e, n, i, r, o, a, s), c = o[0], u = a[0];
        if (l !== null) return l;
        if (!s[0]) {
            const d = this.ComputeDiffRecursive(e, c, i, u, s);
            let h = [];
            return s[0] ? h = [
                new _nt(c + 1, n - (c + 1) + 1, u + 1, r - (u + 1) + 1)
            ] : h = this.ComputeDiffRecursive(c + 1, n, u + 1, r, s), this.ConcatenateChanges(d, h);
        }
        return [
            new _nt(e, n - e + 1, i, r - i + 1)
        ];
    }
    WALKTRACE(e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y) {
        let S = null, k = null, C = new Yzo, T = n, I = i, A = p[0] - _[0] - r, P = -1073741824, M = this.m_forwardHistory.length - 1;
        do {
            const O = A + e;
            O === T || O < I && c[O - 1] < c[O + 1] ? (d = c[O + 1], g = d - A - r, d < P && C.MarkNextChange(), P = d, C.AddModifiedElement(d + 1, g), A = O + 1 - e) : (d = c[O - 1] + 1, g = d - A - r, d < P && C.MarkNextChange(), P = d - 1, C.AddOriginalElement(d, g + 1), A = O - 1 - e), M >= 0 && (c = this.m_forwardHistory[M], e = c[0], T = 1, I = c.length - 1);
        }while (--M >= -1)
        if (S = C.getReverseChanges(), y[0]) {
            let O = p[0] + 1, N = _[0] + 1;
            if (S !== null && S.length > 0) {
                const U = S[S.length - 1];
                O = Math.max(O, U.getOriginalEnd()), N = Math.max(N, U.getModifiedEnd());
            }
            k = [
                new _nt(O, h - O + 1, N, f - N + 1)
            ];
        } else {
            C = new Yzo, T = o, I = a, A = p[0] - _[0] - l, P = 1073741824, M = b ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                const O = A + s;
                O === T || O < I && u[O - 1] >= u[O + 1] ? (d = u[O + 1] - 1, g = d - A - l, d > P && C.MarkNextChange(), P = d + 1, C.AddOriginalElement(d + 1, g + 1), A = O + 1 - s) : (d = u[O - 1], g = d - A - l, d > P && C.MarkNextChange(), P = d, C.AddModifiedElement(d + 1, g + 1), A = O - 1 - s), M >= 0 && (u = this.m_reverseHistory[M], s = u[0], T = 1, I = u.length - 1);
            }while (--M >= -1)
            k = C.getChanges();
        }
        return this.ConcatenateChanges(S, k);
    }
    ComputeRecursionPoint(e, n, i, r, s, o, a) {
        let l = 0, c = 0, u = 0, d = 0, h = 0, p = 0;
        e--, i--, s[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        const g = n - e + (r - i), f = g + 1, _ = new Int32Array(f), b = new Int32Array(f), y = r - i, S = n - e, k = e - i, C = n - r, I = (S - y) % 2 === 0;
        _[y] = e, b[S] = n, a[0] = !1;
        for(let A = 1; A <= g / 2 + 1; A++){
            let P = 0, M = 0;
            u = this.ClipDiagonalBound(y - A, A, y, f), d = this.ClipDiagonalBound(y + A, A, y, f);
            for(let N = u; N <= d; N += 2){
                N === u || N < d && _[N - 1] < _[N + 1] ? l = _[N + 1] : l = _[N - 1] + 1, c = l - (N - y) - k;
                const U = l;
                for(; l < n && c < r && this.ElementsAreEqual(l + 1, c + 1);)l++, c++;
                if (_[N] = l, l + c > P + M && (P = l, M = c), !I && Math.abs(N - S) <= A - 1 && l >= b[N]) return s[0] = l, o[0] = c, U <= b[N] && A <= 1448 ? this.WALKTRACE(y, u, d, k, S, h, p, C, _, b, l, n, s, c, r, o, I, a) : null;
            }
            const O = (P - e + (M - i) - A) / 2;
            if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(P, O)) return a[0] = !0, s[0] = P, o[0] = M, O > 0 && A <= 1448 ? this.WALKTRACE(y, u, d, k, S, h, p, C, _, b, l, n, s, c, r, o, I, a) : (e++, i++, [
                new _nt(e, n - e + 1, i, r - i + 1)
            ]);
            h = this.ClipDiagonalBound(S - A, A, S, f), p = this.ClipDiagonalBound(S + A, A, S, f);
            for(let N = h; N <= p; N += 2){
                N === h || N < p && b[N - 1] >= b[N + 1] ? l = b[N + 1] - 1 : l = b[N - 1], c = l - (N - S) - C;
                const U = l;
                for(; l > e && c > i && this.ElementsAreEqual(l, c);)l--, c--;
                if (b[N] = l, I && Math.abs(N - y) <= A && l <= _[N]) return s[0] = l, o[0] = c, U >= _[N] && A <= 1448 ? this.WALKTRACE(y, u, d, k, S, h, p, C, _, b, l, n, s, c, r, o, I, a) : null;
            }
            if (A <= 1447) {
                let N = new Int32Array(d - u + 2);
                N[0] = y - u + 1, zBt.Copy2(_, u, N, 1, d - u + 1), this.m_forwardHistory.push(N), N = new Int32Array(p - h + 2), N[0] = S - h + 1, zBt.Copy2(b, h, N, 1, p - h + 1), this.m_reverseHistory.push(N);
            }
        }
        return this.WALKTRACE(y, u, d, k, S, h, p, C, _, b, l, n, s, c, r, o, I, a);
    }
    PrettifyChanges(e) {
        for(let n = 0; n < e.length; n++){
            const i = e[n], r = n < e.length - 1 ? e[n + 1].originalStart : this._originalElementsOrHash.length, s = n < e.length - 1 ? e[n + 1].modifiedStart : this._modifiedElementsOrHash.length, o = i.originalLength > 0, a = i.modifiedLength > 0;
            for(; i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!o || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!a || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength));){
                const c = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
                if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !c) break;
                i.originalStart++, i.modifiedStart++;
            }
            const l = [
                null
            ];
            if (n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], l)) {
                e[n] = l[0], e.splice(n + 1, 1), n--;
                continue;
            }
        }
        for(let n = e.length - 1; n >= 0; n--){
            const i = e[n];
            let r = 0, s = 0;
            if (n > 0) {
                const d = e[n - 1];
                r = d.originalStart + d.originalLength, s = d.modifiedStart + d.modifiedLength;
            }
            const o = i.originalLength > 0, a = i.modifiedLength > 0;
            let l = 0, c = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
            for(let d = 1;; d++){
                const h = i.originalStart - d, p = i.modifiedStart - d;
                if (h < r || p < s || o && !this.OriginalElementsAreEqual(h, h + i.originalLength) || a && !this.ModifiedElementsAreEqual(p, p + i.modifiedLength)) break;
                const f = (h === r && p === s ? 5 : 0) + this._boundaryScore(h, i.originalLength, p, i.modifiedLength);
                f > c && (c = f, l = d);
            }
            i.originalStart -= l, i.modifiedStart -= l;
            const u = [
                null
            ];
            if (n > 0 && this.ChangesOverlap(e[n - 1], e[n], u)) {
                e[n - 1] = u[0], e.splice(n, 1), n++;
                continue;
            }
        }
        if (this._hasStrings) for(let n = 1, i = e.length; n < i; n++){
            const r = e[n - 1], s = e[n], o = s.originalStart - r.originalStart - r.originalLength, a = r.originalStart, l = s.originalStart + s.originalLength, c = l - a, u = r.modifiedStart, d = s.modifiedStart + s.modifiedLength, h = d - u;
            if (o < 5 && c < 20 && h < 20) {
                const p = this._findBetterContiguousSequence(a, c, u, h, o);
                if (p) {
                    const [g, f] = p;
                    (g !== r.originalStart + r.originalLength || f !== r.modifiedStart + r.modifiedLength) && (r.originalLength = g - r.originalStart, r.modifiedLength = f - r.modifiedStart, s.originalStart = g + o, s.modifiedStart = f + o, s.originalLength = l - s.originalStart, s.modifiedLength = d - s.modifiedStart);
                }
            }
        }
        return e;
    }
    _findBetterContiguousSequence(e, n, i, r, s) {
        if (n < s || r < s) return null;
        const o = e + n - s + 1, a = i + r - s + 1;
        let l = 0, c = 0, u = 0;
        for(let d = e; d < o; d++)for(let h = i; h < a; h++){
            const p = this._contiguousSequenceScore(d, h, s);
            p > 0 && p > l && (l = p, c = d, u = h);
        }
        return l > 0 ? [
            c,
            u
        ] : null;
    }
    _contiguousSequenceScore(e, n, i) {
        let r = 0;
        for(let s = 0; s < i; s++){
            if (!this.ElementsAreEqual(e + s, n + s)) return 0;
            r += this._originalStringElements[e + s].length;
        }
        return r;
    }
    _OriginalIsBoundary(e) {
        return e <= 0 || e >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
    }
    _OriginalRegionIsBoundary(e, n) {
        if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
        if (n > 0) {
            const i = e + n;
            if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i)) return !0;
        }
        return !1;
    }
    _ModifiedIsBoundary(e) {
        return e <= 0 || e >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
    }
    _ModifiedRegionIsBoundary(e, n) {
        if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
        if (n > 0) {
            const i = e + n;
            if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i)) return !0;
        }
        return !1;
    }
    _boundaryScore(e, n, i, r) {
        const s = this._OriginalRegionIsBoundary(e, n) ? 1 : 0, o = this._ModifiedRegionIsBoundary(i, r) ? 1 : 0;
        return s + o;
    }
    ConcatenateChanges(e, n) {
        const i = [];
        if (e.length === 0 || n.length === 0) return n.length > 0 ? n : e;
        if (this.ChangesOverlap(e[e.length - 1], n[0], i)) {
            const r = new Array(e.length + n.length - 1);
            return zBt.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = i[0], zBt.Copy(n, 1, r, e.length, n.length - 1), r;
        } else {
            const r = new Array(e.length + n.length);
            return zBt.Copy(e, 0, r, 0, e.length), zBt.Copy(n, 0, r, e.length, n.length), r;
        }
    }
    ChangesOverlap(e, n, i) {
        if (qBt.Assert(e.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), qBt.Assert(e.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= n.originalStart || e.modifiedStart + e.modifiedLength >= n.modifiedStart) {
            const r = e.originalStart;
            let s = e.originalLength;
            const o = e.modifiedStart;
            let a = e.modifiedLength;
            return e.originalStart + e.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= n.modifiedStart && (a = n.modifiedStart + n.modifiedLength - e.modifiedStart), i[0] = new _nt(r, s, o, a), !0;
        } else return i[0] = null, !1;
    }
    ClipDiagonalBound(e, n, i, r) {
        if (e >= 0 && e < r) return e;
        const s = i, o = r - i - 1, a = n % 2 === 0;
        if (e < 0) {
            const l = s % 2 === 0;
            return a === l ? 0 : 1;
        } else {
            const l = o % 2 === 0;
            return a === l ? r - 1 : r - 2;
        }
    }
}, r5y = new Uint32Array(65536);

}
