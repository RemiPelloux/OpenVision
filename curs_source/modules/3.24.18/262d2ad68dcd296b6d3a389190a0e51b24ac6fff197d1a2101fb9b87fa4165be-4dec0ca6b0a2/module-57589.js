"use strict";
const n = require("./module-68139.js"), { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: l, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: h, CHAR_PLUS: m, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: v } = require("./module-94443.js"), w = (e)=>e === u || e === i, b = (e)=>{
    !0 !== e.isPrefix && (e.depth = e.isGlobstar ? 1 / 0 : 1);
};
module.exports = (e, t)=>{
    const r = t || {}, _ = e.length - 1, S = !0 === r.parts || !0 === r.scanToEnd, x = [], k = [], E = [];
    let T, C, I = e, A = -1, P = 0, M = 0, R = !1, O = !1, D = !1, N = !1, F = !1, L = !1, U = !1, B = !1, $ = !1, q = !1, j = 0, J = {
        value: "",
        depth: 0,
        isGlob: !1
    };
    const z = ()=>A >= _, H = ()=>I.charCodeAt(A + 1), W = ()=>(T = C, I.charCodeAt(++A));
    for(; A < _;){
        let e;
        if (C = W(), C !== i) {
            if (!0 === L || C === d) {
                for(j++; !0 !== z() && (C = W());)if (C !== i) if (C !== d) {
                    if (!0 !== L && C === l && (C = W()) === l) {
                        if (R = J.isBrace = !0, D = J.isGlob = !0, q = !0, !0 === S) continue;
                        break;
                    }
                    if (!0 !== L && C === a) {
                        if (R = J.isBrace = !0, D = J.isGlob = !0, q = !0, !0 === S) continue;
                        break;
                    }
                    if (C === g && (j--, 0 === j)) {
                        L = !1, R = J.isBrace = !0, q = !0;
                        break;
                    }
                } else j++;
                else U = J.backslashes = !0, W();
                if (!0 === S) continue;
                break;
            }
            if (C !== u) {
                if (!0 !== r.noext) {
                    if (!0 === (C === m || C === s || C === o || C === f || C === c) && H() === p) {
                        if (D = J.isGlob = !0, N = J.isExtglob = !0, q = !0, C === c && A === P && ($ = !0), !0 === S) {
                            for(; !0 !== z() && (C = W());)if (C !== i) {
                                if (C === y) {
                                    D = J.isGlob = !0, q = !0;
                                    break;
                                }
                            } else U = J.backslashes = !0, C = W();
                            continue;
                        }
                        break;
                    }
                }
                if (C === o) {
                    if (T === o && (F = J.isGlobstar = !0), D = J.isGlob = !0, q = !0, !0 === S) continue;
                    break;
                }
                if (C === f) {
                    if (D = J.isGlob = !0, q = !0, !0 === S) continue;
                    break;
                }
                if (C === h) {
                    for(; !0 !== z() && (e = W());)if (e !== i) {
                        if (e === v) {
                            O = J.isBracket = !0, D = J.isGlob = !0, q = !0;
                            break;
                        }
                    } else U = J.backslashes = !0, W();
                    if (!0 === S) continue;
                    break;
                }
                if (!0 === r.nonegate || C !== c || A !== P) {
                    if (!0 !== r.noparen && C === p) {
                        if (D = J.isGlob = !0, !0 === S) {
                            for(; !0 !== z() && (C = W());)if (C !== p) {
                                if (C === y) {
                                    q = !0;
                                    break;
                                }
                            } else U = J.backslashes = !0, C = W();
                            continue;
                        }
                        break;
                    }
                    if (!0 === D) {
                        if (q = !0, !0 === S) continue;
                        break;
                    }
                } else B = J.negated = !0, P++;
            } else {
                if (x.push(A), k.push(J), J = {
                    value: "",
                    depth: 0,
                    isGlob: !1
                }, !0 === q) continue;
                if (T === l && A === P + 1) {
                    P += 2;
                    continue;
                }
                M = A + 1;
            }
        } else U = J.backslashes = !0, C = W(), C === d && (L = !0);
    }
    !0 === r.noext && (N = !1, D = !1);
    let G = I, Y = "", V = "";
    P > 0 && (Y = I.slice(0, P), I = I.slice(P), M -= P), G && !0 === D && M > 0 ? (G = I.slice(0, M), V = I.slice(M)) : !0 === D ? (G = "", V = I) : G = I, G && "" !== G && "/" !== G && G !== I && w(G.charCodeAt(G.length - 1)) && (G = G.slice(0, -1)), !0 === r.unescape && (V && (V = n.removeBackslashes(V)), G && !0 === U && (G = n.removeBackslashes(G)));
    const K = {
        prefix: Y,
        input: e,
        start: P,
        base: G,
        glob: V,
        isBrace: R,
        isBracket: O,
        isGlob: D,
        isExtglob: N,
        isGlobstar: F,
        negated: B,
        negatedExtglob: $
    };
    if (!0 === r.tokens && (K.maxDepth = 0, w(C) || k.push(J), K.tokens = k), !0 === r.parts || !0 === r.tokens) {
        let t;
        for(let n = 0; n < x.length; n++){
            const o = t ? t + 1 : P, s = x[n], i = e.slice(o, s);
            r.tokens && (0 === n && 0 !== P ? (k[n].isPrefix = !0, k[n].value = Y) : k[n].value = i, b(k[n]), K.maxDepth += k[n].depth), 0 === n && "" === i || E.push(i), t = s;
        }
        if (t && t + 1 < e.length) {
            const n = e.slice(t + 1);
            E.push(n), r.tokens && (k[k.length - 1].value = n, b(k[k.length - 1]), K.maxDepth += k[k.length - 1].depth);
        }
        K.slashes = x, K.parts = E;
    }
    return K;
};
