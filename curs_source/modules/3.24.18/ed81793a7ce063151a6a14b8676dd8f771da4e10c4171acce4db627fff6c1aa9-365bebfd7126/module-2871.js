var n = require("./module-579.js"), o = require("./module-5063.js"), i = Math.abs;
module.exports = function(t, r, e, a) {
    var u = +t, s = i(u), c = n(u);
    if (s < a) return c * o(s / a / r) * a * r;
    var f = (1 + r / 2220446049250313e-31) * s, h = f - (f - s);
    return h > e || h != h ? c * (1 / 0) : c * h;
};
