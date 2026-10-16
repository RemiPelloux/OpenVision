"use strict";
const t = require("./module-8977.js"), { CHAR_ASTERISK: s, CHAR_AT: o, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: i, CHAR_DOT: l, CHAR_EXCLAMATION_MARK: d, CHAR_FORWARD_SLASH: m, CHAR_LEFT_CURLY_BRACE: c, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: u, CHAR_QUESTION_MARK: g, CHAR_RIGHT_CURLY_BRACE: T, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: k } = require("./module-557.js"), _ = (e)=>e === m || e === r, E = (e)=>{
    !0 !== e.isPrefix && (e.depth = e.isGlobstar ? 1 / 0 : 1);
};
module.exports = (e, a)=>{
    const n = a || {}, f = e.length - 1, C = !0 === n.parts || !0 === n.scanToEnd, I = [], v = [], y = [];
    let S, R, N = e, B = -1, w = 0, b = 0, Q = !1, D = !1, M = !1, O = !1, U = !1, F = !1, P = !1, L = !1, G = !1, x = !1, V = 0, Y = {
        value: "",
        depth: 0,
        isGlob: !1
    };
    const q = ()=>B >= f, H = ()=>N.charCodeAt(B + 1), J = ()=>(S = R, N.charCodeAt(++B));
    for(; B < f;){
        let e;
        if (R = J(), R !== r) {
            if (!0 === F || R === c) {
                for(V++; !0 !== q() && (R = J());)if (R !== r) if (R !== c) {
                    if (!0 !== F && R === l && (R = J()) === l) {
                        if (Q = Y.isBrace = !0, M = Y.isGlob = !0, x = !0, !0 === C) continue;
                        break;
                    }
                    if (!0 !== F && R === i) {
                        if (Q = Y.isBrace = !0, M = Y.isGlob = !0, x = !0, !0 === C) continue;
                        break;
                    }
                    if (R === T && (V--, 0 === V)) {
                        F = !1, Q = Y.isBrace = !0, x = !0;
                        break;
                    }
                } else V++;
                else P = Y.backslashes = !0, J();
                if (!0 === C) continue;
                break;
            }
            if (R !== m) {
                if (!0 !== n.noext) {
                    if (!0 === (R === u || R === o || R === s || R === g || R === d) && H() === p) {
                        if (M = Y.isGlob = !0, O = Y.isExtglob = !0, x = !0, R === d && B === w && (G = !0), !0 === C) {
                            for(; !0 !== q() && (R = J());)if (R !== r) {
                                if (R === h) {
                                    M = Y.isGlob = !0, x = !0;
                                    break;
                                }
                            } else P = Y.backslashes = !0, R = J();
                            continue;
                        }
                        break;
                    }
                }
                if (R === s) {
                    if (S === s && (U = Y.isGlobstar = !0), M = Y.isGlob = !0, x = !0, !0 === C) continue;
                    break;
                }
                if (R === g) {
                    if (M = Y.isGlob = !0, x = !0, !0 === C) continue;
                    break;
                }
                if (R === A) {
                    for(; !0 !== q() && (e = J());)if (e !== r) {
                        if (e === k) {
                            D = Y.isBracket = !0, M = Y.isGlob = !0, x = !0;
                            break;
                        }
                    } else P = Y.backslashes = !0, J();
                    if (!0 === C) continue;
                    break;
                }
                if (!0 === n.nonegate || R !== d || B !== w) {
                    if (!0 !== n.noparen && R === p) {
                        if (M = Y.isGlob = !0, !0 === C) {
                            for(; !0 !== q() && (R = J());)if (R !== p) {
                                if (R === h) {
                                    x = !0;
                                    break;
                                }
                            } else P = Y.backslashes = !0, R = J();
                            continue;
                        }
                        break;
                    }
                    if (!0 === M) {
                        if (x = !0, !0 === C) continue;
                        break;
                    }
                } else L = Y.negated = !0, w++;
            } else {
                if (I.push(B), v.push(Y), Y = {
                    value: "",
                    depth: 0,
                    isGlob: !1
                }, !0 === x) continue;
                if (S === l && B === w + 1) {
                    w += 2;
                    continue;
                }
                b = B + 1;
            }
        } else P = Y.backslashes = !0, R = J(), R === c && (F = !0);
    }
    !0 === n.noext && (O = !1, M = !1);
    let W = N, K = "", j = "";
    w > 0 && (K = N.slice(0, w), N = N.slice(w), b -= w), W && !0 === M && b > 0 ? (W = N.slice(0, b), j = N.slice(b)) : !0 === M ? (W = "", j = N) : W = N, W && "" !== W && "/" !== W && W !== N && _(W.charCodeAt(W.length - 1)) && (W = W.slice(0, -1)), !0 === n.unescape && (j && (j = t.removeBackslashes(j)), W && !0 === P && (W = t.removeBackslashes(W)));
    const $ = {
        prefix: K,
        input: e,
        start: w,
        base: W,
        glob: j,
        isBrace: Q,
        isBracket: D,
        isGlob: M,
        isExtglob: O,
        isGlobstar: U,
        negated: L,
        negatedExtglob: G
    };
    if (!0 === n.tokens && ($.maxDepth = 0, _(R) || v.push(Y), $.tokens = v), !0 === n.parts || !0 === n.tokens) {
        let a;
        for(let t = 0; t < I.length; t++){
            const s = a ? a + 1 : w, o = I[t], r = e.slice(s, o);
            n.tokens && (0 === t && 0 !== w ? (v[t].isPrefix = !0, v[t].value = K) : v[t].value = r, E(v[t]), $.maxDepth += v[t].depth), 0 === t && "" === r || y.push(r), a = o;
        }
        if (a && a + 1 < e.length) {
            const t = e.slice(a + 1);
            y.push(t), n.tokens && (v[v.length - 1].value = t, E(v[v.length - 1]), $.maxDepth += v[v.length - 1].depth);
        }
        $.slashes = I, $.parts = y;
    }
    return $;
};
