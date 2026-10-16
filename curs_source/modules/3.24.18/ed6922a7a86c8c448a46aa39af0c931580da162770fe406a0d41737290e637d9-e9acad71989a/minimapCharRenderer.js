import { X9c, Y9c } from "./minimapCharSheet.js";
import { ufi } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { eN } from "./uint.js";
var zes;
export { zes };
var __wakaru_a_g_initialized = false;
export function a_g() {
if (__wakaru_a_g_initialized) return;
__wakaru_a_g_initialized = true;
"use strict";
x(), X9c(), eN(), zes = class OIa {
    constructor(t, n){
        this.scale = n, this._minimapCharRendererBrand = void 0, this.charDataNormal = OIa.soften(t, 12 / 15), this.charDataLight = OIa.soften(t, 50 / 60);
    }
    static soften(t, n) {
        const i = new Uint8ClampedArray(t.length);
        for(let r = 0, s = t.length; r < s; r++)i[r] = ufi(t[r] * n);
        return i;
    }
    renderChar(t, n, i, r, s, o, a, c, l, u, h) {
        const p = 1 * this.scale, g = 2 * this.scale, f = h ? 1 : g;
        if (n + p > t.width || i + f > t.height) {
            console.warn("bad render request outside image data");
            return;
        }
        const v = u ? this.charDataLight : this.charDataNormal, b = Y9c(r, l), y = t.width * 4, T = a.r, E = a.g, A = a.b, R = s.r - T, D = s.g - E, P = s.b - A, N = Math.max(o, c), O = t.data;
        let F = b * p * g, H = i * y + n * 4;
        for(let $ = 0; $ < f; $++){
            let W = H;
            for(let G = 0; G < p; G++){
                const q = v[F++] / 255 * (o / 255);
                O[W++] = T + R * q, O[W++] = E + D * q, O[W++] = A + P * q, O[W++] = N;
            }
            H += y;
        }
    }
    blockRenderChar(t, n, i, r, s, o, a, c) {
        const l = 1 * this.scale, u = 2 * this.scale, h = c ? 1 : u;
        if (n + l > t.width || i + h > t.height) {
            console.warn("bad render request outside image data");
            return;
        }
        const p = t.width * 4, g = .5 * (s / 255), f = o.r, v = o.g, b = o.b, y = r.r - f, T = r.g - v, E = r.b - b, A = f + y * g, R = v + T * g, D = b + E * g, P = Math.max(s, a), N = t.data;
        let O = i * p + n * 4;
        for(let F = 0; F < h; F++){
            let H = O;
            for(let $ = 0; $ < l; $++)N[H++] = A, N[H++] = R, N[H++] = D, N[H++] = P;
            O += p;
        }
    }
};

}
