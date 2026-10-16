import { i } from "./plugin-brand-icon.js";
function xPt(r) {
    return {
        resolveAll: CPt(r === "text" ? Tfr : void 0),
        tokenize: e
    };
    function e(a) {
        const s = this, l = this.parser.constructs[r], u = a.attempt(l, p, m);
        return p;
        function p(_) {
            return g(_) ? u(_) : m(_);
        }
        function m(_) {
            if (_ === null) {
                a.consume(_);
                return;
            }
            return a.enter("data"), a.consume(_), b;
        }
        function b(_) {
            return g(_) ? (a.exit("data"), u(_)) : (a.consume(_), b);
        }
        function g(_) {
            if (_ === null) return !0;
            const v = l[_];
            let x = -1;
            if (v) for(; ++x < v.length;){
                const C = v[x];
                if (!C.previous || C.previous.call(s, s.previous)) return !0;
            }
            return !1;
        }
    }
}
function CPt(r) {
    return e;
    function e(a, s) {
        let l = -1, u;
        for(; ++l <= a.length;)u === void 0 ? a[l] && a[l][1].type === "data" && (u = l, l++) : (!a[l] || a[l][1].type !== "data") && (l !== u + 2 && (a[u][1].end = a[l - 1][1].end, a.splice(u + 2, l - u - 2), l = u + 2), u = void 0);
        return r ? r(a, s) : a;
    }
}
function Tfr(r, e) {
    let a = 0;
    for(; ++a <= r.length;)if ((a === r.length || r[a][1].type === "lineEnding") && r[a - 1][1].type === "data") {
        const s = r[a - 1][1], l = e.sliceStream(s);
        let u = l.length, p = -1, m = 0, b;
        for(; u--;){
            const g = l[u];
            if (typeof g == "string") {
                for(p = g.length; g.charCodeAt(p - 1) === 32;)m++, p--;
                if (p) break;
                p = -1;
            } else if (g === -2) b = !0, m++;
            else if (g !== -1) {
                u++;
                break;
            }
        }
        if (e._contentTypeTextTrailing && a === r.length && (m = 0), m) {
            const g = {
                type: a === r.length || b || m < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                    _bufferIndex: u ? p : s.start._bufferIndex + p,
                    _index: s.start._index + u,
                    line: s.end.line,
                    column: s.end.column - m,
                    offset: s.end.offset - m
                },
                end: {
                    ...s.end
                }
            };
            s.end = {
                ...g.start
            }, s.start.offset === s.end.offset ? Object.assign(s, g) : (r.splice(a, 0, [
                "enter",
                g,
                e
            ], [
                "exit",
                g,
                e
            ]), a += 2);
        }
        a++;
    }
    return r;
}
var $fr, Ifr, Nfr;
export { $fr, CPt, Ifr, Nfr, Tfr, xPt };
var __wakaru_Mfr_initialized = false;
export function Mfr() {
if (__wakaru_Mfr_initialized) return;
__wakaru_Mfr_initialized = true;
$fr = {
    resolveAll: CPt()
}, Ifr = xPt("string"), Nfr = xPt("text"), i(xPt, "initializeFactory"), i(CPt, "createResolver"), i(Tfr, "resolveAllLineSuffixes");

}
