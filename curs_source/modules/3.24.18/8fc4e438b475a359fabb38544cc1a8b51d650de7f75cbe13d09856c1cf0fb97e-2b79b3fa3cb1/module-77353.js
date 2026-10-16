"use strict";
var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
function n(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
exports.assign = function(e) {
    for(var t = Array.prototype.slice.call(arguments, 1); t.length;){
        var r = t.shift();
        if (r) {
            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
            for(var a in r)n(r, a) && (e[a] = r[a]);
        }
    }
    return e;
}, exports.shrinkBuf = function(e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
};
var a = {
    arraySet: function(e, t, r, n, a) {
        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), a);
        else for(var i = 0; i < n; i++)e[a + i] = t[r + i];
    },
    flattenChunks: function(e) {
        var t, r, n, a, i, o;
        for(n = 0, t = 0, r = e.length; t < r; t++)n += e[t].length;
        for(o = new Uint8Array(n), a = 0, t = 0, r = e.length; t < r; t++)i = e[t], o.set(i, a), a += i.length;
        return o;
    }
}, i = {
    arraySet: function(e, t, r, n, a) {
        for(var i = 0; i < n; i++)e[a + i] = t[r + i];
    },
    flattenChunks: function(e) {
        return [].concat.apply([], e);
    }
};
exports.setTyped = function(e) {
    e ? (exports.Buf8 = Uint8Array, exports.Buf16 = Uint16Array, exports.Buf32 = Int32Array, exports.assign(exports, a)) : (exports.Buf8 = Array, exports.Buf16 = Array, exports.Buf32 = Array, exports.assign(exports, i));
}, exports.setTyped(r);
