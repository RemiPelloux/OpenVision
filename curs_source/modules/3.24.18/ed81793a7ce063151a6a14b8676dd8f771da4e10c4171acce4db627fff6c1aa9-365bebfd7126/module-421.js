require("./module-3536.js");
var n = require("./module-5604.js"), o = require("./module-6881.js"), i = String.fromCharCode, a = n("String", "fromCodePoint"), u = encodeURIComponent, s = parseInt, c = o("".charAt), f = o([].push), h = o("".replace), l = o("".slice), p = o(/./.exec), v = "�", d = /^[0-9a-f]+$/i, g = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, y = function(t, r) {
    var e = l(t, r, r + 2);
    return p(d, e) ? s(e, 16) : NaN;
}, w = function(t) {
    for(var r = 0, e = 128; e > 0 && 0 !== (t & e); e >>= 1)r++;
    return r;
}, x = function(t) {
    var r = null, e = t.length;
    switch(e){
        case 1:
            r = t[0];
            break;
        case 2:
            r = (31 & t[0]) << 6 | 63 & t[1];
            break;
        case 3:
            r = (15 & t[0]) << 12 | (63 & t[1]) << 6 | 63 & t[2];
            break;
        case 4:
            r = (7 & t[0]) << 18 | (63 & t[1]) << 12 | (63 & t[2]) << 6 | 63 & t[3];
    }
    return null === r || r > 1114111 || r >= 55296 && r <= 57343 || r < (e > 3 ? 65536 : e > 2 ? 2048 : e > 1 ? 128 : 0) ? null : r;
}, m = function(t) {
    return 2 === t.length ? t : v;
};
module.exports = {
    decode: function(t) {
        for(var r = t.length, e = "", n = 0; n < r;){
            var o = c(t, n);
            if ("%" === o) {
                if ("%" === c(t, n + 1) || n + 3 > r) {
                    e += "%", n++;
                    continue;
                }
                var u = y(t, n + 1);
                if (u != u) {
                    e += o, n++;
                    continue;
                }
                n += 2;
                var s = w(u);
                if (0 === s) o = i(u);
                else {
                    if (1 === s || s > 4) {
                        e += v, n++;
                        continue;
                    }
                    for(var h = [
                        u
                    ], l = 1; l < s && !(++n + 3 > r || "%" !== c(t, n));){
                        var p = y(t, n + 1);
                        if (p != p || p > 191 || p < 128) break;
                        if (1 === l) {
                            if (224 === u && p < 160) break;
                            if (237 === u && p > 159) break;
                            if (240 === u && p < 144) break;
                            if (244 === u && p > 143) break;
                        }
                        f(h, p), n += 2, l++;
                    }
                    if (h.length !== s) {
                        e += v;
                        continue;
                    }
                    var d = x(h);
                    if (null === d) {
                        for(var g = 0; g < s; g++)e += v;
                        n++;
                        continue;
                    }
                    o = a(d);
                }
            }
            e += o, n++;
        }
        return e;
    },
    encode: function(t) {
        try {
            return u(t);
        } catch (r) {
            return u(h(t, g, m));
        }
    }
};
