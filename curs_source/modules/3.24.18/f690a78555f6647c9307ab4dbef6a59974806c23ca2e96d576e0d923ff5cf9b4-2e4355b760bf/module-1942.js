"use strict";
const n = require("./module-9361.js"), { kBodyUsed: r } = require("./module-8832.js"), o = require("./module-2613.js"), { InvalidArgumentError: s } = require("./module-7902.js"), a = require("./module-4434.js"), i = [
    300,
    301,
    302,
    303,
    307,
    308
], c = Symbol("body");
class l {
    constructor(e){
        this[c] = e, this[r] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[r], "disturbed"), this[r] = !0, yield* this[c];
    }
}
function g(e, A, t) {
    if (4 === e.length) return "host" === n.headerNameToString(e);
    if (A && n.headerNameToString(e).startsWith("content-")) return !0;
    if (t && (13 === e.length || 6 === e.length || 19 === e.length)) {
        const A = n.headerNameToString(e);
        return "authorization" === A || "cookie" === A || "proxy-authorization" === A;
    }
    return !1;
}
module.exports = class {
    constructor(e, A, t, i){
        if (null != A && (!Number.isInteger(A) || A < 0)) throw new s("maxRedirections must be a positive number");
        n.validateHandler(i, t.method, t.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = {
            ...t,
            maxRedirections: 0
        }, this.maxRedirections = A, this.handler = i, this.history = [], n.isStream(this.opts.body) ? (0 === n.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[r] = !1, a.prototype.on.call(this.opts.body, "data", function() {
            this[r] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
    }
    onConnect(e) {
        this.abort = e, this.handler.onConnect(e, {
            history: this.history
        });
    }
    onUpgrade(e, A, t) {
        this.handler.onUpgrade(e, A, t);
    }
    onError(e) {
        this.handler.onError(e);
    }
    onHeaders(e, A, t, r) {
        if (this.location = this.history.length >= this.maxRedirections || n.isDisturbed(this.opts.body) ? null : function(e, A) {
            if (-1 === i.indexOf(e)) return null;
            for(let e = 0; e < A.length; e += 2)if ("location" === A[e].toString().toLowerCase()) return A[e + 1];
        }(e, A), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e, A, t, r);
        const { origin: s, pathname: a, search: c } = n.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l = c ? `${a}${c}` : a;
        this.opts.headers = function(e, A, t) {
            const n = [];
            if (Array.isArray(e)) for(let r = 0; r < e.length; r += 2)g(e[r], A, t) || n.push(e[r], e[r + 1]);
            else if (e && "object" == typeof e) for (const r of Object.keys(e))g(r, A, t) || n.push(r, e[r]);
            else o(null == e, "headers must be an object or an array");
            return n;
        }(this.opts.headers, 303 === e, this.opts.origin !== s), this.opts.path = l, this.opts.origin = s, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
    }
    onData(e) {
        if (!this.location) return this.handler.onData(e);
    }
    onComplete(e) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(e);
    }
    onBodySent(e) {
        this.handler.onBodySent && this.handler.onBodySent(e);
    }
};
