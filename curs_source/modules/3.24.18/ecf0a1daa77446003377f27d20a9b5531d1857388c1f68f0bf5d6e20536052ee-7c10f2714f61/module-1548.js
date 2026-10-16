var s = require("./module-4576.js"), n = require("./module-9039.js"), r = require("./module-9519.js"), a = require("./module-4215.js"), o = s.structuredClone;
module.exports = !!o && !n(function() {
    if ("DENO" === a && r > 92 || "NODE" === a && r > 94 || "BROWSER" === a && r > 97) return !1;
    var t = new ArrayBuffer(8), e = o(t, {
        transfer: [
            t
        ]
    });
    return 0 !== t.byteLength || 8 !== e.byteLength;
});
