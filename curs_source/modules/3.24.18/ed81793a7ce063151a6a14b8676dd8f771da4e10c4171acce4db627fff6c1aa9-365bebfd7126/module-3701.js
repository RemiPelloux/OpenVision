var n = require("./module-8689.js"), o = require("./module-380.js"), i = require("./module-5629.js").f, a = require("./module-7825.js"), u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
module.exports.f = function(t) {
    return u && "Window" === n(t) ? function(t) {
        try {
            return i(t);
        } catch (t) {
            return a(u);
        }
    }(t) : i(o(t));
};
