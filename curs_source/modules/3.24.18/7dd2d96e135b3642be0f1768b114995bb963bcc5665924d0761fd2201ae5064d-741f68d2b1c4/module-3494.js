"use strict";
const { getResponseData: a, buildKey: s, addMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kDispatchKey: i, kDefaultHeaders: A, kDefaultTrailers: c, kContentLength: l, kMockDispatch: d } = require("./module-3192.js"), { InvalidArgumentError: m } = require("./module-7902.js"), { buildURL: u } = require("./module-9361.js");
class g {
    constructor(e){
        this[d] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new m("waitInMs must be a valid integer > 0");
        return this[d].delay = e, this;
    }
    persist() {
        return this[d].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new m("repeatTimes must be a valid integer > 0");
        return this[d].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, n){
        if ("object" != typeof e) throw new m("opts must be an object");
        if (void 0 === e.path) throw new m("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = u(e.path, e.query);
        else {
            const n = new URL(e.path, "data://");
            e.path = n.pathname + n.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[i] = s(e), this[r] = n, this[A] = {}, this[c] = {}, this[l] = !1;
    }
    createMockScopeDispatchData(e, n, t = {}) {
        const s = a(n), o = this[l] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: e,
            data: n,
            headers: {
                ...this[A],
                ...o,
                ...t.headers
            },
            trailers: {
                ...this[c],
                ...t.trailers
            }
        };
    }
    validateReplyParameters(e, n, t) {
        if (void 0 === e) throw new m("statusCode must be defined");
        if (void 0 === n) throw new m("data must be defined");
        if ("object" != typeof t) throw new m("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const n = (n)=>{
                const t = e(n);
                if ("object" != typeof t) throw new m("reply options callback must return an object");
                const { statusCode: a, data: s = "", responseOptions: o = {} } = t;
                return this.validateReplyParameters(a, s, o), {
                    ...this.createMockScopeDispatchData(a, s, o)
                };
            }, t = o(this[r], this[i], n);
            return new g(t);
        }
        const [n, t = "", a = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(n, t, a);
        const s = this.createMockScopeDispatchData(n, t, a), A = o(this[r], this[i], s);
        return new g(A);
    }
    replyWithError(e) {
        if (void 0 === e) throw new m("error must be defined");
        const n = o(this[r], this[i], {
            error: e
        });
        return new g(n);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new m("headers must be defined");
        return this[A] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new m("trailers must be defined");
        return this[c] = e, this;
    }
    replyContentLength() {
        return this[l] = !0, this;
    }
}, module.exports.MockScope = g;
