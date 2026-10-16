import { z5e } from "./floating-ui.utils.js";
import { Lre, Mfe, S0i, _0i, kds, v0i } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Nsl, Osl;
export { Nsl, Osl };
var __wakaru_OPg_initialized = false;
export function OPg() {
if (__wakaru_OPg_initialized) return;
__wakaru_OPg_initialized = true;
x(), z5e(), Nsl = (e)=>({
        name: "arrow",
        options: e,
        async fn (t) {
            const { x: n, y: i, placement: r, rects: s, platform: o, elements: a, middlewareData: c } = t, { element: l, padding: u = 0, offsetParent: h = "real" } = Mfe(e, t) || {};
            if (l == null) return {};
            const p = S0i(u), g = {
                x: n,
                y: i
            }, f = _0i(r), v = v0i(f), b = await o.getDimensions(l), y = f === "y", T = y ? "top" : "left", E = y ? "bottom" : "right", A = y ? "clientHeight" : "clientWidth", R = s.reference[v] + s.reference[f] - g[f] - s.floating[v], D = g[f] - s.reference[f], P = h === "real" ? await o.getOffsetParent?.(l) : a.floating;
            let N = a.floating[A] || s.floating[v];
            (!N || !await o.isElement?.(P)) && (N = a.floating[A] || s.floating[v]);
            const O = R / 2 - D / 2, F = N / 2 - b[v] / 2 - 1, H = Math.min(p[T], F), $ = Math.min(p[E], F), W = H, G = N - b[v] - $, q = N / 2 - b[v] / 2 + O, z = kds(W, q, G), X = !c.arrow && Lre(r) != null && q !== z && s.reference[v] / 2 - (q < W ? H : $) - b[v] / 2 < 0, Y = X ? q < W ? q - W : q - G : 0;
            return {
                [f]: g[f] + Y,
                data: {
                    [f]: z,
                    centerOffset: q - z - Y,
                    ...X && {
                        alignmentOffset: Y
                    }
                },
                reset: X
            };
        }
    }), Osl = (e, t)=>({
        ...Nsl(e),
        options: [
            e,
            t
        ]
    });

}
