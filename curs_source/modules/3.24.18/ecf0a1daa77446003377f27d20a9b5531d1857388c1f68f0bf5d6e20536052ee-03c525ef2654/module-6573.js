var s = require("./module-3724.js"), n = require("./module-2106.js"), r = require("./module-3238.js"), a = ArrayBuffer.prototype;
s && !("detached" in a) && n(a, "detached", {
    configurable: !0,
    get: function() {
        return r(this);
    }
});
