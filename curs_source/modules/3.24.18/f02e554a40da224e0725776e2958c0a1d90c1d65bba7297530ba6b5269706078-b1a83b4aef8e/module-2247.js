"use strict";
var n, s = this && this.__extends || (n = function(t, e) {
    return n = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)e.hasOwnProperty(r) && (t[r] = e[r]);
    }, n(t, e);
}, function(t, e) {
    function r() {
        this.constructor = t;
    }
    n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
});
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var i = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return s(e, t), e;
}(require("./module-9687.js").Delay);
exports.AlwaysDelay = i;
