Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Permutation = exports.CallbackIterable = exports.ArrayQueue = exports.booleanComparator = exports.numberComparator = exports.CompareResult = exports.pick = void 0, exports.tail = function(e) {
    if (0 === e.length) throw new Error("Invalid tail call");
    return [
        e.slice(0, e.length - 1),
        e[e.length - 1]
    ];
}, exports.equals = function(e, t, n = (e, t)=>e === t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    if (e.length !== t.length) return !1;
    for(let i = 0, r = e.length; i < r; i++)if (!n(e[i], t[i])) return !1;
    return !0;
}, exports.removeFastWithoutKeepingOrder = function(e, t) {
    const n = e.length - 1;
    t < n && (e[t] = e[n]);
    e.pop();
}, exports.binarySearch = function(e, t, n) {
    return s(e.length, (i)=>n(e[i], t));
}, exports.binarySearch2 = s, exports.quickSelect = function e(t, n, i) {
    if ((t |= 0) >= n.length) throw new TypeError("invalid index");
    const r = n[Math.floor(n.length * Math.random())], s = [], o = [], a = [];
    for (const e of n){
        const t = i(e, r);
        t < 0 ? s.push(e) : t > 0 ? o.push(e) : a.push(e);
    }
    return t < s.length ? e(t, s, i) : t < s.length + a.length ? a[0] : e(t - (s.length + a.length), o, i);
}, exports.groupBy = function(e, t) {
    const n = [];
    let i;
    for (const r of e.slice(0).sort(t))i && 0 === t(i[0], r) ? i.push(r) : (i = [
        r
    ], n.push(i));
    return n;
}, exports.groupAdjacentBy = function*(e, t) {
    let n, i;
    for (const r of e)void 0 !== i && t(i, r) ? n.push(r) : (n && (yield n), n = [
        r
    ]), i = r;
    n && (yield n);
}, exports.forEachAdjacent = function(e, t) {
    for(let n = 0; n <= e.length; n++)t(0 === n ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}, exports.forEachWithNeighbors = function(e, t) {
    for(let n = 0; n < e.length; n++)t(0 === n ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}, exports.sortedDiff = o, exports.delta = function(e, t, n) {
    const i = o(e, t, n), r = [], s = [];
    for (const t of i)r.push(...e.slice(t.start, t.start + t.deleteCount)), s.push(...t.toInsert);
    return {
        removed: r,
        added: s
    };
}, exports.top = function(e, t, n) {
    if (0 === n) return [];
    const i = e.slice(0, n).sort(t);
    return a(e, t, i, n, e.length), i;
}, exports.topAsync = function(e, t, n, i, s) {
    if (0 === n) return Promise.resolve([]);
    return new Promise((o, u)=>{
        (async ()=>{
            const o = e.length, u = e.slice(0, n).sort(t);
            for(let l = n, h = Math.min(n + i, o); l < o; l = h, h = Math.min(h + i, o)){
                if (l > n && await new Promise((e)=>setTimeout(e)), s && s.isCancellationRequested) throw new r.CancellationError;
                a(e, t, u, l, h);
            }
            return u;
        })().then(o, u);
    });
}, exports.coalesce = function(e) {
    return e.filter((e)=>!!e);
}, exports.coalesceInPlace = function(e) {
    let t = 0;
    for(let n = 0; n < e.length; n++)e[n] && (e[t] = e[n], t += 1);
    e.length = t;
}, exports.move = function(e, t, n) {
    e.splice(n, 0, e.splice(t, 1)[0]);
}, exports.isFalsyOrEmpty = function(e) {
    return !Array.isArray(e) || 0 === e.length;
}, exports.isNonEmptyArray = function(e) {
    return Array.isArray(e) && e.length > 0;
}, exports.distinct = function(e, t = (e)=>e) {
    const n = new Set;
    return e.filter((e)=>{
        const i = t(e);
        return !n.has(i) && (n.add(i), !0);
    });
}, exports.uniqueFilter = function(e) {
    const t = new Set;
    return (n)=>{
        const i = e(n);
        return !t.has(i) && (t.add(i), !0);
    };
}, exports.commonPrefixLength = function(e, t, n = (e, t)=>e === t) {
    let i = 0;
    for(let r = 0, s = Math.min(e.length, t.length); r < s && n(e[r], t[r]); r++)i++;
    return i;
}, exports.range = function(e, t) {
    let n = "number" == typeof t ? e : 0;
    "number" == typeof t ? n = e : (n = 0, t = e);
    const i = [];
    if (n <= t) for(let e = n; e < t; e++)i.push(e);
    else for(let e = n; e > t; e--)i.push(e);
    return i;
}, exports.index = function(e, t, n) {
    return e.reduce((e, i)=>(e[t(i)] = n ? n(i) : i, e), Object.create(null));
}, exports.insert = function(e, t) {
    return e.push(t), ()=>u(e, t);
}, exports.remove = u, exports.arrayInsert = function(e, t, n) {
    const i = e.slice(0, t), r = e.slice(t);
    return i.concat(n, r);
}, exports.shuffle = function(e, t) {
    let n;
    if ("number" == typeof t) {
        let e = t;
        n = ()=>{
            const t = 179426549 * Math.sin(e++);
            return t - Math.floor(t);
        };
    } else n = Math.random;
    for(let t = e.length - 1; t > 0; t -= 1){
        const i = Math.floor(n() * (t + 1)), r = e[t];
        e[t] = e[i], e[i] = r;
    }
}, exports.pushToStart = function(e, t) {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), e.unshift(t));
}, exports.pushToEnd = function(e, t) {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), e.push(t));
}, exports.pushMany = function(e, t) {
    for (const n of t)e.push(n);
}, exports.mapArrayOrNot = function(e, t) {
    return Array.isArray(e) ? e.map(t) : t(e);
}, exports.asArray = function(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}, exports.getRandomElement = function(e) {
    return e[Math.floor(Math.random() * e.length)];
}, exports.insertInto = l, exports.splice = function(e, t, n, i) {
    const r = h(e, t);
    let s = e.splice(r, n);
    void 0 === s && (s = []);
    return l(e, r, i), s;
}, exports.compareBy = function(e, t) {
    return (n, i)=>t(e(n), e(i));
}, exports.tieBreakComparators = function(...e) {
    return (t, n)=>{
        for (const i of e){
            const e = i(t, n);
            if (!c.isNeitherLessOrGreaterThan(e)) return e;
        }
        return c.neitherLessOrGreaterThan;
    };
}, exports.reverseOrder = function(e) {
    return (t, n)=>-e(t, n);
}, exports.compareUndefinedSmallest = function(e) {
    return (t, n)=>void 0 === t ? void 0 === n ? c.neitherLessOrGreaterThan : c.lessThan : void 0 === n ? c.greaterThan : e(t, n);
}, exports.findAsync = async function(e, t) {
    const n = await Promise.all(e.map(async (e, n)=>({
            element: e,
            ok: await t(e, n)
        })));
    return n.find((e)=>e.ok)?.element;
};
const i = require("./module-270.js"), r = require("./module-976.js");
function s(e, t) {
    let n = 0, i = e - 1;
    for(; n <= i;){
        const e = (n + i) / 2 | 0, r = t(e);
        if (r < 0) n = e + 1;
        else {
            if (!(r > 0)) return e;
            i = e - 1;
        }
    }
    return -(n + 1);
}
function o(e, t, n) {
    const i = [];
    function r(e, t, n) {
        if (0 === t && 0 === n.length) return;
        const r = i[i.length - 1];
        r && r.start + r.deleteCount === e ? (r.deleteCount += t, r.toInsert.push(...n)) : i.push({
            start: e,
            deleteCount: t,
            toInsert: n
        });
    }
    let s = 0, o = 0;
    for(;;){
        if (s === e.length) {
            r(s, 0, t.slice(o));
            break;
        }
        if (o === t.length) {
            r(s, e.length - s, []);
            break;
        }
        const i = e[s], a = t[o], u = n(i, a);
        0 === u ? (s += 1, o += 1) : u < 0 ? (r(s, 1, []), s += 1) : u > 0 && (r(s, 0, [
            a
        ]), o += 1);
    }
    return i;
}
function a(e, t, n, r, s) {
    for(const o = n.length; r < s; r++){
        const s = e[r];
        if (t(s, n[o - 1]) < 0) {
            n.pop();
            const e = (0, i.findFirstIdxMonotonousOrArrLen)(n, (e)=>t(s, e) < 0);
            n.splice(e, 0, s);
        }
    }
}
function u(e, t) {
    const n = e.indexOf(t);
    if (n > -1) return e.splice(n, 1), t;
}
function l(e, t, n) {
    const i = h(e, t), r = e.length, s = n.length;
    e.length = r + s;
    for(let t = r - 1; t >= i; t--)e[t + s] = e[t];
    for(let t = 0; t < s; t++)e[t + i] = n[t];
}
function h(e, t) {
    return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length);
}
var c;
exports.pick = (e)=>(t)=>t[e], function(e) {
    e.isLessThan = function(e) {
        return e < 0;
    }, e.isLessThanOrEqual = function(e) {
        return e <= 0;
    }, e.isGreaterThan = function(e) {
        return e > 0;
    }, e.isNeitherLessOrGreaterThan = function(e) {
        return 0 === e;
    }, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
}(c || (exports.CompareResult = c = {}));
exports.numberComparator = (e, t)=>e - t;
exports.booleanComparator = (e, n)=>(0, exports.numberComparator)(e ? 1 : 0, n ? 1 : 0);
exports.ArrayQueue = class {
    constructor(e){
        this.items = e, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
    }
    get length() {
        return this.lastIdx - this.firstIdx + 1;
    }
    takeWhile(e) {
        let t = this.firstIdx;
        for(; t < this.items.length && e(this.items[t]);)t++;
        const n = t === this.firstIdx ? null : this.items.slice(this.firstIdx, t);
        return this.firstIdx = t, n;
    }
    takeFromEndWhile(e) {
        let t = this.lastIdx;
        for(; t >= 0 && e(this.items[t]);)t--;
        const n = t === this.lastIdx ? null : this.items.slice(t + 1, this.lastIdx + 1);
        return this.lastIdx = t, n;
    }
    peek() {
        if (0 !== this.length) return this.items[this.firstIdx];
    }
    peekLast() {
        if (0 !== this.length) return this.items[this.lastIdx];
    }
    dequeue() {
        const e = this.items[this.firstIdx];
        return this.firstIdx++, e;
    }
    removeLast() {
        const e = this.items[this.lastIdx];
        return this.lastIdx--, e;
    }
    takeCount(e) {
        const t = this.items.slice(this.firstIdx, this.firstIdx + e);
        return this.firstIdx += e, t;
    }
};
class f {
    static{
        this.empty = new f((e)=>{});
    }
    constructor(e){
        this.iterate = e;
    }
    forEach(e) {
        this.iterate((t)=>(e(t), !0));
    }
    toArray() {
        const e = [];
        return this.iterate((t)=>(e.push(t), !0)), e;
    }
    filter(e) {
        return new f((t)=>this.iterate((n)=>!e(n) || t(n)));
    }
    map(e) {
        return new f((t)=>this.iterate((n)=>t(e(n))));
    }
    some(e) {
        let t = !1;
        return this.iterate((n)=>(t = e(n), !t)), t;
    }
    findFirst(e) {
        let t;
        return this.iterate((n)=>!e(n) || (t = n, !1)), t;
    }
    findLast(e) {
        let t;
        return this.iterate((n)=>(e(n) && (t = n), !0)), t;
    }
    findLastMaxBy(e) {
        let t, n = !0;
        return this.iterate((i)=>((n || c.isGreaterThan(e(i, t))) && (n = !1, t = i), !0)), t;
    }
}
exports.CallbackIterable = f;
class d {
    constructor(e){
        this._indexMap = e;
    }
    static createSortPermutation(e, t) {
        const n = Array.from(e.keys()).sort((n, i)=>t(e[n], e[i]));
        return new d(n);
    }
    apply(e) {
        return e.map((t, n)=>e[this._indexMap[n]]);
    }
    inverse() {
        const e = this._indexMap.slice();
        for(let t = 0; t < this._indexMap.length; t++)e[this._indexMap[t]] = t;
        return new d(e);
    }
}
exports.Permutation = d;
