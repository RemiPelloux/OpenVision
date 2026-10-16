import { Ei, Hc } from "./Iwo.js";
import { qn, xI } from "./async.js";
import { E } from "./tslib.es6.js";
var RRt, MFi;
export { MFi, RRt };
var __wakaru_n0v_initialized = false;
export function n0v() {
if (__wakaru_n0v_initialized) return;
__wakaru_n0v_initialized = true;
"use strict";
E(), qn(), Ei(), RRt = class kIe {
    constructor(e){
        this._deps = e, this._batches = new Map, this._aloneLimiter = new xI(kIe.MAX_CONCURRENT_ALONE_FETCHES), this._queuedAloneRejectors = new Set, this._disposed = !1, this._maxBatch = e.maxBatch ?? kIe.DEFAULT_MAX_BATCH;
    }
    fetch(e, n, i) {
        if (this._disposed) return this._fetchAlone(e, n, i);
        const r = kIe.patchScopeKey(e, n);
        return new Promise((s, o)=>{
            let a = this._batches.get(r);
            a === void 0 && (a = {
                cwd: e,
                scopeArgs: n,
                waiters: new Map,
                scheduled: !1
            }, this._batches.set(r, a));
            const l = a.waiters.get(i);
            l !== void 0 ? l.push({
                resolve: s,
                reject: o
            }) : a.waiters.set(i, [
                {
                    resolve: s,
                    reject: o
                }
            ]), a.waiters.size >= this._maxBatch ? this._flush(r) : a.scheduled || (a.scheduled = !0, queueMicrotask(()=>this._flush(r)));
        });
    }
    dispose() {
        this._disposed = !0;
        for (const n of [
            ...this._batches.keys()
        ])this._flush(n);
        const e = new Hc;
        for (const n of this._queuedAloneRejectors)n(e);
        this._queuedAloneRejectors.clear(), this._aloneLimiter.dispose();
    }
    _flush(e) {
        const n = this._batches.get(e);
        if (n === void 0) return;
        this._batches.delete(e);
        const i = [
            ...n.waiters.keys()
        ];
        if (i.length === 1) {
            this._serveAlone(n, i[0]);
            return;
        }
        this._deps.fetchCombined(n.cwd, n.scopeArgs, i).then((r)=>{
            const s = kIe.parsePatchSet(r);
            for (const o of i){
                const a = s.get(o);
                a !== void 0 ? this._settle(n, o, a) : this._serveAlone(n, o);
            }
        }, ()=>{
            for (const r of i)this._serveAlone(n, r);
        });
    }
    _serveAlone(e, n) {
        this._fetchAlone(e.cwd, e.scopeArgs, n).then((i)=>this._settle(e, n, i), (i)=>this._fail(e, n, i));
    }
    _fetchAlone(e, n, i) {
        return this._disposed ? this._deps.fetchCombined(e, n, [
            i
        ]) : new Promise((r, s)=>{
            this._queuedAloneRejectors.add(s), this._aloneLimiter.queue(()=>(this._queuedAloneRejectors.delete(s), this._deps.fetchCombined(e, n, [
                    i
                ]))).then(r, s);
        });
    }
    _settle(e, n, i) {
        for (const r of e.waiters.get(n) ?? [])r.resolve(i);
    }
    _fail(e, n, i) {
        for (const r of e.waiters.get(n) ?? [])r.reject(i);
    }
    static patchScopeKey(e, n) {
        switch(n.scope){
            case "unstaged":
            case "staged":
                return `${e}\0${n.scope}`;
            case "committed":
                return `${e}\0committed\0${n.mergeBaseRef}\0${n.targetRef}`;
            case "ref":
                return `${e}\0ref\0${n.ref}`;
            default:
                {
                    const i = n;
                    throw new Error(`Unknown patch scope: ${String(i)}`);
                }
        }
    }
    static parsePatchSet(e) {
        const n = new Map;
        if (e.length === 0) return n;
        const i = [];
        e.startsWith(kIe.DIFF_GIT_MARKER) && i.push(0);
        const r = `
${kIe.DIFF_GIT_MARKER}`;
        let s = e.indexOf(r);
        for(; s !== -1;)i.push(s + 1), s = e.indexOf(r, s + 1);
        if (i.length === 0) return n;
        for(let o = 0; o < i.length; o++){
            const a = i[o], l = o + 1 < i.length ? i[o + 1] : e.length, c = e.slice(a, l), { newPath: u, oldPath: d } = kIe.sectionPaths(c);
            u !== void 0 && !n.has(u) && n.set(u, c), d !== void 0 && !n.has(d) && n.set(d, c);
        }
        return n;
    }
    static parseHeaderPath(e, n) {
        if (e !== kIe.DEV_NULL && !e.startsWith('"')) return e.startsWith(n) ? e.slice(n.length) : void 0;
    }
    static sectionPaths(e) {
        const n = e.indexOf(`
@@`), i = n === -1 ? e : e.slice(0, n);
        let r, s;
        for (const o of i.split(`
`))o.startsWith("--- ") ? r = kIe.parseHeaderPath(o.slice(4), kIe.OLD_PATH_PREFIX) : o.startsWith("+++ ") && (s = kIe.parseHeaderPath(o.slice(4), kIe.NEW_PATH_PREFIX));
        return {
            newPath: s,
            oldPath: r
        };
    }
}, RRt.DIFF_GIT_MARKER = "diff --git ", RRt.OLD_PATH_PREFIX = "a/", RRt.NEW_PATH_PREFIX = "b/", RRt.DEV_NULL = "/dev/null", RRt.DEFAULT_MAX_BATCH = 64, RRt.MAX_CONCURRENT_ALONE_FETCHES = 6, MFi = RRt;

}
