module.exports = s, s.sync = function(e, t) {
    return o(n.statSync(e), e, t);
};
var n = require("./module-9896.js");
function o(e, t, r) {
    return !(!e.isSymbolicLink() && !e.isFile()) && function(e, t) {
        var r = void 0 !== t.pathExt ? t.pathExt : process.env.PATHEXT;
        if (!r) return !0;
        if (-1 !== (r = r.split(";")).indexOf("")) return !0;
        for(var n = 0; n < r.length; n++){
            var o = r[n].toLowerCase();
            if (o && e.substr(-o.length).toLowerCase() === o) return !0;
        }
        return !1;
    }(t, r);
}
function s(e, t, r) {
    n.stat(e, function(n, s) {
        r(n, !n && o(s, e, t));
    });
}
