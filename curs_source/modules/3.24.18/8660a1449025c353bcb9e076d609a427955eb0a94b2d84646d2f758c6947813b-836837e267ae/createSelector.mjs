import { fKe, vKe } from "./formatErrorMessage.mjs";
import { E } from "./tslib.es6.js";
var Gx;
export { Gx };
var __wakaru_Epw_initialized = false;
export function Epw() {
if (__wakaru_Epw_initialized) return;
__wakaru_Epw_initialized = true;
E(), vKe(), Gx = (t, e, n, i, r, s, ...o)=>{
    if (o.length > 0) throw new Error(process.env.NODE_ENV !== "production" ? "Unsupported number of selectors" : fKe(1));
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
