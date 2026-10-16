import { fne } from "./LYd.js";
import { E } from "./tslib.es6.js";
var __wakaru_u6y_initialized = false;
export function u6y() {
if (__wakaru_u6y_initialized) return;
__wakaru_u6y_initialized = true;
E(), fne.prototype = {
    constructor: fne,
    find: function(t) {
        for(var e = 0; e < this.content.length; e += 2)if (this.content[e] === t) return e;
        return -1;
    },
    get: function(t) {
        var e = this.find(t);
        return e == -1 ? void 0 : this.content[e + 1];
    },
    update: function(t, e, n) {
        var i = n && n != t ? this.remove(n) : this, r = i.find(t), s = i.content.slice();
        return r == -1 ? s.push(n || t, e) : (s[r + 1] = e, n && (s[r] = n)), new fne(s);
    },
    remove: function(t) {
        var e = this.find(t);
        if (e == -1) return this;
        var n = this.content.slice();
        return n.splice(e, 2), new fne(n);
    },
    addToStart: function(t, e) {
        return new fne([
            t,
            e
        ].concat(this.remove(t).content));
    },
    addToEnd: function(t, e) {
        var n = this.remove(t).content.slice();
        return n.push(t, e), new fne(n);
    },
    addBefore: function(t, e, n) {
        var i = this.remove(e), r = i.content.slice(), s = i.find(t);
        return r.splice(s == -1 ? r.length : s, 0, e, n), new fne(r);
    },
    forEach: function(t) {
        for(var e = 0; e < this.content.length; e += 2)t(this.content[e], this.content[e + 1]);
    },
    prepend: function(t) {
        return t = fne.from(t), t.size ? new fne(t.content.concat(this.subtract(t).content)) : this;
    },
    append: function(t) {
        return t = fne.from(t), t.size ? new fne(this.subtract(t).content.concat(t.content)) : this;
    },
    subtract: function(t) {
        var e = this;
        t = fne.from(t);
        for(var n = 0; n < t.content.length; n += 2)e = e.remove(t.content[n]);
        return e;
    },
    toObject: function() {
        var t = {};
        return this.forEach(function(e, n) {
            t[e] = n;
        }), t;
    },
    get size () {
        return this.content.length >> 1;
    }
}, fne.from = function(t) {
    if (t instanceof fne) return t;
    var e = [];
    if (t) for(var n in t)e.push(n, t[n]);
    return new fne(e);
};

}
