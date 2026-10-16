var globalThis2 = require("./module-4576.js");
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis2, key, {
            value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis2[key] = value;
    }
    return value;
};
