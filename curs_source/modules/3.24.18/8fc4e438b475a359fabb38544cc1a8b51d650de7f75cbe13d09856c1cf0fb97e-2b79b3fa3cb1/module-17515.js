"use strict";
var t = function() {
    for(var e, t = [], r = 0; r < 256; r++){
        e = r;
        for(var n = 0; n < 8; n++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[r] = e;
    }
    return t;
}();
module.exports = function(e, r, n, a) {
    var i = t, o = a + n;
    e ^= -1;
    for(var s = a; s < o; s++)e = e >>> 8 ^ i[255 & (e ^ r[s])];
    return -1 ^ e;
};
