import { sj } from "./qIc.js";
import { x } from "./tslib.es6.js";
var __wakaru_VTg_initialized = false;
export function VTg() {
if (__wakaru_VTg_initialized) return;
__wakaru_VTg_initialized = true;
x(), sj.prototype = {
    constructor: sj,
    find: function(e) {
        for(var t = 0; t < this.content.length; t += 2)if (this.content[t] === e) return t;
        return -1;
    },
    get: function(e) {
        var t = this.find(e);
        return t == -1 ? void 0 : this.content[t + 1];
    },
    update: function(e, t, n) {
        var i = n && n != e ? this.remove(n) : this, r = i.find(e), s = i.content.slice();
        return r == -1 ? s.push(n || e, t) : (s[r + 1] = t, n && (s[r] = n)), new sj(s);
    },
    remove: function(e) {
        var t = this.find(e);
        if (t == -1) return this;
        var n = this.content.slice();
        return n.splice(t, 2), new sj(n);
    },
    addToStart: function(e, t) {
        return new sj([
            e,
            t
        ].concat(this.remove(e).content));
    },
    addToEnd: function(e, t) {
        var n = this.remove(e).content.slice();
        return n.push(e, t), new sj(n);
    },
    addBefore: function(e, t, n) {
        var i = this.remove(t), r = i.content.slice(), s = i.find(e);
        return r.splice(s == -1 ? r.length : s, 0, t, n), new sj(r);
    },
    forEach: function(e) {
        for(var t = 0; t < this.content.length; t += 2)e(this.content[t], this.content[t + 1]);
    },
    prepend: function(e) {
        return e = sj.from(e), e.size ? new sj(e.content.concat(this.subtract(e).content)) : this;
    },
    append: function(e) {
        return e = sj.from(e), e.size ? new sj(this.subtract(e).content.concat(e.content)) : this;
    },
    subtract: function(e) {
        var t = this;
        e = sj.from(e);
        for(var n = 0; n < e.content.length; n += 2)t = t.remove(e.content[n]);
        return t;
    },
    toObject: function() {
        var e = {};
        return this.forEach(function(t, n) {
            e[t] = n;
        }), e;
    },
    get size () {
        return this.content.length >> 1;
    }
}, sj.from = function(e) {
    if (e instanceof sj) return e;
    var t = [];
    if (e) for(var n in e)t.push(n, e[n]);
    return new sj(t);
};

}
