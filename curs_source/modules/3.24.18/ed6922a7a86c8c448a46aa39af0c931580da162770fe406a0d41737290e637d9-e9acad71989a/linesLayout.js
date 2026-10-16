import { Ps, Wqr } from "./HVr.js";
import { x } from "./tslib.es6.js";
var VBc, jBc, HJr, qBc;
export { HJr, VBc, jBc, qBc };
var __wakaru_Qfg_initialized = false;
export function Qfg() {
if (__wakaru_Qfg_initialized) return;
__wakaru_Qfg_initialized = true;
"use strict";
x(), Ps(), VBc = class {
    constructor(){
        this._hasPending = !1, this._inserts = [], this._changes = [], this._removes = [];
    }
    insert(e) {
        this._hasPending = !0, this._inserts.push(e);
    }
    change(e) {
        this._hasPending = !0, this._changes.push(e);
    }
    remove(e) {
        this._hasPending = !0, this._removes.push(e);
    }
    mustCommit() {
        return this._hasPending;
    }
    commit(e) {
        if (!this._hasPending) return;
        const t = this._inserts, n = this._changes, i = this._removes;
        this._hasPending = !1, this._inserts = [], this._changes = [], this._removes = [], e._commitPendingChanges(t, n, i);
    }
}, jBc = class {
    constructor(e, t, n, i, r){
        this.id = e, this.afterLineNumber = t, this.ordinal = n, this.height = i, this.minWidth = r, this.prefixSum = 0;
    }
}, HJr = class IIa {
    constructor(t, n, i, r){
        this._instanceId = Wqr(++IIa.INSTANCE_COUNT), this._pendingChanges = new VBc, this._lastWhitespaceId = 0, this._arr = [], this._prefixSumValidIndex = -1, this._minWidth = -1, this._lineCount = t, this._lineHeight = n, this._paddingTop = i, this._paddingBottom = r;
    }
    static findInsertionIndex(t, n, i) {
        let r = 0, s = t.length;
        for(; r < s;){
            const o = r + s >>> 1;
            n === t[o].afterLineNumber ? i < t[o].ordinal ? s = o : r = o + 1 : n < t[o].afterLineNumber ? s = o : r = o + 1;
        }
        return r;
    }
    setLineHeight(t) {
        this._checkPendingChanges(), this._lineHeight = t;
    }
    setPadding(t, n) {
        this._paddingTop = t, this._paddingBottom = n;
    }
    onFlushed(t) {
        this._checkPendingChanges(), this._lineCount = t;
    }
    changeWhitespace(t) {
        let n = !1;
        try {
            t({
                insertWhitespace: (r, s, o, a)=>{
                    n = !0, r = r | 0, s = s | 0, o = o | 0, a = a | 0;
                    const c = this._instanceId + ++this._lastWhitespaceId;
                    return this._pendingChanges.insert(new jBc(c, r, s, o, a)), c;
                },
                changeOneWhitespace: (r, s, o)=>{
                    n = !0, s = s | 0, o = o | 0, this._pendingChanges.change({
                        id: r,
                        newAfterLineNumber: s,
                        newHeight: o
                    });
                },
                removeWhitespace: (r)=>{
                    n = !0, this._pendingChanges.remove({
                        id: r
                    });
                }
            });
        } finally{
            this._pendingChanges.commit(this);
        }
        return n;
    }
    _commitPendingChanges(t, n, i) {
        if ((t.length > 0 || i.length > 0) && (this._minWidth = -1), t.length + n.length + i.length <= 1) {
            for (const c of t)this._insertWhitespace(c);
            for (const c of n)this._changeOneWhitespace(c.id, c.newAfterLineNumber, c.newHeight);
            for (const c of i){
                const l = this._findWhitespaceIndex(c.id);
                l !== -1 && this._removeWhitespace(l);
            }
            return;
        }
        const r = new Set;
        for (const c of i)r.add(c.id);
        const s = new Map;
        for (const c of n)s.set(c.id, c);
        const o = (c)=>{
            const l = [];
            for (const u of c)if (!r.has(u.id)) {
                if (s.has(u.id)) {
                    const h = s.get(u.id);
                    u.afterLineNumber = h.newAfterLineNumber, u.height = h.newHeight;
                }
                l.push(u);
            }
            return l;
        }, a = o(this._arr).concat(o(t));
        a.sort((c, l)=>c.afterLineNumber === l.afterLineNumber ? c.ordinal - l.ordinal : c.afterLineNumber - l.afterLineNumber), this._arr = a, this._prefixSumValidIndex = -1;
    }
    _checkPendingChanges() {
        this._pendingChanges.mustCommit() && this._pendingChanges.commit(this);
    }
    _insertWhitespace(t) {
        const n = IIa.findInsertionIndex(this._arr, t.afterLineNumber, t.ordinal);
        this._arr.splice(n, 0, t), this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, n - 1);
    }
    _findWhitespaceIndex(t) {
        const n = this._arr;
        for(let i = 0, r = n.length; i < r; i++)if (n[i].id === t) return i;
        return -1;
    }
    _changeOneWhitespace(t, n, i) {
        const r = this._findWhitespaceIndex(t);
        if (r !== -1 && (this._arr[r].height !== i && (this._arr[r].height = i, this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, r - 1)), this._arr[r].afterLineNumber !== n)) {
            const s = this._arr[r];
            this._removeWhitespace(r), s.afterLineNumber = n, this._insertWhitespace(s);
        }
    }
    _removeWhitespace(t) {
        this._arr.splice(t, 1), this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, t - 1);
    }
    onLinesDeleted(t, n) {
        this._checkPendingChanges(), t = t | 0, n = n | 0, this._lineCount -= n - t + 1;
        for(let i = 0, r = this._arr.length; i < r; i++){
            const s = this._arr[i].afterLineNumber;
            t <= s && s <= n ? this._arr[i].afterLineNumber = t - 1 : s > n && (this._arr[i].afterLineNumber -= n - t + 1);
        }
    }
    onLinesInserted(t, n) {
        this._checkPendingChanges(), t = t | 0, n = n | 0, this._lineCount += n - t + 1;
        for(let i = 0, r = this._arr.length; i < r; i++){
            const s = this._arr[i].afterLineNumber;
            t <= s && (this._arr[i].afterLineNumber += n - t + 1);
        }
    }
    getWhitespacesTotalHeight() {
        return this._checkPendingChanges(), this._arr.length === 0 ? 0 : this.getWhitespacesAccumulatedHeight(this._arr.length - 1);
    }
    getWhitespacesAccumulatedHeight(t) {
        this._checkPendingChanges(), t = t | 0;
        let n = Math.max(0, this._prefixSumValidIndex + 1);
        n === 0 && (this._arr[0].prefixSum = this._arr[0].height, n++);
        for(let i = n; i <= t; i++)this._arr[i].prefixSum = this._arr[i - 1].prefixSum + this._arr[i].height;
        return this._prefixSumValidIndex = Math.max(this._prefixSumValidIndex, t), this._arr[t].prefixSum;
    }
    getLinesTotalHeight() {
        this._checkPendingChanges();
        const t = this._lineHeight * this._lineCount, n = this.getWhitespacesTotalHeight();
        return t + n + this._paddingTop + this._paddingBottom;
    }
    getWhitespaceAccumulatedHeightBeforeLineNumber(t) {
        this._checkPendingChanges(), t = t | 0;
        const n = this._findLastWhitespaceBeforeLineNumber(t);
        return n === -1 ? 0 : this.getWhitespacesAccumulatedHeight(n);
    }
    _findLastWhitespaceBeforeLineNumber(t) {
        t = t | 0;
        const n = this._arr;
        let i = 0, r = n.length - 1;
        for(; i <= r;){
            const o = (r - i | 0) / 2 | 0, a = i + o | 0;
            if (n[a].afterLineNumber < t) {
                if (a + 1 >= n.length || n[a + 1].afterLineNumber >= t) return a;
                i = a + 1 | 0;
            } else r = a - 1 | 0;
        }
        return -1;
    }
    _findFirstWhitespaceAfterLineNumber(t) {
        t = t | 0;
        const i = this._findLastWhitespaceBeforeLineNumber(t) + 1;
        return i < this._arr.length ? i : -1;
    }
    getFirstWhitespaceIndexAfterLineNumber(t) {
        return this._checkPendingChanges(), t = t | 0, this._findFirstWhitespaceAfterLineNumber(t);
    }
    getVerticalOffsetForLineNumber(t, n = !1) {
        this._checkPendingChanges(), t = t | 0;
        let i;
        t > 1 ? i = this._lineHeight * (t - 1) : i = 0;
        const r = this.getWhitespaceAccumulatedHeightBeforeLineNumber(t - (n ? 1 : 0));
        return i + r + this._paddingTop;
    }
    getVerticalOffsetAfterLineNumber(t, n = !1) {
        this._checkPendingChanges(), t = t | 0;
        const i = this._lineHeight * t, r = this.getWhitespaceAccumulatedHeightBeforeLineNumber(t + (n ? 1 : 0));
        return i + r + this._paddingTop;
    }
    hasWhitespace() {
        return this._checkPendingChanges(), this.getWhitespacesCount() > 0;
    }
    getWhitespaceMinWidth() {
        if (this._checkPendingChanges(), this._minWidth === -1) {
            let t = 0;
            for(let n = 0, i = this._arr.length; n < i; n++)t = Math.max(t, this._arr[n].minWidth);
            this._minWidth = t;
        }
        return this._minWidth;
    }
    isAfterLines(t) {
        this._checkPendingChanges();
        const n = this.getLinesTotalHeight();
        return t > n;
    }
    isInTopPadding(t) {
        return this._paddingTop === 0 ? !1 : (this._checkPendingChanges(), t < this._paddingTop);
    }
    isInBottomPadding(t) {
        if (this._paddingBottom === 0) return !1;
        this._checkPendingChanges();
        const n = this.getLinesTotalHeight();
        return t >= n - this._paddingBottom;
    }
    getLineNumberAtOrAfterVerticalOffset(t) {
        if (this._checkPendingChanges(), t = t | 0, t < 0) return 1;
        const n = this._lineCount | 0, i = this._lineHeight;
        let r = 1, s = n;
        for(; r < s;){
            const o = (r + s) / 2 | 0, a = this.getVerticalOffsetForLineNumber(o) | 0;
            if (t >= a + i) r = o + 1;
            else {
                if (t >= a) return o;
                s = o;
            }
        }
        return r > n ? n : r;
    }
    getLinesViewportData(t, n) {
        this._checkPendingChanges(), t = t | 0, n = n | 0;
        const i = this._lineHeight, r = this.getLineNumberAtOrAfterVerticalOffset(t) | 0, s = this.getVerticalOffsetForLineNumber(r) | 0;
        let o = this._lineCount | 0, a = this.getFirstWhitespaceIndexAfterLineNumber(r) | 0;
        const c = this.getWhitespacesCount() | 0;
        let l, u;
        a === -1 ? (a = c, u = o + 1, l = 0) : (u = this.getAfterLineNumberForWhitespaceIndex(a) | 0, l = this.getHeightForWhitespaceIndex(a) | 0);
        let h = s, p = h;
        const g = 5e5;
        let f = 0;
        s >= g && (f = Math.floor(s / g) * g, f = Math.floor(f / i) * i, p -= f);
        const v = [], b = t + (n - t) / 2;
        let y = -1;
        for(let R = r; R <= o; R++){
            if (y === -1) {
                const D = h, P = h + i;
                (D <= b && b < P || D > b) && (y = R);
            }
            for(h += i, v[R - r] = p, p += i; u === R;)p += l, h += l, a++, a >= c ? u = o + 1 : (u = this.getAfterLineNumberForWhitespaceIndex(a) | 0, l = this.getHeightForWhitespaceIndex(a) | 0);
            if (h >= n) {
                o = R;
                break;
            }
        }
        y === -1 && (y = o);
        const T = this.getVerticalOffsetForLineNumber(o) | 0;
        let E = r, A = o;
        return E < A && s < t && E++, E < A && T + i > n && A--, {
            bigNumbersDelta: f,
            startLineNumber: r,
            endLineNumber: o,
            relativeVerticalOffset: v,
            centeredLineNumber: y,
            completelyVisibleStartLineNumber: E,
            completelyVisibleEndLineNumber: A,
            lineHeight: this._lineHeight
        };
    }
    getVerticalOffsetForWhitespaceIndex(t) {
        this._checkPendingChanges(), t = t | 0;
        const n = this.getAfterLineNumberForWhitespaceIndex(t);
        let i;
        n >= 1 ? i = this._lineHeight * n : i = 0;
        let r;
        return t > 0 ? r = this.getWhitespacesAccumulatedHeight(t - 1) : r = 0, i + r + this._paddingTop;
    }
    getWhitespaceIndexAtOrAfterVerticallOffset(t) {
        this._checkPendingChanges(), t = t | 0;
        let n = 0, i = this.getWhitespacesCount() - 1;
        if (i < 0) return -1;
        const r = this.getVerticalOffsetForWhitespaceIndex(i), s = this.getHeightForWhitespaceIndex(i);
        if (t >= r + s) return -1;
        for(; n < i;){
            const o = Math.floor((n + i) / 2), a = this.getVerticalOffsetForWhitespaceIndex(o), c = this.getHeightForWhitespaceIndex(o);
            if (t >= a + c) n = o + 1;
            else {
                if (t >= a) return o;
                i = o;
            }
        }
        return n;
    }
    getWhitespaceAtVerticalOffset(t) {
        this._checkPendingChanges(), t = t | 0;
        const n = this.getWhitespaceIndexAtOrAfterVerticallOffset(t);
        if (n < 0 || n >= this.getWhitespacesCount()) return null;
        const i = this.getVerticalOffsetForWhitespaceIndex(n);
        if (i > t) return null;
        const r = this.getHeightForWhitespaceIndex(n), s = this.getIdForWhitespaceIndex(n), o = this.getAfterLineNumberForWhitespaceIndex(n);
        return {
            id: s,
            afterLineNumber: o,
            verticalOffset: i,
            height: r
        };
    }
    getWhitespaceViewportData(t, n) {
        this._checkPendingChanges(), t = t | 0, n = n | 0;
        const i = this.getWhitespaceIndexAtOrAfterVerticallOffset(t), r = this.getWhitespacesCount() - 1;
        if (i < 0) return [];
        const s = [];
        for(let o = i; o <= r; o++){
            const a = this.getVerticalOffsetForWhitespaceIndex(o), c = this.getHeightForWhitespaceIndex(o);
            if (a >= n) break;
            s.push({
                id: this.getIdForWhitespaceIndex(o),
                afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(o),
                verticalOffset: a,
                height: c
            });
        }
        return s;
    }
    getWhitespaces() {
        return this._checkPendingChanges(), this._arr.slice(0);
    }
    getWhitespacesCount() {
        return this._checkPendingChanges(), this._arr.length;
    }
    getIdForWhitespaceIndex(t) {
        return this._checkPendingChanges(), t = t | 0, this._arr[t].id;
    }
    getAfterLineNumberForWhitespaceIndex(t) {
        return this._checkPendingChanges(), t = t | 0, this._arr[t].afterLineNumber;
    }
    getHeightForWhitespaceIndex(t) {
        return this._checkPendingChanges(), t = t | 0, this._arr[t].height;
    }
}, HJr.INSTANCE_COUNT = 0, qBc = HJr;

}
