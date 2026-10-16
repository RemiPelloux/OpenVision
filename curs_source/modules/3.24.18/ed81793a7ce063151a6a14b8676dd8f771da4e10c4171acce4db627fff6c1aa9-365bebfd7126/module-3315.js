var n = require("./module-6893.js"), o = require("./module-5234.js");
module.exports = n && o(function() {
    return 42 !== Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: !1
    }).prototype;
});
