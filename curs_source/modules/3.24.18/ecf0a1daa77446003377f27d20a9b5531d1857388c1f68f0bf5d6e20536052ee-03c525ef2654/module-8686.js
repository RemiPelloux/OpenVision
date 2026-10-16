var s = require("./module-3724.js"), n = require("./module-9039.js");
module.exports = s && n(function() {
    return 42 !== Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: !1
    }).prototype;
});
