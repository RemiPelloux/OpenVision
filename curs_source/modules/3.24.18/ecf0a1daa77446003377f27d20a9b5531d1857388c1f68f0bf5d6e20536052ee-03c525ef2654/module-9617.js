var s = require("./module-5397.js"), n = require("./module-5610.js"), r = require("./module-6198.js"), a = function(t) {
    return function(e, i, a) {
        var o = s(e), l = r(o);
        if (0 === l) return !t && -1;
        var h, c = n(a, l);
        if (t && i != i) {
            for(; l > c;)if ((h = o[c++]) != h) return !0;
        } else for(; l > c; c++)if ((t || c in o) && o[c] === i) return t || c || 0;
        return !t && -1;
    };
};
module.exports = {
    includes: a(!0),
    indexOf: a(!1)
};
