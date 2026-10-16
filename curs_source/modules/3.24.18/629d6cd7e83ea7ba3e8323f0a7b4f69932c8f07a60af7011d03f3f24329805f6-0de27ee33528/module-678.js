"use strict";
const { getResponseData: r, buildKey: s, addMockDispatch: o } = require("./module-61452.js"), { kDispatches: n, kDispatchKey: i, kDefaultHeaders: a, kDefaultTrailers: Q, kContentLength: g, kMockDispatch: E } = require("./module-53304.js"), { InvalidArgumentError: B } = require("./module-38238.js"), { buildURL: c } = require("./module-55201.js");
class I {
    constructor(A){
        this[E] = A;
    }
    delay(A) {
        if ("number" != typeof A || !Number.isInteger(A) || A <= 0) throw new B("waitInMs must be a valid integer > 0");
        return this[E].delay = A, this;
    }
    persist() {
        return this[E].persist = !0, this;
    }
    times(A) {
        if ("number" != typeof A || !Number.isInteger(A) || A <= 0) throw new B("repeatTimes must be a valid integer > 0");
        return this[E].times = A, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(A, e){
        if ("object" != typeof A) throw new B("opts must be an object");
        if (void 0 === A.path) throw new B("opts.path must be defined");
        if (void 0 === A.method && (A.method = "GET"), "string" == typeof A.path) if (A.query) A.path = c(A.path, A.query);
        else {
            const e = new URL(A.path, "data://");
            A.path = e.pathname + e.search;
        }
        "string" == typeof A.method && (A.method = A.method.toUpperCase()), this[i] = s(A), this[n] = e, this[a] = {}, this[Q] = {}, this[g] = !1;
    }
    createMockScopeDispatchData({ statusCode: A, data: e, responseOptions: t }) {
        const s = r(e), o = this[g] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: A,
            data: e,
            headers: {
                ...this[a],
                ...o,
                ...t.headers
            },
            trailers: {
                ...this[Q],
                ...t.trailers
            }
        };
    }
    validateReplyParameters(A) {
        if (void 0 === A.statusCode) throw new B("statusCode must be defined");
        if ("object" != typeof A.responseOptions || null === A.responseOptions) throw new B("responseOptions must be an object");
    }
    reply(A) {
        if ("function" == typeof A) {
            const e = (e)=>{
                const t = A(e);
                if ("object" != typeof t || null === t) throw new B("reply options callback must return an object");
                const r = {
                    data: "",
                    responseOptions: {},
                    ...t
                };
                return this.validateReplyParameters(r), {
                    ...this.createMockScopeDispatchData(r)
                };
            }, t = o(this[n], this[i], e);
            return new I(t);
        }
        const e = {
            statusCode: A,
            data: void 0 === arguments[1] ? "" : arguments[1],
            responseOptions: void 0 === arguments[2] ? {} : arguments[2]
        };
        this.validateReplyParameters(e);
        const t = this.createMockScopeDispatchData(e), r = o(this[n], this[i], t);
        return new I(r);
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
        return this[a] = A, this;
    }
    defaultReplyTrailers(A) {
        if (void 0 === A) throw new B("trailers must be defined");
        return this[Q] = A, this;
    }
    replyContentLength() {
        return this[g] = !0, this;
    }
}, module.exports.MockScope = I;
