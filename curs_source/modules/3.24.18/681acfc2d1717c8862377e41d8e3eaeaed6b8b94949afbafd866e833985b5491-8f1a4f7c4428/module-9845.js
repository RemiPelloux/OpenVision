"use strict";
var n, r = require("./module-181.js"), o = r.Buffer, s = {};
for(n in r)r.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (s[n] = r[n]);
var i = s.Buffer = {};
for(n in o)o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (i[n] = o[n]);
if (s.Buffer.prototype = o.prototype, i.from && i.from !== Uint8Array.from || (i.from = function(e, t, A) {
    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
    if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    return o(e, t, A);
}), i.alloc || (i.alloc = function(e, t, A) {
    if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
    if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var n = o(e);
    return t && 0 !== t.length ? "string" == typeof A ? n.fill(t, A) : n.fill(t) : n.fill(0), n;
}), !s.kStringMaxLength) try {
    s.kStringMaxLength = process.binding("buffer").kStringMaxLength;
} catch (e) {}
s.constants || (s.constants = {
    MAX_LENGTH: s.kMaxLength
}, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), module.exports = s;
