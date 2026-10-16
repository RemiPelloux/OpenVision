var n = require("./module-9944.js"), o = require("./module-4977.js"), i = require("./module-3770.js"), a = require("./module-831.js"), u = require("./module-2197.js"), s = require("./module-5604.js"), c = require("./module-4417.js"), f = require("./module-4224.js"), h = require("./module-6002.js"), l = require("./module-7731.js"), p = function(t) {
    var r = 0 === t, e = 1 === t, p = 2 === t, v = 3 === t;
    return function(t, d, g) {
        i(t);
        var y = void 0 !== d;
        !y && r || o(d);
        var w = h(t), x = s("Promise"), m = w.iterator, b = w.next, S = 0;
        return new x(function(t, o) {
            var s = function(t) {
                l(m, o, t, o);
            }, h = function() {
                try {
                    try {
                        u(S);
                    } catch (t) {
                        return s(t);
                    }
                    x.resolve(i(n(b, m))).then(function(n) {
                        try {
                            if (i(n).done) r ? (f(g, S), t(g)) : t(!v && (p || void 0));
                            else {
                                var u = n.value;
                                try {
                                    if (y) {
                                        var w = S++, b = d(u, w), O = function(n) {
                                            if (e) h();
                                            else if (p) n ? h() : l(m, t, !1, o);
                                            else if (r) try {
                                                c(g, w, n), h();
                                            } catch (t) {
                                                s(t);
                                            }
                                            else n ? l(m, t, v || u, o) : h();
                                        };
                                        a(b) ? x.resolve(b).then(O, s) : O(b);
                                    } else c(g, S++, u), h();
                                } catch (t) {
                                    s(t);
                                }
                            }
                        } catch (t) {
                            o(t);
                        }
                    }, o);
                } catch (t) {
                    o(t);
                }
            };
            h();
        });
    };
};
module.exports = {
    toArray: p(0),
    forEach: p(1),
    every: p(2),
    some: p(3),
    find: p(4)
};
