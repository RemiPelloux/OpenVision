"use strict";
const { kConstruct: r } = require("./module-62381.js"), { urlEquals: s, fieldValues: o } = require("./module-63006.js"), { kEnumerableProperty: n, isDisturbed: i } = require("./module-9361.js"), { kHeadersList: E } = require("./module-58832.js"), { webidl: Q } = require("./module-48005.js"), { Response: g, cloneResponse: C } = require("./module-61099.js"), { Request: B } = require("./module-52239.js"), { kState: a, kHeaders: I, kGuard: c, kRealm: h } = require("./module-35899.js"), { fetching: l } = require("./module-53406.js"), { urlIsHttpHttpsScheme: u, createDeferredPromise: d, readAllBytes: f } = require("./module-75728.js"), y = require(42613), { getGlobalDispatcher: D } = require("./module-37362.js");
class R {
    #B;
    constructor(){
        arguments[0] !== r && Q.illegalConstructor(), this.#B = arguments[1];
    }
    async match(A, e = {}) {
        Q.brandCheck(this, R), Q.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), A = Q.converters.RequestInfo(A), e = Q.converters.CacheQueryOptions(e);
        const t = await this.matchAll(A, e);
        if (0 !== t.length) return t[0];
    }
    async matchAll(A = void 0, e = {}) {
        Q.brandCheck(this, R), void 0 !== A && (A = Q.converters.RequestInfo(A)), e = Q.converters.CacheQueryOptions(e);
        let t = null;
        if (void 0 !== A) if (A instanceof B) {
            if (t = A[a], "GET" !== t.method && !e.ignoreMethod) return [];
        } else "string" == typeof A && (t = new B(A)[a]);
        const r = [];
        if (void 0 === A) for (const A of this.#B)r.push(A[1]);
        else {
            const A = this.#a(t, e);
            for (const e of A)r.push(e[1]);
        }
        const s = [];
        for (const A of r){
            const e = new g(A.body?.source ?? null), t = e[a].body;
            e[a] = A, e[a].body = t, e[I][E] = A.headersList, e[I][c] = "immutable", s.push(e);
        }
        return Object.freeze(s);
    }
    async add(A) {
        Q.brandCheck(this, R), Q.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const e = [
            A = Q.converters.RequestInfo(A)
        ], t = this.addAll(e);
        return await t;
    }
    async addAll(A) {
        Q.brandCheck(this, R), Q.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), A = Q.converters["sequence<RequestInfo>"](A);
        const e = [], t = [];
        for (const e of A){
            if ("string" == typeof e) continue;
            const A = e[a];
            if (!u(A.url) || "GET" !== A.method) throw Q.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const r = [];
        for (const s of A){
            const A = new B(s)[a];
            if (!u(A.url)) throw Q.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            A.initiator = "fetch", A.destination = "subresource", t.push(A);
            const n = d();
            r.push(l({
                request: A,
                dispatcher: D(),
                processResponse (A) {
                    if ("error" === A.type || 206 === A.status || A.status < 200 || A.status > 299) n.reject(Q.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (A.headersList.contains("vary")) {
                        const e = o(A.headersList.get("vary"));
                        for (const A of e)if ("*" === A) {
                            n.reject(Q.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const A of r)A.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (A) {
                    A.aborted ? n.reject(new DOMException("aborted", "AbortError")) : n.resolve(A);
                }
            })), e.push(n.promise);
        }
        const s = Promise.all(e), n = await s, i = [];
        let E = 0;
        for (const A of n){
            const e = {
                type: "put",
                request: t[E],
                response: A
            };
            i.push(e), E++;
        }
        const g = d();
        let C = null;
        try {
            this.#I(i);
        } catch (A) {
            C = A;
        }
        return queueMicrotask(()=>{
            null === C ? g.resolve(void 0) : g.reject(C);
        }), g.promise;
    }
    async put(A, e) {
        Q.brandCheck(this, R), Q.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), A = Q.converters.RequestInfo(A), e = Q.converters.Response(e);
        let t = null;
        if (t = A instanceof B ? A[a] : new B(A)[a], !u(t.url) || "GET" !== t.method) throw Q.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const r = e[a];
        if (206 === r.status) throw Q.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (r.headersList.contains("vary")) {
            const A = o(r.headersList.get("vary"));
            for (const e of A)if ("*" === e) throw Q.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (r.body && (i(r.body.stream) || r.body.stream.locked)) throw Q.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = C(r), n = d();
        if (null != r.body) {
            const A = r.body.stream.getReader();
            f(A).then(n.resolve, n.reject);
        } else n.resolve(void 0);
        const E = [], g = {
            type: "put",
            request: t,
            response: s
        };
        E.push(g);
        const I = await n.promise;
        null != s.body && (s.body.source = I);
        const c = d();
        let h = null;
        try {
            this.#I(E);
        } catch (A) {
            h = A;
        }
        return queueMicrotask(()=>{
            null === h ? c.resolve() : c.reject(h);
        }), c.promise;
    }
    async delete(A, e = {}) {
        Q.brandCheck(this, R), Q.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), A = Q.converters.RequestInfo(A), e = Q.converters.CacheQueryOptions(e);
        let t = null;
        if (A instanceof B) {
            if (t = A[a], "GET" !== t.method && !e.ignoreMethod) return !1;
        } else y("string" == typeof A), t = new B(A)[a];
        const r = [], s = {
            type: "delete",
            request: t,
            options: e
        };
        r.push(s);
        const o = d();
        let n, i = null;
        try {
            n = this.#I(r);
        } catch (A) {
            i = A;
        }
        return queueMicrotask(()=>{
            null === i ? o.resolve(!!n?.length) : o.reject(i);
        }), o.promise;
    }
    async keys(A = void 0, e = {}) {
        Q.brandCheck(this, R), void 0 !== A && (A = Q.converters.RequestInfo(A)), e = Q.converters.CacheQueryOptions(e);
        let t = null;
        if (void 0 !== A) if (A instanceof B) {
            if (t = A[a], "GET" !== t.method && !e.ignoreMethod) return [];
        } else "string" == typeof A && (t = new B(A)[a]);
        const r = d(), s = [];
        if (void 0 === A) for (const A of this.#B)s.push(A[0]);
        else {
            const A = this.#a(t, e);
            for (const e of A)s.push(e[0]);
        }
        return queueMicrotask(()=>{
            const A = [];
            for (const e of s){
                const t = new B("https://a");
                t[a] = e, t[I][E] = e.headersList, t[I][c] = "immutable", t[h] = e.client, A.push(t);
            }
            r.resolve(Object.freeze(A));
        }), r.promise;
    }
    #I(A) {
        const e = this.#B, t = [
            ...e
        ], r = [], s = [];
        try {
            for (const t of A){
                if ("delete" !== t.type && "put" !== t.type) throw Q.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === t.type && null != t.response) throw Q.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#a(t.request, t.options, r).length) throw new DOMException("???", "InvalidStateError");
                let A;
                if ("delete" === t.type) {
                    if (A = this.#a(t.request, t.options), 0 === A.length) return [];
                    for (const t of A){
                        const A = e.indexOf(t);
                        y(-1 !== A), e.splice(A, 1);
                    }
                } else if ("put" === t.type) {
                    if (null == t.response) throw Q.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = t.request;
                    if (!u(s.url)) throw Q.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw Q.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != t.options) throw Q.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    A = this.#a(t.request);
                    for (const t of A){
                        const A = e.indexOf(t);
                        y(-1 !== A), e.splice(A, 1);
                    }
                    e.push([
                        t.request,
                        t.response
                    ]), r.push([
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
        } catch (A) {
            throw this.#B.length = 0, this.#B = t, A;
        }
    }
    #a(A, e, t) {
        const r = [], s = t ?? this.#B;
        for (const t of s){
            const [s, o] = t;
            this.#c(A, s, o, e) && r.push(t);
        }
        return r;
    }
    #c(A, e, t = null, r) {
        const n = new URL(A.url), i = new URL(e.url);
        if (r?.ignoreSearch && (i.search = "", n.search = ""), !s(n, i, !0)) return !1;
        if (null == t || r?.ignoreVary || !t.headersList.contains("vary")) return !0;
        const E = o(t.headersList.get("vary"));
        for (const t of E){
            if ("*" === t) return !1;
            if (e.headersList.get(t) !== A.headersList.get(t)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(R.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: n,
    matchAll: n,
    add: n,
    addAll: n,
    put: n,
    delete: n,
    keys: n
});
const w = [
    {
        key: "ignoreSearch",
        converter: Q.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: Q.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: Q.converters.boolean,
        defaultValue: !1
    }
];
Q.converters.CacheQueryOptions = Q.dictionaryConverter(w), Q.converters.MultiCacheQueryOptions = Q.dictionaryConverter([
    ...w,
    {
        key: "cacheName",
        converter: Q.converters.DOMString
    }
]), Q.converters.Response = Q.interfaceConverter(g), Q.converters["sequence<RequestInfo>"] = Q.sequenceConverter(Q.converters.RequestInfo), module.exports = {
    Cache: R
};
