"use strict";
const { kConstruct: n } = require("./module-17945.js"), { urlEquals: s, fieldValues: o } = require("./module-79442.js"), { kEnumerableProperty: i, isDisturbed: a } = require("./module-83589.js"), { kHeadersList: c } = require("./module-15532.js"), { webidl: l } = require("./module-18193.js"), { Response: u, cloneResponse: d } = require("./module-53511.js"), { Request: p } = require("./module-30547.js"), { kState: m, kHeaders: h, kGuard: f, kRealm: g } = require("./module-77271.js"), { fetching: y } = require("./module-93914.js"), { urlIsHttpHttpsScheme: w, createDeferredPromise: v, readAllBytes: _ } = require("./module-98116.js"), A = require("./module-42613.js"), { getGlobalDispatcher: S } = require("./module-17582.js");
class b {
    #Q;
    constructor(){
        arguments[0] !== n && l.illegalConstructor(), this.#Q = arguments[1];
    }
    async match(e, t = {}) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = l.converters.RequestInfo(e), t = l.converters.CacheQueryOptions(t);
        const r = await this.matchAll(e, t);
        if (0 !== r.length) return r[0];
    }
    async matchAll(e = void 0, t = {}) {
        l.brandCheck(this, b), void 0 !== e && (e = l.converters.RequestInfo(e)), t = l.converters.CacheQueryOptions(t);
        let r = null;
        if (void 0 !== e) if (e instanceof p) {
            if (r = e[m], "GET" !== r.method && !t.ignoreMethod) return [];
        } else "string" == typeof e && (r = new p(e)[m]);
        const n = [];
        if (void 0 === e) for (const e of this.#Q)n.push(e[1]);
        else {
            const e = this.#j(r, t);
            for (const t of e)n.push(t[1]);
        }
        const s = [];
        for (const e of n){
            const t = new u(e.body?.source ?? null), r = t[m].body;
            t[m] = e, t[m].body = r, t[h][c] = e.headersList, t[h][f] = "immutable", s.push(t);
        }
        return Object.freeze(s);
    }
    async add(e) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const t = [
            e = l.converters.RequestInfo(e)
        ], r = this.addAll(t);
        return await r;
    }
    async addAll(e) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = l.converters["sequence<RequestInfo>"](e);
        const t = [], r = [];
        for (const t of e){
            if ("string" == typeof t) continue;
            const e = t[m];
            if (!w(e.url) || "GET" !== e.method) throw l.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const n = [];
        for (const s of e){
            const e = new p(s)[m];
            if (!w(e.url)) throw l.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", r.push(e);
            const i = v();
            n.push(y({
                request: e,
                dispatcher: S(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) i.reject(l.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const t = o(e.headersList.get("vary"));
                        for (const e of t)if ("*" === e) {
                            i.reject(l.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const e of n)e.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (e) {
                    e.aborted ? i.reject(new DOMException("aborted", "AbortError")) : i.resolve(e);
                }
            })), t.push(i.promise);
        }
        const s = Promise.all(t), i = await s, a = [];
        let c = 0;
        for (const e of i){
            const t = {
                type: "put",
                request: r[c],
                response: e
            };
            a.push(t), c++;
        }
        const u = v();
        let d = null;
        try {
            this.#G(a);
        } catch (e) {
            d = e;
        }
        return queueMicrotask(()=>{
            null === d ? u.resolve(void 0) : u.reject(d);
        }), u.promise;
    }
    async put(e, t) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = l.converters.RequestInfo(e), t = l.converters.Response(t);
        let r = null;
        if (r = e instanceof p ? e[m] : new p(e)[m], !w(r.url) || "GET" !== r.method) throw l.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const n = t[m];
        if (206 === n.status) throw l.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (n.headersList.contains("vary")) {
            const e = o(n.headersList.get("vary"));
            for (const t of e)if ("*" === t) throw l.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (n.body && (a(n.body.stream) || n.body.stream.locked)) throw l.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = d(n), i = v();
        if (null != n.body) {
            const e = n.body.stream.getReader();
            _(e).then(i.resolve, i.reject);
        } else i.resolve(void 0);
        const c = [], u = {
            type: "put",
            request: r,
            response: s
        };
        c.push(u);
        const h = await i.promise;
        null != s.body && (s.body.source = h);
        const f = v();
        let g = null;
        try {
            this.#G(c);
        } catch (e) {
            g = e;
        }
        return queueMicrotask(()=>{
            null === g ? f.resolve() : f.reject(g);
        }), f.promise;
    }
    async delete(e, t = {}) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = l.converters.RequestInfo(e), t = l.converters.CacheQueryOptions(t);
        let r = null;
        if (e instanceof p) {
            if (r = e[m], "GET" !== r.method && !t.ignoreMethod) return !1;
        } else A("string" == typeof e), r = new p(e)[m];
        const n = [], s = {
            type: "delete",
            request: r,
            options: t
        };
        n.push(s);
        const o = v();
        let i, a = null;
        try {
            i = this.#G(n);
        } catch (e) {
            a = e;
        }
        return queueMicrotask(()=>{
            null === a ? o.resolve(!!i?.length) : o.reject(a);
        }), o.promise;
    }
    async keys(e = void 0, t = {}) {
        l.brandCheck(this, b), void 0 !== e && (e = l.converters.RequestInfo(e)), t = l.converters.CacheQueryOptions(t);
        let r = null;
        if (void 0 !== e) if (e instanceof p) {
            if (r = e[m], "GET" !== r.method && !t.ignoreMethod) return [];
        } else "string" == typeof e && (r = new p(e)[m]);
        const n = v(), s = [];
        if (void 0 === e) for (const e of this.#Q)s.push(e[0]);
        else {
            const e = this.#j(r, t);
            for (const t of e)s.push(t[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const t of s){
                const r = new p("https://a");
                r[m] = t, r[h][c] = t.headersList, r[h][f] = "immutable", r[g] = t.client, e.push(r);
            }
            n.resolve(Object.freeze(e));
        }), n.promise;
    }
    #G(e) {
        const t = this.#Q, r = [
            ...t
        ], n = [], s = [];
        try {
            for (const r of e){
                if ("delete" !== r.type && "put" !== r.type) throw l.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === r.type && null != r.response) throw l.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#j(r.request, r.options, n).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === r.type) {
                    if (e = this.#j(r.request, r.options), 0 === e.length) return [];
                    for (const r of e){
                        const e = t.indexOf(r);
                        A(-1 !== e), t.splice(e, 1);
                    }
                } else if ("put" === r.type) {
                    if (null == r.response) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = r.request;
                    if (!w(s.url)) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != r.options) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#j(r.request);
                    for (const r of e){
                        const e = t.indexOf(r);
                        A(-1 !== e), t.splice(e, 1);
                    }
                    t.push([
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
        } catch (e) {
            throw this.#Q.length = 0, this.#Q = r, e;
        }
    }
    #j(e, t, r) {
        const n = [], s = r ?? this.#Q;
        for (const r of s){
            const [s, o] = r;
            this.#H(e, s, o, t) && n.push(r);
        }
        return n;
    }
    #H(e, t, r = null, n) {
        const i = new URL(e.url), a = new URL(t.url);
        if (n?.ignoreSearch && (a.search = "", i.search = ""), !s(i, a, !0)) return !1;
        if (null == r || n?.ignoreVary || !r.headersList.contains("vary")) return !0;
        const c = o(r.headersList.get("vary"));
        for (const r of c){
            if ("*" === r) return !1;
            if (t.headersList.get(r) !== e.headersList.get(r)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(b.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: i,
    matchAll: i,
    add: i,
    addAll: i,
    put: i,
    delete: i,
    keys: i
});
const E = [
    {
        key: "ignoreSearch",
        converter: l.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: l.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: l.converters.boolean,
        defaultValue: !1
    }
];
l.converters.CacheQueryOptions = l.dictionaryConverter(E), l.converters.MultiCacheQueryOptions = l.dictionaryConverter([
    ...E,
    {
        key: "cacheName",
        converter: l.converters.DOMString
    }
]), l.converters.Response = l.interfaceConverter(u), l.converters["sequence<RequestInfo>"] = l.sequenceConverter(l.converters.RequestInfo), module.exports = {
    Cache: b
};
