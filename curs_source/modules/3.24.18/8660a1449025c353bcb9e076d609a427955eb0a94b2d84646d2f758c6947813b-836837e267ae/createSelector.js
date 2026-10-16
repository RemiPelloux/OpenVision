import { Oy, zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
var vc;
export { vc };
var __wakaru_$nt_initialized = false;
export function $nt() {
if (__wakaru_$nt_initialized) return;
__wakaru_$nt_initialized = true;
E(), zS(), vc = (t, e, n, i, r, s, ...o)=>{
    if (o.length > 0) throw new Error(process.env.NODE_ENV !== "production" ? "Unsupported number of selectors" : Oy(1));
    let a;
    if (t && e && n && i && r && s) a = (l, c, u, d)=>{
        const h = t(l, c, u, d), p = e(l, c, u, d), g = n(l, c, u, d), f = i(l, c, u, d), _ = r(l, c, u, d);
        return s(h, p, g, f, _, c, u, d);
    };
    else if (t && e && n && i && r) a = (l, c, u, d)=>{
        const h = t(l, c, u, d), p = e(l, c, u, d), g = n(l, c, u, d), f = i(l, c, u, d);
        return r(h, p, g, f, c, u, d);
    };
    else if (t && e && n && i) a = (l, c, u, d)=>{
        const h = t(l, c, u, d), p = e(l, c, u, d), g = n(l, c, u, d);
        return i(h, p, g, c, u, d);
    };
    else if (t && e && n) a = (l, c, u, d)=>{
        const h = t(l, c, u, d), p = e(l, c, u, d);
        return n(h, p, c, u, d);
    };
    else if (t && e) a = (l, c, u, d)=>{
        const h = t(l, c, u, d);
        return e(h, c, u, d);
    };
    else if (t) a = t;
    else throw new Error("Missing arguments");
    return a;
};

}
