import { ZHo, eDy } from "./minimapCharRenderer.js";
import { l$d, u$d } from "./minimapCharSheet.js";
import { eWo, tDy } from "./minimapPreBaked.js";
import { E } from "./tslib.es6.js";
import { lz } from "./uint.js";
import { Qkr } from "./ze.js";
var d$d;
export { d$d };
var __wakaru_nDy_initialized = false;
export function nDy() {
if (__wakaru_nDy_initialized) return;
__wakaru_nDy_initialized = true;
"use strict";
E(), eDy(), u$d(), tDy(), lz(), d$d = class JYs {
    static create(e, n) {
        if (this.lastCreated && e === this.lastCreated.scale && n === this.lastFontFamily) return this.lastCreated;
        let i;
        return eWo[e] ? i = new ZHo(eWo[e](), e) : i = JYs.createFromSampleData(JYs.createSampleData(n).data, e), this.lastFontFamily = n, this.lastCreated = i, i;
    }
    static createSampleData(e) {
        const n = document.createElement("canvas"), i = n.getContext("2d");
        n.style.height = "16px", n.height = 16, n.width = 960, n.style.width = "960px", i.fillStyle = "#ffffff", i.font = `bold 16px ${e}`, i.textBaseline = "middle";
        let r = 0;
        for (const s of l$d)i.fillText(String.fromCharCode(s), r, 16 / 2), r += 10;
        return i.getImageData(0, 0, 960, 16);
    }
    static createFromSampleData(e, n) {
        if (e.length !== 61440) throw new Error("Unexpected source in MinimapCharRenderer");
        const r = JYs._downsample(e, n);
        return new ZHo(r, n);
    }
    static _downsampleChar(e, n, i, r, s) {
        const o = 1 * s, a = 2 * s;
        let l = r, c = 0;
        for(let u = 0; u < a; u++){
            const d = u / a * 16, h = (u + 1) / a * 16;
            for(let p = 0; p < o; p++){
                const g = p / o * 10, f = (p + 1) / o * 10;
                let _ = 0, b = 0;
                for(let S = d; S < h; S++){
                    const k = n + Math.floor(S) * 3840, C = 1 - (S - Math.floor(S));
                    for(let T = g; T < f; T++){
                        const I = 1 - (T - Math.floor(T)), A = k + Math.floor(T) * 4, P = I * C;
                        b += P, _ += e[A] * e[A + 3] / 255 * P;
                    }
                }
                const y = _ / b;
                c = Math.max(c, y), i[l++] = Qkr(y);
            }
        }
        return c;
    }
    static _downsample(e, n) {
        const i = 2 * n * 1 * n, r = i * 96, s = new Uint8ClampedArray(r);
        let o = 0, a = 0, l = 0;
        for(let c = 0; c < 96; c++)l = Math.max(l, this._downsampleChar(e, a, s, o, n)), o += i, a += 40;
        if (l > 0) {
            const c = 255 / l;
            for(let u = 0; u < r; u++)s[u] *= c;
        }
        return s;
    }
};

}
