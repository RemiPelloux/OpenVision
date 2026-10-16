var n = require("./module-9117.js"), o = require("./module-6881.js"), i = require("./module-1025.js"), a = require("./module-4579.js"), u = require("./module-2676.js"), s = require("./module-1617.js"), c = require("./module-8850.js"), f = require("./module-9059.js"), h = n.structuredClone, l = n.ArrayBuffer, p = n.DataView, v = Math.max, d = Math.min, g = l.prototype, y = p.prototype, w = o(g.slice), x = i(g, "resizable", "get"), m = i(g, "maxByteLength", "get"), b = o(y.getInt8), S = o(y.setInt8);
module.exports = (f || c) && function(t, r, e) {
    var n, o = s(t), i = void 0 === r ? o : a(r), g = !x || !x(t);
    if (u(t), f && (t = h(t, {
        transfer: [
            t
        ]
    }), o === i && (e || g))) return t;
    if (o >= i && (!e || g)) n = w(t, 0, i);
    else {
        var y = e && !g && m ? {
            maxByteLength: v(i, m(t))
        } : void 0;
        n = new l(i, y);
        for(var O = new p(t), E = new p(n), R = d(i, o), P = 0; P < R; P++)S(E, P, b(O, P));
    }
    return f || c(t), n;
};
