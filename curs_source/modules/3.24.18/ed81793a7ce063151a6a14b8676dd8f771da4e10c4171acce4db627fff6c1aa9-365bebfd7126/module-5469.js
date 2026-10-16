var n = require("./module-5234.js");
module.exports = n(function() {
    if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", {
            value: 8
        });
    }
});
