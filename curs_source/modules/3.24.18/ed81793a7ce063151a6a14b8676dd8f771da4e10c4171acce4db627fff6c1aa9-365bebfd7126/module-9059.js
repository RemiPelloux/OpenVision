var n = require("./module-9117.js"), o = require("./module-5234.js"), i = require("./module-3008.js"), a = require("./module-1078.js"), u = n.structuredClone;
module.exports = !!u && !o(function() {
    if ("DENO" === a && i > 92 || "NODE" === a && i > 94 || "BROWSER" === a && i > 97) return !1;
    var t = new ArrayBuffer(8), r = u(t, {
        transfer: [
            t
        ]
    });
    return 0 !== t.byteLength || 8 !== r.byteLength;
});
