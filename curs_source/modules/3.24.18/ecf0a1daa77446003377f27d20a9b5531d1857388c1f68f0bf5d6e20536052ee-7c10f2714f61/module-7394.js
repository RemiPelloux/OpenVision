var s = require("./module-4576.js"), n = require("./module-6706.js"), r = require("./module-2195.js"), a = s.ArrayBuffer, o = s.TypeError;
module.exports = a && n(a.prototype, "byteLength", "get") || function(t) {
    if ("ArrayBuffer" !== r(t)) throw new o("ArrayBuffer expected");
    return t.byteLength;
};
