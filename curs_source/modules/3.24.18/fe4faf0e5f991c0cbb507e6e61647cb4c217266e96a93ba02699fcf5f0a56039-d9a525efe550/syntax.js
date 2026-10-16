import { I0, Pfe, Rfe, Wy, Zl, kP, op } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function Ylr() {
    return {
        text: kC
    };
}
function Jlr(r, e, a) {
    const s = this;
    let l, u;
    return p;
    function p(v) {
        return !YNe(v) || !gRt.call(s, s.previous) || JNe(s.events) ? a(v) : (r.enter("literalAutolink"), r.enter("literalAutolinkEmail"), m(v));
    }
    function m(v) {
        return YNe(v) ? (r.consume(v), m) : v === 64 ? (r.consume(v), b) : a(v);
    }
    function b(v) {
        return v === 46 ? r.check(sur, _, g)(v) : v === 45 || v === 95 || I0(v) ? (u = !0, r.consume(v), b) : _(v);
    }
    function g(v) {
        return r.consume(v), l = !0, b;
    }
    function _(v) {
        return u && l && Wy(s.previous) ? (r.exit("literalAutolinkEmail"), r.exit("literalAutolink"), e(v)) : a(v);
    }
}
function Qlr(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return p !== 87 && p !== 119 || !fRt.call(s, s.previous) || JNe(s.events) ? a(p) : (r.enter("literalAutolink"), r.enter("literalAutolinkWww"), r.check(our, r.attempt(bRt, r.attempt(yRt, u), a), a)(p));
    }
    function u(p) {
        return r.exit("literalAutolinkWww"), r.exit("literalAutolink"), e(p);
    }
}
function eur(r, e, a) {
    const s = this;
    let l = "", u = !1;
    return p;
    function p(v) {
        return (v === 72 || v === 104) && hRt.call(s, s.previous) && !JNe(s.events) ? (r.enter("literalAutolink"), r.enter("literalAutolinkHttp"), l += String.fromCodePoint(v), r.consume(v), m) : a(v);
    }
    function m(v) {
        if (Wy(v) && l.length < 5) return l += String.fromCodePoint(v), r.consume(v), m;
        if (v === 58) {
            const x = l.toLowerCase();
            if (x === "http" || x === "https") return r.consume(v), b;
        }
        return a(v);
    }
    function b(v) {
        return v === 47 ? (r.consume(v), u ? g : (u = !0, b)) : a(v);
    }
    function g(v) {
        return v === null || Rfe(v) || op(v) || kP(v) || Pfe(v) ? a(v) : r.attempt(bRt, r.attempt(yRt, _), a)(v);
    }
    function _(v) {
        return r.exit("literalAutolinkHttp"), r.exit("literalAutolink"), e(v);
    }
}
function tur(r, e, a) {
    let s = 0;
    return l;
    function l(p) {
        return (p === 87 || p === 119) && s < 3 ? (s++, r.consume(p), l) : p === 46 && s === 3 ? (r.consume(p), u) : a(p);
    }
    function u(p) {
        return p === null ? a(p) : e(p);
    }
}
function nur(r, e, a) {
    let s, l, u;
    return p;
    function p(g) {
        return g === 46 || g === 95 ? r.check(wRt, b, m)(g) : g === null || op(g) || kP(g) || g !== 45 && Pfe(g) ? b(g) : (u = !0, r.consume(g), p);
    }
    function m(g) {
        return g === 95 ? s = !0 : (l = s, s = void 0), r.consume(g), p;
    }
    function b(g) {
        return l || s || !u ? a(g) : e(g);
    }
}
function rur(r, e) {
    let a = 0, s = 0;
    return l;
    function l(p) {
        return p === 40 ? (a++, r.consume(p), l) : p === 41 && s < a ? u(p) : p === 33 || p === 34 || p === 38 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 60 || p === 63 || p === 93 || p === 95 || p === 126 ? r.check(wRt, e, u)(p) : p === null || op(p) || kP(p) ? e(p) : (r.consume(p), l);
    }
    function u(p) {
        return p === 41 && s++, r.consume(p), l;
    }
}
function iur(r, e, a) {
    return s;
    function s(m) {
        return m === 33 || m === 34 || m === 39 || m === 41 || m === 42 || m === 44 || m === 46 || m === 58 || m === 59 || m === 63 || m === 95 || m === 126 ? (r.consume(m), s) : m === 38 ? (r.consume(m), u) : m === 93 ? (r.consume(m), l) : m === 60 || m === null || op(m) || kP(m) ? e(m) : a(m);
    }
    function l(m) {
        return m === null || m === 40 || m === 91 || op(m) || kP(m) ? e(m) : s(m);
    }
    function u(m) {
        return Wy(m) ? p(m) : a(m);
    }
    function p(m) {
        return m === 59 ? (r.consume(m), s) : Wy(m) ? (r.consume(m), p) : a(m);
    }
}
function aur(r, e, a) {
    return s;
    function s(u) {
        return r.consume(u), l;
    }
    function l(u) {
        return I0(u) ? a(u) : e(u);
    }
}
function fRt(r) {
    return r === null || r === 40 || r === 42 || r === 95 || r === 91 || r === 93 || r === 126 || op(r);
}
function hRt(r) {
    return !Wy(r);
}
function gRt(r) {
    return !(r === 47 || YNe(r));
}
function YNe(r) {
    return r === 43 || r === 45 || r === 46 || r === 95 || I0(r);
}
function JNe(r) {
    let e = r.length, a = !1;
    for(; e--;){
        const s = r[e][1];
        if ((s.type === "labelLink" || s.type === "labelImage") && !s._balanced) {
            a = !0;
            break;
        }
        if (s._gfmAutolinkLiteralWalkedInto) {
            a = !1;
            break;
        }
    }
    return r.length > 0 && !a && (r[r.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), a;
}
var our, bRt, yRt, wRt, sur, _Rt, kRt, PS, kC, xP;
export { JNe, Jlr, PS, Qlr, YNe, Ylr, _Rt, aur, bRt, eur, fRt, gRt, hRt, iur, kC, kRt, nur, our, rur, sur, tur, wRt, xP, yRt };
var __wakaru_M3i_initialized = false;
export function M3i() {
if (__wakaru_M3i_initialized) return;
__wakaru_M3i_initialized = true;
for(Zl(), our = {
    tokenize: tur,
    partial: !0
}, bRt = {
    tokenize: nur,
    partial: !0
}, yRt = {
    tokenize: rur,
    partial: !0
}, wRt = {
    tokenize: iur,
    partial: !0
}, sur = {
    tokenize: aur,
    partial: !0
}, _Rt = {
    name: "wwwAutolink",
    tokenize: Qlr,
    previous: fRt
}, kRt = {
    name: "protocolAutolink",
    tokenize: eur,
    previous: hRt
}, PS = {
    name: "emailAutolink",
    tokenize: Jlr,
    previous: gRt
}, kC = {}, i(Ylr, "gfmAutolinkLiteral"), xP = 48; xP < 123;)kC[xP] = PS, xP++, xP === 58 ? xP = 65 : xP === 91 && (xP = 97);
kC[43] = PS, kC[45] = PS, kC[46] = PS, kC[95] = PS, kC[72] = [
    PS,
    kRt
], kC[104] = [
    PS,
    kRt
], kC[87] = [
    PS,
    _Rt
], kC[119] = [
    PS,
    _Rt
], i(Jlr, "tokenizeEmailAutolink"), i(Qlr, "tokenizeWwwAutolink"), i(eur, "tokenizeProtocolAutolink"), i(tur, "tokenizeWwwPrefix"), i(nur, "tokenizeDomain"), i(rur, "tokenizePath"), i(iur, "tokenizeTrail"), i(aur, "tokenizeEmailDomainDotTrail"), i(fRt, "previousWww"), i(hRt, "previousProtocol"), i(gRt, "previousEmail"), i(YNe, "gfmAtext"), i(JNe, "previousUnbalanced");

}
