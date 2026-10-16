import { c$d, u$d } from "./minimapCharSheet.js";
import { E } from "./tslib.es6.js";
import { lz } from "./uint.js";
import { Qkr } from "./ze.js";
var ZHo;
export { ZHo };
var __wakaru_eDy_initialized = false;
export function eDy() {
if (__wakaru_eDy_initialized) return;
__wakaru_eDy_initialized = true;
"use strict";
E(), u$d(), lz(), ZHo = class bJc {
    constructor(e, n){
        this.scale = n, this._minimapCharRendererBrand = void 0, this.charDataNormal = bJc.soften(e, 12 / 15), this.charDataLight = bJc.soften(e, 50 / 60);
    }
    static soften(e, n) {
        const i = new Uint8ClampedArray(e.length);
        for(let r = 0, s = e.length; r < s; r++)i[r] = Qkr(e[r] * n);
        return i;
    }
    renderChar(e, n, i, r, s, o, a, l, c, u, d) {
        const h = 1 * this.scale, p = 2 * this.scale, g = d ? 1 : p;
        if (n + h > e.width || i + g > e.height) {
            console.warn("bad render request outside image data");
            return;
        }
        const f = u ? this.charDataLight : this.charDataNormal, _ = c$d(r, c), b = e.width * 4, y = a.r, S = a.g, k = a.b, C = s.r - y, T = s.g - S, I = s.b - k, A = Math.max(o, l), P = e.data;
        let M = _ * h * p, O = i * b + n * 4;
        for(let N = 0; N < g; N++){
            let U = O;
            for(let j = 0; j < h; j++){
                const $ = f[M++] / 255 * (o / 255);
                P[U++] = y + C * $, P[U++] = S + T * $, P[U++] = k + I * $, P[U++] = A;
            }
            O += b;
        }
    }
    blockRenderChar(e, n, i, r, s, o, a, l) {
        const c = 1 * this.scale, u = 2 * this.scale, d = l ? 1 : u;
        if (n + c > e.width || i + d > e.height) {
            console.warn("bad render request outside image data");
            return;
        }
        const h = e.width * 4, p = .5 * (s / 255), g = o.r, f = o.g, _ = o.b, b = r.r - g, y = r.g - f, S = r.b - _, k = g + b * p, C = f + y * p, T = _ + S * p, I = Math.max(s, a), A = e.data;
        let P = i * h + n * 4;
        for(let M = 0; M < d; M++){
            let O = P;
            for(let N = 0; N < c; N++)A[O++] = k, A[O++] = C, A[O++] = T, A[O++] = I;
            P += h;
        }
    }
};

}
