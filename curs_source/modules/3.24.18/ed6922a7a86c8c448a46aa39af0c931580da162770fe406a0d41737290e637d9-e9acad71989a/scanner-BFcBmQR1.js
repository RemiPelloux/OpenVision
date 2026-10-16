import { x } from "./tslib.es6.js";
var PEl, LEl, NEl, Zys, OEl;
export { LEl, NEl, OEl, PEl, Zys };
var __wakaru_fqg_initialized = false;
export function fqg() {
if (__wakaru_fqg_initialized) return;
__wakaru_fqg_initialized = true;
x(), PEl = Object.defineProperty, LEl = (e, t, n)=>t in e ? PEl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, NEl = (e, t, n)=>LEl(e, typeof t != "symbol" ? t + "" : t, n), Zys = 4294967295, OEl = class {
    constructor(e, t = {}){
        NEl(this, "regexps"), this.patterns = e, this.options = t;
        const { forgiving: n = !1, cache: i, regexConstructor: r } = t;
        if (!r) throw new Error("Option `regexConstructor` is not provided");
        this.regexps = e.map((s)=>{
            if (typeof s != "string") return s;
            const o = i?.get(s);
            if (o) {
                if (o instanceof RegExp) return o;
                if (n) return null;
                throw o;
            }
            try {
                const a = r(s);
                return i?.set(s, a), a;
            } catch (a) {
                if (i?.set(s, a), n) return null;
                throw a;
            }
        });
    }
    findNextMatchSync(e, t, n) {
        const i = typeof e == "string" ? e : e.content, r = [];
        function s(o, a, c = 0) {
            return {
                index: o,
                captureIndices: a.indices.map((l)=>l == null ? {
                        start: Zys,
                        end: Zys,
                        length: 0
                    } : {
                        start: l[0] + c,
                        end: l[1] + c,
                        length: l[1] - l[0]
                    })
            };
        }
        for(let o = 0; o < this.regexps.length; o++){
            const a = this.regexps[o];
            if (a) try {
                a.lastIndex = t;
                const c = a.exec(i);
                if (!c) continue;
                if (c.index === t) return s(o, c, 0);
                r.push([
                    o,
                    c,
                    0
                ]);
            } catch (c) {
                if (this.options.forgiving) continue;
                throw c;
            }
        }
        if (r.length) {
            const o = Math.min(...r.map((a)=>a[1].index));
            for (const [a, c, l] of r)if (c.index === o) return s(a, c, l);
        }
        return null;
    }
};

}
