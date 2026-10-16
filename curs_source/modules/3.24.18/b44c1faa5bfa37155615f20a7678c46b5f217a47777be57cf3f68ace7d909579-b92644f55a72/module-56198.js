module.exports = s, s.sync = function(e, t) {
    return o(n.statSync(e), t);
};
var n = require("./module-79896.js");
function s(e, t, r) {
    n.stat(e, function(e, n) {
        r(e, !e && o(n, t));
    });
}
function o(e, t) {
    return e.isFile() && function(e, t) {
        var r = e.mode, n = e.uid, s = e.gid, o = void 0 !== t.uid ? t.uid : process.getuid && process.getuid(), i = void 0 !== t.gid ? t.gid : process.getgid && process.getgid(), a = parseInt("100", 8), c = parseInt("010", 8), l = parseInt("001", 8), u = a | c;
        return r & l || r & c && s === i || r & a && n === o || r & u && 0 === o;
    }(e, t);
}
