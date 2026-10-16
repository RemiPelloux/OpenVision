import { a_g, zes } from "./minimapCharRenderer.js";
import { K9c, X9c } from "./minimapCharSheet.js";
import { Xes, c_g } from "./minimapPreBaked.js";
import { ufi } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { eN } from "./uint.js";
var Z9c;
export { Z9c };
var __wakaru_l_g_initialized = false;
export function l_g() {
if (__wakaru_l_g_initialized) return;
__wakaru_l_g_initialized = true;
"use strict";
x(), a_g(), X9c(), c_g(), eN(), Z9c = class h1r {
    static create(t, n) {
        if (this.lastCreated && t === this.lastCreated.scale && n === this.lastFontFamily) return this.lastCreated;
        let i;
        return Xes[t] ? i = new zes(Xes[t](), t) : i = h1r.createFromSampleData(h1r.createSampleData(n).data, t), this.lastFontFamily = n, this.lastCreated = i, i;
    }
    static createSampleData(t) {
        const n = document.createElement("canvas"), i = n.getContext("2d");
        n.style.height = "16px", n.height = 16, n.width = 960, n.style.width = "960px", i.fillStyle = "#ffffff", i.font = `bold 16px ${t}`, i.textBaseline = "middle";
        let r = 0;
        for (const s of K9c)i.fillText(String.fromCharCode(s), r, 16 / 2), r += 10;
        return i.getImageData(0, 0, 960, 16);
    }
    static createFromSampleData(t, n) {
        if (t.length !== 61440) throw new Error("Unexpected source in MinimapCharRenderer");
        const r = h1r._downsample(t, n);
        return new zes(r, n);
    }
    static _downsampleChar(t, n, i, r, s) {
        const o = 1 * s, a = 2 * s;
        let c = r, l = 0;
        for(let u = 0; u < a; u++){
            const h = u / a * 16, p = (u + 1) / a * 16;
            for(let g = 0; g < o; g++){
                const f = g / o * 10, v = (g + 1) / o * 10;
                let b = 0, y = 0;
                for(let E = h; E < p; E++){
                    const A = n + Math.floor(E) * 3840, R = 1 - (E - Math.floor(E));
                    for(let D = f; D < v; D++){
                        const P = 1 - (D - Math.floor(D)), N = A + Math.floor(D) * 4, O = P * R;
                        y += O, b += t[N] * t[N + 3] / 255 * O;
                    }
                }
                const T = b / y;
                l = Math.max(l, T), i[c++] = ufi(T);
            }
        }
        return l;
    }
    static _downsample(t, n) {
        const i = 2 * n * 1 * n, r = i * 96, s = new Uint8ClampedArray(r);
        let o = 0, a = 0, c = 0;
        for(let l = 0; l < 96; l++)c = Math.max(c, this._downsampleChar(t, a, s, o, n)), o += i, a += 40;
        if (c > 0) {
            const l = 255 / c;
            for(let u = 0; u < r; u++)s[u] *= l;
        }
        return s;
    }
};

}
