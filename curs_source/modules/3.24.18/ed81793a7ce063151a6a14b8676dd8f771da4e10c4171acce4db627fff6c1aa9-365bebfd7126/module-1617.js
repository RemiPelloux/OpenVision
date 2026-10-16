var n = require("./module-9117.js"), o = require("./module-1025.js"), i = require("./module-8689.js"), a = n.ArrayBuffer, u = n.TypeError;
module.exports = a && o(a.prototype, "byteLength", "get") || function(t) {
    if ("ArrayBuffer" !== i(t)) throw new u("ArrayBuffer expected");
    return t.byteLength;
};
