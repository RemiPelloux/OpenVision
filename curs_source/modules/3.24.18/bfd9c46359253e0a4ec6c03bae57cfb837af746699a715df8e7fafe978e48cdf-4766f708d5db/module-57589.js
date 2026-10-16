"use strict";
const n = require("./module-68139.js"), { CHAR_ASTERISK: s, CHAR_AT: o, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: m, CHAR_PLUS: h, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: w } = require("./module-94443.js"), v = (e)=>e === u || e === i, _ = (e)=>{
    !0 !== e.isPrefix && (e.depth = e.isGlobstar ? 1 / 0 : 1);
};
module.exports = (e, t)=>{
    const r = t || {}, b = e.length - 1, S = !0 === r.parts || !0 === r.scanToEnd, k = [], x = [], E = [];
    let I, T, C = e, P = -1, A = 0, R = 0, M = !1, J = !1, O = !1, B = !1, D = !1, q = !1, N = !1, F = !1, U = !1, L = !1, $ = 0, j = {
        value: "",
        depth: 0,
        isGlob: !1
    };
    const G = ()=>P >= b, z = ()=>C.charCodeAt(P + 1), W = ()=>(I = T, C.charCodeAt(++P));
    for(; P < b;){
        let e;
        if (T = W(), T !== i) {
            if (!0 === q || T === d) {
                for($++; !0 !== G() && (T = W());)if (T !== i) if (T !== d) {
                    if (!0 !== q && T === c && (T = W()) === c) {
                        if (M = j.isBrace = !0, O = j.isGlob = !0, L = !0, !0 === S) continue;
                        break;
                    }
                    if (!0 !== q && T === a) {
                        if (M = j.isBrace = !0, O = j.isGlob = !0, L = !0, !0 === S) continue;
                        break;
                    }
                    if (T === g && ($--, 0 === $)) {
                        q = !1, M = j.isBrace = !0, L = !0;
                        break;
                    }
                } else $++;
                else N = j.backslashes = !0, W();
                if (!0 === S) continue;
                break;
            }
            if (T !== u) {
                if (!0 !== r.noext) {
                    if (!0 === (T === h || T === o || T === s || T === f || T === l) && z() === p) {
                        if (O = j.isGlob = !0, B = j.isExtglob = !0, L = !0, T === l && P === A && (U = !0), !0 === S) {
                            for(; !0 !== G() && (T = W());)if (T !== i) {
                                if (T === y) {
                                    O = j.isGlob = !0, L = !0;
                                    break;
                                }
                            } else N = j.backslashes = !0, T = W();
                            continue;
                        }
                        break;
                    }
                }
                if (T === s) {
                    if (I === s && (D = j.isGlobstar = !0), O = j.isGlob = !0, L = !0, !0 === S) continue;
                    break;
                }
                if (T === f) {
                    if (O = j.isGlob = !0, L = !0, !0 === S) continue;
                    break;
                }
                if (T === m) {
                    for(; !0 !== G() && (e = W());)if (e !== i) {
                        if (e === w) {
                            J = j.isBracket = !0, O = j.isGlob = !0, L = !0;
                            break;
                        }
                    } else N = j.backslashes = !0, W();
                    if (!0 === S) continue;
                    break;
                }
                if (!0 === r.nonegate || T !== l || P !== A) {
                    if (!0 !== r.noparen && T === p) {
                        if (O = j.isGlob = !0, !0 === S) {
                            for(; !0 !== G() && (T = W());)if (T !== p) {
                                if (T === y) {
                                    L = !0;
                                    break;
                                }
                            } else N = j.backslashes = !0, T = W();
                            continue;
                        }
                        break;
                    }
                    if (!0 === O) {
                        if (L = !0, !0 === S) continue;
                        break;
                    }
                } else F = j.negated = !0, A++;
            } else {
                if (k.push(P), x.push(j), j = {
                    value: "",
                    depth: 0,
                    isGlob: !1
                }, !0 === L) continue;
                if (I === c && P === A + 1) {
                    A += 2;
                    continue;
                }
                R = P + 1;
            }
        } else N = j.backslashes = !0, T = W(), T === d && (q = !0);
    }
    !0 === r.noext && (B = !1, O = !1);
    let H = C, K = "", V = "";
    A > 0 && (K = C.slice(0, A), C = C.slice(A), R -= A), H && !0 === O && R > 0 ? (H = C.slice(0, R), V = C.slice(R)) : !0 === O ? (H = "", V = C) : H = C, H && "" !== H && "/" !== H && H !== C && v(H.charCodeAt(H.length - 1)) && (H = H.slice(0, -1)), !0 === r.unescape && (V && (V = n.removeBackslashes(V)), H && !0 === N && (H = n.removeBackslashes(H)));
    const Y = {
        prefix: K,
        input: e,
        start: A,
        base: H,
        glob: V,
        isBrace: M,
        isBracket: J,
        isGlob: O,
        isExtglob: B,
        isGlobstar: D,
        negated: F,
        negatedExtglob: U
    };
    if (!0 === r.tokens && (Y.maxDepth = 0, v(T) || x.push(j), Y.tokens = x), !0 === r.parts || !0 === r.tokens) {
        let t;
        for(let n = 0; n < k.length; n++){
            const s = t ? t + 1 : A, o = k[n], i = e.slice(s, o);
            r.tokens && (0 === n && 0 !== A ? (x[n].isPrefix = !0, x[n].value = K) : x[n].value = i, _(x[n]), Y.maxDepth += x[n].depth), 0 === n && "" === i || E.push(i), t = o;
        }
        if (t && t + 1 < e.length) {
            const n = e.slice(t + 1);
            E.push(n), r.tokens && (x[x.length - 1].value = n, _(x[x.length - 1]), Y.maxDepth += x[x.length - 1].depth);
        }
        Y.slashes = k, Y.parts = E;
    }
    return Y;
};
