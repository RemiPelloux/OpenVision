import { E } from "./tslib.es6.js";
var eAh, tAh, nAh, bla, iAh;
export { bla, eAh, iAh, nAh, tAh };
var __wakaru_GoS_initialized = false;
export function GoS() {
if (__wakaru_GoS_initialized) return;
__wakaru_GoS_initialized = true;
E(), eAh = Object.defineProperty, tAh = (t, e, n)=>e in t ? eAh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, nAh = (t, e, n)=>tAh(t, typeof e != "symbol" ? e + "" : e, n), bla = 4294967295, iAh = class {
    constructor(t, e = {}){
        nAh(this, "regexps"), this.patterns = t, this.options = e;
        const { forgiving: n = !1, cache: i, regexConstructor: r } = e;
        if (!r) throw new Error("Option `regexConstructor` is not provided");
        this.regexps = t.map((s)=>{
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
    findNextMatchSync(t, e, n) {
        const i = typeof t == "string" ? t : t.content, r = [];
        function s(o, a, l = 0) {
            return {
                index: o,
                captureIndices: a.indices.map((c)=>c == null ? {
                        start: bla,
                        end: bla,
                        length: 0
                    } : {
                        start: c[0] + l,
                        end: c[1] + l,
                        length: c[1] - c[0]
                    })
            };
        }
        for(let o = 0; o < this.regexps.length; o++){
            const a = this.regexps[o];
            if (a) try {
                a.lastIndex = e;
                const l = a.exec(i);
                if (!l) continue;
                if (l.index === e) return s(o, l, 0);
                r.push([
                    o,
                    l,
                    0
                ]);
            } catch (l) {
                if (this.options.forgiving) continue;
                throw l;
            }
        }
        if (r.length) {
            const o = Math.min(...r.map((a)=>a[1].index));
            for (const [a, l, c] of r)if (l.index === o) return s(a, l, c);
        }
        return null;
    }
};

}
