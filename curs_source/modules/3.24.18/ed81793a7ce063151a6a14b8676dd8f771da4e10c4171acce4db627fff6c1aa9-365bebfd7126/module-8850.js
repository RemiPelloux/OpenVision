var n, o, i, a, u = require("./module-9117.js"), s = require("./module-9822.js"), c = require("./module-9059.js"), f = u.structuredClone, h = u.ArrayBuffer, l = u.MessageChannel, p = !1;
if (c) p = function(t) {
    f(t, {
        transfer: [
            t
        ]
    });
};
else if (h) try {
    l || (n = s("worker_threads")) && (l = n.MessageChannel), l && (o = new l, i = new h(2), a = function(t) {
        o.port1.postMessage(null, [
            t
        ]);
    }, 2 === i.byteLength && (a(i), 0 === i.byteLength && (p = a)));
} catch (t) {}
module.exports = p;
