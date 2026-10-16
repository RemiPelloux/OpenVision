"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MemoryCookieStore = void 0;
const n = require("./module-80798.js"), s = require("./module-47204.js"), o = require("./module-46595.js"), i = require("./module-95779.js");
class a extends o.Store {
    constructor(){
        super(), this.synchronous = !0, this.idx = Object.create(null);
    }
    findCookie(e, t, r, n) {
        const s = (0, i.createPromiseCallback)(n);
        if (null == e || null == t || null == r) return s.resolve(void 0);
        const o = this.idx[e]?.[t]?.[r];
        return s.resolve(o);
    }
    findCookies(e, t, r = !1, o) {
        "function" == typeof r && (o = r, r = !0);
        const a = [], c = (0, i.createPromiseCallback)(o);
        if (!e) return c.resolve([]);
        let l;
        l = t ? function(e) {
            for(const r in e)if ((0, n.pathMatch)(t, r)) {
                const t = e[r];
                for(const e in t){
                    const r = t[e];
                    r && a.push(r);
                }
            }
        } : function(e) {
            for(const t in e){
                const r = e[t];
                for(const e in r){
                    const t = r[e];
                    t && a.push(t);
                }
            }
        };
        const u = (0, s.permuteDomain)(e, r) || [
            e
        ], d = this.idx;
        return u.forEach((e)=>{
            const t = d[e];
            t && l(t);
        }), c.resolve(a);
    }
    putCookie(e, t) {
        const r = (0, i.createPromiseCallback)(t), { domain: n, path: s, key: o } = e;
        if (null == n || null == s || null == o) return r.resolve(void 0);
        const a = this.idx[n] ?? Object.create(null);
        this.idx[n] = a;
        const c = a[s] ?? Object.create(null);
        return a[s] = c, c[o] = e, r.resolve(void 0);
    }
    updateCookie(e, t, r) {
        if (!r) return this.putCookie(t);
        this.putCookie(t, r);
    }
    removeCookie(e, t, r, n) {
        const s = (0, i.createPromiseCallback)(n);
        return delete this.idx[e]?.[t]?.[r], s.resolve(void 0);
    }
    removeCookies(e, t, r) {
        const n = (0, i.createPromiseCallback)(r), s = this.idx[e];
        return s && (t ? delete s[t] : delete this.idx[e]), n.resolve(void 0);
    }
    removeAllCookies(e) {
        const t = (0, i.createPromiseCallback)(e);
        return this.idx = Object.create(null), t.resolve(void 0);
    }
    getAllCookies(e) {
        const t = (0, i.createPromiseCallback)(e), r = [], n = this.idx;
        return Object.keys(n).forEach((e)=>{
            const t = n[e] ?? {};
            Object.keys(t).forEach((e)=>{
                const n = t[e] ?? {};
                Object.keys(n).forEach((e)=>{
                    const t = n[e];
                    null != t && r.push(t);
                });
            });
        }), r.sort((e, t)=>(e.creationIndex || 0) - (t.creationIndex || 0)), t.resolve(r);
    }
}
exports.MemoryCookieStore = a;
