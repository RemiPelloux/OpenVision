var n = require("./module-6881.js"), o = require("./module-6744.js"), i = require("./module-2618.js"), a = require("./module-9509.js"), u = n("".charAt), s = n("".charCodeAt), c = n("".slice), f = function(t) {
    return function(r, e) {
        var n, f, h = i(a(r)), l = o(e), p = h.length;
        return l < 0 || l >= p ? t ? "" : void 0 : (n = s(h, l)) < 55296 || n > 56319 || l + 1 === p || (f = s(h, l + 1)) < 56320 || f > 57343 ? t ? u(h, l) : n : t ? c(h, l, l + 2) : f - 56320 + (n - 55296 << 10) + 65536;
    };
};
module.exports = {
    codeAt: f(!1),
    charAt: f(!0)
};
