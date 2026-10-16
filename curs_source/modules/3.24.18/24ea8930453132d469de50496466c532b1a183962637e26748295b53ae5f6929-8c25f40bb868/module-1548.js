var globalThis2 = require("./module-4576.js");
var fails = require("./module-9039.js");
var V8 = require("./module-9519.js");
var ENVIRONMENT = require("./module-4215.js");
var structuredClone2 = globalThis2.structuredClone;
module.exports = !!structuredClone2 && !fails(function() {
    if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
    var buffer = new ArrayBuffer(8);
    var clone = structuredClone2(buffer, {
        transfer: [
            buffer
        ]
    });
    return buffer.byteLength !== 0 || clone.byteLength !== 8;
});
