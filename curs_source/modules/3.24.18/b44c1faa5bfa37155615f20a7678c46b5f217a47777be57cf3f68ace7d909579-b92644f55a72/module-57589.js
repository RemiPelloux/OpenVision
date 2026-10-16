"use strict";
const n = require("./module-68139.js"), { CHAR_ASTERISK: s, CHAR_AT: o, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: m, CHAR_PLUS: h, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: w } = require("./module-94443.js"), v = (e)=>e === u || e === i, _ = (e)=>{
    !0 !== e.isPrefix && (e.depth = e.isGlobstar ? 1 / 0 : 1);
};
module.exports = (e, t)=>{
    const r = t || {}, A = e.length - 1, S = !0 === r.parts || !0 === r.scanToEnd, b = [], E = [], I = [];
    let C, k, x = e, T = -1, R = 0, B = 0, P = !1, J = !1, M = !1, q = !1, D = !1, O = !1, N = !1, F = !1, U = !1, L = !1, $ = 0, Q = {
        value: "",
        depth: 0,
        isGlob: !1
    };
    const j = ()=>T >= A, G = ()=>x.charCodeAt(T + 1), H = ()=>(C = k, x.charCodeAt(++T));
    for(; T < A;){
        let e;
        if (k = H(), k !== i) {
            if (!0 === O || k === d) {
                for($++; !0 !== j() && (k = H());)if (k !== i) if (k !== d) {
                    if (!0 !== O && k === c && (k = H()) === c) {
                        if (P = Q.isBrace = !0, M = Q.isGlob = !0, L = !0, !0 === S) continue;
                        break;
                    }
                    if (!0 !== O && k === a) {
                        if (P = Q.isBrace = !0, M = Q.isGlob = !0, L = !0, !0 === S) continue;
                        break;
                    }
                    if (k === g && ($--, 0 === $)) {
                        O = !1, P = Q.isBrace = !0, L = !0;
                        break;
                    }
                } else $++;
                else N = Q.backslashes = !0, H();
                if (!0 === S) continue;
                break;
            }
            if (k !== u) {
                if (!0 !== r.noext) {
                    if (!0 === (k === h || k === o || k === s || k === f || k === l) && G() === p) {
                        if (M = Q.isGlob = !0, q = Q.isExtglob = !0, L = !0, k === l && T === R && (U = !0), !0 === S) {
                            for(; !0 !== j() && (k = H());)if (k !== i) {
                                if (k === y) {
                                    M = Q.isGlob = !0, L = !0;
                                    break;
                                }
                            } else N = Q.backslashes = !0, k = H();
                            continue;
                        }
                        break;
                    }
                }
                if (k === s) {
                    if (C === s && (D = Q.isGlobstar = !0), M = Q.isGlob = !0, L = !0, !0 === S) continue;
                    break;
                }
                if (k === f) {
                    if (M = Q.isGlob = !0, L = !0, !0 === S) continue;
                    break;
                }
                if (k === m) {
                    for(; !0 !== j() && (e = H());)if (e !== i) {
                        if (e === w) {
                            J = Q.isBracket = !0, M = Q.isGlob = !0, L = !0;
                            break;
                        }
                    } else N = Q.backslashes = !0, H();
                    if (!0 === S) continue;
                    break;
                }
                if (!0 === r.nonegate || k !== l || T !== R) {
                    if (!0 !== r.noparen && k === p) {
                        if (M = Q.isGlob = !0, !0 === S) {
                            for(; !0 !== j() && (k = H());)if (k !== p) {
                                if (k === y) {
                                    L = !0;
                                    break;
                                }
                            } else N = Q.backslashes = !0, k = H();
                            continue;
                        }
                        break;
                    }
                    if (!0 === M) {
                        if (L = !0, !0 === S) continue;
                        break;
                    }
                } else F = Q.negated = !0, R++;
            } else {
                if (b.push(T), E.push(Q), Q = {
                    value: "",
                    depth: 0,
                    isGlob: !1
                }, !0 === L) continue;
                if (C === c && T === R + 1) {
                    R += 2;
                    continue;
                }
                B = T + 1;
            }
        } else N = Q.backslashes = !0, k = H(), k === d && (O = !0);
    }
    !0 === r.noext && (q = !1, M = !1);
    let z = x, W = "", V = "";
    R > 0 && (W = x.slice(0, R), x = x.slice(R), B -= R), z && !0 === M && B > 0 ? (z = x.slice(0, B), V = x.slice(B)) : !0 === M ? (z = "", V = x) : z = x, z && "" !== z && "/" !== z && z !== x && v(z.charCodeAt(z.length - 1)) && (z = z.slice(0, -1)), !0 === r.unescape && (V && (V = n.removeBackslashes(V)), z && !0 === N && (z = n.removeBackslashes(z)));
    const K = {
        prefix: W,
        input: e,
        start: R,
        base: z,
        glob: V,
        isBrace: P,
        isBracket: J,
        isGlob: M,
        isExtglob: q,
        isGlobstar: D,
        negated: F,
        negatedExtglob: U
    };
    if (!0 === r.tokens && (K.maxDepth = 0, v(k) || E.push(Q), K.tokens = E), !0 === r.parts || !0 === r.tokens) {
        let t;
        for(let n = 0; n < b.length; n++){
            const s = t ? t + 1 : R, o = b[n], i = e.slice(s, o);
            r.tokens && (0 === n && 0 !== R ? (E[n].isPrefix = !0, E[n].value = W) : E[n].value = i, _(E[n]), K.maxDepth += E[n].depth), 0 === n && "" === i || I.push(i), t = o;
        }
        if (t && t + 1 < e.length) {
            const n = e.slice(t + 1);
            I.push(n), r.tokens && (E[E.length - 1].value = n, _(E[E.length - 1]), K.maxDepth += E[E.length - 1].depth);
        }
        K.slashes = b, K.parts = I;
    }
    return K;
};
