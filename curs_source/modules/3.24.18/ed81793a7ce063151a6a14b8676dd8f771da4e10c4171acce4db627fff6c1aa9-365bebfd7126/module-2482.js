var n = require("./module-6893.js"), o = require("./module-997.js"), i = require("./module-6821.js"), a = ArrayBuffer.prototype;
n && !("detached" in a) && o(a, "detached", {
    configurable: !0,
    get: function() {
        return i(this);
    }
});
