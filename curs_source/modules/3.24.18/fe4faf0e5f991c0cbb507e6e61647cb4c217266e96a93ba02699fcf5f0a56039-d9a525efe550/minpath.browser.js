import { i } from "./plugin-brand-icon.js";
function Fhr(r, e) {
    if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
    IJ(r);
    let a = 0, s = -1, l = r.length, u;
    if (e === void 0 || e.length === 0 || e.length > r.length) {
        for(; l--;)if (r.codePointAt(l) === 47) {
            if (u) {
                a = l + 1;
                break;
            }
        } else s < 0 && (u = !0, s = l + 1);
        return s < 0 ? "" : r.slice(a, s);
    }
    if (e === r) return "";
    let p = -1, m = e.length - 1;
    for(; l--;)if (r.codePointAt(l) === 47) {
        if (u) {
            a = l + 1;
            break;
        }
    } else p < 0 && (u = !0, p = l + 1), m > -1 && (r.codePointAt(l) === e.codePointAt(m--) ? m < 0 && (s = l) : (m = -1, s = p));
    return a === s ? s = p : s < 0 && (s = r.length), r.slice(a, s);
}
function Ohr(r) {
    if (IJ(r), r.length === 0) return ".";
    let e = -1, a = r.length, s;
    for(; --a;)if (r.codePointAt(a) === 47) {
        if (s) {
            e = a;
            break;
        }
    } else s || (s = !0);
    return e < 0 ? r.codePointAt(0) === 47 ? "/" : "." : e === 1 && r.codePointAt(0) === 47 ? "//" : r.slice(0, e);
}
function zhr(r) {
    IJ(r);
    let e = r.length, a = -1, s = 0, l = -1, u = 0, p;
    for(; e--;){
        const m = r.codePointAt(e);
        if (m === 47) {
            if (p) {
                s = e + 1;
                break;
            }
            continue;
        }
        a < 0 && (p = !0, a = e + 1), m === 46 ? l < 0 ? l = e : u !== 1 && (u = 1) : l > -1 && (u = -1);
    }
    return l < 0 || a < 0 || u === 0 || u === 1 && l === a - 1 && l === s + 1 ? "" : r.slice(l, a);
}
function Bhr(...r) {
    let e = -1, a;
    for(; ++e < r.length;)IJ(r[e]), r[e] && (a = a === void 0 ? r[e] : a + "/" + r[e]);
    return a === void 0 ? "." : qhr(a);
}
function qhr(r) {
    IJ(r);
    const e = r.codePointAt(0) === 47;
    let a = Uhr(r, !e);
    return a.length === 0 && !e && (a = "."), a.length > 0 && r.codePointAt(r.length - 1) === 47 && (a += "/"), e ? "/" + a : a;
}
function Uhr(r, e) {
    let a = "", s = 0, l = -1, u = 0, p = -1, m, b;
    for(; ++p <= r.length;){
        if (p < r.length) m = r.codePointAt(p);
        else {
            if (m === 47) break;
            m = 47;
        }
        if (m === 47) {
            if (!(l === p - 1 || u === 1)) if (l !== p - 1 && u === 2) {
                if (a.length < 2 || s !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
                    if (a.length > 2) {
                        if (b = a.lastIndexOf("/"), b !== a.length - 1) {
                            b < 0 ? (a = "", s = 0) : (a = a.slice(0, b), s = a.length - 1 - a.lastIndexOf("/")), l = p, u = 0;
                            continue;
                        }
                    } else if (a.length > 0) {
                        a = "", s = 0, l = p, u = 0;
                        continue;
                    }
                }
                e && (a = a.length > 0 ? a + "/.." : "..", s = 2);
            } else a.length > 0 ? a += "/" + r.slice(l + 1, p) : a = r.slice(l + 1, p), s = p - l - 1;
            l = p, u = 0;
        } else m === 46 && u > -1 ? u++ : u = -1;
    }
    return a;
}
function IJ(r) {
    if (typeof r != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
}
var vC;
export { Bhr, Fhr, IJ, Ohr, Uhr, qhr, vC, zhr };
var __wakaru_v4i_initialized = false;
export function v4i() {
if (__wakaru_v4i_initialized) return;
__wakaru_v4i_initialized = true;
vC = {
    basename: Fhr,
    dirname: Ohr,
    extname: zhr,
    join: Bhr,
    sep: "/"
}, i(Fhr, "basename"), i(Ohr, "dirname"), i(zhr, "extname"), i(Bhr, "join"), i(qhr, "normalize"), i(Uhr, "normalizeString"), i(IJ, "assertPath");

}
