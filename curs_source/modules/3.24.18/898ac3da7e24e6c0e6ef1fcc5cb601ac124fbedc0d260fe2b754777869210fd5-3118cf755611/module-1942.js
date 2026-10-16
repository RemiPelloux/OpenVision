"use strict";
const t = require("./module-9361.js"), { kBodyUsed: s } = require("./module-8832.js"), o = require("./module-2613.js"), { InvalidArgumentError: r } = require("./module-7902.js"), i = require("./module-4434.js"), A = [
    300,
    301,
    302,
    303,
    307,
    308
], l = Symbol("body");
class c {
    constructor(e){
        this[l] = e, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = !0, yield* this[l];
    }
}
function m(e, n, a) {
    if (4 === e.length) return "host" === t.headerNameToString(e);
    if (n && t.headerNameToString(e).startsWith("content-")) return !0;
    if (a && (13 === e.length || 6 === e.length || 19 === e.length)) {
        const n = t.headerNameToString(e);
        return "authorization" === n || "cookie" === n || "proxy-authorization" === n;
    }
    return !1;
}
module.exports = class {
    constructor(e, n, a, A){
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new r("maxRedirections must be a positive number");
        t.validateHandler(A, a.method, a.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = {
            ...a,
            maxRedirections: 0
        }, this.maxRedirections = n, this.handler = A, this.history = [], t.isStream(this.opts.body) ? (0 === t.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, i.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && t.isIterable(this.opts.body)) && (this.opts.body = new c(this.opts.body));
    }
    onConnect(e) {
        this.abort = e, this.handler.onConnect(e, {
            history: this.history
        });
    }
    onUpgrade(e, n, a) {
        this.handler.onUpgrade(e, n, a);
    }
    onError(e) {
        this.handler.onError(e);
    }
    onHeaders(e, n, a, s) {
        if (this.location = this.history.length >= this.maxRedirections || t.isDisturbed(this.opts.body) ? null : function(e, n) {
            if (-1 === A.indexOf(e)) return null;
            for(let e = 0; e < n.length; e += 2)if ("location" === n[e].toString().toLowerCase()) return n[e + 1];
        }(e, n), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e, n, a, s);
        const { origin: r, pathname: i, search: l } = t.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), c = l ? `${i}${l}` : i;
        this.opts.headers = function(e, n, a) {
            const t = [];
            if (Array.isArray(e)) for(let s = 0; s < e.length; s += 2)m(e[s], n, a) || t.push(e[s], e[s + 1]);
            else if (e && "object" == typeof e) for (const s of Object.keys(e))m(s, n, a) || t.push(s, e[s]);
            else o(null == e, "headers must be an object or an array");
            return t;
        }(this.opts.headers, 303 === e, this.opts.origin !== r), this.opts.path = c, this.opts.origin = r, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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
