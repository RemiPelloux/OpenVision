var n;
require("./module-79896.js");
function s(e, t, r) {
    if ("function" == typeof t && (r = t, t = {}), !r) {
        if ("function" != typeof Promise) throw new TypeError("callback not provided");
        return new Promise(function(r, n) {
            s(e, t || {}, function(e, t) {
                e ? n(e) : r(t);
            });
        });
    }
    n(e, t || {}, function(e, n) {
        e && ("EACCES" === e.code || t && t.ignoreErrors) && (e = null, n = !1), r(e, n);
    });
}
n = "win32" === process.platform || global.TESTING_WINDOWS ? require("./module-61992.js") : require("./module-56198.js"), module.exports = s, s.sync = function(e, t) {
    try {
        return n.sync(e, t || {});
    } catch (e) {
        if (t && t.ignoreErrors || "EACCES" === e.code) return !1;
        throw e;
    }
};
