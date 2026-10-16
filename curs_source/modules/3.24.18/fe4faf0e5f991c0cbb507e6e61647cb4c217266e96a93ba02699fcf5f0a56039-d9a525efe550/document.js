import { Ka, Zl } from "./index_41.js";
import { ik, vP } from "./index_69.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function xfr(r) {
    const e = this, a = [];
    let s = 0, l, u, p;
    return m;
    function m(R) {
        if (s < a.length) {
            const P = a[s];
            return e.containerState = P[1], r.attempt(P[0].continuation, b, g)(R);
        }
        return g(R);
    }
    function b(R) {
        if (s++, e.containerState._closeFlow) {
            e.containerState._closeFlow = void 0, l && N();
            const P = e.events.length;
            let L = P, j;
            for(; L--;)if (e.events[L][0] === "exit" && e.events[L][1].type === "chunkFlow") {
                j = e.events[L][1].end;
                break;
            }
            I(s);
            let z = P;
            for(; z < e.events.length;)e.events[z][1].end = {
                ...j
            }, z++;
            return ik(e.events, L + 1, 0, e.events.slice(P)), e.events.length = z, g(R);
        }
        return m(R);
    }
    function g(R) {
        if (s === a.length) {
            if (!l) return x(R);
            if (l.currentConstruct && l.currentConstruct.concrete) return E(R);
            e.interrupt = !!(l.currentConstruct && !l._gfmTableDynamicInterruptHack);
        }
        return e.containerState = {}, r.check(vPt, _, v)(R);
    }
    function _(R) {
        return l && N(), I(s), x(R);
    }
    function v(R) {
        return e.parser.lazy[e.now().line] = s !== a.length, p = e.now().offset, E(R);
    }
    function x(R) {
        return e.containerState = {}, r.attempt(vPt, C, E)(R);
    }
    function C(R) {
        return s++, a.push([
            e.currentConstruct,
            e.containerState
        ]), x(R);
    }
    function E(R) {
        if (R === null) {
            l && N(), I(0), r.consume(R);
            return;
        }
        return l = l || e.parser.flow(e.now()), r.enter("chunkFlow", {
            _tokenizer: l,
            contentType: "flow",
            previous: u
        }), A(R);
    }
    function A(R) {
        if (R === null) {
            $(r.exit("chunkFlow"), !0), I(0), r.consume(R);
            return;
        }
        return Ka(R) ? (r.consume(R), $(r.exit("chunkFlow")), s = 0, e.interrupt = void 0, m) : (r.consume(R), A);
    }
    function $(R, P) {
        const L = e.sliceStream(R);
        if (P && L.push(null), R.previous = u, u && (u.next = R), u = R, l.defineSkip(R.start), l.write(L), e.parser.lazy[R.start.line]) {
            let j = l.events.length;
            for(; j--;)if (l.events[j][1].start.offset < p && (!l.events[j][1].end || l.events[j][1].end.offset > p)) return;
            const z = e.events.length;
            let q = z, O, B;
            for(; q--;)if (e.events[q][0] === "exit" && e.events[q][1].type === "chunkFlow") {
                if (O) {
                    B = e.events[q][1].end;
                    break;
                }
                O = !0;
            }
            for(I(s), j = z; j < e.events.length;)e.events[j][1].end = {
                ...B
            }, j++;
            ik(e.events, q + 1, 0, e.events.slice(z)), e.events.length = j;
        }
    }
    function I(R) {
        let P = a.length;
        for(; P-- > R;){
            const L = a[P];
            e.containerState = L[1], L[0].exit.call(e, r);
        }
        a.length = R;
    }
    function N() {
        l.write([
            null
        ]), u = void 0, l = void 0, e.containerState._closeFlow = void 0;
    }
}
function Cfr(r, e, a) {
    return wc(r, r.attempt(this.parser.constructs.document, e, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var Sfr, vPt;
export { Cfr, Sfr, vPt, xfr };
var __wakaru_Txi_initialized = false;
export function Txi() {
if (__wakaru_Txi_initialized) return;
__wakaru_Txi_initialized = true;
ng(), Zl(), vP(), Sfr = {
    tokenize: xfr
}, vPt = {
    tokenize: Cfr
}, i(xfr, "initializeDocument"), i(Cfr, "tokenizeContainer");

}
