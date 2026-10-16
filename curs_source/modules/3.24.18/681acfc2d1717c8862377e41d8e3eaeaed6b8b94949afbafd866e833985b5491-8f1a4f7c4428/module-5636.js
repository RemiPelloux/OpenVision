var n = require("./module-181.js"), r = n.Buffer;
function o(e, t) {
    for(var A in e)t[A] = e[A];
}
function s(e, t, A) {
    return r(e, t, A);
}
r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? module.exports = n : (o(n, exports), exports.Buffer = s), s.prototype = Object.create(r.prototype), o(r, s), s.from = function(e, t, A) {
    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
    return r(e, t, A);
}, s.alloc = function(e, t, A) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    var n = r(e);
    return void 0 !== t ? "string" == typeof A ? n.fill(t, A) : n.fill(t) : n.fill(0), n;
}, s.allocUnsafe = function(e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return r(e);
}, s.allocUnsafeSlow = function(e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return n.SlowBuffer(e);
};
