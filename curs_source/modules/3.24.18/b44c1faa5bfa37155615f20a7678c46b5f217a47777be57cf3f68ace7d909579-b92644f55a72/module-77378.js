"use strict";
const n = require("./module-83589.js"), { kBodyUsed: s } = require("./module-15532.js"), o = require("./module-42613.js"), { InvalidArgumentError: i } = require("./module-48762.js"), a = require("./module-24434.js"), c = [
    300,
    301,
    302,
    303,
    307,
    308
], l = Symbol("body");
class u {
    constructor(e){
        this[l] = e, this[s] = !1;
    }
    async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = !0, yield* this[l];
    }
}
function d(e, t, r) {
    if (4 === e.length) return "host" === n.headerNameToString(e);
    if (t && n.headerNameToString(e).startsWith("content-")) return !0;
    if (r && (13 === e.length || 6 === e.length || 19 === e.length)) {
        const t = n.headerNameToString(e);
        return "authorization" === t || "cookie" === t || "proxy-authorization" === t;
    }
    return !1;
}
module.exports = class {
    constructor(e, t, r, c){
        if (null != t && (!Number.isInteger(t) || t < 0)) throw new i("maxRedirections must be a positive number");
        n.validateHandler(c, r.method, r.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = {
            ...r,
            maxRedirections: 0
        }, this.maxRedirections = t, this.handler = c, this.history = [], n.isStream(this.opts.body) ? (0 === n.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
            o(!1);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = !1, a.prototype.on.call(this.opts.body, "data", function() {
            this[s] = !0;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n.isIterable(this.opts.body)) && (this.opts.body = new u(this.opts.body));
    }
    onConnect(e) {
        this.abort = e, this.handler.onConnect(e, {
            history: this.history
        });
    }
    onUpgrade(e, t, r) {
        this.handler.onUpgrade(e, t, r);
    }
    onError(e) {
        this.handler.onError(e);
    }
    onHeaders(e, t, r, s) {
        if (this.location = this.history.length >= this.maxRedirections || n.isDisturbed(this.opts.body) ? null : function(e, t) {
            if (-1 === c.indexOf(e)) return null;
            for(let e = 0; e < t.length; e += 2)if ("location" === t[e].toString().toLowerCase()) return t[e + 1];
        }(e, t), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e, t, r, s);
        const { origin: i, pathname: a, search: l } = n.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), u = l ? `${a}${l}` : a;
        this.opts.headers = function(e, t, r) {
            const n = [];
            if (Array.isArray(e)) for(let s = 0; s < e.length; s += 2)d(e[s], t, r) || n.push(e[s], e[s + 1]);
            else if (e && "object" == typeof e) for (const s of Object.keys(e))d(s, t, r) || n.push(s, e[s]);
            else o(null == e, "headers must be an object or an array");
            return n;
        }(this.opts.headers, 303 === e, this.opts.origin !== i), this.opts.path = u, this.opts.origin = i, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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
