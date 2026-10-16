var n = require("./module-5821.js"), o = require("./module-9944.js"), i = require("./module-3628.js"), a = require("./module-4412.js"), u = require("./module-8146.js"), s = require("./module-866.js"), c = require("./module-9389.js"), f = require("./module-4417.js"), h = require("./module-4224.js"), l = require("./module-9042.js"), p = require("./module-4366.js"), v = require("./module-8500.js"), d = require("./module-2197.js"), g = Array;
module.exports = function(t) {
    var r = s(this), e = arguments.length, y = e > 1 ? arguments[1] : void 0, w = void 0 !== y;
    w && (y = n(y, e > 2 ? arguments[2] : void 0));
    var x, m, b, S, O, E, R = i(t), P = p(R), j = 0;
    if (!P || this === g && u(P)) for(x = c(R), m = r ? new this(x) : g(x); x > j; j++)E = w ? y(R[j], j) : R[j], f(m, j, E);
    else for(m = r ? new this : [], O = (S = l(R, P)).next; !(b = o(O, S)).done; j++){
        try {
            d(j);
        } catch (t) {
            v(S, "throw", t);
        }
        E = w ? a(S, y, [
            b.value,
            j
        ], !0) : b.value;
        try {
            f(m, j, E);
        } catch (t) {
            v(S, "throw", t);
        }
    }
    return h(m, j), m;
};
