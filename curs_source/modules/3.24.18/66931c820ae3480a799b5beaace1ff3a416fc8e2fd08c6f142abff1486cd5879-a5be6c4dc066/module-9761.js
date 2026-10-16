"use strict";
module.exports = function(e, t, r, n) {
    for(var a = 65535 & e, i = e >>> 16 & 65535, o = 0; 0 !== r;){
        r -= o = r > 2e3 ? 2e3 : r;
        do {
            i = i + (a = a + t[n++] | 0) | 0;
        }while (--o)
        a %= 65521, i %= 65521;
    }
    return a | i << 16;
};
