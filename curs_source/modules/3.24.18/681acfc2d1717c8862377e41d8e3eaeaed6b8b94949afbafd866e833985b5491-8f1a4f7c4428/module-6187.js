var A = Math.pow(2, 8) - 1, n = Math.pow(2, 16) - 1, r = Math.pow(2, 32) - 1, o = Math.pow(2, 7) - 1, s = Math.pow(2, 15) - 1, i = Math.pow(2, 31) - 1;
exports.getPointerArray = function(e) {
    var t = e - 1;
    if (t <= A) return Uint8Array;
    if (t <= n) return Uint16Array;
    if (t <= r) return Uint32Array;
    throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
}, exports.getSignedPointerArray = function(e) {
    var t = e - 1;
    return t <= o ? Int8Array : t <= s ? Int16Array : t <= i ? Int32Array : Float64Array;
}, exports.getNumberType = function(e) {
    return e === (0 | e) ? -1 === Math.sign(e) ? e <= 127 && e >= -128 ? Int8Array : e <= 32767 && e >= -32768 ? Int16Array : Int32Array : e <= 255 ? Uint8Array : e <= 65535 ? Uint16Array : Uint32Array : Float64Array;
};
var a = {
    Uint8Array: 1,
    Int8Array: 2,
    Uint16Array: 3,
    Int16Array: 4,
    Uint32Array: 5,
    Int32Array: 6,
    Float32Array: 7,
    Float64Array: 8
};
exports.getMinimalRepresentation = function(e, A) {
    var n, r, o, s, i, c = null, l = 0;
    for(s = 0, i = e.length; s < i; s++)o = A ? A(e[s]) : e[s], r = exports.getNumberType(o), (n = a[r.name]) > l && (l = n, c = r);
    return c;
}, exports.isTypedArray = function(e) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(e);
}, exports.concat = function() {
    var e, t, A, n = 0;
    for(e = 0, A = arguments.length; e < A; e++)n += arguments[e].length;
    var r = new arguments[0].constructor(n);
    for(e = 0, t = 0; e < A; e++)r.set(arguments[e], t), t += arguments[e].length;
    return r;
}, exports.indices = function(e) {
    for(var A = new (exports.getPointerArray(e))(e), n = 0; n < e; n++)A[n] = n;
    return A;
};
