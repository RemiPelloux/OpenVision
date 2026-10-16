"use strict";
const n = require("./module-2276.js");
function r(e) {
    this._reporterState = {
        obj: null,
        path: [],
        options: e || {},
        errors: []
    };
}
function o(e, t) {
    this.path = e, this.rethrow(t);
}
exports.a = r, r.prototype.isError = function(e) {
    return e instanceof o;
}, r.prototype.save = function() {
    const e = this._reporterState;
    return {
        obj: e.obj,
        pathLen: e.path.length
    };
}, r.prototype.restore = function(e) {
    const t = this._reporterState;
    t.obj = e.obj, t.path = t.path.slice(0, e.pathLen);
}, r.prototype.enterKey = function(e) {
    return this._reporterState.path.push(e);
}, r.prototype.exitKey = function(e) {
    const t = this._reporterState;
    t.path = t.path.slice(0, e - 1);
}, r.prototype.leaveKey = function(e, t, A) {
    const n = this._reporterState;
    this.exitKey(e), null !== n.obj && (n.obj[t] = A);
}, r.prototype.path = function() {
    return this._reporterState.path.join("/");
}, r.prototype.enterObject = function() {
    const e = this._reporterState, t = e.obj;
    return e.obj = {}, t;
}, r.prototype.leaveObject = function(e) {
    const t = this._reporterState, A = t.obj;
    return t.obj = e, A;
}, r.prototype.error = function(e) {
    let t;
    const A = this._reporterState, n = e instanceof o;
    if (t = n ? e : new o(A.path.map(function(e) {
        return "[" + JSON.stringify(e) + "]";
    }).join(""), e.message || e, e.stack), !A.options.partial) throw t;
    return n || A.errors.push(t), t;
}, r.prototype.wrapResult = function(e) {
    const t = this._reporterState;
    return t.options.partial ? {
        result: this.isError(e) ? null : e,
        errors: t.errors
    } : e;
}, n(o, Error), o.prototype.rethrow = function(e) {
    if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
        throw new Error(this.message);
    } catch (e) {
        this.stack = e.stack;
    }
    return this;
};
