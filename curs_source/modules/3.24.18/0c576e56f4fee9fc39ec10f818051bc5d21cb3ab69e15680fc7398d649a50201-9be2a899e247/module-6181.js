var n;
require("./module-9896.js");
function o(e, t, r) {
    if ("function" == typeof t && (r = t, t = {}), !r) {
        if ("function" != typeof Promise) throw new TypeError("callback not provided");
        return new Promise(function(r, n) {
            o(e, t || {}, function(e, t) {
                e ? n(e) : r(t);
            });
        });
    }
    n(e, t || {}, function(e, n) {
        e && ("EACCES" === e.code || t && t.ignoreErrors) && (e = null, n = !1), r(e, n);
    });
}
n = "win32" === process.platform || global.TESTING_WINDOWS ? require("./module-1992.js") : require("./module-6198.js"), module.exports = o, o.sync = function(e, t) {
    try {
        return n.sync(e, t || {});
    } catch (e) {
        if (t && t.ignoreErrors || "EACCES" === e.code) return !1;
        throw e;
    }
};
