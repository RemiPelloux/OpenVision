"use strict";
const { getResponseData: n, buildKey: r, addMockDispatch: o } = require("./module-76.js"), { kDispatches: s, kDispatchKey: a, kDefaultHeaders: i, kDefaultTrailers: c, kContentLength: l, kMockDispatch: g } = require("./module-3192.js"), { InvalidArgumentError: E } = require("./module-7902.js"), { buildURL: u } = require("./module-9361.js");
class d {
    constructor(e){
        this[g] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new E("waitInMs must be a valid integer > 0");
        return this[g].delay = e, this;
    }
    persist() {
        return this[g].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new E("repeatTimes must be a valid integer > 0");
        return this[g].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, A){
        if ("object" != typeof e) throw new E("opts must be an object");
        if (void 0 === e.path) throw new E("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = u(e.path, e.query);
        else {
            const A = new URL(e.path, "data://");
            e.path = A.pathname + A.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[a] = r(e), this[s] = A, this[i] = {}, this[c] = {}, this[l] = !1;
    }
    createMockScopeDispatchData(e, A, t = {}) {
        const r = n(A), o = this[l] ? {
            "content-length": r.length
        } : {};
        return {
            statusCode: e,
            data: A,
            headers: {
                ...this[i],
                ...o,
                ...t.headers
            },
            trailers: {
                ...this[c],
                ...t.trailers
            }
        };
    }
    validateReplyParameters(e, A, t) {
        if (void 0 === e) throw new E("statusCode must be defined");
        if (void 0 === A) throw new E("data must be defined");
        if ("object" != typeof t) throw new E("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const A = (A)=>{
                const t = e(A);
                if ("object" != typeof t) throw new E("reply options callback must return an object");
                const { statusCode: n, data: r = "", responseOptions: o = {} } = t;
                return this.validateReplyParameters(n, r, o), {
                    ...this.createMockScopeDispatchData(n, r, o)
                };
            }, t = o(this[s], this[a], A);
            return new d(t);
        }
        const [A, t = "", n = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(A, t, n);
        const r = this.createMockScopeDispatchData(A, t, n), i = o(this[s], this[a], r);
        return new d(i);
    }
    replyWithError(e) {
        if (void 0 === e) throw new E("error must be defined");
        const A = o(this[s], this[a], {
            error: e
        });
        return new d(A);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new E("headers must be defined");
        return this[i] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new E("trailers must be defined");
        return this[c] = e, this;
    }
    replyContentLength() {
        return this[l] = !0, this;
    }
}, module.exports.MockScope = d;
