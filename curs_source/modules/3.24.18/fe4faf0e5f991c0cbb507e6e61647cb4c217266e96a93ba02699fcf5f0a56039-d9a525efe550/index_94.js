import { i } from "./plugin-brand-icon.js";
var __wakaru_gxi_cache;
export function gxi() {
if (__wakaru_gxi_cache) return __wakaru_gxi_cache.exports;
var r = {};
var e = { exports: r };
__wakaru_gxi_cache = e;
var a = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, s = /\n/g, l = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, p = /^:\s*/, m = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, b = /^[;\s]*/, g = /^\s+|\s+$/g, _ = `
`, v = "/", x = "*", C = "", E = "comment", A = "declaration";
e.exports = function(I, N) {
    if (typeof I != "string") throw new TypeError("First argument must be a string");
    if (!I) return [];
    N = N || {};
    var R = 1, P = 1;
    function L(J) {
        var re = J.match(s);
        re && (R += re.length);
        var ne = J.lastIndexOf(_);
        P = ~ne ? J.length - ne : P + J.length;
    }
    i(L, "updatePosition");
    function j() {
        var J = {
            line: R,
            column: P
        };
        return function(re) {
            return re.position = new z(J), V(), re;
        };
    }
    i(j, "position");
    function z(J) {
        this.start = J, this.end = {
            line: R,
            column: P
        }, this.source = N.source;
    }
    i(z, "Position"), z.prototype.content = I;
    var q = [];
    function O(J) {
        var re = new Error(N.source + ":" + R + ":" + P + ": " + J);
        if (re.reason = J, re.filename = N.source, re.line = R, re.column = P, re.source = I, N.silent) q.push(re);
        else throw re;
    }
    i(O, "error");
    function B(J) {
        var re = J.exec(I);
        if (re) {
            var ne = re[0];
            return L(ne), I = I.slice(ne.length), re;
        }
    }
    i(B, "match");
    function V() {
        B(l);
    }
    i(V, "whitespace");
    function H(J) {
        var re;
        for(J = J || []; re = Z();)re !== !1 && J.push(re);
        return J;
    }
    i(H, "comments");
    function Z() {
        var J = j();
        if (!(v != I.charAt(0) || x != I.charAt(1))) {
            for(var re = 2; C != I.charAt(re) && (x != I.charAt(re) || v != I.charAt(re + 1));)++re;
            if (re += 2, C === I.charAt(re - 1)) return O("End of comment missing");
            var ne = I.slice(2, re - 2);
            return P += 2, L(ne), I = I.slice(re), P += 2, J({
                type: E,
                comment: ne
            });
        }
    }
    i(Z, "comment");
    function K() {
        var J = j(), re = B(u);
        if (re) {
            if (Z(), !B(p)) return O("property missing ':'");
            var ne = B(m), ae = J({
                type: A,
                property: $(re[0].replace(a, C)),
                value: ne ? $(ne[0].replace(a, C)) : C
            });
            return B(b), ae;
        }
    }
    i(K, "declaration");
    function Y() {
        var J = [];
        H(J);
        for(var re; re = K();)re !== !1 && (J.push(re), H(J));
        return J;
    }
    return i(Y, "declarations"), V(), Y();
};
function $(I) {
    return I ? I.replace(g, C) : C;
}
i($, "trim");

return e.exports;
}
