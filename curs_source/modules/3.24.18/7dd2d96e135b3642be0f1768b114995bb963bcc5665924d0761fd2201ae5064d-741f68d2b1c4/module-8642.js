"use strict";
const { kConstruct: a } = require("./module-2381.js"), { urlEquals: s, fieldValues: o } = require("./module-3006.js"), { kEnumerableProperty: r, isDisturbed: i } = require("./module-9361.js"), { kHeadersList: A } = require("./module-8832.js"), { webidl: c } = require("./module-8005.js"), { Response: l, cloneResponse: d } = require("./module-1099.js"), { Request: m } = require("./module-2239.js"), { kState: u, kHeaders: g, kGuard: p, kRealm: E } = require("./module-5899.js"), { fetching: h } = require("./module-3406.js"), { urlIsHttpHttpsScheme: T, createDeferredPromise: k, readAllBytes: f } = require("./module-5728.js"), _ = require("./module-2613.js"), { getGlobalDispatcher: I } = require("./module-7362.js");
class C {
    #i;
    constructor(){
        arguments[0] !== a && c.illegalConstructor(), this.#i = arguments[1];
    }
    async match(e, n = {}) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = c.converters.RequestInfo(e), n = c.converters.CacheQueryOptions(n);
        const t = await this.matchAll(e, n);
        if (0 !== t.length) return t[0];
    }
    async matchAll(e = void 0, n = {}) {
        c.brandCheck(this, C), void 0 !== e && (e = c.converters.RequestInfo(e)), n = c.converters.CacheQueryOptions(n);
        let t = null;
        if (void 0 !== e) if (e instanceof m) {
            if (t = e[u], "GET" !== t.method && !n.ignoreMethod) return [];
        } else "string" == typeof e && (t = new m(e)[u]);
        const a = [];
        if (void 0 === e) for (const e of this.#i)a.push(e[1]);
        else {
            const e = this.#A(t, n);
            for (const n of e)a.push(n[1]);
        }
        const s = [];
        for (const e of a){
            const n = new l(e.body?.source ?? null), t = n[u].body;
            n[u] = e, n[u].body = t, n[g][A] = e.headersList, n[g][p] = "immutable", s.push(n);
        }
        return Object.freeze(s);
    }
    async add(e) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const n = [
            e = c.converters.RequestInfo(e)
        ], t = this.addAll(n);
        return await t;
    }
    async addAll(e) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = c.converters["sequence<RequestInfo>"](e);
        const n = [], t = [];
        for (const n of e){
            if ("string" == typeof n) continue;
            const e = n[u];
            if (!T(e.url) || "GET" !== e.method) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const a = [];
        for (const s of e){
            const e = new m(s)[u];
            if (!T(e.url)) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", t.push(e);
            const r = k();
            a.push(h({
                request: e,
                dispatcher: I(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) r.reject(c.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const n = o(e.headersList.get("vary"));
                        for (const e of n)if ("*" === e) {
                            r.reject(c.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const e of a)e.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (e) {
                    e.aborted ? r.reject(new DOMException("aborted", "AbortError")) : r.resolve(e);
                }
            })), n.push(r.promise);
        }
        const s = Promise.all(n), r = await s, i = [];
        let A = 0;
        for (const e of r){
            const n = {
                type: "put",
                request: t[A],
                response: e
            };
            i.push(n), A++;
        }
        const l = k();
        let d = null;
        try {
            this.#c(i);
        } catch (e) {
            d = e;
        }
        return queueMicrotask(()=>{
            null === d ? l.resolve(void 0) : l.reject(d);
        }), l.promise;
    }
    async put(e, n) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = c.converters.RequestInfo(e), n = c.converters.Response(n);
        let t = null;
        if (t = e instanceof m ? e[u] : new m(e)[u], !T(t.url) || "GET" !== t.method) throw c.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const a = n[u];
        if (206 === a.status) throw c.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (a.headersList.contains("vary")) {
            const e = o(a.headersList.get("vary"));
            for (const n of e)if ("*" === n) throw c.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (a.body && (i(a.body.stream) || a.body.stream.locked)) throw c.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = d(a), r = k();
        if (null != a.body) {
            const e = a.body.stream.getReader();
            f(e).then(r.resolve, r.reject);
        } else r.resolve(void 0);
        const A = [], l = {
            type: "put",
            request: t,
            response: s
        };
        A.push(l);
        const g = await r.promise;
        null != s.body && (s.body.source = g);
        const p = k();
        let E = null;
        try {
            this.#c(A);
        } catch (e) {
            E = e;
        }
        return queueMicrotask(()=>{
            null === E ? p.resolve() : p.reject(E);
        }), p.promise;
    }
    async delete(e, n = {}) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = c.converters.RequestInfo(e), n = c.converters.CacheQueryOptions(n);
        let t = null;
        if (e instanceof m) {
            if (t = e[u], "GET" !== t.method && !n.ignoreMethod) return !1;
        } else _("string" == typeof e), t = new m(e)[u];
        const a = [], s = {
            type: "delete",
            request: t,
            options: n
        };
        a.push(s);
        const o = k();
        let r, i = null;
        try {
            r = this.#c(a);
        } catch (e) {
            i = e;
        }
        return queueMicrotask(()=>{
            null === i ? o.resolve(!!r?.length) : o.reject(i);
        }), o.promise;
    }
    async keys(e = void 0, n = {}) {
        c.brandCheck(this, C), void 0 !== e && (e = c.converters.RequestInfo(e)), n = c.converters.CacheQueryOptions(n);
        let t = null;
        if (void 0 !== e) if (e instanceof m) {
            if (t = e[u], "GET" !== t.method && !n.ignoreMethod) return [];
        } else "string" == typeof e && (t = new m(e)[u]);
        const a = k(), s = [];
        if (void 0 === e) for (const e of this.#i)s.push(e[0]);
        else {
            const e = this.#A(t, n);
            for (const n of e)s.push(n[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const n of s){
                const t = new m("https://a");
                t[u] = n, t[g][A] = n.headersList, t[g][p] = "immutable", t[E] = n.client, e.push(t);
            }
            a.resolve(Object.freeze(e));
        }), a.promise;
    }
    #c(e) {
        const n = this.#i, t = [
            ...n
        ], a = [], s = [];
        try {
            for (const t of e){
                if ("delete" !== t.type && "put" !== t.type) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === t.type && null != t.response) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#A(t.request, t.options, a).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === t.type) {
                    if (e = this.#A(t.request, t.options), 0 === e.length) return [];
                    for (const t of e){
                        const e = n.indexOf(t);
                        _(-1 !== e), n.splice(e, 1);
                    }
                } else if ("put" === t.type) {
                    if (null == t.response) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = t.request;
                    if (!T(s.url)) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != t.options) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#A(t.request);
                    for (const t of e){
                        const e = n.indexOf(t);
                        _(-1 !== e), n.splice(e, 1);
                    }
                    n.push([
                        t.request,
                        t.response
                    ]), a.push([
                        t.request,
                        t.response
                    ]);
                }
                s.push([
                    t.request,
                    t.response
                ]);
            }
            return s;
        } catch (e) {
            throw this.#i.length = 0, this.#i = t, e;
        }
    }
    #A(e, n, t) {
        const a = [], s = t ?? this.#i;
        for (const t of s){
            const [s, o] = t;
            this.#l(e, s, o, n) && a.push(t);
        }
        return a;
    }
    #l(e, n, t = null, a) {
        const r = new URL(e.url), i = new URL(n.url);
        if (a?.ignoreSearch && (i.search = "", r.search = ""), !s(r, i, !0)) return !1;
        if (null == t || a?.ignoreVary || !t.headersList.contains("vary")) return !0;
        const A = o(t.headersList.get("vary"));
        for (const t of A){
            if ("*" === t) return !1;
            if (n.headersList.get(t) !== e.headersList.get(t)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(C.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: r,
    matchAll: r,
    add: r,
    addAll: r,
    put: r,
    delete: r,
    keys: r
});
const y = [
    {
        key: "ignoreSearch",
        converter: c.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: c.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: c.converters.boolean,
        defaultValue: !1
    }
];
c.converters.CacheQueryOptions = c.dictionaryConverter(y), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([
    ...y,
    {
        key: "cacheName",
        converter: c.converters.DOMString
    }
]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), module.exports = {
    Cache: C
};
