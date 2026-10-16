"use strict";
const n = require("./module-3589.js"), { kBodyUsed: s } = require("./module-5532.js"), i = require("./module-2613.js"), { InvalidArgumentError: o } = require("./module-8762.js"), a = require("./module-4434.js"), u = [
    300,
    301,
    302,
    303,
    307,
    308
], c = Symbol("body");
class l {
    constructor(t){
        this[c] = t, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        i(!this[s], "disturbed"), this[s] = !0, yield* this[c];
    }
}
function m(t, e, r) {
    if (4 === t.length) return "host" === n.headerNameToString(t);
    if (e && n.headerNameToString(t).startsWith("content-")) return !0;
    if (r && (13 === t.length || 6 === t.length || 19 === t.length)) {
        const e = n.headerNameToString(t);
        return "authorization" === e || "cookie" === e || "proxy-authorization" === e;
    }
    return !1;
}
module.exports = class {
    constructor(t, e, r, u){
        if (null != e && (!Number.isInteger(e) || e < 0)) throw new o("maxRedirections must be a positive number");
        n.validateHandler(u, r.method, r.upgrade), this.dispatch = t, this.location = null, this.abort = null, this.opts = {
            ...r,
            maxRedirections: 0
        }, this.maxRedirections = e, this.handler = u, this.history = [], n.isStream(this.opts.body) ? (0 === n.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            i(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, a.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
    }
    onConnect(t) {
        this.abort = t, this.handler.onConnect(t, {
            history: this.history
        });
    }
    onUpgrade(t, e, r) {
        this.handler.onUpgrade(t, e, r);
    }
    onError(t) {
        this.handler.onError(t);
    }
    onHeaders(t, e, r, s) {
        if (this.location = this.history.length >= this.maxRedirections || n.isDisturbed(this.opts.body) ? null : function(t, e) {
            if (-1 === u.indexOf(t)) return null;
            for(let t = 0; t < e.length; t += 2)if ("location" === e[t].toString().toLowerCase()) return e[t + 1];
        }(t, e), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(t, e, r, s);
        const { origin: o, pathname: a, search: c } = n.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l = c ? `${a}${c}` : a;
        this.opts.headers = function(t, e, r) {
            const n = [];
            if (Array.isArray(t)) for(let s = 0; s < t.length; s += 2)m(t[s], e, r) || n.push(t[s], t[s + 1]);
            else if (t && "object" == typeof t) for (const s of Object.keys(t))m(s, e, r) || n.push(s, t[s]);
            else i(null == t, "headers must be an object or an array");
            return n;
        }(this.opts.headers, 303 === t, this.opts.origin !== o), this.opts.path = l, this.opts.origin = o, this.opts.maxRedirections = 0, this.opts.query = null, 303 === t && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
    }
    onData(t) {
        if (!this.location) return this.handler.onData(t);
    }
    onComplete(t) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(t);
    }
    onBodySent(t) {
        this.handler.onBodySent && this.handler.onBodySent(t);
    }
};
