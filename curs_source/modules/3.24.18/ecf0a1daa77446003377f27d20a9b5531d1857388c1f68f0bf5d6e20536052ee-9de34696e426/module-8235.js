var s = require("./module-9504.js"), n = require("./module-9297.js"), r = SyntaxError, a = parseInt, o = String.fromCharCode, l = s("".charAt), h = s("".slice), c = s(/./.exec), d = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "\t"
}, u = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
module.exports = function(t, e) {
    for(var i = !0, s = ""; e < t.length;){
        var g = l(t, e);
        if ("\\" === g) {
            var m = h(t, e, e + 2);
            if (n(d, m)) s += d[m], e += 2;
            else {
                if ("\\u" !== m) throw new r('Unknown escape sequence: "' + m + '"');
                var f = h(t, e += 2, e + 4);
                if (!c(u, f)) throw new r("Bad Unicode escape at: " + e);
                s += o(a(f, 16)), e += 4;
            }
        } else {
            if ('"' === g) {
                i = !1, e++;
                break;
            }
            if (c(p, g)) throw new r("Bad control character in string literal at: " + e);
            s += g, e++;
        }
    }
    if (i) throw new r("Unterminated string at: " + e);
    return {
        value: s,
        end: e
    };
};
