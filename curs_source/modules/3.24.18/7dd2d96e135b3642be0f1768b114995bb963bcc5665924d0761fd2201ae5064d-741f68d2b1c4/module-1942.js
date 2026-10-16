"use strict";
const a = require("./module-9361.js"), { kBodyUsed: s } = require("./module-8832.js"), o = require("./module-2613.js"), { InvalidArgumentError: r } = require("./module-7902.js"), i = require("./module-4434.js"), A = [
    300,
    301,
    302,
    303,
    307,
    308
], c = Symbol("body");
class l {
    constructor(e){
        this[c] = e, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = !0, yield* this[c];
    }
}
function d(e, n, t) {
    if (4 === e.length) return "host" === a.headerNameToString(e);
    if (n && a.headerNameToString(e).startsWith("content-")) return !0;
    if (t && (13 === e.length || 6 === e.length || 19 === e.length)) {
        const n = a.headerNameToString(e);
        return "authorization" === n || "cookie" === n || "proxy-authorization" === n;
    }
    return !1;
}
module.exports = class {
    constructor(e, n, t, A){
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new r("maxRedirections must be a positive number");
        a.validateHandler(A, t.method, t.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = {
            ...t,
            maxRedirections: 0
        }, this.maxRedirections = n, this.handler = A, this.history = [], a.isStream(this.opts.body) ? (0 === a.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, i.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && a.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
    }
    onConnect(e) {
        this.abort = e, this.handler.onConnect(e, {
            history: this.history
        });
    }
    onUpgrade(e, n, t) {
        this.handler.onUpgrade(e, n, t);
    }
    onError(e) {
        this.handler.onError(e);
    }
    onHeaders(e, n, t, s) {
        if (this.location = this.history.length >= this.maxRedirections || a.isDisturbed(this.opts.body) ? null : function(e, n) {
            if (-1 === A.indexOf(e)) return null;
            for(let e = 0; e < n.length; e += 2)if ("location" === n[e].toString().toLowerCase()) return n[e + 1];
        }(e, n), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e, n, t, s);
        const { origin: r, pathname: i, search: c } = a.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l = c ? `${i}${c}` : i;
        this.opts.headers = function(e, n, t) {
            const a = [];
            if (Array.isArray(e)) for(let s = 0; s < e.length; s += 2)d(e[s], n, t) || a.push(e[s], e[s + 1]);
            else if (e && "object" == typeof e) for (const s of Object.keys(e))d(s, n, t) || a.push(s, e[s]);
            else o(null == e, "headers must be an object or an array");
            return a;
        }(this.opts.headers, 303 === e, this.opts.origin !== r), this.opts.path = l, this.opts.origin = r, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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
