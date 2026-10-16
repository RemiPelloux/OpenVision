var s = require("./module-4576.js"), n = Object.defineProperty;
module.exports = function(t, e) {
    try {
        n(s, t, {
            value: e,
            configurable: !0,
            writable: !0
        });
    } catch (i) {
        s[t] = e;
    }
    return e;
};
