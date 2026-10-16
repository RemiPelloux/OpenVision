"use strict";
const { kConstruct: t } = require("./module-2381.js"), { urlEquals: s, fieldValues: o } = require("./module-3006.js"), { kEnumerableProperty: r, isDisturbed: i } = require("./module-9361.js"), { kHeadersList: l } = require("./module-8832.js"), { webidl: d } = require("./module-8005.js"), { Response: m, cloneResponse: c } = require("./module-1099.js"), { Request: p } = require("./module-2239.js"), { kState: A, kHeaders: u, kGuard: g, kRealm: T } = require("./module-5899.js"), { fetching: h } = require("./module-3406.js"), { urlIsHttpHttpsScheme: k, createDeferredPromise: _, readAllBytes: E } = require("./module-5728.js"), f = require("./module-2613.js"), { getGlobalDispatcher: C } = require("./module-7362.js");
class I {
    #i;
    constructor(){
        arguments[0] !== t && d.illegalConstructor(), this.#i = arguments[1];
    }
    async match(e, a = {}) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = d.converters.RequestInfo(e), a = d.converters.CacheQueryOptions(a);
        const n = await this.matchAll(e, a);
        if (0 !== n.length) return n[0];
    }
    async matchAll(e = void 0, a = {}) {
        d.brandCheck(this, I), void 0 !== e && (e = d.converters.RequestInfo(e)), a = d.converters.CacheQueryOptions(a);
        let n = null;
        if (void 0 !== e) if (e instanceof p) {
            if (n = e[A], "GET" !== n.method && !a.ignoreMethod) return [];
        } else "string" == typeof e && (n = new p(e)[A]);
        const t = [];
        if (void 0 === e) for (const e of this.#i)t.push(e[1]);
        else {
            const e = this.#l(n, a);
            for (const a of e)t.push(a[1]);
        }
        const s = [];
        for (const e of t){
            const a = new m(e.body?.source ?? null), n = a[A].body;
            a[A] = e, a[A].body = n, a[u][l] = e.headersList, a[u][g] = "immutable", s.push(a);
        }
        return Object.freeze(s);
    }
    async add(e) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const a = [
            e = d.converters.RequestInfo(e)
        ], n = this.addAll(a);
        return await n;
    }
    async addAll(e) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = d.converters["sequence<RequestInfo>"](e);
        const a = [], n = [];
        for (const a of e){
            if ("string" == typeof a) continue;
            const e = a[A];
            if (!k(e.url) || "GET" !== e.method) throw d.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const t = [];
        for (const s of e){
            const e = new p(s)[A];
            if (!k(e.url)) throw d.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", n.push(e);
            const r = _();
            t.push(h({
                request: e,
                dispatcher: C(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) r.reject(d.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const a = o(e.headersList.get("vary"));
                        for (const e of a)if ("*" === e) {
                            r.reject(d.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const e of t)e.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (e) {
                    e.aborted ? r.reject(new DOMException("aborted", "AbortError")) : r.resolve(e);
                }
            })), a.push(r.promise);
        }
        const s = Promise.all(a), r = await s, i = [];
        let l = 0;
        for (const e of r){
            const a = {
                type: "put",
                request: n[l],
                response: e
            };
            i.push(a), l++;
        }
        const m = _();
        let c = null;
        try {
            this.#d(i);
        } catch (e) {
            c = e;
        }
        return queueMicrotask(()=>{
            null === c ? m.resolve(void 0) : m.reject(c);
        }), m.promise;
    }
    async put(e, a) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = d.converters.RequestInfo(e), a = d.converters.Response(a);
        let n = null;
        if (n = e instanceof p ? e[A] : new p(e)[A], !k(n.url) || "GET" !== n.method) throw d.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const t = a[A];
        if (206 === t.status) throw d.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (t.headersList.contains("vary")) {
            const e = o(t.headersList.get("vary"));
            for (const a of e)if ("*" === a) throw d.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (t.body && (i(t.body.stream) || t.body.stream.locked)) throw d.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = c(t), r = _();
        if (null != t.body) {
            const e = t.body.stream.getReader();
            E(e).then(r.resolve, r.reject);
        } else r.resolve(void 0);
        const l = [], m = {
            type: "put",
            request: n,
            response: s
        };
        l.push(m);
        const u = await r.promise;
        null != s.body && (s.body.source = u);
        const g = _();
        let T = null;
        try {
            this.#d(l);
        } catch (e) {
            T = e;
        }
        return queueMicrotask(()=>{
            null === T ? g.resolve() : g.reject(T);
        }), g.promise;
    }
    async delete(e, a = {}) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = d.converters.RequestInfo(e), a = d.converters.CacheQueryOptions(a);
        let n = null;
        if (e instanceof p) {
            if (n = e[A], "GET" !== n.method && !a.ignoreMethod) return !1;
        } else f("string" == typeof e), n = new p(e)[A];
        const t = [], s = {
            type: "delete",
            request: n,
            options: a
        };
        t.push(s);
        const o = _();
        let r, i = null;
        try {
            r = this.#d(t);
        } catch (e) {
            i = e;
        }
        return queueMicrotask(()=>{
            null === i ? o.resolve(!!r?.length) : o.reject(i);
        }), o.promise;
    }
    async keys(e = void 0, a = {}) {
        d.brandCheck(this, I), void 0 !== e && (e = d.converters.RequestInfo(e)), a = d.converters.CacheQueryOptions(a);
        let n = null;
        if (void 0 !== e) if (e instanceof p) {
            if (n = e[A], "GET" !== n.method && !a.ignoreMethod) return [];
        } else "string" == typeof e && (n = new p(e)[A]);
        const t = _(), s = [];
        if (void 0 === e) for (const e of this.#i)s.push(e[0]);
        else {
            const e = this.#l(n, a);
            for (const a of e)s.push(a[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const a of s){
                const n = new p("https://a");
                n[A] = a, n[u][l] = a.headersList, n[u][g] = "immutable", n[T] = a.client, e.push(n);
            }
            t.resolve(Object.freeze(e));
        }), t.promise;
    }
    #d(e) {
        const a = this.#i, n = [
            ...a
        ], t = [], s = [];
        try {
            for (const n of e){
                if ("delete" !== n.type && "put" !== n.type) throw d.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === n.type && null != n.response) throw d.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#l(n.request, n.options, t).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === n.type) {
                    if (e = this.#l(n.request, n.options), 0 === e.length) return [];
                    for (const n of e){
                        const e = a.indexOf(n);
                        f(-1 !== e), a.splice(e, 1);
                    }
                } else if ("put" === n.type) {
                    if (null == n.response) throw d.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = n.request;
                    if (!k(s.url)) throw d.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw d.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != n.options) throw d.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#l(n.request);
                    for (const n of e){
                        const e = a.indexOf(n);
                        f(-1 !== e), a.splice(e, 1);
                    }
                    a.push([
                        n.request,
                        n.response
                    ]), t.push([
                        n.request,
                        n.response
                    ]);
                }
                s.push([
                    n.request,
                    n.response
                ]);
            }
            return s;
        } catch (e) {
            throw this.#i.length = 0, this.#i = n, e;
        }
    }
    #l(e, a, n) {
        const t = [], s = n ?? this.#i;
        for (const n of s){
            const [s, o] = n;
            this.#m(e, s, o, a) && t.push(n);
        }
        return t;
    }
    #m(e, a, n = null, t) {
        const r = new URL(e.url), i = new URL(a.url);
        if (t?.ignoreSearch && (i.search = "", r.search = ""), !s(r, i, !0)) return !1;
        if (null == n || t?.ignoreVary || !n.headersList.contains("vary")) return !0;
        const l = o(n.headersList.get("vary"));
        for (const n of l){
            if ("*" === n) return !1;
            if (a.headersList.get(n) !== e.headersList.get(n)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(I.prototype, {
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
const v = [
    {
        key: "ignoreSearch",
        converter: d.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: d.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: d.converters.boolean,
        defaultValue: !1
    }
];
d.converters.CacheQueryOptions = d.dictionaryConverter(v), d.converters.MultiCacheQueryOptions = d.dictionaryConverter([
    ...v,
    {
        key: "cacheName",
        converter: d.converters.DOMString
    }
]), d.converters.Response = d.interfaceConverter(m), d.converters["sequence<RequestInfo>"] = d.sequenceConverter(d.converters.RequestInfo), module.exports = {
    Cache: I
};
