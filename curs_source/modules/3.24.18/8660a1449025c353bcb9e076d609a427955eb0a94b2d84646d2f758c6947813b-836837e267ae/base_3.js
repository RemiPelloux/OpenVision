import { E } from "./tslib.es6.js";
var BOh;
export { BOh };
var __wakaru_e_S_initialized = false;
export function e_S() {
if (__wakaru_e_S_initialized) return;
__wakaru_e_S_initialized = true;
E(), BOh = class {
    diff(t, e, n = {}) {
        let i;
        typeof n == "function" ? (i = n, n = {}) : "callback" in n && (i = n.callback);
        const r = this.castInput(t, n), s = this.castInput(e, n), o = this.removeEmpty(this.tokenize(r, n)), a = this.removeEmpty(this.tokenize(s, n));
        return this.diffWithOptionsObj(o, a, n, i);
    }
    diffWithOptionsObj(t, e, n, i) {
        var r;
        const s = (b)=>{
            if (b = this.postProcess(b, n), i) {
                setTimeout(function() {
                    i(b);
                }, 0);
                return;
            } else return b;
        }, o = e.length, a = t.length;
        let l = 1, c = o + a;
        n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
        const u = (r = n.timeout) !== null && r !== void 0 ? r : 1 / 0, d = Date.now() + u, h = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ];
        let p = this.extractCommon(h[0], e, t, 0, n);
        if (h[0].oldPos + 1 >= a && p + 1 >= o) return s(this.buildValues(h[0].lastComponent, e, t));
        let g = -1 / 0, f = 1 / 0;
        const _ = ()=>{
            for(let b = Math.max(g, -l); b <= Math.min(f, l); b += 2){
                let y;
                const S = h[b - 1], k = h[b + 1];
                S && (h[b - 1] = void 0);
                let C = !1;
                if (k) {
                    const I = k.oldPos - b;
                    C = k && 0 <= I && I < o;
                }
                const T = S && S.oldPos + 1 < a;
                if (!C && !T) {
                    h[b] = void 0;
                    continue;
                }
                if (!T || C && S.oldPos < k.oldPos ? y = this.addToPath(k, !0, !1, 0, n) : y = this.addToPath(S, !1, !0, 1, n), p = this.extractCommon(y, e, t, b, n), y.oldPos + 1 >= a && p + 1 >= o) return s(this.buildValues(y.lastComponent, e, t)) || !0;
                h[b] = y, y.oldPos + 1 >= a && (f = Math.min(f, b - 1)), p + 1 >= o && (g = Math.max(g, b + 1));
            }
            l++;
        };
        if (i) (function b() {
            setTimeout(function() {
                if (l > c || Date.now() > d) return i(void 0);
                _() || b();
            }, 0);
        })();
        else for(; l <= c && Date.now() <= d;){
            const b = _();
            if (b) return b;
        }
    }
    addToPath(t, e, n, i, r) {
        const s = t.lastComponent;
        return s && !r.oneChangePerToken && s.added === e && s.removed === n ? {
            oldPos: t.oldPos + i,
            lastComponent: {
                count: s.count + 1,
                added: e,
                removed: n,
                previousComponent: s.previousComponent
            }
        } : {
            oldPos: t.oldPos + i,
            lastComponent: {
                count: 1,
                added: e,
                removed: n,
                previousComponent: s
            }
        };
    }
    extractCommon(t, e, n, i, r) {
        const s = e.length, o = n.length;
        let a = t.oldPos, l = a - i, c = 0;
        for(; l + 1 < s && a + 1 < o && this.equals(n[a + 1], e[l + 1], r);)l++, a++, c++, r.oneChangePerToken && (t.lastComponent = {
            count: 1,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1
        });
        return c && !r.oneChangePerToken && (t.lastComponent = {
            count: c,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1
        }), t.oldPos = a, l;
    }
    equals(t, e, n) {
        return n.comparator ? n.comparator(t, e) : t === e || !!n.ignoreCase && t.toLowerCase() === e.toLowerCase();
    }
    removeEmpty(t) {
        const e = [];
        for(let n = 0; n < t.length; n++)t[n] && e.push(t[n]);
        return e;
    }
    castInput(t, e) {
        return t;
    }
    tokenize(t, e) {
        return Array.from(t);
    }
    join(t) {
        return t.join("");
    }
    postProcess(t, e) {
        return t;
    }
    get useLongestToken() {
        return !1;
    }
    buildValues(t, e, n) {
        const i = [];
        let r;
        for(; t;)i.push(t), r = t.previousComponent, delete t.previousComponent, t = r;
        i.reverse();
        const s = i.length;
        let o = 0, a = 0, l = 0;
        for(; o < s; o++){
            const c = i[o];
            if (c.removed) c.value = this.join(n.slice(l, l + c.count)), l += c.count;
            else {
                if (!c.added && this.useLongestToken) {
                    let u = e.slice(a, a + c.count);
                    u = u.map(function(d, h) {
                        const p = n[l + h];
                        return p.length > d.length ? p : d;
                    }), c.value = this.join(u);
                } else c.value = this.join(e.slice(a, a + c.count));
                a += c.count, c.added || (l += c.count);
            }
        }
        return i;
    }
};

}
