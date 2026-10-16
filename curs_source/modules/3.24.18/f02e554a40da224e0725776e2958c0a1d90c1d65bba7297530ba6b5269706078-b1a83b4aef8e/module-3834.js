"use strict";
const { getResponseData: n, buildKey: s, addMockDispatch: i } = require("./module-4008.js"), { kDispatches: o, kDispatchKey: a, kDefaultHeaders: u, kDefaultTrailers: c, kContentLength: l, kMockDispatch: m } = require("./module-1476.js"), { InvalidArgumentError: d } = require("./module-8762.js"), { buildURL: f } = require("./module-3589.js");
class p {
    constructor(t){
        this[m] = t;
    }
    delay(t) {
        if ("number" != typeof t || !Number.isInteger(t) || t <= 0) throw new d("waitInMs must be a valid integer > 0");
        return this[m].delay = t, this;
    }
    persist() {
        return this[m].persist = !0, this;
    }
    times(t) {
        if ("number" != typeof t || !Number.isInteger(t) || t <= 0) throw new d("repeatTimes must be a valid integer > 0");
        return this[m].times = t, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(t, e){
        if ("object" != typeof t) throw new d("opts must be an object");
        if (void 0 === t.path) throw new d("opts.path must be defined");
        if (void 0 === t.method && (t.method = "GET"), "string" == typeof t.path) if (t.query) t.path = f(t.path, t.query);
        else {
            const e = new URL(t.path, "data://");
            t.path = e.pathname + e.search;
        }
        "string" == typeof t.method && (t.method = t.method.toUpperCase()), this[a] = s(t), this[o] = e, this[u] = {}, this[c] = {}, this[l] = !1;
    }
    createMockScopeDispatchData(t, e, r = {}) {
        const s = n(e), i = this[l] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: t,
            data: e,
            headers: {
                ...this[u],
                ...i,
                ...r.headers
            },
            trailers: {
                ...this[c],
                ...r.trailers
            }
        };
    }
    validateReplyParameters(t, e, r) {
        if (void 0 === t) throw new d("statusCode must be defined");
        if (void 0 === e) throw new d("data must be defined");
        if ("object" != typeof r) throw new d("responseOptions must be an object");
    }
    reply(t) {
        if ("function" == typeof t) {
            const e = (e)=>{
                const r = t(e);
                if ("object" != typeof r) throw new d("reply options callback must return an object");
                const { statusCode: n, data: s = "", responseOptions: i = {} } = r;
                return this.validateReplyParameters(n, s, i), {
                    ...this.createMockScopeDispatchData(n, s, i)
                };
            }, r = i(this[o], this[a], e);
            return new p(r);
        }
        const [e, r = "", n = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(e, r, n);
        const s = this.createMockScopeDispatchData(e, r, n), u = i(this[o], this[a], s);
        return new p(u);
    }
    replyWithError(t) {
        if (void 0 === t) throw new d("error must be defined");
        const e = i(this[o], this[a], {
            error: t
        });
        return new p(e);
    }
    defaultReplyHeaders(t) {
        if (void 0 === t) throw new d("headers must be defined");
        return this[u] = t, this;
    }
    defaultReplyTrailers(t) {
        if (void 0 === t) throw new d("trailers must be defined");
        return this[c] = t, this;
    }
    replyContentLength() {
        return this[l] = !0, this;
    }
}, module.exports.MockScope = p;
