var n = require("./module-7065.js"), o = require("./module-997.js"), i = require("./module-4320.js"), a = require("./module-5821.js"), u = require("./module-286.js"), s = require("./module-4318.js"), c = require("./module-8873.js"), f = require("./module-3217.js"), h = require("./module-6224.js"), l = require("./module-3900.js"), p = require("./module-6893.js"), v = require("./module-8118.js").fastKey, d = require("./module-3086.js"), g = d.set, y = d.getterFor;
module.exports = {
    getConstructor: function(t, r, e, f) {
        var h = t(function(t, o) {
            u(t, l), g(t, {
                type: r,
                index: n(null),
                first: null,
                last: null,
                size: 0
            }), p || (t.size = 0), s(o) || c(o, t[f], {
                that: t,
                AS_ENTRIES: e
            });
        }), l = h.prototype, d = y(r), w = function(t, r, e) {
            var n, o, i = d(t), a = x(t, r);
            return a ? a.value = e : (i.last = a = {
                index: o = v(r, !0),
                key: r,
                value: e,
                previous: n = i.last,
                next: null,
                removed: !1
            }, i.first || (i.first = a), n && (n.next = a), p ? i.size++ : t.size++, "F" !== o && (i.index[o] = a)), t;
        }, x = function(t, r) {
            var e, n = d(t), o = v(r);
            if ("F" !== o) return n.index[o];
            for(e = n.first; e; e = e.next)if (e.key === r) return e;
        };
        return i(l, {
            clear: function() {
                for(var t = d(this), r = t.first; r;)r.removed = !0, r.previous && (r.previous = r.previous.next = null), r = r.next;
                t.first = t.last = null, t.index = n(null), p ? t.size = 0 : this.size = 0;
            },
            delete: function(t) {
                var r = this, e = d(r), n = x(r, t);
                if (n) {
                    var o = n.next, i = n.previous;
                    delete e.index[n.index], n.removed = !0, i && (i.next = o), o && (o.previous = i), e.first === n && (e.first = o), e.last === n && (e.last = i), p ? e.size-- : r.size--;
                }
                return !!n;
            },
            forEach: function(t) {
                for(var r, e = d(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0); r = r ? r.next : e.first;)for(n(r.value, r.key, this); r && r.removed;)r = r.previous;
            },
            has: function(t) {
                return !!x(this, t);
            }
        }), i(l, e ? {
            get: function(t) {
                var r = x(this, t);
                return r && r.value;
            },
            set: function(t, r) {
                return w(this, 0 === t ? 0 : t, r);
            }
        } : {
            add: function(t) {
                return w(this, t = 0 === t ? 0 : t, t);
            }
        }), p && o(l, "size", {
            configurable: !0,
            get: function() {
                return d(this).size;
            }
        }), h;
    },
    setStrong: function(t, r, e) {
        var n = r + " Iterator", o = y(r), i = y(n);
        f(t, r, function(t, r) {
            g(this, {
                type: n,
                target: t,
                state: o(t),
                kind: r,
                last: null
            });
        }, function() {
            for(var t = i(this), r = t.kind, e = t.last; e && e.removed;)e = e.previous;
            return t.target && (t.last = e = e ? e.next : t.state.first) ? h("keys" === r ? e.key : "values" === r ? e.value : [
                e.key,
                e.value
            ], !1) : (t.target = null, h(void 0, !0));
        }, e ? "entries" : "values", !e, !0), l(r);
    }
};
