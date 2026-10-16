import { DAf, ELl, ILl, MAf, Nct, zxt } from "./BA.js";
import { Vxt } from "./floating-ui.utils.mjs";
import { E } from "./tslib.es6.js";
var APf, RPf;
export { APf, RPf };
var __wakaru_dgw_initialized = false;
export function dgw() {
if (__wakaru_dgw_initialized) return;
__wakaru_dgw_initialized = true;
E(), Vxt(), APf = (t)=>({
        name: "arrow",
        options: t,
        async fn (e) {
            const { x: n, y: i, placement: r, rects: s, platform: o, elements: a, middlewareData: l } = e, { element: c, padding: u = 0, offsetParent: d = "real" } = Nct(t, e) || {};
            if (c == null) return {};
            const h = DAf(u), p = {
                x: n,
                y: i
            }, g = ILl(r), f = ELl(g), _ = await o.getDimensions(c), b = g === "y", y = b ? "top" : "left", S = b ? "bottom" : "right", k = b ? "clientHeight" : "clientWidth", C = s.reference[f] + s.reference[g] - p[g] - s.floating[f], T = p[g] - s.reference[g], I = d === "real" ? await o.getOffsetParent?.(c) : a.floating;
            let A = a.floating[k] || s.floating[f];
            (!A || !await o.isElement?.(I)) && (A = a.floating[k] || s.floating[f]);
            const P = C / 2 - T / 2, M = A / 2 - _[f] / 2 - 1, O = Math.min(h[y], M), N = Math.min(h[S], M), U = O, j = A - _[f] - N, $ = A / 2 - _[f] / 2 + P, H = MAf(U, $, j), G = !l.arrow && zxt(r) != null && $ !== H && s.reference[f] / 2 - ($ < U ? O : N) - _[f] / 2 < 0, q = G ? $ < U ? $ - U : $ - j : 0;
            return {
                [g]: p[g] + q,
                data: {
                    [g]: H,
                    centerOffset: $ - H - q,
                    ...G && {
                        alignmentOffset: q
                    }
                },
                reset: G
            };
        }
    }), RPf = (t, e)=>({
        ...APf(t),
        options: [
            t,
            e
        ]
    });

}
