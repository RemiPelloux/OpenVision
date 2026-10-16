import { E3, JR, le } from "./async.js";
import { Xm } from "./backupMainService.js";
import { XV } from "./baseWatcher.js";
import { Jn, Mt } from "./cancellation.js";
import { jl } from "./dialogMainService.js";
import { O, ge, se } from "./event.js";
import { Lr } from "./extpath.js";
import { eA } from "./extpath_2.js";
import { HV, JV, KV, Vd, YV, _h, fh, jV, nM, qV, rM, sM, ui, zV } from "./glob.js";
import { Ci, Xo } from "./lazy.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { iS } from "./nativeHostMainService.js";
import { dT } from "./normalization.js";
import { Ce, De, Dm, Fn, Hv, L, _t, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Fe, oe, q } from "./platform.js";
import { Ae, Ft, Ii, ma } from "./resources.js";
import { _a } from "./sentry.js";
import { pM, v$ } from "./sharedSessionFileWatcher.js";
import { gs } from "./storageMain.js";
import { ec } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Qo } from "./userDataProfile.js";
import { $d, n$ } from "./watcher.js";
import { LS, dM } from "./watcherStallMonitor.js";
import { ZVe, hM, mi } from "./watcherStallProbe.js";
import { promises as HVe } from "fs";
import { powerMonitor as e$e } from "electron";
import { watch as jVe } from "fs";
function aR(e, t) {
    return e.then((n)=>(t.isDisposed ? n.dispose() : t.add(n), n));
}
function NUe(e, t) {
    const n = e.length, r = n - t.length;
    return r >= 0 && ec(e, t, r, n) === 0;
}
function v3(e) {
    return !!e && typeof e.then == "function";
}
function xV(e, t) {
    switch(e){
        case 0:
            return "";
        case 1:
            return `${_h}*?`;
        default:
            return `(?:${fh}|${_h}+${fh}${t ? `|${fh}${_h}+` : ""})*?`;
    }
}
function FV(e, t) {
    if (!e) return [];
    const n = [];
    let r = !1, s = !1, i = "";
    for (const a of e){
        switch(a){
            case t:
                if (!r && !s) {
                    n.push(i), i = "";
                    continue;
                }
                break;
            case "{":
                r = !0;
                break;
            case "}":
                r = !1;
                break;
            case "[":
                s = !0;
                break;
            case "]":
                s = !1;
                break;
        }
        i += a;
    }
    return i && n.push(i), n;
}
function WV(e) {
    if (!e) return "";
    let t = "";
    const n = FV(e, nM);
    if (n.every((r)=>r === Vd)) t = ".*";
    else {
        let r = !1;
        n.forEach((s, i)=>{
            if (s === Vd) {
                if (r) return;
                t += xV(2, i === n.length - 1);
            } else {
                let a = !1, o = "", l = !1, d = "";
                for (const u of s){
                    if (u !== "}" && a) {
                        o += u;
                        continue;
                    }
                    if (l && (u !== "]" || !d)) {
                        let m;
                        u === "-" ? m = u : (u === "^" || u === "!") && !d ? m = "^" : u === nM ? m = "" : m = Qo(u), d += m;
                        continue;
                    }
                    switch(u){
                        case "{":
                            a = !0;
                            continue;
                        case "[":
                            l = !0;
                            continue;
                        case "}":
                            {
                                const f = `(?:${FV(o, ",").map((v)=>WV(v)).join("|")})`;
                                t += f, a = !1, o = "";
                                break;
                            }
                        case "]":
                            {
                                t += "[" + d + "]", l = !1, d = "";
                                break;
                            }
                        case "?":
                            t += _h;
                            continue;
                        case "*":
                            t += xV(1);
                            continue;
                        default:
                            t += Qo(u);
                    }
                }
                i < n.length - 1 && (n[i + 1] !== Vd || i + 2 < n.length) && (t += fh);
            }
            r = s === Vd;
        });
    }
    return t;
}
function ZA(e, t) {
    if (!e) return ui;
    let n;
    typeof e != "string" ? n = e.pattern : n = e, n = n.trim();
    const r = t.ignoreCase ?? !1, s = t.ignoreCase ?? !Fe, i = {
        ...t,
        equals: r ? Ii : (d, u)=>d === u,
        endsWith: r ? NUe : (d, u)=>d.endsWith(u),
        isEqualOrParent: (d, u)=>ma(d, u, s)
    }, a = `${r ? n.toLowerCase() : n}_${!!t.trimForExclusions}_${r}`;
    let o = rM.get(a);
    if (o) return BV(o, e, i);
    let l;
    return HV.test(n) ? o = gVe(n.substring(4), n, i) : (l = qV.exec(eM(n, i))) ? o = fVe(l[1], n, i) : (t.trimForExclusions ? zV : KV).test(n) ? o = _Ve(n, i) : (l = YV.exec(eM(n, i))) ? o = GV(l[1].substring(1), n, !0, i) : (l = JV.exec(eM(n, i))) ? o = GV(l[1], n, !1, i) : o = vVe(n, i), rM.set(a, o), BV(o, e, i);
}
function hVe(e, t) {
    const n = t.length;
    if (n === 0) return {
        ...e,
        isEqualOrParent: ()=>!1
    };
    const r = Fn.charCodeAt(0), s = t.charCodeAt(n - 1) === r;
    let i = !0;
    for(let a = 0; a < n; a++)if (t.charCodeAt(a) > 127) {
        i = !1;
        break;
    }
    if (i) {
        const a = t.toLowerCase(), o = (u)=>u >= 65 && u <= 90 ? u + 32 : u, l = o(a.charCodeAt(0)), d = n > 1 ? o(a.charCodeAt(n - 1)) : l;
        return {
            ...e,
            isEqualOrParent (u, m) {
                if (u.length < n) return !1;
                if (u.length > n) {
                    const v = s ? n - 1 : n;
                    if (u.charCodeAt(v) !== r) return !1;
                }
                let f = u.charCodeAt(0);
                if (f !== l) {
                    if (f > 127) return ma(u, t, !0);
                    if (f = o(f), f !== l) return !1;
                }
                if (n > 1) {
                    let v = u.charCodeAt(n - 1);
                    if (v !== d) {
                        if (v > 127) return ma(u, t, !0);
                        if (v = o(v), v !== d) return !1;
                    }
                }
                for(let v = 0; v < n; v++){
                    const T = u.charCodeAt(v), S = a.charCodeAt(v);
                    if (T === S) continue;
                    if (T > 127) return ma(u, t, !0);
                    let k = T;
                    if (k >= 65 && k <= 90 && (k += 32), k !== S) return !1;
                }
                return !0;
            }
        };
    }
    return {
        ...e,
        isEqualOrParent (a, o) {
            return ma(a, t, !0);
        }
    };
}
function BV(e, t, n) {
    if (typeof t == "string") return e;
    const r = t.base, s = r.length, a = n.ignoreCase ?? !Fe ? hVe(n, r) : n, o = Fn.charCodeAt(0), l = function(d, u) {
        if (!a.isEqualOrParent(d, r)) return null;
        let m = s;
        for(; m < d.length && d.charCodeAt(m) === o;)m++;
        return e(d.substring(m), u);
    };
    return l.allBasenames = e.allBasenames, l.allPaths = e.allPaths, l.basenames = e.basenames, l.patterns = e.patterns, l;
}
function eM(e, t) {
    return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function gVe(e, t, n) {
    return function(r, s) {
        return typeof r == "string" && n.endsWith(r, e) ? t : null;
    };
}
function fVe(e, t, n) {
    const r = `/${e}`, s = `\\${e}`, i = function(o, l) {
        return typeof o != "string" ? null : l ? n.equals(l, e) ? t : null : n.equals(o, e) || n.endsWith(o, r) || n.endsWith(o, s) ? t : null;
    }, a = [
        e
    ];
    return i.basenames = a, i.patterns = [
        t
    ], i.allBasenames = a, i;
}
function _Ve(e, t) {
    const n = VV(e.slice(1, -1).split(",").map((o)=>ZA(o, t)).filter((o)=>o !== ui), e), r = n.length;
    if (!r) return ui;
    if (r === 1) return n[0];
    const s = function(o, l) {
        for(let d = 0, u = n.length; d < u; d++)if (n[d](o, l)) return e;
        return null;
    }, i = n.find((o)=>!!o.allBasenames);
    i && (s.allBasenames = i.allBasenames);
    const a = n.reduce((o, l)=>l.allPaths ? o.concat(l.allPaths) : o, []);
    return a.length && (s.allPaths = a), s;
}
function GV(e, t, n, r) {
    const s = Fn === De.sep, i = s ? e : e.replace(jV, Fn), a = Fn + i, o = De.sep + e;
    let l;
    return n ? l = function(d, u) {
        return typeof d == "string" && (r.equals(d, i) || r.endsWith(d, a) || !s && (r.equals(d, e) || r.endsWith(d, o))) ? t : null;
    } : l = function(d, u) {
        return typeof d == "string" && (r.equals(d, i) || !s && r.equals(d, e)) ? t : null;
    }, l.allPaths = [
        (n ? "*/" : "./") + e
    ], l;
}
function vVe(e, t) {
    try {
        const n = new RegExp(`^${WV(e)}$`, t.ignoreCase ? "i" : void 0);
        return function(r) {
            return n.lastIndex = 0, typeof r == "string" && n.test(r) ? e : null;
        };
    } catch  {
        return ui;
    }
}
function tM(e, t = {}) {
    if (!e) return sM;
    if (typeof e == "string" || kVe(e)) {
        const n = ZA(e, t);
        if (n === ui) return sM;
        const r = function(s, i) {
            return !!n(s, i);
        };
        return n.allBasenames && (r.allBasenames = n.allBasenames), n.allPaths && (r.allPaths = n.allPaths), r;
    }
    return SVe(e, t);
}
function kVe(e) {
    const t = e;
    return t ? typeof t.base == "string" && typeof t.pattern == "string" : !1;
}
function SVe(e, t) {
    const n = VV(Object.getOwnPropertyNames(e).map((o)=>yVe(o, e[o], t)).filter((o)=>o !== ui)), r = n.length;
    if (!r) return ui;
    if (!n.some((o)=>!!o.requiresSiblings)) {
        if (r === 1) return n[0];
        const o = function(u, m) {
            for(let f = 0, v = n.length; f < v; f++){
                const T = n[f](u, m);
                if (typeof T == "string") return T;
            }
            return null;
        }, l = n.find((u)=>!!u.allBasenames);
        l && (o.allBasenames = l.allBasenames);
        const d = n.reduce((u, m)=>m.allPaths ? u.concat(m.allPaths) : u, []);
        return d.length && (o.allPaths = d), o;
    }
    const s = function(o, l, d) {
        let u, m;
        for(let f = 0, v = n.length; f < v; f++){
            const T = n[f];
            T.requiresSiblings && d && (l || (l = _t(o)), u || (u = l.substr(0, l.length - Hv(o).length)));
            const S = T(o, l, u, d);
            if (typeof S == "string") return S;
            v3(S) && (m || (m = []), m.push(S));
        }
        return m ? (async ()=>{
            for (const f of m){
                const v = await f;
                if (typeof v == "string") return v;
            }
            return null;
        })() : null;
    }, i = n.find((o)=>!!o.allBasenames);
    i && (s.allBasenames = i.allBasenames);
    const a = n.reduce((o, l)=>l.allPaths ? o.concat(l.allPaths) : o, []);
    return a.length && (s.allPaths = a), s;
}
function yVe(e, t, n) {
    if (t === !1) return ui;
    const r = ZA(e, n);
    if (r === ui) return ui;
    if (typeof t == "boolean") return r;
    if (t) {
        const s = t.when;
        if (typeof s == "string") {
            const i = (a, o, l, d)=>{
                if (!d || !r(a, o)) return null;
                const u = s.replace("$(basename)", ()=>l), m = d(u);
                return v3(m) ? m.then((f)=>f ? e : null) : m ? e : null;
            };
            return i.requiresSiblings = !0, i;
        }
    }
    return r;
}
function VV(e, t) {
    const n = e.filter((o)=>!!o.basenames);
    if (n.length < 2) return e;
    const r = n.reduce((o, l)=>{
        const d = l.basenames;
        return d ? o.concat(d) : o;
    }, []);
    let s;
    if (t) {
        s = [];
        for(let o = 0, l = r.length; o < l; o++)s.push(t);
    } else s = n.reduce((o, l)=>{
        const d = l.patterns;
        return d ? o.concat(d) : o;
    }, []);
    const i = function(o, l) {
        if (typeof o != "string") return null;
        if (!l) {
            let u;
            for(u = o.length; u > 0; u--){
                const m = o.charCodeAt(u - 1);
                if (m === 47 || m === 92) break;
            }
            l = o.substr(u);
        }
        const d = r.indexOf(l);
        return d !== -1 ? s[d] : null;
    };
    i.basenames = r, i.patterns = s, i.allBasenames = r;
    const a = e.filter((o)=>!o.basenames);
    return a.push(i), a;
}
function EVe(e) {
    const t = new n$;
    for (const n of e)t.processEvent(n);
    return t.coalesce();
}
function bVe(e, t) {
    return typeof t == "string" && !t.startsWith(Vd) && !Dm(t) ? {
        base: e,
        pattern: t
    } : t;
}
function ZV(e, t) {
    const n = [];
    for (const r of t)n.push(tM(bVe(e, r)));
    return n;
}
function RVe(e, t) {
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
function l$(e) {
    Ea = e;
}
function d$() {
    let e = 0;
    for (const t of LS)e += t();
    return e;
}
var Ea;
var US, u$;
function vh(e, { fallback: t, min: n, max: r }) {
    const s = typeof e == "number" && Number.isFinite(e) ? e : t;
    return Math.min(r, Math.max(n, s));
}
function t$e(e) {
    let t = !1, n = !1, r = !1, s = !1;
    for (const i of e.split(/[/\\]/)){
        switch(i){
            case "node_modules":
            case ".pnpm":
            case ".yarn":
                return "deps";
            case ".turbo":
            case "dist":
            case "out":
            case "build":
            case ".next":
            case "target":
            case "coverage":
            case "tmp":
                t = !0;
                continue;
            case ".git":
                n = !0;
                continue;
        }
        i.toLowerCase().includes("cache") ? r = !0 : i.startsWith(".") && (s = !0);
    }
    return t ? "build_out" : n ? "vcs" : r ? "cache" : s ? "dot_other" : "src_other";
}
function n$e(e) {
    return e < 250 ? "lt250" : e < 500 ? "250_500" : e < 1e3 ? "500_1000" : e < 2e3 ? "1000_2000" : e < 5e3 ? "2000_5000" : "5000_plus";
}
function r$e(e) {
    return e < 500 ? "lt500" : e < 1e3 ? "500_1000" : e < 2e3 ? "1000_2000" : e < 5e3 ? "2000_5000" : "5000_60000";
}
function S$(e, t) {
    const n = t > 0 ? e / t * 100 : 0;
    return n < 20 ? "lt20" : n < 50 ? "20_50" : n < 80 ? "50_80" : "80_plus";
}
function Th(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : e < 1e3 ? "100_999" : e < 1e4 ? "1k_10k" : "10k_plus";
}
function s$e(e) {
    return e <= 0 ? "0" : e < 100 ? "1_99" : e < 1e3 ? "100_999" : e < 1e4 ? "1k_10k" : "10k_plus";
}
function y$(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : e < 1e3 ? "100_999" : "1k_plus";
}
function w$(e) {
    return e <= 0 ? "0" : e === 1 ? "1" : e < 10 ? "2_9" : e < 50 ? "10_49" : "50_plus";
}
function E$(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : "100_plus";
}
function i$e(e) {
    return e <= 0 ? "0" : e < 50 ? "lt50" : e < 250 ? "50_250" : "250_plus";
}
function b$(e) {
    return e <= 0 ? "0" : e === 1 ? "1" : e < 10 ? "2_9" : "10_plus";
}
var R$, C$, WS, I$, A$;
export { A$, BV, C$, E$, EVe, Ea, FV, GV, I$, NUe, R$, RVe, S$, SVe, Th, US, VV, WS, WV, ZA, ZV, _Ve, aR, b$, bVe, d$, eM, fVe, gVe, hVe, i$e, kVe, l$, n$e, r$e, s$e, t$e, tM, u$, v3, vVe, vh, w$, xV, y$, yVe };
var __wakaru_qVe_initialized = false;
export function qVe() {
if (__wakaru_qVe_initialized) return;
__wakaru_qVe_initialized = true;
"use strict";
h(), le(), Mt(), Lr(), j(), dT(), Ce(), oe(), Ft(), ye(), eA(), gn(), $d(), Xo(), dM(), US = class Ib extends J {
    constructor(t, n, r, s, i, a){
        super(), this.request = t, this.recursiveWatcher = n, this.onDidFilesChange = r, this.onDidWatchFail = s, this.onLogMessage = i, this.verboseLogging = a, this.throttledFileChangesEmitter = this._register(new JR({
            maxWorkChunkSize: 100,
            throttleDelay: 200,
            maxBufferedWork: 1e4
        }, (o)=>this.onDidFilesChange(o))), this.fileChangesAggregator = this._register(new E3((o)=>this.handleFileChanges(o), Ib.FILE_CHANGES_HANDLER_DELAY)), this.watchedKind = "file", this.inDeletedPathFlush = !1, this.cts = new Jn, this.realPath = new Ci(async ()=>{
            let o = this.request.path;
            try {
                o = await iS(this.request.path), this.request.path !== o && this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${o})`);
            } catch  {}
            return o;
        }), this._isReusingRecursiveWatcher = !1, this.didFail = !1, this.excludes = ZV(this.request.path, this.request.excludes), this.includes = this.request.includes ? ZV(this.request.path, this.request.includes) : void 0, this.filter = XV(this.request) ? this.request.filter : void 0, this.ready = this.watch();
    }
    get isReusingRecursiveWatcher() {
        return this._isReusingRecursiveWatcher;
    }
    get failed() {
        return this.didFail;
    }
    async watch() {
        try {
            const t = await HVe.stat(this.request.path);
            if (this.cts.token.isCancellationRequested) return;
            await aR(this.doWatch(t.isDirectory()), this._store);
        } catch (t) {
            t.code !== "ENOENT" ? this.error(t) : this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${t})`), this.notifyWatchFailed();
        }
    }
    notifyWatchFailed() {
        this.didFail = !0, this.onDidWatchFail?.();
    }
    async doWatch(t) {
        const n = new ve;
        return this.doWatchWithExistingWatcher(t, n) ? (this.trace(`reusing an existing recursive watcher for ${this.request.path}`), this._isReusingRecursiveWatcher = !0) : (this._isReusingRecursiveWatcher = !1, await this.doWatchWithNodeJS(t, n)), n;
    }
    doWatchWithExistingWatcher(t, n) {
        if (t) return !1;
        const r = x.file(this.request.path), s = this.recursiveWatcher?.subscribe(this.request.path, async (i, a)=>{
            n.isDisposed || (i ? await aR(this.doWatch(t), n) : a && (typeof a.cId == "number" || typeof this.request.correlationId == "number") && this.onFileChange({
                resource: r,
                type: a.type,
                cId: this.request.correlationId
            }, !0));
        });
        return s ? (n.add(s), !0) : !1;
    }
    async doWatchWithNodeJS(t, n) {
        const r = await this.realPath.value;
        if (this.cts.token.isCancellationRequested) return;
        if (q && ma(r, "/Volumes/", !0)) {
            this.error(`Refusing to watch ${r} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
            return;
        }
        const s = new Jn(this.cts.token);
        n.add(ge(()=>s.dispose(!0)));
        const i = new ve;
        n.add(i);
        try {
            const a = x.file(this.request.path), o = _t(r), l = jVe(r);
            i.add(ge(()=>{
                l.removeAllListeners(), l.close();
            })), this.trace(`Started watching: '${r}'`);
            const d = new Set;
            if (this.watchedKind = t ? "folder" : "file", t) try {
                for (const m of await ie.readdir(r))d.add(m);
            } catch (m) {
                this.error(m);
            }
            if (this.folderChildren = d, s.token.isCancellationRequested) return;
            const u = new Map;
            i.add(ge(()=>{
                for (const [, m] of u)m.dispose();
                u.clear();
            })), l.on("error", (m, f)=>{
                s.token.isCancellationRequested || (this.error(`Failed to watch ${r} for changes using fs.watch() (${m}, ${f})`), this.notifyWatchFailed());
            }), l.on("change", (m, f)=>{
                if (s.token.isCancellationRequested) return;
                Ea?.onRawEvent(), this.verboseLogging && this.traceWithCorrelation(`[raw] ["${m}"] ${f}`);
                let v = "";
                if (f && (v = f.toString(), q && (v = jl(v))), !(!v || m !== "change" && m !== "rename")) if (t) if (m === "rename") {
                    u.get(v)?.dispose(), Ea?.onProbeScheduled();
                    const T = setTimeout(async ()=>{
                        if (u.delete(v), Xm(v, o, !Fe) && !await ie.exists(r)) {
                            this.onWatchedPathDeleted(a);
                            return;
                        }
                        if (s.token.isCancellationRequested) return;
                        const S = Ea?.active ? performance.now() : void 0, k = await this.existsChildStrictCase(L(r, v));
                        if (S !== void 0 && Ea?.onProbeCompleted(performance.now() - S), s.token.isCancellationRequested) return;
                        let y;
                        k ? d.has(v) ? y = 0 : (y = 1, d.add(v)) : (d.delete(v), y = 2), this.onFileChange({
                            resource: Ae(a, v),
                            type: y,
                            cId: this.request.correlationId
                        });
                    }, Ib.FILE_DELETE_HANDLER_DELAY);
                    u.set(v, ge(()=>clearTimeout(T)));
                } else {
                    let T;
                    d.has(v) ? T = 0 : (T = 1, d.add(v)), this.onFileChange({
                        resource: Ae(a, v),
                        type: T,
                        cId: this.request.correlationId
                    });
                }
                else if (m === "rename" || !Xm(v, o, !Fe)) {
                    const T = setTimeout(async ()=>{
                        const S = await ie.exists(r);
                        s.token.isCancellationRequested || (S ? (this.onFileChange({
                            resource: a,
                            type: 0,
                            cId: this.request.correlationId
                        }, !0), await aR(this.doWatch(!1), i)) : this.onWatchedPathDeleted(a));
                    }, Ib.FILE_DELETE_HANDLER_DELAY);
                    i.clear(), i.add(ge(()=>clearTimeout(T)));
                } else this.onFileChange({
                    resource: a,
                    type: 0,
                    cId: this.request.correlationId
                }, !0);
            });
        } catch (a) {
            if (s.token.isCancellationRequested) return;
            this.error(`Failed to watch ${r} for changes using fs.watch() (${a.toString()})`), this.notifyWatchFailed();
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
    onFileChange(t, n = !1) {
        this.cts.token.isCancellationRequested || (this.verboseLogging && this.traceWithCorrelation(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`), !n && this.excludes.some((r)=>r(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (excluded) ${t.resource.fsPath}`) : !n && this.includes && this.includes.length > 0 && !this.includes.some((r)=>r(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${t.resource.fsPath}`) : this.fileChangesAggregator.work(t));
    }
    handleFileChanges(t) {
        const n = Ea?.active ? performance.now() : void 0, r = EVe(t), s = n !== void 0 ? performance.now() : 0, i = [];
        for (const l of r){
            if (RVe(l, this.filter)) {
                this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${l.resource.fsPath}`);
                continue;
            }
            i.push(l);
        }
        if (i.length === 0) {
            n !== void 0 && this.reportFlush({
                flushStart: n,
                coalesceDone: s,
                emitStart: 0,
                fileChanges: t,
                filteredEvents: i,
                emitted: !1
            });
            return;
        }
        if (this.verboseLogging) for (const l of i)this.traceWithCorrelation(` >> normalized ${l.type === 1 ? "[ADDED]" : l.type === 2 ? "[DELETED]" : "[CHANGED]"} ${l.resource.fsPath}`);
        const a = n !== void 0 ? performance.now() : 0, o = this.throttledFileChangesEmitter.work(i);
        n !== void 0 && this.reportFlush({
            flushStart: n,
            coalesceDone: s,
            emitStart: a,
            fileChanges: t,
            filteredEvents: i,
            emitted: o
        }), o ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${i[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${i.length}, most recent change: ${i[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
    }
    reportFlush(t) {
        const n = performance.now();
        Ea?.onFlush({
            flushMs: n - t.flushStart,
            coalesceMs: t.coalesceDone - t.flushStart,
            emitMs: t.emitStart ? n - t.emitStart : 0,
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
        if (Fe) return ie.exists(t);
        try {
            const n = _t(t);
            return (await ie.readdir(st(t))).some((s)=>s === n);
        } catch (n) {
            return this.trace(n), !1;
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
}, US.FILE_DELETE_HANDLER_DELAY = 100, US.FILE_CHANGES_HANDLER_DELAY = 75, u$ = US;

}
var __wakaru_a$e_initialized = false;
export function a$e() {
if (__wakaru_a$e_initialized) return;
__wakaru_a$e_initialized = true;
"use strict";
h(), se(), j(), _a(), v$(), ZVe(), dM(), R$ = 6e4, C$ = class extends J {
    constructor(e, t, n){
        super(), this.applicationStorageMainService = e, this.storageMainService = t, this.logService = n, this._config = mi, this._active = this._register(new Ut), this._anchorExpectedAt = 0, this._skipAnchorRound = !1, this._win1s = new WS(1e3), this._win2s = new WS(2e3), this._win60s = new WS(6e4), this._sessionEmits = 0, this._suppressedSinceLast = 0, this._lastEmitAt = 0, this.applicationStorageMainService.whenReady.then(()=>{
            this._store.isDisposed || (this._reconfigure(), this._register(this.storageMainService.applicationStorage.onDidChangeStorage((r)=>{
                r.key === hM && this._reconfigure();
            })));
        }).catch((r)=>this.logService.warn("[MainWatcherStall] Failed to initialize", r));
    }
    get active() {
        return this._active.value !== void 0;
    }
    onFlush(e) {
        const t = Date.now();
        this._win1s.bumpFlush(t, e.flushMs), this._win2s.bumpFlush(t, e.flushMs), e.flushMs >= this._config.flushThresholdMs && this._emitFlushStall(e, t);
    }
    onRawEvent() {
        this._win2s.bumpRawEvent(Date.now());
    }
    onProbeScheduled() {
        const e = Date.now();
        this._win1s.bumpProbe(e), this._win2s.bumpProbe(e);
    }
    onProbeCompleted(e) {
        this._win2s.addProbeMs(Date.now(), e);
    }
    onWatcherStart() {
        this._win60s.bumpChurn(Date.now());
    }
    onWatcherStop() {
        this._win60s.bumpChurn(Date.now());
    }
    _reconfigure() {
        if (this._config = this._readConfig(), !this._config.enabled) {
            this._stop();
            return;
        }
        this._active.value || this._start();
    }
    _start() {
        const e = new ve;
        this._active.value = e, l$(this), e.add(ge(()=>l$(void 0)));
        for (const t of [
            "suspend",
            "resume",
            "lock-screen",
            "unlock-screen"
        ])e.add(O.fromNodeEventEmitter(e$e, t)(()=>this._rebaselineAnchor()));
        this._armAnchor(), this.logService.info(`[MainWatcherStall] enabled (flushThresholdMs=${this._config.flushThresholdMs}, anchorIntervalMs=${this._config.anchorIntervalMs}, anchorLagMs=${this._config.anchorLagMs})`);
    }
    _stop() {
        this._anchorTimer && (clearTimeout(this._anchorTimer), this._anchorTimer = void 0), this._active.clear();
    }
    _armAnchor() {
        this._anchorExpectedAt = Date.now() + this._config.anchorIntervalMs, this._anchorTimer = setTimeout(()=>{
            try {
                this._anchorTick();
            } catch (e) {
                this.logService.warn(`[MainWatcherStall] anchor tick failed: ${e}`);
            } finally{
                this._active.value && this._armAnchor();
            }
        }, this._config.anchorIntervalMs), this._anchorTimer.unref?.();
    }
    _anchorTick() {
        const e = Date.now(), t = e - this._anchorExpectedAt;
        if (this._skipAnchorRound) {
            this._skipAnchorRound = !1;
            return;
        }
        t > R$ || t >= this._config.anchorLagMs && this._emitTimersStall(t, e);
    }
    _rebaselineAnchor() {
        this._anchorExpectedAt = Date.now() + this._config.anchorIntervalMs, this._skipAnchorRound = !0;
    }
    _passEmissionGate(e) {
        return this._sessionEmits >= this._config.sessionCap || e - this._lastEmitAt < this._config.cooldownMs ? (this._suppressedSinceLast++, !1) : (this._sessionEmits++, this._lastEmitAt = e, !0);
    }
    _isSharedSession() {
        return this.applicationStorageMainService.getBoolean(pM, -1, !1);
    }
    _emitFlushStall(e, t) {
        if (this._passEmissionGate(t)) try {
            let n = 0;
            for (const o of e.fileChanges)o.type === 2 && n++;
            const r = this._suppressedSinceLast;
            this._suppressedSinceLast = 0;
            const s = d$(), i = n$e(e.flushMs), a = new I$(`main-process watcher flush stall: ${i}`);
            gs(a, {
                captureContext: {
                    level: "warning",
                    tags: {
                        client_error_type: "main_watcher_flush_stall",
                        "event.process": "main",
                        dur_bucket: i,
                        coalesce_share: S$(e.coalesceMs, e.flushMs),
                        emit_share: S$(e.emitMs, e.flushMs),
                        in_events_bucket: Th(e.inEvents),
                        out_events_bucket: Th(e.outEvents),
                        in_deletes_bucket: Th(n),
                        entry: e.entry,
                        target_kind: e.targetKind,
                        path_class: t$e(e.request.path),
                        children_bucket: s$e(e.folderChildren),
                        flushes_1s: w$(this._win1s.flushes(t)),
                        probes_1s: E$(this._win1s.probes(t)),
                        pending_bucket: Th(e.pending),
                        emitted: e.emitted ? "1" : "0",
                        shared_session: this._isSharedSession() ? "1" : "0",
                        live_reqs_bucket: y$(s),
                        suppressed_since_last: b$(r)
                    },
                    extra: {
                        flush_ms: e.flushMs,
                        coalesce_ms: e.coalesceMs,
                        emit_ms: e.emitMs,
                        in_events: e.inEvents,
                        out_events: e.outEvents,
                        in_deletes: n,
                        pending: e.pending,
                        folder_children: e.folderChildren,
                        probe_ms_2s: this._win2s.probeMs(t),
                        raw_events_2s: this._win2s.rawEvents(t),
                        churn_60s: this._win60s.churn(t),
                        live_requests: s,
                        session_emits: this._sessionEmits,
                        suppressed_since_last: r,
                        flush_threshold_ms: this._config.flushThresholdMs,
                        anchor_interval_ms: this._config.anchorIntervalMs,
                        anchor_lag_ms: this._config.anchorLagMs,
                        cooldown_ms: this._config.cooldownMs,
                        session_cap: this._config.sessionCap
                    },
                    fingerprint: [
                        "main_watcher_flush_stall"
                    ]
                }
            });
        } catch (n) {
            this.logService.warn(`[MainWatcherStall] Failed to emit flush stall: ${n}`);
        }
    }
    _emitTimersStall(e, t) {
        if (this._passEmissionGate(t)) try {
            const n = this._suppressedSinceLast;
            this._suppressedSinceLast = 0;
            const r = d$(), s = this._win2s.flushes(t), i = this._win2s.probes(t), a = this._win2s.rawEvents(t), o = this._win2s.maxFlushMs(t), l = r$e(e), d = new A$(`main-process timers stall: ${l}`);
            gs(d, {
                captureContext: {
                    level: "warning",
                    tags: {
                        client_error_type: "main_timers_stall",
                        "event.process": "main",
                        lag_bucket: l,
                        max_flush_bucket: i$e(o),
                        flushes_2s: w$(s),
                        probes_2s: E$(i),
                        events_2s: Th(a),
                        watcher_quiet: s === 0 && i === 0 && a === 0 ? "1" : "0",
                        shared_session: this._isSharedSession() ? "1" : "0",
                        live_reqs_bucket: y$(r),
                        suppressed_since_last: b$(n)
                    },
                    extra: {
                        lag_ms: e,
                        max_flush_ms_2s: o,
                        flushes_2s: s,
                        probes_2s: i,
                        probe_ms_2s: this._win2s.probeMs(t),
                        raw_events_2s: a,
                        churn_60s: this._win60s.churn(t),
                        live_requests: r,
                        session_emits: this._sessionEmits,
                        suppressed_since_last: n,
                        flush_threshold_ms: this._config.flushThresholdMs,
                        anchor_interval_ms: this._config.anchorIntervalMs,
                        anchor_lag_ms: this._config.anchorLagMs,
                        cooldown_ms: this._config.cooldownMs,
                        session_cap: this._config.sessionCap
                    },
                    fingerprint: [
                        "main_timers_stall"
                    ]
                }
            });
        } catch (n) {
            this.logService.warn(`[MainWatcherStall] Failed to emit timers stall: ${n}`);
        }
    }
    _readConfig() {
        const e = this.applicationStorageMainService.get(hM, -1);
        if (typeof e != "string" || e.length === 0) return mi;
        try {
            const t = JSON.parse(e);
            return !t || typeof t != "object" ? mi : {
                enabled: typeof t.enabled == "boolean" ? t.enabled : mi.enabled,
                flushThresholdMs: vh(t.flushThresholdMs, {
                    fallback: mi.flushThresholdMs,
                    min: 100,
                    max: 5e3
                }),
                anchorIntervalMs: vh(t.anchorIntervalMs, {
                    fallback: mi.anchorIntervalMs,
                    min: 500,
                    max: 5e3
                }),
                anchorLagMs: vh(t.anchorLagMs, {
                    fallback: mi.anchorLagMs,
                    min: 250,
                    max: 5e3
                }),
                cooldownMs: vh(t.cooldownMs, {
                    fallback: mi.cooldownMs,
                    min: 3e4,
                    max: 6e5
                }),
                sessionCap: vh(t.sessionCap, {
                    fallback: mi.sessionCap,
                    min: 1,
                    max: 50
                })
            };
        } catch (t) {
            return this.logService.warn("[MainWatcherStall] Failed to parse mirrored config, using defaults", t), mi;
        }
    }
    dispose() {
        this._stop(), super.dispose();
    }
}, WS = class {
    constructor(e){
        this._widthMs = e, this._slotStart = Date.now(), this._curFlushes = 0, this._curProbes = 0, this._curProbeMs = 0, this._curRawEvents = 0, this._curMaxFlushMs = 0, this._curChurn = 0, this._prevFlushes = 0, this._prevProbes = 0, this._prevProbeMs = 0, this._prevRawEvents = 0, this._prevMaxFlushMs = 0, this._prevChurn = 0;
    }
    _rotate(e) {
        const t = e - this._slotStart;
        t < this._widthMs || (t >= 2 * this._widthMs ? (this._prevFlushes = 0, this._prevProbes = 0, this._prevProbeMs = 0, this._prevRawEvents = 0, this._prevMaxFlushMs = 0, this._prevChurn = 0, this._slotStart = e) : (this._prevFlushes = this._curFlushes, this._prevProbes = this._curProbes, this._prevProbeMs = this._curProbeMs, this._prevRawEvents = this._curRawEvents, this._prevMaxFlushMs = this._curMaxFlushMs, this._prevChurn = this._curChurn, this._slotStart += this._widthMs), this._curFlushes = 0, this._curProbes = 0, this._curProbeMs = 0, this._curRawEvents = 0, this._curMaxFlushMs = 0, this._curChurn = 0);
    }
    bumpFlush(e, t) {
        this._rotate(e), this._curFlushes++, t > this._curMaxFlushMs && (this._curMaxFlushMs = t);
    }
    bumpProbe(e) {
        this._rotate(e), this._curProbes++;
    }
    addProbeMs(e, t) {
        this._rotate(e), this._curProbeMs += t;
    }
    bumpRawEvent(e) {
        this._rotate(e), this._curRawEvents++;
    }
    bumpChurn(e) {
        this._rotate(e), this._curChurn++;
    }
    flushes(e) {
        return this._rotate(e), this._curFlushes + this._prevFlushes;
    }
    probes(e) {
        return this._rotate(e), this._curProbes + this._prevProbes;
    }
    probeMs(e) {
        return this._rotate(e), this._curProbeMs + this._prevProbeMs;
    }
    rawEvents(e) {
        return this._rotate(e), this._curRawEvents + this._prevRawEvents;
    }
    maxFlushMs(e) {
        return this._rotate(e), Math.max(this._curMaxFlushMs, this._prevMaxFlushMs);
    }
    churn(e) {
        return this._rotate(e), this._curChurn + this._prevChurn;
    }
}, I$ = class extends Error {
    constructor(e){
        const t = Error.stackTraceLimit;
        Error.stackTraceLimit = 0, super(e), Error.stackTraceLimit = t, this.name = "MainWatcherFlushStall";
    }
}, A$ = class extends Error {
    constructor(e){
        const t = Error.stackTraceLimit;
        Error.stackTraceLimit = 0, super(e), Error.stackTraceLimit = t, this.name = "MainTimersStall";
    }
};

}
