var n = require("./module-3628.js"), o = require("./module-675.js"), i = require("./module-9389.js");
module.exports = [].fill || function(t) {
    for(var r = n(this), e = i(r), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, e), s = a > 2 ? arguments[2] : void 0, c = void 0 === s ? e : o(s, e); c > u;)r[u++] = t;
    return r;
};
