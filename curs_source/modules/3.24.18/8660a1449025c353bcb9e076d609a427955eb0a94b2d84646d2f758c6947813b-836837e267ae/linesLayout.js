import { Fa, TXu } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var sUd, oUd, H$o, aUd;
export { H$o, aUd, oUd, sUd };
var __wakaru_GPy_initialized = false;
export function GPy() {
if (__wakaru_GPy_initialized) return;
__wakaru_GPy_initialized = true;
"use strict";
E(), Fa(), sUd = class {
    constructor(){
        this._hasPending = !1, this._inserts = [], this._changes = [], this._removes = [];
    }
    insert(t) {
        this._hasPending = !0, this._inserts.push(t);
    }
    change(t) {
        this._hasPending = !0, this._changes.push(t);
    }
    remove(t) {
        this._hasPending = !0, this._removes.push(t);
    }
    mustCommit() {
        return this._hasPending;
    }
    commit(t) {
        if (!this._hasPending) return;
        const e = this._inserts, n = this._changes, i = this._removes;
        this._hasPending = !1, this._inserts = [], this._changes = [], this._removes = [], t._commitPendingChanges(e, n, i);
    }
}, oUd = class {
    constructor(t, e, n, i, r){
        this.id = t, this.afterLineNumber = e, this.ordinal = n, this.height = i, this.minWidth = r, this.prefixSum = 0;
    }
}, H$o = class dJc {
    constructor(e, n, i, r){
        this._instanceId = TXu(++dJc.INSTANCE_COUNT), this._pendingChanges = new sUd, this._lastWhitespaceId = 0, this._arr = [], this._prefixSumValidIndex = -1, this._minWidth = -1, this._lineCount = e, this._lineHeight = n, this._paddingTop = i, this._paddingBottom = r;
    }
    static findInsertionIndex(e, n, i) {
        let r = 0, s = e.length;
        for(; r < s;){
            const o = r + s >>> 1;
            n === e[o].afterLineNumber ? i < e[o].ordinal ? s = o : r = o + 1 : n < e[o].afterLineNumber ? s = o : r = o + 1;
        }
        return r;
    }
    setLineHeight(e) {
        this._checkPendingChanges(), this._lineHeight = e;
    }
    setPadding(e, n) {
        this._paddingTop = e, this._paddingBottom = n;
    }
    onFlushed(e) {
        this._checkPendingChanges(), this._lineCount = e;
    }
    changeWhitespace(e) {
        let n = !1;
        try {
            e({
                insertWhitespace: (r, s, o, a)=>{
                    n = !0, r = r | 0, s = s | 0, o = o | 0, a = a | 0;
                    const l = this._instanceId + ++this._lastWhitespaceId;
                    return this._pendingChanges.insert(new oUd(l, r, s, o, a)), l;
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
    _commitPendingChanges(e, n, i) {
        if ((e.length > 0 || i.length > 0) && (this._minWidth = -1), e.length + n.length + i.length <= 1) {
            for (const l of e)this._insertWhitespace(l);
            for (const l of n)this._changeOneWhitespace(l.id, l.newAfterLineNumber, l.newHeight);
            for (const l of i){
                const c = this._findWhitespaceIndex(l.id);
                c !== -1 && this._removeWhitespace(c);
            }
            return;
        }
        const r = new Set;
        for (const l of i)r.add(l.id);
        const s = new Map;
        for (const l of n)s.set(l.id, l);
        const o = (l)=>{
            const c = [];
            for (const u of l)if (!r.has(u.id)) {
                if (s.has(u.id)) {
                    const d = s.get(u.id);
                    u.afterLineNumber = d.newAfterLineNumber, u.height = d.newHeight;
                }
                c.push(u);
            }
            return c;
        }, a = o(this._arr).concat(o(e));
        a.sort((l, c)=>l.afterLineNumber === c.afterLineNumber ? l.ordinal - c.ordinal : l.afterLineNumber - c.afterLineNumber), this._arr = a, this._prefixSumValidIndex = -1;
    }
    _checkPendingChanges() {
        this._pendingChanges.mustCommit() && this._pendingChanges.commit(this);
    }
    _insertWhitespace(e) {
        const n = dJc.findInsertionIndex(this._arr, e.afterLineNumber, e.ordinal);
        this._arr.splice(n, 0, e), this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, n - 1);
    }
    _findWhitespaceIndex(e) {
        const n = this._arr;
        for(let i = 0, r = n.length; i < r; i++)if (n[i].id === e) return i;
        return -1;
    }
    _changeOneWhitespace(e, n, i) {
        const r = this._findWhitespaceIndex(e);
        if (r !== -1 && (this._arr[r].height !== i && (this._arr[r].height = i, this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, r - 1)), this._arr[r].afterLineNumber !== n)) {
            const s = this._arr[r];
            this._removeWhitespace(r), s.afterLineNumber = n, this._insertWhitespace(s);
        }
    }
    _removeWhitespace(e) {
        this._arr.splice(e, 1), this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, e - 1);
    }
    onLinesDeleted(e, n) {
        this._checkPendingChanges(), e = e | 0, n = n | 0, this._lineCount -= n - e + 1;
        for(let i = 0, r = this._arr.length; i < r; i++){
            const s = this._arr[i].afterLineNumber;
            e <= s && s <= n ? this._arr[i].afterLineNumber = e - 1 : s > n && (this._arr[i].afterLineNumber -= n - e + 1);
        }
    }
    onLinesInserted(e, n) {
        this._checkPendingChanges(), e = e | 0, n = n | 0, this._lineCount += n - e + 1;
        for(let i = 0, r = this._arr.length; i < r; i++){
            const s = this._arr[i].afterLineNumber;
            e <= s && (this._arr[i].afterLineNumber += n - e + 1);
        }
    }
    getWhitespacesTotalHeight() {
        return this._checkPendingChanges(), this._arr.length === 0 ? 0 : this.getWhitespacesAccumulatedHeight(this._arr.length - 1);
    }
    getWhitespacesAccumulatedHeight(e) {
        this._checkPendingChanges(), e = e | 0;
        let n = Math.max(0, this._prefixSumValidIndex + 1);
        n === 0 && (this._arr[0].prefixSum = this._arr[0].height, n++);
        for(let i = n; i <= e; i++)this._arr[i].prefixSum = this._arr[i - 1].prefixSum + this._arr[i].height;
        return this._prefixSumValidIndex = Math.max(this._prefixSumValidIndex, e), this._arr[e].prefixSum;
    }
    getLinesTotalHeight() {
        this._checkPendingChanges();
        const e = this._lineHeight * this._lineCount, n = this.getWhitespacesTotalHeight();
        return e + n + this._paddingTop + this._paddingBottom;
    }
    getWhitespaceAccumulatedHeightBeforeLineNumber(e) {
        this._checkPendingChanges(), e = e | 0;
        const n = this._findLastWhitespaceBeforeLineNumber(e);
        return n === -1 ? 0 : this.getWhitespacesAccumulatedHeight(n);
    }
    _findLastWhitespaceBeforeLineNumber(e) {
        e = e | 0;
        const n = this._arr;
        let i = 0, r = n.length - 1;
        for(; i <= r;){
            const o = (r - i | 0) / 2 | 0, a = i + o | 0;
            if (n[a].afterLineNumber < e) {
                if (a + 1 >= n.length || n[a + 1].afterLineNumber >= e) return a;
                i = a + 1 | 0;
            } else r = a - 1 | 0;
        }
        return -1;
    }
    _findFirstWhitespaceAfterLineNumber(e) {
        e = e | 0;
        const i = this._findLastWhitespaceBeforeLineNumber(e) + 1;
        return i < this._arr.length ? i : -1;
    }
    getFirstWhitespaceIndexAfterLineNumber(e) {
        return this._checkPendingChanges(), e = e | 0, this._findFirstWhitespaceAfterLineNumber(e);
    }
    getVerticalOffsetForLineNumber(e, n = !1) {
        this._checkPendingChanges(), e = e | 0;
        let i;
        e > 1 ? i = this._lineHeight * (e - 1) : i = 0;
        const r = this.getWhitespaceAccumulatedHeightBeforeLineNumber(e - (n ? 1 : 0));
        return i + r + this._paddingTop;
    }
    getVerticalOffsetAfterLineNumber(e, n = !1) {
        this._checkPendingChanges(), e = e | 0;
        const i = this._lineHeight * e, r = this.getWhitespaceAccumulatedHeightBeforeLineNumber(e + (n ? 1 : 0));
        return i + r + this._paddingTop;
    }
    hasWhitespace() {
        return this._checkPendingChanges(), this.getWhitespacesCount() > 0;
    }
    getWhitespaceMinWidth() {
        if (this._checkPendingChanges(), this._minWidth === -1) {
            let e = 0;
            for(let n = 0, i = this._arr.length; n < i; n++)e = Math.max(e, this._arr[n].minWidth);
            this._minWidth = e;
        }
        return this._minWidth;
    }
    isAfterLines(e) {
        this._checkPendingChanges();
        const n = this.getLinesTotalHeight();
        return e > n;
    }
    isInTopPadding(e) {
        return this._paddingTop === 0 ? !1 : (this._checkPendingChanges(), e < this._paddingTop);
    }
    isInBottomPadding(e) {
        if (this._paddingBottom === 0) return !1;
        this._checkPendingChanges();
        const n = this.getLinesTotalHeight();
        return e >= n - this._paddingBottom;
    }
    getLineNumberAtOrAfterVerticalOffset(e) {
        if (this._checkPendingChanges(), e = e | 0, e < 0) return 1;
        const n = this._lineCount | 0, i = this._lineHeight;
        let r = 1, s = n;
        for(; r < s;){
            const o = (r + s) / 2 | 0, a = this.getVerticalOffsetForLineNumber(o) | 0;
            if (e >= a + i) r = o + 1;
            else {
                if (e >= a) return o;
                s = o;
            }
        }
        return r > n ? n : r;
    }
    getLinesViewportData(e, n) {
        this._checkPendingChanges(), e = e | 0, n = n | 0;
        const i = this._lineHeight, r = this.getLineNumberAtOrAfterVerticalOffset(e) | 0, s = this.getVerticalOffsetForLineNumber(r) | 0;
        let o = this._lineCount | 0, a = this.getFirstWhitespaceIndexAfterLineNumber(r) | 0;
        const l = this.getWhitespacesCount() | 0;
        let c, u;
        a === -1 ? (a = l, u = o + 1, c = 0) : (u = this.getAfterLineNumberForWhitespaceIndex(a) | 0, c = this.getHeightForWhitespaceIndex(a) | 0);
        let d = s, h = d;
        const p = 5e5;
        let g = 0;
        s >= p && (g = Math.floor(s / p) * p, g = Math.floor(g / i) * i, h -= g);
        const f = [], _ = e + (n - e) / 2;
        let b = -1;
        for(let C = r; C <= o; C++){
            if (b === -1) {
                const T = d, I = d + i;
                (T <= _ && _ < I || T > _) && (b = C);
            }
            for(d += i, f[C - r] = h, h += i; u === C;)h += c, d += c, a++, a >= l ? u = o + 1 : (u = this.getAfterLineNumberForWhitespaceIndex(a) | 0, c = this.getHeightForWhitespaceIndex(a) | 0);
            if (d >= n) {
                o = C;
                break;
            }
        }
        b === -1 && (b = o);
        const y = this.getVerticalOffsetForLineNumber(o) | 0;
        let S = r, k = o;
        return S < k && s < e && S++, S < k && y + i > n && k--, {
            bigNumbersDelta: g,
            startLineNumber: r,
            endLineNumber: o,
            relativeVerticalOffset: f,
            centeredLineNumber: b,
            completelyVisibleStartLineNumber: S,
            completelyVisibleEndLineNumber: k,
            lineHeight: this._lineHeight
        };
    }
    getVerticalOffsetForWhitespaceIndex(e) {
        this._checkPendingChanges(), e = e | 0;
        const n = this.getAfterLineNumberForWhitespaceIndex(e);
        let i;
        n >= 1 ? i = this._lineHeight * n : i = 0;
        let r;
        return e > 0 ? r = this.getWhitespacesAccumulatedHeight(e - 1) : r = 0, i + r + this._paddingTop;
    }
    getWhitespaceIndexAtOrAfterVerticallOffset(e) {
        this._checkPendingChanges(), e = e | 0;
        let n = 0, i = this.getWhitespacesCount() - 1;
        if (i < 0) return -1;
        const r = this.getVerticalOffsetForWhitespaceIndex(i), s = this.getHeightForWhitespaceIndex(i);
        if (e >= r + s) return -1;
        for(; n < i;){
            const o = Math.floor((n + i) / 2), a = this.getVerticalOffsetForWhitespaceIndex(o), l = this.getHeightForWhitespaceIndex(o);
            if (e >= a + l) n = o + 1;
            else {
                if (e >= a) return o;
                i = o;
            }
        }
        return n;
    }
    getWhitespaceAtVerticalOffset(e) {
        this._checkPendingChanges(), e = e | 0;
        const n = this.getWhitespaceIndexAtOrAfterVerticallOffset(e);
        if (n < 0 || n >= this.getWhitespacesCount()) return null;
        const i = this.getVerticalOffsetForWhitespaceIndex(n);
        if (i > e) return null;
        const r = this.getHeightForWhitespaceIndex(n), s = this.getIdForWhitespaceIndex(n), o = this.getAfterLineNumberForWhitespaceIndex(n);
        return {
            id: s,
            afterLineNumber: o,
            verticalOffset: i,
            height: r
        };
    }
    getWhitespaceViewportData(e, n) {
        this._checkPendingChanges(), e = e | 0, n = n | 0;
        const i = this.getWhitespaceIndexAtOrAfterVerticallOffset(e), r = this.getWhitespacesCount() - 1;
        if (i < 0) return [];
        const s = [];
        for(let o = i; o <= r; o++){
            const a = this.getVerticalOffsetForWhitespaceIndex(o), l = this.getHeightForWhitespaceIndex(o);
            if (a >= n) break;
            s.push({
                id: this.getIdForWhitespaceIndex(o),
                afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(o),
                verticalOffset: a,
                height: l
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
    getIdForWhitespaceIndex(e) {
        return this._checkPendingChanges(), e = e | 0, this._arr[e].id;
    }
    getAfterLineNumberForWhitespaceIndex(e) {
        return this._checkPendingChanges(), e = e | 0, this._arr[e].afterLineNumber;
    }
    getHeightForWhitespaceIndex(e) {
        return this._checkPendingChanges(), e = e | 0, this._arr[e].height;
    }
}, H$o.INSTANCE_COUNT = 0, aUd = H$o;

}
