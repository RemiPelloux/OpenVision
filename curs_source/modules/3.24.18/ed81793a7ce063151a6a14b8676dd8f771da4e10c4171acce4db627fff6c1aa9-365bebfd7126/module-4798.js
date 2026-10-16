var n = require("./module-9117.js"), o = Object.defineProperty;
module.exports = function(t, r) {
    try {
        o(n, t, {
            value: r,
            configurable: !0,
            writable: !0
        });
    } catch (e) {
        n[t] = r;
    }
    return r;
};
