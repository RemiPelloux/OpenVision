var s, n, r, a, o = require("./module-4576.js"), l = require("./module-9429.js"), h = require("./module-1548.js"), c = o.structuredClone, d = o.ArrayBuffer, u = o.MessageChannel, p = !1;
if (h) p = function(t) {
    c(t, {
        transfer: [
            t
        ]
    });
};
else if (d) try {
    u || (s = l("worker_threads")) && (u = s.MessageChannel), u && (n = new u, r = new d(2), a = function(t) {
        n.port1.postMessage(null, [
            t
        ]);
    }, 2 === r.byteLength && (a(r), 0 === r.byteLength && (p = a)));
} catch (t) {}
module.exports = p;
