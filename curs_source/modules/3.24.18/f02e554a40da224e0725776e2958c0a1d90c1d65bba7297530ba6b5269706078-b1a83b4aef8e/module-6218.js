"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MemoryCookieStore = void 0;
const n = require("./module-798.js"), s = require("./module-7204.js"), i = require("./module-6595.js"), o = require("./module-5779.js");
class a extends i.Store {
    constructor(){
        super(), this.synchronous = !0, this.idx = Object.create(null);
    }
    findCookie(t, e, r, n) {
        const s = (0, o.createPromiseCallback)(n);
        if (null == t || null == e || null == r) return s.resolve(void 0);
        const i = this.idx[t]?.[e]?.[r];
        return s.resolve(i);
    }
    findCookies(t, e, r = !1, i) {
        "function" == typeof r && (i = r, r = !0);
        const a = [], u = (0, o.createPromiseCallback)(i);
        if (!t) return u.resolve([]);
        let c;
        c = e ? function(t) {
            for(const r in t)if ((0, n.pathMatch)(e, r)) {
                const e = t[r];
                for(const t in e){
                    const r = e[t];
                    r && a.push(r);
                }
            }
        } : function(t) {
            for(const e in t){
                const r = t[e];
                for(const t in r){
                    const e = r[t];
                    e && a.push(e);
                }
            }
        };
        const l = (0, s.permuteDomain)(t, r) || [
            t
        ], m = this.idx;
        return l.forEach((t)=>{
            const e = m[t];
            e && c(e);
        }), u.resolve(a);
    }
    putCookie(t, e) {
        const r = (0, o.createPromiseCallback)(e), { domain: n, path: s, key: i } = t;
        if (null == n || null == s || null == i) return r.resolve(void 0);
        const a = this.idx[n] ?? Object.create(null);
        this.idx[n] = a;
        const u = a[s] ?? Object.create(null);
        return a[s] = u, u[i] = t, r.resolve(void 0);
    }
    updateCookie(t, e, r) {
        if (!r) return this.putCookie(e);
        this.putCookie(e, r);
    }
    removeCookie(t, e, r, n) {
        const s = (0, o.createPromiseCallback)(n);
        return delete this.idx[t]?.[e]?.[r], s.resolve(void 0);
    }
    removeCookies(t, e, r) {
        const n = (0, o.createPromiseCallback)(r), s = this.idx[t];
        return s && (e ? delete s[e] : delete this.idx[t]), n.resolve(void 0);
    }
    removeAllCookies(t) {
        const e = (0, o.createPromiseCallback)(t);
        return this.idx = Object.create(null), e.resolve(void 0);
    }
    getAllCookies(t) {
        const e = (0, o.createPromiseCallback)(t), r = [], n = this.idx;
        return Object.keys(n).forEach((t)=>{
            const e = n[t] ?? {};
            Object.keys(e).forEach((t)=>{
                const n = e[t] ?? {};
                Object.keys(n).forEach((t)=>{
                    const e = n[t];
                    null != e && r.push(e);
                });
            });
        }), r.sort((t, e)=>(t.creationIndex || 0) - (e.creationIndex || 0)), e.resolve(r);
    }
}
exports.MemoryCookieStore = a;
