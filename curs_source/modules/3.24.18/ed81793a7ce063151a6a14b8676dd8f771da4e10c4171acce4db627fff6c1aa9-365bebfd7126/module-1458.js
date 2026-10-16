var n = require("./module-380.js"), o = require("./module-675.js"), i = require("./module-9389.js"), a = function(t) {
    return function(r, e, a) {
        var u = n(r), s = i(u);
        if (0 === s) return !t && -1;
        var c, f = o(a, s);
        if (t && e != e) {
            for(; s > f;)if ((c = u[f++]) != c) return !0;
        } else for(; s > f; f++)if ((t || f in u) && u[f] === e) return t || f || 0;
        return !t && -1;
    };
};
module.exports = {
    includes: a(!0),
    indexOf: a(!1)
};
