"use strict";
const { getResponseData: n, buildKey: r, addMockDispatch: o } = require("./module-76.js"), { kDispatches: s, kDispatchKey: i, kDefaultHeaders: a, kDefaultTrailers: c, kContentLength: l, kMockDispatch: u } = require("./module-3192.js"), { InvalidArgumentError: g } = require("./module-7902.js"), { buildURL: E } = require("./module-9361.js");
class h {
    constructor(e){
        this[u] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new g("waitInMs must be a valid integer > 0");
        return this[u].delay = e, this;
    }
    persist() {
        return this[u].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new g("repeatTimes must be a valid integer > 0");
        return this[u].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, t){
        if ("object" != typeof e) throw new g("opts must be an object");
        if (void 0 === e.path) throw new g("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = E(e.path, e.query);
        else {
            const t = new URL(e.path, "data://");
            e.path = t.pathname + t.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[i] = r(e), this[s] = t, this[a] = {}, this[c] = {}, this[l] = !1;
    }
    createMockScopeDispatchData(e, t, A = {}) {
        const r = n(t), o = this[l] ? {
            "content-length": r.length
        } : {};
        return {
            statusCode: e,
            data: t,
            headers: {
                ...this[a],
                ...o,
                ...A.headers
            },
            trailers: {
                ...this[c],
                ...A.trailers
            }
        };
    }
    validateReplyParameters(e, t, A) {
        if (void 0 === e) throw new g("statusCode must be defined");
        if (void 0 === t) throw new g("data must be defined");
        if ("object" != typeof A) throw new g("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const t = (t)=>{
                const A = e(t);
                if ("object" != typeof A) throw new g("reply options callback must return an object");
                const { statusCode: n, data: r = "", responseOptions: o = {} } = A;
                return this.validateReplyParameters(n, r, o), {
                    ...this.createMockScopeDispatchData(n, r, o)
                };
            }, A = o(this[s], this[i], t);
            return new h(A);
        }
        const [t, A = "", n = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(t, A, n);
        const r = this.createMockScopeDispatchData(t, A, n), a = o(this[s], this[i], r);
        return new h(a);
    }
    replyWithError(e) {
        if (void 0 === e) throw new g("error must be defined");
        const t = o(this[s], this[i], {
            error: e
        });
        return new h(t);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new g("headers must be defined");
        return this[a] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new g("trailers must be defined");
        return this[c] = e, this;
    }
    replyContentLength() {
        return this[l] = !0, this;
    }
}, module.exports.MockScope = h;
