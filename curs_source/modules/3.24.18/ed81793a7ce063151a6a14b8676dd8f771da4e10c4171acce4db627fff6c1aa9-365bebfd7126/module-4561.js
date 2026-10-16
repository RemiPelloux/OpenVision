var n = require("./module-6881.js"), o = require("./module-4418.js"), i = SyntaxError, a = parseInt, u = String.fromCharCode, s = n("".charAt), c = n("".slice), f = n(/./.exec), h = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "\t"
}, l = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
module.exports = function(t, r) {
    for(var e = !0, n = ""; r < t.length;){
        var v = s(t, r);
        if ("\\" === v) {
            var d = c(t, r, r + 2);
            if (o(h, d)) n += h[d], r += 2;
            else {
                if ("\\u" !== d) throw new i('Unknown escape sequence: "' + d + '"');
                var g = c(t, r += 2, r + 4);
                if (!f(l, g)) throw new i("Bad Unicode escape at: " + r);
                n += u(a(g, 16)), r += 4;
            }
        } else {
            if ('"' === v) {
                e = !1, r++;
                break;
            }
            if (f(p, v)) throw new i("Bad control character in string literal at: " + r);
            n += v, r++;
        }
    }
    if (e) throw new i("Unterminated string at: " + r);
    return {
        value: n,
        end: r
    };
};
