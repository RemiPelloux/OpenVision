import { i } from "./plugin-brand-icon.js";
function Lhr() {
    const r = [], e = {
        run: a,
        use: s
    };
    return e;
    function a(...l) {
        let u = -1;
        const p = l.pop();
        if (typeof p != "function") throw new TypeError("Expected function as last argument, not " + p);
        m(null, ...l);
        function m(b, ...g) {
            const _ = r[++u];
            let v = -1;
            if (b) {
                p(b);
                return;
            }
            for(; ++v < l.length;)(g[v] === null || g[v] === void 0) && (g[v] = l[v]);
            l = g, _ ? Dhr(_, m)(...g) : p(null, ...g);
        }
        i(m, "next");
    }
    function s(l) {
        if (typeof l != "function") throw new TypeError("Expected `middelware` to be a function, not " + l);
        return r.push(l), e;
    }
}
function Dhr(r, e) {
    let a;
    return s;
    function s(...p) {
        const m = r.length > p.length;
        let b;
        m && p.push(l);
        try {
            b = r.apply(this, p);
        } catch (g) {
            const _ = g;
            if (m && a) throw _;
            return l(_);
        }
        m || (b && b.then && typeof b.then == "function" ? b.then(u, l) : b instanceof Error ? l(b) : u(b));
    }
    function l(p, ...m) {
        a || (a = !0, e(p, ...m));
    }
    function u(p) {
        l(null, p);
    }
}
export { Dhr, Lhr };
var __wakaru__4i_initialized = false;
export function _4i() {
if (__wakaru__4i_initialized) return;
__wakaru__4i_initialized = true;
i(Lhr, "trough"), i(Dhr, "wrap");

}
