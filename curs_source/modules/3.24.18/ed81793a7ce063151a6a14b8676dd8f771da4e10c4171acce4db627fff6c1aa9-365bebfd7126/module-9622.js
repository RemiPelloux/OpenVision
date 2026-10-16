var n = require("./module-6893.js"), o = require("./module-5234.js"), i = require("./module-5926.js");
module.exports = !n && !o(function() {
    return 7 !== Object.defineProperty(i("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
});
