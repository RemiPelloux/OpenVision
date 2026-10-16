"use strict";
const { getResponseData: t, buildKey: s, addMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kDispatchKey: i, kDefaultHeaders: A, kDefaultTrailers: l, kContentLength: c, kMockDispatch: m } = require("./module-3192.js"), { InvalidArgumentError: d } = require("./module-7902.js"), { buildURL: g } = require("./module-9361.js");
class u {
    constructor(e){
        this[m] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new d("waitInMs must be a valid integer > 0");
        return this[m].delay = e, this;
    }
    persist() {
        return this[m].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new d("repeatTimes must be a valid integer > 0");
        return this[m].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, n){
        if ("object" != typeof e) throw new d("opts must be an object");
        if (void 0 === e.path) throw new d("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = g(e.path, e.query);
        else {
            const n = new URL(e.path, "data://");
            e.path = n.pathname + n.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[i] = s(e), this[r] = n, this[A] = {}, this[l] = {}, this[c] = !1;
    }
    createMockScopeDispatchData(e, n, a = {}) {
        const s = t(n), o = this[c] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: e,
            data: n,
            headers: {
                ...this[A],
                ...o,
                ...a.headers
            },
            trailers: {
                ...this[l],
                ...a.trailers
            }
        };
    }
    validateReplyParameters(e, n, a) {
        if (void 0 === e) throw new d("statusCode must be defined");
        if (void 0 === n) throw new d("data must be defined");
        if ("object" != typeof a) throw new d("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const n = (n)=>{
                const a = e(n);
                if ("object" != typeof a) throw new d("reply options callback must return an object");
                const { statusCode: t, data: s = "", responseOptions: o = {} } = a;
                return this.validateReplyParameters(t, s, o), {
                    ...this.createMockScopeDispatchData(t, s, o)
                };
            }, a = o(this[r], this[i], n);
            return new u(a);
        }
        const [n, a = "", t = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(n, a, t);
        const s = this.createMockScopeDispatchData(n, a, t), A = o(this[r], this[i], s);
        return new u(A);
    }
    replyWithError(e) {
        if (void 0 === e) throw new d("error must be defined");
        const n = o(this[r], this[i], {
            error: e
        });
        return new u(n);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new d("headers must be defined");
        return this[A] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new d("trailers must be defined");
        return this[l] = e, this;
    }
    replyContentLength() {
        return this[c] = !0, this;
    }
}, module.exports.MockScope = u;
