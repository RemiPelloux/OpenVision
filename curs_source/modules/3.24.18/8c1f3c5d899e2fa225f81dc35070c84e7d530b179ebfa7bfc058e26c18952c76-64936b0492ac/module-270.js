function n(e, t, n = e.length - 1) {
    for(let i = n; i >= 0; i--){
        if (t(e[i])) return i;
    }
    return -1;
}
function i(e, t, n = 0, i = e.length) {
    let r = n, s = i;
    for(; r < s;){
        const n = Math.floor((r + s) / 2);
        t(e[n]) ? r = n + 1 : s = n;
    }
    return r - 1;
}
function r(e, t, n = 0, i = e.length) {
    let r = n, s = i;
    for(; r < s;){
        const n = Math.floor((r + s) / 2);
        t(e[n]) ? s = n : r = n + 1;
    }
    return r;
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MonotonousArray = void 0, exports.findLast = function(e, t, i = e.length - 1) {
    const r = n(e, t, i);
    if (-1 === r) return;
    return e[r];
}, exports.findLastIdx = n, exports.findLastMonotonous = function(e, t) {
    const n = i(e, t);
    return -1 === n ? void 0 : e[n];
}, exports.findLastIdxMonotonous = i, exports.findFirstMonotonous = function(e, t) {
    const n = r(e, t);
    return n === e.length ? void 0 : e[n];
}, exports.findFirstIdxMonotonousOrArrLen = r, exports.findFirstMax = o, exports.findLastMax = function(e, t) {
    if (0 === e.length) return;
    let n = e[0];
    for(let i = 1; i < e.length; i++){
        const r = e[i];
        t(r, n) >= 0 && (n = r);
    }
    return n;
}, exports.findFirstMin = function(e, t) {
    return o(e, (e, n)=>-t(e, n));
}, exports.findMaxIdx = function(e, t) {
    if (0 === e.length) return -1;
    let n = 0;
    for(let i = 1; i < e.length; i++){
        t(e[i], e[n]) > 0 && (n = i);
    }
    return n;
}, exports.mapFindFirst = function(e, t) {
    for (const n of e){
        const e = t(n);
        if (void 0 !== e) return e;
    }
    return;
};
class s {
    static{
        this.assertInvariants = !1;
    }
    constructor(e){
        this._array = e, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(e) {
        if (s.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const t of this._array)if (this._prevFindLastPredicate(t) && !e(t)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = e;
        }
        const t = i(this._array, e, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = t + 1, -1 === t ? void 0 : this._array[t];
    }
}
function o(e, t) {
    if (0 === e.length) return;
    let n = e[0];
    for(let i = 1; i < e.length; i++){
        const r = e[i];
        t(r, n) > 0 && (n = r);
    }
    return n;
}
exports.MonotonousArray = s;
