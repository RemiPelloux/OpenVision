module.exports = o, o.sync = function(e, t) {
    return s(n.statSync(e), t);
};
var n = require("./module-79896.js");
function o(e, t, r) {
    n.stat(e, function(e, n) {
        r(e, !e && s(n, t));
    });
}
function s(e, t) {
    return e.isFile() && function(e, t) {
        var r = e.mode, n = e.uid, o = e.gid, s = void 0 !== t.uid ? t.uid : process.getuid && process.getuid(), i = void 0 !== t.gid ? t.gid : process.getgid && process.getgid(), a = parseInt("100", 8), l = parseInt("010", 8), c = parseInt("001", 8), u = a | l;
        return r & c || r & l && o === i || r & a && n === s || r & u && 0 === s;
    }(e, t);
}
