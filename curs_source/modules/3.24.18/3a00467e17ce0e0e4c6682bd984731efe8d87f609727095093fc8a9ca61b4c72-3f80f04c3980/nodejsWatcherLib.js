import { Gi, St, zi } from "./async.js";
import { Zt, it } from "./cancellation.js";
import { qe } from "./event.js";
import { Je } from "./extpath.js";
import { k2 } from "./extpath_2.js";
import { A1, Dt, E1, Pt, S1, _n, gn, mn, ot, pe, pn, vn, wn, yn } from "./glob.js";
import { Ct, Me } from "./lazy.js";
import { Re, _e, et } from "./lifecycle.js";
import { Ji, Ki, Qi } from "./normalization.js";
import { F, Ne, Q, Qt, ci, ie, le, st, ze } from "./path.js";
import { Ce, y1 } from "./pfs.js";
import { X, we, xe } from "./platform.js";
import { Pe, c1, e1, o1 } from "./resources.js";
import { Ge } from "./ternarySearchTree.js";
import { w } from "./tslib.es6.js";
import { Y, Ye } from "./uri.js";
import { Dn, H2 } from "./watcher.js";
import { K2 } from "./watcherStallMonitor.js";
import { watch as J2 } from "fs";
import { promises as Q2 } from "fs";
import * as an from "fs";
function Ir(e, t) {
    return e.then((r)=>(t.isDisposed ? r.dispose() : t.add(r), r));
}
function hi(e) {
    return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Ea(e, t) {
    if (!e || !t) return e;
    const r = t.length, s = e.length;
    if (r === 1) {
        let n = s;
        const a = t.charCodeAt(0);
        for(; n > 0 && e.charCodeAt(n - 1) === a;)n--;
        return e.substring(0, n);
    }
    let i = s;
    for(; i > 0 && e.endsWith(t, i);)i -= r;
    return e.substring(0, i);
}
function Aa(e, t) {
    const r = e.length, s = r - t.length;
    return s >= 0 && Ge(e, t, s, r) === 0;
}
function bi(e, t, r) {
    const s = e === t;
    return !r || s ? s : !e || !t ? !1 : e1(e, t);
}
function Ui(e) {
    return !!e && typeof e.then == "function";
}
function m1(e) {
    return c2(e, "NFC", Ki);
}
function c2(e, t, r) {
    if (!e) return e;
    const s = r.get(e);
    if (s) return s;
    let i;
    return Ji.test(e) ? i = e.normalize(t) : i = e, r.set(e, i), i;
}
async function S2(e) {
    try {
        return await Ce.realpath(e);
    } catch  {
        const r = A2(e);
        return await an.promises.access(r, an.constants.R_OK), r;
    }
}
function A2(e) {
    return Ea(Qt(e), ie);
}
function ln(e, t) {
    switch(e){
        case 0:
            return "";
        case 1:
            return `${Dt}*?`;
        default:
            return `(?:${Pt}|${Dt}+${Pt}${t ? `|${Pt}${Dt}+` : ""})*?`;
    }
}
function cn(e, t) {
    if (!e) return [];
    const r = [];
    let s = !1, i = !1, n = "";
    for (const a of e){
        switch(a){
            case t:
                if (!s && !i) {
                    r.push(n), n = "";
                    continue;
                }
                break;
            case "{":
                s = !0;
                break;
            case "}":
                s = !1;
                break;
            case "[":
                i = !0;
                break;
            case "]":
                i = !1;
                break;
        }
        n += a;
    }
    return n && r.push(n), r;
}
function un(e) {
    if (!e) return "";
    let t = "";
    const r = cn(e, E1);
    if (r.every((s)=>s === ot)) t = ".*";
    else {
        let s = !1;
        r.forEach((i, n)=>{
            if (i === ot) {
                if (s) return;
                t += ln(2, n === r.length - 1);
            } else {
                let a = !1, o = "", l = !1, c = "";
                for (const h of i){
                    if (h !== "}" && a) {
                        o += h;
                        continue;
                    }
                    if (l && (h !== "]" || !c)) {
                        let u;
                        h === "-" ? u = h : (h === "^" || h === "!") && !c ? u = "^" : h === E1 ? u = "" : u = hi(h), c += u;
                        continue;
                    }
                    switch(h){
                        case "{":
                            a = !0;
                            continue;
                        case "[":
                            l = !0;
                            continue;
                        case "}":
                            {
                                const f = `(?:${cn(o, ",").map((d)=>un(d)).join("|")})`;
                                t += f, a = !1, o = "";
                                break;
                            }
                        case "]":
                            {
                                t += "[" + c + "]", l = !1, c = "";
                                break;
                            }
                        case "?":
                            t += Dt;
                            continue;
                        case "*":
                            t += ln(1);
                            continue;
                        default:
                            t += hi(h);
                    }
                }
                n < r.length - 1 && (r[n + 1] !== ot || n + 2 < r.length) && (t += Pt);
            }
            s = i === ot;
        });
    }
    return t;
}
function b1(e, t) {
    if (!e) return pe;
    let r;
    typeof e != "string" ? r = e.pattern : r = e, r = r.trim();
    const s = t.ignoreCase ?? !1, i = t.ignoreCase ?? !we, n = {
        ...t,
        equals: s ? e1 : (c, h)=>c === h,
        endsWith: s ? Aa : (c, h)=>c.endsWith(h),
        isEqualOrParent: (c, h)=>Pe(c, h, i)
    }, a = `${s ? r.toLowerCase() : r}_${!!t.trimForExclusions}_${s}`;
    let o = S1.get(a);
    if (o) return hn(o, e, n);
    let l;
    return mn.test(r) ? o = D2(r.substring(4), r, n) : (l = gn.exec(C1(r, n))) ? o = T2(l[1], r, n) : (t.trimForExclusions ? yn : _n).test(r) ? o = O2(r, n) : (l = vn.exec(C1(r, n))) ? o = fn(l[1].substring(1), r, !0, n) : (l = wn.exec(C1(r, n))) ? o = fn(l[1], r, !1, n) : o = L2(r, n), S1.set(a, o), hn(o, e, n);
}
function P2(e, t) {
    const r = t.length;
    if (r === 0) return {
        ...e,
        isEqualOrParent: ()=>!1
    };
    const s = ie.charCodeAt(0), i = t.charCodeAt(r - 1) === s;
    let n = !0;
    for(let a = 0; a < r; a++)if (t.charCodeAt(a) > 127) {
        n = !1;
        break;
    }
    if (n) {
        const a = t.toLowerCase(), o = (h)=>h >= 65 && h <= 90 ? h + 32 : h, l = o(a.charCodeAt(0)), c = r > 1 ? o(a.charCodeAt(r - 1)) : l;
        return {
            ...e,
            isEqualOrParent (h, u) {
                if (h.length < r) return !1;
                if (h.length > r) {
                    const d = i ? r - 1 : r;
                    if (h.charCodeAt(d) !== s) return !1;
                }
                let f = h.charCodeAt(0);
                if (f !== l) {
                    if (f > 127) return Pe(h, t, !0);
                    if (f = o(f), f !== l) return !1;
                }
                if (r > 1) {
                    let d = h.charCodeAt(r - 1);
                    if (d !== c) {
                        if (d > 127) return Pe(h, t, !0);
                        if (d = o(d), d !== c) return !1;
                    }
                }
                for(let d = 0; d < r; d++){
                    const m = h.charCodeAt(d), k = a.charCodeAt(d);
                    if (m === k) continue;
                    if (m > 127) return Pe(h, t, !0);
                    let D = m;
                    if (D >= 65 && D <= 90 && (D += 32), D !== k) return !1;
                }
                return !0;
            }
        };
    }
    return {
        ...e,
        isEqualOrParent (a, o) {
            return Pe(a, t, !0);
        }
    };
}
function hn(e, t, r) {
    if (typeof t == "string") return e;
    const s = t.base, i = s.length, a = r.ignoreCase ?? !we ? P2(r, s) : r, o = ie.charCodeAt(0), l = function(c, h) {
        if (!a.isEqualOrParent(c, s)) return null;
        let u = i;
        for(; u < c.length && c.charCodeAt(u) === o;)u++;
        return e(c.substring(u), h);
    };
    return l.allBasenames = e.allBasenames, l.allPaths = e.allPaths, l.basenames = e.basenames, l.patterns = e.patterns, l;
}
function C1(e, t) {
    return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function D2(e, t, r) {
    return function(s, i) {
        return typeof s == "string" && r.endsWith(s, e) ? t : null;
    };
}
function T2(e, t, r) {
    const s = `/${e}`, i = `\\${e}`, n = function(o, l) {
        return typeof o != "string" ? null : l ? r.equals(l, e) ? t : null : r.equals(o, e) || r.endsWith(o, s) || r.endsWith(o, i) ? t : null;
    }, a = [
        e
    ];
    return n.basenames = a, n.patterns = [
        t
    ], n.allBasenames = a, n;
}
function O2(e, t) {
    const r = dn(e.slice(1, -1).split(",").map((o)=>b1(o, t)).filter((o)=>o !== pe), e), s = r.length;
    if (!s) return pe;
    if (s === 1) return r[0];
    const i = function(o, l) {
        for(let c = 0, h = r.length; c < h; c++)if (r[c](o, l)) return e;
        return null;
    }, n = r.find((o)=>!!o.allBasenames);
    n && (i.allBasenames = n.allBasenames);
    const a = r.reduce((o, l)=>l.allPaths ? o.concat(l.allPaths) : o, []);
    return a.length && (i.allPaths = a), i;
}
function fn(e, t, r, s) {
    const i = ie === F.sep, n = i ? e : e.replace(pn, ie), a = ie + n, o = F.sep + e;
    let l;
    return r ? l = function(c, h) {
        return typeof c == "string" && (s.equals(c, n) || s.endsWith(c, a) || !i && (s.equals(c, e) || s.endsWith(c, o))) ? t : null;
    } : l = function(c, h) {
        return typeof c == "string" && (s.equals(c, n) || !i && s.equals(c, e)) ? t : null;
    }, l.allPaths = [
        (r ? "*/" : "./") + e
    ], l;
}
function L2(e, t) {
    try {
        const r = new RegExp(`^${un(e)}$`, t.ignoreCase ? "i" : void 0);
        return function(s) {
            return r.lastIndex = 0, typeof s == "string" && r.test(s) ? e : null;
        };
    } catch  {
        return pe;
    }
}
function R2(e, t = {}) {
    if (!e) return A1;
    if (typeof e == "string" || x2(e)) {
        const r = b1(e, t);
        if (r === pe) return A1;
        const s = function(i, n) {
            return !!r(i, n);
        };
        return r.allBasenames && (s.allBasenames = r.allBasenames), r.allPaths && (s.allPaths = r.allPaths), s;
    }
    return I2(e, t);
}
function x2(e) {
    const t = e;
    return t ? typeof t.base == "string" && typeof t.pattern == "string" : !1;
}
function I2(e, t) {
    const r = dn(Object.getOwnPropertyNames(e).map((o)=>N2(o, e[o], t)).filter((o)=>o !== pe)), s = r.length;
    if (!s) return pe;
    if (!r.some((o)=>!!o.requiresSiblings)) {
        if (s === 1) return r[0];
        const o = function(h, u) {
            for(let f = 0, d = r.length; f < d; f++){
                const m = r[f](h, u);
                if (typeof m == "string") return m;
            }
            return null;
        }, l = r.find((h)=>!!h.allBasenames);
        l && (o.allBasenames = l.allBasenames);
        const c = r.reduce((h, u)=>u.allPaths ? h.concat(u.allPaths) : h, []);
        return c.length && (o.allPaths = c), o;
    }
    const i = function(o, l, c) {
        let h, u;
        for(let f = 0, d = r.length; f < d; f++){
            const m = r[f];
            m.requiresSiblings && c && (l || (l = st(o)), h || (h = l.substr(0, l.length - ci(o).length)));
            const k = m(o, l, h, c);
            if (typeof k == "string") return k;
            Ui(k) && (u || (u = []), u.push(k));
        }
        return u ? (async ()=>{
            for (const f of u){
                const d = await f;
                if (typeof d == "string") return d;
            }
            return null;
        })() : null;
    }, n = r.find((o)=>!!o.allBasenames);
    n && (i.allBasenames = n.allBasenames);
    const a = r.reduce((o, l)=>l.allPaths ? o.concat(l.allPaths) : o, []);
    return a.length && (i.allPaths = a), i;
}
function N2(e, t, r) {
    if (t === !1) return pe;
    const s = b1(e, r);
    if (s === pe) return pe;
    if (typeof t == "boolean") return s;
    if (t) {
        const i = t.when;
        if (typeof i == "string") {
            const n = (a, o, l, c)=>{
                if (!c || !s(a, o)) return null;
                const h = i.replace("$(basename)", ()=>l), u = c(h);
                return Ui(u) ? u.then((f)=>f ? e : null) : u ? e : null;
            };
            return n.requiresSiblings = !0, n;
        }
    }
    return s;
}
function dn(e, t) {
    const r = e.filter((o)=>!!o.basenames);
    if (r.length < 2) return e;
    const s = r.reduce((o, l)=>{
        const c = l.basenames;
        return c ? o.concat(c) : o;
    }, []);
    let i;
    if (t) {
        i = [];
        for(let o = 0, l = s.length; o < l; o++)i.push(t);
    } else i = r.reduce((o, l)=>{
        const c = l.patterns;
        return c ? o.concat(c) : o;
    }, []);
    const n = function(o, l) {
        if (typeof o != "string") return null;
        if (!l) {
            let h;
            for(h = o.length; h > 0; h--){
                const u = o.charCodeAt(h - 1);
                if (u === 47 || u === 92) break;
            }
            l = o.substr(h);
        }
        const c = s.indexOf(l);
        return c !== -1 ? i[c] : null;
    };
    n.basenames = s, n.patterns = i, n.allBasenames = s;
    const a = e.filter((o)=>!o.basenames);
    return a.push(n), a;
}
function B2(e) {
    return typeof e.correlationId == "number";
}
function V2(e) {
    const t = new Dn;
    for (const r of e)t.processEvent(r);
    return t.coalesce();
}
function z2(e, t) {
    return typeof t == "string" && !t.startsWith(ot) && !ze(t) ? {
        base: e,
        pattern: t
    } : t;
}
function kn(e, t) {
    const r = [];
    for (const s of t)r.push(R2(z2(e, s)));
    return r;
}
function G2(e, t) {
    if (typeof t == "number") switch(e.type){
        case 1:
            return (t & 4) === 0;
        case 2:
            return (t & 8) === 0;
        case 0:
            return (t & 2) === 0;
    }
    return !1;
}
var at;
var or, Tn;
export { A2, Aa, B2, C1, D2, Ea, G2, I2, Ir, L2, N2, O2, P2, R2, S2, T2, Tn, Ui, V2, at, b1, bi, c2, cn, dn, fn, hi, hn, kn, ln, m1, or, un, x2, z2 };
var __wakaru_Z2_initialized = false;
export function Z2() {
if (__wakaru_Z2_initialized) return;
__wakaru_Z2_initialized = true;
"use strict";
w(), St(), Zt(), Je(), et(), Qi(), le(), X(), c1(), Ye(), k2(), y1(), H2(), Ct(), K2(), or = class vr extends _e {
    constructor(t, r, s, i, n, a){
        super(), this.request = t, this.recursiveWatcher = r, this.onDidFilesChange = s, this.onDidWatchFail = i, this.onLogMessage = n, this.verboseLogging = a, this.throttledFileChangesEmitter = this._register(new Gi({
            maxWorkChunkSize: 100,
            throttleDelay: 200,
            maxBufferedWork: 1e4
        }, (o)=>this.onDidFilesChange(o))), this.fileChangesAggregator = this._register(new zi((o)=>this.handleFileChanges(o), vr.FILE_CHANGES_HANDLER_DELAY)), this.watchedKind = "file", this.inDeletedPathFlush = !1, this.cts = new it, this.realPath = new Me(async ()=>{
            let o = this.request.path;
            try {
                o = await S2(this.request.path), this.request.path !== o && this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${o})`);
            } catch  {}
            return o;
        }), this._isReusingRecursiveWatcher = !1, this.didFail = !1, this.excludes = kn(this.request.path, this.request.excludes), this.includes = this.request.includes ? kn(this.request.path, this.request.includes) : void 0, this.filter = B2(this.request) ? this.request.filter : void 0, this.ready = this.watch();
    }
    get isReusingRecursiveWatcher() {
        return this._isReusingRecursiveWatcher;
    }
    get failed() {
        return this.didFail;
    }
    async watch() {
        try {
            const t = await Q2.stat(this.request.path);
            if (this.cts.token.isCancellationRequested) return;
            await Ir(this.doWatch(t.isDirectory()), this._store);
        } catch (t) {
            t.code !== "ENOENT" ? this.error(t) : this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${t})`), this.notifyWatchFailed();
        }
    }
    notifyWatchFailed() {
        this.didFail = !0, this.onDidWatchFail?.();
    }
    async doWatch(t) {
        const r = new Re;
        return this.doWatchWithExistingWatcher(t, r) ? (this.trace(`reusing an existing recursive watcher for ${this.request.path}`), this._isReusingRecursiveWatcher = !0) : (this._isReusingRecursiveWatcher = !1, await this.doWatchWithNodeJS(t, r)), r;
    }
    doWatchWithExistingWatcher(t, r) {
        if (t) return !1;
        const s = Y.file(this.request.path), i = this.recursiveWatcher?.subscribe(this.request.path, async (n, a)=>{
            r.isDisposed || (n ? await Ir(this.doWatch(t), r) : a && (typeof a.cId == "number" || typeof this.request.correlationId == "number") && this.onFileChange({
                resource: s,
                type: a.type,
                cId: this.request.correlationId
            }, !0));
        });
        return i ? (r.add(i), !0) : !1;
    }
    async doWatchWithNodeJS(t, r) {
        const s = await this.realPath.value;
        if (this.cts.token.isCancellationRequested) return;
        if (xe && Pe(s, "/Volumes/", !0)) {
            this.error(`Refusing to watch ${s} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
            return;
        }
        const i = new it(this.cts.token);
        r.add(qe(()=>i.dispose(!0)));
        const n = new Re;
        r.add(n);
        try {
            const a = Y.file(this.request.path), o = st(s), l = J2(s);
            n.add(qe(()=>{
                l.removeAllListeners(), l.close();
            })), this.trace(`Started watching: '${s}'`);
            const c = new Set;
            if (this.watchedKind = t ? "folder" : "file", t) try {
                for (const u of await Ce.readdir(s))c.add(u);
            } catch (u) {
                this.error(u);
            }
            if (this.folderChildren = c, i.token.isCancellationRequested) return;
            const h = new Map;
            n.add(qe(()=>{
                for (const [, u] of h)u.dispose();
                h.clear();
            })), l.on("error", (u, f)=>{
                i.token.isCancellationRequested || (this.error(`Failed to watch ${s} for changes using fs.watch() (${u}, ${f})`), this.notifyWatchFailed());
            }), l.on("change", (u, f)=>{
                if (i.token.isCancellationRequested) return;
                at?.onRawEvent(), this.verboseLogging && this.traceWithCorrelation(`[raw] ["${u}"] ${f}`);
                let d = "";
                if (f && (d = f.toString(), xe && (d = m1(d))), !(!d || u !== "change" && u !== "rename")) if (t) if (u === "rename") {
                    h.get(d)?.dispose(), at?.onProbeScheduled();
                    const m = setTimeout(async ()=>{
                        if (h.delete(d), bi(d, o, !we) && !await Ce.exists(s)) {
                            this.onWatchedPathDeleted(a);
                            return;
                        }
                        if (i.token.isCancellationRequested) return;
                        const k = at?.active ? performance.now() : void 0, D = await this.existsChildStrictCase(Q(s, d));
                        if (k !== void 0 && at?.onProbeCompleted(performance.now() - k), i.token.isCancellationRequested) return;
                        let P;
                        D ? c.has(d) ? P = 0 : (P = 1, c.add(d)) : (c.delete(d), P = 2), this.onFileChange({
                            resource: o1(a, d),
                            type: P,
                            cId: this.request.correlationId
                        });
                    }, vr.FILE_DELETE_HANDLER_DELAY);
                    h.set(d, qe(()=>clearTimeout(m)));
                } else {
                    let m;
                    c.has(d) ? m = 0 : (m = 1, c.add(d)), this.onFileChange({
                        resource: o1(a, d),
                        type: m,
                        cId: this.request.correlationId
                    });
                }
                else if (u === "rename" || !bi(d, o, !we)) {
                    const m = setTimeout(async ()=>{
                        const k = await Ce.exists(s);
                        i.token.isCancellationRequested || (k ? (this.onFileChange({
                            resource: a,
                            type: 0,
                            cId: this.request.correlationId
                        }, !0), await Ir(this.doWatch(!1), n)) : this.onWatchedPathDeleted(a));
                    }, vr.FILE_DELETE_HANDLER_DELAY);
                    n.clear(), n.add(qe(()=>clearTimeout(m)));
                } else this.onFileChange({
                    resource: a,
                    type: 0,
                    cId: this.request.correlationId
                }, !0);
            });
        } catch (a) {
            if (i.token.isCancellationRequested) return;
            this.error(`Failed to watch ${s} for changes using fs.watch() (${a.toString()})`), this.notifyWatchFailed();
        }
    }
    onWatchedPathDeleted(t) {
        this.warn("Watcher shutdown because watched path got deleted"), this.onFileChange({
            resource: t,
            type: 2,
            cId: this.request.correlationId
        }, !0), this.inDeletedPathFlush = !0;
        try {
            this.fileChangesAggregator.flush();
        } finally{
            this.inDeletedPathFlush = !1;
        }
        this.notifyWatchFailed();
    }
    onFileChange(t, r = !1) {
        this.cts.token.isCancellationRequested || (this.verboseLogging && this.traceWithCorrelation(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`), !r && this.excludes.some((s)=>s(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (excluded) ${t.resource.fsPath}`) : !r && this.includes && this.includes.length > 0 && !this.includes.some((s)=>s(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${t.resource.fsPath}`) : this.fileChangesAggregator.work(t));
    }
    handleFileChanges(t) {
        const r = at?.active ? performance.now() : void 0, s = V2(t), i = r !== void 0 ? performance.now() : 0, n = [];
        for (const l of s){
            if (G2(l, this.filter)) {
                this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${l.resource.fsPath}`);
                continue;
            }
            n.push(l);
        }
        if (n.length === 0) {
            r !== void 0 && this.reportFlush({
                flushStart: r,
                coalesceDone: i,
                emitStart: 0,
                fileChanges: t,
                filteredEvents: n,
                emitted: !1
            });
            return;
        }
        if (this.verboseLogging) for (const l of n)this.traceWithCorrelation(` >> normalized ${l.type === 1 ? "[ADDED]" : l.type === 2 ? "[DELETED]" : "[CHANGED]"} ${l.resource.fsPath}`);
        const a = r !== void 0 ? performance.now() : 0, o = this.throttledFileChangesEmitter.work(n);
        r !== void 0 && this.reportFlush({
            flushStart: r,
            coalesceDone: i,
            emitStart: a,
            fileChanges: t,
            filteredEvents: n,
            emitted: o
        }), o ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${n.length}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
    }
    reportFlush(t) {
        const r = performance.now();
        at?.onFlush({
            flushMs: r - t.flushStart,
            coalesceMs: t.coalesceDone - t.flushStart,
            emitMs: t.emitStart ? r - t.emitStart : 0,
            inEvents: t.fileChanges.length,
            outEvents: t.filteredEvents.length,
            emitted: t.emitted,
            pending: this.throttledFileChangesEmitter.pending,
            entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer",
            request: this.request,
            targetKind: this.watchedKind,
            folderChildren: this.folderChildren?.size ?? 0,
            fileChanges: t.fileChanges
        });
    }
    async existsChildStrictCase(t) {
        if (we) return Ce.exists(t);
        try {
            const r = st(t);
            return (await Ce.readdir(Ne(t))).some((i)=>i === r);
        } catch (r) {
            return this.trace(r), !1;
        }
    }
    setVerboseLogging(t) {
        this.verboseLogging = t;
    }
    error(t) {
        this.cts.token.isCancellationRequested || this.onLogMessage?.({
            type: "error",
            message: `[File Watcher (node.js)] ${t}`
        });
    }
    warn(t) {
        this.cts.token.isCancellationRequested || this.onLogMessage?.({
            type: "warn",
            message: `[File Watcher (node.js)] ${t}`
        });
    }
    trace(t) {
        !this.cts.token.isCancellationRequested && this.verboseLogging && this.onLogMessage?.({
            type: "trace",
            message: `[File Watcher (node.js)] ${t}`
        });
    }
    traceWithCorrelation(t) {
        !this.cts.token.isCancellationRequested && this.verboseLogging && this.trace(`${t}${typeof this.request.correlationId == "number" ? ` <${this.request.correlationId}> ` : ""}`);
    }
    dispose() {
        this.cts.dispose(!0), super.dispose();
    }
}, or.FILE_DELETE_HANDLER_DELAY = 100, or.FILE_CHANGES_HANDLER_DELAY = 75, Tn = or;

}
