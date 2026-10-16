var s = require("./module-4576.js"), n = require("./module-9504.js"), r = require("./module-3972.js"), a = require("./module-3463.js"), o = require("./module-9297.js"), l = require("./module-2804.js"), h = require("./module-944.js"), c = require("./module-5169.js"), d = l.c2i, u = l.c2iUrl, p = s.SyntaxError, g = s.TypeError, m = n("".charAt), f = function(t, e) {
    for(var i = t.length; e < i; e++){
        var s = m(t, e);
        if (" " !== s && "\t" !== s && "\n" !== s && "\f" !== s && "\r" !== s) break;
    }
    return e;
}, b = function(t, e, i) {
    var s = t.length;
    s < 4 && (t += 2 === s ? "AA" : "A");
    var n = (e[m(t, 0)] << 18) + (e[m(t, 1)] << 12) + (e[m(t, 2)] << 6) + e[m(t, 3)], r = [
        n >> 16 & 255,
        n >> 8 & 255,
        255 & n
    ];
    if (2 === s) {
        if (i && 0 !== r[1]) throw new p("Extra bits");
        return [
            r[0]
        ];
    }
    if (3 === s) {
        if (i && 0 !== r[2]) throw new p("Extra bits");
        return [
            r[0],
            r[1]
        ];
    }
    return r;
}, v = function(t, e, i) {
    for(var s = e.length, n = 0; n < s; n++)t[i + n] = e[n];
    return i + s;
};
module.exports = function(t, e, i, s) {
    a(t), r(e);
    var n = "base64" === h(e) ? d : u, l = e ? e.lastChunkHandling : void 0;
    if (void 0 === l && (l = "loose"), "loose" !== l && "strict" !== l && "stop-before-partial" !== l) throw new g("Incorrect `lastChunkHandling` option");
    i && c(i.buffer);
    var y = t.length, w = i || [], x = 0, A = 0, _ = "", S = 0;
    if (s) for(;;){
        if ((S = f(t, S)) === y) {
            if (_.length > 0) {
                if ("stop-before-partial" === l) break;
                if ("loose" !== l) throw new p("Missing padding");
                if (1 === _.length) throw new p("Malformed padding: exactly one additional character");
                x = v(w, b(_, n, !1), x);
            }
            A = y;
            break;
        }
        var E = m(t, S);
        if (++S, "=" === E) {
            if (_.length < 2) throw new p("Padding is too early");
            if (S = f(t, S), 2 === _.length) {
                if (S === y) {
                    if ("stop-before-partial" === l) break;
                    throw new p("Malformed padding: only one =");
                }
                "=" === m(t, S) && (++S, S = f(t, S));
            }
            if (S < y) throw new p("Unexpected character after padding");
            x = v(w, b(_, n, "strict" === l), x), A = y;
            break;
        }
        if (!o(n, E)) throw new p("Unexpected character");
        var C = s - x;
        if (1 === C && 2 === _.length || 2 === C && 3 === _.length) break;
        if (4 === (_ += E).length && (x = v(w, b(_, n, !1), x), _ = "", A = S, x === s)) break;
    }
    return {
        bytes: w,
        read: A,
        written: x
    };
};
