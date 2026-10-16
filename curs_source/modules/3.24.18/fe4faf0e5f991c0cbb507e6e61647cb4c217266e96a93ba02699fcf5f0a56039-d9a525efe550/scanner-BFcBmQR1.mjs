import { Ye } from "./marked.esm.js";
import { i } from "./plugin-brand-icon.js";
var RFt, PFt, D3r;
export { D3r, PFt, RFt };
var __wakaru_I5i_initialized = false;
export function I5i() {
if (__wakaru_I5i_initialized) return;
__wakaru_I5i_initialized = true;
RFt = 4294967295, D3r = (PFt = class {
    constructor(r, e = {}){
        Ye(this, "regexps"), this.patterns = r, this.options = e;
        const { forgiving: a = !1, cache: s, regexConstructor: l } = e;
        if (!l) throw new Error("Option `regexConstructor` is not provided");
        this.regexps = r.map((u)=>{
            if (typeof u != "string") return u;
            const p = s?.get(u);
            if (p) {
                if (p instanceof RegExp) return p;
                if (a) return null;
                throw p;
            }
            try {
                const m = l(u);
                return s?.set(u, m), m;
            } catch (m) {
                if (s?.set(u, m), a) return null;
                throw m;
            }
        });
    }
    findNextMatchSync(r, e, a) {
        const s = typeof r == "string" ? r : r.content, l = [];
        function u(p, m, b = 0) {
            return {
                index: p,
                captureIndices: m.indices.map((g)=>g == null ? {
                        start: RFt,
                        end: RFt,
                        length: 0
                    } : {
                        start: g[0] + b,
                        end: g[1] + b,
                        length: g[1] - g[0]
                    })
            };
        }
        i(u, "toResult");
        for(let p = 0; p < this.regexps.length; p++){
            const m = this.regexps[p];
            if (m) try {
                m.lastIndex = e;
                const b = m.exec(s);
                if (!b) continue;
                if (b.index === e) return u(p, b, 0);
                l.push([
                    p,
                    b,
                    0
                ]);
            } catch (b) {
                if (this.options.forgiving) continue;
                throw b;
            }
        }
        if (l.length) {
            const p = Math.min(...l.map((m)=>m[1].index));
            for (const [m, b, g] of l)if (b.index === p) return u(m, b, g);
        }
        return null;
    }
}, i(PFt, "JavaScriptScanner"), PFt);

}
