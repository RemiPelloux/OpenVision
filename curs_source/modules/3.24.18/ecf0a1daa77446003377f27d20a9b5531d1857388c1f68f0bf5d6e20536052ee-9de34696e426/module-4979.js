var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-7751.js"), a = require("./module-6980.js"), o = require("./module-4913.js").f, l = require("./module-9297.js"), h = require("./module-679.js"), c = require("./module-3167.js"), d = require("./module-2603.js"), u = require("./module-5002.js"), p = require("./module-8574.js"), g = require("./module-3724.js"), m = require("./module-6395.js"), f = "DOMException", b = r("Error"), v = r(f), y = function() {
    h(this, w);
    var t = arguments.length, e = d(t < 1 ? void 0 : arguments[0]), i = d(t < 2 ? void 0 : arguments[1], "Error"), s = new v(e, i), n = new b(e);
    return n.name = f, o(s, "stack", a(1, p(n.stack, 1))), c(s, this, y), s;
}, w = y.prototype = v.prototype, x = "stack" in new b(f), A = "stack" in new v(1, 2), _ = v && g && Object.getOwnPropertyDescriptor(n, f), S = !(!_ || _.writable && _.configurable), E = x && !S && !A;
s({
    global: !0,
    constructor: !0,
    forced: m || E
}, {
    DOMException: E ? y : v
});
var C = r(f), T = C.prototype;
if (T.constructor !== C) {
    for(var M in m || o(T, "constructor", a(1, C)), u)if (l(u, M)) {
        var k = u[M], D = k.s;
        l(C, D) || o(C, D, a(6, k.c));
    }
}
