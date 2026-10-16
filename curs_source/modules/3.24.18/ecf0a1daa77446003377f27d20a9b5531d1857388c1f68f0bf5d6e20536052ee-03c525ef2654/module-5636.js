var s = require("./module-4576.js"), n = require("./module-9504.js"), r = require("./module-6706.js"), a = require("./module-7696.js"), o = require("./module-5169.js"), l = require("./module-7394.js"), h = require("./module-4483.js"), c = require("./module-1548.js"), d = s.structuredClone, u = s.ArrayBuffer, p = s.DataView, g = Math.min, m = u.prototype, f = p.prototype, b = n(m.slice), v = r(m, "resizable", "get"), y = r(m, "maxByteLength", "get"), w = n(f.getInt8), x = n(f.setInt8);
module.exports = (c || h) && function(t, e, i) {
    var s, n = l(t), r = void 0 === e ? n : a(e), m = !v || !v(t);
    if (o(t), c && (t = d(t, {
        transfer: [
            t
        ]
    }), n === r && (i || m))) return t;
    if (n >= r && (!i || m)) s = b(t, 0, r);
    else {
        var f = i && !m && y ? {
            maxByteLength: y(t)
        } : void 0;
        s = new u(r, f);
        for(var A = new p(t), _ = new p(s), S = g(r, n), E = 0; E < S; E++)x(_, E, w(A, E));
    }
    return c || h(t), s;
};
