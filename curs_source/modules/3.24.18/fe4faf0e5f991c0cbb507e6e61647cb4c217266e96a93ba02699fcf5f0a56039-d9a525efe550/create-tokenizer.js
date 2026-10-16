import { Ka, Zl } from "./index_41.js";
import { ik, l3, vP } from "./index_69.js";
import { Dfe, QNe } from "./index_73.js";
import { i } from "./plugin-brand-icon.js";
function Ufr(r, e, a) {
    let s = {
        _bufferIndex: -1,
        _index: 0,
        line: a && a.line || 1,
        column: a && a.column || 1,
        offset: a && a.offset || 0
    };
    const l = {}, u = [];
    let p = [], m = [], b = !0;
    const g = {
        attempt: O(z),
        check: O(q),
        consume: P,
        enter: L,
        exit: j,
        interrupt: O(q, {
            interrupt: !0
        })
    }, _ = {
        code: null,
        containerState: {},
        defineSkip: I,
        events: [],
        now: $,
        parser: r,
        previous: null,
        sliceSerialize: E,
        sliceStream: A,
        write: C
    };
    let v = e.tokenize.call(_, g), x;
    return e.resolveAll && u.push(e), _;
    function C(Z) {
        return p = l3(p, Z), N(), p[p.length - 1] !== null ? [] : (B(e, 0), _.events = Dfe(u, _.events, _), _.events);
    }
    i(C, "write");
    function E(Z, K) {
        return Wfr(A(Z), K);
    }
    i(E, "sliceSerialize");
    function A(Z) {
        return Gfr(p, Z);
    }
    i(A, "sliceStream");
    function $() {
        const { _bufferIndex: Z, _index: K, line: Y, column: J, offset: re } = s;
        return {
            _bufferIndex: Z,
            _index: K,
            line: Y,
            column: J,
            offset: re
        };
    }
    i($, "now");
    function I(Z) {
        l[Z.line] = Z.column, H();
    }
    i(I, "defineSkip");
    function N() {
        let Z;
        for(; s._index < p.length;){
            const K = p[s._index];
            if (typeof K == "string") for(Z = s._index, s._bufferIndex < 0 && (s._bufferIndex = 0); s._index === Z && s._bufferIndex < K.length;)R(K.charCodeAt(s._bufferIndex));
            else R(K);
        }
    }
    i(N, "main");
    function R(Z) {
        b = void 0, x = Z, v = v(Z);
    }
    i(R, "go");
    function P(Z) {
        Ka(Z) ? (s.line++, s.column = 1, s.offset += Z === -3 ? 2 : 1, H()) : Z !== -1 && (s.column++, s.offset++), s._bufferIndex < 0 ? s._index++ : (s._bufferIndex++, s._bufferIndex === p[s._index].length && (s._bufferIndex = -1, s._index++)), _.previous = Z, b = !0;
    }
    i(P, "consume");
    function L(Z, K) {
        const Y = K || {};
        return Y.type = Z, Y.start = $(), _.events.push([
            "enter",
            Y,
            _
        ]), m.push(Y), Y;
    }
    i(L, "enter");
    function j(Z) {
        const K = m.pop();
        return K.end = $(), _.events.push([
            "exit",
            K,
            _
        ]), K;
    }
    i(j, "exit");
    function z(Z, K) {
        B(Z, K.from);
    }
    i(z, "onsuccessfulconstruct");
    function q(Z, K) {
        K.restore();
    }
    i(q, "onsuccessfulcheck");
    function O(Z, K) {
        return Y;
        function Y(J, re, ne) {
            let ae, W, oe, ce;
            return Array.isArray(J) ? le(J) : "tokenize" in J ? le([
                J
            ]) : Q(J);
            function Q(ue) {
                return ge;
                function ge(_e) {
                    const ve = _e !== null && ue[_e], Se = _e !== null && ue.null, Ne = [
                        ...Array.isArray(ve) ? ve : ve ? [
                            ve
                        ] : [],
                        ...Array.isArray(Se) ? Se : Se ? [
                            Se
                        ] : []
                    ];
                    return le(Ne)(_e);
                }
            }
            function le(ue) {
                return ae = ue, W = 0, ue.length === 0 ? ne : he(ue[W]);
            }
            function he(ue) {
                return ge;
                function ge(_e) {
                    return ce = V(), oe = ue, ue.partial || (_.currentConstruct = ue), ue.name && _.parser.constructs.disable.null.includes(ue.name) ? be(_e) : ue.tokenize.call(K ? Object.assign(Object.create(_), K) : _, g, me, be)(_e);
                }
            }
            function me(ue) {
                return b = !0, Z(oe, ce), re;
            }
            function be(ue) {
                return b = !0, ce.restore(), ++W < ae.length ? he(ae[W]) : ne;
            }
        }
    }
    i(O, "constructFactory");
    function B(Z, K) {
        Z.resolveAll && !u.includes(Z) && u.push(Z), Z.resolve && ik(_.events, K, _.events.length - K, Z.resolve(_.events.slice(K), _)), Z.resolveTo && (_.events = Z.resolveTo(_.events, _));
    }
    i(B, "addResult");
    function V() {
        const Z = $(), K = _.previous, Y = _.currentConstruct, J = _.events.length, re = Array.from(m);
        return {
            from: J,
            restore: ne
        };
        function ne() {
            s = Z, _.previous = K, _.currentConstruct = Y, _.events.length = J, m = re, H();
        }
    }
    i(V, "store");
    function H() {
        s.line in l && s.column < 2 && (s.column = l[s.line], s.offset += l[s.line] - 1);
    }
    i(H, "accountForPotentialSkip");
}
function Gfr(r, e) {
    const a = e.start._index, s = e.start._bufferIndex, l = e.end._index, u = e.end._bufferIndex;
    let p;
    if (a === l) p = [
        r[a].slice(s, u)
    ];
    else {
        if (p = r.slice(a, l), s > -1) {
            const m = p[0];
            typeof m == "string" ? p[0] = m.slice(s) : p.shift();
        }
        u > 0 && p.push(r[l].slice(0, u));
    }
    return p;
}
function Wfr(r, e) {
    let a = -1;
    const s = [];
    let l;
    for(; ++a < r.length;){
        const u = r[a];
        let p;
        if (typeof u == "string") p = u;
        else switch(u){
            case -5:
                {
                    p = "\r";
                    break;
                }
            case -4:
                {
                    p = `
`;
                    break;
                }
            case -3:
                {
                    p = `\r
`;
                    break;
                }
            case -2:
                {
                    p = e ? " " : "	";
                    break;
                }
            case -1:
                {
                    if (!e && l) continue;
                    p = " ";
                    break;
                }
            default:
                p = String.fromCharCode(u);
        }
        l = u === -2, s.push(p);
    }
    return s.join("");
}
export { Gfr, Ufr, Wfr };
var __wakaru_Nxi_initialized = false;
export function Nxi() {
if (__wakaru_Nxi_initialized) return;
__wakaru_Nxi_initialized = true;
Zl(), vP(), QNe(), i(Ufr, "createTokenizer"), i(Gfr, "sliceChunks"), i(Wfr, "serializeChunks");

}
