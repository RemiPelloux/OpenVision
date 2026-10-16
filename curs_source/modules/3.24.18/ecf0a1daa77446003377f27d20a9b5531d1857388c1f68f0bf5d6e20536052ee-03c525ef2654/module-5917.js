var s = require("./module-3724.js"), n = require("./module-9039.js"), r = require("./module-4055.js");
module.exports = !s && !n(function() {
    return 7 !== Object.defineProperty(r("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
});
