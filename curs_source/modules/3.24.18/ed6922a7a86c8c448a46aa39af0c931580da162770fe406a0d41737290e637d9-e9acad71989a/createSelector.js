import { Eb, p_ } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
var ic;
export { ic };
var __wakaru_H5e_initialized = false;
export function H5e() {
if (__wakaru_H5e_initialized) return;
__wakaru_H5e_initialized = true;
x(), Eb(), ic = (e, t, n, i, r, s, ...o)=>{
    if (o.length > 0) throw new Error(process.env.NODE_ENV !== "production" ? "Unsupported number of selectors" : p_(1));
    let a;
    if (e && t && n && i && r && s) a = (c, l, u, h)=>{
        const p = e(c, l, u, h), g = t(c, l, u, h), f = n(c, l, u, h), v = i(c, l, u, h), b = r(c, l, u, h);
        return s(p, g, f, v, b, l, u, h);
    };
    else if (e && t && n && i && r) a = (c, l, u, h)=>{
        const p = e(c, l, u, h), g = t(c, l, u, h), f = n(c, l, u, h), v = i(c, l, u, h);
        return r(p, g, f, v, l, u, h);
    };
    else if (e && t && n && i) a = (c, l, u, h)=>{
        const p = e(c, l, u, h), g = t(c, l, u, h), f = n(c, l, u, h);
        return i(p, g, f, l, u, h);
    };
    else if (e && t && n) a = (c, l, u, h)=>{
        const p = e(c, l, u, h), g = t(c, l, u, h);
        return n(p, g, l, u, h);
    };
    else if (e && t) a = (c, l, u, h)=>{
        const p = e(c, l, u, h);
        return t(p, l, u, h);
    };
    else if (e) a = e;
    else throw new Error("Missing arguments");
    return a;
};

}
