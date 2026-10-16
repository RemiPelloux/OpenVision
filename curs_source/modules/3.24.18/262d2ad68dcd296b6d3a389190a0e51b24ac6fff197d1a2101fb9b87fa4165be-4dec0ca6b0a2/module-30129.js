"use strict";
var n, o = require("./module-20181.js"), s = o.Buffer, i = {};
for(n in o)o.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (i[n] = o[n]);
var a = i.Buffer = {};
for(n in s)s.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = s[n]);
if (i.Buffer.prototype = s.prototype, a.from && a.from !== Uint8Array.from || (a.from = function(e, t, r) {
    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
    if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    return s(e, t, r);
}), a.alloc || (a.alloc = function(e, t, r) {
    if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
    if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var n = s(e);
    return t && 0 !== t.length ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
}), !i.kStringMaxLength) try {
    i.kStringMaxLength = process.binding("buffer").kStringMaxLength;
} catch (e) {}
i.constants || (i.constants = {
    MAX_LENGTH: i.kMaxLength
}, i.kStringMaxLength && (i.constants.MAX_STRING_LENGTH = i.kStringMaxLength)), module.exports = i;
