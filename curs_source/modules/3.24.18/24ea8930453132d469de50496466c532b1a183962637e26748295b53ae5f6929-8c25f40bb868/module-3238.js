var globalThis2 = require("./module-4576.js");
var NATIVE_ARRAY_BUFFER = require("./module-7811.js");
var arrayBufferByteLength = require("./module-7394.js");
var DataView2 = globalThis2.DataView;
module.exports = function(O) {
    if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
    try {
        new DataView2(O);
        return false;
    } catch (error) {
        return true;
    }
};
