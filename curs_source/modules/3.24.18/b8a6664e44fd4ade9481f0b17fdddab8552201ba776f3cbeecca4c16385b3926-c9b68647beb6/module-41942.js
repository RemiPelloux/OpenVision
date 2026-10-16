"use strict";
const r = require("./module-9361.js"), { kBodyUsed: s } = require("./module-58832.js"), o = require(42613), { InvalidArgumentError: n } = require("./module-95521.js"), i = require(24434), E = [
    300,
    301,
    302,
    303,
    307,
    308
], Q = Symbol("body");
class g {
    constructor(A){
        this[Q] = A, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = !0, yield* this[Q];
    }
}
function C(A, e, t) {
    if (4 === A.length) return "host" === r.headerNameToString(A);
    if (e && r.headerNameToString(A).startsWith("content-")) return !0;
    if (t && (13 === A.length || 6 === A.length || 19 === A.length)) {
        const e = r.headerNameToString(A);
        return "authorization" === e || "cookie" === e || "proxy-authorization" === e;
    }
    return !1;
}
module.exports = class {
    constructor(A, e, t, E){
        if (null != e && (!Number.isInteger(e) || e < 0)) throw new n("maxRedirections must be a positive number");
        r.validateHandler(E, t.method, t.upgrade), this.dispatch = A, this.location = null, this.abort = null, this.opts = {
            ...t,
            maxRedirections: 0
        }, this.maxRedirections = e, this.handler = E, this.history = [], r.isStream(this.opts.body) ? (0 === r.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, i.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && r.isIterable(this.opts.body)) && (this.opts.body = new g(this.opts.body));
    }
    onConnect(A) {
        this.abort = A, this.handler.onConnect(A, {
            history: this.history
        });
    }
    onUpgrade(A, e, t) {
        this.handler.onUpgrade(A, e, t);
    }
    onError(A) {
        this.handler.onError(A);
    }
    onHeaders(A, e, t, s) {
        if (this.location = this.history.length >= this.maxRedirections || r.isDisturbed(this.opts.body) ? null : function(A, e) {
            if (-1 === E.indexOf(A)) return null;
            for(let A = 0; A < e.length; A += 2)if ("location" === e[A].toString().toLowerCase()) return e[A + 1];
        }(A, e), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(A, e, t, s);
        const { origin: n, pathname: i, search: Q } = r.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), g = Q ? `${i}${Q}` : i;
        this.opts.headers = function(A, e, t) {
            const r = [];
            if (Array.isArray(A)) for(let s = 0; s < A.length; s += 2)C(A[s], e, t) || r.push(A[s], A[s + 1]);
            else if (A && "object" == typeof A) for (const s of Object.keys(A))C(s, e, t) || r.push(s, A[s]);
            else o(null == A, "headers must be an object or an array");
            return r;
        }(this.opts.headers, 303 === A, this.opts.origin !== n), this.opts.path = g, this.opts.origin = n, this.opts.maxRedirections = 0, this.opts.query = null, 303 === A && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
    }
    onData(A) {
        if (!this.location) return this.handler.onData(A);
    }
    onComplete(A) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(A);
    }
    onBodySent(A) {
        this.handler.onBodySent && this.handler.onBodySent(A);
    }
};
