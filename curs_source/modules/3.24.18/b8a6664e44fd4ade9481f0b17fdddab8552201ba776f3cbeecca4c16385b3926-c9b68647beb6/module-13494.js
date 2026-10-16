"use strict";
const { getResponseData: r, buildKey: s, addMockDispatch: o } = require("./module-70076.js"), { kDispatches: n, kDispatchKey: i, kDefaultHeaders: E, kDefaultTrailers: Q, kContentLength: g, kMockDispatch: C } = require("./module-73192.js"), { InvalidArgumentError: B } = require("./module-95521.js"), { buildURL: a } = require("./module-9361.js");
class I {
    constructor(A){
        this[C] = A;
    }
    delay(A) {
        if ("number" != typeof A || !Number.isInteger(A) || A <= 0) throw new B("waitInMs must be a valid integer > 0");
        return this[C].delay = A, this;
    }
    persist() {
        return this[C].persist = !0, this;
    }
    times(A) {
        if ("number" != typeof A || !Number.isInteger(A) || A <= 0) throw new B("repeatTimes must be a valid integer > 0");
        return this[C].times = A, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(A, e){
        if ("object" != typeof A) throw new B("opts must be an object");
        if (void 0 === A.path) throw new B("opts.path must be defined");
        if (void 0 === A.method && (A.method = "GET"), "string" == typeof A.path) if (A.query) A.path = a(A.path, A.query);
        else {
            const e = new URL(A.path, "data://");
            A.path = e.pathname + e.search;
        }
        "string" == typeof A.method && (A.method = A.method.toUpperCase()), this[i] = s(A), this[n] = e, this[E] = {}, this[Q] = {}, this[g] = !1;
    }
    createMockScopeDispatchData(A, e, t = {}) {
        const s = r(e), o = this[g] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: A,
            data: e,
            headers: {
                ...this[E],
                ...o,
                ...t.headers
            },
            trailers: {
                ...this[Q],
                ...t.trailers
            }
        };
    }
    validateReplyParameters(A, e, t) {
        if (void 0 === A) throw new B("statusCode must be defined");
        if (void 0 === e) throw new B("data must be defined");
        if ("object" != typeof t) throw new B("responseOptions must be an object");
    }
    reply(A) {
        if ("function" == typeof A) {
            const e = (e)=>{
                const t = A(e);
                if ("object" != typeof t) throw new B("reply options callback must return an object");
                const { statusCode: r, data: s = "", responseOptions: o = {} } = t;
                return this.validateReplyParameters(r, s, o), {
                    ...this.createMockScopeDispatchData(r, s, o)
                };
            }, t = o(this[n], this[i], e);
            return new I(t);
        }
        const [e, t = "", r = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(e, t, r);
        const s = this.createMockScopeDispatchData(e, t, r), E = o(this[n], this[i], s);
        return new I(E);
    }
    replyWithError(A) {
        if (void 0 === A) throw new B("error must be defined");
        const e = o(this[n], this[i], {
            error: A
        });
        return new I(e);
    }
    defaultReplyHeaders(A) {
        if (void 0 === A) throw new B("headers must be defined");
        return this[E] = A, this;
    }
    defaultReplyTrailers(A) {
        if (void 0 === A) throw new B("trailers must be defined");
        return this[Q] = A, this;
    }
    replyContentLength() {
        return this[g] = !0, this;
    }
}, module.exports.MockScope = I;
