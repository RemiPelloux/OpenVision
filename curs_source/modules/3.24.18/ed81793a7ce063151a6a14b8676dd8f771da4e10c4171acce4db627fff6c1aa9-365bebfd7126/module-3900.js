var n = require("./module-5604.js"), o = require("./module-997.js"), i = require("./module-4282.js"), a = require("./module-6893.js"), u = i("species");
module.exports = function(t) {
    var r = n(t);
    a && r && !r[u] && o(r, u, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
};
