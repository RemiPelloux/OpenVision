"use strict";
const { kConstruct: r } = require("./module-71716.js"), { urlEquals: s, getFieldValues: o } = require("./module-13709.js"), { kEnumerableProperty: n, isDisturbed: i } = require("./module-55201.js"), { webidl: a } = require("./module-43290.js"), { Response: Q, cloneResponse: g, fromInnerResponse: E } = require("./module-54768.js"), { Request: B, fromInnerRequest: c } = require("./module-78078.js"), { kState: I } = require("./module-15978.js"), { fetching: C } = require("./module-75319.js"), { urlIsHttpHttpsScheme: h, createDeferredPromise: l, readAllBytes: u } = require("./module-48215.js"), d = require(56970);
class f {
    #gA;
    constructor(){
        arguments[0] !== r && a.illegalConstructor(), a.util.markAsUncloneable(this), this.#gA = arguments[1];
    }
    async match(A, e = {}) {
        a.brandCheck(this, f);
        const t = "Cache.match";
        a.argumentLengthCheck(arguments, 1, t), A = a.converters.RequestInfo(A, t, "request"), e = a.converters.CacheQueryOptions(e, t, "options");
        const r = this.#EA(A, e, 1);
        if (0 !== r.length) return r[0];
    }
    async matchAll(A = void 0, e = {}) {
        a.brandCheck(this, f);
        const t = "Cache.matchAll";
        return void 0 !== A && (A = a.converters.RequestInfo(A, t, "request")), e = a.converters.CacheQueryOptions(e, t, "options"), this.#EA(A, e);
    }
    async add(A) {
        a.brandCheck(this, f);
        const e = "Cache.add";
        a.argumentLengthCheck(arguments, 1, e);
        const t = [
            A = a.converters.RequestInfo(A, e, "request")
        ], r = this.addAll(t);
        return await r;
    }
    async addAll(A) {
        a.brandCheck(this, f);
        const e = "Cache.addAll";
        a.argumentLengthCheck(arguments, 1, e);
        const t = [], r = [];
        for (let t of A){
            if (void 0 === t) throw a.errors.conversionFailed({
                prefix: e,
                argument: "Argument 1",
                types: [
                    "undefined is not allowed"
                ]
            });
            if (t = a.converters.RequestInfo(t), "string" == typeof t) continue;
            const A = t[I];
            if (!h(A.url) || "GET" !== A.method) throw a.errors.exception({
                header: e,
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const s = [];
        for (const n of A){
            const A = new B(n)[I];
            if (!h(A.url)) throw a.errors.exception({
                header: e,
                message: "Expected http/s scheme."
            });
            A.initiator = "fetch", A.destination = "subresource", r.push(A);
            const i = l();
            s.push(C({
                request: A,
                processResponse (A) {
                    if ("error" === A.type || 206 === A.status || A.status < 200 || A.status > 299) i.reject(a.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (A.headersList.contains("vary")) {
                        const e = o(A.headersList.get("vary"));
                        for (const A of e)if ("*" === A) {
                            i.reject(a.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const A of s)A.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (A) {
                    A.aborted ? i.reject(new DOMException("aborted", "AbortError")) : i.resolve(A);
                }
            })), t.push(i.promise);
        }
        const n = Promise.all(t), i = await n, Q = [];
        let g = 0;
        for (const A of i){
            const e = {
                type: "put",
                request: r[g],
                response: A
            };
            Q.push(e), g++;
        }
        const E = l();
        let c = null;
        try {
            this.#BA(Q);
        } catch (A) {
            c = A;
        }
        return queueMicrotask(()=>{
            null === c ? E.resolve(void 0) : E.reject(c);
        }), E.promise;
    }
    async put(A, e) {
        a.brandCheck(this, f);
        const t = "Cache.put";
        a.argumentLengthCheck(arguments, 2, t), A = a.converters.RequestInfo(A, t, "request"), e = a.converters.Response(e, t, "response");
        let r = null;
        if (r = A instanceof B ? A[I] : new B(A)[I], !h(r.url) || "GET" !== r.method) throw a.errors.exception({
            header: t,
            message: "Expected an http/s scheme when method is not GET"
        });
        const s = e[I];
        if (206 === s.status) throw a.errors.exception({
            header: t,
            message: "Got 206 status"
        });
        if (s.headersList.contains("vary")) {
            const A = o(s.headersList.get("vary"));
            for (const e of A)if ("*" === e) throw a.errors.exception({
                header: t,
                message: "Got * vary field value"
            });
        }
        if (s.body && (i(s.body.stream) || s.body.stream.locked)) throw a.errors.exception({
            header: t,
            message: "Response body is locked or disturbed"
        });
        const n = g(s), Q = l();
        if (null != s.body) {
            const A = s.body.stream.getReader();
            u(A).then(Q.resolve, Q.reject);
        } else Q.resolve(void 0);
        const E = [], c = {
            type: "put",
            request: r,
            response: n
        };
        E.push(c);
        const C = await Q.promise;
        null != n.body && (n.body.source = C);
        const d = l();
        let w = null;
        try {
            this.#BA(E);
        } catch (A) {
            w = A;
        }
        return queueMicrotask(()=>{
            null === w ? d.resolve() : d.reject(w);
        }), d.promise;
    }
    async delete(A, e = {}) {
        a.brandCheck(this, f);
        const t = "Cache.delete";
        a.argumentLengthCheck(arguments, 1, t), A = a.converters.RequestInfo(A, t, "request"), e = a.converters.CacheQueryOptions(e, t, "options");
        let r = null;
        if (A instanceof B) {
            if (r = A[I], "GET" !== r.method && !e.ignoreMethod) return !1;
        } else d("string" == typeof A), r = new B(A)[I];
        const s = [], o = {
            type: "delete",
            request: r,
            options: e
        };
        s.push(o);
        const n = l();
        let i, Q = null;
        try {
            i = this.#BA(s);
        } catch (A) {
            Q = A;
        }
        return queueMicrotask(()=>{
            null === Q ? n.resolve(!!i?.length) : n.reject(Q);
        }), n.promise;
    }
    async keys(A = void 0, e = {}) {
        a.brandCheck(this, f);
        const t = "Cache.keys";
        void 0 !== A && (A = a.converters.RequestInfo(A, t, "request")), e = a.converters.CacheQueryOptions(e, t, "options");
        let r = null;
        if (void 0 !== A) if (A instanceof B) {
            if (r = A[I], "GET" !== r.method && !e.ignoreMethod) return [];
        } else "string" == typeof A && (r = new B(A)[I]);
        const s = l(), o = [];
        if (void 0 === A) for (const A of this.#gA)o.push(A[0]);
        else {
            const A = this.#cA(r, e);
            for (const e of A)o.push(e[0]);
        }
        return queueMicrotask(()=>{
            const A = [];
            for (const e of o){
                const t = c(e, (new AbortController).signal, "immutable");
                A.push(t);
            }
            s.resolve(Object.freeze(A));
        }), s.promise;
    }
    #BA(A) {
        const e = this.#gA, t = [
            ...e
        ], r = [], s = [];
        try {
            for (const t of A){
                if ("delete" !== t.type && "put" !== t.type) throw a.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === t.type && null != t.response) throw a.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#cA(t.request, t.options, r).length) throw new DOMException("???", "InvalidStateError");
                let A;
                if ("delete" === t.type) {
                    if (A = this.#cA(t.request, t.options), 0 === A.length) return [];
                    for (const t of A){
                        const A = e.indexOf(t);
                        d(-1 !== A), e.splice(A, 1);
                    }
                } else if ("put" === t.type) {
                    if (null == t.response) throw a.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = t.request;
                    if (!h(s.url)) throw a.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw a.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != t.options) throw a.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    A = this.#cA(t.request);
                    for (const t of A){
                        const A = e.indexOf(t);
                        d(-1 !== A), e.splice(A, 1);
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
            throw this.#gA.length = 0, this.#gA = t, A;
        }
    }
    #cA(A, e, t) {
        const r = [], s = t ?? this.#gA;
        for (const t of s){
            const [s, o] = t;
            this.#IA(A, s, o, e) && r.push(t);
        }
        return r;
    }
    #IA(A, e, t = null, r) {
        const n = new URL(A.url), i = new URL(e.url);
        if (r?.ignoreSearch && (i.search = "", n.search = ""), !s(n, i, !0)) return !1;
        if (null == t || r?.ignoreVary || !t.headersList.contains("vary")) return !0;
        const a = o(t.headersList.get("vary"));
        for (const t of a){
            if ("*" === t) return !1;
            if (e.headersList.get(t) !== A.headersList.get(t)) return !1;
        }
        return !0;
    }
    #EA(A, e, t = 1 / 0) {
        let r = null;
        if (void 0 !== A) if (A instanceof B) {
            if (r = A[I], "GET" !== r.method && !e.ignoreMethod) return [];
        } else "string" == typeof A && (r = new B(A)[I]);
        const s = [];
        if (void 0 === A) for (const A of this.#gA)s.push(A[1]);
        else {
            const A = this.#cA(r, e);
            for (const e of A)s.push(e[1]);
        }
        const o = [];
        for (const A of s){
            const e = E(A, "immutable");
            if (o.push(e.clone()), o.length >= t) break;
        }
        return Object.freeze(o);
    }
}
Object.defineProperties(f.prototype, {
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
        converter: a.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "ignoreMethod",
        converter: a.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "ignoreVary",
        converter: a.converters.boolean,
        defaultValue: ()=>!1
    }
];
a.converters.CacheQueryOptions = a.dictionaryConverter(w), a.converters.MultiCacheQueryOptions = a.dictionaryConverter([
    ...w,
    {
        key: "cacheName",
        converter: a.converters.DOMString
    }
]), a.converters.Response = a.interfaceConverter(Q), a.converters["sequence<RequestInfo>"] = a.sequenceConverter(a.converters.RequestInfo), module.exports = {
    Cache: f
};
