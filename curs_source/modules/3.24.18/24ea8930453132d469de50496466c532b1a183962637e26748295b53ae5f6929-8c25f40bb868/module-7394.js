var globalThis2 = require("./module-4576.js");
var uncurryThisAccessor = require("./module-6706.js");
var classof = require("./module-2195.js");
var ArrayBuffer2 = globalThis2.ArrayBuffer;
var TypeError2 = globalThis2.TypeError;
module.exports = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O) {
    if (classof(O) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
    return O.byteLength;
};
