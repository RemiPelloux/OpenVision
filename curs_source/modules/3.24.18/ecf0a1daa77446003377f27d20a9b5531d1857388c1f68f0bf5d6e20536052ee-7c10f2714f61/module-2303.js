var s = require("./module-4576.js"), n = require("./module-9504.js"), r = s.Uint8Array, a = s.SyntaxError, o = s.parseInt, l = Math.min, h = /[^\da-f]/i, c = n(h.exec), d = n("".slice);
module.exports = function(t, e) {
    var i = t.length;
    if (i % 2 != 0) throw new a("String should be an even number of characters");
    for(var s = e ? l(e.length, i / 2) : i / 2, n = e || new r(s), u = 0, p = 0; p < s;){
        var g = d(t, u, u += 2);
        if (c(h, g)) throw new a("String should only contain hex characters");
        n[p++] = o(g, 16);
    }
    return {
        bytes: n,
        read: u
    };
};
