var s = require("./module-3724.js"), n = require("./module-9504.js"), r = require("./module-2106.js"), a = URLSearchParams.prototype, o = n(a.forEach);
s && !("size" in a) && r(a, "size", {
    get: function() {
        var t = 0;
        return o(this, function() {
            t++;
        }), t;
    },
    configurable: !0,
    enumerable: !0
});
