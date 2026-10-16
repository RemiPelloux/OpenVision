"use strict";
const { getResponseData: n, buildKey: s, addMockDispatch: o } = require("./module-34008.js"), { kDispatches: i, kDispatchKey: a, kDefaultHeaders: c, kDefaultTrailers: l, kContentLength: u, kMockDispatch: d } = require("./module-51476.js"), { InvalidArgumentError: p } = require("./module-48762.js"), { buildURL: m } = require("./module-83589.js");
class h {
    constructor(e){
        this[d] = e;
    }
    delay(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new p("waitInMs must be a valid integer > 0");
        return this[d].delay = e, this;
    }
    persist() {
        return this[d].persist = !0, this;
    }
    times(e) {
        if ("number" != typeof e || !Number.isInteger(e) || e <= 0) throw new p("repeatTimes must be a valid integer > 0");
        return this[d].times = e, this;
    }
}
module.exports.MockInterceptor = class {
    constructor(e, t){
        if ("object" != typeof e) throw new p("opts must be an object");
        if (void 0 === e.path) throw new p("opts.path must be defined");
        if (void 0 === e.method && (e.method = "GET"), "string" == typeof e.path) if (e.query) e.path = m(e.path, e.query);
        else {
            const t = new URL(e.path, "data://");
            e.path = t.pathname + t.search;
        }
        "string" == typeof e.method && (e.method = e.method.toUpperCase()), this[a] = s(e), this[i] = t, this[c] = {}, this[l] = {}, this[u] = !1;
    }
    createMockScopeDispatchData(e, t, r = {}) {
        const s = n(t), o = this[u] ? {
            "content-length": s.length
        } : {};
        return {
            statusCode: e,
            data: t,
            headers: {
                ...this[c],
                ...o,
                ...r.headers
            },
            trailers: {
                ...this[l],
                ...r.trailers
            }
        };
    }
    validateReplyParameters(e, t, r) {
        if (void 0 === e) throw new p("statusCode must be defined");
        if (void 0 === t) throw new p("data must be defined");
        if ("object" != typeof r) throw new p("responseOptions must be an object");
    }
    reply(e) {
        if ("function" == typeof e) {
            const t = (t)=>{
                const r = e(t);
                if ("object" != typeof r) throw new p("reply options callback must return an object");
                const { statusCode: n, data: s = "", responseOptions: o = {} } = r;
                return this.validateReplyParameters(n, s, o), {
                    ...this.createMockScopeDispatchData(n, s, o)
                };
            }, r = o(this[i], this[a], t);
            return new h(r);
        }
        const [t, r = "", n = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(t, r, n);
        const s = this.createMockScopeDispatchData(t, r, n), c = o(this[i], this[a], s);
        return new h(c);
    }
    replyWithError(e) {
        if (void 0 === e) throw new p("error must be defined");
        const t = o(this[i], this[a], {
            error: e
        });
        return new h(t);
    }
    defaultReplyHeaders(e) {
        if (void 0 === e) throw new p("headers must be defined");
        return this[c] = e, this;
    }
    defaultReplyTrailers(e) {
        if (void 0 === e) throw new p("trailers must be defined");
        return this[l] = e, this;
    }
    replyContentLength() {
        return this[u] = !0, this;
    }
}, module.exports.MockScope = h;
