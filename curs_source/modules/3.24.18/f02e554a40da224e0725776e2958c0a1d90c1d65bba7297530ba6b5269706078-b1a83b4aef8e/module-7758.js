"use strict";
const { kConstruct: n } = require("./module-7945.js"), { urlEquals: s, fieldValues: i } = require("./module-9442.js"), { kEnumerableProperty: o, isDisturbed: a } = require("./module-3589.js"), { kHeadersList: u } = require("./module-5532.js"), { webidl: c } = require("./module-8193.js"), { Response: l, cloneResponse: m } = require("./module-3511.js"), { Request: d } = require("./module-547.js"), { kState: f, kHeaders: p, kGuard: h, kRealm: g } = require("./module-7271.js"), { fetching: A } = require("./module-3914.js"), { urlIsHttpHttpsScheme: _, createDeferredPromise: y, readAllBytes: w } = require("./module-8116.js"), S = require("./module-2613.js"), { getGlobalDispatcher: J } = require("./module-7582.js");
class B {
    #d;
    constructor(){
        arguments[0] !== n && c.illegalConstructor(), this.#d = arguments[1];
    }
    async match(t, e = {}) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), t = c.converters.RequestInfo(t), e = c.converters.CacheQueryOptions(e);
        const r = await this.matchAll(t, e);
        if (0 !== r.length) return r[0];
    }
    async matchAll(t = void 0, e = {}) {
        c.brandCheck(this, B), void 0 !== t && (t = c.converters.RequestInfo(t)), e = c.converters.CacheQueryOptions(e);
        let r = null;
        if (void 0 !== t) if (t instanceof d) {
            if (r = t[f], "GET" !== r.method && !e.ignoreMethod) return [];
        } else "string" == typeof t && (r = new d(t)[f]);
        const n = [];
        if (void 0 === t) for (const t of this.#d)n.push(t[1]);
        else {
            const t = this.#f(r, e);
            for (const e of t)n.push(e[1]);
        }
        const s = [];
        for (const t of n){
            const e = new l(t.body?.source ?? null), r = e[f].body;
            e[f] = t, e[f].body = r, e[p][u] = t.headersList, e[p][h] = "immutable", s.push(e);
        }
        return Object.freeze(s);
    }
    async add(t) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const e = [
            t = c.converters.RequestInfo(t)
        ], r = this.addAll(e);
        return await r;
    }
    async addAll(t) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), t = c.converters["sequence<RequestInfo>"](t);
        const e = [], r = [];
        for (const e of t){
            if ("string" == typeof e) continue;
            const t = e[f];
            if (!_(t.url) || "GET" !== t.method) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const n = [];
        for (const s of t){
            const t = new d(s)[f];
            if (!_(t.url)) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            t.initiator = "fetch", t.destination = "subresource", r.push(t);
            const o = y();
            n.push(A({
                request: t,
                dispatcher: J(),
                processResponse (t) {
                    if ("error" === t.type || 206 === t.status || t.status < 200 || t.status > 299) o.reject(c.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (t.headersList.contains("vary")) {
                        const e = i(t.headersList.get("vary"));
                        for (const t of e)if ("*" === t) {
                            o.reject(c.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const t of n)t.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (t) {
                    t.aborted ? o.reject(new DOMException("aborted", "AbortError")) : o.resolve(t);
                }
            })), e.push(o.promise);
        }
        const s = Promise.all(e), o = await s, a = [];
        let u = 0;
        for (const t of o){
            const e = {
                type: "put",
                request: r[u],
                response: t
            };
            a.push(e), u++;
        }
        const l = y();
        let m = null;
        try {
            this.#p(a);
        } catch (t) {
            m = t;
        }
        return queueMicrotask(()=>{
            null === m ? l.resolve(void 0) : l.reject(m);
        }), l.promise;
    }
    async put(t, e) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), t = c.converters.RequestInfo(t), e = c.converters.Response(e);
        let r = null;
        if (r = t instanceof d ? t[f] : new d(t)[f], !_(r.url) || "GET" !== r.method) throw c.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const n = e[f];
        if (206 === n.status) throw c.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (n.headersList.contains("vary")) {
            const t = i(n.headersList.get("vary"));
            for (const e of t)if ("*" === e) throw c.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (n.body && (a(n.body.stream) || n.body.stream.locked)) throw c.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = m(n), o = y();
        if (null != n.body) {
            const t = n.body.stream.getReader();
            w(t).then(o.resolve, o.reject);
        } else o.resolve(void 0);
        const u = [], l = {
            type: "put",
            request: r,
            response: s
        };
        u.push(l);
        const p = await o.promise;
        null != s.body && (s.body.source = p);
        const h = y();
        let g = null;
        try {
            this.#p(u);
        } catch (t) {
            g = t;
        }
        return queueMicrotask(()=>{
            null === g ? h.resolve() : h.reject(g);
        }), h.promise;
    }
    async delete(t, e = {}) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), t = c.converters.RequestInfo(t), e = c.converters.CacheQueryOptions(e);
        let r = null;
        if (t instanceof d) {
            if (r = t[f], "GET" !== r.method && !e.ignoreMethod) return !1;
        } else S("string" == typeof t), r = new d(t)[f];
        const n = [], s = {
            type: "delete",
            request: r,
            options: e
        };
        n.push(s);
        const i = y();
        let o, a = null;
        try {
            o = this.#p(n);
        } catch (t) {
            a = t;
        }
        return queueMicrotask(()=>{
            null === a ? i.resolve(!!o?.length) : i.reject(a);
        }), i.promise;
    }
    async keys(t = void 0, e = {}) {
        c.brandCheck(this, B), void 0 !== t && (t = c.converters.RequestInfo(t)), e = c.converters.CacheQueryOptions(e);
        let r = null;
        if (void 0 !== t) if (t instanceof d) {
            if (r = t[f], "GET" !== r.method && !e.ignoreMethod) return [];
        } else "string" == typeof t && (r = new d(t)[f]);
        const n = y(), s = [];
        if (void 0 === t) for (const t of this.#d)s.push(t[0]);
        else {
            const t = this.#f(r, e);
            for (const e of t)s.push(e[0]);
        }
        return queueMicrotask(()=>{
            const t = [];
            for (const e of s){
                const r = new d("https://a");
                r[f] = e, r[p][u] = e.headersList, r[p][h] = "immutable", r[g] = e.client, t.push(r);
            }
            n.resolve(Object.freeze(t));
        }), n.promise;
    }
    #p(t) {
        const e = this.#d, r = [
            ...e
        ], n = [], s = [];
        try {
            for (const r of t){
                if ("delete" !== r.type && "put" !== r.type) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === r.type && null != r.response) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#f(r.request, r.options, n).length) throw new DOMException("???", "InvalidStateError");
                let t;
                if ("delete" === r.type) {
                    if (t = this.#f(r.request, r.options), 0 === t.length) return [];
                    for (const r of t){
                        const t = e.indexOf(r);
                        S(-1 !== t), e.splice(t, 1);
                    }
                } else if ("put" === r.type) {
                    if (null == r.response) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = r.request;
                    if (!_(s.url)) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != r.options) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    t = this.#f(r.request);
                    for (const r of t){
                        const t = e.indexOf(r);
                        S(-1 !== t), e.splice(t, 1);
                    }
                    e.push([
                        r.request,
                        r.response
                    ]), n.push([
                        r.request,
                        r.response
                    ]);
                }
                s.push([
                    r.request,
                    r.response
                ]);
            }
            return s;
        } catch (t) {
            throw this.#d.length = 0, this.#d = r, t;
        }
    }
    #f(t, e, r) {
        const n = [], s = r ?? this.#d;
        for (const r of s){
            const [s, i] = r;
            this.#h(t, s, i, e) && n.push(r);
        }
        return n;
    }
    #h(t, e, r = null, n) {
        const o = new URL(t.url), a = new URL(e.url);
        if (n?.ignoreSearch && (a.search = "", o.search = ""), !s(o, a, !0)) return !1;
        if (null == r || n?.ignoreVary || !r.headersList.contains("vary")) return !0;
        const u = i(r.headersList.get("vary"));
        for (const r of u){
            if ("*" === r) return !1;
            if (e.headersList.get(r) !== t.headersList.get(r)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(B.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: o,
    matchAll: o,
    add: o,
    addAll: o,
    put: o,
    delete: o,
    keys: o
});
const E = [
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
c.converters.CacheQueryOptions = c.dictionaryConverter(E), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([
    ...E,
    {
        key: "cacheName",
        converter: c.converters.DOMString
    }
]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), module.exports = {
    Cache: B
};
