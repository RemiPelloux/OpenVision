import { x } from "./tslib.es6.js";
var r2l;
export { r2l };
var __wakaru_orf_initialized = false;
export function orf() {
if (__wakaru_orf_initialized) return;
__wakaru_orf_initialized = true;
x(), r2l = class {
    diff(e, t, n = {}) {
        let i;
        typeof n == "function" ? (i = n, n = {}) : "callback" in n && (i = n.callback);
        const r = this.castInput(e, n), s = this.castInput(t, n), o = this.removeEmpty(this.tokenize(r, n)), a = this.removeEmpty(this.tokenize(s, n));
        return this.diffWithOptionsObj(o, a, n, i);
    }
    diffWithOptionsObj(e, t, n, i) {
        var r;
        const s = (y)=>{
            if (y = this.postProcess(y, n), i) {
                setTimeout(function() {
                    i(y);
                }, 0);
                return;
            } else return y;
        }, o = t.length, a = e.length;
        let c = 1, l = o + a;
        n.maxEditLength != null && (l = Math.min(l, n.maxEditLength));
        const u = (r = n.timeout) !== null && r !== void 0 ? r : 1 / 0, h = Date.now() + u, p = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ];
        let g = this.extractCommon(p[0], t, e, 0, n);
        if (p[0].oldPos + 1 >= a && g + 1 >= o) return s(this.buildValues(p[0].lastComponent, t, e));
        let f = -1 / 0, v = 1 / 0;
        const b = ()=>{
            for(let y = Math.max(f, -c); y <= Math.min(v, c); y += 2){
                let T;
                const E = p[y - 1], A = p[y + 1];
                E && (p[y - 1] = void 0);
                let R = !1;
                if (A) {
                    const P = A.oldPos - y;
                    R = A && 0 <= P && P < o;
                }
                const D = E && E.oldPos + 1 < a;
                if (!R && !D) {
                    p[y] = void 0;
                    continue;
                }
                if (!D || R && E.oldPos < A.oldPos ? T = this.addToPath(A, !0, !1, 0, n) : T = this.addToPath(E, !1, !0, 1, n), g = this.extractCommon(T, t, e, y, n), T.oldPos + 1 >= a && g + 1 >= o) return s(this.buildValues(T.lastComponent, t, e)) || !0;
                p[y] = T, T.oldPos + 1 >= a && (v = Math.min(v, y - 1)), g + 1 >= o && (f = Math.max(f, y + 1));
            }
            c++;
        };
        if (i) (function y() {
            setTimeout(function() {
                if (c > l || Date.now() > h) return i(void 0);
                b() || y();
            }, 0);
        })();
        else for(; c <= l && Date.now() <= h;){
            const y = b();
            if (y) return y;
        }
    }
    addToPath(e, t, n, i, r) {
        const s = e.lastComponent;
        return s && !r.oneChangePerToken && s.added === t && s.removed === n ? {
            oldPos: e.oldPos + i,
            lastComponent: {
                count: s.count + 1,
                added: t,
                removed: n,
                previousComponent: s.previousComponent
            }
        } : {
            oldPos: e.oldPos + i,
            lastComponent: {
                count: 1,
                added: t,
                removed: n,
                previousComponent: s
            }
        };
    }
    extractCommon(e, t, n, i, r) {
        const s = t.length, o = n.length;
        let a = e.oldPos, c = a - i, l = 0;
        for(; c + 1 < s && a + 1 < o && this.equals(n[a + 1], t[c + 1], r);)c++, a++, l++, r.oneChangePerToken && (e.lastComponent = {
            count: 1,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        });
        return l && !r.oneChangePerToken && (e.lastComponent = {
            count: l,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        }), e.oldPos = a, c;
    }
    equals(e, t, n) {
        return n.comparator ? n.comparator(e, t) : e === t || !!n.ignoreCase && e.toLowerCase() === t.toLowerCase();
    }
    removeEmpty(e) {
        const t = [];
        for(let n = 0; n < e.length; n++)e[n] && t.push(e[n]);
        return t;
    }
    castInput(e, t) {
        return e;
    }
    tokenize(e, t) {
        return Array.from(e);
    }
    join(e) {
        return e.join("");
    }
    postProcess(e, t) {
        return e;
    }
    get useLongestToken() {
        return !1;
    }
    buildValues(e, t, n) {
        const i = [];
        let r;
        for(; e;)i.push(e), r = e.previousComponent, delete e.previousComponent, e = r;
        i.reverse();
        const s = i.length;
        let o = 0, a = 0, c = 0;
        for(; o < s; o++){
            const l = i[o];
            if (l.removed) l.value = this.join(n.slice(c, c + l.count)), c += l.count;
            else {
                if (!l.added && this.useLongestToken) {
                    let u = t.slice(a, a + l.count);
                    u = u.map(function(h, p) {
                        const g = n[c + p];
                        return g.length > h.length ? g : h;
                    }), l.value = this.join(u);
                } else l.value = this.join(t.slice(a, a + l.count));
                a += l.count, l.added || (c += l.count);
            }
        }
        return i;
    }
};

}
