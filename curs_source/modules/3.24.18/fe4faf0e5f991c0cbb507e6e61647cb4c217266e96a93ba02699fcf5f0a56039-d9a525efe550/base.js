import { i } from "./plugin-brand-icon.js";
var eGt, xAr;
export { eGt, xAr };
var __wakaru_vCi_initialized = false;
export function vCi() {
if (__wakaru_vCi_initialized) return;
__wakaru_vCi_initialized = true;
eGt = class {
    diff(e, a, s = {}) {
        let l;
        typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
        const u = this.castInput(e, s), p = this.castInput(a, s), m = this.removeEmpty(this.tokenize(u, s)), b = this.removeEmpty(this.tokenize(p, s));
        return this.diffWithOptionsObj(m, b, s, l);
    }
    diffWithOptionsObj(e, a, s, l) {
        var u;
        const p = i((N)=>{
            if (N = this.postProcess(N, s), l) {
                setTimeout(function() {
                    l(N);
                }, 0);
                return;
            } else return N;
        }, "done"), m = a.length, b = e.length;
        let g = 1, _ = m + b;
        s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
        const v = (u = s.timeout) !== null && u !== void 0 ? u : 1 / 0, x = Date.now() + v, C = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ];
        let E = this.extractCommon(C[0], a, e, 0, s);
        if (C[0].oldPos + 1 >= b && E + 1 >= m) return p(this.buildValues(C[0].lastComponent, a, e));
        let A = -1 / 0, $ = 1 / 0;
        const I = i(()=>{
            for(let N = Math.max(A, -g); N <= Math.min($, g); N += 2){
                let R;
                const P = C[N - 1], L = C[N + 1];
                P && (C[N - 1] = void 0);
                let j = !1;
                if (L) {
                    const q = L.oldPos - N;
                    j = L && 0 <= q && q < m;
                }
                const z = P && P.oldPos + 1 < b;
                if (!j && !z) {
                    C[N] = void 0;
                    continue;
                }
                if (!z || j && P.oldPos < L.oldPos ? R = this.addToPath(L, !0, !1, 0, s) : R = this.addToPath(P, !1, !0, 1, s), E = this.extractCommon(R, a, e, N, s), R.oldPos + 1 >= b && E + 1 >= m) return p(this.buildValues(R.lastComponent, a, e)) || !0;
                C[N] = R, R.oldPos + 1 >= b && ($ = Math.min($, N - 1)), E + 1 >= m && (A = Math.max(A, N + 1));
            }
            g++;
        }, "execEditLength");
        if (l) i(function N() {
            setTimeout(function() {
                if (g > _ || Date.now() > x) return l(void 0);
                I() || N();
            }, 0);
        }, "exec")();
        else for(; g <= _ && Date.now() <= x;){
            const N = I();
            if (N) return N;
        }
    }
    addToPath(e, a, s, l, u) {
        const p = e.lastComponent;
        return p && !u.oneChangePerToken && p.added === a && p.removed === s ? {
            oldPos: e.oldPos + l,
            lastComponent: {
                count: p.count + 1,
                added: a,
                removed: s,
                previousComponent: p.previousComponent
            }
        } : {
            oldPos: e.oldPos + l,
            lastComponent: {
                count: 1,
                added: a,
                removed: s,
                previousComponent: p
            }
        };
    }
    extractCommon(e, a, s, l, u) {
        const p = a.length, m = s.length;
        let b = e.oldPos, g = b - l, _ = 0;
        for(; g + 1 < p && b + 1 < m && this.equals(s[b + 1], a[g + 1], u);)g++, b++, _++, u.oneChangePerToken && (e.lastComponent = {
            count: 1,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        });
        return _ && !u.oneChangePerToken && (e.lastComponent = {
            count: _,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        }), e.oldPos = b, g;
    }
    equals(e, a, s) {
        return s.comparator ? s.comparator(e, a) : e === a || !!s.ignoreCase && e.toLowerCase() === a.toLowerCase();
    }
    removeEmpty(e) {
        const a = [];
        for(let s = 0; s < e.length; s++)e[s] && a.push(e[s]);
        return a;
    }
    castInput(e, a) {
        return e;
    }
    tokenize(e, a) {
        return Array.from(e);
    }
    join(e) {
        return e.join("");
    }
    postProcess(e, a) {
        return e;
    }
    get useLongestToken() {
        return !1;
    }
    buildValues(e, a, s) {
        const l = [];
        let u;
        for(; e;)l.push(e), u = e.previousComponent, delete e.previousComponent, e = u;
        l.reverse();
        const p = l.length;
        let m = 0, b = 0, g = 0;
        for(; m < p; m++){
            const _ = l[m];
            if (_.removed) _.value = this.join(s.slice(g, g + _.count)), g += _.count;
            else {
                if (!_.added && this.useLongestToken) {
                    let v = a.slice(b, b + _.count);
                    v = v.map(function(x, C) {
                        const E = s[g + C];
                        return E.length > x.length ? E : x;
                    }), _.value = this.join(v);
                } else _.value = this.join(a.slice(b, b + _.count));
                b += _.count, _.added || (g += _.count);
            }
        }
        return l;
    }
}, i(eGt, "Diff"), xAr = eGt;

}
