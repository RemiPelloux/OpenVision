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
}), i = this && this.__awaiter || function(t, e, r, n) {
    return new (r || (r = Promise))(function(s, i) {
        function o(t) {
            try {
                u(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function u(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(o, a);
        }
        u((n = n.apply(t, e || [])).next());
    });
}, o = this && this.__generator || function(t, e) {
    var r, n, s, i, o = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function a(i) {
        return function(a) {
            return function(i) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; o;)try {
                    if (r = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                    switch(n = 0, s && (i = [
                        2 & i[0],
                        s.value
                    ]), i[0]){
                        case 0:
                        case 1:
                            s = i;
                            break;
                        case 4:
                            return o.label++, {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            o.label++, n = i[1], i = [
                                0
                            ];
                            continue;
                        case 7:
                            i = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                o = 0;
                                continue;
                            }
                            if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                o.label = i[1];
                                break;
                            }
                            if (6 === i[0] && o.label < s[1]) {
                                o.label = s[1], s = i;
                                break;
                            }
                            if (s && o.label < s[2]) {
                                o.label = s[2], o.ops.push(i);
                                break;
                            }
                            s[2] && o.ops.pop(), o.trys.pop();
                            continue;
                    }
                    i = e.call(t, o);
                } catch (t) {
                    i = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = s = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([
                i,
                a
            ]);
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var a = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return s(e, t), e.prototype.apply = function() {
        return i(this, void 0, void 0, function() {
            return o(this, function(e) {
                return [
                    2,
                    !!this.isFirstAttempt || t.prototype.apply.call(this)
                ];
            });
        });
    }, Object.defineProperty(e.prototype, "isFirstAttempt", {
        get: function() {
            return 0 === this.attempt;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "numOfDelayedAttempts", {
        get: function() {
            return this.attempt - 1;
        },
        enumerable: !0,
        configurable: !0
    }), e;
}(require("./module-9687.js").Delay);
exports.SkipFirstDelay = a;
