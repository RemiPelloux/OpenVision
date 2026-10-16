"use strict";
const { getResponseData: t, buildKey: s, addMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kDispatchKey: i, kDefaultHeaders: l, kDefaultTrailers: d, kContentLength: m, kMockDispatch: c } = require("./module-3192.js"), { InvalidArgumentError: p } = require("./module-7902.js"), { buildURL: A } = require("./module-9361.js");
class u {
    constructor(e){
        this[c] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new p("waitInMs must be a valid integer > 0");
        return this[c].delay = e, this;
    }
    persist() {
        return this[c].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new p("repeatTimes must be a valid integer > 0");
        return this[c].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, a){
        if ("object" != typeof e) throw new p("opts must be an object");
        if (void 0 === e.path) throw new p("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = A(e.path, e.query);
        else {
            const a = new URL(e.path, "data://");
            e.path = a.pathname + a.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[i] = s(e), this[r] = a, this[l] = {}, this[d] = {}, this[m] = !1;
    }
    createMockScopeDispatchData(e, a, n = {}) {
        const s = t(a), o = this[m] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: e,
            data: a,
            headers: {
                ...this[l],
                ...o,
                ...n.headers
            },
            trailers: {
                ...this[d],
                ...n.trailers
            }
        };
    }
    validateReplyParameters(e, a, n) {
        if (void 0 === e) throw new p("statusCode must be defined");
        if (void 0 === a) throw new p("data must be defined");
        if ("object" != typeof n) throw new p("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const a = (a)=>{
                const n = e(a);
                if ("object" != typeof n) throw new p("reply options callback must return an object");
                const { statusCode: t, data: s = "", responseOptions: o = {} } = n;
                return this.validateReplyParameters(t, s, o), {
                    ...this.createMockScopeDispatchData(t, s, o)
                };
            }, n = o(this[r], this[i], a);
            return new u(n);
        }
        const [a, n = "", t = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(a, n, t);
        const s = this.createMockScopeDispatchData(a, n, t), l = o(this[r], this[i], s);
        return new u(l);
    }
    replyWithError(e) {
        if (void 0 === e) throw new p("error must be defined");
        const a = o(this[r], this[i], {
            error: e
        });
        return new u(a);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new p("headers must be defined");
        return this[l] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new p("trailers must be defined");
        return this[d] = e, this;
    }
    replyContentLength() {
        return this[m] = !0, this;
    }
}, module.exports.MockScope = u;
