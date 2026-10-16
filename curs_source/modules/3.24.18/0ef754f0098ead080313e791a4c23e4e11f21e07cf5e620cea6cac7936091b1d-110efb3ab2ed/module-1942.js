"use strict";
const t = require("./module-9361.js"), { kBodyUsed: s } = require("./module-8832.js"), o = require("./module-2613.js"), { InvalidArgumentError: r } = require("./module-7902.js"), i = require("./module-4434.js"), l = [
    300,
    301,
    302,
    303,
    307,
    308
], d = Symbol("body");
class m {
    constructor(e){
        this[d] = e, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = !0, yield* this[d];
    }
}
function c(e, a, n) {
    if (4 === e.length) return "host" === t.headerNameToString(e);
    if (a && t.headerNameToString(e).startsWith("content-")) return !0;
    if (n && (13 === e.length || 6 === e.length || 19 === e.length)) {
        const a = t.headerNameToString(e);
        return "authorization" === a || "cookie" === a || "proxy-authorization" === a;
    }
    return !1;
}
module.exports = class {
    constructor(e, a, n, l){
        if (null != a && (!Number.isInteger(a) || a < 0)) throw new r("maxRedirections must be a positive number");
        t.validateHandler(l, n.method, n.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = {
            ...n,
            maxRedirections: 0
        }, this.maxRedirections = a, this.handler = l, this.history = [], t.isStream(this.opts.body) ? (0 === t.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, i.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && t.isIterable(this.opts.body)) && (this.opts.body = new m(this.opts.body));
    }
    onConnect(e) {
        this.abort = e, this.handler.onConnect(e, {
            history: this.history
        });
    }
    onUpgrade(e, a, n) {
        this.handler.onUpgrade(e, a, n);
    }
    onError(e) {
        this.handler.onError(e);
    }
    onHeaders(e, a, n, s) {
        if (this.location = this.history.length >= this.maxRedirections || t.isDisturbed(this.opts.body) ? null : function(e, a) {
            if (-1 === l.indexOf(e)) return null;
            for(let e = 0; e < a.length; e += 2)if ("location" === a[e].toString().toLowerCase()) return a[e + 1];
        }(e, a), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e, a, n, s);
        const { origin: r, pathname: i, search: d } = t.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), m = d ? `${i}${d}` : i;
        this.opts.headers = function(e, a, n) {
            const t = [];
            if (Array.isArray(e)) for(let s = 0; s < e.length; s += 2)c(e[s], a, n) || t.push(e[s], e[s + 1]);
            else if (e && "object" == typeof e) for (const s of Object.keys(e))c(s, a, n) || t.push(s, e[s]);
            else o(null == e, "headers must be an object or an array");
            return t;
        }(this.opts.headers, 303 === e, this.opts.origin !== r), this.opts.path = m, this.opts.origin = r, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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
