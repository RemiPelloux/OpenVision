module.exports = o, o.sync = function(e, t) {
    return s(n.statSync(e), e, t);
};
var n = require("./module-79896.js");
function s(e, t, r) {
    return !(!e.isSymbolicLink() && !e.isFile()) && function(e, t) {
        var r = void 0 !== t.pathExt ? t.pathExt : process.env.PATHEXT;
        if (!r) return !0;
        if (-1 !== (r = r.split(";")).indexOf("")) return !0;
        for(var n = 0; n < r.length; n++){
            var s = r[n].toLowerCase();
            if (s && e.substr(-s.length).toLowerCase() === s) return !0;
        }
        return !1;
    }(t, r);
}
function o(e, t, r) {
    n.stat(e, function(n, o) {
        r(n, !n && s(o, e, t));
    });
}
